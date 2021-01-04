@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Settings | FAQ`s Content')

@section('content')

    @if(Session::has('update_status'))
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            {{ Session::get('update_status') }}
        </div>
    @endif

    <div class="card">
        <div class="card-body">
            <admin-messages></admin-messages>
            <admin-settings-page
                :prop_store="{{json_encode($store)}}"
                tab="faqs"
            ></admin-settings-page>
        </div><!--card-body-->
    </div><!--card-->
@endsection
