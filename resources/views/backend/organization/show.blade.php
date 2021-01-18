@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Orders')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- <admin-orders-show-page
            :propsorder="{{json_encode($order)}}"
            :propsproducts="{{json_encode($products)}}"
            :propsuser="{{json_encode($user)}}"
            action="{{route('admin.orders.details.save')}}"
        ></admin-orders-show-page> --}}

        <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show>

    </div>
</div>
@endsection
