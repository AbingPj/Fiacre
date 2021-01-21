<?php

Breadcrumbs::for('admin.products.index', function ($trail) {
    $trail->push('Products', route('admin.products.index'));
});

Breadcrumbs::for('admin.products.create', function ($trail) {
    $trail->parent('admin.products.index');
    $trail->push(__('Create'), route('admin.products.create'));
});

Breadcrumbs::for('admin.products.store', function ($trail) {
    $trail->push('Products', route('admin.products.create'));
});

Breadcrumbs::for('admin.products.edit', function ($trail,$id) {
    $trail->parent('admin.products.index');
    $trail->push(__('Edit'), route('admin.products.edit', $id));
});

Breadcrumbs::for('admin.products.instocks', function ($trail,$id) {
    $trail->parent('admin.products.index');
    $trail->push(__('In Stocks'), route('admin.products.instocks', $id));
});

Breadcrumbs::for('admin.products.update', function ($trail) {
    $trail->push('Products', route('admin.products.index'));
});




Breadcrumbs::for('admin.products.create.bundle', function ($trail) {
    $trail->parent('admin.products.index');
    $trail->push(__('Create Bundle'), route('admin.products.create.bundle'));
});

Breadcrumbs::for('admin.products.edit.bundle', function ($trail, $id) {
    $trail->parent('admin.products.index');
    $trail->push(__('Edit Bundle'), route('admin.products.edit.bundle', $id));
});

Breadcrumbs::for('admin.products.productSelectOrganization', function ($trail, $id) {
    $trail->parent('admin.products.index');
    $trail->push(__('Select Organization'), route('admin.products.productSelectOrganization', $id));
});


// Breadcrumbs::for('admin.auth.user.edit', function ($trail, $id) {
//     $trail->parent('admin.auth.user.index');
//     $trail->push(__('menus.backend.access.users.edit'), route('admin.auth.user.edit', $id));
// });

// Route::get('products/create', [ProductsController::class, 'create'])->name('products.create');
// Route::post('products', [ProductsController::class, 'store'])->name('products.store');
