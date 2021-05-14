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
     <p>Hello <b>{{$customer_name}}</b>,</p>
    <br />
    <p>
    Thank you for your purchase. This email confirms your order.</p>
    <p>
    While we get your order ready, please just double check the details below and let us know if anything needs changing.
    </p>
    <h2> ORDER NO.  #{{$order_number}}</h2>
    <h3> ORDER DATE {{$order_date}}</b></h3>
    <br>
    <h2>Your Order</h2>
    <table class="table">
        <thead>
            <tr>
                <th style="text-align:left" width="60px" >Item</th>
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
                    @if($item->is_subscription)
                        {{$item->price}} * {{$item->subscription_weeks}} weeks
                    @else
                        {{$item->atr_price_f}} * {{$item->updated_quantity}}/{{$item->atr_product_details->unit}}
                    @endif
                </td>
                <td></td>
                <td>
                    @if($item->is_subscription)
                        {{$item->subscription_price}}
                    @else
                        {{$item->atr_sub_total_f}}
                    @endif
                </td>
            </tr>
            @endforeach

            {{-- <td>
                {{$item->updated_quantity}}
            </td>
            <td>{{$item->price}}</td>
            <td>{{$item->price * $item->updated_quantity}}</td> --}}
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
                   Referral Amount
                </td>
                <td>-{{$order->referral_amount}}</th>
            </tr>
            <tr style="border-collapse:collapse; height:30px;">
                <td></td>
                <td></td>
                <td></td>
                <td>
                   Delivery Fee
                </td>
                <td>{{$order->deliver_fee}}</th>
            </tr>
            <tr>
                    <td  style="width:75px;"></td>
                    <td></td>
                    <td></td>
                    <td>TAX</td>
                    <td class="sun-text-right"> + {{number_format($class->order->atr_total_tax,2)}}</th>
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
    <p>You can check the status of your orders at any time on your Orders Page .</p>
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
