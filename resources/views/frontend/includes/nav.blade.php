<nav id="nav-contacts" class="font-weight-bold py-2 navbar-light bg-light">
    <div class="container">
        <div class="d-flex flex-row-reverse bd-highlight">
            <div class="p-2 bd-highlight">
                <i class="fas fa-envelope fa-fw mr-2"></i>{{ $store_settings->email }}
            </div>
            <div class="p-2 bd-highlight">
                <i class="fas fa-phone-alt fa-fw mr-2"></i>{{ $store_settings->phone }}
            </div>
        </div>
    </div>
</nav>

<nav class="navbar navbar-expand-lg navbar-light bg-light sunfarm">
    <div class="container">
        <a id="navbrand" href="{{ route('frontend.index') }}" class="navbar-brand sunfarm-navbrand">
            <img id="navbrand-image" src="{{ asset($store_settings->image_path) }}" class="sunfarm-navbrand-image" />
        </a>

        <button class="navbar-toggler navbar-toggler-right sunfarm-togggler-config" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="@lang('labels.general.toggle_navigation')">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav config-in-mobile">
                <li class="nav-item" ><a href="{{route('frontend.index')}}" class="nav-link {{ active_class(Route::is('frontend.index')) }}">@lang('Home')</a></li>
                <li class="nav-item"><a href="{{route('frontend.about-us')}}" class="nav-link {{ active_class(Route::is('frontend.about-us')) }}">@lang('About Us')</a></li>
                <li class="nav-item"><a href="{{url('/products')}}" class="nav-link {{ active_class(Route::is('frontend.products*'))}}">Products</a></li>
                @auth
                <li class="nav-item"><a href="{{url('/orders')}}" class="nav-link {{ active_class(Route::is('frontend.orders*'))}}">Orders</a></li>
                @endauth
                <li class="nav-item"><a href="{{route('frontend.faq')}}" class="nav-link {{ active_class(Route::is('frontend.faq')) }}">@lang('FAQ')</a></li>

                {{-- @auth
                    <li class="nav-item"><a href="{{route('frontend.user.dashboard')}}" class="nav-link {{ active_class(Route::is('frontend.user.dashboard')) }}">@lang('navs.frontend.dashboard')</a></li>
                @endauth --}}

                @guest
                    <li class="nav-item"><a href="#" class="nav-link" data-toggle="modal" data-target="#modalLogin">@lang('Sign In')</a></li>

                    @if(config('access.registration'))
                        <li class="nav-item"><a href="{{route('frontend.auth.register')}}" class="nav-link {{ active_class(Route::is('frontend.auth.register')) }}">@lang('Sign Up')</a></li>
                    @endif
                @else
                    <li class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" id="navbarDropdownMenuUser" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">{{ $logged_in_user->name }}</a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuUser">
                            @can('view backend')
                                <a href="{{ route('admin.dashboard') }}" class="dropdown-item">@lang('navs.frontend.user.administration')</a>
                            @endcan

                            <a href="{{ route('frontend.user.account') }}" class="dropdown-item">@lang('navs.frontend.user.account')</a>
                            @if( Auth::user()->customer_role == 2 || Auth::user()->customer_role == 3)
                                <a href="/myprofile" class="dropdown-item">Billing Profile</a>
                            @elseif(Auth::user()->customer_role == 1)
                                <a href="/register/success/confirmed" class="dropdown-item">Set Billing Info</a>
                            @endif


                            {{-- @if( Auth::user()->customer_role == 2 || Auth::user()->customer_role == 3)
                                <a href="/referrals" class="dropdown-item">Referrals</a>
                                <a href="#" class="dropdown-item" data-toggle="modal" data-target="#rewardsModal">Rewards</a>
                            @endif --}}


                            <a onclick="LoadingOverlay()" href="{{ route('frontend.auth.logout') }}" class="dropdown-item">@lang('navs.general.logout')</a>
                        </div>
                    </li>
                @endguest

                <product-cart
                    guest={{ Auth::guest() ? 1: 0 }}
                    clear_cart="{{Session::get('clear_cart')}}"
                    :wholesaler_minimum_order_amount="{{$store_settings->wholesaler_minimum_order_amount}}"
                    guest_status="{{  $guest_status ?? 'not-exist' }}"
                ></product-cart>

            </ul>
        </div>
    </div>
</nav>

