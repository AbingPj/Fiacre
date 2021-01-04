<?php

namespace App\Http\Requests\Backend\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductBundleStoreRequest extends FormRequest
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
        return [
            'name' => ['required'],
            'sku' => 'nullable|unique:products,sku',
            'unit' => ['required'],
            'image_file' => ['image'],
            'discount_percentage' =>  ['required'],
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
