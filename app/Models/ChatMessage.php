<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use stdClass;

class ChatMessage extends Model
{
    protected $appends = [
        'myself',
        'timestamp',
        'participantId'
    ];

    public function getMyselfAttribute()
    {

        if ($this->from_user_id == Auth::user()->id) {
            return true;
        } else {
            return false;
        }
    }


    public function getParticipantIdAttribute()
    {
        return $this->from_user_id;
    }

    public function getTimestampAttribute()
    {

        // if ($this->to_user_id == Auth::user()->id) {
        //     return true;
        // } else {
        //     return false;
        // }

        $datetime = Carbon::parse($this->datetimestamp);

        $stdClass =  new stdClass;
        $stdClass->year = $datetime->year;
        $stdClass->month = $datetime->month;
        $stdClass->day = $datetime->day;
        $stdClass->hour = $datetime->hour;
        $stdClass->minute = $datetime->minute;
        $stdClass->second =  $datetime->second;
        $stdClass->millisecond =  $datetime->millisecond;

        return  $stdClass;
    }
}
