<?php

namespace App\Http\Controllers\Backend\API;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\Order;
use App\Models\Retailer;
use App\Services\EmailsService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use stdClass;

class OrdersController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth');
    }

    public function index(Request $request)
    {
        // $EmailService = new EmailsService('abing@gmail.com');
        // $email = $EmailService->myemail(); /// abing@gmail.com
        $search = $request->search;
        if ($request->has('search')) {
            $orders = Order::with('user', 'retailer')
                ->whereHas('retailer', function ($q) use ($search) {
                    return $q->where(
                        DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                        'like',
                        "%$search%"
                    );
                })
                ->orWhereHas('user', function ($q) use ($search) {
                    return $q->where(
                        DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                        'like',
                        "%$search%"
                    );
                })
                ->orWhere('id', 'LIKE', "%$search%")
                ->OrderBy('date', 'DESC')
                ->paginate(30);
        } else {
            $orders = Order::with('user', 'retailer')
                ->OrderBy('date', 'DESC')
                ->paginate(30);
        }

        return response()->json($orders, 200);
    }

    public function weekly(Request $request)
    {
        if ($request->date == null) {
            $firstDay = Carbon::now()->startOfWeek();
            $lastDay = Carbon::now()->endOfWeek();
            $dateLabel = Carbon::now()->format('F d, Y');
            $fromLabel = Carbon::now()->startOfWeek()->format('F d, Y');
            $toLabel = Carbon::now()->endOfWeek()->format('F d, Y');
        } else {
            $firstDay = Carbon::parse($request->date)->startOfWeek();
            $lastDay = Carbon::parse($request->date)->endOfWeek();
            $dateLabel = Carbon::parse($request->date)->format('F d, Y');
            $fromLabel = Carbon::parse($request->date)->startOfWeek()->format('F d, Y');
            $toLabel = Carbon::parse($request->date)->endOfWeek()->format('F d, Y');
        }

        $from = date($firstDay->toDateString());
        $to = date($lastDay->toDateString());


        if ($request->has('search')) {
            $search = $request->search;
            $orders = Order::with('user', 'retailer')
                ->whereBetween('date', [$from, $to])
                ->where(function ($query) use ($search) {
                    $query
                        ->whereHas('retailer', function ($q) use ($search) {
                            return $q->where(
                                DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                                'like',
                                "%$search%"
                            );
                        })
                        ->orWhereHas('user', function ($q) use ($search) {
                            return $q->where(
                                DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                                'like',
                                "%$search%"
                            );
                        });
                })
                ->OrderBy('date', 'DESC')
                ->paginate(30);
        } else {
            $orders = Order::with('user', 'retailer')
                ->whereBetween('date', [$from, $to])
                ->OrderBy('date', 'DESC')
                ->paginate(30);
        }





        $class = new stdClass;
        $class->date = $dateLabel;
        $class->from = $fromLabel;
        $class->to = $toLabel;
        $class->pagination = $orders;
        return response()->json($class, 200);
    }

    public function monthly(Request $request)
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
        $from = date($firstDay->toDateString());
        $to = date($lastDay->toDateString());

        if ($request->has('search')) {
            $search = $request->search;
            $orders = Order::with('user', 'retailer')
                ->whereBetween('date', [$from, $to])
                ->where(function ($query) use ($search) {
                    $query
                        ->whereHas('retailer', function ($q) use ($search) {
                            return $q->where(
                                DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                                'like',
                                "%$search%"
                            );
                        })
                        ->orWhereHas('user', function ($q) use ($search) {
                            return $q->where(
                                DB::raw('CONCAT_WS(" ", first_name, last_name)'),
                                'like',
                                "%$search%"
                            );
                        });
                })
                ->OrderBy('date', 'DESC')
                ->paginate(30);
            $orders->date = $monthLabel;
            // $orders->save();
        } else {
            $orders = Order::with('user', 'retailer')
                ->whereBetween('created_at', [$from, $to])
                ->OrderBy('date', 'DESC')
                ->paginate(30);
        }
        $class = new stdClass;
        $class->date = $monthLabel;
        $class->pagination = $orders;
        return response()->json($class, 200);
    }
}
