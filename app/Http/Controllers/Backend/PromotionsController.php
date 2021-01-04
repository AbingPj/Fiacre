<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\PromotionsLogs;
use Illuminate\Http\Request;
use App\Services\EmailsService;

class PromotionsController extends Controller
{
    public function __construct()
    {
        $this->EmailsService = new EmailsService;
    }

    public function index(Request $request)
    {
        return view('backend.promotions.index',);
    }

    public function sendPromotions(Request $request)
    {

        $item = new PromotionsLogs;
        $item->subject = $request->subject;
        $item->content = $request->content;
        $item->sendto  = $request->sendto;
        $item->products  = $request->products;
        $item->save();


        if ($request->sendto ==  'sunclubmembers') {
            $users = User::where('customer_role', 2)->get();
        } else if ($request->sendto == 'wholesalers') {
            $users = User::where('customer_role', 3)->get();
        } else {
            $users = User::where('customer_role', 2)->orWhere('customer_role', 3)->get();
        }


        $products = json_decode($request->products);


        foreach ($users as $key => $user) {
            $this->EmailsService->sendPromotion(
                $user->email,
                $user,
                $request->subject,
                $request->content,
                $products,
            );
        }

        return "Promotion Email Sent";


        // $request->subject;
    }
}
