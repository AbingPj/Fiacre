@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Orders')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-orders-page
            :propsorders="{{json_encode($orders)}}"
        ></admin-orders-page>

    </div><!--card-body-->
</div><!--card-->
@endsection
