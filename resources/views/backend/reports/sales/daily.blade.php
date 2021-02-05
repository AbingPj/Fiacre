@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Sales Report | Daily')

@section('content')
<div class="card">
    @include('backend.reports.nav')
    <div class="card-body">
        <admin-reports-sales report="daily"></admin-reports-sales>
    </div><!--card-body-->
</div><!--card-->
@endsection

{{-- .border-right {
    // border-color: #88c43a;
    border-right: 2px solid #88c43a !important;
  } --}}
