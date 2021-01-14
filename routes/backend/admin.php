<?php

use App\Http\Controllers\Backend\CategoriesController;
use App\Http\Controllers\Backend\ChatController;
use App\Http\Controllers\Backend\ContentsController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\EmailsController;
use App\Http\Controllers\Backend\MembersController;
use App\Http\Controllers\Backend\OrdersController;
use App\Http\Controllers\Backend\ProductsController;
use App\Http\Controllers\Backend\ReportsOrderByCustomerCrtlr;
use App\Http\Controllers\Backend\ReportsOrderByZipCodeCrtlr;
use App\Http\Controllers\Backend\ReportsProductsOrders;
use App\Http\Controllers\Backend\SalesReportController;
use App\Http\Controllers\Backend\SettingsController;
use App\Http\Controllers\Backend\DeliveryPickUpZoneController;
use App\Http\Controllers\Backend\PromotionsController;
use App\Http\Controllers\Backend\OrganizationController;

// All route names are prefixed with 'admin.'.
Route::redirect('/', '/admin/dashboard', 301);
Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

///Products
Route::get('products', [ProductsController::class, 'index'])->name('products.index');
Route::get('products/create', [ProductsController::class, 'create'])->name('products.create');
Route::post('products', [ProductsController::class, 'store'])->name('products.store');
Route::post('product/visible', [ProductsController::class, 'productVisible'])->name('products.visible');
Route::post('product/instocks', [ProductsController::class, 'storeQuantity'])->name('products.store.quantity');
Route::post('product/instocks/update', [ProductsController::class, 'updateQuantity'])->name('products.update.quantity');

// Specific Product
Route::group(['prefix' => 'products/{product_id}'], function () {
    // Product
    Route::get('edit', [ProductsController::class, 'edit'])->name('products.edit');
    Route::get('instocks', [ProductsController::class, 'productInStocks'])->name('products.instocks');
    // Route::patch('/', [ProductsController::class, 'update'])->name('products.update');
    Route::post('/', [ProductsController::class, 'update'])->name('products.update');
    Route::patch('archive', [ProductsController::class, 'archive'])->name('products.archive');
});

//  Bundle PRoduct
Route::get('products/create/bundle', [ProductsController::class, 'createBundle'])->name('products.create.bundle');
Route::post('products/store/bundle', [ProductsController::class, 'storeBundleProduct'])->name('products.store.bundle');
Route::get('products/bundle/{product_id}/edit', [ProductsController::class, 'editBundle'])->name('products.edit.bundle');

//Orders
Route::get('orders', [OrdersController::class, 'index'])->name('orders.index');
Route::post('orders/details/save', [OrdersController::class, 'updateDetails'])->name('orders.details.save');
// Specific Order
Route::group(['prefix' => 'orders/{order_id}'], function () {
    // Order Products
    Route::get('/', [OrdersController::class, 'show'])->name('orders.show');
});


//Organization
Route::get('organization', [OrganizationController::class, 'index'])->name('organization.index');
Route::get('organization/show', [OrganizationController::class, 'show'])->name('organization.show');
Route::get('organization/add', [OrganizationController::class, 'add'])->name('organization.add');
Route::get('api/getOrganization', [OrganizationController::class, 'getOrganization'])->name('organization.getOrganization');
Route::post('api/addOrganization', [OrganizationController::class, 'addOrganization'])->name('organization.addOrganization');


//Categories
Route::get('categories', [CategoriesController::class, 'index'])->name('categories.index');
Route::post('categories/add', [CategoriesController::class, 'add'])->name('categories.add');
Route::post('categories/update', [CategoriesController::class, 'update'])->name('categories.update');
Route::post('categories/delete', [CategoriesController::class, 'delete'])->name('categories.delete');

//Sub Categories
Route::get('categories/sub/{category_id}', [CategoriesController::class, 'indexSubCategory'])->name('categories.sub.index');
Route::post('categories/sub/add', [CategoriesController::class, 'addSubCategory'])->name('categories.sub.add');
Route::post('categories/sub/update', [CategoriesController::class, 'updateSubCategory'])->name('categories.sub.update');
Route::post('categories/sub/delete', [CategoriesController::class, 'deleteSubCategory'])->name('categories.sub.delete');

