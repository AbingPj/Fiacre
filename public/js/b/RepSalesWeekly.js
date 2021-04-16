(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepSalesWeekly"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getData();
    this.getOrganization();
  },
  data: function data() {
    return {
      data: [],
      total: 0,
      dateLabel: "",
      date: null,
      fromLabel: "",
      toLabel: "",
      filter_date: null,
      options: {
        format: "MMMM DD, YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      },
      json_fields: {
        "Day": "day",
        "Date": "date",
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
    getData: function getData() {
      var _this2 = this;

      axios.post("/admin/api/reports/sales/weekly").then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.data = res.data.data;
        _this2.date = res.data.date;
        _this2.dateLabel = res.data.date;
        _this2.fromLabel = res.data.from;
        _this2.toLabel = res.data.to;
        _this2.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this3 = this;

      axios.post("/admin/api/reports/sales/weekly", {
        date: this.date
      }).then(function (res) {
        _this3.total = res.data.total_earnings;
        _this3.data = res.data.data;
        _this3.date = res.data.date;
        _this3.dateLabel = res.data.date;
        _this3.fromLabel = res.data.from;
        _this3.toLabel = res.data.to;
        _this3.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      var _this4 = this;

      axios({
        method: "post",
        url: "/admin/reports/generate/pdf/weekly",
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
        link.setAttribute("download", "weekly " + _this4.filter_date + ".pdf"); //or any other extension

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa& ***!
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
                    "Weekly Sales Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "salesweekly.xls",
                  worksheet: "Weekly"
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
                    "Weekly Sales Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "salesweekly.csv",
                  worksheet: "Weekly"
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
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-md-3" }, [
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
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.data, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("th", [_vm._v(_vm._s(item.day))]),
                  _vm._v(" "),
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
                        " " +
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
                _c("th"),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th"),
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
        _c("th", [_vm._v("Day")]),
        _vm._v(" "),
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

/***/ "./resources/js/backend/components/reportssales/weekly.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/weekly.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly.vue?vue&type=template&id=6f548bfa& */ "./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa&");
/* harmony import */ var _weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reportssales/weekly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weekly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/weekly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weekly.vue?vue&type=template&id=6f548bfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reportssales/weekly.vue?vue&type=template&id=6f548bfa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_6f548bfa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvd2Vla2x5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy93ZWVrbHkudnVlP2QwNmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvd2Vla2x5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy93ZWVrbHkudnVlPzk3YzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzc2FsZXMvd2Vla2x5LnZ1ZT9hNGRkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzR0E7QUFDQSxTQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBLEdBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLG1CQUhBO0FBSUEsZ0JBSkE7QUFLQSxtQkFMQTtBQU1BLGlCQU5BO0FBT0EsdUJBUEE7QUFRQTtBQUNBLCtCQURBO0FBRUEsd0JBRkE7QUFHQSw4QkFIQTtBQUlBLHlCQUpBLENBS0E7O0FBTEEsT0FSQTtBQWVBO0FBQ0Esb0JBREE7QUFFQSxzQkFGQTtBQUdBLGdEQUhBO0FBSUEseURBSkE7QUFLQTtBQUNBLGlDQURBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFMQSxPQWZBO0FBMkJBLHNCQTNCQTtBQTRCQTtBQTVCQTtBQThCQSxHQXBDQTtBQXFDQTtBQUNBLG1CQURBLDZCQUNBO0FBQUE7O0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLDZCQUE2QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNULGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDak9BO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFrTSxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9SZXBTYWxlc1dlZWtseS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgIDxoMz5cclxuICAgICAgICA8IS0tIFdlZWtseSBTYWxlcyBSZXBvcnQgLS0+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicHJpbnQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZG93bmxvYWQtZXhjZWwgOmZvb3Rlcj1cIlsndG90YWw6ICcscGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKV1cIiA6aGVhZGVyPVwiJ1dlZWtseSBTYWxlcyBSZXBvcnQgKCcrZnJvbUxhYmVsLnJlcGxhY2UoLywvZywgJy4nKSArJyAtICcgKyB0b0xhYmVsLnJlcGxhY2UoLywvZywgJy4nKSAgKyAnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cInhsc1wiIG5hbWU9XCJzYWxlc3dlZWtseS54bHNcIiB3b3Jrc2hlZXQ9XCJXZWVrbHlcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbDogJyxwYXJzZUZsb2F0KHRvdGFsKS50b0ZpeGVkKDIpXVwiIDpoZWFkZXI9XCInV2Vla2x5IFNhbGVzIFJlcG9ydCAoJytmcm9tTGFiZWwucmVwbGFjZSgvLC9nLCAnLicpICsnIC0gJysgdG9MYWJlbC5yZXBsYWNlKC8sL2csICcuJykgICsgJyknXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpkYXRhPVwiZGF0YVwiIHR5cGU9XCJjc3ZcIiBuYW1lPVwic2FsZXN3ZWVrbHkuY3N2XCIgd29ya3NoZWV0PVwiV2Vla2x5XCI+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWNzdlwiPjwvaT5cclxuICAgICAgICAgIENTVlxyXG4gICAgICAgIDwvZG93bmxvYWQtZXhjZWw+XHJcbiAgICAgIDwvaDM+XHJcbiAgICAgIDxoND57e2Zyb21MYWJlbH19IC0ge3t0b0xhYmVsfX08L2g0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XCJkYXRlXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwib3B0aW9uc1wiPjwvZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJUb2dnbGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cclxuICAgICAgICAgICA8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJhdHJfbmFtZV93aXRoX29wdGlvbmNcIlxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRPcmdhbml6YXRpb25JZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XCIoc3RhdGUpID0+IHN0YXRlLmlkXCJcclxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJvcmdhbml6YXRpb25cIlxyXG5cdFx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6ZmlsdGVyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6dGFnZ2FibGU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwdXNoLXRhZ3M9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnNlbGVjdC1vbi10YWI9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWxlY3QgT3JnYW5pemF0aW9uXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxyXG4gICAgPC9kaXY+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgIDxidXR0b24gQGNsaWNrPVwiZmlsdGVyKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbHRlclwiPjwvaT4gRmlsdGVyXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJtaW4taGVpZ2h0OjMwMHB4O1wiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICA8IS0tIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPiAtLT5cclxuICAgICAgICAgICAgICA8dGg+RGF5PC90aD5cclxuICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Ub3RhbCBOby4gT3JkZXJzPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBQcm9kdWN0cyBTb2xkPC90aD5cclxuICAgICAgICAgICAgICA8dGg+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+U2FsZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF5fX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF0ZX19PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7aXRlbS50b3RhbF9vcmRlcnN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0udG90YWxfcHJvZHVjdHN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPiB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS50b3RhbF9lYXJuaW5ncyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHRvdGFsKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rmb290PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIHRoaXMuZ2V0T3JnYW5pemF0aW9uKCk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICBkYXRlTGFiZWw6IFwiXCIsXHJcbiAgICAgIGRhdGU6IG51bGwsXHJcbiAgICAgIGZyb21MYWJlbDogXCJcIixcclxuICAgICAgdG9MYWJlbDogXCJcIixcclxuICAgICAgZmlsdGVyX2RhdGU6IG51bGwsXHJcbiAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBmb3JtYXQ6IFwiTU1NTSBERCwgWVlZWVwiLFxyXG4gICAgICAgIHVzZUN1cnJlbnQ6IHRydWUsXHJcbiAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcclxuICAgICAgICBtYXhEYXRlOiBtb21lbnQoKVxyXG4gICAgICAgIC8vIHNob3dUb2RheUJ1dHRvbiA6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgXCJEYXlcIjogXCJkYXlcIixcclxuICAgICAgICBcIkRhdGVcIjogXCJkYXRlXCIsXHJcbiAgICAgICAgXCJUb3RhbCBOdW1iZXIgb2YgT3JkZXJzXCI6IFwidG90YWxfb3JkZXJzXCIsXHJcbiAgICAgICAgXCJUb3RhbCBOdW1iZXIgb2YgUHJvZHVjdHMgU29sZFwiOiBcInRvdGFsX3Byb2R1Y3RzXCIsXHJcbiAgICAgICAgXCJTYWxlc1wiOiB7XHJcbiAgICAgICAgICBmaWVsZDogJ3RvdGFsX2Vhcm5pbmdzJyxcclxuICAgICAgICAgIGNhbGxiYWNrOiAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgIG9yZ2FuaXphdGlvbjpbXSxcclxuICAgICAgc2VsZWN0ZWRPcmdhbml6YXRpb25JZDpudWxsLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgICAgIGdldE9yZ2FuaXphdGlvbigpe1xyXG4gICAgICAgIC8vIGF0cl9uYW1lX3dpdGhfb3B0aW9uY1xyXG4gICAgICAgIGF4aW9zLmdldCgnL2FkbWluL2FwaS9kYXRhL2dldE9yZ2FuaXphdGlvbicpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcmdhbml6YXRpb24gPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3NhbGVzL3dlZWtseVwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUxhYmVsID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZnJvbUxhYmVsID0gcmVzLmRhdGEuZnJvbTtcclxuICAgICAgICAgIHRoaXMudG9MYWJlbCA9IHJlcy5kYXRhLnRvO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZmlsdGVyKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3NhbGVzL3dlZWtseVwiLCB7XHJcbiAgICAgICAgICBkYXRlOiB0aGlzLmRhdGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUxhYmVsID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZnJvbUxhYmVsID0gcmVzLmRhdGEuZnJvbTtcclxuICAgICAgICAgIHRoaXMudG9MYWJlbCA9IHJlcy5kYXRhLnRvO1xyXG4gICAgICAgICAgdGhpcy5maWx0ZXJfZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgICB1cmw6IFwiL2FkbWluL3JlcG9ydHMvZ2VuZXJhdGUvcGRmL3dlZWtseVwiLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmZpbHRlcl9kYXRlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIndlZWtseSBcIiArIHRoaXMuZmlsdGVyX2RhdGUgKyBcIi5wZGZcIik7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XHJcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJoM1wiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJpbnQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wcmludFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBQcmludFxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWw6IFwiLCBwYXJzZUZsb2F0KF92bS50b3RhbCkudG9GaXhlZCgyKV0sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiV2Vla2x5IFNhbGVzIFJlcG9ydCAoXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uZnJvbUxhYmVsLnJlcGxhY2UoLywvZywgXCIuXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS50b0xhYmVsLnJlcGxhY2UoLywvZywgXCIuXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ4bHNcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2FsZXN3ZWVrbHkueGxzXCIsXG4gICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiV2Vla2x5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1leGNlbFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBYTFNcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBmb290ZXI6IFtcInRvdGFsOiBcIiwgcGFyc2VGbG9hdChfdm0udG90YWwpLnRvRml4ZWQoMildLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIldlZWtseSBTYWxlcyBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZyb21MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0udG9MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNhbGVzd2Vla2x5LmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIldlZWtseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIENTVlxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZnJvbUxhYmVsKSArIFwiIC0gXCIgKyBfdm0uX3MoX3ZtLnRvTGFiZWwpKV0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRhdGUtdGltZS1pbnB1dFwiLCB3cmFwOiB0cnVlLCBjb25maWc6IF92bS5vcHRpb25zIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbHRlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWx0ZXJcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBGaWx0ZXJcXHJcXG4gICAgICBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtaW4taGVpZ2h0XCI6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGF5KSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udG90YWxfb3JkZXJzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRvdGFsX3Byb2R1Y3RzKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnRvdGFsX2Vhcm5pbmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiQgXCIgKyBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoX3ZtLnRvdGFsKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRheVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtfdm0uX3YoXCJUb3RhbCBOby4gT3JkZXJzXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBOby4gUHJvZHVjdHMgU29sZFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbX3ZtLl92KFwiU2FsZXNcIildKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2Vla2x5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjU0OGJmYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmNTQ4YmZhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmNTQ4YmZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmNTQ4YmZhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZmNTQ4YmZhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZmNTQ4YmZhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHNzYWxlcy93ZWVrbHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dlZWtseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2Vla2x5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZjU0OGJmYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=