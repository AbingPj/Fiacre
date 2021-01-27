@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Orders | Details')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- {{$org->org_name}} --}}
        {{-- <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show> --}}
        <admin-org-orders-show
            :org="{{json_encode($org)}}"
            :order="{{json_encode($order)}}"
            :products="{{json_encode($ordered_products)}}"
        ></admin-org-orders-show>

    </div>
</div>
@endsection
