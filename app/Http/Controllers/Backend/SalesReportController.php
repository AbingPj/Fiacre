<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use stdClass;
use PDF;

class SalesReportController extends Controller
{
    private $currentDate;

    public function __construct()
    {
        $now = Carbon::now();
        $this->currentDate = new Carbon($now->format('m/d/Y'));
    }

    public function weekly()
    {
        return view('backend.reports.sales.weekly');
    }
    public function monthly()
    {
        return view('backend.reports.sales.monthly');
    }

    public function yearly()
    {
        return view('backend.reports.sales.yearly');
    }

    public function custom()
    {
        return view('backend.reports.sales.custom');
    }



    ////////// Daily
    public function daily()
    {
        return view('backend.reports.sales.daily');
    }


    public function dailyReport(Request $request)
    {
        $class = $this->getDailyReportData($request);
        return response()->json($class);
    }

    public function getDailyReportData($request)
    {
        $selected_date = $request->date;

        if ($selected_date == null) {
            $dateLabel = Carbon::now()->format('F d, Y');
            $date = Carbon::now();
            $date = date($date->toDateString());
        } else {
            $dateLabel = Carbon::parse($selected_date)->format('F d, Y');
            $date = Carbon::parse($selected_date);
            $date = date($date->toDateString());
        }
        $data = [];
        $overall_total = 0;
        $orders = Order::whereDate('date', $date)->get();
        foreach ($orders as $key => $order) {
            $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
            // $total_earnings = 0;
            $total_products = 0;
            $total_price = 0;
            // $tax = 0;
            foreach ($ordererdProducts as $key2 => $orderedprod) {
                if ($orderedprod->is_subscription) {
                    $total_price = $total_price + $orderedprod->subscription_price;
                } else {
                    $total_price = $total_price + ($orderedprod->updated_quantity * $orderedprod->price);
                }
                // $tax = $tax + ($orderedprod->updated_quantity * $orderedprod->tax_amount);
                $total_products = $total_products + $orderedprod->updated_quantity;
            }

            // // get discount
            // $discount = $total_earnings * ($order->discount_percentage /  100);


            // // get coupon discount
            // $coupon_discount = 0;

            // if ($order->has_coupon) {
            //     if ($order->coupon_is_percentage) {
            //         $coupon_discount = $total_earnings * ($order->coupon_discount_amount /  100);
            //     } else {
            //         $coupon_discount = $order->coupon_discount_amount;
            //     }
            // }

            // // total amount - discounnt
            // $overallTotalOrderEarn = $total_earnings - $discount;

            // // total amount - discounnt
            // $overallTotalOrderEarn = $overallTotalOrderEarn - $coupon_discount;

            // // total amount + delivery fee
            // $overallTotalOrderEarn = $overallTotalOrderEarn + $order->delivery_fee;

            // // total amount + tax
            // $overallTotalOrderEarn = $overallTotalOrderEarn + $tax;


            // // get Billing Percentage
            $CCorACHFee = $total_price * ($order->billing_type_percentage /  100);

            // // total + billing percentage
            $overallTotalOrderEarn = $total_price + $CCorACHFee;

            /// total - referral discount
            $overallTotalOrderEarn = $overallTotalOrderEarn - $order->referral_amount;

            $class = new stdClass;
            $class->order_id = $order->id;
            $time = Carbon::parse($order->date)->format('h:i A');
            $class->time = $time;
            $class->number_of_products = $total_products;
            $class->f_number_of_products = number_format($total_products);
            $class->total_earnings = $overallTotalOrderEarn;
            $class->f_total_earnings = number_format($overallTotalOrderEarn, 2);
            $class->url_for_print = url('/admin/generate/pdf/order2/' . $order->id);
            array_push($data, $class);
            $overall_total = $overall_total + $overallTotalOrderEarn;
        }
        $class = new stdClass;
        $class->data = $data;
        $class->total_earnings = $overall_total;
        $class->f_total_earnings = number_format($overall_total, 2);
        $class->date =  $dateLabel;
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }

    public function dailyReportGeneratePdf(Request $request)
    {
        $class = $this->getDailyReportData($request);
        $pdf = PDF::loadView('backend.pdf.daily-sales-report', compact('class'))->setPaper('a4', 'portrait');
        return $pdf->download('daily.pdf');
    }
    ////////


