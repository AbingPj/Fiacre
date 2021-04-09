<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReferralCodeSubmitted extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\Models\Auth\User', 'user_id');
    }

    protected $appends = [
        'status_name'
    ];

    public function getStatusNameAttribute(){
        if($this->status == 1){
            return 'Pending';
        }elseif($this->status == 2){
            return 'Success';
        }else{
            return 'Used';
        }
    }

    // public function code_owner()
    // {
    //     return $this->belongsTo('App\Models\User', 'user_id');
    // }
}
