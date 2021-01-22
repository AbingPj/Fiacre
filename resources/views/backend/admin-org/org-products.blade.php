@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Products')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- {{$org->org_name}} --}}
        {{-- <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show> --}}
        <admin-org-products :propsorg="{{json_encode($org)}}"></admin-org-products>

    </div>
</div>
@endsection
