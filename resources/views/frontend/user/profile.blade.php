@extends('frontend.layouts.app')

@section('title', app_name() . ' | '. $user->full_name)

@section('content')

<div style="padding-left:20%; padding-right:20%;">
    <error-message></error-message>
</div>


{{ html()->form('POST', route('frontend.profile.update'))->attribute('enctype', 'multipart/form-data')->open() }}
    {{ csrf_field() }}

    @if(config('access.captcha.billing_profile'))
        <div>
                @captchaHTML
                {{ html()->hidden('captcha_status', 'true') }}
        </div>
    @endif

    <user-profile-page
        :propsuser="{{json_encode($user)}}"
        :propscities="{{json_encode($cities)}}"
        :propsstates="{{json_encode($states)}}"
        action="{{route('frontend.profile.update')}}"
        :propssunclub_choices="{{json_encode($sunclub_choices)}}"
        wholesaler_discount="{{$wholesaler_discount}}"
        cancel_action="{{route('frontend.auth.cancel.sunclub.subscription')}}"
        cc_sc_action="{{route('frontend.profile.saveCC.sc')}}"
        cc_ws_action="{{route('frontend.profile.saveCC.ws')}}"
        ach_sc_action="{{route('frontend.profile.saveACH.sc')}}"
        ach_ws_action="{{route('frontend.profile.saveACH.ws')}}"
    >
    </user-profile-page>
{{ html()->form()->close() }}

@endsection
