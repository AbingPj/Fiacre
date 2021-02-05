
<?php

Breadcrumbs::for('admin.reports.orders.by.organization.index', function ($trail) {
    $trail->push('Reports: Orders By Organization', route('admin.reports.orders.by.organization.index'));
});


Breadcrumbs::for('admin.reports.orders.by.organization.show', function ($trail, $organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id, url('admin/reports/orders-by-organization/' . $organization_id));
    // url('admin/log-viewer/'.$date.'/'.$filter)
});



Breadcrumbs::for('admin.reports.fundraise.index', function ($trail) {
    $trail->push('Reports: Orders By Organization', route('admin.reports.fundraise.index'));
});


Breadcrumbs::for('admin.reports.fundraise.show', function ($trail, $organization_id) {
    $trail->parent('admin.reports.fundraise.index');
    $trail->push($organization_id, url('admin/reports/fundraise/' . $organization_id));
    // url('admin/log-viewer/'.$date.'/'.$filter)
});

