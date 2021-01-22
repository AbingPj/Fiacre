@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Orders')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <admin-organization-show :propsorg="{{json_encode($org)}}"></admin-organization-show>

    </div>
</div>
@endsection
