<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\OrganizationReport;
use Illuminate\Http\Request;

class ReportsOrderByOrganizationCrtlr extends Controller
{
    public function index()
    {
        return view('backend.reports.orders-by-organization.index');
    }

    public function getOrdersByOrganizationList(){
        $data = OrganizationReport::reportOrgList()->get();
        return response()->json($data, 200);
    }

    public function show($optionc_id){

        $optioncid = $optionc_id;
        return view('backend.reports.orders-by-organization.show', compact('optioncid'));
    }
}
