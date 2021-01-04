<?php

Breadcrumbs::for('admin.reports.sales.daily', function ($trail) {
    $trail->push('Daily Sales Report', route('admin.reports.sales.daily'));
});

Breadcrumbs::for('admin.reports.sales.weekly', function ($trail) {
    $trail->push('Weekly Sales Report', route('admin.reports.sales.weekly'));
});


Breadcrumbs::for('admin.reports.sales.monthly', function ($trail) {
    $trail->push('Monthly Sales Report', route('admin.reports.sales.monthly'));
});


Breadcrumbs::for('admin.reports.sales.yearly', function ($trail) {
    $trail->push('Yearly Sales Report', route('admin.reports.sales.yearly'));
});

Breadcrumbs::for('admin.reports.sales.custom', function ($trail) {
    $trail->push('Custom Report', route('admin.reports.sales.custom'));
});



