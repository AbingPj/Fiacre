@extends('frontend.layouts.app')

@section('title', 'SunFarmacy (High View Stables) TERMS OF SALE & RETURN POLICY')

@section('meta')
    <meta property="og:title" content="SunFarmacy (High View Stables) TERMS OF SALE & RETURN POLICY" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider2.jpg') }}" />
    <meta property="og:image:alt" content="SunFarmacy (High View Stables) TERMS OF SALE & RETURN POLICY" />
    <meta property="og:description" content="Please read the following sale terms (the “Terms” or the “Sale Terms”) carefully
    before purchasing any products or services on https://sunfarmacy.com/ (this
    “Website” or “Site”). In order to purchase any products or services using this
    Website, your acceptance of these Sale Terms is requested. Please save a copy of
    these Sale Terms for your records." />
@endsection

@section('content')
    <terms-page :terms="{{json_encode($terms)}}"></terms-page>
@endsection


