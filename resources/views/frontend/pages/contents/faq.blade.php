@extends('frontend.layouts.app')

@section('title', app_name() . ' | FAQ`s')

@section('meta')
    <meta property="og:title" content="FAQ`s" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider3.jpg') }}" />
    <meta property="og:image:alt" content="FAQ`s" />
    <meta property="og:description" content="How can we help? See if your questions are answered here." />
@endsection

@section('content')

<faqs-page :faqs="{{json_encode($faqs)}}"></faqs-page>

@endsection
