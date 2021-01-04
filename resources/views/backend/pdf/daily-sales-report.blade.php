<!-- pdf.blade.php -->

<!DOCTYPE html>
<html>
  <head>
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
            /* max-width: 100%;
            margin-bottom: 20px; */
            /* background-color: transparent;
            border-collapse: collapse;
            border-spacing: 0; */
        }

        thead {
          border-bottom: 1px solid  #ddd;
        }
        tfoot{
           border-top: 1px solid #ddd;
        }

        thead th{
            text-align:center;
            padding:15px 5px 15px 5px;
        }
        tbody td{
            text-align:center;
            padding:5px;
        }
        tfoot th{
            text-align:center;
            padding:15px 5px 15px 5px;
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


    <h1>Daily Sales Report</h1>
    <h4>{{$class->date}}</h4>
    <br>
    <table class="table">
        <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th class="sun-text-left" >Time</th>
              <th>Order #</th>
              <th>No. Products Sold</th>
              <th class="sun-text-right">Sales</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($class->data as $item)
                <tr>
                    <td class="sun-text-left">{{$item->time}}</td>
                    <td>{{$item->order_id}}</td>
                    <td>{{$item->f_number_of_products}}</td>
                    <td>
                        {{-- <span>$</span> --}}
                        <span class="sun-float-right">{{$item->f_total_earnings}}</span>
                    </td>
                </tr>
            @endforeach


          </tbody>
          <tfoot>
            <tr>
                <th class="sun-text-left">Total</th>
                <th></th>
                <th></th>
                <th class="sun-text-right">
                    <span>$</span>
                    <span class="sun-float-right">{{$class->f_total_earnings}}</span>
                </th>
            </tr>
          </tfoot>
    </table>

    <p class="sun-text-center">(printed: {{$class->printed}})</p>

  </body>
</html>
