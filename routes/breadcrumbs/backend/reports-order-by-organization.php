
<?php

Breadcrumbs::for('admin.reports.orders.by.organization.index', function ($trail) {
    $trail->push('Reports: Orders By Organization', route('admin.reports.orders.by.organization.index'));
});


Breadcrumbs::for('admin.reports.orders.by.organization.show', function ($trail, $organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id, url('admin/reports/orders-by-organization/' . $organization_id));
    // url('admin/log-viewer/'.$date.'/'.$filter)
});



Breadcrumbs::for('admin.reports.orders.by.organization.daily', function ($trail,$organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id.': Daily Report', route('admin.reports.orders.by.organization.daily',$organization_id));
});

Breadcrumbs::for('admin.reports.orders.by.organization.weekly', function ($trail,$organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id.': Weekly Report', route('admin.reports.orders.by.organization.weekly',$organization_id));
});


Breadcrumbs::for('admin.reports.orders.by.organization.monthly', function ($trail,$organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id.': Monthly Report', route('admin.reports.orders.by.organization.monthly',$organization_id));

});


Breadcrumbs::for('admin.reports.orders.by.organization.yearly', function ($trail,$organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id.': Yearly Report', route('admin.reports.orders.by.organization.yearly',$organization_id));
});

Breadcrumbs::for('admin.reports.orders.by.organization.custom', function ($trail,$organization_id) {
    $trail->parent('admin.reports.orders.by.organization.index');
    $trail->push($organization_id.': Custom Report', route('admin.reports.orders.by.organization.custom',$organization_id));
});

// Breadcrumbs::for('admin.reports.products-orders.custom', function ($trail) {
//     $trail->push('Custom Report', route('admin.reports.products-orders.custom'));
// });



Breadcrumbs::for('admin.reports.fundraise.index', function ($trail) {
    $trail->push('Reports: Orders By Organization', route('admin.reports.fundraise.index'));
});


Breadcrumbs::for('admin.reports.fundraise.show', function ($trail, $organization_id) {
    $trail->parent('admin.reports.fundraise.index');
    $trail->push($organization_id, url('admin/reports/fundraise/' . $organization_id));
    // url('admin/log-viewer/'.$date.'/'.$filter)
});


// Breadcrumbs::for('admin.reports.fundraise.daily', function ($trail,$organization_id) {
//     $trail->parent('admin.reports.fundraise.index');
//     $trail->push($organization_id.': Daily Report', route('admin.reports.fundraise.daily',$organization_id));
// });

// Breadcrumbs::for('admin.reports.fundraise.weekly', function ($trail,$organization_id) {
//     $trail->parent('admin.reports.fundraise.index');
//     $trail->push($organization_id.': Weekly Report', route('admin.reports.fundraise.weekly',$organization_id));
// });


// Breadcrumbs::for('admin.reports.fundraise.monthly', function ($trail,$organization_id) {
//     $trail->parent('admin.reports.fundraise.index');
//     $trail->push($organization_id.': Monthly Report', route('admin.reports.fundraise.monthly',$organization_id));

// });


// Breadcrumbs::for('admin.reports.fundraise.yearly', function ($trail,$organization_id) {
//     $trail->parent('admin.reports.fundraise.index');
//     $trail->push($organization_id.': Yearly Report', route('admin.reports.fundraise.yearly',$organization_id));
// });

// Breadcrumbs::for('admin.reports.fundraise.custom', function ($trail,$organization_id) {
//     $trail->parent('admin.reports.fundraise.index');
//     $trail->push($organization_id.': Custom Report', route('admin.reports.fundraise.custom',$organization_id));
// });

