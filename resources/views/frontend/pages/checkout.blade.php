@extends('frontend.layouts.app')

@section('title', app_name() . ' | Checkout Page')

@section('content')

    <checkout-page
        guest={{ Auth::guest() ? 1: 0 }}
        sunclubmember="{{ $sunclub_user }}"
        delivery_fee="{{ $delivery_fee }}"
        :user="{{json_encode($user)}}"
        :propproducts="{{json_encode($products)}}"
        :wholesaler_minimum_order_amount="{{$wholesaler_minimum_order_amount}}"
        expected_delivery_dates="{{$store_settings->atr_expected_delivery_date}}"
    ></checkout-page>

@endsection

@push('after-scripts')
    <!-- Put this in your base HTML file - I use Vue CLI 3 so I put it at the bottom of the ./public/index.html file. -->
    <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
@endpush
