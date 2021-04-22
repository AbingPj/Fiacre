(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/productCart"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/cart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["guest", "clear_cart", "wholesaler_minimum_order_amount", "guest_status", "user_id", "org_id", "organization"],
  data: function data() {
    return {
      cart: [],
      message: "",
      countFromDB: 0
    };
  },
  computed: {
    cart_badge: function cart_badge() {
      var length = 0;

      if (this.guest == 1) {
        length = this.cart.length;
      } else {
        length = this.countFromDB;
      }

      var badge = "";

      if (length != 0) {
        var badge = length;
      }

      return badge;
    }
  },
  created: function created() {
    if (this.guest_status != "guest-checkout") {
      //  loadingOverlay().cancel(spinHandle);
      //  LoadingOverlay();
      loadingOverlay().cancel(spinHandle);
    }

    if (this.guest == 1) {
      if (this.clear_cart == "clearcart") {
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.getCart();
      } else {
        this.getCart();
      }
    } else {
      var ff_org_id = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-id");

      if (this.organization) {
        if (ff_org_id != this.org_id) {
          console.log("if");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-id");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-name");
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-address");
          var expiryTime = new Date(new Date().getTime() + 86400 * 1000);
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("ff-org-id", this.organization.id, {
            expires: expiryTime
          });
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("ff-org-name", this.organization.org_name, {
            expires: expiryTime
          });
          js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set("ff-org-address", this.organization.atr_address, {
            expires: expiryTime
          });
          this.getCart2();
        } else {
          console.log("else");
          this.getCart2();
        }
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-id");
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-name");
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove("ff-org-address");
      }
    }
  },
  methods: {
    checkoutPage: function checkoutPage() {
      //   window.location.href = "/products/checkout";
      window.location.href = "/products";
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
    getCart: function getCart() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var lastcart;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this.ifCartExpired()) {
                  _context.next = 9;
                  break;
                }

                _context.next = 3;
                return JSON.parse(localStorage.getItem("cart") || "null");

              case 3:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = [];

              case 6:
                lastcart = _context.t0;
                _this.cart = lastcart;
                localStorage.setItem("cart_badge", _this.cart.length);

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getCart2: function getCart2() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var org_id;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                org_id = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get("ff-org-id");
                axios.get("/cart/getUserCartCount/".concat(_this2.user_id, "/").concat(org_id)).then(function (res) {
                  _this2.countFromDB = res.data;
                })["catch"](function (err) {
                  console.error(err);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getCart3: function getCart3(data) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                axios.get("/cart/getUserCartCount/".concat(_this3.user_id, "/").concat(data)).then(function (res) {
                  _this3.countFromDB = res.data;
                })["catch"](function (err) {
                  console.error(err);
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  events: {
    updateCartBadge: function updateCartBadge(message) {
      this.message = message;
      this.getCart();
    },
    updateCartBadge2: function updateCartBadge2(message) {
      this.message = message;
      this.getCart2();
    },
    updateCartBadge3: function updateCartBadge3(message) {
      this.countFromDB = message;
    },
    updateCartBadge4: function updateCartBadge4(data) {
      this.getCart3(data);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "li",
    {
      staticClass: "nav-item cart-item",
      on: {
        click: function($event) {
          return _vm.checkoutPage()
        }
      }
    },
    [
      _c("a", { staticClass: "nav-link", staticStyle: { padding: "0px" } }, [
        _c(
          "i",
          {
            staticClass: "fas fa-cart-plus",
            staticStyle: { "font-size": "30px", color: "#339f25" }
          },
          [
            _c(
              "span",
              {
                staticClass: "badge badge-danger align-top",
                staticStyle: { "font-size": "10px" },
                attrs: { id: "sunfarm-badge-1" }
              },
              [_vm._v(_vm._s(_vm.cart_badge))]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/cart.vue":
/*!***************************************************!*\
  !*** ./resources/js/frontend/components/cart.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.vue?vue&type=template&id=6df9860c& */ "./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c&");
/* harmony import */ var _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/cart.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/frontend/components/cart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/cart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./cart.vue?vue&type=template&id=6df9860c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/cart.vue?vue&type=template&id=6df9860c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cart_vue_vue_type_template_id_6df9860c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWU/ZDJiOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZT9jY2EyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NhcnQudnVlP2MxY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQSxVQUNBLE9BREEsRUFFQSxZQUZBLEVBR0EsaUNBSEEsRUFJQSxjQUpBLEVBS0EsU0FMQSxFQU1BLFFBTkEsRUFPQSxjQVBBLENBREE7QUFVQSxNQVZBLGtCQVVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FoQkE7QUFpQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFiQSxHQWpCQTtBQWdDQSxTQWhDQSxxQkFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLE1BU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0EsU0FoQkEsTUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQXJCQSxNQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTdFQTtBQThFQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFNQSxpQkFOQSwyQkFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBakJBO0FBa0JBLFdBbEJBLHFCQWtCQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNBLHFCQURBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBR0Esa0RBSEE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4QkFHQSxFQUhBOztBQUFBO0FBRUEsd0JBRkE7QUFJQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsS0F6QkE7QUEwQkEsWUExQkEsc0JBMEJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esc0JBREEsR0FDQSxpRUFEQTtBQUVBLHNCQUNBLEdBREEsa0NBQ0EsY0FEQSxjQUNBLE1BREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLGlCQUpBLFdBS0E7QUFDQTtBQUNBLGlCQVBBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUEsS0FwQ0E7QUFxQ0EsWUFyQ0Esb0JBcUNBLElBckNBLEVBcUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHNCQUNBLEdBREEsa0NBQ0EsY0FEQSxjQUNBLElBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLGlCQUpBLFdBS0E7QUFDQTtBQUNBLGlCQVBBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUE5Q0EsR0E5RUE7QUE4SEE7QUFDQSxtQkFEQSwyQkFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLG9CQUxBLDRCQUtBLE9BTEEsRUFLQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0Esb0JBVEEsNEJBU0EsT0FUQSxFQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsb0JBWkEsNEJBWUEsSUFaQSxFQVlBO0FBQ0E7QUFDQTtBQWRBO0FBOUhBLEc7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0NBQXdDLGlCQUFpQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvcHJvZHVjdENhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGxpIGNsYXNzPVwibmF2LWl0ZW0gY2FydC1pdGVtXCIgQGNsaWNrPVwiY2hlY2tvdXRQYWdlKClcIj5cclxuXHRcdDxhIHN0eWxlPVwicGFkZGluZzogMHB4XCIgY2xhc3M9XCJuYXYtbGlua1wiPlxyXG5cdFx0XHQ8IS0tIDxpbWcgc3JjPVwiL2ltZy9zdW5mYXJtYWN5L0ljb24tYXdlc29tZS1jYXJ0LXBsdXMuc3ZnXCIgc3R5bGU9XCJ3aWR0aDphdXRvOyBoZWlnaHQ6MzBweDtcIiAvPiAtLT5cclxuXHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtY2FydC1wbHVzXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHg7IGNvbG9yOiAjMzM5ZjI1XCI+XHJcblx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAxMHB4XCJcclxuXHRcdFx0XHRcdGlkPVwic3VuZmFybS1iYWRnZS0xXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIGFsaWduLXRvcFwiXHJcblx0XHRcdFx0XHQ+e3sgY2FydF9iYWRnZSB9fTwvc3BhblxyXG5cdFx0XHRcdD5cclxuXHRcdFx0PC9pPlxyXG5cdFx0PC9hPlxyXG5cdDwvbGk+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiBbXHJcblx0XHRcdFwiZ3Vlc3RcIixcclxuXHRcdFx0XCJjbGVhcl9jYXJ0XCIsXHJcblx0XHRcdFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxyXG5cdFx0XHRcImd1ZXN0X3N0YXR1c1wiLFxyXG5cdFx0XHRcInVzZXJfaWRcIixcclxuXHRcdFx0XCJvcmdfaWRcIixcclxuXHRcdFx0XCJvcmdhbml6YXRpb25cIixcclxuXHRcdF0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGNhcnQ6IFtdLFxyXG5cdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXHJcblx0XHRcdFx0Y291bnRGcm9tREI6IDAsXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Y2FydF9iYWRnZSgpIHtcclxuXHRcdFx0XHR2YXIgbGVuZ3RoID0gMDtcclxuXHRcdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAxKSB7XHJcblx0XHRcdFx0XHRsZW5ndGggPSB0aGlzLmNhcnQubGVuZ3RoO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRsZW5ndGggPSB0aGlzLmNvdW50RnJvbURCO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgYmFkZ2UgPSBcIlwiO1xyXG5cdFx0XHRcdGlmIChsZW5ndGggIT0gMCkge1xyXG5cdFx0XHRcdFx0dmFyIGJhZGdlID0gbGVuZ3RoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYmFkZ2U7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYgKHRoaXMuZ3Vlc3Rfc3RhdHVzICE9IFwiZ3Vlc3QtY2hlY2tvdXRcIikge1xyXG5cdFx0XHRcdC8vICBsb2FkaW5nT3ZlcmxheSgpLmNhbmNlbChzcGluSGFuZGxlKTtcclxuXHRcdFx0XHQvLyAgTG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHRsb2FkaW5nT3ZlcmxheSgpLmNhbmNlbChzcGluSGFuZGxlKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNsZWFyX2NhcnQgPT0gXCJjbGVhcmNhcnRcIikge1xyXG5cdFx0XHRcdFx0dGhpcy5jYXJ0ID0gW107XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XHJcblx0XHRcdFx0XHR0aGlzLmdldENhcnQoKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRDYXJ0KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciBmZl9vcmdfaWQgPSBjb29raWVzLmdldChcImZmLW9yZy1pZFwiKTtcclxuXHRcdFx0XHRpZiAodGhpcy5vcmdhbml6YXRpb24pIHtcclxuXHRcdFx0XHRcdGlmIChmZl9vcmdfaWQgIT0gdGhpcy5vcmdfaWQpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJpZlwiKTtcclxuXHRcdFx0XHRcdFx0Y29va2llcy5yZW1vdmUoXCJmZi1vcmctaWRcIik7XHJcblx0XHRcdFx0XHRcdGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLW5hbWVcIik7XHJcblx0XHRcdFx0XHRcdGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLWFkZHJlc3NcIik7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGV4cGlyeVRpbWUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDg2NDAwICogMTAwMCk7XHJcblx0XHRcdFx0XHRcdGNvb2tpZXMuc2V0KFwiZmYtb3JnLWlkXCIsIHRoaXMub3JnYW5pemF0aW9uLmlkLCB7XHJcblx0XHRcdFx0XHRcdFx0ZXhwaXJlczogZXhwaXJ5VGltZSxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGNvb2tpZXMuc2V0KFwiZmYtb3JnLW5hbWVcIiwgdGhpcy5vcmdhbml6YXRpb24ub3JnX25hbWUsIHtcclxuXHRcdFx0XHRcdFx0XHRleHBpcmVzOiBleHBpcnlUaW1lLFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0Y29va2llcy5zZXQoXCJmZi1vcmctYWRkcmVzc1wiLCB0aGlzLm9yZ2FuaXphdGlvbi5hdHJfYWRkcmVzcywge1xyXG5cdFx0XHRcdFx0XHRcdGV4cGlyZXM6IGV4cGlyeVRpbWUsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmdldENhcnQyKCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImVsc2VcIik7XHJcblx0XHRcdFx0XHRcdHRoaXMuZ2V0Q2FydDIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBjb29raWVzLnJlbW92ZShcImZmLW9yZy1pZFwiKTtcclxuXHRcdFx0XHRcdFx0Y29va2llcy5yZW1vdmUoXCJmZi1vcmctbmFtZVwiKTtcclxuXHRcdFx0XHRcdFx0Y29va2llcy5yZW1vdmUoXCJmZi1vcmctYWRkcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hlY2tvdXRQYWdlKCkge1xyXG5cdFx0XHRcdC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHNcIjtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGlmQ2FydEV4cGlyZWQoKSB7XHJcblx0XHRcdFx0Y29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydF9leHBpcnlcIik7XHJcblx0XHRcdFx0aWYgKCFpdGVtU3RyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbVN0cik7XHJcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0pIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldENhcnQoKSB7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlmQ2FydEV4cGlyZWQoKSkge1xyXG5cdFx0XHRcdFx0bGV0IGxhc3RjYXJ0ID1cclxuXHRcdFx0XHRcdFx0KGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpIHx8IFwibnVsbFwiKSkgfHwgW107XHJcblx0XHRcdFx0XHR0aGlzLmNhcnQgPSBsYXN0Y2FydDtcclxuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIGdldENhcnQyKCkge1xyXG5cdFx0XHRcdHZhciBvcmdfaWQgPSBjb29raWVzLmdldChcImZmLW9yZy1pZFwiKTtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LmdldChgL2NhcnQvZ2V0VXNlckNhcnRDb3VudC8ke3RoaXMudXNlcl9pZH0vJHtvcmdfaWR9YClcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jb3VudEZyb21EQiA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhc3luYyBnZXRDYXJ0MyhkYXRhKSB7XHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoYC9jYXJ0L2dldFVzZXJDYXJ0Q291bnQvJHt0aGlzLnVzZXJfaWR9LyR7ZGF0YX1gKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvdW50RnJvbURCID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0ZXZlbnRzOiB7XHJcblx0XHRcdHVwZGF0ZUNhcnRCYWRnZShtZXNzYWdlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdFx0XHR0aGlzLmdldENhcnQoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dXBkYXRlQ2FydEJhZGdlMihtZXNzYWdlKSB7XHJcblx0XHRcdFx0dGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuXHRcdFx0XHR0aGlzLmdldENhcnQyKCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHVwZGF0ZUNhcnRCYWRnZTMobWVzc2FnZSkge1xyXG5cdFx0XHRcdHRoaXMuY291bnRGcm9tREIgPSBtZXNzYWdlO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVDYXJ0QmFkZ2U0KGRhdGEpIHtcclxuXHRcdFx0XHR0aGlzLmdldENhcnQzKGRhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxpXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gY2FydC1pdGVtXCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5jaGVja291dFBhZ2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2FydC1wbHVzXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjMwcHhcIiwgY29sb3I6IFwiIzMzOWYyNVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLWRhbmdlciBhbGlnbi10b3BcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInN1bmZhcm0tYmFkZ2UtMVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmNhcnRfYmFkZ2UpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGY5ODYwYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2ZGY5ODYwYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2ZGY5ODYwYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2ZGY5ODYwYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRmOTg2MGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmRmOTg2MGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGY5ODYwYyZcIiJdLCJzb3VyY2VSb290IjoiIn0=