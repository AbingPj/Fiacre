(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ChPOSSunclub"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["user_balance", "total_amount", "user_discount", "get_discount", "shipments_price", "over_all_total", "remaining_balance", "additionalCharge", "get_coupon_discount", "coupon", "coupon_code_is_valid", "tax"],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
        _c("td", [_vm._v("Current Balance:")]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.user_balance)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
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
          _c("div", [_vm._v("(Sun Club Member)")])
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
      _vm._m(3),
      _vm._v(" "),
      _c("tr", [
        _c("td", [_vm._v("Remaining Balance")]),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.remaining_balance)))
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("tr", { staticClass: "text-danger" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("td", [
          _c("div", { staticClass: "d-flex justify-content-between" }, [
            _c("div", { staticClass: "font-weight-bold" }, [_vm._v("$")]),
            _vm._v(" "),
            _c("div", { staticClass: "text-right font-weight-bold" }, [
              _vm._v(_vm._s(_vm.displayNumber(_vm.additionalCharge)))
            ])
          ])
        ])
      ])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Additonal Charge")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue":
/*!****************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SunClub.vue?vue&type=template&id=41cabc58&scoped=true& */ "./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true&");
/* harmony import */ var _SunClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SunClub.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SunClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41cabc58",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SunClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SunClub.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SunClub_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SunClub.vue?vue&type=template&id=41cabc58&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/SunClub.vue?vue&type=template&id=41cabc58&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SunClub_vue_vue_type_template_id_41cabc58_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL1N1bkNsdWIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9TdW5DbHViLnZ1ZT84NjdlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9TdW5DbHViLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvU3VuQ2x1Yi52dWU/OTc3OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvU3VuQ2x1Yi52dWU/MTYzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlIQTtBQUNBLFVBQ0EsY0FEQSxFQUVBLGNBRkEsRUFHQSxlQUhBLEVBSUEsY0FKQSxFQUtBLGlCQUxBLEVBTUEsZ0JBTkEsRUFPQSxtQkFQQSxFQVFBLGtCQVJBLEVBU0EscUJBVEEsRUFVQSxRQVZBLEVBV0Esc0JBWEEsRUFZQSxLQVpBLENBREE7QUFlQTtBQUNBLGlCQURBLHlCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBUkE7QUFmQSxHOzs7Ozs7Ozs7Ozs7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Q2hQT1NTdW5jbHViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG48L3N0eWxlPlxuXG48dGVtcGxhdGU+XG4gIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgPHRib2R5PlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+Q3VycmVudCBCYWxhbmNlOjwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHVzZXJfYmFsYW5jZSl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPk9yZGVyIEFtb3VudDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHRvdGFsX2Ftb3VudCl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciA6Y2xhc3M9XCJnZXRfZGlzY291bnQgPiAwPyAndGV4dC1zdWNjZXNzJyA6ICcnXCI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICBEaXNjb3VudCBBbW91bnQgKHt7dXNlcl9kaXNjb3VudH19JSlcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2PihTdW4gQ2x1YiBNZW1iZXIpPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKGdldF9kaXNjb3VudCl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cblxuICAgICAgPHRyIDpjbGFzcz1cImdldF9jb3Vwb25fZGlzY291bnQgPiAwPyAndGV4dC1zdWNjZXNzJyA6ICcnXCI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICBDb3Vwb24gRGlzY291bnRcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8ZGl2IHYtaWY9XCJjb3Vwb25fY29kZV9pc192YWxpZFwiPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiY291cG9uLmlzX3BlcmNlbnRhZ2VcIj4oIHt7Y291cG9uLmRpc2NvdW50X2Ftb3VudH19ICUgZGlzY291bnQgKTwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWVsc2U+KCAke3tjb3Vwb24uZGlzY291bnRfYW1vdW50fX0gZGlzY291bnQgKTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcihnZXRfY291cG9uX2Rpc2NvdW50KX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuXG4gICAgICA8dHI+XG4gICAgICAgIDx0ZD5EZWxpdmVyeSBGZWU8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcihzaGlwbWVudHNfcHJpY2UpfX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICAgPHRyPlxuICAgICAgICA8dGQ+VGF4PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXIodGF4KX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGI+VG90YWw8L2I+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGZvbnQtd2VpZ2h0LWJvbGRcIj57e2Rpc3BsYXlOdW1iZXIob3Zlcl9hbGxfdG90YWwpfX08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1saWdodFwiPlxuICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgPHRkPjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQ+UmVtYWluaW5nIEJhbGFuY2U8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPCEtLSAkIHt7cmVtYWluaW5nQmFsYW5jZS50b0ZpeGVkKDIpfX0gLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcihyZW1haW5pbmdfYmFsYW5jZSl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0ciBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8Yj5BZGRpdG9uYWwgQ2hhcmdlPC9iPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPCEtLSA8Yj4kIHt7YWRkaXRpb25hbENoYXJnZS50b0ZpeGVkKDIpfX08L2I+IC0tPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+JDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgZm9udC13ZWlnaHQtYm9sZFwiPnt7ZGlzcGxheU51bWJlcihhZGRpdGlvbmFsQ2hhcmdlKX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcbiAgICBcInVzZXJfYmFsYW5jZVwiLFxuICAgIFwidG90YWxfYW1vdW50XCIsXG4gICAgXCJ1c2VyX2Rpc2NvdW50XCIsXG4gICAgXCJnZXRfZGlzY291bnRcIixcbiAgICBcInNoaXBtZW50c19wcmljZVwiLFxuICAgIFwib3Zlcl9hbGxfdG90YWxcIixcbiAgICBcInJlbWFpbmluZ19iYWxhbmNlXCIsXG4gICAgXCJhZGRpdGlvbmFsQ2hhcmdlXCIsXG4gICAgXCJnZXRfY291cG9uX2Rpc2NvdW50XCIsXG4gICAgXCJjb3Vwb25cIixcbiAgICBcImNvdXBvbl9jb2RlX2lzX3ZhbGlkXCIsXG4gICAgXCJ0YXhcIlxuICBdLFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGxheU51bWJlcih2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiQ3VycmVudCBCYWxhbmNlOlwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS51c2VyX2JhbGFuY2UpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJPcmRlciBBbW91bnRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0udG90YWxfYW1vdW50KSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIHsgY2xhc3M6IF92bS5nZXRfZGlzY291bnQgPiAwID8gXCJ0ZXh0LXN1Y2Nlc3NcIiA6IFwiXCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgRGlzY291bnQgQW1vdW50IChcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlcl9kaXNjb3VudCkgK1xuICAgICAgICAgICAgICBcIiUpXFxuICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIoU3VuIENsdWIgTWVtYmVyKVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5nZXRfZGlzY291bnQpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgeyBjbGFzczogX3ZtLmdldF9jb3Vwb25fZGlzY291bnQgPiAwID8gXCJ0ZXh0LXN1Y2Nlc3NcIiA6IFwiXCIgfSwgW1xuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIENvdXBvbiBEaXNjb3VudFxcbiAgICAgICAgXCIpLFxuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY291cG9uX2NvZGVfaXNfdmFsaWRcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5jb3Vwb24uaXNfcGVyY2VudGFnZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIoIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5jb3Vwb24uZGlzY291bnRfYW1vdW50KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiICUgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIoICRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uY291cG9uLmRpc2NvdW50X2Ftb3VudCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBkaXNjb3VudCApXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5nZXRfY291cG9uX2Rpc2NvdW50KSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRGVsaXZlcnkgRmVlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLnNoaXBtZW50c19wcmljZSkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIlRheFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS50YXgpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfdm0uX20oMiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0ub3Zlcl9hbGxfdG90YWwpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiUmVtYWluaW5nIEJhbGFuY2VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0ucmVtYWluaW5nX2JhbGFuY2UpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IGZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLmFkZGl0aW9uYWxDaGFyZ2UpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW19jKFwiYlwiLCBbX3ZtLl92KFwiLVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbX2MoXCJiXCIsIFtfdm0uX3YoXCItXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihcIlRvdGFsXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtbGlnaHRcIiB9LCBbXG4gICAgICBfYyhcInRkXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGRcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihcIkFkZGl0b25hbCBDaGFyZ2VcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TdW5DbHViLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MWNhYmM1OCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TdW5DbHViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU3VuQ2x1Yi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQxY2FiYzU4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDFjYWJjNTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDFjYWJjNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDFjYWJjNTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1N1bkNsdWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxY2FiYzU4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQxY2FiYzU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvU3VuQ2x1Yi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1bkNsdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1bkNsdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1N1bkNsdWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQxY2FiYzU4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==