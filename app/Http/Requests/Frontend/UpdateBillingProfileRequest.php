<?php

namespace App\Http\Requests\FrontEnd;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBillingProfileRequest extends FormRequest
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
            'first_name' => ['required'],
            'last_name' => ['required'],
            'street_address' => ['required'],
            'city' => ['required'],
            'state' => ['required'],
            'zipcode' => ['required'],
            'contact_number' => ['required'],
            'contact_number_type' => ['required'],
            'image_file' => ['image'],
            'business_image_file' => ['image'],

            // 'g-recaptcha-response' => 'required|captcha'
            'g-recaptcha-response' => ['required_if:captcha_status,true', 'captcha'],
        ];
    }

    public function messages()
    {
        return [
            'g-recaptcha-response.required_if' => __('validation.required', ['attribute' => 'captcha']),
            // 'g-recaptcha-response' => __('validation.required', ['attribute' => 'captcha']),
            'image_file.image' =>  'Profile picture must be image file',
            'business_image_file.image' => 'Business logo must be image file',
        ];
    }
}
