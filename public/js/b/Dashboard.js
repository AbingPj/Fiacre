(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
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
  props: ["from", "to", "totalviews", "productssold", "totalearnings", "topfive_products", "low", "out", "newmembers", "products", "months_labels", "total_product_sold_per_month", "total_views_per_month", "views", "prev_total_product_sold", "prev_total_earnings", "prev_views", "total_orders"],
  data: function data() {
    return {
      datalabels: [],
      productSold: [],
      totalViews: [],
      totalViewsPerMonth: []
    };
  },
  computed: {
    getViewsStatus: function getViewsStatus() {
      var result = this.views - this.prev_views;

      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    },
    getTotalSoldStatus: function getTotalSoldStatus() {
      var result = this.productssold - this.prev_total_product_sold;

      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    },
    getTotalEarningsStatus: function getTotalEarningsStatus() {
      var result = this.totalearnings - this.prev_total_earnings;

      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    }
  },
  created: function created() {
    this.datalabels = this.months_labels;
    this.productSold = this.total_product_sold_per_month;
    this.totalViewsPerMonth = this.total_views_per_month; //   this.totalViews =
  },
  mounted: function mounted() {
    var datalabels = this.datalabels;
    var productSold = this.productSold;
    var totalViews = this.totalViewsPerMonth;
    var ctx = document.getElementById("linechart-product-sold");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: datalabels,
        datasets: [{
          label: "Product Sold",
          data: productSold,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.5,
          backgroundColor: "skyblue"
        } //   {
        //     label: "Total Views",
        //     data: totalViews,
        //     fill: false,
        //     borderColor: "violet",
        //     lineTension: 0.5,
        //     backgroundColor: "violet"
        //   }
        ]
      } //   options: {
      //     scales: {
      //       yAxes: [
      //         {
      //           ticks: {
      //             // Include a dollar sign in the ticks
      //             callback: function(value, index, values) {
      //               return "$" + value;
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   }

    }); // var totalViews = this.totalViews;

    var ctx = document.getElementById("linechart-total-views");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: datalabels,
        datasets: [{
          label: "Total Views",
          data: totalViews,
          fill: false,
          borderColor: "violet",
          lineTension: 0.5,
          backgroundColor: "violet"
        }]
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "mb-5" }, [
      _c("h3", [_vm._v(_vm._s(_vm.from) + " - " + _vm._s(_vm.to))])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mb-5" }, [
      _c("div", { staticClass: "col-md-4" }, [
        _c(
          "div",
          { staticClass: "card", staticStyle: { "border-color": "violet" } },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", [_vm._v("Total Views")]),
              _vm._v(" "),
              _c("h2", [_vm._v(_vm._s(_vm.views))]),
              _vm._v(" "),
              _vm.getViewsStatus == "positive"
                ? _c("h6", { staticClass: "text-success" }, [
                    _c("i", { staticClass: "fas fa-long-arrow-alt-up" }),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.views - _vm.prev_views) +
                        "\n          "
                    )
                  ])
                : _c("h6", { staticClass: "text-danger" }, [
                    _c("i", { staticClass: "fas fa-long-arrow-alt-down" }),
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.views - _vm.prev_views) +
                        "\n          "
                    )
                  ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card border-info" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", [_vm._v("Product Sold")]),
            _vm._v(" "),
            _c("h2", [_vm._v(_vm._s(_vm.productssold))]),
            _vm._v(" "),
            _vm.getTotalSoldStatus == "positive"
              ? _c("h6", { staticClass: "text-success" }, [
                  _c("i", { staticClass: "fas fa-long-arrow-alt-up" }),
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.productssold - _vm.prev_total_product_sold) +
                      "\n          "
                  )
                ])
              : _c("h6", { staticClass: "text-danger" }, [
                  _c("i", { staticClass: "fas fa-long-arrow-alt-down" }),
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.productssold - _vm.prev_total_product_sold) +
                      "\n          "
                  )
                ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-4" }, [
        _c("div", { staticClass: "card border-success" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h4", [_vm._v("Total Earnings")]),
            _vm._v(" "),
            _c("h2", [_vm._v("$ " + _vm._s(_vm.totalearnings.toFixed(2)))]),
            _vm._v(" "),
            _vm.getTotalEarningsStatus == "positive"
              ? _c("h6", { staticClass: "text-success" }, [
                  _c("i", { staticClass: "fas fa-long-arrow-alt-up" }),
                  _vm._v(
                    "\n            $ " +
                      _vm._s(
                        (_vm.totalearnings - _vm.prev_total_earnings).toFixed(2)
                      ) +
                      "\n          "
                  )
                ])
              : _c("h6", { staticClass: "text-danger" }, [
                  _c("i", { staticClass: "fas fa-long-arrow-alt-down" }),
                  _vm._v(
                    "\n            $ " +
                      _vm._s(
                        (_vm.totalearnings - _vm.prev_total_earnings).toFixed(2)
                      ) +
                      "\n          "
                  )
                ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", [
          _c("h4", { staticClass: "mb-3" }, [_vm._v("Top 5 Products")]),
          _vm._v(" "),
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.products, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", [
                    _c("img", {
                      staticStyle: {
                        width: "50px",
                        height: "50px",
                        "object-fit": "cover"
                      },
                      attrs: { src: item.image_link, alt: "product image" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex",
                        class:
                          item.stock_label_id == 1
                            ? "text-success"
                            : item.stock_label_id == 2
                            ? "text-warning"
                            : "text-danger"
                      },
                      [
                        _c("div", { staticStyle: { width: "40px" } }, [
                          _vm._v(_vm._s(item.quantity > 0 ? item.quantity : 0))
                        ]),
                        _vm._v(" "),
                        _c("div", [_vm._v(_vm._s(item.stock_label))])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("$ " + _vm._s(item.total_earnings_per_15.toFixed(2)))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v("$ " + _vm._s(item.total_earnings.toFixed(2)))
                  ])
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4" },
        [
          _c("h4", { staticClass: "mb-3" }, [_vm._v("Quick Details")]),
          _vm._v(" "),
          _c(
            "b-list-group",
            [
              _c("b-list-group-item", [
                _c("i", { staticClass: "fas fa-user-plus text-info mr-2" }),
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.newmembers) +
                    " New Members\n          "
                ),
                _c("span", { staticClass: "text-secondary float-right" }, [
                  _vm._v("Last 24 hours")
                ])
              ]),
              _vm._v(" "),
              _c("b-list-group-item", [
                _c("i", {
                  staticClass: "fas fa-file-invoice text-success mr-2"
                }),
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.total_orders) +
                    " Orders\n          "
                ),
                _c("span", { staticClass: "text-secondary float-right" }, [
                  _vm._v("Total Orders")
                ])
              ]),
              _vm._v(" "),
              _c("b-list-group-item", [
                _c("i", {
                  staticClass: "fas fa-exclamation-circle text-warning mr-2"
                }),
                _vm._v("\n          " + _vm._s(_vm.low) + " Items\n          "),
                _c("span", { staticClass: "text-secondary float-right" }, [
                  _vm._v("Low of Stock")
                ])
              ]),
              _vm._v(" "),
              _c("b-list-group-item", [
                _c("i", {
                  staticClass: "fas fa-times-circle text-danger mr-2"
                }),
                _vm._v("\n          " + _vm._s(_vm.out) + " Items\n          "),
                _c("span", { staticClass: "text-secondary float-right" }, [
                  _vm._v("Out of Stock")
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-5" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "p-1" }, [
          _c("canvas", { attrs: { id: "linechart-total-views" } })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c("div", { staticClass: "p-1" }, [
          _c("canvas", { attrs: { id: "linechart-product-sold" } })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "bg-secondary" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Availability")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Total")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Overall")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/dashboard.vue":
/*!*******************************************************!*\
  !*** ./resources/js/backend/components/dashboard.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.vue?vue&type=template&id=1b939ff4& */ "./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4&");
/* harmony import */ var _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./dashboard.vue?vue&type=template&id=1b939ff4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/dashboard.vue?vue&type=template&id=1b939ff4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_template_id_1b939ff4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZT8yYTQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2Rhc2hib2FyZC52dWU/MjIzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2Rhc2hib2FyZC52dWU/YzY3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErSUE7QUFDQSxVQUNBLE1BREEsRUFFQSxJQUZBLEVBR0EsWUFIQSxFQUlBLGNBSkEsRUFLQSxlQUxBLEVBTUEsa0JBTkEsRUFPQSxLQVBBLEVBUUEsS0FSQSxFQVNBLFlBVEEsRUFVQSxVQVZBLEVBV0EsZUFYQSxFQVlBLDhCQVpBLEVBYUEsdUJBYkEsRUFjQSxPQWRBLEVBZUEseUJBZkEsRUFnQkEscUJBaEJBLEVBaUJBLFlBakJBLEVBa0JBLGNBbEJBLENBREE7QUFxQkEsTUFyQkEsa0JBcUJBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHFCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBTUEsR0E1QkE7QUE4QkE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLHNCQVRBLGdDQVNBO0FBQ0E7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LEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL0Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWItNVwiPlxuICAgICAgPGgzPnt7ZnJvbX19IC0ge3t0b319PC9oMz5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJib3JkZXItY29sb3I6dmlvbGV0O1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxoND5Ub3RhbCBWaWV3czwvaDQ+XG4gICAgICAgICAgICA8aDI+e3t2aWV3c319PC9oMj5cbiAgICAgICAgICAgIDxoNiB2LWlmPVwiZ2V0Vmlld3NTdGF0dXMgPT0gJ3Bvc2l0aXZlJ1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LXVwXCI+PC9pPlxuICAgICAgICAgICAgICB7e3ZpZXdzLXByZXZfdmlld3N9fVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxoNiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb25nLWFycm93LWFsdC1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICB7e3ZpZXdzLXByZXZfdmlld3N9fVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItaW5mb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxoND5Qcm9kdWN0IFNvbGQ8L2g0PlxuICAgICAgICAgICAgPGgyPnt7cHJvZHVjdHNzb2xkfX08L2gyPlxuXG4gICAgICAgICAgICA8aDYgdi1pZj1cImdldFRvdGFsU29sZFN0YXR1cyA9PSAncG9zaXRpdmUnXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIj48L2k+XG4gICAgICAgICAgICAgIHt7cHJvZHVjdHNzb2xkLXByZXZfdG90YWxfcHJvZHVjdF9zb2xkfX1cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICA8aDYgdi1lbHNlIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAge3twcm9kdWN0c3NvbGQtcHJldl90b3RhbF9wcm9kdWN0X3NvbGR9fVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItc3VjY2Vzc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgIDxoND5Ub3RhbCBFYXJuaW5nczwvaDQ+XG4gICAgICAgICAgICA8aDI+JCB7e3RvdGFsZWFybmluZ3MudG9GaXhlZCgyKX19PC9oMj5cbiAgICAgICAgICAgIDxoNiB2LWlmPVwiZ2V0VG90YWxFYXJuaW5nc1N0YXR1cyA9PSAncG9zaXRpdmUnXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIj48L2k+XG4gICAgICAgICAgICAgICQge3sodG90YWxlYXJuaW5ncyAtIHByZXZfdG90YWxfZWFybmluZ3MpLnRvRml4ZWQoMil9fVxuICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgIDxoNiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb25nLWFycm93LWFsdC1kb3duXCI+PC9pPlxuICAgICAgICAgICAgICAkIHt7KHRvdGFsZWFybmluZ3MgLSBwcmV2X3RvdGFsX2Vhcm5pbmdzKS50b0ZpeGVkKDIpfX1cbiAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC0xXCI+XG4gICAgICAgICAgPGNhbnZhcyBpZD1cImxpbmVjaGFydC10b3RhbC12aWV3c1wiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTFcIj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZWNoYXJ0LXByb2R1Y3Qtc29sZFwiPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzPVwibWItM1wiPlRvcCA1IFByb2R1Y3RzPC9oND5cblxuICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgICA8dGhlYWQgY2xhc3M9XCJiZy1zZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByb2R1Y3Q8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkF2YWlsYWJpbGl0eTwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+VG90YWw8L3RoPlxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk92ZXJhbGw8L3RoPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9kdWN0c1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uaW1hZ2VfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb2R1Y3QgaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjUwcHg7IGhlaWdodDo1MHB4OyBvYmplY3QtZml0OmNvdmVyO1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5uYW1lfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXhcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLnN0b2NrX2xhYmVsX2lkID09IDE/ICd0ZXh0LXN1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgIDogaXRlbS5zdG9ja19sYWJlbF9pZCA9PSAyPyAndGV4dC13YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICA6ICd0ZXh0LWRhbmdlcidcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6NDBweDtcIj57eyhpdGVtLnF1YW50aXR5ID4gMCk/IGl0ZW0ucXVhbnRpdHkgOiAwIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3tpdGVtLnN0b2NrX2xhYmVsfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPiQge3tpdGVtLnRvdGFsX2Vhcm5pbmdzX3Blcl8xNS50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD4kIHt7aXRlbS50b3RhbF9lYXJuaW5ncy50b0ZpeGVkKDIpfX08L3RkPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgIDxoNCBjbGFzcz1cIm1iLTNcIj5RdWljayBEZXRhaWxzPC9oND5cbiAgICAgICAgPGItbGlzdC1ncm91cD5cbiAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyLXBsdXMgdGV4dC1pbmZvIG1yLTJcIj48L2k+XG4gICAgICAgICAgICB7e25ld21lbWJlcnN9fSBOZXcgTWVtYmVyc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiPkxhc3QgMjQgaG91cnM8L3NwYW4+XG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWludm9pY2UgdGV4dC1zdWNjZXNzIG1yLTJcIj48L2k+XG4gICAgICAgICAgICB7e3RvdGFsX29yZGVyc319IE9yZGVyc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiPlRvdGFsIE9yZGVyczwvc3Bhbj5cbiAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxuICAgICAgICAgIDxiLWxpc3QtZ3JvdXAtaXRlbT5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB0ZXh0LXdhcm5pbmcgbXItMlwiPjwvaT5cbiAgICAgICAgICAgIHt7bG93fX0gSXRlbXNcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIj5Mb3cgb2YgU3RvY2s8L3NwYW4+XG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cbiAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGUgdGV4dC1kYW5nZXIgbXItMlwiPjwvaT5cbiAgICAgICAgICAgIHt7b3V0fX0gSXRlbXNcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XG4gICAgICAgICAgPC9iLWxpc3QtZ3JvdXAtaXRlbT5cbiAgICAgICAgPC9iLWxpc3QtZ3JvdXA+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcbiAgICBcImZyb21cIixcbiAgICBcInRvXCIsXG4gICAgXCJ0b3RhbHZpZXdzXCIsXG4gICAgXCJwcm9kdWN0c3NvbGRcIixcbiAgICBcInRvdGFsZWFybmluZ3NcIixcbiAgICBcInRvcGZpdmVfcHJvZHVjdHNcIixcbiAgICBcImxvd1wiLFxuICAgIFwib3V0XCIsXG4gICAgXCJuZXdtZW1iZXJzXCIsXG4gICAgXCJwcm9kdWN0c1wiLFxuICAgIFwibW9udGhzX2xhYmVsc1wiLFxuICAgIFwidG90YWxfcHJvZHVjdF9zb2xkX3Blcl9tb250aFwiLFxuICAgIFwidG90YWxfdmlld3NfcGVyX21vbnRoXCIsXG4gICAgXCJ2aWV3c1wiLFxuICAgIFwicHJldl90b3RhbF9wcm9kdWN0X3NvbGRcIixcbiAgICBcInByZXZfdG90YWxfZWFybmluZ3NcIixcbiAgICBcInByZXZfdmlld3NcIixcbiAgICBcInRvdGFsX29yZGVyc1wiXG4gIF0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGFsYWJlbHM6IFtdLFxuICAgICAgcHJvZHVjdFNvbGQ6IFtdLFxuICAgICAgdG90YWxWaWV3czogW10sXG4gICAgICB0b3RhbFZpZXdzUGVyTW9udGg6IFtdXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGdldFZpZXdzU3RhdHVzKCkge1xuICAgICAgbGV0IHJlc3VsdCA9IHRoaXMudmlld3MgLSB0aGlzLnByZXZfdmlld3M7XG4gICAgICBpZiAocmVzdWx0IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIFwibmVnYXRpdmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInBvc2l0aXZlXCI7XG4gICAgICB9XG4gICAgfSxcbiAgICBnZXRUb3RhbFNvbGRTdGF0dXMoKSB7XG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wcm9kdWN0c3NvbGQgLSB0aGlzLnByZXZfdG90YWxfcHJvZHVjdF9zb2xkO1xuICAgICAgaWYgKHJlc3VsdCA8PSAwKSB7XG4gICAgICAgIHJldHVybiBcIm5lZ2F0aXZlXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCJwb3NpdGl2ZVwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0VG90YWxFYXJuaW5nc1N0YXR1cygpIHtcbiAgICAgIGxldCByZXN1bHQgPSB0aGlzLnRvdGFsZWFybmluZ3MgLSB0aGlzLnByZXZfdG90YWxfZWFybmluZ3M7XG4gICAgICBpZiAocmVzdWx0IDw9IDApIHtcbiAgICAgICAgcmV0dXJuIFwibmVnYXRpdmVcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcInBvc2l0aXZlXCI7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZGF0YWxhYmVscyA9IHRoaXMubW9udGhzX2xhYmVscztcbiAgICB0aGlzLnByb2R1Y3RTb2xkID0gdGhpcy50b3RhbF9wcm9kdWN0X3NvbGRfcGVyX21vbnRoO1xuICAgIHRoaXMudG90YWxWaWV3c1Blck1vbnRoID0gdGhpcy50b3RhbF92aWV3c19wZXJfbW9udGg7XG4gICAgLy8gICB0aGlzLnRvdGFsVmlld3MgPVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgdmFyIGRhdGFsYWJlbHMgPSB0aGlzLmRhdGFsYWJlbHM7XG4gICAgdmFyIHByb2R1Y3RTb2xkID0gdGhpcy5wcm9kdWN0U29sZDtcbiAgICB2YXIgdG90YWxWaWV3cyA9IHRoaXMudG90YWxWaWV3c1Blck1vbnRoO1xuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVjaGFydC1wcm9kdWN0LXNvbGRcIik7XG4gICAgdmFyIG15TGluZUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogZGF0YWxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJQcm9kdWN0IFNvbGRcIixcbiAgICAgICAgICAgIGRhdGE6IHByb2R1Y3RTb2xkLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoNzUsIDE5MiwgMTkyKVwiLFxuICAgICAgICAgICAgbGluZVRlbnNpb246IDAuNSxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJza3libHVlXCJcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIGxhYmVsOiBcIlRvdGFsIFZpZXdzXCIsXG4gICAgICAgICAgLy8gICAgIGRhdGE6IHRvdGFsVmlld3MsXG4gICAgICAgICAgLy8gICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgIC8vICAgICBib3JkZXJDb2xvcjogXCJ2aW9sZXRcIixcbiAgICAgICAgICAvLyAgICAgbGluZVRlbnNpb246IDAuNSxcbiAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiBcInZpb2xldFwiXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICAgIC8vICAgb3B0aW9uczoge1xuICAgICAgLy8gICAgIHNjYWxlczoge1xuICAgICAgLy8gICAgICAgeUF4ZXM6IFtcbiAgICAgIC8vICAgICAgICAge1xuICAgICAgLy8gICAgICAgICAgIHRpY2tzOiB7XG4gICAgICAvLyAgICAgICAgICAgICAvLyBJbmNsdWRlIGEgZG9sbGFyIHNpZ24gaW4gdGhlIHRpY2tzXG4gICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcbiAgICAgIC8vICAgICAgICAgICAgICAgcmV0dXJuIFwiJFwiICsgdmFsdWU7XG4gICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgICBdXG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gICB9XG4gICAgfSk7XG5cbiAgICAvLyB2YXIgdG90YWxWaWV3cyA9IHRoaXMudG90YWxWaWV3cztcbiAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaW5lY2hhcnQtdG90YWwtdmlld3NcIik7XG4gICAgdmFyIG15TGluZUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogZGF0YWxhYmVscyxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBWaWV3c1wiLFxuICAgICAgICAgICAgZGF0YTogdG90YWxWaWV3cyxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidmlvbGV0XCIsXG4gICAgICAgICAgICBsaW5lVGVuc2lvbjogMC41LFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInZpb2xldFwiXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNVwiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZyb20pICsgXCIgLSBcIiArIF92bS5fcyhfdm0udG8pKV0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi01XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgXCJib3JkZXItY29sb3JcIjogXCJ2aW9sZXRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlRvdGFsIFZpZXdzXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnZpZXdzKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdldFZpZXdzU3RhdHVzID09IFwicG9zaXRpdmVcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LXVwXCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udmlld3MgLSBfdm0ucHJldl92aWV3cykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LWRvd25cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52aWV3cyAtIF92bS5wcmV2X3ZpZXdzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3JkZXItaW5mb1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlByb2R1Y3QgU29sZFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnByb2R1Y3Rzc29sZCkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmdldFRvdGFsU29sZFN0YXR1cyA9PSBcInBvc2l0aXZlXCJcbiAgICAgICAgICAgICAgPyBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LXVwXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZHVjdHNzb2xkIC0gX3ZtLnByZXZfdG90YWxfcHJvZHVjdF9zb2xkKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb25nLWFycm93LWFsdC1kb3duXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZHVjdHNzb2xkIC0gX3ZtLnByZXZfdG90YWxfcHJvZHVjdF9zb2xkKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgYm9yZGVyLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJUb3RhbCBFYXJuaW5nc1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIiQgXCIgKyBfdm0uX3MoX3ZtLnRvdGFsZWFybmluZ3MudG9GaXhlZCgyKSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmdldFRvdGFsRWFybmluZ3NTdGF0dXMgPT0gXCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgID8gX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb25nLWFycm93LWFsdC11cFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIChfdm0udG90YWxlYXJuaW5ncyAtIF92bS5wcmV2X3RvdGFsX2Vhcm5pbmdzKS50b0ZpeGVkKDIpXG4gICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1sb25nLWFycm93LWFsdC1kb3duXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS50b3RhbGVhcm5pbmdzIC0gX3ZtLnByZXZfdG90YWxfZWFybmluZ3MpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtfdm0uX3YoXCJUb3AgNSBQcm9kdWN0c1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluaywgYWx0OiBcInByb2R1Y3QgaW1hZ2VcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdG9ja19sYWJlbF9pZCA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnN0b2NrX2xhYmVsX2lkID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI0MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5xdWFudGl0eSA+IDAgPyBpdGVtLnF1YW50aXR5IDogMCkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnN0b2NrX2xhYmVsKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiQgXCIgKyBfdm0uX3MoaXRlbS50b3RhbF9lYXJuaW5nc19wZXJfMTUudG9GaXhlZCgyKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiJCBcIiArIF92bS5fcyhpdGVtLnRvdGFsX2Vhcm5pbmdzLnRvRml4ZWQoMikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItM1wiIH0sIFtfdm0uX3YoXCJRdWljayBEZXRhaWxzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1saXN0LWdyb3VwXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS11c2VyLXBsdXMgdGV4dC1pbmZvIG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubmV3bWVtYmVycykgK1xuICAgICAgICAgICAgICAgICAgICBcIiBOZXcgTWVtYmVyc1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMYXN0IDI0IGhvdXJzXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1pbnZvaWNlIHRleHQtc3VjY2VzcyBtci0yXCJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udG90YWxfb3JkZXJzKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIE9yZGVyc1xcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3RhbCBPcmRlcnNcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgdGV4dC13YXJuaW5nIG1yLTJcIlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhfdm0ubG93KSArIFwiIEl0ZW1zXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxvdyBvZiBTdG9ja1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzLWNpcmNsZSB0ZXh0LWRhbmdlciBtci0yXCJcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLm91dCkgKyBcIiBJdGVtc1xcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJPdXQgb2YgU3RvY2tcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItNVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC0xXCIgfSwgW1xuICAgICAgICAgIF9jKFwiY2FudmFzXCIsIHsgYXR0cnM6IHsgaWQ6IFwibGluZWNoYXJ0LXRvdGFsLXZpZXdzXCIgfSB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJjYW52YXNcIiwgeyBhdHRyczogeyBpZDogXCJsaW5lY2hhcnQtcHJvZHVjdC1zb2xkXCIgfSB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmctc2Vjb25kYXJ5XCIgfSwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJQcm9kdWN0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJBdmFpbGFiaWxpdHlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlRvdGFsXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJPdmVyYWxsXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI5MzlmZjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI5MzlmZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI5MzlmZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI5MzlmZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI5MzlmZjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWI5MzlmZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI5MzlmZjQmXCIiXSwic291cmNlUm9vdCI6IiJ9