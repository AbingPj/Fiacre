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
            _vm._v("\n        Year:" + _vm._s(_vm.yearLabel) + "\n        "),
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
                _vm._v(" Print\n        ")
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
                _vm._v("\n          XLS\n        ")
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
                _vm._v("\n          CSV\n        ")
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
          [_c("i", { staticClass: "fas fa-filter" }), _vm._v(" Filter\n      ")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWU/YjA2OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMveWVhcmx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMveWVhcmx5LnZ1ZT8yMDI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy95ZWFybHkudnVlP2JiYzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQUNBLFNBREEscUJBQ0E7QUFDQTtBQUNBLEdBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLHFCQUhBO0FBSUEsbUJBSkE7QUFLQSxnQkFMQTtBQU1BLHVCQU5BO0FBT0E7QUFDQSxzQkFEQTtBQUVBLHdCQUZBO0FBR0EsOEJBSEE7QUFJQSx5QkFKQSxDQUtBOztBQUxBLE9BUEE7QUFjQTtBQUNBLHVCQURBO0FBRUEseURBRkE7QUFHQTtBQUhBO0FBZEE7QUFvQkEsR0F6QkE7QUEwQkE7QUFDQSxXQURBLHFCQUNBO0FBQUE7O0FBQ0EsWUFDQSxJQURBLENBQ0EsMENBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVMQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBd00sQ0FBZ0Isa1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUmVwUHJvZFllYXJseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXY+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICA8aDM+XG4gICAgICAgIDwhLS0gUHJvZHVjdHMgT3JkZXJzIFllYXJseSBSZXBvcnQ6IHt7eWVhckxhYmVsfX0gLS0+XG4gICAgICAgIFllYXI6e3t5ZWFyTGFiZWx9fVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbDogJyt0b3RhbF9vcmRlcnNdXCIgOmhlYWRlcj1cIidQcm9kdWN0cyBPcmRlcnMgWWVhcmx5IFJlcG9ydCAoJyt5ZWFyTGFiZWwrJyknXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpkYXRhPVwiZGF0YVwiIHR5cGU9XCJ4bHNcIiBuYW1lPVwicG95ZWFybHkueGxzXCIgd29ya3NoZWV0PVwiWWVhcmx5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1leGNlbFwiPjwvaT5cbiAgICAgICAgICBYTFNcbiAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cbiAgICAgICAgPGRvd25sb2FkLWV4Y2VsIDpmb290ZXI9XCJbJ3RvdGFsOiAnK3RvdGFsX29yZGVyc11cIiA6aGVhZGVyPVwiJ1Byb2R1Y3RzIE9yZGVycyBZZWFybHkgUmVwb3J0ICgnK3llYXJMYWJlbCsnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cImNzdlwiIG5hbWU9XCJwb3llYXJseS5jc3ZcIiB3b3Jrc2hlZXQ9XCJZZWFybHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWNzdlwiPjwvaT5cbiAgICAgICAgICBDU1ZcbiAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cbiAgICAgIDwvaDM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGF0ZS1waWNrZXIgdi1tb2RlbD1cInllYXJcIiBpZD1cImRhdGUtdGltZS1pbnB1dFwiIDp3cmFwPVwidHJ1ZVwiIDpjb25maWc9XCJvcHRpb25zXCI+PC9kYXRlLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVG9nZ2xlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgIDxidXR0b24gQGNsaWNrPVwiZmlsdGVyKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWx0ZXJcIj48L2k+IEZpbHRlclxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDwhLS0gPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+IC0tPlxuICAgICAgICAgICAgICA8dGg+TW9udGg8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBQcm9kdWN0cyBTb2xkPC90aD5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Ub3RhbCBOby4gT3JkZXJzPC90aD5cbiAgICAgICAgICAgICAgPCEtLSA8dGg+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+U2FsZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90aD4gLS0+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF0ZX19PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0udG90YWxfcHJvZHVjdHN9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tpdGVtLnRvdGFsX29yZGVyc319PC90ZD5cbiAgICAgICAgICAgICAgPCEtLSA8dGQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0udG90YWxfZWFybmluZ3MpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD4gLS0+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPHRmb290PlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+VG90YWw8L3RoPlxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0b3RhbF9vcmRlcnN9fTwvdGg+XG4gICAgICAgICAgICAgIDwhLS0gPHRoPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHRvdGFsKX19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvdGg+IC0tPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rmb290PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZ2V0RGF0YSgpO1xuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbXSxcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgdG90YWxfb3JkZXJzOiAwLFxuICAgICAgeWVhckxhYmVsOiBcIlwiLFxuICAgICAgeWVhcjogbnVsbCxcbiAgICAgIGZpbHRlcl95ZWFyOiBudWxsLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBmb3JtYXQ6IFwiWVlZWVwiLFxuICAgICAgICB1c2VDdXJyZW50OiB0cnVlLFxuICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiB0cnVlLFxuICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxuICAgICAgICAvLyBzaG93VG9kYXlCdXR0b24gOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGpzb25fZmllbGRzOiB7XG4gICAgICAgIFwiTW9udGhcIjogXCJkYXRlXCIsXG4gICAgICAgIFwiVG90YWwgTnVtYmVyIG9mIFByb2R1Y3RzIFNvbGRcIjogXCJ0b3RhbF9wcm9kdWN0c1wiLFxuICAgICAgICBcIlRvdGFsIE51bWJlciBvZiBPcmRlcnNcIjogXCJ0b3RhbF9vcmRlcnNcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdldERhdGEoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hZG1pbi9hcGkvcmVwb3J0cy9wcm9kdWN0c29yZGVycy95ZWFybHlcIilcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XG4gICAgICAgICAgdGhpcy50b3RhbF9vcmRlcnMgPSByZXMuZGF0YS50b3RhbF9vcmRlcnM7XG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnllYXJMYWJlbCA9IHJlcy5kYXRhLnllYXI7XG4gICAgICAgICAgdGhpcy55ZWFyID0gcmVzLmRhdGEueWVhcjtcbiAgICAgICAgICB0aGlzLmZpbHRlcl95ZWFyID0gcmVzLmRhdGEueWVhcjtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZmlsdGVyKCkge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vYXBpL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMveWVhcmx5XCIsIHtcbiAgICAgICAgICB5ZWFyOiB0aGlzLnllYXJcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XG4gICAgICAgICAgdGhpcy50b3RhbF9vcmRlcnMgPSByZXMuZGF0YS50b3RhbF9vcmRlcnM7XG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLnllYXJMYWJlbCA9IHJlcy5kYXRhLnllYXI7XG4gICAgICAgICAgdGhpcy55ZWFyID0gcmVzLmRhdGEueWVhcjtcbiAgICAgICAgICB0aGlzLmZpbHRlcl95ZWFyID0gcmVzLmRhdGEueWVhcjtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgcHJpbnQoKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICB1cmw6IFwiL2FkbWluL2dlbmVyYXRlL3Byb2R1Y3RzLW9yZGVyL3BkZi95ZWFybHlcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRlOiB0aGlzLmZpbHRlcl95ZWFyXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcInllYXJseSBcIiArIHRoaXMuZmlsdGVyX3llYXIgKyBcIi5wZGZcIik7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICB9LFxuXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgWWVhcjpcIiArIF92bS5fcyhfdm0ueWVhckxhYmVsKSArIFwiXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByaW50KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUHJpbnRcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBmb290ZXI6IFtcInRvdGFsOiBcIiArIF92bS50b3RhbF9vcmRlcnNdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIlByb2R1Y3RzIE9yZGVycyBZZWFybHkgUmVwb3J0IChcIiArIF92bS55ZWFyTGFiZWwgKyBcIilcIixcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInhsc1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwb3llYXJseS54bHNcIixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJZZWFybHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWV4Y2VsXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFhMU1xcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWw6IFwiICsgX3ZtLnRvdGFsX29yZGVyc10sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiUHJvZHVjdHMgT3JkZXJzIFllYXJseSBSZXBvcnQgKFwiICsgX3ZtLnllYXJMYWJlbCArIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBveWVhcmx5LmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIlllYXJseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIENTVlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkYXRlLXRpbWUtaW5wdXRcIiwgd3JhcDogdHJ1ZSwgY29uZmlnOiBfdm0ub3B0aW9ucyB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ueWVhcixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ueWVhciA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ5ZWFyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWx0ZXIoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pLCBfdm0uX3YoXCIgRmlsdGVyXFxuICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEwXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWluLWhlaWdodFwiOiBcIjMwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmRhdGUpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRvdGFsX3Byb2R1Y3RzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRvdGFsX29yZGVycykpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGZvb3RcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1vbnRoXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBOby4gUHJvZHVjdHMgU29sZFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIlRvdGFsIE5vLiBPcmRlcnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4veWVhcmx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDcwNWViNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi95ZWFybHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi95ZWFybHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4MDcwNWViNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4MDcwNWViNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4MDcwNWViNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4veWVhcmx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDcwNWViNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MDcwNWViNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3llYXJseS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3llYXJseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veWVhcmx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFybHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwNzA1ZWI0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==