<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class StoreLanding extends Model
{
    protected $guarded = [];


    protected $appends = [
        'img_link_logo',
        'img_link_slider1',
        'img_link_slider2',
        'img_link_slider3',
    ];

    public function getImgLinkLogoAttribute()
    {
        // $photo = url("/img/no-product-image.png");
        $photo = null;
        if (!empty($this->logo)) {
            $explode_path = explode('/', $this->logo);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        }
        return $photo;
    }


    public function getImgLinkSlider1Attribute()
    {
        // $photo = url("/img/no-product-image.png");
        $photo = null;
        if (!empty($this->slider1)) {
            $explode_path = explode('/', $this->slider1);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        }
        return $photo;
    }

    public function getImgLinkSlider2Attribute()
    {
        // $photo = url("/img/no-product-image.png");
        $photo = null;
        if (!empty($this->slider2)) {
            $explode_path = explode('/', $this->slider2);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        }
        return $photo;
    }
    public function getImgLinkSlider3Attribute()
    {
        // $photo = url("/img/no-product-image.png");
        $photo = null;
        if (!empty($this->slider3)) {
            $explode_path = explode('/', $this->slider3);
            unset($explode_path[0]);
            $implode_path = implode('/', $explode_path);
            $photo = url('storage/' . $implode_path);
        }
        return $photo;
    }
}
