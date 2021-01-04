<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSubCategory extends Model
{
    protected $guarded = [];

    public function category()
    {
        return $this->belongsTo('App\Models\ProductCategory', 'category_id');
    }

    public function products()
    {
        return $this->hasMany('App\Models\Product', 'id');
    }
}
