
@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Customers')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-customers-page
            :propscustomers="{{json_encode($customers)}}"
        ></admin-customers-page>

    </div><!--card-body-->
</div><!--card-->
@endsection
