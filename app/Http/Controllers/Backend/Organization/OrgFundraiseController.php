<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Order;
use App\Models\OrganizationReport;
use Illuminate\Http\Request;

class OrgFundraiseController extends Controller
{
    public function index()
    {

        //    $categories =  ProductCategory::all()->sortBy("name");

        $orgReport = OrganizationReport::where('user_id', auth()->user()->id)->first();
        $org = Organization::find($orgReport->id);
        $org->fundraise_f = $orgReport->fundraise_f;
        $org->fundraise = $orgReport->fundraise;
        // dd($org);

        return view('backend.admin-org.org-fundraise', compact('org'));
    }
    public function getOrganizationFundraise()
    {



        $org = Organization::where('user_id', auth()->user()->id)->first();

        $orders = Order::with('user','order_products')->where('organization_id', $org->id)->OrderBy('date', 'DESC')->get();
        foreach ($orders as $key => $item) {
            foreach ($item->order_products as $key => $value) {
                $value->product_details  = json_decode($value->product_details);
            }
        }
        return response()->json($orders, 200);
    }


}
