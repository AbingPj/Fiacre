<?php

Breadcrumbs::for('admin.org.profile', function ($trail) {
    $trail->push('Organization Profile', route('admin.org.profile'));
});


Breadcrumbs::for('admin.org.products', function ($trail) {
    $trail->push('Organization Products', route('admin.org.products'));
});

