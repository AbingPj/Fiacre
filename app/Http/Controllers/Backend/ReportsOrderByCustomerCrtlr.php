<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\City;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Retailer;
use App\Models\State;
use App\Services\ImagePathService;
use Carbon\Carbon;
use Faker\Provider\Image;
use Illuminate\Http\Request;
use stdClass;
use PDF;


class ReportsOrderByCustomerCrtlr extends Controller
{
    public function index()
    {
        return view('backend.reports.orders-by-customer.index');
    }


    public function show($customer_id, $customer_name)
    {
        // dd($customer_name);
        return view('backend.reports.orders-by-customer.show', compact('customer_id', 'customer_name'));
    }

    public function getCustomers()
    {

        // $customers = Order::groupBy('order_by')->get();

        // $order_by = Order::groupBy('order_by')
        //     ->selectRaw('count(*) as total_orders, order_by')
        //     ->orderBy('total_orders', 'DESC')
        //     ->get();

        $name = '';

        // $order_by = Order::with('user')
        //     ->leftJoin('users', function ($join) {
        //         $join->on('orders.order_by', '=', 'users.id');
        //     })
        //     ->groupBy('orders.order_by')
        //     ->selectRaw('count(*) as total_orders, orders.order_by, users.first_name')
        //     ->orderBy('total_orders', 'DESC')
        //     ->where('users.first_name', 'LIKE', "%$name%")
        //     ->get();


        $order_by  = Order::with('user')
            // ->whereHas('User', function ($query) use ($name) {
            //     $query->where('first_name', 'LIKE', "%$name%")
            //         ->orWhere('last_name', 'LIKE', "%$name%");
            // })
            ->groupBy('order_by')
            ->selectRaw('count(*) as total_orders, order_by')
            ->orderBy('total_orders', 'DESC')
            ->get();

        return response()->json($order_by);
    }


    public function getOrdersOfACustomer($customer_id, $print = false)
    {

        $data = [];
        $user = [];
        if ($customer_id != 1) {
            if ($customer_id == '0') {
                $user = new stdClass;
                $user->full_name = 'Retailer Customer';

                $data  = Order::where('order_by', '0')
                    ->orderBy('date', 'DESC')
                    ->get();
                foreach ($data as $key => $value) {
                    $value->url_for_print = url('/admin/generate/pdf/order2/' . $value->id);
                }
            } else {

                $user = User::find($customer_id);

                $data  = Order::where('order_by', $user->id)
                    ->orderBy('date', 'DESC')
                    ->get();
                foreach ($data as $key => $value) {
                    $value->url_for_print = url('/admin/generate/pdf/order2/' . $value->id);
                }
            }
        }

        // dd($data->count());
        $class = new stdClass;
        $class->data = $data;
        $class->user = $user;
        $class->total_orders = $data->count();
        $class->printed = Carbon::now()->format('F d, Y');

        if ($print == true) {
            return $class;
        }

        return response()->json($class);
    }

    public function generateCustomerOrdersReport(Request $request)
    {
        $class = $this->getOrdersOfACustomer($request->customer_id, true);
        // dd($class);
        $pdf = PDF::loadView(
            'backend.pdf.reports-orders-by-customers.pdf-customer-orders',
            compact('class')
        )->setPaper('a4', 'portrait');
        return $pdf->download('customer-orders.pdf');
    }


    public function order($order_id)
    {
        $order = Order::findOrFail($order_id);

        $date = new Carbon($order->date);
        $order->date_label =  $date->format('m/d/Y');

        $user = User::find($order->order_by);

        if ($order->order_by == 0) {
            $user = Retailer::find($order->retailer_id);
            $user->image_path = "/img/no-user.jpg";

            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }

            $state = State::find($user->state)->name;
            $user->state = $state;
        } else {
            $user = User::find($order->order_by);

            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }

            $state = State::find($user->state)->name;
            $user->state = $state;
        }

        $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();
        $products = $ordered_products;
        $totalamount = 0;
        foreach ($products as $key => $value) {
            // $value->image_link = public_path('storage/' . ImagePathService::setPath($value->product->image_path));

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


    public function generateOrderReport(Request $request)
    {
        $class = $this->order($request->order_id);
        $pdf = PDF::loadView(
            'backend.pdf.reports-orders-by-customers.pdf-order',
            compact('class')
        )->setPaper('a4', 'portrait');
        return $pdf->download('order.pdf');
    }

    public function generateOrderReport2($order_id)
    {
        $class = $this->order($order_id);
        $pdf = PDF::loadView(
            'backend.pdf.reports-orders-by-customers.pdf-order',
            compact('class')
        )->setPaper('a4', 'portrait');
        return $pdf->download('order.pdf');
    }
}
