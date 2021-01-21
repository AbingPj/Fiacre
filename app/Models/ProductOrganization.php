<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOrganization extends Model
{
    protected $guarded = [];
    protected $table = 'product_organization';
    protected $primaryKey = 'prodorg_id';
    const CREATED_AT = 'prodorg_created_at';
    const UPDATED_AT = 'prodorg_updated_at';

    public function product()
    {
        return $this->belongsTo('App\Models\Product', 'prodorg_product_id');
    }
}
