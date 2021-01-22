<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSubcription extends Model
{
    protected $guarded = [];
    protected $table = 'product_subcriptions';
    protected $primaryKey = 'prodsub_id';
    const CREATED_AT = 'prodsub_created_at';
    const UPDATED_AT = 'prodsub_updated_at';

    public function product()
    {
        return $this->belongsTo('App\Models\Product', 'prodsub_product_id');
    }
}
