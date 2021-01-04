@extends('frontend.layouts.app')

@section('title', app_name() . ' | Orders')

@section('content')
    {{-- <h1>Products</h1> --}}

    <orders-page
        guest={{ Auth::guest() ? 1: 0 }}
        sunclubmember="{{ $sunclub_user }}"
        :user="{{json_encode($user)}}"
        :orders="{{json_encode($orders)}}"
    ></orders-page>

@endsection
