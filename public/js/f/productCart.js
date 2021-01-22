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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["guest", "clear_cart", "wholesaler_minimum_order_amount", "guest_status"],
  data: function data() {
    return {
      cart: [],
      message: ""
    };
  },
  computed: {
    cart_badge: function cart_badge() {
      var length = this.cart.length;
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

    if (this.clear_cart == "clearcart") {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cart_badge", this.cart.length);
      this.getCart();
    } else {
      this.getCart();
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
    }
  },
  events: {
    updateCartBadge: function updateCartBadge(message) {
      this.message = message;
      this.getCart();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWU/ZDJiOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jYXJ0LnZ1ZT9jY2EyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NhcnQudnVlP2MxY2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQSxVQUNBLE9BREEsRUFFQSxZQUZBLEVBR0EsaUNBSEEsRUFJQSxjQUpBLENBREE7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxjQURBO0FBRUE7QUFGQTtBQUlBLEdBWkE7QUFhQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBUkEsR0FiQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUxBLE1BS0E7QUFDQTtBQUNBO0FBQ0EsR0F0Q0E7QUF1Q0E7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBTUEsaUJBTkEsMkJBTUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQWpCQTtBQWtCQSxXQWxCQSxxQkFrQkE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFDQSxxQkFEQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVCQUdBLGtEQUhBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOEJBR0EsRUFIQTs7QUFBQTtBQUVBLHdCQUZBO0FBSUE7QUFDQTs7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBekJBLEdBdkNBO0FBa0VBO0FBQ0EsbUJBREEsMkJBQ0EsT0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFsRUEsRzs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxlQUFlLHdDQUF3QyxpQkFBaUIsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQkFBc0I7QUFDcEQsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2R1Y3RDYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBjYXJ0LWl0ZW1cIiBAY2xpY2s9XCJjaGVja291dFBhZ2UoKVwiPlxuICAgIDxhIHN0eWxlPVwicGFkZGluZzowcHg7XCIgY2xhc3M9XCJuYXYtbGlua1wiPlxuICAgICAgPCEtLSA8aW1nIHNyYz1cIi9pbWcvc3VuZmFybWFjeS9JY29uLWF3ZXNvbWUtY2FydC1wbHVzLnN2Z1wiIHN0eWxlPVwid2lkdGg6YXV0bzsgaGVpZ2h0OjMwcHg7XCIgLz4gLS0+XG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYXJ0LXBsdXNcIiBzdHlsZT1cImZvbnQtc2l6ZTozMHB4OyBjb2xvcjogIzMzOWYyNTtcIj5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZToxMHB4O1wiXG4gICAgICAgICAgaWQ9XCJzdW5mYXJtLWJhZGdlLTFcIlxuICAgICAgICAgIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtZGFuZ2VyIGFsaWduLXRvcFwiXG4gICAgICAgID57e2NhcnRfYmFkZ2V9fTwvc3Bhbj5cbiAgICAgIDwvaT5cbiAgICA8L2E+XG4gIDwvbGk+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcbiAgICBcImd1ZXN0XCIsXG4gICAgXCJjbGVhcl9jYXJ0XCIsXG4gICAgXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXG4gICAgXCJndWVzdF9zdGF0dXNcIixcbiAgXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2FydDogW10sXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY2FydF9iYWRnZSgpIHtcbiAgICAgIHZhciBsZW5ndGggPSB0aGlzLmNhcnQubGVuZ3RoO1xuICAgICAgdmFyIGJhZGdlID0gXCJcIjtcbiAgICAgIGlmIChsZW5ndGggIT0gMCkge1xuICAgICAgICB2YXIgYmFkZ2UgPSBsZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gYmFkZ2U7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICBpZiAodGhpcy5ndWVzdF9zdGF0dXMgIT0gXCJndWVzdC1jaGVja291dFwiKSB7XG4gICAgICAvLyAgbG9hZGluZ092ZXJsYXkoKS5jYW5jZWwoc3BpbkhhbmRsZSk7XG4gICAgICAvLyAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgIGxvYWRpbmdPdmVybGF5KCkuY2FuY2VsKHNwaW5IYW5kbGUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNsZWFyX2NhcnQgPT0gXCJjbGVhcmNhcnRcIikge1xuICAgICAgdGhpcy5jYXJ0ID0gW107XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICB0aGlzLmdldENhcnQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nZXRDYXJ0KCk7XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgY2hlY2tvdXRQYWdlKCkge1xuICAgICAgLy8gICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzL2NoZWNrb3V0XCI7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzXCI7XG4gICAgfSxcblxuICAgIGlmQ2FydEV4cGlyZWQoKSB7XG4gICAgICBjb25zdCBpdGVtU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0X2V4cGlyeVwiKTtcbiAgICAgIGlmICghaXRlbVN0cikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1TdHIpO1xuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChub3cuZ2V0VGltZSgpID4gaXRlbSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGFzeW5jIGdldENhcnQoKSB7XG4gICAgICBpZiAoIXRoaXMuaWZDYXJ0RXhwaXJlZCgpKSB7XG4gICAgICAgIGxldCBsYXN0Y2FydCA9XG4gICAgICAgICAgKGF3YWl0IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpIHx8IFwibnVsbFwiKSkgfHwgW107XG4gICAgICAgIHRoaXMuY2FydCA9IGxhc3RjYXJ0O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgZXZlbnRzOiB7XG4gICAgdXBkYXRlQ2FydEJhZGdlKG1lc3NhZ2UpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICB0aGlzLmdldENhcnQoKTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImxpXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gY2FydC1pdGVtXCIsXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF92bS5jaGVja291dFBhZ2UoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImlcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2FydC1wbHVzXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjMwcHhcIiwgY29sb3I6IFwiIzMzOWYyNVwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLWRhbmdlciBhbGlnbi10b3BcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInN1bmZhcm0tYmFkZ2UtMVwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmNhcnRfYmFkZ2UpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGY5ODYwYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2FydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZkZjk4NjBjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZkZjk4NjBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZkZjk4NjBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZGY5ODYwYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZGY5ODYwYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2FydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NhcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZjk4NjBjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==