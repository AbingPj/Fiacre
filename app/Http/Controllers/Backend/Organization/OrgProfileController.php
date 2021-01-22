<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrgProfileController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::find(auth()->user()->id);
        return view('backend.admin-org.org-profie', compact('org'));
    }
}
