<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
// use App\Http\Requests\BackEnd\EmailsRequest;
use App\Http\Requests\BackEnd\EmailsRequest;
use App\Http\Requests\Backend\SendEmailRequest;
use App\Models\Auth\User;
use App\Services\EmailsService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmailsController extends Controller
{


    public function __construct()
    {
        $this->EmailsService = new EmailsService;
    }

    public function index(Request $request)
    {
        $email = "";
        if ($request->has('email')) {
            $email =  $request->email;
        }
        return view('backend.emailscustomer.index', compact('email'));
    }

    public function sendEmailToACustomer(SendEmailRequest $request)
    {

        $subject = $request->subject;
        $content = $request->content;
        // $customer = User::where('email', $email);
        $email = $request->email;
        $this->EmailsService->sendEmailCustomer($email, $subject, $content);
        $request->session()->flash('flash_success', "Email Sent");
        return "success";
    }


    public function getEmails(Request $request)
    {
        // $EmailService = new EmailsService('abing@gmail.com');
        // $email = $EmailService->myemail(); /// abing@gmail.com
        $search = $request->search;


        $users = User::where('customer_role', '!=', 1)
            ->where('customer_role', '!=', 0)
            ->where(function ($queary) use ($search) {
                $queary->where('email', 'LIKE', "%$search%")
                    ->orWhereRaw("concat(first_name, ' ', last_name) LIKE '%$search%'");
            })

            // ->OrderBy('first_name', 'ASC')
            // ->toSql();
            ->paginate(50);
        // dd($users);


        return response()->json($users, 200);
    }
}
