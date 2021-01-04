<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\User\RenewSubscriptionRequest;
use App\Models\BillingInfo;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\EmailsService;
use App\Services\PaceFuzePaymentApiService;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class SubscriptionsController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
        $this->EmailsService = new EmailsService;
    }


    public function cancellationOfSunclubMembership(Request $request)
    {

        if (Auth::user()->customer_role == 2) {
            $member = SubscriptionSunclubMember::where('user_id', Auth::user()->id)->first();
            $member->is_cancelled = 1;
            $member->save();
            $request->session()->flash('flash_success', "Sunclub Membership Cancellation Success");
            return url('/myprofile');
        } else {
            $request->session()->flash('flash_danger', "Unauthorized");
            return url('/myprofile');
        }
    }

    public function renewSunclubSubscriptions(RenewSubscriptionRequest $request)
    {

        DB::beginTransaction();

        $userBilling =  BillingInfo::where('user_id', Auth::user()->id)->first();
        $member = SubscriptionSunclubMember::where('user_id', Auth::user()->id)
            ->where('status', '2')
            ->first();
        $sunclub_choice_id = $member->subscription_sunclub_choice_id;
        $sunclubChoice = SubscriptionSunclubChoice::find($sunclub_choice_id);
        $email = Auth::user()->email;
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
                $record->user_id = Auth::user()->id;
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

                return redirect()->back()->withFlashSuccess("Success");
            } else {
                DB::rollBack();
                // $data = $cctokenSale_decoded['ResultDetail'];
                // return response()->json([
                //     "data_message" => $data
                // ], 422);
                return redirect()->back()->withFlashDanger($cctokenSale_decoded['ResultDetail']);
            }
        }
        //ACH Token
        else {

            $ACHtokenSale = $this->PacePayment->ProcessACHTokenSale(
                $userBilling->Token,
                $sunclubChoice->price,
                $email,
                $userBilling->Token_SF,
            );
            $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);
            if ($ACHtokenSale_decoded['ResultCode'] == 0) {

                $member->start = $start;
                $member->end = $end;
                $member->subscription_sunclub_choice_id = $sunclub_choice_id;
                $member->status = 1;
                $member->save();

                $record = new SubscriptionSunclubRecord();
                $record->user_id = Auth::user()->id;
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

                return redirect()->back()->withFlashSuccess("Success");
            } else {
                DB::rollBack();
                // $data = $ACHtokenSale_decoded['ResultDetail'];
                // return response()->json([
                //     "data_message" => $data
                // ], 422);
                return redirect()->back()->withFlashDanger($ACHtokenSale_decoded['ResultDetail']);
            }
        }
    }
}
