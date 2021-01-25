<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\FrontEnd\UpdateBillingProfileRequest;
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



        if ($user->is_fiacre_customer) {

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
            $customer = $user;
            return view(
                'frontend.user.profile',
                compact('user', 'states', 'cities')

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
        }
        // return redirect()->back()->withFlashSuccess('Successfully Updated');
    }

    public function wholeSalerPaymentRecords()
    {
        $records = SubscriptionWholesaleRecord::where('user_id', Auth::user()->id)->get();
        dd($records);
    }
}
