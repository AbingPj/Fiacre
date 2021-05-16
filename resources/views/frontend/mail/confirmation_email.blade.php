@extends('beautymail::templates.sunny')

@section('content')

    @include('beautymail::templates.sunny.contentStart')
    <style>
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

    <div style="text-align:center; background-color: #404040;">
        <img class="store-logo" src="{{$store_logo}}" alt="">
    </div>
    <hr />
    <br>
        <h3 style="text-align:left;" ><b>Confirm your email address.</b></h3>
    <br>
    <br>
    <p>Hi {{$firstname}},</p>
    <br>
    <p>Thank you for shopping with us.</p>
    <br>
    <p>
        Click the button below to confirm your email address. If you did not create an
        account with <b>{{$store_name}}</b>, you can safely delete this email.
    </p>
    <br>
    <br>
    <div style="text-align:center">
       <a style="color:white;" class="button" href="{{$link}}">CLICK TO VERIFY EMAIL</a>
    </div>
    <br>
    <br>
    <br>
    <p>
        If the above button does not work, copy and paste the link below in your
        browser. {{$link}}
    </p>
    <br>
    <p>
        Sincerely,
        <br><b>{{$store_name}}</b>
    </p>
    <br>
    <br>
    <br>
    <br>
    <p>
        © {{$store_name}}
    </p>


    @include('beautymail::templates.sunny.contentEnd')

    {{-- @include('beautymail::templates.sunny.button', [
        	'title' => 'Click me',
        	'link' => 'http://google.com'
    ]) --}}

@stop
