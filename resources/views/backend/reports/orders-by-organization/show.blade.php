@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Order Reports | by Organization')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        {{-- <h1>{{$reporttype}}</h1> --}}
        <admin-reports-orders-by-organization-show
            :optioncid="{{$optioncid}}"
            :organization="{{$organization}}"
            reporttype="{{$reporttype}}"
        ></admin-reports-orders-by-organization-show>
    </div><!--card-body-->
</div><!--card-->
@endsection
