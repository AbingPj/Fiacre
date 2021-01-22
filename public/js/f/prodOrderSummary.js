(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/prodOrderSummary"],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["cart", "customer_role", "minimum"],
  methods: {
    proccedToCheckout: function proccedToCheckout() {
      //   window.location.href = "/products/checkout";
      if (this.customer_role == 0) {
        alert("under construction for admin checkout");
      } else {
        this.setCartExpiry(86400000);

        if (this.customer_role == 3) {
          if (this.totalAmount < this.minimum) {
            $("#warningModal").modal("show");
          } else {
            LoadingOverlay();
            window.location.href = "/products/checkout";
          }
        } else {
          LoadingOverlay();
          window.location.href = "/products/checkout";
        }
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
          if (_this.customer_role == 2) {
            total = total + cart.member_price * cart.qty;
          } else if (_this.customer_role == 3) {
            total = total + cart.wholesale_price * cart.qty;
          } else {
            total = total + cart.price * cart.qty;
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
exports.push([module.i, ".cart-container[data-v-70806eae] {\n  min-height: 325px;\n  border: 2px solid lightgray !important;\n  margin-top: 20px;\n  margin-right: 5px;\n  margin-left: 5px;\n  padding: 0px;\n  border-radius: 5px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 130px;\n}\n.cart-container .cart-header[data-v-70806eae] {\n  padding: 10px 0;\n  text-align: center;\n}\n.cart-container .btn-primary[data-v-70806eae] {\n  background-color: #339f25 !important;\n}\n.cart-container .cart-items[data-v-70806eae] {\n  margin-bottom: 30px;\n  max-height: 500px;\n  overflow-x: hidden;\n  /* Hide horizontal scrollbar */\n  overflow-y: scroll;\n  /* Add vertical scrollbar */\n}\n.cart-container .cart-items .cart-item[data-v-70806eae] {\n  padding: 5px;\n  background-color: lightgray;\n}\n.cart-container .cart-items .cart-item .cart-item-image[data-v-70806eae] {\n  width: 68px;\n  height: 68px;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px 10px 0px 0px;\n  background-color: white;\n  margin: 0px 10px 0px 0px;\n}\n.cart-container .cart-items .cart-item .cart-item-texts[data-v-70806eae] {\n  text-align: left;\n}\n.cart-container .cart-items .cart-item .cart-item-texts p[data-v-70806eae] {\n  margin-bottom: 0px;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container[data-v-70806eae] {\n  padding: 0px;\n  position: relative;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container #x[data-v-70806eae] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  background: transparent;\n  border: 0px;\n  color: gray;\n}\n.cart-container .cart-items .cart-item .cart-item-close-container #sub-total[data-v-70806eae] {\n  width: 90px;\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  text-align: right;\n}", ""]);

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
        [_vm._v("Proceed to Checkout")]
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
                      staticClass: "cart-item-texts flex-grow-1",
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
                                "$ " +
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
                                "$ " +
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
                        _c(
                          "span",
                          { staticStyle: { color: "#339f25", padding: "0px" } },
                          [
                            _vm._v(
                              "qty: " +
                                _vm._s(item.qty) +
                                " " +
                                _vm._s(item.unit)
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cart-item-close-container ml-auto w-25" },
                    [
                      _c(
                        "button",
                        {
                          attrs: { id: "x" },
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
                      _c("span", { attrs: { id: "sub-total" } }, [
                        _c("b", [
                          _vm._v(
                            "$ " +
                              _vm._s(
                                _vm.displayNumberWithComma(_vm.subTotal(item))
                              )
                          )
                        ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9vcmRlclN1bW1hcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9mMTBiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT8xZGI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZT9kN2JkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2Uvb3JkZXJTdW1tYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/ZTIxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTZjNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL29yZGVyU3VtbWFyeS52dWU/NTNjYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMElBO0FBQ0EsNkNBREE7QUFFQTtBQUNBLHFCQURBLCtCQUNBO0FBQ0E7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O0FBQ1IsRUFBRSxtR0FBTTtBQUNSLEVBQUUsNEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXdNLENBQWdCLHdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTVOO0FBQUE7QUFBQTtBQUFBO0FBQWlkLENBQWdCLGtjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2RPcmRlclN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwicmVzb3VyY2VzL3Nhc3MvbWl4aW5zXCI7XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDMyNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMTMwcHg7XG4gIC5jYXJ0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcbiAgfVxuICAuY2FydC1pdGVtcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IC8qIEhpZGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgKi9cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFkZCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cbiAgICAuY2FydC1pdGVtIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgIC5jYXJ0LWl0ZW0taW1hZ2Uge1xuICAgICAgICB3aWR0aDogNjhweDtcbiAgICAgICAgaGVpZ2h0OiA2OHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICB9XG4gICAgICAuY2FydC1pdGVtLXRleHRzIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIge1xuICAgICAgICAvLyB3aWR0aDogMTAlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgI3gge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICAgICNzdWItdG90YWwge1xuICAgICAgICAgIC8vICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjYXJ0LWNvbnRhaW5lciBiZy13aGl0ZSBib3JkZXItMFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY2FydC1oZWFkZXJcIj5cbiAgICAgIDxoNSBjbGFzcz1cInRleHQtc2Vjb25kYXJ5XCI+T1JERVIgU1VNTUFSWTwvaDU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHctMTAwXCJcbiAgICAgICAgQGNsaWNrPVwicHJvY2NlZFRvQ2hlY2tvdXQoKVwiXG4gICAgICAgIDpkaXNhYmxlZD1cImNhcnQubGVuZ3RoID09IDBcIlxuICAgICAgPlByb2NlZWQgdG8gQ2hlY2tvdXQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXQtNFwiPlRvdGFsIEFtb3VudDo8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1jYXJ0LXByaWNlIG1iLTFcIj5cbiAgICAgICAgPGg0PlxuICAgICAgICAgIDxiPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHRvdGFsQW1vdW50KX19PC9iPlxuICAgICAgICA8L2g0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHYtaWY9XCJjdXN0b21lcl9yb2xlID09IDNcIj5cbiAgICAgICAgPGRpdj4oV2hvbGVzYWxlciBNaW5pbXVtIE9yZGVyIEFtb3VudDopPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYi00XCI+JCB7e21pbmltdW0udG9GaXhlZCgyKX19PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCI+XG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBjYXJ0XCJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGNhcnQtaXRlbVwiXG4gICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwidXBkYXRlUXR5TW9kYWwoaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLmltYWdlX2xpbmtcIiBjbGFzcz1cImNhcnQtaXRlbS1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLXRleHRzIGZsZXgtZ3Jvdy0xXCIgQGNsaWNrPVwidXBkYXRlUXR5TW9kYWwoaXRlbSlcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxiPnt7aXRlbS5uYW1lfX08L2I+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjdXN0b21lcl9yb2xlID09IDJcIlxuICAgICAgICAgICAgICAgICAgPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ubWVtYmVyX3ByaWNlKX19L3t7aXRlbS51bml0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICB2LWVsc2UtaWY9XCJjdXN0b21lcl9yb2xlID09IDNcIlxuICAgICAgICAgICAgICAgICAgPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ud2hvbGVzYWxlX3ByaWNlKX19L3t7aXRlbS51bml0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+JCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSl9fS97e2l0ZW0udW5pdH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiMzMzlmMjU7IHBhZGRpbmc6MHB4O1wiPnF0eToge3tpdGVtLnF0eX19IHt7aXRlbS51bml0fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgbWwtYXV0byB3LTI1XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInhcIiBAY2xpY2s9XCJyZW1vdmVJdGVtSW5DYXJ0KGl0ZW0pXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwic3ViLXRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICA8Yj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShzdWJUb3RhbChpdGVtKSl9fTwvYj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wiY2FydFwiLCBcImN1c3RvbWVyX3JvbGVcIiwgXCJtaW5pbXVtXCJdLFxuICBtZXRob2RzOiB7XG4gICAgcHJvY2NlZFRvQ2hlY2tvdXQoKSB7XG4gICAgICAvLyAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHMvY2hlY2tvdXRcIjtcbiAgICAgIGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMCkge1xuICAgICAgICBhbGVydChcInVuZGVyIGNvbnN0cnVjdGlvbiBmb3IgYWRtaW4gY2hlY2tvdXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApO1xuICAgICAgICBpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDMpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3RhbEFtb3VudCA8IHRoaXMubWluaW11bSkge1xuICAgICAgICAgICAgJChcIiN3YXJuaW5nTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9wcm9kdWN0cy9jaGVja291dFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHMvY2hlY2tvdXRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgc2V0Q2FydEV4cGlyeSh0dGwpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZXhwaXJ5ID0gbm93LmdldFRpbWUoKSArIHR0bDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcbiAgICB9LFxuICAgIHJlbW92ZUl0ZW1JbkNhcnQoZGF0YSkge1xuICAgICAgdGhpcy4kcGFyZW50LnJlbW92ZUl0ZW1JbkNhcnQoZGF0YSk7XG4gICAgfSxcblxuICAgIHN1YlRvdGFsKGl0ZW0pIHtcbiAgICAgIGxldCBzdWJ0b3RhbCA9IDA7XG4gICAgICBpZiAodGhpcy5jdXN0b21lcl9yb2xlID09IDIpIHtcbiAgICAgICAgc3VidG90YWwgPSBpdGVtLm1lbWJlcl9wcmljZSAqIGl0ZW0ucXR5O1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmN1c3RvbWVyX3JvbGUgPT0gMykge1xuICAgICAgICBzdWJ0b3RhbCA9IGl0ZW0ud2hvbGVzYWxlX3ByaWNlICogaXRlbS5xdHk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWJ0b3RhbCA9IGl0ZW0ucHJpY2UgKiBpdGVtLnF0eTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJ0b3RhbDtcbiAgICB9LFxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0b3RhbEFtb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNhcnQubGVuZ3RoID09IDApIHtcbiAgICAgICAgcmV0dXJuIDAuMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5tZW1iZXJfcHJpY2UgKiBjYXJ0LnF0eTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VzdG9tZXJfcm9sZSA9PSAzKSB7XG4gICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC53aG9sZXNhbGVfcHJpY2UgKiBjYXJ0LnF0eTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG90YWwgPSB0b3RhbCArIGNhcnQucHJpY2UgKiBjYXJ0LnF0eTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcnQtY29udGFpbmVyW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgbWluLWhlaWdodDogMzI1cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMzBweDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWhlYWRlcltkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5idG4tcHJpbWFyeVtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgLyogQWRkIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbVtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1pbWFnZVtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHdpZHRoOiA2OHB4O1xcbiAgaGVpZ2h0OiA2OHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0c1tkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tdGV4dHMgcFtkYXRhLXYtNzA4MDZlYWVdIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG59XFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXJbZGF0YS12LTcwODA2ZWFlXSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICN4W2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogMHB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAjc3ViLXRvdGFsW2RhdGEtdi03MDgwNmVhZV0ge1xcbiAgd2lkdGg6IDkwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDgwNmVhZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcnQtY29udGFpbmVyIGJnLXdoaXRlIGJvcmRlci0wXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWxnIGJ0bi1wcmltYXJ5IHctMTAwXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgZGlzYWJsZWQ6IF92bS5jYXJ0Lmxlbmd0aCA9PSAwIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcm9jY2VkVG9DaGVja291dCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiUHJvY2VlZCB0byBDaGVja291dFwiKV1cbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC00XCIgfSwgW192bS5fdihcIlRvdGFsIEFtb3VudDpcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdGFsLWNhcnQtcHJpY2UgbWItMVwiIH0sIFtcbiAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiQgXCIgKyBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoX3ZtLnRvdGFsQW1vdW50KSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiKFdob2xlc2FsZXIgTWluaW11bSBPcmRlciBBbW91bnQ6KVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiJCBcIiArIF92bS5fcyhfdm0ubWluaW11bS50b0ZpeGVkKDIpKSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgY2FydC1pdGVtc1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNhcnQsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXggY2FydC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVF0eU1vZGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLWltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS10ZXh0cyBmbGV4LWdyb3ctMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlUXR5TW9kYWwoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VzdG9tZXJfcm9sZSA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tZW1iZXJfcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndob2xlc2FsZV9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcIiMzMzlmMjVcIiwgcGFkZGluZzogXCIwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInF0eTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5xdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciBtbC1hdXRvIHctMjVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUl0ZW1JbkNhcnQoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGltZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3ViLXRvdGFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoX3ZtLnN1YlRvdGFsKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc2Vjb25kYXJ5XCIgfSwgW192bS5fdihcIk9SREVSIFNVTU1BUllcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwODA2ZWFlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwODA2ZWFlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzA4MDZlYWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MDgwNmVhZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MDgwNmVhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MDgwNmVhZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vb3JkZXJTdW1tYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDgwNmVhZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MDgwNmVhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9vcmRlclN1bW1hcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vcmRlclN1bW1hcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA4MDZlYWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29yZGVyU3VtbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzA4MDZlYWUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9