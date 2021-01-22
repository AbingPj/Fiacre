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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlPzhiY2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlPzQwMzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2luZGV4LnZ1ZT8zOTlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdJQTtBQUFBLFNBQ0EsNE1BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0Esb05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFJQTtBQUFBLFNBQ0EsZ05BREE7QUFBQTs7QUFLQTtBQUNBO0FBQ0EsZ0RBREE7QUFFQSxrREFGQTtBQUdBLG9EQUhBO0FBSUEsa0RBSkE7QUFLQTtBQUxBLEdBREE7QUFRQSxtQkFSQTtBQVVBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFjQSxNQWRBLGtCQWNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFsQkEsRzs7Ozs7Ozs7Ozs7O0FDckpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUErQztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUMsdUJBQXVCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0Msa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL01BO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7OztBQUdwRDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF1TSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9SZXBQcm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+UHJvZHVjdHMgT3JkZXJzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyIC8+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5EYWlseSB8PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1PldlZWtseSB8PC9oNT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1Pk1vbnRobHkgfDwvaDU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5ZZWFybHkgfDwvaDU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5DdXN0b21lPC9oNT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2Pi0tPlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknPyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvZGFpbHlcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknPyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPkRhaWx5PC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnd2Vla2x5Jz8gJ2FjdGl2ZSc6JycgXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3dlZWtseVwiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09ICd3ZWVrbHknPyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPldlZWtseTwvYT5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSc/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy9tb250aGx5XCJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gJ21vbnRobHknPyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPk1vbnRobHk8L2E+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ3llYXJseSc/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy95ZWFybHlcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAneWVhcmx5Jz8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5ZZWFybHk8L2E+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ2N1c3RvbSc/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy9jdXN0b21cIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAnY3VzdG9tJz8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5DdXN0b208L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1ob21lXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtaG9tZS10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknXCI+XG4gICAgICAgICAgICAgIDxhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLWRhaWx5PjwvYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1kYWlseT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnd2Vla2x5Jz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtcHJvZmlsZVwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXByb2ZpbGUtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZF90YWIgPT0gJ3dlZWtseSdcIj5cbiAgICAgICAgICAgICAgPGFkbWluLXJlcG9ydHMtcHJvZHVjdHMtd2Vla2x5PjwvYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy13ZWVrbHk+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ21vbnRobHknPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1tb250aGx5XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtbW9udGhseS10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSdcIj5cbiAgICAgICAgICAgICAgPGFkbWluLXJlcG9ydHMtcHJvZHVjdHMtbW9udGhseT48L2FkbWluLXJlcG9ydHMtcHJvZHVjdHMtbW9udGhseT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAneWVhcmx5Jz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYteWVhcmx5XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYteWVhcmx5LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRfdGFiID09ICd5ZWFybHknXCI+XG4gICAgICAgICAgICAgIDxhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLXllYXJseT48L2FkbWluLXJlcG9ydHMtcHJvZHVjdHMteWVhcmx5PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICdjdXN0b20nPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1jdXN0b21cIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1jdXN0b20tdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZF90YWIgPT0gJ2N1c3RvbSdcIj5cbiAgICAgICAgICAgICAgPGFkbWluLXJlcG9ydHMtcHJvZHVjdHMtY3VzdG9tPjwvYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1jdXN0b20+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmNvbnN0IFJlcFByb2REYWlseSA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvUmVwUHJvZERhaWx5XCIgKi8gXCIuL2RhaWx5LnZ1ZVwiXG4gICk7XG5jb25zdCBSZXBQcm9kV2Vla2x5ID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9SZXBQcm9kV2Vla2x5XCIgKi8gXCIuL3dlZWtseS52dWVcIlxuICApO1xuY29uc3QgUmVwUHJvZE1vbnRobHkgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFByb2RNb250aGx5XCIgKi8gXCIuL21vbnRobHkudnVlXCJcbiAgKTtcbmNvbnN0IFJlcFByb2RZZWFybHkgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFByb2RZZWFybHlcIiAqLyBcIi4veWVhcmx5LnZ1ZVwiXG4gICk7XG5jb25zdCBSZXBQcm9kQ3VzdG9tID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9SZXBQcm9kQ3VzdG9tXCIgKi8gXCIuL2N1c3RvbS52dWVcIlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtZGFpbHlcIjogUmVwUHJvZERhaWx5LFxuICAgIFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy13ZWVrbHlcIjogUmVwUHJvZFdlZWtseSxcbiAgICBcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtbW9udGhseVwiOiBSZXBQcm9kTW9udGhseSxcbiAgICBcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMteWVhcmx5XCI6IFJlcFByb2RZZWFybHksXG4gICAgXCJhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLWN1c3RvbVwiOiBSZXBQcm9kQ3VzdG9tLFxuICB9LFxuICBwcm9wczogW1wicmVwb3J0XCJdLFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5zZWxlY3RlZF90YWIgPSB0aGlzLnJlcG9ydDtcbiAgfSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZF90YWI6IFwiZGFpbHlcIixcbiAgICB9O1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcIm5hdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL2RhaWx5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEYWlseVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvd2Vla2x5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ3ZWVrbHlcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2Vla2x5XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvbW9udGhseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwibW9udGhseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb250aGx5XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJ5ZWFybHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vcmVwb3J0cy9wcm9kdWN0c29yZGVycy95ZWFybHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZWFybHlcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL2N1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwiY3VzdG9tXCIgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkN1c3RvbVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiLCBhdHRyczogeyBpZDogXCJuYXYtdGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImRhaWx5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtZGFpbHlcIildLCAxKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ3ZWVrbHlcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX2MoXCJhZG1pbi1yZXBvcnRzLXByb2R1Y3RzLXdlZWtseVwiKV0sIDEpXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtbW9udGhseVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtbW9udGhseS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW19jKFwiYWRtaW4tcmVwb3J0cy1wcm9kdWN0cy1tb250aGx5XCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LXllYXJseVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYteWVhcmx5LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMteWVhcmx5XCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWN1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtY3VzdG9tLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtcHJvZHVjdHMtY3VzdG9tXCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlByb2R1Y3RzIE9yZGVyc1wiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdjMDk2NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjU3YzA5NjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NTdjMDk2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NTdjMDk2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NTdjMDk2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1N2MwOTY2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1N2MwOTY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NTdjMDk2NiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=