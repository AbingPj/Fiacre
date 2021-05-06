@if ($logged_in_user->isOrganization())
<li class="nav-title">
   Organization
</li>
<li class="nav-item">
    <a class="nav-link" href="/admin/org/profile">
       <i class="nav-icon fas fa-users"></i>
       Profile
    </a>
</li>
<li class="nav-item">
    <a class="nav-link {{
        active_class(Route::is('admin.org.products'))
    }}" href="{{ route('admin.org.products') }}">
        <i class="nav-icon fas fa-boxes"></i>
        Assigned Products
    </a>
</li>
<li class="nav-item">
    <a class="nav-link {{
        active_class(Route::is('admin.org.orders'))
    }}" href="{{ route('admin.org.orders') }}">
        <i class="nav-icon fas fa-file-invoice"></i>
        Orders
    </a>
</li>

<li class="nav-item">
    <a class="nav-link {{
        active_class(Route::is('admin.org.fundraise'))
    }}" href="{{ route('admin.org.fundraise') }}">
        <i class="nav-icon fas fa-donate"></i>
        Fundraise
    </a>
</li>

<li class="nav-item">
    <a class="nav-link {{
        active_class(Route::is('admin.org.settings'))
    }}" href="{{ route('admin.org.settings') }}">
        <i class="nav-icon fas fa-cogs"></i>
        Settings
    </a>
</li>



@endif
