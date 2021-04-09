<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\ReferralCodeSubmitted;
use App\Models\Store;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use stdClass;

class ReferralsController extends Controller
{
    public function getUserReferralCodeDetails()
    {
        $data = [];
        $referral_amount = Store::first()->referral_amount;

        $total_refferal_amount = 0;
        $total_success = 0;
        if (Auth::guest() == false) {
            if (auth()->user()->customer_role == 4) {

                $details = ReferralCodeSubmitted::with('user:id,first_name,last_name,email')
                    ->where('refferal_code_user_id', Auth::user()->id)
                    ->get();

                if (!empty($details)) {
                    $data = $details;
                    foreach ($data as $key => $value) {
                        if($value->status == 2){
                            $total_refferal_amount = $total_refferal_amount + $referral_amount;
                            $total_success = $total_success + 1;
                            $value->referral_amount = $referral_amount;
                        }else{
                            $value->referral_amount = 0;
                        }
                    }
                }
            }
        }

        $class = new stdClass;
        $class->store_referral_amount = $referral_amount;
        $class->total_user_refferal_amount = $total_refferal_amount;
        $class->total_success = $total_success;
        $class->details = $data;

        return response()->json($class, 200);
    }
}
