<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    protected $guarded = [];
    public function order()
    {
        return $this->belongsTo('App\Models\Order');
    }
    public function product()
    {
        return $this->belongsTo('App\Models\Product');
    }

    protected $appends = [
        'atr_price_f',
        'atr_subscription_price_f',
        'atr_sub_total_f',
    ];

    public function getAtrPriceFAttribute()
    {
        return number_format($this->price, 2);
    }
    public function getAtrSubscriptionPriceFAttribute()
    {
        return number_format($this->subscription_price, 2);
    }
    public function getAtrSubTotalFAttribute()
    {
        return number_format(($this->price * $this->updated_quantity),2);
    }


}
