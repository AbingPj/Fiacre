(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Prod"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["data"],
  data: function data() {
    return {
      paginatedproducts: {},
      searchInput: "",
      search: "",
      selectedStocks: "All",
      selectedPerpage: "All",
      timer: null,
      noSearchFound: false,
      noSearchFoundMsg: null
    };
  },
  created: function created() {
    this.getResults();
  },
  methods: {
    searchType: function searchType() {
      var _this = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this.btnSearch();
      }, 700);
    },
    getResults: function getResults() {
      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var param;
      param = {
        search: this.search,
        page: page,
        stock: this.selectedStocks,
        perpage: this.selectedPerpage
      };
      this.getData(param);
    },
    getData: function getData(param) {
      var _this2 = this;

      axios({
        method: "get",
        url: "/api/admin/products2",
        params: param
      }).then(function (res) {
        _this2.paginatedproducts = res.data;
        _this2.noSearchFound = false;
      })["catch"](function (error) {
        if (error.response.status == 404) {
          _this2.paginatedproducts = {};
          _this2.noSearchFound = true;
          _this2.noSearchFoundMsg = error.response.data.msg;
        }
      });
    },
    btnSearch: function btnSearch() {
      this.search = this.searchInput.toLowerCase();
      this.getResults();
    },
    selectedStocksChange: function selectedStocksChange() {
      this.getResults();
    },
    selectedPerpageChange: function selectedPerpageChange() {
      this.getResults();
    },
    updateVisible: function updateVisible(data) {
      //   data.is_visible = !data.is_visible;
      axios.post("/admin/product/visible", {
        product_id: data.id,
        bol: !data.is_visible
      }).then(function (res) {
        //   console.log(res.data);
        data.is_visible = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    organization: function organization(product) {
      var link = "/admin/product/productSelectOrganization/" + product.id;
      window.location.href = link;
    },
    preview: function preview(product) {
      var link = product.is_bundle == 1 ? "/admin/products/bundle/" + product.id + "/edit" : "/admin/products/" + product.id + "/edit";
      window.location.href = link;
    },
    stocks: function stocks(id) {
      var link = "/admin/products/" + id + "/instocks";
      window.location.href = link;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-58f49bb7] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-lg-8 col-md-6" }, [
        _c("div", { staticClass: "input-group mb-3" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchInput,
                expression: "searchInput"
              }
            ],
            staticClass: "form-control rounded-0",
            attrs: { type: "text", placeholder: "Quick Search" },
            domProps: { value: _vm.searchInput },
            on: {
              keyup: function($event) {
                return _vm.searchType()
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchInput = $event.target.value
              }
            }
          })
        ])
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "ml-2", attrs: { for: "" } }, [
            _vm._v("Filter: ")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedStocks,
                  expression: "selectedStocks"
                }
              ],
              staticClass: "form-control rounded-0",
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
                    _vm.selectedStocks = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    return _vm.selectedStocksChange()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "All" } }, [_vm._v("All")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "In Stock" } }, [
                _vm._v("In Stock")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Out of Stock" } }, [
                _vm._v("Out of Stock")
              ]),
              _vm._v(" "),
              _c("option", { attrs: { value: "Low of Stock" } }, [
                _vm._v("Low of Stock")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { staticClass: "ml-2", attrs: { for: "" } }, [
            _vm._v("Rows per page: ")
          ]),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.selectedPerpage,
                  expression: "selectedPerpage"
                }
              ],
              staticClass: "form-control rounded-0",
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
                    _vm.selectedPerpage = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  function($event) {
                    return _vm.selectedPerpageChange()
                  }
                ]
              }
            },
            [
              _c("option", { attrs: { value: "All" } }, [_vm._v("All")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "20" } }, [_vm._v("25")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "50" } }, [_vm._v("50")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-4" }, [
      _c(
        "div",
        { staticClass: "col-lg-8 col-md-8" },
        [
          _c(
            "ul",
            { staticClass: "list-group rounded-0" },
            [
              _vm._l(_vm.paginatedproducts.data, function(product, index) {
                return _c(
                  "li",
                  { key: index, staticClass: "list-group-item d-flex" },
                  [
                    _c("div", {}, [
                      _c("img", {
                        staticStyle: {
                          width: "120px",
                          height: "100px",
                          "object-fit": "cover"
                        },
                        attrs: { src: product.image_link }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: " ml-3" }, [
                      _c("p", [
                        _c("b", [_vm._v(_vm._s(product.name))]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "\n              $ " +
                            _vm._s(_vm.displayNumberWithComma(product.price)) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "custom-control custom-switch",
                          on: {
                            click: function($event) {
                              return _vm.updateVisible(product)
                            }
                          }
                        },
                        [
                          _c("input", {
                            staticClass: "custom-control-input bg-success",
                            attrs: { type: "checkbox" },
                            domProps: {
                              checked: product.is_visible == 1 ? true : false
                            }
                          }),
                          _vm._v(" "),
                          _c("label", { staticClass: "custom-control-label" }, [
                            _vm._v(
                              _vm._s(product.is_visible == 1 ? "show" : "hide")
                            )
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "ml-auto text-right" }, [
                      _c("div", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-warning",
                            on: {
                              click: function($event) {
                                return _vm.organization(product)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-sitemap mr-2" }),
                            _vm._v("Select Org.\n              ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-success",
                            on: {
                              click: function($event) {
                                return _vm.preview(product)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "far fa-eye mr-2" }),
                            _vm._v("View\n              ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: {
                              click: function($event) {
                                return _vm.stocks(product.id)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-plus-square mr-2" }),
                            _vm._v("Quantities\n              ")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "\n              SKU: " +
                            _vm._s(product.sku) +
                            "\n              "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            class:
                              product.atr_qty_label == "Out of Stock"
                                ? "text-danger"
                                : product.atr_qty_label == "Low of Stock"
                                ? "text-warning"
                                : "text-success"
                          },
                          [_vm._v(_vm._s(product.atr_qty_label))]
                        ),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("Remaining qty:\n              "),
                        _c("b", [
                          _vm._v(
                            _vm._s(product.atr_qty) +
                              " / " +
                              _vm._s(product.unit)
                          )
                        ])
                      ])
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _vm.noSearchFound
                ? _c("li", [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h6", [_vm._v(_vm._s(_vm.noSearchFoundMsg))])
                    ])
                  ])
                : _vm._e()
            ],
            2
          ),
          _vm._v(" "),
          _vm.noSearchFound == false
            ? _c("p", { staticClass: "mt-3" }, [
                _vm._v(
                  "Current Page: " + _vm._s(_vm.paginatedproducts.current_page)
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("pagination", {
            attrs: {
              data: _vm.paginatedproducts,
              limit: 5,
              size: "small",
              align: "left"
            },
            on: { "pagination-change-page": _vm.getResults }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 col-md-4" }, [
        _c("div", { staticClass: "p-5", staticStyle: { height: "400px" } }, [
          _c("h3", [_vm._v("Quick Details")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h4", [
            _c("i", { staticClass: "fas fa-times-circle text-danger" }),
            _vm._v(
              "\n          " +
                _vm._s(_vm.data.out_of_stock) +
                " Items\n          "
            ),
            _c("span", { staticClass: "text-secondary" }, [
              _vm._v("Out of Stock")
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h4", [
            _c("i", { staticClass: "fas fa-exclamation-circle text-warning" }),
            _vm._v(
              "\n          " +
                _vm._s(_vm.data.low_of_stock) +
                " Items\n          "
            ),
            _c("span", { staticClass: "text-secondary" }, [
              _vm._v("Low of Stock")
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h4", [
            _c("i", { staticClass: "fas fa-check-double text-success" }),
            _vm._v(
              "\n          " + _vm._s(_vm.data.in_stock) + " Items\n          "
            ),
            _c("span", { staticClass: "text-secondary" }, [_vm._v("In Stock")])
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
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [_vm._v("Products")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [_c("h2")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-4 col-md-6" }, [
      _c(
        "a",
        {
          staticClass: "btn btn-danger float-right rounded-0 text-light ml-2",
          attrs: { href: "/admin/products/create/bundle" }
        },
        [
          _c("i", { staticClass: "fas fa-plus mr-2" }),
          _vm._v("New Bundle Product")
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "btn btn-success float-right rounded-0 text-light",
          attrs: { href: "/admin/products/create" }
        },
        [_c("i", { staticClass: "fas fa-plus mr-2" }), _vm._v("New Product")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/products/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/backend/components/products/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=58f49bb7&scoped=true& */ "./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& */ "./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "58f49bb7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/products/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/products/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/products/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=style&index=0&id=58f49bb7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_58f49bb7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=58f49bb7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/index.vue?vue&type=template&id=58f49bb7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_58f49bb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/Yzk5OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT9lOWM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlPzRkODUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/ODdjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT84OTYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlPzEzMDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFLQTtBQUNBLGlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBO0FBSUEsMkJBSkE7QUFLQSw0QkFMQTtBQU1BLGlCQU5BO0FBT0EsMEJBUEE7QUFRQTtB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LEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBMGMsQ0FBZ0IsMmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUHJvZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbjxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5Qcm9kdWN0czwvaDI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICA8aDI+XG5cbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8YnIgLz5cbiAgPGJyIC8+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwic2VhcmNoSW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIEBrZXl1cD1cInNlYXJjaFR5cGUoKVwiIHBsYWNlaG9sZGVyPVwiUXVpY2sgU2VhcmNoXCIgLz5cbiAgICAgICAgPCEtLSA8aW5wdXQgdi1tb2RlbD1cInNlYXJjaElucHV0XCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIiB2LW9uOmtleXVwLmVudGVyPVwiYnRuU2VhcmNoKClcIiBwbGFjZWhvbGRlcj1cIlF1aWNrIFNlYXJjaFwiIC8+IC0tPlxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHJvdW5kZWQtMFwiIEBjbGljaz1cImJ0blNlYXJjaCgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoIG1yLTJcIj48L2k+IFNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC02XCI+XG4gICAgICA8YSBocmVmPVwiL2FkbWluL3Byb2R1Y3RzL2NyZWF0ZS9idW5kbGVcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0IG1sLTJcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzIG1yLTJcIj48L2k+TmV3IEJ1bmRsZSBQcm9kdWN0PC9hPlxuICAgIDxhIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHMvY3JlYXRlXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzIG1yLTJcIj48L2k+TmV3IFByb2R1Y3Q8L2E+XG4gICAgIDwvZGl2PlxuICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1sZy0yIGNvbC1tZC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHYtbW9kZWw9XCJzZWxlY3RlZFN0b2Nrc1wiIEBjaGFuZ2U9XCJzZWxlY3RlZFN0b2Nrc0NoYW5nZSgpXCI+XG4gICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD5TZWxlY3QgU3RvY2tzIERldGFpbDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiSW4gU3RvY2tcIj5JbiBTdG9jazwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdXQgb2YgU3RvY2tcIj5PdXQgb2YgU3RvY2s8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93IG9mIFN0b2NrXCI+TG93IG9mIFN0b2NrPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy0yIGNvbC1tZC0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHYtbW9kZWw9XCJzZWxlY3RlZFBlcnBhZ2VcIiBAY2hhbmdlPVwic2VsZWN0ZWRQZXJwYWdlQ2hhbmdlKClcIj5cbiAgICAgICAgICA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPk51bWJlciBvZiBQcm9kdWN0cyBQZXIgUGFnZTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+QnkgNTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPkJ5IDEwPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+QnkgMjA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj5CeSA1MDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj5CeSAxMDA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+IC0tPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJtbC0yXCI+RmlsdGVyOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIgdi1tb2RlbD1cInNlbGVjdGVkU3RvY2tzXCIgQGNoYW5nZT1cInNlbGVjdGVkU3RvY2tzQ2hhbmdlKClcIj5cbiAgICAgICAgICAgICAgICA8IS0tIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+U2VsZWN0IFN0b2NrcyBEZXRhaWw8L29wdGlvbj4gLS0+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbiBTdG9ja1wiPkluIFN0b2NrPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk91dCBvZiBTdG9ja1wiPk91dCBvZiBTdG9jazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3cgb2YgU3RvY2tcIj5Mb3cgb2YgU3RvY2s8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIiBjbGFzcz1cIm1sLTJcIj5Sb3dzIHBlciBwYWdlOiA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHYtbW9kZWw9XCJzZWxlY3RlZFBlcnBhZ2VcIiBAY2hhbmdlPVwic2VsZWN0ZWRQZXJwYWdlQ2hhbmdlKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD5OdW1iZXIgb2YgUHJvZHVjdHMgUGVyIFBhZ2U8L29wdGlvbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxvcHRpb24gdmFsdWU9XCI1XCI+QnkgNTwvb3B0aW9uPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPjEwPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yNTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+NTA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG9wdGlvbiB2YWx1ZT1cIjEwMFwiPkJ5IDEwMDwvb3B0aW9uPiAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtNFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbWQtOFwiPlxuICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCByb3VuZGVkLTBcIj5cbiAgICAgICAgPCEtLSA8bGkgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIGxvYWRsaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4XCI+IC0tPlxuICAgICAgICA8bGkgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIHBhZ2luYXRlZHByb2R1Y3RzLmRhdGFcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwicHJvZHVjdC5pbWFnZV9saW5rXCIgc3R5bGU9XCJ3aWR0aDoxMjBweDsgaGVpZ2h0OjEwMHB4OyBvYmplY3QtZml0OmNvdmVyO1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIiBtbC0zXCI+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPGI+e3twcm9kdWN0Lm5hbWV9fTwvYj5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHByb2R1Y3QucHJpY2UpfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwidXBkYXRlVmlzaWJsZShwcm9kdWN0KVwiIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxuICAgICAgICAgICAgICA8aW5wdXQgOmNoZWNrZWQ9XCJwcm9kdWN0LmlzX3Zpc2libGUgPT0gMSA/IHRydWU6IGZhbHNlXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dCBiZy1zdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIj57eyBwcm9kdWN0LmlzX3Zpc2libGUgPT0gMT8gJ3Nob3cnIDogJ2hpZGUnIH19PC9sYWJlbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtbC1hdXRvIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4td2FybmluZ1wiIEBjbGljaz1cIm9yZ2FuaXphdGlvbihwcm9kdWN0KVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNpdGVtYXAgbXItMlwiPjwvaT5TZWxlY3QgT3JnLlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJwcmV2aWV3KHByb2R1Y3QpXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtZXllIG1yLTJcIj48L2k+Vmlld1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIiBAY2xpY2s9XCJzdG9ja3MocHJvZHVjdC5pZClcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzLXNxdWFyZSBtci0yXCI+PC9pPlF1YW50aXRpZXNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBTS1U6IHt7cHJvZHVjdC5za3V9fVxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwicHJvZHVjdC5hdHJfcXR5X2xhYmVsID09ICdPdXQgb2YgU3RvY2snID8gJ3RleHQtZGFuZ2VyJzpcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hdHJfcXR5X2xhYmVsID09ICdMb3cgb2YgU3RvY2snID8gJ3RleHQtd2FybmluZyc6ICd0ZXh0LXN1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICBcIj57e3Byb2R1Y3QuYXRyX3F0eV9sYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICA8IS0tIHt7cHJvZHVjdC5pc192aXNpYmxlID09IDE/ICdJbiBTdG9jaycgOiAnT3V0IG9mIFN0b2NrJ319IC0tPlxuICAgICAgICAgICAgICA8YnIgLz5SZW1haW5pbmcgcXR5OlxuICAgICAgICAgICAgICA8Yj57e3Byb2R1Y3QuYXRyX3F0eX19IC8ge3twcm9kdWN0LnVuaXR9fTwvYj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIHYtaWY9XCJub1NlYXJjaEZvdW5kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoNj57e25vU2VhcmNoRm91bmRNc2d9fTwvaDY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuXG4gICAgICA8cCB2LWlmPVwibm9TZWFyY2hGb3VuZCA9PSBmYWxzZVwiIGNsYXNzPVwibXQtM1wiPkN1cnJlbnQgUGFnZToge3sgcGFnaW5hdGVkcHJvZHVjdHMuY3VycmVudF9wYWdlIH19PC9wPlxuICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJwYWdpbmF0ZWRwcm9kdWN0c1wiIDpsaW1pdD1cIjVcIiBzaXplPVwic21hbGxcIiBhbGlnbj1cImxlZnRcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIj48L3BhZ2luYXRpb24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC00XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicC01XCIgc3R5bGU9XCJoZWlnaHQ6NDAwcHhcIj5cbiAgICAgICAgPGgzPlF1aWNrIERldGFpbHM8L2gzPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoND5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGUgdGV4dC1kYW5nZXJcIj48L2k+XG4gICAgICAgICAge3tkYXRhLm91dF9vZl9zdG9ja319IEl0ZW1zXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeVwiPk91dCBvZiBTdG9jazwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxoND5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgdGV4dC13YXJuaW5nXCI+PC9pPlxuICAgICAgICAgIHt7ZGF0YS5sb3dfb2Zfc3RvY2t9fSBJdGVtc1xuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5Mb3cgb2YgU3RvY2s8L3NwYW4+XG4gICAgICAgIDwvaDQ+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stZG91YmxlIHRleHQtc3VjY2Vzc1wiPjwvaT5cbiAgICAgICAgICB7e2RhdGEuaW5fc3RvY2t9fSBJdGVtc1xuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5JbiBTdG9jazwvc3Bhbj5cbiAgICAgICAgPC9oND5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcImRhdGFcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2luYXRlZHByb2R1Y3RzOiB7fSxcbiAgICAgIHNlYXJjaElucHV0OiBcIlwiLFxuICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgc2VsZWN0ZWRTdG9ja3M6IFwiQWxsXCIsXG4gICAgICBzZWxlY3RlZFBlcnBhZ2U6IFwiQWxsXCIsXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIG5vU2VhcmNoRm91bmQ6IGZhbHNlLFxuICAgICAgbm9TZWFyY2hGb3VuZE1zZzogbnVsbCxcbiAgICB9O1xuICB9LFxuXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzZWFyY2hUeXBlKCkge1xuICAgICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5idG5TZWFyY2goKTtcbiAgICAgIH0sIDcwMCk7XG4gICAgfSxcbiAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICBsZXQgcGFyYW07XG4gICAgICBwYXJhbSA9IHtcbiAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgcGFnZTogcGFnZSxcbiAgICAgICAgc3RvY2s6IHRoaXMuc2VsZWN0ZWRTdG9ja3MsXG4gICAgICAgIHBlcnBhZ2U6IHRoaXMuc2VsZWN0ZWRQZXJwYWdlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2V0RGF0YShwYXJhbSk7XG4gICAgfSxcblxuICAgIGdldERhdGEocGFyYW0pIHtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICB1cmw6IFwiL2FwaS9hZG1pbi9wcm9kdWN0czJcIixcbiAgICAgICAgcGFyYW1zOiBwYXJhbSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLnBhZ2luYXRlZHByb2R1Y3RzID0gcmVzLmRhdGE7XG4gICAgICAgIHRoaXMubm9TZWFyY2hGb3VuZCA9IGZhbHNlO1xuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICBpZihlcnJvci5yZXNwb25zZS5zdGF0dXMgPT0gNDA0KSB7XG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRlZHByb2R1Y3RzID0gIHt9O1xuICAgICAgICAgICAgdGhpcy5ub1NlYXJjaEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubm9TZWFyY2hGb3VuZE1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGEubXNnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBidG5TZWFyY2goKSB7XG4gICAgICB0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoSW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG5cbiAgICBzZWxlY3RlZFN0b2Nrc0NoYW5nZSgpIHtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG5cbiAgICBzZWxlY3RlZFBlcnBhZ2VDaGFuZ2UoKSB7XG4gICAgICB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICB9LFxuICAgIHVwZGF0ZVZpc2libGUoZGF0YSkge1xuICAgICAgLy8gICBkYXRhLmlzX3Zpc2libGUgPSAhZGF0YS5pc192aXNpYmxlO1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vcHJvZHVjdC92aXNpYmxlXCIsIHtcbiAgICAgICAgICBwcm9kdWN0X2lkOiBkYXRhLmlkLFxuICAgICAgICAgIGJvbDogIWRhdGEuaXNfdmlzaWJsZSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgICAgIGRhdGEuaXNfdmlzaWJsZSA9IHJlcy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIG9yZ2FuaXphdGlvbihwcm9kdWN0KXtcbiAgICAgIHZhciBsaW5rID0gXCIvYWRtaW4vcHJvZHVjdC9wcm9kdWN0U2VsZWN0T3JnYW5pemF0aW9uL1wiICsgcHJvZHVjdC5pZDtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICB9LFxuICAgIHByZXZpZXcocHJvZHVjdCkge1xuICAgICAgdmFyIGxpbmsgPVxuICAgICAgICBwcm9kdWN0LmlzX2J1bmRsZSA9PSAxID9cbiAgICAgICAgXCIvYWRtaW4vcHJvZHVjdHMvYnVuZGxlL1wiICsgcHJvZHVjdC5pZCArIFwiL2VkaXRcIiA6XG4gICAgICAgIFwiL2FkbWluL3Byb2R1Y3RzL1wiICsgcHJvZHVjdC5pZCArIFwiL2VkaXRcIjtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICB9LFxuICAgIHN0b2NrcyhpZCkge1xuICAgICAgdmFyIGxpbmsgPSBcIi9hZG1pbi9wcm9kdWN0cy9cIiArIGlkICsgXCIvaW5zdG9ja3NcIjtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICB9LFxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmJ0bi1zdWNjZXNzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcbn1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tc3VjY2Vzc1tkYXRhLXYtNThmNDliYjddIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OGY0OWJiNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OGY0OWJiNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04IGNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hJbnB1dCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaElucHV0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJRdWljayBTZWFyY2hcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2hJbnB1dCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAga2V5dXA6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoVHlwZSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoSW5wdXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDEpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMlwiLCBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJGaWx0ZXI6IFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkU3RvY2tzLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFN0b2Nrc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3RvY2tzID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdGVkU3RvY2tzQ2hhbmdlKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiQWxsXCIgfSB9LCBbX3ZtLl92KFwiQWxsXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiSW4gU3RvY2tcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbiBTdG9ja1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJPdXQgb2YgU3RvY2tcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJPdXQgb2YgU3RvY2tcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiTG93IG9mIFN0b2NrXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTG93IG9mIFN0b2NrXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtM1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtbC0yXCIsIGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlJvd3MgcGVyIHBhZ2U6IFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkUGVycGFnZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRQZXJwYWdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRQZXJwYWdlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdGVkUGVycGFnZUNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFsbFwiIH0gfSwgW192bS5fdihcIkFsbFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjEwXCIgfSB9LCBbX3ZtLl92KFwiMTBcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyMFwiIH0gfSwgW192bS5fdihcIjI1XCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNTBcIiB9IH0sIFtfdm0uX3YoXCI1MFwiKV0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBjb2wtbWQtOFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCByb3VuZGVkLTBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBhZ2luYXRlZHByb2R1Y3RzLmRhdGEsIGZ1bmN0aW9uKHByb2R1Y3QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge30sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcHJvZHVjdC5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCIgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKHByb2R1Y3QubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShwcm9kdWN0LnByaWNlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmlzaWJsZShwcm9kdWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXQgYmctc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiY2hlY2tib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiBwcm9kdWN0LmlzX3Zpc2libGUgPT0gMSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvZHVjdC5pc192aXNpYmxlID09IDEgPyBcInNob3dcIiA6IFwiaGlkZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG8gdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9yZ2FuaXphdGlvbihwcm9kdWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zaXRlbWFwIG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgT3JnLlxcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmV2aWV3KHByb2R1Y3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWV5ZSBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVmlld1xcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdG9ja3MocHJvZHVjdC5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cy1zcXVhcmUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlF1YW50aXRpZXNcXG4gICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgU0tVOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2R1Y3Quc2t1KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYXRyX3F0eV9sYWJlbCA9PSBcIk91dCBvZiBTdG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcHJvZHVjdC5hdHJfcXR5X2xhYmVsID09IFwiTG93IG9mIFN0b2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInRleHQtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhwcm9kdWN0LmF0cl9xdHlfbGFiZWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlbWFpbmluZyBxdHk6XFxuICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2R1Y3QuYXRyX3F0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvZHVjdC51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLm5vU2VhcmNoRm91bmRcbiAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MoX3ZtLm5vU2VhcmNoRm91bmRNc2cpKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ub1NlYXJjaEZvdW5kID09IGZhbHNlXG4gICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJDdXJyZW50IFBhZ2U6IFwiICsgX3ZtLl9zKF92bS5wYWdpbmF0ZWRwcm9kdWN0cy5jdXJyZW50X3BhZ2UpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkYXRhOiBfdm0ucGFnaW5hdGVkcHJvZHVjdHMsXG4gICAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IFwicGFnaW5hdGlvbi1jaGFuZ2UtcGFnZVwiOiBfdm0uZ2V0UmVzdWx0cyB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC00XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtNVwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiNDAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJRdWljayBEZXRhaWxzXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzLWNpcmNsZSB0ZXh0LWRhbmdlclwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kYXRhLm91dF9vZl9zdG9jaykgK1xuICAgICAgICAgICAgICAgIFwiIEl0ZW1zXFxuICAgICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zZWNvbmRhcnlcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIk91dCBvZiBTdG9ja1wiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgdGV4dC13YXJuaW5nXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRhdGEubG93X29mX3N0b2NrKSArXG4gICAgICAgICAgICAgICAgXCIgSXRlbXNcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiTG93IG9mIFN0b2NrXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZWNrLWRvdWJsZSB0ZXh0LXN1Y2Nlc3NcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmRhdGEuaW5fc3RvY2spICsgXCIgSXRlbXNcXG4gICAgICAgICAgXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeVwiIH0sIFtfdm0uX3YoXCJJbiBTdG9ja1wiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtfdm0uX3YoXCJQcm9kdWN0c1wiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW19jKFwiaDJcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTZcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodCBtbC0yXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcHJvZHVjdHMvY3JlYXRlL2J1bmRsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wbHVzIG1yLTJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJOZXcgQnVuZGxlIFByb2R1Y3RcIilcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9wcm9kdWN0cy9jcmVhdGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cyBtci0yXCIgfSksIF92bS5fdihcIk5ldyBQcm9kdWN0XCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThmNDliYjcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1OGY0OWJiN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzU4ZjQ5YmI3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU4ZjQ5YmI3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU4ZjQ5YmI3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThmNDliYjcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNThmNDliYjcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OGY0OWJiNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ZjQ5YmI3JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==