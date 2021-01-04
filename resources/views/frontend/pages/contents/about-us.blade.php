@extends('frontend.layouts.app')

@section('title', app_name() . ' | About Us')

@section('meta')
    <meta property="og:title" content="About Us" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider3.jpg') }}" />
    <meta property="og:image:alt" content="About Us" />
    <meta property="og:description" content="SunFarmacy is a community-supported agriculture mobile application owned and operated by High View Farms, providing a fast, easy and convenient way to connect farmers to consumers who want to keep it local. We are a team of modern farmers who work together to find ways to improve supply and eat sustainable. We grow our food using safe practices such as natural and organic farming which nurtures the quality of the soil with each crop." />
@endsection

@section('content')

<about-us-page :aboutus="{{json_encode($aboutus)}}"></about-us-page>

@endsection
