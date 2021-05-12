<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderAddressInfo extends Model
{
    protected $guarded = [];
    protected $appends = [
        'atr_delivery_address',
        'atr_pickup_address',
    ];

    public function getAtrPickupAddressAttribute()
    {
        return str_replace(',', '~' , $this->address_pickup);

    }

    public function getAtrDeliveryAddressAttribute()
    {
        return str_replace(',', '~' , $this->address);

    }
}
