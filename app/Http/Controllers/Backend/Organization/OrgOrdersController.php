<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Order;
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

    // public function show($id){

    //     $org = Organization::where('user_id', auth()->user()->id)->first();
    //     $order = Order::with('user')->where('organization_id', $org->id)->OrderBy('date', 'DESC')->get();
    //     $organization = $order->organization;



    //     if ($order->status == 2) {
    //         $order->status_label = "Ready";
    //         // } else if ($order->status == 3) {
    //         //     $order->status_label = "Ready for Pickup/Deliver";
    //         // } else if ($order->status == 4) {
    //         //     $order->status_label = "Completed";
    //     } else {
    //         $order->status_label = "Reserved";
    //     }
    //     $date = new Carbon($order->date);
    //     $order->date_label =  $date->format('m/d/Y');
    //     $ordered_products = OrderProduct::where('order_id', $order->id)->with('product')->get();

    //     $user = User::find(Auth::user()->id);
    //     $user->image_path = $user->getPicture();

    //     if (auth()->user()->customer_role == 2) {
    //         $sunclub_user = 1;
    //         $user->balance = $user->getSunClubBalance();
    //     } else {
    //         $sunclub_user = 0;
    //         $user->balance = 0;
    //     }


    //     $order->print_url = '/order/' . $order->id . '/print';

    //     return view(
    //         'frontend.pages.orderproducts',
    //         [
    //             'page_title' => 'Orders',
    //             'order' => $order,
    //             'ordered_products' => $ordered_products,
    //             'sunclub_user' => $sunclub_user,
    //             'user' => $user
    //         ]
    //     );
    // }
}
