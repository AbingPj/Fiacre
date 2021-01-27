<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Order;
use App\Models\OrderedProductWeek;
use App\Models\OrderProduct;
use Illuminate\Http\Request;

class OrgOrdersController extends Controller
{

    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::where('user_id', auth()->user()->id)->first();
        return view('backend.admin-org.org-orders', compact('org'));
    }

    public function getOrganizationOrders()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");

        $org = Organization::where('user_id', auth()->user()->id)->first();
        $orders = Order::with('user')->where('organization_id', $org->id)->OrderBy('date', 'DESC')->get();
        return response()->json($orders, 200);
    }

    public function show($order_id)
    {

        $org = Organization::where('user_id', auth()->user()->id)->first();
        $order = Order::with('order_by')
            ->with('organization')
            ->where('organization_id', $org->id)
            ->where('id', $order_id)->first();

        $ordered_products = OrderProduct::where('order_id', $order->id)->get();
        foreach ($ordered_products as $key => $value) {
            $value->product_details  = json_decode($value->product_details);
        }
        return view(
            'backend.admin-org.org-orders-show',
            [
                'org' => $org,
                'order' => $order,
                'ordered_products' => $ordered_products,
            ]
        );
    }

    public function weeks($order_id, $ordered_prod_id)
    {
        $org = Organization::where('user_id', auth()->user()->id)->first();
        $order = null;
        $ordered_product = null;
        $weeks = null;

        $ordered_product = OrderProduct::findOrFail($ordered_prod_id);
        $ordered_product->product_details  = json_decode($ordered_product->product_details);

        $weeks = OrderedProductWeek::where('order_id', $order_id)
            ->where('order_product_id', $ordered_product->id)
            ->where('organization_id', $org->id)->get();


        return view(
            'backend.admin-org.org-orders-show-weeks',
            [
                'org' => $org,
                'ordered_product' => $ordered_product,
                'weeks' => $weeks,
            ]
        );
    }
}
