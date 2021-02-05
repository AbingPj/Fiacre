<div class="card-body">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
        <a class="navbar-brand">Reports: </a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
                @if(Route::is('admin.reports.sales.*'))
                 <a class="nav-link mr-2 text-success font-weight-bold"  href="" > <i class="nav-icon fas fa-dollar-sign"></i> Sales</a>
                @else
                 <a class="nav-link mr-2"  href="{{ route('admin.reports.sales.daily') }}" > <i class="nav-icon fas fa-dollar-sign"></i> Sales</a>
                @endif
            </li>
            <li class="nav-item">
               @if(Route::is('admin.reports.orders.by.customer.*'))
              <a class="nav-link mr-2  text-success font-weight-bold" href="" >  <i class="nav-icon fas fa-chalkboard-teacher"></i> Order by Customer</a>
               @else
              <a class="nav-link mr-2" href="{{ route('admin.reports.orders.by.customer.index') }}" >  <i class="nav-icon fas fa-chalkboard-teacher"></i> Order by Customer</a>
               @endif
            </li>
            <li class="nav-item">
                @if(Route::is('admin.reports.orders.by.zipcode.*'))
                <a class="nav-link mr-2 text-success font-weight-bold" href="" > <i class="nav-icon fas fa-map-marker-alt"></i> Order by Zipcode</a>
                @else
               <a class="nav-link mr-2" href="{{ route('admin.reports.orders.by.zipcode.index') }}" > <i class="nav-icon fas fa-map-marker-alt"></i> Order by Zipcode</a>
               @endif
            </li>
            <li class="nav-item">
               @if(Route::is('admin.reports.products-orders.*'))
               <a class="nav-link mr-2 text-success font-weight-bold"  href="" >  <i class="nav-icon fas fa-boxes"></i> Product Orders</a>
               @else
               <a class="nav-link mr-2"  href="{{ route('admin.reports.products-orders.daily') }}" >  <i class="nav-icon fas fa-boxes"></i> Product Orders</a>

               @endif

            </li>
          </ul>
        </div>
      </nav>
    </div>


