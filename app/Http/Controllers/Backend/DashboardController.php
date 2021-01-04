<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use App\Models\TotalView;
use App\ProductInStock;
use App\Services\ImagePathService;
use Carbon\Carbon;
use Faker\Provider\Image;

/**
 * Class DashboardController.
 */
class DashboardController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */

    protected $total_products_out_stocks = 0;
    protected $total_products_low_stocks = 0;
    protected $total_products_in_stocks = 0;

    public function __construct()
    {
        $this->currentDate = Carbon::now();
        $this->startOfTheMonth = Carbon::now()->startOfMonth();
        $this->endOfTheMonth = Carbon::now()->endOfMonth();
        $this->fifteenthOfTheMonth = Carbon::now()->startOfMonth()->addDays(14);
        $this->sixteenthOfTheMonth = Carbon::now()->startOfMonth()->addDays(15);
        // dd($currentDate < $sixteenthOfTheMonth);
        if ($this->currentDate < $this->sixteenthOfTheMonth) {
            $this->start = $this->startOfTheMonth;
            $this->end = $this->fifteenthOfTheMonth;
            $this->previousStart = Carbon::now()->subMonth()->startOfMonth()->addDays(15);
            $this->previousEnd = Carbon::now()->subMonth()->endOfMonth();
        } else {
            $this->start = $this->sixteenthOfTheMonth;
            $this->end = $this->endOfTheMonth;
            $this->previousStart = $this->startOfTheMonth;
            $this->previousEnd = $this->fifteenthOfTheMonth;
        }
    }

    public function index()
    {
        $now = date(Carbon::now()->toDateString());
        $yesterday = date(Carbon::now()->subDay()->toDateString());


        $from = date($this->start->toDateString());
        $to = date($this->end->toDateString());
        $previous_from = date($this->previousStart->toDateString());
        $previous_to = date($this->previousEnd->toDateString());
        // dump($previous_from);
        // dd($previous_to);

        // $newmembers = User::where('customer_role', 2)
        //     ->orWhere('customer_role', 3)
        //     ->whereBetween('created_at', [$yesterday, $now])
        //     ->toSql();

        $newmembers = User::where(function ($subQuery) {
            $subQuery->where('customer_role', 2)->orWhere('customer_role', 3);
        })
            ->whereBetween('created_at', [$yesterday, $now])
            ->get()
            ->count();

        // dd($newmembers);

        $total_product_sold = 0;
        $total_earnings = 0;
        $views = TotalView::whereBetween('created_at', [$from, $to])->get()->count();
        // $orders = Order::where('status', 2)->whereBetween('created_at', [$from, $to])->get();
        $orders = Order::whereBetween('created_at', [$from, $to])->get();
        foreach ($orders as $key => $order) {
            $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
            foreach ($ordererdProducts as $key2 => $orderedprod) {

                $total_product_sold = $total_product_sold + $orderedprod->updated_quantity;
                $total_earnings = $total_earnings + ($orderedprod->updated_quantity * $orderedprod->price);
            }
        }

        $prev_total_product_sold = 0;
        $prev_total_earnings = 0;
        $prev_views = TotalView::whereBetween('created_at', [$previous_from, $previous_to])->get()->count();
        // $prev_orders = Order::where('status', 2)->whereBetween('created_at', [$previous_from, $previous_to])->get();
        $prev_orders = Order::whereBetween('created_at', [$previous_from, $previous_to])->get();
        foreach ($prev_orders as $key => $order) {
            $ordererdProducts2  = OrderProduct::where('order_id', $order->id)->get();
            foreach ($ordererdProducts2 as $key3 => $orderedprod2) {

                $prev_total_product_sold = $prev_total_product_sold + $orderedprod2->updated_quantity;
                $prev_total_earnings = $prev_total_earnings + ($orderedprod2->updated_quantity * $orderedprod2->price);
            }
        }




        $products = $this->getProducts();
        $low = $this->total_products_low_stocks;
        $out = $this->total_products_out_stocks;
        $this->getProductsSolds();
        $months_labels = $this->MonthsLabel;
        $total_product_sold_per_month = $this->ProductSoldPerMonth;
        $total_views_per_month = $this->TotalViewsPerMonth;
        $fromLabel = $this->start->format('F d, Y');
        $toLabel =  $this->end->format('F d, Y');
        $total_orders = Order::all()->count();




        return view('backend.dashboard', compact(
            'total_product_sold',
            'total_earnings',
            'products',
            'newmembers',
            'low',
            'out',
            'months_labels',
            'total_product_sold_per_month',
            'total_views_per_month',
            'fromLabel',
            'toLabel',
            'views',
            'prev_total_product_sold',
            'prev_total_earnings',
            'prev_views',
            'total_orders'
        ));
    }


    public function getProductsSolds($numberofMonths = 6)
    {
        $now = Carbon::now()->subMonths($numberofMonths - 1);
        $monthsLabel = [];

        $total_earnings = 0;
        $total_product_sold_per_month = [];
        $total_views_per_month = [];


        for ($i = 1; $i < $numberofMonths + 1; $i++) {

            $now = Carbon::now()->subMonths($numberofMonths - $i);
            array_push($monthsLabel, $now->format('F'));
            $from = date($now->startOfMonth()->toDateString());
            $to = date($now->endOfMonth()->toDateString());
            $total_product_sold = 0;
            // $orders = Order::where('status', 2)->whereBetween('created_at', [$from, $to])->get();
            $orders = Order::whereBetween('created_at', [$from, $to])->get();
            foreach ($orders as $key => $order) {
                $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
                foreach ($ordererdProducts as $key2 => $orderedprod) {
                    $total_product_sold = $total_product_sold + $orderedprod->updated_quantity;
                    $total_earnings = $total_earnings + ($orderedprod->updated_quantity * $orderedprod->price);
                }
            }
            array_push($total_product_sold_per_month, $total_product_sold);

            /// get total views
            $views = TotalView::whereBetween('created_at', [$from, $to])->get()->count();
            array_push($total_views_per_month, $views);

            // dump($total_product_sold);
        }
        $this->MonthsLabel = $monthsLabel;
        $this->ProductSoldPerMonth = $total_product_sold_per_month;
        $this->TotalViewsPerMonth = $total_views_per_month;
    }

    public function getProducts()
    {
        $from = date($this->start->toDateString());
        $to = date($this->end->toDateString());
        // $this->products = Product::with('category:id,name')
        //     ->where('status', '!=', 3)
        //     ->orderBy('created_at', 'DESC')->get();
        $this->products = Product::get();

        $this->products->map(function ($prod) use ($from, $to) {

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
            $total_order_earnings = 0;
            $total_order_earnings_per_15 = 0;
            $ordererdProducts  = OrderProduct::where('product_id', $prod->id)->get();
            foreach ($ordererdProducts as $key2 => $orderedprod) {
                // if ($orderedprod->order->status == 2) {
                $total_order = $total_order + $orderedprod->updated_quantity;
                $total_order_earnings = $total_order_earnings + ($orderedprod->updated_quantity * $orderedprod->price);

                if ($orderedprod->order->date >= $this->start) {
                    $total_order_earnings_per_15 =
                        $total_order_earnings_per_15 + ($orderedprod->updated_quantity
                            * $orderedprod->price);
                }

                // // dd($orderedprod->order_id);
                // $order = Order::where('status', 2)
                //     ->where('id', $orderedprod->order_id)
                //     ->get();

                // if (!empty($order)) {
                //     if ($order->date >= $this->start) {
                //         $total_order_earnings_per_15 =
                //             $total_order_earnings_per_15 + ($orderedprod->updated_quantity
                //                 * $orderedprod->price);
                //     }
                // }

                // }
            }

            // $ordererdProductsBy15  = OrderProduct::where('product_id', $prod->id)
            //     ->whereBetween('created_at', [$from, $to])->get();
            // foreach ($ordererdProductsBy15 as $key3 => $orderedprod2) {
            //     if ($orderedprod2->order->status == 2) {
            //         $total_order = $total_order + $orderedprod2->updated_quantity;
            //         $total_order_earnings_per_15 = $total_order_earnings_per_15 + ($orderedprod2->updated_quantity * $orderedprod2->price);
            //     }
            // }

            $prod->total_earnings = $total_order_earnings;
            $prod->total_earnings_per_15 = $total_order_earnings_per_15;
            $prod->quantity = $total_instocks - $total_order;
            if ($prod->quantity <= 0) {
                $prod->stock_label_id = 0;
                $prod->stock_label = "Out of Stock";
                $this->total_products_out_stocks = $this->total_products_out_stocks + 1;
            } else if ($prod->quantity <= 10) {
                $prod->stock_label_id = 2;
                $prod->stock_label = "Low of Stock";
                $this->total_products_low_stocks = $this->total_products_low_stocks + 1;
            } else {
                $prod->stock_label_id = 1;
                $prod->stock_label = "In Stock";
                $this->total_products_in_stocks = $this->total_products_in_stocks + 1;
            }
            return $prod;
        });


        $sortedproducts = $this->products->sortByDesc('total_earnings_per_15')->take(5);

        $products = [];
        foreach ($sortedproducts as $key => $value) {
            array_push($products, $value);
        }
        return $products;
    }



    /**
     * Pre-condition: Valid Sign In
    Date Range Covered: Month-to-date (Example: Today is 5/15, so range is 5/1/2020-5/15/2020)

    1.Total Views: Count of users who visited the site
    2.Products Sold: Count of orders with status of completed
    3.Total Earnings: Amount total of all completed orders
    4.Chart of Total View and Products Sold
    5.Top Products: Sort 5 product items that are ordered most
    6.Quick Details:
        a. Count of New Members *
        b. Count of On Process Orders *
        c. Count of On Hold Orders *
        d. Count of Low in Stock Products *
        e. Count of Out of Stocks Products *
     */

    public function soldProductCount()
    {
        $startMonth = Carbon::now()->startOfMonth()->toDateString();
        $today = Carbon::now()->toDateString();

        $soldProducts = \DB::table('orders')
            ->whereRaw("date <=  date('$today')")
            ->whereRaw("date >=  date('$startMonth')")
            ->where('status', 4)
            ->count();

        return response()->json($soldProducts);
    }

    public function totalEarnings()
    {
        $startMonth = Carbon::now()->startOfMonth()->toDateString();
        $today = Carbon::now()->toDateString();

        $earnings = \DB::table('order_products')
            ->join('orders', 'orders.id', '=', 'order_products.order_id')
            ->select('order_products.quantity', 'order_products.price')
            ->whereRaw("orders.date <=  date('$today')")
            ->whereRaw("orders.date >=  date('$startMonth')")
            ->sum(\DB::raw('order_products.price * order_products.quantity'));
        // ->get();
    }

    public function topProducts()
    {
        $topProducts = \DB::table('products')
            ->join('order_products', 'order_products.product_id', '=', 'products.id')
            ->join('orders', 'orders.id', '=', 'order_products.order_id')
            ->select('products.name', 'orders.date as last_ordered')
            ->orderBy('orders.date', 'desc')
            ->take(5)
            ->get();

        foreach ($topProducts as $data) {
            $data->last_ordered = Carbon::parse($data->last_ordered)->toDateString();
        }

        return $topProducts;
        // return response()->json($topProducts);
    }

    public function memberCountSunclub()
    {
        $startMonth = Carbon::now()->startOfMonth()->toDateString();
        $today = Carbon::now()->toDateString();

        $sunclubMembers = \DB::table('subscription_sunclub_members')
            ->whereRaw("created_at <=  date('$today')")
            ->whereRaw("created_at >=  date('$startMonth')")
            ->count();

        return response()->json($sunclubMembers);
    }

    public function wholeSaleCountMember()
    {
        $startMonth = Carbon::now()->startOfMonth()->toDateString();
        $today = Carbon::now()->toDateString();

        $wholesaleMembers = \DB::table('subscription_wholesale_members')
            ->whereRaw("created_at <=  date('$today')")
            ->whereRaw("created_at >=  date('$startMonth')")
            ->count();

        return response()->json($wholesaleMembers);
    }

    public function countOnHoldOrders()
    {
        $startMonth = Carbon::now()->startOfMonth()->toDateString();
        $today = Carbon::now()->toDateString();

        $onHoldOrders = \DB::table('orders')
            ->whereRaw("date <=  date('$today')")
            ->whereRaw("date >=  date('$startMonth')")
            ->where('status', 0)
            ->count();

        return response()->json($onHoldOrders);
    }

    // public function countLowProducts(){
    //     $lowProducts = \DB::table('products')
    //         ->where('')
    //         ->count();

    //     return response()->json($lowProducts);
    // }
}
