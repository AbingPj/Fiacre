@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products | Select Organization')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <admin-products-select-organization :product_id="{{$product_id}}" :product="{{json_encode($product)}}"></admin-products-select-organization>
    </div><!--card-body-->
</div><!--card-->
@endsection
