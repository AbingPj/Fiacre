<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubscriptionWholesaleRecord extends Model
{
    protected $guarded = [];
    protected $hidden = [
        'Token',
    ];
}
