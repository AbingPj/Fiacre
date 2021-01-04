@extends('frontend.layouts.app')

@section('title', app_name() . ' | Privacy Policy')

@section('meta')
    <meta property="og:title" content="Privacy Policy" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider2.jpg') }}" />
    <meta property="og:image:alt" content="Privacy Policy" />
    <meta property="og:description" content="SunFarmacy (High View Stables) Privacy Policy. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.sunfarmacy.com (the “Site”)." />
@endsection

@section('content')

<privacy-page :privacy="{{json_encode($privacy)}}"></privacy-page>

@endsection
