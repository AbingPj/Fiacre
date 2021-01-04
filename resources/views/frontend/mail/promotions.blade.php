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
                width: 60%;
                background-color: #4CAF50;; /* Green */
                border: none;
                color: white;
                padding: 5px 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 12px;

          }
          .button a{
            color: white;
          }

          .table{
            width: 100%;
            border: 1px solid #ddd;
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


    <table  class="table">
        <tbody>


                    @foreach ($products as $key => $item )

                        @if (($key % 2) == 0)
                            <tr>
                        @endif

                            <td style="width:50%;">
                                <div style="padding:0px; margin:5px;">
                                    <img style="width:100%; height: 250px;"  src="{{$item->image_link}}"> <br>
                                    <h3><b>{{$item->name}}</b></h3>
                                    <br>
                                    <p>
                                        orginal price:<b> $ {{ number_format($item->price,2)}}</b>
                                        <br>
                                        sunclub price:<b> $ {{ number_format($item->member_price,2)}}</b>
                                        <br>
                                        wholesale price:<b> $ {{ number_format($item->wholesale_price,2)}}</b>
                                    </p>

                                    <div style="text-align:left">
                                        <a style="color:white;" class="button" href="{{$link}}">Shop Now</a>
                                    </div>

                                    {{-- {{$key}} --}}
                                </div>
                            </td>

                        @if (($key % 2) == 1)
                            </tr>
                        @endif

                   @endforeach


        </tbody>
    </table>



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
