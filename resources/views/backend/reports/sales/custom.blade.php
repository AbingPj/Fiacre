@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Sales Report | Custom')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-sales report="custom"></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection
