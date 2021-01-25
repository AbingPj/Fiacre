<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\GuestPlaceOrderRequest;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\City;
use App\Models\Coupon;
use App\Models\CouponUser;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\OrderProductBundle;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\Retailer;
use App\Models\State;
use App\Models\Store;
use App\Models\SubscriptionSunclubAdditionalCharge;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Models\SubscriptionWholesaleMember;
use App\Models\SubscriptionWholesaleRecord;
use App\Services\EmailsService;
use App\Services\ImagePathService;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use SunClubChoicesSeeder;

class PlaceOrderController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
        $this->EmailsService = new EmailsService;
    }

    public function index()
    {

        \App\Services\TotalViewService::getView("Chck out");

        $products = Product::with('category:id,name')->get();

        if (Auth::guest() == false) {
            $user = User::find(Auth::user()->id);
            $user->image_path = $user->getPicture();
            if (auth()->user()->customer_role == 2) {
                $sunclub_user = 1;
                $user->balance = $user->getSunClubBalance();
                $user->discount = $user->getUserDiscount();
            } else {
                $sunclub_user = 0;
                $user->balance = 0;
                $user->discount = $user->getUserDiscount();
            }
            $userBilling =  BillingInfo::where('user_id', $user->id)->first();
        } else {
            $sunclub_user = 0;
            $user = [];
        };

        $store = Store::find(1);

        return view(
            'frontend.pages.checkout',
            [
                'page_title' => 'Products',
                'products' => $products,
                'sunclub_user' => $sunclub_user,
                'user' => $user,
                'delivery_fee' => $store->delivery_fee,
                'wholesaler_minimum_order_amount' => $store->wholesaler_minimum_order_amount,
                'user_billing_type' => $userBilling->CC_or_ACH,
            ]
        );
    }

    public function index2($shipment)
    {




        $products = Product::with('category:id,name')->get();
        $store = Store::find(1);
        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->get();

        if ($shipment == 'pickup') {
            $delivery_fee = 0;
            $pickup = 1;
        } else if ($shipment == 'deliver') {
            $delivery_fee = $store->delivery_fee;
            $pickup = 0;
        } else {
            abort(404);
        }

        \App\Services\TotalViewService::getView("Chck out 2");

        return view(
            'frontend.pages.checkout_billinginfo',
            [
                'page_title' => 'Products',
                'products' => $products,
                'delivery_fee' => $delivery_fee,
                'pickup' => $pickup,
                // 'wholesaler_minimum_order_amount' => $store->wholesaler_minimum_order_amount,
                'states' => $states,
                'cities' => $cities,
                'guest_status' => 'guest-checkout'
            ]
        );
    }

    public function ThankYou()
    {


        if (Auth::guest() == false) {
            $user = User::find(Auth::user()->id);
            $user->image_path = $user->getPicture();

            if (auth()->user()->customer_role == 2) {
                $sunclub_user = 1;
                $user->balance = $user->getSunClubBalance();
                $user->discount = $user->getUserDiscount();
            } else {
                $sunclub_user = 0;
                $user->balance = 0;
                $user->discount = $user->getUserDiscount();
            }
            return view(
                'frontend.pages.placeorder-thankyou',
                [
                    'page_title' => 'Products',
                    'sunclub_user' => $sunclub_user,
                    'user' => $user
                ]
            );
        } else {
            return view(
                'frontend.pages.placeorder-thankyou',
                [
                    'page_title' => 'Products',
                ]
            );
        }
    }



    public function PlaceOrderSunclub(Request $request)
    {
        \App\Services\TotalViewService::getView("PO Sun");
        if (auth()->user()->customer_role == 1) {
            return response()->json([
                "data_message" => "Please, Submit you billing information before placing order."
            ], 422);
        }

        if (Auth::guest() == false) {

            $user = User::find(Auth::user()->id);
            $userBalance = $user->getSunClubBalance();


            if (auth()->user()->customer_role == 2) {
                DB::beginTransaction();
                $ordered_products = $request->cart;
                $order = new Order;
                $order->store_id = 1;
                $order->order_by = Auth::user()->id;
                $order->date = Carbon::now();
                $order->discount_percentage = Auth::user()->getUserDiscount();
                $store = Store::find(1);
                $order->expected_delivery_days = $store->expected_delivery_days;
                if ($request->shipments == 'deliver') {
                    $order->delivery_zone_id = $request->delivery_zone_id;
                    $order->delivery_fee =  $store->delivery_fee;
                    $order->is_pickup =  0;
                } else {
                    $order->pickup_zone_id = $request->pickup_zone_id;
                    $order->delivery_fee = 0;
                    $order->is_pickup = 1;
                };


                if ($request->coupon_code != null) {

                    $coupon = Coupon::where('code', $request->coupon_code)->first();
                    if (!empty($coupon)) {
                        $couponUser =  CouponUser::where('coupon_id', $coupon->id)
                            ->where('user_id', Auth::user()->id)
                            ->first();

                        $couponUser->is_used = true;
                        $couponUser->save();

                        $order->has_coupon =  true;
                        $order->coupon_discount_amount =  $coupon->discount_amount;
                        $order->coupon_is_percentage =  $coupon->is_percentage;
                        $order->coupon_id =  $coupon->id;
                    }
                }



                // $order->delivery_fee =  $store->delivery_fee;
                // $order->additional_charge = 0;


                $current_sunclub_record_id = SubscriptionSunclubMember::where('user_id', Auth::user()->id)->first()->current_sunclub_record_id;

                $order->sunclub_record_id = $current_sunclub_record_id;

                $order->save();

                $totalAmount = 0;
                $tax = 0;
                foreach ($ordered_products as $key => $value) {
                    $orderproduct = new OrderProduct;
                    $orderproduct->order_id = $order->id;
                    $orderproduct->product_id = $value['id'];

                    $product = Product::find($orderproduct->product_id);

                    if (!empty($product)) {
                        // $orderproduct->price = $product->member_price;
                        if ($product->is_bundle == 1) {
                            $orderproduct->price = $product->getBundlePrice('member');
                            $orderproduct->is_bundle = 1;
                            $orderproduct->bundle_percentage = $product->bundle_percentage;
                        } else {
                            $orderproduct->price = $product->member_price;
                        }
                        $orderproduct->quantity = $value['qty'];
                        $orderproduct->order_by = Auth::user()->id;
                        $orderproduct->updated_quantity = $value['qty'];

                        // tax
                        $orderproduct->tax_percentage = $product->atr_tax_percentage;
                        $orderproduct->tax_amount = $product->atr_tax_amount_sc;

                        $orderproduct->save();


                        if ($product->is_bundle == 1) {
                            $bundle_products = ProductBundle::where('bundle_id', $product->id)->get();
                            foreach ($bundle_products as $key2 => $value2) {
                                $orderProdBundle = new OrderProductBundle;
                                $orderProdBundle->ordered_bundle_id = $orderproduct->id;
                                $orderProdBundle->product_id = $value2->product_id;
                                $orderProdBundle->quantity = $value2->quantity;
                                $orderProdBundle->save();
                            }
                        }


                        $totalAmount =  $totalAmount + ($orderproduct->price  * $value['qty']);
                        $tax =  $tax + ($orderproduct->tax_amount  * $value['qty']);
                    }
                }

                $totalAmountForEmail = $totalAmount;

                // get discount
                $discount = $totalAmount * ($order->discount_percentage /  100);

                // get coupon discount
                $coupon_discount = 0;
                if ($order->has_coupon) {
                    if ($order->coupon_is_percentage) {
                        $coupon_discount = $totalAmount * ($order->coupon_discount_amount /  100);
                    } else {
                        $coupon_discount = $order->coupon_discount_amount;
                    }
                }


                // total amount - discounnt
                $totalAmount = $totalAmount - $discount;

                // total amount - coupon discounnt
                $totalAmount = $totalAmount - $coupon_discount;

                // total amount + delivery fee
                $totalAmount = $totalAmount + $order->delivery_fee;

                // total amount + tax
                $totalAmount = $totalAmount + $tax;

                /// Payment for additional Charge
                if ($totalAmount > $userBalance) {



                    $additionalCharge  =  $totalAmount - $userBalance;



                    $userBilling =  BillingInfo::where('user_id', Auth::user()->id)->first();

                    //CC Token
                    if ($userBilling->CC_or_ACH == 'CC') {



                        $email = Auth::user()->email;

                        $cctokenSale = $this->PacePayment->ProcessCCTokenSale(
                            $userBilling->CardType,
                            $userBilling->Token,
                            // '12311123112',
                            $additionalCharge,
                            $userBilling->CVV,
                            'T0250605-0010000-00000000',
                            $email,
                            $userBilling->Token_SF
                        );

                        $cctokenSale_decoded = json_decode($cctokenSale, true);



                        if ($cctokenSale_decoded['ResultCode'] == 0) {

                            $user_subs = SubscriptionSunclubMember::where('user_id', Auth::user()->id)->first();
                            // dd($user_subs->id);
                            $record = new SubscriptionSunclubAdditionalCharge();
                            $record->user_id =  Auth::user()->id;
                            $record->subscription_sunclub_member_id = $user_subs->id;
                            $record->CC_or_ACH = "CC";
                            $record->amount = $additionalCharge;
                            $record->Token =  $userBilling->Token;
                            $record->TransRefID = $cctokenSale_decoded['TransRefID'];
                            $record->FuzeID = $cctokenSale_decoded['FuzeID'];
                            $record->ApprovalCode = $cctokenSale_decoded['ApprovalCode'];
                            $record->save();
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
                            $additionalCharge,
                            $email,
                            $userBilling->Token_SF
                        );
                        $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);
                        if ($ACHtokenSale_decoded['ResultCode'] == 0) {

                            // save user Subscription
                            $user_subs = SubscriptionSunclubMember::where('user_id', Auth::user()->id)->first();
                            // dd($user_subs->id);
                            $record = new SubscriptionSunclubAdditionalCharge();
                            $record->user_id =  Auth::user()->id;
                            $record->subscription_sunclub_member_id = $user_subs->id;
                            $record->CC_or_ACH = "ACH";
                            $record->amount = $additionalCharge;
                            $record->Token =  $userBilling->Token;
                            $record->TransRefID = $ACHtokenSale_decoded['TransRefID'];
                            $record->FuzeID = $ACHtokenSale_decoded['FuzeID'];
                            $record->ApprovalCode = $ACHtokenSale_decoded['ApprovalCode'];
                            $record->save();
                        } else {
                            DB::rollBack();
                            $data = $ACHtokenSale_decoded['ResultDetail'];

                            return response()->json([
                                "data_message" => $data
                            ], 422);
                        }
                    }
                }

                DB::commit();
                $data = "success";

                $user = new \stdClass;
                $user->full_name = Auth::user()->full_name;
                $user->email = Auth::user()->email;

                $order_prododucts2 = OrderProduct::where('order_id', $order->id)->get();

                $this->EmailsService
                    ->orderReceipt(
                        $user,
                        $totalAmountForEmail,
                        $order_prododucts2,
                        $order->date,
                        $order->id,
                        $order->discount_percentage,
                        $order->delivery_fee
                    );


                return response()->json($data, 200);
            }
        } else {
            return response()->json([
                "data_message" => "Unsuccessful, user is not signing in. Please sign-in."
            ], 422);
        }
    }


    public function PlaceOrderWholeSaler(Request $request)
    {
        \App\Services\TotalViewService::getView("PO WS");

        ///WholeSaler Place Order
        if (auth()->user()->customer_role == 1) {
            return response()->json([
                "data_message" => "Please, Submit you billing information before placing order."
            ], 422);
        }

        if (Auth::guest() == false) {


            if (auth()->user()->customer_role == 3) {
                DB::beginTransaction();
                $ordered_products = $request->cart;
                $order = new Order;
                $order->store_id = 1;
                $order->order_by = Auth::user()->id;
                $order->date = Carbon::now();
                $order->discount_percentage = Auth::user()->getUserDiscount();
                $store = Store::find(1);
                $order->expected_delivery_days = $store->expected_delivery_days;

                if ($request->shipments == 'deliver') {
                    $order->delivery_zone_id = $request->delivery_zone_id;
                    $order->delivery_fee =  $store->delivery_fee;
                    $order->is_pickup =  0;
                } else {
                    $order->pickup_zone_id = $request->pickup_zone_id;
                    $order->delivery_fee = 0;
                    $order->is_pickup = 1;
                };

                if ($request->coupon_code != null) {



                    $coupon = Coupon::where('code', $request->coupon_code)->first();
                    if (!empty($coupon)) {
                        $couponUser =  CouponUser::where('coupon_id', $coupon->id)
                            ->where('user_id', Auth::user()->id)
                            ->first();

                        $couponUser->is_used = true;
                        $couponUser->save();

                        $order->has_coupon =  true;
                        $order->coupon_discount_amount =  $coupon->discount_amount;
                        $order->coupon_is_percentage =  $coupon->is_percentage;
                        $order->coupon_id =  $coupon->id;
                    }
                }


                // $order->additional_charge = 0;
                $order->save();

                $totalAmount = 0;
                $tax = 0;
                foreach ($ordered_products as $key => $value) {
                    $orderproduct = new OrderProduct;
                    $orderproduct->order_id = $order->id;
                    $orderproduct->product_id = $value['id'];

                    $product = Product::find($orderproduct->product_id);

                    if (!empty($product)) {

                        // $orderproduct->price = $product->wholesale_price;

                        if ($product->is_bundle == 1) {
                            $orderproduct->price = $product->getBundlePrice('wholesale');
                            $orderproduct->is_bundle = 1;
                            $orderproduct->bundle_percentage = $product->bundle_percentage;
                        } else {
                            $orderproduct->price = $product->wholesale_price;
                        }


                        $orderproduct->quantity = $value['qty'];
                        $orderproduct->order_by = Auth::user()->id;
                        $orderproduct->updated_quantity = $value['qty'];

                        // tax
                        $orderproduct->tax_percentage = $product->atr_tax_percentage;
                        $orderproduct->tax_amount = $product->atr_tax_amount_ws;

                        $orderproduct->save();



                        if ($product->is_bundle == 1) {
                            $bundle_products = ProductBundle::where('bundle_id', $product->id)->get();
                            foreach ($bundle_products as $key2 => $value2) {
                                $orderProdBundle = new OrderProductBundle;
                                $orderProdBundle->ordered_bundle_id = $orderproduct->id;
                                $orderProdBundle->product_id = $value2->product_id;
                                $orderProdBundle->quantity = $value2->quantity;
                                $orderProdBundle->save();
                            }
                        }


                        $totalAmount =  $totalAmount + ($orderproduct->price * $value['qty']);
                        $tax =  $tax + ($orderproduct->tax_amount  * $value['qty']);
                    }
                }
                $totalAmountForEmail = $totalAmount;

                // get discount
                $discount = $totalAmount * ($order->discount_percentage /  100);


                // get coupon discount
                $coupon_discount = 0;
                if ($order->has_coupon) {
                    if ($order->coupon_is_percentage) {
                        $coupon_discount = $totalAmount * ($order->coupon_discount_amount /  100);
                    } else {
                        $coupon_discount = $order->coupon_discount_amount;
                    }
                }


                // total amount - discounnt
                $totalAmount = $totalAmount - $discount;

                // total amount - coupon discounnt
                $totalAmount = $totalAmount - $coupon_discount;


                // total amount + delivery fee
                $totalAmount = $totalAmount + $order->delivery_fee;

                // total amount + tax
                $totalAmount = $totalAmount + $tax;

                if ($totalAmount > 0) {

                    $userBilling =  BillingInfo::where('user_id', Auth::user()->id)->first();

                    //CC Token
                    if ($userBilling->CC_or_ACH == 'CC') {

                        //  dd($userBilling);
                        $email = Auth::user()->email;
                        // dd($email);

                        $cctokenSale = $this->PacePayment->ProcessCCTokenSale(
                            $userBilling->CardType,
                            $userBilling->Token,
                            // '12311123112',
                            $totalAmount,
                            $userBilling->CVV,
                            'T0250605-0010000-00000000',
                            $email,
                            $userBilling->Token_SF
                        );

                        $cctokenSale_decoded = json_decode($cctokenSale, true);

                        if ($cctokenSale_decoded['ResultCode'] == 0) {
                            // save user Subscription
                            $user_subs = SubscriptionWholesaleMember::where('user_id', Auth::user()->id)->first();
                            // dd($user_subs->id);
                            $record = new SubscriptionWholesaleRecord();
                            $record->user_id =  Auth::user()->id;
                            $record->subscription_wholesale_member_id = $user_subs->id;
                            $record->CC_or_ACH = "CC";
                            $record->amount = $totalAmount;
                            $record->Token =  $userBilling->Token;
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
                                ->orderReceipt(
                                    $user,
                                    $totalAmountForEmail,
                                    $order_prododucts2,
                                    $order->date,
                                    $order->id,
                                    $order->discount_percentage,
                                    $order->delivery_fee
                                );

                            $data = "success";
                            return response()->json($cctokenSale_decoded, 200);
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
                            // save user Subscription
                            $user_subs = SubscriptionWholesaleMember::where('user_id', Auth::user()->id)->first();
                            // dd($user_subs->id);
                            $record = new SubscriptionWholesaleRecord();
                            $record->user_id =  Auth::user()->id;
                            $record->subscription_wholesale_member_id = $user_subs->id;
                            $record->CC_or_ACH = "ACH";
                            $record->amount = $totalAmount;
                            $record->Token =  $userBilling->Token;
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
                                ->orderReceipt(
                                    $user,
                                    $totalAmountForEmail,
                                    $order_prododucts2,
                                    $order->date,
                                    $order->id,
                                    $order->discount_percentage,
                                    $order->delivery_fee
                                );


                            $data = "success";
                            return response()->json($ACHtokenSale_decoded, 200);
                        } else {
                            DB::rollBack();
                            $data = $ACHtokenSale_decoded['ResultDetail'];

                            return response()->json([
                                "data_message" => $data
                            ], 422);
                        }
                    }
                }
            };
        }
    }


    public function PlaceOrderGuest(GuestPlaceOrderRequest $request)
    {

        // dump($request);

        // return response()->json($request, 401);


        \App\Services\TotalViewService::getView("PO Guest");
        // $request->session()->flash('update_status', 'SAMPLE');
        // return redirect('/products/checkout/billinginfo');



        if (Auth::guest() == true) {

            DB::beginTransaction();
            $retailer = new Retailer;
            // $retailer->email = $request->email;
            $retailer->email = $request->user_email;
            $retailer->first_name  = $request->first_name;
            $retailer->last_name  = $request->last_name;
            $retailer->contact_number  = $request->contact_number;
            $retailer->contact_number_type  = $request->contact_number_type;
            $retailer->state  = $request->state;
            $retailer->city  = $request->city;
            $retailer->street_address  = $request->street_address;
            $retailer->zipcode  = $request->zipcode;
            $retailer->CC_or_ACH  = ($request->billing_token_type == '1') ? 'CC' : 'ACH';

            if ($request->billing_token_type == '1') {
                $retailer->CardType  = $request->card_type;
                $retailer->CardName  = $request->card_name;
                $last4 = substr($request->input('card_number'), -4);
                $retailer->Last4  = $last4;
                $retailer->CVV  = $request->cvv;
            } else {

                $retailer->ACHType  = $request->ach_type;
                $retailer->ACHAccountHolderType  = $request->ach_acc_holder_type;
                $last4 = substr($request->input('ach_account_number'), -4);
                $retailer->Last4  = $last4;
                $last3 = substr($request->input('ach_routing'), -3);
                $retailer->AchRoutingLast3 = $last3;
            }






            $retailer->save();


            $order = new Order;
            $order->store_id = 1;
            $order->order_by = 0;
            $order->date = Carbon::now();
            $order->discount_percentage = 0;
            $store = Store::find(1);
            $order->expected_delivery_days = $store->expected_delivery_days;
            $order->retailer_id =  $retailer->id;

            // if ($request->shp == '1') {
            //     $order->delivery_fee = 0;
            //     $order->is_pickup =  1;
            // } else {
            //     $order->delivery_fee =  $store->delivery_fee;
            //     $order->is_pickup = 0;
            // };

            if ($request->shp == 'pickup') {
                $order->pickup_zone_id = $request->pickup_zone_id;
                $order->delivery_fee = 0;
                $order->is_pickup =  1;
            } else {
                $order->delivery_zone_id = $request->delivery_zone_id;
                $order->delivery_fee =  $store->delivery_fee;
                $order->is_pickup = 0;
            };




            // $order->additional_charge = 0;
            $order->save();
            // dump($order);
            $totalAmount = 0;
            $tax = 0;

            $cart = json_decode($request->cart);


            foreach ($cart as $key => $item) {
                // $prod = Product::find($value);
                $prod = Product::find($item->id);
                if (!empty($prod)) {
                    $orderproduct = new OrderProduct;
                    $orderproduct->order_id = $order->id;
                    $orderproduct->product_id = $prod->id;

                    if ($prod->is_bundle == 1) {
                        $orderproduct->price = $prod->getBundlePrice('retailer');
                        $orderproduct->is_bundle = 1;
                        $orderproduct->bundle_percentage = $prod->bundle_percentage;
                    } else {
                        $orderproduct->price = $prod->price;
                    }


                    // $orderproduct->quantity = intval($request->product_qty[$key]);
                    $orderproduct->quantity = intval($item->qty);
                    $orderproduct->order_by = 0;
                    // $orderproduct->updated_quantity = intval($request->product_qty[$key]);
                    $orderproduct->updated_quantity =  intval($item->qty);

                    // tax
                    $orderproduct->tax_percentage = $prod->atr_tax_percentage;
                    $orderproduct->tax_amount = $prod->atr_tax_amount;


                    $orderproduct->save();


                    if ($prod->is_bundle == 1) {
                        $bundle_products = ProductBundle::where('bundle_id', $prod->id)->get();
                        foreach ($bundle_products as $key2 => $value2) {
                            $orderProdBundle = new OrderProductBundle;
                            $orderProdBundle->ordered_bundle_id = $orderproduct->id;
                            $orderProdBundle->product_id = $value2->product_id;
                            $orderProdBundle->quantity = $value2->quantity;
                            $orderProdBundle->save();
                        }
                    }

                    // dump($orderproduct);
                    $totalAmount =  $totalAmount + ($orderproduct->price * $orderproduct->updated_quantity);
                    $tax =  $tax + ($orderproduct->tax_amount  * $orderproduct->updated_quantity);
                }
            }
            $totalAmountForEmail = $totalAmount;
            $totalAmount = $totalAmount + $order->delivery_fee;

            // total amount + tax
            $totalAmount = $totalAmount + $tax;

            $state = null;
            $findstate = State::find($request->input('state'));
            if (!empty($findstate)) {
                $state = $findstate->iso2;
            }
            $city = $request->input('city');






            //Billing token type if the user using a (1)(cc)Credit Card or (2)(ach)ACH
            if ($request->billing_token_type == "1") {
                $ProcessCCSale = $this->PacePayment->ProcessCCSale(
                    $request->CardType,
                    $request->card_number,
                    $request->exp_month,
                    $request->exp_year,
                    $totalAmount,
                    $request->cvv,
                    $request->first_name,
                    $request->last_name,
                    $request->street_address,
                    $city,
                    $state,
                    $request->zipcode,
                    $request->email
                );
                $ProcessCCSale_decoded = json_decode($ProcessCCSale, true);

                if ($ProcessCCSale_decoded['ResultCode'] == 0) {

                    // $retailer->ACHType  = $request->
                    // $retailer->ACHAccountHolderType  = $request->
                    $retailer->amount  = $totalAmount;
                    $retailer->TransRefID = $ProcessCCSale_decoded['TransRefID'];
                    $retailer->FuzeID = $ProcessCCSale_decoded['FuzeID'];
                    $retailer->ApprovalCode = $ProcessCCSale_decoded['ApprovalCode'];
                    $retailer->save();

                    DB::commit();



                    $user = new \stdClass;
                    $user->full_name = $retailer->first_name . ' ' . $retailer->last_name;
                    $user->email = $retailer->email;

                    $order_prododucts2 = OrderProduct::where('order_id', $order->id)->get();

                    $this->EmailsService
                        ->orderReceipt(
                            $user,
                            $totalAmountForEmail,
                            $order_prododucts2,
                            $order->date,
                            $order->id,
                            $order->discount_percentage,
                            $order->delivery_fee
                        );

                    return "success";

                    // $request->session()->flash('clear_cart', "clearcart");
                    // return view(
                    //     'frontend.pages.placeorder-thankyou'
                    // );
                } else {
                    DB::rollBack();
                    // $request->session()->flash('update_status', $ProcessCCSale_decoded['ResultDetail']);
                    // return redirect()->back();

                    return response()->json([
                        "data_message" => $ProcessCCSale_decoded['ResultDetail']
                    ], 400);
                }
            } else {
                $ProcessACHSale = $this->PacePayment->ProcessACHSale(
                    $request->ach_type,
                    $request->ach_acc_holder_type,
                    $request->ach_account_number,
                    $request->ach_routing,
                    $request->first_name,
                    $request->last_name,
                    $request->street_address,
                    $city,
                    $state,
                    $request->zipcode,
                    $totalAmount,
                    $request->email
                );

                $ProcessACHSale_decoded = json_decode($ProcessACHSale, true);

                if ($ProcessACHSale_decoded['ResultCode'] == 0) {

                    // $retailer->ACHType  = $request->
                    // $retailer->ACHAccountHolderType  = $request->
                    $retailer->amount  = $totalAmount;
                    $retailer->TransRefID = $ProcessACHSale_decoded['TransRefID'];
                    $retailer->FuzeID = $ProcessACHSale_decoded['FuzeID'];
                    $retailer->ApprovalCode = $ProcessACHSale_decoded['ApprovalCode'];
                    $retailer->save();

                    DB::commit();



                    $user = new \stdClass;
                    $user->full_name = $retailer->first_name . ' ' . $retailer->last_name;
                    $user->email = $retailer->email;

                    $order_prododucts2 = OrderProduct::where('order_id', $order->id)->get();

                    $this->EmailsService
                        ->orderReceipt(
                            $user,
                            $totalAmountForEmail,
                            $order_prododucts2,
                            $order->date,
                            $order->id,
                            $order->discount_percentage,
                            $order->delivery_fee
                        );

                    return "success";
                } else {
                    DB::rollBack();
                    return response()->json([
                        "data_message" => $ProcessACHSale_decoded['ResultDetail']
                    ], 400);
                }
            }
        }




        // $request->product[$ordered_prod->id];

        // dd($request);
        // dd($request->product[4]);
    }
}
