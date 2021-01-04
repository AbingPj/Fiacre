<?php

use Illuminate\Http\Request;

// if (env('APP_ENV') === 'production') {
//     URL::forceSchema('https');
// }

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::group(['namespace' => 'Backend'], function () {

    //products
    Route::get('/products','ProductsController@getProducts');
    Route::post('/products','ProductsController@createProduct');
    Route::get('/product/{product_id}','ProductsController@getProduct');
    Route::put('/product/{product_id}','ProductsController@updateProduct');
    Route::delete('/product/{product_id}','ProductsController@deleteProduct');

    //category
    Route::get('/categories','CategoriesController@index');
    Route::post('/categories','CategoriesController@addCategory');
    Route::put('/category/{id}','CategoriesController@updateCategory');
    Route::delete('/category/{id}','CategoriesController@deleteCategory');

    //dashboard
    Route::get('/soldProductsCount','DashboardController@soldProductCount');
    Route::get('/totalEarnings','DashboardController@totalEarnings');
    Route::get('/topProducts','DashboardController@topProducts');
    Route::get('/sunclubMembersCount','DashboardController@memberCountSunclub');
    Route::get('/wholeSaleMembersCount','DashboardController@wholeSaleCountMember');
    Route::get('/countOnHold','DashboardController@countOnHoldOrders');

    //members
    Route::get('/memberSearch','MembersController@searchMembers');
    Route::get('/sunclubMemberDetails/{id}','MembersController@showSunclubMemberDetails');
    Route::get('/wholesaleMemberDetails/{id}','MembersController@showWholeSaleMemberDetails');

});

Route::group(['namespace' => 'Frontend'], function () {

    // Route::put('/','UserProfileController@updateProfile');
    Route::get('/feature/products','ProductsController@feature');

});
