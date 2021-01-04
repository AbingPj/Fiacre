<?php

Breadcrumbs::for('admin.settings.main.storeprofile', function ($trail) {
    $trail->push('Settings: Store Profile', route('admin.settings.main.storeprofile'));
});

Breadcrumbs::for('admin.settings.main.membership', function ($trail) {
    $trail->push('Settings: Membership', route('admin.settings.main.membership'));
});

Breadcrumbs::for('admin.settings.main.homepage', function ($trail) {
    $trail->push('Settings: Home Page Content', route('admin.settings.main.homepage'));
});

Breadcrumbs::for('admin.settings.main.aboutus', function ($trail) {
    $trail->push('Settings: About Us Content', route('admin.settings.main.aboutus'));
});

Breadcrumbs::for('admin.settings.main.faqs', function ($trail) {
    $trail->push('Settings: FAQ`s Content', route('admin.settings.main.faqs'));
});

Breadcrumbs::for('admin.settings.main.terms', function ($trail) {
    $trail->push('Settings: Terms Content', route('admin.settings.main.terms'));
});

Breadcrumbs::for('admin.settings.main.privacy', function ($trail) {
    $trail->push('Settings: Privacy Policy Content', route('admin.settings.main.privacy'));
});
