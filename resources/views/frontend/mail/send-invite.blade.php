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
          .button {

            background-color: #4CAF50;; /* Green */
            border: none;
            color: white;
            padding: 14px 40px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;

            }
            .button a{
            color: white;
            }

    </style>

<div style="text-align:center;">
    <img class="store-logo" src="{{$store_logo}}" alt="">
</div>
    <br>
    <h1 style="text-align:center"><b>Sunfarmacy Membership Invitation</b></h1>
    <br>
    <br>
     <p>Hi <b>{{$name}}</b>!</p>
    <br>
    <p>
    Im inviting you to join Sunfarmacy and submit my referral code after you sign-up. Click the button link to go the sign-up page.
    <br>
    <br>
    <b style="font-size:30px;">{{$code}}</b>
    </p>
    <br>
    <div style="text-align:center">
        <a style="color:white;" class="button" href="{{$link}}">CLICK HERE TO SIGN UP</a>
     </div>
    <br>
    <p>Thanks,<br>
    <b>{{$user_name}}</b>
    </p>
    <br>
    <br>
    © {{$store_name}} <br>
     {{$store_address}}

    @include('beautymail::templates.sunny.contentEnd')


@stop
