<?php

namespace App\Http\Controllers\Frontend\cc_ach;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\cc_ach\saveCcReqeust;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;
use App\Services\PaceFuzePaymentApiService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class saveCcController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
    }

    public function saveCcSunClub(saveCcReqeust $request)
    {
        // dd($request);
        $user = User::find(Auth::user()->id);

        $city = null;
        $findcity = City::find($user->city);
        if (!empty($findcity)) {
            $city = $findcity->name;
        } else {
            $city = $user->city;
        }
        $state = null;
        $findstate = State::find($request->input('state'));
        if (!empty($findstate)) {
            $state = $findstate->iso2;
        }


        DB::beginTransaction();

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


        $cctoken = $this->PacePayment->CreateCCToken($data);
        $cctoken_decoded = json_decode($cctoken, true);

        if ($cctoken_decoded['ResultCode'] == 0) {


            $findbilling = BillingInfo::where('user_id', $user->id)->first();
            $billing = BillingInfo::find($findbilling->id);
            if (!empty($billing)) {

                $billing->bankName_or_cardName = $request->card_name;
                $billing->CC_or_ACH = "CC"; /// CC or ACH
                $billing->Token = $cctoken_decoded['Token'];
                $billing->CVV = $request->cvv;
                $billing->CardType = $cctoken_decoded['CardType'];
                $billing->Last4 = $cctoken_decoded['Last4'];
                $billing->save();

                DB::commit();
                $request->session()->flash('flash_success', "Updated Billing Card Information");
                return 'success';
            } else {
                return 'billing info not found';
            }
        } else {
            DB::rollBack();
            $data = $cctoken_decoded['ResultDetail'];
            return response()->json([
                "data_message" => $data
            ], 400);
        }
    }

    public function saveCcWholesaler(saveCcReqeust $request)
    {


        $user = User::find(Auth::user()->id);

        $city = null;
        $findcity = City::find($user->city);
        if (!empty($findcity)) {
            $city = $findcity->name;
        } else {
            $city = $user->city;
        }
        $state = null;
        $findstate = State::find($request->input('state'));
        if (!empty($findstate)) {
            $state = $findstate->iso2;
        }


        DB::beginTransaction();

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


        $cctoken = $this->PacePayment->CreateCCToken($data);
        $cctoken_decoded = json_decode($cctoken, true);

        if ($cctoken_decoded['ResultCode'] == 0) {


            $findbilling = BillingInfo::where('user_id', $user->id)->first();
            $billing = BillingInfo::find($findbilling->id);
            if (!empty($billing)) {

                $billing->bankName_or_cardName = $request->card_name;
                $billing->CC_or_ACH = "CC"; /// CC or ACH
                $billing->Token = $cctoken_decoded['Token'];
                $billing->CVV = $request->cvv;
                $billing->CardType = $cctoken_decoded['CardType'];
                $billing->Last4 = $cctoken_decoded['Last4'];
                $billing->save();

                DB::commit();
                $request->session()->flash('flash_success', "Updated Billing Card Information");
                return 'success';
            } else {
                return 'billing info not found';
            }
        } else {
            DB::rollBack();
            $data = $cctoken_decoded['ResultDetail'];
            return response()->json([
                "data_message" => $data
            ], 400);
        }
    }
}
