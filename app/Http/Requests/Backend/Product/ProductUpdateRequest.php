<?php

namespace App\Http\Requests\Backend\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
/**
 * Class UpdateUserRequest.
 */
class ProductUpdateRequest extends FormRequest
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
        //     'email' => ['required', 'email'],
        //     'first_name' => ['required'],
        //     'last_name' => ['required'],
        //     'roles' => ['required', 'array'],
        // ];
        $id = $this->request->get('product_id');

        return [
            'name' => ['required'],
            'sku' => 'nullable|unique:products,sku,'.$id,
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
