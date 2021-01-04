<?php

namespace App\Http\Requests\Backend\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use LangleyFoxall\LaravelNISTPasswordRules\PasswordRules;

/**
 * Class StoreUserRequest.
 */
class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return $this->user()->isAdmin();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // return [
        //     'first_name' => ['required'],
        //     'last_name' => ['required'],
        //     'email' => ['required', 'email', Rule::unique('users')],
        //     'password' => PasswordRules::register($this->email),
        //     'roles' => ['required', 'array'],
        // ];

        return [

            'name' => ['required'],
            'sku' => 'nullable|unique:products,sku',
            'image_file' => ['image'],
            'unit' => ['required'],
            'price' => ['required'],
            'member_price' => ['required'],
            'wholesale_price' => ['required'],
            'category' =>  ['required'],
        ];

    }

    public function messages()
    {
        return [
            'price.required' =>  'The regular price is required',
        ];
    }
}
