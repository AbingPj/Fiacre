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
        <link   href="{{ asset('css/frontend.css') }}"  media="all" type="text/css" rel="stylesheet">
        @stack('after-styles')
    </head>
    <body>
        @include('includes.partials.read-only')

        <div id="app" class="d-flex flex-column">

            <div class="nav-fixed-landing sticky-top">
                @include('includes.partials.logged-in-as')
                @include('frontend.includes.nav-landing')
            </div>

            <div class="flex-grow-1">
                @if(!$errors->has('email'))
                    <div class="container" style="z-index:2; position: fixed; top: 0; left: 0; right: 0; margin-top: 8rem;">
                        @include('includes.partials.messages')
                    </div>
                @endif

                @yield('content')
            </div>

            @include('frontend.includes.login')
            <rewards-modal
                guest={{ Auth::guest() ? 1: 0 }}
            ></rewards-modal>
        </div>



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
        <script src="{{ asset('js/frontend.js') }}"></script> --}}
        {!! script(mix('js/manifest.js')) !!}
        {!! script(mix('js/vendor.js')) !!}
        {!! script(mix('js/frontend.js')) !!}
        @stack('after-scripts')

        {{-- @captchaScripts --}}
        @include('includes.partials.ga')
        @include('frontend.includes.facebookchat')
    </body>
</html>
