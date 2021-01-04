
@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Promotions')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-messages></admin-messages>
        <admin-prmotions></admin-prmotions>
    </div><!--card-body-->
</div><!--card-->
@endsection
