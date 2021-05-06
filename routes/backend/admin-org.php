<?php

use App\Http\Controllers\Backend\Organization\OrgFundraiseController;
use App\Http\Controllers\Backend\Organization\OrgOrdersController;
use App\Http\Controllers\Backend\Organization\OrgProductsController;
use App\Http\Controllers\Backend\Organization\OrgProfileController;
use App\Http\Controllers\Backend\Organization\OrgSettingsController;

// All route names are prefixed with 'admin.auth'.
Route::group([
    'prefix' => 'org',
    'as' => 'org.',
    'namespace' => 'Organization',
    // 'middleware' => 'role:'.config('access.users.org_user'),
], function () {
    Route::get('profile', [OrgProfileController::class, 'index'])->name('profile');
    Route::post('api/updateOrganization', [OrgProfileController::class, 'updateOrganization'])->name('updateOrganization');

    Route::get('products', [OrgProductsController::class, 'index'])->name('products');

    Route::get('orders', [OrgOrdersController::class, 'index'])->name('orders');
    Route::get('orders/{order_id}', [OrgOrdersController::class, 'show'])->name('ordersShow');
    Route::get('getOrderDetails/{order_id}', [OrgOrdersController::class, 'getOrderDetails']);
    Route::get('orders/{order_id}/weeks/{ordered_prod_id}', [OrgOrdersController::class, 'weeks'])->name('ordersShow.weeks');
    Route::post('ordersweeks/change', [OrgOrdersController::class, 'weeksChangeStatus'])->name('ordersShow.weeksChangeStatus');

    Route::get('getOrganizationOrders', [OrgOrdersController::class, 'getOrganizationOrders'])->name('getOrganizationOrders');
    Route::get('getAssignedProducts', [OrgProductsController::class, 'getAssignedProducts'])->name('getAssignedProducts');

    Route::get('products/subcription/{product_id}', [OrgProductsController::class, 'showProduct'])->name('showProduct');
    Route::post('products/saveSubscription', [OrgProductsController::class, 'saveSubscription'])->name('saveSubscription');


    Route::get('fundraise', [OrgFundraiseController::class, 'index'])->name('fundraise');
    Route::get('getOrganizationFundraise', [OrgFundraiseController::class, 'getOrganizationFundraise'])->name('getOrganizationFundraise');

    Route::get('settings', [OrgSettingsController::class, 'index'])->name('settings');
    Route::post('UpdateSettings', [OrgSettingsController::class, 'UpdateSettings'])->name('UpdateSettings');

});
