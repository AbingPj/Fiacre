@extends('frontend.layouts.app')

@section('title', app_name() . ' | Delivery Area')

@section('meta')
    <meta property="og:title" content="Delivery Area" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider3.jpg') }}" />
    <meta property="og:image:alt" content="Delivery Area" />
    <meta property="og:description" content="Delivery Area." />
@endsection

@section('content')

<delivery-page></delivery-page>

@endsection
