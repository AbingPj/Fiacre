
@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Order Reports | by Organization')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-orders-by-organization></admin-reports-orders-by-organization>
    </div><!--card-body-->
</div><!--card-->
@endsection
