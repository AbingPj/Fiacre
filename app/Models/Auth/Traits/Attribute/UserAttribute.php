<?php

namespace App\Models\Auth\Traits\Attribute;

use App\Models\City;
use App\Models\Organization;
use App\Models\ReferralCode;
use App\Models\State;
use App\Models\SubscriptionSunclubMember;
use Illuminate\Support\Facades\Hash;

/**
 * Trait UserAttribute.
 */
trait UserAttribute
{
    /**
     * @param $password
     */
    public function setPasswordAttribute($password): void
    {
        // If password was accidentally passed in already hashed, try not to double hash it
        if (
            (\strlen($password) === 60 && preg_match('/^\$2y\$/', $password)) || (\strlen($password) === 95 && preg_match('/^\$argon2i\$/', $password))
        ) {
            $hash = $password;
        } else {
            $hash = Hash::make($password);
        }

        // Note: Password Histories are logged from the \App\Observer\User\UserObserver class
        $this->attributes['password'] = $hash;
    }

    /**
     * @return string
     */
    public function getFullNameAttribute()
    {
        return $this->last_name
            ? $this->first_name . ' ' . $this->last_name
            : $this->first_name;
    }

    /**
     * @return string
     */
    public function getNameAttribute()
    {
        return $this->full_name;
    }

    /**
     * @return mixed
     */
    public function getPictureAttribute()
    {
        return $this->getPicture();
    }



    /**
     * @return string
     */
    public function getRolesLabelAttribute()
    {
        $roles = $this->getRoleNames()->toArray();

        if (\count($roles)) {
            return implode(', ', array_map(function ($item) {
                return ucwords($item);
            }, $roles));
        }

        return 'N/A';
    }

    /**
     * @return string
     */
    public function getPermissionsLabelAttribute()
    {
        $permissions = $this->getDirectPermissions()->toArray();

        if (\count($permissions)) {
            return implode(', ', array_map(function ($item) {
                return ucwords($item['name']);
            }, $permissions));
        }

        return 'N/A';
    }




    public function getSunIsExpiredAttribute()
    {
        if ($this->customer_role == 2) {
            $member = SubscriptionSunclubMember::where('user_id', $this->id)->first();

            if ($member->status == 1) {
                return 0;
            } else {
                // set member subcription is expired
                return 1;
            }
        } else {
            return 0;
        }
    }

    public function getAtrImageLinkAttribute()
    {
        if (!empty($this->image_path)) {
            $explode_path = explode('/', $this->image_path);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        } else {
            $photo = url("/img/no-user.jpg");
        }

        return $photo;
    }


    public function getAtrFullAddressAttribute()
    {
        $city = City::find($this->city);
        if (!empty($city)) {
            $city_name = $city->name;
        } else {
            $city_name = $this->city;
        }

        $state =  State::find($this->state);
        if (!empty($state)) {
            $state_name = $state->name;
        } else {
            $state_name = $this->state;
        }

        if($this->customer_role == 1){
            return "";
        } else{
            return "{$this->street_address}, {$city_name}, {$state_name}, USA";
        }
    }

    public function getAtrCustomerRoleAttribute()
    {
        // if($this->customer_role == 1){
        //     return "Non-registered";
        // }else if($this->customer_role == 2){
        //     return "Sunclub Member";
        // }else if ($this->customer_role == 3){
        //     return "Wholesaler";
        // } else {
        //     return "";
        // }
        if($this->customer_role == 1){
            return "Non-registered";
        }else if($this->customer_role == 4){
            return "Fiacre Customer";
        } else {
            return "";
        }
    }
    public function getAtrOrganizationAttribute()
    {
        if ($this->selected_org_id) {
            $org = Organization::find($this->selected_org_id);
            if (!empty($org)) {
                return $org;
            } else {
                return null;
            }
        } else {
            return null;
        }
    }
    public function getAtrUserReferralLinkAttribute()
    {
        $response = null;
        if ($this->customer_role == 4) {
            $rc = ReferralCode::where('user_id', $this->id)->first();
            if(!empty($rc)){
                $response = url('/register/r/' . $rc->code);
            }
        }
        return $response;
    }

    public function getAtrUserReferralAmountAttribute()
    {
        $response = null;
        if ($this->customer_role == 4) {
            $rc = ReferralCode::where('user_id', $this->id)->first();
            if(!empty($rc)){
                $response = url('/register/r/' . $rc->code);
            }
        }
        return $response;
    }
}
