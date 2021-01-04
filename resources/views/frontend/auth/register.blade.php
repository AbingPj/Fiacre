@extends('frontend.layouts.app')

{{-- @section('title', app_name() . ' | ' . __('labels.frontend.auth.register_box_title')) --}}
@section('title', app_name() . ' | Sign Up')

@section('meta')
    <meta property="og:title" content="Sign Up" />
    <meta property="og:url"content="{{ url()->current() }}" />
    <meta property="og:image" content="{{url('/img/sunfarmacy/bg-signup.jpg') }}" />
    <meta property="og:image:alt" content="Sign Up" />
@endsection

@section('content')
        <div class="container-fluid flex-grow-1 page-register">
            <div class="row min-vh-100" style="margin-top:-30px;">
                <div class="col-md-6 bg-sign-up">&nbsp;</div>
                <div class="col-md-6 bg-light p-5">

                    @if ($errors->has('email'))
                        @if($errors->first('email') != 'Email or password is incorrect.')
                            @include('includes.partials.messages')
                        @endif
                    @else
                         @include('includes.partials.messages')
                    @endif


                    {{ html()->form('POST', route('frontend.auth.register.post'))->open() }}
                        <register-form></register-form>
                        @if(config('access.captcha.registration'))
                            <div class="row">
                                <div class="col">
                                    @captchaHTML
                                    {{ html()->hidden('captcha_status', 'true') }}
                                </div><!--col-->
                            </div><!--row-->
                        @endif
                    {{ html()->form()->close() }}
                </div>
            </div>
        </div>
@endsection

{{-- @push('after-scripts')
    @if(config('access.captcha.registration'))
        @captchaScripts
    @endif
@endpush --}}
