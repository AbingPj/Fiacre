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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWU/ZDJiOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZT9jY2EyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NhcnQudnVlP2MxY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQSxVQUNBLE9BREEsRUFFQSxZQUZBLEVBR0EsaUNBSEEsRUFJQSxjQUpBLEVBS0EsU0FMQSxFQU1BLFFBTkEsRUFPQSxjQVBBLENBREE7QUFVQSxNQVZBLGtCQVVBO0FBQ0E7QUFDQSxjQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0EsR0FoQkE7QUFpQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFiQSxHQWpCQTtBQWdDQSxTQWhDQSxxQkFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEEsTUFLQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLE1BU0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0EsU0FoQkEsTUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQXJCQSxNQXFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTdFQTtBQThFQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFNQSxpQkFOQSwyQkFNQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLEtBakJBO0FBa0JBLFdBbEJBLHFCQWtCQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUNBLHFCQURBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsdUJBR0Esa0RBSEE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4QkFHQSxFQUhBOztBQUFBO0FBRUEsd0JBRkE7QUFJQTtBQUNBOztBQUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0EsS0F6QkE7QUEwQkEsWUExQkEsc0JBMEJBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Esc0JBREEsR0FDQSxpRUFEQTtBQUVBLHNCQUNBLEdBREEsa0NBQ0EsY0FEQSxjQUNBLE1BREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLGlCQUpBLFdBS0E7QUFDQTtBQUNBLGlCQVBBOztBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUEsS0FwQ0E7QUFxQ0EsWUFyQ0Esb0JBcUNBLElBckNBLEVBcUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHNCQUNBLEdBREEsa0NBQ0EsY0FEQSxjQUNBLElBREEsR0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLGlCQUpBLFdBS0E7QUFDQTtBQUNBLGlCQVBBOztBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUE5Q0EsR0E5RUE7QUE4SEE7QUFDQSxtQkFEQSwyQkFDQSxPQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQTtBQUtBLG9CQUxBLDRCQUtBLE9BTEEsRUFLQTtBQUNBO0FBQ0E7QUFDQSxLQVJBO0FBU0Esb0JBVEEsNEJBU0EsT0FUQSxFQVNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsb0JBWkEsNEJBWUEsSUFaQSxFQVlBO0FBQ0E7QUFDQTtBQWRBO0FBOUhBLEc7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGVBQWUsd0NBQXdDLGlCQUFpQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRCx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvcHJvZHVjdENhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxsaSBjbGFzcz1cIm5hdi1pdGVtIGNhcnQtaXRlbVwiIEBjbGljaz1cImNoZWNrb3V0UGFnZSgpXCI+XG5cdFx0PGEgc3R5bGU9XCJwYWRkaW5nOiAwcHhcIiBjbGFzcz1cIm5hdi1saW5rXCI+XG5cdFx0XHQ8IS0tIDxpbWcgc3JjPVwiL2ltZy9zdW5mYXJtYWN5L0ljb24tYXdlc29tZS1jYXJ0LXBsdXMuc3ZnXCIgc3R5bGU9XCJ3aWR0aDphdXRvOyBoZWlnaHQ6MzBweDtcIiAvPiAtLT5cblx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWNhcnQtcGx1c1wiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4OyBjb2xvcjogIzMzOWYyNVwiPlxuXHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAxMHB4XCJcblx0XHRcdFx0XHRpZD1cInN1bmZhcm0tYmFkZ2UtMVwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJiYWRnZSBiYWRnZS1kYW5nZXIgYWxpZ24tdG9wXCJcblx0XHRcdFx0XHQ+e3sgY2FydF9iYWRnZSB9fTwvc3BhblxuXHRcdFx0XHQ+XG5cdFx0XHQ8L2k+XG5cdFx0PC9hPlxuXHQ8L2xpPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGltcG9ydCBjb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiBbXG5cdFx0XHRcImd1ZXN0XCIsXG5cdFx0XHRcImNsZWFyX2NhcnRcIixcblx0XHRcdFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxuXHRcdFx0XCJndWVzdF9zdGF0dXNcIixcblx0XHRcdFwidXNlcl9pZFwiLFxuXHRcdFx0XCJvcmdfaWRcIixcblx0XHRcdFwib3JnYW5pemF0aW9uXCIsXG5cdFx0XSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y2FydDogW10sXG5cdFx0XHRcdG1lc3NhZ2U6IFwiXCIsXG5cdFx0XHRcdGNvdW50RnJvbURCOiAwLFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRjYXJ0X2JhZGdlKCkge1xuXHRcdFx0XHR2YXIgbGVuZ3RoID0gMDtcblx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xuXHRcdFx0XHRcdGxlbmd0aCA9IHRoaXMuY2FydC5sZW5ndGg7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGVuZ3RoID0gdGhpcy5jb3VudEZyb21EQjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgYmFkZ2UgPSBcIlwiO1xuXHRcdFx0XHRpZiAobGVuZ3RoICE9IDApIHtcblx0XHRcdFx0XHR2YXIgYmFkZ2UgPSBsZW5ndGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGJhZGdlO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRpZiAodGhpcy5ndWVzdF9zdGF0dXMgIT0gXCJndWVzdC1jaGVja291dFwiKSB7XG5cdFx0XHRcdC8vICBsb2FkaW5nT3ZlcmxheSgpLmNhbmNlbChzcGluSGFuZGxlKTtcblx0XHRcdFx0Ly8gIExvYWRpbmdPdmVybGF5KCk7XG5cdFx0XHRcdGxvYWRpbmdPdmVybGF5KCkuY2FuY2VsKHNwaW5IYW5kbGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5ndWVzdCA9PSAxKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNsZWFyX2NhcnQgPT0gXCJjbGVhcmNhcnRcIikge1xuXHRcdFx0XHRcdHRoaXMuY2FydCA9IFtdO1xuXHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG5cdFx0XHRcdFx0dGhpcy5nZXRDYXJ0KCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5nZXRDYXJ0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBmZl9vcmdfaWQgPSBjb29raWVzLmdldChcImZmLW9yZy1pZFwiKTtcblx0XHRcdFx0aWYgKHRoaXMub3JnYW5pemF0aW9uKSB7XG5cdFx0XHRcdFx0aWYgKGZmX29yZ19pZCAhPSB0aGlzLm9yZ19pZCkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJpZlwiKTtcblx0XHRcdFx0XHRcdGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLWlkXCIpO1xuXHRcdFx0XHRcdFx0Y29va2llcy5yZW1vdmUoXCJmZi1vcmctbmFtZVwiKTtcblx0XHRcdFx0XHRcdGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLWFkZHJlc3NcIik7XG5cdFx0XHRcdFx0XHRjb25zdCBleHBpcnlUaW1lID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA4NjQwMCAqIDEwMDApO1xuXHRcdFx0XHRcdFx0Y29va2llcy5zZXQoXCJmZi1vcmctaWRcIiwgdGhpcy5vcmdhbml6YXRpb24uaWQsIHtcblx0XHRcdFx0XHRcdFx0ZXhwaXJlczogZXhwaXJ5VGltZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Y29va2llcy5zZXQoXCJmZi1vcmctbmFtZVwiLCB0aGlzLm9yZ2FuaXphdGlvbi5vcmdfbmFtZSwge1xuXHRcdFx0XHRcdFx0XHRleHBpcmVzOiBleHBpcnlUaW1lLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRjb29raWVzLnNldChcImZmLW9yZy1hZGRyZXNzXCIsIHRoaXMub3JnYW5pemF0aW9uLmF0cl9hZGRyZXNzLCB7XG5cdFx0XHRcdFx0XHRcdGV4cGlyZXM6IGV4cGlyeVRpbWUsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0Q2FydDIoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlbHNlXCIpO1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRDYXJ0MigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLWlkXCIpO1xuXHRcdFx0XHRcdFx0Y29va2llcy5yZW1vdmUoXCJmZi1vcmctbmFtZVwiKTtcblx0XHRcdFx0XHRcdGNvb2tpZXMucmVtb3ZlKFwiZmYtb3JnLWFkZHJlc3NcIik7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Y2hlY2tvdXRQYWdlKCkge1xuXHRcdFx0XHQvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHMvY2hlY2tvdXRcIjtcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0c1wiO1xuXHRcdFx0fSxcblxuXHRcdFx0aWZDYXJ0RXhwaXJlZCgpIHtcblx0XHRcdFx0Y29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydF9leHBpcnlcIik7XG5cdFx0XHRcdGlmICghaXRlbVN0cikge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1TdHIpO1xuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0pIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0YXN5bmMgZ2V0Q2FydCgpIHtcblx0XHRcdFx0aWYgKCF0aGlzLmlmQ2FydEV4cGlyZWQoKSkge1xuXHRcdFx0XHRcdGxldCBsYXN0Y2FydCA9XG5cdFx0XHRcdFx0XHQoYXdhaXQgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgfHwgXCJudWxsXCIpKSB8fCBbXTtcblx0XHRcdFx0XHR0aGlzLmNhcnQgPSBsYXN0Y2FydDtcblx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRhc3luYyBnZXRDYXJ0MigpIHtcblx0XHRcdFx0dmFyIG9yZ19pZCA9IGNvb2tpZXMuZ2V0KFwiZmYtb3JnLWlkXCIpO1xuXHRcdFx0XHRheGlvc1xuXHRcdFx0XHRcdC5nZXQoYC9jYXJ0L2dldFVzZXJDYXJ0Q291bnQvJHt0aGlzLnVzZXJfaWR9LyR7b3JnX2lkfWApXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb3VudEZyb21EQiA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRhc3luYyBnZXRDYXJ0MyhkYXRhKSB7XG5cdFx0XHRcdGF4aW9zXG5cdFx0XHRcdFx0LmdldChgL2NhcnQvZ2V0VXNlckNhcnRDb3VudC8ke3RoaXMudXNlcl9pZH0vJHtkYXRhfWApXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5jb3VudEZyb21EQiA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHRldmVudHM6IHtcblx0XHRcdHVwZGF0ZUNhcnRCYWRnZShtZXNzYWdlKSB7XG5cdFx0XHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdFx0XHRcdHRoaXMuZ2V0Q2FydCgpO1xuXHRcdFx0fSxcblx0XHRcdHVwZGF0ZUNhcnRCYWRnZTIobWVzc2FnZSkge1xuXHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRcdFx0XHR0aGlzLmdldENhcnQyKCk7XG5cdFx0XHR9LFxuXHRcdFx0dXBkYXRlQ2FydEJhZGdlMyhtZXNzYWdlKSB7XG5cdFx0XHRcdHRoaXMuY291bnRGcm9tREIgPSBtZXNzYWdlO1xuXHRcdFx0fSxcblx0XHRcdHVwZGF0ZUNhcnRCYWRnZTQoZGF0YSkge1xuXHRcdFx0XHR0aGlzLmdldENhcnQzKGRhdGEpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBjYXJ0LWl0ZW1cIixcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrb3V0UGFnZSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIHN0YXRpY1N0eWxlOiB7IHBhZGRpbmc6IFwiMHB4XCIgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jYXJ0LXBsdXNcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiLCBjb2xvcjogXCIjMzM5ZjI1XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIGFsaWduLXRvcFwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic3VuZmFybS1iYWRnZS0xXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uY2FydF9iYWRnZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZjk4NjBjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRmOTg2MGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRmOTg2MGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRmOTg2MGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZjk4NjBjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkZjk4NjBjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2FydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmRmOTg2MGMmXCIiXSwic291cmNlUm9vdCI6IiJ9