//Members
// Route::get('members', [MembersController::class, 'index'])->name('members');
Route::get('customers', [MembersController::class, 'index'])->name('customers.index');
Route::get('customers/{customer_id}', [MembersController::class, 'show'])->name('customers.show');




//Sales Reports
Route::get('reports/sales/daily', [SalesReportController::class, 'daily'])->name('reports.sales.daily');
Route::get('reports/sales/weekly', [SalesReportController::class, 'weekly'])->name('reports.sales.weekly');
Route::get('reports/sales/monthly', [SalesReportController::class, 'monthly'])->name('reports.sales.monthly');
Route::get('reports/sales/yearly', [SalesReportController::class, 'yearly'])->name('reports.sales.yearly');
Route::get('reports/sales/custom', [SalesReportController::class, 'custom'])->name('reports.sales.custom');
Route::post('reports/generate/pdf/daily', [SalesReportController::class, 'dailyReportGeneratePdf'])->name('sales.generate.pdf.daily');
Route::post('reports/generate/pdf/weekly', [SalesReportController::class, 'weeklyReportGeneratePdf'])->name('sales.generate.pdf.weekly');
Route::post('reports/generate/pdf/monthly', [SalesReportController::class, 'monthlyReportGeneratePdf'])->name('sales.generate.pdf.monthly');
Route::post('reports/generate/pdf/yearly', [SalesReportController::class, 'yearlyReportGeneratePdf'])->name('sales.generate.pdf.yearly');
Route::post('reports/generate/pdf/custom', [SalesReportController::class, 'customReportGeneratePdf'])->name('sales.generate.pdf.custom');
Route::post('api/reports/sales/daily', [SalesReportController::class, 'dailyReport'])->name('api.sales.report.daily');
Route::post('api/reports/sales/monthly', [SalesReportController::class, 'monthlyReport'])->name('api.sales.report.monthly');
Route::post('api/reports/sales/yearly', [SalesReportController::class, 'yearlyReport'])->name('api.sales.report.yearly');
Route::post('api/reports/sales/weekly', [SalesReportController::class, 'weeklyReport'])->name('api.sales.report.weekly');
Route::post('api/reports/sales/custom', [SalesReportController::class, 'customDateRange'])->name('api.sales.report.custom');


/// reports by customers
Route::get('reports/orders-by-customers', [ReportsOrderByCustomerCrtlr::class, 'index'])->name('reports.orders.by.customer.index');
Route::get('reports/orders-by-customers/{customer_id}/{customer_name}', [ReportsOrderByCustomerCrtlr::class, 'show'])->name('reports.orders.by.customer.show');

Route::get('reports/orders/customers', [ReportsOrderByCustomerCrtlr::class, 'getCustomers'])->name('reports.orders.by.customers.customers');
Route::get('reports/orders/customers/{customer_id}/', [ReportsOrderByCustomerCrtlr::class, 'getOrdersOfACustomer'])->name('reports.orders.by.customer.customers.data');
Route::post('generate/pdf/customer-orders', [ReportsOrderByCustomerCrtlr::class, 'generateCustomerOrdersReport'])->name('generate.customer-orders');
Route::post('generate/pdf/order', [ReportsOrderByCustomerCrtlr::class, 'generateOrderReport'])->name('generate.order');
Route::get('generate/pdf/order2/{order_id}', [ReportsOrderByCustomerCrtlr::class, 'generateOrderReport2'])->name('generate.order2');


