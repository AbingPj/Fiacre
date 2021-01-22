<?php

use App\Http\Controllers\Backend\Organization\OrgProductsController;
use App\Http\Controllers\Backend\Organization\OrgProfileController;

// All route names are prefixed with 'admin.auth'.
Route::group([
    'prefix' => 'org',
    'as' => 'org.',
    'namespace' => 'Organization',
    // 'middleware' => 'role:'.config('access.users.org_user'),
], function () {
    Route::get('profile', [OrgProfileController::class, 'index'])->name('profile');
    Route::get('products', [OrgProductsController::class, 'index'])->name('products');
    Route::get('getAssignedProducts', [OrgProductsController::class, 'getAssignedProducts'])->name('getAssignedProducts');
    Route::get('products/subcription/{product_id}', [OrgProductsController::class, 'showProduct'])->name('showProduct');
    Route::post('products/saveSubscription', [OrgProductsController::class, 'saveSubscription'])->name('saveSubscription');

});
