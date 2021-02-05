<?php

Breadcrumbs::for('admin.org.profile', function ($trail) {
    $trail->push('Organization Profile', route('admin.org.profile'));
});


Breadcrumbs::for('admin.org.orders', function ($trail) {
    $trail->push('Organization Orders', route('admin.org.orders'));
});
Breadcrumbs::for('admin.org.ordersShow', function ($trail, $id) {
    $trail->parent('admin.org.orders');
    $trail->push('Id: ' . $id, route('admin.org.ordersShow', $id));
});

Breadcrumbs::for('admin.org.ordersShow.weeks', function ($trail, $order_id, $ordered_prod_id) {
    $trail->parent('admin.org.orders');
    $trail->push('Order id: ' . $order_id, route('admin.org.ordersShow', $order_id));
    $trail->push('Ordered Product id: ' . $ordered_prod_id, route(
        'admin.org.ordersShow.weeks',
        ['order_id' => $order_id, 'ordered_prod_id' => $ordered_prod_id]
    ));
});






Breadcrumbs::for('admin.org.products', function ($trail) {
    $trail->push('Organization Products', route('admin.org.products'));
});

Breadcrumbs::for('admin.org.showProduct', function ($trail, $id) {
    $trail->parent('admin.org.products');
    $trail->push('Product: ' . $id, route('admin.org.showProduct', $id));
});



Breadcrumbs::for('admin.org.fundraise', function ($trail) {
    $trail->push('Organization Fundraise', route('admin.org.fundraise'));
});
// Breadcrumbs::for('admin.org.fundraiseShow', function ($trail, $id) {
//     $trail->parent('admin.org.fundraise');
//     $trail->push('Id: ' . $id, route('admin.org.fundraiseShow', $id));
// });
