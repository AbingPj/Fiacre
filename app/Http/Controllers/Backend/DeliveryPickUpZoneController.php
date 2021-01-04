<?php

namespace App\Http\Controllers\Backend;


use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\ZoneRequest;
use Illuminate\Http\Request;

use App\Models\DeliveryZone;
use App\Models\PickupZone;


class DeliveryPickUpZoneController extends Controller
{
    public function index()
    {
        return view('backend.deliverypickupzones');
    }

    public function deliveryZones()
    {
        return view('backend.settings.zones.delivery-zones');
    }

    public function getAllDeliveryZones()
    {
        $zones = DeliveryZone::orderBy('id')->get();
        return response()->json($zones, 200);
    }

    public function deliveryZonesAdd()
    {
        return view('backend.settings.zones.delivery-zone-add');
    }

    public function deliveryZonesEdit($zone_id)
    {
        $zone = DeliveryZone::findOrFail($zone_id);
        return view('backend.settings.zones.delivery-zone-edit', compact('zone'));
    }

    public function saveDeliveryZones(ZoneRequest $request)
    {

        $zone = new DeliveryZone;
        $zone->zone_name =  $request->zone_name;
        $zone->address =  $request->address;
        $zone->latitude =  $request->lat;
        $zone->longitude =  $request->lng;
        $zone->save();
        $request->session()->flash('flash_success', "Added Delivery Zone");
    }

    public function deliveryZonesUpdate(ZoneRequest $request)
    {
        $zone = DeliveryZone::findOrFail($request->id);
        if (!empty($zone)) {
            $zone->zone_name =  $request->zone_name;
            $zone->address =  $request->address;
            $zone->latitude =  $request->lat;
            $zone->longitude =  $request->lng;
            $zone->save();
        }
        $request->session()->flash('flash_success', "Updated Delivery Zone");

    }

    public function pickupZones()
    {
        return view('backend.settings.zones.pickup-zones');
    }

    public function getAllPickupZones()
    {
        $zones = PickupZone::orderBy('id')->get();
        return response()->json($zones, 200);
    }

    public function pickupZonesAdd()
    {
        return view('backend.settings.zones.pickup-zone-add');
    }

    public function pickupZonesEdit($zone_id)
    {
        $zone = PickupZone::findOrFail($zone_id);
        return view('backend.settings.zones.pickup-zone-edit', compact('zone'));
    }

    public function savePickupZones(ZoneRequest $request)
    {

        $zone = new PickupZone;
        $zone->zone_name =  $request->zone_name;
        $zone->address =  $request->address;
        $zone->latitude =  $request->lat;
        $zone->longitude =  $request->lng;
        $zone->save();
        $request->session()->flash('flash_success', "Added Pick-up Zone");
    }

    public function pickupZonesUpdate(ZoneRequest $request)
    {
        $zone = PickupZone::findOrFail($request->id);
        if (!empty($zone)) {
            $zone->zone_name =  $request->zone_name;
            $zone->address =  $request->address;
            $zone->latitude =  $request->lat;
            $zone->longitude =  $request->lng;
            $zone->save();
        }
        $request->session()->flash('flash_success', "Updated Pick-up Zone");

    }

}
