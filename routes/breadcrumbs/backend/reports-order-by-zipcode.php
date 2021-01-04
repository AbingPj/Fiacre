
<?php

Breadcrumbs::for('admin.reports.orders.by.zipcode.index', function ($trail) {
    $trail->push('Reports: Orders By Zipcode', route('admin.reports.orders.by.zipcode.index'));
});


Breadcrumbs::for('admin.reports.orders.by.zipcode.show', function ($trail, $zipcode) {
    $trail->parent('admin.reports.orders.by.zipcode.index');
    $trail->push($zipcode, url('admin/reports/orders-by-zipcode/' . $zipcode));
    // url('admin/log-viewer/'.$date.'/'.$filter)
});
