@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Sales Report | Monthly')

@section('content')
<div class="card">
    <div class="card-body">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand">Reports: </a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link text-success mr-2" href="" > <i class="nav-icon fas fa-dollar-sign"></i> Sales</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link mr-2" href="{{ route('admin.reports.orders.by.customer.index') }}" >  <i class="nav-icon fas fa-chalkboard-teacher"></i> Order by Customer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-2" href="{{ route('admin.reports.orders.by.zipcode.index') }}" > <i class="nav-icon fas fa-map-marker-alt"></i> Order by Zipcode</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-2"  href="{{ route('admin.reports.products-orders.daily') }}" >  <i class="nav-icon fas fa-boxes"></i> Product Orders</a>
                </li>
              </ul>
            </div>
          </nav>
    </div>
    <div class="card-body">
        <admin-reports-sales report="monthly"></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection
