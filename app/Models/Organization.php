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
        'atr_contact_person'
    ];


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
        return $this->org_contact_title . ' ' . $this->org_contact_fname. ' ' . $this->org_contact_lname . ' ' . $this->org_contact_suffix;
    }
}
