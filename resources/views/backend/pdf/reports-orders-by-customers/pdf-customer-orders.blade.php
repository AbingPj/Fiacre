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


    <h1>Customer Order</h1>
    <h3>Order by: {{$class->user->full_name}}</h3>
    <h3>Total Orders: <b>{{$class->total_orders}}</b></h3>
    <p class="sun-text-left">(printed: {{$class->printed}})</p>
    <br>
    <table class="table">
        <thead>
            <tr>
              <th>Date</th>
              <th>Order #</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            @foreach ($class->data as $item)
                <tr>
                    <td>{{$item->date}}</td>
                    <td>{{$item->id}}</td>
                    <td>{{$item->atr_status_label}}</td>
                </tr>
            @endforeach
          </tbody>
          <tfoot>
              <tr>
                  <th>Total Orders:</th>
                  <th></th>
                  <th>{{$class->total_orders}}</th>
              </tr>
          </tfoot>
    </table>

    <p class="sun-text-center">(printed: {{$class->printed}})</p>

  </body>
</html>