    ////////// Weekly
    public function weeklyReport(Request $request)
    {
        $class = $this->getWeeklyReportData($request);
        return response()->json($class);
    }

    public function getWeeklyReportData($request)
    {
        if ($request->date == null) {

            $firstDay = Carbon::now()->startOfWeek();
            $lastDay = Carbon::now()->endOfWeek();
            $fromLabel = Carbon::now()->startOfWeek()->format('F d, Y');
            $toLabel = Carbon::now()->endOfWeek()->format('F d, Y');
            $dateLabel = Carbon::now()->format('F d, Y');
        } else {
            $firstDay = Carbon::parse($request->date)->startOfWeek();
            $lastDay = Carbon::parse($request->date)->endOfWeek();
            $fromLabel = Carbon::parse($request->date)->startOfWeek()->format('F d, Y');
            $toLabel = Carbon::parse($request->date)->endOfWeek()->format('F d, Y');
            $dateLabel = Carbon::parse($request->date)->format('F d, Y');
        }
        $stop = false;
        $data = [];
        $overall_total = 0;
        do {
            $date = new Carbon($firstDay);
            $date = date($date->toDateString());
            $total_earnings = 0;
            $total_products = 0;
            $total_orders = 0;
            $overallTotalOrderEarn = 0;
            $orders = Order::whereDate('date', $date)->get();
            foreach ($orders as $key => $order) {
                $order_amount = 0;
                $overall_order_amount  = 0;
                $tax = 0;
                $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
                foreach ($ordererdProducts as $key2 => $orderedprod) {
                    if ($orderedprod->is_subscription) {
                        $order_amount = $order_amount + $orderedprod->subscription_price;
                    } else {
                        $order_amount = $order_amount + ($orderedprod->updated_quantity * $orderedprod->price);
                    }
                    // $tax = $tax + ($orderedprod->updated_quantity * $orderedprod->tax_amount);
                    $total_products = $total_products + $orderedprod->updated_quantity;
                }

                // // get discount
                // $discount = $order_amount * ($order->discount_percentage /  100);


                // // get coupon discount
                // $coupon_discount = 0;

                // if ($order->has_coupon) {
                //     if ($order->coupon_is_percentage) {
                //         $coupon_discount = $order_amount * ($order->coupon_discount_amount /  100);
                //     } else {
                //         $coupon_discount = $order->coupon_discount_amount;
                //     }
                // }


                // // total amount - discounnt
                // $overall_order_amount = $order_amount - $discount;

                // // total amount - coupon discounnt
                // $overall_order_amount = $overall_order_amount - $coupon_discount;

                // // total amount + delivery fee
                // $overall_order_amount = $overall_order_amount + $order->delivery_fee;

                // // total amount + tax
                // $overall_order_amount = $overall_order_amount + $tax;

                // // get Billing Percentage
                $CCorACHFee = $order_amount * ($order->billing_type_percentage /  100);

                // // total + billing percentage
                $overall_order_amount = $order_amount + $CCorACHFee;

                /// total - referral discount
                $overall_order_amount = $overall_order_amount - $order->referral_amount;

                // //get total earnings in a day
                $total_earnings = $total_earnings + $overall_order_amount;

                //get total orders in a day
                $total_orders = $total_orders + 1;
            }
            $class = new stdClass;
            $dayLabel = ($firstDay == $this->currentDate) ? 'Today' : $firstDay->format('l');
            $class->day = $dayLabel;
            $class->date = $firstDay->format('m/d/Y');
            $class->total_orders = $total_orders;
            $class->total_products = $total_products;
            $class->total_earnings = $total_earnings;
            $class->f_total_earnings = number_format($total_earnings, 2);
            array_push($data, $class);
            $overall_total = $overall_total + $total_earnings;
            $firstDay->addDay();
            $stop = ($firstDay > $lastDay) ? true : false;
        } while ($stop != true);
        $class = new stdClass;
        $class->data = $data;
        $class->total_earnings = $overall_total;
        $class->f_total_earnings = number_format($overall_total, 2);
        $class->date = $dateLabel;
        $class->from = $fromLabel;
        $class->to = $toLabel;
        $class->printed = Carbon::now()->format('F d, Y');
        return $class;
    }

