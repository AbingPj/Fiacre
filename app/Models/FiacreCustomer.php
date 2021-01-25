<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FiacreCustomer extends Model
{
    protected $guarded = [];
    protected $table = 'fiacre_customers';
    protected $primaryKey = 'fc_id';
    const CREATED_AT = 'fc_created_at';
    const UPDATED_AT = 'fc_updated_at';

    public function user()
    {
        return $this->belongsTo('App\Models\Auth\User', 'fc_user_id');
    }
}
