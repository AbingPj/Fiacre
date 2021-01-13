@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Orders')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-organization></admin-organization>
    </div><!--card-body-->
</div><!--card-->
@endsection
