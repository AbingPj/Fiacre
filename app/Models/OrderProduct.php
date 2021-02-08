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
        'atr_fundraise',
        'atr_fundraise_f',
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
    public function getAtrFundraiseAttribute(){
        if($this->is_subscription){
            $data = ($this->subscription_price * ($this->fundraise_percentage/100));
        }else{
            $subtotal = $this->price * $this->quantity;
            $data = ($subtotal * ($this->fundraise_percentage/100));
        }
        return $data;
    }
    public function getAtrFundraiseFAttribute(){
        if($this->is_subscription){
            $data = ($this->subscription_price * ($this->fundraise_percentage/100));
        }else{
            $subtotal = $this->price * $this->quantity;
            $data = ($subtotal * ($this->fundraise_percentage/100));
        }
        return number_format($data, 2);
    }



}
