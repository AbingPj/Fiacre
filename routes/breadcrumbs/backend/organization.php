


<?php

Breadcrumbs::for('admin.organization.index', function ($trail) {
    $trail->push('Organization', route('admin.orders.index'));
});

// Breadcrumbs::for('admin.organization.show', function ($trail,$id) {
//     $trail->parent('admin.orders.index');
//     $trail->push('Order No. '.$id, route('admin.orders.show',$id));
// });



// Breadcrumbs::for('admin.products.edit', function ($trail,$id) {
//     $trail->parent('admin.products.index');
//     $trail->push(__('Edit'), route('admin.products.edit', $id));
// });
