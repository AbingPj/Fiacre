<?php

namespace App\Services;
use App\Models\TotalView;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Request;

class TotalViewService
{

    /**
     * set path
     *
     * @return void
     */
    static function getView($controller = null)
    {

        $ip = Request::getClientIp(true);
        $date = Carbon::now();
        $created_at = date($date);

        if (Auth::guest() == true) {

            $users = TotalView::where('user_id', '0')
                ->where('ip_address', $ip)
                ->where('ctrl', $controller)
                ->where('created_at', 'LIKE', '%' . substr($created_at, 0, 14) . '%')
                ->first();
            if (empty($users)) {
                $view = new TotalView;
                $view->user_id = 0;
                $view->user_name = 'guest';
                $view->ip_address = $ip;
                $view->ctrl = $controller;
                $view->save();
            }
        } else {
            $users = TotalView::where('user_id', Auth::user()->id)
                ->where('ip_address', $ip)
                ->where('ctrl', $controller)
                ->where('created_at', 'LIKE', '%' . substr($created_at, 0, 14) . '%')
                ->first();
            if (empty($users)) {
                $view = new TotalView;
                $view->user_id = Auth::user()->id;
                $view->user_name = Auth::user()->first_name;
                $view->ip_address = $ip;
                $view->ctrl = $controller;
                $view->save();
            }
        }
    }
}
