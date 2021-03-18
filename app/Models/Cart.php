<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $guarded = [];
    protected $table = 'cart';

    protected $appends = [
        'atr_details',
        'atr_original_selected_products',
    ];

    public function getAtrDetailsAttribute()
    {
        return json_decode($this->details);
    }
    public function getAtrOriginalSelectedProductsAttribute()
    {
        return json_decode($this->original_selected_products);
    }
}
