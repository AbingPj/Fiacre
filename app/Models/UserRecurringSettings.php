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
        $day = 'Sunday';
        if ($this->selected_day_of_week == 1) {
            $day = 'Monday';
        }
        if ($this->selected_day_of_week == 2) {
            $day = 'Tuesday';
        }
        if ($this->selected_day_of_week == 3) {
            $day = 'Wednesday';
        }
        if ($this->selected_day_of_week == 4) {
            $day = 'Thursday';
        }
        if ($this->selected_day_of_week == 5) {
            $day = 'Friday';
        }
        if ($this->selected_day_of_week == 6) {
            $day = 'Saturday';
        }

        return $week . ', (' . $day . ')';
    }

    public function getLabel2Attribute()
    {
        return  $this->is_pickup == 1 ? 'For Pickup' : 'For Delivery';
    }
}
