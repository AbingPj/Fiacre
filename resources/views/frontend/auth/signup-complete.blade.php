@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . 'Complete')

@section('content')
    <div class="page-register-success flex-grow-1">
        <div class="container">
            <h1 class="header my-5">Sign Up Complete.</h1>
            <p class="sub-header">
                You may now sign-in to continue your shopping.
            </p>
            <div class="text-center">
                <a href="/products" class="btn btn-lg btn-success text-white">Continue</a>
            </div>
        </div>
    </div>
@endsection
