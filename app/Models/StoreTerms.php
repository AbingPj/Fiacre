<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreTerms extends Model
{
    protected $table = 'store_terms'; //
    protected $guarded = [];

    protected $appends = [
        'image_link',
    ];

    public function getImageLinkAttribute()
    {
        // $photo = url("/img/no-product-image.png");
        $photo = null;
        if (!empty($this->background_image)) {
            if ($this->background_image == 'img/sunfarmacy/slider/Slider2.jpg') {
                $photo = url($this->background_image);
            } else {
                $explode_path = explode('/', $this->background_image);
                unset($explode_path[0]);
                $implode_path = implode('/', $explode_path);
                $photo = url('storage/' . $implode_path);
            }
        }
        return $photo;
    }
}
