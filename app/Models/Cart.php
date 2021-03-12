<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $guarded = [];
    protected $table = 'cart';

    protected $appends = [
        'atr_details'
    ];

    public function getAtrDetailsAttribute()
    {
        return json_decode($this->details);
    }
}
