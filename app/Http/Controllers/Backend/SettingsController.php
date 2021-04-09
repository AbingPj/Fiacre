<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Store;
use App\Models\City;
use App\Models\State;
use App\Models\SubscriptionSunclubChoice;
use App\Traits\UploadTrait;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SettingsController extends Controller
{
    use UploadTrait;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->get();

        $sunclub_choices =  SubscriptionSunclubChoice::OrderBy('price', 'DESC')->get();


        // dd($settings);
        return view('backend.settings.index')
            ->with(
                [
                    'store' => $settings,
                    "cities" => $cities,
                    "states" => $states,
                    "sunclub_choices" => $sunclub_choices,
                ]
            );
    }


    public function storeprofile()
    {

        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->get();

        $sunclub_choices =  SubscriptionSunclubChoice::OrderBy('price', 'DESC')->get();

        return view('backend.settings.tabStoreprofile')->with(
            [
                'store' => $settings,
                "cities" => $cities,
                "states" => $states,
                "sunclub_choices" => $sunclub_choices,
            ]
        );;
    }

    public function membership()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->get();

        $sunclub_choices =  SubscriptionSunclubChoice::OrderBy('price', 'DESC')->get();

        return view('backend.settings.tabMembership')->with(
            [
                'store' => $settings,
                "cities" => $cities,
                "states" => $states,
                "sunclub_choices" => $sunclub_choices,
            ]
        );;
    }

    public function homepage()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        return view('backend.settings.tabHome')->with(['store' => $settings,]);
    }

    public function aboutus()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        return view('backend.settings.tabAboutus')->with(['store' => $settings,]);
    }

    public function faqs()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        return view('backend.settings.tabFaqs')->with(['store' => $settings,]);
    }

    public function terms()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        return view('backend.settings.tabTerms')->with(['store' => $settings,]);
    }

    public function privacy()
    {
        $settings = Store::with('aboutus', 'terms', 'privacy', 'faqs', 'landing')->find(1);
        return view('backend.settings.tabPrivacy')->with(['store' => $settings,]);
    }









    public function update(Request $request)
    {

        // dd($request);
        // if ($request->has('image_path')) {
        //     $image = $request->file('image_path');
        //     $name = Str::slug($request->input('name')) . '_' . time();
        //     $folder = '/uploads/images/';
        //     $filePath = $folder . $name . '.' . $image->getClientOriginalExtension();
        //     $this->uploadOne($image, $folder, 'public', $name);
        //     $store->image_path = $filePath;
        // }

        $store = Store::find(1);

        if ($store != null) {
            $store->name = $request->name;
            $store->email = $request->email;
            $store->phone = $request->phone;
            $store->state = $request->state;
            $store->city = $request->city;
            $store->street_address = $request->street_address;
            $store->zipcode = $request->zipcode;
            // $store->landing_header = $request->landing_header;
            // $store->landing_content = $request->landing_content;
            $store->wholesaler_discount = $request->wholesaler_discount;
            $store->delivery_fee = $request->delivery_fee;
            $store->wholesaler_minimum_order_amount = $request->wholesaler_minimum_order_amount;
            $store->expected_delivery_days = $request->expected_delivery_days;
            $store->referral_amount = $request->referral_amount;


            // upload image
            if ($request->hasFile('image_path')) {
                $photo_path = Storage::putFile('public/logo', $request->file('image_path'));
                $store->image_path = $photo_path;
            }

            if ($request->wsrvisible == 'on') {
                $store->wholesaler_signup_is_hide = 0; // 1-hide, 0-show
            } else {
                $store->wholesaler_signup_is_hide = 1;
            }


            $store->update();
            $request->session()->flash('update_status', 'Update was successful!');
        }

        return redirect('/admin/settings');
    }

    public function add_sunclub(Request $request)
    {
        $choice =  new SubscriptionSunclubChoice;
        $choice->name =  $request->name;
        $choice->price =  $request->price;
        $choice->discount =  $request->discount;
        $choice->membership_fee =  $request->membership_fee;
        $choice->save();
        $request->session()->flash('update_status', 'Successfully Added!');
        $request->session()->flash('tab', 'membership');
        return redirect('/admin/settings');
    }
    public function update_sunclub(Request $request)
    {
        $choice = SubscriptionSunclubChoice::find($request->id);
        if (!empty($choice)) {
            $choice->name =  $request->name;
            $choice->price =  $request->price;
            $choice->discount =  $request->discount;
            $choice->membership_fee =  $request->membership_fee;
            $choice->save();
            $request->session()->flash('update_status', 'Update was successful!');
            $request->session()->flash('tab', 'membership');
            return redirect('/admin/settings');
        }
    }


    public function referralsCoupon()
    {
        $settings = Store::find(1);


        return view('backend.settings.referrals-coupon.index')
            ->with(
                [
                    'store' => $settings,
                ]
            );
    }



    public function updateStoreReferralsCoupon(Request $request)
    {
        $store = Store::find(1);
        if ($store != null) {
            $store->referral_coupon_name = $request->name;
            $store->referral_coupon_desc = $request->desc;
            $store->referral_coupon_discount_amount = $request->discount_amount;
            $store->referral_coupon_is_percentage = $request->is_percentage;
            $store->update();
            $request->session()->flash('update_status', 'Update successful!');
            $request->session()->flash('tab', 'referrals');
        }
    }
}
