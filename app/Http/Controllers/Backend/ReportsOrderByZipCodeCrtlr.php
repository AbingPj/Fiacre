<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ReportsOrderByZipCodeCrtlr extends Controller
{
    public function index()
    {
        return view('backend.reports.orders-by-zipcode.index');
    }

    public function getZipcodes()
    {
        $zipcodes1  = Order::join('users', function ($join) {
            $join->on('orders.order_by', '=', 'users.id');
        })
            ->selectRaw('orders.order_by, users.first_name, users.zipcode as order_zipcode');
        // ->count();

        $zipcodes2  = Order::join('retailers', function ($join) {
            $join->on('orders.retailer_id', '=', 'retailers.id');
        })
            ->selectRaw('orders.order_by, retailers.first_name, retailers.zipcode as order_zipcode')
            ->unionAll($zipcodes1);

        // ->get();

        $groupby = DB::query()->fromSub($zipcodes2, 'a')
            ->selectRaw('order_zipcode, count(order_zipcode) as total_orders')
            ->groupBy('order_zipcode')
            ->orderBy('total_orders', 'DESC')
            ->get();

        return response()->json($groupby);
    }


    public function getAZipcodes($zipcode)
    {

        // dd($zipcode);
        $zipcodes1  = Order::join('users', function ($join) {
            $join->on('orders.order_by', '=', 'users.id');
        })
            ->selectRaw('orders.id, orders.order_by, orders.retailer_id, orders.date,
                users.first_name, users.last_name, users.zipcode as order_zipcode');
        // ->count();

        $zipcodes2  = Order::join('retailers', function ($join) {
            $join->on('orders.retailer_id', '=', 'retailers.id');
        })
            ->selectRaw('orders.id, orders.order_by,  orders.retailer_id, orders.date,
                retailers.first_name,  retailers.last_name, retailers.zipcode as order_zipcode')
            ->unionAll($zipcodes1);

        $groupby = Order::fromSub($zipcodes2, 'a')
            ->where('order_zipcode', $zipcode)
            ->orderBy('date', 'DESC')
            ->get();

        foreach ($groupby as $key => $value) {
            $value->url_for_print = url('/admin/generate/pdf/order2/' . $value->id);
        }

        return response()->json($groupby);
    }


    public function show($zipcode)
    {
        return view('backend.reports.orders-by-zipcode.show', compact('zipcode'));
    }
}
