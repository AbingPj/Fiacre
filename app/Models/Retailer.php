<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Retailer extends Model
{
    protected $appends = [
        // 'full_address',
        'full_name',
        'atr_image_link'
    ];

    public function getFullNameAttribute()
    {

        return "{$this->first_name} {$this->last_name}";
    }

    // public function getFullAddressAttribute()
    // {
    //     $city_name = City::find($this->city)->name;
    //     $state_name = State::find($this->state)->name;
    //     return "{$this->street_address} {$city_name} {$state_name}";
    // }
    public function getAtrImageLinkAttribute()
    {
        return url("/img/no-user.jpg");
    }
}
