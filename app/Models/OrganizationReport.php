<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrganizationReport extends Model
{
    protected $guarded = [];
    protected $table = 'organizations';
    protected $appends = [
        'fundraise',
        'fundraise_f',
        'org'
    ];

    public function getOrgAttribute(){
        $data = Organization::where('org_optionc_id',$this->org_optionc_id)->first();
        return $data;
    }

    public function getFundraiseAttribute(){
       return $this->getFundraise();
    }
    public function getFundraiseFAttribute(){
        return number_format($this->getFundraise(), 2);
     }
    public function getFundraise(){
        $data = Organization::where('org_optionc_id',$this->org_optionc_id)->first();
        $ordered_products = OrderProduct::where('organization_id',$data->id)->get();
        $total = 0;
        foreach ($ordered_products as $key => $item) {
            if($item->is_subscription){
                $total = $total + ($item->subscription_price * ($item->fundraise_percentage/100));
            }else{
                $subtotal = $item->price * $item->quantity;
                $total = $total + ($subtotal * ($item->fundraise_percentage/100));
            }

        }
        return $total;
    }

    // public function scopeReportOrganizationOrdersWithFundraise(){
    //     $data = Organization::where('org_optionc_id',$this->org_optionc_id)->first();
    //     return $total;
    // }

    public function scopeReportOrgList($query)
    // public function scopeProductOrgWithSubscription($query, $org_id)
    {
        $query
        ->selectRaw('org_optionc_id, count(org_optionc_id) as total_orders')
        ->join(
            'orders',
            'organizations.id',
            '=',
            'orders.organization_id'
        )->groupBy('org_optionc_id')
        ->orderBy('total_orders', 'DESC');
        return $query;
    }
}
