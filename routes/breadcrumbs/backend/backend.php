<?php

Breadcrumbs::for('admin.dashboard', function ($trail) {
    $trail->push(__('strings.backend.dashboard.title'), route('admin.dashboard'));
});


Breadcrumbs::for('admin.categories.index', function ($trail) {
    $trail->push('Categories', route('admin.categories.index'));
});


Breadcrumbs::for('admin.categories.sub.index', function ($trail, $id) {
    $trail->parent('admin.categories.index');
    $trail->push('#' . $id . ' Sub-Categories', route('admin.categories.sub.index', $id));
});

Breadcrumbs::for('admin.sales.report', function ($trail) {
    $trail->push('Sales Report', route('admin.sales.report'));
});


Breadcrumbs::for('admin.emails.customer', function ($trail) {
    $trail->push('Email Customer', route('admin.emails.customer'));
});


Breadcrumbs::for('admin.promotions.index', function ($trail) {
    $trail->push('Promotions', route('admin.promotions.index'));
});


Breadcrumbs::for('admin.chats', function ($trail) {
    $trail->push('Chat Customer', route('admin.chats'));
});


Breadcrumbs::for('admin.chats.customer', function ($trail) {
    $trail->push('Chat Customer', route('admin.chats'));
});

Breadcrumbs::for('admin.deliverypickupzones', function ($trail) {
    $trail->push('Delivery & Pickup Zones', route('admin.deliverypickupzones'));
});


Breadcrumbs::for('admin.settings.profile', function ($trail) {
    $trail->push('Settings', route('admin.settings.profile'));
});




Breadcrumbs::for('admin.settings.delivery-zones', function ($trail) {
    $trail->push('Delivery Zones', route('admin.settings.delivery-zones'));
});

Breadcrumbs::for('admin.settings.delivery-zones.add', function ($trail) {
    $trail->parent('admin.settings.delivery-zones');
    $trail->push('Add Delivery Zone', route('admin.settings.delivery-zones.add'));
});

Breadcrumbs::for('admin.settings.delivery-zones.edit', function ($trail, $id) {
    $trail->parent('admin.settings.delivery-zones');
    $trail->push('Edit Zone: ID#' . $id . '', route('admin.settings.delivery-zones.edit', $id));
});


Breadcrumbs::for('admin.settings.pickup-zones', function ($trail) {
    $trail->push('Pick-up Zones', route('admin.settings.pickup-zones'));
});


Breadcrumbs::for('admin.settings.pickup-zones.add', function ($trail) {
    $trail->parent('admin.settings.pickup-zones');
    $trail->push('Add Pick-up Zone', route('admin.settings.pickup-zones.add'));
});

Breadcrumbs::for('admin.settings.pickup-zones.edit', function ($trail, $id) {
    $trail->parent('admin.settings.pickup-zones');
    $trail->push('Edit Zone: ID#' . $id . '', route('admin.settings.pickup-zones.edit', $id));
});


Breadcrumbs::for('admin.settings.referralsCoupon', function ($trail) {
    $trail->push('Settings: Referrals Coupon', route('admin.settings.referralsCoupon'));
});







require __DIR__ . '/auth.php';
require __DIR__ . '/admin-org.php';
require __DIR__ . '/log-viewer.php';
require __DIR__ . '/products.php';
require __DIR__ . '/orders.php';
require __DIR__ . '/organization.php';
require __DIR__ . '/customers.php';
require __DIR__ . '/sales-report.php';
require __DIR__ . '/reports-order-by-customer.php';
require __DIR__ . '/reports-order-by-zipcode.php';
require __DIR__ . '/reports-product-orders.php';
require __DIR__ . '/settings.php';
