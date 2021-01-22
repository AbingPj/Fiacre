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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    _c(
      "div",
      { staticClass: "row" },
      [_c("users-balance", { attrs: { user: _vm.user, guest: _vm.guest } })],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h2", { staticStyle: { color: "#339f25" } }, [
          _vm._v("Order Summary")
        ]),
        _vm._v(" "),
        _c("h4", [
          _vm._v("\n        Order #: " + _vm._s(_vm.order.id) + "\n        "),
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right text-light",
              attrs: { href: _vm.order.print_url }
            },
            [
              _c("i", { staticClass: "fas fa-print" }),
              _vm._v(" Print\n        ")
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
            _c("h6", [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.order.date_label) +
                  "\n            "
              ),
              _c("br"),
              _vm._v("Expected Delivery Date:\n            "),
              _c("b", [_vm._v(_vm._s(_vm.order.atr_expected_delivery_date))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col" }, [
            _c(
              "div",
              {
                staticClass: "float-right",
                style: "color:" + _vm.setStatusColor(_vm.order.status)
              },
              [_c("h5", [_c("b", [_vm._v(_vm._s(_vm.order.status_label))])])]
            )
          ])
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
                    staticClass: "list-group-item d-flex cart-item",
                    staticStyle: { "margin-bottom": "10px" }
                  },
                  [
                    _c("div", [
                      _c("img", {
                        staticClass: "cart-item-image",
                        attrs: { src: or_prod.product.image_link }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "cart-item-texts flex-grow-1" }, [
                      _c("p", [
                        _c("span", { staticClass: "item-name" }, [
                          _c("b", [_vm._v(_vm._s(or_prod.product.name))])
                        ]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(
                          "\n                  $ " +
                            _vm._s(_vm.displayNumberWithComma(or_prod.price)) +
                            "/" +
                            _vm._s(or_prod.product.unit) +
                            "\n                  "
                        ),
                        _c("br"),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _c("span", { staticClass: "qty-options" }, [
                          _c("b", [_vm._v("qty:")]),
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
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "cart-item-close-container ml-auto" },
                      [
                        or_prod.updated_quantity == 0
                          ? _c(
                              "span",
                              {
                                staticClass: "text-danger",
                                attrs: { id: "sold-out" }
                              },
                              [_vm._v("SOLD OUT")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c("span", { attrs: { id: "sub-total" } }, [
                          _c("b", [
                            _vm._v(
                              "$ " +
                                _vm._s(
                                  _vm.displayNumberWithComma(
                                    or_prod.price * or_prod.updated_quantity
                                  )
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
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-4 order-summary" }, [
        _c("div", { staticClass: "cart-container bg-white" }, [
          _c("div", { staticClass: "content d-flex flex-column" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm.guest == 0
              ? _c("div", [
                  _vm.user.customer_role == 2
                    ? _c("div", [
                        _c("table", { staticClass: "table" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", [_vm._v("Order Amount")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.totalAmount
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "\n                      Discount Amount (" +
                                    _vm._s(_vm.order.discount_percentage) +
                                    "%)\n                      "
                                ),
                                _vm._m(2),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _vm.user.customer_role == 2
                                  ? _c("div", [_vm._v("(Sun Club Member)")])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.getDiscount
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "\n                      Coupon Discount\n                      "
                                ),
                                _vm._m(3),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _vm.order.has_coupon
                                  ? _c("div", [
                                      _vm.order.coupon_is_percentage
                                        ? _c("div", [
                                            _vm._v(
                                              "( " +
                                                _vm._s(
                                                  _vm.order
                                                    .coupon_discount_amount
                                                ) +
                                                " % discount )"
                                            )
                                          ])
                                        : _c("div", [
                                            _vm._v(
                                              "( $" +
                                                _vm._s(
                                                  _vm.order
                                                    .coupon_discount_amount
                                                ) +
                                                " discount )"
                                            )
                                          ])
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(_vm.order.atr_coupon_discount_f)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Delivery Fee")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.order.delivery_fee
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(4),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v("$")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "text-right font-weight-bold"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              _vm.OverAllTotal
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(5)
                          ])
                        ])
                      ])
                    : _c("div", [
                        _c("table", { staticClass: "table" }, [
                          _c("tbody", [
                            _c("tr", [
                              _c("td", [_vm._v("Order Amount")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.totalAmount
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "\n                      Discount Amount (" +
                                    _vm._s(_vm.order.discount_percentage) +
                                    "%)\n                      "
                                ),
                                _vm._m(6),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _vm.user.customer_role == 3
                                  ? _c("div", [_vm._v("(Wholesaler)")])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.getDiscount
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [
                                _vm._v(
                                  "\n                      Coupon Discount\n                      "
                                ),
                                _vm._m(7),
                                _vm._v(" "),
                                _c("br"),
                                _vm._v(" "),
                                _vm.order.has_coupon
                                  ? _c("div", [
                                      _vm.order.coupon_is_percentage
                                        ? _c("div", [
                                            _vm._v(
                                              "( " +
                                                _vm._s(
                                                  _vm.order
                                                    .coupon_discount_amount
                                                ) +
                                                " % discount )"
                                            )
                                          ])
                                        : _c("div", [
                                            _vm._v(
                                              "( $" +
                                                _vm._s(
                                                  _vm.order
                                                    .coupon_discount_amount
                                                ) +
                                                " discount )"
                                            )
                                          ])
                                    ])
                                  : _vm._e()
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(_vm.order.atr_coupon_discount_f)
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("Delivery Fee")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c("div", [_vm._v("$")]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "text-right" }, [
                                      _vm._v(
                                        _vm._s(
                                          _vm.displayNumberWithComma(
                                            _vm.order.delivery_fee
                                          )
                                        )
                                      )
                                    ])
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _vm._m(8),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex justify-content-between"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "font-weight-bold" },
                                      [_vm._v("$")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "text-right font-weight-bold"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              _vm.OverAllTotal
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(9)
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
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "float-right" }, [_c("b", [_vm._v("-")])])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWU/NGUyNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9PcmRlclByb2R1Y3RQYWdlLnZ1ZT84OGU1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlPzUxZTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvT3JkZXJQcm9kdWN0UGFnZS52dWU/ZmEyOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9PcmRlclByb2R1Y3RQYWdlLnZ1ZT84ZTg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlP2RlNjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeVhBO0FBQ0EscURBREE7QUFFQTtBQUNBLDBCQURBLGtDQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkE7QUFJQTtBQUNBLEtBUkE7QUFTQSxrQkFUQSwwQkFTQSxJQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFqQkEsR0FGQTtBQXFCQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBUkE7QUFVQSxlQVZBLHlCQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FkQTtBQWdCQSxxQkFoQkEsK0JBZ0JBO0FBQ0E7QUFDQSxLQWxCQTtBQW9CQSxnQkFwQkEsMEJBb0JBO0FBQ0Esb0JBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0JBO0FBckJBLEc7Ozs7Ozs7Ozs7O0FDelhBLDJCQUEyQixtQkFBTyxDQUFDLHNHQUFxRDtBQUN4Rjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsNkJBQTZCLDJDQUEyQyxHQUFHLHdDQUF3Qyw4QkFBOEIsZ0NBQWdDLGtCQUFrQixzQkFBc0IsdUJBQXVCLDBEQUEwRCxtQ0FBbUMsbURBQW1ELGtCQUFrQixHQUFHLG9FQUFvRSxnQkFBZ0IsaUJBQWlCLHNCQUFzQixpQkFBaUIsNkJBQTZCLDRCQUE0Qiw2QkFBNkIsR0FBRyxvRUFBb0UsdUJBQXVCLHFCQUFxQixHQUFHLCtFQUErRSxvQkFBb0IsR0FBRyxzRUFBc0UsdUJBQXVCLEdBQUcsaUZBQWlGLG1CQUFtQixpQkFBaUIsb0JBQW9CLEdBQUcsNEZBQTRGLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLG9CQUFvQixHQUFHLDhFQUE4RSxlQUFlLGlCQUFpQix1QkFBdUIsR0FBRyxpRkFBaUYsdUJBQXVCLGFBQWEsZUFBZSw0QkFBNEIsZ0JBQWdCLGdCQUFnQixHQUFHLHlGQUF5Rix1QkFBdUIsZ0JBQWdCLGVBQWUsb0JBQW9CLEdBQUcsd0ZBQXdGLHVCQUF1QixhQUFhLGVBQWUsR0FBRyxtREFBbUQsc0JBQXNCLDJDQUEyQyxrQkFBa0IsdUJBQXVCLDZCQUE2QixxQkFBcUIsY0FBYyxHQUFHLDREQUE0RCxzQkFBc0IsR0FBRyx5RUFBeUUsb0JBQW9CLHVCQUF1QixHQUFHOztBQUVoekU7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsd3JCQUFtWTs7QUFFelosNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDRHQUF5RDs7QUFFOUU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0EsT0FBTyxxQkFBcUI7QUFDNUIsNEJBQTRCLFNBQVMsbUNBQW1DLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLHdCQUF3QjtBQUN6QyxrQkFBa0IsZUFBZSxtQkFBbUIsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLDhCQUE4QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQiwwQkFBMEI7QUFDM0MsbUJBQW1CLHFCQUFxQjtBQUN4QyxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQXFCO0FBQ3BDLGlCQUFpQixpQ0FBaUM7QUFDbEQsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EscUJBQXFCLHNDQUFzQztBQUMzRDtBQUNBO0FBQ0EsZUFBZSw0QkFBNEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQyx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLCtCQUErQiw2Q0FBNkM7QUFDNUU7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFtRDtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFNBQVMsa0JBQWtCLEVBQUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3Q0FBd0M7QUFDekQsbUJBQW1CLHlDQUF5QztBQUM1RCxxQkFBcUIsNENBQTRDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0QkFBNEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0NBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1QkFBdUI7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyw0QkFBNEI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDRCQUE0QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsa0NBQWtDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBLFNBQVMsZUFBZSxtQkFBbUIsVUFBVSxrQkFBa0IsRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdUNBQXVDO0FBQzdELGdCQUFnQiwyQkFBMkI7QUFDM0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNwb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3JHO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXNNLENBQWdCLDRQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFOO0FBQUE7QUFBQTtBQUFBO0FBQW1jLENBQWdCLHNjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL09yZGVyUHJvZHVjdFBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ub3JkZXJzIHtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIC5jYXJ0LWl0ZW1zIHtcbiAgICBtYXJnaW46IDIwcHggMHB4IDIwcHggMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggMTVweCAwcHggMTVweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgLyogQWRkIHZlcnRpY2FsIHNjcm9sbGJhciAqL1xuICAgIC5jYXJ0LWl0ZW0ge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWRiZDtcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgICAgLmNhcnQtaXRlbS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgICAgIH1cbiAgICAgIC5jYXJ0LWl0ZW0tdGV4dHMge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgLml0ZW0tbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICAucXR5LW9wdGlvbnMge1xuICAgICAgICAgIGNvbG9yOiAjMzM5ZjI1O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgLnBsdXNtaW51cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICN4IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgICAgICAjc3ViLXRvdGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI3NvbGQtb3V0IHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm9yZGVyLXN1bW1hcnkge1xuICAvLyAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gIC5jYXJ0LWNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogNjIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAxMHB4O1xuICAgIC5jb250ZW50IHtcbiAgICAgIC8vICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JlZW47XG4gICAgICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgLmNhcnQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAvLyAgIC5wbGFjZS1vcmRlci1idG4tY29udGFpbmVyIHtcbiAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAvLyAgICAgYm90dG9tOiAwcHg7XG4gICAgICAvLyAgICAgLmJ0bi1wcmltYXJ5IHtcbiAgICAgIC8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcbiAgICAgIC8vICAgICB9XG4gICAgICAvLyAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBtdC0xIG1iLTVcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8dXNlcnMtYmFsYW5jZSA6dXNlcj1cInVzZXJcIiA6Z3Vlc3Q9XCJndWVzdFwiPjwvdXNlcnMtYmFsYW5jZT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgIDxoMiBzdHlsZT1cImNvbG9yOiAjMzM5ZjI1O1wiPk9yZGVyIFN1bW1hcnk8L2gyPlxuICAgICAgICA8aDQ+XG4gICAgICAgICAgT3JkZXIgIzoge3tvcmRlci5pZH19XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIDpocmVmPVwib3JkZXIucHJpbnRfdXJsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHRleHQtbGlnaHRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9oND5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICB7e29yZGVyLmRhdGVfbGFiZWx9fVxuICAgICAgICAgICAgICA8YnIgLz5FeHBlY3RlZCBEZWxpdmVyeSBEYXRlOlxuICAgICAgICAgICAgICA8Yj57e29yZGVyLmF0cl9leHBlY3RlZF9kZWxpdmVyeV9kYXRlfX08L2I+XG4gICAgICAgICAgICA8L2g2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiIDpzdHlsZT1cIidjb2xvcjonK3NldFN0YXR1c0NvbG9yKG9yZGVyLnN0YXR1cylcIj5cbiAgICAgICAgICAgICAgPGg1PlxuICAgICAgICAgICAgICAgIDxiPnt7b3JkZXIuc3RhdHVzX2xhYmVsfX08L2I+XG4gICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTggb3JkZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMyBwdC0zXCI+XG4gICAgICAgICAgICA8YSBzdHlsZT1cImNvbG9yOiMzMzlmMjU7XCIgaHJlZj1cIi9vcmRlcnNcIj5CYWNrIHRvIG9yZGVyczwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNhcnQtaXRlbXNcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIob3JfcHJvZCwgaW5kZXgpIGluIG9yZGVyX3Byb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleCBjYXJ0LWl0ZW1cIlxuICAgICAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWJvdHRvbToxMHB4O1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwib3JfcHJvZC5wcm9kdWN0LmltYWdlX2xpbmtcIiBjbGFzcz1cImNhcnQtaXRlbS1pbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcnQtaXRlbS10ZXh0cyBmbGV4LWdyb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3tvcl9wcm9kLnByb2R1Y3QubmFtZX19PC9iPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcl9wcm9kLnByaWNlKX19L3t7b3JfcHJvZC5wcm9kdWN0LnVuaXR9fVxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicXR5LW9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj5xdHk6PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7b3JfcHJvZC51cGRhdGVkX3F1YW50aXR5fX0gLyB7e29yX3Byb2QucHJvZHVjdC51bml0fX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICBpZD1cInNvbGQtb3V0XCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm9yX3Byb2QudXBkYXRlZF9xdWFudGl0eSA9PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICA+U09MRCBPVVQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8IS0tIDxidXR0b24gaWQ9XCJ4XCIgQGNsaWNrPVwicmVtb3ZlSXRlbUluQ2FydChpdGVtKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInN1Yi10b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8Yj4kIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcl9wcm9kLnByaWNlICogb3JfcHJvZC51cGRhdGVkX3F1YW50aXR5KX19PC9iPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBvcmRlci1zdW1tYXJ5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJ0LWNvbnRhaW5lciBiZy13aGl0ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjYXJ0LWhlYWRlclwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWRhcmtcIj5PcmRlciBTdW1tYXJ5PC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJndWVzdCA9PSAwXCI+XG4gICAgICAgICAgICAgIDwhLS0gU3VuY0x1YiBPcmRlciBTdW1tYXJ5IC0tPlxuICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3JkZXIgQW1vdW50PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbEFtb3VudCl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdW50IEFtb3VudCAoe3tvcmRlci5kaXNjb3VudF9wZXJjZW50YWdlfX0lKVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlwiPihTdW4gQ2x1YiBNZW1iZXIpPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShnZXREaXNjb3VudCl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvdXBvbiBEaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJvcmRlci5oYXNfY291cG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwib3JkZXIuY291cG9uX2lzX3BlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+KCB7e29yZGVyLmNvdXBvbl9kaXNjb3VudF9hbW91bnR9fSAlIGRpc2NvdW50ICk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+KCAke3tvcmRlci5jb3Vwb25fZGlzY291bnRfYW1vdW50fX0gZGlzY291bnQgKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7b3JkZXIuYXRyX2NvdXBvbl9kaXNjb3VudF9mfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGVsaXZlcnkgRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcmRlci5kZWxpdmVyeV9mZWUpfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5Ub3RhbDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj4kPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtcmlnaHQgZm9udC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoT3ZlckFsbFRvdGFsKX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDx0ciBjbGFzcz1cInRleHQtZGFuZ2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+QWRkaXRvbmFsIENoYXJnZTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiQge3tvcmRlci5hZGRpdGlvbmFsX2NoYXJnZS50b0ZpeGVkKDIpfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBXaG9sZXNhbGVyIE9yZGVyIFN1bW1hcnkgLS0+XG4gICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+T3JkZXIgQW1vdW50PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbEFtb3VudCl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIERpc2NvdW50IEFtb3VudCAoe3tvcmRlci5kaXNjb3VudF9wZXJjZW50YWdlfX0lKVxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gM1wiPihXaG9sZXNhbGVyKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0RGlzY291bnQpfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvdXBvbiBEaXNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4tPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJvcmRlci5oYXNfY291cG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwib3JkZXIuY291cG9uX2lzX3BlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+KCB7e29yZGVyLmNvdXBvbl9kaXNjb3VudF9hbW91bnR9fSAlIGRpc2NvdW50ICk8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+KCAke3tvcmRlci5jb3Vwb25fZGlzY291bnRfYW1vdW50fX0gZGlzY291bnQgKTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7b3JkZXIuYXRyX2NvdXBvbl9kaXNjb3VudF9mfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+RGVsaXZlcnkgRmVlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiPnt7IGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEob3JkZXIuZGVsaXZlcnlfZmVlKX19PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+VG90YWw8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+JDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGZvbnQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKE92ZXJBbGxUb3RhbCl9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxiPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKE92ZXJBbGxUb3RhbCl9fTwvYj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtbGlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcIm9yZGVyXCIsIFwib3JkZXJfcHJvZHVjdHNcIiwgXCJndWVzdFwiLCBcInVzZXJcIl0sXG4gIG1ldGhvZHM6IHtcbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xuICAgIH0sXG4gICAgc2V0U3RhdHVzQ29sb3IoZGF0YSkge1xuICAgICAgaWYgKGRhdGEgPT0gMikge1xuICAgICAgICByZXR1cm4gXCIjMzM5ZjI1XCI7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT0gMykge1xuICAgICAgICByZXR1cm4gXCIjYjZjY2NmXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIjZDRhODNiXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICB0b3RhbEFtb3VudCgpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBsZXQgcHJvZHVjdHMgPSB0aGlzLm9yZGVyX3Byb2R1Y3RzO1xuICAgICAgcHJvZHVjdHMuZm9yRWFjaCgoY2FydCkgPT4ge1xuICAgICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQudXBkYXRlZF9xdWFudGl0eTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sXG5cbiAgICBnZXREaXNjb3VudCgpIHtcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XG4gICAgICBkaXNjb3VudCA9IHRoaXMudG90YWxBbW91bnQgKiAodGhpcy5vcmRlci5kaXNjb3VudF9wZXJjZW50YWdlIC8gMTAwKTtcbiAgICAgIHJldHVybiBkaXNjb3VudDtcbiAgICB9LFxuXG4gICAgZ2V0Q291cG9uRGlzY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlci5hdHJfY291cG9uX2Rpc2NvdW50O1xuICAgIH0sXG5cbiAgICBPdmVyQWxsVG90YWwoKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgLy90b3RhbCAtIGRpc2NvdW50O1xuICAgICAgdG90YWwgPSB0aGlzLnRvdGFsQW1vdW50IC0gdGhpcy5nZXREaXNjb3VudDtcbiAgICAgIHRvdGFsID0gdG90YWwgLSB0aGlzLmdldENvdXBvbkRpc2NvdW50O1xuICAgICAgdG90YWwgPSB0b3RhbCArIHBhcnNlRmxvYXQodGhpcy5vcmRlci5kZWxpdmVyeV9mZWUpO1xuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vcmRlcnNbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtc1tkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIG1hcmdpbjogMjBweCAwcHggMjBweCAwcHg7XFxuICBwYWRkaW5nOiAyMHB4IDE1cHggMHB4IDE1cHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNjAwcHg7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbVtkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLWltYWdlW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgd2lkdGg6IDg1cHg7XFxuICBoZWlnaHQ6IDg1cHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0c1tkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzIC5pdGVtLW5hbWVbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzIHBbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcbi5vcmRlcnMgLmNhcnQtaXRlbXMgLmNhcnQtaXRlbSAuY2FydC1pdGVtLXRleHRzIC5xdHktb3B0aW9uc1tkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIGNvbG9yOiAjMzM5ZjI1O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS10ZXh0cyAucXR5LW9wdGlvbnMgLnBsdXNtaW51c1tkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwcHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgd2lkdGg6IDIwJTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICN4W2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICByaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDBweDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4ub3JkZXJzIC5jYXJ0LWl0ZW1zIC5jYXJ0LWl0ZW0gLmNhcnQtaXRlbS1jbG9zZS1jb250YWluZXIgI3N1Yi10b3RhbFtkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuLm9yZGVycyAuY2FydC1pdGVtcyAuY2FydC1pdGVtIC5jYXJ0LWl0ZW0tY2xvc2UtY29udGFpbmVyICNzb2xkLW91dFtkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDVweDtcXG59XFxuLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyW2RhdGEtdi0zZmMzZjJlYV0ge1xcbiAgbWluLWhlaWdodDogNjIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCBsaWdodGdyYXkgIWltcG9ydGFudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAxMHB4O1xcbn1cXG4ub3JkZXItc3VtbWFyeSAuY2FydC1jb250YWluZXIgLmNvbnRlbnRbZGF0YS12LTNmYzNmMmVhXSB7XFxuICBtaW4taGVpZ2h0OiA2MDBweDtcXG59XFxuLm9yZGVyLXN1bW1hcnkgLmNhcnQtY29udGFpbmVyIC5jb250ZW50IC5jYXJ0LWhlYWRlcltkYXRhLXYtM2ZjM2YyZWFdIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZmMzZjJlYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ZjM2YyZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZmMzZjJlYSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBtdC0xIG1iLTVcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LFxuICAgICAgW19jKFwidXNlcnMtYmFsYW5jZVwiLCB7IGF0dHJzOiB7IHVzZXI6IF92bS51c2VyLCBndWVzdDogX3ZtLmd1ZXN0IH0gfSldLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzMzOWYyNVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIk9yZGVyIFN1bW1hcnlcIilcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgT3JkZXIgIzogXCIgKyBfdm0uX3MoX3ZtLm9yZGVyLmlkKSArIFwiXFxuICAgICAgICBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogX3ZtLm9yZGVyLnByaW50X3VybCB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxuICAgICAgICBcIilcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDZcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmRhdGVfbGFiZWwpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiRXhwZWN0ZWQgRGVsaXZlcnkgRGF0ZTpcXG4gICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIuYXRyX2V4cGVjdGVkX2RlbGl2ZXJ5X2RhdGUpKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiY29sb3I6XCIgKyBfdm0uc2V0U3RhdHVzQ29sb3IoX3ZtLm9yZGVyLnN0YXR1cylcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwiaDVcIiwgW19jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIuc3RhdHVzX2xhYmVsKSldKV0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy04IG9yZGVyc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgY2FydC1pdGVtc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ub3JkZXJfcHJvZHVjdHMsIGZ1bmN0aW9uKG9yX3Byb2QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gZC1mbGV4IGNhcnQtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcnQtaXRlbS1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBvcl9wcm9kLnByb2R1Y3QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLXRleHRzIGZsZXgtZ3Jvdy0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhvcl9wcm9kLnByb2R1Y3QubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yX3Byb2QucHJpY2UpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnByb2R1Y3QudW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicXR5LW9wdGlvbnNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwicXR5OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnVwZGF0ZWRfcXVhbnRpdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhvcl9wcm9kLnByb2R1Y3QudW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1pdGVtLWNsb3NlLWNvbnRhaW5lciBtbC1hdXRvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBvcl9wcm9kLnVwZGF0ZWRfcXVhbnRpdHkgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInNvbGQtb3V0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTT0xEIE9VVFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgaWQ6IFwic3ViLXRvdGFsXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JfcHJvZC5wcmljZSAqIG9yX3Byb2QudXBkYXRlZF9xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IG9yZGVyLXN1bW1hcnlcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FydC1jb250YWluZXIgYmctd2hpdGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50IGQtZmxleCBmbGV4LWNvbHVtblwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZ3Vlc3QgPT0gMFxuICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCJPcmRlciBBbW91bnRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdGFsQW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBEaXNjb3VudCBBbW91bnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuZGlzY291bnRfcGVyY2VudGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIlKVxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW192bS5fdihcIihTdW4gQ2x1YiBNZW1iZXIpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vwb24gRGlzY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuaGFzX2NvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuY291cG9uX2lzX3BlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3Vwb25fZGlzY291bnRfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICUgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiggJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdXBvbl9kaXNjb3VudF9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuYXRyX2NvdXBvbl9kaXNjb3VudF9mKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRGVsaXZlcnkgRmVlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5kZWxpdmVyeV9mZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiJFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLk92ZXJBbGxUb3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIk9yZGVyIEFtb3VudFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG90YWxBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIERpc2NvdW50IEFtb3VudCAoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5kaXNjb3VudF9wZXJjZW50YWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiUpXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbX3ZtLl92KFwiKFdob2xlc2FsZXIpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIiRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERpc2NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBDb3Vwb24gRGlzY291bnRcXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuaGFzX2NvdXBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuY291cG9uX2lzX3BlcmNlbnRhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb3Vwb25fZGlzY291bnRfYW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICUgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiggJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvdXBvbl9kaXNjb3VudF9hbW91bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgZGlzY291bnQgKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiJFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuYXRyX2NvdXBvbl9kaXNjb3VudF9mKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwiRGVsaXZlcnkgRmVlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIkXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5kZWxpdmVyeV9mZWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oOCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiJFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1yaWdodCBmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLk92ZXJBbGxUb3RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTMgcHQtM1wiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjMzM5ZjI1XCIgfSwgYXR0cnM6IHsgaHJlZjogXCIvb3JkZXJzXCIgfSB9LFxuICAgICAgICBbX3ZtLl92KFwiQmFjayB0byBvcmRlcnNcIildXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY2FydC1oZWFkZXJcIiB9LCBbXG4gICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYXJrXCIgfSwgW192bS5fdihcIk9yZGVyIFN1bW1hcnlcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW19jKFwiYlwiLCBbX3ZtLl92KFwiLVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbX2MoXCJiXCIsIFtfdm0uX3YoXCItXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRkXCIsIFtfYyhcImJcIiwgW192bS5fdihcIlRvdGFsXCIpXSldKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtbGlnaHRcIiB9LCBbXG4gICAgICBfYyhcInRkXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGRcIilcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtfYyhcImJcIiwgW192bS5fdihcIi1cIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW19jKFwiYlwiLCBbX3ZtLl92KFwiLVwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0ZFwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWxpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJ0ZFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRkXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmYzNmMmVhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmYzNmMmVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2ZjM2YyZWFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZmMzZjJlYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZmMzZjJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZmMzZjJlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vT3JkZXJQcm9kdWN0UGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ZjM2YyZWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2ZjM2YyZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL09yZGVyUHJvZHVjdFBhZ2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL09yZGVyUHJvZHVjdFBhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ZjM2YyZWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmYzNmMmVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9PcmRlclByb2R1Y3RQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZmMzZjJlYSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=