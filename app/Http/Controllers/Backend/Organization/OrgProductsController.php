<?php

namespace App\Http\Controllers\Backend\Organization;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\ProductSubcription;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Validator;

class OrgProductsController extends Controller
{
    public function index()
    {
        //    $categories =  ProductCategory::all()->sortBy("name");
        $org = Organization::where('user_id',auth()->user()->id)->first();
        return view('backend.admin-org.org-products', compact('org'));
    }

    public function getAssignedProducts()
    {
        $org = Organization::where('user_id',auth()->user()->id)->first();
        $org_id = $org->id;

        $products = Product::productOrg($org_id)
            ->with('category:id,name', 'sub_category:id,name')
            ->where('products.status', '!=', 3)
            ->OrderBy('products.created_at', 'DESC')
            ->get();

        foreach ($products as $key => $prod) {
            if ($prod->is_bundle == 1) {
                // $prod->price = $prod->getBundlePrice('retailer');
                $prod->price = round($prod->getBundlePrice('retailer'),2);
                // $prod->member_price = $prod->getBundlePrice('member');
                // $prod->wholesale_price = $prod->getBundlePrice('wholesale');
            }
            $prod->weeks = $prod->getSubcriptionWeeks($org_id);
            if($prod->weeks == '-'){
                $prod->subscirption_price = 'no subscription yet';
            } else {
                $subscription_price = $prod->price * $prod->weeks;
                $prod->subscirption_price = round($subscription_price,2);
            }
        }

        return response()->json($products, 200);
    }

    public function showProduct($product_id)
    {
        $org = Organization::where('user_id',auth()->user()->id)->first();
        $product = Product::find($product_id);
        // ProductSubcription
        $prodSub = ProductSubcription::where('prodsub_organization_id', $org->id)
            ->where('prodsub_product_id', $product->id)
            ->first();
        $start = null;
        $end = null;
        $day = null;
        $limit = null;

        if (!empty($prodSub)) {
            $start = $prodSub->prodsub_start_date;
            $end = $prodSub->prodsub_end_date;
            $day = $prodSub->day;
            $limit = $prodSub->limit_of_subscription;
        }


        return view('backend.admin-org.org-product-show', compact('limit','product', 'org', 'start', 'end', 'day'));
    }

    public function saveSubscription(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'start' => 'required',
            'end' => 'required',
            'day' => 'required',
            'product_id' => 'required',
            'limit' => 'required',
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors();
            return response()->json(['error' => $errors], 422);
        }

        $org = Organization::where('user_id',auth()->user()->id)->first();

        $prodSub = ProductSubcription::where('prodsub_organization_id', $org->id)
            ->where('prodsub_product_id', $request->product_id)
            ->first();

        if (!empty($prodSub)) {
            $prodSub->prodsub_start_date = Carbon::parse($request->start);
            $prodSub->prodsub_end_date = Carbon::parse($request->end);
            $prodSub->day = $request->day;
            $prodSub->limit_of_subscription = $request->limit;
            $prodSub->save();
        } else {
            $newData = new ProductSubcription();
            $newData->prodsub_organization_id = $org->id;
            $newData->prodsub_product_id = $request->product_id;
            $newData->prodsub_start_date = Carbon::parse($request->start);
            $newData->prodsub_end_date = Carbon::parse($request->end);
            $newData->day = $request->day;
            $newData->limit_of_subscription = $request->limit;
            $newData->save();
        }
    }
}
