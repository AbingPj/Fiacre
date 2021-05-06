<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\OrganizationSetting;
use Illuminate\Http\Request;
use stdClass;

class OrgSettingsController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::where('user_id', auth()->user()->id)->first();

        $org_settings = OrganizationSetting::where('org_id', $org->id)->first();

        if (empty($org_settings)) {
            $temp = new stdClass;
            $temp->selected_day_of_pickup = 1;
            $org_settings =  $temp;
        }
        return view('backend.admin-org.org-settings', compact('org', 'org_settings'));
    }


    public function UpdateSettings(Request $request)
    {
        $settings = OrganizationSetting::find($request->org_id);

        if (isset($settings)) {
            $settings->update(['selected_day_of_pickup' => $request->day]);
            return "sucessfully saved changes";
        } else {
            OrganizationSetting::create([
                'org_id' => $request->org_id,
                'selected_day_of_pickup' => $request->day,
            ]);
            return "sucessfully saved changes";
        }
    }
}
