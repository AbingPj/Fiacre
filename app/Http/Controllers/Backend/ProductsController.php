<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\Backend\Product\ProductBundleStoreRequest;
use App\Http\Requests\Backend\Product\ProductUpdateRequest;
use App\Http\Requests\Backend\Product\ProductStoreRequest;
use App\Models\OrderProduct;
use App\Models\Product;
use App\Models\ProductBundle;
use App\Models\ProductCategory;
use App\ProductInStock;
use App\Services\ImagePathService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use stdClass;

class ProductsController extends Controller
{

    protected $products;
    protected $categories;



    public function __construct()
    {
        $this->categories = ProductCategory::select('id', 'name')->get();
    }

    public function index()
    {

        $products = Product::where('status', '!=', 3)->get();
        $class = new stdClass;
        $class->in_stock = $products->where('atr_qty_label', 'In Stock')->count();
        $class->low_of_stock =  $products->where('atr_qty_label', 'Low of Stock')->count();
        $class->out_of_stock =  $products->where('atr_qty_label', 'Out of Stock')->count();
        $data =  $class;
        return view('backend.products.index', compact('data'));
    }

    public function create()
    {
        $categories = $this->categories;
        return view('backend.products.create', compact('categories'));
    }

    public function store(ProductStoreRequest $request)
    {

        $product = new Product;
        $product->name = $request->name;
        $product->sku = $request->sku; // stock-keeping unit
        $product->description = $request->description;
        $product->price = $request->price;
        $product->discount_price = $request->discount_price;
        $product->member_price = $request->member_price;
        $product->wholesale_price = $request->wholesale_price;
        $product->tags = $request->tags;
        $product->unit = $request->unit;
        $product->minorder = $request->minorder;
        $product->maxorder = $request->maxorder;
        $product->category_id = $request->category; //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
        $product->store_id = 1;
        $product->created_by = Auth::user()->id;
        $product->season = $request->season;   // Winter, Spring, Summer, Fall
        // $product->status = $request->status;   // 1 - available, 2 - out, 3 - archived;

        // upload image
        if ($request->hasFile('image_file')) {
            $photo_path = Storage::putFile('public/products/images', $request->file('image_file'));
            $product->image_path = $photo_path;
        }


        if ($request->visible == 'on') {
            $product->is_visible = 1; // 1-show, 0-hide
        } else {
            $product->is_visible = 0;
        }

        if ($request->has('sub_category')) {
            $product->sub_category_id = $request->sub_category;
        } else {
            $product->sub_category_id = null;
        }


        $product->save();
        // $product_id = $product->id;
        // $this->getProducts();
        // // $products = $this->products;
        // $categories = $this->categories;
        // // return $this->create();
        // // $this->edit($product->id)->withFlashSuccess(__('alerts.backend.users.created'));;

        // return redirect('/admin/products/' . $product_id . '/edit')->withFlashSuccess(__('alerts.backend.products.created'));;
        $request->session()->flash('flash_success', "Created new product.");
        return url('/admin/products/' . $product->id . '/edit');
    }

    /// 1 product, EDIT
    public function edit($product_id)
    {
        $product = Product::find($product_id);
        // if (!empty($product->image_path)) {
        //     $photo = url('storage/' . ImagePathService::setPath($product->image_path));
        //     $product->image_path = "$photo";
        // } else {
        //     $product->image_path = "/img/no-product-image.png";
        // }
        $categories = $this->categories;
        return view('backend.products.edit', compact('product', 'categories', 'product_id'));
    }


