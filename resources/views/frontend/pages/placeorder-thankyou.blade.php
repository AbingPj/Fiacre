@extends('frontend.layouts.app')

@section('title', app_name() . ' | Thank You')

@section('content')

    {{-- <h1>Products</h1> --}}

    <div class="container ">
        <div class="row mt-5 mb-5">
            <div class="col text-center ">
                <h1 class="mb-4">THANK YOU FOR YOUR ORDER</h1>
                <img class="mb-4" src="/img/sunfarmacy/slider/Slider3.jpg" style="width:200px; height:200px; object-fit: cover;">
                <h5>We have received your order and will begin preparing it for pickup.</h5>
                <h5 class="mb-5"><b>An email receipt including the details about your order has been sent to the email address provided. Please keep it for your records.<b></h5>

                @guest
                    <a href="/products" class="btn btn-lg btn-success text-white">Back To Products</a>
                @else
                    <a href="/orders" class="btn btn-lg btn-success text-white">VIEW YOUR ORDERS</a>
                @endguest

            </div>
        </div>
    </div>

@endsection
