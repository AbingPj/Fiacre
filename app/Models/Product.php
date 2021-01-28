<?php

namespace App\Models;

use App\ProductInStock;
use App\Models\ProductSubcription;
use App\Models\ProductSubscriptionOrdered;
use App\Services\ImagePathService;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Product extends Model
{
    protected $guarded = [];

    protected $appends = [
        'image_link',
        'atr_qty',
        'atr_qty_label',
        'atr_overall_total_earn',
        'atr_tax_percentage',
        'atr_tax_amount',
        'atr_tax_amount_sc',
        'atr_tax_amount_ws',
        // 'selected',
        // 'qty',
        // 'atr_bundle_price',
        // 'atr_bundle_member_price',
        // 'atr_bundle_wholesale_price'
    ];

    // public function getSelectedAttribute()
    // {
    //     return false;
    // }

    // public function getQtyAttribute()
    // {
    //     return 1;
    // }

    public function scopeProductOrg($query, $org_id)
    // public function scopeProductOrgWithSubscription($query, $org_id)
    {
        $query->join(
            'product_organization',
            'products.id',
            '=',
            'product_organization.prodorg_product_id'
        )
            ->where('product_organization.prodorg_organization_id', $org_id);

        return $query;
    }

    public function scopeProductOrgWithSubscription($query, $org_id)
    {
        $query->join(
            'product_organization',
            'products.id',
            '=',
            'product_organization.prodorg_product_id'
        )->join(
            'product_subcriptions',
            'products.id',
            '=',
            'product_subcriptions.prodsub_product_id'
        )
            ->where('product_organization.prodorg_organization_id', $org_id)
            ->where('product_subcriptions.prodsub_organization_id', $org_id);
        return $query;
    }


    public function category()
    {
        return $this->belongsTo('App\Models\ProductCategory');
    }

    public function productorganization()
    {
        return $this->hasMany('App\Models\ProductOrganization', 'prodorg_product_id');
    }

    public function productsubcription()
    {
        return $this->hasMany('App\Models\ProductSubcription', 'prodsub_product_id');
    }


    public function sub_category()
    {
        return $this->belongsTo('App\Models\ProductSubCategory', 'sub_category_id');
    }

    public function getAtrTaxPercentageAttribute()
    {
        $tax = 0;
        if (!empty($this->category_id)) {
            $category = ProductCategory::find($this->category_id);
            if ($category) {
                $tax = $category->tax;
            }
        }
        return $tax;
    }

    public function getAtrTaxAmountAttribute()
    {
        $amount = 0;
        if (!empty($this->category_id)) {
            $category = ProductCategory::find($this->category_id);
            if (!empty($category)) {
                if ($this->is_bundle == 1) {
                    $amount =  $this->getBundlePrice('retailer') * ($category->tax /  100);
                } else {
                    $amount = $this->price * ($category->tax /  100);
                }
            }
        }
        // return floatval(number_format($amount, 2));
        return floatval($amount);
    }

    public function getAtrTaxAmountScAttribute()
    {
        $amount = 0;
        if (!empty($this->category_id)) {
            $category = ProductCategory::find($this->category_id);
            if (!empty($category)) {
                if ($this->is_bundle == 1) {
                    $amount =  $this->getBundlePrice('member') * ($category->tax /  100);
                } else {
                    $amount = $this->member_price * ($category->tax /  100);
                }
            }
        }
        // return floatval(number_format($amount, 2));
        return floatval($amount);
    }

    public function getAtrTaxAmountWsAttribute()
    {
        $amount = 0;
        if (!empty($this->category_id)) {
            $category = ProductCategory::find($this->category_id);
            if (!empty($category)) {
                if ($this->is_bundle == 1) {
                    $amount =  $this->getBundlePrice('wholesale') * ($category->tax /  100);
                } else {
                    $amount = $this->wholesale_price * ($category->tax /  100);
                }
            }
        }
        // return floatval(number_format($amount, 2));
        return floatval($amount);
    }



    public function getImageLinkAttribute()
    {

        if (!empty($this->image_path)) {

            // explode by /
            $explode_path = explode('/', $this->image_path);
            // removed first value in array wich is the public of the path
            unset($explode_path[0]);
            // return back to his format
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        } else {
            // $photo = $this->is_bundle == 1 ? "/img/bundle.png" : "/img/no-product-image.png";
            $photo = $this->is_bundle == 1 ? url("/img/bundle.png") : url("/img/no-product-image.png");
        }

        return $photo;
    }

    public function getAtrOverallTotalEarnAttribute()
    {
        $total_order_earnings = 0;
        $ordererdProducts  = OrderProduct::where('product_id', $this->id)->get();
        foreach ($ordererdProducts as $key2 => $orderedprod) {
            // if ($orderedprod->order->status == 2) {
            $total_order_earnings = $total_order_earnings + ($orderedprod->updated_quantity * $orderedprod->price);
            // }
        }
        return $total_order_earnings;
    }


    public function getAtrQtyAttribute()
    {



        $total_instocks = 0;
        $instocks  = ProductInStock::where('product_id', $this->id)->get();
        if (!empty($instocks)) {
            foreach ($instocks as $key => $in) {
                $total_instocks =  $total_instocks + $in->quantity;
            }
        }


        $total_order = 0;
        $ordererdProducts  = OrderProduct::where('product_id', $this->id)->get();
        foreach ($ordererdProducts as $key2 => $orderedprod) {
            if ($orderedprod->order->status == 2) {
                $total_order = $total_order + $orderedprod->updated_quantity;
            }
            // $order = Order::where('status', 2)
            //     ->where('id', $orderedprod->order_id)
            //     ->get();

            // if (!empty($order)) {
            //     $total_order = $total_order + $orderedprod->updated_quantity;
            // }
        }

        return  $total_instocks - $total_order;
    }

    public function getAtrQtyLabelAttribute()
    {
        $quantity = $this->atr_qty;
        if ($quantity <= 0) {
            $stock_label = "Out of Stock";
        } else if ($quantity <= 10) {
            $stock_label = "Low of Stock";
        } else {
            $stock_label = "In Stock";
        }
        return $stock_label;
    }



    // public function getAtrBundlePriceAttribute()
    // {
    //     return  $this->getBundlePrice('retailer');
    // }

    // public function getAtrBundleMemberPriceAttribute()
    // {
    //     return  $this->getBundlePrice('member');
    // }

    // public function getAtrBundleWholesalePriceAttribute()
    // {
    //     return  $this->getBundlePrice('wholesale');
    // }

    public function getBundlePrice($type)
    {
        $price = 0;
        $retailer_price = 0;
        $member_price = 0;
        $wholesale_price = 0;
        $selected_price = 0;
        $discount = 0;
        if ($this->is_bundle == 1) {
            $bundle_products = ProductBundle::where('bundle_id', $this->id)->get();
            foreach ($bundle_products as $key => $value) {
                $prod = Product::find($value->product_id);
                $retailer_price = $retailer_price + $prod->price * $value->quantity;
                $member_price = $member_price + $prod->member_price * $value->quantity;
                $wholesale_price = $wholesale_price + $prod->wholesale_price * $value->quantity;
            }


            if ($type == 'member') {
                $selected_price = $member_price;
            } else if ($type == 'wholesale') {
                $selected_price = $wholesale_price;
            } else {
                $selected_price = $retailer_price;
            }

            $discount = $selected_price * ($this->bundle_percentage / 100);
            $price = $selected_price -  $discount;
        }

        return $price;
    }

    public function getSubcriptionWeeks($org_id)
    {
        // dd($org_id);
        $weeks = null;

        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();

        if (!empty($prodSub)) {
            $start =  Carbon::parse($prodSub->prodsub_start_date);
            $now = Carbon::now();
            $end =  Carbon::parse($prodSub->prodsub_end_date);
            $nowIsEarlier = ($start > $now) ? true : false;
            if ($nowIsEarlier) {
                $weeks = $start->diffInWeeks($end);
            } else {
                $weeks = $now->diffInWeeks($end);
            }
        } else {
            $weeks = "-";
        }
        return $weeks;
    }

    public function getSubscriptionDay($org_id)
    {
        $day = null;
        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();
        if (!empty($prodSub)) {
            $day = $prodSub->day;
        }
        return $day;
    }

    public function getSubscriptionId($org_id)
    {
        $id = null;
        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();
        if (!empty($prodSub)) {
            $id = $prodSub->prodsub_id;
        }
        return $id;
    }

    public function getSubscriptionFirstDay($org_id)
    {
        $firstDay = null;
        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();
        if (!empty($prodSub)) {
            $start =  Carbon::parse($prodSub->prodsub_start_date);
            $now = Carbon::now();
            $nowIsEarlier = ($start > $now) ? true : false;
            if ($nowIsEarlier) {
                $firstDay = $start;
            } else {
                $firstDay = Carbon::now()->next($prodSub->day);
            }
        }
        return $firstDay;
    }

    public function getSubscriptionNumber($org_id)
    {
        $prodSubCount = 0;

        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();

        if (!empty($prodSub)) {
            $prodSubCount = ProductSubscriptionOrdered::where('product_subscription_id', $prodSub->prodsub_id)
                ->where('organization_id', $org_id)
                ->where('product_id', $this->id)
                ->count();
        }
        return $prodSubCount;
    }

    public function getSubscriptionLimit($org_id)
    {
        $Limit = null;
        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();
        if (!empty($prodSub)) {
            $Limit = $prodSub->limit_of_subscription;
        }
        return $Limit;
    }

    public function isNoSubscriptionAvailable($org_id)
    {
        $isNoSubscriptionAvailable = false;
        $subscribers_total = $this->getSubscriptionNumber($org_id);
        $subscribtion_limit = $this->getSubscriptionLimit($org_id);
        if ($subscribtion_limit) {
            if ($subscribers_total >= $subscribtion_limit) {
                $isNoSubscriptionAvailable  = true;
            }
        }
        return $isNoSubscriptionAvailable;
    }

    public function ifUserIsAlreadySubscribe($org_id, $user_id)
    {
        $alreadySubscribe = false;

        $prodSub = ProductSubcription::where('prodsub_organization_id', $org_id)
            ->where('prodsub_product_id', $this->id)
            ->first();

        if (!empty($prodSub)) {
            $prodSubOrd = ProductSubscriptionOrdered::where('product_subscription_id', $prodSub->prodsub_id)
                ->where('organization_id', $org_id)
                ->where('order_by', $user_id)
                ->where('product_id', $this->id)
                ->first();
            if (!empty($prodSubOrd)) {
                $alreadySubscribe = true;
            }
        }


        return $alreadySubscribe;
    }
}
