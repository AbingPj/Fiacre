@extends('backend.layouts.app')

@section('title', app_name() . ' | Store Referrals Coupon Settings')

@section('content')
   <admin-messages></admin-messages>
    <div class="card">
        <div class="card-body">
            <admin-referrals-coupon
                :store="{{json_encode($store)}}"
            ></admin-referrals-coupon>

        </div><!--card-body-->
    </div><!--card-->
@endsection
