@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Pick-up Zones')

@section('content')
<div class="card">
    <div class="card-body">
        <div class="container">
            <div class="row">
                <div class="col" style="min-height: 500px">
                   <admin-pickup-zones></admin-pickup-zones>
                </div>
            </div>
        </div>

        <br>
        <br>
        <br>
    </div><!--card-body-->
</div><!--card-->
@endsection

