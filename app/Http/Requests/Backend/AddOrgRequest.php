<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AddOrgRequest extends FormRequest
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
            // 'email' => ['required', 'email'],
            'email' => ['required', 'string', 'email', Rule::unique('users')],
            'type' => ['required'],
            // 'lat' => ['required'],
            // 'lng' => ['required'],
            'street' => ['required'],
            'cityprov' => ['required'],
            'state' => ['required'],
            'zipcode' => ['required'],
            'logo' => ['image'],
        ];
    }
}
