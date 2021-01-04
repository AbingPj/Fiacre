@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Add Pick-up Zone')

@section('content')
<admin-messages></admin-messages>
<div class="card">
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col">
                   <admin-pickup-zones-add></admin-pickup-zones-add>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>
    </div><!--card-body-->
</div><!--card-->
@endsection

