<?php

namespace App\Http\Requests\Frontend;

use Illuminate\Foundation\Http\FormRequest;

class GuestPlaceOrderRequest extends FormRequest
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
            'user_email' => ['required'],
            'first_name' => ['required'],
            'last_name' => ['required'],
            'contact_number' => ['required'],
            'state' => ['required'],
            'city' => ['required'],
            'street_address' => ['required'],
            'zipcode' => ['required'],


            // 'g-recaptcha-response' => ['required_if:captcha_status,true', 'captcha'],
            'g-recaptcha-response' => 'required|captcha',

            'billing_token_type' => ['required'],  // (1)(cc)Credit Card or (2)(ach)ACH

            // cc
            'card_type' =>  ['required_if:billing_token_type,1'],
            'card_number' => ['required_if:billing_token_type,1'],
            'exp_month' =>  ['required_if:billing_token_type,1'],
            'exp_year' =>  ['required_if:billing_token_type,1'],
            'cvv' => ['required_if:billing_token_type,1'],

            // ach
            'ach_type' => ['required_if:billing_token_type,2'],
            'ach_acc_holder_type' => ['required_if:billing_token_type,2'],
            'ach_account_number' => ['required_if:billing_token_type,2'],
            'ach_routing' => ['required_if:billing_token_type,2'],



        ];
    }

    public function messages()
    {
        return [
            // 'g-recaptcha-response.required_if' => __('validation.required', ['attribute' => 'captcha']),
            'card_type.required_if' => 'The CC CARD Type is required ',
            'card_number.required_if' => 'The CC NUMBER is required ',
            'exp_month.required_if' => 'The Expiration Month is required ',
            'exp_year.required_if' => 'The Expiration Year is required ',
            'cvv.required_if' => 'The Security Code (CVV) is required ',


            'ach_type.required_if' => 'The ACH Account Type is required ',
            'ach_acc_holder_type.required_if' => 'The ACH Account Type is required ',
            'ach_account_number.required_if' => 'The ACH Account number is required ',
            'ach_routing.required_if' => 'The ACH Routing is required ',
        ];
    }
}
