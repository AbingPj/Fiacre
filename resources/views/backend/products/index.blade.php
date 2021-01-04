@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-products-page
            :data="{{json_encode($data)}}"
        ></admin-products-page>
    </div><!--card-body-->
</div><!--card-->
@endsection
