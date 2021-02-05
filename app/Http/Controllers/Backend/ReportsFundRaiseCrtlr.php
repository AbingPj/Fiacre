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
}
