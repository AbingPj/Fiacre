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

<div style="text-align:center; background-color: #404040;">
    <img class="store-logo" src="{{$store_logo}}" alt="">
</div>
    <br />
    <h1 style="text-align:center"><b>Order Confirmation</b></h1>
    <hr />
     <p>Hello <b>{{$customer_name}}</b></p>
    <br />
    <p>
    Thank you for your purchase. This email confirms your order.
    <br />
    While we get your order ready, please just double check the details below and let us know if anything needs changing.
    </p>
    <h2> ORDER NO.  #{{$order_number}}</h2>
    <h2> ORDER DATE <b>{{$order_date}}</b></h2>
    <br>
    <h2>Your Order</h2>
    <table class="table">
        <thead>
            <tr>
                <th style="text-align:left" width="60px">Item</th>
                <th style="text-align:left"></th>
                <th style="text-align:left">Amount</th>
                <th style="text-align:left"></th>
                <th style="text-align:left">Total</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($products as $item)
                <tr>
                <td>
                 <img class="cart-item-image" src="{{$item->product->image_link}}">
                </td>
                <td>
                    {{$item->product->name}}
                </td>
                <td>
                    {{$item->price}} * {{$item->subscription_weeks}} weeks
                </td>
                <td></td>
                <td>{{$item->subscription_price}}</td>
            </tr>
            @endforeach
            {{-- <tr>
                <td>
                    <img class="cart-item-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVh6t-D6yOEQ2lpI_uNJMIm_RXSPlQXf1HCl4CsIkcIRlQHb7_&usqp=CAU">
                </td>
                <td>
                    Product 1
                    <br>
                    #123sad123
                </td>
                <td>
                    10
                </td>
                <td>80</td>
                <td>800</td>
            </tr> --}}
            <tr style="border-collapse:collapse; height:30px;">
                <td></td>
                <td></td>
                <td></td>
                <td>Order Amount</td>
                <td>{{$total_amount}}</td>
            </tr>
            <tr style="border-collapse:collapse; height:30px;">
                <td></td>
                <td></td>
                <td></td>
                <td>
                    {{$billing_type}}
                </td>
                <td>{{$billing_method_price}}</th>
            </tr>
            <tr style="border-collapse:collapse; height:30px;">
                <td></td>
                <td></td>
                <td></td>
                <td>
                   Discount
                </td>
                <td>{{$order->referral_amount}}</th>
            </tr>
            <tr style="border-collapse:collapse; height:30px;">
                <td></td>
                <td></td>
                <td></td>
                <td><b>Total Amount</b></td>
                <td><b>$ {{$overalltotal}}</b></td>
            </tr>
        </tbody>
    </table>
    <br>
    <p>
    {{-- Expected Delivery Date: <b>{{$order->atr_expected_delivery_date}}</b> --}}
    </p>
    <br>
    <p>
    PAYMENT METHOD
    <ul>
        <li>Online Payment</li>
    </ul>
    </p>
    <br>
    <h2>
        <b>Thanks for shopping with us!</b>
    </h2>
    <p>You can check the status of your orders at any time on our Orders Page .</p>
    <br>
    <p>We welcome you to our store anytime. If you need assistance or have any questions,
    please email us at
     {{$online_store_email}}
      We are happy to help!
    </p>
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
