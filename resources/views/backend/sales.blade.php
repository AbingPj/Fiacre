@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Sales Report')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-reports-sales></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection

