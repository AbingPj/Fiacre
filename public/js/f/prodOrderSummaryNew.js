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
      _c("h5", { staticClass: "text-secondary" }, [_vm._v("ORDER SUMMARY")]),
      _vm._v(" "),
      _c("hr")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9vcmRlclN1bW1hcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9mMTBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT8xZGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9kN2JkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/ZTIxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTZjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTNjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQSIsImZpbGUiOiJqcy9mL3Byb2RPcmRlclN1bW1hcnlOZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdEBpbXBvcnQgXCJyZXNvdXJjZXMvc2Fzcy9taXhpbnNcIjtcblxuXHQuY2FydC1jb250YWluZXIge1xuXHRcdG1pbi1oZWlnaHQ6IDMyNXB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcblx0XHRwb3NpdGlvbjogc3RpY2t5O1xuXHRcdHRvcDogMTMwcHg7XG5cdFx0LmNhcnQtaGVhZGVyIHtcblx0XHRcdHBhZGRpbmc6IDEwcHggMDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR9XG5cdFx0LmJ0bi1wcmltYXJ5IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcblx0XHR9XG5cdFx0LmNhcnQtaXRlbXMge1xuXHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdG1heC1oZWlnaHQ6IDUwMHB4O1xuXHRcdFx0b3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXG5cdFx0XHRvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFkZCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cblx0XHRcdC5jYXJ0LWl0ZW0ge1xuXHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcblx0XHRcdFx0LmNhcnQtaXRlbS1pbWFnZSB7XG5cdFx0XHRcdFx0d2lkdGg6IDY4cHg7XG5cdFx0XHRcdFx0aGVpZ2h0OiA2OHB4O1xuXHRcdFx0XHRcdG9iamVjdC1maXQ6IGNvdmVyO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0bWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jYXJ0LWl0ZW0tdGV4dHMge1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0Ly8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuXHRcdFx0XHRcdHAge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIHtcblx0XHRcdFx0XHQvLyB3aWR0aDogMTAlO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0LnRvcC1yaWdodCB7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHR0b3A6IDBweDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAudS1idG57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudS1idG46aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzlmMjU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAueC1idG57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAueC1idG46aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQjc3ViLXRvdGFsIHtcblx0XHRcdFx0XHRcdC8vICAgb3ZlcmZsb3c6IHZpc2libGU7XG5cdFx0XHRcdFx0XHR3aWR0aDogOTBweDtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdGJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDBweDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zdHlsZT5cbjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNhcnQtY29udGFpbmVyIGJnLXdoaXRlIGJvcmRlci0wXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjYXJ0LWhlYWRlclwiPlxuXHRcdFx0PGg1IGNsYXNzPVwidGV4dC1zZWNvbmRhcnlcIj5PUkRFUiBTVU1NQVJZPC9oNT5cblx0XHRcdDxocj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzcz1cImJ0biBidG4tbGcgYnRuLXByaW1hcnkgdy0xMDBcIlxuXHRcdFx0XHRAY2xpY2s9XCJwcm9jY2VkVG9DaGVja291dCgpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiY2FydC5sZW5ndGggPT0gMFwiXG5cdFx0XHQ+XG5cdFx0XHRcdFByb2NlZWQgdG8gQ2hlY2tvdXRcblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJtdC00XCI+VG90YWwgQW1vdW50OjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInRvdGFsLWNhcnQtcHJpY2UgbWItMVwiPlxuXHRcdFx0XHQ8aDQ+XG5cdFx0XHRcdFx0PGI+JCB7eyBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHRvdGFsQW1vdW50KSB9fTwvYj5cblx0XHRcdFx0PC9oND5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiB2LWlmPVwiY3VzdG9tZXJfcm9sZSA9PSAzXCI+XG5cdFx0XHRcdDxkaXY+KFdob2xlc2FsZXIgTWluaW11bSBPcmRlciBBbW91bnQ6KTwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWItNFwiPiQge3sgbWluaW11bS50b0ZpeGVkKDIpIH19PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCI+XG5cdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuXHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJ0XCJcblx0XHRcdFx0XHRcdFx0OmtleT1cImluZGV4XCJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGNhcnQtaXRlbVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgQGNsaWNrPVwidXBkYXRlUXR5TW9kYWwoaXRlbSlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW1nIDpzcmM9XCJpdGVtLmltYWdlX2xpbmtcIiBjbGFzcz1cImNhcnQtaXRlbS1pbWFnZVwiIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tdGV4dHMgZmxleC1ncm93LTFcIiBAY2xpY2s9XCJ1cGRhdGVRdHlNb2RhbChpdGVtKVwiPiAtLT5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2FydC1pdGVtLXRleHRzIHctNTBcIlxuXHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInVwZGF0ZVF0eU1vZGFsKGl0ZW0pXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGI+e3sgaXRlbS5uYW1lIH19PC9iPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiY3VzdG9tZXJfcm9sZSA9PSAyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PiRcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLm1lbWJlcl9wcmljZSkgfX0ve3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpdGVtLnVuaXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX08L3NwYW5cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtZWxzZS1pZj1cImN1c3RvbWVyX3JvbGUgPT0gM1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLndob2xlc2FsZV9wcmljZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX0ve3sgaXRlbS51bml0IH19PC9zcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWVsc2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0PiQge3sgZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKSB9fS97e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0udW5pdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fTwvc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiY29sb3I6ICMzMzlmMjU7IHBhZGRpbmc6IDBweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5RdHk6IHt7IGl0ZW0ucXR5IH19IHt7IGl0ZW0udW5pdCB9fTwvc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0di1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImNvbG9yOiAjMzM5ZjI1OyBwYWRkaW5nOiAwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpIH19ICpcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbS53ZWVrcyB9fSB3ZWVrcyA9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0byB3LTI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImd1ZXN0ID09ICcwJ1wiIGNsYXNzPVwidS1idG5cIiBAY2xpY2s9XCJzaG93UHJvZHVjdHNNb2RhbEVkaXQoaXRlbSlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8aSBjbGFzcz1cImZhIGZhLXBlbmNpbC1hbHRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0ICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIngtYnRuXCIgQGNsaWNrPVwicmVtb3ZlSXRlbUluQ2FydChpdGVtKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIDxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0ICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGlkPVwic3ViLXRvdGFsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YiB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kIHt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoc3ViVG90YWwoaXRlbSkpIH19PC9iXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YiB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4kXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnN1YnNjcmlwdGlvbl9wcmljZSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX08L2Jcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IFtcImNhcnRcIiwgXCJjdXN0b21lcl9yb2xlXCIsIFwibWluaW11bVwiLCBcImd1ZXN0XCJdLFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHByb2NjZWRUb0NoZWNrb3V0KCkge1xuXHRcdFx0XHQvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHMvY2hlY2tvdXRcIjtcblx0XHRcdFx0aWYgKHRoaXMuY3VzdG9tZXJfcm9sZSA9PSAwKSB7XG5cdFx0XHRcdFx0YWxlcnQoXCJ1bmRlciBjb25zdHJ1Y3Rpb24gZm9yIGFkbWluIGNoZWNrb3V0XCIpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gXCIxXCIpIHtcblx0XHRcdFx0XHRcdCQoXCIjbW9kYWxMb2dpblwiKS5tb2RhbChcInNob3dcIik7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMSkge1xuXHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3JlZ2lzdGVyL3N1Y2Nlc3MvY29uZmlybWVkXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzL2NoZWNrb3V0XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMykge1xuXHRcdFx0XHRcdC8vICAgaWYgKHRoaXMudG90YWxBbW91bnQgPCB0aGlzLm1pbmltdW0pIHtcblx0XHRcdFx0XHQvLyAgICAgJChcIiN3YXJuaW5nTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuXHRcdFx0XHRcdC8vICAgfSBlbHNlIHtcblx0XHRcdFx0XHQvLyAgICAgTG9hZGluZ092ZXJsYXkoKTtcblx0XHRcdFx0XHQvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xuXHRcdFx0XHRcdC8vICAgfVxuXHRcdFx0XHRcdC8vIH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gTG9hZGluZ092ZXJsYXkoKTtcblx0XHRcdFx0XHQvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzL2NoZWNrb3V0XCI7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0c2V0Q2FydEV4cGlyeSh0dGwpIHtcblx0XHRcdFx0Y29uc3Qgbm93ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0bGV0IGV4cGlyeSA9IG5vdy5nZXRUaW1lKCkgKyB0dGw7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcblx0XHRcdH0sXG5cdFx0XHRyZW1vdmVJdGVtSW5DYXJ0KGRhdGEpIHtcblx0XHRcdFx0dGhpcy4kcGFyZW50LnJlbW92ZUl0ZW1JbkNhcnQoZGF0YSk7XG5cdFx0XHR9LFxuICAgICAgICAgICAgc2hvd1Byb2R1Y3RzTW9kYWxFZGl0KGRhdGEpe1xuICAgICAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zaG93QWRkVG9DYXJ0TW9kYWxFZGl0KGRhdGEpO1xuICAgICAgICAgICAgfSxcblxuXHRcdFx0c3ViVG90YWwoaXRlbSkge1xuXHRcdFx0XHRsZXQgc3VidG90YWwgPSAwO1xuXHRcdFx0XHRpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDIpIHtcblx0XHRcdFx0XHRzdWJ0b3RhbCA9IGl0ZW0ubWVtYmVyX3ByaWNlICogaXRlbS5xdHk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDMpIHtcblx0XHRcdFx0XHRzdWJ0b3RhbCA9IGl0ZW0ud2hvbGVzYWxlX3ByaWNlICogaXRlbS5xdHk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3VidG90YWwgPSBpdGVtLnByaWNlICogaXRlbS5xdHk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHN1YnRvdGFsO1xuXHRcdFx0fSxcblx0XHRcdGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcblx0XHRcdFx0dmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuXHRcdFx0XHR2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcblx0XHRcdFx0XHRtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG5cdFx0XHRcdFx0bWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuIHdpdGhDb21tYXM7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHRvdGFsQW1vdW50KCkge1xuXHRcdFx0XHRpZiAodGhpcy5jYXJ0Lmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDAuMDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdFx0XHRcdHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoY2FydC5pc19zdWJzY3JpcHRpb24gPT0gMSkge1xuXHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5zdWJzY3JpcHRpb25fcHJpY2U7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDIpIHtcblx0XHRcdFx0XHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgY2FydC5tZW1iZXJfcHJpY2UgKiBjYXJ0LnF0eTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMykge1xuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0Lndob2xlc2FsZV9wcmljZSAqIGNhcnQucXR5O1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBjYXJ0LnByaWNlICogY2FydC5xdHk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm4gdG90YWw7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FydC1jb250YWluZXJbZGF0YS12LTcwODA2ZWFlXSB7XFxuICBtaW4taGVpZ2h0OiAzMjVweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpZ2h0Z3JheSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDEzMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaGVhZGVyW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY2FydC1jb250YWluZXIgLmJ0bi1wcmltYXJ5W2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXNbZGF0YS12LTcwODA2ZWFlXSB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgbWF4LWhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWltYWdlW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgd2lkdGg6IDY4cHg7XFxuICBoZWlnaHQ6IDY4cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyBwW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lcltkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgLnRvcC1yaWdodFtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgLnRvcC1yaWdodCAudS1idG5bZGF0YS12LTcwODA2ZWFlXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIC50b3AtcmlnaHQgLnUtYnRuW2RhdGEtdi03MDgwNmVhZV06aG92ZXIge1xcbiAgY29sb3I6ICMzMzlmMjU7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIC50b3AtcmlnaHQgLngtYnRuW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAudG9wLXJpZ2h0IC54LWJ0bltkYXRhLXYtNzA4MDZlYWVdOmhvdmVyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICNzdWItdG90YWxbZGF0YS12LTcwODA2ZWFlXSB7XFxuICB3aWR0aDogOTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1jb250YWluZXIgYmctd2hpdGUgYm9yZGVyLTBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tbGcgYnRuLXByaW1hcnkgdy0xMDBcIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBkaXNhYmxlZDogX3ZtLmNhcnQubGVuZ3RoID09IDAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByb2NjZWRUb0NoZWNrb3V0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRQcm9jZWVkIHRvIENoZWNrb3V0XFxuXFx0XFx0XFx0XCIpXVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTRcIiB9LCBbX3ZtLl92KFwiVG90YWwgQW1vdW50OlwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWwtY2FydC1wcmljZSBtYi0xXCIgfSwgW1xuICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiJCBcIiArIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0udG90YWxBbW91bnQpKSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1c3RvbWVyX3JvbGUgPT0gM1xuICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIoV2hvbGVzYWxlciBNaW5pbXVtIE9yZGVyIEFtb3VudDopXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi00XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKF92bS5taW5pbXVtLnRvRml4ZWQoMikpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uY2FydCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBjYXJ0LWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlUXR5TW9kYWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJ0LWl0ZW0taW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLXRleHRzIHctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVF0eU1vZGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tZW1iZXJfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ud2hvbGVzYWxlX3ByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzM5ZjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJRdHk6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnF0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzM5ZjI1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICpcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS53ZWVrcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgd2Vla3MgPVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0byB3LTI1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmd1ZXN0ID09IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ1LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd1Byb2R1Y3RzTW9kYWxFZGl0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXBlbmNpbC1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ4LWJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlSXRlbUluQ2FydChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3ViLXRvdGFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN1YlRvdGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdWJzY3JpcHRpb25fcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc2Vjb25kYXJ5XCIgfSwgW192bS5fdihcIk9SREVSIFNVTU1BUllcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhyXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzA4MDZlYWUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MDgwNmVhZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcwODA2ZWFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcwODA2ZWFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcwODA2ZWFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwODA2ZWFlJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcwODA2ZWFlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDgwNmVhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDgwNmVhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDgwNmVhZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=