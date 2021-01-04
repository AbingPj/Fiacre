
<?php

Breadcrumbs::for('admin.customers.index', function ($trail) {
    $trail->push('Customers', route('admin.customers.index'));
});

Breadcrumbs::for('admin.customers.show', function ($trail,$id) {
    $trail->parent('admin.customers.index');
    $trail->push('Profile Id: '.$id, route('admin.customers.show',$id));
});
