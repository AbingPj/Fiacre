(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepSalesCustom"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
  created: function created() {
    this.getData();
    this.getOrganization();
  },
  data: function data() {
    return {
      data: [],
      total: 0,
      fromLabel: null,
      toLabel: null,
      startDate: null,
      endDate: null,
      filter_startDate: null,
      filter_endDate: null,
      configs: {
        start: {
          format: "MMMM DD, YYYY",
          useCurrent: true,
          allowInputToggle: true,
          //   showClear: true,
          //   showClose: true,
          maxDate: moment()
        },
        end: {
          format: "MMMM DD, YYYY",
          useCurrent: true,
          allowInputToggle: true,
          //   showClear: true,
          //   showClose: true,
          minDate: false,
          maxDate: moment()
        }
      },
      json_fields: {
        "Datge": "date",
        "Total Number of Orders": "total_orders",
        "Total Number of Products Sold": "total_products",
        "Sales": {
          field: 'total_earnings',
          callback: function callback(value) {
            return parseFloat(value).toFixed(2);
          }
        }
      },
      organization: [],
      selectedOrganizationId: null
    };
  },
  methods: {
    getOrganization: function getOrganization() {
      var _this = this;

      // atr_name_with_optionc
      axios.get('/admin/api/data/getOrganization').then(function (res) {
        _this.organization = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    onStartChange: function onStartChange(e) {
      //   this.$set(this.configs.end, "minDate", e.date.add(1, "day") || null);
      this.$set(this.configs.end, "minDate", e.date || null);
    },
    onEndChange: function onEndChange(e) {
      //   this.$set(
      //     this.configs.start,
      //     "maxDate",
      //     e.date.subtract(1, "day") || null
      //   );
      this.$set(this.configs.start, "maxDate", e.date || null);
    },
    getData: function getData() {
      var _this2 = this;

      axios.post("/admin/api/reports/sales/custom").then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.data = res.data.data;
        _this2.startDate = res.data.from_label;
        _this2.endDate = res.data.to_label;
        _this2.fromLabel = res.data.from_label;
        _this2.toLabel = res.data.to_label;
        _this2.filter_startDate = res.data.from_label;
        _this2.filter_endDate = res.data.to_label;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this3 = this;

      axios.post("/admin/api/reports/sales/custom", {
        from: this.startDate,
        to: this.endDate
      }).then(function (res) {
        _this3.total = res.data.total_earnings;
        _this3.data = res.data.data;
        _this3.startDate = res.data.from_label;
        _this3.endDate = res.data.to_label;
        _this3.fromLabel = res.data.from_label;
        _this3.toLabel = res.data.to_label;
        _this3.filter_startDate = res.data.from_label;
        _this3.filter_endDate = res.data.to_label;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      axios({
        method: "post",
        url: "/admin/reports/generate/pdf/custom",
        data: {
          from: this.filter_startDate,
          to: this.filter_endDate
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
        link.setAttribute("download", "custom.pdf"); //or any other extension

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                  footer: ["total: ", parseFloat(_vm.total).toFixed(2)],
                  header:
                    "Sales Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "sales.xls",
                  worksheet: "Custom"
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
                  footer: ["total: ", parseFloat(_vm.total).toFixed(2)],
                  header:
                    "Sales Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "sales.csv",
                  worksheet: "Custom"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-csv" }),
                _vm._v("\r\n          CSV\r\n        ")
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("h4", [_vm._v(_vm._s(_vm.fromLabel) + " - " + _vm._s(_vm.toLabel))])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("date-picker", {
              ref: "startDate",
              attrs: {
                id: "date-time-input",
                wrap: true,
                config: _vm.configs.start
              },
              on: { "dp-change": _vm.onStartChange },
              model: {
                value: _vm.startDate,
                callback: function($$v) {
                  _vm.startDate = $$v
                },
                expression: "startDate"
              }
            }),
            _vm._v(" "),
            _vm._m(1)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _vm._m(2),
            _vm._v(" "),
            _c("date-picker", {
              ref: "endDate",
              attrs: {
                id: "date-time-input",
                wrap: true,
                config: _vm.configs.end
              },
              on: { "dp-change": _vm.onEndChange },
              model: {
                value: _vm.endDate,
                callback: function($$v) {
                  _vm.endDate = $$v
                },
                expression: "endDate"
              }
            }),
            _vm._v(" "),
            _vm._m(3)
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
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-10" }, [
        _c("div", { staticStyle: { "min-height": "300px" } }, [
          _c("table", { staticClass: "table table-hover table-sm" }, [
            _vm._m(4),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("th", [_vm._v(_vm._s(item.date))]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.total_orders))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(item.total_products))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticClass: "float-right" }, [
                      _vm._v(
                        "$ " +
                          _vm._s(
                            _vm.displayNumberWithComma(item.total_earnings)
                          )
                      )
                    ])
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
                _c("th", { staticClass: "text-center" }),
                _vm._v(" "),
                _c("th", [
                  _c("span", { staticClass: "float-right" }, [
                    _vm._v("$ " + _vm._s(_vm.displayNumberWithComma(_vm.total)))
                  ])
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("From")])
    ])
  },
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
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("To")])
    ])
  },
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
        _c("th", { staticClass: "text-center" }, [_vm._v("Total No. Orders")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [
          _vm._v("Total No. Products Sold")
        ]),
        _vm._v(" "),
        _c("th", [
          _c("span", { staticClass: "float-right" }, [_vm._v("Sales")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reportssales/custom.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/custom.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom.vue?vue&type=template&id=f484661a& */ "./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a&");
/* harmony import */ var _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reportssales/custom.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./custom.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/custom.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./custom.vue?vue&type=template&id=f484661a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/custom.vue?vue&type=template&id=f484661a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_custom_vue_vue_type_template_id_f484661a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvY3VzdG9tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9jdXN0b20udnVlP2YyZmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvY3VzdG9tLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9jdXN0b20udnVlP2Y3ZjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvY3VzdG9tLnZ1ZT85ZDEyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUhBO0FBQ0EsU0FEQSxxQkFDQTtBQUNBO0FBQ0E7QUFDQSxHQUpBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQSxxQkFIQTtBQUlBLG1CQUpBO0FBS0EscUJBTEE7QUFNQSxtQkFOQTtBQU9BLDRCQVBBO0FBUUEsMEJBUkE7QUFTQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSwwQkFGQTtBQUdBLGdDQUhBO0FBSUE7QUFDQTtBQUNBO0FBTkEsU0FEQTtBQVNBO0FBQ0EsaUNBREE7QUFFQSwwQkFGQTtBQUdBLGdDQUhBO0FBSUE7QUFDQTtBQUNBLHdCQU5BO0FBT0E7QUFQQTtBQVRBLE9BVEE7QUE0QkE7QUFDQSx1QkFEQTtBQUVBLGdEQUZBO0FBR0EseURBSEE7QUFJQTtBQUNBLGlDQURBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Qsa0JBQWtCLGtDQUFrQztBQUNwRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNULGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZCQUE2QjtBQUMvQztBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkJBQTZCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoU0E7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWtNLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXROO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1JlcFNhbGVzQ3VzdG9tLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIDwhLS0gU2FsZXMgUmVwb3J0IC0tPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInByaW50KClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGRvd25sb2FkLWV4Y2VsIDpmb290ZXI9XCJbJ3RvdGFsOiAnLHBhcnNlRmxvYXQodG90YWwpLnRvRml4ZWQoMildXCIgOmhlYWRlcj1cIidTYWxlcyBSZXBvcnQgKCcrZnJvbUxhYmVsLnJlcGxhY2UoLywvZywgJy4nKSArJyAtICcgKyB0b0xhYmVsLnJlcGxhY2UoLywvZywgJy4nKSAgKyAnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cInhsc1wiIG5hbWU9XCJzYWxlcy54bHNcIiB3b3Jrc2hlZXQ9XCJDdXN0b21cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbDogJyxwYXJzZUZsb2F0KHRvdGFsKS50b0ZpeGVkKDIpXVwiIDpoZWFkZXI9XCInU2FsZXMgUmVwb3J0ICgnK2Zyb21MYWJlbC5yZXBsYWNlKC8sL2csICcuJykgKycgLSAnKyB0b0xhYmVsLnJlcGxhY2UoLywvZywgJy4nKSAgKyAnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cImNzdlwiIG5hbWU9XCJzYWxlcy5jc3ZcIiB3b3Jrc2hlZXQ9XCJDdXN0b21cIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtY3N2XCI+PC9pPlxyXG4gICAgICAgICAgQ1NWXHJcbiAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGg0Pnt7ZnJvbUxhYmVsfX0gLSB7e3RvTGFiZWx9fTwvaDQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuXHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj5Gcm9tPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkYXRlLXBpY2tlciB2LW1vZGVsPVwic3RhcnREYXRlXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwiY29uZmlncy5zdGFydFwiIHJlZj1cInN0YXJ0RGF0ZVwiIEBkcC1jaGFuZ2U9XCJvblN0YXJ0Q2hhbmdlXCI+PC9kYXRlLXBpY2tlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlRvZ2dsZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+VG88L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XCJlbmREYXRlXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwiY29uZmlncy5lbmRcIiByZWY9XCJlbmREYXRlXCIgQGRwLWNoYW5nZT1cIm9uRW5kQ2hhbmdlXCI+PC9kYXRlLXBpY2tlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlRvZ2dsZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgIDx2LXNlbGVjdFxyXG5cdFx0XHRcdFx0XHRsYWJlbD1cImF0cl9uYW1lX3dpdGhfb3B0aW9uY1wiXHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZE9yZ2FuaXphdGlvbklkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOnJlZHVjZT1cIihzdGF0ZSkgPT4gc3RhdGUuaWRcIlxyXG5cdFx0XHRcdFx0XHQ6b3B0aW9ucz1cIm9yZ2FuaXphdGlvblwiXHJcblx0XHRcdFx0XHRcdDptdWx0aXBsZT1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xlYXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpzZWFyY2hhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpmaWx0ZXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDp0YWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6bm8tZHJvcD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnB1c2gtdGFncz1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VsZWN0LW9uLXRhYj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbGVjdCBPcmdhbml6YXRpb25cIlxyXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+XHJcbiAgICA8L2Rpdj4gLS0+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwiZmlsdGVyKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbHRlclwiPjwvaT4gRmlsdGVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zbVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+VG90YWwgTm8uIE9yZGVyczwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Ub3RhbCBOby4gUHJvZHVjdHMgU29sZDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlNhbGVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGFcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICA8dGg+e3tpdGVtLmRhdGV9fTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0udG90YWxfb3JkZXJzfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tpdGVtLnRvdGFsX3Byb2R1Y3RzfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnRvdGFsX2Vhcm5pbmdzKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPHRoPlRvdGFsPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICB0aGlzLmdldE9yZ2FuaXphdGlvbigpO1xyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFtdLFxyXG4gICAgICB0b3RhbDogMCxcclxuICAgICAgZnJvbUxhYmVsOiBudWxsLFxyXG4gICAgICB0b0xhYmVsOiBudWxsLFxyXG4gICAgICBzdGFydERhdGU6IG51bGwsXHJcbiAgICAgIGVuZERhdGU6IG51bGwsXHJcbiAgICAgIGZpbHRlcl9zdGFydERhdGU6IG51bGwsXHJcbiAgICAgIGZpbHRlcl9lbmREYXRlOiBudWxsLFxyXG4gICAgICBjb25maWdzOiB7XHJcbiAgICAgICAgc3RhcnQ6IHtcclxuICAgICAgICAgIGZvcm1hdDogXCJNTU1NIERELCBZWVlZXCIsXHJcbiAgICAgICAgICB1c2VDdXJyZW50OiB0cnVlLFxyXG4gICAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICAgIC8vICAgc2hvd0NsZWFyOiB0cnVlLFxyXG4gICAgICAgICAgLy8gICBzaG93Q2xvc2U6IHRydWUsXHJcbiAgICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5kOiB7XHJcbiAgICAgICAgICBmb3JtYXQ6IFwiTU1NTSBERCwgWVlZWVwiLFxyXG4gICAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcclxuICAgICAgICAgIGFsbG93SW5wdXRUb2dnbGU6IHRydWUsXHJcbiAgICAgICAgICAvLyAgIHNob3dDbGVhcjogdHJ1ZSxcclxuICAgICAgICAgIC8vICAgc2hvd0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgbWluRGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAganNvbl9maWVsZHM6IHtcclxuICAgICAgICBcIkRhdGdlXCI6IFwiZGF0ZVwiLFxyXG4gICAgICAgIFwiVG90YWwgTnVtYmVyIG9mIE9yZGVyc1wiOiBcInRvdGFsX29yZGVyc1wiLFxyXG4gICAgICAgIFwiVG90YWwgTnVtYmVyIG9mIFByb2R1Y3RzIFNvbGRcIjogXCJ0b3RhbF9wcm9kdWN0c1wiLFxyXG4gICAgICAgIFwiU2FsZXNcIjoge1xyXG4gICAgICAgICAgZmllbGQ6ICd0b3RhbF9lYXJuaW5ncycsXHJcbiAgICAgICAgICBjYWxsYmFjazogKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICBvcmdhbml6YXRpb246W10sXHJcbiAgICAgIHNlbGVjdGVkT3JnYW5pemF0aW9uSWQ6bnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAgICBnZXRPcmdhbml6YXRpb24oKXtcclxuICAgICAgICAvLyBhdHJfbmFtZV93aXRoX29wdGlvbmNcclxuICAgICAgICBheGlvcy5nZXQoJy9hZG1pbi9hcGkvZGF0YS9nZXRPcmdhbml6YXRpb24nKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JnYW5pemF0aW9uID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25TdGFydENoYW5nZShlKSB7XHJcbiAgICAgIC8vICAgdGhpcy4kc2V0KHRoaXMuY29uZmlncy5lbmQsIFwibWluRGF0ZVwiLCBlLmRhdGUuYWRkKDEsIFwiZGF5XCIpIHx8IG51bGwpO1xyXG4gICAgICB0aGlzLiRzZXQodGhpcy5jb25maWdzLmVuZCwgXCJtaW5EYXRlXCIsIGUuZGF0ZSB8fCBudWxsKTtcclxuICAgIH0sXHJcbiAgICBvbkVuZENoYW5nZShlKSB7XHJcbiAgICAgIC8vICAgdGhpcy4kc2V0KFxyXG4gICAgICAvLyAgICAgdGhpcy5jb25maWdzLnN0YXJ0LFxyXG4gICAgICAvLyAgICAgXCJtYXhEYXRlXCIsXHJcbiAgICAgIC8vICAgICBlLmRhdGUuc3VidHJhY3QoMSwgXCJkYXlcIikgfHwgbnVsbFxyXG4gICAgICAvLyAgICk7XHJcbiAgICAgIHRoaXMuJHNldCh0aGlzLmNvbmZpZ3Muc3RhcnQsIFwibWF4RGF0ZVwiLCBlLmRhdGUgfHwgbnVsbCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vYXBpL3JlcG9ydHMvc2FsZXMvY3VzdG9tXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMudG90YWwgPSByZXMuZGF0YS50b3RhbF9lYXJuaW5ncztcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHJlcy5kYXRhLmZyb21fbGFiZWw7XHJcbiAgICAgICAgICB0aGlzLmVuZERhdGUgPSByZXMuZGF0YS50b19sYWJlbDtcclxuICAgICAgICAgIHRoaXMuZnJvbUxhYmVsID0gcmVzLmRhdGEuZnJvbV9sYWJlbDtcclxuICAgICAgICAgIHRoaXMudG9MYWJlbCA9IHJlcy5kYXRhLnRvX2xhYmVsO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfc3RhcnREYXRlID0gcmVzLmRhdGEuZnJvbV9sYWJlbDtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2VuZERhdGUgPSByZXMuZGF0YS50b19sYWJlbDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vYXBpL3JlcG9ydHMvc2FsZXMvY3VzdG9tXCIsIHtcclxuICAgICAgICAgIGZyb206IHRoaXMuc3RhcnREYXRlLFxyXG4gICAgICAgICAgdG86IHRoaXMuZW5kRGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMudG90YWwgPSByZXMuZGF0YS50b3RhbF9lYXJuaW5ncztcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0RGF0ZSA9IHJlcy5kYXRhLmZyb21fbGFiZWw7XHJcbiAgICAgICAgICB0aGlzLmVuZERhdGUgPSByZXMuZGF0YS50b19sYWJlbDtcclxuICAgICAgICAgIHRoaXMuZnJvbUxhYmVsID0gcmVzLmRhdGEuZnJvbV9sYWJlbDtcclxuICAgICAgICAgIHRoaXMudG9MYWJlbCA9IHJlcy5kYXRhLnRvX2xhYmVsO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfc3RhcnREYXRlID0gcmVzLmRhdGEuZnJvbV9sYWJlbDtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2VuZERhdGUgPSByZXMuZGF0YS50b19sYWJlbDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBwcmludCgpIHtcclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICAgIHVybDogXCIvYWRtaW4vcmVwb3J0cy9nZW5lcmF0ZS9wZGYvY3VzdG9tXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGZyb206IHRoaXMuZmlsdGVyX3N0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgdG86IHRoaXMuZmlsdGVyX2VuZERhdGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcbiAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwiY3VzdG9tLnBkZlwiKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcclxuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXByaW50XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbDogXCIsIHBhcnNlRmxvYXQoX3ZtLnRvdGFsKS50b0ZpeGVkKDIpXSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjpcbiAgICAgICAgICAgICAgICAgICAgXCJTYWxlcyBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZyb21MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0udG9MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNhbGVzLnhsc1wiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIkN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtZXhjZWxcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgWExTXFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbDogXCIsIHBhcnNlRmxvYXQoX3ZtLnRvdGFsKS50b0ZpeGVkKDIpXSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjpcbiAgICAgICAgICAgICAgICAgICAgXCJTYWxlcyBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZyb21MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0udG9MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNhbGVzLmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIkN1c3RvbVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIENTVlxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZnJvbUxhYmVsKSArIFwiIC0gXCIgKyBfdm0uX3MoX3ZtLnRvTGFiZWwpKV0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICByZWY6IFwic3RhcnREYXRlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS10aW1lLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWc6IF92bS5jb25maWdzLnN0YXJ0XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwiZHAtY2hhbmdlXCI6IF92bS5vblN0YXJ0Q2hhbmdlIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydERhdGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnN0YXJ0RGF0ZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydERhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgIHJlZjogXCJlbmREYXRlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS10aW1lLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb25maWc6IF92bS5jb25maWdzLmVuZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBcImRwLWNoYW5nZVwiOiBfdm0ub25FbmRDaGFuZ2UgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVuZERhdGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmVuZERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW5kRGF0ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgzKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0yXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmlsdGVyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbHRlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIEZpbHRlclxcclxcbiAgICAgIFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCIzMDBweFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1zbVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmRhdGEsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoaXRlbS5kYXRlKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udG90YWxfcHJvZHVjdHMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnRvdGFsX2Vhcm5pbmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKF92bS50b3RhbCkpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtfdm0uX3YoXCJGcm9tXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiVG9cIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgdGl0bGU6IFwiVG9nZ2xlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNhbGVuZGFyXCIgfSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiRGF0ZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KFwiVG90YWwgTm8uIE9yZGVyc1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiVG90YWwgTm8uIFByb2R1Y3RzIFNvbGRcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW192bS5fdihcIlNhbGVzXCIpXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2N1c3RvbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjQ4NDY2MWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY3VzdG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY3VzdG9tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y0ODQ2NjFhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y0ODQ2NjFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y0ODQ2NjFhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jdXN0b20udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY0ODQ2NjFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y0ODQ2NjFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy9jdXN0b20udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jdXN0b20udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2N1c3RvbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3VzdG9tLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNDg0NjYxYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=