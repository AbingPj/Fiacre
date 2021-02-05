@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Order Reports | by Customer')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-orders-by-customer-show
            :customer_id="{{$customer_id}}"
        ></admin-reports-orders-by-customer-show>
    </div><!--card-body-->
</div><!--card-->
@endsection
