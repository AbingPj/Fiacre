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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kYXNoYm9hcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZT8yYTQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2Rhc2hib2FyZC52dWU/MjIzMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2Rhc2hib2FyZC52dWU/YzY3MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErSUE7QUFDQSxVQUNBLE1BREEsRUFFQSxJQUZBLEVBR0EsWUFIQSxFQUlBLGNBSkEsRUFLQSxlQUxBLEVBTUEsa0JBTkEsRUFPQSxLQVBBLEVBUUEsS0FSQSxFQVNBLFlBVEEsRUFVQSxVQVZBLEVBV0EsZUFYQSxFQVlBLDhCQVpBLEVBYUEsdUJBYkEsRUFjQSxPQWRBLEVBZUEseUJBZkEsRUFnQkEscUJBaEJBLEVBaUJBLFlBakJBLEVBa0JBLGNBbEJBLENBREE7QUFxQkEsTUFyQkEsa0JBcUJBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLHFCQUZBO0FBR0Esb0JBSEE7QUFJQTtBQUpBO0FBTUEsR0E1QkE7QUE4QkE7QUFDQSxrQkFEQSw0QkFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLHNCQVRBLGdDQVNBO0FBQ0E7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LEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQSxrQkFBa0IsU0FBUyxlQUFlLEVBQUU7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQStMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL0Rhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm1iLTVcIj5cclxuICAgICAgPGgzPnt7ZnJvbX19IC0ge3t0b319PC9oMz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyLWNvbG9yOnZpb2xldDtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGg0PlRvdGFsIFZpZXdzPC9oND5cclxuICAgICAgICAgICAgPGgyPnt7dmlld3N9fTwvaDI+XHJcbiAgICAgICAgICAgIDxoNiB2LWlmPVwiZ2V0Vmlld3NTdGF0dXMgPT0gJ3Bvc2l0aXZlJ1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAge3t2aWV3cy1wcmV2X3ZpZXdzfX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPGg2IHYtZWxzZSBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICB7e3ZpZXdzLXByZXZfdmlld3N9fVxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBib3JkZXItaW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDQ+UHJvZHVjdCBTb2xkPC9oND5cclxuICAgICAgICAgICAgPGgyPnt7cHJvZHVjdHNzb2xkfX08L2gyPlxyXG5cclxuICAgICAgICAgICAgPGg2IHYtaWY9XCJnZXRUb3RhbFNvbGRTdGF0dXMgPT0gJ3Bvc2l0aXZlJ1wiIGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAge3twcm9kdWN0c3NvbGQtcHJldl90b3RhbF9wcm9kdWN0X3NvbGR9fVxyXG4gICAgICAgICAgICA8L2g2PlxyXG4gICAgICAgICAgICA8aDYgdi1lbHNlIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb25nLWFycm93LWFsdC1kb3duXCI+PC9pPlxyXG4gICAgICAgICAgICAgIHt7cHJvZHVjdHNzb2xkLXByZXZfdG90YWxfcHJvZHVjdF9zb2xkfX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgYm9yZGVyLXN1Y2Nlc3NcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPGg0PlRvdGFsIEVhcm5pbmdzPC9oND5cclxuICAgICAgICAgICAgPGgyPiQge3t0b3RhbGVhcm5pbmdzLnRvRml4ZWQoMil9fTwvaDI+XHJcbiAgICAgICAgICAgIDxoNiB2LWlmPVwiZ2V0VG90YWxFYXJuaW5nc1N0YXR1cyA9PSAncG9zaXRpdmUnXCIgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1sb25nLWFycm93LWFsdC11cFwiPjwvaT5cclxuICAgICAgICAgICAgICAkIHt7KHRvdGFsZWFybmluZ3MgLSBwcmV2X3RvdGFsX2Vhcm5pbmdzKS50b0ZpeGVkKDIpfX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPGg2IHYtZWxzZSBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtZG93blwiPjwvaT5cclxuICAgICAgICAgICAgICAkIHt7KHRvdGFsZWFybmluZ3MgLSBwcmV2X3RvdGFsX2Vhcm5pbmdzKS50b0ZpeGVkKDIpfX1cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicC0xXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZWNoYXJ0LXRvdGFsLXZpZXdzXCI+PC9jYW52YXM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicC0xXCI+XHJcbiAgICAgICAgICA8Y2FudmFzIGlkPVwibGluZWNoYXJ0LXByb2R1Y3Qtc29sZFwiPjwvY2FudmFzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cIm1iLTNcIj5Ub3AgNSBQcm9kdWN0czwvaDQ+XHJcblxyXG4gICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzPVwiYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+UHJvZHVjdDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkF2YWlsYWJpbGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ub3RhbDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PdmVyYWxsPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9kdWN0c1wiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0uaW1hZ2VfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvZHVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDo1MHB4OyBoZWlnaHQ6NTBweDsgb2JqZWN0LWZpdDpjb3ZlcjtcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0ubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZC1mbGV4XCJcclxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLnN0b2NrX2xhYmVsX2lkID09IDE/ICd0ZXh0LXN1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnN0b2NrX2xhYmVsX2lkID09IDI/ICd0ZXh0LXdhcm5pbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAndGV4dC1kYW5nZXInXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDo0MHB4O1wiPnt7KGl0ZW0ucXVhbnRpdHkgPiAwKT8gaXRlbS5xdWFudGl0eSA6IDAgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7aXRlbS5zdG9ja19sYWJlbH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4kIHt7aXRlbS50b3RhbF9lYXJuaW5nc19wZXJfMTUudG9GaXhlZCgyKX19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD4kIHt7aXRlbS50b3RhbF9lYXJuaW5ncy50b0ZpeGVkKDIpfX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwibWItM1wiPlF1aWNrIERldGFpbHM8L2g0PlxyXG4gICAgICAgIDxiLWxpc3QtZ3JvdXA+XHJcbiAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXVzZXItcGx1cyB0ZXh0LWluZm8gbXItMlwiPjwvaT5cclxuICAgICAgICAgICAge3tuZXdtZW1iZXJzfX0gTmV3IE1lbWJlcnNcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiPkxhc3QgMjQgaG91cnM8L3NwYW4+XHJcbiAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWludm9pY2UgdGV4dC1zdWNjZXNzIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgIHt7dG90YWxfb3JkZXJzfX0gT3JkZXJzXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIj5Ub3RhbCBPcmRlcnM8L3NwYW4+XHJcbiAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgPGItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgdGV4dC13YXJuaW5nIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgIHt7bG93fX0gSXRlbXNcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiPkxvdyBvZiBTdG9jazwvc3Bhbj5cclxuICAgICAgICAgIDwvYi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICA8Yi1saXN0LWdyb3VwLWl0ZW0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZSB0ZXh0LWRhbmdlciBtci0yXCI+PC9pPlxyXG4gICAgICAgICAgICB7e291dH19IEl0ZW1zXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgZmxvYXQtcmlnaHRcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgICA8L2ItbGlzdC1ncm91cC1pdGVtPlxyXG4gICAgICAgIDwvYi1saXN0LWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcclxuICAgIFwiZnJvbVwiLFxyXG4gICAgXCJ0b1wiLFxyXG4gICAgXCJ0b3RhbHZpZXdzXCIsXHJcbiAgICBcInByb2R1Y3Rzc29sZFwiLFxyXG4gICAgXCJ0b3RhbGVhcm5pbmdzXCIsXHJcbiAgICBcInRvcGZpdmVfcHJvZHVjdHNcIixcclxuICAgIFwibG93XCIsXHJcbiAgICBcIm91dFwiLFxyXG4gICAgXCJuZXdtZW1iZXJzXCIsXHJcbiAgICBcInByb2R1Y3RzXCIsXHJcbiAgICBcIm1vbnRoc19sYWJlbHNcIixcclxuICAgIFwidG90YWxfcHJvZHVjdF9zb2xkX3Blcl9tb250aFwiLFxyXG4gICAgXCJ0b3RhbF92aWV3c19wZXJfbW9udGhcIixcclxuICAgIFwidmlld3NcIixcclxuICAgIFwicHJldl90b3RhbF9wcm9kdWN0X3NvbGRcIixcclxuICAgIFwicHJldl90b3RhbF9lYXJuaW5nc1wiLFxyXG4gICAgXCJwcmV2X3ZpZXdzXCIsXHJcbiAgICBcInRvdGFsX29yZGVyc1wiXHJcbiAgXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YWxhYmVsczogW10sXHJcbiAgICAgIHByb2R1Y3RTb2xkOiBbXSxcclxuICAgICAgdG90YWxWaWV3czogW10sXHJcbiAgICAgIHRvdGFsVmlld3NQZXJNb250aDogW11cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGdldFZpZXdzU3RhdHVzKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy52aWV3cyAtIHRoaXMucHJldl92aWV3cztcclxuICAgICAgaWYgKHJlc3VsdCA8PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIFwibmVnYXRpdmVcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJwb3NpdGl2ZVwiO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0VG90YWxTb2xkU3RhdHVzKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wcm9kdWN0c3NvbGQgLSB0aGlzLnByZXZfdG90YWxfcHJvZHVjdF9zb2xkO1xyXG4gICAgICBpZiAocmVzdWx0IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJuZWdhdGl2ZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInBvc2l0aXZlXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRUb3RhbEVhcm5pbmdzU3RhdHVzKCkge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdGhpcy50b3RhbGVhcm5pbmdzIC0gdGhpcy5wcmV2X3RvdGFsX2Vhcm5pbmdzO1xyXG4gICAgICBpZiAocmVzdWx0IDw9IDApIHtcclxuICAgICAgICByZXR1cm4gXCJuZWdhdGl2ZVwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInBvc2l0aXZlXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmRhdGFsYWJlbHMgPSB0aGlzLm1vbnRoc19sYWJlbHM7XHJcbiAgICB0aGlzLnByb2R1Y3RTb2xkID0gdGhpcy50b3RhbF9wcm9kdWN0X3NvbGRfcGVyX21vbnRoO1xyXG4gICAgdGhpcy50b3RhbFZpZXdzUGVyTW9udGggPSB0aGlzLnRvdGFsX3ZpZXdzX3Blcl9tb250aDtcclxuICAgIC8vICAgdGhpcy50b3RhbFZpZXdzID1cclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgdmFyIGRhdGFsYWJlbHMgPSB0aGlzLmRhdGFsYWJlbHM7XHJcbiAgICB2YXIgcHJvZHVjdFNvbGQgPSB0aGlzLnByb2R1Y3RTb2xkO1xyXG4gICAgdmFyIHRvdGFsVmlld3MgPSB0aGlzLnRvdGFsVmlld3NQZXJNb250aDtcclxuICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpbmVjaGFydC1wcm9kdWN0LXNvbGRcIik7XHJcbiAgICB2YXIgbXlMaW5lQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgIHR5cGU6IFwibGluZVwiLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbGFiZWxzOiBkYXRhbGFiZWxzLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlByb2R1Y3QgU29sZFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBwcm9kdWN0U29sZCxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJza3libHVlXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vICAge1xyXG4gICAgICAgICAgLy8gICAgIGxhYmVsOiBcIlRvdGFsIFZpZXdzXCIsXHJcbiAgICAgICAgICAvLyAgICAgZGF0YTogdG90YWxWaWV3cyxcclxuICAgICAgICAgIC8vICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIC8vICAgICBib3JkZXJDb2xvcjogXCJ2aW9sZXRcIixcclxuICAgICAgICAgIC8vICAgICBsaW5lVGVuc2lvbjogMC41LFxyXG4gICAgICAgICAgLy8gICAgIGJhY2tncm91bmRDb2xvcjogXCJ2aW9sZXRcIlxyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICAgIC8vICAgb3B0aW9uczoge1xyXG4gICAgICAvLyAgICAgc2NhbGVzOiB7XHJcbiAgICAgIC8vICAgICAgIHlBeGVzOiBbXHJcbiAgICAgIC8vICAgICAgICAge1xyXG4gICAgICAvLyAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgLy8gICAgICAgICAgICAgLy8gSW5jbHVkZSBhIGRvbGxhciBzaWduIGluIHRoZSB0aWNrc1xyXG4gICAgICAvLyAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24odmFsdWUsIGluZGV4LCB2YWx1ZXMpIHtcclxuICAgICAgLy8gICAgICAgICAgICAgICByZXR1cm4gXCIkXCIgKyB2YWx1ZTtcclxuICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgIH1cclxuICAgICAgLy8gICAgICAgXVxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHZhciB0b3RhbFZpZXdzID0gdGhpcy50b3RhbFZpZXdzO1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGluZWNoYXJ0LXRvdGFsLXZpZXdzXCIpO1xyXG4gICAgdmFyIG15TGluZUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICB0eXBlOiBcImxpbmVcIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGxhYmVsczogZGF0YWxhYmVscyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJUb3RhbCBWaWV3c1wiLFxyXG4gICAgICAgICAgICBkYXRhOiB0b3RhbFZpZXdzLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwidmlvbGV0XCIsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjUsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ2aW9sZXRcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi01XCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KF92bS5fcyhfdm0uZnJvbSkgKyBcIiAtIFwiICsgX3ZtLl9zKF92bS50bykpXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTVcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiLCBzdGF0aWNTdHlsZTogeyBcImJvcmRlci1jb2xvclwiOiBcInZpb2xldFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiVG90YWwgVmlld3NcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0udmlld3MpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZ2V0Vmlld3NTdGF0dXMgPT0gXCJwb3NpdGl2ZVwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS52aWV3cyAtIF92bS5wcmV2X3ZpZXdzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtZG93blwiIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnZpZXdzIC0gX3ZtLnByZXZfdmlld3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGJvcmRlci1pbmZvXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiUHJvZHVjdCBTb2xkXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJvZHVjdHNzb2xkKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZ2V0VG90YWxTb2xkU3RhdHVzID09IFwicG9zaXRpdmVcIlxuICAgICAgICAgICAgICA/IF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbG9uZy1hcnJvdy1hbHQtdXBcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9kdWN0c3NvbGQgLSBfdm0ucHJldl90b3RhbF9wcm9kdWN0X3NvbGQpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LWRvd25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9kdWN0c3NvbGQgLSBfdm0ucHJldl90b3RhbF9wcm9kdWN0X3NvbGQpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBib3JkZXItc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIlRvdGFsIEVhcm5pbmdzXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiJCBcIiArIF92bS5fcyhfdm0udG90YWxlYXJuaW5ncy50b0ZpeGVkKDIpKSldKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZ2V0VG90YWxFYXJuaW5nc1N0YXR1cyA9PSBcInBvc2l0aXZlXCJcbiAgICAgICAgICAgICAgPyBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LXVwXCIgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS50b3RhbGVhcm5pbmdzIC0gX3ZtLnByZXZfdG90YWxfZWFybmluZ3MpLnRvRml4ZWQoMilcbiAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJoNlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWxvbmctYXJyb3ctYWx0LWRvd25cIiB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnRvdGFsZWFybmluZ3MgLSBfdm0ucHJldl90b3RhbF9lYXJuaW5ncykudG9GaXhlZCgyKVxuICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW192bS5fdihcIlRvcCA1IFByb2R1Y3RzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rLCBhbHQ6IFwicHJvZHVjdCBpbWFnZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkLWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0b2NrX2xhYmVsX2lkID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uc3RvY2tfbGFiZWxfaWQgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjQwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnF1YW50aXR5ID4gMCA/IGl0ZW0ucXVhbnRpdHkgOiAwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RvY2tfbGFiZWwpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiJCBcIiArIF92bS5fcyhpdGVtLnRvdGFsX2Vhcm5pbmdzX3Blcl8xNS50b0ZpeGVkKDIpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKGl0ZW0udG90YWxfZWFybmluZ3MudG9GaXhlZCgyKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0zXCIgfSwgW192bS5fdihcIlF1aWNrIERldGFpbHNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWxpc3QtZ3JvdXBcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVzZXItcGx1cyB0ZXh0LWluZm8gbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5uZXdtZW1iZXJzKSArXG4gICAgICAgICAgICAgICAgICAgIFwiIE5ldyBNZW1iZXJzXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxhc3QgMjQgaG91cnNcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiLWxpc3QtZ3JvdXAtaXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWludm9pY2UgdGV4dC1zdWNjZXNzIG1yLTJcIlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50b3RhbF9vcmRlcnMpICtcbiAgICAgICAgICAgICAgICAgICAgXCIgT3JkZXJzXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRvdGFsIE9yZGVyc1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImItbGlzdC1ncm91cC1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZSB0ZXh0LXdhcm5pbmcgbXItMlwiXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5sb3cpICsgXCIgSXRlbXNcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc2Vjb25kYXJ5IGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTG93IG9mIFN0b2NrXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYi1saXN0LWdyb3VwLWl0ZW1cIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlIHRleHQtZGFuZ2VyIG1yLTJcIlxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhfdm0ub3V0KSArIFwiIEl0ZW1zXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIk91dCBvZiBTdG9ja1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi01XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJjYW52YXNcIiwgeyBhdHRyczogeyBpZDogXCJsaW5lY2hhcnQtdG90YWwtdmlld3NcIiB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtMVwiIH0sIFtcbiAgICAgICAgICBfYyhcImNhbnZhc1wiLCB7IGF0dHJzOiB7IGlkOiBcImxpbmVjaGFydC1wcm9kdWN0LXNvbGRcIiB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgeyBzdGF0aWNDbGFzczogXCJiZy1zZWNvbmRhcnlcIiB9LCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIlByb2R1Y3RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIkF2YWlsYWJpbGl0eVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiVG90YWxcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHNjb3BlOiBcImNvbFwiIH0gfSwgW192bS5fdihcIk92ZXJhbGxcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjkzOWZmNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI5MzlmZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI5MzlmZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI5MzlmZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI5MzlmZjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWI5MzlmZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGFzaGJvYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI5MzlmZjQmXCIiXSwic291cmNlUm9vdCI6IiJ9