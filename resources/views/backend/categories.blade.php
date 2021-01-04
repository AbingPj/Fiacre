@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Categories')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-categories-page
            :propscategories="{{json_encode($categories)}}"
            addaction="{{route('admin.categories.add')}}"
            updateaction="{{route('admin.categories.update')}}"
            deleteaction="{{route('admin.categories.delete')}}"
        ></admin-categories-page>

        {{-- Route::post('categories/add', [CategoriesController::class, 'add'])->name('categories.add');
Route::post('categories/update', [CategoriesController::class, 'update'])->name('categories.update');
Route::post('categories/delete', [CategoriesController::class, 'delete'])->name('categories.delete'); --}}


    </div><!--card-body-->
</div><!--card-->
@endsection

