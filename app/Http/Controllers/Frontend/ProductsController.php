<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Product\ProductBundleUpdateRequest;
use App\Models\Auth\User;
use App\Models\OrderProduct;
use App\Models\Organization;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\ProductCategory;
use App\Models\ProductOrganization;
use App\Models\Store;
use App\ProductInStock;
use App\Services\ImagePathService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use ParagonIE\Certainty\Bundle;
use Illuminate\Support\Facades\Validator;

class ProductsController extends Controller
{
    public function proceedOptionCid(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'optionc_id' => 'required',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['error' => $errors], 422);
        }

        $org = Organization::where('org_optionc_id', $request->optionc_id)->first();
        if (!empty($org)) {
            return response()->json($org, 200);
        } else {
            return response()->json('Sorry, your school is not yet registered', 404);
        }
    }

    public function getProducts(Request $request)
    {
        $org_id = $request->org_id;

        if ($request->has('name') && $request->has('category')) {
            $products = Product::productOrg($org_id)->with('category:id,name', 'sub_category:id,name')
                ->where('products.is_visible', 1)
                ->where('products.name', 'LIKE', "%$request->name%")
                ->where('products.category_id', $request->category)
                ->where('products.status', '!=', 3)
                ->OrderBy('products.created_at', 'DESC')
                ->paginate(50);
        } else if ($request->has('name')) {
            $products = Product::productOrg($org_id)
                ->with('category:id,name', 'sub_category:id,name')
                ->where('products.is_visible', 1)
                ->where('products.name', 'LIKE', "%$request->name%")
                ->where('products.status', '!=', 3)
                ->OrderBy('products.created_at', 'DESC')
                ->paginate(50);
        } else if ($request->has('category')) {
            $products = Product::productOrg($org_id)
                ->with('category:id,name', 'sub_category:id,name')
                ->where('products.is_visible', 1)
                ->where('products.category_id', $request->category)
                ->where('products.status', '!=', 3)
                ->OrderBy('products.created_at', 'DESC')
                ->paginate(50);
        } else {
            $products = Product::productOrg($org_id)
                ->with('category:id,name', 'sub_category:id,name')
                ->where('products.is_visible', 1)
                ->where('products.status', '!=', 3)
                ->OrderBy('products.created_at', 'DESC')
                ->paginate(50);
        }


        $products->getCollection()->transform(function ($value) {
            $value->selected = false;
            $value->qty = 1;
            if ($value->is_bundle == 1) {
                $value->price = $value->getBundlePrice('retailer');
                $value->member_price = $value->getBundlePrice('member');
                $value->wholesale_price = $value->getBundlePrice('wholesale');

                $selected = [];
                $bundle_products = ProductBundle::where('bundle_id', $value->id)->get();
                foreach ($bundle_products as $key2 => $value2) {
                    $prod = Product::find($value2->product_id);
                    if (!empty($prod)) {
                        $prod->selected = true;
                        $prod->qty = $value2->quantity;
                        // $b_product->save();
                        array_push($selected, $prod);
                    }
                }
                $value->selected_products = $selected;
            }
            return $value;
        });


        return response()->json($products, 200);
    }

    public function index()
    {
        \App\Services\TotalViewService::getView("prod indx");

        $products = Product::with('category:id,name')->where('is_visible', 1)->where('status', '!=', 3)->paginate(3);
        // dd($products);

        $categories = ProductCategory::where('status', 1)->orderBy('name')->get();


        if (Auth::guest() == false) {
            $user = User::find(Auth::user()->id);
            $user->image_path = $user->getPicture();
            if (auth()->user()->customer_role == 2) {
                $sunclub_user = 1;
                $user->balance = $user->getSunClubBalance();
                $user->discount = $user->getUserDiscount();
            } else {
                $sunclub_user = 0;
                $user->balance = 0;
                $user->discount = $user->getUserDiscount();
            }
        } else {
            $sunclub_user = 0;
            $user = [];
        };

        $store = Store::find(1);

        return view(
            'frontend.pages.products',
            [
                'page_title' => 'Products',
                'products' => $products,
                'categories' => $categories,
                'wholesaler_minimum_order_amount' => $store->wholesaler_minimum_order_amount,
                'user' => $user
            ]
        );
    }




    public function feature()
    {
        $products = Product::where('is_visible', 1)->where('status', '!=', 3)->get()->random(4);
        // $products = Product::all()->take(4);

        return response()->json($products, 200);
    }
}
