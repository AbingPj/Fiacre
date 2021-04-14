(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepProdMonthly"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getData();
  },
  data: function data() {
    return {
      data: [],
      total: 0,
      total_orders: 0,
      dateLabel: "",
      date: null,
      filter_date: null,
      options: {
        format: "MMMM YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      },
      json_fields: {
        "Date": "date",
        "Total Number of Products Sold": "total_products",
        "Total Number of Orders": "total_orders"
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.post("/admin/api/reports/productsorders/monthly").then(function (res) {
        _this.total = res.data.total_earnings;
        _this.total_orders = res.data.total_orders;
        _this.data = res.data.data;
        _this.dateLabel = res.data.date;
        _this.date = res.data.date;
        _this.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this2 = this;

      axios.post("/admin/api/reports/productsorders/monthly", {
        date: this.date
      }).then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.total_orders = res.data.total_orders;
        _this2.data = res.data.data;
        _this2.dateLabel = res.data.date;
        _this2.date = res.data.date;
        _this2.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      var _this3 = this;

      axios({
        method: "post",
        url: "/admin/generate/products-order/pdf/monthly",
        data: {
          date: this.filter_date
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
        link.setAttribute("download", "monthly " + _this3.filter_date + ".pdf"); //or any other extension

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21& ***!
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "h3",
          [
            _vm._v("\r\n        " + _vm._s(_vm.dateLabel) + "\r\n        "),
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
                  footer: ["total orders: " + _vm.total_orders],
                  header:
                    "Products Orders Monthly Report (" + _vm.dateLabel + ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "pomonthly.xls",
                  worksheet: "Monthly"
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
                  footer: ["total orders: " + _vm.total_orders],
                  header:
                    "Products Orders Monthly Report (" + _vm.dateLabel + ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "pomonthly.csv",
                  worksheet: "Monthly"
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
                value: _vm.date,
                callback: function($$v) {
                  _vm.date = $$v
                },
                expression: "date"
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
          _c("table", { staticClass: "table table-hover table-sm" }, [
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
                _vm._m(2),
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
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v("Total No. Products Sold")
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Total No. Orders")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("b", [_vm._v("Total")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/monthly.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/monthly.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./monthly.vue?vue&type=template&id=3acc8c21& */ "./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21&");
/* harmony import */ var _monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monthly.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__["render"],
  _monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/product-orders/monthly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./monthly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_monthly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./monthly.vue?vue&type=template&id=3acc8c21& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/monthly.vue?vue&type=template&id=3acc8c21&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_monthly_vue_vue_type_template_id_3acc8c21___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL21vbnRobHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9tb250aGx5LnZ1ZT9lNGY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9tb250aGx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvbW9udGhseS52dWU/N2I1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvbW9udGhseS52dWU/MDcyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFGQTtBQUNBLFNBREEscUJBQ0E7QUFDQTtBQUNBLEdBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLHFCQUhBO0FBSUEsbUJBSkE7QUFLQSxnQkFMQTtBQU1BLHVCQU5BO0FBT0E7QUFDQSwyQkFEQTtBQUVBLHdCQUZBO0FBR0EsOEJBSEE7QUFJQSx5QkFKQSxDQUtBOztBQUxBLE9BUEE7QUFjQTtBQUNBLHNCQURBO0FBRUEseURBRkE7QUFHQTtBQUhBO0FBZEE7QUFxQkEsR0ExQkE7QUEyQkE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0EsWUFDQSxJQURBLENBQ0EsMkNBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDck1BO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUF5TSxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9SZXBQcm9kTW9udGhseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8IS0tIFByb2R1Y3RzIE9yZGVycyBNb250aGx5IFJlcG9ydDoge3tkYXRlTGFiZWx9fSAtLT5cclxuICAgICAgICB7e2RhdGVMYWJlbH19XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicHJpbnQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZG93bmxvYWQtZXhjZWwgOmZvb3Rlcj1cIlsndG90YWwgb3JkZXJzOiAnK3RvdGFsX29yZGVyc11cIiA6aGVhZGVyPVwiJ1Byb2R1Y3RzIE9yZGVycyBNb250aGx5IFJlcG9ydCAoJytkYXRlTGFiZWwrJyknXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpkYXRhPVwiZGF0YVwiIHR5cGU9XCJ4bHNcIiBuYW1lPVwicG9tb250aGx5Lnhsc1wiIHdvcmtzaGVldD1cIk1vbnRobHlcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBvcmRlcnM6ICcrdG90YWxfb3JkZXJzXVwiIDpoZWFkZXI9XCInUHJvZHVjdHMgT3JkZXJzIE1vbnRobHkgUmVwb3J0ICgnK2RhdGVMYWJlbCsnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cImNzdlwiIG5hbWU9XCJwb21vbnRobHkuY3N2XCIgd29ya3NoZWV0PVwiTW9udGhseVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XHJcbiAgICAgICAgICBDU1ZcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XCJkYXRlXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwib3B0aW9uc1wiPjwvZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJUb2dnbGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICA8YnV0dG9uIEBjbGljaz1cImZpbHRlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWx0ZXJcIj48L2k+IEZpbHRlclxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtNVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+VG90YWwgTm8uIFByb2R1Y3RzIFNvbGQ8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+VG90YWwgTm8uIE9yZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5TYWxlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+LS0+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICA8dGg+e3tpdGVtLmRhdGV9fTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0udG90YWxfcHJvZHVjdHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0udG90YWxfb3JkZXJzfX08L3RkPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0udG90YWxfZWFybmluZ3MpfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RkPi0tPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIDxiPlRvdGFsPC9iPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0b3RhbF9vcmRlcnN9fTwvdGg+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbCl9fTwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90aD4tLT5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgICAgdG90YWxfb3JkZXJzOiAwLFxyXG4gICAgICBkYXRlTGFiZWw6IFwiXCIsXHJcbiAgICAgIGRhdGU6IG51bGwsXHJcbiAgICAgIGZpbHRlcl9kYXRlOiBudWxsLFxyXG4gICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgZm9ybWF0OiBcIk1NTU0gWVlZWVwiLFxyXG4gICAgICAgIHVzZUN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxyXG4gICAgICAgIC8vIHNob3dUb2RheUJ1dHRvbiA6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgXCJEYXRlXCI6IFwiZGF0ZVwiLFxyXG4gICAgICAgIFwiVG90YWwgTnVtYmVyIG9mIFByb2R1Y3RzIFNvbGRcIjogXCJ0b3RhbF9wcm9kdWN0c1wiLFxyXG4gICAgICAgIFwiVG90YWwgTnVtYmVyIG9mIE9yZGVyc1wiOiBcInRvdGFsX29yZGVyc1wiLFxyXG5cclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL21vbnRobHlcIilcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsX2Vhcm5pbmdzO1xyXG4gICAgICAgICAgdGhpcy50b3RhbF9vcmRlcnMgPSByZXMuZGF0YS50b3RhbF9vcmRlcnM7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2RhdGUgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL21vbnRobHlcIiwge1xyXG4gICAgICAgICAgZGF0ZTogdGhpcy5kYXRlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsX2Vhcm5pbmdzO1xyXG4gICAgICAgICAgdGhpcy50b3RhbF9vcmRlcnMgPSByZXMuZGF0YS50b3RhbF9vcmRlcnM7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2RhdGUgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByaW50KCkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hZG1pbi9nZW5lcmF0ZS9wcm9kdWN0cy1vcmRlci9wZGYvbW9udGhseVwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmZpbHRlcl9kYXRlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIm1vbnRobHkgXCIgKyB0aGlzLmZpbHRlcl9kYXRlICsgXCIucGRmXCIpOyAvL29yIGFueSBvdGhlciBleHRlbnNpb25cclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICAgICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xyXG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXHJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRlTGFiZWwpICsgXCJcXHJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJpbnQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wcmludFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBQcmludFxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWwgb3JkZXJzOiBcIiArIF92bS50b3RhbF9vcmRlcnNdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIlByb2R1Y3RzIE9yZGVycyBNb250aGx5IFJlcG9ydCAoXCIgKyBfdm0uZGF0ZUxhYmVsICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ4bHNcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9tb250aGx5Lnhsc1wiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk1vbnRobHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWV4Y2VsXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIFhMU1xcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWwgb3JkZXJzOiBcIiArIF92bS50b3RhbF9vcmRlcnNdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIlByb2R1Y3RzIE9yZGVycyBNb250aGx5IFJlcG9ydCAoXCIgKyBfdm0uZGF0ZUxhYmVsICsgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9tb250aGx5LmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk1vbnRobHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWNzdlwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBDU1ZcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRhdGUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZGF0ZS10aW1lLWlucHV0XCIsIHdyYXA6IHRydWUsIGNvbmZpZzogX3ZtLm9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsdGVyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIEZpbHRlclxcclxcbiAgICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCIzMDBweFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50b3RhbF9wcm9kdWN0cykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIlRvdGFsIE5vLiBQcm9kdWN0cyBTb2xkXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KFwiVG90YWwgTm8uIE9yZGVyc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiVG90YWxcIildKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tb250aGx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYWNjOGMyMSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb250aGx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9udGhseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYWNjOGMyMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYWNjOGMyMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYWNjOGMyMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbW9udGhseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FjYzhjMjEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2FjYzhjMjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9tb250aGx5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9udGhseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9udGhseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbW9udGhseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FjYzhjMjEmXCIiXSwic291cmNlUm9vdCI6IiJ9