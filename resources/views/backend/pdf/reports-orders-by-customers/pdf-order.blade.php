<!-- pdf.blade.php -->

<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="charset=utf-8" />
    <meta charset="utf-8">
    <title></title>
    <style>
      hr {
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        border-style: inset;
        border-width: 1px;
      }
      .table{
            width: 100%;
            border: 2px solid #ddd;
            padding: 10px;
        }

        thead {
          border-bottom: 1px solid  #ddd;
        }
        tfoot{
           border-top: 1px solid #ddd;
        }

        thead th{
            text-align:left;
            padding:15px 5px 15px 5px;
        }
        tbody td{
            text-align:left;
            padding:5px;
        }
        tfoot th{
            text-align:left;
            padding:15px 5px 15px 5px;
            border-top: 1px solid #ddd;
        }
        tfoot td{
            text-align:left;
            padding:15px 5px 0px 5px;
        }

        .sun-text-left{
            text-align:left !important;
        }
        .sun-text-center{
            text-align:center !important;;
        }
        .sun-text-right{
            text-align:right !important;
        }
        .sun-float-left{
            float: left !important;
        }
        .sun-float-right{
            float: right !important;
        }
      </style>

  </head>
  <body>


    <h1 style="padding-bottom: 0px; margin-bottom:0px;">Order #{{$class->order->id}}</h1>
    {{$class->order->date_label}}
    <br>
    <p  class="sun-text-left">
        <span style="font-size:20px;">{{$class->user->full_name}}</span>
        <br>
        {{$class->user->contact_number}}
        <br>
        {{$class->user->email}}
        <br>
        {{$class->user->street_address}}
        <br>
        {{$class->user->city}}, {{$class->user->state}},{{$class->user->zipcode}}
        <br>
        <br>Expected Delivery Date:
        <b>{{$class->order->atr_expected_delivery_date}}</b>
        <br>
        School/Parish Recipient:<b>{{order->organization}}</b>
    </p>
    {{-- <p class="sun-text-left">(printed: {{$class->printed}})</p> --}}
    <br>
<table class="table">
        <thead>
            <tr>
              <th style="width:75px;">Product</th>
              <th></th>
              <th>Price</th>
              <th>Qty</th>
              <th class="sun-text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($class->products as $item)
                <tr>
                    <td  style="width:75px;"><img src="{{$item->image_link}}" style="width:50px; height:50px; object-fit:cover;"></td>
                    <td>{{$item->product->name}}</td>
                    <td>{{number_format($item->price,2)}} / {{$item->product->unit}}</td>
                    <td>{{$item->updated_quantity}}</td>
                    <td class="sun-text-right">{{($item->subtotal)}}</td>
                </tr>
            @endforeach
          </tbody>
          <tfoot>
            <tr>
                <td style="width:75px;"></td>
                <td></td>
                <td></td>
                <td>Order Amount</td>
                <td class="sun-text-right">{{$class->order->atr_total_amount_f}}</td>
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
                <!-- <tr>
                    <td  style="width:75px;"></td>
                    <td></td>
                    <td></td>
                    <td>Discount ({{$class->order->discount_percentage}} %)</td>
                    <td class="sun-text-right">  -  {{$class->order->atr_discount_f}}</th>
                </tr> -->
                <!-- <tr>
                    <td  style="width:75px;"></td>
                    <td></td>
                    <td></td>
                    <td> Coupon Discount 
                        <br>
                        @if($class->order->has_coupon)

                            @if ($class->order->coupon_is_percentage)

                                ({{$class->order->coupon_discount_amount}} %)

                            @else
                                ( $ {{$class->order->coupon_discount_amount}} off)
                            @endif



                        @endif

                    </td>
                    <td class="sun-text-right">  -  {{$class->order->atr_coupon_discount_f}}</th>
                </tr> -->
                <tr style="border-collapse:collapse; height:30px;">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                    Referral Amount
                    </td>
                    <td>-{{$order->referral_amount}}</th>
                </tr>
                <tr>
                    <td  style="width:75px;"></td>
                    <td></td>
                    <td></td>
                    <td>Delivery Fee</td>
                    <td class="sun-text-right"> + {{number_format($class->order->delivery_fee,2)}}</th>
                </tr>
                <!-- <tr>
                    <td  style="width:75px;"></td>
                    <td></td>
                    <td></td>
                    <td>TAX</td>
                    <td class="sun-text-right"> + {{number_format($class->order->atr_total_tax,2)}}</th>
                </tr> -->
               <tr>
                    <th  style="width:75px;"></th>
                    <th></th>
                    <th></th>
                    <th>Total Amount</th>
                    <th class="sun-text-right">$ {{$class->order->atr_overall_total_f}}</th>
               </tr>
          </tfoot>
    </table>

    <p class="sun-text-center">(printed: {{$class->printed}})</p>

  </body>
</html>
