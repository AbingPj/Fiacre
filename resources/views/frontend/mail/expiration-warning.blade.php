@extends('beautymail::templates.sunny')

@section('content')

    @include('beautymail::templates.sunny.contentStart')
    <style>
        .table{
            width: 100%;
            border: 1px solid #ddd;
            /* max-width: 100%;
            margin-bottom: 20px; */
            /* background-color: transparent;
            border-collapse: collapse;
            border-spacing: 0; */
        }

        .cart-item-image {
            width: 50px;
            height: 50px;
            padding: 0px;
            margin-right: 50px !important;
            background-color: white;
          }
          .store-logo{
            width: auto;
            height: 150px;
            display: inline-block;
          }
    </style>

<div style="text-align:center;">
    <img class="store-logo" src="{{$store_logo}}" alt="">
</div>
    <br>
    <h1 style="text-align:center"><b>Sunclub Membership Expiration</b></h1>
    <br>
    <br>
     <p>Hello <b>{{$customer_name}}</b></p>
    <br>
    <p>
    Your Sunclub Membership will expire on
    <b>{{$expiration_date}}.</b>
    </p>
    <br>
    <br>
    <p>Sincerely,<br>
        <b>{{$online_store_name}}</b>
    </p>
    <br>
    <br>
    © {{$online_store_name}} <br>
     {{$online_store_address}}

    @include('beautymail::templates.sunny.contentEnd')


@stop
