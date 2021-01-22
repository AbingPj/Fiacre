<?php

use App\Http\Controllers\Backend\Organization\OrgProfileController;

// All route names are prefixed with 'admin.auth'.
Route::group([
    'prefix' => 'org',
    'as' => 'org.',
    'namespace' => 'Organization',
    // 'middleware' => 'role:'.config('access.users.org_user'),
], function () {
    Route::get('profile', [OrgProfileController::class, 'index'])->name('profile');
});
