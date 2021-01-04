@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products')

@section('content')
<div class="card">
    <div class="card-body">
        {{-- <admin-products-in-stocks-page
            :propsproduct="{{json_encode($products)}}"
            :propscategories="{{json_encode($categories)}}"
        ></admin-products-in-stocks-page> --}}

        <admin-products-in-stocks-page
            :propsproduct="{{json_encode($product)}}"
            :propsinstocks="{{json_encode($instocks)}}"
            storeaction="{{route('admin.products.store.quantity')}}"
            updateaction="{{route('admin.products.update.quantity')}}"
        ></admin-products-in-stocks-page>
    </div><!--card-body-->
</div><!--card-->
@endsection
