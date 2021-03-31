(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Promotions"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errorClass */ "./resources/js/backend/errorClass.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import summernote from "../../plugin/summernote-bs4.min.js";

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propemail"],
  data: function data() {
    var _ref;

    return _ref = {
      email: null,
      subject: null,
      myHTML: "",
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      sendto: "all"
    }, _defineProperty(_ref, "subject", "Sunfarmacy Promotions"), _defineProperty(_ref, "content", '<h2 style="text-align:center"> Sunfarmacy Promotions </h2> <br> '), _defineProperty(_ref, "selectedProducts", []), _ref;
  },
  created: function created() {
    this.email = this.propemail;
  },
  mounted: function mounted() {
    var self = this;
    $(document).ready(function () {
      $("#summernote_content").summernote({
        placeholder: "Content here",
        tabsize: 2,
        toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
        // default value is ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        styleTags: ["p", "blockquote", "pre", "h2", "h3", "h4", "h5"]
      });
      var markupStr = self.content;
      $("#summernote_content").summernote("code", markupStr);
    });
  },
  methods: {
    addSelectedProduct: function addSelectedProduct(data) {
      this.selectedProducts.push(data);
    },
    selectProducts: function selectProducts() {
      $("#selectProductsModal3").modal("show");
    },
    sendEmail: function sendEmail() {
      var _this = this;

      LoadingOverlay(); //   LoadingOverlayHide();
      //   let msg = ["Work In Progress"];
      //   this.showErrorMessage(msg);
      //   window.scrollTo(0, 0);
      //   LoadingOverlayHide();

      var myForm = document.getElementById("myForm");
      var formData = new FormData(myForm);
      formData.append("products", JSON.stringify(this.selectedProducts)); //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   //   formData.append("content", this.myHTML);

      axios.post("/admin/sendPromotions", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        console.log(res);

        _this.showSuccessMessage(res.data);

        LoadingOverlayHide();
        window.scrollTo(0, 0);
      })["catch"](function (err) {
        console.error(err);

        _this.errors.record(err.response.data.errors);

        _this.showErrorMessage(_this.errors.getArrayOfMessages());

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },
    removeSelectedProduct: function removeSelectedProduct(data) {
      this.$refs.select_products_modal.products.forEach(function (product) {
        if (product.id == data.id) {
          product.selected = false;
        }
      });
      this.selectedProducts.splice(this.selectedProducts.findIndex(function (i) {
        return i.id === data.id;
      }), 1);
    },
    showSuccessMessage: function showSuccessMessage(msg) {
      //   console.log(shit);
      this.$events.fire("showSuccessMessage", msg);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.btn-edit[data-v-63772583] {\r\n  background: transparent;\r\n  border: 0px;\r\n  color: gray;\r\n  font-size: 20px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "d-flex flex-column min-vh-100" },
    [
      _c("div", { staticClass: "container" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-10 mt-5" }, [
            _c(
              "form",
              {
                attrs: { id: "myForm", name: "myForm" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.sendEmail()
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group mb-3" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Send To")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-check form-check-inline" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sendto,
                          expression: "sendto"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: { type: "radio", name: "sendto", value: "all" },
                      domProps: { checked: _vm._q(_vm.sendto, "all") },
                      on: {
                        change: function($event) {
                          _vm.sendto = "all"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        attrs: { for: "inlineRadio1" }
                      },
                      [_vm._v("All Members")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-check form-check-inline" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sendto,
                          expression: "sendto"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "sendto",
                        value: "sunclubmembers"
                      },
                      domProps: {
                        checked: _vm._q(_vm.sendto, "sunclubmembers")
                      },
                      on: {
                        change: function($event) {
                          _vm.sendto = "sunclubmembers"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        attrs: { for: "inlineRadio2" }
                      },
                      [_vm._v("Sun Club Members")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-check form-check-inline" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.sendto,
                          expression: "sendto"
                        }
                      ],
                      staticClass: "form-check-input",
                      attrs: {
                        type: "radio",
                        name: "sendto",
                        value: "wholesalers"
                      },
                      domProps: { checked: _vm._q(_vm.sendto, "wholesalers") },
                      on: {
                        change: function($event) {
                          _vm.sendto = "wholesalers"
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "form-check-label",
                        attrs: { for: "inlineRadio2" }
                      },
                      [_vm._v("Wholesalers")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Subject")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.subject,
                        expression: "subject"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { name: "subject", type: "text" },
                    domProps: { value: _vm.subject },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.subject = $event.target.value
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { staticClass: "font-weight-bold" }, [
                    _vm._v("Select Products to promote:")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm.selectedProducts.length == 0
                    ? _c("div", { staticClass: "text-center" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-lg btn-info",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.selectProducts()
                              }
                            }
                          },
                          [_vm._v("Select Products to Promote")]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedProducts.length != 0
                    ? _c("div", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.selectProducts()
                              }
                            }
                          },
                          [_vm._v("Select More")]
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "w-100" }, [
                  _c(
                    "div",
                    { staticClass: "d-flex flex-wrap" },
                    _vm._l(_vm.selectedProducts, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "d-flex flex-row mt-3 w-50"
                        },
                        [
                          _c("div", { staticClass: "mr-2" }, [
                            _c("img", {
                              staticStyle: {
                                width: "100px",
                                height: "100px",
                                "object-fit": "cover"
                              },
                              attrs: { src: item.image_link }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "w-50" }, [
                            _c("h6", [
                              _c("b", [_vm._v(_vm._s(item.name))]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn-edit float-right text-danger",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      return _vm.removeSelectedProduct(item)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [_vm._v("price: " + _vm._s(item.price))]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "sunclub price: " + _vm._s(item.member_price)
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm._v(
                                "wholesale price: " +
                                  _vm._s(item.wholesale_price)
                              )
                            ])
                          ])
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _vm._m(2)
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("admin-select-products-modal-3", {
        ref: "select_products_modal",
        attrs: { selected_products: _vm.selectedProducts }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [_vm._v("Promotions")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("label", { staticClass: "font-weight-bold" }, [_vm._v("Content:")]),
      _vm._v(" "),
      _c("textarea", { attrs: { id: "summernote_content", name: "content" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("button", { staticClass: "btn btn-success float-right" }, [
        _c("i", { staticClass: "fas fa-paper-plane mr-2" }),
        _vm._v(" Send\n            ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/promotions/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/promotions/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=63772583&scoped=true& */ "./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& */ "./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63772583",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/promotions/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=style&index=0&id=63772583&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_63772583_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=63772583&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/promotions/index.vue?vue&type=template&id=63772583&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_63772583_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/errorClass.js":
/*!********************************************!*\
  !*** ./resources/js/backend/errorClass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      // console.log("getting this field" + field)
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.errors[field];
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "getAllMessages",
    value: function getAllMessages() {
      var str = "";

      if (Object.keys(this.errors).length > 0 == true) {
        var keys = Object.keys(this.errors);

        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          var key = _keys[_i];
          str = str + this.get(key);
          +", ";
        }
      }

      return str;
    }
  }, {
    key: "getArrayOfMessages",
    value: function getArrayOfMessages() {
      var arr = [];

      if (Object.keys(this.errors).length > 0 == true) {
        var keys = Object.keys(this.errors);

        for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
          var key = _keys2[_i2];
          // let obj = {
          //   msg: this.get(key),
          // };
          arr.push(this.get(key));
        }
      }

      return arr;
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }]);

  return Errors;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9tb3Rpb25zL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb21vdGlvbnMvaW5kZXgudnVlPzZlNWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9tb3Rpb25zL2luZGV4LnZ1ZT85OGJkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvbW90aW9ucy9pbmRleC52dWU/MjcwYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb21vdGlvbnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvbW90aW9ucy9pbmRleC52dWU/YjMwMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb21vdGlvbnMvaW5kZXgudnVlPzZmNGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9tb3Rpb25zL2luZGV4LnZ1ZT8yYzQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUFsQyxJQUF1QyxJQUEzQyxFQUFpRDtBQUM3QyxZQUFNRCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLENBQWI7O0FBQ0EsaUNBQWtCSyxJQUFsQiwyQkFBd0I7QUFBbkIsY0FBTUUsR0FBRyxZQUFUO0FBQ0RKLGFBQUcsR0FBR0EsR0FBRyxHQUFHLEtBQUtLLEdBQUwsQ0FBU0QsR0FBVCxDQUFaO0FBQ0EsV0FBQyxJQUFEO0FBQ0g7QUFDSjs7QUFDRCxhQUFPSixHQUFQO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsVUFBSU0sR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxtQ0FBa0JLLElBQWxCLDhCQUF3QjtBQUFuQixjQUFNRSxHQUFHLGNBQVQ7QUFDRDtBQUNBO0FBQ0E7QUFDQUUsYUFBRyxDQUFDQyxJQUFKLENBQVMsS0FBS0YsR0FBTCxDQUFTRCxHQUFULENBQVQ7QUFDSDtBQUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvYi9Qcm9tb3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5Qcm9tb3Rpb25zPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwIG10LTVcIj5cclxuICAgICAgICAgIDxmb3JtIGlkPVwibXlGb3JtXCIgbmFtZT1cIm15Rm9ybVwiIEBzdWJtaXQucHJldmVudD1cInNlbmRFbWFpbCgpXCI+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RDdXN0b21lcigpXCJcclxuICAgICAgICAgICAgICA+U2VsZWN0IEN1c3RvbWVyIEVtYWlsPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TZW5kIFRvPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZW5kdG9cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VuZHRvXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJhbGxcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVSYWRpbzFcIj5BbGwgTWVtYmVyczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1jaGVjay1pbmxpbmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VuZHRvXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbmR0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwic3VuY2x1Ym1lbWJlcnNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVSYWRpbzJcIj5TdW4gQ2x1YiBNZW1iZXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZW5kdG9cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VuZHRvXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ3aG9sZXNhbGVyc1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZVJhZGlvMlwiPldob2xlc2FsZXJzPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbmR0b1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZW5kdG9cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VuZHRvXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzcGVjaWZpY1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZVJhZGlvMlwiPlNwZWNpZmljPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdWJqZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInN1YmplY3RcIiBuYW1lPVwic3ViamVjdFwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNvbnRlbnQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJzdW1tZXJub3RlX2NvbnRlbnRcIiBuYW1lPVwiY29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+U2VsZWN0IFByb2R1Y3RzIHRvIHByb21vdGU6PC9sYWJlbD5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0UHJvZHVjdHMoKVwiXHJcbiAgICAgICAgICAgICAgICA+U2VsZWN0IFByb2R1Y3RzIHRvIFByb21vdGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZFByb2R1Y3RzLmxlbmd0aCAhPSAwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIlxyXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZWxlY3RQcm9kdWN0cygpXCJcclxuICAgICAgICAgICAgICAgID5TZWxlY3QgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzZWxlY3RlZFByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLWZsZXggZmxleC1yb3cgbXQtMyB3LTUwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5pbWFnZV9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7aXRlbS5uYW1lfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi1lZGl0IGZsb2F0LXJpZ2h0IHRleHQtZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlU2VsZWN0ZWRQcm9kdWN0KGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjEwcHg7XCI+KHt7aXRlbS5za3V9fSk8L3NwYW4+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+cHJpY2U6IHt7aXRlbS5wcmljZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5zdW5jbHViIHByaWNlOiB7e2l0ZW0ubWVtYmVyX3ByaWNlfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pndob2xlc2FsZSBwcmljZToge3tpdGVtLndob2xlc2FsZV9wcmljZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wYXBlci1wbGFuZSBtci0yXCI+PC9pPiBTZW5kXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxhZG1pbi1zZWxlY3QtcHJvZHVjdHMtbW9kYWwtM1xyXG4gICAgICByZWY9XCJzZWxlY3RfcHJvZHVjdHNfbW9kYWxcIlxyXG4gICAgICA6c2VsZWN0ZWRfcHJvZHVjdHM9XCJzZWxlY3RlZFByb2R1Y3RzXCJcclxuICAgID48L2FkbWluLXNlbGVjdC1wcm9kdWN0cy1tb2RhbC0zPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgc3VtbWVybm90ZSBmcm9tIFwiLi4vLi4vcGx1Z2luL3N1bW1lcm5vdGUtYnM0Lm1pbi5qc1wiO1xyXG5pbXBvcnQgRXJyb3JzIGZyb20gXCIuLi8uLi9lcnJvckNsYXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInByb3BlbWFpbFwiXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZW1haWw6IG51bGwsXHJcbiAgICAgIHN1YmplY3Q6IG51bGwsXHJcbiAgICAgIG15SFRNTDogXCJcIixcclxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXHJcbiAgICAgIHNlbmR0bzogXCJhbGxcIixcclxuICAgICAgc3ViamVjdDogXCJTdW5mYXJtYWN5IFByb21vdGlvbnNcIixcclxuICAgICAgY29udGVudDpcclxuICAgICAgICAnPGgyIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj4gU3VuZmFybWFjeSBQcm9tb3Rpb25zIDwvaDI+IDxicj4gJyxcclxuICAgICAgc2VsZWN0ZWRQcm9kdWN0czogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZW1haWwgPSB0aGlzLnByb3BlbWFpbDtcclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI3N1bW1lcm5vdGVfY29udGVudFwiKS5zdW1tZXJub3RlKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDb250ZW50IGhlcmVcIixcclxuICAgICAgICB0YWJzaXplOiAyLFxyXG4gICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgIFtcInN0eWxlXCIsIFtcInN0eWxlXCJdXSxcclxuICAgICAgICAgIFtcImZvbnRcIiwgW1wiYm9sZFwiLCBcInVuZGVybGluZVwiLCBcImNsZWFyXCJdXSxcclxuICAgICAgICAgIFtcImNvbG9yXCIsIFtcImNvbG9yXCJdXSxcclxuICAgICAgICAgIFtcInBhcmFcIiwgW1widWxcIiwgXCJvbFwiLCBcInBhcmFncmFwaFwiXV0sXHJcbiAgICAgICAgICBbXCJ0YWJsZVwiLCBbXCJ0YWJsZVwiXV0sXHJcbiAgICAgICAgICBbXCJpbnNlcnRcIiwgW1wibGlua1wiLCBcInBpY3R1cmVcIiwgXCJ2aWRlb1wiXV0sXHJcbiAgICAgICAgICBbXCJ2aWV3XCIsIFtcImZ1bGxzY3JlZW5cIiwgXCJjb2Rldmlld1wiLCBcImhlbHBcIl1dLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZSBpcyBbJ3AnLCAnYmxvY2txdW90ZScsICdwcmUnLCAnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnXVxyXG4gICAgICAgIHN0eWxlVGFnczogW1wicFwiLCBcImJsb2NrcXVvdGVcIiwgXCJwcmVcIiwgXCJoMlwiLCBcImgzXCIsIFwiaDRcIiwgXCJoNVwiXSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB2YXIgbWFya3VwU3RyID0gc2VsZi5jb250ZW50O1xyXG4gICAgICAkKFwiI3N1bW1lcm5vdGVfY29udGVudFwiKS5zdW1tZXJub3RlKFwiY29kZVwiLCBtYXJrdXBTdHIpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGRTZWxlY3RlZFByb2R1Y3QoZGF0YSkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdHMucHVzaChkYXRhKTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RQcm9kdWN0cygpIHtcclxuICAgICAgJChcIiNzZWxlY3RQcm9kdWN0c01vZGFsM1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9LFxyXG4gICAgc2VuZEVtYWlsKCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICAvLyAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAvLyAgIGxldCBtc2cgPSBbXCJXb3JrIEluIFByb2dyZXNzXCJdO1xyXG4gICAgICAvLyAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShtc2cpO1xyXG4gICAgICAvLyAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHJcbiAgICAgIC8vICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblxyXG4gICAgICBsZXQgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XHJcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShteUZvcm0pO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9kdWN0c1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLnNlbGVjdGVkUHJvZHVjdHMpKTtcclxuXHJcbiAgICAgIC8vICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgICAvLyAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShteUZvcm0pO1xyXG4gICAgICAvLyAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCB0aGlzLm15SFRNTCk7XHJcblxyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL3NlbmRQcm9tb3Rpb25zXCIsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB0aGlzLnNob3dTdWNjZXNzTWVzc2FnZShyZXMuZGF0YSk7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhzaGl0KTtcclxuICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJzaG93RXJyb3JNZXNzYWdlXCIsIGVycm9ycyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHJlbW92ZVNlbGVjdGVkUHJvZHVjdChkYXRhKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMuc2VsZWN0X3Byb2R1Y3RzX21vZGFsLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5zcGxpY2UoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RzLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgMVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93U3VjY2Vzc01lc3NhZ2UobXNnKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coc2hpdCk7XHJcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd1N1Y2Nlc3NNZXNzYWdlXCIsIG1zZyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5idG4tZWRpdCB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmJ0bi1lZGl0W2RhdGEtdi02Mzc3MjU4M10ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDBweDtcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXHJcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzNzcyNTgzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzNzcyNTgzJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mzc3MjU4MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTAgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm15Rm9ybVwiLCBuYW1lOiBcIm15Rm9ybVwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VuZEVtYWlsKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZW5kIFRvXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbmR0byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZW5kdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicmFkaW9cIiwgbmFtZTogXCJzZW5kdG9cIiwgdmFsdWU6IFwiYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLnNlbmR0bywgXCJhbGxcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbmR0byA9IFwiYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlubGluZVJhZGlvMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBbGwgTWVtYmVyc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VuZHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbmR0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VuZHRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJzdW5jbHVibWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLl9xKF92bS5zZW5kdG8sIFwic3VuY2x1Ym1lbWJlcnNcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VuZHRvID0gXCJzdW5jbHVibWVtYmVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2stbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmVSYWRpbzJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VuIENsdWIgTWVtYmVyc1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VuZHRvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbmR0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2VuZHRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ3aG9sZXNhbGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLnNlbmR0bywgXCJ3aG9sZXNhbGVyc1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VuZHRvID0gXCJ3aG9sZXNhbGVyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2stbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbmxpbmVSYWRpbzJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2hvbGVzYWxlcnNcIildXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3ViamVjdFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3ViamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3ViamVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJzdWJqZWN0XCIsIHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3ViamVjdCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zdWJqZWN0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgUHJvZHVjdHMgdG8gcHJvbW90ZTpcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWxnIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0UHJvZHVjdHMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdCBQcm9kdWN0cyB0byBQcm9tb3RlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoICE9IDBcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RQcm9kdWN0cygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VsZWN0IE1vcmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXdyYXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdGVkUHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93IG10LTMgdy01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy01MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0bi1lZGl0IGZsb2F0LXJpZ2h0IHRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlU2VsZWN0ZWRQcm9kdWN0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS10aW1lcy1jaXJjbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJwcmljZTogXCIgKyBfdm0uX3MoaXRlbS5wcmljZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3VuY2x1YiBwcmljZTogXCIgKyBfdm0uX3MoaXRlbS5tZW1iZXJfcHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hvbGVzYWxlIHByaWNlOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ud2hvbGVzYWxlX3ByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhZG1pbi1zZWxlY3QtcHJvZHVjdHMtbW9kYWwtM1wiLCB7XG4gICAgICAgIHJlZjogXCJzZWxlY3RfcHJvZHVjdHNfbW9kYWxcIixcbiAgICAgICAgYXR0cnM6IHsgc2VsZWN0ZWRfcHJvZHVjdHM6IF92bS5zZWxlY3RlZFByb2R1Y3RzIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtfdm0uX3YoXCJQcm9tb3Rpb25zXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW192bS5fdihcIkNvbnRlbnQ6XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7IGF0dHJzOiB7IGlkOiBcInN1bW1lcm5vdGVfY29udGVudFwiLCBuYW1lOiBcImNvbnRlbnRcIiB9IH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wYXBlci1wbGFuZSBtci0yXCIgfSksXG4gICAgICAgIF92bS5fdihcIiBTZW5kXFxuICAgICAgICAgICAgXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM3NzI1ODMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjM3NzI1ODMmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjYzNzcyNTgzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2Mzc3MjU4MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2Mzc3MjU4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2Mzc3MjU4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzNzcyNTgzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYzNzcyNTgzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb21vdGlvbnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mzc3MjU4MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02Mzc3MjU4MyZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM3NzI1ODMmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==