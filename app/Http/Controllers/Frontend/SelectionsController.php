<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\Organization;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

class SelectionsController extends Controller
{
    public function states()
    {
        // $states = State::all();
        $states =  State::orderBy('name')->get();
        return response()->json($states);
    }
    public function cities($state_id = null)
    {
        $cities = City::where('state_id', $state_id)->orderBy('name')->get();
        return response()->json($cities);
    }

    public function allcities()
    {
        $cities = City::all();
        return response()->json($cities);
    }

    // public function searchcities(Request $request)
    // {
    //     $search = $request->search;
    //     $cities = City::with('state')
    //         ->where('name', 'LIKE', "%$search%")
    //         ->where('state_id', '!=', 1411)
    //         ->orderBy('name')
    //         ->skip(0)
    //         ->take(100)
    //         ->get();
    //     return response()->json($cities);
    // }


    public function searchcities(Request $request)
    {
        $search = $request->search;




        // $cities = City::select('name')
        //     ->groupBY('name')
        //     ->orderBy('name')
        //     ->where('name', 'LIKE', "%$search%")
        //     ->where('state_id', '!=', 1411)
        //     ->skip(0)
        //     ->take(100)
        //     ->get();


        $data = City::select('name')
            ->groupBY('name')
            ->orderBy('name')
            ->where('name', 'LIKE', "$search%")
            ->where('state_id', '!=', 1411)
            ->skip(0)
            ->take(15)
            ->get();

        $cities = [];
        foreach ($data as $key => $value) {
            array_push($cities, $value->name);
        }

        return response()->json($cities);
    }


    public function searchOrganization(Request $request)
    {
        $search = $request->search;
        $data = Organization::select('org_name','org_optionc_id')
            ->where('org_name', 'LIKE', "%$search%")
            ->orWhere('org_optionc_id', 'LIKE', "%$search%")
            ->orderBy('org_name')
            ->skip(0)
            ->take(20)
            ->get()
            ->makeHidden(['atr_logo_link','atr_type_label','atr_active_label', 'atr_contact_person', 'atr_address']);
        // $data->setAppends(['atr_name_with_optionc']);

        // $orgs = [];
        // foreach ($data as $key => $value) {
        //     $name = $value->org_name . ' ( ' . $value->org_optionc_id. ' ) ';
        //     array_push($orgs,$name);
        // }

        return response()->json($data);
    }


    public function getAllCities2()
    {

        $data = City::select('name')
            ->groupBY('name')
            ->orderBy('name')
            ->where('state_id', '!=', 1411)
            // ->skip(0)
            // ->take(50)
            ->get();

        $cities = [];
        foreach ($data as $key => $value) {
            $class = new stdClass;
            $class->index_key = $key;
            $class->name = $value->name;
            array_push($cities, $class);
        }

        return response()->json($cities);
    }
}
