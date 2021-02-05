<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Order;
use Illuminate\Http\Request;

class OrgFundraiseController extends Controller
{
    public function index()
    {

        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::where('user_id', auth()->user()->id)->first();
        return view('backend.admin-org.org-fundraise', compact('org'));
    }
    public function getOrganizationFundraise()
    {
        $org = Organization::where('user_id', auth()->user()->id)->first();
        $orders = Order::with('user')->where('organization_id', $org->id)->OrderBy('date', 'DESC')->get();
        return response()->json($orders, 200);
    }
}
