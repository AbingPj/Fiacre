@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Delivery & Pickup Zones')

@section('content')
<div class="card">
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col" style="height: 500px">
                    <admin-deliverypickupzones></admin-deliverypickupzones>
                </div>
            </div>
        </div>
    </div><!--card-body-->
</div><!--card-->
@endsection

