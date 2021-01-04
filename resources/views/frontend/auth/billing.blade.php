@extends('frontend.layouts.app')

@section('title', app_name() . ' | ' . __('labels.frontend.auth.register_box_title'))

@section('content')
    <div class="page-billing flex-grow-1">
        <div class="container">
            {{-- @include('includes.partials.messages') --}}
            {{-- <form action="/submitfisnishsignup" method="post" enctype="multipart/form-data" > --}}
                {{-- {{ csrf_field() }} --}}
                {{-- @captchaHTML --}}
                {{-- @if(config('access.captcha.others'))
                    <div>
                        @captchaHTML
                        {{ html()->hidden('captcha_status', 'true') }}
                    </div>
                @endif --}}
                <billing-form
                    action="{{url('/submitfisnishsignup')}}"
                    :propsuser="{{json_encode($user)}}"
                    :propscities="{{json_encode($cities)}}"
                    :propsstates="{{json_encode($states)}}"
                    :propssunclub_choices="{{json_encode($sunclub_choices)}}"
                    :wholesaler_signup_is_hide="{{$wholesaler_signup_is_hide}}"
                    wholesaler_discount="{{$wholesaler_discount}}"
                ></billing-form>
            {{-- </form> --}}
        </div>
    </div>
@endsection

@push('after-scripts')
    <!-- Put this in your base HTML file - I use Vue CLI 3 so I put it at the bottom of the ./public/index.html file. -->
    <script src="https://www.google.com/recaptcha/api.js?render=explicit" async defer></script>
@endpush

{{-- @push('after-scripts')
    @if(config('access.captcha.registration'))
        @captchaScripts
    @endif
@endpush --}}
