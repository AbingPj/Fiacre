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
@endif