// /// reports orders by zip code
Route::get('reports/orders-by-zipcode', [ReportsOrderByZipCodeCrtlr::class, 'index'])->name('reports.orders.by.zipcode.index');
Route::get('reports/orders-by-zipcode/{zipcode}', [ReportsOrderByZipCodeCrtlr::class, 'show'])->name('reports.orders.by.zipcode.show');
Route::get('reports/getZipcodes', [ReportsOrderByZipCodeCrtlr::class, 'getZipcodes'])->name('reports.orders.by.zipcode.getZipcodes');
Route::get('reports/getAZipcodes/{zipcode}', [ReportsOrderByZipCodeCrtlr::class, 'getAZipcodes'])->name('reports.orders.by.zipcode.getAZipcodes');



//PRoducts Reports
Route::get('reports/productsorders/daily', [ReportsProductsOrders::class, 'daily'])->name('reports.products-orders.daily');
Route::get('reports/productsorders/weekly', [ReportsProductsOrders::class, 'weekly'])->name('reports.products-orders.weekly');
Route::get('reports/productsorders/monthly', [ReportsProductsOrders::class, 'monthly'])->name('reports.products-orders.monthly');
Route::get('reports/productsorders/yearly', [ReportsProductsOrders::class, 'yearly'])->name('reports.products-orders.yearly');
Route::get('reports/productsorders/custom', [ReportsProductsOrders::class, 'custom'])->name('reports.products-orders.custom');
Route::post('api/reports/productsorders/daily', [ReportsProductsOrders::class, 'dailyReport'])->name('api.products-orders.report.daily');
Route::post('api/reports/productsorders/monthly', [ReportsProductsOrders::class, 'monthlyReport'])->name('api.products-orders.report.monthly');
Route::post('api/reports/productsorders/yearly', [ReportsProductsOrders::class, 'yearlyReport'])->name('api.products-orders.report.yearly');
Route::post('api/reports/productsorders/weekly', [ReportsProductsOrders::class, 'weeklyReport'])->name('api.products-orders.report.weekly');
Route::post('api/reports/productsorders/custom', [ReportsProductsOrders::class, 'customDateRange'])->name('api.products-orders.report.custom');
Route::post('generate/products-order/pdf/daily', [ReportsProductsOrders::class, 'dailyReportGeneratePdf'])->name('products-orders.generate.pdf.daily');
Route::post('generate/products-order/pdf/weekly', [ReportsProductsOrders::class, 'weeklyReportGeneratePdf'])->name('products-orders.generate.pdf.weekly');
Route::post('generate/products-order/pdf/monthly', [ReportsProductsOrders::class, 'monthlyReportGeneratePdf'])->name('products-orders.generate.pdf.monthly');
Route::post('generate/products-order/pdf/yearly', [ReportsProductsOrders::class, 'yearlyReportGeneratePdf'])->name('products-orders.generate.pdf.yearly');
Route::post('generate/products-order/pdf/custom', [ReportsProductsOrders::class, 'customReportGeneratePdf'])->name('products-orders.generate.pdf.custom');



//Emails
Route::get('emails', [EmailsController::class, 'index'])->name('emails.customer');
Route::post('emails/send', [EmailsController::class, 'sendEmailToACustomer'])->name('emails.customer.send');
Route::get('getemails', [EmailsController::class, 'getEmails'])->name('emails.getemails');

Route::get('promotions', [PromotionsController::class, 'index'])->name('promotions.index');
Route::post('sendPromotions', [PromotionsController::class, 'sendPromotions'])->name('promotions.sendPromotions');


///
Route::get('chats', [ChatController::class, 'index'])->name('chats');
Route::get('chats/customer/{customer_id}', [ChatController::class, 'show'])->name('chats.customer');
Route::get('chats/getchats/{customer_id}', [ChatController::class, 'getChats'])->name('chats.getchats');
Route::get('chats/getCustomers', [ChatController::class, 'getCustomers'])->name('chats.getCustomers');
Route::get('chats/updateUnviewedChats/{customer_id}', [ChatController::class, 'updateUnviewedChats'])->name('chats.updateUnviewedChats');
Route::post('chats/submit', [ChatController::class, 'submit'])->name('chats.submit');



Route::get('deliverypickupzones', [DeliveryPickUpZoneController::class, 'index'])->name('deliverypickupzones');


//Settings
Route::get('settings', [SettingsController::class, 'index'])->name('settings.profile');

