@extends('frontend.layouts.app')

@section('title', app_name() . ' | Orders')

@section('content')
    {{-- <h1>Products</h1> --}}

    <order-products-page
        guest={{ Auth::guest() ? 1: 0 }}
        sunclubmember="{{ $sunclub_user }}"
        :user="{{json_encode($user)}}"
        :order="{{json_encode($order)}}"
        :order_products="{{json_encode($ordered_products)}}"
    ></order-products-page>

@endsection
