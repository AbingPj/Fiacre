<?php

namespace App\Http\Requests\Frontend\cc_ach;

use Illuminate\Foundation\Http\FormRequest;

class saveCcReqeust extends FormRequest
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
            'card_type' =>  ['required'],
            'card_name' =>  ['required'],
            'card_number' =>  ['required'],
            'cvv' => ['required'],
            'exp_month' =>  ['required'],
            'exp_year' =>   ['required'],

        ];



    }
}
