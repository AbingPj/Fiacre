@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Organization | Add')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <admin-organization-add></admin-organization-add>
    </div><!--card-body-->
</div><!--card-->
@endsection
