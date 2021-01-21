<?php

namespace App\Http\Requests\Backend;

use Illuminate\Foundation\Http\FormRequest;

class UpdateOrgRequest extends FormRequest
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
            'org_name' => ['required'],
            // 'email' => ['required', 'email'],
            // 'optionc_id' => ['required'],
            'org_type' => ['required'],
            // 'org_lat' => ['required'],
            // 'org_lng' => ['required'],
            'org_street' => ['required'],
            'org_cityprov' => ['required'],
            'org_state' => ['required'],
            'org_zipcode' => ['required'],
            'image_file' => ['image'],
        ];
    }
}
