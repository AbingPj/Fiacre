(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/OrderShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propsorder", "propsproducts", "propsuser", "action"],
  data: function data() {
    return {
      order: {},
      user: {},
      products: [],
      edited: false,
      selectedStatus: 3,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    };
  },
  methods: {
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    edit: function edit(data) {
      console.log(data);
      data.editing = true;
    },
    saved: function saved(data) {
      data.editing = false;
      this.edited = true;
    },
    getProducts: function getProducts() {
      var products = this.propsproducts;
      products.forEach(function (product) {
        product.editing = false;
      });
      this.products = products;
    },
    selectedStatusChange: function selectedStatusChange() {
      this.edited = true;
    },
    onlyNumber: function onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if (keyCode < 48 || keyCode > 57) {
        //   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    print: function print() {
      var _this = this;

      LoadingOverlay();
      axios({
        method: "post",
        url: "/admin/generate/pdf/order",
        data: {
          order_id: this.order.id
        },
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "orders_no_" + _this.order.id + ".pdf"); //or any other extension

        document.body.appendChild(link);
        link.click();
        LoadingOverlayHide();
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  created: function created() {
    this.order = this.propsorder;
    this.user = this.propsuser;
    this.getProducts();
    this.selectedStatus = this.order.status;
  },
  computed: {
    totalAmount: function totalAmount() {
      if (this.products.length == 0) {
        return 0.0;
      } else {
        var total = 0;
        this.products.forEach(function (product) {
          total = total + product.price * product.updated_quantity;
        });
        return total;
      }
    },
    // totalAmount() {
    //   let total = 0;
    //   let products = this.order_products;
    //   products.forEach(cart => {
    //     total = total + cart.price * cart.updated_quantity;
    //   });
    //   return total;
    // },
    getDiscount: function getDiscount() {
      var discount = 0;
      discount = this.totalAmount * (this.order.discount_percentage / 100);
      return discount;
    },
    getCouponDiscount: function getCouponDiscount() {
      return this.order.atr_coupon_discount;
    },
    getTax: function getTax() {
      if (this.products.length == 0) {
        return 0.0;
      } else {
        var tax = 0;
        this.products.forEach(function (product) {
          tax = tax + product.tax_amount * product.updated_quantity;
        });
        return tax;
      }
    },
    OverAllTotal: function OverAllTotal() {
      var total = 0; //total - discount;

      total = this.totalAmount - this.getDiscount;
      total = total - this.getCouponDiscount;
      total = total + parseFloat(this.order.delivery_fee);
      total = total + parseFloat(this.getTax);
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-edit-bg-color[data-v-24f791c7] {\n  background: #ffe1e6;\n}\n.qty-input[data-v-24f791c7] {\n  border: none;\n  border-bottom: 2px solid black;\n  width: 50px;\n  padding: 0px;\n  margin: 0px;\n}\n.btn-success-2[data-v-24f791c7] {\n  color: gray !important;\n  background-color: rgba(51, 159, 37, 0.3) !important;\n  border-color: rgba(51, 159, 37, 0.5) !important;\n}\n.status-awaiting[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #4dbd74 !important;\n}\n.status-hold[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #ffc107 !important;\n}\n.status-ready[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #17a2b8 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      attrs: {
        action: _vm.action,
        method: "post",
        enctype: "multipart/form-data"
      }
    },
    [
      _c("input", {
        attrs: { type: "hidden", name: "_token" },
        domProps: { value: _vm.csrf }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "order_id" },
        domProps: { value: _vm.order.id }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column min-vh-100" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("h3", { staticClass: "text-success" }, [
                _c("b", [_vm._v("Order #" + _vm._s(_vm.order.id))]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success float-right",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.print()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-print" }),
                    _vm._v(" Print\n            ")
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "text-right w-50" }, [
                  _c("h5", [_vm._v(_vm._s(_vm.order.date_label))])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c("div", { staticClass: "mr-auto w-50" }, [
                  _c("h3", [
                    _vm._v("\n                Place by:\n                "),
                    _c("b", [_vm._v(_vm._s(_vm.user.full_name))]),
                    _vm._v(" "),
                    _vm.order.order_by == 0
                      ? _c("span", [_vm._v("(Retailer)")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.customer_role == 2
                      ? _c("span", [_vm._v("(Sun Club Member)")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.customer_role == 3
                      ? _c("span", [_vm._v("(Wholesaler)")])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right w-50" }, [
                  _c("h3", [
                    _vm._v(
                      "Total: $" +
                        _vm._s(
                          _vm.order.atr_subscription_overall_total_amount_f
                        )
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-50 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.user.email))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "w-50 border-bottom border-secondary pb-0 ml-3"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.user.street_address))
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-25 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Phone")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        "[ " +
                          _vm._s(_vm.user.contact_number_type) +
                          " ] " +
                          _vm._s(_vm.user.contact_number)
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-50 ml-3" }, [
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [_vm._v("City")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.city))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [_vm._v("State")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.state))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [
                          _vm._v("Zip Code")
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.zipcode))
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-50 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [
                      _vm._v("Organization")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        _vm._s(_vm.order.organization.org_name) +
                          "\n              "
                      ),
                      _c("br"),
                      _vm._v(
                        "\n              " +
                          _vm._s(_vm.order.organization.atr_address) +
                          "\n              "
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5 mb-5" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "ul",
                { staticClass: "list-group rounded-0" },
                _vm._l(_vm.products, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "list-group-item d-flex",
                      class: item.editing == true ? "list-edit-bg-color" : ""
                    },
                    [
                      _c("div", [
                        _c("img", {
                          staticStyle: {
                            width: "50px",
                            height: "50px",
                            "object-fit": "cover"
                          },
                          attrs: { src: item.product.image_link }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-25 ml-3" }, [
                        _c("p", [
                          _c("b", [_vm._v(_vm._s(item.product.name))]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          item.is_subscription == 1
                            ? _c("span", [
                                _vm._v(
                                  "\n                      $ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.price)
                                    ) +
                                    " / " +
                                    _vm._s(item.product.unit) +
                                    " "
                                ),
                                _c("span", { staticClass: "mr-3 ml-3" }, [
                                  _vm._v("X")
                                ]),
                                _vm._v(
                                  " " +
                                    _vm._s(item.subscription_weeks) +
                                    " weeks\n                  "
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          item.is_subscription == 0
                            ? _c("span", [
                                _vm._v(
                                  "\n                      $ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.price)
                                    ) +
                                    " / " +
                                    _vm._s(item.product.unit) +
                                    " "
                                ),
                                _c("span", { staticClass: "mr-3 ml-3" }, [
                                  _vm._v("X")
                                ]),
                                _vm._v(
                                  " " +
                                    _vm._s(item.updated_quantity) +
                                    "\n                  "
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-auto w-25" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-end align-items-end",
                            staticStyle: { height: "57px" }
                          },
                          [
                            item.is_subscription == 1
                              ? _c("div", { staticClass: "w-50 text-right" }, [
                                  _c("div", [
                                    _c("b", [
                                      _vm._v(
                                        "\n                        $ " +
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              item.subscription_price
                                            )
                                          ) +
                                          "\n                      "
                                      )
                                    ])
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            item.is_subscription == 0
                              ? _c("div", { staticClass: "w-50 text-right" }, [
                                  _c("div", [
                                    _c("b", [
                                      _vm._v(
                                        "\n                         $ " +
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              item.price * item.updated_quantity
                                            )
                                          ) +
                                          "\n                      "
                                      )
                                    ])
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "pl-3 text-right" })
                          ]
                        )
                      ])
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("Total:")]),
                  _vm._v(
                    "\n              $" +
                      _vm._s(_vm.order.atr_subscription_total_amount_f) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v(
                      _vm._s(_vm.order.billing_type) +
                        " (" +
                        _vm._s(_vm.order.billing_type_percentage) +
                        " %)  +"
                    )
                  ]),
                  _vm._v(
                    "\n              $" +
                      _vm._s(_vm.order.atr_billing_amount_f) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v("Referral Discount- ")
                  ]),
                  _vm._v(
                    "\n              $" +
                      _vm._s(_vm.order.atr_referral_amount_f) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h3", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("Total:")]),
                  _vm._v(" "),
                  _c("b", [
                    _vm._v(
                      "$" +
                        _vm._s(
                          _vm.order.atr_subscription_overall_total_amount_f
                        )
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "card-title mb-0" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c("div", { staticClass: "mr-2" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right rounded-0 text-light",
              attrs: { href: "/admin/orders" }
            },
            [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
          )
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("Orders")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-auto w-50" }, [
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-2 col-form-label",
            attrs: { for: "inputEmail3" }
          },
          [_vm._v(":")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=24f791c7&scoped=true& */ "./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24f791c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/orders/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=24f791c7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NmRmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT9hNTkzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2M0YWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NjQzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT85Zjc4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2JhNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc1JBO0FBQ0EsK0RBREE7QUFFQSxNQUZBLGtCQUVB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QUFBO0FBQXljLENBQWdCLDBiQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL09yZGVyU2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Zm9ybSA6YWN0aW9uPVwiYWN0aW9uXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJjc3JmXCIgLz5cclxuICAgIDwhLS0gPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX21ldGhvZFwiIHZhbHVlPVwiUEFUQ0hcIiAvPiAtLT5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9yZGVyX2lkXCIgOnZhbHVlPVwib3JkZXIuaWRcIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vb3JkZXJzXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T3JkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Yj5PcmRlciAje3tvcmRlci5pZH19PC9iPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInByaW50KClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG1iLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctNTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHctNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJzZWxlY3RlZFN0YXR1c0NoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7XCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkU3RhdHVzID09IDIgPyAnc3RhdHVzLWF3YWl0aW5nJyA6ICdzdGF0dXMtaG9sZCdcclxuICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UmVzZXJ2ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UmVhZHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxoNT5TdGF0dXM6IHt7b3JkZXIuc3RhdHVzfX08L2g1PiAtLT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+e3tvcmRlci5kYXRlX2xhYmVsfX08L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgIFBsYWNlIGJ5OlxyXG4gICAgICAgICAgICAgICAgICA8Yj57e3VzZXIuZnVsbF9uYW1lfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvcmRlci5vcmRlcl9ieSA9PSAwXCI+KFJldGFpbGVyKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyXCI+KFN1biBDbHViIE1lbWJlcik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gM1wiPihXaG9sZXNhbGVyKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRvdGFsOiAke3tvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2Z9fTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3t1c2VyLmVtYWlsfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8L3U+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5BZGRyZXNzPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5zdHJlZXRfYWRkcmVzc319PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG1iLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5QaG9uZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMFwiPlsge3t1c2VyLmNvbnRhY3RfbnVtYmVyX3R5cGV9fSBdIHt7dXNlci5jb250YWN0X251bWJlcn19PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01MCBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPkNpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5jaXR5fX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+U3RhdGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5zdGF0ZX19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci56aXBjb2RlfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+T3JnYW5pemF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPHU+IC0tPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0wXCI+e3tvcmRlci5vcmdhbml6YXRpb24ub3JnX25hbWV9fVxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAge3tvcmRlci5vcmdhbml6YXRpb24uYXRyX2FkZHJlc3N9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gPC91PiAtLT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTUgbWItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIHJvdW5kZWQtMFwiPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiaXRlbS5lZGl0aW5nID09IHRydWUgPyAnbGlzdC1lZGl0LWJnLWNvbG9yJyA6ICcnXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0ucHJvZHVjdC5pbWFnZV9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjUwcHg7IGhlaWdodDo1MHB4OyBvYmplY3QtZml0OmNvdmVyO1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e3tpdGVtLnByb2R1Y3QubmFtZX19PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKX19IC8ge3tpdGVtLnByb2R1Y3QudW5pdH19IDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj4ge3tpdGVtLnN1YnNjcmlwdGlvbl93ZWVrc319IHdlZWtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKX19IC8ge3tpdGVtLnByb2R1Y3QudW5pdH19IDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj4ge3tpdGVtLnVwZGF0ZWRfcXVhbnRpdHl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtYXV0byB3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1lbmRcIiBzdHlsZT1cImhlaWdodDo1N3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcIiBjbGFzcz1cInctNTAgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5zdWJzY3JpcHRpb25fcHJpY2UpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiIGNsYXNzPVwidy01MCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoKGl0ZW0ucHJpY2UgKiBpdGVtLnVwZGF0ZWRfcXVhbnRpdHkpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/ICcnIDogJ2Qtbm9uZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiJ3Byb2R1Y3RbJytpdGVtLmlkKyddJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicXR5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnVwZGF0ZWRfcXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMyB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gZmFsc2UgPyAnZC1ibG9jaycgOiAnZC1ub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXQoaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0IG1yLTFcIj48L2k+RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIml0ZW0uZWRpdGluZyA9PSB0cnVlID8gJ2QtYmxvY2snIDogJ2Qtbm9uZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlZChpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXNhdmUgbXItMVwiPjwvaT5TYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5Ub3RhbDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAke3tvcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj57e29yZGVyLmJpbGxpbmdfdHlwZX19ICh7e29yZGVyLmJpbGxpbmdfdHlwZV9wZXJjZW50YWdlfX0gJSkgICs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAke3tvcmRlci5hdHJfYmlsbGluZ19hbW91bnRfZn19XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5SZWZlcnJhbCBEaXNjb3VudC0gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgJHt7b3JkZXIuYXRyX3JlZmVycmFsX2Ftb3VudF9mfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRpc2NvdW50Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC0gJHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShnZXREaXNjb3VudCl9fVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5Db3Vwb24gRGlzY291bnQ6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgLSAke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGdldENvdXBvbkRpc2NvdW50KX19XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+RGVsaXZlcnkgRmVlOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICsgJHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShvcmRlci5kZWxpdmVyeV9mZWUpfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5UQVg6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgKyAke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGdldFRheCl9fVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMCBtci0yIGJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImVkaXRlZCA9PSB0cnVlPyAnYnRuLXN1Y2Nlc3MnOididG4tc3VjY2Vzcy0xJ1wiXHJcbiAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImVkaXRlZCA9PSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9pPiBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+VG90YWw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGI+JHt7b3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mfX08L2I+XHJcbiAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvcm0+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInByb3Bzb3JkZXJcIiwgXCJwcm9wc3Byb2R1Y3RzXCIsIFwicHJvcHN1c2VyXCIsIFwiYWN0aW9uXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcmRlcjoge30sXHJcbiAgICAgIHVzZXI6IHt9LFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGVkaXRlZDogZmFsc2UsXHJcbiAgICAgIHNlbGVjdGVkU3RhdHVzOiAzLFxyXG4gICAgICBjc3JmOiBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcclxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XHJcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xyXG4gICAgfSxcclxuICAgIGVkaXQoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgZGF0YS5lZGl0aW5nID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBzYXZlZChkYXRhKSB7XHJcbiAgICAgIGRhdGEuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmVkaXRlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICAgIGxldCBwcm9kdWN0cyA9IHRoaXMucHJvcHNwcm9kdWN0cztcclxuICAgICAgcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIHByb2R1Y3QuZWRpdGluZyA9IGZhbHNlO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkU3RhdHVzQ2hhbmdlKCkge1xyXG4gICAgICB0aGlzLmVkaXRlZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb25seU51bWJlcigkZXZlbnQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygkZXZlbnQua2V5Q29kZSk7IC8va2V5Q29kZXMgdmFsdWVcclxuICAgICAgbGV0IGtleUNvZGUgPSAkZXZlbnQua2V5Q29kZSA/ICRldmVudC5rZXlDb2RlIDogJGV2ZW50LndoaWNoO1xyXG4gICAgICBpZiAoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1Nykge1xyXG4gICAgICAgIC8vICAgaWYgKChrZXlDb2RlIDwgNDggfHwga2V5Q29kZSA+IDU3KSAmJiBrZXlDb2RlICE9PSA0Nikge1xyXG4gICAgICAgIC8vIDQ2IGlzIGRvdFxyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJpbnQoKSB7XHJcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCIvYWRtaW4vZ2VuZXJhdGUvcGRmL29yZGVyXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgb3JkZXJfaWQ6IHRoaXMub3JkZXIuaWQsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XHJcbiAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwib3JkZXJzX25vX1wiICsgdGhpcy5vcmRlci5pZCArIFwiLnBkZlwiKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICAgICAgbGluay5jbGljaygpO1xyXG4gICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLm9yZGVyID0gdGhpcy5wcm9wc29yZGVyO1xyXG4gICAgdGhpcy51c2VyID0gdGhpcy5wcm9wc3VzZXI7XHJcbiAgICB0aGlzLmdldFByb2R1Y3RzKCk7XHJcbiAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5vcmRlci5zdGF0dXM7XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgdG90YWxBbW91bnQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIDAuMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnVwZGF0ZWRfcXVhbnRpdHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHRvdGFsQW1vdW50KCkge1xyXG4gICAgLy8gICBsZXQgdG90YWwgPSAwO1xyXG4gICAgLy8gICBsZXQgcHJvZHVjdHMgPSB0aGlzLm9yZGVyX3Byb2R1Y3RzO1xyXG4gICAgLy8gICBwcm9kdWN0cy5mb3JFYWNoKGNhcnQgPT4ge1xyXG4gICAgLy8gICAgIHRvdGFsID0gdG90YWwgKyBjYXJ0LnByaWNlICogY2FydC51cGRhdGVkX3F1YW50aXR5O1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICBnZXREaXNjb3VudCgpIHtcclxuICAgICAgbGV0IGRpc2NvdW50ID0gMDtcclxuICAgICAgZGlzY291bnQgPSB0aGlzLnRvdGFsQW1vdW50ICogKHRoaXMub3JkZXIuZGlzY291bnRfcGVyY2VudGFnZSAvIDEwMCk7XHJcbiAgICAgIHJldHVybiBkaXNjb3VudDtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0Q291cG9uRGlzY291bnQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9yZGVyLmF0cl9jb3Vwb25fZGlzY291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRheCgpIHtcclxuICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwLjA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRheCA9IDA7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICB0YXggPSB0YXggKyBwcm9kdWN0LnRheF9hbW91bnQgKiBwcm9kdWN0LnVwZGF0ZWRfcXVhbnRpdHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRheDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBPdmVyQWxsVG90YWwoKSB7XHJcbiAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgIC8vdG90YWwgLSBkaXNjb3VudDtcclxuICAgICAgdG90YWwgPSB0aGlzLnRvdGFsQW1vdW50IC0gdGhpcy5nZXREaXNjb3VudDtcclxuICAgICAgdG90YWwgPSB0b3RhbCAtIHRoaXMuZ2V0Q291cG9uRGlzY291bnQ7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMub3JkZXIuZGVsaXZlcnlfZmVlKTtcclxuICAgICAgdG90YWwgPSB0b3RhbCArIHBhcnNlRmxvYXQodGhpcy5nZXRUYXgpO1xyXG4gICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5saXN0LWVkaXQtYmctY29sb3Ige1xyXG4gIGJhY2tncm91bmQ6ICNmZmUxZTY7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuLnF0eS1pbnB1dCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICB3aWR0aDogNTBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuLmJ0bi1zdWNjZXNzLTIge1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgLy8gNTEsIDE1OSwgMzdcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1cy1hd2FpdGluZyB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzRkYmQ3NCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhdHVzLWhvbGQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1cy1yZWFkeSB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtZWRpdC1iZy1jb2xvcltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGJhY2tncm91bmQ6ICNmZmUxZTY7XFxufVxcbi5xdHktaW5wdXRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1hd2FpdGluZ1tkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzRkYmQ3NCAhaW1wb3J0YW50O1xcbn1cXG4uc3RhdHVzLWhvbGRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1yZWFkeVtkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl90b2tlblwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3NyZiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJvcmRlcl9pZFwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3JkZXIuaWQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiT3JkZXIgI1wiICsgX3ZtLl9zKF92bS5vcmRlci5pZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy01MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihfdm0uX3MoX3ZtLm9yZGVyLmRhdGVfbGFiZWwpKV0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItYXV0byB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBQbGFjZSBieTpcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnVzZXIuZnVsbF9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLm9yZGVyX2J5ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiKFJldGFpbGVyKVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihTdW4gQ2x1YiBNZW1iZXIpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udXNlci5jdXN0b21lcl9yb2xlID09IDNcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiKFdob2xlc2FsZXIpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiVG90YWw6ICRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcIm1yLWF1dG8gdy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0cmVldF9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIlBob25lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5jb250YWN0X251bWJlcl90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIF0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuY29udGFjdF9udW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmNpdHkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlppcCBDb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci56aXBjb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk9yZ2FuaXphdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLm9yZ2FuaXphdGlvbi5vcmdfbmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5vcmdhbml6YXRpb24uYXRyX2FkZHJlc3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01IG1iLTVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCByb3VuZGVkLTBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/IFwibGlzdC1lZGl0LWJnLWNvbG9yXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0ucHJvZHVjdC5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMjUgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnByb2R1Y3QubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5wcm9kdWN0LnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTMgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uc3Vic2NyaXB0aW9uX3dlZWtzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB3ZWVrc1xcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByb2R1Y3QudW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMyBtbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlhcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS51cGRhdGVkX3F1YW50aXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtYXV0byB3LTI1XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjU3cHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy01MCB0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN1YnNjcmlwdGlvbl9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy01MCB0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZSAqIGl0ZW0udXBkYXRlZF9xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTMgdGV4dC1yaWdodFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW192bS5fdihcIlRvdGFsOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmF0cl9zdWJzY3JpcHRpb25fdG90YWxfYW1vdW50X2YpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmJpbGxpbmdfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuYmlsbGluZ190eXBlX3BlcmNlbnRhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICUpICArXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuYXRyX2JpbGxpbmdfYW1vdW50X2YpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlZmVycmFsIERpc2NvdW50LSBcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmF0cl9yZWZlcnJhbF9hbW91bnRfZikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItNVwiIH0sIFtfdm0uX3YoXCJUb3RhbDpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vb3JkZXJzXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiIH0pXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJPcmRlcnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLWF1dG8gdy01MFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlucHV0RW1haWwzXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIjpcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Zjc5MWM3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjRmNzkxYzdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjRmNzkxYzcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Zjc5MWM3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0Zjc5MWM3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmNzkxYzcmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9