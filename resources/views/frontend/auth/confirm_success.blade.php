@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . 'Success')

@section('content')
    <div class="page-register-success flex-grow-1">
        <div class="container">

            <h2 class="header my-5">Email Confirmed</h2>

            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-4 text-center">
                        <p>(Partial Email Confirmation Page)</p>
                        <br>
                        @include('includes.partials.messages')
                        <br>
                        <button class="btn btn-success btn-block" data-toggle="modal" data-target="#modalLogin">Sign In</button>
                    </div>
                    <div class="col-md-4"></div>
                </div>
            </div>
            <p class="sub-header">

            </p>
        </div>
    </div>
@endsection
