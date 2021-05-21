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

      },
      json_fields: {
        "Order ID": "id",
        "Order Date": "atr_date_label",
        "Customer Name": {
          field: "user",
          callback: function callback(value) {
            return value.full_name;
          }
        },
        "Customer Phone": {
          field: "user",
          callback: function callback(value) {
            return "(".concat(value.contact_number_type, ") ").concat(value.contact_number);
          }
        },
        "Customer Address": "user.atr_full_address2",
        "Order Cost": "atr_subscription_overall_total_amount_f",
        "School/Parish ID": "organization.org_optionc_id",
        "Delivery Method": {
          field: "is_pickup",
          callback: function callback(value) {
            if (value == 1) {
              return "Pick-up";
            } else {
              return "Deliver";
            }
          }
        },
        "Delivery Fee": "delivery_fee",
        // Address: "atr_del_pick_addresss",
        Products: {
          field: "order_products",
          callback: function callback(value) {
            var str = "";

            if (value) {
              var arr = value;
              arr.forEach(function (element) {
                str = str + "(sku:".concat(element.atr_product_details.sku, ") ").concat(element.atr_product_details.name, " -  qty: ").concat(element.updated_quantity, "/").concat(element.atr_product_details.unit, " ~~~~ \n");
              });
            }

            return str;
          }
        }
      }
    };
  },
  created: function created() {
    // this.getResults();
    this.getAllDataInitialize();
  },
  mounted: function mounted() {// $(document).ready(function () {
    // 	$("#customers-table").DataTable({
    // 		lengthMenu: [
    // 			[10, 25, 50, -1],
    // 			[10, 25, 50, "All"],
    // 		],
    // 		iDisplayLength: -1,
    // 	});
    // });
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
    getAllDataInitialize: function getAllDataInitialize() {
      var _this = this;

      var param = {
        page: 1
      };
      axios({
        method: "get",
        url: "/api/admin/orders",
        params: param
      }).then(function (res) {
        _this.data = res.data;
        _this.orders = res.data.data;
        $(document).ready(function () {
          $("#customers-table").DataTable({
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
            iDisplayLength: -1,
            order: [[0, "desc"]]
          });
        });
      });
    },
    getAllData: function getAllData(param) {
      var _this2 = this;

      axios({
        method: "get",
        url: "/api/admin/orders",
        params: param
      }).then(function (res) {
        _this2.data = res.data;
        _this2.orders = res.data.data;
      });
    },
    getWeeklyData: function getWeeklyData(param) {
      var _this3 = this;

      axios({
        method: "get",
        url: "/api/admin/orders/weekly",
        params: param
      }).then(function (res) {
        _this3.data = res.data.pagination;
        _this3.orders = res.data.pagination.data;
        _this3.week_first_day = res.data.from;
        _this3.week_last_day = res.data.to; // this.week_date = res.data.date;
      });
    },
    getMonthlyData: function getMonthlyData(param) {
      var _this4 = this;

      axios({
        method: "get",
        url: "/api/admin/orders/monthly",
        params: param
      }).then(function (res) {
        _this4.data = res.data.pagination;
        _this4.orders = res.data.pagination.data; // this.month_date = res.data.date;
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "h2",
          { staticClass: "card-title mb-0" },
          [
            _vm._v("\n\t\t\t\tOrders\n\t\t\t\t"),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mx-1",
                attrs: {
                  header: ["Orders"],
                  fields: _vm.json_fields,
                  data: _vm.orders,
                  type: "xls",
                  name: "orders.xls",
                  worksheet: "Orders"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-excel" }),
                _vm._v("\n\t\t\t\t\tXLS\n\t\t\t\t")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mx-1",
                attrs: {
                  header: ["Orders"],
                  fields: _vm.json_fields,
                  data: _vm.orders,
                  type: "csv",
                  name: "orders.xls",
                  worksheet: "Orders"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-csv" }),
                _vm._v("\n\t\t\t\t\tCSV\n\t\t\t\t")
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ]),
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
              [_vm._v("\n\t\t\t\t\t\tSearch\n\t\t\t\t\t")]
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
              _vm._m(0)
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
              _vm._m(1)
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
    _c(
      "div",
      {
        staticClass: "row mt-4",
        staticStyle: { "font-family": "Source Sans Pro, sans-serif !important" }
      },
      [
        _c("div", { staticClass: "col-lg-12 col-md-12" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover",
              attrs: { id: "customers-table" }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.orders, function(order, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(order.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(order.atr_date_label))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(order.user.full_name))]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t$ " +
                          _vm._s(
                            order.atr_subscription_overall_total_amount_f
                          ) +
                          "\n\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(order.atr_del_pick_addresss))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-success",
                          attrs: { href: "/admin/orders/" + order.id }
                        },
                        [_vm._v("View Order")]
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]
    )
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
        _c("th", [_vm._v("Order ID#")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Customer")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order Cost")]),
        _vm._v(" "),
        _c("th", [_vm._v("Address")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT9mZGNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT9jMWQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZT8wMzA2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/MjJmZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/ZTAzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9pbmRleC52dWU/Yzc2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMktBO0FBQ0Esd0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGNBRkE7QUFHQSxnQkFIQTtBQUlBLHNCQUpBO0FBS0EscUJBTEE7QUFNQSxxQkFOQTtBQU9BLDBCQVBBO0FBUUEseUJBUkE7QUFTQSxz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QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM1dBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQTBjLENBQWdCLDJiQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL09yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XG5cdFx0XHRcdFx0T3JkZXJzXG5cdFx0XHRcdFx0PGRvd25sb2FkLWV4Y2VsXG5cdFx0XHRcdFx0XHQ6aGVhZGVyPVwiW2BPcmRlcnNgXVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBteC0xXCJcblx0XHRcdFx0XHRcdDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG5cdFx0XHRcdFx0XHQ6ZGF0YT1cIm9yZGVyc1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwieGxzXCJcblx0XHRcdFx0XHRcdDpuYW1lPVwiYG9yZGVycy54bHNgXCJcblx0XHRcdFx0XHRcdDp3b3Jrc2hlZXQ9XCJgT3JkZXJzYFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1leGNlbFwiPjwvaT5cblx0XHRcdFx0XHRcdFhMU1xuXHRcdFx0XHRcdDwvZG93bmxvYWQtZXhjZWw+XG5cdFx0XHRcdFx0PGRvd25sb2FkLWV4Y2VsXG5cdFx0XHRcdFx0XHQ6aGVhZGVyPVwiW2BPcmRlcnNgXVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBteC0xXCJcblx0XHRcdFx0XHRcdDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG5cdFx0XHRcdFx0XHQ6ZGF0YT1cIm9yZGVyc1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwiY3N2XCJcblx0XHRcdFx0XHRcdDpuYW1lPVwiYG9yZGVycy54bHNgXCJcblx0XHRcdFx0XHRcdDp3b3Jrc2hlZXQ9XCJgT3JkZXJzYFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XG5cdFx0XHRcdFx0XHRDU1Zcblx0XHRcdFx0XHQ8L2Rvd25sb2FkLWV4Y2VsPlxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8YnIgLz5cblx0XHQ8YnIgLz5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIG1iLTNcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWFyY2hfaW5wdXRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcblx0XHRcdFx0XHRcdHYtb246a2V5dXAuZW50ZXI9XCJidG5TZWFyY2goKVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHJvdW5kZWQtMFwiXG5cdFx0XHRcdFx0XHRcdEBjbGljaz1cImJ0blNlYXJjaCgpXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0U2VhcmNoXG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8IS0tIGZpbHRlciAtLT5cblx0XHQ8ZGl2IGNsYXNzPVwicm93IG10LTNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxuXHRcdFx0XHQ8c2VsZWN0XG5cdFx0XHRcdFx0di1tb2RlbD1cImZpbHRlcmJ5XCJcblx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0QGNoYW5nZT1cImZpbHRlclNlbGVjdGlvbkNoYW5nZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwiYWxsXCI+RGVmYXVsdDwvb3B0aW9uPlxuXHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJ3ZWVrbHlcIj5XZWVrbHk8L29wdGlvbj5cblx0XHRcdFx0XHQ8b3B0aW9uIHZhbHVlPVwibW9udGhseVwiPk1vbnRobHk8L29wdGlvbj5cblx0XHRcdFx0PC9zZWxlY3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0OmNsYXNzPVwiZmlsdGVyYnkgPT0gJ3dlZWtseScgPyAnZC1ibG9jaycgOiAnZC1ub25lJ1wiXG5cdFx0XHRcdGNsYXNzPVwiY29sLW1kLTNcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cblx0XHRcdFx0XHQ8ZGF0ZS1waWNrZXJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJ3ZWVrX2RhdGVcIlxuXHRcdFx0XHRcdFx0aWQ9XCJkYXRlLXRpbWUtaW5wdXQtd2Vla1wiXG5cdFx0XHRcdFx0XHQ6d3JhcD1cInRydWVcIlxuXHRcdFx0XHRcdFx0OmNvbmZpZz1cIm9wdGlvbl93ZWVrXCJcblx0XHRcdFx0XHRcdHJlZj1cIndlZWtfZGF0ZVwiXG5cdFx0XHRcdFx0XHRAZHAtY2hhbmdlPVwiZmlsdGVyQnlXZWVrXCJcblx0XHRcdFx0XHQ+PC9kYXRlLXBpY2tlcj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlRvZ2dsZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXZcblx0XHRcdFx0OmNsYXNzPVwiZmlsdGVyYnkgPT0gJ21vbnRobHknID8gJ2QtYmxvY2snIDogJ2Qtbm9uZSdcIlxuXHRcdFx0XHRjbGFzcz1cImNvbC1tZC0zXCJcblx0XHRcdD5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG5cdFx0XHRcdFx0PGRhdGUtcGlja2VyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwibW9udGhfZGF0ZVwiXG5cdFx0XHRcdFx0XHRpZD1cImRhdGUtdGltZS1pbnB1dC1tb250aFwiXG5cdFx0XHRcdFx0XHQ6d3JhcD1cInRydWVcIlxuXHRcdFx0XHRcdFx0OmNvbmZpZz1cIm9wdGlvbl9tb250aFwiXG5cdFx0XHRcdFx0XHRyZWY9XCJtb250aF9kYXRlXCJcblx0XHRcdFx0XHRcdEBkcC1jaGFuZ2U9XCJmaWx0ZXJCeU1vbnRoXCJcblx0XHRcdFx0XHQ+PC9kYXRlLXBpY2tlcj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIlRvZ2dsZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFyIGZhLWNhbGVuZGFyXCI+PC9pPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiB2LWlmPVwiZmlsdGVyYnkgPT0gJ3dlZWtseSdcIiBjbGFzcz1cInJvdyBtdC0zXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCI+XG5cdFx0XHRcdDxoNT4oe3sgd2Vla19maXJzdF9kYXkgfX0gLSB7eyB3ZWVrX2xhc3RfZGF5IH19KTwvaDU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IHYtaWY9XCJmaWx0ZXJieSA9PSAnbW9udGhseSdcIiBjbGFzcz1cInJvdyBtdC0zXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCI+XG5cdFx0XHRcdDxoNT4oe3sgbW9udGhfZGF0ZSB9fSk8L2g1PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cInJvdyBtdC00XCJcblx0XHRcdHN0eWxlPVwiZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuXHRcdFx0XHQ8dGFibGUgaWQ9XCJjdXN0b21lcnMtdGFibGVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+T3JkZXIgSUQjPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPk9yZGVyIERhdGU8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+Q3VzdG9tZXI8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+T3JkZXIgQ29zdDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD5BZGRyZXNzPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbnM8L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0ciB2LWZvcj1cIihvcmRlciwgaW5kZXgpIGluIG9yZGVyc1wiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgb3JkZXIuaWQgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgb3JkZXIuYXRyX2RhdGVfbGFiZWwgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgb3JkZXIudXNlci5mdWxsX25hbWUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0JCB7eyBvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2YgfX1cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt7IG9yZGVyLmF0cl9kZWxfcGlja19hZGRyZXNzcyB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0OmhyZWY9XCInL2FkbWluL29yZGVycy8nICsgb3JkZXIuaWRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5WaWV3IE9yZGVyPC9hXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRwcm9wczogW1wicHJvcHNvcmRlcnNcIl0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9yZGVyczogW10sXG5cdFx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0XHRzZWFyY2g6IFwiXCIsXG5cdFx0XHRcdHNlYXJjaF9pbnB1dDogXCJcIixcblx0XHRcdFx0ZmlsdGVyYnk6IFwiYWxsXCIsXG5cdFx0XHRcdHdlZWtfZGF0ZTogbnVsbCxcblx0XHRcdFx0d2Vla19maXJzdF9kYXk6IG51bGwsXG5cdFx0XHRcdHdlZWtfbGFzdF9kYXk6IG51bGwsXG5cdFx0XHRcdG1vbnRoX2RhdGU6IG51bGwsXG5cdFx0XHRcdG9wdGlvbl93ZWVrOiB7XG5cdFx0XHRcdFx0Zm9ybWF0OiBcIk1NTU0gREQsIFlZWVlcIixcblx0XHRcdFx0XHR1c2VDdXJyZW50OiB0cnVlLFxuXHRcdFx0XHRcdGFsbG93SW5wdXRUb2dnbGU6IHRydWUsXG5cdFx0XHRcdFx0bWF4RGF0ZTogbW9tZW50KCksXG5cdFx0XHRcdFx0Ly8gc2hvd1RvZGF5QnV0dG9uIDogdHJ1ZSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b3B0aW9uX21vbnRoOiB7XG5cdFx0XHRcdFx0Zm9ybWF0OiBcIk1NTU0gWVlZWVwiLFxuXHRcdFx0XHRcdHVzZUN1cnJlbnQ6IHRydWUsXG5cdFx0XHRcdFx0YWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcblx0XHRcdFx0XHRtYXhEYXRlOiBtb21lbnQoKSxcblx0XHRcdFx0XHQvLyBzaG93VG9kYXlCdXR0b24gOiB0cnVlLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRqc29uX2ZpZWxkczoge1xuXHRcdFx0XHRcdFwiT3JkZXIgSURcIjogXCJpZFwiLFxuXHRcdFx0XHRcdFwiT3JkZXIgRGF0ZVwiOiBcImF0cl9kYXRlX2xhYmVsXCIsXG5cdFx0XHRcdFx0XCJDdXN0b21lciBOYW1lXCI6IHtcblx0XHRcdFx0XHRcdGZpZWxkOiBcInVzZXJcIixcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlLmZ1bGxfbmFtZTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcbiAgICAgICAgICAgICAgICAgICAgXCJDdXN0b21lciBQaG9uZVwiOiB7XG5cdFx0XHRcdFx0XHRmaWVsZDogXCJ1c2VyXCIsXG5cdFx0XHRcdFx0XHRjYWxsYmFjazogKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBgKCR7dmFsdWUuY29udGFjdF9udW1iZXJfdHlwZX0pICR7dmFsdWUuY29udGFjdF9udW1iZXJ9YDtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcbiAgICAgICAgICAgICAgICAgICAgXCJDdXN0b21lciBBZGRyZXNzXCI6XCJ1c2VyLmF0cl9mdWxsX2FkZHJlc3MyXCIsXG5cdFx0XHRcdFx0XCJPcmRlciBDb3N0XCI6IFwiYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mXCIsXG5cdFx0XHRcdFx0XCJTY2hvb2wvUGFyaXNoIElEXCI6IFwib3JnYW5pemF0aW9uLm9yZ19vcHRpb25jX2lkXCIsXG5cdFx0XHRcdFx0XCJEZWxpdmVyeSBNZXRob2RcIjoge1xuXHRcdFx0XHRcdFx0ZmllbGQ6IFwiaXNfcGlja3VwXCIsXG5cdFx0XHRcdFx0XHRjYWxsYmFjazogKHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA9PSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFwiUGljay11cFwiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBcIkRlbGl2ZXJcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuICAgICAgICAgICAgICAgICAgICBcIkRlbGl2ZXJ5IEZlZVwiOiBcImRlbGl2ZXJ5X2ZlZVwiLFxuXHRcdFx0XHRcdC8vIEFkZHJlc3M6IFwiYXRyX2RlbF9waWNrX2FkZHJlc3NzXCIsXG5cblx0XHRcdFx0XHRQcm9kdWN0czoge1xuXHRcdFx0XHRcdFx0ZmllbGQ6IFwib3JkZXJfcHJvZHVjdHNcIixcblx0XHRcdFx0XHRcdGNhbGxiYWNrOiAodmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFyIHN0ciA9IFwiXCI7XG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBhcnIgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdFx0XHRhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3RyID1cblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RyICtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YChza3U6JHtlbGVtZW50LmF0cl9wcm9kdWN0X2RldGFpbHMuc2t1fSkgJHtlbGVtZW50LmF0cl9wcm9kdWN0X2RldGFpbHMubmFtZX0gLSAgcXR5OiAke2VsZW1lbnQudXBkYXRlZF9xdWFudGl0eX0vJHtlbGVtZW50LmF0cl9wcm9kdWN0X2RldGFpbHMudW5pdH0gfn5+fiBcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzdHI7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0Ly8gdGhpcy5nZXRSZXN1bHRzKCk7XG5cdFx0XHR0aGlzLmdldEFsbERhdGFJbml0aWFsaXplKCk7XG5cdFx0fSxcblx0XHRtb3VudGVkKCkge1xuXHRcdFx0Ly8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gXHQkKFwiI2N1c3RvbWVycy10YWJsZVwiKS5EYXRhVGFibGUoe1xuXHRcdFx0Ly8gXHRcdGxlbmd0aE1lbnU6IFtcblx0XHRcdC8vIFx0XHRcdFsxMCwgMjUsIDUwLCAtMV0sXG5cdFx0XHQvLyBcdFx0XHRbMTAsIDI1LCA1MCwgXCJBbGxcIl0sXG5cdFx0XHQvLyBcdFx0XSxcblx0XHRcdC8vIFx0XHRpRGlzcGxheUxlbmd0aDogLTEsXG5cdFx0XHQvLyBcdH0pO1xuXHRcdFx0Ly8gfSk7XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGZpbHRlclNlbGVjdGlvbkNoYW5nZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMuZmlsdGVyYnkgPT0gXCJhbGxcIikge1xuXHRcdFx0XHRcdHRoaXMud2Vla19kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBERCwgWVlZWVwiKTtcblx0XHRcdFx0XHR0aGlzLm1vbnRoX2RhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJNTU1NIFlZWVlcIik7XG5cdFx0XHRcdFx0dGhpcy5nZXRSZXN1bHRzKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5maWx0ZXJieSA9PSBcIndlZWtseVwiKSB7XG5cdFx0XHRcdFx0dGhpcy53ZWVrX2RhdGUgPSBtb21lbnQoKS5mb3JtYXQoXCJNTU1NIERELCBZWVlZXCIpO1xuXHRcdFx0XHRcdHRoaXMubW9udGhfZGF0ZSA9IG1vbWVudCgpLmZvcm1hdChcIk1NTU0gWVlZWVwiKTtcblx0XHRcdFx0XHR0aGlzLmdldFJlc3VsdHMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmZpbHRlcmJ5ID09IFwibW9udGhseVwiKSB7XG5cdFx0XHRcdFx0dGhpcy5tb250aF9kYXRlID0gbW9tZW50KCkuZm9ybWF0KFwiTU1NTSBZWVlZXCIpO1xuXHRcdFx0XHRcdHRoaXMuZ2V0UmVzdWx0cygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZmlsdGVyQnlNb250aCgpIHtcblx0XHRcdFx0Ly8gICBjb25zb2xlLmxvZyhcIm95ZWUgbW9udGhcIik7XG5cdFx0XHRcdHRoaXMuZ2V0UmVzdWx0cygpO1xuXHRcdFx0fSxcblx0XHRcdGZpbHRlckJ5V2VlaygpIHtcblx0XHRcdFx0Ly8gICBjb25zb2xlLmxvZyhcIm95ZWUgd2Vla1wiKTtcblx0XHRcdFx0dGhpcy5nZXRSZXN1bHRzKCk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0UmVzdWx0cyhwYWdlID0gMSkge1xuXHRcdFx0XHRsZXQgcGFyYW07XG5cdFx0XHRcdGlmICh0aGlzLmZpbHRlcmJ5ID09IFwiYWxsXCIpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5zZWFyY2ggIT0gXCJcIikge1xuXHRcdFx0XHRcdFx0cGFyYW0gPSB7XG5cdFx0XHRcdFx0XHRcdHNlYXJjaDogdGhpcy5zZWFyY2gsXG5cdFx0XHRcdFx0XHRcdHBhZ2U6IHBhZ2UsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXJhbSA9IHtcblx0XHRcdFx0XHRcdFx0cGFnZTogcGFnZSxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuZ2V0QWxsRGF0YShwYXJhbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZmlsdGVyYnkgPT0gXCJ3ZWVrbHlcIikge1xuXHRcdFx0XHRcdHBhcmFtID0ge1xuXHRcdFx0XHRcdFx0cGFnZTogcGFnZSxcblx0XHRcdFx0XHRcdHNlYXJjaDogdGhpcy5zZWFyY2gsXG5cdFx0XHRcdFx0XHRkYXRlOiB0aGlzLndlZWtfZGF0ZSxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHRoaXMuZ2V0V2Vla2x5RGF0YShwYXJhbSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZmlsdGVyYnkgPT0gXCJtb250aGx5XCIpIHtcblx0XHRcdFx0XHRwYXJhbSA9IHtcblx0XHRcdFx0XHRcdHBhZ2U6IHBhZ2UsXG5cdFx0XHRcdFx0XHRzZWFyY2g6IHRoaXMuc2VhcmNoLFxuXHRcdFx0XHRcdFx0ZGF0ZTogdGhpcy5tb250aF9kYXRlLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5tb250aF9kYXRlKTtcblx0XHRcdFx0XHR0aGlzLmdldE1vbnRobHlEYXRhKHBhcmFtKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0QWxsRGF0YUluaXRpYWxpemUoKSB7XG5cdFx0XHRcdHZhciBwYXJhbSA9IHtcblx0XHRcdFx0XHRwYWdlOiAxLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRheGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxuXHRcdFx0XHRcdHVybDogXCIvYXBpL2FkbWluL29yZGVyc1wiLFxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW0sXG5cdFx0XHRcdH0pLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdHRoaXMub3JkZXJzID0gcmVzLmRhdGEuZGF0YTtcblxuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdCQoXCIjY3VzdG9tZXJzLXRhYmxlXCIpLkRhdGFUYWJsZSh7XG5cdFx0XHRcdFx0XHRcdGxlbmd0aE1lbnU6IFtcblx0XHRcdFx0XHRcdFx0XHRbMTAsIDI1LCA1MCwgLTFdLFxuXHRcdFx0XHRcdFx0XHRcdFsxMCwgMjUsIDUwLCBcIkFsbFwiXSxcblx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0aURpc3BsYXlMZW5ndGg6IC0xLFxuXHRcdFx0XHRcdFx0XHRvcmRlcjogW1swLCBcImRlc2NcIl1dLFxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0QWxsRGF0YShwYXJhbSkge1xuXHRcdFx0XHRheGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxuXHRcdFx0XHRcdHVybDogXCIvYXBpL2FkbWluL29yZGVyc1wiLFxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW0sXG5cdFx0XHRcdH0pLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdHRoaXMub3JkZXJzID0gcmVzLmRhdGEuZGF0YTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0V2Vla2x5RGF0YShwYXJhbSkge1xuXHRcdFx0XHRheGlvcyh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxuXHRcdFx0XHRcdHVybDogXCIvYXBpL2FkbWluL29yZGVycy93ZWVrbHlcIixcblx0XHRcdFx0XHRwYXJhbXM6IHBhcmFtLFxuXHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmRhdGEgPSByZXMuZGF0YS5wYWdpbmF0aW9uO1xuXHRcdFx0XHRcdHRoaXMub3JkZXJzID0gcmVzLmRhdGEucGFnaW5hdGlvbi5kYXRhO1xuXHRcdFx0XHRcdHRoaXMud2Vla19maXJzdF9kYXkgPSByZXMuZGF0YS5mcm9tO1xuXHRcdFx0XHRcdHRoaXMud2Vla19sYXN0X2RheSA9IHJlcy5kYXRhLnRvO1xuXHRcdFx0XHRcdC8vIHRoaXMud2Vla19kYXRlID0gcmVzLmRhdGEuZGF0ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0TW9udGhseURhdGEocGFyYW0pIHtcblx0XHRcdFx0YXhpb3Moe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcblx0XHRcdFx0XHR1cmw6IFwiL2FwaS9hZG1pbi9vcmRlcnMvbW9udGhseVwiLFxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW0sXG5cdFx0XHRcdH0pLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZGF0YSA9IHJlcy5kYXRhLnBhZ2luYXRpb247XG5cdFx0XHRcdFx0dGhpcy5vcmRlcnMgPSByZXMuZGF0YS5wYWdpbmF0aW9uLmRhdGE7XG5cdFx0XHRcdFx0Ly8gdGhpcy5tb250aF9kYXRlID0gcmVzLmRhdGEuZGF0ZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRidG5TZWFyY2goKSB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hfaW5wdXQ7XG5cdFx0XHRcdHRoaXMuZ2V0UmVzdWx0cygpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0LmJ0bi1zdWNjZXNzIHtcblx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcblx0XHRib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcblx0fVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1zdWNjZXNzW2RhdGEtdi04NDI4YTQxMF0ge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NDI4YTQxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg0MjhhNDEwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImgyXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdE9yZGVyc1xcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXgtMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBoZWFkZXI6IFtcIk9yZGVyc1wiXSxcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLm9yZGVycyxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm9yZGVycy54bHNcIixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJPcmRlcnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWV4Y2VsXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0WExTXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBteC0xXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjogW1wiT3JkZXJzXCJdLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0ub3JkZXJzLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwib3JkZXJzLnhsc1wiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIk9yZGVyc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0Q1NWXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoX2lucHV0LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoX2lucHV0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTZWFyY2hcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hfaW5wdXQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJ0blNlYXJjaCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoX2lucHV0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYnRuU2VhcmNoKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRTZWFyY2hcXG5cXHRcXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWx0ZXJieSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbHRlcmJ5XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF92bS5maWx0ZXJieSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLmZpbHRlclNlbGVjdGlvbkNoYW5nZVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcImFsbFwiIH0gfSwgW192bS5fdihcIkRlZmF1bHRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIndlZWtseVwiIH0gfSwgW192bS5fdihcIldlZWtseVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwibW9udGhseVwiIH0gfSwgW192bS5fdihcIk1vbnRobHlcIildKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtbWQtM1wiLFxuICAgICAgICAgIGNsYXNzOiBfdm0uZmlsdGVyYnkgPT0gXCJ3ZWVrbHlcIiA/IFwiZC1ibG9ja1wiIDogXCJkLW5vbmVcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ3ZWVrX2RhdGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS10aW1lLWlucHV0LXdlZWtcIixcbiAgICAgICAgICAgICAgICAgIHdyYXA6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjb25maWc6IF92bS5vcHRpb25fd2Vla1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgXCJkcC1jaGFuZ2VcIjogX3ZtLmZpbHRlckJ5V2VlayB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLndlZWtfZGF0ZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLndlZWtfZGF0ZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwid2Vla19kYXRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTNcIixcbiAgICAgICAgICBjbGFzczogX3ZtLmZpbHRlcmJ5ID09IFwibW9udGhseVwiID8gXCJkLWJsb2NrXCIgOiBcImQtbm9uZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcIm1vbnRoX2RhdGVcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiZGF0ZS10aW1lLWlucHV0LW1vbnRoXCIsXG4gICAgICAgICAgICAgICAgICB3cmFwOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY29uZmlnOiBfdm0ub3B0aW9uX21vbnRoXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBcImRwLWNoYW5nZVwiOiBfdm0uZmlsdGVyQnlNb250aCB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1vbnRoX2RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5tb250aF9kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb250aF9kYXRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmlsdGVyYnkgPT0gXCJ3ZWVrbHlcIlxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLndlZWtfZmlyc3RfZGF5KSArXG4gICAgICAgICAgICAgICAgICBcIiAtIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ud2Vla19sYXN0X2RheSkgK1xuICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWx0ZXJieSA9PSBcIm1vbnRobHlcIlxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKF92bS5tb250aF9kYXRlKSArIFwiKVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBtdC00XCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1mYW1pbHlcIjogXCJTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY3VzdG9tZXJzLXRhYmxlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5vcmRlcnMsIGZ1bmN0aW9uKG9yZGVyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhvcmRlci5pZCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Mob3JkZXIuYXRyX2RhdGVfbGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKG9yZGVyLnVzZXIuZnVsbF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyLmF0cl9zdWJzY3JpcHRpb25fb3ZlcmFsbF90b3RhbF9hbW91bnRfZlxuICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3Mob3JkZXIuYXRyX2RlbF9waWNrX2FkZHJlc3NzKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9vcmRlcnMvXCIgKyBvcmRlci5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlZpZXcgT3JkZXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB0aXRsZTogXCJUb2dnbGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXJcIiB9KV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgZGF0ZXBpY2tlcmJ1dHRvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIHRpdGxlOiBcIlRvZ2dsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS1jYWxlbmRhclwiIH0pXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZGVyIElEI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJPcmRlciBEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkN1c3RvbWVyXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZGVyIENvc3RcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25zXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NDI4YTQxMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NDI4YTQxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjg0MjhhNDEwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODQyOGE0MTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODQyOGE0MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODQyOGE0MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NDI4YTQxMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NDI4YTQxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODQyOGE0MTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NDI4YTQxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg0MjhhNDEwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==