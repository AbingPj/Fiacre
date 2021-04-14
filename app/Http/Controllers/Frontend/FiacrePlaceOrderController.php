<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Organization;
use App\Models\OrderProductBundle;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\BillingInfo;
use App\Models\FiacreCustomerPaymentRecord;
use App\Models\OrderedProductWeek;
use App\Models\ProductSubscriptionOrdered;
use App\Models\Cart;
use App\Services\EmailsService;
use App\Services\PaceFuzePaymentApiService;
use App\Services\TotalViewService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class FiacrePlaceOrderController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
        $this->EmailsService = new EmailsService;
    }

    public function testDate()
    {

        $user_referral_details = Auth::user()->getUserReferralCodeDetails();
        dd($user_referral_details->total_user_refferal_amount);

        return response()->json(Auth::user()->getUserReferralCodeDetails(), 200);

        $sample = Carbon::now()
            ->next(0);

        $start =  Carbon::parse('2/22/21');
        $now = Carbon::now();
        $end =  Carbon::parse('2/14/22');
        // dump($start);
        // dump($end);
        $weeks = $now->diffInWeeks($end);

        dd($weeks);

        for ($i = 0; $i < 10; $i++) {
            dump($sample);
            $sample->addDays(7);
        }
        dd($sample);
    }


    // public function testDate()
    // {
    //     $sample = Carbon::now()
    //         ->next(0);

    //     $start =  Carbon::parse('2/22/21');
    //     $now = Carbon::now();
    //     $end =  Carbon::parse('2/14/22');
    //     // dump($start);
    //     // dump($end);
    //     $weeks = $now->diffInWeeks($end);

    //     dd($weeks);

    //     for ($i = 0; $i < 10; $i++) {
    //         dump($sample);
    //         $sample->addDays(7);
    //     }
    //     dd($sample);
    // }

    public function fiacreCustomerPlaceOrder(Request $request)
    {
        \App\Services\TotalViewService::getView("Place Order Fiacre");
        if (Auth::guest() == false) {
            if (auth()->user()->isFiacreCustomerRole()) {

                $usercart = Cart::where('user_id', Auth::user()->id)->where('org_id', $request->org_id)->get();
                if (!empty($usercart)) {
                    DB::beginTransaction();
                    // $ordered_products = $request->cart;
                    $org = Organization::find($request->org_id);
                    $order = new Order;
                    $order->store_id = 1;
                    $order->order_by = Auth::user()->id;
                    $order->date = Carbon::now();
                    $order->discount_percentage = 0;
                    $order->delivery_fee = 0;
                    $order->additional_charge = 0;
                    $order->is_pickup = 1;
                    $order->organization_id = $org->id;

                    $userBilling =  BillingInfo::where('user_id', Auth::user()->id)->first();
                    $order->billing_type = $userBilling->CC_or_ACH;
                    if ($order->billing_type == "CC") {
                        $order->billing_type_percentage = 3;
                    } else {
                        $order->billing_type_percentage = 2;
                    }

                    $user_referral_details = Auth::user()->getUserReferralCodeDetails();
                    Auth::user()->setUserReferralCodesFromSuccessToUsed();

                    $order->referral_amount =  $user_referral_details->total_user_refferal_amount;



                    $order->save();
                    $totalAmount = 0;

                    foreach ($usercart as $key => $cart) {
                        $orderproduct = new OrderProduct;
                        $orderproduct->order_id = $order->id;
                        $orderproduct->product_id = $cart->product_id;
                        $orderproduct->organization_id = $org->id; // new


                        $product = Product::find($cart->product_id);

                        if (!empty($product)) {

                            if ($product->ifUserIsAlreadySubscribe($org->id, Auth::user()->id)) {
                                DB::rollBack();
                                $errmsg = "Product [ " . $product->name . " ] Is Already Subscribed";
                                return response()->json([
                                    "data_message" => $errmsg
                                ], 422);
                            }
                            if ($product->isNoSubscriptionAvailable($org->id)) {
                                DB::rollBack();
                                $errmsg = "No Subscription Available for Product [ " . $product->name . " ].";
                                return response()->json([
                                    "data_message" => $errmsg
                                ], 422);
                            }


                            if ($product->is_bundle == 1) {
                                // $orderproduct->price = $product->getBundlePrice('retailer');
                                // $orderproduct->price = round($product->getBundlePrice('retailer'), 2);
                                $orderproduct->price = $cart->atr_details->price;
                                $orderproduct->is_bundle = 1;
                                $orderproduct->bundle_percentage = $product->bundle_percentage;
                            } else {
                                $orderproduct->price = $product->price;
                            }
                            $orderproduct->fundraise_percentage = $product->fundraise_percentage;
                            $orderproduct->quantity = $cart->qty;
                            $orderproduct->order_by = Auth::user()->id;
                            $orderproduct->updated_quantity = $cart->qty;



                            //subscription
                            $weeks = $product->getSubcriptionWeeks($org->id);
                            $day = $product->getSubscriptionDay($org->id);
                            $prodSub_id = $product->getSubscriptionId($org->id);


                            if ($weeks == '-') {
                                $orderproduct->is_subscription = 0;
                                $orderproduct->subscription_weeks = 0;
                                $orderproduct->subscription_price = 0;
                            } else {
                                $orderproduct->is_subscription = 1;
                                $orderproduct->subscription_weeks = $weeks;
                                $subscription_price = $orderproduct->price * $weeks;
                                $orderproduct->subscription_price = round($subscription_price, 2);
                                $orderproduct->subscription_day = $day;
                            }

                            $orderproduct->product_details = $cart->details;
                            $orderproduct->original_bundle_details = $cart->original_selected_products;
                            //  // tax
                            //  $orderproduct->tax_percentage = $product->atr_tax_percentage;
                            //  $orderproduct->tax_amount = $product->atr_tax_amount_sc;

                            $orderproduct->save();


                            if ($orderproduct->is_subscription) {

                                // $firstDay = Carbon::now()->next($orderproduct->subscription_day);
                                $firstDay = $product->getSubscriptionFirstDay($org->id);

                                $lastDay = null;
                                $ProdSubOrdered = new ProductSubscriptionOrdered;
                                $ProdSubOrdered->product_subscription_id = $prodSub_id;
                                $ProdSubOrdered->order_by = Auth::user()->id;
                                $ProdSubOrdered->ordered_product_id = $orderproduct->id;
                                $ProdSubOrdered->organization_id = $org->id;
                                $ProdSubOrdered->order_id = $order->id;
                                $ProdSubOrdered->product_id = $product->id;
                                $ProdSubOrdered->start_date = $firstDay;
                                $ProdSubOrdered->number_of_weeks = $orderproduct->subscription_weeks;
                                $ProdSubOrdered->day = $day;
                                $ProdSubOrdered->save();

                                for ($i = 0; $i < $orderproduct->subscription_weeks; $i++) {
                                    $lastDay =  $firstDay;
                                    $OPW = new OrderedProductWeek;
                                    $OPW->order_id = $order->id;
                                    $OPW->order_product_id = $orderproduct->id;
                                    $OPW->organization_id = $org->id;
                                    $OPW->order_by = Auth::user()->id;
                                    $num = $i;
                                    $OPW->weeknumber = $num + 1;
                                    $OPW->date = $firstDay;
                                    $OPW->product_subscription_ordered_id = $ProdSubOrdered->id;
                                    $OPW->save();
                                    $firstDay->addDays(7);
                                }
                                $ProdSubOrdered->end_date = $lastDay;
                                $ProdSubOrdered->save();
                            }

                            if ($orderproduct->is_subscription) {
                                $totalAmount =  $totalAmount + $orderproduct->subscription_price;
                            } else {
                                $totalAmount =  $totalAmount + ($orderproduct->price  * $orderproduct->updated_quantity);
                            }

                            // $tax =  $tax + ($orderproduct->tax_amount  * $value['qty']);

                        }
                    }



                    // dump($totalAmount);
                    $totalAmountForEmail = $totalAmount;
                    $billing_method_price  = $totalAmount * ($order->billing_type_percentage / 100);
                    $totalAmount = $totalAmount + $billing_method_price;

                    if ($order->referral_amount >= $totalAmount) {
                        DB::rollBack();
                        return response()->json([
                            "data_message" => "Order Amount must be heigher than Referral Amount. Please shop more."
                        ], 422);
                    }


                    $totalAmount = $totalAmount - $order->referral_amount;

                    Cart::where('user_id', Auth::user()->id)->where('org_id', $request->org_id)->delete();
                    // DB::rollBack();
                    // return response()->json([
                    //     "data_message" => "testing"
                    // ], 422);
                    // DB::commit();
                    // total amount + tax
                    // dd($totalAmount);

                    // dd($totalAmount);



                    if ($totalAmount >= 0) {
                        //CC Token
                        if ($userBilling->CC_or_ACH == 'CC') {
                            $email = Auth::user()->email;
                            $cctokenSale = $this->PacePayment->ProcessCCTokenSale(
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
                                // save user Subscription
                                // dd($user_subs->id);
                                $record = new FiacreCustomerPaymentRecord();
                                $record->user_id =  Auth::user()->id;
                                $record->order_id = $order->id;
                                $record->billing_infos_id = $userBilling->id;
                                $record->CC_or_ACH = "CC";
                                $record->amount = $totalAmount;
                                $record->Token =  $userBilling->Token;
                                $record->Token_SF =  $userBilling->Token_SF;
                                $record->TransRefID = $cctokenSale_decoded['TransRefID'];
                                $record->FuzeID = $cctokenSale_decoded['FuzeID'];
                                $record->ApprovalCode = $cctokenSale_decoded['ApprovalCode'];
                                $record->save();

                                DB::commit();

                                $user = new \stdClass;
                                $user->full_name = Auth::user()->full_name;
                                $user->email = Auth::user()->email;

                                $order_prododucts2 = OrderProduct::where('order_id', $order->id)->get();

                                $this->EmailsService
                                    ->orderReceipt2(
                                        $user,
                                        $totalAmountForEmail,
                                        $totalAmount,
                                        $order_prododucts2,
                                        $order->date,
                                        $order->id,
                                        $billing_method_price,
                                        $order->billing_type
                                    );

                                $data = "success";
                                return response()->json($data, 200);
                            } else {
                                DB::rollBack();
                                $data = $cctokenSale_decoded['ResultDetail'];

                                return response()->json([
                                    "data_message" => $data
                                ], 422);
                            }
                        }
                        //ACH Token
                        else {

                            $email = Auth::user()->email;

                            $ACHtokenSale = $this->PacePayment->ProcessACHTokenSale(
                                $userBilling->Token,
                                $totalAmount,
                                $email,
                                $userBilling->Token_SF,
                            );

                            $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);

                            if ($ACHtokenSale_decoded['ResultCode'] == 0) {
                                $record = new FiacreCustomerPaymentRecord();
                                $record->user_id =  Auth::user()->id;
                                $record->order_id = $order->id;
                                $record->billing_infos_id = $userBilling->id;
                                $record->CC_or_ACH = "ACH";
                                $record->amount = $totalAmount;
                                $record->Token =  $userBilling->Token;
                                $record->Token_SF =  $userBilling->Token_SF;
                                $record->TransRefID = $ACHtokenSale_decoded['TransRefID'];
                                $record->FuzeID = $ACHtokenSale_decoded['FuzeID'];
                                $record->ApprovalCode = $ACHtokenSale_decoded['ApprovalCode'];
                                $record->save();
                                DB::commit();

                                $user = new \stdClass;
                                $user->full_name = Auth::user()->full_name;
                                $user->email = Auth::user()->email;

                                $order_prododucts2 = OrderProduct::where('order_id', $order->id)->get();

                                $this->EmailsService
                                    ->orderReceipt2(
                                        $user,
                                        $totalAmountForEmail,
                                        $totalAmount,
                                        $order_prododucts2,
                                        $order->date,
                                        $order->id,
                                        $billing_method_price,
                                        $order->billing_type
                                    );

                                $data = "success";
                                return response()->json($data, 200);
                            } else {
                                DB::rollBack();
                                $data = $ACHtokenSale_decoded['ResultDetail'];
                                return response()->json([
                                    "data_message" => $data
                                ], 422);
                            }
                        }
                    }
                } else {
                    return response()->json("Empty Cart.", 400);
                }
            } else {
                return response()->json("You do not have access to do that.", 400);
            };
        } else {
            return response()->json("Unauthorozid", 400);
        }
    }
}
