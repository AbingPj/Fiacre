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

    <div style="text-align:center;">
        {{-- [Store Logo] --}}
        <img class="store-logo" src="{{$store_logo}}" alt="">
    </div>
    <br>
    <br>
    {!!$content!!}
    <br>
    <br>
    <br>
    <br>
    <p>
        © {{$store_name}}<br>
        {{$store_address}}
    </p>


    @include('beautymail::templates.sunny.contentEnd')

    {{-- @include('beautymail::templates.sunny.button', [
        	'title' => 'Click me',
        	'link' => 'http://google.com'
    ]) --}}

@stop
