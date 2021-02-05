@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization Fundraise')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <admin-org-fundraise :propsorg="{{json_encode($org)}}"></admin-org-fundraise>
    </div>
</div>
@endsection
