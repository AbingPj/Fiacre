<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\City;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Retailer;
use App\Models\State;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Services\EmailsService;
use App\Services\ImagePathService;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{


    public function __construct()
    {
        $this->PacePayment = new PaceFuzePaymentApiService;
        $this->EmailsService = new EmailsService;
    }

    public function index()
    {
        $orders = Order::OrderBy('date', 'DESC')->get();
        foreach ($orders as $key => $order) {

            $order_prododucts = OrderProduct::where('order_id', $order->id)->get();
            $totalamount = 0;
            $updated_totalamount = 0;

            foreach ($order_prododucts as $key => $order_product) {
                $subtotal = $order_product->quantity * $order_product->price;
                $totalamount = $totalamount + $subtotal;
                $updated_subtotal = $order_product->updated_quantity * $order_product->price;
                $updated_totalamount = $updated_totalamount + $updated_subtotal;
            }
            $order->total_amount = $totalamount;
            $order->updated_total_amount = $updated_totalamount;

            $order->status_label = "";
            if ($order->status == 2) {
                $order->status_label = "Ready";
                // } else if ($order->status == 3) {
                //     $order->status_label = "Ready";
                // } else if ($order->status == 4) {
                //     $order->status_label = "Completed";
            } else {
                $order->status_label = "Reserved";
            }
            $date = new Carbon($order->date);
            $order->date_label =  $date->format('m/d/Y');

            if ($order->order_by == 0) {
                $user = Retailer::find($order->retailer_id);
                $user->image_path = "/img/no-user.jpg";
            } else {
                $user = User::find($order->order_by);
                $user->image_path = $user->getPicture();
            }
            $order->user = $user;
        }
        return view('backend.orders.index', compact('orders'));
    }

    public function show($order_id)
    {
        $order = Order::with('organization')->find($order_id);

        $date = new Carbon($order->date);
        $order->date_label =  $date->format('m/d/Y');

        $user = User::find($order->order_by);

        if ($order->order_by == 0) {
            $user = Retailer::find($order->retailer_id);
            $user->image_path = "/img/no-user.jpg";

            // dd($user);
            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }

            $state = State::find($user->state)->name;
            $user->state = $state;
        } else {
            $user = User::find($order->order_by);
            $user->image_path = $user->getPicture();

            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }


            $state = State::find($user->state)->name;
            $user->state = $state;
        }

        $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();
        $products = $ordered_products;

        return view('backend.orders.show', compact('order', 'user', 'products'));
    }




    public function updateDetails(Request $request)
    {


        DB::beginTransaction();
        // DB::rollBack();
        // DB::commit();

        $order = Order::findOrFail($request->order_id);
        $order->status = $request->status;
        $order->save();

        $ordered_products = OrderProduct::where('order_id', $order->id)->get();

        /// get the total cashback;
        $total_cashback = 0;

        /// get the total deduction of the saler is updating the quantity in higher.
        $total_another_deduction  = 0;
        $total_amount = 0;
        $original_total_amount = 0;
        $new_total_amount = 0;


        foreach ($ordered_products as $key => $ordered_prod) {

            $inputed_qty =  $request->product[$ordered_prod->id];
            $updated_qty = $ordered_prod->updated_quantity;

            /// original qty ordered
            $order_qty = $ordered_prod->quantity;

            // check if update quantity is updated
            if ($updated_qty !=  $inputed_qty) {

                /// save the updated quantity
                $ordered_prod->updated_quantity =  $inputed_qty;
                $ordered_prod->save();

                /// get cash back
                if ($ordered_prod->updated_quantity <  $order_qty) {

                    $qty =  $order_qty - $ordered_prod->updated_quantity;
                    $total_cashback =  $total_cashback + ($qty * $ordered_prod->price);
                }

                // get the total deduction
                if ($ordered_prod->updated_quantity >  $order_qty) {
                    $qty = $ordered_prod->updated_quantity - $order_qty;
                    $total_another_deduction = $total_another_deduction + ($qty * $ordered_prod->price);
                }

                $total_amount =  $total_amount + ($ordered_prod->updated_quantity * $ordered_prod->price);
            }
            $original_total_amount = $original_total_amount + ($order_qty * $ordered_prod->price);
            $new_total_amount =  $new_total_amount + ($ordered_prod->updated_quantity * $ordered_prod->price);
        }


        if ($order->order_by == 0) {

            $user = Retailer::find($order->retailer_id);

            DB::commit();
            $this->EmailsService
                ->updateOrderConfirm(
                    $user,
                    $new_total_amount,
                    $ordered_products,
                    $order->date,
                    $order->id,
                    $order->discount_percentage,
                    $order->delivery_fee
                );

            return redirect('/admin/orders/' . $request->order_id)->withFlashSuccess(__('alerts.backend.orders.updated'));
        }

        $user = User::find($order->order_by);

        /// SunClub
        if ($user->customer_role == 2) {

            $balance = 0;
            $records = SubscriptionSunclubRecord::where('user_id', $order->order_by)->get();

            foreach ($records as $key => $rec) {
                $balance = $balance + $rec->amount;
            }
            $order_product_records = OrderProduct::where('order_by', $order->order_by)->get();
            $total_orders_amount = 0;
            foreach ($order_product_records as $key2 => $order_product) {
                $updatedsubtotal = $order_product->updated_quantity * $order_product->price;
                $total_orders_amount = $total_orders_amount + $updatedsubtotal;
            }
            $balance = $balance - $total_orders_amount;

            $overall = ($original_total_amount + $total_another_deduction) - $total_cashback;
            // dump($overall);
            if ($overall > $original_total_amount) {



                $balance = $balance - ($overall - $original_total_amount);
                if ($balance < 0) {
                    DB::rollBack();
                    return redirect('/admin/orders/' . $request->order_id)
                        ->withFlashDanger(__('alerts.backend.orders.insufficient'));
                }
            }
            DB::commit();

            $this->EmailsService
                ->updateOrderConfirm(
                    $user,
                    $new_total_amount,
                    $ordered_products,
                    $order->date,
                    $order->id,
                    $order->discount_percentage,
                    $order->delivery_fee
                );



            return redirect('/admin/orders/' . $request->order_id)->withFlashSuccess(__('alerts.backend.orders.updated'));
        }

        /// WholeSaler
        else {
            DB::commit();

            $this->EmailsService
                ->updateOrderConfirm(
                    $user,
                    $new_total_amount,
                    $ordered_products,
                    $order->date,
                    $order->id,
                    $order->discount_percentage,
                    $order->delivery_fee
                );

            return redirect('/admin/orders/' . $request->order_id)->withFlashSuccess(__('alerts.backend.orders.updated'));
        }
    }
}
