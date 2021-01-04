<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\City;
use App\Models\State;
use Carbon\Carbon;

class Store extends Model
{
    protected $guarded = [];

    protected $appends = [
        'full_address',
        'image_link',
        'atr_expected_delivery_date',
        'atr_logo_link'
    ];

    public function getAtrLogoLinkAttribute()
    {
        return url('/img/sunfarmacy/finallogo3.2x.png');
    }

    public function getFullAddressAttribute()
    {
        // $city_name = City::find($this->city)->name;
        $city = City::find($this->city);
        if (!empty($city)) {
            $city_name = $city->name;
        } else {
            $city_name = $this->city;
        }


        $state_name = State::find($this->state)->name;
        return "{$this->street_address}, {$city_name}, {$state_name}";
    }

    public function getImageLinkAttribute()
    {

        if (!empty($this->image_path)) {
            if ($this->image_path == 'img/sunfarmacy/finallogo3.2x.png') {
                $photo = url($this->image_path);
            } else {
                // explode by /
                $explode_path = explode('/', $this->image_path);
                // removed first value in array wich is the public of the path
                unset($explode_path[0]);
                // return back to his format
                $implode_path = implode('/', $explode_path);
                $photo = url('storage/' . $implode_path);
            }
        } else {
            $photo = "/img/no-product-image.png";
        }

        return $photo;
    }

    public function getAtrExpectedDeliveryDateAttribute()
    {
        $max_now = Carbon::now();
        $min_now = Carbon::now();
        $max = $this->expected_delivery_days;
        $min = ceil($max / 2);
        $max_date = $max_now->addDays($max);
        $min_date = $min_now->addDays($min);
        return  $min_date->format('M.d') . ' - ' .  $max_date->format('M.d');
    }

    // return $this->belongsTo('App\Models\Order');

    public function aboutus()
    {
        return $this->hasOne('App\Models\StoreAboutus', 'store_id');
    }

    public function faqs()
    {
        return $this->hasOne('App\Models\StoreFaqs', 'store_id');
    }
    public function privacy()
    {
        return $this->hasOne('App\Models\StorePrivacy', 'store_id');
    }
    public function terms()
    {
        return $this->hasOne('App\Models\StoreTerms', 'store_id');
    }
    public function landing()
    {
        return $this->hasOne('App\Models\StoreLanding', 'store_id');
    }
}
