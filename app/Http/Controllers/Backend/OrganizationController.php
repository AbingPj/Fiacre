<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class OrganizationController extends Controller
{
    public function __construct()
    {
        // $this->PacePayment = new PaceFuzePaymentApiService;
        // $this->EmailsService = new EmailsService;
    }

    public function index()
    {
        return view('backend.organization.index');
    }
    public function show($org_id)
    {
        $org = Organization::findOrFail($org_id);
        return view('backend.organization.show', compact('org'));
    }
    public function getOrganizationInfo($org_id)
    {
        $org = Organization::findOrFail($org_id);
        return response()->json($org, 200);
    }
    public function add()
    {
        return view('backend.organization.add');
    }

    public function getOrganization(){
        $organization = Organization::all();
        return response()->json($organization, 200);
    }

    public function addOrganization(Request $request){

        $data = new Organization;
        $data->org_name = $request->name;
        $data->org_email = $request->email;
        $data->org_optionc_id = $request->optionc_id;
        $data->org_type = $request->type;
        $data->org_lat = $request->lat;
        $data->org_lng= $request->name;
        $data->org_state= $request->state;
        $data->org_cityprov= $request->cityprov;
        $data->org_street= $request->street;
        $data->org_zipcode= $request->zipcode;
        $data->org_contact_land= $request->contact_land;
        $data->org_contact_mobile= $request->contact_mobile;
        $data->org_contact_title= $request->contact_title;
        $data->org_contact_fname= $request->contact_fname;
        $data->org_contact_lname= $request->contact_lname;
        $data->org_contact_suffix= $request->contact_suffix;
        $data->org_contact_email= $request->contact_email;
        $data->org_diocese= $request->contact_diocese;
        // $data->org_logo= $request->logo;
        // $data->org_status= $request->contact_status;
        // $data->org_is_active= $request->contact_is_active;
        if ($request->hasFile('logo')) {
            $photo_path = Storage::putFile('public/organizations/logo', $request->file('logo'));
            $data->org_logo= photo_path;
        }
        $data->save();

        return response()->json($data, 200);
    }
    public function updateOrganization(){
        $organization = Organization::all();
        return response()->json($organization, 200);
    }


}
