<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Models\UserRecurringProduct;
use App\Models\UserRecurringScheduleCancel;
use App\Models\UserRecurringSettings;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use stdClass;

class RecurringProductsController extends Controller
{
    public function getUserRecurringProducts()
    {

        $data = [];
        if (Auth::guest() == false) {
            if (auth()->user()->customer_role == 4) {
                $data = UserRecurringProduct::where('user_id', Auth::user()->id)
                    ->where('org_id', Auth::user()->selected_org_id)
                    ->get();
                foreach ($data as $key => $value) {
                    $value->product_current_details = json_decode($value->product_current_details);
                }
            }
        }
        return response()->json($data, 200);
    }

    public function removeRecurringProduct(Request $request)
    {
        if (Auth::guest() == false) {
            UserRecurringProduct::findOrFail($request->id)->delete();
            return response()->json("success full deleted", 200);
        } else {
            abort(401);
        }
    }

    public function updateQuantityRecurringProduct(Request $request)
    {
        if (Auth::guest() == false) {

            $validator = \Validator::make($request->all(), [
                'id' => 'required',
                'qty' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $data = UserRecurringProduct::findOrFail($request->id);
            if ($request->qty >= 1) {
                $data->qty = $request->qty;
                $data->save();
                return response()->json("updated", 200);
            }
        } else {
            abort(401);
        }
    }


    public function setUserRecurringSettings(Request $request)
    {
        if (Auth::guest() == false) {
            $validator = \Validator::make($request->all(), [
                'is_pickup' => 'required|digits_between:0,1',
                'week_schedule' => 'required|digits_between:1,2',
                'day' => 'required|digits_between:0,6'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } else {
                $user_id = Auth::user()->id;
                $org_id = Auth::user()->selected_org_id;

                // $orgRecurringSettings = OrgRecurringSettings::where('org_id', $org_id)->first();
                $Settings = new UserRecurringSettings();
                $Settings->user_id = $user_id;
                $Settings->org_id = $org_id;
                $Settings->is_pickup = $request->is_pickup;
                $Settings->selected_every_week_schedule = $request->week_schedule;
                $Settings->selected_day_of_week = $request->day;
                $Settings->incoming_date = Carbon::now()->next($Settings->selected_day_of_week);;
                $Settings->save();
            }
        } else {
            abort(401);
        }
    }

    public function updateUserRecurringSettings(Request $request)
    {
        if (Auth::guest() == false) {
            $validator = \Validator::make($request->all(), [
                'settings_id' => 'required',
                'is_pickup' => 'required|digits_between:0,1',
                'week_schedule' => 'required|digits_between:1,2',
                'day' => 'required|digits_between:0,6'
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } else {
                $Settings = UserRecurringSettings::findOrFail($request->settings_id);
                $Settings->is_pickup = $request->is_pickup;
                $Settings->selected_every_week_schedule = $request->week_schedule;
                $Settings->selected_day_of_week = $request->day;
                $Settings->incoming_date = Carbon::now()->next($Settings->selected_day_of_week);;
                $Settings->save();
            }
        } else {
            abort(401);
        }
    }

    public function getUserRecurringSettings(Request $request)
    {
        if (Auth::guest() == false) {

            $user_id = Auth::user()->id;
            $org_id = Auth::user()->selected_org_id;
            $data =
                UserRecurringSettings::where('user_id', $user_id)
                ->where('org_id', $org_id)
                ->first();

            if (!empty($data)) {
                return response()->json($data, 200);
            } else {
                return response()->json("User has not set recurring settings", 404);
            }
        } else {
            abort(401);
        }
    }


    public function setUserRecurringCancelSchedule(Request $request)
    {
        if (Auth::guest() == false) {
            $validator = \Validator::make($request->all(), [
                'date' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } else {
                $user_id = Auth::user()->id;
                $org_id = Auth::user()->selected_org_id;

                // $orgRecurringSettings = OrgRecurringSettings::where('org_id', $org_id)->first();
                $Settings = new UserRecurringScheduleCancel();
                $Settings->user_id = $user_id;
                $Settings->org_id = $org_id;
                $Settings->date = Carbon::parse($request->date);
                $Settings->save();
            }
        } else {
            abort(401);
        }
    }

    public function setUserRecurringRemoveCancelSchedule(Request $request)
    {
        if (Auth::guest() == false) {
            $validator = \Validator::make($request->all(), [
                'cancel_id' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            } else {
                UserRecurringScheduleCancel::findOrFail($request->cancel_id)->delete();
                return response()->json("successfully removed", 200);
            }
        } else {
            abort(401);
        }
    }

    public function getUserRecurringProductSchedules()
    {
        if (Auth::guest() == false) {
            $user_id = Auth::user()->id;
            $org_id = Auth::user()->selected_org_id;
            $data = [];
            // $orgRecurringSettings = OrgRecurringSettings::where('org_id', $org_id)->first();
            $userRecurringSettings = UserRecurringSettings::where('user_id', $user_id)->where('org_id', $org_id)->first();
            if (!empty($userRecurringSettings)) {
                $res = $this->getIncommingSchedule(
                    $userRecurringSettings->incoming_date,
                    $userRecurringSettings->selected_day_of_week,
                    5
                );

                foreach ($res as $key => $value) {
                    $class = new stdClass;
                    $class->date = $value;
                    $date = new Carbon($value);
                    $class->date_format = $date->format('D m/d/Y');
                    $class->date_cancel_date_format = $date->format('Y-m-d');
                    $cancel = UserRecurringScheduleCancel::where('user_id', $user_id)
                        ->where('org_id', $org_id)
                        ->whereDate('date',  $date->format('Y-m-d'))
                        ->first();

                    if (!empty($cancel)) {
                        $class->date_cancel = true;
                        $class->date_cancel_id = $cancel->id;
                    } else {
                        $class->date_cancel = false;
                        $class->date_cancel_id = null;
                    }

                    array_push($data, $class);
                }
                return response()->json($data, 200);
            } else {
                return response()->json("User has not set recurring settings", 404);
            }
        } else {
            abort(401);
        }
    }

    public function getIncommingSchedule($date, $day, $numberOfSchedule)
    {
        // $firstDay = Carbon::parse($date)->next($day);
        $firstDay = Carbon::parse($date);
        $arr = [];
        for ($i = 0; $i < $numberOfSchedule; $i++) {
            $date = new Carbon($firstDay);
            array_push($arr, $date);
            $firstDay->addWeek(1);
        }
        return $arr;
    }
}
