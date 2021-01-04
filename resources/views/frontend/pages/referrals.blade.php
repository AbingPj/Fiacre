@extends('frontend.layouts.app')

@section('title', app_name() . ' | Referrals')

@section('content')

<div style="margin-top:-10px;  background-image: url('/img/sunfarmacy/slider/Slider3.jpg'); background-attachment: fixed; ">
    <referrals-page :propdata="{{json_encode($class)}}"></referrals-page>
</div>




@endsection
