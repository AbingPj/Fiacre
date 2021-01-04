@extends('frontend.layouts.app')

@section('title', app_name() . ' | Products')

@section('content')
    {{-- <h1>Products</h1> --}}
    <products-page
        guest={{ Auth::guest() ? 1: 0 }}
        :propproducts="{{json_encode($products)}}"
        :propcategories="{{json_encode($categories)}}"
        :user="{{json_encode($user)}}"
        :wholesaler_minimum_order_amount="{{$wholesaler_minimum_order_amount}}"
    ></products-page>

@endsection
