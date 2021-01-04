<?php

Breadcrumbs::for('admin.reports.products-orders.daily', function ($trail) {
    $trail->push('Daily Products Orders Report', route('admin.reports.products-orders.daily'));
});

Breadcrumbs::for('admin.reports.products-orders.weekly', function ($trail) {
    $trail->push('Weekly Products Orders Report', route('admin.reports.products-orders.weekly'));
});


Breadcrumbs::for('admin.reports.products-orders.monthly', function ($trail) {
    $trail->push('Monthly Products Orders Report', route('admin.reports.products-orders.monthly'));
});


Breadcrumbs::for('admin.reports.products-orders.yearly', function ($trail) {
    $trail->push('Yearly Products Orders Report', route('admin.reports.products-orders.yearly'));
});

Breadcrumbs::for('admin.reports.products-orders.custom', function ($trail) {
    $trail->push('Custom Report', route('admin.reports.products-orders.custom'));
});