    public function update(ProductUpdateRequest $request)
    {
        // dd($request);

        $product = Product::find($request->product_id);
        if (!empty($product)) {
            $product->name = $request->name;
            $product->sku = $request->sku; // stock-keeping unit
            $product->description = $request->description;
            $product->price = $request->price;
            $product->discount_price = $request->discount_price;
            $product->member_price = $request->member_price;
            $product->wholesale_price = $request->wholesale_price;
            $product->tags = $request->tags;
            $product->unit = $request->unit;
            $product->minorder = $request->minorder;
            $product->maxorder = $request->maxorder;
            $product->category_id = $request->category; //1 - vegetable,  2 - fruit, 3 - dairy, 4 - meat, 5 - flower, 6 - herb, 7 - tree, 8 - animal
            $product->store_id = 1;
            $product->created_by = Auth::user()->id;
            $product->season = $request->season;   // Winter, Spring, Summer, Fall
            // $product->status = $request->status;   // 1 - available, 2 - out, 3 - archived;

            // upload image
            if ($request->hasFile('image_file')) {
                if (!$product->image_path == null || !$product->image_path == '') {

                    // check if picture is not from seeds
                    $explode_path = explode('/', $product->image_path);
                    if (isset($explode_path[2])) {
                        if ($explode_path[2] != 'seeds') {
                            // delete old picture
                            Storage::delete([$product->image_path]);
                        }
                    }
                }
                $photo_path = Storage::putFile('public/products/images', $request->file('image_file'));
                $product->image_path = $photo_path;
            }

            if ($request->visible == 'on') {
                $product->is_visible = 1; // 1-show, 0-hide
            } else {
                $product->is_visible = 0;
            }

            if ($request->has('sub_category')) {
                $product->sub_category_id = $request->sub_category;
            } else {
                $product->sub_category_id = null;
            }


            $product->save();
            // $product_id = $product->id;
            // $this->getProducts();
            // return redirect('/admin/products/' . $product_id . '/edit')->withFlashSuccess(__('alerts.backend.products.updated'));;

            $request->session()->flash('flash_success', __('alerts.backend.products.updated'));
            return url('/admin/products/' . $product->id . '/edit');

        } else {
            return url('/admin/products/' . $product->id . '/edit');
            // return $this->edit($request->product_id);
        }
    }

    public function archive($product_id)
    {
        // dd($product_id);
        $product = Product::find($product_id);
        if (!empty($product)) {
            $product->status = 3;   // 1 - available, 2 - out, 3 - archived;
            $product->save();
            // $id = $product->id;
            $this->getProducts();
            return redirect('/admin/products')->withFlashSuccess(__('alerts.backend.products.archived'));
        } else {
            return $this->edit($product_id);
        }
    }

    /// POST
    public function updateProduct(Request $request, $product_id)
    {

        // dd($product_id);
        $store_id = 1;
        $created_by = 1;
        $status = 1;
        $image_path = 'image.png';
        $is_visible = 1;

        $updateRequests = array(
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
            'member_price' => $request->member_price,
            'wholesale_price' => $request->wholesale_price,
            'tags' => $request->tags,
            'unit' => $request->unit,
            'minorder' => $request->minorder,
            'maxorder' => $request->maxorder,
            'image_path' => $image_path,
            'category_id' => $request->category_id,
            'store_id' => $store_id,
            'created_by' => $created_by,
            'status' => $status
        );
        $update = \DB::table('products')
            ->where('id', $product_id)
            ->update($updateRequests);

        dd('product successfully updated');
        // return view('admin.pages.products', [
        //     'page_title' => 'Products',
        // ]);
    }

    /// GET
    public function deleteProduct(Request $request, $product_id)
    {
        \DB::table('products')->where('id', $product_id)->delete();

        dd('product successfully deleted');
        // return view('admin.pages.products', [
        //     'page_title' => 'Products',
        // ]);
    }

    public function getProducts()
    {
        $this->products = Product::with('category:id,name')->where('status', '!=', 3)->orderBy('created_at', 'DESC')->get();
        $this->products->map(function ($prod) {

            // if (!empty($prod->image_path)) {
            //     $photo = url('storage/' . ImagePathService::setPath($prod->image_path));
            //     $prod->image_path = "$photo";
            // } else {
            //     $prod->image_path = "/img/no-product-image.png";
            // }

            $total_instocks = 0;
            $instocks  = ProductInStock::where('product_id', $prod->id)->get();
            foreach ($instocks as $key => $in) {
                $total_instocks =  $total_instocks + $in->quantity;
            }


            $total_order = 0;
            $ordererdProducts  = OrderProduct::where('product_id', $prod->id)->get();
            foreach ($ordererdProducts as $key2 => $orderedprod) {
                if ($orderedprod->order->status == 2) {
                    $total_order = $total_order + $orderedprod->updated_quantity;
                }
            }


            $prod->quantity = $total_instocks - $total_order;
            if ($prod->quantity <= 0) {
                $prod->stock_label_id = 0;
                $prod->stock_label = "Out of Stock";
            } else if ($prod->quantity <= 10) {
                $prod->stock_label_id = 2;
                $prod->stock_label = "Low of Stock";
            } else {
                $prod->stock_label_id = 1;
                $prod->stock_label = "In Stock";
            }

            if ($prod->is_bundle == 1) {
                $prod->price = $prod->getBundlePrice('retailer');
                $prod->member_price = $prod->getBundlePrice('member');
                $prod->wholesale_price = $prod->getBundlePrice('wholesale');
            }


            return $prod;
        });
    }


