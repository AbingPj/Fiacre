


<?php

Breadcrumbs::for('admin.organization.index', function ($trail) {
    $trail->push('Organization', route('admin.organization.index'));
});

Breadcrumbs::for('admin.organization.add', function ($trail) {
    $trail->parent('admin.organization.index');
    $trail->push(__('Add New Organization'), route('admin.organization.add'));
});

Breadcrumbs::for('admin.organization.show', function ($trail,$org_id) {
    $trail->parent('admin.organization.index');
    $trail->push('Organization id: . '.$org_id, route('admin.organization.show',$org_id));
});



// Breadcrumbs::for('admin.products.edit', function ($trail,$id) {
//     $trail->parent('admin.products.index');
//     $trail->push(__('Edit'), route('admin.products.edit', $id));
// });
