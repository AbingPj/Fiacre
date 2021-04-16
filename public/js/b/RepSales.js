(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepSales"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
//
var RepSalesDaily = function RepSalesDaily() {
  return __webpack_require__.e(/*! import() | js/b/RepSalesDaily */ "js/b/RepSalesDaily").then(__webpack_require__.bind(null, /*! ./daily.vue */ "./resources/js/backend/components/reportssales/daily.vue"));
};

var RepSalesWeekly = function RepSalesWeekly() {
  return __webpack_require__.e(/*! import() | js/b/RepSalesWeekly */ "js/b/RepSalesWeekly").then(__webpack_require__.bind(null, /*! ./weekly.vue */ "./resources/js/backend/components/reportssales/weekly.vue"));
};

var RepSalesMonthly = function RepSalesMonthly() {
  return __webpack_require__.e(/*! import() | js/b/RepSalesMonthly */ "js/b/RepSalesMonthly").then(__webpack_require__.bind(null, /*! ./monthly.vue */ "./resources/js/backend/components/reportssales/monthly.vue"));
};

var RepSalesYearly = function RepSalesYearly() {
  return __webpack_require__.e(/*! import() | js/b/RepSalesYearly */ "js/b/RepSalesYearly").then(__webpack_require__.bind(null, /*! ./yearly.vue */ "./resources/js/backend/components/reportssales/yearly.vue"));
};

var RepSalesCustom = function RepSalesCustom() {
  return __webpack_require__.e(/*! import() | js/b/RepSalesCustom */ "js/b/RepSalesCustom").then(__webpack_require__.bind(null, /*! ./custom.vue */ "./resources/js/backend/components/reportssales/custom.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "admin-reports-sales-daily": RepSalesDaily,
    "admin-reports-sales-weekly": RepSalesWeekly,
    "admin-reports-sales-monthly": RepSalesMonthly,
    "admin-reports-sales-yearly": RepSalesYearly,
    "admin-reports-sales-custom": RepSalesCustom
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
                    href: "/admin/reports/sales/daily",
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
                    href: "/admin/reports/sales/weekly",
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
                    href: "/admin/reports/sales/monthly",
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
                    href: "/admin/reports/sales/yearly",
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
                    href: "/admin/reports/sales/custom",
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
                  ? _c("div", [_c("admin-reports-sales-daily")], 1)
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
                  ? _c("div", [_c("admin-reports-sales-weekly")], 1)
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
                  ? _c("div", [_c("admin-reports-sales-monthly")], 1)
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
                  ? _c("div", [_c("admin-reports-sales-yearly")], 1)
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
                  ? _c("div", [_c("admin-reports-sales-custom")], 1)
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
        _c("h2", { staticClass: "card-title mb-0" }, [_vm._v("Sales")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reportssales/index.vue":
/*!****************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/index.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=20224480&scoped=true& */ "./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20224480",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reportssales/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=20224480&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/index.vue?vue&type=template&id=20224480&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_20224480_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0c3NhbGVzL2luZGV4LnZ1ZT8wOGZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0c3NhbGVzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9pbmRleC52dWU/M2E0YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9pbmRleC52dWU/ODMyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUlBO0FBQUEsU0FDQSxvTUFEQTtBQUFBOztBQUlBO0FBQUEsU0FDQSx3TUFEQTtBQUFBOztBQUlBO0FBQUEsU0FDQSw0TUFEQTtBQUFBOztBQUlBO0FBQUEsU0FDQSx3TUFEQTtBQUFBOztBQUlBO0FBQUEsU0FDQSx3TUFEQTtBQUFBOztBQUtBO0FBQ0E7QUFDQSw4Q0FEQTtBQUVBLGdEQUZBO0FBR0Esa0RBSEE7QUFJQSxnREFKQTtBQUtBO0FBTEEsR0FEQTtBQVFBLG1CQVJBO0FBVUEsU0FWQSxxQkFVQTtBQUNBO0FBQ0EsR0FaQTtBQWNBLE1BZEEsa0JBY0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQWxCQSxHOzs7Ozs7Ozs7Ozs7QUN0SkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0NBQStDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQiwyQkFBMkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQ0FBcUMsdUJBQXVCLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0Msa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1JlcFNhbGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5TYWxlczwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8YnIgLz5cclxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5EYWlseSB8PC9oNT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtLTJcIj48aDU+V2Vla2x5IHw8L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5Nb250aGx5IHw8L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm0tMlwiPjxoNT5ZZWFybHkgfDwvaDU+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibS0yXCI+PGg1PkN1c3RvbWU8L2g1PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICdkYWlseSc/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9yZXBvcnRzL3NhbGVzL2RhaWx5XCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+RGFpbHk8L2E+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICd3ZWVrbHknPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9zYWxlcy93ZWVrbHlcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09ICd3ZWVrbHknPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+V2Vla2x5PC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ21vbnRobHknPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vcmVwb3J0cy9zYWxlcy9tb250aGx5XCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSc/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5Nb250aGx5PC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ3llYXJseSc/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9yZXBvcnRzL3NhbGVzL3llYXJseVwiXHJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gJ3llYXJseSc/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5ZZWFybHk8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnY3VzdG9tJz8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3JlcG9ydHMvc2FsZXMvY3VzdG9tXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAnY3VzdG9tJz8gJ3RydWUnOidmYWxzZScgXCJcclxuICAgICAgICAgICAgPkN1c3RvbTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICdkYWlseSc/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtaG9tZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1ob21lLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnZGFpbHknXCI+XHJcbiAgICAgICAgICAgICAgPGFkbWluLXJlcG9ydHMtc2FsZXMtZGFpbHk+PC9hZG1pbi1yZXBvcnRzLXNhbGVzLWRhaWx5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICd3ZWVrbHknPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LXByb2ZpbGVcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcHJvZmlsZS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZF90YWIgPT0gJ3dlZWtseSdcIj5cclxuICAgICAgICAgICAgICA8YWRtaW4tcmVwb3J0cy1zYWxlcy13ZWVrbHk+PC9hZG1pbi1yZXBvcnRzLXNhbGVzLXdlZWtseT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSc/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtbW9udGhseVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1tb250aGx5LXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkX3RhYiA9PSAnbW9udGhseSdcIj5cclxuICAgICAgICAgICAgICA8YWRtaW4tcmVwb3J0cy1zYWxlcy1tb250aGx5PjwvYWRtaW4tcmVwb3J0cy1zYWxlcy1tb250aGx5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09ICd5ZWFybHknPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LXllYXJseVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi15ZWFybHktdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRfdGFiID09ICd5ZWFybHknXCI+XHJcbiAgICAgICAgICAgICAgPGFkbWluLXJlcG9ydHMtc2FsZXMteWVhcmx5PjwvYWRtaW4tcmVwb3J0cy1zYWxlcy15ZWFybHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gJ2N1c3RvbSc/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtY3VzdG9tXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWN1c3RvbS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZF90YWIgPT0gJ2N1c3RvbSdcIj5cclxuICAgICAgICAgICAgICA8YWRtaW4tcmVwb3J0cy1zYWxlcy1jdXN0b20+PC9hZG1pbi1yZXBvcnRzLXNhbGVzLWN1c3RvbT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuY29uc3QgUmVwU2FsZXNEYWlseSA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFNhbGVzRGFpbHlcIiAqLyBcIi4vZGFpbHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBTYWxlc1dlZWtseSA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFNhbGVzV2Vla2x5XCIgKi8gXCIuL3dlZWtseS52dWVcIlxyXG4gICk7XHJcbmNvbnN0IFJlcFNhbGVzTW9udGhseSA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFNhbGVzTW9udGhseVwiICovIFwiLi9tb250aGx5LnZ1ZVwiXHJcbiAgKTtcclxuY29uc3QgUmVwU2FsZXNZZWFybHkgPSAoKSA9PlxyXG4gIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9SZXBTYWxlc1llYXJseVwiICovIFwiLi95ZWFybHkudnVlXCJcclxuICApO1xyXG5jb25zdCBSZXBTYWxlc0N1c3RvbSA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1JlcFNhbGVzQ3VzdG9tXCIgKi8gXCIuL2N1c3RvbS52dWVcIlxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgXCJhZG1pbi1yZXBvcnRzLXNhbGVzLWRhaWx5XCI6IFJlcFNhbGVzRGFpbHksXHJcbiAgICBcImFkbWluLXJlcG9ydHMtc2FsZXMtd2Vla2x5XCI6IFJlcFNhbGVzV2Vla2x5LFxyXG4gICAgXCJhZG1pbi1yZXBvcnRzLXNhbGVzLW1vbnRobHlcIjogUmVwU2FsZXNNb250aGx5LFxyXG4gICAgXCJhZG1pbi1yZXBvcnRzLXNhbGVzLXllYXJseVwiOiBSZXBTYWxlc1llYXJseSxcclxuICAgIFwiYWRtaW4tcmVwb3J0cy1zYWxlcy1jdXN0b21cIjogUmVwU2FsZXNDdXN0b20sXHJcbiAgfSxcclxuICBwcm9wczogW1wicmVwb3J0XCJdLFxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZF90YWIgPSB0aGlzLnJlcG9ydDtcclxuICB9LFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRfdGFiOiBcImRhaWx5XCIsXHJcbiAgICB9O1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcIm5hdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3NhbGVzL2RhaWx5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEYWlseVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3JlcG9ydHMvc2FsZXMvd2Vla2x5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ3ZWVrbHlcIiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2Vla2x5XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3JlcG9ydHMvc2FsZXMvbW9udGhseVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwibW9udGhseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb250aGx5XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJ5ZWFybHlcIiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vcmVwb3J0cy9zYWxlcy95ZWFybHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJZZWFybHlcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9yZXBvcnRzL3NhbGVzL2N1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRfdGFiID09IFwiY3VzdG9tXCIgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkN1c3RvbVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiLCBhdHRyczogeyBpZDogXCJuYXYtdGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImRhaWx5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJkYWlseVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtc2FsZXMtZGFpbHlcIildLCAxKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IFwid2Vla2x5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJ3ZWVrbHlcIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX2MoXCJhZG1pbi1yZXBvcnRzLXNhbGVzLXdlZWtseVwiKV0sIDEpXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtbW9udGhseVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtbW9udGhseS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZF90YWIgPT0gXCJtb250aGx5XCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW19jKFwiYWRtaW4tcmVwb3J0cy1zYWxlcy1tb250aGx5XCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LXllYXJseVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYteWVhcmx5LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcInllYXJseVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtc2FsZXMteWVhcmx5XCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWN1c3RvbVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtY3VzdG9tLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkX3RhYiA9PSBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImFkbWluLXJlcG9ydHMtc2FsZXMtY3VzdG9tXCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW192bS5fdihcIlNhbGVzXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAyMjQ0ODAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjIwMjI0NDgwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMDIyNDQ4MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMDIyNDQ4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMDIyNDQ4MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMjI0NDgwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzIwMjI0NDgwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwMjI0NDgwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==