    public function productVisible(Request $request)
    {

        $id = $request->product_id;
        $bol = $request->bol;
        $product = Product::find($id);

        if ($bol == true ||  $bol == 1) {
            $product->is_visible = 1; // 1-show, 0-hide
        } else {
            $product->is_visible = 0;
        }
        $product->save();
        return $product->is_visible;
    }

    public function productInStocks($product_id)
    {
        $product = Product::find($product_id);

        // if (!empty($product->image_path)) {
        //     $photo = url('storage/' . ImagePathService::setPath($product->image_path));
        //     $product->image_path = "$photo";
        // } else {
        //     $product->image_path = "/img/no-product-image.png";
        // }


        $total_instocks = 0;
        $total_order = 0;

        $instocks  = ProductInStock::where('product_id', $product_id)->get();
        foreach ($instocks as $key => $in) {
            $date = new Carbon($in->created_at);
            $in->date_label =  $date->format('m/d/Y');
            $total_instocks =  $total_instocks + $in->quantity;
        }

        $ordererdProducts  = OrderProduct::where('product_id', $product_id)->get();
        foreach ($ordererdProducts as $key2 => $prod) {
            if ($prod->order->status == 2) {
                $total_order = $total_order + $prod->updated_quantity;
            }
        }
        $product->quantity = $total_instocks - $total_order;
        return view('backend.products.instocks', compact('product', 'instocks'));
    }

    public function storeQuantity(Request $request)
    {

        $id = $request->product_id;
        $quantity = $request->quantity;
        $product = Product::find($id);
        $stock = new ProductInStock();
        $stock->product_id  = $product->id;
        $stock->user_id  = Auth::user()->id;
        $stock->quantity  = $quantity;
        $stock->save();
        return redirect('/admin/products/' . $id . '/instocks')->withFlashSuccess('Added New Quantity');;
    }

    public function updateQuantity(Request $request)
    {
        $id = $request->instock_id;
        $quantity = $request->quantity;
        $stock = ProductInStock::find($id);
        $stock->quantity  = $quantity;
        $stock->save();
        return redirect('/admin/products/' . $stock->product_id . '/instocks')->withFlashSuccess('Updated Quantity');;
    }

    public function createBundle()
    {
        $categories = $this->categories;
        return view('backend.products.create-bundle', compact('categories'));
    }

    public function editBundle($product_id)
    {
        $product = Product::find($product_id);
        if ($product->is_bundle == 0) {
            abort(404);
        }


        $categories = $this->categories;

        $selectas = [];
        $bundle_products = ProductBundle::where('bundle_id', $product_id)->get();
        foreach ($bundle_products as $key => $value) {
            $b_product = Product::find($value->product_id);
            if (!empty($b_product)) {
                $b_product->selected = true;
                $b_product->qty = $value->quantity;
                // $b_product->save();
                array_push($selectas, $b_product);
            }
        }

        // dump($selectas);




        return view('backend.products.edit-bundle', [
            'product' => $product,
            'selectas' => $selectas,
            'categories' => $categories
        ]);
        // return view('backend.products.edit-bundle', compact('product', 'categories', 'selectas'));
    }


    public function storeBundleProduct(ProductBundleStoreRequest $request)
    {
        dd($request);

        $product = new Product;
        $product->name = $request->name;
        $product->sku = $request->sku; // stock-keeping unit
        $product->description = $request->description;
        $product->price = $request->price;
        // $product->discount_price = $request->discount_price;
        $product->member_price = $request->member_price;
        $product->wholesale_price = $request->wholesale_price;
        $product->tags = $request->tags;
        $product->unit = $request->unit;
        // $product->minorder = $request->minorder;
        // $product->maxorder = $request->maxorder;

        $product->category_id = $request->category;
        $product->store_id = 1;
        $product->created_by = Auth::user()->id;

        $product->season = $request->season;   // Winter, Spring, Summer, Fall

        if ($request->hasFile('image_file')) {
            $photo_path = Storage::putFile('public/products/images', $request->file('image_file'));
            $product->image_path = $photo_path;
        }


        if ($request->visible == 'on') {
            $product->is_visible = 1; // 1-show, 0-hide
        } else {
            $product->is_visible = 0;
        }

        $product->save();
        $product_id = $product->id;

        return redirect('/admin/products/' . $product_id . '/edit')->withFlashSuccess(__('alerts.backend.products.created'));;
    }
}