    public function weeklyReportGeneratePdf(Request $request)
    {
        $class = $this->getWeeklyReportData($request);
        $pdf = PDF::loadView('backend.pdf.weekly-sales-report', compact('class'))->setPaper('a4', 'portrait');
        return $pdf->download('weekly.pdf');
    }
    //////






    //////////  MOnthly
    public function monthlyReport(Request $request)
    {

        $class = $this->getMonthlyReportData($request);
        return response()->json($class);
    }

    public function getMonthlyReportData($request)
    {

        if ($request->date == null) {
            $startOfMonth = Carbon::now()->startOfMonth();
            $monthLabel = Carbon::now()->format('F Y');
        } else {
            $startOfMonth = Carbon::parse($request->date)->startOfMonth();
            $monthLabel = Carbon::parse($request->date)->startOfMonth()->format('F Y');
        }
        $firstDay = new Carbon($startOfMonth);
        $lastDay = new Carbon($startOfMonth->endOfMonth());
        $stop = false;
        $data = [];
        $overall_total = 0;
        do {
            $date = new Carbon($firstDay);
            $date = date($date->toDateString());
            $total_earnings = 0;
            $total_products = 0;
            $total_orders = 0;
            $orders = Order::whereDate('date', $date)->get();
            foreach ($orders as $key => $order) {

                $order_amount = 0;
                $overall_order_amount  = 0;
                $tax = 0;

                $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
                foreach ($ordererdProducts as $key2 => $orderedprod) {
                    if ($orderedprod->is_subscription) {
                        $order_amount = $order_amount + $orderedprod->subscription_price;
                    } else {
                        $order_amount = $order_amount + ($orderedprod->updated_quantity * $orderedprod->price);
                    }
                    $total_products = $total_products + $orderedprod->updated_quantity;
                    // $tax = $tax + ($orderedprod->updated_quantity * $orderedprod->tax_amount);
                }

                // // get discount
                // $discount = $order_amount * ($order->discount_percentage /  100);

                // // get coupon discount
                // $coupon_discount = 0;

                // if ($order->has_coupon) {
                //     if ($order->coupon_is_percentage) {
                //         $coupon_discount = $order_amount * ($order->coupon_discount_amount /  100);
                //     } else {
                //         $coupon_discount = $order->coupon_discount_amount;
                //     }
                // }

                // // total amount - discounnt
                // $overall_order_amount = $order_amount - $discount;

                // // total amount - discounnt
                // $overall_order_amount = $overall_order_amount - $coupon_discount;




                // // total amount + delivery fee
                // $overall_order_amount = $overall_order_amount + $order->delivery_fee;

                // // total amount + tax
                // $overall_order_amount = $overall_order_amount + $tax;

                // // get Billing Percentage
                $CCorACHFee = $order_amount * ($order->billing_type_percentage /  100);

                // // total + billing percentage
                $overall_order_amount = $order_amount + $CCorACHFee;

                /// total - referral discount
                $overall_order_amount = $overall_order_amount - $order->referral_amount;

                // //get total earnings in a day
                $total_earnings = $total_earnings + $overall_order_amount;

                //get total orders in a day
                $total_orders = $total_orders + 1;
            }


            $class = new stdClass;
            $dateLabel = ($firstDay == $this->currentDate) ? 'Today' : $firstDay->format('m/d/Y');
            $class->date = $dateLabel;
            $class->total_orders = $total_orders;
            $class->total_products = $total_products;
            $class->total_earnings = $total_earnings;
            $class->f_total_earnings = number_format($total_earnings, 2);
            array_push($data, $class);
            $overall_total = $overall_total + $total_earnings;

            $firstDay->addDay();
            $stop = ($firstDay > $lastDay) ? true : false;
        } while ($stop != true);

        $class = new stdClass;
        $class->data = $data;
        $class->total_earnings = $overall_total;
        $class->f_total_earnings = number_format($overall_total, 2);
        $class->date = $monthLabel;
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }

    public function monthlyReportGeneratePdf(Request $request)
    {
        $class = $this->getMonthlyReportData($request);
        $pdf = PDF::loadView('backend.pdf.monthly-sales-report', compact('class'))->setPaper('a3', 'portrait');
        return $pdf->download('monthly.pdf');
    }

