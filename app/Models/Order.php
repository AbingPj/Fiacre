<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $guarded = [];
    public function order_products()
    {
        return $this->hasMany('App\Models\OrderProduct', 'order_id');
    }
    public function user()
    {
        return $this->belongsTo('App\Models\Auth\User', 'order_by');
    }
    public function order_by()
    {
        return $this->belongsTo('App\Models\Auth\User', 'order_by');
    }
    public function organization()
    {
        return $this->belongsTo('App\Models\Organization', 'organization_id');
    }
    public function retailer()
    {
        return $this->belongsTo('App\Models\Retailer', 'retailer_id');
    }
    protected $appends = [
        'atr_status_label',
        'atr_overall_total',
        'atr_overall_total_f',
        'atr_total_amount',
        'atr_total_amount_f',
        'atr_subscription_overall_total_amount',
        'atr_subscription_overall_total_amount_f',
        'atr_subscription_total_amount',
        'atr_subscription_total_amount_f',
        'atr_billing_amount_f',
        'atr_date_label',
        'atr_date_label2',
        // 'atr_discount',
        // 'atr_discount_f',
        // 'atr_coupon_discount',
        // 'atr_coupon_discount_f',
        'atr_expected_delivery_date',
        'atr_total_tax'
        // 'atr_expected_delivery_date',
    ];

    public function getAtrSubscriptionOverallTotalAmountAttribute()
    {
        $total_amount = $this->getSubscriptionTotalPrice('overAlltotal');
        return $total_amount;
    }

    public function getAtrSubscriptionOverallTotalAmountFAttribute()
    {
        $total_amount = $this->getSubscriptionTotalPrice('overAlltotal');
        return number_format($total_amount, 2);
    }
    public function getAtrSubscriptionTotalAmountAttribute()
    {
        $total_amount = $this->getSubscriptionTotalPrice('total');
        return $total_amount;
    }

    public function getAtrSubscriptionTotalAmountFAttribute()
    {
        $total_amount = $this->getSubscriptionTotalPrice('total');
        return number_format($total_amount, 2);
    }

    public function getAtrBillingAmountFAttribute()
    {
        $billing_type_price = $this->getSubscriptionTotalPrice('billing_type_price');
        return number_format($billing_type_price, 2);
    }





    public function getSubscriptionTotalPrice($var = 'overAlltotal')
    {
        $id = $this->id;
        $order_prododucts = OrderProduct::where('order_id', $id)->get();
        $total = 0;
        $overAlltotal = 0;
        $billing_type_price = 0;
        foreach ($order_prododucts as $key => $order_product) {
            if($order_product->is_subscription == 1){
                $total = $total + $order_product->subscription_price;
            }else{
                // $total = $total + $order_product->price;
                $total = $total + ($order_product->updated_quantity * $order_product->price);
            }

        }
        $billing_type_price = $total * ($this->billing_type_percentage / 100);
        $overAlltotal = $total + $billing_type_price;
        if($var == 'overAlltotal'){
            return $overAlltotal;
        }
        if($var == 'billing_type_price'){
            return $billing_type_price;
        }
        if($var == 'total'){
            return $total;
        }
    }
















    public function getAtrStatusLabelAttribute()
    {
        $status = $this->status;
        if ($status == 2) {
            $label = "Ready";
        } else if ($status == 3) {
            $label = "Complete/Delivered";
        } else {
            $label = "Reserved";
        }
        return $label;
    }

    public function getAtrTotalAmountAttribute()
    {
        $total_amount = $this->getTotalAmount('products');
        return $total_amount;
    }

    public function getAtrTotalAmountFAttribute()
    {
        $total_amount = $this->getTotalAmount('products');
        return number_format($total_amount, 2);
    }




    public function getAtrOverallTotalAttribute()
    {
        $total_amount = $this->getTotalAmount();
        return $total_amount;
    }

    public function getAtrOverallTotalFAttribute()
    {
        $total_amount = $this->getTotalAmount();
        return number_format($total_amount, 2);
    }


    public function getAtrDateLabelAttribute()
    {
        $date = new Carbon($this->date);
        return $date->format('m/d/Y');
    }


    public function getAtrDateLabel2Attribute()
    {
        $date = new Carbon($this->date);
        return $date->format('F, d, Y');
    }


    public function getTotalAmount($return_data = 'over_all_total')
    {
        $id = $this->id;
        $order_prododucts = OrderProduct::where('order_id', $id)->get();
        $updated_totalamount = 0;
        $tax = 0;
        foreach ($order_prododucts as $key => $order_product) {
            $updated_subtotal = $order_product->updated_quantity * $order_product->price;
            $updated_totalamount = $updated_totalamount + $updated_subtotal;
            $tax =  $tax + ($order_product->updated_quantity  * $order_product->tax_amount);
        }
        // get discount
        $discount = $updated_totalamount * ($this->discount_percentage /  100);

        // get coupon discount
        $coupon_discount = 0;

        if ($this->has_coupon) {
            if ($this->coupon_is_percentage) {
                $coupon_discount = $updated_totalamount * ($this->coupon_discount_amount /  100);
            } else {
                $coupon_discount = $this->coupon_discount_amount;
            }
        }

        // total amount - discounnt
        $totalAmount = $updated_totalamount - $discount;

        // total amount - coupon discounnt
        $totalAmount = $totalAmount - $coupon_discount;

        // total amount + delivery fee
        $totalAmount = $totalAmount + $this->delivery_fee;

        // total amount + delivery fee
        $totalAmount = $totalAmount + $tax;

        if ($return_data == 'products') {
            return $updated_totalamount;
        }

        if ($return_data == 'over_all_total') {
            return $totalAmount;
        }
        if ($return_data == 'discount') {
            return $discount;
        }

        if ($return_data == 'coupon_discount') {
            return $coupon_discount;
        }

        if ($return_data == 'tax') {
            return $tax;
        }
    }

    public function getAtrExpectedDeliveryDateAttribute()
    {
        $max_now = Carbon::parse($this->date);
        $min_now = Carbon::parse($this->date);

        $max = $this->expected_delivery_days;
        $min = ceil($max / 2);
        $max_date = $max_now->addDays($max);
        $min_date = $min_now->addDays($min);
        return  $min_date->format('M.d') . ' - ' .  $max_date->format('M.d');
    }

    public function getAtrDiscountAttribute()
    {
        $discount = $this->getTotalAmount('discount');
        return $discount;
    }

    public function getAtrDiscountFAttribute()
    {
        $discount = $this->getTotalAmount('discount');
        return number_format($discount, 2);
    }

    public function getAtrCouponDiscountAttribute()
    {
        $discount = $this->getTotalAmount('coupon_discount');
        return $discount;
    }

    public function getAtrCouponDiscountFAttribute()
    {
        $discount = $this->getTotalAmount('coupon_discount');
        return number_format($discount, 2);
    }



    public function getAtrTotalTaxAttribute()
    {
        $discount = $this->getTotalAmount('tax');
        // return floatval(number_format($discount, 2));
        return floatval($discount);
    }


    // public function getAtrExpectedDeliveryDateAttribute()
    // {
    //     $now = Carbon::parse($this->date);
    //     $min_now = Carbon::now();
    //     $max = $this->date;
    //     $min = ceil($max / 2);
    //     $max_date = $max_now->addDays($max);
    //     $min_date = $min_now->addDays($min);
    //     return  $min_date->format('M. d') . ' - ' .  $max_date->format('M. d');
    // }
}
