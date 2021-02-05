
@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Order Reports | by Customer')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-orders-by-zipcode></admin-reports-orders-by-zipcode>
    </div><!--card-body-->
</div><!--card-->
@endsection
