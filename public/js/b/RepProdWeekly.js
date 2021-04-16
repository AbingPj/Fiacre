(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepProdWeekly"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js& ***!
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
        "Total Number of Products Sold": "total_products",
        "Total Number of Orders": "total_orders"
      }
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.post("/admin/api/reports/productsorders/weekly").then(function (res) {
        _this.total = res.data.total_earnings;
        _this.total_orders = res.data.total_orders;
        _this.data = res.data.data;
        _this.date = res.data.date;
        _this.dateLabel = res.data.date;
        _this.fromLabel = res.data.from;
        _this.toLabel = res.data.to;
        _this.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this2 = this;

      axios.post("/admin/api/reports/productsorders/weekly", {
        date: this.date
      }).then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.total_orders = res.data.total_orders;
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
    print: function print() {
      var _this3 = this;

      axios({
        method: "post",
        url: "/admin/generate/products-order/pdf/weekly",
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
        link.setAttribute("download", "weekly " + _this3.filter_date + ".pdf"); //or any other extension

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d& ***!
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
                    "Products Orders Weekly Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "poweekly.xls",
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
                  footer: ["total orders: " + _vm.total_orders],
                  header:
                    "Products Orders Weekly Report (" +
                    _vm.fromLabel.replace(/,/g, ".") +
                    " - " +
                    _vm.toLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "poweekly.csv",
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
                _c("th", [_vm._v("Total Orders")]),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th"),
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
        _c("th", [_vm._v("Day")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
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

/***/ "./resources/js/backend/components/reports/product-orders/weekly.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/weekly.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly.vue?vue&type=template&id=046e031d& */ "./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d&");
/* harmony import */ var _weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/product-orders/weekly.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./weekly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./weekly.vue?vue&type=template&id=046e031d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/weekly.vue?vue&type=template&id=046e031d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_weekly_vue_vue_type_template_id_046e031d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3dlZWtseS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL3dlZWtseS52dWU/ODM1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvd2Vla2x5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvd2Vla2x5LnZ1ZT80ZjdiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy93ZWVrbHkudnVlPzgwOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9GQTtBQUNBLFNBREEscUJBQ0E7QUFDQTtBQUNBLEdBSEE7QUFJQSxNQUpBLGtCQUlBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLHFCQUhBO0FBSUEsbUJBSkE7QUFLQSxnQkFMQTtBQU1BLG1CQU5BO0FBT0EsaUJBUEE7QUFRQSx1QkFSQTtBQVNBO0FBQ0EsK0JBREE7QUFFQSx3QkFGQTtBQUdBLDhCQUhBO0FBSUEseUJBSkEsQ0FLQTs7QUFMQSxPQVRBO0FBZ0JBO0FBQ0Esb0JBREE7QUFFQSxzQkFGQTtBQUdBLHlEQUhBO0FBSUE7QUFKQTtBQWhCQTtBQXVCQSxHQTVCQTtBQTZCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQSxZQUNBLElBREEsQ0FDQSwwQ0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBLFdBWUE7QUFDQTtBQUNBLE9BZEE7QUFlQSxLQWpCQTtBQW1CQSxVQW5CQSxvQkFtQkE7QUFBQTs7QUFDQSxZQUNBLElBREEsQ0FDQSwwQ0FEQSxFQUNBO0FBQ0E7QUFEQSxPQURBLEVBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BYkEsV0FjQTtBQUNBO0FBQ0EsT0FoQkE7QUFpQkEsS0FyQ0E7QUF1Q0EsU0F2Q0EsbUJBdUNBO0FBQUE7O0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHdEQUZBO0FBR0E7QUFDQTtBQURBLFNBSEE7QUFNQSxtQ0FOQTtBQU9BO0FBQ0EsNENBREE7QUFFQTtBQUZBO0FBUEEsU0FZQSxJQVpBLENBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFKQSxDQUlBOztBQUNBO0FBQ0E7QUFDQSxPQW5CQSxXQW9CQTtBQUFBO0FBQUEsT0FwQkE7QUFxQkEsS0E3REE7QUErREEsMEJBL0RBLGtDQStEQSxLQS9EQSxFQStEQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBdEVBO0FBN0JBLEc7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLHlCQUF5Qiw4QkFBOEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekMsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0EsV0FBVyw2QkFBNkI7QUFDeEM7QUFDQTtBQUNBLHNCQUFzQix5REFBeUQ7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QyxpQkFBaUIsd0JBQXdCO0FBQ3pDLG1CQUFtQixlQUFlLHdCQUF3QixFQUFFO0FBQzVELHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZCQUE2QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0NBQW9DO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCLFNBQVM7QUFDVCxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkJBQTZCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5TUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ3NHO0FBQ3RHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXdNLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1JlcFByb2RXZWVrbHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICA8aDM+XHJcbiAgICAgICAgPCEtLSBQcm9kdWN0cyBPcmRlcnMgV2Vla2x5IFJlcG9ydCAtLT5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBvcmRlcnM6ICcrdG90YWxfb3JkZXJzXVwiIDpoZWFkZXI9XCInUHJvZHVjdHMgT3JkZXJzIFdlZWtseSBSZXBvcnQgKCcrZnJvbUxhYmVsLnJlcGxhY2UoLywvZywgJy4nKSArJyAtICcgKyB0b0xhYmVsLnJlcGxhY2UoLywvZywgJy4nKSAgKyAnKSdcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cInhsc1wiIG5hbWU9XCJwb3dlZWtseS54bHNcIiB3b3Jrc2hlZXQ9XCJXZWVrbHlcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBvcmRlcnM6ICcrdG90YWxfb3JkZXJzXVwiIDpoZWFkZXI9XCInUHJvZHVjdHMgT3JkZXJzIFdlZWtseSBSZXBvcnQgKCcrZnJvbUxhYmVsLnJlcGxhY2UoLywvZywgJy4nKSArJyAtICcrIHRvTGFiZWwucmVwbGFjZSgvLC9nLCAnLicpICArICcpJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwiY3N2XCIgbmFtZT1cInBvd2Vla2x5LmNzdlwiIHdvcmtzaGVldD1cIldlZWtseVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XHJcbiAgICAgICAgICBDU1ZcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICA8L2gzPlxyXG4gICAgICA8aDQ+e3tmcm9tTGFiZWx9fSAtIHt7dG9MYWJlbH19PC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgIDxkYXRlLXBpY2tlciB2LW1vZGVsPVwiZGF0ZVwiIGlkPVwiZGF0ZS10aW1lLWlucHV0XCIgOndyYXA9XCJ0cnVlXCIgOmNvbmZpZz1cIm9wdGlvbnNcIj48L2RhdGUtcGlja2VyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVG9nZ2xlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJmaWx0ZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsdGVyXCI+PC9pPiBGaWx0ZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTBcIj5cclxuICAgICAgPGRpdiBzdHlsZT1cIm1pbi1oZWlnaHQ6MzAwcHg7XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+IC0tPlxyXG4gICAgICAgICAgICAgIDx0aD5EYXk8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD5EYXRlPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBQcm9kdWN0cyBTb2xkPC90aD5cclxuICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlRvdGFsIE5vLiBPcmRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHRoPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+U2FsZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RoPiAtLT5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF5fX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0uZGF0ZX19PC90aD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7aXRlbS50b3RhbF9wcm9kdWN0c319PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPnt7aXRlbS50b3RhbF9vcmRlcnN9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS50b3RhbF9lYXJuaW5ncyl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+IC0tPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5Ub3RhbCBPcmRlcnM8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3t0b3RhbF9vcmRlcnN9fTwvdGg+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbCl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+IC0tPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICB0b3RhbF9vcmRlcnM6IDAsXHJcbiAgICAgIGRhdGVMYWJlbDogXCJcIixcclxuICAgICAgZGF0ZTogbnVsbCxcclxuICAgICAgZnJvbUxhYmVsOiBcIlwiLFxyXG4gICAgICB0b0xhYmVsOiBcIlwiLFxyXG4gICAgICBmaWx0ZXJfZGF0ZTogbnVsbCxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGZvcm1hdDogXCJNTU1NIERELCBZWVlZXCIsXHJcbiAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcclxuICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiB0cnVlLFxyXG4gICAgICAgIG1heERhdGU6IG1vbWVudCgpXHJcbiAgICAgICAgLy8gc2hvd1RvZGF5QnV0dG9uIDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAganNvbl9maWVsZHM6IHtcclxuICAgICAgICBcIkRheVwiOiBcImRheVwiLFxyXG4gICAgICAgIFwiRGF0ZVwiOiBcImRhdGVcIixcclxuICAgICAgICBcIlRvdGFsIE51bWJlciBvZiBQcm9kdWN0cyBTb2xkXCI6IFwidG90YWxfcHJvZHVjdHNcIixcclxuICAgICAgICBcIlRvdGFsIE51bWJlciBvZiBPcmRlcnNcIjogXCJ0b3RhbF9vcmRlcnNcIixcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL3dlZWtseVwiKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsX29yZGVycyA9IHJlcy5kYXRhLnRvdGFsX29yZGVycztcclxuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLmRhdGUgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgICAgdGhpcy5mcm9tTGFiZWwgPSByZXMuZGF0YS5mcm9tO1xyXG4gICAgICAgICAgdGhpcy50b0xhYmVsID0gcmVzLmRhdGEudG87XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcl9kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmaWx0ZXIoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vYXBpL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvd2Vla2x5XCIsIHtcclxuICAgICAgICAgIGRhdGU6IHRoaXMuZGF0ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMudG90YWwgPSByZXMuZGF0YS50b3RhbF9lYXJuaW5ncztcclxuICAgICAgICAgIHRoaXMudG90YWxfb3JkZXJzID0gcmVzLmRhdGEudG90YWxfb3JkZXJzO1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XHJcbiAgICAgICAgICB0aGlzLmRhdGVMYWJlbCA9IHJlcy5kYXRhLmRhdGU7XHJcbiAgICAgICAgICB0aGlzLmZyb21MYWJlbCA9IHJlcy5kYXRhLmZyb207XHJcbiAgICAgICAgICB0aGlzLnRvTGFiZWwgPSByZXMuZGF0YS50bztcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2RhdGUgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByaW50KCkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hZG1pbi9nZW5lcmF0ZS9wcm9kdWN0cy1vcmRlci9wZGYvd2Vla2x5XCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRhdGU6IHRoaXMuZmlsdGVyX2RhdGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcbiAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwid2Vla2x5IFwiICsgdGhpcy5maWx0ZXJfZGF0ZSArIFwiLnBkZlwiKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcclxuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXByaW50XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbCBvcmRlcnM6IFwiICsgX3ZtLnRvdGFsX29yZGVyc10sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiUHJvZHVjdHMgT3JkZXJzIFdlZWtseSBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZyb21MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0udG9MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBvd2Vla2x5Lnhsc1wiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIldlZWtseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtZXhjZWxcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgWExTXFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbCBvcmRlcnM6IFwiICsgX3ZtLnRvdGFsX29yZGVyc10sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiUHJvZHVjdHMgT3JkZXJzIFdlZWtseSBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmZyb21MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0udG9MYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY3N2XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBvd2Vla2x5LmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIldlZWtseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIENTVlxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZnJvbUxhYmVsKSArIFwiIC0gXCIgKyBfdm0uX3MoX3ZtLnRvTGFiZWwpKV0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRhdGUtdGltZS1pbnB1dFwiLCB3cmFwOiB0cnVlLCBjb25maWc6IF92bS5vcHRpb25zIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbHRlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWx0ZXJcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBGaWx0ZXJcXHJcXG4gICAgICBcIilcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtaW4taGVpZ2h0XCI6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGF5KSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGF0ZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udG90YWxfcHJvZHVjdHMpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udG90YWxfb3JkZXJzKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRvdGFsIE9yZGVyc1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50b3RhbF9vcmRlcnMpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRheVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBOby4gUHJvZHVjdHMgU29sZFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIlRvdGFsIE5vLiBPcmRlcnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2Vla2x5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDZlMDMxZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA0NmUwMzFkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0NmUwMzFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0NmUwMzFkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA0NmUwMzFkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA0NmUwMzFkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvd2Vla2x5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2Vla2x5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWVrbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dlZWtseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQ2ZTAzMWQmXCIiXSwic291cmNlUm9vdCI6IiJ9