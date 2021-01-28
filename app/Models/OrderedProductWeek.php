<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class OrderedProductWeek extends Model
{
    protected $guarded = [];

    protected $appends = [
        'atr_date_label',
    ];


    public function getAtrDateLabelAttribute()
    {
        $date = new Carbon($this->date);
        return $date->format('m/d/Y');
    }
}
