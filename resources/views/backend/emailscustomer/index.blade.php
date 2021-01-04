@extends('backend.layouts.app')

@section('title', app_name() . ' | Emails')

@section('content')
   <admin-messages></admin-messages>
    <div class="card">
        <div class="card-body">
        <admin-emails-customer propemail="{{$email}}"></admin-emails-customer>
        </div><!--card-body-->
    </div><!--card-->
@endsection
