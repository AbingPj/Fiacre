<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\FrontEnd\BillingInfoRequest;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\BillingInfoAchToken;
use App\Models\BillingInfoCcToken;
use App\Models\City;
use App\Models\ReferralCode;
use App\Models\State;
use App\Models\Store;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Models\SubscriptionWholesaleMember;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class FinishSignUpController extends Controller
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
        $sunclub_choices =  SubscriptionSunclubChoice::where('id',1)->get();


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
        if ($user->is_billing_updated == 1) {
            // return redirect()->back()->withFlashDanger("User billling information is already updated.");
            return response()->json([
                "data_message" => 'User billling information is already updated. Go Back To Products Page'
            ], 400);
        }
        if (!empty($user)) {

            if (!empty($request->input('email'))) {
                $user->email = $request->input('email');
            }
            if (!empty($request->input('password'))) {
                $user->password =  Hash::make($request->input('password'));
            }
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

            // $city = null;
            // $findcity = City::find($request->input('city'));
            // if (!empty($findcity)) {
            //     $city = $findcity->name;
            // }
            $city = $request->input('city');

            $state = null;
            $findstate = State::find($request->input('state'));
            if (!empty($findstate)) {
                $state = $findstate->iso2;
            }


            // uploaded image
            $photo_path = null;
            if ($request->hasFile('image_file')) {
                if (!$user->image_path == null || !$user->image_path == '') {
                    // delete old image
                    Storage::delete([$user->image_path]);
                }
                // upload image again
                $photo_path = Storage::putFile('public/user/image', $request->file('image_file'));
                $user->image_path = $photo_path;
                $user->avatar_type = 'storage';
            }



            $billing_token_type = strtoupper($request->billing_token_type);

            //Billing token type if the user using a (1)(cc)Credit Card or (2)(ach)ACH
            if ($billing_token_type == "1") {

                /// subscription for user register as (1)sunclub member or (2)wholesale rember
                if ($request->subscription == '1') {

                    $data = array(
                        // 'CardType' => $this->getCardTypeId($request->input('card_type')),
                        'CardType' => $request->input('card_type'),
                        'CardNumber' => $request->input('card_number'),
                        'ExpirationMonth' => $request->input('exp_month'),
                        'ExpirationYear' => $request->input('exp_year'),
                        'CVV' => $request->input('cvv'), //optional
                        'FirstName' =>  $user->first_name,
                        'LastName' => $user->last_name,
                        'StreetAddress' =>  $user->street_address, //optional
                        'City' => $city, //optional
                        'State' =>  $state, //optional //string 2
                        'Zip' => $user->zipcode,
                        'EmailAddress' => $user->email, //optional
                    );


                    // PacePayment Create CC Token
                    $cctoken = $this->PacePayment->CreateCCToken($data);
                    $cctoken_decoded = json_decode($cctoken, true);

                    DB::beginTransaction();
                    $user->save();


                    if ($cctoken_decoded['ResultCode'] == 0) {


                        /// Save Billing Info and CC Token
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

                        $choice_id = 1;
                        $choice_id = $request->input('subscription_sunclub_choice_id');

                        ////
                        $price = SubscriptionSunclubChoice::find($choice_id)->price;
                        // $membership_fee = 50;
                        $membership_fee = SubscriptionSunclubChoice::find($choice_id)->membership_fee;
                        $amount = ($price +  $membership_fee);

                        if($amount <= 0) {

                            // save user Subscription
                            $user_subs = new SubscriptionSunclubMember();
                            $user_subs->user_id = $user->id;
                            $user_subs->start =  Carbon::now();
                            $end1 = Carbon::now();
                            $user_subs->end = $end1->addMonths(12);

                            $user_subs->subscription_sunclub_choice_id
                                = $request->input('subscription_sunclub_choice_id');
                            // $user_subs->TransRefID =  $cctokensale_data_decoded['TransRefID'];
                            // $user_subs->FuzeID = $cctokensale_data_decoded['FuzeID'];
                            // $user_subs->ApprovalCode = $cctokensale_data_decoded['ApprovalCode'];
                            $user_subs->save();

                            $record = new SubscriptionSunclubRecord();
                            $record->user_id = $user->id;
                            $record->subscription_sunclub_member_id = $user_subs->id;
                            $record->CC_or_ACH = "CC";
                            $record->amount = $price;
                            $record->Token = $cctoken_decoded['Token'];
                            $record->TransRefID = 0;
                            $record->FuzeID = 0;
                            $record->ApprovalCode = '0';

                            $record->start =  Carbon::now();
                            $end = Carbon::now();
                            $record->end = $end->addMonths(12);
                            $record->save();

                            $user->assignRole(config('access.users.sunclub_user'));
                            $user->is_billing_updated = 1;
                            $user->customer_role = 2;
                            $user->save();

                            $user_subs->current_sunclub_record_id =  $record->id;
                            $user_subs->save();

                            if (!$this->userExists($user->id)) {
                                $code = $this->generateRandomString(8);
                                $reffercode = new ReferralCode;
                                $reffercode->user_id = $user->id;
                                $reffercode->code = 'SF' . $code;
                                $reffercode->save();
                            }

                            DB::commit();
                            // return view('frontend.auth.signup-complete');
                            return 'success';


                        } else {
                            $cctokenSale = $this->PacePayment->ProcessCCTokenSale(
                                $cctoken_decoded['CardType'],
                                $cctoken_decoded['Token'],
                                $amount,
                                $request->cvv,
                                'T0250605-0010000-00000000',
                                $user->email,
                                $cctoken_decoded['Token_SF']
                            );;
                            $cctokenSale_decoded = json_decode($cctokenSale, true);

                            if ($cctokenSale_decoded['ResultCode'] == 0) {
                                // save user Subscription
                                $user_subs = new SubscriptionSunclubMember();
                                $user_subs->user_id = $user->id;
                                $user_subs->start =  Carbon::now();
                                $end1 = Carbon::now();
                                $user_subs->end = $end1->addMonths(12);

                                $user_subs->subscription_sunclub_choice_id
                                    = $request->input('subscription_sunclub_choice_id');
                                // $user_subs->TransRefID =  $cctokensale_data_decoded['TransRefID'];
                                // $user_subs->FuzeID = $cctokensale_data_decoded['FuzeID'];
                                // $user_subs->ApprovalCode = $cctokensale_data_decoded['ApprovalCode'];
                                $user_subs->save();

                                $record = new SubscriptionSunclubRecord();
                                $record->user_id = $user->id;
                                $record->subscription_sunclub_member_id = $user_subs->id;
                                $record->CC_or_ACH = "CC";
                                $record->amount = $price;
                                $record->Token = $cctoken_decoded['Token'];
                                $record->TransRefID = $cctokenSale_decoded['TransRefID'];
                                $record->FuzeID = $cctokenSale_decoded['FuzeID'];
                                $record->ApprovalCode = $cctokenSale_decoded['ApprovalCode'];

                                $record->start =  Carbon::now();
                                $end = Carbon::now();
                                $record->end = $end->addMonths(12);
                                $record->save();

                                $user->assignRole(config('access.users.sunclub_user'));
                                $user->is_billing_updated = 1;
                                $user->customer_role = 2;
                                $user->save();

                                $user_subs->current_sunclub_record_id =  $record->id;
                                $user_subs->save();

                                if (!$this->userExists($user->id)) {
                                    $code = $this->generateRandomString(8);
                                    $reffercode = new ReferralCode;
                                    $reffercode->user_id = $user->id;
                                    $reffercode->code = 'SF' . $code;
                                    $reffercode->save();
                                }

                                DB::commit();


                                // return view('frontend.auth.signup-complete');
                                return 'success';
                                // return redirect('/myprofile')->withFlashSuccess('Success');
                            } else {
                                DB::rollBack();
                                // return $cctokensale_data_decoded['ResultDetail'];
                                // dd($cctokenSale_decoded['ResultDetail']);
                                // return redirect()->back()->withFlashDanger($cctokenSale_decoded['ResultDetail']);
                                return response()->json([
                                    "data_message" => $cctokenSale_decoded['ResultDetail']
                                ], 400);
                            }
                        }


                    } else {
                        DB::rollBack();
                        // return $cctoken_data_decoded['ResultDetail'];
                        // dd($cctoken_decoded['ResultDetail']);
                        // return redirect()->back()->withFlashDanger($cctoken_decoded['ResultDetail']);
                        return response()->json([
                            "data_message" => $cctoken_decoded['ResultDetail']
                        ], 400);
                    }
                }



                /////////////////////////////////////////////////////////////////////////////////////




                //// WholeSaler CC
                else {

                    $data = array(
                        // 'CardType' =>  $this->getCardTypeId($request->input('card_type')),
                        'CardType' => $request->input('card_type'),
                        'CardNumber' => $request->get('card_number'),
                        'ExpirationMonth' => $request->get('exp_month'),
                        'ExpirationYear' => $request->get('exp_year'),
                        'CVV' => $request->get('cvv'), //optional
                        'FirstName' =>  $user->first_name,
                        'LastName' => $user->last_name,
                        'StreetAddress' =>  $user->street_address, //optional
                        'City' => $city, //optional
                        'State' =>  $state, //optional //string 2
                        'Zip' => $user->zipcode,
                        'EmailAddress' => $user->email, //optional
                    );

                    // PacePayment Create CC Token
                    $cctoken = $this->PacePayment->CreateCCToken($data);
                    $cctoken_decoded = json_decode($cctoken, true);

                    DB::beginTransaction();
                    $user->save();


                    if ($cctoken_decoded['ResultCode'] == 0) {

                        /// Save Billing Info and CC Token
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

                        $wholesaler = new SubscriptionWholesaleMember();
                        $wholesaler->user_id = $user->id;
                        $wholesaler->designation =  $request->get('business_designation');
                        $wholesaler->business_name = $request->get('business_name');
                        $wholesaler->street_address = $request->get('business_street_address');
                        $wholesaler->city = $request->get('business_city');
                        $wholesaler->state = $request->get('business_state');
                        $wholesaler->zipcode = $request->get('business_zipcode');

                        // uploaded image
                        $photo_path = null;
                        if ($request->hasFile('business_image_file')) {
                            $photo_path = Storage::putFile('public/business/image', $request->file('business_image_file'));
                            $wholesaler->business_image_path = $photo_path;
                        }
                        $wholesaler->save();

                        $user->assignRole(config('access.users.wholesale_user'));
                        $user->is_billing_updated = 1;
                        $user->customer_role = 3;
                        $user->save();

                        if (!$this->userExists($user->id)) {
                            $code = $this->generateRandomString(8);
                            $reffercode = new ReferralCode;
                            $reffercode->user_id = $user->id;
                            $reffercode->code = 'SF' . $code;
                            $reffercode->save();
                        }
                        DB::commit();
                        // return view('frontend.auth.signup-complete');
                        return 'success';

                        // return redirect()->back()->withFlashSuccess("Success");
                        // return redirect('/myprofile')->withFlashSuccess('Success');

                        // dump('success');
                        // dump($wholesaler);
                        // dd($cctoken_decoded);
                    } else {
                        DB::rollBack();
                        // dd($cctoken_decoded['ResultDetail']);
                        // return redirect()->back()->withFlashDanger($cctoken_decoded['ResultDetail']);
                        return response()->json([
                            "data_message" => $cctoken_decoded['ResultDetail']
                        ], 400);
                    }
                }
            }


            /////////////////////////////////////////////////////////////////////////////////////





            //Billing token type if the user using a (1)(cc)Credit Card or (2)(ach)ACH
            if ($billing_token_type == "2") {

                /// Register as Sun CLUB Member (ACH)
                if ($request->subscription == '1') {

                    $data = array(
                        // 'ACHType' => strtolower($request->input('ach_type')) == 'savings' ? '1' : '0', // 1 for savings and 0 for Checking
                        'ACHType' => $request->input('ach_type'), // 1 for savings and 0 for Checking
                        // 'ACHAccountHolderType' => strtolower($request->input('ach_acc_holder_type')) == 'personal' ? '0' : '1', // 0=Personal, 1=Business
                        'ACHAccountHolderType' => $request->input('ach_acc_holder_type'), // 0=Personal, 1=Business
                        'ACHAccount' => $request->input('ach_account_number'), // ACH Bank Account Number
                        'ACHRouting' => $request->input('ach_routing'), // ACH Bank Routing Number
                        'FirstName' =>  $user->first_name,
                        'LastName' => $user->last_name,
                        'StreetAddress' =>  $user->street_address, //optional
                        'City' => $city, //optional
                        'State' =>  $state, //optional //string 2
                        'Zip' => $user->zipcode,
                        'EmailAddress' => $user->email, //optional
                    );

                    // PacePayment Create ACH Token
                    $ACHtoken = $this->PacePayment->CreateACHToken($data);
                    $ACHtoken_decoded = json_decode($ACHtoken, true);

                    DB::beginTransaction();
                    $user->save();

                    if ($ACHtoken_decoded['ResultCode'] == 0) {


                        $billing =  new BillingInfo();
                        $billing->user_id = $user->id;
                        $billing->bankName_or_cardName = $request->bank_name;
                        $billing->CC_or_ACH = "ACH"; /// CC or ACH
                        $billing->Token = $ACHtoken_decoded['Token'];
                        $billing->Token_SF = $ACHtoken_decoded['Token_SF'];
                        $billing->ACHType = $ACHtoken_decoded['ACHType'];
                        $billing->ACHAccountHolderType =  $ACHtoken_decoded['ACHAccountHolderType'];
                        $last4 = substr($request->input('ach_account_number'), -4);
                        $billing->Last4 = $last4;
                        $last3 = substr($request->input('ach_routing'), -3);
                        $billing->AchRoutingLast3 = $last3;
                        $billing->save();

                        //// get Sun Club Payments
                        $choice_id = 1;
                        $choice_id = $request->input('subscription_sunclub_choice_id');
                        $price = SubscriptionSunclubChoice::find($request->input('subscription_sunclub_choice_id'))->price;
                        // $membership_fee = 50;
                        $membership_fee = SubscriptionSunclubChoice::find($request->input('subscription_sunclub_choice_id'))->membership_fee;
                        $amount = ($price +  $membership_fee);

                        if($amount <= 0) {
                            // save user Subscription
                            $user_subs = new SubscriptionSunclubMember();
                            $user_subs->user_id = $user->id;
                            $user_subs->start =  Carbon::now();
                            $end1 = Carbon::now();
                            $user_subs->end = $end1->addMonths(12);
                            $user_subs->subscription_sunclub_choice_id
                                = $request->input('subscription_sunclub_choice_id');
                            $user_subs->save();

                            // save payment Subscription Record
                            $record = new SubscriptionSunclubRecord();
                            $record->user_id = $user->id;
                            $record->subscription_sunclub_member_id = $user_subs->id;
                            $record->CC_or_ACH = "ACH";
                            $record->amount = $price;
                            $record->Token = $ACHtoken_decoded['Token'];
                            $record->TransRefID = 0;
                            $record->FuzeID = 0;
                            $record->ApprovalCode = '0';
                            $record->start =  Carbon::now();
                            $end = Carbon::now();
                            $record->end = $end->addMonths(12);
                            $record->save();

                            $user->assignRole(config('access.users.sunclub_user'));
                            $user->is_billing_updated = 1;
                            $user->customer_role = 2;
                            $user->save();


                            $user_subs->current_sunclub_record_id =  $record->id;
                            $user_subs->save();

                            if (!$this->userExists($user->id)) {
                                $code = $this->generateRandomString(8);
                                $reffercode = new ReferralCode;
                                $reffercode->user_id = $user->id;
                                $reffercode->code = 'SF' . $code;
                                $reffercode->save();
                            }

                            DB::commit();
                            // return view('frontend.auth.signup-complete');
                            return 'success';

                        } else {
                            $ACHtokenSale = $this->PacePayment->ProcessACHTokenSale(
                                $ACHtoken_decoded['Token'],
                                $amount,
                                $user->email,
                                $ACHtoken_decoded['Token_SF']
                            );

                            $ACHtokenSale_decoded = json_decode($ACHtokenSale, true);

                            if ($ACHtokenSale_decoded['ResultCode'] == 0) {

                                // save user Subscription
                                $user_subs = new SubscriptionSunclubMember();
                                $user_subs->user_id = $user->id;
                                $user_subs->start =  Carbon::now();
                                $end1 = Carbon::now();
                                $user_subs->end = $end1->addMonths(12);
                                $user_subs->subscription_sunclub_choice_id
                                    = $request->input('subscription_sunclub_choice_id');
                                $user_subs->save();

                                // save payment Subscription Record
                                $record = new SubscriptionSunclubRecord();
                                $record->user_id = $user->id;
                                $record->subscription_sunclub_member_id = $user_subs->id;
                                $record->CC_or_ACH = "ACH";
                                $record->amount = $price;
                                $record->Token = $ACHtoken_decoded['Token'];
                                $record->TransRefID = $ACHtokenSale_decoded['TransRefID'];
                                $record->FuzeID = $ACHtokenSale_decoded['FuzeID'];
                                $record->ApprovalCode = $ACHtokenSale_decoded['ApprovalCode'];
                                $record->start =  Carbon::now();
                                $end = Carbon::now();
                                $record->end = $end->addMonths(12);
                                $record->save();

                                $user->assignRole(config('access.users.sunclub_user'));
                                $user->is_billing_updated = 1;
                                $user->customer_role = 2;
                                $user->save();


                                $user_subs->current_sunclub_record_id =  $record->id;
                                $user_subs->save();

                                if (!$this->userExists($user->id)) {
                                    $code = $this->generateRandomString(8);
                                    $reffercode = new ReferralCode;
                                    $reffercode->user_id = $user->id;
                                    $reffercode->code = 'SF' . $code;
                                    $reffercode->save();
                                }


                                DB::commit();
                                // return view('frontend.auth.signup-complete');
                                return 'success';

                                // return redirect()->back()->withFlashSuccess("Success");
                                // return redirect('/myprofile')->withFlashSuccess('Success');
                            } else {
                                DB::rollBack();
                                // dd($ACHtokenSale_decoded['ResultDetail']);
                                // return redirect()->back()->withFlashDanger($ACHtokenSale_decoded['ResultDetail']);
                                return response()->json([
                                    "data_message" => $ACHtokenSale_decoded['ResultDetail']
                                ], 400);
                            }
                        }


                    } else {
                        DB::rollBack();
                        // dd($ACHtoken_decoded['ResultDetail']);
                        // return redirect()->back()->withFlashDanger($ACHtoken_decoded['ResultDetail']);
                        return response()->json([
                            "data_message" => $ACHtoken_decoded['ResultDetail']
                        ], 400);
                    }
                }



                ////////////////////////////////////////////////////////////////////////////////





                /// Register as Wholse Saler Member (ACH)
                else {

                    $data = array(
                        // 'ACHType' => strtolower($request->input('ach_type')) == 'savings' ? '1' : '0', // 1 for savings and 0 for Checking
                        'ACHType' => $request->input('ach_type'), // 1 for savings and 0 for Checking
                        // 'ACHAccountHolderType' => strtolower($request->input('ach_acc_holder_type')) == 'personal' ? '0' : '1', // 0=Personal, 1=Business
                        'ACHAccountHolderType' => $request->input('ach_acc_holder_type'), // 0=Personal, 1=Business
                        'ACHAccount' => $request->input('ach_account_number'), // ACH Bank Account Number
                        'ACHRouting' => $request->input('ach_routing'), // ACH Bank Routing Number
                        'FirstName' =>  $user->first_name,
                        'LastName' => $user->last_name,
                        'StreetAddress' =>  $user->street_address, //optional
                        'City' => $city, //optional
                        'State' =>  $state, //optional //string 2
                        'Zip' => $user->zipcode,
                        'EmailAddress' => $user->email, //optional
                    );



                    $ACHToken = $this->PacePayment->CreateACHToken($data);
                    $ACHToken_decoded2 = json_decode($ACHToken, true);

                    DB::beginTransaction();
                    $user->save();




                    if ($ACHToken_decoded2['ResultCode'] == 0) {
                        /// Save Billing Info and ACH Token



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




                        $wholesaler = new SubscriptionWholesaleMember();
                        $wholesaler->user_id = $user->id;
                        $wholesaler->designation =  $request->get('business_designation');
                        $wholesaler->business_name = $request->get('business_name');
                        $wholesaler->street_address = $request->get('business_street_address');
                        $wholesaler->city = $request->get('business_city');
                        $wholesaler->state = $request->get('business_state');
                        $wholesaler->zipcode = $request->get('business_zipcode');

                        // uploaded image
                        $photo_path = null;
                        if ($request->hasFile('business_image_file')) {
                            $photo_path = Storage::putFile('public/business/image', $request->file('business_image_file'));
                            $wholesaler->business_image_path = $photo_path;
                        }
                        $wholesaler->save();

                        $user->assignRole(config('access.users.wholesale_user'));
                        $user->is_billing_updated = 1;
                        $user->customer_role = 3;
                        $user->save();

                        if (!$this->userExists($user->id)) {
                            $code = $this->generateRandomString(8);
                            $reffercode = new ReferralCode;
                            $reffercode->user_id = $user->id;
                            $reffercode->code = 'SF' . $code;
                            $reffercode->save();
                        }

                        DB::commit();
                        // return view('frontend.auth.signup-complete');
                        return 'success';
                        // return redirect()->back()->withFlashSuccess("Success");
                        // return redirect('/myprofile')->withFlashSuccess('Success');
                    } else {
                        DB::rollBack();
                        // dd($ACHToken_decoded['ResultDetail']);
                        // return redirect()->back()->withFlashDanger($ACHToken_decoded2['ResultDetail']);
                        return response()->json([
                            "data_message" => $ACHToken_decoded2['ResultDetail']
                        ], 400);
                    }
                }
            }
        }
    }


    public function getCardTypeId($card_type)
    {
        $type = strtolower($card_type);
        switch ($type) {
            case 'american express':
                return 1;
            case 'discover':
                return 2;
            case 'mastercard':
                return 3;
            case 'visa':
                return 4;
        }
    }

    function generateRandomString($length = 20)
    {
        $characters = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ';
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

    function codeExists($code)
    {
        return ReferralCode::where('code', $code)->exists();
    }

    function userExists($user_id)
    {
        return ReferralCode::where('user_id', $user_id)->exists();
    }
}
