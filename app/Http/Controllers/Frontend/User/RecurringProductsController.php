<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\UserRecurringProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RecurringProductsController extends Controller
{
    public function getUserRecurringProducts()
    {

        $data = [];
        if (Auth::guest() == false) {
            if (auth()->user()->customer_role == 4) {
                $data = UserRecurringProduct::where('user_id', Auth::user()->id)
                    ->where('org_id', Auth::user()->selected_org_id)
                    ->get();
                foreach ($data as $key => $value) {
                    $value->product_current_details = json_decode($value->product_current_details);
                }
            }
        }
        return response()->json($data, 200);
    }

    public function removeRecurringProduct(Request $request)
    {
        if (Auth::guest() == false) {
            UserRecurringProduct::findOrFail($request->id)->delete();
            return response()->json("success full deleted", 200);
        } else {
            abort(401);
        }
    }

    public function updateQuantityRecurringProduct(Request $request)
    {
        if (Auth::guest() == false) {

            $validator = \Validator::make($request->all(), [
                'id' => 'required',
                'qty' => 'required',
            ]);

            if ($validator->fails()) {
              return response()->json($validator->errors(), 422);
            }

            $data = UserRecurringProduct::findOrFail($request->id);
            if($request->qty >= 1){
                $data->qty = $request->qty;
                $data->save();
                return response()->json("updated", 200);
            }
        } else {
            abort(401);
        }
    }

    public function getUserRecurringProductSchedules()
    { }
}
