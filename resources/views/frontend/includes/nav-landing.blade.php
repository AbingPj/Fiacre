<nav class="navbar navbar-expand-lg navbar-light bg-light p-4 sunfarmacy-nav-landing">
    <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="@lang('labels.general.toggle_navigation')">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <span class="navbar-text mr-3">
                 <i class="fas fa-envelope fa-fw mr-1"></i>{{ $store_settings->email }}
            </span>

            <span class="navbar-text">
                <i class="fas fa-phone-alt fa-fw mr-1"></i>{{ $store_settings->phone }}
            </span>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="{{route('frontend.index')}}" class="nav-link {{ active_class(Route::is('frontend.index')) }}">@lang('Home')</a></li>
                <li class="nav-item"><a href="{{route('frontend.about-us')}}" class="nav-link {{ active_class(Route::is('frontend.about-us')) }}">@lang('About Us')</a></li>
                @auth
                    @if( Auth::user()->customer_role == 4)
                        <li class="nav-item"><a href="{{url('/orders')}}" class="nav-link {{ active_class(Route::is('frontend.orders*'))}}">Orders</a></li>
                    @endif
                @endauth
                <li class="nav-item"><a href="{{url('/products')}}" class="nav-link">Products</a></li>
                {{-- <li class="nav-item"><a href="{{route('frontend.delivery-area')}}" class="nav-link {{ active_class(Route::is('frontend.delivery-area*'))}}">Delivery Area</a></li> --}}
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
                                @if ($logged_in_user->isAdmin())
                                    <a href="{{ route('admin.dashboard') }}" class="dropdown-item">@lang('navs.frontend.user.administration')</a>
                                @endif
                                @if ($logged_in_user->isOrganization())
                                    <a href="{{ route('admin.org.profile') }}" class="dropdown-item">@lang('navs.frontend.user.administration')</a>
                                @endif
                            @endcan

                            @if(  Auth::user()->customer_role != 1)
                                <a href="{{ route('frontend.user.account') }}" class="dropdown-item {{ active_class(Route::is('frontend.user.account')) }}">@lang('navs.frontend.user.account')</a>
                            @endif

                            @if( Auth::user()->customer_role == 4)
                                <a href="/myprofile" class="dropdown-item">Billing Profile</a>
                                <a href="/recurring-products" class="dropdown-item">My Recurring Products</a>
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

                {{-- <li class="nav-item">
                    <a style="padding:0px;" href="{{route('frontend.faq')}}" class="nav-link {{ active_class(Route::is('frontend.faq')) }}">
                        <img src="/img/sunfarmacy/Icon-awesome-cart-plus.svg" style="width:auto; height:30px;">
                        <span id="sunfarm-badge-1" style="position:fixed;" class="badge badge-danger">1</span>
                    </a>
                </li> --}}
                {{-- <product-cart guest={{ Auth::guest() ? 1: 0 }}></product-cart> --}}
                <product-cart
                    guest={{ Auth::guest() ? 1: 0 }}
                    :wholesaler_minimum_order_amount="{{$store_settings->wholesaler_minimum_order_amount}}"
                    guest_status="not-exist"
                    user_id={{ Auth::guest() ? null: Auth::user()->id}}
                    org_id={{  Auth::guest() ? null: $logged_in_user->selected_org_id}}
                    organization="{{  Auth::guest() ? null: json_encode($logged_in_user->atr_organization)}}"
                ></product-cart>
            </ul>
        </div>
    </div>
</nav>

{{-- <nav id="sunfarm-sticky-navbar" class="navbar navbar-expand-lg navbar-light bg-light p-4 sunfarmacy-nav-landing-2 d-none">
    <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="@lang('labels.general.toggle_navigation')">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <span class="navbar-text mr-3">
                 <i class="fas fa-envelope fa-fw mr-1"></i>support@sunfarmacy.com
            </span>

            <span class="navbar-text">
                <i class="fas fa-phone-alt fa-fw mr-1"></i>(585) 510-7100
            </span>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a href="{{route('frontend.index')}}" class="nav-link {{ active_class(Route::is('frontend.index')) }}">@lang('Home')</a></li>
                <li class="nav-item"><a href="{{route('frontend.about-us')}}" class="nav-link {{ active_class(Route::is('frontend.about-us')) }}">@lang('About Us')</a></li>
                <li class="nav-item"><a href="{{url('/products')}}" class="nav-link">Products</a></li>
                <li class="nav-item"><a href="{{route('frontend.faq')}}" class="nav-link {{ active_class(Route::is('frontend.faq')) }}">@lang('FAQ')</a></li>


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

                            <a href="{{ route('frontend.user.account') }}" class="dropdown-item {{ active_class(Route::is('frontend.user.account')) }}">@lang('navs.frontend.user.account')</a>

                            @if( Auth::user()->customer_role == 2 || Auth::user()->customer_role == 3)
                                <a href="/myprofile" class="dropdown-item">Billing Profile</a>
                            @elseif(Auth::user()->customer_role == 1)
                                <a href="/register/success/confirmed" class="dropdown-item">Set Billing Info</a>
                            @endif



                            <a href="{{ route('frontend.auth.logout') }}" class="dropdown-item">@lang('navs.general.logout')</a>
                        </div>
                    </li>
                @endguest

                <product-cart
                    guest={{ Auth::guest() ? 1: 0 }}
                    :wholesaler_minimum_order_amount="{{$store_settings->wholesaler_minimum_order_amount}}"
                    guest_status="not-exist"
                ></product-cart>

            </ul>
        </div>
    </div>
</nav> --}}
