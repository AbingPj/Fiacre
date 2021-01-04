
<?php

Breadcrumbs::for('admin.reports.orders.by.customer.index', function ($trail) {
    $trail->push('Reports: Orders By Customer', route('admin.reports.orders.by.customer.index'));
});


Breadcrumbs::for('admin.reports.orders.by.customer.show', function ($trail, $id, $customer_name) {
    $trail->parent('admin.reports.orders.by.customer.index');
    // $trail->push(__('In Stocks'), route('admin.products.instocks', $id));
    // $trail->push('#'.$id.' | '.$customer_name, route('admin.reports.orders.by.customer.show'));
    $trail->push('#' . $id . ' | ' . $customer_name, url('admin/reports/orders-by-customers/' . $id . '/' . $customer_name));
    // url('admin/log-viewer/'.$date.'/'.$filter)

});
