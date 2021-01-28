@extends('frontend.layouts.app')

@section('title', app_name() . ' | Orders')

@section('content')
    {{-- <h1>Products</h1> --}}
    {{-- <h1>weeks</h1> --}}
    <order-products-page-weeks
        guest={{ Auth::guest() ? 1: 0 }}
        :order="{{json_encode($order)}}"
        :organization="{{json_encode($ordered_product)}}"
        :order_product="{{json_encode($ordered_product)}}"
        :weeks="{{json_encode($weeks)}}"
    ></order-products-page-weeks>

@endsection
