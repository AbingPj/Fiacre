<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Order;
use App\Models\OrganizationReport;
use Illuminate\Http\Request;
use stdClass;

class ReportsFundRaiseCrtlr extends Controller
{
    public function index()
    {
        return view('backend.reports.fundraise.index');
    }

    public function getOrganizationFundraiseList(){
        $data = OrganizationReport::reportOrgList()->get();
        return response()->json($data, 200);
    }

    public function getOrganizationFundraise($optionc_id)
    {
        $org = OrganizationReport::where('org_optionc_id', $optionc_id)->first();
        $orders = [];
        if(!empty($org)){
            $orders = Order::with('user','order_products')->where('organization_id', $org->id)->OrderBy('date', 'DESC')->get();
            foreach ($orders as $key => $item) {
                foreach ($item->order_products as $key => $value) {
                    $value->product_details  = json_decode($value->product_details);
                }
            }

        }else{
            abort(404);
        }
        $data = new stdClass;
        $data->orders = $orders;
        $data->organization = $org;
        return response()->json($data, 200);
    }

    public function show($optionc_id){

        $optioncid = $optionc_id;
        return view('backend.reports.fundraise.show', compact('optioncid'));
    }

    public function daily($optionc_id)
    {

        $optioncid = $optionc_id;
        $organization  = Organization::where('org_optionc_id',$optionc_id)->first();
        $reporttype = "daily";
        // dd($organization);
        return view('backend.reports.fundraise.show', compact('optioncid','organization','reporttype'));
    }

    public function weekly($optionc_id)
    {
        $optioncid = $optionc_id;
        $organization  = Organization::where('org_optionc_id',$optionc_id)->first();
        $reporttype = "weekly";
        return view('backend.reports.fundraise.show', compact('optioncid','organization','reporttype'));
    }
    public function monthly($optionc_id)
    {
        $optioncid = $optionc_id;
        $organization  = Organization::where('org_optionc_id',$optionc_id)->first();
        $reporttype = "monthly";
        return view('backend.reports.fundraise.show', compact('optioncid','organization','reporttype'));
    }

    public function yearly($optionc_id)
    {
        $optioncid = $optionc_id;
        $organization  = Organization::where('org_optionc_id',$optionc_id)->first();
        $reporttype = "yearly";
        return view('backend.reports.fundraise.show', compact('optioncid','organization','reporttype'));
    }

    public function custom($optionc_id)
    {
        $optioncid = $optionc_id;
        $organization  = Organization::where('org_optionc_id',$optionc_id)->first();
        $reporttype = "custom";
        return view('backend.reports.fundraise.show', compact('optioncid','organization','reporttype'));
    }
}
