<?php

namespace App\Console\Commands;

use App\Events\Frontend\Auth\UserLoggedOut;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubFailRenew;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Services\EmailsService;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class EmailExpirationNotifCommand extends Command
{

    protected $signature = 'sunfarmacy:warning-expiration-email';
    protected $description = 'Email Notification before Expiration if membership will continue';

    public function __construct()
    {
        parent::__construct();
        $this->EmailsService = new EmailsService;
        $this->PacePayment = new PaceFuzePaymentApiService;
    }

    public function handle()
    {

        $days_before_expiration_warning = 3;
        $now = Carbon::now()->setTime(0, 0, 0);
        print(Carbon::now()->format('F d, Y [ h:i A ]'));
        print("\nStart Sending Sunfarmacy Warning Expiration Email");
        // $users = User::where('customer_role','2')->get();

        $members = SubscriptionSunclubMember::where('status', '1')->get();

        foreach ($members as $key => $member) {

            $expiration_date = Carbon::parse($member->end)->setTime(0, 0, 0);
            $warning_date = Carbon::parse($member->end)->subDays($days_before_expiration_warning)->setTime(0, 0, 0);
            $user = User::find($member->user_id);
            if ($now == $warning_date) {
                print("\n * sending email to customer:" . $user->full_name);
                $this->EmailsService
                    ->sendExpirationWarning(
                        $user,
                        $expiration_date->format('F d, Y')
                    );
            }


            if ($now >= $expiration_date) {
                // set member subcription to expired
                if (!empty($member->current_sunclub_record_id)) {
                    if ($member->is_cancelled == 1) {
                        print("\n * canceling");
                        $member->status = 2;
                        $member->save();
                        $record = SubscriptionSunclubRecord::find($member->current_sunclub_record_id);
                        $record->status = 2;
                        $record->save();
                        print("\n\t - cancelled & expired:" . $user->full_name);
                    } else {
                        print("\n * renewing subscription:" . $user->full_name);
                        $record = SubscriptionSunclubRecord::find($member->current_sunclub_record_id);
                        $record->status = 2;
                        $record->save();
                        $res = $this->renewSunclubSubscriptions($user);
                        if ($res == 'success') {
                            print("\n\t - renew: " .  $res);
                        } else {
                            $member->status = 2;
                            $member->is_cancelled = 1;
                            $member->save();
                            print("\n\t - fail: " .  $res);
                            $fail = new SubscriptionSunclubFailRenew;
                            $fail->user_id = $member->user_id;
                            $fail->sunclub_member_id = $member->id;
                            $fail->current_sunclub_record_id = $member->current_sunclub_record_id;;
                            $fail->message = $res;
                            $fail->save();
                        }
                    }
                }
            }
        }
        // $this->EmailsService->test($now->format('F d, Y'));
        print("\n");
    }


    public function renewSunclubSubscriptions($user)
    {

        DB::beginTransaction();

        $userBilling =  BillingInfo::where('user_id', $user->id)->first();
        $member = SubscriptionSunclubMember::where('user_id', $user->id)->first();
        $sunclub_choice_id = $member->subscription_sunclub_choice_id;
        $sunclubChoice = SubscriptionSunclubChoice::find($sunclub_choice_id);
        $email = $user->email;
        $start =  Carbon::now();
        $now = Carbon::now();
        $end = $now->addMonths(12);



        //CC Token
        if ($userBilling->CC_or_ACH == 'CC') {

            $cctokenSale = $this->PacePayment->ProcessCCTokenSale(
                $userBilling->CardType,
                $userBilling->Token,
                $sunclubChoice->price,
                $userBilling->CVV,
                'T0250605-0010000-00000000',
                $email,
                $userBilling->Token_SF
            );

            $cctokenSale_decoded = json_decode($cctokenSale, true);
            if ($cctokenSale_decoded['ResultCode'] == 0) {


                $member->start = $start;
                $member->end = $end;
                $member->subscription_sunclub_choice_id = $sunclub_choice_id;
                $member->status = 1;
                $member->save();

                $record = new SubscriptionSunclubRecord();
                $record->user_id = $user->id;
                $record->subscription_sunclub_member_id = $member->id;
                $record->CC_or_ACH = "CC";
                $record->amount =  $sunclubChoice->price;
                $record->Token = $userBilling->Token;
                $record->TransRefID = $cctokenSale_decoded['TransRefID'];
                $record->FuzeID = $cctokenSale_decoded['FuzeID'];
                $record->ApprovalCode = $cctokenSale_decoded['ApprovalCode'];
                $record->start =  $start;
                $record->end = $end;
                $record->save();

                $member->current_sunclub_record_id =  $record->id;
                $member->is_cancelled =  0;
                $member->save();



                DB::commit();

                return 'success';
            } else {
                DB::rollBack();
                return $cctokenSale_decoded['ResultDetail'];
            }
        }
        //ACH Token
        else {

            $ACHtokenSale = $this->PacePayment->ProcessACHTokenSale(
                $userBilling->Token,
                $sunclubChoice->price,
                $email,
                $userBilling->Token_SF
            );
            $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);
            if ($ACHtokenSale_decoded['ResultCode'] == 0) {

                $member->start = $start;
                $member->end = $end;
                $member->subscription_sunclub_choice_id = $sunclub_choice_id;
                $member->status = 1;
                $member->save();

                $record = new SubscriptionSunclubRecord();
                $record->user_id = $user->id;
                $record->subscription_sunclub_member_id = $member->id;
                $record->CC_or_ACH = "ACH";
                $record->amount =  $sunclubChoice->price;
                $record->Token = $userBilling->Token;
                $record->TransRefID = $ACHtokenSale_decoded['TransRefID'];
                $record->FuzeID = $ACHtokenSale_decoded['FuzeID'];
                $record->ApprovalCode = $ACHtokenSale_decoded['ApprovalCode'];
                $record->start =  $start;
                $record->end = $end;
                $record->save();

                $member->current_sunclub_record_id =  $record->id;
                $member->is_cancelled =  0;
                $member->save();


                DB::commit();

                return 'success';
            } else {
                DB::rollBack();
                return $ACHtokenSale_decoded['ResultDetail'];
            }
        }
    }
}
