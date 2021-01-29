<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\UpdateOrgRequest2;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrgProfileController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::where('user_id',auth()->user()->id)->first();
        return view('backend.admin-org.org-profie', compact('org'));
    }
    public function updateOrganization(UpdateOrgRequest2 $request)
    {
        // dd($request);
        $org = Organization::where('user_id',auth()->user()->id)->first();
        $data = Organization::find($org->id);
        $data->org_state = $request->org_state;
        $data->org_cityprov = $request->org_cityprov;
        $data->org_street = $request->org_street;
        $data->org_zipcode = $request->org_zipcode;
        $data->org_contact_land = $request->org_contact_land;
        $data->org_contact_mobile = $request->org_contact_mobile;
        $data->save();
        return response()->json($data, 200);
    }
}
