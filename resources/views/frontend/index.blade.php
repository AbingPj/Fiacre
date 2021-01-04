@extends('frontend.layouts.landing')

@section('title', app_name())
@section('meta_description', 'Ultra-fresh, Locally Grown Produce. SunFarmacy is committed to making farming sustainable for both farm workers and consumers. So, we invite you to be a part of the food cycle that cares for people and the environment as SunFarmacy opens its membership for people who follow such high values. From farm to your table, let’s keep it local and grow better together!')
@section('meta')
    <meta property="og:title" content="Sunfarmacy" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('img/sunfarmacy/sun-og-image-1.jpg') }}" />
    <meta property="og:image:alt" content="Sunfarmacy" />
    <meta property="og:description" content="Ultra-fresh, Locally Grown Produce. SunFarmacy is committed to making farming sustainable for both farm workers and consumers. So, we invite you to be a part of the food cycle that cares for people and the environment as SunFarmacy opens its membership for people who follow such high values. From farm to your table, let’s keep it local and grow better together!" />
@endsection

@section('content')
    <div>
        <landing-page :store_settings="{{ json_encode($store_settings) }}"></landing-page>
    </div>
@endsection
