<?php

namespace App\Http\Controllers\Backend\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Product\ProductBundleStoreRequest;
use App\Http\Requests\Backend\Product\ProductBundleUpdateRequest;
use App\Models\Organization;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\ProductCategory;
use App\Models\ProductOrganization;
use App\Models\ProductSubCategory;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use stdClass;

class ProductsController extends Controller
{
    public function getProducts(Request $request)
    {
        $search = $request->search;
        $products = Product::with('category:id,name')
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

    public function getProducts2(Request $request)
    {
        $search = $request->search;
        $stock = 'All';
        if ($request->has('stock')) {
            $stock = $request->stock;
        };
        $perpage = 10;
        if ($request->has('perpage')) {
            $perpage = $request->perpage;
        };


        $products = Product::with('category:id,name')
            ->where('status', '!=', 3)
            ->where(function ($query) use ($search) {
                $query->where('name', 'LIKE', "%$search%")
                    ->orWhere('sku', 'LIKE', "%$search%");
            })
            ->orderBy('created_at', 'DESC')
            ->get();

        foreach ($products as $key => $prod) {
            if ($prod->is_bundle == 1) {
                // $prod->price = $prod->getBundlePrice('retailer');
                $prod->price = round($prod->getBundlePrice('retailer'),2);
                $prod->member_price = $prod->getBundlePrice('member');
                $prod->wholesale_price = $prod->getBundlePrice('wholesale');
            }
        }

        // dd($products);

        if ($stock != "All") {
            $products = $products->where('atr_qty_label', $stock);
        }

        if ($perpage == "All") {
            $perpage = $products->count();
        }

        if($products->count() != 0){
            $products  = $this->paginate($products, $perpage);
            return response()->json($products);
        }else {
            return response()->json([
                'msg' => 'No Products Found with "' . $search. '".'
            ], 404);
        }


        // $products->getCollection()->transform(function ($value) {
        //     if ($value->is_bundle == 1) {

        //     }
        //     return $value;
        // });


    }



    public function storeBundleProduct(ProductBundleStoreRequest $request)
    {
        DB::beginTransaction();


        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->sku = $request->sku; // stock-keeping unit
        $product->unit = $request->unit;
        $product->category_id = $request->category;
        $product->tags = $request->tags;
        $product->season = $request->season;   // Winter, Spring, Summer, Fall
        $product->minorder = $request->minorder;
        $product->maxorder = $request->maxorder;
        $product->fundraise_percentage = $request->fundraise_percentage;
        // $product->price = $request->price;
        // $product->member_price = $request->member_price;
        // $product->wholesale_price = $request->wholesale_price;

        $product->store_id = 1;
        $product->created_by = Auth::user()->id;

        if ($request->hasFile('image_file')) {
            $photo_path = Storage::putFile('public/products/images', $request->file('image_file'));
            $product->image_path = $photo_path;
        }


        $product->is_visible = ($request->visible == 'on') ? 1 : 0;
        $product->is_bundle = 1;
        $product->bundle_percentage =  $request->discount_percentage;

        if ($request->has('sub_category')) {
            $product->sub_category_id = $request->sub_category;
        } else {
            $product->sub_category_id = null;
        }

        $product->save();



        $selected_products = json_decode($request->selected_products);

        foreach ($selected_products as $key => $value) {
            $bundle = new ProductBundle;
            $bundle->bundle_id = $product->id;
            $bundle->product_id = $value->id;
            // $bundle->quantity = intval($value->qty);
            $bundle->quantity = $value->qty;
            $bundle->save();
        }

        DB::commit();
        // DB::rollBack();
        $request->session()->flash('flash_success', "Created new product.");

        return url('/admin/products/bundle/' . $product->id . '/edit');
    }

    public function updateBundleProduct(ProductBundleUpdateRequest $request)
    {

        DB::beginTransaction();
        $product = Product::find($request->product_id);
        if (!empty($product)) {

            $product->name = $request->name;
            $product->description = $request->description;
            $product->sku = $request->sku; // stock-keeping unit
            $product->unit = $request->unit;
            $product->category_id = $request->category;
            $product->tags = $request->tags;
            $product->season = $request->season;   // Winter, Spring, Summer, Fall
            $product->minorder = $request->minorder;
            $product->maxorder = $request->maxorder;
            $product->fundraise_percentage = $request->fundraise_percentage;


            // upload image
            if ($request->hasFile('image_file')) {
                if (!$product->image_path == null || !$product->image_path == '') {
                    $explode_path = explode('/', $product->image_path);
                    if (isset($explode_path[2])) {
                        if ($explode_path[2] != 'seeds') {
                            Storage::delete([$product->image_path]);
                        }
                    }
                }
                $photo_path = Storage::putFile('public/products/images', $request->file('image_file'));
                $product->image_path = $photo_path;
            }

            $product->is_visible = ($request->visible == 'on') ? 1 : 0;
            $product->bundle_percentage =  $request->discount_percentage;

            if ($request->has('sub_category')) {
                $product->sub_category_id = $request->sub_category;
            } else {
                $product->sub_category_id = null;
            }

            $product->save();

            $selected_products = json_decode($request->selected_products);

            // $ProductsBundle = ProductBundle::where('bundle_id', $product->id)->delete();
            ProductBundle::where('bundle_id', $product->id)->delete();

            foreach ($selected_products as $key => $value) {
                $bundle = new ProductBundle;
                $bundle->bundle_id = $product->id;
                $bundle->product_id = $value->id;
                // $bundle->quantity = intval($value->qty);
                $bundle->quantity = $value->qty;
                $bundle->save();
            }

            DB::commit();
            // DB::rollBack();
            $request->session()->flash('flash_success', "Products changes are saved.");

            return url('/admin/products/bundle/' . $product->id . '/edit');

            // return redirect('/admin/products/' . $product->id . '/edit')->withFlashSuccess(__('alerts.backend.products.updated'));;
        }
    }

    public function getSubCategory($category_id)
    {

        $category = ProductCategory::find($category_id);
        $sub_categories = [];
        if (!empty($category)) {
            $sub_categories = ProductSubCategory::where('status', 1)
                ->where('category_id', $category_id)
                ->get();
        }

        $class = new stdClass;
        $class->category = $category;
        $class->sub_categories = $sub_categories;
        return response()->json($class);
    }


    public function paginate($items, $perPage = 15, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        // return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);

        $lap = new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
        return [
            'current_page' => $lap->currentPage(),
            'data' => $lap->values(),
            'first_page_url' => $lap->url(1),
            'from' => $lap->firstItem(),
            'last_page' => $lap->lastPage(),
            'last_page_url' => $lap->url($lap->lastPage()),
            'next_page_url' => $lap->nextPageUrl(),
            'per_page' => $lap->perPage(),
            'prev_page_url' => $lap->previousPageUrl(),
            'to' => $lap->lastItem(),
            'total' => $lap->total(),
        ];
    }

    public function productsorganizations($product_id)
    {
        $orgs = Organization::all();
        foreach ($orgs as $key => $value) {
            $value->selected = false;
            if(ProductOrganization::where('prodorg_product_id',$product_id)->where('prodorg_organization_id',$value->id)->exists()){
                $value->selected = true;
            };
        }
        return response()->json($orgs);
    }

    public function productSelectOrganizationSaveChanges(Request $request)
    {
        DB::beginTransaction();
        try{
            $productOrganization  = ProductOrganization::where('prodorg_product_id', $request->product_id)->delete();
            $organizations = $request->organizations;
            foreach ($organizations as $key => $value) {
                // dd($value['selected']);
                if($value['selected'] == true){
                    $prodOrg = new ProductOrganization;
                    $prodOrg->prodorg_product_id = $request->product_id;
                    $prodOrg->prodorg_organization_id = $value['id'];
                    $prodOrg->save();
                }
            }
            DB::commit();
            return response()->json('success', 200);
        }
        catch(Exception $e){
            DB::rollback();
            return response()->json([
                'status' => 'fail',
                'message' => $e->getMessage()
            ], 400);
        }

    }
}
