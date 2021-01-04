@extends('backend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('strings.backend.dashboard.title')) --}}
@section('title', app_name() . ' | Chats')

@section('content')
<div class="card">
    <div class="card-body">
        <admin-chat-customers></admin-chat-customers>
    </div><!--card-body-->
</div><!--card-->
@endsection
