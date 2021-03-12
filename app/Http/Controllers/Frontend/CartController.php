<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function getUserCartDetails($user_id, $org_id)
    {
        $cart = Cart::where('user_id', $user_id)->where('org_id', $org_id)->get();
        return response()->json($cart, 200);
    }

    public function getUserCartCount($user_id, $org_id)
    {
        $cart = Cart::where('user_id', $user_id)->where('org_id', $org_id)->count();
        return response()->json($cart, 200);
    }

    public function removeProductOfUserCart($user_id, $org_id, $product_id)
    {

        $cart = Cart::where('user_id', $user_id)
            ->where('org_id', $org_id)
            ->where('product_id', $product_id)
            ->first();
        if(!empty($cart)){
            $cart->delete();
            $count = Cart::where('user_id', $user_id)->where('org_id', $org_id)->count();
            return response()->json($count, 200);
        } else {
            return response()->json('not found', 404);
        }

    }

    public function updateQuantity(Request $request)
    {
        $user_id = $request->user_id;
        $org_id  = $request->org_id;
        // $product_id  = $request->product_details->id;
        $product_id  = $request->product_details['id'];
        $data = Cart::where('user_id', $user_id)
            ->where('org_id', $org_id)
            ->where('product_id', $product_id)
            ->first();
        if(!empty($data)){
            $data->qty = $request->product_details['qty'];
            $data->details = json_encode($request->product_details);
            $data->save();
            return response()->json('updated', 200);
        } else {
            return response()->json('not found', 404);
        }

    }

    public function addToCart(Request $request)
    {

        // dd($request);

        $data = new Cart();
        $data->user_id = $request->user_id;
        $data->org_id = $request->org_id;
        $data->product_id = $request->product_id;
        $data->qty = $request->qty;
        $data->details = json_encode($request->product_details);
        $data->save();

        // $cart = Cart::where('user_id', $request->user_id)->where('org_id', $request->org_id)->get();
        $count = Cart::where('user_id', $request->user_id)->where('org_id', $request->org_id)->count();
        return response()->json($count, 200);
    }
}
