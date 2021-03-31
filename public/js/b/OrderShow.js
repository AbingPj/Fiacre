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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NmRmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT9hNTkzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2M0YWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NjQzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT85Zjc4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2JhNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0UUE7QUFDQSwrREFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNB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ZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Zm9ybSA6YWN0aW9uPVwiYWN0aW9uXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJjc3JmXCIgLz5cclxuICAgIDwhLS0gPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX21ldGhvZFwiIHZhbHVlPVwiUEFUQ0hcIiAvPiAtLT5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9yZGVyX2lkXCIgOnZhbHVlPVwib3JkZXIuaWRcIiAvPlxyXG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vb3JkZXJzXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+T3JkZXJzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Yj5PcmRlciAje3tvcmRlci5pZH19PC9iPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInByaW50KClcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG1iLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctNTBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdHVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHctNTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxXCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJzZWxlY3RlZFN0YXR1c0NoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtd2VpZ2h0OiA4MDA7XCJcclxuICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkU3RhdHVzID09IDIgPyAnc3RhdHVzLWF3YWl0aW5nJyA6ICdzdGF0dXMtaG9sZCdcclxuICAgICAgICAgICAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+UmVzZXJ2ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UmVhZHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxoNT5TdGF0dXM6IHt7b3JkZXIuc3RhdHVzfX08L2g1PiAtLT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+e3tvcmRlci5kYXRlX2xhYmVsfX08L2g1PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgIFBsYWNlIGJ5OlxyXG4gICAgICAgICAgICAgICAgICA8Yj57e3VzZXIuZnVsbF9uYW1lfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJvcmRlci5vcmRlcl9ieSA9PSAwXCI+KFJldGFpbGVyKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyXCI+KFN1biBDbHViIE1lbWJlcik8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gM1wiPihXaG9sZXNhbGVyKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy01MFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRvdGFsOiAke3tvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2Z9fTwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3t1c2VyLmVtYWlsfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8L3U+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wIG1sLTNcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5BZGRyZXNzPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5zdHJlZXRfYWRkcmVzc319PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIG1iLTNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5QaG9uZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMFwiPlsge3t1c2VyLmNvbnRhY3RfbnVtYmVyX3R5cGV9fSBdIHt7dXNlci5jb250YWN0X251bWJlcn19PC9oNT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01MCBtbC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPkNpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5jaXR5fX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+U3RhdGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5zdGF0ZX19PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPlppcCBDb2RlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci56aXBjb2RlfX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+T3JnYW5pemF0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPHU+IC0tPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0wXCI+e3tvcmRlci5vcmdhbml6YXRpb24ub3JnX25hbWV9fVxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAge3tvcmRlci5vcmdhbml6YXRpb24uYXRyX2FkZHJlc3N9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gPC91PiAtLT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTUgbWItNVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0LWdyb3VwIHJvdW5kZWQtMFwiPlxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RzXCJcclxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIlxyXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiaXRlbS5lZGl0aW5nID09IHRydWUgPyAnbGlzdC1lZGl0LWJnLWNvbG9yJyA6ICcnXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0ucHJvZHVjdC5pbWFnZV9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjUwcHg7IGhlaWdodDo1MHB4OyBvYmplY3QtZml0OmNvdmVyO1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTI1IG1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGI+e3tpdGVtLnByb2R1Y3QubmFtZX19PC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKX19IC8ge3tpdGVtLnByb2R1Y3QudW5pdH19IDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj4ge3tpdGVtLnN1YnNjcmlwdGlvbl93ZWVrc319IHdlZWtzXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKX19IC8ge3tpdGVtLnByb2R1Y3QudW5pdH19IDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj4ge3tpdGVtLnVwZGF0ZWRfcXVhbnRpdHl9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtYXV0byB3LTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1lbmRcIiBzdHlsZT1cImhlaWdodDo1N3B4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIml0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcIiBjbGFzcz1cInctNTAgdGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5zdWJzY3JpcHRpb25fcHJpY2UpfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFwiIGNsYXNzPVwidy01MCB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoKGl0ZW0ucHJpY2UgKiBpdGVtLnVwZGF0ZWRfcXVhbnRpdHkpKX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3BhbiA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/ICcnIDogJ2Qtbm9uZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiJ3Byb2R1Y3RbJytpdGVtLmlkKyddJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicXR5LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnVwZGF0ZWRfcXVhbnRpdHlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGwtMyB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gZmFsc2UgPyAnZC1ibG9jaycgOiAnZC1ub25lJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXQoaXRlbSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0IG1yLTFcIj48L2k+RWRpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIml0ZW0uZWRpdGluZyA9PSB0cnVlID8gJ2QtYmxvY2snIDogJ2Qtbm9uZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzYXZlZChpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXNhdmUgbXItMVwiPjwvaT5TYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5Ub3RhbDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAke3tvcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj57e29yZGVyLmJpbGxpbmdfdHlwZX19ICh7e29yZGVyLmJpbGxpbmdfdHlwZV9wZXJjZW50YWdlfX0gJSkgICs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAke3tvcmRlci5hdHJfYmlsbGluZ19hbW91bnRfZn19XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTVcIj5EaXNjb3VudDo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAtICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0RGlzY291bnQpfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+Q291cG9uIERpc2NvdW50Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIC0gJHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShnZXRDb3Vwb25EaXNjb3VudCl9fVxyXG4gICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRlbGl2ZXJ5IEZlZTo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICArICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEob3JkZXIuZGVsaXZlcnlfZmVlKX19XHJcbiAgICAgICAgICAgICAgPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+VEFYOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICsgJHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShnZXRUYXgpfX1cclxuICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cclxuICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLTAgbXItMiBidG5cIlxyXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0ZWQgPT0gdHJ1ZT8gJ2J0bi1zdWNjZXNzJzonYnRuLXN1Y2Nlc3MtMSdcIlxyXG4gICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJlZGl0ZWQgPT0gZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvaT4gU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPlRvdGFsOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxiPiR7e29yZGVyLmF0cl9zdWJzY3JpcHRpb25fb3ZlcmFsbF90b3RhbF9hbW91bnRfZn19PC9iPlxyXG4gICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJwcm9wc29yZGVyXCIsIFwicHJvcHNwcm9kdWN0c1wiLCBcInByb3BzdXNlclwiLCBcImFjdGlvblwiXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICB1c2VyOiB7fSxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBlZGl0ZWQ6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RlZFN0YXR1czogMyxcclxuICAgICAgY3NyZjogZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXHJcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xyXG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcclxuICAgIH0sXHJcbiAgICBlZGl0KGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGRhdGEuZWRpdGluZyA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgc2F2ZWQoZGF0YSkge1xyXG4gICAgICBkYXRhLmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5lZGl0ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFByb2R1Y3RzKCkge1xyXG4gICAgICBsZXQgcHJvZHVjdHMgPSB0aGlzLnByb3BzcHJvZHVjdHM7XHJcbiAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBwcm9kdWN0LmVkaXRpbmcgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZFN0YXR1c0NoYW5nZSgpIHtcclxuICAgICAgdGhpcy5lZGl0ZWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIG9ubHlOdW1iZXIoJGV2ZW50KSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2coJGV2ZW50LmtleUNvZGUpOyAvL2tleUNvZGVzIHZhbHVlXHJcbiAgICAgIGxldCBrZXlDb2RlID0gJGV2ZW50LmtleUNvZGUgPyAkZXZlbnQua2V5Q29kZSA6ICRldmVudC53aGljaDtcclxuICAgICAgaWYgKGtleUNvZGUgPCA0OCB8fCBrZXlDb2RlID4gNTcpIHtcclxuICAgICAgICAvLyAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYga2V5Q29kZSAhPT0gNDYpIHtcclxuICAgICAgICAvLyA0NiBpcyBkb3RcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByaW50KCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICB1cmw6IFwiL2FkbWluL2dlbmVyYXRlL3BkZi9vcmRlclwiLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIG9yZGVyX2lkOiB0aGlzLm9yZGVyLmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vcGRmXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIm9yZGVyc19ub19cIiArIHRoaXMub3JkZXIuaWQgKyBcIi5wZGZcIik7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH0sXHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5vcmRlciA9IHRoaXMucHJvcHNvcmRlcjtcclxuICAgIHRoaXMudXNlciA9IHRoaXMucHJvcHN1c2VyO1xyXG4gICAgdGhpcy5nZXRQcm9kdWN0cygpO1xyXG4gICAgdGhpcy5zZWxlY3RlZFN0YXR1cyA9IHRoaXMub3JkZXIuc3RhdHVzO1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHRvdGFsQW1vdW50KCkge1xyXG4gICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwLjA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcm9kdWN0LnByaWNlICogcHJvZHVjdC51cGRhdGVkX3F1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0b3RhbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB0b3RhbEFtb3VudCgpIHtcclxuICAgIC8vICAgbGV0IHRvdGFsID0gMDtcclxuICAgIC8vICAgbGV0IHByb2R1Y3RzID0gdGhpcy5vcmRlcl9wcm9kdWN0cztcclxuICAgIC8vICAgcHJvZHVjdHMuZm9yRWFjaChjYXJ0ID0+IHtcclxuICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQudXBkYXRlZF9xdWFudGl0eTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIHJldHVybiB0b3RhbDtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgZ2V0RGlzY291bnQoKSB7XHJcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XHJcbiAgICAgIGRpc2NvdW50ID0gdGhpcy50b3RhbEFtb3VudCAqICh0aGlzLm9yZGVyLmRpc2NvdW50X3BlcmNlbnRhZ2UgLyAxMDApO1xyXG4gICAgICByZXR1cm4gZGlzY291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldENvdXBvbkRpc2NvdW50KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcmRlci5hdHJfY291cG9uX2Rpc2NvdW50O1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUYXgoKSB7XHJcbiAgICAgaWYgKHRoaXMucHJvZHVjdHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gMC4wO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0YXggPSAwO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgdGF4ID0gdGF4ICsgcHJvZHVjdC50YXhfYW1vdW50ICogcHJvZHVjdC51cGRhdGVkX3F1YW50aXR5O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YXg7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgT3ZlckFsbFRvdGFsKCkge1xyXG4gICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAvL3RvdGFsIC0gZGlzY291bnQ7XHJcbiAgICAgIHRvdGFsID0gdGhpcy50b3RhbEFtb3VudCAtIHRoaXMuZ2V0RGlzY291bnQ7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgLSB0aGlzLmdldENvdXBvbkRpc2NvdW50O1xyXG4gICAgICB0b3RhbCA9IHRvdGFsICsgcGFyc2VGbG9hdCh0aGlzLm9yZGVyLmRlbGl2ZXJ5X2ZlZSk7XHJcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMuZ2V0VGF4KTtcclxuICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ubGlzdC1lZGl0LWJnLWNvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZlMWU2O1xyXG4gIC8vICAgb3BhY2l0eTogMC41O1xyXG59XHJcbi5xdHktaW5wdXQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi5idG4tc3VjY2Vzcy0yIHtcclxuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MSwgMTU5LCAzNywgMC4zKSAhaW1wb3J0YW50O1xyXG4gIC8vIDUxLCAxNTksIDM3XHJcblxyXG4gIGJvcmRlci1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtYXdhaXRpbmcge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0ZGJkNzQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0YXR1cy1ob2xkIHtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdGF0dXMtcmVhZHkge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5saXN0LWVkaXQtYmctY29sb3JbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmZlMWU2O1xcbn1cXG4ucXR5LWlucHV0W2RhdGEtdi0yNGY3OTFjN10ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuLmJ0bi1zdWNjZXNzLTJbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTU5LCAzNywgMC4zKSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XFxufVxcbi5zdGF0dXMtYXdhaXRpbmdbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICM0ZGJkNzQgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1ob2xkW2RhdGEtdi0yNGY3OTFjN10ge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XFxufVxcbi5zdGF0dXMtcmVhZHlbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRmNzkxYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNzcmYgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwib3JkZXJfaWRcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZGVyLmlkIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIk9yZGVyICNcIiArIF92bS5fcyhfdm0ub3JkZXIuaWQpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJpbnQoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXByaW50XCIgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBQcmludFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5vcmRlci5kYXRlX2xhYmVsKSldKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLWF1dG8gdy01MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgUGxhY2UgYnk6XFxuICAgICAgICAgICAgICAgIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmZ1bGxfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5vcmRlcl9ieSA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihSZXRhaWxlcilcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIoU3VuIENsdWIgTWVtYmVyKVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihXaG9sZXNhbGVyKVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlRvdGFsOiAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJtci1hdXRvIHctNTAgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5lbWFpbCkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMCBtbC0zXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIkFkZHJlc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5zdHJlZXRfYWRkcmVzcykpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcIm1yLWF1dG8gdy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJQaG9uZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlsgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuY29udGFjdF9udW1iZXJfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBdIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS51c2VyLmNvbnRhY3RfbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTUwIG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIkNpdHlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5jaXR5KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiU3RhdGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci5zdGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJaaXAgQ29kZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnVzZXIuemlwY29kZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcIm1yLWF1dG8gdy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJPcmdhbml6YXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5vcmdhbml6YXRpb24ub3JnX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIub3JnYW5pemF0aW9uLmF0cl9hZGRyZXNzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNSBtYi01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgcm91bmRlZC0wXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2R1Y3RzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5lZGl0aW5nID09IHRydWUgPyBcImxpc3QtZWRpdC1iZy1jb2xvclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLnByb2R1Y3QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTI1IG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoaXRlbS5wcm9kdWN0Lm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ucHJvZHVjdC51bml0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci0zIG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnN1YnNjcmlwdGlvbl93ZWVrcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgd2Vla3NcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5wcm9kdWN0LnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTMgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udXBkYXRlZF9xdWFudGl0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG8gdy0yNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1N3B4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zdWJzY3JpcHRpb25fcHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJpY2UgKiBpdGVtLnVwZGF0ZWRfcXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwbC0zIHRleHQtcmlnaHRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItNVwiIH0sIFtfdm0uX3YoXCJUb3RhbDpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5iaWxsaW5nX3R5cGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmJpbGxpbmdfdHlwZV9wZXJjZW50YWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiAlKSAgK1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmF0cl9iaWxsaW5nX2Ftb3VudF9mKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW192bS5fdihcIlRvdGFsOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIiRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9vcmRlcnNcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgfSldXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIk9yZGVyc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItYXV0byB3LTUwXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5wdXRFbWFpbDNcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiOlwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmNzkxYzcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRmNzkxYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNGY3OTFjN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjRmNzkxYzcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Zjc5MWM3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0Zjc5MWM3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmNzkxYzcmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9