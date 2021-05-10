<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $guarded = [];
    protected $appends = [
        'atr_logo_link',
        'atr_type_label',
        'atr_active_label',
        'atr_contact_person',
        'atr_address',
        'atr_name_with_optionc',
        'atr_selected_day_of_pickup',
    ];

    public function getAtrSelectedDayOfPickupAttribute()
    {
        $org_settings = OrganizationSetting::where('org_id', $this->id)->first();

        if (!empty($org_settings)) {
            return $org_settings->selected_day_of_pickup;
        }else{
            return 1;
        }
    }

    public function getAtrSettingsAttribute()
    {
        $org_settings = OrganizationSetting::where('org_id', $this->id)->first();

        if (empty($org_settings)) {
            $temp = new stdClass;
            $temp->selected_day_of_pickup = 1;
            $org_settings =  $temp;
        }
        return $org_settings;
    }


    public function getAtrNameWithOptioncAttribute()
    {
        $nameAndOptionC = $this->org_name. ' ['. $this->org_optionc_id . '] ('. $this->org_cityprov . ')';
        return $nameAndOptionC;
    }

    public function getAtrAddressAttribute()
    {
        $address = $this->org_street. ', '. $this->org_cityprov . ', '.$this->org_state . ', ' . $this->org_zipcode;
        return $address;
    }

    public function getAtrTypeLabelAttribute()
    {
        $org_type = $this->org_type;
        if ($org_type == 1) {
            $label = "Parish/Church";
        } else {
            $label = "School";
        }
        return $label;
    }

    public function getAtrActiveLabelAttribute()
    {
        $org_is_active = $this->org_is_active;
        if ($org_is_active == 1) {
            $label = "Active";
        } else {
            $label = "In-active";
        }
        return $label;
    }

    public function getAtrLogoLinkAttribute()
    {
        if (!empty($this->org_logo)) {

            $explode_path = explode('/', $this->org_logo);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        } else {
            $photo = null;
        }

        return $photo;
    }

    public function getAtrContactPersonAttribute()
    {
        return $this->org_contact_title . ' ' . $this->org_contact_fname . ' ' . $this->org_contact_lname . ' ' . $this->org_contact_suffix;
    }

    public function scopeNearestInMiles($query, $mi, $centerLat, $centerLng)
    {
        return $query
            ->select(\DB::raw("*,(3958.8  *
                                acos(
                                        cos( radians(" . $centerLat . ") ) *
                                        cos( radians( org_lat ) ) *
                                        cos( radians( org_lng ) - radians(" . $centerLng . ") ) +
                                        sin( radians(" . $centerLat . ")) *
                                        sin( radians( org_lat ) )
                                    )
                            )
                            AS distance"))
            ->having('distance', '<', $mi)
            ->orderBy('distance');
    }

    public function scopeNearestInKilometer($query, $km, $centerLat, $centerLng)
    {
        return $query
            ->select(\DB::raw("*,(6371  *
                                acos(
                                        cos( radians(" . $centerLat . ") ) *
                                        cos( radians( org_lat ) ) *
                                        cos( radians( org_lng ) - radians(" . $centerLng . ") ) +
                                        sin( radians(" . $centerLat . ")) *
                                        sin( radians( org_lat ) )
                                    )
                            )
                            AS distance"))
            ->having('distance', '<', $km)
            ->orderBy('distance');
    }
}
