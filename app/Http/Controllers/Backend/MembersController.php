<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Backend\Auth\User\UserSessionController;
use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\City;
use App\Models\OrderProduct;
use App\Models\State;
use Illuminate\Http\Request;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Models\SubscriptionWholesaleMember;
use App\Models\SubscriptionWholesaleRecord;
use App\Services\ImagePathService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class MembersController extends Controller
{
    public function index()
    {
        // $customers = User::where('customer_role', '!=', 1)->where('customer_role', '!=', 0)->get();
        $customers = User::where('customer_role', '!=', 0)->get();
        foreach ($customers as $key => $user) {

            $user->image_path = $user->getPicture();


            if ($user->customer_role == 2) {

                $user->balance = $user->getSunClubBalance();
            }
            if ($user->customer_role == 3) {
                $user->balance = 0;
            }

            $date = new Carbon($user->created_at);
            $user->created_at_label =  $date->format('m/d/Y');
            $Now =  Carbon::now();
            $created =  new Carbon($user->created_at);
            $created_at = $created->addDay();
            if ($created_at > $Now) {
                $user->new = 1;
            } else {
                $user->new = 0;
            }
        }

        return view('backend.customers.index', compact('customers'));
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        if ($user->customer_role == 2 || $user->customer_role == 3) {
            $user->image_path = $user->getPicture();

            // if customer is sunfarm member
            if ($user->customer_role == 2) {
                $sunclub = SubscriptionSunclubMember::where('user_id', $user->id)->first();
                if (!empty($sunclub)) {
                    $user->sunclub_choice_id = $sunclub->subscription_sunclub_choice_id;
                }
            } else {
                $user->sunclub_choice_id = null;
                $business = SubscriptionWholesaleMember::where('user_id', $user->id)->first();
                if (!empty($business->business_image_path)) {
                    $photo = url('storage/' . ImagePathService::setPath($business->business_image_path));
                    $business->business_image_path = "$photo";
                } else {
                    $business->image_path = "/img/no-user.jpg";
                }

                $city = City::find($user->city);
                if (!empty($city)) {
                    $user->city = $city->name;
                }


                $state = State::find($business->state)->name;
                $business->state = $state;
                $user->business = $business;

            }

            $city = City::find($user->city);
            if (!empty($city)) {
                $user->city = $city->name;
            }

            $state = State::find($user->state)->name;
            $user->state = $state;


            $customer = $user;


            return view('backend.customers.show', compact('customer'));
        } else {
            return abort(404);
        }
    }








}
