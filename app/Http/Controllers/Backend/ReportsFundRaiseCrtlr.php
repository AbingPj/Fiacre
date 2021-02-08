<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\OrganizationReport;
use Illuminate\Http\Request;

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
