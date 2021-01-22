(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var prodOrderSummary = function prodOrderSummary() {
  return __webpack_require__.e(/*! import() | js/f/prodOrderSummary */ "js/f/prodOrderSummary").then(__webpack_require__.bind(null, /*! ./orderSummary.vue */ "./resources/js/frontend/components/products-page/orderSummary.vue"));
};

var prodModal = function prodModal() {
  return __webpack_require__.e(/*! import() | js/f/prodModal */ "js/f/prodModal").then(__webpack_require__.bind(null, /*! ./productsModal.vue */ "./resources/js/frontend/components/products-page/productsModal.vue"));
};

var prodWarningModal = function prodWarningModal() {
  return __webpack_require__.e(/*! import() | js/f/prodWarningModal */ "js/f/prodWarningModal").then(__webpack_require__.bind(null, /*! ./wholesalerWarningModal.vue */ "./resources/js/frontend/components/products-page/wholesalerWarningModal.vue"));
};

var prodUserBalanceMobile = function prodUserBalanceMobile() {
  return __webpack_require__.e(/*! import() | js/f/prodUserBalanceMobile */ "js/f/prodUserBalanceMobile").then(__webpack_require__.bind(null, /*! ./userBalanceMobile.vue */ "./resources/js/frontend/components/products-page/userBalanceMobile.vue"));
};

var prodUserBalance = function prodUserBalance() {
  return __webpack_require__.e(/*! import() | js/f/prodUserBalance */ "js/f/prodUserBalance").then(__webpack_require__.bind(null, /*! ./userBalance.vue */ "./resources/js/frontend/components/products-page/userBalance.vue"));
};

var prodlist = function prodlist() {
  return __webpack_require__.e(/*! import() | js/f/prodlist */ "js/f/prodlist").then(__webpack_require__.bind(null, /*! ./productsViewList.vue */ "./resources/js/frontend/components/products-page/productsViewList.vue"));
};

var prodGrid = function prodGrid() {
  return __webpack_require__.e(/*! import() | js/f/prodGrid */ "js/f/prodGrid").then(__webpack_require__.bind(null, /*! ./productsViewGrid.vue */ "./resources/js/frontend/components/products-page/productsViewGrid.vue"));
}; // import OrganizationModal from "./organization-modal/index"


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'products-page-order-summary': prodOrderSummary,
    'products-page-modal': prodModal,
    'products-warning-modal': prodWarningModal,
    'products-user-balance-mobile': prodUserBalanceMobile,
    'products-user-balance': prodUserBalance,
    'products-list': prodlist,
    'products-grid': prodGrid // OrganizationModal,

  },
  //   props: {
  //     propproducts: Array,
  //     propcategories: Array
  //   },
  props: ["propproducts", "propcategories", "guest", "user", "wholesaler_minimum_order_amount"],
  data: function data() {
    return {
      search: "",
      display: "box",
      products: [],
      cart: [],
      categories: [],
      selectedCategory: "All",
      image_sample: "/img/sunfarmacy/products/Group17.png",
      searchedProducts: [],
      laravelData: {},
      category: "All",
      name: "",
      btn: "search",
      org_id: null,
      org_name: null
    };
  },
  created: function created() {
    // this.getProducts();
    LoadingOverlay();
    this.getResults();
    var categories = this.propcategories;
    this.categories = categories;
  },
  mounted: function mounted() {//   $("#guestSelectingOrganizationModal").modal("show");
    // $("#addToCartModal").on("shown.bs.modal", function () {
    //   $("body.modal-open").removeAttr("style");
    //   $("sticky-top").removeAttr("style");
    // });
  },
  methods: {
    searchBarChange: function searchBarChange() {
      this.btn = "search"; //   console.log(this.btn);
    },
    removeSearchFilter: function removeSearchFilter() {
      this.name = "";
      this.search = "";
      this.getResults();
      this.btn = "search";
    },
    removeCategoryFilter: function removeCategoryFilter() {
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    resetFilter: function resetFilter() {
      this.name = "";
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    categoryChange: function categoryChange(data) {
      LoadingOverlay();
      window.scrollTo(0, 0);

      if (data === "All") {
        this.category = "All";
        this.getResults();
      } else {
        this.category = data.id;
        this.getResults();
      }
    },
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var param;

      if (this.name != "" && this.category != "All") {
        param = {
          category: this.category,
          name: this.name,
          page: page,
          org_id: this.org_id
        };
      } else if (this.name != "") {
        param = {
          name: this.name,
          page: page,
          org_id: this.org_id
        };
      } else if (this.category != "All") {
        param = {
          category: this.category,
          page: page,
          org_id: this.org_id
        };
      } else {
        param = {
          page: page,
          org_id: this.org_id
        };
      }

      axios({
        method: "get",
        url: "/data/products",
        params: param
      }).then(function (res) {
        _this.laravelData = res.data;
        var products = res.data.data; // products.forEach((product) => {
        //   product.selected = false;
        //   product.qty = 1;
        // });

        console.log(); // this.products = products;

        _this.getCart(products);

        LoadingOverlayHide();
      });
    },
    getCart: function getCart(data) {
      var _this2 = this;

      if (this.ifCartExpired()) {
        // console.log("expired");
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.products = data;
      } else {
        // console.log("not expired");
        var lastcart = JSON.parse(localStorage.getItem("cart") || "null") || [];
        this.cart = lastcart;
        localStorage.setItem("cart_badge", this.cart.length);
        data.forEach(function (product) {
          _this2.cart.forEach(function (cart) {
            if (product.id == cart.id) {
              product.selected = true;
            }
          });
        });
        this.products = data;
      }
    },
    updateProductPrice: function updateProductPrice(product) {
      var customer_role = this.user.customer_role;
      var price = customer_role == 2 ? product.member_price : customer_role == 3 ? product.wholesale_price : product.price;
      return this.displayNumberWithComma(price);
    },
    searchProduct: function searchProduct() {
      LoadingOverlay();
      window.scrollTo(0, 0);
      this.btn = "clear";
      this.name = this.search;
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    showAddToCartModal: function showAddToCartModal(data) {
      this.$refs.productmodal.product = data;
      this.$refs.productmodal.category = data.category;
      this.$refs.productmodal.sub_category = data.sub_category;
      this.$refs.productmodal.customer_role = this.user.customer_role;
      $("#addToCartModal").modal("show");
    },
    setDisplay: function setDisplay(data) {
      this.display = data;
    },
    removeItemInCart: function removeItemInCart(data) {
      this.products.forEach(function (product) {
        if (product.id == data.id) {
          product.selected = false;
          product.qty = 1;
        }
      });
      this.cart.splice(this.cart.findIndex(function (i) {
        return i.id === data.id;
      }), 1);
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cart_badge", this.cart.length);
      this.$events.fire("updateCartBadge", "update cart");
      this.setCartExpiry(86400000); // 1 day miliseconds
    },
    addtoCart: function addtoCart(data) {
      data.selected = true;

      if (data.selected == true) {
        this.cart.push(data);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } else {
        this.cart.splice(this.cart.findIndex(function (i) {
          return i.id === data.id;
        }), 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }

      localStorage.setItem("cart_badge", this.cart.length);
      this.setCartExpiry(86400000); // 1 day miliseconds
      //   this.setCartExpiry(40000);

      this.$events.fire("updateCartBadge", "update cart");
      return data;
    },
    setCartExpiry: function setCartExpiry(ttl) {
      var now = new Date();
      var expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },
    ifCartExpired: function ifCartExpired() {
      var itemStr = localStorage.getItem("cart_expiry");

      if (!itemStr) {
        return true;
      }

      var item = JSON.parse(itemStr);
      var now = new Date();

      if (now.getTime() > item) {
        return true;
      }

      return false;
    },
    updateQty: function updateQty(data) {
      if (data.selected == true) {
        this.cart.push(data);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }

      localStorage.setItem("cart_badge", this.cart.length);
      this.setCartExpiry(86400000); // 1 day miliseconds

      return data;
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-f-margin[data-v-3187bef1] {\n  padding-right: 100px;\n  padding-left: 1000px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) and (max-width: 1455px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 25px;\n    padding-left: 0px;\n}\n}\n@media (min-width: 1456px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 50px;\n    padding-left: 0px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1570px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 50px;\n    padding-left: 50px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1600px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 75px;\n    padding-left: 75px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1700px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 100px;\n    padding-left: 100px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1750px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 125px;\n    padding-left: 125px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1800px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 150px;\n    padding-left: 150px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1850px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 165px;\n    padding-left: 165px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 2000px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 175px;\n    padding-left: 175px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.con-f-margin[data-v-3187bef1] {\n    margin-top: -20px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n.margin-content-2[data-v-3187bef1] {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.margin-content-2[data-v-3187bef1] {\n    margin-top: 0;\n}\n}\n.filter-btn[data-v-3187bef1] {\n  padding: 0px 5px;\n  font-size: 13px;\n  border-radius: 1rem;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container[data-v-3187bef1] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 93px;\n    padding-top: 10px;\n    padding-bottom: 5px;\n    background-color: white;\n    z-index: 4;\n}\n}\n.search-container .search-inpt[data-v-3187bef1] {\n  border-radius: 100px 0px 0px 100px;\n  border: 1px solid #339f25;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-inpt[data-v-3187bef1] {\n    height: 30px;\n}\n}\n.search-container .search-btn[data-v-3187bef1] {\n  border-radius: 0px 100px 100px 0px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-btn[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n.search-container .search-btn-2[data-v-3187bef1] {\n  border-radius: 0px 100px 100px 0px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-btn-2[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-cat-cont[data-v-3187bef1] {\n    margin-bottom: 0px;\n}\n}\n.search-container .search-cat-cont .search-cat[data-v-3187bef1] {\n  border-radius: 100px;\n  border: 1px solid #339f25;\n  padding: 0px 10px 0px 10px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-cat-cont .search-cat[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n.search-container .display-cont #display-list.btn[data-v-3187bef1] {\n  border-radius: 48%;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont #display-list.btn[data-v-3187bef1] {\n    padding: 1px 5px 1px 5px;\n}\n}\n.search-container .display-cont #dispaly-grid.btn[data-v-3187bef1] {\n  border-radius: 48%;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont #dispaly-grid.btn[data-v-3187bef1] {\n    padding: 1px 5px 1px 5px;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont[data-v-3187bef1] {\n    height: 30px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "margin-content-2" },
    [
      _c("products-user-balance-mobile", {
        attrs: { guest: _vm.guest, user: _vm.user }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container search-container" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { class: _vm.display == "box" ? "col-md-8 col-lg-9" : "col-md-8" },
            [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-4 col-md-12 col-sm-12 col-12" },
                  [
                    _c("div", { staticClass: "input-group mb-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.search,
                            expression: "search"
                          }
                        ],
                        staticClass: "form-control search-inpt",
                        attrs: {
                          type: "text",
                          placeholder: "Search",
                          "aria-describedby": "button-addon2"
                        },
                        domProps: { value: _vm.search },
                        on: {
                          keyup: [
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "enter",
                                  13,
                                  $event.key,
                                  "Enter"
                                )
                              ) {
                                return null
                              }
                              return _vm.searchProduct()
                            },
                            function($event) {
                              if (
                                !$event.type.indexOf("key") &&
                                _vm._k(
                                  $event.keyCode,
                                  "delete",
                                  [8, 46],
                                  $event.key,
                                  ["Backspace", "Delete", "Del"]
                                )
                              ) {
                                return null
                              }
                              return _vm.searchBarChange()
                            }
                          ],
                          keypress: function($event) {
                            return _vm.searchBarChange()
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.search = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        this.btn === "search"
                          ? _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-success search-btn",
                                attrs: { type: "button", id: "button-addon2" },
                                on: {
                                  click: function($event) {
                                    return _vm.searchProduct()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-search",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          : _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-outline-success search-btn-2",
                                attrs: { type: "button", id: "button-addon2" },
                                on: {
                                  click: function($event) {
                                    return _vm.removeSearchFilter()
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-times-circle",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4 col-md-9 col-sm-9 col-9" }, [
                  _c("div", { staticClass: "form-group search-cat-cont" }, [
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.selectedCategory,
                            expression: "selectedCategory"
                          }
                        ],
                        staticClass: "form-control search-cat",
                        on: {
                          change: [
                            function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.selectedCategory = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            },
                            function($event) {
                              return _vm.categoryChange(_vm.selectedCategory)
                            }
                          ]
                        }
                      },
                      [
                        _c(
                          "option",
                          { attrs: { disabled: "", selected: "" } },
                          [_vm._v("Choose Categories")]
                        ),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "All" } }, [
                          _vm._v("All")
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.categories, function(item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item } },
                            [_vm._v(_vm._s(item.name))]
                          )
                        })
                      ],
                      2
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-4 col-md-3 col-sm-3 col-3" }, [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-row-reverse display-cont" },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-success",
                          style:
                            _vm.display == "box"
                              ? "background-color:#339f25; color:white;"
                              : "",
                          attrs: { id: "dispaly-grid" },
                          on: {
                            click: function($event) {
                              return _vm.setDisplay("box")
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-th",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-outline-success mr-2",
                          style:
                            _vm.display == "list"
                              ? "background-color:#339f25; color:white;"
                              : "",
                          attrs: { id: "display-list" },
                          on: {
                            click: function($event) {
                              return _vm.setDisplay("list")
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-th-list",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-left mt-1" }, [
                this.name != ""
                  ? _c("span", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-sm filter-btn",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.removeSearchFilter()
                            }
                          }
                        },
                        [
                          _vm._v(
                            '\n              "' +
                              _vm._s(_vm.name) +
                              '"\n              '
                          ),
                          _c("i", { staticClass: "fas fa-times-circle" })
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                this.selectedCategory != "All"
                  ? _c("span", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-sm filter-btn",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.removeCategoryFilter()
                            }
                          }
                        },
                        [
                          _vm._v(
                            '\n              "' +
                              _vm._s(_vm.selectedCategory.name) +
                              '"\n              '
                          ),
                          _c("i", { staticClass: "fas fa-times-circle" })
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { class: _vm.display == "box" ? "col-md-4 col-lg-3" : "col-md-4" },
            [
              _c("h6", { staticClass: "text-success" }, [
                _vm._v(_vm._s(_vm.org_name))
              ]),
              _vm._v(" "),
              _c("products-user-balance", {
                attrs: { guest: _vm.guest, user: _vm.user }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          class:
            _vm.display == "box" ? "container-fluid con-f-margin" : "container"
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                class:
                  _vm.display == "box"
                    ? "col-md-8 col-lg-9 p-0"
                    : "col-md-8 p-0"
              },
              [
                _vm.products.length == 0
                  ? _c("div", { staticClass: "container" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-12" }, [
                          _c("div", { staticClass: "text-center mt-5" }, [
                            this.name != "" && this.selectedCategory != "All"
                              ? _c("div", [
                                  _vm._v(
                                    '\n                  No Products Found with "' +
                                      _vm._s(this.name) +
                                      '" and Category "' +
                                      _vm._s(this.selectedCategory.name) +
                                      '".\n                  '
                                  ),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-primary",
                                      on: {
                                        click: function($event) {
                                          return _vm.resetFilter()
                                        }
                                      }
                                    },
                                    [
                                      _c("u", [
                                        _vm._v(
                                          "Reset Filter / Return to Products"
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              : this.name != ""
                              ? _c("div", [
                                  _vm._v(
                                    '\n                  No Products Found with "' +
                                      _vm._s(this.name) +
                                      '".\n                  '
                                  ),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-primary",
                                      on: {
                                        click: function($event) {
                                          return _vm.resetFilter()
                                        }
                                      }
                                    },
                                    [
                                      _c("u", [
                                        _vm._v(
                                          "Reset Filter / Return to Products"
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              : this.category != "All"
                              ? _c("div", [
                                  _vm._v(
                                    '\n                  No Products Found with Category "' +
                                      _vm._s(this.selectedCategory.name) +
                                      '".\n                  '
                                  ),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-primary",
                                      on: {
                                        click: function($event) {
                                          return _vm.resetFilter()
                                        }
                                      }
                                    },
                                    [
                                      _c("u", [
                                        _vm._v(
                                          "Reset Filter / Return to Products"
                                        )
                                      ])
                                    ]
                                  )
                                ])
                              : _c("div", [_vm._v("No Products Yet.")])
                          ])
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("products-list", {
                  attrs: {
                    products: _vm.products,
                    display: _vm.display,
                    customer_role: _vm.user.customer_role
                  }
                }),
                _vm._v(" "),
                _c("products-grid", {
                  ref: "productsgrid",
                  attrs: {
                    products: _vm.products,
                    display: _vm.display,
                    customer_role: _vm.user.customer_role
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("pagination", {
                  attrs: {
                    data: _vm.laravelData,
                    limit: 5,
                    size: "small",
                    align: "center"
                  },
                  on: { "pagination-change-page": _vm.getResults }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                class:
                  _vm.display == "box"
                    ? "col-md-4 col-lg-3 p-0"
                    : "col-md-4 p-0"
              },
              [
                _c("products-page-order-summary", {
                  attrs: {
                    cart: _vm.cart,
                    customer_role: _vm.user.customer_role,
                    minimum: _vm.wholesaler_minimum_order_amount
                  }
                })
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          class:
            _vm.display == "box" ? "container-fluid con-f-margin" : "container"
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col" },
              [
                _c("products-page-modal", { ref: "productmodal" }),
                _vm._v(" "),
                _c("products-warning-modal", {
                  attrs: { minimum: _vm.wholesaler_minimum_order_amount }
                }),
                _vm._v(" "),
                _c("EnterOptionCModal", {
                  attrs: { guest: _vm.guest, user: _vm.user }
                })
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3187bef1&scoped=true& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3187bef1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/products-page/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3187bef1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/ZjMyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT9lYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2MxZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/NTMxNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT84ODIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2UxOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDVDtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDamdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEwYyxDQUFnQiwyYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9wcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbkBpbXBvcnQgXCJyZXNvdXJjZXMvc2Fzcy9taXhpbnNcIjtcblxuLmNvbi1mLW1hcmdpbiB7XG4gIC8vIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbiAgLy8gICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG5cbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTAwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE0NTVweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1NnB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTU3MHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNzAwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNzUwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxODAwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxODUwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2NXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cbn1cblxuLm1hcmdpbi1jb250ZW50LTIge1xuICBtYXJnaW4tdG9wOiAzcmVtO1xuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLmZpbHRlci1idG4ge1xuICBwYWRkaW5nOiAwcHggNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8vICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICBAaW5jbHVkZSBtb2JpbGUge1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogOTNweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8vIHotaW5kZXg6IDI7XG4gICAgei1pbmRleDogNDtcbiAgfVxuICAuc2VhcmNoLWlucHQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAwcHggMTAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuICAuc2VhcmNoLWJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cbiAgfVxuICAuc2VhcmNoLWJ0bi0yIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAwcHggMTAwcHggMHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5zZWFyY2gtY2F0LWNvbnQge1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIC5zZWFyY2gtY2F0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpc3BsYXktY29udCB7XG4gICAgI2Rpc3BsYXktbGlzdC5idG4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogNDglO1xuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAjZGlzcGFseS1ncmlkLmJ0biB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0OCU7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG48L3N0eWxlPlxuXG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm1hcmdpbi1jb250ZW50LTJcIj5cbiAgICA8cHJvZHVjdHMtdXNlci1iYWxhbmNlLW1vYmlsZSA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvcHJvZHVjdHMtdXNlci1iYWxhbmNlLW1vYmlsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJkaXNwbGF5ID09ICdib3gnPyAnY29sLW1kLTggY29sLWxnLTknIDogJ2NvbC1tZC04J1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC0xMlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VhcmNoLWlucHRcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICB2LW9uOmtleXVwLmVudGVyPVwic2VhcmNoUHJvZHVjdCgpXCJcbiAgICAgICAgICAgICAgICAgIHYtb246a2V5dXAuZGVsZXRlPVwic2VhcmNoQmFyQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgICAgQGtleXByZXNzPVwic2VhcmNoQmFyQ2hhbmdlKClcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGhpcy5idG4gPT09ICdzZWFyY2gnXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBzZWFyY2gtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlYXJjaFByb2R1Y3QoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG4tMlwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBpZD1cImJ1dHRvbi1hZGRvbjJcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWFyY2hGaWx0ZXIoKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC05IGNvbC1zbS05IGNvbC05XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHNlYXJjaC1jYXQtY29udFwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHNlYXJjaC1jYXRcIlxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImNhdGVnb3J5Q2hhbmdlKHNlbGVjdGVkQ2F0ZWdvcnkpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPkNob29zZSBDYXRlZ29yaWVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiaXRlbSBpbiBjYXRlZ29yaWVzXCIgOmtleT1cIml0ZW0uaWRcIiA6dmFsdWU9XCJpdGVtXCI+e3sgaXRlbS5uYW1lIH19PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTMgY29sLXNtLTMgY29sLTNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGRpc3BsYXktY29udFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGlkPVwiZGlzcGFseS1ncmlkXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNldERpc3BsYXkoJ2JveCcpXCJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImRpc3BsYXkgPT0gJ2JveCc/ICdiYWNrZ3JvdW5kLWNvbG9yOiMzMzlmMjU7IGNvbG9yOndoaXRlOycgOiAnJ1wiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRoXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGlkPVwiZGlzcGxheS1saXN0XCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNldERpc3BsYXkoJ2xpc3QnKVwiXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XCJkaXNwbGF5ID09ICdsaXN0Jz8gJ2JhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7JyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXItMlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aC1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWxlZnQgbXQtMVwiPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMubmFtZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlU2VhcmNoRmlsdGVyKClcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXCJ7e25hbWV9fVwiXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgIT0gJ0FsbCdcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZUNhdGVnb3J5RmlsdGVyKClcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXCJ7e3NlbGVjdGVkQ2F0ZWdvcnkubmFtZX19XCJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtNCBjb2wtbGctMycgOiAnY29sLW1kLTQnXCI+XG4gICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3tvcmdfbmFtZX19PC9oNj5cbiAgICAgICAgICA8cHJvZHVjdHMtdXNlci1iYWxhbmNlIDpndWVzdD1cImd1ZXN0XCIgOnVzZXI9XCJ1c2VyXCI+PC9wcm9kdWN0cy11c2VyLWJhbGFuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb250YWluZXItZmx1aWQgY29uLWYtbWFyZ2luJzonY29udGFpbmVyJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8IS0tIFByb2R1Y3RzIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtOCBjb2wtbGctOSBwLTAnIDogJ2NvbC1tZC04IHAtMCdcIj5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJwcm9kdWN0cy5sZW5ndGggPT0gMFwiIGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiKHRoaXMubmFtZSAhPSAnJyAmJiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgIT0gJ0FsbCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCJ7e3RoaXMubmFtZX19XCIgYW5kIENhdGVnb3J5IFwie3t0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZX19XCIuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIiBAY2xpY2s9XCJyZXNldEZpbHRlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHU+UmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzPC91PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJ0aGlzLm5hbWUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBcInt7dGhpcy5uYW1lfX1cIi5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcHJpbWFyeVwiIEBjbGljaz1cInJlc2V0RmlsdGVyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dT5SZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHM8L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cInRoaXMuY2F0ZWdvcnkgIT0gJ0FsbCdcIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBDYXRlZ29yeSBcInt7dGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWV9fVwiLlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgQGNsaWNrPVwicmVzZXRGaWx0ZXIoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1PlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0czwvdT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPk5vIFByb2R1Y3RzIFlldC48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxwcm9kdWN0cy1saXN0XG4gICAgICAgICAgICB2LWJpbmQ6cHJvZHVjdHM9XCJwcm9kdWN0c1wiXG4gICAgICAgICAgICA6ZGlzcGxheT1cImRpc3BsYXlcIlxuICAgICAgICAgICAgOmN1c3RvbWVyX3JvbGU9XCJ1c2VyLmN1c3RvbWVyX3JvbGVcIlxuICAgICAgICAgID48L3Byb2R1Y3RzLWxpc3Q+XG5cbiAgICAgICAgICA8cHJvZHVjdHMtZ3JpZFxuICAgICAgICAgICAgdi1iaW5kOnByb2R1Y3RzPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgOmRpc3BsYXk9XCJkaXNwbGF5XCJcbiAgICAgICAgICAgIHJlZj1cInByb2R1Y3RzZ3JpZFwiXG4gICAgICAgICAgICA6Y3VzdG9tZXJfcm9sZT1cInVzZXIuY3VzdG9tZXJfcm9sZVwiXG4gICAgICAgICAgPjwvcHJvZHVjdHMtZ3JpZD5cblxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxwYWdpbmF0aW9uXG4gICAgICAgICAgICA6ZGF0YT1cImxhcmF2ZWxEYXRhXCJcbiAgICAgICAgICAgIDpsaW1pdD1cIjVcIlxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiXG4gICAgICAgICAgPjwvcGFnaW5hdGlvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSBPcmRlciBTVU1NQVJZIC0tPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtNCBjb2wtbGctMyBwLTAnIDogJ2NvbC1tZC00IHAtMCdcIj5cbiAgICAgICAgICA8cHJvZHVjdHMtcGFnZS1vcmRlci1zdW1tYXJ5XG4gICAgICAgICAgICA6Y2FydD1cImNhcnRcIlxuICAgICAgICAgICAgOmN1c3RvbWVyX3JvbGU9XCJ1c2VyLmN1c3RvbWVyX3JvbGVcIlxuICAgICAgICAgICAgOm1pbmltdW09XCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCJcbiAgICAgICAgICA+PC9wcm9kdWN0cy1wYWdlLW9yZGVyLXN1bW1hcnk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb250YWluZXItZmx1aWQgY29uLWYtbWFyZ2luJzonY29udGFpbmVyJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPHByb2R1Y3RzLXBhZ2UtbW9kYWwgcmVmPVwicHJvZHVjdG1vZGFsXCI+PC9wcm9kdWN0cy1wYWdlLW1vZGFsPlxuICAgICAgICAgIDxwcm9kdWN0cy13YXJuaW5nLW1vZGFsIDptaW5pbXVtPVwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiPjwvcHJvZHVjdHMtd2FybmluZy1tb2RhbD5cbiAgICAgICAgICA8IS0tIDxPcmdhbml6YXRpb25Nb2RhbCA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvT3JnYW5pemF0aW9uTW9kYWw+IC0tPlxuICAgICAgICAgIDxFbnRlck9wdGlvbkNNb2RhbCA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvRW50ZXJPcHRpb25DTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuY29uc3QgcHJvZE9yZGVyU3VtbWFyeSA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZE9yZGVyU3VtbWFyeVwiICovIFwiLi9vcmRlclN1bW1hcnkudnVlXCJcbiAgKTtcbmNvbnN0IHByb2RNb2RhbCA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZE1vZGFsXCIgKi8gXCIuL3Byb2R1Y3RzTW9kYWwudnVlXCJcbiAgKTtcbmNvbnN0IHByb2RXYXJuaW5nTW9kYWwgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL3Byb2RXYXJuaW5nTW9kYWxcIiAqLyBcIi4vd2hvbGVzYWxlcldhcm5pbmdNb2RhbC52dWVcIlxuICApO1xuY29uc3QgcHJvZFVzZXJCYWxhbmNlTW9iaWxlID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kVXNlckJhbGFuY2VNb2JpbGVcIiAqLyBcIi4vdXNlckJhbGFuY2VNb2JpbGUudnVlXCJcbiAgKTtcbmNvbnN0IHByb2RVc2VyQmFsYW5jZSA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZFVzZXJCYWxhbmNlXCIgKi8gXCIuL3VzZXJCYWxhbmNlLnZ1ZVwiXG4gICk7XG5jb25zdCBwcm9kbGlzdCA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZGxpc3RcIiAqLyBcIi4vcHJvZHVjdHNWaWV3TGlzdC52dWVcIlxuICApO1xuY29uc3QgcHJvZEdyaWQgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL3Byb2RHcmlkXCIgKi8gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlXCJcbiAgKTtcblxuLy8gaW1wb3J0IE9yZ2FuaXphdGlvbk1vZGFsIGZyb20gXCIuL29yZ2FuaXphdGlvbi1tb2RhbC9pbmRleFwiXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgICdwcm9kdWN0cy1wYWdlLW9yZGVyLXN1bW1hcnknOiBwcm9kT3JkZXJTdW1tYXJ5LFxuICAgICdwcm9kdWN0cy1wYWdlLW1vZGFsJzogcHJvZE1vZGFsLFxuICAgICdwcm9kdWN0cy13YXJuaW5nLW1vZGFsJzogcHJvZFdhcm5pbmdNb2RhbCxcbiAgICAncHJvZHVjdHMtdXNlci1iYWxhbmNlLW1vYmlsZSc6IHByb2RVc2VyQmFsYW5jZU1vYmlsZSxcbiAgICAncHJvZHVjdHMtdXNlci1iYWxhbmNlJzogcHJvZFVzZXJCYWxhbmNlLFxuICAgICdwcm9kdWN0cy1saXN0JzogcHJvZGxpc3QsXG4gICAgJ3Byb2R1Y3RzLWdyaWQnOiBwcm9kR3JpZCxcbiAgICAvLyBPcmdhbml6YXRpb25Nb2RhbCxcbiAgfSxcbiAgLy8gICBwcm9wczoge1xuICAvLyAgICAgcHJvcHByb2R1Y3RzOiBBcnJheSxcbiAgLy8gICAgIHByb3BjYXRlZ29yaWVzOiBBcnJheVxuICAvLyAgIH0sXG4gIHByb3BzOiBbXG4gICAgXCJwcm9wcHJvZHVjdHNcIixcbiAgICBcInByb3BjYXRlZ29yaWVzXCIsXG4gICAgXCJndWVzdFwiLFxuICAgIFwidXNlclwiLFxuICAgIFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxuICBdLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIGRpc3BsYXk6IFwiYm94XCIsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBjYXJ0OiBbXSxcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogXCJBbGxcIixcbiAgICAgIGltYWdlX3NhbXBsZTogXCIvaW1nL3N1bmZhcm1hY3kvcHJvZHVjdHMvR3JvdXAxNy5wbmdcIixcbiAgICAgIHNlYXJjaGVkUHJvZHVjdHM6IFtdLFxuICAgICAgbGFyYXZlbERhdGE6IHt9LFxuICAgICAgY2F0ZWdvcnk6IFwiQWxsXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgYnRuOiBcInNlYXJjaFwiLFxuICAgICAgb3JnX2lkOm51bGwsXG4gICAgICBvcmdfbmFtZTpudWxsLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSB0aGlzLnByb3BjYXRlZ29yaWVzO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gICAkKFwiI2d1ZXN0U2VsZWN0aW5nT3JnYW5pemF0aW9uTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIC8vICQoXCIjYWRkVG9DYXJ0TW9kYWxcIikub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAkKFwiYm9keS5tb2RhbC1vcGVuXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAvLyAgICQoXCJzdGlja3ktdG9wXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAvLyB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2VhcmNoQmFyQ2hhbmdlKCkge1xuICAgICAgdGhpcy5idG4gPSBcInNlYXJjaFwiO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmJ0bik7XG4gICAgfSxcbiAgICByZW1vdmVTZWFyY2hGaWx0ZXIoKSB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgICB0aGlzLmJ0biA9IFwic2VhcmNoXCI7XG4gICAgfSxcbiAgICByZW1vdmVDYXRlZ29yeUZpbHRlcigpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gXCJBbGxcIjtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG4gICAgcmVzZXRGaWx0ZXIoKSB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgfSxcbiAgICBjYXRlZ29yeUNoYW5nZShkYXRhKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgaWYgKGRhdGEgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICBsZXQgcGFyYW07XG4gICAgICBpZiAodGhpcy5uYW1lICE9IFwiXCIgJiYgdGhpcy5jYXRlZ29yeSAhPSBcIkFsbFwiKSB7XG4gICAgICAgIHBhcmFtID0ge1xuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZSAhPSBcIlwiKSB7XG4gICAgICAgIHBhcmFtID0ge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2F0ZWdvcnkgIT0gXCJBbGxcIikge1xuICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBcIi9kYXRhL3Byb2R1Y3RzXCIsXG4gICAgICAgIHBhcmFtczogcGFyYW0sXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5sYXJhdmVsRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBsZXQgcHJvZHVjdHMgPSByZXMuZGF0YS5kYXRhO1xuXG4gICAgICAgIC8vIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgLy8gICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vICAgcHJvZHVjdC5xdHkgPSAxO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygpO1xuICAgICAgICAvLyB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgIHRoaXMuZ2V0Q2FydChwcm9kdWN0cyk7XG4gICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldENhcnQoZGF0YSkge1xuICAgICAgaWYgKHRoaXMuaWZDYXJ0RXhwaXJlZCgpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhwaXJlZFwiKTtcbiAgICAgICAgdGhpcy5jYXJ0ID0gW107XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm90IGV4cGlyZWRcIik7XG4gICAgICAgIGxldCBsYXN0Y2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpIHx8IFwibnVsbFwiKSB8fCBbXTtcblxuICAgICAgICB0aGlzLmNhcnQgPSBsYXN0Y2FydDtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PSBjYXJ0LmlkKSB7XG4gICAgICAgICAgICAgIHByb2R1Y3Quc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlUHJvZHVjdFByaWNlKHByb2R1Y3QpIHtcbiAgICAgIGxldCBjdXN0b21lcl9yb2xlID0gdGhpcy51c2VyLmN1c3RvbWVyX3JvbGU7XG4gICAgICBsZXQgcHJpY2UgPVxuICAgICAgICBjdXN0b21lcl9yb2xlID09IDJcbiAgICAgICAgICA/IHByb2R1Y3QubWVtYmVyX3ByaWNlXG4gICAgICAgICAgOiBjdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICA/IHByb2R1Y3Qud2hvbGVzYWxlX3ByaWNlXG4gICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheU51bWJlcldpdGhDb21tYShwcmljZSk7XG4gICAgfSxcblxuICAgIHNlYXJjaFByb2R1Y3QoKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgdGhpcy5idG4gPSBcImNsZWFyXCI7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLnNlYXJjaDtcbiAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gXCJBbGxcIjtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG5cbiAgICBzaG93QWRkVG9DYXJ0TW9kYWwoZGF0YSkge1xuICAgICAgdGhpcy4kcmVmcy5wcm9kdWN0bW9kYWwucHJvZHVjdCA9IGRhdGE7XG4gICAgICB0aGlzLiRyZWZzLnByb2R1Y3Rtb2RhbC5jYXRlZ29yeSA9IGRhdGEuY2F0ZWdvcnk7XG4gICAgICB0aGlzLiRyZWZzLnByb2R1Y3Rtb2RhbC5zdWJfY2F0ZWdvcnkgPSBkYXRhLnN1Yl9jYXRlZ29yeTtcbiAgICAgIHRoaXMuJHJlZnMucHJvZHVjdG1vZGFsLmN1c3RvbWVyX3JvbGUgPSB0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZTtcbiAgICAgICQoXCIjYWRkVG9DYXJ0TW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIH0sXG5cbiAgICBzZXREaXNwbGF5KGRhdGEpIHtcbiAgICAgIHRoaXMuZGlzcGxheSA9IGRhdGE7XG4gICAgfSxcblxuICAgIHJlbW92ZUl0ZW1JbkNhcnQoZGF0YSkge1xuICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0LmlkID09IGRhdGEuaWQpIHtcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgcHJvZHVjdC5xdHkgPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FydC5zcGxpY2UoXG4gICAgICAgIHRoaXMuY2FydC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gaS5pZCA9PT0gZGF0YS5pZDtcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInVwZGF0ZUNhcnRCYWRnZVwiLCBcInVwZGF0ZSBjYXJ0XCIpO1xuICAgICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTsgLy8gMSBkYXkgbWlsaXNlY29uZHNcbiAgICB9LFxuXG4gICAgYWRkdG9DYXJ0KGRhdGEpIHtcbiAgICAgIGRhdGEuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgaWYgKGRhdGEuc2VsZWN0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXJ0LnNwbGljZShcbiAgICAgICAgICB0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaS5pZCA9PT0gZGF0YS5pZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgICk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcbiAgICAgIH1cblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuICAgICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTsgLy8gMSBkYXkgbWlsaXNlY29uZHNcbiAgICAgIC8vICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDQwMDAwKTtcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwidXBkYXRlQ2FydEJhZGdlXCIsIFwidXBkYXRlIGNhcnRcIik7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuXG4gICAgc2V0Q2FydEV4cGlyeSh0dGwpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZXhwaXJ5ID0gbm93LmdldFRpbWUoKSArIHR0bDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcbiAgICB9LFxuXG4gICAgaWZDYXJ0RXhwaXJlZCgpIHtcbiAgICAgIGNvbnN0IGl0ZW1TdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRfZXhwaXJ5XCIpO1xuICAgICAgaWYgKCFpdGVtU3RyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbVN0cik7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKG5vdy5nZXRUaW1lKCkgPiBpdGVtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGVRdHkoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuc2VsZWN0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuICAgICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTsgLy8gMSBkYXkgbWlsaXNlY29uZHNcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMDBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDU1cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDU2cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuLmNvbi1mLW1hcmdpbltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE3NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuLm1hcmdpbi1jb250ZW50LTJbZGF0YS12LTMxODdiZWYxXSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4ubWFyZ2luLWNvbnRlbnQtMltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxufVxcbi5maWx0ZXItYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXJbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA5M3B4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMHB4IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udCAuc2VhcmNoLWNhdFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtY2F0LWNvbnQgLnNlYXJjaC1jYXRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udCAjZGlzcGxheS1saXN0LmJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQ4JTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwbGF5LWxpc3QuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwYWx5LWdyaWQuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNDglO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5kaXNwbGF5LWNvbnQgI2Rpc3BhbHktZ3JpZC5idG5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwibWFyZ2luLWNvbnRlbnQtMlwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJwcm9kdWN0cy11c2VyLWJhbGFuY2UtbW9iaWxlXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZ3Vlc3Q6IF92bS5ndWVzdCwgdXNlcjogX3ZtLnVzZXIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgc2VhcmNoLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBjbGFzczogX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29sLW1kLTggY29sLWxnLTlcIiA6IFwiY29sLW1kLThcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogXCJidXR0b24tYWRkb24yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5dXA6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoUHJvZHVjdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5rZXlDb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzgsIDQ2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcIkJhY2tzcGFjZVwiLCBcIkRlbGV0ZVwiLCBcIkRlbFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoQmFyQ2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaEJhckNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuID09PSBcInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiYnV0dG9uLWFkZG9uMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWFyY2hQcm9kdWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBzZWFyY2gtYnRuLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiYnV0dG9uLWFkZG9uMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVTZWFyY2hGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTkgY29sLXNtLTkgY29sLTlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgc2VhcmNoLWNhdC1jb250XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkQ2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZENhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWFyY2gtY2F0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkQ2F0ZWdvcnkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYXRlZ29yeUNoYW5nZShfdm0uc2VsZWN0ZWRDYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiLCBzZWxlY3RlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgQ2F0ZWdvcmllc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJBbGxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWxsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGl0ZW0uaWQsIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTMgY29sLXNtLTMgY29sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1yb3ctcmV2ZXJzZSBkaXNwbGF5LWNvbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFja2dyb3VuZC1jb2xvcjojMzM5ZjI1OyBjb2xvcjp3aGl0ZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkaXNwYWx5LWdyaWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0RGlzcGxheShcImJveFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXkgPT0gXCJsaXN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWNrZ3JvdW5kLWNvbG9yOiMzMzlmMjU7IGNvbG9yOndoaXRlO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRpc3BsYXktbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREaXNwbGF5KFwibGlzdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aC1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZWZ0IG10LTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lICE9IFwiXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmaWx0ZXItYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVNlYXJjaEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiXFxuICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aW1lcy1jaXJjbGVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgIT0gXCJBbGxcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlQ2F0ZWdvcnlGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4gICAgICAgICAgICAgIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiXFxuICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aW1lcy1jaXJjbGVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBjbGFzczogX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29sLW1kLTQgY29sLWxnLTNcIiA6IFwiY29sLW1kLTRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm9yZ19uYW1lKSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtdXNlci1iYWxhbmNlXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBndWVzdDogX3ZtLmd1ZXN0LCB1c2VyOiBfdm0udXNlciB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiID8gXCJjb250YWluZXItZmx1aWQgY29uLWYtbWFyZ2luXCIgOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJjb2wtbWQtOCBjb2wtbGctOSBwLTBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiY29sLW1kLTggcC0wXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5wcm9kdWN0cy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lICE9IFwiXCIgJiYgdGhpcy5zZWxlY3RlZENhdGVnb3J5ICE9IFwiQWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcXG4gICAgICAgICAgICAgICAgICBObyBQcm9kdWN0cyBGb3VuZCB3aXRoIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiIGFuZCBDYXRlZ29yeSBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiLlxcbiAgICAgICAgICAgICAgICAgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm5hbWUgIT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIuXFxuICAgICAgICAgICAgICAgICAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RmlsdGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuY2F0ZWdvcnkgIT0gXCJBbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggQ2F0ZWdvcnkgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIi5cXG4gICAgICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXRGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW192bS5fdihcIk5vIFByb2R1Y3RzIFlldC5cIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtbGlzdFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czogX3ZtLnByb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBfdm0uZGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tZXJfcm9sZTogX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwcm9kdWN0cy1ncmlkXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJwcm9kdWN0c2dyaWRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiBfdm0ucHJvZHVjdHMsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IF92bS5kaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0ubGFyYXZlbERhdGEsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgXCJwYWdpbmF0aW9uLWNoYW5nZS1wYWdlXCI6IF92bS5nZXRSZXN1bHRzIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJjb2wtbWQtNCBjb2wtbGctMyBwLTBcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiY29sLW1kLTQgcC0wXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtcGFnZS1vcmRlci1zdW1tYXJ5XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNhcnQ6IF92bS5jYXJ0LFxuICAgICAgICAgICAgICAgICAgICBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlLFxuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiBfdm0ud2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiID8gXCJjb250YWluZXItZmx1aWQgY29uLWYtbWFyZ2luXCIgOiBcImNvbnRhaW5lclwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInByb2R1Y3RzLXBhZ2UtbW9kYWxcIiwgeyByZWY6IFwicHJvZHVjdG1vZGFsXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInByb2R1Y3RzLXdhcm5pbmctbW9kYWxcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbWluaW11bTogX3ZtLndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnQgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJFbnRlck9wdGlvbkNNb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBndWVzdDogX3ZtLmd1ZXN0LCB1c2VyOiBfdm0udXNlciB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODdiZWYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzE4N2JlZjFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMTg3YmVmMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMTg3YmVmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMTg3YmVmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxODdiZWYxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODdiZWYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTg3YmVmMSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=