(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ChPOSWholesaler"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["total_amount", "user_discount", "get_discount", "shipments_price", "over_all_total", "get_coupon_discount", "coupon", "coupon_code_is_valid", "tax"],
  methods: {
    displayNumber: function displayNumber(value) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("table", { staticClass: "table" }, [
    _c("tbody", [
      _c("tr", [
        _c("td", [_vm._v("Order Amount")]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.total_amount)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { class: _vm.get_discount > 0 ? "text-success" : "" }, [
        _c("td", [
          _vm._v(
            "\n        Discount Amount (" +
              _vm._s(_vm.user_discount) +
              "%)\n        "
          ),
          _vm._m(0),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", [_vm._v("(Wholesaler)")])
        ]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.get_discount)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { class: _vm.get_coupon_discount > 0 ? "text-success" : "" }, [
        _c("td", [
          _vm._v("\n        Coupon Discount\n        "),
          _vm._m(1),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _vm.coupon_code_is_valid
            ? _c("div", [
                _vm.coupon.is_percentage
                  ? _c("div", [
                      _vm._v(
                        "( " +
                          _vm._s(_vm.coupon.discount_amount) +
                          " % discount )"
                      )
                    ])
                  : _c("div", [
                      _vm._v(
                        "( $" +
                          _vm._s(_vm.coupon.discount_amount) +
                          " discount )"
                      )
                    ])
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.get_coupon_discount)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Delivery Fee")]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.shipments_price)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Tax")]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.tax)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", [
        _vm._m(2),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", { staticClass: "font-weight-bold" }, [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right font-weight-bold" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.over_all_total)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(3)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Total")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "table-light" }, [
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue":
/*!*******************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true&");
/* harmony import */ var _Wholesaler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Wholesaler.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Wholesaler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06c833ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesaler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesaler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesaler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true&":
/*!**************************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Wholesaler.vue?vue&type=template&id=06c833ee&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Wholesaler_vue_vue_type_template_id_06c833ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL1dob2xlc2FsZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9XaG9sZXNhbGVyLnZ1ZT9jODQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9XaG9sZXNhbGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvV2hvbGVzYWxlci52dWU/MzBkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvV2hvbGVzYWxlci52dWU/MjBiOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkE7QUFDQSxVQUNBLGNBREEsRUFFQSxlQUZBLEVBR0EsY0FIQSxFQUlBLGlCQUpBLEVBS0EsZ0JBTEEsRUFNQSxxQkFOQSxFQU9BLFFBUEEsRUFRQSxzQkFSQSxFQVNBLEtBVEEsQ0FEQTtBQVlBO0FBQ0EsaUJBREEseUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFSQTtBQVpBLEc7Ozs7Ozs7Ozs7OztBQzVGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1QkFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckU7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFvRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkRBQTJEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckU7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRSx1QkFBdUIsa0NBQWtDO0FBQ3pEO0FBQ0EsdUJBQXVCLDZDQUE2QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hLQTtBQUFBO0FBQUE7QUFBQTtBQUFxRztBQUN2QztBQUNMOzs7QUFHekQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLGlHQUFNO0FBQ1IsRUFBRSwwR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBNE0sQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvQ2hQT1NXaG9sZXNhbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPHRib2R5PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+T3JkZXIgQW1vdW50PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXIodG90YWxfYW1vdW50KX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyICA6Y2xhc3M9XCJnZXRfZGlzY291bnQgPiAwPyAndGV4dC1zdWNjZXNzJyA6ICcnXCIgPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgRGlzY291bnQgQW1vdW50ICh7e3VzZXJfZGlzY291bnR9fSUpXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgPGI+LTwvYj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGRpdj4oV2hvbGVzYWxlcik8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXIoZ2V0X2Rpc2NvdW50KX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG5cbiAgICAgIDx0ciA6Y2xhc3M9XCJnZXRfY291cG9uX2Rpc2NvdW50ID4gMD8gJ3RleHQtc3VjY2VzcycgOiAnJ1wiPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgQ291cG9uIERpc2NvdW50XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgPGI+LTwvYj5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGRpdiB2LWlmPVwiY291cG9uX2NvZGVfaXNfdmFsaWRcIj5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNvdXBvbi5pc19wZXJjZW50YWdlXCI+KCB7e2NvdXBvbi5kaXNjb3VudF9hbW91bnR9fSAlIGRpc2NvdW50ICk8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdi1lbHNlPiggJHt7Y291cG9uLmRpc2NvdW50X2Ftb3VudH19IGRpc2NvdW50ICk8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXIoZ2V0X2NvdXBvbl9kaXNjb3VudCl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+RGVsaXZlcnkgRmVlPC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57eyBkaXNwbGF5TnVtYmVyKHNoaXBtZW50c19wcmljZSl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgICA8dHI+XG4gICAgICAgIDx0ZD5UYXg8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcih0YXgpfX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPlRvdGFsPC9iPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCI+e3tkaXNwbGF5TnVtYmVyKG92ZXJfYWxsX3RvdGFsKX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyIGNsYXNzPVwidGFibGUtbGlnaHRcIj5cbiAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgIDx0ZD48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3Rib2R5PlxuICA8L3RhYmxlPlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXG4gICAgXCJ0b3RhbF9hbW91bnRcIixcbiAgICBcInVzZXJfZGlzY291bnRcIixcbiAgICBcImdldF9kaXNjb3VudFwiLFxuICAgIFwic2hpcG1lbnRzX3ByaWNlXCIsXG4gICAgXCJvdmVyX2FsbF90b3RhbFwiLFxuICAgIFwiZ2V0X2NvdXBvbl9kaXNjb3VudFwiLFxuICAgIFwiY291cG9uXCIsXG4gICAgXCJjb3Vwb25fY29kZV9pc192YWxpZFwiLFxuICAgIFwidGF4XCJcbiAgXSxcbiAgbWV0aG9kczoge1xuICAgIGRpc3BsYXlOdW1iZXIodmFsdWUpIHtcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgIF9jKFwidGJvZHlcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIk9yZGVyIEFtb3VudFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS50b3RhbF9hbW91bnQpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgeyBjbGFzczogX3ZtLmdldF9kaXNjb3VudCA+IDAgPyBcInRleHQtc3VjY2Vzc1wiIDogXCJcIiB9LCBbXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICBEaXNjb3VudCBBbW91bnQgKFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyX2Rpc2NvdW50KSArXG4gICAgICAgICAgICAgIFwiJSlcXG4gICAgICAgIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIihXaG9sZXNhbGVyKVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5nZXRfZGlzY291bnQpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgeyBjbGFzczogX3ZtLmdldF9jb3Vwb25fZGlzY291bnQgPiAwID8gXCJ0ZXh0LXN1Y2Nlc3NcIiA6IFwiXCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIENvdXBvbiBEaXNjb3VudFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY291cG9uX2NvZGVfaXNfdmFsaWRcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5jb3Vwb24uaXNfcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIoIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb3Vwb24uZGlzY291bnRfYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICUgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIoICRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY291cG9uLmRpc2NvdW50X2Ftb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBkaXNjb3VudCApXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5nZXRfY291cG9uX2Rpc2NvdW50KSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRGVsaXZlcnkgRmVlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLnNoaXBtZW50c19wcmljZSkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlRheFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS50YXgpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0ub3Zlcl9hbGxfdG90YWwpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtfYyhcImJcIiwgW192bS5fdihcIi1cIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW19jKFwiYlwiLCBbX3ZtLl92KFwiLVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0ZFwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJ0ZFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRkXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1dob2xlc2FsZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YzgzM2VlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1dob2xlc2FsZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9XaG9sZXNhbGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDZjODMzZWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNmM4MzNlZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNmM4MzNlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNmM4MzNlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vV2hvbGVzYWxlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZjODMzZWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDZjODMzZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9XaG9sZXNhbGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV2hvbGVzYWxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV2hvbGVzYWxlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vV2hvbGVzYWxlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZjODMzZWUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9