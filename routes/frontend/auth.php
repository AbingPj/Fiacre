<?php

use App\Http\Controllers\Frontend\Auth\ConfirmAccountController;
use App\Http\Controllers\Frontend\Auth\ForgotPasswordController;
use App\Http\Controllers\Frontend\Auth\LoginController;
use App\Http\Controllers\Frontend\Auth\PasswordExpiredController;
use App\Http\Controllers\Frontend\Auth\RegisterController;
use App\Http\Controllers\Frontend\Auth\ResetPasswordController;
use App\Http\Controllers\Frontend\Auth\SocialLoginController;
use App\Http\Controllers\Frontend\Auth\UpdatePasswordController;
use App\Http\Controllers\Frontend\FinishSignUpController;
use App\Http\Controllers\Frontend\User\SubscriptionsController;

/*
 * Frontend Access Controllers
 * All route names are prefixed with 'frontend.auth'.
 */
Route::group(['namespace' => 'Auth', 'as' => 'auth.'], function () {
    // These routes require the user to be logged in
    Route::group(['middleware' => 'auth'], function () {
        Route::get('logout', [LoginController::class, 'logout'])->name('logout');

        // These routes can not be hit if the password is expired
        Route::group(['middleware' => 'password_expires'], function () {
            // Change Password Routes
            Route::patch('password/update', [UpdatePasswordController::class, 'update'])->name('password.update');
        });

        // Password expired routes
        Route::get('password/expired', [PasswordExpiredController::class, 'expired'])->name('password.expired');
        Route::patch('password/expired', [PasswordExpiredController::class, 'update'])->name('password.expired.update');

        Route::get('register/success/confirmed', [FinishSignUpController::class, 'index'])->name('confirmed.billing');
        Route::get('signup/complete', [FinishSignUpController::class, 'done'])->name('confirmed.billing.done');

        Route::post('renew/sunclub', [SubscriptionsController::class, 'renewSunclubSubscriptions'])->name('renew.sunclub.subscription');
        Route::post('cancel/sunclub', [SubscriptionsController::class, 'cancellationOfSunclubMembership'])->name('cancel.sunclub.subscription');


    });

    // These routes require no user to be logged in
    Route::group(['middleware' => 'guest'], function () {
        // Authentication Routes
        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
        Route::post('login', [LoginController::class, 'login'])->name('login.post');

        // Socialite Routes
        Route::get('login/{provider}', [SocialLoginController::class, 'login'])->name('social.login');
        Route::get('login/{provider}/callback', [SocialLoginController::class, 'login']);

        // Registration Routes
        Route::get('register', [RegisterController::class, 'showRegistrationForm'])->name('register');
        Route::post('register', [RegisterController::class, 'register'])->name('register.post');
        Route::get('register/success', function() {
            return view('frontend.auth.success');
        })->name('register.success');

        Route::get('confirm/success', function() {
            return view('frontend.auth.confirm_success');
        })->name('confirm.success');
        // Confirm Account Routes
        Route::get('account/confirm/{token}', [ConfirmAccountController::class, 'confirm'])->name('account.confirm');
        Route::get('account/confirm/resend/{uuid}', [ConfirmAccountController::class, 'sendConfirmationEmail'])->name('account.confirm.resend');

        // Password Reset Routes
        Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])->name('password.email');
        Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email.post');

        Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset.form');
        Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.reset');
    });
});

Route::group(['middleware' => 'auth'], function () {
});