    //////

    /////  yearly Report
    public function yearlyReport(Request $request)
    {
        $class = $this->getYearlyReportData($request);
        return response()->json($class);
    }

    public function getYearlyReportData($request)
    {

        $year = $request->year;
        if ($year == null) {
            $startOfYear = Carbon::now()->firstOfYear();
            $year = Carbon::now()->format('Y');
        } else {
            $startOfYear = Carbon::createFromDate($year, 1, 1);
            $startOfYear =  $startOfYear->firstOfYear();
        }
        $first_month = new Carbon($startOfYear);

        $endOfYear = new Carbon($first_month);
        $endOfYear = $endOfYear->endOfYear();
        $last_month = $endOfYear->startOfMonth();
        $stop = false;
        $data = [];
        $overall_total = 0;
        do {
            $stop = ($first_month >= $last_month) ? true : false;
            $date = new Carbon($first_month);
            $from = date($date->startOfMonth()->toDateString());
            $to = date($date->endOfMonth()->toDateString());
            $total_earnings = 0;
            $total_products = 0;
            $total_orders = 0;
            $orders = Order::whereBetween('date', [$from, $to])->get();
            foreach ($orders as $key => $order) {
                $order_amount = 0;
                $overall_order_amount  = 0;
                $tax = 0;
                $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
                foreach ($ordererdProducts as $key2 => $orderedprod) {
                    if ($orderedprod->is_subscription) {
                        $order_amount = $order_amount + $orderedprod->subscription_price;
                    } else {
                        $order_amount = $order_amount + ($orderedprod->updated_quantity * $orderedprod->price);
                    }
                    $total_products = $total_products + $orderedprod->updated_quantity;
                    // $tax = $tax + ($orderedprod->updated_quantity * $orderedprod->tax_amount);
                }
                // // get discount
                // $discount = $order_amount * ($order->discount_percentage /  100);


                // // get coupon discount
                // $coupon_discount = 0;

                // if ($order->has_coupon) {
                //     if ($order->coupon_is_percentage) {
                //         $coupon_discount = $order_amount * ($order->coupon_discount_amount /  100);
                //     } else {
                //         $coupon_discount = $order->coupon_discount_amount;
                //     }
                // }

                // // total amount - discounnt
                // $overall_order_amount = $order_amount - $discount;

                // // total amount - discounnt
                // $overall_order_amount = $overall_order_amount - $coupon_discount;

                // // total amount + delivery fee
                // $overall_order_amount = $overall_order_amount + $order->delivery_fee;

                // // total amount + tax
                // $overall_order_amount = $overall_order_amount + $tax;


                // // get Billing Percentage
                $CCorACHFee = $order_amount * ($order->billing_type_percentage /  100);

                // // total + billing percentage
                $overall_order_amount = $order_amount + $CCorACHFee;

                /// total - referral discount
                $overall_order_amount = $overall_order_amount - $order->referral_amount;


                // //get total earnings in a day
                $total_earnings = $total_earnings + $overall_order_amount;

                //get total orders in a day
                $total_orders = $total_orders + 1;
            }
            $class = new stdClass;
            $dateLabel = ($first_month->format('F') == $this->currentDate->format('F')) ? 'This Month' : $first_month->format('F Y');
            $class->date = $dateLabel;
            $class->total_orders = $total_orders;
            $class->total_products = $total_products;
            $class->total_earnings = $total_earnings;
            $class->f_total_earnings = number_format($total_earnings, 2);
            array_push($data, $class);
            $overall_total = $overall_total + $total_earnings;

            $first_month->addMonth();
        } while ($stop != true);

        $class = new stdClass;
        $class->data = $data;
        $class->total_earnings = $overall_total;
        $class->f_total_earnings = number_format($overall_total, 2);
        $class->year = $year;
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }

    public function yearlyReportGeneratePdf(Request $request)
    {

        $class = $this->getYearlyReportData($request);
        $pdf = PDF::loadView('backend.pdf.yearly-sales-report', compact('class'))->setPaper('a4', 'portrait');
        return $pdf->download('yearly.pdf');
    }
    //////

    ///// Custom
    public function customDateRange(Request $request)
    {
        $class = $this->getCustomDateRangeData($request);
        return response()->json($class);
    }

