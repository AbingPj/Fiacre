@extends('frontend.layouts.app')

@section('title', app_name() . ' | Recurring Products')

@section('meta')
    <meta property="og:title" content="Recurring Products" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/slider/Slider3.jpg') }}" />
    <meta property="og:image:alt" content="Recurring Products" />
    <meta property="og:description" content="Recurring Products." />
@endsection

@section('content')

<recurring-products></recurring-products>

@endsection
