@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products Order | Weekly')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-products report="weekly"></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection
