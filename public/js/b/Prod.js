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
      var link = "/admin/product/productSelectOrganization/" + product.id; //   window.location.href = link;

      return link;
    },
    preview: function preview(product) {
      var link = product.is_bundle == 1 ? "/admin/products/bundle/" + product.id + "/edit" : "/admin/products/" + product.id + "/edit"; //   window.location.href = link;

      return link;
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
                          "\r\n              $ " +
                            _vm._s(_vm.displayNumberWithComma(product.price)) +
                            "\r\n            "
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
                          "a",
                          {
                            staticClass: "btn btn-sm btn-warning",
                            attrs: { href: _vm.organization(product) }
                          },
                          [
                            _c("i", { staticClass: "fas fa-sitemap mr-2" }),
                            _vm._v("Select Org.\r\n              ")
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-success",
                            attrs: { href: _vm.preview(product) }
                          },
                          [
                            _c("i", { staticClass: "far fa-eye mr-2" }),
                            _vm._v("View\r\n              ")
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(2, true)
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
      _c("div", { staticClass: "col-lg-4 col-md-4" })
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("br")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/Yzk5OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT9lOWM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlPzRkODUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/ODdjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT84OTYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlPzEzMDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0tBO0FBQ0EsaUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLHFCQUZBO0FBR0EsZ0JBSEE7QUFJQSwyQkFKQTtBQUtBLDRCQUxBO0FBTUEsaUJBTkE7QUFPQSwwQkFQQTtBQVFBO0FB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QUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixTQUFTO0FBQ1Q7QUFDQSxtQkFBbUIsa0NBQWtDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNULGtCQUFrQixrQ0FBa0M7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUEwYyxDQUFnQiwyYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9Qcm9kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+UHJvZHVjdHM8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgPGgyPlxyXG5cclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDxiciAvPlxyXG4gIDxiciAvPlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOCBjb2wtbWQtNlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgIDxpbnB1dCB2LW1vZGVsPVwic2VhcmNoSW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIEBrZXl1cD1cInNlYXJjaFR5cGUoKVwiIHBsYWNlaG9sZGVyPVwiUXVpY2sgU2VhcmNoXCIgLz5cclxuICAgICAgICA8IS0tIDxpbnB1dCB2LW1vZGVsPVwic2VhcmNoSW5wdXRcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHYtb246a2V5dXAuZW50ZXI9XCJidG5TZWFyY2goKVwiIHBsYWNlaG9sZGVyPVwiUXVpY2sgU2VhcmNoXCIgLz4gLS0+XHJcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIHJvdW5kZWQtMFwiIEBjbGljaz1cImJ0blNlYXJjaCgpXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoIG1yLTJcIj48L2k+IFNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTZcIj5cclxuICAgICAgPGEgaHJlZj1cIi9hZG1pbi9wcm9kdWN0cy9jcmVhdGUvYnVuZGxlXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodCBtbC0yXCI+PGkgY2xhc3M9XCJmYXMgZmEtcGx1cyBtci0yXCI+PC9pPk5ldyBCdW5kbGUgUHJvZHVjdDwvYT5cclxuICAgIDxhIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHMvY3JlYXRlXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIj48aSBjbGFzcz1cImZhcyBmYS1wbHVzIG1yLTJcIj48L2k+TmV3IFByb2R1Y3Q8L2E+XHJcbiAgICAgPC9kaXY+XHJcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtbGctMiBjb2wtbWQtM1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIgdi1tb2RlbD1cInNlbGVjdGVkU3RvY2tzXCIgQGNoYW5nZT1cInNlbGVjdGVkU3RvY2tzQ2hhbmdlKClcIj5cclxuICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+U2VsZWN0IFN0b2NrcyBEZXRhaWw8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJbiBTdG9ja1wiPkluIFN0b2NrPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3V0IG9mIFN0b2NrXCI+T3V0IG9mIFN0b2NrPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93IG9mIFN0b2NrXCI+TG93IG9mIFN0b2NrPC9vcHRpb24+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgY29sLW1kLTNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiIHYtbW9kZWw9XCJzZWxlY3RlZFBlcnBhZ2VcIiBAY2hhbmdlPVwic2VsZWN0ZWRQZXJwYWdlQ2hhbmdlKClcIj5cclxuICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+TnVtYmVyIG9mIFByb2R1Y3RzIFBlciBQYWdlPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNVwiPkJ5IDU8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPkJ5IDEwPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj5CeSAyMDwvb3B0aW9uPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUwXCI+QnkgNTA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMDBcIj5CeSAxMDA8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gLS0+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJtbC0yXCI+RmlsdGVyOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIiB2LW1vZGVsPVwic2VsZWN0ZWRTdG9ja3NcIiBAY2hhbmdlPVwic2VsZWN0ZWRTdG9ja3NDaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPlNlbGVjdCBTdG9ja3MgRGV0YWlsPC9vcHRpb24+IC0tPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkluIFN0b2NrXCI+SW4gU3RvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPdXQgb2YgU3RvY2tcIj5PdXQgb2YgU3RvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJMb3cgb2YgU3RvY2tcIj5Mb3cgb2YgU3RvY2s8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJcIiBjbGFzcz1cIm1sLTJcIj5Sb3dzIHBlciBwYWdlOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIgdi1tb2RlbD1cInNlbGVjdGVkUGVycGFnZVwiIEBjaGFuZ2U9XCJzZWxlY3RlZFBlcnBhZ2VDaGFuZ2UoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+TnVtYmVyIG9mIFByb2R1Y3RzIFBlciBQYWdlPC9vcHRpb24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxvcHRpb24gdmFsdWU9XCI1XCI+QnkgNTwvb3B0aW9uPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj4xMDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj4yNTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNTBcIj41MDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxvcHRpb24gdmFsdWU9XCIxMDBcIj5CeSAxMDA8L29wdGlvbj4gLS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDxkaXYgY2xhc3M9XCJyb3cgbXQtNFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1tZC04XCI+XHJcbiAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgcm91bmRlZC0wXCI+XHJcbiAgICAgICAgPCEtLSA8bGkgdi1mb3I9XCIocHJvZHVjdCwgaW5kZXgpIGluIGxvYWRsaXN0XCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4XCI+IC0tPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIihwcm9kdWN0LCBpbmRleCkgaW4gcGFnaW5hdGVkcHJvZHVjdHMuZGF0YVwiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwicHJvZHVjdC5pbWFnZV9saW5rXCIgc3R5bGU9XCJ3aWR0aDoxMjBweDsgaGVpZ2h0OjEwMHB4OyBvYmplY3QtZml0OmNvdmVyO1wiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCIgbWwtM1wiPlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8Yj57e3Byb2R1Y3QubmFtZX19PC9iPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHByb2R1Y3QucHJpY2UpfX1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cInVwZGF0ZVZpc2libGUocHJvZHVjdClcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgOmNoZWNrZWQ9XCJwcm9kdWN0LmlzX3Zpc2libGUgPT0gMSA/IHRydWU6IGZhbHNlXCIgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dCBiZy1zdWNjZXNzXCIgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiPnt7IHByb2R1Y3QuaXNfdmlzaWJsZSA9PSAxPyAnc2hvdycgOiAnaGlkZScgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1sLWF1dG8gdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImJ0biBidG4tc20gYnRuLXdhcm5pbmdcIiA6aHJlZj1cIm9yZ2FuaXphdGlvbihwcm9kdWN0KVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2l0ZW1hcCBtci0yXCI+PC9pPlNlbGVjdCBPcmcuXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiIDpocmVmPVwicHJldmlldyhwcm9kdWN0KVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtZXllIG1yLTJcIj48L2k+Vmlld1xyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8IS0tIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIgQGNsaWNrPVwic3RvY2tzKHByb2R1Y3QuaWQpXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzLXNxdWFyZSBtci0yXCI+PC9pPlF1YW50aXRpZXNcclxuICAgICAgICAgICAgICA8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICA8IS0tIFNLVToge3twcm9kdWN0LnNrdX19IC0tPlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHNwYW4gOmNsYXNzPVwicHJvZHVjdC5hdHJfcXR5X2xhYmVsID09ICdPdXQgb2YgU3RvY2snID8gJ3RleHQtZGFuZ2VyJzpcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LmF0cl9xdHlfbGFiZWwgPT0gJ0xvdyBvZiBTdG9jaycgPyAndGV4dC13YXJuaW5nJzogJ3RleHQtc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgXCI+e3twcm9kdWN0LmF0cl9xdHlfbGFiZWx9fTwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgICAgPCEtLSA8YnIgLz5SZW1haW5pbmcgUXR5OlxyXG4gICAgICAgICAgICAgIDxiPnt7cHJvZHVjdC5hdHJfcXR5fX0gLyB7e3Byb2R1Y3QudW5pdH19PC9iPiAtLT5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgdi1pZj1cIm5vU2VhcmNoRm91bmRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxoNj57e25vU2VhcmNoRm91bmRNc2d9fTwvaDY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPHAgdi1pZj1cIm5vU2VhcmNoRm91bmQgPT0gZmFsc2VcIiBjbGFzcz1cIm10LTNcIj5DdXJyZW50IFBhZ2U6IHt7IHBhZ2luYXRlZHByb2R1Y3RzLmN1cnJlbnRfcGFnZSB9fTwvcD5cclxuICAgICAgPHBhZ2luYXRpb24gOmRhdGE9XCJwYWdpbmF0ZWRwcm9kdWN0c1wiIDpsaW1pdD1cIjVcIiBzaXplPVwic21hbGxcIiBhbGlnbj1cImxlZnRcIiBAcGFnaW5hdGlvbi1jaGFuZ2UtcGFnZT1cImdldFJlc3VsdHNcIj48L3BhZ2luYXRpb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNFwiPlxyXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XCJwLTVcIiBzdHlsZT1cImhlaWdodDo0MDBweFwiPlxyXG4gICAgICAgIDxoMz5RdWljayBEZXRhaWxzPC9oMz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGUgdGV4dC1kYW5nZXJcIj48L2k+XHJcbiAgICAgICAgICB7e2RhdGEub3V0X29mX3N0b2NrfX0gSXRlbXNcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5PdXQgb2YgU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDQ+XHJcbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGUgdGV4dC13YXJuaW5nXCI+PC9pPlxyXG4gICAgICAgICAge3tkYXRhLmxvd19vZl9zdG9ja319IEl0ZW1zXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+TG93IG9mIFN0b2NrPC9zcGFuPlxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hlY2stZG91YmxlIHRleHQtc3VjY2Vzc1wiPjwvaT5cclxuICAgICAgICAgIHt7ZGF0YS5pbl9zdG9ja319IEl0ZW1zXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+SW4gU3RvY2s8L3NwYW4+XHJcbiAgICAgICAgPC9oND5cclxuICAgICAgPC9kaXY+IC0tPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJkYXRhXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwYWdpbmF0ZWRwcm9kdWN0czoge30sXHJcbiAgICAgIHNlYXJjaElucHV0OiBcIlwiLFxyXG4gICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICAgIHNlbGVjdGVkU3RvY2tzOiBcIkFsbFwiLFxyXG4gICAgICBzZWxlY3RlZFBlcnBhZ2U6IFwiQWxsXCIsXHJcbiAgICAgIHRpbWVyOiBudWxsLFxyXG4gICAgICBub1NlYXJjaEZvdW5kOiBmYWxzZSxcclxuICAgICAgbm9TZWFyY2hGb3VuZE1zZzogbnVsbCxcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2VhcmNoVHlwZSgpIHtcclxuICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYnRuU2VhcmNoKCk7XHJcbiAgICAgIH0sIDcwMCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xyXG4gICAgICBsZXQgcGFyYW07XHJcbiAgICAgIHBhcmFtID0ge1xyXG4gICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXHJcbiAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICBzdG9jazogdGhpcy5zZWxlY3RlZFN0b2NrcyxcclxuICAgICAgICBwZXJwYWdlOiB0aGlzLnNlbGVjdGVkUGVycGFnZSxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5nZXREYXRhKHBhcmFtKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGF0YShwYXJhbSkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgIHVybDogXCIvYXBpL2FkbWluL3Byb2R1Y3RzMlwiLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW0sXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGVkcHJvZHVjdHMgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLm5vU2VhcmNoRm91bmQgPSBmYWxzZTtcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0ZWRwcm9kdWN0cyA9ICB7fTtcclxuICAgICAgICAgICAgdGhpcy5ub1NlYXJjaEZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub1NlYXJjaEZvdW5kTXNnID0gZXJyb3IucmVzcG9uc2UuZGF0YS5tc2dcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBidG5TZWFyY2goKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2hJbnB1dC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB0aGlzLmdldFJlc3VsdHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0ZWRTdG9ja3NDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3RlZFBlcnBhZ2VDaGFuZ2UoKSB7XHJcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVZpc2libGUoZGF0YSkge1xyXG4gICAgICAvLyAgIGRhdGEuaXNfdmlzaWJsZSA9ICFkYXRhLmlzX3Zpc2libGU7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vcHJvZHVjdC92aXNpYmxlXCIsIHtcclxuICAgICAgICAgIHByb2R1Y3RfaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICBib2w6ICFkYXRhLmlzX3Zpc2libGUsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgICAgIGRhdGEuaXNfdmlzaWJsZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgb3JnYW5pemF0aW9uKHByb2R1Y3Qpe1xyXG4gICAgICB2YXIgbGluayA9IFwiL2FkbWluL3Byb2R1Y3QvcHJvZHVjdFNlbGVjdE9yZ2FuaXphdGlvbi9cIiArIHByb2R1Y3QuaWQ7XHJcbiAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcclxuICAgICByZXR1cm4gbGluaztcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3KHByb2R1Y3QpIHtcclxuICAgICAgdmFyIGxpbmsgPVxyXG4gICAgICAgIHByb2R1Y3QuaXNfYnVuZGxlID09IDEgP1xyXG4gICAgICAgIFwiL2FkbWluL3Byb2R1Y3RzL2J1bmRsZS9cIiArIHByb2R1Y3QuaWQgKyBcIi9lZGl0XCIgOlxyXG4gICAgICAgIFwiL2FkbWluL3Byb2R1Y3RzL1wiICsgcHJvZHVjdC5pZCArIFwiL2VkaXRcIjtcclxuICAgIC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBsaW5rO1xyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfSxcclxuICAgIHN0b2NrcyhpZCkge1xyXG4gICAgICB2YXIgbGluayA9IFwiL2FkbWluL3Byb2R1Y3RzL1wiICsgaWQgKyBcIi9pbnN0b2Nrc1wiO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbms7XHJcbiAgICB9LFxyXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xyXG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnRuLXN1Y2Nlc3NbZGF0YS12LTU4ZjQ5YmI3XSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ZjQ5YmI3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoSW5wdXQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hJbnB1dFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiUXVpY2sgU2VhcmNoXCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc2VhcmNoSW5wdXQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGtleXVwOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaFR5cGUoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaElucHV0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0zXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTJcIiwgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRmlsdGVyOiBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFN0b2NrcyxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdG9ja3NcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN0b2NrcyA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RlZFN0b2Nrc0NoYW5nZSgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFsbFwiIH0gfSwgW192bS5fdihcIkFsbFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkluIFN0b2NrXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiSW4gU3RvY2tcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiT3V0IG9mIFN0b2NrXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiT3V0IG9mIFN0b2NrXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkxvdyBvZiBTdG9ja1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkxvdyBvZiBTdG9ja1wiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMlwiLCBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJSb3dzIHBlciBwYWdlOiBcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFBlcnBhZ2UsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkUGVycGFnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkUGVycGFnZSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RlZFBlcnBhZ2VDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJBbGxcIiB9IH0sIFtfdm0uX3YoXCJBbGxcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxMFwiIH0gfSwgW192bS5fdihcIjEwXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMjBcIiB9IH0sIFtfdm0uX3YoXCIyNVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjUwXCIgfSB9LCBbX3ZtLl92KFwiNTBcIildKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC00XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTggY29sLW1kLThcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgcm91bmRlZC0wXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wYWdpbmF0ZWRwcm9kdWN0cy5kYXRhLCBmdW5jdGlvbihwcm9kdWN0LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2R1Y3QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiIG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhwcm9kdWN0Lm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxyXFxuICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEocHJvZHVjdC5wcmljZSkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZpc2libGUocHJvZHVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0IGJnLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogcHJvZHVjdC5pc192aXNpYmxlID09IDEgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2R1Y3QuaXNfdmlzaWJsZSA9PSAxID8gXCJzaG93XCIgOiBcImhpZGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtbC1hdXRvIHRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4td2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5vcmdhbml6YXRpb24ocHJvZHVjdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNpdGVtYXAgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBPcmcuXFxyXFxuICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLnByZXZpZXcocHJvZHVjdCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWV5ZSBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVmlld1xcclxcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5ub1NlYXJjaEZvdW5kXG4gICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ub1NlYXJjaEZvdW5kTXNnKSldKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubm9TZWFyY2hGb3VuZCA9PSBmYWxzZVxuICAgICAgICAgICAgPyBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtdC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQ3VycmVudCBQYWdlOiBcIiArIF92bS5fcyhfdm0ucGFnaW5hdGVkcHJvZHVjdHMuY3VycmVudF9wYWdlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZGF0YTogX3ZtLnBhZ2luYXRlZHByb2R1Y3RzLFxuICAgICAgICAgICAgICBsaW1pdDogNSxcbiAgICAgICAgICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBcInBhZ2luYXRpb24tY2hhbmdlLXBhZ2VcIjogX3ZtLmdldFJlc3VsdHMgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNCBjb2wtbWQtNFwiIH0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtfdm0uX3YoXCJQcm9kdWN0c1wiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW19jKFwiaDJcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgY29sLW1kLTZcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodCBtbC0yXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcHJvZHVjdHMvY3JlYXRlL2J1bmRsZVwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wbHVzIG1yLTJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCJOZXcgQnVuZGxlIFByb2R1Y3RcIilcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIixcbiAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9wcm9kdWN0cy9jcmVhdGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cyBtci0yXCIgfSksIF92bS5fdihcIk5ldyBQcm9kdWN0XCIpXVxuICAgICAgKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwicFwiLCBbX2MoXCJiclwiKV0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThmNDliYjcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1OGY0OWJiN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OGY0OWJiNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OGY0OWJiNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OGY0OWJiNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ZjQ5YmI3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU4ZjQ5YmI3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ZjQ5YmI3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThmNDliYjcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OGY0OWJiNyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=