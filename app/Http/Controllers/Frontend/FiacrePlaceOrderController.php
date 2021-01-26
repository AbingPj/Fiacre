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

    public function fiacreCustomerPlaceOrder(Request $request)
    {
        \App\Services\TotalViewService::getView("Place Order Fiacre");
        if (Auth::guest() == false) {
            if (auth()->user()->isFiacreCustomerRole()) {
                DB::beginTransaction();
                $ordered_products = $request->cart;

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

                $order->save();
                $totalAmount = 0;

                foreach ($ordered_products as $key => $value) {
                    $orderproduct = new OrderProduct;
                    $orderproduct->order_id = $order->id;
                    $orderproduct->product_id = $value['id'];
                    $orderproduct->organization_id = $org->id; // new
                    $product = Product::find($orderproduct->product_id);
                    if (!empty($product)) {
                        if ($product->is_bundle == 1) {
                            $orderproduct->price = $product->getBundlePrice('retailer');
                            $orderproduct->is_bundle = 1;
                            $orderproduct->bundle_percentage = $product->bundle_percentage;
                        } else {
                            $orderproduct->price = $product->price;
                        }

                        $orderproduct->quantity = $value['qty'];
                        $orderproduct->order_by = Auth::user()->id;
                        $orderproduct->updated_quantity = $value['qty'];

                        //subscription
                        $weeks = $product->getSubcriptionWeeks($org->id);

                        if ($weeks == '-') {
                            $orderproduct->subscription_weeks = 0;
                            $orderproduct->subscription_price = 'no subscription yet';
                        } else {
                            $orderproduct->is_subscription = 1;
                            $orderproduct->subscription_weeks = $weeks;
                            $subscription_price = $orderproduct->price * $weeks;
                            $orderproduct->subscription_price = round($subscription_price, 2);
                        }


                        $orderproduct->product_details = json_encode($product);

                        $orderproduct->save();



                        if ($product->is_bundle == 1) {
                            $bundle_products = ProductBundle::where('bundle_id', $product->id)->get();
                            foreach ($bundle_products as $key2 => $value2) {
                                $orderProdBundle = new OrderProductBundle;
                                $orderProdBundle->ordered_bundle_id = $orderproduct->id;
                                $orderProdBundle->product_id = $value2->product_id;
                                $orderProdBundle->quantity = $value2->quantity;
                                $product2 = Product::find($value2->product_id);
                                $orderProdBundle->product_details = json_encode($product2);
                                $orderProdBundle->save();
                            }
                        }


                        $totalAmount =  $totalAmount + $orderproduct->subscription_price;
                    }
                }
                $totalAmountForEmail = $totalAmount;
                $billing_method_price  = $totalAmount * ($order->billing_type_percentage / 100);
                $totalAmount = $totalAmount + $billing_method_price;

                // DB::rollBack();
                // DB::commit();
                // total amount + tax
                // dd($totalAmount);


                if ($totalAmount > 0) {
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
                return response()->json("You do not have access to do that.", 400);
            };
        } else {
            return response()->json("Unauthorozid", 400);
        }
    }
}
