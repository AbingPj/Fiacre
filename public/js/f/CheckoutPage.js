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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      shipments: "deliver",
      // shipments: "pickup",
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
      },
      checkDonate: true
    };
  },
  computed: {
    shipmentsPrice: function shipmentsPrice() {
      if (this.shipments == "deliver") {
        return this.delivery_fee;
      } else {
        return 0;
      }
    },
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

      total = total - this.referral_details.total_user_refferal_amount; // total = total + this.shipmentsPrice;

      total = total + parseFloat(this.shipmentsPrice);
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
    editAddress: function editAddress() {
      if (this.guest == 0) {
        LoadingOverlay();
        window.location.href = "/myprofile";
      }
    },
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
      // LoadingOverlay();
      // // In-progress
      // alert("Under Construction!");
      // LoadingOverlayHide();
      // //
      //Continue Process
      // Edited 05142021
      this.placeorderButtonDisabled = true;

      if (this.cart.length > 0) {
        if (this.checkDonate == true) {
          $("#enterOptionCIdModal2").modal("show"); // this.fiacreCustomerOrder();
        } else {
          this.org_id = 0;
          this.fiacreCustomerOrder();
        }
      } else {
        this.errorMessage = "Please shop for products first.";
        window.scrollTo(0, 0);
        LoadingOverlayHide();
        this.placeorderButtonDisabled = false;
      } // Call the School/Parish to donate

    },
    fiacreCustomerOrder: function fiacreCustomerOrder() {
      var _this3 = this;

      LoadingOverlay();
      axios.post("/placeorder/fiacreCustomer", {
        cart: this.cart,
        org_id: this.org_id,
        shipments: this.shipments
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
                    "\n          " + _vm._s(_vm.errorMessage) + "\n          "
                  ),
                  _vm.needToSetBillingInfo
                    ? _c("span", [
                        _c(
                          "a",
                          { attrs: { href: "/register/success/confirmed" } },
                          [_vm._v("Click Here")]
                        ),
                        _vm._v(" to set\n            it")
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
                                  disabled: this.guest == 1
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
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.shipments == "pickup"
                      ? _c("tr", [
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
                              _c("i", {
                                staticClass: "fas fa-map-marker mr-2"
                              }),
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.org_address) +
                                  "\n                    "
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", [
                              _vm._v("This will be the pick-up address")
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.shipments == "deliver"
                      ? _c("tr", [
                          _c("td", { attrs: { colspan: "2" } }, [
                            _c("div", { staticClass: "mb-2" }, [
                              _vm._v("Your Address:")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "ml-3" }, [
                              _c("i", {
                                staticClass: "fas fa-map-marker mr-2"
                              }),
                              _vm._v(
                                "\n                      " +
                                  _vm._s(_vm.user.atr_full_address) +
                                  "\n                      "
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "btn-edit float-right",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.editAddress()
                                    }
                                  }
                                },
                                [_c("i", { staticClass: "fas fa-edit" })]
                              )
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", [
                              _vm._v("This will be the delivery address")
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.shipments == "deliver"
                      ? _c("tr", [
                          _c("td", [_vm._v("Expected Delivery Date:")]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.expected_delivery_dates) +
                                "\n                  "
                            )
                          ])
                        ])
                      : _vm._e()
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
                        referral_details: _vm.referral_details,
                        shipments_price: _vm.shipmentsPrice
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
                      "col-md-12 text-left place-order-btn-container mt-auto"
                  },
                  [
                    _c("p", [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.checkDonate,
                            expression: "checkDonate"
                          }
                        ],
                        attrs: { type: "checkbox", id: "checkDonate" },
                        domProps: {
                          checked: Array.isArray(_vm.checkDonate)
                            ? _vm._i(_vm.checkDonate, null) > -1
                            : _vm.checkDonate
                        },
                        on: {
                          change: function($event) {
                            var $$a = _vm.checkDonate,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.checkDonate = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.checkDonate = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.checkDonate = $$c
                            }
                          }
                        }
                      }),
                      _vm._v(
                        "\n                 By checking this box, a portion of this order will be donated to your chosen school or parish.\n              "
                      )
                    ])
                  ]
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
                            "\n                " +
                              _vm._s(_vm.errorMessage) +
                              "\n              "
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
                      [_vm._v("\n                PLACE ORDER\n              ")]
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
      _c("EnterOptionCModal2", { ref: "EnterOptionCModal2Ref" }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/MDZiMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT8wNjMyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlPzA4MmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9pbmRleC52dWU/YWFjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL2luZGV4LnZ1ZT9mMjlhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlP2MwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdP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QTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUE0QztBQUNsRSxnQkFBZ0IsMkJBQTJCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEwYyxDQUFnQiwyYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9DaGVja291dFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ub3JkZXItc3VtbWFyeSB7XG4gIC8vICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgLmNhcnQtY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA2MjBweDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDEwcHg7XG5cbiAgICAuY29udGVudCB7XG4gICAgICAvLyAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xuICAgICAgLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtaW4taGVpZ2h0OiA2MDBweDtcblxuICAgICAgLmNhcnQtaGVhZGVyIHtcbiAgICAgICAgLy8gcGFkZGluZzogMTBweCAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm1haW4tY29uYXRpbmVyIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMjEwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTMwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMjUwcHg7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIH1cbn1cblxuLmJ0bi1lZGl0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTEgbWItNSBtYWluLWNvbmF0aW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgPGg0PlxuICAgICAgICAgIDx1PlxuICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0c1wiPkNvbnRpbnVlIFNob3BwaW5nPC9hPlxuICAgICAgICAgIDwvdT5cbiAgICAgICAgPC9oND5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwiZXJyb3JNZXNzYWdlXCIgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+e3sgZXJyb3JNZXNzYWdlIH19PC9kaXY+IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgQGNsaWNrPVwiY2xvc2VFcnJvck1lc3NhZ2UoKVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY2xvc2VcIlxuICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHt7IGVycm9yTWVzc2FnZSB9fVxuICAgICAgICAgIDxzcGFuIHYtaWY9XCJuZWVkVG9TZXRCaWxsaW5nSW5mb1wiXG4gICAgICAgICAgICA+PGEgaHJlZj1cIi9yZWdpc3Rlci9zdWNjZXNzL2NvbmZpcm1lZFwiPkNsaWNrIEhlcmU8L2E+IHRvIHNldFxuICAgICAgICAgICAgaXQ8L3NwYW5cbiAgICAgICAgICA+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8Y3Atc2VsZWN0ZWQtaXRlbXNcbiAgICAgICAgOmNhcnQ9XCJ0aGlzLmNhcnRcIlxuICAgICAgICA6Y3VzdG9tZXJfcm9sZT1cInVzZXIuY3VzdG9tZXJfcm9sZVwiXG4gICAgICA+PC9jcC1zZWxlY3RlZC1pdGVtcz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNSBvcmRlci1zdW1tYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWNvbnRhaW5lciBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjYXJ0LWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5TaGlwcGluZzwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5EZWxpdmVyeSBUeXBlOjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtbC0zIG1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZGVsaXZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzaGlwbWVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJ0aGlzLmd1ZXN0ID09IDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVSYWRpbzFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+RGVsaXZlcjwvbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwaWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2hpcG1lbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiaW5saW5lUmFkaW8yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlBpY2stdXA8L2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgICAgIDx0ciB2LWlmPVwic2hpcG1lbnRzID09ICdwaWNrdXAnXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1iLTJcIj5TY2hvb2wvUGFyaXNoIEFkZHJlc3M6PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgb3JnX25hbWUgfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IG9yZ19hZGRyZXNzIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGk+VGhpcyB3aWxsIGJlIHRoZSBwaWNrLXVwIGFkZHJlc3M8L2k+XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICA8dHIgdi1pZj1cInNoaXBtZW50cyA9PSAnZGVsaXZlcidcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItMlwiPllvdXIgQWRkcmVzczo8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxiPnt7IG9yZ19uYW1lIH19PC9iPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxiciAvPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyIG1yLTJcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAge3sgdXNlci5hdHJfZnVsbF9hZGRyZXNzIH19XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1lZGl0IGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXRBZGRyZXNzKClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpPlRoaXMgd2lsbCBiZSB0aGUgZGVsaXZlcnkgYWRkcmVzczwvaT5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8dHIgdi1pZj1cInNoaXBtZW50cyA9PSAnZGVsaXZlcidcIj5cbiAgICAgICAgICAgICAgICAgIDx0ZD5FeHBlY3RlZCBEZWxpdmVyeSBEYXRlOjwvdGQ+XG4gICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGV4cGVjdGVkX2RlbGl2ZXJ5X2RhdGVzIH19XG4gICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNhcnQtaGVhZGVyIG10LTNcIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwidGV4dC1kYXJrXCI+T3JkZXIgU3VtbWFyeTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG9zLWZpYWNyZVxuICAgICAgICAgICAgICAgIDp0b3RhbF9hbW91bnQ9XCJ0b3RhbEFtb3VudFwiXG4gICAgICAgICAgICAgICAgOm92ZXJfYWxsX3RvdGFsPVwiT3ZlckFsbFRvdGFsXCJcbiAgICAgICAgICAgICAgICA6Y2M9XCJnZXRDQ0Ftb3VudFwiXG4gICAgICAgICAgICAgICAgOmFjaD1cImdldEFDSEFtb3VudFwiXG4gICAgICAgICAgICAgICAgOnVzZXJfYmlsbGluZ190eXBlPVwidXNlcl9iaWxsaW5nX3R5cGVcIlxuICAgICAgICAgICAgICAgIDpyZWZlcnJhbF9kZXRhaWxzPVwicmVmZXJyYWxfZGV0YWlsc1wiXG4gICAgICAgICAgICAgICAgOnNoaXBtZW50c19wcmljZT1cInNoaXBtZW50c1ByaWNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L29zLWZpYWNyZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWxlZnQgcGxhY2Utb3JkZXItYnRuLWNvbnRhaW5lciBtdC1hdXRvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tEb25hdGVcIiB2LW1vZGVsPVwiY2hlY2tEb25hdGVcIiAvPlxuICAgICAgICAgICAgICAgICBCeSBjaGVja2luZyB0aGlzIGJveCwgYSBwb3J0aW9uIG9mIHRoaXMgb3JkZXIgd2lsbCBiZSBkb25hdGVkIHRvIHlvdXIgY2hvc2VuIHNjaG9vbCBvciBwYXJpc2guXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlciBwbGFjZS1vcmRlci1idG4tY29udGFpbmVyIG10LWF1dG9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aDYgdi1pZj1cImd1ZXN0ID09IDBcIiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAge3sgZXJyb3JNZXNzYWdlIH19XG4gICAgICAgICAgICAgIDwvaDY+ICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSB3LTEwMFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicGxhY2VvcmRlckJ1dHRvbkRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJwbGFjZU9yZGVyKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUExBQ0UgT1JERVJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblx0PCEtLSBFZGl0ZWQgMDUxNDIwMjEgLS0+XG5cdDxFbnRlck9wdGlvbkNNb2RhbDIgcmVmPVwiRW50ZXJPcHRpb25DTW9kYWwyUmVmXCI+PC9FbnRlck9wdGlvbkNNb2RhbDI+XG4gICAgPFByb2R1Y3RzU3ViTW9kYWwzIHJlZj1cIlByb2R1Y3RzU3ViTW9kYWxSZWYzXCI+PC9Qcm9kdWN0c1N1Yk1vZGFsMz5cbiAgICA8UmVmZXJyYWxNb2RhbCByZWY9XCJSZWZlcnJhbE1vZGFsUmVmXCI+PC9SZWZlcnJhbE1vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuY29uc3QgQ2hQU2VsZWN0ZWRJdGVtcyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvQ2hQU2VsZWN0ZWRJdGVtc1wiICovIFwiLi9zZWxlY3RlZEl0ZW1zLnZ1ZVwiKTtcbmNvbnN0IENoUE9GaWFjcmUgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL0NoUE9GaWFjcmVcIiAqLyBcIi4vb3JkZXItc3VtbWFyeS10YWJsZS9GaWFjcmUudnVlXCJcbiAgKTtcblxuaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBcImNwLXNlbGVjdGVkLWl0ZW1zXCI6IENoUFNlbGVjdGVkSXRlbXMsXG4gICAgXCJvcy1maWFjcmVcIjogQ2hQT0ZpYWNyZSxcbiAgfSxcbiAgcHJvcHM6IFtcbiAgICBcImFjdGlvblwiLFxuICAgIFwicHJvcHByb2R1Y3RzXCIsXG4gICAgXCJndWVzdFwiLFxuICAgIFwidXNlclwiLFxuICAgIFwic3VuY2x1Ym1lbWJlclwiLFxuICAgIFwiZGVsaXZlcnlfZmVlXCIsXG4gICAgXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXG4gICAgXCJleHBlY3RlZF9kZWxpdmVyeV9kYXRlc1wiLFxuICAgIFwidXNlcl9iaWxsaW5nX3R5cGVcIixcbiAgXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgc2hpcG1lbnRzOiBcImRlbGl2ZXJcIixcbiAgICAgIC8vIHNoaXBtZW50czogXCJwaWNrdXBcIixcbiAgICAgIHNoaXBtZW50c09wdGlvbnM6IFtcbiAgICAgICAgeyB0ZXh0OiBcIkRlbGl2ZXJcIiwgdmFsdWU6IFwiZGVsaXZlclwiIH0sXG4gICAgICAgIHsgdGV4dDogXCJQaWNrLXVwXCIsIHZhbHVlOiBcInBpY2t1cFwiIH0sXG4gICAgICBdLFxuICAgICAgY2FydDogW10sXG4gICAgICBzdW5fd2hvbGVzYWxlX3BheW1lbnQ6IFwiXCIsXG4gICAgICBwbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgY3NyZjogZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICAgIG5lYXJlc3RQaWNrdXBab25lczogW10sXG4gICAgICBuZWFyZXN0RGVsaXZlcnlab25lczogW10sXG4gICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXG4gICAgICBjb3Vwb25fY29kZTogXCJcIixcbiAgICAgIGNvdXBvbk1lc3NhZ2U6IFwiXCIsXG4gICAgICBjb3Vwb246IHt9LFxuICAgICAgY291cG9uQ29kZUlzVmFsaWQ6IGZhbHNlLFxuICAgICAgZ3Vlc3RIYXNBZGRyZXNzOiBmYWxzZSxcbiAgICAgIGd1ZXN0QWRkcmVzczogXCJcIixcbiAgICAgIGd1ZXN0QWRkcmVzc09iajoge30sXG4gICAgICBndWVzdEFkZHJlc3NNb2RhbElzUmVhZHk6IGZhbHNlLFxuICAgICAgbmVlZFRvU2V0QmlsbGluZ0luZm86IGZhbHNlLFxuICAgICAgZ29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVksXG4gICAgICBvcmdfaWQ6IGNvb2tpZXMuZ2V0KFwiZmYtb3JnLWlkXCIpLFxuICAgICAgb3JnX25hbWU6IGNvb2tpZXMuZ2V0KFwiZmYtb3JnLW5hbWVcIiksXG4gICAgICBvcmdfYWRkcmVzczogY29va2llcy5nZXQoXCJmZi1vcmctYWRkcmVzc1wiKSxcbiAgICAgIHJlZmVycmFsX2RldGFpbHM6IHtcbiAgICAgICAgdG90YWxfdXNlcl9yZWZmZXJhbF9hbW91bnQ6IDAsXG4gICAgICAgIGRldGFpbHM6IFtdLFxuICAgICAgfSxcblx0ICBjaGVja0RvbmF0ZTogdHJ1ZSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHNoaXBtZW50c1ByaWNlKCkge1xuICAgICAgaWYgKHRoaXMuc2hpcG1lbnRzID09IFwiZGVsaXZlclwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGl2ZXJ5X2ZlZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH0sXG4gICAgdG90YWxBbW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiAwLjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgICB0aGlzLmNhcnQuZm9yRWFjaCgoY2FydCkgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0LmlzX3N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGNhcnQuc3Vic2NyaXB0aW9uX3ByaWNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMikge1xuICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5tZW1iZXJfcHJpY2UgKiBjYXJ0LnF0eTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMykge1xuICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC53aG9sZXNhbGVfcHJpY2UgKiBjYXJ0LnF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBjYXJ0LnByaWNlICogY2FydC5xdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXREaXNjb3VudCgpIHtcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XG4gICAgICBpZiAodGhpcy5ndWVzdCA9PSAwKSB7XG4gICAgICAgIGRpc2NvdW50ID0gdGhpcy50b3RhbEFtb3VudCAqICh0aGlzLnVzZXIuZGlzY291bnQgLyAxMDApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGRpc2NvdW50O1xuICAgIH0sXG5cbiAgICBnZXRDb3Vwb25EaXNjb3VudCgpIHtcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XG4gICAgICBpZiAodGhpcy5jb3Vwb25Db2RlSXNWYWxpZCkge1xuICAgICAgICBpZiAodGhpcy5jb3Vwb24uaXNfcGVyY2VudGFnZSkge1xuICAgICAgICAgIGRpc2NvdW50ID0gdGhpcy50b3RhbEFtb3VudCAqICh0aGlzLmNvdXBvbi5kaXNjb3VudF9hbW91bnQgLyAxMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc2NvdW50ID0gdGhpcy5jb3Vwb24uZGlzY291bnRfYW1vdW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZGlzY291bnQ7XG4gICAgfSxcbiAgICBnZXRDQ0Ftb3VudCgpIHtcbiAgICAgIGxldCBjYyA9IDA7XG4gICAgICBpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGNjID0gMC4wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2MgPSB0aGlzLnRvdGFsQW1vdW50ICogMC4wMztcbiAgICAgIH1cbiAgICAgIHJldHVybiBjYztcbiAgICB9LFxuICAgIGdldEFDSEFtb3VudCgpIHtcbiAgICAgIGxldCBhY2ggPSAwO1xuICAgICAgaWYgKHRoaXMuY2FydC5sZW5ndGggPT0gMCkge1xuICAgICAgICBhY2ggPSAwLjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhY2ggPSB0aGlzLnRvdGFsQW1vdW50ICogMC4wMjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2g7XG4gICAgfSxcblxuICAgIE92ZXJBbGxUb3RhbCgpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICB0b3RhbCA9IHRoaXMudG90YWxBbW91bnQ7XG4gICAgICBpZiAodGhpcy51c2VyX2JpbGxpbmdfdHlwZSA9PSBcIkNDXCIpIHtcbiAgICAgICAgdG90YWwgPSB0b3RhbCArIHRoaXMuZ2V0Q0NBbW91bnQ7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy51c2VyX2JpbGxpbmdfdHlwZSA9PSBcIkFDSFwiKSB7XG4gICAgICAgIHRvdGFsID0gdG90YWwgKyB0aGlzLmdldEFDSEFtb3VudDtcbiAgICAgIH1cbiAgICAgIHRvdGFsID0gdG90YWwgLSB0aGlzLnJlZmVycmFsX2RldGFpbHMudG90YWxfdXNlcl9yZWZmZXJhbF9hbW91bnQ7XG5cbiAgICAgIC8vIHRvdGFsID0gdG90YWwgKyB0aGlzLnNoaXBtZW50c1ByaWNlO1xuICAgICAgdG90YWwgPSB0b3RhbCArIHBhcnNlRmxvYXQodGhpcy5zaGlwbWVudHNQcmljZSk7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSxcblxuICAgIGNhcnRfYmFkZ2UoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXJ0Lmxlbmd0aDtcbiAgICB9LFxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcbiAgICAgIHRoaXMuZ2V0Q2FydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmdldFJlZmVycmFsRGV0YWlscygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMub3JnX2lkID0gY29va2llcy5nZXQoXCJmZi1vcmctaWRcIik7XG4gICAgICAgIHRoaXMub3JnX25hbWUgPSBjb29raWVzLmdldChcImZmLW9yZy1uYW1lXCIpO1xuICAgICAgICB0aGlzLm9yZ19hZGRyZXNzID0gY29va2llcy5nZXQoXCJmZi1vcmctYWRkcmVzc1wiKTtcbiAgICAgICAgdGhpcy5nZXRDYXJ0MigpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGVkaXRBZGRyZXNzKCkge1xuICAgICAgaWYgKHRoaXMuZ3Vlc3QgPT0gMCkge1xuICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL215cHJvZmlsZVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGlzcGxheU51bWJlcih2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICAgIGNsb3NlRXJyb3JNZXNzYWdlKCkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBcIlwiO1xuICAgIH0sXG4gICAgcGxhY2VPcmRlcigpIHtcbiAgICAgIC8vIExvYWRpbmdPdmVybGF5KCk7XG5cbiAgICAgIC8vIC8vIEluLXByb2dyZXNzXG4gICAgICAvLyBhbGVydChcIlVuZGVyIENvbnN0cnVjdGlvbiFcIik7XG4gICAgICAvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgIC8vIC8vXG5cbiAgICAgIC8vQ29udGludWUgUHJvY2Vzc1xuXHQgICAgLy8gRWRpdGVkIDA1MTQyMDIxXG5cdCAgXG4gICAgICB0aGlzLnBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZCA9IHRydWU7XG4gICAgICBpZiAodGhpcy5jYXJ0Lmxlbmd0aCA+IDApIHsgICAgICAgIFxuXHRcdGlmICh0aGlzLmNoZWNrRG9uYXRlID09IHRydWUpIHtcblx0XHQgICQoXCIjZW50ZXJPcHRpb25DSWRNb2RhbDJcIikubW9kYWwoXCJzaG93XCIpO1xuXHRcdCAgLy8gdGhpcy5maWFjcmVDdXN0b21lck9yZGVyKCk7XG5cdCAgXHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLm9yZ19pZCA9IDA7XG5cdFx0XHR0aGlzLmZpYWNyZUN1c3RvbWVyT3JkZXIoKTtcblx0XHR9XG5cdFx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IFwiUGxlYXNlIHNob3AgZm9yIHByb2R1Y3RzIGZpcnN0LlwiO1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB0aGlzLnBsYWNlb3JkZXJCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgLy8gQ2FsbCB0aGUgU2Nob29sL1BhcmlzaCB0byBkb25hdGVcbiAgICB9LFxuXG4gICAgZmlhY3JlQ3VzdG9tZXJPcmRlcigpIHtcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9wbGFjZW9yZGVyL2ZpYWNyZUN1c3RvbWVyXCIsIHtcbiAgICAgICAgICBjYXJ0OiB0aGlzLmNhcnQsXG4gICAgICAgICAgb3JnX2lkOiB0aGlzLm9yZ19pZCxcbiAgICAgICAgICBzaGlwbWVudHM6IHRoaXMuc2hpcG1lbnRzLFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgLy8gTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAvLyB0aGlzLmNhcnQgPSBbXTtcbiAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XG4gICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuXG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3BsYWNlb3JkZXIvdGhhbmt5b3VcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoZXJyLnJlc3BvbnNlLmRhdGEuZGF0YV9tZXNzYWdlKTtcbiAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9XG4gICAgICAgICAgICBcIlBheW1lbnQgZXJyb3I6IFwiICsgZXJyLnJlc3BvbnNlLmRhdGEuZGF0YV9tZXNzYWdlO1xuICAgICAgICAgIHRoaXMucGxhY2VvcmRlckJ1dHRvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgIC8vICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZ2V0Q2FydCgpIHtcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XG5cbiAgICAgIGlmICh0aGlzLmlmQ2FydEV4cGlyZWQoKSkge1xuICAgICAgICB0aGlzLmNhcnQgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGxhc3RjYXJ0ID1cbiAgICAgICAgICAoYXdhaXQgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgfHwgXCJudWxsXCIpKSB8fCBbXTtcbiAgICAgICAgdGhpcy5jYXJ0ID0gbGFzdGNhcnQ7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2FydC5sZW5ndGggPT0gMCkge1xuICAgICAgICBpZiAodGhpcy51c2VyLnN1bl9pc19leHBpcmVkID09IDEpIHtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBhc3luYyBnZXRDYXJ0MigpIHtcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KGAvY2FydC9nZXRVc2VyQ2FydERldGFpbHMvJHt0aGlzLnVzZXIuaWR9LyR7dGhpcy5vcmdfaWR9YClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGxldCBsYXN0Y2FydCA9IHJlcy5kYXRhO1xuICAgICAgICAgIHRoaXMuY2FydCA9IFtdO1xuICAgICAgICAgIGxhc3RjYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcbiAgICAgICAgICAgIGNhcnQuYXRyX2RldGFpbHMucXR5ID0gY2FydC5xdHk7XG4gICAgICAgICAgICB0aGlzLmNhcnQucHVzaChjYXJ0LmF0cl9kZXRhaWxzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldFJlZmVycmFsRGV0YWlscygpIHtcbiAgICAgIGF4aW9zLmdldChgL2dldFVzZXJSZWZlcnJhbENvZGVEZXRhaWxzYCkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMucmVmZXJyYWxfZGV0YWlscyA9IHJlcy5kYXRhO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5kZXRhaWxzKTtcbiAgICAgICAgdGhpcy4kcmVmcy5SZWZlcnJhbE1vZGFsUmVmLmRhdGEgPSByZXMuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpZkNhcnRFeHBpcmVkKCkge1xuICAgICAgY29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydF9leHBpcnlcIik7XG4gICAgICBpZiAoIWl0ZW1TdHIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjb25zdCBpdGVtID0gSlNPTi5wYXJzZShpdGVtU3RyKTtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIHNldENhcnRFeHBpcnkodHRsKSB7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgbGV0IGV4cGlyeSA9IG5vdy5nZXRUaW1lKCkgKyB0dGw7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfZXhwaXJ5XCIsIGV4cGlyeSk7XG4gICAgfSxcblxuICAgIHJlbW92ZUl0ZW1JbkNhcnQoZGF0YSkge1xuICAgICAgaWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xuICAgICAgICB0aGlzLmNhcnQuc3BsaWNlKFxuICAgICAgICAgIHRoaXMuY2FydC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpLmlkID09PSBkYXRhLmlkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwidXBkYXRlQ2FydEJhZGdlXCIsIFwidXBkYXRlIGNhcnRcIik7XG4gICAgICAgIHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgYC9jYXJ0L3JlbW92ZVByb2R1Y3RPZlVzZXJDYXJ0LyR7dGhpcy51c2VyLmlkfS8ke3RoaXMub3JnX2lkfS8ke2RhdGEuaWR9YFxuICAgICAgICAgIClcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRldmVudHMuZmlyZShcInVwZGF0ZUNhcnRCYWRnZTNcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgICB0aGlzLmNhcnQuc3BsaWNlKFxuICAgICAgICAgICAgICB0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgYWRkUXR5KHByb2R1Y3QpIHtcbiAgICAgIGlmIChwcm9kdWN0LnF0eSA8IHByb2R1Y3QubWF4b3JkZXIgKyA1MCkge1xuICAgICAgICBwcm9kdWN0LnF0eSsrO1xuICAgICAgICBpZiAodGhpcy5ndWVzdCA9PSAxKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgICAgIHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgICAgICB2YXIgcmF3RGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RfZGV0YWlsczogcHJvZHVjdCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvY2FydC91cGRhdGVRdWFudGl0eVwiLCByYXdEYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBwcm9kdWN0LnF0eS0tO1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJRdHkocHJvZHVjdCkge1xuICAgICAgaWYgKHByb2R1Y3QucXR5ID4gMSkge1xuICAgICAgICBwcm9kdWN0LnF0eS0tO1xuICAgICAgICBpZiAodGhpcy5ndWVzdCA9PSAxKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgICAgIHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgICAgICB2YXIgcmF3RGF0YSA9IHtcbiAgICAgICAgICAgIHByb2R1Y3RfZGV0YWlsczogcHJvZHVjdCxcbiAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXCIvY2FydC91cGRhdGVRdWFudGl0eVwiLCByYXdEYXRhKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICBwcm9kdWN0LnF0eSsrO1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgICBhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN1YihkYXRhMSwgZGF0YSwgaW5kZXgpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGExKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgaWYgKGRhdGEuc3ViID09IFwic3ViXCIpIHtcbiAgICAgICAgdGhpcy4kcmVmcy5Qcm9kdWN0c1N1Yk1vZGFsUmVmMy5kYXRhMSA9IGRhdGExO1xuICAgICAgICB0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLiRyZWZzLlByb2R1Y3RzU3ViTW9kYWxSZWYzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuJHJlZnMuUHJvZHVjdHNTdWJNb2RhbFJlZjMub3Blbk1vZGFsKCk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5zdWIgPT0gXCJ1bnN1YlwiKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX3Byb2R1Y3RzID0gZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHM7XG4gICAgICAgIGNvbnN0IGF0cl9vcmdpbmFsX3NlbGVjdGVkX3Byb2R1Y3RzID1cbiAgICAgICAgICBkYXRhMS5hdHJfb3JnaW5hbF9zZWxlY3RlZF9wcm9kdWN0cztcbiAgICAgICAgc2VsZWN0ZWRfcHJvZHVjdHNbaW5kZXhdID0gYXRyX29yZ2luYWxfc2VsZWN0ZWRfcHJvZHVjdHNbaW5kZXhdO1xuICAgICAgICBjb25zdCBuZXdkYXRhID0gc2VsZWN0ZWRfcHJvZHVjdHM7XG4gICAgICAgIGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzID0gW107XG4gICAgICAgIGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzID0gbmV3ZGF0YTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlscyhkYXRhMSk7XG4gICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVQcm9kdWN0cyhkYXRhMSwgaXRlbSwgaW5kZXgpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkX3Byb2R1Y3RzID0gZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHM7XG4gICAgICBzZWxlY3RlZF9wcm9kdWN0c1tpbmRleF0gPSBpdGVtO1xuICAgICAgY29uc3QgbmV3ZGF0YSA9IHNlbGVjdGVkX3Byb2R1Y3RzO1xuICAgICAgZGF0YTEuc2VsZWN0ZWRfcHJvZHVjdHMgPSBbXTtcbiAgICAgIGRhdGExLnNlbGVjdGVkX3Byb2R1Y3RzID0gbmV3ZGF0YTtcbiAgICAgIHRoaXMudXBkYXRlUHJvZHVjdERldGFpbHMoZGF0YTEpO1xuICAgIH0sXG4gICAgdXBkYXRlUmVjdXJyaW5nKHByb2R1Y3QpIHtcbiAgICAgIHByb2R1Y3QucmVjdXJyaW5nID0gIXByb2R1Y3QucmVjdXJyaW5nO1xuICAgICAgdGhpcy51cGRhdGVQcm9kdWN0RGV0YWlscyhwcm9kdWN0KTtcbiAgICB9LFxuICAgIHVwZGF0ZVByb2R1Y3REZXRhaWxzKHByb2R1Y3QpIHtcbiAgICAgIGlmICh0aGlzLmd1ZXN0ID09IDApIHtcbiAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgICAgdmFyIHJhd0RhdGEgPSB7XG4gICAgICAgICAgcHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxuICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICBvcmdfaWQ6IHRoaXMub3JnX2lkLFxuICAgICAgICB9O1xuICAgICAgICBheGlvc1xuICAgICAgICAgIC5wb3N0KFwiL2NhcnQvdXBkYXRlUHJvZHVjdERldGFpbHNcIiwgcmF3RGF0YSlcbiAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gICAgICAgICAgICAvLyBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgIGFsZXJ0KFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBDb250YXQgU3VwcG9ydC4gXCIgKyBlcnIpO1xuICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vcmRlci1zdW1tYXJ5IC5jYXJ0LWNvbnRhaW5lcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gIG1pbi1oZWlnaHQ6IDYyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyIC5jb250ZW50W2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcbi5vcmRlci1zdW1tYXJ5IC5jYXJ0LWNvbnRhaW5lciAuY29udGVudCAuY2FydC1oZWFkZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMjBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xcbi5tYWluLWNvbmF0aW5lcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XFxuLm1haW4tY29uYXRpbmVyW2RhdGEtdi0yNjk4YzJjZl0ge1xcbiAgICBtYXgtd2lkdGg6IDEyMTBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMzAwcHgpIHtcXG4ubWFpbi1jb25hdGluZXJbZGF0YS12LTI2OThjMmNmXSB7XFxuICAgIG1heC13aWR0aDogMTI1MHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xcbi5tYWluLWNvbmF0aW5lcltkYXRhLXYtMjY5OGMyY2ZdIHtcXG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XFxufVxcbn1cXG4uYnRuLWVkaXRbZGF0YS12LTI2OThjMmNmXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2OThjMmNmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC0xIG1iLTUgbWFpbi1jb25hdGluZXJcIiB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZXJyb3JNZXNzYWdlXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiLCBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1kaXNtaXNzXCI6IFwiYWxlcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xvc2VFcnJvck1lc3NhZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLDl1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICsgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0ubmVlZFRvU2V0QmlsbGluZ0luZm9cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3JlZ2lzdGVyL3N1Y2Nlc3MvY29uZmlybWVkXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2xpY2sgSGVyZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgdG8gc2V0XFxuICAgICAgICAgICAgaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiY3Atc2VsZWN0ZWQtaXRlbXNcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgY2FydDogdGhpcy5jYXJ0LCBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTUgb3JkZXItc3VtbWFyeVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBkLWZsZXggZmxleC1jb2x1bW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVsaXZlcnkgVHlwZTpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtbC0zIG1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaGlwbWVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNoaXBtZW50c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcImRlbGl2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5ndWVzdCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5zaGlwbWVudHMsIFwiZGVsaXZlclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcG1lbnRzID0gXCJkZWxpdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZVJhZGlvMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGl2ZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uc2hpcG1lbnRzID09IFwicGlja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2Nob29sL1BhcmlzaCBBZGRyZXNzOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vcmdfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmdfYWRkcmVzcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaGlzIHdpbGwgYmUgdGhlIHBpY2stdXAgYWRkcmVzc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zaGlwbWVudHMgPT0gXCJkZWxpdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWW91ciBBZGRyZXNzOlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1hcC1tYXJrZXIgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5hdHJfZnVsbF9hZGRyZXNzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1lZGl0IGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZWRpdEFkZHJlc3MoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1lZGl0XCIgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRoaXMgd2lsbCBiZSB0aGUgZGVsaXZlcnkgYWRkcmVzc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5zaGlwbWVudHMgPT0gXCJkZWxpdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJFeHBlY3RlZCBEZWxpdmVyeSBEYXRlOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmV4cGVjdGVkX2RlbGl2ZXJ5X2RhdGVzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwib3MtZmlhY3JlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxfYW1vdW50OiBfdm0udG90YWxBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyX2FsbF90b3RhbDogX3ZtLk92ZXJBbGxUb3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjOiBfdm0uZ2V0Q0NBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2g6IF92bS5nZXRBQ0hBbW91bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2JpbGxpbmdfdHlwZTogX3ZtLnVzZXJfYmlsbGluZ190eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJyYWxfZGV0YWlsczogX3ZtLnJlZmVycmFsX2RldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwbWVudHNfcHJpY2U6IF92bS5zaGlwbWVudHNQcmljZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJjb2wtbWQtMTIgdGV4dC1sZWZ0IHBsYWNlLW9yZGVyLWJ0bi1jb250YWluZXIgbXQtYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tEb25hdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja0RvbmF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcImNoZWNrRG9uYXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrRG9uYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jaGVja0RvbmF0ZSwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmNoZWNrRG9uYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrRG9uYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tEb25hdGUgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja0RvbmF0ZSA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrRG9uYXRlID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgIEJ5IGNoZWNraW5nIHRoaXMgYm94LCBhIHBvcnRpb24gb2YgdGhpcyBvcmRlciB3aWxsIGJlIGRvbmF0ZWQgdG8geW91ciBjaG9zZW4gc2Nob29sIG9yIHBhcmlzaC5cXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiY29sLW1kLTEyIHRleHQtY2VudGVyIHBsYWNlLW9yZGVyLWJ0bi1jb250YWluZXIgbXQtYXV0b1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZ3Vlc3QgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvck1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1sZyBidG4tcHJpbWFyeSB3LTEwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5wbGFjZW9yZGVyQnV0dG9uRGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wbGFjZU9yZGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBQTEFDRSBPUkRFUlxcbiAgICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiRW50ZXJPcHRpb25DTW9kYWwyXCIsIHsgcmVmOiBcIkVudGVyT3B0aW9uQ01vZGFsMlJlZlwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiUHJvZHVjdHNTdWJNb2RhbDNcIiwgeyByZWY6IFwiUHJvZHVjdHNTdWJNb2RhbFJlZjNcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlJlZmVycmFsTW9kYWxcIiwgeyByZWY6IFwiUmVmZXJyYWxNb2RhbFJlZlwiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9wcm9kdWN0c1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJDb250aW51ZSBTaG9wcGluZ1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiBjYXJ0LWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhcmtcIiB9LCBbX3ZtLl92KFwiU2hpcHBpbmdcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNhcnQtaGVhZGVyIG10LTNcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIk9yZGVyIFN1bW1hcnlcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY5OGMyY2Ymc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNjk4YzJjZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2OThjMmNmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2OThjMmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2OThjMmNmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY5OGMyY2Ymc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjY5OGMyY2YnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2UvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY5OGMyY2YmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjk4YzJjZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2OThjMmNmJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==