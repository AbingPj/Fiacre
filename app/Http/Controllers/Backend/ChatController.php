<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\ChatMessage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\Mime\Message;

class ChatController extends Controller
{

    public function submit(Request $request)
    {

        // dd($request->message['timestamp']);
        $timestamp = Carbon::parse($request->message['timestamp']);
        // dump($timestamp);
        // dd($request);
        $message  = new  ChatMessage();
        $message->from_user_id = 1;
        $message->to_user_id = $request->to_user_id;
        $message->content = $request->message['content'];
        $message->type = $request->message['type'];
        $message->uploaded = true;
        $message->viewed = $request->message['viewed'];
        $message->datetimestamp = $timestamp;
        $message->customer_id =   $request->to_user_id;
        $message->save();
        return response()->json('success', 200);
    }


    public function index(Request $request)
    {
        return view('backend.chats.index');
    }

    public function getChats($customer_id)
    {

        $user_id = $customer_id;
        $messages = ChatMessage::where('from_user_id', $user_id)
            ->orWhere('to_user_id', $user_id)
            ->orderBy('datetimestamp')
            // ->take(-5)
            ->get();

        return response()->json($messages, 200);
    }


    public function getCustomers()
    {


        // $customers =  DB::table('users')
        //     // ->select('users.*, chat_messages.*')
        //     ->join('chat_messages', 'users.id', '=', 'chat_messages.customer_id')
        //     ->leftJoin('chat_messages as c1', function ($join) {
        //         $join->on('chat_messages.customer_id', '=', 'c1.customer_id')
        //             ->whereRaw('chat_messages.datetimestamp < c1.datetimestamp');
        //     })
        //     ->whereNull('c1.customer_id')
        //     ->where('users.customer_role', '!=', 0)
        //     ->orderBy('chat_messages.datetimestamp', 'desc')
        //     ->get();




        $results = DB::select("SELECT users.id,
                                      users.first_name,
                                      users.last_name,
                                      users.created_at,
                                      chat.*
        FROM users
        LEFT JOIN ( SELECT a.customer_id, a.time, b.content
                    FROM    (
                              SELECT customer_id, MAX(datetimestamp) time
                              FROM chat_messages
                              GROUP BY customer_id
                            ) a
                    JOIN chat_messages b
                    ON a.customer_id = b.customer_id
                    AND a.time = b.datetimestamp

         ) chat ON users.id = chat.customer_id
        WHERE users.customer_role != 0
        ORDER BY time DESC");

        // dd($results);

        foreach ($results as $key => $user) {

            $customer =  User::find($user->id);
            $user->admin_unviewed = $customer->getAdminUnviewedChats();
            $user->image = $customer->atr_image_link;
            if ($user->time == null) {
                $user->time = date($user->created_at);
            }
        }

        return response()->json($results, 200);



        $customers = DB::table('users')
            ->select(
                'users.id',
                'users.first_name',
                'chat_messages.customer_id',
                'chat_messages.from_user_id',
                'chat_messages.to_user_id',
                'chat_messages.content',
                'chat_messages.datetimestamp'
            )
            ->leftJoin('chat_messages', function ($leftJoin) {
                $leftJoin->on('chat_messages.customer_id', '=', 'users.id');
            })

            ->where('users.customer_role', '!=', 0)
            ->groupBy('users.id')
            // ->having('COUNT(from_user_id)')
            // ->where('users.id', 3)
            ->get();

        return response()->json($customers, 200);

        $customers = User::where('customer_role', '!=', 0);








        $data = ChatMessage::where('from_user_id', 3)
            ->orWhere('to_user_id', 3)
            ->orderBy('datetimestamp', 'DESC')
            ->toSql();









        dd($customers);

        $latestMessage = DB::table('chat_messages')
            ->select(DB::raw("MAX(datetimestamp) as last_message_time, to_user_id, '"))
            ->groupBy('to_user_id')
            ->get();




        $users = DB::table('users')
            ->select(
                'users.id',
                'users.first_name',
                'chat_messages.content',
                'chat_messages.datetimestamp'
            )
            ->joinSub($latestMessage, 'latest_posts', function ($join) {
                $join->on('users.id', '=', 'latest_posts.user_id');
            })->get();




        // $customers = User::leftJoin('chat_messages', function ($leftJoin) {
        //     $leftJoin->on('chat_messages.from_user_id', '=', 'users.id');
        // })
        //     ->where('users.customer_role', '!=', 0)
        //     ->where('users.id', 3)
        //     ->get();






        foreach ($customers as $key => $user) {
            $user->admin_unviewed = $user->getAdminUnviewedChats();
            $data = ChatMessage::where('from_user_id', $user->id)
                ->orWhere('to_user_id', $user->id)
                ->orderBy('datetimestamp', 'DESC')
                ->first();

            if ($data) {
                $user->latest_message_content = $data->content;
                $user->latest_message_time = $data->datetimestamp;
            } else {
                $user->latest_message_content = null;
                $user->latest_message_time = date($user->created_at);
            }
        }

        // $data = $customers->toArray();



        // $sortedCustomers = $customers->sort(function ($a, $b) {
        //     return strtotime($a->latest_message_time) > strtotime($b->latest_message_time);
        // });

        // $sortedCustomers = $customers->sortByDesc('latest_message_time');

        // $sortedCustomers = [];

        return response()->json($sortedCustomers, 200);
    }


    public function show($customer_id)
    {
        $customer  = User::find($customer_id);
        return view('backend.chats.show', compact('customer'));
    }

    public function updateUnviewedChats($customer_id)
    {

        $unread_chats = ChatMessage::where('from_user_id', $customer_id)->where('viewed', 0)->get();
        foreach ($unread_chats as $key => $value) {
            $value->viewed = 1;
            $value->save();
        }
        return 'success';
    }
}
