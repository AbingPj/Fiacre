<?php

Breadcrumbs::for('admin.org.profile', function ($trail) {
    $trail->push('Organization Profile', route('admin.org.profile'));
});
