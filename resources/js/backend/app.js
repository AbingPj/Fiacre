import '@coreui/coreui'

import Vue from "vue";
import BootstrapVue from "bootstrap-vue"; //Importing
import VueMaterial from "vue-material";

window.chart = require('chart.js');

window.Vue = Vue;
Vue.use(BootstrapVue); // Telling Vue to use this in whole application
Vue.use(VueMaterial);

import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import datePicker from 'vue-bootstrap-datetimepicker';
Vue.use(datePicker);
Vue.component('pagination', require('laravel-vue-pagination'));


import VueEvents from 'vue-events'
Vue.use(VueEvents)



import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.component('vue-phone-number-input', VuePhoneNumberInput);

// import wysiwyg from "vue-wysiwyg";
// Vue.use(wysiwyg, {
//     hideModules: { image: true },
//     image: {
//         uploadURL: "/api/myEndpoint",
//         dropzoneOptions: {},
//     },
// });


//Products
// Vue.component("admin-products-page", require("./components/products/index.vue").default);
// Vue.component("admin-products-create-page", require("./components/products/create.vue").default);
// Vue.component("admin-products-edit-page", require("./components/products/edit.vue").default);
// Vue.component("admin-products-in-stocks-page", require("./components/products/instocks.vue").default);

//Products Bundle
// Vue.component("admin-products-create-bundle-page", require("./components/products/create-bundle.vue").default);
// Vue.component("admin-products-edit-bundle-page", require("./components/products/edit-bundle.vue").default);

//Products Page Modal
Vue.component("admin-products-preview-modal", require("./components/products/preview.vue").default);
Vue.component("admin-products-archive-modal", require("./components/products/archive.vue").default);
Vue.component("admin-products-in-stocks-modal", require("./components/products/instocksModal.vue").default);
Vue.component("admin-products-in-stocks-modal-update", require("./components/products/instocksModalUpdate.vue").default);
Vue.component("admin-select-products-modal", require("./components/products/selectProductsModal.vue").default);

const Prod =
    () => import(/* webpackChunkName: "js/b/Prod" */ './components/products/index.vue');
const ProdCreate =
    () => import(/* webpackChunkName: "js/b/ProdCreate" */ './components/products/create.vue');
const ProdEdit =
    () => import(/* webpackChunkName: "js/b/ProdEdit" */ './components/products/edit.vue');
const ProdIn =
    () => import(/* webpackChunkName: "js/b/ProdIn" */ './components/products/instocks.vue');
const ProdBunCreate =
    () => import(/* webpackChunkName: "js/b/ProdBunCreate" */ './components/products/create-bundle.vue');
const ProdBunEdit =
    () => import(/* webpackChunkName: "js/b/ProdBunEdit" */ './components/products/edit-bundle.vue');


// Orders
// Vue.component("admin-orders-page", require("./components/orders/index.vue").default);
// Vue.component("admin-orders-show-page", require("./components/orders/show.vue").default);

const Order =
    () => import(/* webpackChunkName: "js/b/Order" */ './components/orders/index.vue');
const OrderShow =
    () => import(/* webpackChunkName: "js/b/OrderShow" */ './components/orders/show.vue');



const Organization =
    () => import(/* webpackChunkName: "js/b/Org" */ './components/organization/index.vue');
const OrganizationShow =
    () => import(/* webpackChunkName: "js/b/OrgShow" */ './components/organization/show.vue');
const OrganizationAdd =
    () => import(/* webpackChunkName: "js/b/OrgAdd" */ './components/organization/add.vue');
const OrganizationUpdate =
    () => import(/* webpackChunkName: "js/b/OrgUpdate" */ './components/organization/update.vue');


// customers
// Vue.component("admin-customers-page", require("./components/customers/index.vue").default);
// Vue.component("admin-customers-show-page", require("./components/customers/show.vue").default);


const Customer =
    () => import(/* webpackChunkName: "js/b/Customer" */ './components/customers/index.vue');
const CustomerShow =
    () => import(/* webpackChunkName: "js/b/CustomerShow" */ './components/customers/show.vue');




// Categories
// Vue.component("admin-categories-page", require("./components/categories/index.vue").default);
Vue.component("admin-categories-add-modal", require("./components/categories/modalAdd.vue").default);
Vue.component("admin-categories-update-modal", require("./components/categories/modalUpdate.vue").default);
Vue.component("admin-categories-delete-modal", require("./components/categories/modalDelete.vue").default);

const Categories =
    () => import(/* webpackChunkName: "js/b/Categories" */ './components/categories/index.vue');


// SubCategories
// Vue.component("admin-sub-categories-page", require("./components/categories/sub/index.vue").default);
Vue.component("admin-sub-categories-add-modal", require("./components/categories/sub/modalAdd.vue").default);
Vue.component("admin-sub-categories-update-modal", require("./components/categories/sub/modalUpdate.vue").default);
Vue.component("admin-sub-categories-delete-modal", require("./components/categories/sub/modalDelete.vue").default);

const CategoriesSub =
    () => import(/* webpackChunkName: "js/b/CategoriesSub" */ './components/categories/sub/index.vue');

/// Dashboard
// Vue.component("admin-dashboard-page", require("./components/dashboard.vue").default);
const Dashboard =
    () => import(/* webpackChunkName: "js/b/Dashboard" */ './components/dashboard.vue');

// Settings
// Vue.component("admin-settings-page", require("./components/settings/index.vue").default);
// Vue.component("admin-settings-store-tab", require("./components/settings/tab1.vue").default);

// Vue.component("admin-settings-membership-tab", require("./components/settings/tab2.vue").default);
Vue.component("admin-settings-membership-add-modal", require("./components/settings/addChoicesModal.vue").default);
Vue.component("admin-settings-membership-edit-modal", require("./components/settings/editChoicesModal.vue").default);

// Vue.component("admin-settings-refferals-coupon", require("./components/settings/tab3RefferalsCoupon.vue").default);

// Vue.component("admin-settings-aboutus-tab", require("./components/settings/tabAboutUs.vue").default);
// Vue.component("admin-settings-faqs-tab", require("./components/settings/tabFaqs.vue").default);
// Vue.component("admin-settings-privacy-tab", require("./components/settings/tabPrivacy.vue").default);
// Vue.component("admin-settings-terms-tab", require("./components/settings/tabTerms.vue").default);
// Vue.component("admin-settings-landing-tab", require("./components/settings/tabLandingPage.vue").default);

// Vue.component("admin-select-products-modal-2", require("./components/settings/selectProductsModal2.vue").default);


const Setttings =
    () => import(/* webpackChunkName: "js/b/Set" */ './components/settings/index.vue');
// const SetStoreTab =
//     () => import(/* webpackChunkName: "js/b/StoreTab" */ './components/settings/tab1.vue');
// const SetMembershipTab =
//     () => import(/* webpackChunkName: "js/b/SetMembershipTab" */ './components/settings/tab2.vue');
// const tabAboutUs =
//     () => import(/* webpackChunkName: "js/b/tabAboutUs" */ './components/settings/tabAboutUs.vue');
// const tabFaqs =
//     () => import(/* webpackChunkName: "js/b/tabFaqs" */ './components/settings/tabFaqs.vue');
// const tabPrivacy =
//     () => import(/* webpackChunkName: "js/b/tabPrivacy" */ './components/settings/tabPrivacy.vue');
// const tabTerms =
//     () => import(/* webpackChunkName: "js/b/tabTerms" */ './components/settings/tabTerms.vue');
// const tabLandingPage =
//     () => import(/* webpackChunkName: "js/b/tabLandingPage" */ './components/settings/tabLandingPage.vue');


// // Sales Reports
// Vue.component("admin-reports-sales", require("./components/reportssales/index.vue").default);
// Vue.component("admin-reports-sales-daily", require("./components/reportssales/daily.vue").default);
// Vue.component("admin-reports-sales-weekly", require("./components/reportssales/weekly.vue").default);
// Vue.component("admin-reports-sales-monthly", require("./components/reportssales/monthly.vue").default);
// Vue.component("admin-reports-sales-yearly", require("./components/reportssales/yearly.vue").default);
// Vue.component("admin-reports-sales-custom", require("./components/reportssales/custom.vue").default);


const RepSales =
    () => import(/* webpackChunkName: "js/b/RepSales" */ './components/reportssales/index.vue');
// const RepSalesDaily =
//     () => import(/* webpackChunkName: "js/b/RepSalesDaily" */ './components/reportssales/daily.vue');
// const RepSalesWeekly =
//     () => import(/* webpackChunkName: "js/b/RepSalesWeekly" */ './components/reportssales/weekly.vue');
// const RepSalesMonthly =
//     () => import(/* webpackChunkName: "js/b/RepSalesMonthly" */ './components/reportssales/monthly.vue');
// const RepSalesYearly =
//     () => import(/* webpackChunkName: "js/b/RepSalesYearly" */ './components/reportssales/yearly.vue');
// const RepSalesCustom =
//     () => import(/* webpackChunkName: "js/b/RepSalesCustom" */ './components/reportssales/custom.vue');

/// Reports Orders by customer
// Vue.component("admin-reports-orders-by-customer", require("./components/reports/order-by-customer/index.vue").default);
// Vue.component("admin-reports-orders-by-customer-show", require("./components/reports/order-by-customer/show.vue").default);
// Vue.component("admin-reports-orders-by-customer-show-order", require("./components/reports/order-by-customer/show-order.vue").default);

const RepOC =
    () => import(/* webpackChunkName: "js/b/RepOC" */ './components/reports/order-by-customer/index.vue');
const RepOCShow =
    () => import(/* webpackChunkName: "js/b/RepOCShow" */ './components/reports/order-by-customer/show.vue');
const RepOCShowOrder =
    () => import(/* webpackChunkName: "js/b/RepOCShowOrder" */ './components/reports/order-by-customer/show-order.vue');



/// Reports Orders by zipcode
// Vue.component("admin-reports-orders-by-zipcode", require("./components/reports/order-by-zipcode/index.vue").default);
// Vue.component("admin-reports-orders-by-zipcode-show", require("./components/reports/order-by-zipcode/show.vue").default);

const RepOZ =
    () => import(/* webpackChunkName: "js/b/RepOZ" */ './components/reports/order-by-zipcode/index.vue');
const RepOZShow =
    () => import(/* webpackChunkName: "js/b/RepOZShow" */ './components/reports/order-by-zipcode/show.vue');


// Products Reports
// Vue.component("admin-reports-products", require("./components/reports/product-orders/index.vue").default);
// Vue.component("admin-reports-products-daily", require("./components/reports/product-orders/daily.vue").default);
// Vue.component("admin-reports-products-weekly", require("./components/reports/product-orders/weekly.vue").default);
// Vue.component("admin-reports-products-monthly", require("./components/reports/product-orders/monthly.vue").default);
// Vue.component("admin-reports-products-yearly", require("./components/reports/product-orders/yearly.vue").default);
// Vue.component("admin-reports-products-custom", require("./components/reports/product-orders/custom.vue").default);


const RepProd =
    () => import(/* webpackChunkName: "js/b/RepProd" */ './components/reports/product-orders/index.vue');
// const RepProdDaily =
//     () => import(/* webpackChunkName: "js/b/RepProdDaily" */ './components/reports/product-orders/daily.vue');
// const RepProdWeekly =
//     () => import(/* webpackChunkName: "js/b/RepProdWeekly" */ './components/reports/product-orders/weekly.vue');
// const RepProdMonthly =
//     () => import(/* webpackChunkName: "js/b/RepProdMonthly" */ './components/reports/product-orders/monthly.vue');
// const RepProdYearly =
//     () => import(/* webpackChunkName: "js/b/RepProdYearly" */ './components/reports/product-orders/yearly.vue');
// const RepProdCustom =
//     () => import(/* webpackChunkName: "js/b/RepProdCustom" */ './components/reports/product-orders/custom.vue');



// Email Customer
// Vue.component("admin-emails-customer", require("./components/emailcustomer/index.vue").default);
Vue.component("select-emails-modal", require("./components/emailcustomer/selectCustomerModal.vue").default);
const EmailCustomer =
    () => import(/* webpackChunkName: "js/b/EmailCustomer" */ './components/emailcustomer/index.vue');




// Vue.component("admin-deliverypickupzones", require("./components/deliverypickupzones/index.vue").default);


// Delivery Zones
// Vue.component("admin-delivery-zones", require("./components/deliverypickupzones/deliveryZones.vue").default);
// Vue.component("admin-delivery-zones-add", require("./components/deliverypickupzones/deliveryZonesAdd.vue").default);
// Vue.component("admin-delivery-zones-edit", require("./components/deliverypickupzones/deliveryZonesEdit.vue").default);

const ZonDel =
    () => import(/* webpackChunkName: "js/b/ZonDel" */ './components/deliverypickupzones/deliveryZones.vue');
const ZonDelAdd =
    () => import(/* webpackChunkName: "js/b/ZonDelAdd" */ './components/deliverypickupzones/deliveryZonesAdd.vue');
const ZonDelEdit =
    () => import(/* webpackChunkName: "js/b/ZonDelEdit" */ './components/deliverypickupzones/deliveryZonesEdit.vue');

/// Pick-Up Zones
// Vue.component("admin-pickup-zones", require("./components/deliverypickupzones/pickupZones.vue").default);
// Vue.component("admin-pickup-zones-add", require("./components/deliverypickupzones/pickupZonesAdd.vue").default);
// Vue.component("admin-pickup-zones-edit", require("./components/deliverypickupzones/pickupZonesEdit.vue").default);

const ZonPick =
    () => import(/* webpackChunkName: "js/b/ZonPick" */ './components/deliverypickupzones/pickupZones.vue');
const ZonPickAdd =
    () => import(/* webpackChunkName: "js/b/ZonPickAdd" */ './components/deliverypickupzones/pickupZonesAdd.vue');
const ZonPickEdit =
    () => import(/* webpackChunkName: "js/b/ZonPickEdit" */ './components/deliverypickupzones/pickupZonesEdit.vue');



// Settings -> Referrals Coupon
// Vue.component("admin-referrals-coupon", require("./components/settings/referrals-coupon/index.vue").default);
const Referrals =
    () => import(/* webpackChunkName: "js/b/Referrals" */ './components/settings/referrals-coupon/index.vue');


// Promotions
// Vue.component("admin-prmotions", require("./components/promotions/index.vue").default);
Vue.component("admin-select-products-modal-3", require("./components/promotions/selectProductsModal3.vue").default);
const Promotions =
    () => import(/* webpackChunkName: "js/b/Promotions" */ './components/promotions/index.vue');



/// Others
Vue.component("admin-messages", require("./components/Messages.vue").default);

/// Customer Chat PAUSE DEVELOPMENT
// Vue.component("admin-chat-customers", require("./components/chatcustomer/index.vue").default);
// Vue.component("admin-chat-box", require("./components/chatcustomer/chatbox.vue").default);
// Vue.component("admin-chat-customer-show", require("./components/chatcustomer/show.vue").default);
// Vue.component("admin-chat-customer-list", require("./components/chatcustomer/customerlist.vue").default);




const adminVueApp = new Vue({
    el: "#adminVueApp",
    components: {
        'admin-products-page': Prod,
        'admin-products-create-page': ProdCreate,
        'admin-products-edit-page': ProdEdit,
        'admin-products-in-stocks-page': ProdIn,
        'admin-products-create-bundle-page': ProdBunCreate,
        'admin-products-edit-bundle-page': ProdBunEdit,
        'admin-orders-page': Order,
        'admin-orders-show-page': OrderShow,
        'admin-customers-page': Customer,
        'admin-customers-show-page': CustomerShow,
        'admin-categories-page': Categories,
        'admin-sub-categories-page': CategoriesSub,
        'admin-dashboard-page': Dashboard,
        'admin-settings-page': Setttings,
        // 'admin-settings-store-tab': SetStoreTab,
        // 'admin-settings-membership-tab': SetMembershipTab,
        // 'admin-settings-aboutus-tab': tabAboutUs,
        // 'admin-settings-faqs-tab': tabFaqs,
        // 'admin-settings-privacy-tab': tabPrivacy,
        // 'admin-settings-terms-tab': tabTerms,
        // 'admin-settings-landing-tab': tabLandingPage,
        'admin-reports-sales': RepSales,
        // 'admin-reports-sales-daily': RepSalesDaily,
        // 'admin-reports-sales-weekly': RepSalesWeekly,
        // 'admin-reports-sales-mothly': RepSalesMonthly,
        // 'admin-reports-sales-yearly': RepSalesYearly,
        // 'admin-reports-sales-custom': RepSalesCustom,
        'admin-reports-orders-by-customer': RepOC,
        'admin-reports-orders-by-customer-show': RepOCShow,
        'admin-reports-orders-by-customer-show-order': RepOCShowOrder,
        'admin-reports-orders-by-zipcode': RepOZ,
        'admin-reports-orders-by-zipcode-show': RepOZShow,
        'admin-reports-products': RepProd,
        // 'admin-reports-products-daily': RepProdDaily,
        // 'admin-reports-products-weekly': RepProdWeekly,
        // 'admin-reports-products-monthly': RepProdMonthly,
        // 'admin-reports-products-yearly': RepProdYearly,
        // 'admin-reports-products-custom': RepProdCustom,
        'admin-emails-customer': EmailCustomer,
        'admin-delivery-zones': ZonDel,
        'admin-delivery-zones-add': ZonDelAdd,
        'admin-delivery-zones-edit': ZonDelEdit,
        'admin-pickup-zones': ZonPick,
        'admin-pickup-zones-add': ZonPickAdd,
        'admin-pickup-zones-edit': ZonPickEdit,
        'admin-referrals-coupon': Referrals,
        'admin-prmotions': Promotions,
        'admin-organization': Organization,
        'admin-organization-show': OrganizationShow,
        'admin-organization-add': OrganizationAdd,
        'admin-organization-update': OrganizationUpdate,


    }
});

