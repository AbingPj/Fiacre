(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ChPOFiacre"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["total_amount", "shipments_price", "over_all_total", "tax", "cc", "ach", "user_billing_type"],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.user_billing_type == "CC"
        ? _c("tr", [
            _c("td", [_vm._v("Card (3%)")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "d-flex justify-content-between" }, [
                _c("div", [_vm._v("$")]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _vm._v("+ " + _vm._s(_vm.displayNumber(_vm.cc)))
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.user_billing_type == "ACH"
        ? _c("tr", [
            _c("td", [_vm._v("ACH (2%)")]),
            _vm._v(" "),
            _c("td", [
              _c("div", { staticClass: "d-flex justify-content-between" }, [
                _c("div", [_vm._v("$")]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _vm._v("+ " + _vm._s(_vm.displayNumber(_vm.ach)))
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("tr", [
        _vm._m(0),
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
    return _c("td", [_c("b", [_vm._v("Total")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue":
/*!***************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true&");
/* harmony import */ var _Fiacre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fiacre.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Fiacre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c91ca35c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fiacre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fiacre.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fiacre_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/order-summary-table/Fiacre.vue?vue&type=template&id=c91ca35c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fiacre_vue_vue_type_template_id_c91ca35c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0ZpYWNyZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9vcmRlci1zdW1tYXJ5LXRhYmxlL0ZpYWNyZS52dWU/ZDI1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvRmlhY3JlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvRmlhY3JlLnZ1ZT9jMTRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvb3JkZXItc3VtbWFyeS10YWJsZS9GaWFjcmUudnVlPzEzNzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQTtBQUNBLHVHQURBO0FBRUE7QUFDQSxpQkFEQSx5QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQVJBO0FBRkEsRzs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGdEQUFnRDtBQUNyRTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFnRDtBQUN6RTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZ0RBQWdEO0FBQ3pFO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsZ0RBQWdEO0FBQ3JFLHVCQUF1QixrQ0FBa0M7QUFDekQ7QUFDQSx1QkFBdUIsNkNBQTZDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQUE7QUFBQTtBQUFBO0FBQWlHO0FBQ3ZDO0FBQ0w7OztBQUdyRDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsNkZBQU07QUFDUixFQUFFLHNHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF3TSxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9DaFBPRmlhY3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cclxuICAgIDx0Ym9keT5cclxuICAgICAgPHRyPlxyXG4gICAgICAgIDx0ZD5PcmRlciBBbW91bnQ8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyKHRvdGFsX2Ftb3VudCl9fTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPCEtLSA8dHI+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgRGlzY291bnQgQW1vdW50XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxiPi08L2I+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdj4kPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+MC4wMDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj4gLS0+XHJcblxyXG4gICAgICA8IS0tIDx0cj5cclxuICAgICAgICA8dGQ+RGVsaXZlcnkgRmVlPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcihzaGlwbWVudHNfcHJpY2UpfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+IC0tPlxyXG4gICAgICA8IS0tIDx0cj5cclxuICAgICAgICA8dGQ+VGF4PC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcih0YXgpfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+IC0tPlxyXG4gICAgICA8dHIgdi1pZj1cInVzZXJfYmlsbGluZ190eXBlID09ICdDQydcIj5cclxuICAgICAgICA8dGQ+Q2FyZCAoMyUpPC90ZD5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPisge3tkaXNwbGF5TnVtYmVyKGNjKX19PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8dHIgIHYtaWY9XCJ1c2VyX2JpbGxpbmdfdHlwZSA9PSAnQUNIJ1wiPlxyXG4gICAgICAgIDx0ZD5BQ0ggKDIlKTwvdGQ+XHJcbiAgICAgICAgPHRkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj4rIHt7ZGlzcGxheU51bWJlcihhY2gpfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGQ+XHJcbiAgICAgICAgICA8Yj5Ub3RhbDwvYj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj4kPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGZvbnQtd2VpZ2h0LWJvbGRcIj57e2Rpc3BsYXlOdW1iZXIob3Zlcl9hbGxfdG90YWwpfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3Rib2R5PlxyXG4gIDwvdGFibGU+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1widG90YWxfYW1vdW50XCIsIFwic2hpcG1lbnRzX3ByaWNlXCIsIFwib3Zlcl9hbGxfdG90YWxcIiwgXCJ0YXhcIiwgXCJjY1wiLCBcImFjaFwiLCBcInVzZXJfYmlsbGluZ190eXBlXCJdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGRpc3BsYXlOdW1iZXIodmFsdWUpIHtcclxuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJPcmRlciBBbW91bnRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGlzcGxheU51bWJlcihfdm0udG90YWxfYW1vdW50KSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJDQ1wiXG4gICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJDYXJkICgzJSlcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIisgXCIgKyBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLmNjKSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udXNlcl9iaWxsaW5nX3R5cGUgPT0gXCJBQ0hcIlxuICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiQUNIICgyJSlcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIisgXCIgKyBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXIoX3ZtLmFjaCkpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyKF92bS5vdmVyX2FsbF90b3RhbCkpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0ZFwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpYWNyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzkxY2EzNWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlhY3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlhY3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzkxY2EzNWNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2M5MWNhMzVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M5MWNhMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M5MWNhMzVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWFjcmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM5MWNhMzVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2M5MWNhMzVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL29yZGVyLXN1bW1hcnktdGFibGUvRmlhY3JlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlhY3JlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWFjcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpYWNyZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzkxY2EzNWMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9