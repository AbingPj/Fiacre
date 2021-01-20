<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ZoneController extends Controller
{

    public function getNearbyPickupZone(Request $request)
    {

        $km = 20;
        // $centerLat =   40.7341766;
        // $centerLng =  -74.00000399999999;
        $centerLat = $request->lat;
        $centerLng = $request->lng;

        // $test = \DB::select(\DB::raw("SELECT zone_name, latitude, longitude,
        //             ( 6371 * acos( cos( radians(" . $centerLat . ") )
        //             * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(" . $centerLng . ") )
        //             + sin( radians(" . $centerLat . ") ) * sin( radians( latitude ) ) ) )
        //             AS distance
        //             FROM pickup_zones HAVING distance < " . $km . " order by distance asc"));

        $test = \DB::select(
            \DB::raw(

                "SELECT id,
                        zone_name,
                        address,
                        latitude,
                        longitude,
                        ( 6371  *
                            acos(
                                    cos( radians($centerLat) ) *
                                    cos( radians( latitude ) ) *
                                    cos( radians( longitude ) - radians($centerLng) ) +
                                    sin( radians($centerLat)) *
                                    sin( radians( latitude ) )
                                )
                        )
                        AS distance
                FROM pickup_zones
                HAVING distance < $km
                ORDER BY distance ASC"
            )
        );

        foreach ($test as $key => $value) {
            $value->f_distance = number_format($value->distance, 2);
        }

        return response()->json($test, 200);
    }

    public function getNearbyDeliveryZone(Request $request)
    {

        $km = 20;
        // $centerLat =   40.7341766;
        // $centerLng =  -74.00000399999999;
        $centerLat = $request->lat;
        $centerLng = $request->lng;

        // $test = \DB::select(\DB::raw("SELECT zone_name, latitude, longitude,
        //             ( 6371 * acos( cos( radians(" . $centerLat . ") )
        //             * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(" . $centerLng . ") )
        //             + sin( radians(" . $centerLat . ") ) * sin( radians( latitude ) ) ) )
        //             AS distance
        //             FROM pickup_zones HAVING distance < " . $km . " order by distance asc"));

        $test = \DB::select(
            \DB::raw(

                "SELECT id,
                        zone_name,
                        address,
                        latitude,
                        longitude,
                        ( 6371  *
                            acos(
                                    cos( radians($centerLat) ) *
                                    cos( radians( latitude ) ) *
                                    cos( radians( longitude ) - radians($centerLng) ) +
                                    sin( radians($centerLat)) *
                                    sin( radians( latitude ) )
                                )
                        )
                        AS distance
                FROM delivery_zones
                HAVING distance < $km
                ORDER BY distance ASC"
            )
        );

        foreach ($test as $key => $value) {
            $value->f_distance = number_format($value->distance, 2);
        }

        return response()->json($test, 200);
    }

    public function getNearesOraganization(Request $request)
    {
        $mi = 10;
        $centerLat = $request->lat;
        $centerLng = $request->lng;
        $orgs = Organization::nearestInMiles($mi,$centerLat,$centerLng)->get();
        foreach ($orgs as $key => $value) {
            $value->f_distance = number_format($value->distance, 2) . ' mi';
        }
        if($orgs->count() > 0){
            return response()->json($orgs, 200);
        }else{
            return response()->json("Address has no nearby organization", 422);
        }




    }

}
