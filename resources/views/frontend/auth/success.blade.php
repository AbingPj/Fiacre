@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . 'Success')

@section('content')
    <div class="page-register-success flex-grow-1">
        <div class="container">
            <h1 class="header my-5">Thanks for Signing Up!</h1>
            <p class="sub-header">
                We have sent an email to you to confirm your account. Please check it out and click on the validation link given.
            </p>
        </div>
    </div>
@endsection
