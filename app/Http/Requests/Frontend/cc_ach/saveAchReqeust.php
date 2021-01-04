<?php

namespace App\Http\Requests\Frontend\cc_ach;

use Illuminate\Foundation\Http\FormRequest;

class saveAchReqeust extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'subscription' =>  ['required'],
            'billing_token_type' => ['required'],
            'ach_type' => ['required'],
            'ach_acc_holder_type' => ['required'],
            'ach_account_number' => ['required'],
            'ach_routing' => ['required'],
        ];
    }
}
