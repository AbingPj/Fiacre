<?php

namespace App\Console\Commands;

use App\Models\Auth\User;
use App\Models\UserRecurringProduct;
use App\Models\UserRecurringSettings;
use Illuminate\Console\Command;
use App\Services\EmailsService;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Organization;
use App\Models\Product;
use App\Models\BillingInfo;
use App\Models\FiacreCustomerPaymentRecord;
use App\Models\OrderedProductWeek;
use App\Models\ProductSubscriptionOrdered;
use App\Models\Cart;
use App\Models\UserRecurringScheduleSuccess;
use App\Models\UserRecurringScheduleCancel;
use Illuminate\Support\Facades\DB;


class RecurringProductsOrderCommand extends Command
{
    protected $signature = 'fiacre:recurring-order-run';
    protected $description = 'Fiacre order for recurring product.';

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        print(Carbon::now()->format('F d, Y [ h:i A ]'));
        print("\nStart Recurring");
        $now = Carbon::now();
        $nowFormat = $now->format('Y-m-d');
        print("\nnowFormat: $nowFormat");
        print("\n");
        $userRecurringDates = UserRecurringSettings::where('stop_recurring', 0)->get();
        foreach ($userRecurringDates as $key => $value) {

            $date = new Carbon($value->incoming_date);
            $format = $date->format('Y-m-d');

            if ($format == $nowFormat) {
                $cancel = UserRecurringScheduleCancel::where('user_id', $value->user_id)
                    ->where('org_id', $value->org_id)
                    ->whereDate('date',  $format)
                    ->first();
                if (!empty($cancel)) {
                    $user =  user::find($value->user_id);
                    print("\n * Cancel Recurring Order schedule in [ $format ], for $user->fullname");
                } else {
                    $this->checkRecurringProducts($value->user_id, $value->org_id, $value->is_pickup);
                }
                print("\n");
            } else {
                print("\n * not now");
                print("\n");
            }
        }
    }

    public function checkRecurringProducts($user_id, $org_id, $is_pickup)
    {
        $products = UserRecurringProduct::where('user_id', $user_id)
            ->where('org_id', $org_id)
            ->get();
        // foreach ($products as $key => $value) {
        //     $value->product_current_details = json_decode($value->product_current_details);
        // }
        if (empty($products)) {
            print("\n No recurring products enabled. Stop process.");
        } else {
            $user =  user::find($user_id);
            $org = Organization::find($org_id);
            if (!empty($user)) {
                if (!empty($org)) {
                    $this->fiacreCustomerPlaceOrder($user_id, $org_id, $products, $is_pickup);
                } else {
                    print("\n Organization ID Not Found");
                }
            } else {
                print("\n User ID Not Found");
            }
        }
    }

    public function fiacreCustomerPlaceOrder($_user_id, $_org_id, $recurring_products, $is_pickup)
    {

        $user =  user::find($_user_id);
        $org = Organization::find($_org_id);
        print("\n * Creating order for $user->fullname");

        $PACEPAYMENT = new PaceFuzePaymentApiService;

        if (!empty($recurring_products)) {
            DB::beginTransaction();
            // $ordered_products = $request->cart;

            $order = new Order;
            $order->store_id = 1;
            $order->order_by = $user->id;
            $order->date = Carbon::now();
            $order->discount_percentage = 0;
            $order->delivery_fee = 0;
            $order->additional_charge = 0;
            $order->is_pickup = $is_pickup;
            $order->organization_id = $org->id;
            $userBilling =  BillingInfo::where('user_id', $user->id)->first();
            $order->billing_type = $userBilling->CC_or_ACH;
            if ($order->billing_type == "CC") {
                $order->billing_type_percentage = 3;
            } else {
                $order->billing_type_percentage = 2;
            }

            $order->referral_amount =  0;
            $order->save();


            $totalAmount = 0;
            foreach ($recurring_products as $key => $cart) {
                $orderproduct = new OrderProduct;
                $orderproduct->order_id = $order->id;
                $orderproduct->product_id = $cart->product_id;
                $orderproduct->organization_id = $org->id; // new


                $product = Product::find($cart->product_id);

                if (!empty($product)) {

                    $PROD_DETAILS_DECODED = json_decode($cart->product_current_details);

                    if ($product->is_bundle == 1) {
                        $orderproduct->price = $PROD_DETAILS_DECODED->price;
                        $orderproduct->is_bundle = 1;
                        $orderproduct->bundle_percentage = $product->bundle_percentage;
                    } else {
                        $orderproduct->price = $product->price;
                    }
                    $orderproduct->fundraise_percentage = $product->fundraise_percentage;
                    $orderproduct->quantity = $cart->qty;
                    $orderproduct->order_by = $user->id;
                    $orderproduct->updated_quantity = $cart->qty;


                    $orderproduct->is_subscription = 0;
                    $orderproduct->subscription_weeks = 0;
                    $orderproduct->subscription_price = 0;


                    $orderproduct->product_details = $cart->product_current_details;
                    $orderproduct->original_bundle_details = $cart->product_original_details;

                    $orderproduct->save();

                    if ($orderproduct->is_subscription) {
                        $totalAmount =  $totalAmount + $orderproduct->subscription_price;
                    } else {
                        $totalAmount =  $totalAmount + ($orderproduct->price  * $orderproduct->updated_quantity);
                    }

                    $orderproduct->order_id = $order->id;
                    $orderproduct->product_id = $cart->product_id;
                    $orderproduct->organization_id = $org->id; // n

                    // $tax =  $tax + ($orderproduct->tax_amount  * $value['qty']);
                }
            }

            // dump($totalAmount);
            $totalAmountForEmail = $totalAmount;
            $billing_method_price  = $totalAmount * ($order->billing_type_percentage / 100);
            $totalAmount = $totalAmount + $billing_method_price;
            $totalAmount = $totalAmount - $order->referral_amount;

            if ($totalAmount >= 0) {
                //CC Token
                if ($userBilling->CC_or_ACH == 'CC') {
                    $email = $user->email;
                    $cctokenSale = $PACEPAYMENT->ProcessCCTokenSale(
                        $userBilling->CardType,
                        $userBilling->Token,
                        $totalAmount,
                        $userBilling->CVV,
                        '-',
                        $email,
                        $userBilling->Token_SF
                    );
                    $cctokenSale_decoded = json_decode($cctokenSale, true);
                    if ($cctokenSale_decoded['ResultCode'] == 0) {
                        $this->RecordCustomerPayment("CC", $order->id, $userBilling, $totalAmount, $cctokenSale_decoded, $user);
                        $this->successRecurring($user->id, $org->id, $order->id);
                        $this->updatedUserRecurringSettings($user->id, $org->id);
                        DB::commit();
                        $this->emailOrderDetails($order->id, $user);
                        print("\n Success!, Order id: $order->id");
                    } else {
                        DB::rollBack();
                        $data = $cctokenSale_decoded['ResultDetail'];
                        print("\n Fail: $data");
                    }
                }
                //ACH Token
                else {
                    $email = $user->email;
                    $ACHtokenSale = $PACEPAYMENT->ProcessACHTokenSale(
                        $userBilling->Token,
                        $totalAmount,
                        $email,
                        $userBilling->Token_SF,
                    );
                    $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);
                    if ($ACHtokenSale_decoded['ResultCode'] == 0) {
                        $this->RecordCustomerPayment("ACH", $order->id, $userBilling, $totalAmount, $ACHtokenSale_decoded, $user);
                        $this->successRecurring($user->id, $org->id, $order->id);
                        $this->updatedUserRecurringSettings($user->id, $org->id);
                        DB::commit();
                        $this->emailOrderDetails($order->id, $user);
                        print("\n Success!, Order id: $order->id");
                    } else {
                        DB::rollBack();
                        $data = $ACHtokenSale_decoded['ResultDetail'];
                        print("\n Fail: $data");
                    }
                }
            }
        } else {
            print("\n Empty Recurring Products");
        }
    }


    public function RecordCustomerPayment($cc_or_ach, $order_id, $userBilling, $totalAmount, $pace, $user)
    {
        $record = new FiacreCustomerPaymentRecord();
        $record->user_id = $user->id;
        $record->order_id = $order_id;
        $record->billing_infos_id = $userBilling->id;
        // $record->CC_or_ACH = "CC";
        $record->CC_or_ACH = $cc_or_ach;;
        $record->amount = $totalAmount;
        $record->Token =  $userBilling->Token;
        $record->Token_SF =  $userBilling->Token_SF;
        $record->TransRefID = $pace['TransRefID'];
        $record->FuzeID = $pace['FuzeID'];
        $record->ApprovalCode = $pace['ApprovalCode'];
        $record->save();
    }

    public function emailOrderDetails($order_id, $user)
    {

        $userClass = new \stdClass;
        $userClass->full_name = $user->full_name;
        $userClass->email = $user->email;
        $order_prododucts2 = OrderProduct::where('order_id', $order_id)->get();

        $EmailsService = new EmailsService;
        $EmailsService->orderReceipt3($userClass, $order_prododucts2, $order_id);
    }

    public function successRecurring($user_id, $org_id, $order_id)
    {
        $success = new UserRecurringScheduleSuccess;
        $success->user_id = $user_id;
        $success->org_id = $org_id;
        $success->order_id = $order_id;
        $success->date = Carbon::now();
        $success->save();
    }

    public function updatedUserRecurringSettings($user_id, $org_id)
    {
        $userRecurringSettings = UserRecurringSettings::where('user_id', $user_id)->where('org_id', $org_id)->first();
        if (!empty($userRecurringSettings)) {
            $date = new Carbon($userRecurringSettings->incoming_date);
            $userRecurringSettings->incoming_date = $date->addWeek(1);
            $userRecurringSettings->save();
        }else{
            print("\n Recurring Settings not found| uid:$user_id, oid:$org_id");
        }
    }
}
