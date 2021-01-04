@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.login_box_title'))

@section('content')
    <div class="container p-5">
        <div class="row justify-content-center align-items-center">
            <div class="col col-sm-8 align-self-center">

                @include('includes.partials.messages')

                <div class="card">
                    <div class="card-header">
                        <strong>
                            @lang('labels.frontend.auth.login_box_title')
                        </strong>
                    </div><!--card-header-->

                    <div class="card-body">
                        {{ html()->form('POST', route('frontend.auth.login.post'))->open() }}
                            <div class="row">
                                <div class="col">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style="background-color: none;">
                                                <i class="fas fa-envelope fa-fw"></i>
                                            </span>
                                        </div>

                                        {{ html()->email('email')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.frontend.email'))
                                            ->attribute('maxlength', 191)
                                            ->required() }}
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" style="background-color: none;">
                                                <i class="fas fa-lock fa-fw"></i>
                                            </span>
                                        </div>

                                        {{ html()->password('password')
                                            ->class('form-control')
                                            ->placeholder(__('validation.attributes.frontend.password'))
                                            ->required() }}
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="form-group">
                                        <div class="checkbox">
                                            {{ html()->label(html()->checkbox('remember', true, 1) . ' ' . __('labels.frontend.auth.remember_me'))->for('remember') }}
                                        </div>
                                    </div><!--form-group-->
                                </div><!--col-->
                                <div class="col">
                                    <div class="form-group text-right">
                                        <a href="{{ route('frontend.auth.password.reset') }}">@lang('labels.frontend.passwords.forgot_password')</a>
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->

                            <div class="row">
                                <div class="col">
                                    <div class="form-group clearfix">
                                        <button type="submit" class="btn btn-success btn-block">SIGN IN</button>
                                    </div><!--form-group-->
                                    <p class="text-center">Or</p>
                                    <div class="form-group clearfix">
                                        <a href="{{route('frontend.auth.register')}}" class="btn btn-info btn-block text-white">SIGN UP</a>
                                    </div><!--form-group-->
                                </div><!--col-->
                            </div><!--row-->

                            @if(config('access.captcha.login'))
                                <div class="row">
                                    <div class="col">
                                        @captcha
                                        {{ html()->hidden('captcha_status', 'true') }}
                                    </div><!--col-->
                                </div><!--row-->
                            @endif

                        {{ html()->form()->close() }}

                        <div class="row">
                            <div class="col">
                                <div class="text-center">
                                    @include('frontend.auth.includes.socialite')
                                </div>
                            </div><!--col-->
                        </div><!--row-->
                    </div><!--card body-->
                </div><!--card-->
            </div><!-- col-md-8 -->
        </div><!-- row -->
    </div>
@endsection

@push('after-scripts')
    @if(config('access.captcha.login'))
        @captchaScripts
    @endif
@endpush
