<?php

use App\Http\Controllers\Frontend\ReferralPageController;
use App\Http\Controllers\LanguageController;
use Illuminate\Support\Facades\Route;

// if (env('APP_ENV') === 'production') {
//     URL::forceSchema('https');
// }
/*
 * Global Routes
 * Routes that are used between both frontend and backend.
 */

// Switch between the included languages
Route::get('lang/{lang}', [LanguageController::class, 'swap']);

// Route::get('/finishsignup', function () {
//     return view('frontend.finishingsignup');
// });

// Route::get('/signup/complete', function () {
//     return view('frontend.auth.signup-complete');
// });

/*
 * Frontend Routes
 * Namespaces indicate folder structure
 */
Route::group(['namespace' => 'Frontend', 'as' => 'frontend.'], function () {
    include_route_files(__DIR__ . '/frontend/');
    /// Products Page
    Route::get('/products', 'ProductsController@index')->name('products');
    Route::get('/data/products', 'ProductsController@getProducts')->name('data.products');
    ///Checkot and placeorder and thank you page
    Route::get('/products/checkout', 'PlaceOrderController@index')->name('products.checkout');

    // Route::get('/products/checkout/billinginfo/{shipment}', 'PlaceOrderController@index2')->name('products.billinginfo');

    Route::post('/placeorder/sunclub', 'PlaceOrderController@PlaceOrderSunclub')->name('products.placeorder.sunclub');
    Route::post('/placeorder/wholesaler', 'PlaceOrderController@PlaceOrderWholeSaler')->name('products.placeorder.wholesaler');

    Route::post('/placeorder/guest', 'PlaceOrderController@PlaceOrderGuest')->name('products.placeorder.guest');
    Route::get('/placeorder/thankyou', 'PlaceOrderController@ThankYou');


    //// Orders Page
    Route::get('/orders', 'OrdersController@index')->name('orders');
    Route::get('/order/{id}', 'OrdersController@order')->name('orders.details');
    Route::get('/order/{order_id}/print', 'OrdersController@print');


    /// FinishSignup Congtroller
    Route::post('/submitfisnishsignup', 'FinishSignUpController@finishSignUp');

    ////
    Route::get('/myprofile', 'UserProfileController@index');
    Route::post('/updateprofile', 'UserProfileController@updateProfile')->name('profile.update');

    Route::post('/myprofile/saveCC/SunClub', 'cc_ach\saveCcController@saveCcSunClub')->name('profile.saveCC.sc');
    Route::post('/myprofile/saveCC/Wholesaler', 'cc_ach\saveCcController@saveCcWholesaler')->name('profile.saveCC.ws');
    Route::post('/myprofile/saveACH/SunClub', 'cc_ach\saveAchController@saveAchSunClub')->name('profile.saveACH.sc');
    Route::post('/myprofile/saveACH/Wholesaler', 'cc_ach\saveAchController@saveAchWholesaler')->name('profile.saveACH.ws');



    //// data for Selections
    Route::get('/states', 'SelectionsController@states');
    Route::get('/cities/{state_id}', 'SelectionsController@cities');


    Route::get('/cities', 'SelectionsController@allcities');
    Route::get('/data/searchcities', 'SelectionsController@searchcities');
    Route::get('/cities2', 'SelectionsController@getAllCities2');


    /// chat
    Route::post('/submitchat', 'ChatController@submit');
    Route::get('/getchats', 'ChatController@getChats');
    Route::get('/getparticipants', 'ChatController@getparticipants');
    Route::get('/getunviewdchats', 'ChatController@getUnviewedChats');
    Route::post('/updateUnviewedChats', 'ChatController@updateUnviewedChats');

    Route::get('/getNearbyPickupZone', 'ZoneController@getNearbyPickupZone');
    Route::get('/getNearbyDeliveryZone', 'ZoneController@getNearbyDeliveryZone');


    Route::get('referrals', [ReferralPageController::class, 'index'])->name('referrals');
    Route::post('referrals/sendInvite', [ReferralPageController::class, 'sendInvite'])->name('referrals.sendInvite');
    Route::post('referrals/submitReferralCode', [ReferralPageController::class, 'submitReferralCode'])->name('referrals.submitReferralCode');
    Route::get('referrals/getUserRewards', [ReferralPageController::class, 'getUserRewards'])->name('referrals.getUserRewards');
    Route::post('referrals/checkCouponCode', [ReferralPageController::class, 'checkCouponCode'])->name('referrals.checkCouponCode');
});

/*
 * Backend Routes
 * Namespaces indicate folder structure
 */
Route::group(['namespace' => 'Backend', 'prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    /*
     * These routes need view-backend permission
     * (good if you want to allow more than one group in the backend,
     * then limit the backend features by different roles or permissions)
     *
     * Note: Administrator has all permissions so you do not have to specify the administrator role everywhere.
     * These routes can not be hit if the password is expired
     */
    include_route_files(__DIR__ . '/backend/');
});


Route::group(['namespace' => 'Backend\API', 'prefix' => 'api/admin', 'middleware' => 'admin'], function () {

    /// orders
    Route::get('/orders', 'OrdersController@index');
    Route::get('/orders/weekly', 'OrdersController@weekly');
    Route::get('/orders/monthly', 'OrdersController@monthly');

    // products
    Route::get('/products', 'ProductsController@getProducts');
    Route::post('/store/bundle/product', 'ProductsController@storeBundleProduct');
    Route::post('/update/bundle/product', 'ProductsController@updateBundleProduct');
    Route::get('/subcategory/{category_id}', 'ProductsController@getSubCategory')->name('admin.api.subcategory');


    Route::get('/products2', 'ProductsController@getProducts2');


});
