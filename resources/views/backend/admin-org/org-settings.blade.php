@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Settings')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <admin-org-settings :propsorg="{{json_encode($org)}}" :pros_org_settings="{{json_encode($org_settings)}}"></admin-org-settings>
    </div>
</div>
@endsection
