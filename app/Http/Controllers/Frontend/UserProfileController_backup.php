<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\UpdateBillingProfileRequest;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\City;
use App\Models\State;
use App\Models\Store;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionWholesaleMember;
use App\Models\SubscriptionWholesaleRecord;
use App\Services\ImagePathService;
use App\Services\PaceFuzePaymentApiService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserProfileController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
    }
    public function index()
    {
        $user = User::findOrFail(Auth::user()->id);
        $states =  State::orderBy('name')->get();
        $cities =  City::orderBy('name')->take(100)->get();



        if ($user->customer_role == 2 || $user->customer_role == 3) {

            $user->image_path = $user->getPicture();

            $billinginfo = BillingInfo::where('user_id', $user->id)->first();
            if (!empty($billinginfo)) {
                $billinginfo->Last4 = '**** **** **** ' . $billinginfo->Last4;
                if ($billinginfo->CC_or_ACH == 'ACH') {
                    $billinginfo->Last4 = '********' . $billinginfo->Last4;
                }
                $billinginfo->CVV = '***';
                $billinginfo->AchRoutingLast3 = '********' . $billinginfo->AchRoutingLast3;
                $user->billinginfo = $billinginfo;
            }
            // if customer is sunfarm member
            if ($user->customer_role == 2) {
                $sunclub = SubscriptionSunclubMember::where('user_id', $user->id)->first();
                if (!empty($sunclub)) {
                    $user->sunclub_choice_id = $sunclub->subscription_sunclub_choice_id;
                    $expiration_date = Carbon::parse($sunclub->end)->setTime(0, 0, 0);
                    $sunclub->expiration_date = $expiration_date->format('F d, Y');
                    $user->sunclub = $sunclub;
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
                $user->business = $business;
            }


            $customer = $user;



            $sunclub_choices =  SubscriptionSunclubChoice::OrderBy('price', 'DESC')->get();
            $store = Store::find(1);
            // dd($store->wholesaler_discount);
            $wholesaler_discount = $store->wholesaler_discount;


            return view(
                'frontend.user.profile',
                compact('user', 'states', 'cities', 'sunclub_choices', 'wholesaler_discount')

            );


            // return redirect()->back()->withFlashDanger($cctokenSale_decoded['ResultDetail']);
        } else {
            return abort(404);
        }
    }


    public function updateProfile(UpdateBillingProfileRequest $request)
    {

        // dd($request);

        \App\Services\TotalViewService::getView("updt prof");

        $user = User::find(Auth::user()->id);

        if (!empty($user)) {

            if (!empty($request->title)) {
                $user->title = $request->title;
            }
            if (!empty($request->first_name)) {
                $user->first_name = $request->first_name;
            }
            if (!empty($request->last_name)) {
                $user->last_name = $request->last_name;
            }
            if (!empty($request->street_address)) {
                $user->street_address = $request->street_address;
            }
            if (!empty($request->state)) {
                $user->state = $request->state;
            }
            if (!empty($request->city)) {
                $user->city = $request->city;
            }
            if (!empty($request->zipcode)) {
                $user->zipcode = $request->zipcode;
            }

            if (!empty($request->contact_number)) {
                $user->contact_number = $request->contact_number;
            }

            if (!empty($request->contact_number_type)) {
                $user->contact_number_type = $request->contact_number_type;
            }



            // $city = null;
            // $findcity = City::find($user->city);
            // if (!empty($findcity)) {
            //     $city = $findcity->name;
            // }

            // dd($request->city);
            $city = $request->city;


            $state = null;
            $findstate = State::find($user->state);
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

            DB::beginTransaction();
            $user->save();

            $billing = BillingInfo::where('user_id', $user->id)->first();

            if (!empty($billing)) {
                if ($billing->CC_or_ACH == 'CC') {
                    $UpdateCCToken = $this->PacePayment->UpdateCCToken(
                        $billing->Token,
                        null,
                        null,
                        $user->first_name,
                        $user->last_name,
                        $user->street_address,
                        $city,
                        $state,
                        $user->zipcode,
                        $user->email
                    );

                    $cctoken_decoded = json_decode($UpdateCCToken, true);
                    if ($cctoken_decoded['ResultCode'] == 0) { } else {
                        DB::rollBack();
                        return redirect()->back()->withFlashDanger($cctoken_decoded['ResultDetail']);
                    }
                }


                if ($billing->CC_or_ACH == 'ACH') {
                    $UpdateACHToken = $this->PacePayment->UpdateACHToken(
                        $billing->Token,
                        $user->first_name,
                        $user->last_name,
                        $user->street_address,
                        $city,
                        $state,
                        $user->zipcode,
                        $user->email
                    );

                    $achctoken_decoded = json_decode($UpdateACHToken, true);

                    // dd($achctoken_decoded);
                    if ($achctoken_decoded['ResultCode'] == 0) { } else {
                        DB::rollBack();
                        return redirect()->back()->withFlashDanger($achctoken_decoded['ResultDetail']);
                    }
                }


                if ($user->customer_role == 3) {

                    $wholesaler = SubscriptionWholesaleMember::where('user_id', $user->id)->first();

                    if (!empty($wholesaler)) {
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
                    }
                }

                DB::commit();
                return redirect()->back()->withFlashSuccess('Successfully Updated');;
            } else {
                DB::rollBack();
                return redirect()->back()->withFlashDanger('User Info not found');;
            }





            // $billing_token_type = strtoupper($request->billing_token_type);

            // $user->save();


            /// SunClub
            // if ($user->customer_role == 2) {
            //     //(1)(cc)Credit Card or (2)(ach)ACH
            //     if ($billing_token_type == "1") {

            //         if (!empty($request->card_number)) {
            //             $data = array(
            //                 // 'CardType' => $this->getCardTypeId($request->input('card_type')),
            //                 'CardType' => $request->input('card_type'),
            //                 'CardNumber' => $request->input('card_number'),
            //                 'ExpirationMonth' => $request->input('exp_month'),
            //                 'ExpirationYear' => $request->input('exp_year'),
            //                 'CVV' => $request->input('cvv'), //optional
            //                 'FirstName' =>  $user->first_name,
            //                 'LastName' => $user->last_name,
            //                 'StreetAddress' =>  $user->street_address, //optional
            //                 'City' => $city, //optional
            //                 'State' =>  $state, //optional //string 2
            //                 'Zip' => $user->zipcode,
            //                 'EmailAddress' => $user->email, //optional
            //             );

            //             // PacePayment Create CC Token
            //             $cctoken = $this->PacePayment->CreateCCToken($data);
            //             $cctoken_decoded = json_decode($cctoken, true);
            //             DB::beginTransaction();
            //             $user->save();
            //             if ($cctoken_decoded['ResultCode'] == 0) {
            //                 /// Save Billing Info and CC Token
            //                 $billing = BillingInfo::where('user_id', $user->id)->first();
            //                 if (!empty($request->card_name)) {
            //                     $user->bankName_or_cardName = $request->card_name;
            //                 }
            //                 $billing->CC_or_ACH = "CC"; /// CC or ACH
            //                 $billing->Token = $cctoken_decoded['Token'];
            //                 $billing->CVV = $request->cvv;
            //                 $billing->CardType = $cctoken_decoded['CardType'];
            //                 $billing->Last4 = $cctoken_decoded['Last4'];
            //                 $billing->save();
            //                 DB::commit();
            //                 return redirect()->back()->withFlashSuccess('Successfully Updated');
            //             } else {
            //                 DB::rollBack();
            //                 // return $cctoken_data_decoded['ResultDetail'];
            //                 // dd($cctoken_decoded['ResultDetail']);
            //                 return redirect()->back()->withFlashDanger($cctoken_decoded['ResultDetail']);
            //             }
            //         }
            //     }
            //     ///  (2) ACH
            //     else {


            //         if (!empty($request->ach_account_number)) {
            //             $data = array(
            //                 'ACHType' => $request->input('ach_type'), // 1 for savings and 0 for Checking
            //                 'ACHAccountHolderType' => $request->input('ach_acc_holder_type'), // 0=Personal, 1=Business
            //                 'ACHAccount' => $request->input('ach_account_number'), // ACH Bank Account Number
            //                 'ACHRouting' => $request->input('ach_routing'), // ACH Bank Routing Number
            //                 'FirstName' =>  $user->first_name,
            //                 'LastName' => $user->last_name,
            //                 'StreetAddress' =>  $user->street_address, //optional
            //                 'City' => $city, //optional
            //                 'State' =>  $state, //optional //string 2
            //                 'Zip' => $user->zipcode,
            //                 'EmailAddress' => $user->email, //optional
            //             );


            //             $ACHToken = $this->PacePayment->CreateACHToken($data);
            //             $ACHToken_decoded2 = json_decode($ACHToken, true);
            //             DB::beginTransaction();
            //             $user->save();

            //             if ($ACHToken_decoded2['ResultCode'] == 0) {
            //                 /// Save Billing Info and ACH Token

            //                 $billing = BillingInfo::where('user_id', $user->id)->first();
            //                 if (!empty($request->bank_name)) {
            //                     $user->bankName_or_cardName = $request->bank_name;
            //                 }
            //                 $billing->CC_or_ACH = "ACH"; /// CC or ACH
            //                 $billing->Token = $ACHToken_decoded2['Token'];
            //                 $billing->ACHType = $ACHToken_decoded2['ACHType'];
            //                 $billing->ACHAccountHolderType =  $ACHToken_decoded2['ACHAccountHolderType'];
            //                 $last4 = substr($request->input('ach_account_number'), -4);
            //                 $billing->Last4 = $last4;
            //                 $last3 = substr($request->input('ach_routing'), -3);
            //                 $billing->AchRoutingLast3 = $last3;
            //                 $billing->save();

            //                 DB::commit();
            //                 return redirect()->back()->withFlashSuccess('Successfully Updated');;
            //             } else {
            //                 DB::rollBack();
            //                 return redirect()->back()->withFlashDanger($ACHToken_decoded2['ResultDetail']);
            //             }
            //         }
            //     }
            // }

            // //// Whole Saler
            // else {


            //     $wholesaler = SubscriptionWholesaleMember::where('user_id', $user->id)->first();

            //     if (!empty($wholesaler)) {
            //         $wholesaler->designation =  $request->get('business_designation');
            //         $wholesaler->business_name = $request->get('business_name');
            //         $wholesaler->street_address = $request->get('business_street_address');
            //         $wholesaler->city = $request->get('business_city');
            //         $wholesaler->state = $request->get('business_state');
            //         $wholesaler->zipcode = $request->get('business_zipcode');
            //         // uploaded image
            //         $photo_path = null;
            //         if ($request->hasFile('business_image_file')) {
            //             $photo_path = Storage::putFile('public/business/image', $request->file('business_image_file'));
            //             $wholesaler->business_image_path = $photo_path;
            //         }
            //         $wholesaler->save();
            //     }

            //     //(1)(cc)Credit Card or (2)(ach)ACH
            //     if ($billing_token_type == "1") {

            //         if (!empty($request->card_number)) {
            //             $data = array(
            //                 // 'CardType' => $this->getCardTypeId($request->input('card_type')),
            //                 'CardType' => $request->input('card_type'),
            //                 'CardNumber' => $request->input('card_number'),
            //                 'ExpirationMonth' => $request->input('exp_month'),
            //                 'ExpirationYear' => $request->input('exp_year'),
            //                 'CVV' => $request->input('cvv'), //optional
            //                 'FirstName' =>  $user->first_name,
            //                 'LastName' => $user->last_name,
            //                 'StreetAddress' =>  $user->street_address, //optional
            //                 'City' => $city, //optional
            //                 'State' =>  $state, //optional //string 2
            //                 'Zip' => $user->zipcode,
            //                 'EmailAddress' => $user->email, //optional
            //             );

            //             // PacePayment Create CC Token
            //             $cctoken = $this->PacePayment->CreateCCToken($data);
            //             $cctoken_decoded = json_decode($cctoken, true);
            //             DB::beginTransaction();
            //             $wholesaler->save();
            //             $user->save();
            //             if ($cctoken_decoded['ResultCode'] == 0) {
            //                 /// Save Billing Info and CC Token
            //                 $billing = BillingInfo::where('user_id', $user->id)->first();
            //                 if (!empty($request->card_name)) {
            //                     $user->bankName_or_cardName = $request->card_name;
            //                 }
            //                 $billing->CC_or_ACH = "CC"; /// CC or ACH
            //                 $billing->Token = $cctoken_decoded['Token'];
            //                 $billing->CVV = $request->cvv;
            //                 $billing->CardType = $cctoken_decoded['CardType'];
            //                 $billing->Last4 = $cctoken_decoded['Last4'];
            //                 $billing->save();
            //                 DB::commit();
            //                 return redirect()->back()->withFlashSuccess('Successfully Updated');
            //             } else {
            //                 DB::rollBack();
            //                 // return $cctoken_data_decoded['ResultDetail'];
            //                 // dd($cctoken_decoded['ResultDetail']);
            //                 return redirect()->back()->withFlashDanger($cctoken_decoded['ResultDetail']);
            //             }
            //         }
            //     }
            //     ///  (2) ACH
            //     else {


            //         if (!empty($request->ach_account_number)) {
            //             $data = array(
            //                 'ACHType' => $request->input('ach_type'), // 1 for savings and 0 for Checking
            //                 'ACHAccountHolderType' => $request->input('ach_acc_holder_type'), // 0=Personal, 1=Business
            //                 'ACHAccount' => $request->input('ach_account_number'), // ACH Bank Account Number
            //                 'ACHRouting' => $request->input('ach_routing'), // ACH Bank Routing Number
            //                 'FirstName' =>  $user->first_name,
            //                 'LastName' => $user->last_name,
            //                 'StreetAddress' =>  $user->street_address, //optional
            //                 'City' => $city, //optional
            //                 'State' =>  $state, //optional //string 2
            //                 'Zip' => $user->zipcode,
            //                 'EmailAddress' => $user->email, //optional
            //             );


            //             $ACHToken = $this->PacePayment->CreateACHToken($data);
            //             $ACHToken_decoded2 = json_decode($ACHToken, true);
            //             DB::beginTransaction();
            //             $wholesaler->save();
            //             $user->save();

            //             if ($ACHToken_decoded2['ResultCode'] == 0) {
            //                 /// Save Billing Info and ACH Token

            //                 $billing = BillingInfo::where('user_id', $user->id)->first();
            //                 if (!empty($request->bank_name)) {
            //                     $user->bankName_or_cardName = $request->bank_name;
            //                 }
            //                 $billing->CC_or_ACH = "ACH"; /// CC or ACH
            //                 $billing->Token = $ACHToken_decoded2['Token'];
            //                 $billing->ACHType = $ACHToken_decoded2['ACHType'];
            //                 $billing->ACHAccountHolderType =  $ACHToken_decoded2['ACHAccountHolderType'];
            //                 $last4 = substr($request->input('ach_account_number'), -4);
            //                 $billing->Last4 = $last4;
            //                 $last3 = substr($request->input('ach_routing'), -3);
            //                 $billing->AchRoutingLast3 = $last3;
            //                 $billing->save();

            //                 DB::commit();
            //                 return redirect()->back()->withFlashSuccess('Successfully Updated');;
            //             } else {
            //                 DB::rollBack();
            //                 return redirect()->back()->withFlashDanger($ACHToken_decoded2['ResultDetail']);
            //             }
            //         }
            //     }
            // }


        }
        // return redirect()->back()->withFlashSuccess('Successfully Updated');
    }

    public function wholeSalerPaymentRecords()
    {
        $records = SubscriptionWholesaleRecord::where('user_id', Auth::user()->id)->get();
        dd($records);
    }
}
