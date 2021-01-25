<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\FrontEnd\BillingInfoRequest;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\BillingInfoAchToken;
use App\Models\BillingInfoCcToken;
use App\Models\City;
use App\Models\FiacreCustomer;
use App\Models\ReferralCode;
use App\Models\State;
use App\Models\Store;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Models\SubscriptionWholesaleMember;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FinishSignUpController2 extends Controller
{

    // protected $billing_token_type = null;
    public function __construct()
    {
        $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
    }

    public function done()
    {
        return view('frontend.auth.signup-complete');
    }

    public function index()
    {

        \App\Services\TotalViewService::getView("vst fnsh SU");

        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->get();
        $user =  user::find(Auth::user()->id);
        // $sunclub_choices =  SubscriptionSunclubChoice::OrderBy('price', 'DESC')->get();
        $sunclub_choices =  SubscriptionSunclubChoice::where('id', 1)->get();


        $store = Store::find(1);
        // dd($store->wholesaler_discount);
        $wholesaler_discount = $store->wholesaler_discount;

        $wholesaler_signup_is_hide = $store->wholesaler_signup_is_hide;

        if ($user->is_billing_updated == 1) {
            return redirect('/products');
        }

        return view('frontend.auth.billing', compact('user', 'states', 'cities', 'sunclub_choices', 'wholesaler_discount', 'wholesaler_signup_is_hide'));
    }

    public function finishSignUp(BillingInfoRequest $request)
    {
        // dd($request);
        \App\Services\TotalViewService::getView("fnsh SU");
        // dd($request);
        $user = User::find(Auth::user()->id);

        // dd($request);
        // if (auth()->user()->isFiacreCustomerRole()) {
        //  } else {
        //     return response()->json([
        //         "data_message" => 'User billling information is already updated. Go Back To Products Page'
        //     ], 400);
        // }

        if ($user->is_billing_updated == 1) {
            return response()->json([
                "data_message" => 'User billling information is already updated. Go Back To Products Page'
            ], 400);
        }

        if (!empty($user)) {

            if (!empty($request->input('first_name'))) {
                $user->first_name = $request->input('first_name');
            }
            if (!empty($request->input('last_name'))) {
                $user->last_name = $request->input('last_name');
            }
            if (!empty($request->input('contact_number'))) {
                $user->contact_number = $request->input('contact_number');
            }


            // stepd 2 added
            $user->title = $request->input('title');
            $user->street_address = $request->input('street_address');
            $user->city = $request->input('city');
            $user->state = $request->input('state');
            $user->zipcode = $request->input('zipcode');
            $city = $request->input('city');


            // uploaded image
            $photo_path = null;
            if ($request->hasFile('image_file')) {
                if (!$user->image_path == null || !$user->image_path == '') {
                    Storage::delete([$user->image_path]);
                }
                $photo_path = Storage::putFile('public/user/image', $request->file('image_file'));
                $user->image_path = $photo_path;
                $user->avatar_type = 'storage';
            }



            $billing_token_type = strtoupper($request->billing_token_type);

            //Billing token type if the user using a (1)(cc)Credit Card or (2)(ach)ACH
            if ($billing_token_type == "1") {
                $data = array(
                    'CardType' => $request->input('card_type'),
                    'CardNumber' => $request->get('card_number'),
                    'ExpirationMonth' => $request->get('exp_month'),
                    'ExpirationYear' => $request->get('exp_year'),
                    'CVV' => $request->get('cvv'), //optional
                    'FirstName' =>  $user->first_name,
                    'LastName' => $user->last_name,
                    'StreetAddress' =>  $user->street_address, //optional
                    'City' => $city, //optional
                    // 'State' =>  $state, //optional //string 2
                    'Zip' => $user->zipcode,
                    'EmailAddress' => $user->email, //optional
                );

                // PacePayment Create CC Token
                $cctoken = $this->PacePayment->CreateCCToken($data);
                $cctoken_decoded = json_decode($cctoken, true);
                DB::beginTransaction();
                $user->save();
                if ($cctoken_decoded['ResultCode'] == 0) {
                    $billing =  new BillingInfo();
                    $billing->user_id = $user->id;
                    $billing->bankName_or_cardName = $request->card_name;
                    $billing->CC_or_ACH = "CC"; /// CC or ACH
                    $billing->Token = $cctoken_decoded['Token'];
                    $billing->Token_SF = $cctoken_decoded['Token_SF'];
                    $billing->CVV = $request->cvv;
                    $billing->CardType = $cctoken_decoded['CardType'];
                    $billing->Last4 = $cctoken_decoded['Last4'];
                    $billing->save();

                    $fc = new FiacreCustomer;
                    $fc->fc_user_id = $user->id;
                    if (!empty($request->input('selected_organization'))) {
                        $fc->fc_selected_organization = $request->input('selected_organization');
                    }
                    $fc->save();


                    $user->assignRole(config('access.users.fiacre_customer_role'));
                    $user->is_billing_updated = 1;
                    $user->is_fiacre_customer = 1;
                    $user->customer_role = 4;
                    $user->save();
                    DB::commit();
                    return 'success';
                } else {
                    DB::rollBack();
                    return response()->json([
                        "data_message" => $cctoken_decoded['ResultDetail']
                    ], 400);
                }
            }

            if ($billing_token_type == "2") {
                $data = array(
                    'ACHType' => $request->input('ach_type'), // 1 for savings and 0 for Checking
                    'ACHAccountHolderType' => $request->input('ach_acc_holder_type'), // 0=Personal, 1=Business
                    'ACHAccount' => $request->input('ach_account_number'), // ACH Bank Account Number
                    'ACHRouting' => $request->input('ach_routing'), // ACH Bank Routing Number
                    'FirstName' =>  $user->first_name,
                    'LastName' => $user->last_name,
                    'StreetAddress' =>  $user->street_address, //optional
                    'City' => $city, //optional
                    // 'State' =>  $state, //optional //string 2
                    'Zip' => $user->zipcode,
                    'EmailAddress' => $user->email, //optional
                );
                $ACHToken = $this->PacePayment->CreateACHToken($data);
                $ACHToken_decoded2 = json_decode($ACHToken, true);
                DB::beginTransaction();
                $user->save();
                if ($ACHToken_decoded2['ResultCode'] == 0) {
                    $billing =  new BillingInfo();
                    $billing->user_id = $user->id;
                    $billing->bankName_or_cardName = $request->bank_name;
                    $billing->CC_or_ACH = "ACH"; /// CC or ACH
                    $billing->Token = $ACHToken_decoded2['Token'];
                    $billing->Token_SF = $ACHToken_decoded2['Token_SF'];
                    $billing->ACHType = $ACHToken_decoded2['ACHType'];
                    $billing->ACHAccountHolderType =  $ACHToken_decoded2['ACHAccountHolderType'];
                    $last4 = substr($request->input('ach_account_number'), -4);
                    $billing->Last4 = $last4;
                    $last3 = substr($request->input('ach_routing'), -3);
                    $billing->AchRoutingLast3 = $last3;
                    $billing->save();

                    $fc = new FiacreCustomer;
                    $fc->fc_user_id;
                    if (!empty($request->input('selected_organization'))) {
                        $fc->fc_selected_organization = $request->input('selected_organization');
                    }
                    $fc->save();

                    $user->assignRole(config('access.users.wholesale_user'));
                    $user->is_billing_updated = 1;
                    $user->is_fiacre_customer = 1;
                    $user->customer_role = 4;
                    $user->save();


                    DB::commit();
                    return 'success';
                } else {
                    DB::rollBack();
                    return response()->json([
                        "data_message" => $ACHToken_decoded2['ResultDetail']
                    ], 400);
                }
            }
        }
    }
}
