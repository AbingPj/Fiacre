


<?php

Breadcrumbs::for('admin.orders.index', function ($trail) {
    $trail->push('Orders', route('admin.orders.index'));
});

Breadcrumbs::for('admin.orders.show', function ($trail,$id) {
    $trail->parent('admin.orders.index');
    $trail->push('Order No. '.$id, route('admin.orders.show',$id));
});



// Breadcrumbs::for('admin.products.edit', function ($trail,$id) {
//     $trail->parent('admin.products.index');
//     $trail->push(__('Edit'), route('admin.products.edit', $id));
// });
