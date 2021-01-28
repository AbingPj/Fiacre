<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\City;
use App\Models\Order;
use App\Models\OrderedProductWeek;
use App\Models\OrderProduct;
use App\Models\Retailer;
use App\Models\State;
use App\Models\SubscriptionSunclubRecord;
use App\Services\ImagePathService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PDF;
use stdClass;

class OrdersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        // $this->PacePayment = new PaceFuzePaymentApiService;
        \App\Services\TotalViewService::getView("ordrs");
    }

    public function index()
    {

        $orders = Order::with('organization:id,org_name')->where('order_by', Auth::user()->id)->orderBy('id', 'DESC')->get();

        foreach ($orders as $key => $order) {
            $order_prododucts = OrderProduct::where('order_id', $order->id)->get();
            $count = 0;
            $soldout_products = 0;
            $cashback = 0;
            $totalamount = 0;
            $updatedtotalamount = 0;
            foreach ($order_prododucts as $key => $order_product) {

                $subtotal = $order_product->quantity * $order_product->price;
                $totalamount = $totalamount + $subtotal;

                $updatedsubtotal = $order_product->updated_quantity * $order_product->price;
                $updatedtotalamount = $updatedtotalamount + $updatedsubtotal;


                if ($order_product->updated_quantity == 0) {
                    $cashback = $cashback + $subtotal;
                    $soldout_products = $soldout_products + 1;
                } else {
                    $count = $count + 1;
                }
            }

            $order->number_of_products = $count;
            $order->sold_out_products = $soldout_products;
            $order->cash_back = $cashback;
            $order->total_amount = $totalamount;
            $order->updated_total_amount = $updatedtotalamount;
            $order->status_label = "";
            if ($order->status == 2) {
                $order->status_label = "Ready";
                // } else if ($order->status == 3) {
                //     $order->status_label = "Ready for Pickup/Deliver";
                // } else if ($order->status == 4) {
                //     $order->status_label = "Completed";
            } else {
                $order->status_label = "Reserved";
            }
            $date = new Carbon($order->date);
            $order->date_label =  $date->format('m/d/Y');
        }


        $user = User::find(Auth::user()->id);
        $user->image_path = $user->getPicture();

        if (auth()->user()->customer_role == 2) {
            $sunclub_user = 2;
            $user->balance = $user->getSunClubBalance();
        } else {
            $sunclub_user = 0;
            $user->balance = 0;
        }



        return view(
            'frontend.pages.orders',
            [
                'page_title' => 'Orders',
                'orders' => $orders,
                'sunclub_user' => $sunclub_user,
                'user' => $user
            ]
        );
    }

    public function order($id)
    {



        $order = Order::findOrFail($id);
        $organization = $order->organization;
        // $order = Order::findOrFail($id)->with('organization');

        if ($order->order_by != Auth::user()->id) {
            abort(404);
        }


        if ($order->status == 2) {
            $order->status_label = "Ready";
            // } else if ($order->status == 3) {
            //     $order->status_label = "Ready for Pickup/Deliver";
            // } else if ($order->status == 4) {
            //     $order->status_label = "Completed";
        } else {
            $order->status_label = "Reserved";
        }
        $date = new Carbon($order->date);
        $order->date_label =  $date->format('m/d/Y');
        $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();

        $user = User::find(Auth::user()->id);
        $user->image_path = $user->getPicture();

        if (auth()->user()->customer_role == 2) {
            $sunclub_user = 1;
            $user->balance = $user->getSunClubBalance();
        } else {
            $sunclub_user = 0;
            $user->balance = 0;
        }


        $order->print_url = '/order/' . $order->id . '/print';

        return view(
            'frontend.pages.orderproducts',
            [
                'page_title' => 'Orders',
                'order' => $order,
                'ordered_products' => $ordered_products,
                'sunclub_user' => $sunclub_user,
                'user' => $user
            ]
        );
    }

    public function orderedproduct($id, $ordered_product_id)
    {

        $order = Order::findOrFail($id);
        $organization = $order->organization;
        if ($order->order_by != Auth::user()->id) {
            abort(404);
        }

        $ordered_product = OrderProduct::findOrFail($ordered_product_id);
        $ordered_product->product_details  = json_decode($ordered_product->product_details);

        $weeks = OrderedProductWeek::where('order_id', $order->id)
            ->where('order_product_id', $ordered_product->id)
            ->where('organization_id', $organization->id)
            ->where('order_by', Auth::user()->id)
            ->get();

        return view(
            'frontend.pages.orderproductweeks',
            [
                'page_title' => 'Orders',
                'order' => $order,
                'organization' => $organization,
                'ordered_product' => $ordered_product,
                'weeks' => $weeks,
            ]
        );
    }


    public function print($order_id)
    {
        $order = Order::findOrFail($order_id);

        if (Auth::user()->id != $order->order_by) {
            // dd('true');
            return redirect()->back()->withFlashDanger("You do not right to download that.");
        } else {
            $class = $this->order_data($order_id);
            $pdf = PDF::loadView(
                'backend.pdf.reports-orders-by-customers.pdf-order',
                compact('class')
            )->setPaper('a4', 'portrait');
            return $pdf->download('order.pdf');
        }
    }


    public function order_data($order_id)
    {

        $order = Order::findOrFail($order_id);

        $date = new Carbon($order->date);
        $order->date_label =  $date->format('m/d/Y');

        $user = User::find($order->order_by);

        if ($order->order_by == 0) {
            $user = Retailer::find($order->retailer_id);
            $user->image_path = "/img/no-user.jpg";

            // dd($user);
            // $city = City::find($user->city)->name;
            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }
            $state = State::find($user->state)->name;
            // $user->city = $city;
            $user->state = $state;
        } else {
            $user = User::find($order->order_by);
            // $city = City::find($user->city)->name;
            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }
            $state = State::find($user->state)->name;
            // $user->city = $city;
            $user->state = $state;
        }

        $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();
        $products = $ordered_products;
        $totalamount = 0;
        foreach ($products as $key => $value) {

            // dd($value->product);
            // $value->image_link = public_path('storage/' . ImagePathService::setPath($value->product->image_path));
            if (!empty($value->product->image_path)) {
                $value->image_link = public_path('storage/' . ImagePathService::setPath($value->product->image_path));
            } else {
                $value->image_link  = $value->is_bundle == 1 ? public_path('img/bundle.png') : public_path('img/no-product-image.png');
            }
            $subtotal = $value->updated_quantity * $value->price;
            $value->subtotal = number_format($subtotal, 2);
            $totalamount = $totalamount + $subtotal;
        }


        $class = new stdClass;
        $class->products = $products;
        $class->user = $user;
        $class->order = $order;
        $class->totalamount = number_format($totalamount, 2);
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }
}
