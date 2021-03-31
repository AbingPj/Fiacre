(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/CheckoutPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var ChPSelectedItems = function ChPSelectedItems() {
  return __webpack_require__.e(/*! import() | js/f/ChPSelectedItems */ "js/f/ChPSelectedItems").then(__webpack_require__.bind(null, /*! ./selectedItems.vue */ "./resources/js/frontend/components/checkout-page/selectedItems.vue"));
};

var ChPOFiacre = function ChPOFiacre() {
  return __webpack_require__.e(/*! import() | js/f/ChPOFiacre */ "js/f/ChPOFiacre").then(__webpack_require__.bind(null, /*! ./order-summary-table/Fiacre.vue */ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue"));
};


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "cp-selected-items": ChPSelectedItems,
    "os-fiacre": ChPOFiacre
  },
  props: ["action", "propproducts", "guest", "user", "sunclubmember", "delivery_fee", "wholesaler_minimum_order_amount", "expected_delivery_dates", "user_billing_type"],
  data: function data() {
    return {
      products: [],
      shipments: "pickup",
      shipmentsOptions: [{
        text: "Deliver",
        value: "deliver"
      }, {
        text: "Pick-up",
        value: "pickup"
      }],
      cart: [],
      sun_wholesale_payment: "",
      placeorderButtonDisabled: false,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      nearestPickupZones: [],
      nearestDeliveryZones: [],
      errorMessage: "",
      coupon_code: "",
      couponMessage: "",
      coupon: {},
      couponCodeIsValid: false,
      guestHasAddress: false,
      guestAddress: "",
      guestAddressObj: {},
      guestAddressModalIsReady: false,
      needToSetBillingInfo: false,
      googleAPIKEY: "AIzaSyD-aqJby-P72dOO5xNfOI3X2EjAPffOQbc",
      org_id: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-id"),
      org_name: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-name"),
      org_address: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-address")
    };
  },
  computed: {
    totalAmount: function totalAmount() {
      var _this = this;

      if (this.cart.length == 0) {
        return 0.0;
      } else {
        var total = 0;
        this.cart.forEach(function (cart) {
          if (cart.is_subscription) {
            total = total + cart.subscription_price;
          } else {
            if (_this.user.customer_role == 2) {
              total = total + cart.member_price * cart.qty;
            } else if (_this.user.customer_role == 3) {
              total = total + cart.wholesale_price * cart.qty;
            } else {
              total = total + cart.price * cart.qty;
            }
          }
        });
        return total;
      }
    },
    getDiscount: function getDiscount() {
      var discount = 0;

      if (this.guest == 0) {
        discount = this.totalAmount * (this.user.discount / 100);
      }

      return discount;
    },
    getCouponDiscount: function getCouponDiscount() {
      var discount = 0;

      if (this.couponCodeIsValid) {
        if (this.coupon.is_percentage) {
          discount = this.totalAmount * (this.coupon.discount_amount / 100);
        } else {
          discount = this.coupon.discount_amount;
        }
      }

      return discount;
    },
    getCCAmount: function getCCAmount() {
      var cc = 0;

      if (this.cart.length == 0) {
        cc = 0.0;
      } else {
        cc = this.totalAmount * 0.03;
      }

      return cc;
    },
    getACHAmount: function getACHAmount() {
      var ach = 0;

      if (this.cart.length == 0) {
        ach = 0.0;
      } else {
        ach = this.totalAmount * 0.02;
      }

      return ach;
    },
    OverAllTotal: function OverAllTotal() {
      var total = 0;
      total = this.totalAmount;

      if (this.user_billing_type == "CC") {
        total = total + this.getCCAmount;
      }

      if (this.user_billing_type == "ACH") {
        total = total + this.getACHAmount;
      }

      return total;
    },
    cart_badge: function cart_badge() {
      return this.cart.length;
    }
  },
  created: function created() {
    var _this2 = this;

    if (this.guest == 1) {
      this.getCart();
    } else {
      setTimeout(function () {
        _this2.org_id = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-id");
        _this2.org_name = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-name");
        _this2.org_address = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-address");

        _this2.getCart2();
      }, 500);
    }
  },
  methods: {
    displayNumber: function displayNumber(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    closeErrorMessage: function closeErrorMessage() {
      this.errorMessage = "";
    },
    placeOrder: function placeOrder() {
      LoadingOverlay(); // // In-progress
      // alert("Under Construction!");
      // LoadingOverlayHide();
      // //
      //Continue Process

      this.placeorderButtonDisabled = true;

      if (this.cart.length > 0) {
        this.fiacreCustomerOrder();
      } else {
        this.errorMessage = "You Dont Have Selected Products.";
        window.scrollTo(0, 0);
        LoadingOverlayHide();
        this.placeorderButtonDisabled = false;
      }
    },
    fiacreCustomerOrder: function fiacreCustomerOrder() {
      var _this3 = this;

      axios.post("/placeorder/fiacreCustomer", {
        cart: this.cart,
        org_id: this.org_id
      }).then(function (res) {
        // LoadingOverlayHide();
        // console.log(res);
        // this.cart = [];
        // localStorage.setItem("cart", JSON.stringify(this.cart));
        // localStorage.setItem("cart_badge", this.cart.length);
        if (res.status == 200) {
          window.location.href = "/placeorder/thankyou";
        }

        _this3.placeorderButtonDisabled = false;
      })["catch"](function (err) {
        //   console.error(err.response.data.data_message);
        _this3.errorMessage = "Payment error: " + err.response.data.data_message;
        _this3.placeorderButtonDisabled = false;
        window.scrollTo(0, 0);
        LoadingOverlayHide(); //   console.error(err);
      });
    },
    getCart: function getCart() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var lastcart;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                LoadingOverlay();

                if (!_this4.ifCartExpired()) {
                  _context.next = 6;
                  break;
                }

                _this4.cart = [];
                localStorage.setItem("cart", JSON.stringify(_this4.cart));
                _context.next = 14;
                break;

              case 6:
                _context.next = 8;
                return JSON.parse(localStorage.getItem("cart") || "null");

              case 8:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 11;
                  break;
                }

                _context.t0 = [];

              case 11:
                lastcart = _context.t0;
                _this4.cart = lastcart;
                localStorage.setItem("cart_badge", _this4.cart.length);

              case 14:
                if (_this4.cart.length == 0) {
                  if (_this4.user.sun_is_expired == 1) {
                    LoadingOverlayHide();
                  } else {
                    window.location.href = "/products";
                  }
                } else {
                  LoadingOverlayHide();
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCart2: function getCart2() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                LoadingOverlay();
                axios.get("/cart/getUserCartDetails/".concat(_this5.user.id, "/").concat(_this5.org_id)).then(function (res) {
                  var lastcart = res.data;
                  _this5.cart = [];
                  lastcart.forEach(function (cart) {
                    cart.atr_details.qty = cart.qty;

                    _this5.cart.push(cart.atr_details);
                  });
                  LoadingOverlayHide();
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
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
    setCartExpiry: function setCartExpiry(ttl) {
      var now = new Date();
      var expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },
    removeItemInCart: function removeItemInCart(data) {
      var _this6 = this;

      if (this.guest == 1) {
        this.cart.splice(this.cart.findIndex(function (i) {
          return i.id === data.id;
        }), 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.$events.fire("updateCartBadge", "update cart");
        this.setCartExpiry(86400000);
      } else {
        LoadingOverlay();
        axios.post("/cart/removeProductOfUserCart/".concat(this.user.id, "/").concat(this.org_id, "/").concat(data.id)).then(function (res) {
          _this6.$events.fire("updateCartBadge3", res.data);

          LoadingOverlayHide();

          _this6.cart.splice(_this6.cart.findIndex(function (i) {
            return i.id === data.id;
          }), 1);
        })["catch"](function (err) {
          LoadingOverlayHide();
          console.error(err);
        });
      }
    },
    addQty: function addQty(product) {
      if (product.qty < product.maxorder + 50) {
        product.qty++;

        if (this.guest == 1) {
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.setCartExpiry(86400000);
        } else {
          LoadingOverlay();
          var rawData = {
            product_details: product,
            user_id: this.user.id,
            org_id: this.org_id
          };
          axios.post("/cart/updateQuantity", rawData).then(function (res) {
            console.log(res);
            LoadingOverlayHide();
          })["catch"](function (err) {
            product.qty--;
            console.error(err);
            LoadingOverlayHide();
            alert("Something went wrong! Please Contat Support. " + err);
          });
        }
      }
    },
    subQty: function subQty(product) {
      if (product.qty > 1) {
        product.qty--;

        if (this.guest == 1) {
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.setCartExpiry(86400000);
        } else {
          LoadingOverlay();
          var rawData = {
            product_details: product,
            user_id: this.user.id,
            org_id: this.org_id
          };
          axios.post("/cart/updateQuantity", rawData).then(function (res) {
            console.log(res);
            LoadingOverlayHide();
          })["catch"](function (err) {
            product.qty++;
            console.error(err);
            LoadingOverlayHide();
            alert("Something went wrong! Please Contat Support. " + err);
          });
        }
      }
    },
    sub: function sub(data1, data, index) {
      console.log(data1);
      console.log(data);

      if (data.sub == "sub") {
        this.$refs.ProductsSubModalRef3.data1 = data1;
        this.$refs.ProductsSubModalRef3.data = data;
        this.$refs.ProductsSubModalRef3.index = index;
        this.$refs.ProductsSubModalRef3.openModal();
      }

      if (data.sub == "unsub") {
        var selected_products = data1.selected_products;
        var atr_orginal_selected_products = data1.atr_orginal_selected_products;
        selected_products[index] = atr_orginal_selected_products[index];
        var newdata = selected_products;
        data1.selected_products = [];
        data1.selected_products = newdata;
        this.updateProductDetails(data1);
      }
    },
    updateProducts: function updateProducts(data1, item, index) {
      var selected_products = data1.selected_products;
      selected_products[index] = item;
      var newdata = selected_products;
      data1.selected_products = [];
      data1.selected_products = newdata;
      this.updateProductDetails(data1);
    },
    updateProductDetails: function updateProductDetails(product) {
      if (this.guest == 0) {
        LoadingOverlay();
        var rawData = {
          product_details: product,
          user_id: this.user.id,
          org_id: this.org_id
        };
        axios.post("/cart/updateProductDetails", rawData).then(function (res) {
          console.log(res);
          LoadingOverlayHide(); // window.location.reload(true)
          // document.location.reload(true)
        })["catch"](function (err) {
          console.error(err); // LoadingOverlayHide();

          alert("Something went wrong! Please Contat Support. " + err); // window.location.reload(true)

          document.location.reload(true);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".order-summary .cart-container[data-v-2698c2cf] {\n  min-height: 620px;\n  border: 2px solid lightgray !important;\n  padding: 10px;\n  border-radius: 5px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 10px;\n}\n.order-summary .cart-container .content[data-v-2698c2cf] {\n  min-height: 600px;\n}\n.order-summary .cart-container .content .cart-header[data-v-2698c2cf] {\n  padding: 10px 0px 0px 20px;\n  text-align: left;\n}\n@media (min-width: 992px) {\n.main-conatiner[data-v-2698c2cf] {\n    max-width: 1000px;\n}\n}\n@media (min-width: 1200px) {\n.main-conatiner[data-v-2698c2cf] {\n    max-width: 1210px;\n}\n}\n@media (min-width: 1300px) {\n.main-conatiner[data-v-2698c2cf] {\n    max-width: 1250px;\n}\n}\n@media (min-width: 1400px) {\n.main-conatiner[data-v-2698c2cf] {\n    max-width: 1300px;\n}\n}\n.btn-edit[data-v-2698c2cf] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n  font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true& ***!
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
    { staticClass: "container mt-1 mb-5 main-conatiner" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.errorMessage
        ? _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                { staticClass: "alert alert-danger", attrs: { role: "alert" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "alert",
                        "aria-label": "Close"
                      },
                      on: {
                        click: function($event) {
                          return _vm.closeErrorMessage()
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(
                    "\n\t\t\t\t\t" + _vm._s(_vm.errorMessage) + "\n\t\t\t\t\t"
                  ),
                  _vm.needToSetBillingInfo
                    ? _c("span", [
                        _c(
                          "a",
                          { attrs: { href: "/register/success/confirmed" } },
                          [_vm._v("Click Here")]
                        ),
                        _vm._v(" to set\n\t\t\t\t\t\tit")
                      ])
                    : _vm._e()
                ]
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row" },
        [
          _c("cp-selected-items", {
            attrs: { cart: this.cart, customer_role: _vm.user.customer_role }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4 col-md-5 order-summary" }, [
            _c("div", { staticClass: "cart-container bg-white" }, [
              _c("div", { staticClass: "content d-flex flex-column" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("table", { staticClass: "table" }, [
                  _c("tbody", [
                    _c("tr", [
                      _c("td", { attrs: { colspan: "2" } }, [
                        _c("div", { staticClass: "mb-2" }, [
                          _vm._v("Delivery Type:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group ml-3 mb-0" }, [
                          _c(
                            "div",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shipments,
                                    expression: "shipments"
                                  }
                                ],
                                staticClass: "form-check-input",
                                attrs: {
                                  type: "radio",
                                  value: "deliver",
                                  disabled: ""
                                },
                                domProps: {
                                  checked: _vm._q(_vm.shipments, "deliver")
                                },
                                on: {
                                  change: function($event) {
                                    _vm.shipments = "deliver"
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "inlineRadio1" }
                                },
                                [_vm._v("Deliver")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-check form-check-inline" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.shipments,
                                    expression: "shipments"
                                  }
                                ],
                                staticClass: "form-check-input",
                                attrs: { type: "radio", value: "pickup" },
                                domProps: {
                                  checked: _vm._q(_vm.shipments, "pickup")
                                },
                                on: {
                                  change: function($event) {
                                    _vm.shipments = "pickup"
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "inlineRadio2" }
                                },
                                [_vm._v("Pick-up")]
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { attrs: { colspan: "2" } }, [
                        _c("div", { staticClass: "mb-2" }, [
                          _vm._v("School/Parish Address:")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "ml-3" }, [
                          _c("b", [_vm._v(_vm._s(_vm.org_name))]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("i", { staticClass: "fas fa-map-marker mr-2" }),
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.org_address) +
                              "\n\t\t\t\t\t\t\t\t\t\t"
                          )
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("i", [_vm._v("This will be the pick-up address")])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("os-fiacre", {
                      attrs: {
                        total_amount: _vm.totalAmount,
                        over_all_total: _vm.OverAllTotal,
                        cc: _vm.getCCAmount,
                        ach: _vm.getACHAmount,
                        user_billing_type: _vm.user_billing_type
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-md-12 text-center place-order-btn-container mt-auto"
                  },
                  [
                    _vm.guest == 0
                      ? _c("h6", { staticClass: "text-danger" }, [
                          _vm._v(
                            "\n\t\t\t\t\t\t\t\t" +
                              _vm._s(_vm.errorMessage) +
                              "\n\t\t\t\t\t\t\t"
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-lg btn-primary w-100",
                        attrs: {
                          type: "button",
                          disabled: _vm.placeorderButtonDisabled
                        },
                        on: {
                          click: function($event) {
                            return _vm.placeOrder()
                          }
                        }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\tPLACE ORDER\n\t\t\t\t\t\t\t")]
                    )
                  ]
                )
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("ProductsSubModal3", { ref: "ProductsSubModalRef3" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h4", [
          _c("u", [
            _c("a", { attrs: { href: "/products" } }, [
              _vm._v("Continue Shopping")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 cart-header" }, [
      _c("h4", { staticClass: "text-dark" }, [_vm._v("Shipping")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 cart-header mt-3" }, [
      _c("h4", { staticClass: "text-dark" }, [_vm._v("Order Summary")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2698c2cf&scoped=true& */ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& */ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2698c2cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=style&index=0&id=2698c2cf&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2698c2cf_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2698c2cf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/index.vue?vue&type=template&id=2698c2cf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2698c2cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/MDZiMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT8wNjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlPzA4MmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/YWFjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT9mMjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlP2MwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRMQTtBQUFBLFNBQ0EsNE5BREE7QUFBQTs7QUFJQTtBQUFBLFNB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QztBQUNsRSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEwYyxDQUFnQiwyYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9DaGVja291dFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0Lm9yZGVyLXN1bW1hcnkge1xyXG5cdFx0Ly8gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG5cdFx0LmNhcnQtY29udGFpbmVyIHtcclxuXHRcdFx0bWluLWhlaWdodDogNjIwcHg7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuXHRcdFx0cG9zaXRpb246IHN0aWNreTtcclxuXHRcdFx0dG9wOiAxMHB4O1xyXG5cclxuXHRcdFx0LmNvbnRlbnQge1xyXG5cdFx0XHRcdC8vICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcblx0XHRcdFx0Ly8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNjAwcHg7XHJcblxyXG5cdFx0XHRcdC5jYXJ0LWhlYWRlciB7XHJcblx0XHRcdFx0XHQvLyBwYWRkaW5nOiAxMHB4IDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDBweCAwcHggMjBweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubWFpbi1jb25hdGluZXIge1xyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblx0XHRcdG1heC13aWR0aDogMTAwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMjEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEyNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcblx0XHRcdG1heC13aWR0aDogMTMwMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJ0bi1lZGl0IHtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyOiAwcHg7XHJcblx0XHRjb2xvcjogZ3JheTtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIG1iLTUgbWFpbi1jb25hdGluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdDxoND5cclxuXHRcdFx0XHRcdDx1PlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3Byb2R1Y3RzXCI+Q29udGludWUgU2hvcHBpbmc8L2E+XHJcblx0XHRcdFx0XHQ8L3U+XHJcblx0XHRcdFx0PC9oND5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IHYtaWY9XCJlcnJvck1lc3NhZ2VcIiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+e3sgZXJyb3JNZXNzYWdlIH19PC9kaXY+IC0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiY2xvc2VFcnJvck1lc3NhZ2UoKVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImNsb3NlXCJcclxuXHRcdFx0XHRcdFx0ZGF0YS1kaXNtaXNzPVwiYWxlcnRcIlxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7eyBlcnJvck1lc3NhZ2UgfX1cclxuXHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJuZWVkVG9TZXRCaWxsaW5nSW5mb1wiXHJcblx0XHRcdFx0XHRcdD48YSBocmVmPVwiL3JlZ2lzdGVyL3N1Y2Nlc3MvY29uZmlybWVkXCI+Q2xpY2sgSGVyZTwvYT4gdG8gc2V0XHJcblx0XHRcdFx0XHRcdGl0PC9zcGFuXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8Y3Atc2VsZWN0ZWQtaXRlbXNcclxuXHRcdFx0XHQ6Y2FydD1cInRoaXMuY2FydFwiXHJcblx0XHRcdFx0OmN1c3RvbWVyX3JvbGU9XCJ1c2VyLmN1c3RvbWVyX3JvbGVcIlxyXG5cdFx0XHQ+PC9jcC1zZWxlY3RlZC1pdGVtcz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC01IG9yZGVyLXN1bW1hcnlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzPVwidGV4dC1kYXJrXCI+U2hpcHBpbmc8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYi0yXCI+RGVsaXZlcnkgVHlwZTo8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtbC0zIG1iLTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImRlbGl2ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzaGlwbWVudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9yPVwiaW5saW5lUmFkaW8xXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+RGVsaXZlcjwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJwaWNrdXBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzaGlwbWVudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvcj1cImlubGluZVJhZGlvMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlBpY2stdXA8L2xhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYi0yXCI+U2Nob29sL1BhcmlzaCBBZGRyZXNzOjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj57eyBvcmdfbmFtZSB9fTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgb3JnX2FkZHJlc3MgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aT5UaGlzIHdpbGwgYmUgdGhlIHBpY2stdXAgYWRkcmVzczwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY2FydC1oZWFkZXIgbXQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzcz1cInRleHQtZGFya1wiPk9yZGVyIFN1bW1hcnk8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PG9zLWZpYWNyZVxyXG5cdFx0XHRcdFx0XHRcdFx0OnRvdGFsX2Ftb3VudD1cInRvdGFsQW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdDpvdmVyX2FsbF90b3RhbD1cIk92ZXJBbGxUb3RhbFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y2M9XCJnZXRDQ0Ftb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6YWNoPVwiZ2V0QUNIQW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdDp1c2VyX2JpbGxpbmdfdHlwZT1cInVzZXJfYmlsbGluZ190eXBlXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9vcy1maWFjcmU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyIHBsYWNlLW9yZGVyLWJ0bi1jb250YWluZXIgbXQtYXV0b1wiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aDYgdi1pZj1cImd1ZXN0ID09IDBcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7eyBlcnJvck1lc3NhZ2UgfX1cclxuXHRcdFx0XHRcdFx0XHQ8L2g2PlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuXHRcdFx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cInBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJwbGFjZU9yZGVyKClcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFBMQUNFIE9SREVSXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgICAgPFByb2R1Y3RzU3ViTW9kYWwzIHJlZj1cIlByb2R1Y3RzU3ViTW9kYWxSZWYzXCI+PC9Qcm9kdWN0c1N1Yk1vZGFsMz5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBDaFBTZWxlY3RlZEl0ZW1zID0gKCkgPT5cclxuXHRcdGltcG9ydChcclxuXHRcdFx0Lyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL0NoUFNlbGVjdGVkSXRlbXNcIiAqLyBcIi4vc2VsZWN0ZWRJdGVtcy52dWVcIlxyXG5cdFx0KTtcclxuXHRjb25zdCBDaFBPRmlhY3JlID0gKCkgPT5cclxuXHRcdGltcG9ydChcclxuXHRcdFx0Lyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL0NoUE9GaWFjcmVcIiAqLyBcIi4vb3JkZXItc3VtbWFyeS10YWJsZS9GaWFjcmUudnVlXCJcclxuXHRcdCk7XHJcblxyXG5cdGltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRcImNwLXNlbGVjdGVkLWl0ZW1zXCI6IENoUFNlbGVjdGVkSXRlbXMsXHJcblx0XHRcdFwib3MtZmlhY3JlXCI6IENoUE9GaWFjcmUsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IFtcclxuXHRcdFx0XCJhY3Rpb25cIixcclxuXHRcdFx0XCJwcm9wcHJvZHVjdHNcIixcclxuXHRcdFx0XCJndWVzdFwiLFxyXG5cdFx0XHRcInVzZXJcIixcclxuXHRcdFx0XCJzdW5jbHVibWVtYmVyXCIsXHJcblx0XHRcdFwiZGVsaXZlcnlfZmVlXCIsXHJcblx0XHRcdFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxyXG5cdFx0XHRcImV4cGVjdGVkX2RlbGl2ZXJ5X2RhdGVzXCIsXHJcblx0XHRcdFwidXNlcl9iaWxsaW5nX3R5cGVcIixcclxuXHRcdF0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb2R1Y3RzOiBbXSxcclxuXHRcdFx0XHRzaGlwbWVudHM6IFwicGlja3VwXCIsXHJcblx0XHRcdFx0c2hpcG1lbnRzT3B0aW9uczogW1xyXG5cdFx0XHRcdFx0eyB0ZXh0OiBcIkRlbGl2ZXJcIiwgdmFsdWU6IFwiZGVsaXZlclwiIH0sXHJcblx0XHRcdFx0XHR7IHRleHQ6IFwiUGljay11cFwiLCB2YWx1ZTogXCJwaWNrdXBcIiB9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2FydDogW10sXHJcblx0XHRcdFx0c3VuX3dob2xlc2FsZV9wYXltZW50OiBcIlwiLFxyXG5cdFx0XHRcdHBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0Y3NyZjogZG9jdW1lbnRcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcclxuXHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxyXG5cdFx0XHRcdG5lYXJlc3RQaWNrdXBab25lczogW10sXHJcblx0XHRcdFx0bmVhcmVzdERlbGl2ZXJ5Wm9uZXM6IFtdLFxyXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogXCJcIixcclxuXHRcdFx0XHRjb3Vwb25fY29kZTogXCJcIixcclxuXHRcdFx0XHRjb3Vwb25NZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdGNvdXBvbjoge30sXHJcblx0XHRcdFx0Y291cG9uQ29kZUlzVmFsaWQ6IGZhbHNlLFxyXG5cdFx0XHRcdGd1ZXN0SGFzQWRkcmVzczogZmFsc2UsXHJcblx0XHRcdFx0Z3Vlc3RBZGRyZXNzOiBcIlwiLFxyXG5cdFx0XHRcdGd1ZXN0QWRkcmVzc09iajoge30sXHJcblx0XHRcdFx0Z3Vlc3RBZGRyZXNzTW9kYWxJc1JlYWR5OiBmYWxzZSxcclxuXHRcdFx0XHRuZWVkVG9TZXRCaWxsaW5nSW5mbzogZmFsc2UsXHJcblx0XHRcdFx0Z29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVksXHJcblx0XHRcdFx0b3JnX2lkOiBjb29raWVzLmdldChcImZmLW9yZy1pZFwiKSxcclxuXHRcdFx0XHRvcmdfbmFtZTogY29va2llcy5nZXQoXCJmZi1vcmctbmFtZVwiKSxcclxuXHRcdFx0XHRvcmdfYWRkcmVzczogY29va2llcy5nZXQoXCJmZi1vcmctYWRkcmVzc1wiKSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR0b3RhbEFtb3VudCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMC4wO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGNhcnQuaXNfc3Vic2NyaXB0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0dG90YWwgPSB0b3RhbCArIGNhcnQuc3Vic2NyaXB0aW9uX3ByaWNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5tZW1iZXJfcHJpY2UgKiBjYXJ0LnF0eTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudXNlci5jdXN0b21lcl9yb2xlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0Lndob2xlc2FsZV9wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0RGlzY291bnQoKSB7XHJcblx0XHRcdFx0bGV0IGRpc2NvdW50ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAwKSB7XHJcblx0XHRcdFx0XHRkaXNjb3VudCA9IHRoaXMudG90YWxBbW91bnQgKiAodGhpcy51c2VyLmRpc2NvdW50IC8gMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRpc2NvdW50O1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0Q291cG9uRGlzY291bnQoKSB7XHJcblx0XHRcdFx0bGV0IGRpc2NvdW50ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5jb3Vwb25Db2RlSXNWYWxpZCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY291cG9uLmlzX3BlcmNlbnRhZ2UpIHtcclxuXHRcdFx0XHRcdFx0ZGlzY291bnQgPVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudG90YWxBbW91bnQgKiAodGhpcy5jb3Vwb24uZGlzY291bnRfYW1vdW50IC8gMTAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGRpc2NvdW50ID0gdGhpcy5jb3Vwb24uZGlzY291bnRfYW1vdW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGlzY291bnQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENDQW1vdW50KCkge1xyXG5cdFx0XHRcdGxldCBjYyA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2FydC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0Y2MgPSAwLjA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNjID0gdGhpcy50b3RhbEFtb3VudCAqIDAuMDM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBjYztcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QUNIQW1vdW50KCkge1xyXG5cdFx0XHRcdGxldCBhY2ggPSAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNhcnQubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdGFjaCA9IDAuMDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNoID0gdGhpcy50b3RhbEFtb3VudCAqIDAuMDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBhY2g7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRPdmVyQWxsVG90YWwoKSB7XHJcblx0XHRcdFx0bGV0IHRvdGFsID0gMDtcclxuXHRcdFx0XHR0b3RhbCA9IHRoaXMudG90YWxBbW91bnQ7XHJcblx0XHRcdFx0aWYgKHRoaXMudXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJDQ1wiKSB7XHJcblx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgdGhpcy5nZXRDQ0Ftb3VudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMudXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJBQ0hcIikge1xyXG5cdFx0XHRcdFx0dG90YWwgPSB0b3RhbCArIHRoaXMuZ2V0QUNIQW1vdW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdG90YWw7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjYXJ0X2JhZGdlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNhcnQubGVuZ3RoO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmdldENhcnQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMub3JnX2lkID0gY29va2llcy5nZXQoXCJmZi1vcmctaWRcIik7XHJcblx0XHRcdFx0XHR0aGlzLm9yZ19uYW1lID0gY29va2llcy5nZXQoXCJmZi1vcmctbmFtZVwiKTtcclxuXHRcdFx0XHRcdHRoaXMub3JnX2FkZHJlc3MgPSBjb29raWVzLmdldChcImZmLW9yZy1hZGRyZXNzXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRDYXJ0MigpO1xyXG5cdFx0XHRcdH0sIDUwMCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkaXNwbGF5TnVtYmVyKHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG5cdFx0XHRcdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB3aXRoQ29tbWFzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZUVycm9yTWVzc2FnZSgpIHtcclxuXHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9IFwiXCI7XHJcblx0XHRcdH0sXHJcblx0XHRcdHBsYWNlT3JkZXIoKSB7XHJcblx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyAvLyBJbi1wcm9ncmVzc1xyXG5cdFx0XHRcdC8vIGFsZXJ0KFwiVW5kZXIgQ29uc3RydWN0aW9uIVwiKTtcclxuICAgICAgICAgICAgICAgIC8vIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy9cclxuXHJcbiAgICAgICAgICAgICAgICAvL0NvbnRpbnVlIFByb2Nlc3NcclxuXHRcdFx0XHR0aGlzLnBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2FydC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmZpYWNyZUN1c3RvbWVyT3JkZXIoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBcIllvdSBEb250IEhhdmUgU2VsZWN0ZWQgUHJvZHVjdHMuXCI7XHJcblx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdHRoaXMucGxhY2VvcmRlckJ1dHRvbkRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0ZmlhY3JlQ3VzdG9tZXJPcmRlcigpIHtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LnBvc3QoXCIvcGxhY2VvcmRlci9maWFjcmVDdXN0b21lclwiLCB7XHJcblx0XHRcdFx0XHRcdGNhcnQ6IHRoaXMuY2FydCxcclxuXHRcdFx0XHRcdFx0b3JnX2lkOiB0aGlzLm9yZ19pZCxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHQvLyB0aGlzLmNhcnQgPSBbXTtcclxuXHRcdFx0XHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xyXG5cdFx0XHRcdFx0XHQvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYWNlb3JkZXIvdGhhbmt5b3VcIjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdC8vICAgY29uc29sZS5lcnJvcihlcnIucmVzcG9uc2UuZGF0YS5kYXRhX21lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yTWVzc2FnZSA9XHJcblx0XHRcdFx0XHRcdFx0XCJQYXltZW50IGVycm9yOiBcIiArIGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0Ly8gICBjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFzeW5jIGdldENhcnQoKSB7XHJcblx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuaWZDYXJ0RXhwaXJlZCgpKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNhcnQgPSBbXTtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGV0IGxhc3RjYXJ0ID1cclxuXHRcdFx0XHRcdFx0KGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpIHx8IFwibnVsbFwiKSkgfHwgW107XHJcblx0XHRcdFx0XHR0aGlzLmNhcnQgPSBsYXN0Y2FydDtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmNhcnQubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLnVzZXIuc3VuX2lzX2V4cGlyZWQgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHNcIjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXN5bmMgZ2V0Q2FydDIoKSB7XHJcblx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LmdldChgL2NhcnQvZ2V0VXNlckNhcnREZXRhaWxzLyR7dGhpcy51c2VyLmlkfS8ke3RoaXMub3JnX2lkfWApXHJcblx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBsYXN0Y2FydCA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNhcnQgPSBbXTtcclxuXHRcdFx0XHRcdFx0bGFzdGNhcnQuZm9yRWFjaCgoY2FydCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNhcnQuYXRyX2RldGFpbHMucXR5ID0gY2FydC5xdHk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYXJ0LnB1c2goY2FydC5hdHJfZGV0YWlscyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0aWZDYXJ0RXhwaXJlZCgpIHtcclxuXHRcdFx0XHRjb25zdCBpdGVtU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0X2V4cGlyeVwiKTtcclxuXHRcdFx0XHRpZiAoIWl0ZW1TdHIpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjb25zdCBpdGVtID0gSlNPTi5wYXJzZShpdGVtU3RyKTtcclxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGlmIChub3cuZ2V0VGltZSgpID4gaXRlbSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHNldENhcnRFeHBpcnkodHRsKSB7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRsZXQgZXhwaXJ5ID0gbm93LmdldFRpbWUoKSArIHR0bDtcclxuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfZXhwaXJ5XCIsIGV4cGlyeSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyZW1vdmVJdGVtSW5DYXJ0KGRhdGEpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHR0aGlzLmNhcnQuc3BsaWNlKFxyXG5cdFx0XHRcdFx0XHR0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XHJcblx0XHRcdFx0XHRcdH0pLFxyXG5cdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xyXG5cdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xyXG5cdFx0XHRcdFx0dGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2VcIiwgXCJ1cGRhdGUgY2FydFwiKTtcclxuXHRcdFx0XHRcdHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0XHQucG9zdChcclxuXHRcdFx0XHRcdFx0XHRgL2NhcnQvcmVtb3ZlUHJvZHVjdE9mVXNlckNhcnQvJHt0aGlzLnVzZXIuaWR9LyR7dGhpcy5vcmdfaWR9LyR7ZGF0YS5pZH1gXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJGV2ZW50cy5maXJlKFwidXBkYXRlQ2FydEJhZGdlM1wiLCByZXMuZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jYXJ0LnNwbGljZShcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2FydC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XHJcblx0XHRcdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0XHRcdDFcclxuXHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhZGRRdHkocHJvZHVjdCkge1xyXG5cdFx0XHRcdGlmIChwcm9kdWN0LnF0eSA8IHByb2R1Y3QubWF4b3JkZXIgKyA1MCkge1xyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdHkrKztcclxuXHRcdFx0XHRcdGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHRcdFx0dmFyIHJhd0RhdGEgPSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxyXG5cdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcclxuXHRcdFx0XHRcdFx0XHRvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0XHRcdC5wb3N0KFwiL2NhcnQvdXBkYXRlUXVhbnRpdHlcIiwgcmF3RGF0YSlcclxuXHRcdFx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvZHVjdC5xdHktLTtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxlcnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBDb250YXQgU3VwcG9ydC4gXCIgKyBlcnJcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWJRdHkocHJvZHVjdCkge1xyXG5cdFx0XHRcdGlmIChwcm9kdWN0LnF0eSA+IDEpIHtcclxuXHRcdFx0XHRcdHByb2R1Y3QucXR5LS07XHJcblx0XHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0XHRcdHZhciByYXdEYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RfZGV0YWlsczogcHJvZHVjdCxcclxuXHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXIuaWQsXHJcblx0XHRcdFx0XHRcdFx0b3JnX2lkOiB0aGlzLm9yZ19pZCxcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdFx0XHQucG9zdChcIi9jYXJ0L3VwZGF0ZVF1YW50aXR5XCIsIHJhd0RhdGEpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb2R1Y3QucXR5Kys7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGFsZXJ0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgc3ViKGRhdGExLCBkYXRhLGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGExKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1YiA9PSBcInN1YlwiKSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLmRhdGExID0gZGF0YTE7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5Qcm9kdWN0c1N1Yk1vZGFsUmVmMy5pbmRleCA9IGluZGV4O1xyXG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5Qcm9kdWN0c1N1Yk1vZGFsUmVmMy5vcGVuTW9kYWwoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGRhdGEuc3ViID09IFwidW5zdWJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkX3Byb2R1Y3RzID0gZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRyX29yZ2luYWxfc2VsZWN0ZWRfcHJvZHVjdHMgPSBkYXRhMS5hdHJfb3JnaW5hbF9zZWxlY3RlZF9wcm9kdWN0cztcclxuXHRcdFx0XHRcdHNlbGVjdGVkX3Byb2R1Y3RzW2luZGV4XSA9IGF0cl9vcmdpbmFsX3NlbGVjdGVkX3Byb2R1Y3RzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdkYXRhID0gc2VsZWN0ZWRfcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhMS5zZWxlY3RlZF9wcm9kdWN0cyA9IG5ld2RhdGE7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzKGRhdGExKTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3RzKGRhdGExLGl0ZW0sIGluZGV4KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRfcHJvZHVjdHMgPSBkYXRhMS5zZWxlY3RlZF9wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkX3Byb2R1Y3RzW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdkYXRhID0gc2VsZWN0ZWRfcHJvZHVjdHM7XHJcblx0XHRcdFx0ZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzID0gbmV3ZGF0YTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZVByb2R1Y3REZXRhaWxzKGRhdGExKTtcclxuXHRcdFx0fSxcclxuICAgICAgICAgICAgIHVwZGF0ZVByb2R1Y3REZXRhaWxzKHByb2R1Y3QpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ3Vlc3QgPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhd0RhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB0aGlzLnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBvc3QoXCIvY2FydC91cGRhdGVQcm9kdWN0RGV0YWlsc1wiLCByYXdEYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG5cdFx0fSxcclxuXHR9O1xyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3JkZXItc3VtbWFyeSAuY2FydC1jb250YWluZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICBtaW4taGVpZ2h0OiA2MjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEwcHg7XFxufVxcbi5vcmRlci1zdW1tYXJ5IC5jYXJ0LWNvbnRhaW5lciAuY29udGVudFtkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbn1cXG4ub3JkZXItc3VtbWFyeSAuY2FydC1jb250YWluZXIgLmNvbnRlbnQgLmNhcnQtaGVhZGVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcXG4ubWFpbi1jb25hdGluZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICAgIG1heC13aWR0aDogMTAwMHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xcbi5tYWluLWNvbmF0aW5lcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gICAgbWF4LXdpZHRoOiAxMjEwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XFxuLm1haW4tY29uYXRpbmVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgICBtYXgtd2lkdGg6IDEyNTBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcXG4ubWFpbi1jb25hdGluZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICAgIG1heC13aWR0aDogMTMwMHB4O1xcbn1cXG59XFxuLmJ0bi1lZGl0W2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjk4YzJjZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2OThjMmNmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2OThjMmNmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtMSBtYi01IG1haW4tY29uYXRpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmVycm9yTWVzc2FnZVxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhbGVydCBhbGVydC1kYW5nZXJcIiwgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtZGlzbWlzc1wiOiBcImFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogXCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsb3NlRXJyb3JNZXNzYWdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiw5dcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICsgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5uZWVkVG9TZXRCaWxsaW5nSW5mb1xuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvcmVnaXN0ZXIvc3VjY2Vzcy9jb25maXJtZWRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDbGljayBIZXJlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiB0byBzZXRcXG5cXHRcXHRcXHRcXHRcXHRcXHRpdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJjcC1zZWxlY3RlZC1pdGVtc1wiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBjYXJ0OiB0aGlzLmNhcnQsIGN1c3RvbWVyX3JvbGU6IF92bS51c2VyLmN1c3RvbWVyX3JvbGUgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNCBjb2wtbWQtNSBvcmRlci1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJ0LWNvbnRhaW5lciBiZy13aGl0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZWxpdmVyeSBUeXBlOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIG1sLTMgbWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoaXBtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiZGVsaXZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5zaGlwbWVudHMsIFwiZGVsaXZlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcG1lbnRzID0gXCJkZWxpdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZVJhZGlvMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGl2ZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hpcG1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaGlwbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInJhZGlvXCIsIHZhbHVlOiBcInBpY2t1cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5zaGlwbWVudHMsIFwicGlja3VwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaGlwbWVudHMgPSBcInBpY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmVSYWRpbzJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJQaWNrLXVwXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTY2hvb2wvUGFyaXNoIEFkZHJlc3M6XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3JnX25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JnX2FkZHJlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW192bS5fdihcIlRoaXMgd2lsbCBiZSB0aGUgcGljay11cCBhZGRyZXNzXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcy1maWFjcmVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbF9hbW91bnQ6IF92bS50b3RhbEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJfYWxsX3RvdGFsOiBfdm0uT3ZlckFsbFRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2M6IF92bS5nZXRDQ0Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjaDogX3ZtLmdldEFDSEFtb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfYmlsbGluZ190eXBlOiBfdm0udXNlcl9iaWxsaW5nX3R5cGVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHBsYWNlLW9yZGVyLWJ0bi1jb250YWluZXIgbXQtYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZ3Vlc3QgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wbGFjZU9yZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFBMQUNFIE9SREVSXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUHJvZHVjdHNTdWJNb2RhbDNcIiwgeyByZWY6IFwiUHJvZHVjdHNTdWJNb2RhbFJlZjNcIiB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcHJvZHVjdHNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQ29udGludWUgU2hvcHBpbmdcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY2FydC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIlNoaXBwaW5nXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiBjYXJ0LWhlYWRlciBtdC0zXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFya1wiIH0sIFtfdm0uX3YoXCJPcmRlciBTdW1tYXJ5XCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2OThjMmNmJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2OThjMmNmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjY5OGMyY2ZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2OThjMmNmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2OThjMmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2OThjMmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY5OGMyY2Ymc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjY5OGMyY2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjk4YzJjZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2OThjMmNmJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==