(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepProdYearly"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getData();
  },
  data: function data() {
    return {
      data: [],
      total: 0,
      total_orders: 0,
      yearLabel: "",
      year: null,
      filter_year: null,
      options: {
        format: "YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      },
      json_fields: {
        "Month": "date",
        "Total Number of Products Sold": "total_products",
        "Total Number of Orders": "total_orders"
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.post("/admin/api/reports/productsorders/yearly").then(function (res) {
        _this.total = res.data.total_earnings;
        _this.total_orders = res.data.total_orders;
        _this.data = res.data.data;
        _this.yearLabel = res.data.year;
        _this.year = res.data.year;
        _this.filter_year = res.data.year;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this2 = this;

      axios.post("/admin/api/reports/productsorders/yearly", {
        year: this.year
      }).then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.total_orders = res.data.total_orders;
        _this2.data = res.data.data;
        _this2.yearLabel = res.data.year;
        _this2.year = res.data.year;
        _this2.filter_year = res.data.year;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      var _this3 = this;

      axios({
        method: "post",
        url: "/admin/generate/products-order/pdf/yearly",
        data: {
          date: this.filter_year
        },
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "yearly " + _this3.filter_year + ".pdf"); //or any other extension

        document.body.appendChild(link);
        link.click();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "h3",
          [
            _vm._v(
              "\r\n        Year:" + _vm._s(_vm.yearLabel) + "\r\n        "
            ),
            _c(
              "button",
              {
                staticClass: "btn btn-success float-right",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.print()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-print" }),
                _vm._v(" Print\r\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total: " + _vm.total_orders],
                  header:
                    "Products Orders Yearly Report (" + _vm.yearLabel + ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "poyearly.xls",
                  worksheet: "Yearly"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-excel" }),
                _vm._v("\r\n          XLS\r\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total: " + _vm.total_orders],
                  header:
                    "Products Orders Yearly Report (" + _vm.yearLabel + ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "poyearly.csv",
                  worksheet: "Yearly"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-csv" }),
                _vm._v("\r\n          CSV\r\n        ")
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _c("date-picker", {
              attrs: { id: "date-time-input", wrap: true, config: _vm.options },
              model: {
                value: _vm.year,
                callback: function($$v) {
                  _vm.year = $$v
                },
                expression: "year"
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            on: {
              click: function($event) {
                return _vm.filter()
              }
            }
          },
          [
            _c("i", { staticClass: "fas fa-filter" }),
            _vm._v(" Filter\r\n      ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-10" }, [
        _c("div", { staticStyle: { "min-height": "300px" } }, [
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("th", [_vm._v(_vm._s(item.date))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.total_products))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.total_orders))
                  ])
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _c("th", [_vm._v("Total")]),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm.total_orders))
                ])
              ])
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary datepickerbutton",
          attrs: { type: "button", title: "Toggle" }
        },
        [_c("i", { staticClass: "far fa-calendar" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Month")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v("Total No. Products Sold")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total No. Orders")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/yearly.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/yearly.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yearly.vue?vue&type=template&id=80705eb4& */ "./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4&");
/* harmony import */ var _yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yearly.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/product-orders/yearly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./yearly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./yearly.vue?vue&type=template&id=80705eb4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/yearly.vue?vue&type=template&id=80705eb4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_yearly_vue_vue_type_template_id_80705eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWU/YjA2OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMveWVhcmx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMveWVhcmx5LnZ1ZT8yMDI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy95ZWFybHkudnVlP2JiYzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQUNBLFNBREEscUJBQ0E7QUFDQTtBQUNBLEdBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLHFCQUhBO0FBSUEsbUJBSkE7QUFLQSxnQkFMQTtBQU1BLHVCQU5BO0FBT0E7QUFDQSxzQkFEQTtBQUVBLHdCQUZBO0FBR0EsOEJBSEE7QUFJQSx5QkFKQSxDQUtBOztBQUxBLE9BUEE7QUFjQTtBQUNBLHVCQURBO0FBRUEseURBRkE7QUFHQTtBQUhBO0FBZEE7QUFvQkEsR0F6QkE7QUEwQkE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0EsWUFDQSxJQURBLENBQ0EsMENBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqTUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ3NHO0FBQ3RHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXdNLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1JlcFByb2RZZWFybHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPCEtLSBQcm9kdWN0cyBPcmRlcnMgWWVhcmx5IFJlcG9ydDoge3t5ZWFyTGFiZWx9fSAtLT5cclxuICAgICAgICBZZWFyOnt7eWVhckxhYmVsfX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbDogJyt0b3RhbF9vcmRlcnNdXCIgOmhlYWRlcj1cIidQcm9kdWN0cyBPcmRlcnMgWWVhcmx5IFJlcG9ydCAoJyt5ZWFyTGFiZWwrJyknXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpkYXRhPVwiZGF0YVwiIHR5cGU9XCJ4bHNcIiBuYW1lPVwicG95ZWFybHkueGxzXCIgd29ya3NoZWV0PVwiWWVhcmx5XCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWV4Y2VsXCI+PC9pPlxyXG4gICAgICAgICAgWExTXHJcbiAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cclxuICAgICAgICA8ZG93bmxvYWQtZXhjZWwgOmZvb3Rlcj1cIlsndG90YWw6ICcrdG90YWxfb3JkZXJzXVwiIDpoZWFkZXI9XCInUHJvZHVjdHMgT3JkZXJzIFllYXJseSBSZXBvcnQgKCcreWVhckxhYmVsKycpJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwiY3N2XCIgbmFtZT1cInBveWVhcmx5LmNzdlwiIHdvcmtzaGVldD1cIlllYXJseVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XHJcbiAgICAgICAgICBDU1ZcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XCJ5ZWFyXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwib3B0aW9uc1wiPjwvZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJUb2dnbGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cImZpbHRlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWx0ZXJcIj48L2k+IEZpbHRlclxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtNVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgPHRoPk1vbnRoPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBQcm9kdWN0cyBTb2xkPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBPcmRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHRoPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+U2FsZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RoPiAtLT5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF0ZX19PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7aXRlbS50b3RhbF9wcm9kdWN0c319PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7aXRlbS50b3RhbF9vcmRlcnN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS50b3RhbF9lYXJuaW5ncyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+IC0tPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0b3RhbF9vcmRlcnN9fTwvdGg+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+IC0tPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICB0b3RhbF9vcmRlcnM6IDAsXHJcbiAgICAgIHllYXJMYWJlbDogXCJcIixcclxuICAgICAgeWVhcjogbnVsbCxcclxuICAgICAgZmlsdGVyX3llYXI6IG51bGwsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBmb3JtYXQ6IFwiWVlZWVwiLFxyXG4gICAgICAgIHVzZUN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxyXG4gICAgICAgIC8vIHNob3dUb2RheUJ1dHRvbiA6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgXCJNb250aFwiOiBcImRhdGVcIixcclxuICAgICAgICBcIlRvdGFsIE51bWJlciBvZiBQcm9kdWN0cyBTb2xkXCI6IFwidG90YWxfcHJvZHVjdHNcIixcclxuICAgICAgICBcIlRvdGFsIE51bWJlciBvZiBPcmRlcnNcIjogXCJ0b3RhbF9vcmRlcnNcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3llYXJseVwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsX29yZGVycyA9IHJlcy5kYXRhLnRvdGFsX29yZGVycztcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnllYXJMYWJlbCA9IHJlcy5kYXRhLnllYXI7XHJcbiAgICAgICAgICB0aGlzLnllYXIgPSByZXMuZGF0YS55ZWFyO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfeWVhciA9IHJlcy5kYXRhLnllYXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3llYXJseVwiLCB7XHJcbiAgICAgICAgICB5ZWFyOiB0aGlzLnllYXJcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsX29yZGVycyA9IHJlcy5kYXRhLnRvdGFsX29yZGVycztcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnllYXJMYWJlbCA9IHJlcy5kYXRhLnllYXI7XHJcbiAgICAgICAgICB0aGlzLnllYXIgPSByZXMuZGF0YS55ZWFyO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfeWVhciA9IHJlcy5kYXRhLnllYXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FkbWluL2dlbmVyYXRlL3Byb2R1Y3RzLW9yZGVyL3BkZi95ZWFybHlcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0ZTogdGhpcy5maWx0ZXJfeWVhclxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3BkZlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJ5ZWFybHkgXCIgKyB0aGlzLmZpbHRlcl95ZWFyICsgXCIucGRmXCIpOyAvL29yIGFueSBvdGhlciBleHRlbnNpb25cclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xyXG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICBZZWFyOlwiICsgX3ZtLl9zKF92bS55ZWFyTGFiZWwpICsgXCJcXHJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXByaW50XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbDogXCIgKyBfdm0udG90YWxfb3JkZXJzXSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjpcbiAgICAgICAgICAgICAgICAgICAgXCJQcm9kdWN0cyBPcmRlcnMgWWVhcmx5IFJlcG9ydCAoXCIgKyBfdm0ueWVhckxhYmVsICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ4bHNcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG95ZWFybHkueGxzXCIsXG4gICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiWWVhcmx5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1leGNlbFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBYTFNcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBmb290ZXI6IFtcInRvdGFsOiBcIiArIF92bS50b3RhbF9vcmRlcnNdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIlByb2R1Y3RzIE9yZGVycyBZZWFybHkgUmVwb3J0IChcIiArIF92bS55ZWFyTGFiZWwgKyBcIilcIixcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNzdlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwb3llYXJseS5jc3ZcIixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJZZWFybHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWNzdlwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBDU1ZcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRhdGUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGF0ZS10aW1lLWlucHV0XCIsIHdyYXA6IHRydWUsIGNvbmZpZzogX3ZtLm9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnllYXIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnllYXIgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwieWVhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsdGVyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIEZpbHRlclxcclxcbiAgICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCIzMDBweFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50b3RhbF9wcm9kdWN0cykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udG90YWxfb3JkZXJzKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB0aXRsZTogXCJUb2dnbGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXJcIiB9KV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJNb250aFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiVG90YWwgTm8uIFByb2R1Y3RzIFNvbGRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtfdm0uX3YoXCJUb3RhbCBOby4gT3JkZXJzXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3llYXJseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODA3MDVlYjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4veWVhcmx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4veWVhcmx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MDcwNWViNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MDcwNWViNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MDcwNWViNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4veWVhcmx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDcwNWViNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MDcwNWViNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3llYXJseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veWVhcmx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFybHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwNzA1ZWI0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==