Route::get('settings/main/storeprofile', [SettingsController::class, 'storeprofile'])->name('settings.main.storeprofile');
Route::get('settings/main/membership', [SettingsController::class, 'membership'])->name('settings.main.membership');
Route::get('settings/main/homepage', [SettingsController::class, 'homepage'])->name('settings.main.homepage');
Route::get('settings/main/aboutus', [SettingsController::class, 'aboutus'])->name('settings.main.aboutus');
Route::get('settings/main/faqs', [SettingsController::class, 'faqs'])->name('settings.main.faqs');
Route::get('settings/main/terms', [SettingsController::class, 'terms'])->name('settings.main.terms');
Route::get('settings/main/privacy', [SettingsController::class, 'privacy'])->name('settings.main.privacy');



Route::post('settings/update', [SettingsController::class, 'update'])->name('settings.update');
Route::post('settings/sunclub/add', [SettingsController::class, 'add_sunclub'])->name('settings.sunclub.add');
Route::post('settings/sunclub/update', [SettingsController::class, 'update_sunclub'])->name('settings.sunclub.update');


Route::post('settings/updateStoreReferralsCoupon', [SettingsController::class, 'updateStoreReferralsCoupon'])->name('settings.referralsCoupon.updateStoreReferralsCoupon');
Route::get('settings/referralsCoupon', [SettingsController::class, 'referralsCoupon'])->name('settings.referralsCoupon');




Route::post('settings/contents/aboutusSubmit', [ContentsController::class, 'aboutusSubmit'])->name('settings.contents.aboutusSubmit');
Route::post('settings/contents/faqsSubmit', [ContentsController::class, 'faqsSubmit'])->name('settings.contents.faqsSubmit');
Route::post('settings/contents/privacySubmit', [ContentsController::class, 'privacySubmit'])->name('settings.contents.privacySubmit');
Route::post('settings/contents/termsSubmit', [ContentsController::class, 'termsSubmit'])->name('settings.contents.termsSubmit');
Route::post('settings/contents/landingSubmit', [ContentsController::class, 'landingSubmit'])->name('settings.contents.landingSubmit');





Route::get('delivery-zones', [DeliveryPickUpZoneController::class, 'deliveryZones'])->name('settings.delivery-zones');
Route::get('delivery-zones/add', [DeliveryPickUpZoneController::class, 'deliveryZonesAdd'])->name('settings.delivery-zones.add');
Route::get('delivery-zones/edit/{zone_id}', [DeliveryPickUpZoneController::class, 'deliveryZonesEdit'])->name('settings.delivery-zones.edit');
Route::post('delivery-zones/update', [DeliveryPickUpZoneController::class, 'deliveryZonesUpdate'])->name('delivery-zones.update');
Route::post('delivery-zones/save', [DeliveryPickUpZoneController::class, 'saveDeliveryZones'])->name('delivery-zones.save');
Route::get('delivery-zones/getAllDeliveryZones', [DeliveryPickUpZoneController::class, 'getAllDeliveryZones'])->name('delivery-zones.getAllDeliveryZones');



Route::get('pickup-zones', [DeliveryPickUpZoneController::class, 'pickupZones'])->name('settings.pickup-zones');
Route::get('pickup-zones/add', [DeliveryPickUpZoneController::class, 'pickupZonesAdd'])->name('settings.pickup-zones.add');
Route::get('pickup-zones/edit/{zone_id}', [DeliveryPickUpZoneController::class, 'pickupZonesEdit'])->name('settings.pickup-zones.edit');
Route::post('pickup-zones/update', [DeliveryPickUpZoneController::class, 'pickupZonesUpdate'])->name('pickup-zones.update');
Route::post('pickup-zones/save', [DeliveryPickUpZoneController::class, 'savePickupZones'])->name('pickup-zones.save');
Route::get('pickup-zones/getAllPickupZones', [DeliveryPickUpZoneController::class, 'getAllPickupZones'])->name('pickup-zones.getAllPickupZones');
