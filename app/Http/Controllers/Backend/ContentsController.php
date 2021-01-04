<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\StoreAboutus;
use App\Models\StoreFaqs;
use App\Models\StoreLanding;
use App\Models\StorePrivacy;
use App\Models\StoreTerms;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class ContentsController extends Controller
{
    public function aboutusSubmit(Request $request)
    {

        $request->validate([
            'title' => ['required'],
            // 'content' => ['required'],
            'background_image' => ['image'],
        ], [
            'background_image.image' => 'Background image must be an image file.',
        ]);


        $store_id = 1;
        $exists = StoreAboutus::where('store_id', $store_id)->exists();
        if ($exists) {
            $about = StoreAboutus::find($store_id);
        } else {
            $about = new StoreAboutus();
        }
        $about->store_id = $store_id;
        $about->title =  $request->title;
        $about->content =   $request->content;
        if ($request->hasFile('background_image')) {
            $photo_path = Storage::putFile('public/store/aboutus', $request->file('background_image'));
            $about->background_image = $photo_path;
        }
        $about->save();
        // return "Updated About Us Contents.";
        $request->session()->flash('update_status', 'About us content is updated');
        $request->session()->flash('tab', 'aboutus');
        return url('/admin/settings');
    }



    public function faqsSubmit(Request $request)
    {
        // dd($request);

        $request->validate([
            'title' => ['required'],
            // 'content' => ['required'],
            'background_image' => ['image'],
        ], [
            'background_image.image' => 'Background image must be an image file.',
        ]);

        $store_id = 1;
        $exists = StoreFaqs::where('store_id', $store_id)->exists();
        if ($exists) {
            $faqs = StoreFaqs::find($store_id);
        } else {
            $faqs = new StoreFaqs();
        }
        $faqs->store_id = $store_id;
        $faqs->title =  $request->title;
        $faqs->content =   $request->content;
        if ($request->hasFile('background_image')) {
            $photo_path = Storage::putFile('public/store/faqs', $request->file('background_image'));
            $faqs->background_image = $photo_path;
        }
        $faqs->save();
        // return "Updated FAQ`s Content.";
        $request->session()->flash('update_status', 'Updated FAQ`s Content.');
        $request->session()->flash('tab', 'faqs');
        return url('/admin/settings');
    }



    public function privacySubmit(Request $request)
    {
        // dd($request);

        $request->validate([
            'title' => ['required'],
            // 'content' => ['required'],
            'background_image' => ['image'],
        ], [
            'background_image.image' => 'Background image must be an image file.',
        ]);

        $store_id = 1;
        $exists = StorePrivacy::where('store_id', $store_id)->exists();
        if ($exists) {
            $privacy = StorePrivacy::find($store_id);
        } else {
            $privacy = new StorePrivacy();
        }
        $privacy->store_id = $store_id;
        $privacy->title =  $request->title;
        $privacy->content =   $request->content;
        if ($request->hasFile('background_image')) {
            $photo_path = Storage::putFile('public/store/privacy', $request->file('background_image'));
            $privacy->background_image = $photo_path;
        }
        $privacy->save();
        // return "Updated FAQ`s Content.";
        $request->session()->flash('update_status', 'Updated Privacy Policy Content.');
        $request->session()->flash('tab', 'privacy');
        return url('/admin/settings');
    }


    public function termsSubmit(Request $request)
    {
        // dd($request);

        $request->validate([
            'title' => ['required'],
            // 'content' => ['required'],
            'background_image' => ['image'],
        ], [
            'background_image.image' => 'Background image must be an image file.',
        ]);

        $store_id = 1;
        $exists = StoreTerms::where('store_id', $store_id)->exists();
        if ($exists) {
            $terms = StoreTerms::find($store_id);
        } else {
            $terms = new StoreTerms();
        }
        $terms->store_id = $store_id;
        $terms->title =  $request->title;
        $terms->content =   $request->content;
        if ($request->hasFile('background_image')) {
            $photo_path = Storage::putFile('public/store/terms', $request->file('background_image'));
            $terms->background_image = $photo_path;
        }
        $terms->save();
        // return "Updated FAQ`s Content.";
        $request->session()->flash('update_status', 'Updated Terms Content.');
        $request->session()->flash('tab', 'terms');
        return url('/admin/settings');
    }


    public function landingSubmit(Request $request)
    {

        $request->validate(
            [
                'header' => ['required'],
                'content' => ['required'],
                // 'logo' => ['image', 'dimensions:min_height=624, min_width=1100'],
                // 'slider1' => ['image', 'dimensions:min_height=624, min_width=1100'],
                // 'slider2' => ['image', 'dimensions:min_height=624, min_width=1100'],
                // 'slider3' => ['image', 'dimensions:min_height=624, min_width=1100'],
                'logo' => ['image'],
                'slider1' => ['image'],
                'slider2' => ['image'],
                'slider3' => ['image'],
            ],

            // [
            //     'slider1.dimensions' => 'Slider 1 mimum dimenstion 1100',
            //     'slider2.dimensions' => 'Slider 2 image must be an image file.',
            //     'slider3.dimensions' => 'Slider 3 image must be an image file.',
            // ]


        );

        // $store = Store::find(1);
        // $store->landing_header = $request->header;
        // $store->landing_content = $request->content;
        // $store->save();


        $store_id = 1;
        $exists = StoreLanding::where('store_id', $store_id)->exists();
        if ($exists) {
            $landing = StoreLanding::find($store_id);
        } else {
            $landing = new StoreLanding();
        }

        $landing->store_id = 1;
        $landing->header =  $request->header;
        $landing->content =  $request->content;
        // $landing->feature_products_is_random = true;
        // $landing->feature_products_ids = "[1, 2, 3, 4]";

        if ($request->hasFile('logo')) {
            $photo_path = Storage::putFile('public/store/landing/logo', $request->file('logo'));
            $landing->logo = $photo_path;
        }

        if ($request->hasFile('slider1')) {
            $photo_path = Storage::putFile('public/store/landing/sliders', $request->file('slider1'));
            $landing->slider1 = $photo_path;
        }

        if ($request->hasFile('slider2')) {
            $photo_path = Storage::putFile('public/store/landing/sliders', $request->file('slider2'));
            $landing->slider2 = $photo_path;
        }

        if ($request->hasFile('slider3')) {
            $photo_path = Storage::putFile('public/store/landing/sliders', $request->file('slider3'));
            $landing->slider3 = $photo_path;
        }
        $landing->save();

        $request->session()->flash('update_status', 'Updated Home Page Content.');
        $request->session()->flash('tab', 'landing');
        return url('/admin/settings');
    }
}
