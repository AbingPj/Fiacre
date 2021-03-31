(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepProd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
var RepProdDaily = function RepProdDaily() {
  return __webpack_require__.e(/*! import() | js/b/RepProdDaily */ "js/b/RepProdDaily").then(__webpack_require__.bind(null, /*! ./daily.vue */ "./resources/js/backend/components/reports/product-orders/daily.vue"));
};

var RepProdWeekly = function RepProdWeekly() {
  return __webpack_require__.e(/*! import() | js/b/RepProdWeekly */ "js/b/RepProdWeekly").then(__webpack_require__.bind(null, /*! ./weekly.vue */ "./resources/js/backend/components/reports/product-orders/weekly.vue"));
};

var RepProdMonthly = function RepProdMonthly() {
  return __webpack_require__.e(/*! import() | js/b/RepProdMonthly */ "js/b/RepProdMonthly").then(__webpack_require__.bind(null, /*! ./monthly.vue */ "./resources/js/backend/components/reports/product-orders/monthly.vue"));
};

var RepProdYearly = function RepProdYearly() {
  return __webpack_require__.e(/*! import() | js/b/RepProdYearly */ "js/b/RepProdYearly").then(__webpack_require__.bind(null, /*! ./yearly.vue */ "./resources/js/backend/components/reports/product-orders/yearly.vue"));
};

var RepProdCustom = function RepProdCustom() {
  return __webpack_require__.e(/*! import() | js/b/RepProdCustom */ "js/b/RepProdCustom").then(__webpack_require__.bind(null, /*! ./custom.vue */ "./resources/js/backend/components/reports/product-orders/custom.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "admin-reports-products-daily": RepProdDaily,
    "admin-reports-products-weekly": RepProdWeekly,
    "admin-reports-products-monthly": RepProdMonthly,
    "admin-reports-products-yearly": RepProdYearly,
    "admin-reports-products-custom": RepProdCustom
  },
  props: ["report"],
  created: function created() {
    this.selected_tab = this.report;
  },
  data: function data() {
    return {
      selected_tab: "daily"
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-flex flex-column min-vh-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("nav", [
          _c(
            "div",
            {
              staticClass: "nav nav-tabs",
              attrs: { id: "nav-tab", role: "tablist" }
            },
            [
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == "daily" ? "active" : "",
                  attrs: {
                    href: "/admin/reports/productsorders/daily",
                    "aria-selected":
                      _vm.selected_tab == "daily" ? "true" : "false"
                  }
                },
                [_vm._v("Daily")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == "weekly" ? "active" : "",
                  attrs: {
                    href: "/admin/reports/productsorders/weekly",
                    "aria-selected":
                      _vm.selected_tab == "weekly" ? "true" : "false"
                  }
                },
                [_vm._v("Weekly")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == "monthly" ? "active" : "",
                  attrs: {
                    href: "/admin/reports/productsorders/monthly",
                    "aria-selected":
                      _vm.selected_tab == "monthly" ? "true" : "false"
                  }
                },
                [_vm._v("Monthly")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == "yearly" ? "active" : "",
                  attrs: {
                    href: "/admin/reports/productsorders/yearly",
                    "aria-selected":
                      _vm.selected_tab == "yearly" ? "true" : "false"
                  }
                },
                [_vm._v("Yearly")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == "custom" ? "active" : "",
                  attrs: {
                    href: "/admin/reports/productsorders/custom",
                    "aria-selected":
                      _vm.selected_tab == "custom" ? "true" : "false"
                  }
                },
                [_vm._v("Custom")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-content", attrs: { id: "nav-tabContent" } },
          [
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == "daily" ? "active show" : "",
                attrs: {
                  id: "nav-home",
                  role: "tabpanel",
                  "aria-labelledby": "nav-home-tab"
                }
              },
              [
                _vm.selected_tab == "daily"
                  ? _c("div", [_c("admin-reports-products-daily")], 1)
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == "weekly" ? "active show" : "",
                attrs: {
                  id: "nav-profile",
                  role: "tabpanel",
                  "aria-labelledby": "nav-profile-tab"
                }
              },
              [
                _vm.selected_tab == "weekly"
                  ? _c("div", [_c("admin-reports-products-weekly")], 1)
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == "monthly" ? "active show" : "",
                attrs: {
                  id: "nav-monthly",
                  role: "tabpanel",
                  "aria-labelledby": "nav-monthly-tab"
                }
              },
              [
                _vm.selected_tab == "monthly"
                  ? _c("div", [_c("admin-reports-products-monthly")], 1)
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == "yearly" ? "active show" : "",
                attrs: {
                  id: "nav-yearly",
                  role: "tabpanel",
                  "aria-labelledby": "nav-yearly-tab"
                }
              },
              [
                _vm.selected_tab == "yearly"
                  ? _c("div", [_c("admin-reports-products-yearly")], 1)
                  : _vm._e()
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == "custom" ? "active show" : "",
                attrs: {
                  id: "nav-custom",
                  role: "tabpanel",
                  "aria-labelledby": "nav-custom-tab"
                }
              },
              [
                _vm.selected_tab == "custom"
                  ? _c("div", [_c("admin-reports-products-custom")], 1)
                  : _vm._e()
              ]
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _vm._v("Products Orders")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/index.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/index.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=657c0966&scoped=true& */ "./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "657c0966",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/product-orders/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=657c0966&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/index.vue?vue&type=template&id=657c0966&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_657c0966_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlPzhiY2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlPzQwMzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZT8zOTlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdJQTtBQUFBLFNBQ0EsNE1BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0Esb05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFLQTtBQUNBO0FBQ0EsZ0RBREE7QUFFQSxrREFGQTtBQUdBLG9EQUhBO0FBSUEsa0RBSkE7QUFLQTtBQUxBLEdBREE7QUFRQSxtQkFSQTtBQVVBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFjQSxNQWRBLGtCQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFsQkEsRzs7Ozs7Ozs7Ozs7O0FDckpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUErQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUMsdUJBQXVCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0Msa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7OztBQUdwRDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF1TSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9SZXBQcm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5Qcm9kdWN0cyBPcmRlcnM8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1PkRhaWx5IHw8L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5XZWVrbHkgfDwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1Pk1vbnRobHkgfDwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1PlllYXJseSB8PC9oNT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLTJcIj48aDU+Q3VzdG9tZTwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pi0tPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ2RhaWx5Jz8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvZGFpbHlcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09ICdkYWlseSc/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5EYWlseTwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ3dlZWtseSc/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3dlZWtseVwiXHJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gJ3dlZWtseSc/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5XZWVrbHk8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSc/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL21vbnRobHlcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09ICdtb250aGx5Jz8gJ3RydWUnOidmYWxzZScgXCJcclxuICAgICAgICAgICAgPk1vbnRobHk8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAneWVhcmx5Jz8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMveWVhcmx5XCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAneWVhcmx5Jz8gJ3RydWUnOidmYWxzZScgXCJcclxuICAgICAgICAgICAgPlllYXJseTwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICdjdXN0b20nPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy9jdXN0b21cIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09ICdjdXN0b20nPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+Q3VzdG9tPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ2RhaWx5Jz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1ob21lXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWhvbWUtdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRfdGFiID09ICdkYWlseSdcIj5cclxuICAgICAgICAgICAgICA8YWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1kYWlseT48L2FkbWluLXJlcG9ydHMtcHJvZHVjdHMtZGFpbHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ3dlZWtseSc/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtcHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1wcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnd2Vla2x5J1wiPlxyXG4gICAgICAgICAgICAgIDxhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLXdlZWtseT48L2FkbWluLXJlcG9ydHMtcHJvZHVjdHMtd2Vla2x5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICdtb250aGx5Jz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1tb250aGx5XCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LW1vbnRobHktdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRfdGFiID09ICdtb250aGx5J1wiPlxyXG4gICAgICAgICAgICAgIDxhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLW1vbnRobHk+PC9hZG1pbi1yZXBvcnRzLXByb2R1Y3RzLW1vbnRobHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ3llYXJseSc/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYteWVhcmx5XCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXllYXJseS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZF90YWIgPT0gJ3llYXJseSdcIj5cclxuICAgICAgICAgICAgICA8YWRtaW4tcmVwb3J0cy1wcm9kdWN0cy15ZWFybHk+PC9hZG1pbi1yZXBvcnRzLXByb2R1Y3RzLXllYXJseT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnY3VzdG9tJz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1jdXN0b21cIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtY3VzdG9tLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnY3VzdG9tJ1wiPlxyXG4gICAgICAgICAgICAgIDxhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLWN1c3RvbT48L2FkbWluLXJlcG9ydHMtcHJvZHVjdHMtY3VzdG9tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5jb25zdCBSZXBQcm9kRGFpbHkgPSAoKSA9PlxyXG4gIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9SZXBQcm9kRGFpbHlcIiAqLyBcIi4vZGFpbHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBQcm9kV2Vla2x5ID0gKCkgPT5cclxuICBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvUmVwUHJvZFdlZWtseVwiICovIFwiLi93ZWVrbHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBQcm9kTW9udGhseSA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFByb2RNb250aGx5XCIgKi8gXCIuL21vbnRobHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBQcm9kWWVhcmx5ID0gKCkgPT5cclxuICBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvUmVwUHJvZFllYXJseVwiICovIFwiLi95ZWFybHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBQcm9kQ3VzdG9tID0gKCkgPT5cclxuICBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvUmVwUHJvZEN1c3RvbVwiICovIFwiLi9jdXN0b20udnVlXCJcclxuICApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1kYWlseVwiOiBSZXBQcm9kRGFpbHksXHJcbiAgICBcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtd2Vla2x5XCI6IFJlcFByb2RXZWVrbHksXHJcbiAgICBcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtbW9udGhseVwiOiBSZXBQcm9kTW9udGhseSxcclxuICAgIFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy15ZWFybHlcIjogUmVwUHJvZFllYXJseSxcclxuICAgIFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1jdXN0b21cIjogUmVwUHJvZEN1c3RvbSxcclxuICB9LFxyXG4gIHByb3BzOiBbXCJyZXBvcnRcIl0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IHRoaXMucmVwb3J0O1xyXG4gIH0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWxlY3RlZF90YWI6IFwiZGFpbHlcIixcclxuICAgIH07XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJuYXZcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5hdi10YWJcIiwgcm9sZTogXCJ0YWJsaXN0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwiZGFpbHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy9kYWlseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwiZGFpbHlcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGFpbHlcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcIndlZWtseVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3dlZWtseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCIgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIldlZWtseVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwibW9udGhseVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL21vbnRobHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcIm1vbnRobHlcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9udGhseVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwieWVhcmx5XCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMveWVhcmx5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ5ZWFybHlcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWWVhcmx5XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJjdXN0b21cIiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy9jdXN0b21cIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDdXN0b21cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiwgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYkNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWhvbWUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwiZGFpbHlcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX2MoXCJhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLWRhaWx5XCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcIndlZWtseVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LXByb2ZpbGUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW19jKFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy13ZWVrbHlcIildLCAxKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwibW9udGhseVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LW1vbnRobHlcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LW1vbnRobHktdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwibW9udGhseVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtbW9udGhseVwiKV0sIDEpXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJ5ZWFybHlcIiA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi15ZWFybHlcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LXllYXJseS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ5ZWFybHlcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX2MoXCJhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLXllYXJseVwiKV0sIDEpXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJjdXN0b21cIiA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1jdXN0b21cIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWN1c3RvbS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJjdXN0b21cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX2MoXCJhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLWN1c3RvbVwiKV0sIDEpXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJQcm9kdWN0cyBPcmRlcnNcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU3YzA5NjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY1N2MwOTY2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NTdjMDk2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NTdjMDk2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NTdjMDk2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2MwOTY2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1N2MwOTY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdjMDk2NiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=