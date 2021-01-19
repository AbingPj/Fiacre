<!DOCTYPE html>
@langrtl
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="rtl">
@else
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@endlangrtl

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', app_name())</title>
    <meta name="description" content="@yield('meta_description', 'Fiacre Foods')">
    <meta name="author" content="@yield('meta_author', 'CL')">
    @yield('meta')
    {{-- See https://laravel.com/docs/5.5/blade#stacks for usage --}}
    @stack('before-styles')
    <!-- Check if the language is set to RTL, so apply the RTL layouts -->
    <!-- Otherwise apply the normal LTR layouts -->
    {{-- {{ style(mix('css/frontend.css')) }} --}}
    <link   href="{{ asset('css/frontend.css') }}" media="all" type="text/css" rel="stylesheet">
    @stack('after-styles')
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{ url('/css/loading.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ url('/css/ldbtn.min.css')}}">
</head>

<body>

    @include('includes.partials.read-only')

    <div id="app" class="d-flex flex-column min-vh-100">
        <div class="nav-fixed sticky-top">
            @include('includes.partials.logged-in-as')
            @include('frontend.includes.nav')
        </div>
        <div class="content-top-margin">

            @if(!$errors->has('email'))
            @if(Request::is('register') != 1)
            <div style="padding-left:20%; padding-right:20%;">
                @include('includes.partials.messages')
            </div>
            @endif
            @endif

            @yield('content')
        </div>


        @include('frontend.includes.login')
        @include('frontend.includes.sun-expired-message')
        <rewards-modal
            guest={{ Auth::guest() ? 1: 0 }}
        ></rewards-modal>

        {{-- @auth
                @if (Auth::user()->isAdmin() == false)

                    <chat-box   :user="{{json_encode($logged_in_user)}}"
        store_logo ="{{url('/'.$store_settings->image_path)}}"
        :store_settings="{{json_encode($store_settings)}}"
        :badge="{{Auth::user()->getUnviewedChats()}}"
        ></chat-box>
        @endif
        @endauth --}}

    </div>
    <!-- #app -->


    <script src="{{ asset('js/loadingOverlay.js') }}"></script>
    <script>
        var spinHandle = loadingOverlay().activate();

        function LoadingOverlay() {
            $.LoadingOverlay("show");
        }

        function LoadingOverlayHide() {
            $.LoadingOverlay("hide");
        }
    </script>

    <!-- Scripts -->
    @stack('before-scripts')
    {{-- <script src="{{ asset('js/vendor.js') }}"></script>
    <script src="{{ asset('js/frontend.js') }}" defer></script> --}}
    {!! script(mix('js/manifest.js')) !!}
    {!! script(mix('js/vendor.js')) !!}
    {!! script(mix('js/frontend.js')) !!}
    @stack('after-scripts')

    <script>
        window.onscroll = function() {
            myFunction()
        };
        var profile = document.getElementById("profile-display");
        var contacts = document.getElementById("nav-contacts");
        var navbrand = document.getElementById("navbrand");
        var navbrand_image = document.getElementById("navbrand-image");

        function myFunction() {
            if (window.pageYOffset >= 30) {
                navbrand_image.classList.add("sunfarm-navbrand-image-2");
                navbrand_image.classList.remove("sunfarm-navbrand-image");
            } else if (window.pageYOffset <= 0) {
                navbrand_image.classList.add("sunfarm-navbrand-image");
                navbrand_image.classList.remove("sunfarm-navbrand-image-2");
            }
        }
    </script>

    @if(Request::is('products/checkout') != 1)
    <!-- #recaptcha -->
        @if(Request::is('register/success/confirmed') != 1)
         <!-- #recaptcha 2-->
            @captchaScripts
        @endif
    @endif
    @include('includes.partials.ga')
    @include('frontend.includes.facebookchat')
</body>

</html>
