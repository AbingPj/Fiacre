<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillingInfo extends Model
{
    protected $guarded = [];
    protected $fillable = [
        'user_id',
        'bankName_or_cardName',
        'CC_or_ACH',
        'Token',
        'Token_SF',
        'CVV',
        'CVV_Response',
        'CardType',
        'ACHType',
        'ACHAccountHolderType',
        'AchRoutingLast3',
    ];
    protected $table = 'billing_infos';
    // protected $guarded = [];
}
