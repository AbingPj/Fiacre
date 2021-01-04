<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class ZoneRequest extends FormRequest
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
            'zone_name' => ['required'],
            'address' => ['required'],
            'lat' => ['required'],
            'lng' => ['required_with:lat'],
        ];
    }

    public function messages()
    {
        return [
            'lat.required' => 'Add marker in the map.',
            'lng.required_with' => 'Add marker in the map.',
        ];
    }
}
