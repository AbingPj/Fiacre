<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Coupon;
use App\Models\CouponUser;
use App\Models\ReferralCode;
use App\Models\ReferralCodeSubmitted;
use App\Models\Store;
use App\Services\EmailsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use stdClass;

class ReferralPageController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->EmailsService = new EmailsService;
    }


    public function index()
    {
        $referral_code = ReferralCode::where('user_id', Auth::user()->id)->first();

        $code = null;
        if (!empty($referral_code)) {
            $code = $referral_code->code;
        }

        $submitted_code = "";
        $submitted = false;
        if ($this->rcsUserExists(Auth::user()->id)) {
            $referral_code_submitted =
                ReferralCodeSubmitted::where('user_id', Auth::user()->id)->first();
            $submitted_code = $referral_code_submitted->code;
            $submitted = true;
        }

        $class = new stdClass;
        $class->code =   $code;
        $class->submitted_code =   $submitted_code;
        $class->submitted =  $submitted;
        $class->user =   auth()->user();

        return view('frontend.pages.referrals', compact('class'));
    }

    public function sendInvite(Request $request)
    {
        $this->EmailsService->sendInvite($request->email, $request->name);
    }


    public function getUserRewards(Request $request)
    {

        $rewards = CouponUser::where('user_id',  Auth::user()->id)->get();
        if (!empty($rewards)) {
            foreach ($rewards as $key => $reward) {
                $coupon =  Coupon::find($reward->coupon_id);
                $reward->coupon = $coupon;
            }
        }
        return response()->json($rewards, 200);
    }

    public function checkCouponCode(Request $request)
    {


        $code = $request->code;
        $coupon = Coupon::where('code', $code)->first();
        if (!empty($coupon)) {

            if (Auth::guest() == false) {
                $couponUser =  CouponUser::where('coupon_id', $coupon->id)
                    ->where('user_id', Auth::user()->id)
                    ->first();

                if (!empty($couponUser)) {

                    if ($couponUser->is_used == 0) {

                        $class = new stdClass;
                        $class->message = 'Valid coupon code.';
                        $class->coupon = $coupon;
                        return response()->json($class, 200,);
                    } else {

                        return response()->json([
                            "error_message" => 'Coupon code is already used.'
                        ], 422);
                    }
                } else {
                    return response()->json([
                        "error_message" => 'Coupon code is not for you.'
                    ], 422);
                }
            } else {
                return response()->json([
                    "error_message" => 'Coupons are currently for the members only.'
                ], 422);
            }
        } else {
            return response()->json([
                "error_message" => 'Invalid coupon code.'
            ], 422);
        }
    }

    // function couponIsForUser($cooupon_id, $user_id)
    // {
    //     return CouponUser::where('cooupon_id', $cooupon_id)->where('user_id', $user_id)->exists();
    // }


    public function submitReferralCode(Request $request)
    {


        if ($this->codeExists($request->code)) {

            $referral_code = ReferralCode::where('code', $request->code)->first();

            if ($referral_code->user_id == Auth::user()->id) {
                return 'You Can`t Used Your Own Referral Code';
            } else {
                if (!$this->rcsUserExists(Auth::user()->id)) {

                    $submit = new ReferralCodeSubmitted;
                    $submit->user_id =  Auth::user()->id;
                    $submit->code = $request->code;
                    $submit->refferal_code_user_id = $referral_code->user_id;
                    $submit->save();

                    $this->create_reward($referral_code->user_id);

                    return 'Submitted Success';
                } else {
                    return 'You Already Submitted Referral Code';
                }
            }
        } else {
            return 'Code Does Not Exist.';
        }
    }



    function codeExists($code)
    {
        return ReferralCode::where('code', $code)->exists();
    }

    function rcsUserExists($user_id)
    {
        return ReferralCodeSubmitted::where('user_id', $user_id)->exists();
    }


    function create_reward($user_id)
    {


        $store = Store::find(1);

        $coupon = new Coupon;
        $coupon->code = 'C' . $this->generateRandomString(7);
        $coupon->name = $store->referral_coupon_name;
        $coupon->description = $store->referral_coupon_desc;
        $coupon->discount_amount = $store->referral_coupon_discount_amount;
        $coupon->is_percentage = $store->referral_coupon_is_percentage;
        $coupon->save();

        $coupon_user = new CouponUser;
        $coupon_user->coupon_id = $coupon->id;
        $coupon_user->user_id = $user_id;
        $coupon_user->save();
    }

    function generateRandomString($length = 20)
    {
        $characters = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
        // $characters = '01';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        if ($this->codeExists($randomString)) {
            return generateRandomString();
        }

        return $randomString;
    }

    function couponCodeExists($code)
    {
        return Coupon::where('code', $code)->exists();
    }
}
