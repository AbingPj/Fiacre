@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Orders | Details')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- {{$org->org_name}} --}}
        {{-- <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show> --}}
        <admin-org-orders-show-weeks
            :org="{{json_encode($org)}}"
            :orderd_product="{{json_encode($ordered_product)}}"
            :weeks="{{json_encode($weeks)}}"
        ></admin-org-orders-show-weeks>

    </div>
</div>
@endsection
