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


    <h1>Sales Report</h1>
    <h4>{{$class->from_label}} - {{$class->to_label}}</h4>
    <br>
    <table class="table">
        <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th class="sun-text-left">Date</th>
              <th>Total Orders</th>
              <th>Total Products Sold</th>
              <th class="sun-text-right">Sales</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($class->data as $item)
                <tr>
                    <td class="sun-text-left">{{$item->date}}</td>
                    <td>{{$item->total_orders}}</td>
                    <td>{{$item->total_products}}</td>
                    <td class="sun-text-right">{{$item->f_total_earnings}}</td>
                </tr>
            @endforeach
            <tr>
                <td class="sun-text-left">
                    <b>Total</b>
                </td>
                <td></td>
                <td></td>
                <td class="sun-text-right">
                    <b>$ {{$class->f_total_earnings}}</b>
                </td>
            </tr>

          </tbody>
    </table>

    <p class="sun-text-center">(printed: {{$class->printed}})</p>

  </body>
</html>
