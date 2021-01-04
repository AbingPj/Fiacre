<?php

namespace App\Http\Controllers\Frontend\cc_ach;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\cc_ach\saveAchReqeust;
use App\Models\Auth\User;
use App\Models\BillingInfo;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;
use App\Services\PaceFuzePaymentApiService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class saveAchController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->PacePayment = new PaceFuzePaymentApiService;
    }

    public function saveAchSunClub(saveAchReqeust $request)
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

        if ($ACHToken_decoded2['ResultCode'] == 0) {

            $findbilling = BillingInfo::where('user_id', $user->id)->first();
            $billing = BillingInfo::find($findbilling->id);

            if (!empty($billing)) {
                // $billing->bankName_or_cardName = $request->bank_name;
                $billing->CC_or_ACH = "ACH"; /// CC or ACH
                $billing->Token = $ACHToken_decoded2['Token'];
                $billing->ACHType = $ACHToken_decoded2['ACHType'];
                $billing->ACHAccountHolderType =  $ACHToken_decoded2['ACHAccountHolderType'];

                $last4 = substr($request->input('ach_account_number'), -4);
                $billing->Last4 = $last4;

                $last3 = substr($request->input('ach_routing'), -3);
                $billing->AchRoutingLast3 = $last3;
                $billing->status = 1;
                $billing->save();

                DB::commit();
                $request->session()->flash('flash_success', "Updated Billing Card Information");
                return 'success';
            } else {
                return 'billing info not found';
            }
        } else {
            DB::rollBack();
            $data = $ACHToken_decoded2['ResultDetail'];
            return response()->json([
                "data_message" => $data
            ], 400);
        }
    }

    public function saveAchWholesaler(saveAchReqeust $request)
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

        if ($ACHToken_decoded2['ResultCode'] == 0) {

            $findbilling = BillingInfo::where('user_id', $user->id)->first();
            $billing = BillingInfo::find($findbilling->id);

            if (!empty($billing)) {
                // $billing->bankName_or_cardName = $request->bank_name;
                $billing->CC_or_ACH = "ACH"; /// CC or ACH
                $billing->Token = $ACHToken_decoded2['Token'];
                $billing->ACHType = $ACHToken_decoded2['ACHType'];
                $billing->ACHAccountHolderType =  $ACHToken_decoded2['ACHAccountHolderType'];

                $last4 = substr($request->input('ach_account_number'), -4);
                $billing->Last4 = $last4;

                $last3 = substr($request->input('ach_routing'), -3);
                $billing->AchRoutingLast3 = $last3;
                $billing->status = 1;
                $billing->save();

                DB::commit();
                $request->session()->flash('flash_success', "Updated Billing Card Information");
                return 'success';
            } else {
                return 'billing info not found';
            }
        } else {
            DB::rollBack();
            $data = $ACHToken_decoded2['ResultDetail'];
            return response()->json([
                "data_message" => $data
            ], 400);
        }
    }
}