    public function getCustomDateRangeData($request)
    {
        if ($request->from == null || $request->to == null) {
            // $from = Carbon::now()->subDays(1);
            $from = Carbon::now();
            $to = Carbon::now();
            // $fromLabel = Carbon::now()->subDays(1)->format('F d, Y');
            $fromLabel = Carbon::now()->format('F d, Y');
            $toLabel = Carbon::now()->format('F d, Y');
        } else {
            $from = Carbon::parse($request->from);
            $to = Carbon::parse($request->to);
            $fromLabel = Carbon::parse($request->from)->format('F d, Y');
            $toLabel = Carbon::parse($request->to)->format('F d, Y');
        }


        $data = [];
        $overall_total = 0;



        $firstDay = new Carbon($from);
        $lastDay = new Carbon($to);
        $stop = false;
        $data = [];
        $overall_total = 0;
        do {
            $date = new Carbon($firstDay);
            $date = date($date->toDateString());
            $total_earnings = 0;
            $total_products = 0;
            $total_orders = 0;

            $orders = Order::whereDate('date', $date)->get();
            foreach ($orders as $key => $order) {
                $order_amount = 0;
                $overall_order_amount  = 0;
                $tax = 0;
                $ordererdProducts  = OrderProduct::where('order_id', $order->id)->get();
                foreach ($ordererdProducts as $key2 => $orderedprod) {
                    if ($orderedprod->is_subscription) {
                        $order_amount = $order_amount + $orderedprod->subscription_price;
                    } else {
                        $order_amount = $order_amount + ($orderedprod->updated_quantity * $orderedprod->price);
                    }
                    $total_products = $total_products + $orderedprod->updated_quantity;
                    // $tax = $tax + ($orderedprod->updated_quantity * $orderedprod->tax_amount);
                }
                // // get discount
                // $discount = $order_amount * ($order->discount_percentage /  100);


                // // get coupon discount
                // $coupon_discount = 0;

                // if ($order->has_coupon) {
                //     if ($order->coupon_is_percentage) {
                //         $coupon_discount = $order_amount * ($order->coupon_discount_amount /  100);
                //     } else {
                //         $coupon_discount = $order->coupon_discount_amount;
                //     }
                // }


                // // total amount - discounnt
                // $overall_order_amount = $order_amount - $discount;


                // // total amount - discounnt
                // $overall_order_amount = $overall_order_amount - $coupon_discount;

                // // total amount + delivery fee
                // $overall_order_amount = $overall_order_amount + $order->delivery_fee;

                // // total amount + tax
                // $overall_order_amount = $overall_order_amount + $tax;

                // // get Billing Percentage
                $CCorACHFee = $order_amount * ($order->billing_type_percentage /  100);

                // // total + billing percentage
                $overall_order_amount = $order_amount + $CCorACHFee;

                /// total - referral discount
                $overall_order_amount = $overall_order_amount - $order->referral_amount;

                // //get total earnings in a day
                $total_earnings = $total_earnings + $overall_order_amount;

                //get total orders in a day
                $total_orders = $total_orders + 1;
            }


            $class = new stdClass;
            $dateLabel = ($firstDay == $this->currentDate) ? 'Today' : $firstDay->format('m/d/Y');
            $class->date = $dateLabel;
            $class->total_orders = $total_orders;
            $class->total_products = $total_products;
            $class->total_earnings = $total_earnings;
            $class->f_total_earnings = number_format($total_earnings, 2);
            array_push($data, $class);
            $overall_total = $overall_total + $total_earnings;

            $firstDay->addDay();
            $stop = ($firstDay > $lastDay) ? true : false;
        } while ($stop != true);

        $class = new stdClass;
        $class->data = $data;
        $class->total_earnings = $overall_total;
        $class->f_total_earnings = number_format($overall_total, 2);
        $class->from_label = $fromLabel;
        $class->to_label = $toLabel;
        $class->printed = Carbon::now()->format('F d, Y');

        return $class;
    }

    public function customReportGeneratePdf(Request $request)
    {

        $class = $this->getCustomDateRangeData($request);
        $pdf = PDF::loadView('backend.pdf.custom-sales-report', compact('class'))->setPaper('a4', 'portrait');
        return $pdf->download('custom.pdf');
    }
}
