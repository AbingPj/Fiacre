(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/OrderProductPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["order", "order_products", "guest", "user"],
  methods: {
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    setStatusColor: function setStatusColor(data) {
      if (data == 2) {
        return "#339f25";
      } else if (data == 3) {
        return "#b6cccf";
      } else {
        return "#d4a83b";
      }
    }
  },
  computed: {
    totalAmount: function totalAmount() {
      var total = 0;
      var products = this.order_products;
      products.forEach(function (cart) {
        total = total + cart.price * cart.updated_quantity;
      });
      return total;
    },
    getDiscount: function getDiscount() {
      var discount = 0;
      discount = this.totalAmount * (this.order.discount_percentage / 100);
      return discount;
    },
    getCouponDiscount: function getCouponDiscount() {
      return this.order.atr_coupon_discount;
    },
    OverAllTotal: function OverAllTotal() {
      var total = 0; //total - discount;

      total = this.totalAmount - this.getDiscount;
      total = total - this.getCouponDiscount;
      total = total + parseFloat(this.order.delivery_fee);
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orders[data-v-3fc3f2ea] {\n  border: 2px solid lightgray !important;\n}\n.orders .cart-items[data-v-3fc3f2ea] {\n  margin: 20px 0px 20px 0px;\n  padding: 20px 15px 0px 15px;\n  height: 500px;\n  max-height: 600px;\n  overflow-x: hidden;\n  /* Hide horizontal scrollbar */\n  overflow-y: scroll;\n  /* Add vertical scrollbar */\n}\n.orders .cart-items .cart-item[data-v-3fc3f2ea] {\n  padding: 10px;\n}\n.orders .cart-items .cart-item .cart-item-image[data-v-3fc3f2ea] {\n  width: 85px;\n  height: 85px;\n  object-fit: cover;\n  padding: 0px;\n  margin: 0px 10px 0px 0px;\n  background-color: white;\n  margin: 0px 10px 0px 0px;\n}\n.orders .cart-items .cart-item .cart-item-texts[data-v-3fc3f2ea] {\n  padding-left: 10px;\n  text-align: left;\n}\n.orders .cart-items .cart-item .cart-item-texts .item-name[data-v-3fc3f2ea] {\n  font-size: 20px;\n}\n.orders .cart-items .cart-item .cart-item-texts p[data-v-3fc3f2ea] {\n  margin-bottom: 0px;\n}\n.orders .cart-items .cart-item .cart-item-texts .qty-options[data-v-3fc3f2ea] {\n  color: #339f25;\n  padding: 0px;\n  font-size: 20px;\n}\n.orders .cart-items .cart-item .cart-item-texts .qty-options .plusminus[data-v-3fc3f2ea] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n  font-size: 20px;\n}\n.orders .cart-items .cart-item .cart-item-close-container[data-v-3fc3f2ea] {\n  width: 20%;\n  padding: 0px;\n  position: relative;\n}\n.orders .cart-items .cart-item .cart-item-close-container #x[data-v-3fc3f2ea] {\n  position: absolute;\n  top: 0px;\n  right: 5px;\n  background: transparent;\n  border: 0px;\n  color: gray;\n}\n.orders .cart-items .cart-item .cart-item-close-container #sub-total[data-v-3fc3f2ea] {\n  position: absolute;\n  bottom: 0px;\n  right: 5px;\n  font-size: 20px;\n}\n.orders .cart-items .cart-item .cart-item-close-container #sold-out[data-v-3fc3f2ea] {\n  position: absolute;\n  top: 0px;\n  right: 5px;\n}\n.order-summary .cart-container[data-v-3fc3f2ea] {\n  min-height: 620px;\n  border: 2px solid lightgray !important;\n  padding: 10px;\n  border-radius: 5px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 10px;\n}\n.order-summary .cart-container .content[data-v-3fc3f2ea] {\n  min-height: 600px;\n}\n.order-summary .cart-container .content .cart-header[data-v-3fc3f2ea] {\n  padding: 10px 0;\n  text-align: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container mt-1 mb-5" }, [
    _c("div", { staticClass: "row" }),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h2", { staticStyle: { color: "#339f25" } }, [
          _vm._v("Order Summary")
        ]),
        _vm._v(" "),
        _c("h4", [
          _vm._v(
            "\n          Order #: " + _vm._s(_vm.order.id) + "\n          "
          ),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right text-light",
              attrs: { href: _vm.order.print_url }
            },
            [
              _c("i", { staticClass: "fas fa-print" }),
              _vm._v(" Print\n          ")
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("h6", [_c("b", [_vm._v(_vm._s(_vm.order.date_label))])])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" })
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-8 orders" }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12 cart-items" }, [
            _c(
              "ul",
              { staticClass: "list-group" },
              _vm._l(_vm.order_products, function(or_prod, index) {
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
                          attrs: { src: or_prod.product.image_link }
                        })
                      ]),
                      _vm._v(" "),
                      or_prod.is_subscription == 0
                        ? _c(
                            "div",
                            { staticClass: "cart-item-texts flex-grow-1" },
                            [
                              _c("p", [
                                _c("span", { staticClass: "item-name" }, [
                                  _c("b", [
                                    _vm._v(_vm._s(or_prod.product.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                    $ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(or_prod.price)
                                    ) +
                                    "/" +
                                    _vm._s(or_prod.product.unit) +
                                    "\n                    "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "qty-options" }, [
                                  _c("b", [_vm._v("Qty:")]),
                                  _vm._v(" "),
                                  _c("b", [
                                    _vm._v(
                                      _vm._s(or_prod.updated_quantity) +
                                        " / " +
                                        _vm._s(or_prod.product.unit)
                                    )
                                  ])
                                ])
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      or_prod.is_subscription == 1
                        ? _c(
                            "div",
                            { staticClass: "cart-item-texts flex-grow-1" },
                            [
                              _c("p", [
                                _c("span", { staticClass: "item-name" }, [
                                  _c("b", [
                                    _vm._v(_vm._s(or_prod.product.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(
                                  "\n                    $ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(or_prod.price)
                                    ) +
                                    "/" +
                                    _vm._s(or_prod.product.unit) +
                                    "\n                    "
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", { staticClass: "qty-options" }, [
                                  _vm._v(
                                    "\n                          $ " +
                                      _vm._s(or_prod.price) +
                                      "  X  " +
                                      _vm._s(or_prod.subscription_weeks) +
                                      " weeks =\n                    "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _c("span", [
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href:
                                          "/order/" +
                                          _vm.order.id +
                                          "/week/" +
                                          or_prod.id
                                      }
                                    },
                                    [_vm._v("Week Details")]
                                  )
                                ])
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "cart-item-close-container ml-auto" },
                        [
                          or_prod.is_subscription == 0
                            ? _c("span", { attrs: { id: "sub-total" } }, [
                                _c("b", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(
                                        _vm.displayNumberWithComma(
                                          or_prod.price *
                                            or_prod.updated_quantity
                                        )
                                      )
                                  )
                                ])
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          or_prod.is_subscription == 1
                            ? _c("span", { attrs: { id: "sub-total" } }, [
                                _c("b", [
                                  _vm._v(
                                    "$ " +
                                      _vm._s(
                                        _vm.displayNumberWithComma(
                                          or_prod.subscription_price
                                        )
                                      )
                                  )
                                ])
                              ])
                            : _vm._e()
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    or_prod.is_bundle == 1
                      ? _c("div", { staticClass: "row mt-2" }, [
                          _c("div", { staticClass: "col" }, [
                            _c("label", [_vm._v("Included Products:")]),
                            _vm._v(" "),
                            _c(
                              "ul",
                              { staticClass: "list-group list-group-flush" },
                              _vm._l(
                                or_prod.atr_product_details.selected_products,
                                function(item2, index) {
                                  return _c(
                                    "li",
                                    {
                                      key: index,
                                      staticClass: "list-group-item",
                                      staticStyle: {
                                        padding: "2px 10px 2px 10px"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "d-flex" }, [
                                        _c(
                                          "div",
                                          { staticStyle: { width: "20%" } },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                _vm._s(item2.qty) +
                                                "/" +
                                                _vm._s(item2.unit) +
                                                "  \n\t\t\t\t\t\t\t\t\t\t\t\t   \n\t\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticStyle: { width: "30%" } },
                                          [
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
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", {
                                          staticClass: "text-right",
                                          staticStyle: { width: "50%" }
                                        })
                                      ])
                                    ]
                                  )
                                }
                              ),
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 order-summary" }, [
        _c("div", { staticClass: "cart-container bg-white" }, [
          _c("div", { staticClass: "content d-flex flex-column" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm.guest == 0
              ? _c("div", [
                  _c("div", [
                    _c("table", { staticClass: "table" }, [
                      _c("tbody", [
                        _c("tr", [
                          _c("td", { attrs: { colspan: "2" } }, [
                            _vm._v(
                              "Organization:\n                           "
                            ),
                            _c("br"),
                            _vm._v(" "),
                            _c("b", [
                              _vm._v(_vm._s(_vm.order.organization.org_name))
                            ]),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("i", [
                              _vm._v(_vm._s(_vm.order.organization.atr_address))
                            ]),
                            _vm._v(" "),
                            _c("br")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v("Order Amount")]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-between" },
                              [
                                _c("div", [_vm._v("$")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.order.atr_subscription_total_amount_f
                                    )
                                  )
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(_vm.order.billing_type))]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-between" },
                              [
                                _c("div", [_vm._v("$")]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-right" }, [
                                  _vm._v(_vm._s(_vm.order.atr_billing_amount_f))
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tr", [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-between" },
                              [
                                _c("div", { staticClass: "font-weight-bold" }, [
                                  _vm._v("$")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "text-right font-weight-bold"
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.order
                                          .atr_subscription_overall_total_amount_f
                                      )
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ])
                  ])
                ])
              : _vm._e()
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
    return _c("div", { staticClass: "pl-3 pt-3" }, [
      _c(
        "a",
        { staticStyle: { color: "#339f25" }, attrs: { href: "/orders" } },
        [_vm._v("Back to orders")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-12 cart-header" }, [
      _c("h3", { staticClass: "text-dark" }, [_vm._v("Order Summary")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", [_c("b", [_vm._v("Total")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "table-light" }, [
      _c("td"),
      _vm._v(" "),
      _c("td")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/OrderProductPage.vue":
/*!***************************************************************!*\
  !*** ./resources/js/frontend/components/OrderProductPage.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true& */ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true&");
/* harmony import */ var _OrderProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderProductPage.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& */ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrderProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3fc3f2ea",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/OrderProductPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderProductPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=style&index=0&id=3fc3f2ea&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_style_index_0_id_3fc3f2ea_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/OrderProductPage.vue?vue&type=template&id=3fc3f2ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderProductPage_vue_vue_type_template_id_3fc3f2ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWU/NGUyNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9PcmRlclByb2R1Y3RQYWdlLnZ1ZT84OGU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlPzUxZTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWU/ZmEyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9PcmRlclByb2R1Y3RQYWdlLnZ1ZT84ZTg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlP2RlNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RSxzRkFBTTtBQUNSLEVBQUUsdUdBQU07QUFDUixFQUFFLGdIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFzTSxDQUFnQiw0UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExTjtBQUFBO0FBQUE7QUFBQTtBQUFtYyxDQUFnQixzY0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9PcmRlclByb2R1Y3RQYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ub3JkZXJzIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcclxuICAuY2FydC1pdGVtcyB7XHJcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4IDBweCAxNXB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFkZCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuICAgIC5jYXJ0LWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMGVkYmQ7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgICAuY2FydC1pdGVtLWltYWdlIHtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcnQtaXRlbS10ZXh0cyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF0eS1vcHRpb25zIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzM5ZjI1O1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgLnBsdXNtaW51cyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgI3gge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDBweDtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc3ViLXRvdGFsIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgI3NvbGQtb3V0IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLm9yZGVyLXN1bW1hcnkge1xyXG4gIC8vICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcclxuICAuY2FydC1jb250YWluZXIge1xyXG4gICAgbWluLWhlaWdodDogNjIwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAvLyAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xyXG4gICAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICAgIC5jYXJ0LWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAvLyAgIC5wbGFjZS1vcmRlci1idG4tY29udGFpbmVyIHtcclxuICAgICAgLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAvLyAgICAgLmJ0bi1wcmltYXJ5IHtcclxuICAgICAgLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG10LTEgbWItNVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8IS0tIDx1c2Vycy1iYWxhbmNlIDp1c2VyPVwidXNlclwiIDpndWVzdD1cImd1ZXN0XCI+PC91c2Vycy1iYWxhbmNlPiAtLT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgPGgyIHN0eWxlPVwiY29sb3I6ICMzMzlmMjU7XCI+T3JkZXIgU3VtbWFyeTwvaDI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgT3JkZXIgIzoge3tvcmRlci5pZH19XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICA6aHJlZj1cIm9yZGVyLnByaW50X3VybFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHRleHQtbGlnaHRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxoNj5cclxuICAgICAgICAgICAgICA8Yj57e29yZGVyLmRhdGVfbGFiZWx9fTwvYj5cclxuICAgICAgICAgICAgICA8IS0tIDxiciAvPkV4cGVjdGVkIERlbGl2ZXJ5IERhdGU6XHJcbiAgICAgICAgICAgICAgPGI+e3tvcmRlci5hdHJfZXhwZWN0ZWRfZGVsaXZlcnlfZGF0ZX19PC9iPiAtLT5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiIDpzdHlsZT1cIidjb2xvcjonK3NldFN0YXR1c0NvbG9yKG9yZGVyLnN0YXR1cylcIj5cclxuICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICA8Yj57e29yZGVyLnN0YXR1c19sYWJlbH19PC9iPlxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggb3JkZXJzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTMgcHQtM1wiPlxyXG4gICAgICAgICAgICA8YSBzdHlsZT1cImNvbG9yOiMzMzlmMjU7XCIgaHJlZj1cIi9vcmRlcnNcIj5CYWNrIHRvIG9yZGVyczwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjYXJ0LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKG9yX3Byb2QsIGluZGV4KSBpbiBvcmRlcl9wcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gY2FydC1pdGVtXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIm9yX3Byb2QucHJvZHVjdC5pbWFnZV9saW5rXCIgY2xhc3M9XCJjYXJ0LWl0ZW0taW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwib3JfcHJvZC5pc19zdWJzY3JpcHRpb24gPT0gMFwiIGNsYXNzPVwiY2FydC1pdGVtLXRleHRzIGZsZXgtZ3Jvdy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yj57e29yX3Byb2QucHJvZHVjdC5uYW1lfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yX3Byb2QucHJpY2UpfX0ve3tvcl9wcm9kLnByb2R1Y3QudW5pdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxdHktb3B0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGI+UXR5OjwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7b3JfcHJvZC51cGRhdGVkX3F1YW50aXR5fX0gLyB7e29yX3Byb2QucHJvZHVjdC51bml0fX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm9yX3Byb2QuaXNfc3Vic2NyaXB0aW9uID09IDFcIiBjbGFzcz1cImNhcnQtaXRlbS10ZXh0cyBmbGV4LWdyb3ctMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3tvcl9wcm9kLnByb2R1Y3QubmFtZX19PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcl9wcm9kLnByaWNlKX19L3t7b3JfcHJvZC5wcm9kdWN0LnVuaXR9fVxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicXR5LW9wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIHt7b3JfcHJvZC5wcmljZX19ICBYICB7e29yX3Byb2Quc3Vic2NyaXB0aW9uX3dlZWtzfX0gd2Vla3MgPVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9vcmRlci8nK29yZGVyLmlkKycvd2Vlay8nK29yX3Byb2QuaWRcIj5XZWVrIERldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic29sZC1vdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJvcl9wcm9kLnVwZGF0ZWRfcXVhbnRpdHkgPT0gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgICAgID5TT0xEIE9VVDwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBpZD1cInhcIiBAY2xpY2s9XCJyZW1vdmVJdGVtSW5DYXJ0KGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAwXCIgaWQ9XCJzdWItdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcl9wcm9kLnByaWNlICogb3JfcHJvZC51cGRhdGVkX3F1YW50aXR5KX19PC9iPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAxXCIgaWQ9XCJzdWItdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Yj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcl9wcm9kLnN1YnNjcmlwdGlvbl9wcmljZSl9fTwvYj5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgXHQ8ZGl2IHYtaWY9XCJvcl9wcm9kLmlzX2J1bmRsZSA9PSAxXCIgY2xhc3M9XCJyb3cgbXQtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbD5JbmNsdWRlZCBQcm9kdWN0czo8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsaVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0yLCBpbmRleCkgaW4gb3JfcHJvZC5hdHJfcHJvZHVjdF9kZXRhaWxzLnNlbGVjdGVkX3Byb2R1Y3RzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cInBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogMjAlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW0yLnF0eSB9fS97eyBpdGVtMi51bml0IH19ICZuYnNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQmbmJzcDsgJm5ic3A7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogMzAlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6c3JjPVwiaXRlbTIuaW1hZ2VfbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbTIubmFtZSB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwid2lkdGg6IDUwJVwiIGNsYXNzPVwidGV4dC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJzdWIoaXRlbSwgaXRlbTIsIGluZGV4KVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXNtXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0yLnN1YiA9PSAnc3ViJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/ICdidG4taW5mbydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnYnRuLXNlY29uZGFyeSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3sgc3ViVW5zdWIoaXRlbTIpIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPiAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IG9yZGVyLXN1bW1hcnlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNhcnQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1kYXJrXCI+T3JkZXIgU3VtbWFyeTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiZ3Vlc3QgPT0gMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+T3JnYW5pemF0aW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57e29yZGVyLm9yZ2FuaXphdGlvbi5vcmdfbmFtZX19PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpPnt7b3JkZXIub3JnYW5pemF0aW9uLmF0cl9hZGRyZXNzfX08L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5PcmRlciBBbW91bnQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e29yZGVyLmF0cl9zdWJzY3JpcHRpb25fdG90YWxfYW1vdW50X2Z9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e29yZGVyLmJpbGxpbmdfdHlwZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3sgb3JkZXIuYXRyX2JpbGxpbmdfYW1vdW50X2YgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5Ub3RhbDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPiQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtcmlnaHQgZm9udC13ZWlnaHQtYm9sZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7b3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGI+JCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoT3ZlckFsbFRvdGFsKX19PC9iPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJvcmRlclwiLCBcIm9yZGVyX3Byb2R1Y3RzXCIsIFwiZ3Vlc3RcIiwgXCJ1c2VyXCJdLFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcclxuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XHJcbiAgICB9LFxyXG4gICAgc2V0U3RhdHVzQ29sb3IoZGF0YSkge1xyXG4gICAgICBpZiAoZGF0YSA9PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiIzMzOWYyNVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gMykge1xyXG4gICAgICAgIHJldHVybiBcIiNiNmNjY2ZcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCIjZDRhODNiXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdG90YWxBbW91bnQoKSB7XHJcbiAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgIGxldCBwcm9kdWN0cyA9IHRoaXMub3JkZXJfcHJvZHVjdHM7XHJcbiAgICAgIHByb2R1Y3RzLmZvckVhY2goKGNhcnQpID0+IHtcclxuICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQudXBkYXRlZF9xdWFudGl0eTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0RGlzY291bnQoKSB7XHJcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XHJcbiAgICAgIGRpc2NvdW50ID0gdGhpcy50b3RhbEFtb3VudCAqICh0aGlzLm9yZGVyLmRpc2NvdW50X3BlcmNlbnRhZ2UgLyAxMDApO1xyXG4gICAgICByZXR1cm4gZGlzY291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldENvdXBvbkRpc2NvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcmRlci5hdHJfY291cG9uX2Rpc2NvdW50O1xyXG4gICAgfSxcclxuXHJcbiAgICBPdmVyQWxsVG90YWwoKSB7XHJcbiAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgIC8vdG90YWwgLSBkaXNjb3VudDtcclxuICAgICAgdG90YWwgPSB0aGlzLnRvdGFsQW1vdW50IC0gdGhpcy5nZXREaXNjb3VudDtcclxuICAgICAgdG90YWwgPSB0b3RhbCAtIHRoaXMuZ2V0Q291cG9uRGlzY291bnQ7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMub3JkZXIuZGVsaXZlcnlfZmVlKTtcclxuICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIub3JkZXJzW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXNbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xcbiAgcGFkZGluZzogMjBweCAxNXB4IDBweCAxNXB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgLyogQWRkIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW1bZGF0YS12LTNmYzNmMmVhXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1pbWFnZVtkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHdpZHRoOiA4NXB4O1xcbiAgaGVpZ2h0OiA4NXB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tdGV4dHNbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyAuaXRlbS1uYW1lW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyBwW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyAucXR5LW9wdGlvbnNbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBjb2xvcjogIzMzOWYyNTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tdGV4dHMgLnF0eS1vcHRpb25zIC5wbHVzbWludXNbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lcltkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAjeFtkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICNzdWItdG90YWxbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciAjc29sZC1vdXRbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiA1cHg7XFxufVxcbi5vcmRlci1zdW1tYXJ5IC5jYXJ0LWNvbnRhaW5lcltkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIG1pbi1oZWlnaHQ6IDYyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG59XFxuLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyIC5jb250ZW50W2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgbWluLWhlaWdodDogNjAwcHg7XFxufVxcbi5vcmRlci1zdW1tYXJ5IC5jYXJ0LWNvbnRhaW5lciAuY29udGVudCAuY2FydC1oZWFkZXJbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ZjM2YyZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmYzNmMmVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ZjM2YyZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXQtMSBtYi01XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzMzOWYyNVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIk9yZGVyIFN1bW1hcnlcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICAgIE9yZGVyICM6IFwiICsgX3ZtLl9zKF92bS5vcmRlci5pZCkgKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLm9yZGVyLnByaW50X3VybCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxuICAgICAgICAgIFwiKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNlwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vcmRlci5kYXRlX2xhYmVsKSldKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04IG9yZGVyc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgY2FydC1pdGVtc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ub3JkZXJfcHJvZHVjdHMsIGZ1bmN0aW9uKG9yX3Byb2QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gY2FydC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IG9yX3Byb2QucHJvZHVjdC5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJ0LWl0ZW0tdGV4dHMgZmxleC1ncm93LTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhvcl9wcm9kLnByb2R1Y3QubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yX3Byb2QucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnByb2R1Y3QudW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInF0eS1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiUXR5OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9yX3Byb2QudXBkYXRlZF9xdWFudGl0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnByb2R1Y3QudW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJ0LWl0ZW0tdGV4dHMgZmxleC1ncm93LTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhvcl9wcm9kLnByb2R1Y3QubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yX3Byb2QucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnByb2R1Y3QudW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInF0eS1vcHRpb25zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9yX3Byb2QucHJpY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgIFggIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9yX3Byb2Quc3Vic2NyaXB0aW9uX3dlZWtzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHdlZWtzID1cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9vcmRlci9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvd2Vlay9cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2VlayBEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIG1sLWF1dG9cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJzdWItdG90YWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLnByaWNlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JfcHJvZC51cGRhdGVkX3F1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBhdHRyczogeyBpZDogXCJzdWItdG90YWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLnN1YnNjcmlwdGlvbl9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIG9yX3Byb2QuaXNfYnVuZGxlID09IDFcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkluY2x1ZGVkIFByb2R1Y3RzOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yX3Byb2QuYXRyX3Byb2R1Y3RfZGV0YWlscy5zZWxlY3RlZF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oaXRlbTIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjJweCAxMHB4IDJweCAxMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIyMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtMi5xdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtMi51bml0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiDCoFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdMKgIMKgXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjMwJVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtMi5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtMi5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNTAlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctNCBvcmRlci1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcnQtY29udGFpbmVyIGJnLXdoaXRlXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudCBkLWZsZXggZmxleC1jb2x1bW5cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmd1ZXN0ID09IDBcbiAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPcmdhbml6YXRpb246XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIub3JnYW5pemF0aW9uLm9yZ19uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIub3JnYW5pemF0aW9uLmF0cl9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJPcmRlciBBbW91bnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYXRyX3N1YnNjcmlwdGlvbl90b3RhbF9hbW91bnRfZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIuYmlsbGluZ190eXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIuYXRyX2JpbGxpbmdfYW1vdW50X2YpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0cl9zdWJzY3JpcHRpb25fb3ZlcmFsbF90b3RhbF9hbW91bnRfZlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTMgcHQtM1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMzM5ZjI1XCIgfSwgYXR0cnM6IHsgaHJlZjogXCIvb3JkZXJzXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiQmFjayB0byBvcmRlcnNcIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY2FydC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIk9yZGVyIFN1bW1hcnlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGRcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiVG90YWxcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1saWdodFwiIH0sIFtcbiAgICAgIF9jKFwidGRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0ZFwiKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZmMzZjJlYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZmMzZjJlYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNmYzNmMmVhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZmMzZjJlYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZmMzZjJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZmMzZjJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ZjM2YyZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2ZjM2YyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ZjM2YyZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmYzNmMmVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZmMzZjJlYSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=