<?php

use App\Http\Controllers\Frontend\ContactController;
use App\Http\Controllers\Frontend\HomeController;
use App\Http\Controllers\Frontend\ReferralPageController;
use App\Http\Controllers\Frontend\User\AccountController;
use App\Http\Controllers\Frontend\User\DashboardController;
use App\Http\Controllers\Frontend\User\ProfileController;

/*
 * Frontend Controllers
 * All route names are prefixed with 'frontend.'.
 */

Route::get('/', [HomeController::class, 'index'])->name('index');
Route::get('/about-us', [HomeController::class, 'aboutUs'])->name('about-us');
Route::get('/faq', [HomeController::class, 'faq'])->name('faq');
Route::get('/delivery-area', [HomeController::class, 'deliveryArea'])->name('delivery-area');
Route::get('/terms-of-use', [HomeController::class, 'termsOfUse'])->name('terms-of-use');
Route::get('/privacy-policy', [HomeController::class, 'privacyPolicy'])->name('privacy-policy');

/*
 * These frontend controllers require the user to be logged in
 * All route names are prefixed with 'frontend.'
 * These routes can not be hit if the password is expired
 */
Route::group(['middleware' => ['auth', 'password_expires']], function () {
    Route::group(['namespace' => 'User', 'as' => 'user.'], function () {
        // User Dashboard Specific
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // User Account Specific
        Route::get('account', [AccountController::class, 'index'])->name('account');

        // User Profile Specific
        Route::patch('profile/update', [ProfileController::class, 'update'])->name('profile.update');


    });
});
