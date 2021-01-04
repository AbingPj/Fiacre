<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Models\Auth\User;
use App\Models\ChatMessage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use stdClass;

class ChatController extends Controller
{
    public function submit(Request $request)
    {
        $timestamp = Carbon::parse($request->timestamp);
        // dump($timestamp);
        // dd($request);
        $message  = new  ChatMessage();
        $message->from_user_id = Auth::user()->id;
        $message->to_user_id = 1;
        $message->content = $request->content;
        $message->type = $request->type;
        $message->uploaded = true;
        $message->viewed = $request->viewed;
        $message->datetimestamp = $timestamp;
        $message->customer_id =  Auth::user()->id;
        $message->save();
        return response()->json('success', 200);
    }

    public function getChats()
    {
        $user_id =  Auth::user()->id;
        $messages = ChatMessage::where('from_user_id', $user_id)
            ->orWhere('to_user_id', $user_id)
            ->orderBy('datetimestamp')
            // ->take(-5)
            ->get();

        return response()->json($messages, 200);
    }

    public function getUnviewedChats()
    {
        return Auth::user()->getUnviewedChats();
    }

    public function updateUnviewedChats()
    {

        $unread_chats = ChatMessage::where('to_user_id', Auth::user()->id)->where('viewed', 0)->get();
        foreach ($unread_chats as $key => $value) {
            $value->viewed = 1;
            $value->save();
        }
        return 'success';
    }

    public function getParticipants()
    {
        $user_id =  Auth::user()->id;

        $messages = ChatMessage::where('to_user_id', $user_id)
            ->groupBy('from_user_id')
            ->select('from_user_id', DB::raw('count(from_user_id)'))
            ->get();

        $participants = [];

        foreach ($messages as $key => $value) {
            $user = User::find($value->from_user_id);
            $particpant = new stdClass;
            $particpant->id = $user->id;
            $particpant->name = $user->full_name;
            $particpant->profilePicture = $user->atr_image_link;
            array_push($participants, $particpant);
        }

        return response()->json($participants, 200);
    }
}
