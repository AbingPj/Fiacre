<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PickupZone extends Model
{
    protected $appends = [
        'lat',
        'lng',
    ];

    public function getLatAttribute()
    {
        return floatval($this->latitude);
    }

    public function getLngAttribute()
    {
        return floatval($this->longitude);
    }
}
