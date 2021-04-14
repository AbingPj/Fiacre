(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ChPSelectedItems"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["cart", "customer_role"],
  methods: {
    displayNumber: function displayNumber(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    sub: function sub(data1, data, index) {
      this.$parent.sub(data1, data, index);
    },
    updateRecurring: function updateRecurring(item) {
      this.$parent.updateRecurring(item);
    },
    subQty: function subQty(item) {
      this.$parent.subQty(item);
    },
    addQty: function addQty(item) {
      this.$parent.addQty(item);
    },
    removeItemInCart: function removeItemInCart(item) {
      this.$parent.removeItemInCart(item);
    },
    subUnsub: function subUnsub(data) {
      if (data.sub == "sub") {
        return "SWAP";
      } else {
        return "RESET";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".items[data-v-860bdd3c] {\n  border: 2px solid lightgray !important;\n}\n.items .cart-items[data-v-860bdd3c] {\n  margin: 20px 0px 20px 0px;\n  padding: 20px 15px 0px 15px;\n  overflow-x: hidden;\n  /* Hide horizontal scrollbar */\n  /* Add vertical scrollbar */\n}\n.items .cart-items .cart-item[data-v-860bdd3c] {\n  padding: 10px;\n  background-color: lightgray;\n}\n.items .cart-items .cart-item .cart-item-image[data-v-860bdd3c] {\n  width: 85px;\n  height: 85px;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px 10px 0px 0px;\n  background-color: white;\n  margin: 0px 10px 0px 0px;\n}\n.items .cart-items .cart-item .cart-item-texts[data-v-860bdd3c] {\n  padding-left: 10px;\n  text-align: left;\n}\n.items .cart-items .cart-item .cart-item-texts .item-name[data-v-860bdd3c] {\n  font-size: 20px;\n}\n.items .cart-items .cart-item .cart-item-texts p[data-v-860bdd3c] {\n  margin-bottom: 0px;\n}\n.items .cart-items .cart-item .cart-item-texts .qty-options[data-v-860bdd3c] {\n  color: #339f25;\n  padding: 0px;\n  font-size: 20px;\n}\n.items .cart-items .cart-item .cart-item-texts .qty-options .plusminus[data-v-860bdd3c] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n  font-size: 20px;\n}\n.items .cart-items .cart-item .cart-item-close-container[data-v-860bdd3c] {\n  width: 20%;\n  padding: 0px;\n  position: relative;\n}\n.items .cart-items .cart-item .cart-item-close-container #x[data-v-860bdd3c] {\n  position: absolute;\n  top: 0px;\n  right: 5px;\n  background: transparent;\n  border: 0px;\n  color: gray;\n}\n.items .cart-items .cart-item .cart-item-close-container #sub-total[data-v-860bdd3c] {\n  position: absolute;\n  bottom: 0px;\n  right: 5px;\n  font-size: 20px;\n}\n.items .cart-items .cart-item .cart-item-close-container #sub-total .ws[data-v-860bdd3c] {\n  font-size: 15px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "col-lg-8 col-md-7 items" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12 cart-items" }, [
        _vm.cart.length == 0
          ? _c("div", { staticClass: "text-center mt-5" }, [
              _c("h3", [_vm._v("You Dont Have Selected Products.")]),
              _vm._v(" "),
              _vm._m(0)
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.cart, function(item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "list-group-item cart-item",
                staticStyle: { "margin-bottom": "10px" }
              },
              [
                _c("div", { staticClass: "d-flex" }, [
                  _c("div", [
                    _c("img", {
                      staticClass: "cart-item-image",
                      attrs: { src: item.image_link }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "cart-item-texts flex-grow-1" }, [
                    _c("p", [
                      _c("span", { staticClass: "item-name" }, [
                        _c("b", [_vm._v(_vm._s(item.name))])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      item.is_subscription == 0
                        ? _c("span", [
                            _vm.customer_role == 2
                              ? _c("span", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(item.member_price) +
                                      "/" +
                                      _vm._s(item.unit)
                                  )
                                ])
                              : _vm.customer_role == 3
                              ? _c("span", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(item.wholesale_price) +
                                      "/" +
                                      _vm._s(item.unit)
                                  )
                                ])
                              : _c("span", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(item.price) +
                                      "/" +
                                      _vm._s(item.unit)
                                  )
                                ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      item.is_subscription == 1
                        ? _c("span", [
                            _vm._v(
                              "$ " +
                                _vm._s(item.price) +
                                "/" +
                                _vm._s(item.unit)
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      item.is_subscription == 1
                        ? _c("span", { staticClass: "qty-options" }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t$ " +
                                _vm._s(item.price) +
                                " X " +
                                _vm._s(item.weeks) +
                                " weeks =\n\t\t\t\t\t\t\t\t\t"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      item.is_subscription == 0
                        ? _c("span", { staticClass: "qty-options" }, [
                            _c("b", [_vm._v("qty:")]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "plusminus",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.subQty(item)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-minus-circle",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("b", [_vm._v(_vm._s(item.qty))]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "plusminus",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.addQty(item)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-plus-circle",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          ])
                        : _vm._e()
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cart-item-close-container ml-auto" },
                    [
                      _c(
                        "button",
                        {
                          attrs: { type: "button", id: "x" },
                          on: {
                            click: function($event) {
                              return _vm.removeItemInCart(item)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-times",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "text-right",
                          attrs: { id: "sub-total" }
                        },
                        [
                          item.is_subscription == 0
                            ? _c("span", [
                                _vm.customer_role == 2
                                  ? _c("b", [
                                      _vm._v(
                                        "$\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.displayNumber(
                                              item.member_price * item.qty
                                            )
                                          )
                                      )
                                    ])
                                  : _vm.customer_role == 3
                                  ? _c("b", [
                                      _vm._v(
                                        "$\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.displayNumber(
                                              item.wholesale_price * item.qty
                                            )
                                          )
                                      )
                                    ])
                                  : _c("b", [
                                      _vm._v(
                                        "$\n\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.displayNumber(
                                              item.price * item.qty
                                            )
                                          )
                                      )
                                    ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          item.is_subscription == 1
                            ? _c("span", [
                                _c("b", [
                                  _vm._v(
                                    "$\n\t\t\t\t\t\t\t\t\t\t\t" +
                                      _vm._s(
                                        _vm.displayNumber(
                                          item.subscription_price
                                        )
                                      )
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("br")
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("br")
                ]),
                _vm._v(" "),
                item.is_subscription == 0
                  ? _c(
                      "div",
                      {
                        staticClass: "custom-control custom-switch pb-3 my-2",
                        on: {
                          click: function($event) {
                            return _vm.updateRecurring(item)
                          }
                        }
                      },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox" },
                          domProps: {
                            checked: item.recurring == true ? true : false
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label",
                            attrs: { for: "customSwitch1" }
                          },
                          [_vm._v("Add to Recurring")]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                item.is_bundle == 1
                  ? _c("div", { staticClass: "row mt-2" }, [
                      _c("div", { staticClass: "col" }, [
                        _c("label", [_vm._v("Included Products:")]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          { staticClass: "list-group list-group-flush" },
                          _vm._l(item.selected_products, function(
                            item2,
                            index
                          ) {
                            return _c(
                              "li",
                              {
                                key: index,
                                staticClass: "list-group-item",
                                staticStyle: { padding: "2px 10px 2px 10px" }
                              },
                              [
                                _c("div", { staticClass: "d-flex" }, [
                                  _c("div", { staticStyle: { width: "20%" } }, [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(item2.qty) +
                                        "/" +
                                        _vm._s(item2.unit) +
                                        "  \n\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticStyle: { width: "30%" } }, [
                                    _c("img", {
                                      staticStyle: {
                                        width: "20px",
                                        height: "20px",
                                        "object-fit": "cover"
                                      },
                                      attrs: { src: item2.image_link }
                                    }),
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                        _vm._s(item2.name) +
                                        "\n\t\t\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-right",
                                      staticStyle: { width: "50%" }
                                    },
                                    [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-sm",
                                          class:
                                            item2.sub == "sub"
                                              ? "btn-info"
                                              : "btn-secondary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.sub(item, item2, index)
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                              _vm._s(_vm.subUnsub(item2)) +
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    ])
                  : _vm._e()
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h5", [
      _c("a", { attrs: { href: "/products" } }, [_vm._v("Back To Products")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/selectedItems.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/selectedItems.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true& */ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true&");
/* harmony import */ var _selectedItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectedItems.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& */ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _selectedItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "860bdd3c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/checkout-page/selectedItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=style&index=0&id=860bdd3c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_style_index_0_id_860bdd3c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/checkout-page/selectedItems.vue?vue&type=template&id=860bdd3c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectedItems_vue_vue_type_template_id_860bdd3c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9zZWxlY3RlZEl0ZW1zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL3NlbGVjdGVkSXRlbXMudnVlPzMzYmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9zZWxlY3RlZEl0ZW1zLnZ1ZT9jZDk3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvc2VsZWN0ZWRJdGVtcy52dWU/YTJlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL3NlbGVjdGVkSXRlbXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvc2VsZWN0ZWRJdGVtcy52dWU/ZDhlYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9jaGVja291dC1wYWdlL3NlbGVjdGVkSXRlbXMudnVlP2I1YjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvY2hlY2tvdXQtcGFnZS9zZWxlY3RlZEl0ZW1zLnZ1ZT82NjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFNBQVMsb0JBQW9CLEVBQUU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMVhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2xHO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXlNLENBQWdCLHlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdOO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLG1jQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL0NoUFNlbGVjdGVkSXRlbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0Lml0ZW1zIHtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xyXG5cclxuXHRcdC5jYXJ0LWl0ZW1zIHtcclxuXHRcdFx0bWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcclxuXHRcdFx0cGFkZGluZzogMjBweCAxNXB4IDBweCAxNXB4O1xyXG5cdFx0XHQvLyBtYXgtaGVpZ2h0OiA1MDBweDsgLy91bmNvbW1lbnQgaWYgdSB3YW50IHRvIHVzZSBzY3JvbGxcclxuXHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuO1xyXG5cdFx0XHQvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcblxyXG5cdFx0XHQvLyBvdmVyZmxvdy15OiBzY3JvbGw7IC8vdW5jb21tZW50IGlmIHUgd2FudCB0byB1c2Ugc2Nyb2xsXHJcblxyXG5cdFx0XHQvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXHJcblx0XHRcdC5jYXJ0LWl0ZW0ge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG5cclxuXHRcdFx0XHQuY2FydC1pdGVtLWltYWdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA4NXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA4NXB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJ0LWl0ZW0tdGV4dHMge1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcclxuXHJcblx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblx0XHRcdFx0XHQuaXRlbS1uYW1lIHtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHAge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0LnF0eS1vcHRpb25zIHtcclxuXHRcdFx0XHRcdFx0Y29sb3I6ICMzMzlmMjU7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cclxuXHRcdFx0XHRcdFx0LnBsdXNtaW51cyB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAwcHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciB7XHJcblx0XHRcdFx0XHR3aWR0aDogMjAlO1xyXG5cdFx0XHRcdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0XHRcdCN4IHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweDtcclxuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjogMHB4O1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQjc3ViLXRvdGFsIHtcclxuXHRcdFx0XHRcdFx0Ly8gICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDBweDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDVweDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cclxuXHRcdFx0XHRcdFx0LndzIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImNvbC1sZy04IGNvbC1tZC03IGl0ZW1zXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgY2FydC1pdGVtc1wiPlxyXG5cdFx0XHRcdDxkaXYgdi1pZj1cImNhcnQubGVuZ3RoID09IDBcIiBjbGFzcz1cInRleHQtY2VudGVyIG10LTVcIj5cclxuXHRcdFx0XHRcdDxoMz5Zb3UgRG9udCBIYXZlIFNlbGVjdGVkIFByb2R1Y3RzLjwvaDM+XHJcblx0XHRcdFx0XHQ8aDU+XHJcblx0XHRcdFx0XHRcdDxhIGhyZWY9XCIvcHJvZHVjdHNcIj5CYWNrIFRvIFByb2R1Y3RzPC9hPlxyXG5cdFx0XHRcdFx0PC9oNT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxpXHJcblx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJ0XCJcclxuXHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2FydC1pdGVtXCJcclxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJpdGVtLmltYWdlX2xpbmtcIiBjbGFzcz1cImNhcnQtaXRlbS1pbWFnZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcnQtaXRlbS10ZXh0cyBmbGV4LWdyb3ctMVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGI+e3sgaXRlbS5uYW1lIH19PC9iPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJjdXN0b21lcl9yb2xlID09IDJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PiQge3sgaXRlbS5tZW1iZXJfcHJpY2UgfX0ve3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS51bml0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fTwvc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWVsc2UtaWY9XCJjdXN0b21lcl9yb2xlID09IDNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PiQge3sgaXRlbS53aG9sZXNhbGVfcHJpY2UgfX0ve3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS51bml0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fTwvc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD4kIHt7IGl0ZW0ucHJpY2UgfX0ve3sgaXRlbS51bml0IH19PC9zcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+JCB7eyBpdGVtLnByaWNlIH19L3t7IGl0ZW0udW5pdCB9fTwvc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInF0eS1vcHRpb25zXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQge3sgaXRlbS5wcmljZSB9fSBYIHt7IGl0ZW0ud2Vla3MgfX0gd2Vla3MgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicXR5LW9wdGlvbnNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGI+cXR5OjwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGx1c21pbnVzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInN1YlF0eShpdGVtKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmYSBmYS1taW51cy1jaXJjbGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj57eyBpdGVtLnF0eSB9fTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwicGx1c21pbnVzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cImFkZFF0eShpdGVtKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmYSBmYS1wbHVzLWNpcmNsZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+PC9pPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0b1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJ4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmVtb3ZlSXRlbUluQ2FydChpdGVtKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgaWQ9XCJzdWItdG90YWxcIiBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiB2LWlmPVwiY3VzdG9tZXJfcm9sZSA9PSAyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD4kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5TnVtYmVyKGl0ZW0ubWVtYmVyX3ByaWNlICogaXRlbS5xdHkpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fTwvYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiB2LWVsc2UtaWY9XCJjdXN0b21lcl9yb2xlID09IDNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PiRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXlOdW1iZXIoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS53aG9sZXNhbGVfcHJpY2UgKiBpdGVtLnF0eVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fTwvYlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YiB2LWVsc2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD4kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBkaXNwbGF5TnVtYmVyKGl0ZW0ucHJpY2UgKiBpdGVtLnF0eSkgfX08L2JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PiRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGRpc3BsYXlOdW1iZXIoaXRlbS5zdWJzY3JpcHRpb25fcHJpY2UpIH19PC9iXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwidXBkYXRlUmVjdXJyaW5nKGl0ZW0pXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2ggcGItMyBteS0yXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0OmNoZWNrZWQ9XCJpdGVtLnJlY3VycmluZyA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiY3VzdG9tU3dpdGNoMVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+QWRkIHRvIFJlY3VycmluZzwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiaXRlbS5pc19idW5kbGUgPT0gMVwiIGNsYXNzPVwicm93IG10LTJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWw+SW5jbHVkZWQgUHJvZHVjdHM6PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2LWZvcj1cIihpdGVtMiwgaW5kZXgpIGluIGl0ZW0uc2VsZWN0ZWRfcHJvZHVjdHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwicGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cIndpZHRoOiAyMCVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbTIucXR5IH19L3t7IGl0ZW0yLnVuaXQgfX0gJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCZuYnNwOyAmbmJzcDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBzdHlsZT1cIndpZHRoOiAzMCVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDpzcmM9XCJpdGVtMi5pbWFnZV9saW5rXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtMi5uYW1lIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogNTAlXCIgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJzdWIoaXRlbSwgaXRlbTIsIGluZGV4KVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0yLnN1YiA9PSAnc3ViJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdidG4taW5mbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYnRuLXNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgc3ViVW5zdWIoaXRlbTIpIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFtcImNhcnRcIiwgXCJjdXN0b21lcl9yb2xlXCJdLFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRkaXNwbGF5TnVtYmVyKHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG5cdFx0XHRcdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB3aXRoQ29tbWFzO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWIoZGF0YTEsIGRhdGEsIGluZGV4KSB7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50LnN1YihkYXRhMSwgZGF0YSwgaW5kZXgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVSZWN1cnJpbmcoaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuJHBhcmVudC51cGRhdGVSZWN1cnJpbmcoaXRlbSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlF0eShpdGVtKSB7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50LnN1YlF0eShpdGVtKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0YWRkUXR5KGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLiRwYXJlbnQuYWRkUXR5KGl0ZW0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRyZW1vdmVJdGVtSW5DYXJ0KGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLiRwYXJlbnQucmVtb3ZlSXRlbUluQ2FydChpdGVtKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViVW5zdWIoZGF0YSkge1xyXG5cdFx0XHRcdGlmIChkYXRhLnN1YiA9PSBcInN1YlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiU1dBUFwiXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlJFU0VUXCJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pdGVtc1tkYXRhLXYtODYwYmRkM2NdIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xcbn1cXG4uaXRlbXMgLmNhcnQtaXRlbXNbZGF0YS12LTg2MGJkZDNjXSB7XFxuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgcGFkZGluZzogMjBweCAxNXB4IDBweCAxNXB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xcbiAgLyogQWRkIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbn1cXG4uaXRlbXMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbVtkYXRhLXYtODYwYmRkM2NdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxufVxcbi5pdGVtcyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0taW1hZ2VbZGF0YS12LTg2MGJkZDNjXSB7XFxuICB3aWR0aDogODVweDtcXG4gIGhlaWdodDogODVweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XFxufVxcbi5pdGVtcyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tdGV4dHNbZGF0YS12LTg2MGJkZDNjXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4uaXRlbXMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzIC5pdGVtLW5hbWVbZGF0YS12LTg2MGJkZDNjXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5pdGVtcyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tdGV4dHMgcFtkYXRhLXYtODYwYmRkM2NdIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuLml0ZW1zIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyAucXR5LW9wdGlvbnNbZGF0YS12LTg2MGJkZDNjXSB7XFxuICBjb2xvcjogIzMzOWYyNTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLml0ZW1zIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyAucXR5LW9wdGlvbnMgLnBsdXNtaW51c1tkYXRhLXYtODYwYmRkM2NdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLml0ZW1zIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXJbZGF0YS12LTg2MGJkZDNjXSB7XFxuICB3aWR0aDogMjAlO1xcbiAgcGFkZGluZzogMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaXRlbXMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAjeFtkYXRhLXYtODYwYmRkM2NdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLml0ZW1zIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgI3N1Yi10b3RhbFtkYXRhLXYtODYwYmRkM2NdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLml0ZW1zIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgI3N1Yi10b3RhbCAud3NbZGF0YS12LTg2MGJkZDNjXSB7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODYwYmRkM2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxlY3RlZEl0ZW1zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg2MGJkZDNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODYwYmRkM2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctOCBjb2wtbWQtNyBpdGVtc1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyIGNhcnQtaXRlbXNcIiB9LCBbXG4gICAgICAgIF92bS5jYXJ0Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIG10LTVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIllvdSBEb250IEhhdmUgU2VsZWN0ZWQgUHJvZHVjdHMuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNhcnQsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGNhcnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLXRleHRzIGZsZXgtZ3Jvdy0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jdXN0b21lcl9yb2xlID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5tZW1iZXJfcHJpY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmN1c3RvbWVyX3JvbGUgPT0gM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLndob2xlc2FsZV9wcmljZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByaWNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByaWNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInF0eS1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByaWNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS53ZWVrcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB3ZWVrcyA9XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJxdHktb3B0aW9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcInF0eTpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGx1c21pbnVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1YlF0eShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1taW51cy1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucXR5KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGx1c21pbnVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZFF0eShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1wbHVzLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0b1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIsIGlkOiBcInhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlSXRlbUluQ2FydChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwic3ViLXRvdGFsXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tZW1iZXJfcHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uY3VzdG9tZXJfcm9sZSA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndob2xlc2FsZV9wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN1YnNjcmlwdGlvbl9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaCBwYi0zIG15LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVJlY3VycmluZyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogaXRlbS5yZWN1cnJpbmcgPT0gdHJ1ZSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiY3VzdG9tU3dpdGNoMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFkZCB0byBSZWN1cnJpbmdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgaXRlbS5pc19idW5kbGUgPT0gMVxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiSW5jbHVkZWQgUHJvZHVjdHM6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5zZWxlY3RlZF9wcm9kdWN0cywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIycHggMTBweCAycHggMTBweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjAlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtMi5xdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0yLnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiDCoFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdMKgIMKgXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzAlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0yLmltYWdlX2xpbmsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtMi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwJVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLnN1YiA9PSBcInN1YlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJ0bi1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYnRuLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3ViKGl0ZW0sIGl0ZW0yLCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN1YlVuc3ViKGl0ZW0yKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDVcIiwgW1xuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvcHJvZHVjdHNcIiB9IH0sIFtfdm0uX3YoXCJCYWNrIFRvIFByb2R1Y3RzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2VsZWN0ZWRJdGVtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODYwYmRkM2Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2VsZWN0ZWRJdGVtcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODYwYmRkM2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NjBiZGQzY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4NjBiZGQzYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4NjBiZGQzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4NjBiZGQzYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VsZWN0ZWRJdGVtcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODYwYmRkM2Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODYwYmRkM2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL2NoZWNrb3V0LXBhZ2Uvc2VsZWN0ZWRJdGVtcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2VsZWN0ZWRJdGVtcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NjBiZGQzYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODYwYmRkM2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdGVkSXRlbXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2MGJkZDNjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==