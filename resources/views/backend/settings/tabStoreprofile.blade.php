@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Settings | Store Profile')

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
                :prop_cities="{{json_encode($cities)}}"
                :prop_states="{{json_encode($states)}}"
                :prop_store="{{json_encode($store)}}"
                :prop_sunclub_choices="{{json_encode($sunclub_choices)}}"
                {{-- tab="{{Session::get('tab')}}" --}}
                store_action="{{route('admin.settings.update')}}"
                sunclub_action_add="{{route('admin.settings.sunclub.add')}}"
                sunclub_action_update="{{route('admin.settings.sunclub.update')}}"
                tab="storeprofile"
            ></admin-settings-page>
        </div><!--card-body-->
    </div><!--card-->
@endsection
