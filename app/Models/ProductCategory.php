<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $guarded = [];

    protected $fillable = [
        'name', 'description', 'status', 'store_id', 'created_by'
    ];

    public function products()
    {
        return $this->hasMany('App\Models\Product', 'category_id');
    }

    public function sub_categories()
    {
        return $this->hasMany('App\Models\ProductSubCategory', 'id');
    }
}
