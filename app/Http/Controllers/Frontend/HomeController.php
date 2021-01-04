<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\StoreAboutus;


/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return \Illuminate\View\View
     */


    // protected $billing_token_type = null;
    public function __construct()
    {
        \App\Services\TotalViewService::getView("Home Ctrlr");
    }


    public function index()
    {

        return view('frontend.index');
    }

    public function aboutUs()
    {

        // $store = Store::find(1)->with('aboutus');
        $store = Store::find(1);
        $aboutus = $store->aboutus;

        return view('frontend.pages.contents.about-us', compact('aboutus'));
    }

    public function faq()
    {
        $store = Store::find(1);
        $faqs = $store->faqs;
        return view('frontend.pages.contents.faq', compact('faqs'));
    }

    public function termsOfUse()
    {
        $store = Store::find(1);
        $terms = $store->terms;
        return view('frontend.pages.contents.terms-of-use', compact('terms'));
    }

    public function privacyPolicy()
    {
        $store = Store::find(1);
        $privacy = $store->privacy;
        return view('frontend.pages.contents.privacy-policy', compact('privacy'));
    }
}
