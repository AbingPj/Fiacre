@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products Order | Monthly')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-products report="monthly"></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection
