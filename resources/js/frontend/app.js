/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import "../bootstrap";
import "../plugins";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue"; //Importing
import VueMaterial from "vue-material";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import VueSocialSharing from 'vue-social-sharing';


import VueEvents from 'vue-events'



window.Vue = Vue;

Vue.use(BootstrapVue); // Telling Vue to use this in whole application
Vue.use(VueMaterial);
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.use(VueSocialSharing);



Vue.use(VueEvents)
// require('vue-events')

// import VueClipboard from 'vue-clipboard2'
// Vue.use(VueClipboard);


import VueProgrammaticInvisibleGoogleRecaptcha from 'vue-programmatic-invisible-google-recaptcha'
Vue.component('vue-programmatic-invisible-google-recaptcha', VueProgrammaticInvisibleGoogleRecaptcha)
Vue.component('pagination', require('laravel-vue-pagination'));

import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
Vue.component('vue-phone-number-input', VuePhoneNumberInput);


import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';


import vueCountryRegionSelect from 'vue-country-region-select';
Vue.use(vueCountryRegionSelect);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component("example-component", require("./components/ExampleComponent.vue").default);


// Vue.component("landing-page", require("./components/LandingPage.vue").default);
// Vue.component("register-form", require("./components/auth/RegisterForm.vue").default);
// Vue.component("billing-form", require("./components/auth/BillingForm.vue").default);

const LandingPage = () => import(/* webpackChunkName: "js/f/LandingPage" */ './components/LandingPage.vue');
const RegisterForm = () => import(/* webpackChunkName: "js/f/RegisterForm" */ './components/auth/RegisterForm.vue');
const BillingForm = () => import(/* webpackChunkName: "js/f/BillingForm" */ './components/auth/BillingForm.vue');


// Checkout Page
// Vue.component("checkout-page", require("./components/checkout-page/index.vue").default);
// Vue.component("cp-selected-items", require("./components/checkout-page/selectedItems.vue").default);
// Vue.component("os-guest", require("./components/checkout-page/order-summary-table/Guest.vue").default);
// Vue.component("os-sunclub", require("./components/checkout-page/order-summary-table/SunClub.vue").default);
// Vue.component("os-wholesaler", require("./components/checkout-page/order-summary-table/Wholesaler.vue").default);
// Vue.component("guest-address-modal", require("./components/checkout-page/guestAddressModal.vue").default);
// Vue.component("guest-payment-modal", require("./components/checkout-page/guestPaymentModal.vue").default);



const CheckoutPage = () => import(/* webpackChunkName: "js/f/CheckoutPage" */ './components/checkout-page/index.vue');
// const ChPSelectedItems = () => import(/* webpackChunkName: "js/f/ChPSelectedItems" */ './components/checkout-page/selectedItems.vue');
// const ChPOSGuest = () => import(/* webpackChunkName: "js/f/ChPOSGuest" */ './components/checkout-page/order-summary-table/Guest.vue');
// const ChPOSSunclub = () => import(/* webpackChunkName: "js/f/ChPOSSunclub" */ './components/checkout-page/order-summary-table/SunClub.vue');
// const ChPOSWholesaler = () => import(/* webpackChunkName: "js/f/ChPOSWholesaler" */ './components/checkout-page/order-summary-table/Wholesaler.vue');
// const ChPGaddressModal = () => import(/* webpackChunkName: "js/f/ChPGaddressModal" */ './components/checkout-page/guestAddressModal.vue');
// const ChPGpaymentModal = () => import(/* webpackChunkName: "js/f/ChPGpaymentModal" */ './components/checkout-page/guestPaymentModal.vue');



// //
// Vue.component("checkout-page-billing-info",require("./components/CheckoutPageBillingInfo.vue").default);


// Orders Page
// Vue.component("orders-page", require("./components/OrdersPage.vue").default);
Vue.component("order-products-page-weeks", require("./components/OrderProductPageWeeks.vue").default);

const OrdersPage = () => import(/* webpackChunkName: "js/f/OrdersPage" */ './components/OrdersPage.vue');
const OrderProductPage = () => import(/* webpackChunkName: "js/f/OrderProductPage" */ './components/OrderProductPage.vue');



/// Profile Page
// Vue.component("user-profile-page", require("./components/profile-page/Profile.vue").default);
// Vue.component("cancel-membership-modal", require("./components/profile-page/CancelMembershipModal.vue").default);
// Vue.component("user-type-component", require("./components/profile-page/UserTypeComponent.vue").default);
// Vue.component("card-holder", require("./components/profile-page/CardHolder.vue").default);
// Vue.component("business-information", require("./components/profile-page/BusinessInformation.vue").default);


const ProfilePage = () => import(/* webpackChunkName: "js/f/ProfilePage" */ './components/profile-page/Profile.vue');
// const ProfCancelMembership = () => import(/* webpackChunkName: "js/f/ProfCancelMembership" */ './components/profile-page/CancelMembershipModal.vue');
// const ProfUserType = () => import(/* webpackChunkName: "js/f/ProfUserType" */ './components/profile-page/UserTypeComponent.vue');
// const ProfCardHolder = () => import(/* webpackChunkName: "js/f/ProfCardHolder" */ './components/profile-page/CardHolder.vue');
// const ProfBusinesInfo = () => import(/* webpackChunkName: "js/f/ProfBusinesInfo" */ './components/profile-page/BusinessInformation.vue');




// Vue.component("referrals-page", require("./components/referrals/RefferalsPage.vue").default);
Vue.component("ReferralModal", require("./components/referrals/RefferalsPageModal.vue").default);
Vue.component("social-component", require("./components/Social.vue").default);


const RefferalsPage = () => import(/* webpackChunkName: "js/f/RefferalsPage" */ './components/referrals/RefferalsPage.vue');
const RefferalsPageModal = () => import(/* webpackChunkName: "js/f/RefferalsPageModal" */ './components/referrals/RefferalsPageModal.vue');


/// New Products Page
// Vue.component("products-page", require("./components/products-page/index.vue").default);
// Vue.component("products-page-order-summary", require("./components/products-page/orderSummary.vue").default);
Vue.component("ProductsPageModal", require("./components/products-page/productsModal.vue").default);
Vue.component("ProductsSubModal", require("./components/products-page/productsSubModal.vue").default);
Vue.component("ProductsSubModal2", require("./components/products-page/productsSubModal2.vue").default);
Vue.component("ProductsSubModal3", require("./components/checkout-page/productsSubModal3.vue").default);
Vue.component("ProductsModalEdit", require("./components/products-page/productsModalEdit.vue").default);
// Vue.component("products-warning-modal", require("./components/products-page/wholesalerWarningModal.vue").default);
// Vue.component("products-user-balance-mobile", require("./components/products-page/userBalanceMobile.vue").default);
// Vue.component("products-user-balance", require("./components/products-page/userBalance.vue").default);
// Vue.component("products-list", require("./components/products-page/productsViewList.vue").default);
// Vue.component("products-grid", require("./components/products-page/productsViewGrid.vue").default);

/// Recurring Products Page
Vue.component("RecurProductsModal", require("./components/products-page/recurproductsModal.vue").default);
Vue.component("RecurProductsQtyErrModal", require("./components/products-page/recurproductsModalQtyErr.vue").default);
Vue.component("RecurProductsRemove", require("./components/products-page/recurproductsModalRemove.vue").default);


const products = () => import(/* webpackChunkName: "js/f/products" */ './components/products-page/index.vue');
// const prodOrderSummary = () => import(/* webpackChunkName: "js/f/prodOrderSummary" */ './components/products-page/orderSummary.vue');
// const prodModal = () => import(/* webpackChunkName: "js/f/prodModal" */ './components/products-page/productsModal.vue');
// const prodWarningModal = () => import(/* webpackChunkName: "js/f/prodWarningModal" */ './components/products-page/wholesalerWarningModal.vue');
// const prodUserBalanceMobile =() => import(/* webpackChunkName: "js/f/prodUserBalanceMobile" */'./components/products-page/userBalanceMobile.vue');
// const prodUserBalance = () => import(/* webpackChunkName: "js/f/prodUserBalance" */ './components/products-page/userBalance.vue');
// const prodlist = () => import(/* webpackChunkName: "js/f/prodlist" */ './components/products-page/productsViewList.vue');
// const prodGrid = () => import(/* webpackChunkName: "js/f/prodGrid" */ './components/products-page/productsViewGrid.vue');


//contents
// Vue.component("about-us-page", require("./components/content-pages/AboutUsPage.vue").default);
// Vue.component("faqs-page", require("./components/content-pages/FAQ.vue").default);
// Vue.component("privacy-page", require("./components/content-pages/PrivacyPage.vue").default);
// Vue.component("terms-page", require("./components/content-pages/TermsPage.vue").default);

const pgAboutUs = () => import(/* webpackChunkName: "js/f/pgAboutUs" */ './components/content-pages/AboutUsPage.vue');
const pgFAQ = () => import(/* webpackChunkName: "js/f/pgFAQ" */ './components/content-pages/FAQ.vue');
const pgPrivacy = () => import(/* webpackChunkName: "js/f/pgPrivacy" */ './components/content-pages/PrivacyPage.vue');
const pgTerms = () => import(/* webpackChunkName: "js/f/pgTerms" */ './components/content-pages/TermsPage.vue');
const delivArea = () => import(/* webpackChunkName: "js/f/pgTerms" */ './components/content-pages/DelivArea.vue');
const recurProducts = () => import(/* webpackChunkName: "js/f/pgTerms" */ './components/content-pages/RecurrProducts.vue');




///  OTHERS
// Vue.component("rewards-modal", require("./components/RewardsModal.vue").default);
// Vue.component("error-message", require("./components/ErrorMessages.vue").default);
Vue.component("users-balance", require("./components/UsersBalance.vue").default);
// Vue.component("product-cart", require("./components/cart.vue").default);

const rewardsModal = () => import(/* webpackChunkName: "js/f/rewardsModal" */ './components/RewardsModal.vue');
const errMessage = () => import(/* webpackChunkName: "js/f/errMessage" */ './components/ErrorMessages.vue');
// const usersBalance = () => import(/* webpackChunkName: "js/f/usersBalance" */ './components/UsersBalance.vue');
const productCart = () => import(/* webpackChunkName: "js/f/productCart" */ './components/cart.vue');


// /// PAUSE DEVELOPMENT
// Vue.component("chat-box", require("./components/ChatBox.vue").default);
// Vue.component("pickup-zone-modal", require("./components/ChoosePickupZoneModal.vue").default);
// Vue.component("dilvery-zone-modal", require("./components/ChooseDeliveryZoneModal.vue").default);


Vue.component("OrganizationModal", require("./components/products-page/organization-modal/index.vue").default);
Vue.component("EnterOptionCModal", require("./components/products-page/enter-optionc-modal/index.vue").default);
Vue.component("AddressStep", require("./components/products-page/organization-modal/address.vue").default);
Vue.component("OrganizationStep", require("./components/products-page/organization-modal/organization.vue").default);
Vue.component("SelectOrganizationModal", require("./components/profile-page/selectOrganizationModal.vue").default);
Vue.component("SelectOrganizationModal2", require("./components/profile-page/SelectOrganizationModal2.vue").default);
// Vue.component("dilvery-zone-modal", require("./components/ChooseDeliveryZoneModal.vue").default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: "#app",
    components: {
        'landing-page': LandingPage,
        'register-form': RegisterForm,
        'billing-form': BillingForm,

        ///Checkout Page
        'checkout-page': CheckoutPage,
        // 'cp-selected-items': ChPSelectedItems,
        // 'os-guest': ChPOSGuest,
        // 'os-sunclub': ChPOSSunclub,
        // 'os-wholesaler': ChPOSWholesaler,
        // 'guest-address-modal': ChPGaddressModal,
        // 'guest-payment-modal': ChPGpaymentModal,

        /// Orders Page
        'orders-page': OrdersPage,
        'order-products-page': OrderProductPage,

        /// Profile Page
        'user-profile-page': ProfilePage,
        // 'cancel-membership-modal': ProfCancelMembership,
        // 'user-type-component': ProfUserType,
        // 'card-holder': ProfCardHolder,
        // 'business-information': ProfBusinesInfo,

        // Referrals Page
        'referrals-page': RefferalsPage,
        'referrals-page-modal': RefferalsPageModal,

        //products page
        'products-page': products,
        // 'products-page-order-summary': prodOrderSummary,
        // 'products-page-modal': prodModal,
        // 'products-warning-modal': prodWarningModal,
        // 'products-user-balance-mobile': prodUserBalanceMobile,
        // 'products-user-balance': prodUserBalance,
        // 'products-list': prodlist,
        // 'products-grid': prodGrid,


        //contents
        'about-us-page': pgAboutUs,
        'faqs-page': pgFAQ,
        'privacy-page': pgPrivacy,
        'terms-page': pgTerms,
        'delivery-page': delivArea,
        'recurring-products': recurProducts,

        //Others
        'rewards-modal': rewardsModal,
        'error-message': errMessage,
        // 'users-balance': usersBalance,
        'product-cart': productCart,

    }

});
