@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Products | Show')

@section('content')
{{-- <admin-messages></admin-messages> --}}
<div class="card">
    <div class="card-body">
        {{-- {{$org->org_name}} --}}
        {{-- <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show> --}}
        <admin-messages></admin-messages>
        <admin-org-products-sub
            propstart="{{$start}}"
            propend="{{$end}}"
            propday="{{$day}}"
            :prod="{{json_encode($product)}}"
            proplimit="{{$limit}}"
        >
        </admin-org-products-sub>
    </div>
</div>
@endsection

