@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Product | Edit')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">

        {{-- <form action="{{route('admin.products.update', $product_id)}}" method="post" enctype="multipart/form-data" >
            @csrf;
            @method('PATCH');
        </form> --}}
            {{-- {{csrf_field()}}
            {{ method_field('PATCH') }} --}}

                <admin-products-edit-page
                    :propsproduct="{{json_encode($product)}}"
                    action="{{route('admin.products.update', $product_id)}}"
                    :propscategories="{{json_encode($categories)}}"
                ></admin-products-edit-page>


    </div><!--card-body-->
</div><!--card-->
@endsection
