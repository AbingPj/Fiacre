<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRecurringSettings extends Model
{
    //
    protected $guarded = [];
    protected $table = 'user_recurring_settings';

    protected $appends = [
        'label',
        'label2'
    ];
    public function getLabelAttribute()
    {
        // $week = $this->selected_every_week_schedule == 1? 'Every Week':'Every 2 Weeks';
        $week = 'Every Week';
        $day = $this->selected_day_of_week == 0? 'Sunday':'Sunday';
        $day = $this->selected_day_of_week == 1? 'Monday':'Sunday';
        $day = $this->selected_day_of_week == 2? 'Tuesday':'Sunday';
        $day = $this->selected_day_of_week == 3? 'Wednesday':'Sunday';
        $day = $this->selected_day_of_week == 4? 'Thursday':'Sunday';
        $day = $this->selected_day_of_week == 5? 'Friday':'Sunday';
        $day = $this->selected_day_of_week == 6? 'Saturday':'Sunday';
        return $week . ', (' . $day. ')';
    }

    public function getLabel2Attribute()
    {
        return  $this->is_pickup == 1? 'For Pickup':'For Delivery';
    }
}
