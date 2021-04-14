<?php

namespace App\Models\Auth\Traits\Method;

use App\Models\ChatMessage;
use App\Models\Order;
use App\Models\OrderProduct;
use App\Models\ReferralCodeSubmitted;
use App\Models\Store;
use App\Models\SubscriptionSunclubChoice;
use App\Models\SubscriptionSunclubMember;
use App\Models\SubscriptionSunclubRecord;
use App\Services\ImagePathService;
use Illuminate\Support\Facades\Auth;
use stdClass;

/**
 * Trait UserMethod.
 */
trait UserMethod
{
    /**
     * @return mixed
     */
    public function canChangeEmail()
    {
        return config('access.users.change_email');
    }

    /**
     * @return bool
     */
    public function canChangePassword()
    {
        return !app('session')->has(config('access.socialite_session_name'));
    }

    /**
     * @param bool $size
     *
     * @throws \Illuminate\Container\EntryNotFoundException
     * @return bool|\Illuminate\Contracts\Routing\UrlGenerator|mixed|string
     */
    public function getPicture($size = false)
    {
        switch ($this->avatar_type) {
            case 'gravatar':
                if (!$size) {
                    $size = config('gravatar.default.size');
                }

                return gravatar()->get($this->email, ['size' => $size]);

            case 'storage':
                // return url('storage/'.$this->avatar_location);
                if (!empty($this->image_path)) {
                    $photo = url('storage/' . ImagePathService::setPath($this->image_path));
                } else {
                    $photo = url("/img/no-product-image.png");
                }

                return $photo;
        }

        $social_avatar = $this->providers()->where('provider', $this->avatar_type)->first();

        if ($social_avatar && strlen($social_avatar->avatar)) {
            return $social_avatar->avatar;
        }

        return false;
    }

    /**
     * @param $provider
     *
     * @return bool
     */
    public function hasProvider($provider)
    {
        foreach ($this->providers as $p) {
            if ($p->provider == $provider) {
                return true;
            }
        }

        return false;
    }

    /**
     * @return mixed
     */
    public function isAdmin()
    {
        return $this->hasRole(config('access.users.admin_role'));
    }

    public function isOrganization()
    {
        return $this->hasRole(config('access.users.org_user'));
    }

    public function isDefaultRole()
    {
        return $this->hasRole(config('access.users.default_role'));
    }

    public function isFiacreCustomerRole()
    {
        return $this->hasRole(config('access.users.fiacre_customer_role'));
    }

    public function isSunClubMember()
    {
        return $this->customer_role == 2;
    }

    /**
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * @return bool
     */
    public function isConfirmed()
    {
        return $this->confirmed;
    }

    /**
     * @return bool
     */
    public function isPending()
    {
        return config('access.users.requires_approval') && !$this->confirmed;
    }

    public function getSunClubBalance()
    {


        if ($this->customer_role == 2) {

            $balance = 0;

            $member = SubscriptionSunclubMember::where('user_id', $this->id)->first();

            // if ($member->status == 2) {
            //     // if membership is expired
            //     $balance = 0;
            // } else {

            $record = SubscriptionSunclubRecord::where('id', $member->current_sunclub_record_id)
                ->where('user_id', $this->id)
                ->where('subscription_sunclub_member_id', $member->id)
                ->first();


            $user_orders = [];

            if (!empty($record)) {
                $balance = $record->amount;

                //  get all products that orders by sunclub a user
                $user_orders = Order::where('order_by', $this->id)
                    ->where('sunclub_record_id', $record->id)
                    ->get();
            }



            $total_orders_amount = 0;

            if (!empty($user_orders)) {
                foreach ($user_orders as $key3 => $order) {

                    $total_amount_per_order = 0;
                    $ordered_products = OrderProduct::where('order_id', $order->id)->get();
                    foreach ($ordered_products as $key => $product) {
                        $subtotal = $product->updated_quantity * $product->price;
                        $total_amount_per_order = $total_amount_per_order + $subtotal;
                    }

                    // get discount
                    $discount = $total_amount_per_order * ($order->discount_percentage /  100);

                    // total amount per order - discounnt
                    $total_amount_per_order = $total_amount_per_order - $discount;

                    // total amount per order + delivery fee
                    $total_amount_per_order = $total_amount_per_order + $order->delivery_fee;

                    // overall oders + tota ammount per order
                    $total_orders_amount = $total_orders_amount + $total_amount_per_order;
                }
            }

            ///
            $balance = $balance - $total_orders_amount;
            // }

            if ($balance < 0) {
                $balance = 0;
            }
            return $balance;
        } else {
            return  0;
        }
    }

    public function getUserDiscount()
    {


        if ($this->customer_role == 2) {
            $sunclubmember = SubscriptionSunclubMember::where('user_id', $this->id)->first();
            $sunclubchoice = SubscriptionSunclubChoice::find($sunclubmember->subscription_sunclub_choice_id);
            if (!empty($sunclubchoice)) {
                $balance = $this->getSunClubBalance();
                if ($balance <= 0)
                    return 0;
                else {
                    return $sunclubchoice->discount;
                }
            }


            return 0;
        } else if ($this->customer_role == 3) {
            $store = Store::find(1);
            return  $store->wholesaler_discount;
        } else {
            return  0;
        }
    }

    public function getUnviewedChats()
    {
        $unread_chats_count = 0;

        $unread_chats_count = ChatMessage::where('to_user_id', $this->id)
            ->where('viewed', 0)
            ->count();

        return $unread_chats_count;
    }

    public function getAdminUnviewedChats()
    {
        $unread_chats_count = 0;

        $unread_chats_count = ChatMessage::where('from_user_id', $this->id)
            ->where('to_user_id', 1)
            ->where('viewed', 0)
            ->count();

        return $unread_chats_count;
    }


    public function getAllAdminUnviewedChats()
    {
        $unread_chats_count = 0;
        $unread_chats_count = ChatMessage::where('to_user_id', 1)
            ->where('viewed', 0)
            ->count();
        return $unread_chats_count;
    }

    public function getUserReferralCodeDetails()
    {
        $data = [];
        $referral_amount = Store::first()->referral_amount;
        $total_refferal_amount = 0;
        $total_success = 0;

        if ($this->customer_role == 4) {
            $details = ReferralCodeSubmitted::where('refferal_code_user_id', $this->id)->get();

            if (!empty($details)) {
                $data = $details;
                foreach ($data as $key => $value) {
                    if ($value->status == 2) {
                        $total_refferal_amount = $total_refferal_amount + $referral_amount;
                        $total_success = $total_success + 1;
                        $value->referral_amount = $referral_amount;
                    } else {
                        $value->referral_amount = 0;
                    }
                }
            }
        }
        $class = new stdClass;
        $class->store_referral_amount = $referral_amount;
        $class->total_user_refferal_amount = $total_refferal_amount;
        $class->total_success = $total_success;
        $class->details = $data;
        return $class;
    }

    public function setUserReferralCodesFromSuccessToUsed()
    {
        ReferralCodeSubmitted::with('user:id,first_name,last_name,email')
            ->where('refferal_code_user_id', $this->id)
            ->where('status', 2)
            ->update(['status' => 3]);
    }

    // public function getReferralAmount()
    // {
    //     if ($this->customer_role == 4) {
    //         $rcs = ReferralCodeSubmitted::where('refferal_code_user_id', $this->id)->get_defined_functions();
    //     }
    //     return $unread_chats_count;
    // }
}
