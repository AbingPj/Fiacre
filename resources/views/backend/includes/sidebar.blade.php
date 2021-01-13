<div class="sidebar" style="background-color: #43425D;">
    <nav class="sidebar-nav">
        <ul class="nav">
            <li class="nav-title">
                @lang('menus.backend.sidebar.general')
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/">
                   <i class="nav-icon fas fa-home"></i>
                   Home
                </a>
            </li>

            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.dashboard'))
                }}" href="{{ route('admin.dashboard') }}">
                    <i class="nav-icon fas fa-tachometer-alt"></i>
                    @lang('menus.backend.sidebar.dashboard')
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.products.*'))
                }}" href="{{ route('admin.products.index') }}">
                   <i class="nav-icon fas fa-boxes"></i>
                   Products
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.categories.*'))
                }}" href="{{ route('admin.categories.index') }}">
                   <i class="nav-icon far fa-object-ungroup"></i>
                   Categories
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.orders.*'))
                }}" href="{{ route('admin.orders.index') }}">
                <i class="nav-icon fas fa-file-invoice"></i>
                   Orders
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.organization.*'))
                }}" href="{{ route('admin.organization.index') }}">
                <i class="nav-icon fas fa-sitemap"></i>
                   Organization
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.customers.*'))
                }}" href="{{ route('admin.customers.index') }}
                ">
                  <i class="nav-icon fas fa-users"></i>
                   Customers
                </a>
            </li>


            {{-- @if ($logged_in_user->isAdmin())
                <li class="nav-title">
                    @lang('menus.backend.sidebar.system')
                </li>

                <li class="nav-item nav-dropdown {{
                    active_class(Route::is('admin/auth*'), 'open')
                }}">
                    <a class="nav-link nav-dropdown-toggle {{
                        active_class(Route::is('admin/auth*'))
                    }}" href="#">
                        <i class="nav-icon far fa-user"></i>
                        @lang('menus.backend.access.title')

                        @if ($pending_approval > 0)
                            <span class="badge badge-danger">{{ $pending_approval }}</span>
                        @endif
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Route::is('admin/auth/user*'))
                            }}" href="{{ route('admin.auth.user.index') }}">
                                @lang('labels.backend.access.users.management')

                                @if ($pending_approval > 0)
                                    <span class="badge badge-danger">{{ $pending_approval }}</span>
                                @endif
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                                active_class(Route::is('admin/auth/role*'))
                            }}" href="{{ route('admin.auth.role.index') }}">
                                @lang('labels.backend.access.roles.management')
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="divider"></li>

                <li class="nav-item nav-dropdown {{
                    active_class(Route::is('admin/log-viewer*'), 'open')
                }}">
                        <a class="nav-link nav-dropdown-toggle {{
                            active_class(Route::is('admin/log-viewer*'))
                        }}" href="#">
                        <i class="nav-icon fas fa-list"></i> @lang('menus.backend.log-viewer.main')
                    </a>

                    <ul class="nav-dropdown-items">
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Route::is('admin/log-viewer'))
                        }}" href="{{ route('log-viewer::dashboard') }}">
                                @lang('menus.backend.log-viewer.dashboard')
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link {{
                            active_class(Route::is('admin/log-viewer/logs*'))
                        }}" href="{{ route('log-viewer::logs.list') }}">
                                @lang('menus.backend.log-viewer.logs')
                            </a>
                        </li>
                    </ul>
                </li>
            @endif --}}

            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin.reports.*'))
                }}" href="{{ route('admin.reports.sales.daily') }}">
                   <i class="nav-icon fas fa-file-invoice-dollar"></i>
                   Reports
                </a>
            </li>

            {{-- <li class="nav-item nav-dropdown {{
                active_class(Route::is('admin.reports.*'), 'open')
            }}">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="nav-icon fas fa-file-invoice-dollar"></i>
                    Reports
                </a>

                <ul class="nav-dropdown-items ">
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Route::is('admin.reports.sales.*'))
                        }}" href="{{ route('admin.reports.sales.daily') }}" >
                            <i class="nav-icon fas fa-dollar-sign"></i>
                          Sales
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Route::is('admin.reports.orders.by.customer.*'))
                        }}" href="{{ route('admin.reports.orders.by.customer.index') }}" >
                            <i class="nav-icon fas fa-chalkboard-teacher"></i>
                          Orders by Customer
                        </a>
                    </li>
                   <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Route::is('admin.reports.orders.by.zipcode.*'))
                        }}" href="{{ route('admin.reports.orders.by.zipcode.index') }}" >
                            <i class="nav-icon fas fa-map-marker-alt"></i>
                          Orders by Zipcode
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link {{
                            active_class(Route::is('admin.reports.products-orders.*'))
                        }}" href="{{ route('admin.reports.products-orders.daily') }}" >
                            <i class="nav-icon fas fa-boxes"></i>
                          Product Orders
                        </a>
                    </li>
                </ul>
            </li> --}}

            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/chats*'))
                }}" href="{{ route('admin.chats') }}">
                   <i class="nav-icon fa fa-comments">
                   </i>
                   Chat Customer
                    @if(Auth::user()->getAllAdminUnviewedChats() != 0)
                        <span style="font-size:10px;" class="badge badge-danger align-top">
                            {{Auth::user()->getAllAdminUnviewedChats()}}
                        </span>
                    @endif
                </a>
            </li> --}}

            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/deliverypickupzones*'))
                }}" href="{{ route('admin.deliverypickupzones') }}">
                   <i class="nav-icon fas fa-map-marked-alt"></i>
                   Delivery & Pick-up
                </a>
            </li> --}}




            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/delivery-zones*'))
                }}" href="{{ route('admin.delivery-zones') }}">
                   <i class="nav-icon fas fa-map-marked-alt"></i>
                   Delivery Zones
                </a>
            </li>


            <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/pickup-zones*'))
                }}" href="{{ route('admin.pickup-zones') }}">
                   <i class="nav-icon fas fa-map-marked-alt"></i>
                    Pick-up Zones
                </a>
            </li> --}}



            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/emails*'))
                }}" href="{{ route('admin.emails.customer') }}">
                   <i class="nav-icon fas fa-envelope"></i>
                   Email Customer
                </a>
            </li> --}}


            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/promotions*'))
                }}" href="{{ route('admin.promotions.index') }}">
                   <i class="nav-icon fas fa-envelope"></i>
                   Promotions
                </a>
            </li> --}}

            {{-- <li class="nav-item">
                <a class="nav-link {{
                    active_class(Route::is('admin/settings*'))
                }}" href="{{ route('admin.settings') }}">
                   <i class="nav-icon fas fa-cogs"></i>
                   Settings
                </a>
            </li> --}}



            <li class="nav-item nav-dropdown {{
                active_class(Route::is('admin.settings.*'), 'open')
            }}">
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="nav-icon fas fa-cogs"></i>
                    Settings
                </a>

                        <ul class="nav-dropdown-items ">
                            <li class="nav-item">
                                <a class="nav-link {{
                                    active_class(Route::is('admin.settings.main.*'))
                                }}" href="{{ route('admin.settings.main.storeprofile') }}" >
                                    <i class="nav-icon fas fa-store"></i>
                                Main Settings
                                </a>
                            </li>

                            {{-- <li class="nav-item">
                                <a class="nav-link {{
                                    active_class(Route::is('admin.settings.referralsCoupon.*'))
                                }}" href="{{ route('admin.settings.referralsCoupon') }}" >
                                    <i class="nav-icon fas fa-ticket-alt"></i>
                                Referrals Coupon
                                </a>
                            </li> --}}


                        <li class="nav-item">
                                <a class="nav-link {{
                                    active_class(Route::is('admin.settings.pickup-zones.*'))
                                }}" href="{{ route('admin.settings.pickup-zones') }}" >
                                    <i class="nav-icon fas fa-map-marked-alt"></i>
                                    Pick-up Zones
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link {{
                                    active_class(Route::is('admin.settings.delivery-zones.*'))
                                }}" href="{{ route('admin.settings.delivery-zones') }}" >
                                    <i class="nav-icon fas fa-map-marked-alt"></i>
                                    Delivery Zones
                                </a>
                            </li>
                        </ul>
            </li>



        </ul>
    </nav>

    <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div><!--sidebar-->
