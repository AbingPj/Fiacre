@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Sub Categories')

@section('content')
<div class="card">
    <div class="card-body">

        <admin-sub-categories-page
            :propscategory="{{json_encode($category)}}"
            :propssubcategories="{{json_encode($subcategories)}}"
            addaction="{{route('admin.categories.sub.add')}}"
            updateaction="{{route('admin.categories.sub.update')}}"
            deleteaction="{{route('admin.categories.sub.delete')}}"
        ></admin-sub-categories-page>
    </div><!--card-body-->
</div><!--card-->
@endsection

