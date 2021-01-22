(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Order"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["propsorders"],
  data: function data() {
    return {
      orders: [],
      data: {},
      search: "",
      search_input: "",
      filterby: "all",
      week_date: null,
      week_first_day: null,
      week_last_day: null,
      month_date: null,
      option_week: {
        format: "MMMM DD, YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      },
      option_month: {
        format: "MMMM YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      }
    };
  },
  created: function created() {
    this.getResults();
  },
  methods: {
    filterSelectionChange: function filterSelectionChange() {
      if (this.filterby == "all") {
        this.week_date = moment().format("MMMM DD, YYYY");
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      } else if (this.filterby == "weekly") {
        this.week_date = moment().format("MMMM DD, YYYY");
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      } else if (this.filterby == "monthly") {
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      }
    },
    filterByMonth: function filterByMonth() {
      //   console.log("oyee month");
      this.getResults();
    },
    filterByWeek: function filterByWeek() {
      //   console.log("oyee week");
      this.getResults();
    },
    getResults: function getResults() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var param;

      if (this.filterby == "all") {
        if (this.search != "") {
          param = {
            search: this.search,
            page: page
          };
        } else {
          param = {
            page: page
          };
        }

        this.getAllData(param);
      }

      if (this.filterby == "weekly") {
        param = {
          page: page,
          search: this.search,
          date: this.week_date
        };
        this.getWeeklyData(param);
      }

      if (this.filterby == "monthly") {
        param = {
          page: page,
          search: this.search,
          date: this.month_date
        };
        console.log(this.month_date);
        this.getMonthlyData(param);
      }
    },
    getAllData: function getAllData(param) {
      var _this = this;

      axios({
        method: "get",
        url: "/api/admin/orders",
        params: param
      }).then(function (res) {
        _this.data = res.data;
        _this.orders = res.data.data;
      });
    },
    getWeeklyData: function getWeeklyData(param) {
      var _this2 = this;

      axios({
        method: "get",
        url: "/api/admin/orders/weekly",
        params: param
      }).then(function (res) {
        _this2.data = res.data.pagination;
        _this2.orders = res.data.pagination.data;
        _this2.week_first_day = res.data.from;
        _this2.week_last_day = res.data.to; // this.week_date = res.data.date;
      });
    },
    getMonthlyData: function getMonthlyData(param) {
      var _this3 = this;

      axios({
        method: "get",
        url: "/api/admin/orders/monthly",
        params: param
      }).then(function (res) {
        _this3.data = res.data.pagination;
        _this3.orders = res.data.pagination.data; // this.month_date = res.data.date;
      });
    },
    btnSearch: function btnSearch() {
      this.search = this.search_input;
      this.getResults();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-8428a410] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search_input,
                expression: "search_input"
              }
            ],
            staticClass: "form-control rounded-0",
            attrs: { type: "text", placeholder: "Search" },
            domProps: { value: _vm.search_input },
            on: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.btnSearch()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search_input = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "input-group-append" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-success rounded-0",
                on: {
                  click: function($event) {
                    return _vm.btnSearch()
                  }
                }
              },
              [_vm._v("Search")]
            )
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-md-3" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filterby,
                expression: "filterby"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.filterby = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.filterSelectionChange
              ]
            }
          },
          [
            _c("option", { attrs: { value: "all" } }, [_vm._v("Default")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "weekly" } }, [_vm._v("Weekly")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "monthly" } }, [_vm._v("Monthly")])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-3",
          class: _vm.filterby == "weekly" ? "d-block" : "d-none"
        },
        [
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _c("date-picker", {
                ref: "week_date",
                attrs: {
                  id: "date-time-input-week",
                  wrap: true,
                  config: _vm.option_week
                },
                on: { "dp-change": _vm.filterByWeek },
                model: {
                  value: _vm.week_date,
                  callback: function($$v) {
                    _vm.week_date = $$v
                  },
                  expression: "week_date"
                }
              }),
              _vm._v(" "),
              _vm._m(1)
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-3",
          class: _vm.filterby == "monthly" ? "d-block" : "d-none"
        },
        [
          _c(
            "div",
            { staticClass: "input-group" },
            [
              _c("date-picker", {
                ref: "month_date",
                attrs: {
                  id: "date-time-input-month",
                  wrap: true,
                  config: _vm.option_month
                },
                on: { "dp-change": _vm.filterByMonth },
                model: {
                  value: _vm.month_date,
                  callback: function($$v) {
                    _vm.month_date = $$v
                  },
                  expression: "month_date"
                }
              }),
              _vm._v(" "),
              _vm._m(2)
            ],
            1
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.filterby == "weekly"
      ? _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col" }, [
            _c("h5", [
              _vm._v(
                "(" +
                  _vm._s(_vm.week_first_day) +
                  " - " +
                  _vm._s(_vm.week_last_day) +
                  ")"
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.filterby == "monthly"
      ? _c("div", { staticClass: "row mt-3" }, [
          _c("div", { staticClass: "col" }, [
            _c("h5", [_vm._v("(" + _vm._s(_vm.month_date) + ")")])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c("div", { staticClass: "col-lg-8 col-md-8" }, [
        _vm.orders.length == 0
          ? _c("div", [_c("h4", [_vm._v("No Orders Yet")])])
          : _c("div", [
              _c(
                "ul",
                { staticClass: "list-group rounded-0" },
                _vm._l(_vm.orders, function(order, index) {
                  return _c(
                    "li",
                    { key: index, staticClass: "list-group-item d-flex" },
                    [
                      _c("div", {}, [
                        _c("img", {
                          staticStyle: {
                            width: "100px",
                            height: "80px",
                            "object-fit": "cover"
                          },
                          attrs: {
                            src:
                              order.order_by != 0
                                ? order.user.atr_image_link
                                : order.retailer.atr_image_link
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-25 ml-3" }, [
                        _c("p", [
                          _c("b", [
                            order.order_by != 0
                              ? _c("span", [
                                  _vm._v(_vm._s(order.user.full_name))
                                ])
                              : _c("span", [
                                  _vm._v(_vm._s(order.retailer.full_name))
                                ])
                          ]),
                          _vm._v(" "),
                          order.order_by == 0
                            ? _c("span", [_vm._v("(Retailer)")])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c("span", { staticStyle: { "font-size": "20px" } }, [
                            _c("b", [
                              _vm._v("$ " + _vm._s(order.atr_overall_total_f))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-auto w-25 text-right" }, [
                        _c("p", [
                          _c("b", [_vm._v("Order No. " + _vm._s(order.id))]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(
                            "\n                " +
                              _vm._s(order.atr_date_label) +
                              "\n                "
                          ),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "text-success",
                              attrs: { href: "/admin/orders/" + order.id }
                            },
                            [_vm._v("View Order")]
                          )
                        ])
                      ])
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-5" },
                [
                  _c("pagination", {
                    attrs: {
                      data: _vm.data,
                      limit: 5,
                      size: "small",
                      align: "left"
                    },
                    on: { "pagination-change-page": _vm.getResults }
                  })
                ],
                1
              )
            ])
      ]),
      _vm._v(" "),
      _vm._m(3)
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
        _c("h2", { staticClass: "card-title mb-0" }, [_vm._v("Orders")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
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
    return _c("div", { staticClass: "col-lg-4 col-md-4" }, [
      _c("div", { staticClass: "p-5", staticStyle: { height: "400px" } }, [
        _c("h3", [_vm._v("Quick Details")]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("h4", [
          _c("i", { staticClass: "fas fa-sync-alt text-success" }),
          _vm._v("\n          1 orders\n          "),
          _c("span", { staticClass: "text-secondary" }, [
            _vm._v("Awaiting Process")
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("h4", [
          _c("i", { staticClass: "fas fa-pause text-warning" }),
          _vm._v("\n          1 orders\n          "),
          _c("span", { staticClass: "text-secondary" }, [_vm._v("On Hold")])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("h4", [
          _c("i", { staticClass: "fas fa-truck-pickup text-info" }),
          _vm._v("\n          1 orders\n          "),
          _c("span", { staticClass: "text-secondary" }, [_vm._v("On Ready")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/orders/index.vue":
/*!**********************************************************!*\
  !*** ./resources/js/backend/components/orders/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=8428a410&scoped=true& */ "./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& */ "./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8428a410",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/orders/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=style&index=0&id=8428a410&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_8428a410_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=8428a410&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/index.vue?vue&type=template&id=8428a410&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_8428a410_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT9mZGNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT9jMWQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT8wMzA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/MjJmZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/ZTAzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/Yzc2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMktBO0FBQ0Esd0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGNBRkE7QUFHQSxnQkFIQTtBQUlBLHNCQUpBO0FBS0EscUJBTEE7QUFNQSxxQkFOQTtBQU9BLDBCQVBBO0FBUUEseUJBUkE7QUFTQSxz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QUE7QUFBQTtBQUFBO0FBQTBjLENBQWdCLDJiQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL09yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+T3JkZXJzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyIC8+XG4gICAgPGJyIC8+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoX2lucHV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICB2LW9uOmtleXVwLmVudGVyPVwiYnRuU2VhcmNoKClcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyByb3VuZGVkLTBcIiBAY2xpY2s9XCJidG5TZWFyY2goKVwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwhLS0gZmlsdGVyIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImZpbHRlcmJ5XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBAY2hhbmdlPVwiZmlsdGVyU2VsZWN0aW9uQ2hhbmdlXCI+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFsbFwiPkRlZmF1bHQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwid2Vla2x5XCI+V2Vla2x5PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1vbnRobHlcIj5Nb250aGx5PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IDpjbGFzcz1cImZpbHRlcmJ5ID09ICd3ZWVrbHknPyAnZC1ibG9jayc6J2Qtbm9uZSdcIiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxkYXRlLXBpY2tlclxuICAgICAgICAgICAgdi1tb2RlbD1cIndlZWtfZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImRhdGUtdGltZS1pbnB1dC13ZWVrXCJcbiAgICAgICAgICAgIDp3cmFwPVwidHJ1ZVwiXG4gICAgICAgICAgICA6Y29uZmlnPVwib3B0aW9uX3dlZWtcIlxuICAgICAgICAgICAgcmVmPVwid2Vla19kYXRlXCJcbiAgICAgICAgICAgIEBkcC1jaGFuZ2U9XCJmaWx0ZXJCeVdlZWtcIlxuICAgICAgICAgID48L2RhdGUtcGlja2VyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVG9nZ2xlXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIDxkaXYgdi1pZj1cImZpbHRlcmJ5ID09ICd3ZWVrbHknXCIgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cImZpbHRlckJ5V2VlaygpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWx0ZXJcIj48L2k+IEZpbHRlciBCeSBXZWVrbHlcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj4tLT5cblxuICAgICAgPGRpdiA6Y2xhc3M9XCJmaWx0ZXJieSA9PSAnbW9udGhseSc/ICdkLWJsb2NrJzonZC1ub25lJ1wiIGNsYXNzPVwiY29sLW1kLTNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPGRhdGUtcGlja2VyXG4gICAgICAgICAgICB2LW1vZGVsPVwibW9udGhfZGF0ZVwiXG4gICAgICAgICAgICBpZD1cImRhdGUtdGltZS1pbnB1dC1tb250aFwiXG4gICAgICAgICAgICA6d3JhcD1cInRydWVcIlxuICAgICAgICAgICAgOmNvbmZpZz1cIm9wdGlvbl9tb250aFwiXG4gICAgICAgICAgICByZWY9XCJtb250aF9kYXRlXCJcbiAgICAgICAgICAgIEBkcC1jaGFuZ2U9XCJmaWx0ZXJCeU1vbnRoXCJcbiAgICAgICAgICA+PC9kYXRlLXBpY2tlcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiIHR5cGU9XCJidXR0b25cIiB0aXRsZT1cIlRvZ2dsZVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSA8ZGl2IHYtaWY9XCJmaWx0ZXJieSA9PSAnbW9udGhseSdcIiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwiZmlsdGVyQnlNb250aCgpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWx0ZXJcIj48L2k+IEZpbHRlciBCeSBNb250aGx5XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+LS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiZmlsdGVyYnkgPT0gJ3dlZWtseSdcIiBjbGFzcz1cInJvdyBtdC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgPGg1Pih7e3dlZWtfZmlyc3RfZGF5fX0gLSB7e3dlZWtfbGFzdF9kYXl9fSk8L2g1PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgIDxkaXYgdi1pZj1cImZpbHRlcmJ5ID09ICdtb250aGx5J1wiIGNsYXNzPVwicm93IG10LTNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8aDU+KHt7bW9udGhfZGF0ZX19KTwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1tZC04XCI+XG4gICAgICAgIDxkaXYgdi1pZj1cIm9yZGVycy5sZW5ndGggPT0gMFwiPlxuICAgICAgICAgIDxoND5ObyBPcmRlcnMgWWV0PC9oND5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgcm91bmRlZC0wXCI+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCIob3JkZXIsIGluZGV4KSBpbiBvcmRlcnNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICA6c3JjPVwib3JkZXIub3JkZXJfYnkgIT0gMD8gb3JkZXIudXNlci5hdHJfaW1hZ2VfbGluayA6IG9yZGVyLnJldGFpbGVyLmF0cl9pbWFnZV9saW5rXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAwcHg7IGhlaWdodDo4MHB4OyBvYmplY3QtZml0OmNvdmVyO1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IG1sLTNcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXIub3JkZXJfYnkgIT0gMFwiPnt7b3JkZXIudXNlci5mdWxsX25hbWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7b3JkZXIucmV0YWlsZXIuZnVsbF9uYW1lfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXIub3JkZXJfYnkgPT0gMFwiPihSZXRhaWxlcik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDIwcHg7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPiQge3tvcmRlci5hdHJfb3ZlcmFsbF90b3RhbF9mfX08L2I+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLWF1dG8gdy0yNSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICA8Yj5PcmRlciBOby4ge3tvcmRlci5pZH19PC9iPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICB7e29yZGVyLmF0cl9kYXRlX2xhYmVsfX1cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvYWRtaW4vb3JkZXJzLycrb3JkZXIuaWRcIiBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPlZpZXcgT3JkZXI8L2E+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXQtNVwiPlxuICAgICAgICAgICAgPHBhZ2luYXRpb25cbiAgICAgICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICAgICAgOmxpbWl0PVwiNVwiXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIGFsaWduPVwibGVmdFwiXG4gICAgICAgICAgICAgIEBwYWdpbmF0aW9uLWNoYW5nZS1wYWdlPVwiZ2V0UmVzdWx0c1wiXG4gICAgICAgICAgICA+PC9wYWdpbmF0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwLTVcIiBzdHlsZT1cImhlaWdodDo0MDBweFwiPlxuICAgICAgICAgIDxoMz5RdWljayBEZXRhaWxzPC9oMz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zeW5jLWFsdCB0ZXh0LXN1Y2Nlc3NcIj48L2k+XG4gICAgICAgICAgICAxIG9yZGVyc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPkF3YWl0aW5nIFByb2Nlc3M8L3NwYW4+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXVzZSB0ZXh0LXdhcm5pbmdcIj48L2k+XG4gICAgICAgICAgICAxIG9yZGVyc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPk9uIEhvbGQ8L3NwYW4+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10cnVjay1waWNrdXAgdGV4dC1pbmZvXCI+PC9pPlxuICAgICAgICAgICAgMSBvcmRlcnNcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5PbiBSZWFkeTwvc3Bhbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicHJvcHNvcmRlcnNcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyczogW10sXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIHNlYXJjaF9pbnB1dDogXCJcIixcbiAgICAgIGZpbHRlcmJ5OiBcImFsbFwiLFxuICAgICAgd2Vla19kYXRlOiBudWxsLFxuICAgICAgd2Vla19maXJzdF9kYXk6IG51bGwsXG4gICAgICB3ZWVrX2xhc3RfZGF5OiBudWxsLFxuICAgICAgbW9udGhfZGF0ZTogbnVsbCxcbiAgICAgIG9wdGlvbl93ZWVrOiB7XG4gICAgICAgIGZvcm1hdDogXCJNTU1NIERELCBZWVlZXCIsXG4gICAgICAgIHVzZUN1cnJlbnQ6IHRydWUsXG4gICAgICAgIGFsbG93SW5wdXRUb2dnbGU6IHRydWUsXG4gICAgICAgIG1heERhdGU6IG1vbWVudCgpXG4gICAgICAgIC8vIHNob3dUb2RheUJ1dHRvbiA6IHRydWUsXG4gICAgICB9LFxuICAgICAgb3B0aW9uX21vbnRoOiB7XG4gICAgICAgIGZvcm1hdDogXCJNTU1NIFlZWVlcIixcbiAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcbiAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgbWF4RGF0ZTogbW9tZW50KClcbiAgICAgICAgLy8gc2hvd1RvZGF5QnV0dG9uIDogdHJ1ZSxcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBmaWx0ZXJTZWxlY3Rpb25DaGFuZ2UoKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJieSA9PSBcImFsbFwiKSB7XG4gICAgICAgIHRoaXMud2Vla19kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWVwiKTtcbiAgICAgICAgdGhpcy5tb250aF9kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpO1xuICAgICAgICB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJieSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgIHRoaXMud2Vla19kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWVwiKTtcbiAgICAgICAgdGhpcy5tb250aF9kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpO1xuICAgICAgICB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJieSA9PSBcIm1vbnRobHlcIikge1xuICAgICAgICB0aGlzLm1vbnRoX2RhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJNTU1NIFlZWVlcIik7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZmlsdGVyQnlNb250aCgpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwib3llZSBtb250aFwiKTtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG4gICAgZmlsdGVyQnlXZWVrKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coXCJveWVlIHdlZWtcIik7XG4gICAgICB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICB9LFxuICAgIGdldFJlc3VsdHMocGFnZSA9IDEpIHtcbiAgICAgIGxldCBwYXJhbTtcbiAgICAgIGlmICh0aGlzLmZpbHRlcmJ5ID09IFwiYWxsXCIpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoICE9IFwiXCIpIHtcbiAgICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICBwYWdlOiBwYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICAgIHBhZ2U6IHBhZ2VcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0QWxsRGF0YShwYXJhbSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWx0ZXJieSA9PSBcIndlZWtseVwiKSB7XG4gICAgICAgIHBhcmFtID0ge1xuICAgICAgICAgIHBhZ2U6IHBhZ2UsXG4gICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICBkYXRlOiB0aGlzLndlZWtfZGF0ZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFdlZWtseURhdGEocGFyYW0pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsdGVyYnkgPT0gXCJtb250aGx5XCIpIHtcbiAgICAgICAgcGFyYW0gPSB7XG4gICAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgIGRhdGU6IHRoaXMubW9udGhfZGF0ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1vbnRoX2RhdGUpO1xuICAgICAgICB0aGlzLmdldE1vbnRobHlEYXRhKHBhcmFtKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0QWxsRGF0YShwYXJhbSkge1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCIvYXBpL2FkbWluL29yZGVyc1wiLFxuICAgICAgICBwYXJhbXM6IHBhcmFtXG4gICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICB0aGlzLm9yZGVycyA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldFdlZWtseURhdGEocGFyYW0pIHtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICB1cmw6IFwiL2FwaS9hZG1pbi9vcmRlcnMvd2Vla2x5XCIsXG4gICAgICAgIHBhcmFtczogcGFyYW1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEucGFnaW5hdGlvbjtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSByZXMuZGF0YS5wYWdpbmF0aW9uLmRhdGE7XG4gICAgICAgIHRoaXMud2Vla19maXJzdF9kYXkgPSByZXMuZGF0YS5mcm9tO1xuICAgICAgICB0aGlzLndlZWtfbGFzdF9kYXkgPSByZXMuZGF0YS50bztcbiAgICAgICAgLy8gdGhpcy53ZWVrX2RhdGUgPSByZXMuZGF0YS5kYXRlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRNb250aGx5RGF0YShwYXJhbSkge1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCIvYXBpL2FkbWluL29yZGVycy9tb250aGx5XCIsXG4gICAgICAgIHBhcmFtczogcGFyYW1cbiAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEucGFnaW5hdGlvbjtcbiAgICAgICAgdGhpcy5vcmRlcnMgPSByZXMuZGF0YS5wYWdpbmF0aW9uLmRhdGE7XG4gICAgICAgIC8vIHRoaXMubW9udGhfZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgYnRuU2VhcmNoKCkge1xuICAgICAgdGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaF9pbnB1dDtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH1cbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYnRuLXN1Y2Nlc3Mge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1zdWNjZXNzW2RhdGEtdi04NDI4YTQxMF0ge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NDI4YTQxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAgbWItM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaF9pbnB1dCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaF9pbnB1dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoX2lucHV0IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5idG5TZWFyY2goKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaF9pbnB1dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJ0blNlYXJjaCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VhcmNoXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsdGVyYnksXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWx0ZXJieVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBfdm0uZmlsdGVyYnkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5maWx0ZXJTZWxlY3Rpb25DaGFuZ2VcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJhbGxcIiB9IH0sIFtfdm0uX3YoXCJEZWZhdWx0XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJ3ZWVrbHlcIiB9IH0sIFtfdm0uX3YoXCJXZWVrbHlcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIm1vbnRobHlcIiB9IH0sIFtfdm0uX3YoXCJNb250aGx5XCIpXSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIixcbiAgICAgICAgICBjbGFzczogX3ZtLmZpbHRlcmJ5ID09IFwid2Vla2x5XCIgPyBcImQtYmxvY2tcIiA6IFwiZC1ub25lXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRhdGUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwid2Vla19kYXRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImRhdGUtdGltZS1pbnB1dC13ZWVrXCIsXG4gICAgICAgICAgICAgICAgICB3cmFwOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY29uZmlnOiBfdm0ub3B0aW9uX3dlZWtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IFwiZHAtY2hhbmdlXCI6IF92bS5maWx0ZXJCeVdlZWsgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS53ZWVrX2RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS53ZWVrX2RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIndlZWtfZGF0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1tZC0zXCIsXG4gICAgICAgICAgY2xhc3M6IF92bS5maWx0ZXJieSA9PSBcIm1vbnRobHlcIiA/IFwiZC1ibG9ja1wiIDogXCJkLW5vbmVcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJtb250aF9kYXRlXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcImRhdGUtdGltZS1pbnB1dC1tb250aFwiLFxuICAgICAgICAgICAgICAgICAgd3JhcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvbmZpZzogX3ZtLm9wdGlvbl9tb250aFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgXCJkcC1jaGFuZ2VcIjogX3ZtLmZpbHRlckJ5TW9udGggfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tb250aF9kYXRlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0ubW9udGhfZGF0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9udGhfZGF0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpbHRlcmJ5ID09IFwid2Vla2x5XCJcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS53ZWVrX2ZpcnN0X2RheSkgK1xuICAgICAgICAgICAgICAgICAgXCIgLSBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLndlZWtfbGFzdF9kYXkpICtcbiAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmlsdGVyYnkgPT0gXCJtb250aGx5XCJcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIihcIiArIF92bS5fcyhfdm0ubW9udGhfZGF0ZSkgKyBcIilcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTggY29sLW1kLThcIiB9LCBbXG4gICAgICAgIF92bS5vcmRlcnMubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtfYyhcImg0XCIsIFtfdm0uX3YoXCJObyBPcmRlcnMgWWV0XCIpXSldKVxuICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwIHJvdW5kZWQtMFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5vcmRlcnMsIGZ1bmN0aW9uKG9yZGVyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXIub3JkZXJfYnkgIT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9yZGVyLnVzZXIuYXRyX2ltYWdlX2xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvcmRlci5yZXRhaWxlci5hdHJfaW1hZ2VfbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTI1IG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLm9yZGVyX2J5ICE9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyLnVzZXIuZnVsbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKG9yZGVyLnJldGFpbGVyLmZ1bGxfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlci5vcmRlcl9ieSA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihSZXRhaWxlcilcIildKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMjBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKG9yZGVyLmF0cl9vdmVyYWxsX3RvdGFsX2YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtbC1hdXRvIHctMjUgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiT3JkZXIgTm8uIFwiICsgX3ZtLl9zKG9yZGVyLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcmRlci5hdHJfZGF0ZV9sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9vcmRlcnMvXCIgKyBvcmRlci5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlldyBPcmRlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDMpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtfdm0uX3YoXCJPcmRlcnNcIildKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB0aXRsZTogXCJUb2dnbGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXJcIiB9KV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtNVwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiNDAwcHhcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiUXVpY2sgRGV0YWlsc1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc3luYy1hbHQgdGV4dC1zdWNjZXNzXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIDEgb3JkZXJzXFxuICAgICAgICAgIFwiKSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkF3YWl0aW5nIFByb2Nlc3NcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBhdXNlIHRleHQtd2FybmluZ1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxIG9yZGVyc1xcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnlcIiB9LCBbX3ZtLl92KFwiT24gSG9sZFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdHJ1Y2stcGlja3VwIHRleHQtaW5mb1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAxIG9yZGVyc1xcbiAgICAgICAgICBcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnlcIiB9LCBbX3ZtLl92KFwiT24gUmVhZHlcIildKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0MjhhNDEwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODQyOGE0MTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4NDI4YTQxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4NDI4YTQxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4NDI4YTQxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0MjhhNDEwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg0MjhhNDEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NDI4YTQxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODQyOGE0MTAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9