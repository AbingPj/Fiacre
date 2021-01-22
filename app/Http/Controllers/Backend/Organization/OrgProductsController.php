<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Product;
use App\Models\ProductBundle;
use Illuminate\Http\Request;

class OrgProductsController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::find(auth()->user()->id);
        return view('backend.admin-org.org-products', compact('org'));
    }

    public function getAssignedProducts()
    {
        $org = Organization::find(auth()->user()->id);
        $org_id = $org->id;

        $products = Product::productOrg($org_id)
            ->with('category:id,name', 'sub_category:id,name')
            ->where('products.status', '!=', 3)
            ->OrderBy('products.created_at', 'DESC')
            ->get();

        foreach ($products as $key => $prod) {
            if ($prod->is_bundle == 1) {
                $prod->price = $prod->getBundlePrice('retailer');
                $prod->member_price = $prod->getBundlePrice('member');
                $prod->wholesale_price = $prod->getBundlePrice('wholesale');
            }
        }

        return response()->json($products, 200);
    }
}
