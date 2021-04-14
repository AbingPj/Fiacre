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
      org_address: js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-address"),
      referral_details: {
        total_user_refferal_amount: 0,
        details: []
      }
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

      total = total - this.referral_details.total_user_refferal_amount;
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
      this.getReferralDetails();
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
    getReferralDetails: function getReferralDetails() {
      var _this6 = this;

      axios.get("/getUserReferralCodeDetails").then(function (res) {
        _this6.referral_details = res.data;
        console.log(res.data.details);
        _this6.$refs.ReferralModalRef.data = res.data;
      });
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
      var _this7 = this;

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
          _this7.$events.fire("updateCartBadge3", res.data);

          LoadingOverlayHide();

          _this7.cart.splice(_this7.cart.findIndex(function (i) {
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
    updateRecurring: function updateRecurring(product) {
      product.recurring = !product.recurring;
      this.updateProductDetails(product);
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
                        user_billing_type: _vm.user_billing_type,
                        referral_details: _vm.referral_details
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
      _c("ProductsSubModal3", { ref: "ProductsSubModalRef3" }),
      _vm._v(" "),
      _c("ReferralModal", { ref: "ReferralModalRef" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/MDZiMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT8wNjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlPzA4MmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/YWFjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT9mMjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlP2MwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOExBO0FBQUEsU0FDQSw0TkFEQTtBQUFBOztBQUlBO0FBQUEs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QixxQkFBcUI7QUFDM0MsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0EscUJBQXFCLFNBQVMsb0JBQW9CLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUE0QztBQUNsRSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9SQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEwYyxDQUFnQiwyYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9DaGVja291dFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0Lm9yZGVyLXN1bW1hcnkge1xyXG5cdFx0Ly8gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG5cdFx0LmNhcnQtY29udGFpbmVyIHtcclxuXHRcdFx0bWluLWhlaWdodDogNjIwcHg7XHJcblx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRcdHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuXHRcdFx0cG9zaXRpb246IHN0aWNreTtcclxuXHRcdFx0dG9wOiAxMHB4O1xyXG5cclxuXHRcdFx0LmNvbnRlbnQge1xyXG5cdFx0XHRcdC8vICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XHJcblx0XHRcdFx0Ly8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0bWluLWhlaWdodDogNjAwcHg7XHJcblxyXG5cdFx0XHRcdC5jYXJ0LWhlYWRlciB7XHJcblx0XHRcdFx0XHQvLyBwYWRkaW5nOiAxMHB4IDA7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4IDBweCAwcHggMjBweDtcclxuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubWFpbi1jb25hdGluZXIge1xyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcblx0XHRcdG1heC13aWR0aDogMTAwMHB4O1xyXG5cdFx0fVxyXG5cclxuXHRcdEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAxMjEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDEyNTBweDtcclxuXHRcdH1cclxuXHJcblx0XHRAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcblx0XHRcdG1heC13aWR0aDogMTMwMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmJ0bi1lZGl0IHtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyOiAwcHg7XHJcblx0XHRjb2xvcjogZ3JheTtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIG1iLTUgbWFpbi1jb25hdGluZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG5cdFx0XHRcdDxoND5cclxuXHRcdFx0XHRcdDx1PlxyXG5cdFx0XHRcdFx0XHQ8YSBocmVmPVwiL3Byb2R1Y3RzXCI+Q29udGludWUgU2hvcHBpbmc8L2E+XHJcblx0XHRcdFx0XHQ8L3U+XHJcblx0XHRcdFx0PC9oND5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8ZGl2IHYtaWY9XCJlcnJvck1lc3NhZ2VcIiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+e3sgZXJyb3JNZXNzYWdlIH19PC9kaXY+IC0tPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cclxuXHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiY2xvc2VFcnJvck1lc3NhZ2UoKVwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImNsb3NlXCJcclxuXHRcdFx0XHRcdFx0ZGF0YS1kaXNtaXNzPVwiYWxlcnRcIlxyXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHR7eyBlcnJvck1lc3NhZ2UgfX1cclxuXHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJuZWVkVG9TZXRCaWxsaW5nSW5mb1wiXHJcblx0XHRcdFx0XHRcdD48YSBocmVmPVwiL3JlZ2lzdGVyL3N1Y2Nlc3MvY29uZmlybWVkXCI+Q2xpY2sgSGVyZTwvYT4gdG8gc2V0XHJcblx0XHRcdFx0XHRcdGl0PC9zcGFuXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8Y3Atc2VsZWN0ZWQtaXRlbXNcclxuXHRcdFx0XHQ6Y2FydD1cInRoaXMuY2FydFwiXHJcblx0XHRcdFx0OmN1c3RvbWVyX3JvbGU9XCJ1c2VyLmN1c3RvbWVyX3JvbGVcIlxyXG5cdFx0XHQ+PC9jcC1zZWxlY3RlZC1pdGVtcz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC01IG9yZGVyLXN1bW1hcnlcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzPVwidGV4dC1kYXJrXCI+U2hpcHBpbmc8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYi0yXCI+RGVsaXZlcnkgVHlwZTo8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtbC0zIG1iLTBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cImRlbGl2ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzaGlwbWVudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Zm9yPVwiaW5saW5lUmFkaW8xXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+RGVsaXZlcjwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCJwaWNrdXBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzaGlwbWVudHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvcj1cImlubGluZVJhZGlvMlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlBpY2stdXA8L2xhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjb2xzcGFuPVwiMlwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYi0yXCI+U2Nob29sL1BhcmlzaCBBZGRyZXNzOjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtbC0zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj57eyBvcmdfbmFtZSB9fTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgb3JnX2FkZHJlc3MgfX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aT5UaGlzIHdpbGwgYmUgdGhlIHBpY2stdXAgYWRkcmVzczwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdFx0PC90YWJsZT5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY2FydC1oZWFkZXIgbXQtM1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxoNCBjbGFzcz1cInRleHQtZGFya1wiPk9yZGVyIFN1bW1hcnk8L2g0PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PG9zLWZpYWNyZVxyXG5cdFx0XHRcdFx0XHRcdFx0OnRvdGFsX2Ftb3VudD1cInRvdGFsQW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdDpvdmVyX2FsbF90b3RhbD1cIk92ZXJBbGxUb3RhbFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y2M9XCJnZXRDQ0Ftb3VudFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6YWNoPVwiZ2V0QUNIQW1vdW50XCJcclxuXHRcdFx0XHRcdFx0XHRcdDp1c2VyX2JpbGxpbmdfdHlwZT1cInVzZXJfYmlsbGluZ190eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cmVmZXJyYWxfZGV0YWlscz1cInJlZmVycmFsX2RldGFpbHNcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L29zLWZpYWNyZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXIgcGxhY2Utb3JkZXItYnRuLWNvbnRhaW5lciBtdC1hdXRvXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxoNiB2LWlmPVwiZ3Vlc3QgPT0gMFwiIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7IGVycm9yTWVzc2FnZSB9fVxyXG5cdFx0XHRcdFx0XHRcdDwvaDY+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgdy0xMDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmRpc2FibGVkPVwicGxhY2VvcmRlckJ1dHRvbkRpc2FibGVkXCJcclxuXHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInBsYWNlT3JkZXIoKVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0UExBQ0UgT1JERVJcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICAgICA8UHJvZHVjdHNTdWJNb2RhbDMgcmVmPVwiUHJvZHVjdHNTdWJNb2RhbFJlZjNcIj48L1Byb2R1Y3RzU3ViTW9kYWwzPlxyXG5cdFx0ICAgPFJlZmVycmFsTW9kYWwgcmVmPVwiUmVmZXJyYWxNb2RhbFJlZlwiPjwvUmVmZXJyYWxNb2RhbD5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRjb25zdCBDaFBTZWxlY3RlZEl0ZW1zID0gKCkgPT5cclxuXHRcdGltcG9ydChcclxuXHRcdFx0Lyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL0NoUFNlbGVjdGVkSXRlbXNcIiAqLyBcIi4vc2VsZWN0ZWRJdGVtcy52dWVcIlxyXG5cdFx0KTtcclxuXHRjb25zdCBDaFBPRmlhY3JlID0gKCkgPT5cclxuXHRcdGltcG9ydChcclxuXHRcdFx0Lyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL0NoUE9GaWFjcmVcIiAqLyBcIi4vb3JkZXItc3VtbWFyeS10YWJsZS9GaWFjcmUudnVlXCJcclxuXHRcdCk7XHJcblxyXG5cdGltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHRcImNwLXNlbGVjdGVkLWl0ZW1zXCI6IENoUFNlbGVjdGVkSXRlbXMsXHJcblx0XHRcdFwib3MtZmlhY3JlXCI6IENoUE9GaWFjcmUsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IFtcclxuXHRcdFx0XCJhY3Rpb25cIixcclxuXHRcdFx0XCJwcm9wcHJvZHVjdHNcIixcclxuXHRcdFx0XCJndWVzdFwiLFxyXG5cdFx0XHRcInVzZXJcIixcclxuXHRcdFx0XCJzdW5jbHVibWVtYmVyXCIsXHJcblx0XHRcdFwiZGVsaXZlcnlfZmVlXCIsXHJcblx0XHRcdFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxyXG5cdFx0XHRcImV4cGVjdGVkX2RlbGl2ZXJ5X2RhdGVzXCIsXHJcblx0XHRcdFwidXNlcl9iaWxsaW5nX3R5cGVcIixcclxuXHRcdF0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHByb2R1Y3RzOiBbXSxcclxuXHRcdFx0XHRzaGlwbWVudHM6IFwicGlja3VwXCIsXHJcblx0XHRcdFx0c2hpcG1lbnRzT3B0aW9uczogW1xyXG5cdFx0XHRcdFx0eyB0ZXh0OiBcIkRlbGl2ZXJcIiwgdmFsdWU6IFwiZGVsaXZlclwiIH0sXHJcblx0XHRcdFx0XHR7IHRleHQ6IFwiUGljay11cFwiLCB2YWx1ZTogXCJwaWNrdXBcIiB9LFxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdFx0Y2FydDogW10sXHJcblx0XHRcdFx0c3VuX3dob2xlc2FsZV9wYXltZW50OiBcIlwiLFxyXG5cdFx0XHRcdHBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZDogZmFsc2UsXHJcblx0XHRcdFx0Y3NyZjogZG9jdW1lbnRcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcclxuXHRcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxyXG5cdFx0XHRcdG5lYXJlc3RQaWNrdXBab25lczogW10sXHJcblx0XHRcdFx0bmVhcmVzdERlbGl2ZXJ5Wm9uZXM6IFtdLFxyXG5cdFx0XHRcdGVycm9yTWVzc2FnZTogXCJcIixcclxuXHRcdFx0XHRjb3Vwb25fY29kZTogXCJcIixcclxuXHRcdFx0XHRjb3Vwb25NZXNzYWdlOiBcIlwiLFxyXG5cdFx0XHRcdGNvdXBvbjoge30sXHJcblx0XHRcdFx0Y291cG9uQ29kZUlzVmFsaWQ6IGZhbHNlLFxyXG5cdFx0XHRcdGd1ZXN0SGFzQWRkcmVzczogZmFsc2UsXHJcblx0XHRcdFx0Z3Vlc3RBZGRyZXNzOiBcIlwiLFxyXG5cdFx0XHRcdGd1ZXN0QWRkcmVzc09iajoge30sXHJcblx0XHRcdFx0Z3Vlc3RBZGRyZXNzTW9kYWxJc1JlYWR5OiBmYWxzZSxcclxuXHRcdFx0XHRuZWVkVG9TZXRCaWxsaW5nSW5mbzogZmFsc2UsXHJcblx0XHRcdFx0Z29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVksXHJcblx0XHRcdFx0b3JnX2lkOiBjb29raWVzLmdldChcImZmLW9yZy1pZFwiKSxcclxuXHRcdFx0XHRvcmdfbmFtZTogY29va2llcy5nZXQoXCJmZi1vcmctbmFtZVwiKSxcclxuXHRcdFx0XHRvcmdfYWRkcmVzczogY29va2llcy5nZXQoXCJmZi1vcmctYWRkcmVzc1wiKSxcclxuICAgICAgICAgICAgICAgIHJlZmVycmFsX2RldGFpbHM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsX3VzZXJfcmVmZmVyYWxfYW1vdW50OjAsXHJcblx0XHRcdFx0XHRkZXRhaWxzOiBbXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR0b3RhbEFtb3VudCgpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMC4wO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZXQgdG90YWwgPSAwO1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKGNhcnQuaXNfc3Vic2NyaXB0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0dG90YWwgPSB0b3RhbCArIGNhcnQuc3Vic2NyaXB0aW9uX3ByaWNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5tZW1iZXJfcHJpY2UgKiBjYXJ0LnF0eTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMudXNlci5jdXN0b21lcl9yb2xlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0Lndob2xlc2FsZV9wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0RGlzY291bnQoKSB7XHJcblx0XHRcdFx0bGV0IGRpc2NvdW50ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAwKSB7XHJcblx0XHRcdFx0XHRkaXNjb3VudCA9IHRoaXMudG90YWxBbW91bnQgKiAodGhpcy51c2VyLmRpc2NvdW50IC8gMTAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRpc2NvdW50O1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Z2V0Q291cG9uRGlzY291bnQoKSB7XHJcblx0XHRcdFx0bGV0IGRpc2NvdW50ID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5jb3Vwb25Db2RlSXNWYWxpZCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuY291cG9uLmlzX3BlcmNlbnRhZ2UpIHtcclxuXHRcdFx0XHRcdFx0ZGlzY291bnQgPVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudG90YWxBbW91bnQgKiAodGhpcy5jb3Vwb24uZGlzY291bnRfYW1vdW50IC8gMTAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGRpc2NvdW50ID0gdGhpcy5jb3Vwb24uZGlzY291bnRfYW1vdW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGlzY291bnQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENDQW1vdW50KCkge1xyXG5cdFx0XHRcdGxldCBjYyA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2FydC5sZW5ndGggPT0gMCkge1xyXG5cdFx0XHRcdFx0Y2MgPSAwLjA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNjID0gdGhpcy50b3RhbEFtb3VudCAqIDAuMDM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBjYztcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0QUNIQW1vdW50KCkge1xyXG5cdFx0XHRcdGxldCBhY2ggPSAwO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNhcnQubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdGFjaCA9IDAuMDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0YWNoID0gdGhpcy50b3RhbEFtb3VudCAqIDAuMDI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBhY2g7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRPdmVyQWxsVG90YWwoKSB7XHJcblx0XHRcdFx0bGV0IHRvdGFsID0gMDtcclxuXHRcdFx0XHR0b3RhbCA9IHRoaXMudG90YWxBbW91bnQ7XHJcblx0XHRcdFx0aWYgKHRoaXMudXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJDQ1wiKSB7XHJcblx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgdGhpcy5nZXRDQ0Ftb3VudDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMudXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJBQ0hcIikge1xyXG5cdFx0XHRcdFx0dG90YWwgPSB0b3RhbCArIHRoaXMuZ2V0QUNIQW1vdW50O1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIHRvdGFsICA9IHRvdGFsICAtIHRoaXMucmVmZXJyYWxfZGV0YWlscy50b3RhbF91c2VyX3JlZmZlcmFsX2Ftb3VudDtcclxuXHRcdFx0XHRyZXR1cm4gdG90YWw7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRjYXJ0X2JhZGdlKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNhcnQubGVuZ3RoO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmdldENhcnQoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVmZXJyYWxEZXRhaWxzKCk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLm9yZ19pZCA9IGNvb2tpZXMuZ2V0KFwiZmYtb3JnLWlkXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5vcmdfbmFtZSA9IGNvb2tpZXMuZ2V0KFwiZmYtb3JnLW5hbWVcIik7XHJcblx0XHRcdFx0XHR0aGlzLm9yZ19hZGRyZXNzID0gY29va2llcy5nZXQoXCJmZi1vcmctYWRkcmVzc1wiKTtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0Q2FydDIoKTtcclxuXHRcdFx0XHR9LCA1MDApO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0ZGlzcGxheU51bWJlcih2YWx1ZSkge1xyXG5cdFx0XHRcdHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcclxuXHRcdFx0XHR2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuXHRcdFx0XHRcdG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuXHRcdFx0XHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRyZXR1cm4gd2l0aENvbW1hcztcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2VFcnJvck1lc3NhZ2UoKSB7XHJcblx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPSBcIlwiO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRwbGFjZU9yZGVyKCkge1xyXG5cdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gLy8gSW4tcHJvZ3Jlc3NcclxuXHRcdFx0XHQvLyBhbGVydChcIlVuZGVyIENvbnN0cnVjdGlvbiFcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vXHJcblxyXG4gICAgICAgICAgICAgICAgLy9Db250aW51ZSBQcm9jZXNzXHJcblx0XHRcdFx0dGhpcy5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICh0aGlzLmNhcnQubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5maWFjcmVDdXN0b21lck9yZGVyKCk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZXJyb3JNZXNzYWdlID0gXCJZb3UgRG9udCBIYXZlIFNlbGVjdGVkIFByb2R1Y3RzLlwiO1xyXG5cdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHR0aGlzLnBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGZpYWNyZUN1c3RvbWVyT3JkZXIoKSB7XHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5wb3N0KFwiL3BsYWNlb3JkZXIvZmlhY3JlQ3VzdG9tZXJcIiwge1xyXG5cdFx0XHRcdFx0XHRjYXJ0OiB0aGlzLmNhcnQsXHJcblx0XHRcdFx0XHRcdG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0Ly8gdGhpcy5jYXJ0ID0gW107XHJcblx0XHRcdFx0XHRcdC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuXHRcdFx0XHRcdFx0Ly8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wbGFjZW9yZGVyL3RoYW5reW91XCI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGhpcy5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHQvLyAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZGF0YV9tZXNzYWdlKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5lcnJvck1lc3NhZ2UgPVxyXG5cdFx0XHRcdFx0XHRcdFwiUGF5bWVudCBlcnJvcjogXCIgKyBlcnIucmVzcG9uc2UuZGF0YS5kYXRhX21lc3NhZ2U7XHJcblx0XHRcdFx0XHRcdHRoaXMucGxhY2VvcmRlckJ1dHRvbkRpc2FibGVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdC8vICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhc3luYyBnZXRDYXJ0KCkge1xyXG5cdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLmlmQ2FydEV4cGlyZWQoKSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0ID0gW107XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCBsYXN0Y2FydCA9XHJcblx0XHRcdFx0XHRcdChhd2FpdCBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSB8fCBcIm51bGxcIikpIHx8IFtdO1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0ID0gbGFzdGNhcnQ7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XHJcblx0XHRcdFx0XHRpZiAodGhpcy51c2VyLnN1bl9pc19leHBpcmVkID09IDEpIHtcclxuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzXCI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGFzeW5jIGdldENhcnQyKCkge1xyXG5cdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoYC9jYXJ0L2dldFVzZXJDYXJ0RGV0YWlscy8ke3RoaXMudXNlci5pZH0vJHt0aGlzLm9yZ19pZH1gKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgbGFzdGNhcnQgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dGhpcy5jYXJ0ID0gW107XHJcblx0XHRcdFx0XHRcdGxhc3RjYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjYXJ0LmF0cl9kZXRhaWxzLnF0eSA9IGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FydC5wdXNoKGNhcnQuYXRyX2RldGFpbHMpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcbiAgICAgICAgICAgIGdldFJlZmVycmFsRGV0YWlscygpIHtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LmdldChgL2dldFVzZXJSZWZlcnJhbENvZGVEZXRhaWxzYClcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZlcnJhbF9kZXRhaWxzID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhLmRldGFpbHMpXHJcblx0XHRcdFx0XHRcdHRoaXMuJHJlZnMuUmVmZXJyYWxNb2RhbFJlZi5kYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGlmQ2FydEV4cGlyZWQoKSB7XHJcblx0XHRcdFx0Y29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydF9leHBpcnlcIik7XHJcblx0XHRcdFx0aWYgKCFpdGVtU3RyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbVN0cik7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0pIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzZXRDYXJ0RXhwaXJ5KHR0bCkge1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0bGV0IGV4cGlyeSA9IG5vdy5nZXRUaW1lKCkgKyB0dGw7XHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2V4cGlyeVwiLCBleHBpcnkpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0cmVtb3ZlSXRlbUluQ2FydChkYXRhKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0LnNwbGljZShcclxuXHRcdFx0XHRcdFx0dGhpcy5jYXJ0LmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiBpLmlkID09PSBkYXRhLmlkO1xyXG5cdFx0XHRcdFx0XHR9KSxcclxuXHRcdFx0XHRcdFx0MVxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcclxuXHRcdFx0XHRcdHRoaXMuJGV2ZW50cy5maXJlKFwidXBkYXRlQ2FydEJhZGdlXCIsIFwidXBkYXRlIGNhcnRcIik7XHJcblx0XHRcdFx0XHR0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdFx0LnBvc3QoXHJcblx0XHRcdFx0XHRcdFx0YC9jYXJ0L3JlbW92ZVByb2R1Y3RPZlVzZXJDYXJ0LyR7dGhpcy51c2VyLmlkfS8ke3RoaXMub3JnX2lkfS8ke2RhdGEuaWR9YFxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRldmVudHMuZmlyZShcInVwZGF0ZUNhcnRCYWRnZTNcIiwgcmVzLmRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2FydC5zcGxpY2UoXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBpLmlkID09PSBkYXRhLmlkO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSksXHJcblx0XHRcdFx0XHRcdFx0XHQxXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkUXR5KHByb2R1Y3QpIHtcclxuXHRcdFx0XHRpZiAocHJvZHVjdC5xdHkgPCBwcm9kdWN0Lm1heG9yZGVyICsgNTApIHtcclxuXHRcdFx0XHRcdHByb2R1Y3QucXR5Kys7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0XHRcdHZhciByYXdEYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RfZGV0YWlsczogcHJvZHVjdCxcclxuXHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXIuaWQsXHJcblx0XHRcdFx0XHRcdFx0b3JnX2lkOiB0aGlzLm9yZ19pZCxcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdFx0XHQucG9zdChcIi9jYXJ0L3VwZGF0ZVF1YW50aXR5XCIsIHJhd0RhdGEpXHJcblx0XHRcdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHByb2R1Y3QucXR5LS07XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGFsZXJ0KFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViUXR5KHByb2R1Y3QpIHtcclxuXHRcdFx0XHRpZiAocHJvZHVjdC5xdHkgPiAxKSB7XHJcblx0XHRcdFx0XHRwcm9kdWN0LnF0eS0tO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgcmF3RGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXHJcblx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VyLmlkLFxyXG5cdFx0XHRcdFx0XHRcdG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHRcdFx0LnBvc3QoXCIvY2FydC91cGRhdGVRdWFudGl0eVwiLCByYXdEYXRhKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWN0LnF0eSsrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRhbGVydChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblxyXG4gICAgICAgICAgICBzdWIoZGF0YTEsIGRhdGEsaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YTEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3ViID09IFwic3ViXCIpIHtcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMuUHJvZHVjdHNTdWJNb2RhbFJlZjMuZGF0YTEgPSBkYXRhMTtcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMuUHJvZHVjdHNTdWJNb2RhbFJlZjMuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLmluZGV4ID0gaW5kZXg7XHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLm9wZW5Nb2RhbCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YS5zdWIgPT0gXCJ1bnN1YlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRfcHJvZHVjdHMgPSBkYXRhMS5zZWxlY3RlZF9wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHJfb3JnaW5hbF9zZWxlY3RlZF9wcm9kdWN0cyA9IGRhdGExLmF0cl9vcmdpbmFsX3NlbGVjdGVkX3Byb2R1Y3RzO1xyXG5cdFx0XHRcdFx0c2VsZWN0ZWRfcHJvZHVjdHNbaW5kZXhdID0gYXRyX29yZ2luYWxfc2VsZWN0ZWRfcHJvZHVjdHNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld2RhdGEgPSBzZWxlY3RlZF9wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgICAgICBkYXRhMS5zZWxlY3RlZF9wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzID0gbmV3ZGF0YTtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHMoZGF0YTEpO1xyXG5cdFx0XHRcdH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdHMoZGF0YTEsaXRlbSwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZF9wcm9kdWN0cyA9IGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRfcHJvZHVjdHNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld2RhdGEgPSBzZWxlY3RlZF9wcm9kdWN0cztcclxuXHRcdFx0XHRkYXRhMS5zZWxlY3RlZF9wcm9kdWN0cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHMgPSBuZXdkYXRhO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHMoZGF0YTEpO1xyXG5cdFx0XHR9LFxyXG4gICAgICAgICAgICB1cGRhdGVSZWN1cnJpbmcocHJvZHVjdCl7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnJlY3VycmluZyA9ICFwcm9kdWN0LnJlY3VycmluZztcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHMocHJvZHVjdCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0RGV0YWlscyhwcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmd1ZXN0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByYXdEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdGhpcy51c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnX2lkOiB0aGlzLm9yZ19pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0KFwiL2NhcnQvdXBkYXRlUHJvZHVjdERldGFpbHNcIiwgcmF3RGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHRcdH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgbWluLWhlaWdodDogNjIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG4ub3JkZXItc3VtbWFyeSAuY2FydC1jb250YWluZXIgLmNvbnRlbnRbZGF0YS12LTI2OThjMmNmXSB7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XFxuLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyIC5jb250ZW50IC5jYXJ0LWhlYWRlcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAyMHB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XFxuLm1haW4tY29uYXRpbmVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4ubWFpbi1jb25hdGluZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICAgIG1heC13aWR0aDogMTIxMHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDBweCkge1xcbi5tYWluLWNvbmF0aW5lcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XFxuLm1haW4tY29uYXRpbmVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcXG59XFxufVxcbi5idG4tZWRpdFtkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjk4YzJjZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjk4YzJjZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG10LTEgbWItNSBtYWluLWNvbmF0aW5lclwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5lcnJvck1lc3NhZ2VcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIsIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWRpc21pc3NcIjogXCJhbGVydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IFwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbG9zZUVycm9yTWVzc2FnZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIsOXXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uZXJyb3JNZXNzYWdlKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0ubmVlZFRvU2V0QmlsbGluZ0luZm9cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3JlZ2lzdGVyL3N1Y2Nlc3MvY29uZmlybWVkXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xpY2sgSGVyZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgdG8gc2V0XFxuXFx0XFx0XFx0XFx0XFx0XFx0aXRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY3Atc2VsZWN0ZWQtaXRlbXNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgY2FydDogdGhpcy5jYXJ0LCBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTUgb3JkZXItc3VtbWFyeVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBkLWZsZXggZmxleC1jb2x1bW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVsaXZlcnkgVHlwZTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtbC0zIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNoaXBtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImRlbGl2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0uc2hpcG1lbnRzLCBcImRlbGl2ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNoaXBtZW50cyA9IFwiZGVsaXZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmVSYWRpbzFcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxpdmVyXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNoaXBtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hpcG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2staW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJyYWRpb1wiLCB2YWx1ZTogXCJwaWNrdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5fcShfdm0uc2hpcG1lbnRzLCBcInBpY2t1cFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcG1lbnRzID0gXCJwaWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2stbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5saW5lUmFkaW8yXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUGljay11cFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2Nob29sL1BhcmlzaCBBZGRyZXNzOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLm9yZ19uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1hcC1tYXJrZXIgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZ19hZGRyZXNzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtfdm0uX3YoXCJUaGlzIHdpbGwgYmUgdGhlIHBpY2stdXAgYWRkcmVzc1wiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwib3MtZmlhY3JlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfYW1vdW50OiBfdm0udG90YWxBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyX2FsbF90b3RhbDogX3ZtLk92ZXJBbGxUb3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjOiBfdm0uZ2V0Q0NBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2g6IF92bS5nZXRBQ0hBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2JpbGxpbmdfdHlwZTogX3ZtLnVzZXJfYmlsbGluZ190eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyYWxfZGV0YWlsczogX3ZtLnJlZmVycmFsX2RldGFpbHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHBsYWNlLW9yZGVyLWJ0bi1jb250YWluZXIgbXQtYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZ3Vlc3QgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmVycm9yTWVzc2FnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wbGFjZU9yZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFBMQUNFIE9SREVSXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUHJvZHVjdHNTdWJNb2RhbDNcIiwgeyByZWY6IFwiUHJvZHVjdHNTdWJNb2RhbFJlZjNcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlJlZmVycmFsTW9kYWxcIiwgeyByZWY6IFwiUmVmZXJyYWxNb2RhbFJlZlwiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9wcm9kdWN0c1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDb250aW51ZSBTaG9wcGluZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiBjYXJ0LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbX3ZtLl92KFwiU2hpcHBpbmdcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNhcnQtaGVhZGVyIG10LTNcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIk9yZGVyIFN1bW1hcnlcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY5OGMyY2Ymc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNjk4YzJjZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNjk4YzJjZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNjk4YzJjZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNjk4YzJjZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2OThjMmNmJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2OThjMmNmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2OThjMmNmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjk4YzJjZiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=