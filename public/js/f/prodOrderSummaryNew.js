(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/prodOrderSummaryNew"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["cart", "customer_role", "minimum", "guest"],
  methods: {
    proccedToCheckout: function proccedToCheckout() {
      //   window.location.href = "/products/checkout";
      if (this.customer_role == 0) {
        alert("under construction for admin checkout");
      } else {
        this.setCartExpiry(86400000);

        if (this.guest == "1") {
          $("#modalLogin").modal("show");
        } else {
          if (this.customer_role == 1) {
            LoadingOverlay();
            window.location.href = "/register/success/confirmed";
          } else {
            LoadingOverlay();
            window.location.href = "/products/checkout";
          }
        } // if (this.customer_role == 3) {
        //   if (this.totalAmount < this.minimum) {
        //     $("#warningModal").modal("show");
        //   } else {
        //     LoadingOverlay();
        //     window.location.href = "/products/checkout";
        //   }
        // } else {
        // LoadingOverlay();
        // window.location.href = "/products/checkout";
        // }

      }
    },
    setCartExpiry: function setCartExpiry(ttl) {
      var now = new Date();
      var expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },
    removeItemInCart: function removeItemInCart(data) {
      this.$parent.removeItemInCart(data);
    },
    showProductsModalEdit: function showProductsModalEdit(data) {
      this.$parent.showAddToCartModalEdit(data);
    },
    subTotal: function subTotal(item) {
      var subtotal = 0;

      if (this.customer_role == 2) {
        subtotal = item.member_price * item.qty;
      } else if (this.customer_role == 3) {
        subtotal = item.wholesale_price * item.qty;
      } else {
        subtotal = item.price * item.qty;
      }

      return subtotal;
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  },
  computed: {
    totalAmount: function totalAmount() {
      var _this = this;

      if (this.cart.length == 0) {
        return 0.0;
      } else {
        var total = 0;
        this.cart.forEach(function (cart) {
          if (cart.is_subscription == 1) {
            total = total + cart.subscription_price;
          } else {
            if (_this.customer_role == 2) {
              total = total + cart.member_price * cart.qty;
            } else if (_this.customer_role == 3) {
              total = total + cart.wholesale_price * cart.qty;
            } else {
              total = total + cart.price * cart.qty;
            }
          }
        });
        return total;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cart-container[data-v-70806eae] {\n  min-height: 325px;\n  border: 2px solid lightgray !important;\n  margin-top: 20px;\n  margin-right: 5px;\n  margin-left: 5px;\n  padding: 0px;\n  border-radius: 5px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 130px;\n}\n.cart-container .cart-header[data-v-70806eae] {\n  padding: 10px 0;\n  text-align: center;\n}\n.cart-container .btn-primary[data-v-70806eae] {\n  background-color: #339f25 !important;\n}\n.cart-container .cart-items[data-v-70806eae] {\n  margin-bottom: 30px;\n  max-height: 500px;\n  overflow-x: hidden;\n  /* Hide horizontal scrollbar */\n  overflow-y: scroll;\n  /* Add vertical scrollbar */\n}\n.cart-container .cart-items .cart-item[data-v-70806eae] {\n  padding: 5px;\n  background-color: lightgray;\n}\n.cart-container .cart-items .cart-item .cart-item-image[data-v-70806eae] {\n  width: 68px;\n  height: 68px;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px 10px 0px 0px;\n  background-color: white;\n  margin: 0px 10px 0px 0px;\n}\n.cart-container .cart-items .cart-item .cart-item-texts[data-v-70806eae] {\n  text-align: left;\n}\n.cart-container .cart-items .cart-item .cart-item-texts p[data-v-70806eae] {\n  margin-bottom: 0px;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container[data-v-70806eae] {\n  padding: 0px;\n  position: relative;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container .top-right[data-v-70806eae] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container .top-right .u-btn[data-v-70806eae] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container .top-right .u-btn[data-v-70806eae]:hover {\n  color: #339f25;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container .top-right .x-btn[data-v-70806eae] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container .top-right .x-btn[data-v-70806eae]:hover {\n  color: red;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container #sub-total[data-v-70806eae] {\n  width: 90px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  text-align: right;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cart-container bg-white border-0" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 text-center" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-lg btn-primary w-100",
          attrs: { type: "button", disabled: _vm.cart.length == 0 },
          on: {
            click: function($event) {
              return _vm.proccedToCheckout()
            }
          }
        },
        [_vm._v("\n\t\t\t\tProceed to Checkout\n\t\t\t")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-12 text-center" }, [
      _c("div", { staticClass: "mt-4" }, [_vm._v("Total Amount:")]),
      _vm._v(" "),
      _c("div", { staticClass: "total-cart-price mb-1" }, [
        _c("h4", [
          _c("b", [
            _vm._v("$ " + _vm._s(_vm.displayNumberWithComma(_vm.totalAmount)))
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.customer_role == 3
        ? _c("div", [
            _c("div", [_vm._v("(Wholesaler Minimum Order Amount:)")]),
            _vm._v(" "),
            _c("div", { staticClass: "mb-4" }, [
              _vm._v("$ " + _vm._s(_vm.minimum.toFixed(2)))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 cart-items" }, [
          _c(
            "ul",
            { staticClass: "list-group" },
            _vm._l(_vm.cart, function(item, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "list-group-item d-flex cart-item",
                  staticStyle: { "margin-bottom": "10px" }
                },
                [
                  _c(
                    "div",
                    {
                      on: {
                        click: function($event) {
                          return _vm.updateQtyModal(item)
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "cart-item-image",
                        attrs: { src: item.image_link }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "cart-item-texts w-50",
                      on: {
                        click: function($event) {
                          return _vm.updateQtyModal(item)
                        }
                      }
                    },
                    [
                      _c("p", [
                        _c("b", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _vm.customer_role == 2
                          ? _c("span", [
                              _vm._v(
                                "$\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.displayNumberWithComma(
                                      item.member_price
                                    )
                                  ) +
                                  "/" +
                                  _vm._s(item.unit)
                              )
                            ])
                          : _vm.customer_role == 3
                          ? _c("span", [
                              _vm._v(
                                "$\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.displayNumberWithComma(
                                      item.wholesale_price
                                    )
                                  ) +
                                  "/" +
                                  _vm._s(item.unit)
                              )
                            ])
                          : _c("span", [
                              _vm._v(
                                "$ " +
                                  _vm._s(
                                    _vm.displayNumberWithComma(item.price)
                                  ) +
                                  "/" +
                                  _vm._s(item.unit)
                              )
                            ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        item.is_subscription == 0
                          ? _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "#339f25",
                                  padding: "0px"
                                }
                              },
                              [
                                _vm._v(
                                  "Qty: " +
                                    _vm._s(item.qty) +
                                    " " +
                                    _vm._s(item.unit)
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        item.is_subscription == 1
                          ? _c(
                              "span",
                              {
                                staticStyle: {
                                  color: "#339f25",
                                  padding: "0px"
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.price)
                                    ) +
                                    " *\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(item.weeks) +
                                    " weeks =\n\t\t\t\t\t\t\t\t\t"
                                )
                              ]
                            )
                          : _vm._e()
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cart-item-close-container ml-auto w-25" },
                    [
                      _c("div", { staticClass: "top-right" }, [
                        _vm.guest == "0"
                          ? _c(
                              "button",
                              {
                                staticClass: "u-btn",
                                on: {
                                  click: function($event) {
                                    return _vm.showProductsModalEdit(item)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-pencil-alt",
                                  attrs: { "aria-hidden": "true" }
                                })
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "x-btn",
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
                        )
                      ]),
                      _vm._v(" "),
                      _c("span", { attrs: { id: "sub-total" } }, [
                        item.is_subscription == 0
                          ? _c("b", [
                              _vm._v(
                                "$ " +
                                  _vm._s(
                                    _vm.displayNumberWithComma(
                                      _vm.subTotal(item)
                                    )
                                  )
                              )
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        item.is_subscription == 1
                          ? _c("b", [
                              _vm._v(
                                "$\n\t\t\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm.displayNumberWithComma(
                                      item.subscription_price
                                    )
                                  )
                              )
                            ])
                          : _vm._e()
                      ])
                    ]
                  )
                ]
              )
            }),
            0
          )
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
    return _c("div", { staticClass: "col-md-12 cart-header" }, [
      _c("h5", { staticClass: "text-secondary" }, [_vm._v("ORDER SUMMARY")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/products-page/orderSummary.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/orderSummary.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderSummary.vue?vue&type=template&id=70806eae&scoped=true& */ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true&");
/* harmony import */ var _orderSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderSummary.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& */ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70806eae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/products-page/orderSummary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderSummary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=style&index=0&id=70806eae&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_style_index_0_id_70806eae_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./orderSummary.vue?vue&type=template&id=70806eae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/orderSummary.vue?vue&type=template&id=70806eae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_orderSummary_vue_vue_type_template_id_70806eae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9vcmRlclN1bW1hcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9mMTBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT8xZGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9kN2JkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/ZTIxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTZjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTNjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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IjoianMvZi9wcm9kT3JkZXJTdW1tYXJ5TmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdEBpbXBvcnQgXCJyZXNvdXJjZXMvc2Fzcy9taXhpbnNcIjtcclxuXHJcblx0LmNhcnQtY29udGFpbmVyIHtcclxuXHRcdG1pbi1oZWlnaHQ6IDMyNXB4O1xyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRtYXJnaW4tbGVmdDogNXB4O1xyXG5cdFx0cGFkZGluZzogMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0cG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG5cdFx0cG9zaXRpb246IHN0aWNreTtcclxuXHRcdHRvcDogMTMwcHg7XHJcblx0XHQuY2FydC1oZWFkZXIge1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4IDA7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5idG4tcHJpbWFyeSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxuXHRcdH1cclxuXHRcdC5jYXJ0LWl0ZW1zIHtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHRcdFx0bWF4LWhlaWdodDogNTAwcHg7XHJcblx0XHRcdG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xyXG5cdFx0XHRvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFkZCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuXHRcdFx0LmNhcnQtaXRlbSB7XHJcblx0XHRcdFx0cGFkZGluZzogNXB4O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuXHRcdFx0XHQuY2FydC1pdGVtLWltYWdlIHtcclxuXHRcdFx0XHRcdHdpZHRoOiA2OHB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA2OHB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRcdG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmNhcnQtaXRlbS10ZXh0cyB7XHJcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cdFx0XHRcdFx0cCB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIHtcclxuXHRcdFx0XHRcdC8vIHdpZHRoOiAxMCU7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwcHg7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHQudG9wLXJpZ2h0IHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHR0b3A6IDBweDtcclxuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnUtYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC51LWJ0bjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzM5ZjI1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC54LWJ0bntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAueC1idG46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0I3N1Yi10b3RhbCB7XHJcblx0XHRcdFx0XHRcdC8vICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA5MHB4O1xyXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcbjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiY2FydC1jb250YWluZXIgYmctd2hpdGUgYm9yZGVyLTBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY2FydC1oZWFkZXJcIj5cclxuXHRcdFx0PGg1IGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5PUkRFUiBTVU1NQVJZPC9oNT5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHctMTAwXCJcclxuXHRcdFx0XHRAY2xpY2s9XCJwcm9jY2VkVG9DaGVja291dCgpXCJcclxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJjYXJ0Lmxlbmd0aCA9PSAwXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdFByb2NlZWQgdG8gQ2hlY2tvdXRcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cIm10LTRcIj5Ub3RhbCBBbW91bnQ6PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b3RhbC1jYXJ0LXByaWNlIG1iLTFcIj5cclxuXHRcdFx0XHQ8aDQ+XHJcblx0XHRcdFx0XHQ8Yj4kIHt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodG90YWxBbW91bnQpIH19PC9iPlxyXG5cdFx0XHRcdDwvaDQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IHYtaWY9XCJjdXN0b21lcl9yb2xlID09IDNcIj5cclxuXHRcdFx0XHQ8ZGl2PihXaG9sZXNhbGVyIE1pbmltdW0gT3JkZXIgQW1vdW50Oik8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWItNFwiPiQge3sgbWluaW11bS50b0ZpeGVkKDIpIH19PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCI+XHJcblx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJ0XCJcclxuXHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBjYXJ0LWl0ZW1cIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IEBjbGljaz1cInVwZGF0ZVF0eU1vZGFsKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJpdGVtLmltYWdlX2xpbmtcIiBjbGFzcz1cImNhcnQtaXRlbS1pbWFnZVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXRleHRzIGZsZXgtZ3Jvdy0xXCIgQGNsaWNrPVwidXBkYXRlUXR5TW9kYWwoaXRlbSlcIj4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjYXJ0LWl0ZW0tdGV4dHMgdy01MFwiXHJcblx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVRdHlNb2RhbChpdGVtKVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxiPnt7IGl0ZW0ubmFtZSB9fTwvYj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJjdXN0b21lcl9yb2xlID09IDJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLm1lbWJlcl9wcmljZSkgfX0ve3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0udW5pdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PC9zcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1lbHNlLWlmPVwiY3VzdG9tZXJfcm9sZSA9PSAzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+JFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ud2hvbGVzYWxlX3ByaWNlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19L3t7IGl0ZW0udW5pdCB9fTwvc3BhblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtZWxzZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kIHt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSkgfX0ve3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0udW5pdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19PC9zcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiY29sb3I6ICMzMzlmMjU7IHBhZGRpbmc6IDBweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlF0eToge3sgaXRlbS5xdHkgfX0ge3sgaXRlbS51bml0IH19PC9zcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJjb2xvcjogIzMzOWYyNTsgcGFkZGluZzogMHB4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSkgfX0gKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW0ud2Vla3MgfX0gd2Vla3MgPVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0byB3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJndWVzdCA9PSAnMCdcIiBjbGFzcz1cInUtYnRuXCIgQGNsaWNrPVwic2hvd1Byb2R1Y3RzTW9kYWxFZGl0KGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ4LWJ0blwiIEBjbGljaz1cInJlbW92ZUl0ZW1JbkNhcnQoaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gaWQ9XCJzdWItdG90YWxcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGIgdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kIHt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoc3ViVG90YWwoaXRlbSkpIH19PC9iXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGIgdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3tcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5zdWJzY3JpcHRpb25fcHJpY2UpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX08L2JcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogW1wiY2FydFwiLCBcImN1c3RvbWVyX3JvbGVcIiwgXCJtaW5pbXVtXCIsIFwiZ3Vlc3RcIl0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdHByb2NjZWRUb0NoZWNrb3V0KCkge1xyXG5cdFx0XHRcdC8vICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xyXG5cdFx0XHRcdGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMCkge1xyXG5cdFx0XHRcdFx0YWxlcnQoXCJ1bmRlciBjb25zdHJ1Y3Rpb24gZm9yIGFkbWluIGNoZWNrb3V0XCIpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gXCIxXCIpIHtcclxuXHRcdFx0XHRcdFx0JChcIiNtb2RhbExvZ2luXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9yZWdpc3Rlci9zdWNjZXNzL2NvbmZpcm1lZFwiO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHQvLyBpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDMpIHtcclxuXHRcdFx0XHRcdC8vICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCB0aGlzLm1pbmltdW0pIHtcclxuXHRcdFx0XHRcdC8vICAgICAkKFwiI3dhcm5pbmdNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcblx0XHRcdFx0XHQvLyAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHRcdC8vICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzL2NoZWNrb3V0XCI7XHJcblx0XHRcdFx0XHQvLyAgIH1cclxuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdFx0Ly8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xyXG5cdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0Q2FydEV4cGlyeSh0dGwpIHtcclxuXHRcdFx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdGxldCBleHBpcnkgPSBub3cuZ2V0VGltZSgpICsgdHRsO1xyXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0cmVtb3ZlSXRlbUluQ2FydChkYXRhKSB7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50LnJlbW92ZUl0ZW1JbkNhcnQoZGF0YSk7XHJcblx0XHRcdH0sXHJcbiAgICAgICAgICAgIHNob3dQcm9kdWN0c01vZGFsRWRpdChkYXRhKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zaG93QWRkVG9DYXJ0TW9kYWxFZGl0KGRhdGEpO1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuXHRcdFx0c3ViVG90YWwoaXRlbSkge1xyXG5cdFx0XHRcdGxldCBzdWJ0b3RhbCA9IDA7XHJcblx0XHRcdFx0aWYgKHRoaXMuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XHJcblx0XHRcdFx0XHRzdWJ0b3RhbCA9IGl0ZW0ubWVtYmVyX3ByaWNlICogaXRlbS5xdHk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMykge1xyXG5cdFx0XHRcdFx0c3VidG90YWwgPSBpdGVtLndob2xlc2FsZV9wcmljZSAqIGl0ZW0ucXR5O1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzdWJ0b3RhbCA9IGl0ZW0ucHJpY2UgKiBpdGVtLnF0eTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIHN1YnRvdGFsO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XHJcblx0XHRcdFx0dmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG5cdFx0XHRcdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHJldHVybiB3aXRoQ29tbWFzO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdHRvdGFsQW1vdW50KCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNhcnQubGVuZ3RoID09IDApIHtcclxuXHRcdFx0XHRcdHJldHVybiAwLjA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxldCB0b3RhbCA9IDA7XHJcblx0XHRcdFx0XHR0aGlzLmNhcnQuZm9yRWFjaCgoY2FydCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoY2FydC5pc19zdWJzY3JpcHRpb24gPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0LnN1YnNjcmlwdGlvbl9wcmljZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0Lm1lbWJlcl9wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0Lndob2xlc2FsZV9wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQucXR5O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRyZXR1cm4gdG90YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FydC1jb250YWluZXJbZGF0YS12LTcwODA2ZWFlXSB7XFxuICBtaW4taGVpZ2h0OiAzMjVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEzMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaGVhZGVyW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY2FydC1jb250YWluZXIgLmJ0bi1wcmltYXJ5W2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXNbZGF0YS12LTcwODA2ZWFlXSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWltYWdlW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgd2lkdGg6IDY4cHg7XFxuICBoZWlnaHQ6IDY4cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyBwW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lcltkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgLnRvcC1yaWdodFtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgLnRvcC1yaWdodCAudS1idG5bZGF0YS12LTcwODA2ZWFlXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIC50b3AtcmlnaHQgLnUtYnRuW2RhdGEtdi03MDgwNmVhZV06aG92ZXIge1xcbiAgY29sb3I6ICMzMzlmMjU7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIC50b3AtcmlnaHQgLngtYnRuW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAudG9wLXJpZ2h0IC54LWJ0bltkYXRhLXYtNzA4MDZlYWVdOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICNzdWItdG90YWxbZGF0YS12LTcwODA2ZWFlXSB7XFxuICB3aWR0aDogOTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1jb250YWluZXIgYmctd2hpdGUgYm9yZGVyLTBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGcgYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogX3ZtLmNhcnQubGVuZ3RoID09IDAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByb2NjZWRUb0NoZWNrb3V0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRQcm9jZWVkIHRvIENoZWNrb3V0XFxuXFx0XFx0XFx0XCIpXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LCBbX3ZtLl92KFwiVG90YWwgQW1vdW50OlwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtY2FydC1wcmljZSBtYi0xXCIgfSwgW1xuICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiJCBcIiArIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0udG90YWxBbW91bnQpKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1c3RvbWVyX3JvbGUgPT0gM1xuICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIoV2hvbGVzYWxlciBNaW5pbXVtIE9yZGVyIEFtb3VudDopXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi00XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKF92bS5taW5pbXVtLnRvRml4ZWQoMikpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY2FydCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBjYXJ0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlUXR5TW9kYWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJ0LWl0ZW0taW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLXRleHRzIHctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVF0eU1vZGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tZW1iZXJfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2hvbGVzYWxlX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzM5ZjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdHk6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnF0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzM5ZjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICpcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS53ZWVrcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgd2Vla3MgPVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0byB3LTI1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmd1ZXN0ID09IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd1Byb2R1Y3RzTW9kYWxFZGl0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBlbmNpbC1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ4LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlSXRlbUluQ2FydChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3ViLXRvdGFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN1YlRvdGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdWJzY3JpcHRpb25fcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc2Vjb25kYXJ5XCIgfSwgW192bS5fdihcIk9SREVSIFNVTU1BUllcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwODA2ZWFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzA4MDZlYWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzA4MDZlYWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzA4MDZlYWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzA4MDZlYWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzA4MDZlYWUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzA4MDZlYWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwODA2ZWFlJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==