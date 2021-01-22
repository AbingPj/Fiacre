(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Customer"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propscustomers"],
  data: function data() {
    return {
      customers: [],
      perPage: 5,
      currentPage: 1,
      searchedCustomers: [],
      search: "",
      json_fields: {
        "Customer Name": "full_name",
        "Email": "email",
        "Member Type": "atr_customer_role",
        "Sunclub Prepaid Balance": "balance",
        "Email Confirmed": {
          field: 'confirmed',
          callback: function callback(value) {
            if (value == true) {
              return "Yes";
            } else {
              return "No";
            }
          }
        },
        "Sign-up Since": "created_at_label"
      }
    };
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $('#customers-table').DataTable({
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        iDisplayLength: -1
      });
    });
  },
  created: function created() {
    this.customers = this.propscustomers;
    console.log(this.customers);
    this.searchedCustomers = this.customers;
  },
  methods: {
    isConfirmed: function isConfirmed(data) {
      return data ? 'YES' : 'NO';
    },
    viewCustomer: function viewCustomer(link) {
      LoadingOverlay();
      window.location.href = link;
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    btnSearch: function btnSearch() {
      //   people.filter(p => p.dinner == "sushi");
      //   let products = this.products;
      var query = this.search.toLowerCase();
      var heystack = this.customers;
      var searched = heystack.filter(function (item) {
        return item.first_name.toLowerCase().indexOf(query) >= 0 || item.last_name.toLowerCase().indexOf(query) >= 0;
      });
      this.searchedCustomers = searched;
    },
    numberOfNewUser: function numberOfNewUser() {
      //   var OneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
      var OneDay = new Date().getTime();
      var count = 0;
      this.customers.forEach(function (element) {
        if (element["new"] == 1) {
          count = count + 1;
        }
      });
      return count;
    }
  },
  computed: {
    loadlist: function loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      var allorders = this.searchedCustomers;
      var pageList = allorders.slice(begin, end);
      return pageList;
    },
    rows: function rows() {
      return this.searchedCustomers.length;
    }
  } // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-806b1810] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-6" },
        [
          _c(
            "download-excel",
            {
              staticClass: "btn btn-success float-right mr-2",
              attrs: {
                fields: _vm.json_fields,
                data: _vm.propscustomers,
                type: "xls",
                name: "customers.xls",
                worksheet: "Customers"
              }
            },
            [
              _c("i", { staticClass: "fas fa-file-excel" }),
              _vm._v("\n        XLS\n      ")
            ]
          ),
          _vm._v(" "),
          _c(
            "download-excel",
            {
              staticClass: "btn btn-success float-right mr-2",
              attrs: {
                fields: _vm.json_fields,
                data: _vm.propscustomers,
                type: "csv",
                name: "customers.csv",
                worksheet: "Customers"
              }
            },
            [
              _c("i", { staticClass: "fas fa-file-csv" }),
              _vm._v("\n        CSV\n      ")
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row mt-4",
        staticStyle: { "font-family": "Source Sans Pro,sans-serif!important" }
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
                _vm._l(_vm.propscustomers, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _vm._v(_vm._s(item.full_name) + "\n              "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticStyle: { "font-size": "10px" } }, [
                        _vm._v("(" + _vm._s(item.email) + ")")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        {
                          class:
                            item.customer_role == 2
                              ? "badge badge-success"
                              : item.customer_role == 3
                              ? "badge badge-primary"
                              : "badge badge-secondary"
                        },
                        [
                          _vm._v(
                            "\n\n                " +
                              _vm._s(item.atr_customer_role) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      item.customer_role == 2
                        ? _c("div", [
                            _c(
                              "b",
                              { staticClass: "text-success text-right" },
                              [
                                _vm._v(
                                  "$ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.balance)
                                    )
                                )
                              ]
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "span",
                        {
                          class: item.confirmed
                            ? "badge badge-success"
                            : "badge badge-secondary"
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.isConfirmed(item.confirmed)) +
                              "\n              "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.created_at_label))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: {
                            disabled: item.customer_role == 1,
                            type: "button"
                          },
                          on: {
                            click: function($event) {
                              return _vm.viewCustomer(
                                "/admin/customers/" + item.id
                              )
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "far fa-eye mr-2" }),
                          _vm._v("View Profile")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-success",
                          attrs: {
                            href:
                              "/admin/reports/orders-by-customers/" +
                              item.id +
                              "/" +
                              item.full_name
                          }
                        },
                        [_vm._v("Orders")]
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
    return _c("div", { staticClass: "col-md-6" }, [
      _c("h2", { staticClass: "card-title mb-0" }, [_vm._v("Customers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Customer Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Member Type")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "120px" } }, [
          _vm._v("Sunclub Prepaid Balance")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "50px" } }, [
          _vm._v("Email Confirmed")
        ]),
        _vm._v(" "),
        _c("th", [_vm._v("Sign-Up Since")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/customers/index.vue":
/*!*************************************************************!*\
  !*** ./resources/js/backend/components/customers/index.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=806b1810&scoped=true& */ "./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& */ "./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "806b1810",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/customers/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=style&index=0&id=806b1810&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_806b1810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=806b1810&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/customers/index.vue?vue&type=template&id=806b1810&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_806b1810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9jdXN0b21lcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY3VzdG9tZXJzL2luZGV4LnZ1ZT8xOThlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY3VzdG9tZXJzL2luZGV4LnZ1ZT9hYjNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY3VzdG9tZXJzL2luZGV4LnZ1ZT85OGIwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY3VzdG9tZXJzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2N1c3RvbWVycy9pbmRleC52dWU/YjJmMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2N1c3RvbWVycy9pbmRleC52dWU/OTU2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2N1c3RvbWVycy9pbmRleC52dWU/Y2IyMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R0E7QUFDQSwyQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsZ0JBRkE7QUFHQSxvQkFIQTtBQUlBLDJCQUpBO0FBS0EsZ0JBTEE7QUFNQTtBQUNBLG9DQURBO0FBRUEsd0JBRkE7QUFHQSwwQ0FIQTtBQUlBLDRDQUpBO0FBS0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0E7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QTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBMGMsQ0FBZ0IsMmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvQ3VzdG9tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG48ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+Q3VzdG9tZXJzPC9oMj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDwhLS0gIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInByaW50KClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxuICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgPGRvd25sb2FkLWV4Y2VsIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cInByb3BzY3VzdG9tZXJzXCIgdHlwZT1cInhsc1wiIG5hbWU9XCJjdXN0b21lcnMueGxzXCIgd29ya3NoZWV0PVwiQ3VzdG9tZXJzXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XG4gICAgICAgIFhMU1xuICAgICAgPC9kb3dubG9hZC1leGNlbD5cbiAgICAgIDxkb3dubG9hZC1leGNlbCBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJwcm9wc2N1c3RvbWVyc1wiIHR5cGU9XCJjc3ZcIiBuYW1lPVwiY3VzdG9tZXJzLmNzdlwiIHdvcmtzaGVldD1cIkN1c3RvbWVyc1wiPlxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWNzdlwiPjwvaT5cbiAgICAgICAgQ1NWXG4gICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnIgLz5cbiAgPGJyIC8+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJzZWFyY2hcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHJvdW5kZWQtMFwiIEBjbGljaz1cImJ0blNlYXJjaCgpXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PiAtLT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cInJvdyBtdC00XCIgc3R5bGU9XCJmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLHNhbnMtc2VyaWYhaW1wb3J0YW50O1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgY29sLW1kLTEyXCI+XG4gICAgICA8dGFibGUgaWQ9XCJjdXN0b21lcnMtdGFibGVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8IS0tIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPiAtLT5cbiAgICAgICAgICAgIDx0aD5DdXN0b21lciBOYW1lPC90aD5cbiAgICAgICAgICAgIDx0aD5NZW1iZXIgVHlwZTwvdGg+XG4gICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoxMjBweDtcIj5TdW5jbHViIFByZXBhaWQgQmFsYW5jZTwvdGg+XG4gICAgICAgICAgICA8IS0tIDx0aD5FbWFpbDwvdGg+IC0tPlxuICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6NTBweDtcIj5FbWFpbCBDb25maXJtZWQ8L3RoPlxuICAgICAgICAgICAgPHRoPlNpZ24tVXAgU2luY2U8L3RoPlxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb3BzY3VzdG9tZXJzXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICA8dGQ+e3tpdGVtLmZ1bGxfbmFtZX19XG4gICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MTBweDtcIj4oe3tpdGVtLmVtYWlsfX0pPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiaXRlbS5jdXN0b21lcl9yb2xlID09IDI/ICdiYWRnZSBiYWRnZS1zdWNjZXNzJ1xuICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uY3VzdG9tZXJfcm9sZSA9PSAzPyAnYmFkZ2UgYmFkZ2UtcHJpbWFyeScgOiAnYmFkZ2UgYmFkZ2Utc2Vjb25kYXJ5JyBcIj5cblxuICAgICAgICAgICAgICAgIHt7aXRlbS5hdHJfY3VzdG9tZXJfcm9sZX19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxkaXYgdi1pZj0naXRlbS5jdXN0b21lcl9yb2xlID09IDInPlxuICAgICAgICAgICAgICAgIDxiIGNsYXNzPVwidGV4dC1zdWNjZXNzIHRleHQtcmlnaHRcIj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLmJhbGFuY2UpfX08L2I+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwhLS0gPHRkPnt7aXRlbS5lbWFpbH19PC90ZD4gLS0+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIml0ZW0uY29uZmlybWVkPyAnYmFkZ2UgYmFkZ2Utc3VjY2Vzcyc6ICdiYWRnZSBiYWRnZS1zZWNvbmRhcnknXCI+XG4gICAgICAgICAgICAgICAge3tpc0NvbmZpcm1lZChpdGVtLmNvbmZpcm1lZCl9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPnt7aXRlbS5jcmVhdGVkX2F0X2xhYmVsfX08L3RkPlxuICAgICAgICAgICAgPHRkPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gOmRpc2FibGVkPVwiaXRlbS5jdXN0b21lcl9yb2xlID09IDFcIiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwidmlld0N1c3RvbWVyKCcvYWRtaW4vY3VzdG9tZXJzLycraXRlbS5pZClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIj4gPGkgY2xhc3M9XCJmYXIgZmEtZXllIG1yLTJcIj48L2k+VmlldyBQcm9maWxlPC9idXR0b24+XG4gICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwidmlld0N1c3RvbWVyKCcvYWRtaW4vY3VzdG9tZXJzLycraXRlbS5pZClcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIj4gPGkgY2xhc3M9XCJmYXIgZmEtZXllIG1yLTJcIj48L2k+VmlldyBQcm9maWxlPC9idXR0b24+IC0tPlxuICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvYWRtaW4vcmVwb3J0cy9vcmRlcnMtYnktY3VzdG9tZXJzLycraXRlbS5pZCsnLycraXRlbS5mdWxsX25hbWVcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIj5PcmRlcnM8L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPCEtLSA8dGQ+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiKHN1YiwgaW5kZXgyKSBpbiBpdGVtLnN1Yl9jYXRlZ29yaWVzXCIgOmtleT1cImluZGV4MlwiPnt7c3ViLm5hbWV9fSw8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RkPiAtLT5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicC01XCIgc3R5bGU9XCJoZWlnaHQ6NDAwcHhcIj5cbiAgICAgICAgICA8aDM+UXVpY2sgRGV0YWlsczwvaDM+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGg0PlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdXNlci1wbHVzIHRleHQtaW5mb1wiPjwvaT5cbiAgICAgICAgICAgIHt7bnVtYmVyT2ZOZXdVc2VyKCl9fSBOZXcgTWVtYmVyc1xuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPkxhc3QgMjQgaG91cnM8L3NwYW4+XG4gICAgICAgICAgPC9oND5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGUgdGV4dC1kYW5nZXJcIj48L2k+XG4gICAgICAgICAgICAwIENhbmNlbFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPkNhbmNlbGxlZDwvc3Bhbj5cbiAgICAgICAgICA8L2g0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAtLT5cbiAgPC9kaXY+XG48L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJwcm9wc2N1c3RvbWVyc1wiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY3VzdG9tZXJzOiBbXSxcbiAgICAgIHBlclBhZ2U6IDUsXG4gICAgICBjdXJyZW50UGFnZTogMSxcbiAgICAgIHNlYXJjaGVkQ3VzdG9tZXJzOiBbXSxcbiAgICAgIHNlYXJjaDogXCJcIixcbiAgICAgIGpzb25fZmllbGRzOiB7XG4gICAgICAgIFwiQ3VzdG9tZXIgTmFtZVwiOiBcImZ1bGxfbmFtZVwiLFxuICAgICAgICBcIkVtYWlsXCI6IFwiZW1haWxcIixcbiAgICAgICAgXCJNZW1iZXIgVHlwZVwiOiBcImF0cl9jdXN0b21lcl9yb2xlXCIsXG4gICAgICAgIFwiU3VuY2x1YiBQcmVwYWlkIEJhbGFuY2VcIjogXCJiYWxhbmNlXCIsXG4gICAgICAgIFwiRW1haWwgQ29uZmlybWVkXCI6IHtcbiAgICAgICAgICBmaWVsZDogJ2NvbmZpcm1lZCcsXG4gICAgICAgICAgY2FsbGJhY2s6ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBZZXNgO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGBOb2A7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiU2lnbi11cCBTaW5jZVwiOiBcImNyZWF0ZWRfYXRfbGFiZWxcIlxuICAgICAgfSxcbiAgICB9O1xuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2N1c3RvbWVycy10YWJsZScpLkRhdGFUYWJsZSh7XG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBbXG4gICAgICAgICAgWzEwLCAyNSwgNTAsIC0xXSxcbiAgICAgICAgICBbMTAsIDI1LCA1MCwgXCJBbGxcIl1cbiAgICAgICAgXSxcbiAgICAgICAgaURpc3BsYXlMZW5ndGg6IC0xXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuY3VzdG9tZXJzID0gdGhpcy5wcm9wc2N1c3RvbWVycztcbiAgICBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWVycyk7XG4gICAgdGhpcy5zZWFyY2hlZEN1c3RvbWVycyA9IHRoaXMuY3VzdG9tZXJzO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaXNDb25maXJtZWQoZGF0YSkge1xuICAgICAgcmV0dXJuIGRhdGEgPyAnWUVTJyA6ICdOTydcbiAgICB9LFxuICAgIHZpZXdDdXN0b21lcihsaW5rKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xuICAgIH0sXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICAgIGJ0blNlYXJjaCgpIHtcbiAgICAgIC8vICAgcGVvcGxlLmZpbHRlcihwID0+IHAuZGlubmVyID09IFwic3VzaGlcIik7XG4gICAgICAvLyAgIGxldCBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XG4gICAgICBsZXQgcXVlcnkgPSB0aGlzLnNlYXJjaC50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IGhleXN0YWNrID0gdGhpcy5jdXN0b21lcnM7XG4gICAgICBsZXQgc2VhcmNoZWQgPSBoZXlzdGFjay5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICBpdGVtLmZpcnN0X25hbWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5KSA+PSAwIHx8XG4gICAgICAgIGl0ZW0ubGFzdF9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihxdWVyeSkgPj0gMFxuICAgICAgKTtcbiAgICAgIHRoaXMuc2VhcmNoZWRDdXN0b21lcnMgPSBzZWFyY2hlZDtcbiAgICB9LFxuXG4gICAgbnVtYmVyT2ZOZXdVc2VyKCkge1xuICAgICAgLy8gICB2YXIgT25lRGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAxICogMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICAgIHZhciBPbmVEYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICB0aGlzLmN1c3RvbWVycy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50Lm5ldyA9PSAxKSB7XG4gICAgICAgICAgY291bnQgPSBjb3VudCArIDE7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH0sXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbG9hZGxpc3QoKSB7XG4gICAgICB2YXIgcGFnZUxpc3QgPSBbXTtcbiAgICAgIHZhciBiZWdpbiA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBlclBhZ2U7XG4gICAgICB2YXIgZW5kID0gYmVnaW4gKyB0aGlzLnBlclBhZ2U7XG4gICAgICB2YXIgYWxsb3JkZXJzID0gdGhpcy5zZWFyY2hlZEN1c3RvbWVycztcbiAgICAgIHZhciBwYWdlTGlzdCA9IGFsbG9yZGVycy5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgIHJldHVybiBwYWdlTGlzdDtcbiAgICB9LFxuXG4gICAgcm93cygpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlYXJjaGVkQ3VzdG9tZXJzLmxlbmd0aDtcbiAgICB9LFxuICB9LFxuICAvLyBtb3VudGVkKCkge1xuICAvLyAgICAgYWxlcnQoXCJQUk9EVUNUUyBDT01QT05FTlQgTU9VTlRFRFwiKTtcbiAgLy8gfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tc3VjY2Vzc1tkYXRhLXYtODA2YjE4MTBdIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODA2YjE4MTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MDZiMTgxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MDZiMTgxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgIGRhdGE6IF92bS5wcm9wc2N1c3RvbWVycyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInhsc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VzdG9tZXJzLnhsc1wiLFxuICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJDdXN0b21lcnNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1leGNlbFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFhMU1xcbiAgICAgIFwiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICBkYXRhOiBfdm0ucHJvcHNjdXN0b21lcnMsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImN1c3RvbWVycy5jc3ZcIixcbiAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiQ3VzdG9tZXJzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgQ1NWXFxuICAgICAgXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IG10LTRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LWZhbWlseVwiOiBcIlNvdXJjZSBTYW5zIFBybyxzYW5zLXNlcmlmIWltcG9ydGFudFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY3VzdG9tZXJzLXRhYmxlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9wc2N1c3RvbWVycywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5mdWxsX25hbWUpICsgXCJcXG4gICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIoXCIgKyBfdm0uX3MoaXRlbS5lbWFpbCkgKyBcIilcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jdXN0b21lcl9yb2xlID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWRnZSBiYWRnZS1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJiYWRnZSBiYWRnZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLmF0cl9jdXN0b21lcl9yb2xlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY3VzdG9tZXJfcm9sZSA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3MgdGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLmJhbGFuY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5jb25maXJtZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJhZGdlIGJhZGdlLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pc0NvbmZpcm1lZChpdGVtLmNvbmZpcm1lZCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmNyZWF0ZWRfYXRfbGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogaXRlbS5jdXN0b21lcl9yb2xlID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld0N1c3RvbWVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9hZG1pbi9jdXN0b21lcnMvXCIgKyBpdGVtLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtZXllIG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVmlldyBQcm9maWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvYWRtaW4vcmVwb3J0cy9vcmRlcnMtYnktY3VzdG9tZXJzL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5mdWxsX25hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJPcmRlcnNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbX3ZtLl92KFwiQ3VzdG9tZXJzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDdXN0b21lciBOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1lbWJlciBUeXBlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMjBweFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIlN1bmNsdWIgUHJlcGFpZCBCYWxhbmNlXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNTBweFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIkVtYWlsIENvbmZpcm1lZFwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2lnbi1VcCBTaW5jZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25zXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDZiMTgxMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MDZiMTgxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjgwNmIxODEwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODA2YjE4MTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODA2YjE4MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODA2YjE4MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MDZiMTgxMCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MDZiMTgxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9jdXN0b21lcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODA2YjE4MTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MDZiMTgxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgwNmIxODEwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==