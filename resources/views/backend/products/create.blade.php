@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Products | Create')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        {{-- <form action="{{route('admin.products.store')}}" method="post" enctype="multipart/form-data" >
                {{ csrf_field() }} --}}
                <admin-products-create-page
                    api="{{route('admin.products.store')}}"
                    :propscategories="{{json_encode($categories)}}"
                ></admin-products-creat-page>
        {{-- </form> --}}

    </div><!--card-body-->
</div><!--card-->
@endsection


