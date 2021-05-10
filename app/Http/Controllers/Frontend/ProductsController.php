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
    public function UpdateSelectedOrganization(Request $request)
    {
        if (Auth::guest() == false) {
            $user = User::find(Auth::user()->id);
            $user->selected_org_id = $request->org_id;
            $user->save();
        }
    }
    public function UpdateSelectedOrganization2(Request $request)
    {
        if (Auth::guest() == false) {
            $user = User::find(Auth::user()->id);

            if (!empty($request->input('optionc_id'))) {

                $org = Organization::where('org_optionc_id', $request->input('optionc_id'))->first();
                if (!empty($org)) {
                    $user->selected_org_id = $org->id;
                    $user->selected_org_optionc_id = $request->input('optionc_id');
                } else {
                    return response()->json([
                        "data_message" => 'Sorry, your school ID[ ' . $request->input('optionc_id') . ' ] is not yet registered.'
                    ], 400);
                }
            }
            // $user->selected_org_id = $request->org_id;
            $user->save();
        }
    }

    public function OrganizationSelection(Request $request)
    {

        $search = $request->search;
        $products = Organization::where(function ($query) use ($search) {
            $query->where('org_name', 'LIKE', "%$search%")
                ->orWhere('org_optionc_id', 'LIKE', "%$search%");
        })
            ->paginate(50);

        $products->getCollection()->transform(function ($value) {
            $value->selected = false;
            return $value;
        });
        return response()->json($products);
    }
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
            if (Auth::guest() == false) {
                $user = User::find(Auth::user()->id);
                $user->selected_org_id = $org->id;
                $user->selected_org_optionc_id =$org->org_optionc_id;
                $user->save();
                return response()->json($org, 200);
            }else{
                return response()->json($org, 200);
            }

        } else {
            return response()->json('Sorry, your school is not yet registered', 404);
        }
    }

    public function getProducts(Request $request)
    {
        $org_id = (int) $request->org_id;

        if ($request->has('name') && $request->has('category')) {
            $products = Product::productOrg($org_id)
                ->with('category:id,name', 'sub_category:id,name')
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


        $products->getCollection()->transform(function ($value) use ($org_id, $request) {
            $value->selected = false;
            $value->recurring = false;
            $value->recurring_is_disabled = false;
            if (Auth::guest() == false) {
                if($value->isRecurring_is_disabled($org_id, Auth::user()->id)){
                    $value->recurring_is_disabled = $value->isRecurring_is_disabled($org_id, Auth::user()->id);
                    $value->recurring = true;
                }
            }
            $value->qty = 1;
            if ($value->is_bundle == 1) {
                $value->price = round($value->getBundlePrice('retailer'), 2);
                // $value->member_price = $value->getBundlePrice('member');
                // $value->wholesale_price = $value->getBundlePrice('wholesale');
                $selected = [];
                $bundle_products = ProductBundle::where('bundle_id', $value->id)->get();
                foreach ($bundle_products as $key2 => $value2) {
                    $prod = Product::find($value2->product_id);
                    if (!empty($prod)) {
                        $prod->selected = true;
                        $prod->qty = $value2->quantity;
                        $prod->sub = "sub";
                        array_push($selected, $prod);
                    }
                }
                $value->selected_products = $selected;
            }

            if ($request->has('org_id')) {
                $value->weeks = $value->getSubcriptionWeeks($org_id);
                if ($value->weeks == '-') {
                    $value->subscription_price = 'no subscription yet';
                    $value->is_subscription = 0;
                } else {
                    $value->is_subscription = 1;
                    $value->recurring_is_disabled = true;
                    $subscription_price = $value->price * $value->weeks;
                    $value->subscription_price = round($subscription_price, 2);
                    $value->subscribers_total = $value->getSubscriptionNumber($org_id);
                    $value->subscription_limit = $value->getSubscriptionLimit($org_id);
                    $value->is_no_subscrition_available = $value->isNoSubscriptionAvailable($org_id);
                    if (Auth::guest() == false) {
                        $value->is_already_subscribe =
                            $value->ifUserIsAlreadySubscribe($org_id, Auth::user()->id);
                    }
                }
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

            if ($user->selected_org_id) {
                $org = Organization::find($user->selected_org_id);
                if (!empty($org)) {
                    $user->organization = $org;
                } else {
                    $user->organization = null;
                }
            } else {
                $user->organization = null;
            }


            $user->image_path = $user->getPicture();

            if (auth()->user()->isOrganization()) {
                return redirect('/admin/org/products');
            }
            if (auth()->user()->isAdmin()) {
                return redirect('/admin/products');
            }
            // if (auth()->user()->customer_role == 2) {
            //     $sunclub_user = 1;
            //     $user->balance = $user->getSunClubBalance();
            //     $user->discount = $user->getUserDiscount();
            // } else {
            //     $sunclub_user = 0;
            //     $user->balance = 0;
            //     $user->discount = $user->getUserDiscount();
            // }
            $sunclub_user = 0;
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
        $count = Product::where('is_visible', 1)->where('status', '!=', 3)->count();
        // dd($count);
        if ($count < 4) {
            $products = Product::where('is_visible', 1)->where('status', '!=', 3)->get();
        } else {
            $products = Product::where('is_visible', 1)->where('status', '!=', 3)->get()->random(4);
        }

        foreach ($products as $key => $prod) {
            if ($prod->is_bundle == 1) {
                // $prod->price = $prod->getBundlePrice('retailer');
                $prod->price = round($prod->getBundlePrice('retailer'), 2);
            }
        }

        return response()->json($products, 200);
    }

    public function getProductsToSwap(Request $request){
        $search = $request->search;
        $price = $request->price;
        $id = $request->id;
        $products = Product::with('category:id,name')
            ->where('id','!=', $id)
            ->where('price', $price)
            ->where('is_visible', 1)
            ->where('status', '!=', 3)
            ->where('is_bundle', 0)
            ->where(function ($query) use ($search) {
                $query->where('name', 'LIKE', "%$search%")
                    ->orWhere('sku', 'LIKE', "%$search%");
            })
            // ->where('name', 'LIKE', "%$search%")
            // ->where('sku', 'LIKE', "%$search%")
            ->paginate(50);

        $products->getCollection()->transform(function ($value) {
            $value->selected = false;
            $value->qty = 1;
            return $value;
        });
        return response()->json($products);
    }
}
