<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class OrderedProductWeek extends Model
{
    protected $guarded = [];

    protected $appends = [
        'atr_date_label',
        'atr_actual_date_label',
    ];


    public function getAtrDateLabelAttribute()
    {
        $date = new Carbon($this->date);
        return $date->format('m/d/Y');
    }

    public function getAtrActualDateLabelAttribute()
    {
        if($this->actual_pickup_day){
            $date = new Carbon($this->actual_pickup_day);
            return $date->format('m/d/Y');
        }else{
            return "";
        }

    }
}
