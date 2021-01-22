(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ChPOSGuest"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["total_amount", "shipments_price", "over_all_total", "tax"],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
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
        _vm._m(1),
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
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("td", [
        _vm._v("\n        Discount Amount\n        "),
        _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])]),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c("td", [
        _c("div", { staticClass: "d-flex justify-content-between" }, [
          _c("div", [_vm._v("$")]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right" }, [_vm._v("0.00")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Total")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue":
/*!**************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true&");
/* harmony import */ var _Guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Guest.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cd0c4e4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Guest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Guest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Guest.vue?vue&type=template&id=7cd0c4e4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Guest_vue_vue_type_template_id_7cd0c4e4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0d1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvR3Vlc3QudnVlPzM3OGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0d1ZXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvR3Vlc3QudnVlPzI1OGIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0d1ZXN0LnZ1ZT82YjMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBLHFFQURBO0FBRUE7QUFDQSxpQkFEQSx5QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQVJBO0FBRkEsRzs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFO0FBQ0E7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixnREFBZ0Q7QUFDckUsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBLHVCQUF1Qiw2Q0FBNkM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0RBQWdEO0FBQ25FO0FBQ0E7QUFDQSxxQkFBcUIsNEJBQTRCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9GQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMOzs7QUFHcEQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvQ2hQT1NHdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgIDx0Ym9keT5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPk9yZGVyIEFtb3VudDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHRvdGFsX2Ftb3VudCl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIERpc2NvdW50IEFtb3VudFxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxiPi08L2I+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPjAuMDA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPkRlbGl2ZXJ5IEZlZTwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHNoaXBtZW50c19wcmljZSl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlRheDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHRheCl9fTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxiPlRvdGFsPC9iPlxuICAgICAgICA8L3RkPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj4kPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCI+e3tkaXNwbGF5TnVtYmVyKG92ZXJfYWxsX3RvdGFsKX19PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgIDwvdGJvZHk+XG4gIDwvdGFibGU+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcInRvdGFsX2Ftb3VudFwiLCBcInNoaXBtZW50c19wcmljZVwiLCBcIm92ZXJfYWxsX3RvdGFsXCIsIFwidGF4XCJdLFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGxheU51bWJlcih2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiT3JkZXIgQW1vdW50XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLnRvdGFsX2Ftb3VudCkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJEZWxpdmVyeSBGZWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0uc2hpcG1lbnRzX3ByaWNlKSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiVGF4XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLnRheCkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5vdmVyX2FsbF90b3RhbCkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBEaXNjb3VudCBBbW91bnRcXG4gICAgICAgIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbX2MoXCJiXCIsIFtfdm0uX3YoXCItXCIpXSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbX3ZtLl92KFwiMC4wMFwiKV0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGRcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiVG90YWxcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9HdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NkMGM0ZTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3Vlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HdWVzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjZDBjNGU0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2NkMGM0ZTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NkMGM0ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NkMGM0ZTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0d1ZXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2QwYzRlNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Y2QwYzRlNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0d1ZXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3Vlc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0d1ZXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HdWVzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2NkMGM0ZTQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9