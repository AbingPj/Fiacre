@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Edit Pick-up Zone')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col">
                   <admin-pickup-zones-edit
                        :propszone = "{{json_encode($zone)}}"
                   ></admin-pickup-zones-edit>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>
    </div><!--card-body-->
</div><!--card-->
@endsection

