
@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Customers')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-customers-show-page
            :propscustomer="{{json_encode($customer)}}"
            :organization="{{json_encode($organization)}}"
        ></admin-customers-show-page>

    </div><!--card-body-->
</div><!--card-->
@endsection
