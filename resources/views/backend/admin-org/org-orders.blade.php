@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Orders')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- {{$org->org_name}} --}}
        {{-- <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show> --}}
        <admin-org-orders :propsorg="{{json_encode($org)}}"></admin-org-orders>

    </div>
</div>
@endsection
