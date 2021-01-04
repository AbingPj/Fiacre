@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Product | Edit | Bundle')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- <p>{{json_encode($selectas)}}</p> --}}
        <admin-products-edit-bundle-page
            :propsproduct="{{json_encode($product)}}"
            :propscategories="{{json_encode($categories)}}"
            :propsselectedproducts="{{json_encode($selectas)}}"
        >
        </admin-products-edit-bundle-page>
    </div><!--card-body-->
</div><!--card-->
@endsection
