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
                _c("div", { staticClass: "mr-auto w-50" }, [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "label",
                      {
                        staticClass: "col-sm-2 col-form-label",
                        attrs: { for: "inputEmail3" }
                      },
                      [_vm._v("Status:")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-10" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectedStatus,
                              expression: "selectedStatus"
                            }
                          ],
                          staticClass: "form-control w-50",
                          class:
                            _vm.selectedStatus == 2
                              ? "status-awaiting"
                              : "status-hold",
                          staticStyle: { "font-weight": "800" },
                          attrs: {
                            name: "status",
                            id: "exampleFormControlSelect1"
                          },
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
                                _vm.selectedStatus = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.selectedStatusChange
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("Reserved")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v("Ready")
                          ])
                        ]
                      )
                    ])
                  ])
                ]),
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
                        _vm._s(_vm.displayNumberWithComma(_vm.OverAllTotal))
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
                      "mr-auto w-25 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [
                      _vm._v("Expected Delivery Date")
                    ]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.order.atr_expected_delivery_date))
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
                          _vm._v(
                            "\n                  $ " +
                              _vm._s(_vm.displayNumberWithComma(item.price)) +
                              " / " +
                              _vm._s(item.product.unit) +
                              "\n                "
                          )
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
                            _c("div", { staticClass: "w-50 text-right" }, [
                              _c("div", [
                                _c("b", [
                                  _vm._v(
                                    "\n                        $ " +
                                      _vm._s(
                                        _vm.displayNumberWithComma(item.price)
                                      ) +
                                      " x\n                        "
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      class:
                                        item.editing == false ? "" : "d-none"
                                    },
                                    [_vm._v(_vm._s(item.updated_quantity))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    class: item.editing == true ? "" : "d-none"
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: item.updated_quantity,
                                          expression: "item.updated_quantity"
                                        }
                                      ],
                                      staticClass: "qty-input",
                                      attrs: {
                                        name: "product[" + item.id + "]",
                                        type: "text"
                                      },
                                      domProps: {
                                        value: item.updated_quantity
                                      },
                                      on: {
                                        keypress: _vm.onlyNumber,
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            item,
                                            "updated_quantity",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "pl-3 text-right" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-light",
                                  class:
                                    item.editing == false
                                      ? "d-block"
                                      : "d-none",
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(item)
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-pencil-alt mr-1"
                                  }),
                                  _vm._v("Edit\n                    ")
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-light",
                                  class:
                                    item.editing == true ? "d-block" : "d-none",
                                  on: {
                                    click: function($event) {
                                      return _vm.saved(item)
                                    }
                                  }
                                },
                                [
                                  _c("i", { staticClass: "far fa-save mr-1" }),
                                  _vm._v("Save\n                    ")
                                ]
                              )
                            ])
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
                      _vm._s(_vm.displayNumberWithComma(_vm.totalAmount)) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("Discount:")]),
                  _vm._v(
                    "\n              - $" +
                      _vm._s(_vm.displayNumberWithComma(_vm.getDiscount)) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v("Coupon Discount:")
                  ]),
                  _vm._v(
                    "\n              - $" +
                      _vm._s(
                        _vm.displayNumberWithComma(_vm.getCouponDiscount)
                      ) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v("Delivery Fee:")
                  ]),
                  _vm._v(
                    "\n              + $" +
                      _vm._s(
                        _vm.displayNumberWithComma(_vm.order.delivery_fee)
                      ) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("TAX:")]),
                  _vm._v(
                    "\n              + $" +
                      _vm._s(_vm.displayNumberWithComma(_vm.getTax)) +
                      "\n            "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h3", [
                  _c(
                    "button",
                    {
                      staticClass: "rounded-0 mr-2 btn",
                      class:
                        _vm.edited == true ? "btn-success" : "btn-success-1",
                      attrs: { disabled: _vm.edited == false, type: "submit" }
                    },
                    [
                      _c("i", { staticClass: "fas fa-save" }),
                      _vm._v(" Save\n              ")
                    ]
                  ),
                  _vm._v("\n              Total:\n              "),
                  _c("b", [
                    _vm._v(
                      "$" + _vm._s(_vm.displayNumberWithComma(_vm.OverAllTotal))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NmRmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT9hNTkzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2M0YWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NjQzYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT85Zjc4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlP2JhNmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0UUE7QUFDQSwrREFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNB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Q0EseUJBQXlCLGtDQUFrQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckI7QUFDQSwrQkFBK0IsNkJBQTZCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3RELGlCQUFpQix3QkFBd0I7QUFDekMsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2Isc0JBQXNCLDRDQUE0QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStGO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd6RjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsMkZBQU07QUFDUixFQUFFLG9HQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUF5YyxDQUFnQiwwYkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E3ZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9PcmRlclNob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxmb3JtIDphY3Rpb249XCJhY3Rpb25cIiBtZXRob2Q9XCJwb3N0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJjc3JmXCIgLz5cbiAgICA8IS0tIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl9tZXRob2RcIiB2YWx1ZT1cIlBBVENIXCIgLz4gLS0+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwib3JkZXJfaWRcIiA6dmFsdWU9XCJvcmRlci5pZFwiIC8+XG4gICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2FkbWluL29yZGVyc1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5PcmRlcnM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgPGI+T3JkZXIgI3t7b3JkZXIuaWR9fTwvYj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicHJpbnQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgcm93XCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW5wdXRFbWFpbDNcIiBjbGFzcz1cImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCI+U3RhdHVzOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZFN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdy01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJleGFtcGxlRm9ybUNvbnRyb2xTZWxlY3QxXCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwic2VsZWN0ZWRTdGF0dXNDaGFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDgwMDtcIlxuICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkU3RhdHVzID09IDMgPyAnc3RhdHVzLXJlYWR5JyA6XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFN0YXR1cyA9PSAyID8gJ3N0YXR1cy1ob2xkJyA6ICdzdGF0dXMtYXdhaXRpbmcnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Bd2FpdGluZyBQcm9jZXNzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5PbiBIb2xkPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj5SZWFkeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAtLT5cblxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB3LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDFcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJzZWxlY3RlZFN0YXR1c0NoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogODAwO1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRTdGF0dXMgPT0gMiA/ICdzdGF0dXMtYXdhaXRpbmcnIDogJ3N0YXR1cy1ob2xkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5SZXNlcnZlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UmVhZHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8IS0tIDxoNT5TdGF0dXM6IHt7b3JkZXIuc3RhdHVzfX08L2g1PiAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctNTBcIj5cbiAgICAgICAgICAgICAgICA8aDU+e3tvcmRlci5kYXRlX2xhYmVsfX08L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwXCI+XG4gICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgUGxhY2UgYnk6XG4gICAgICAgICAgICAgICAgICA8Yj57e3VzZXIuZnVsbF9uYW1lfX08L2I+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwib3JkZXIub3JkZXJfYnkgPT0gMFwiPihSZXRhaWxlcik8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidXNlci5jdXN0b21lcl9yb2xlID09IDJcIj4oU3VuIENsdWIgTWVtYmVyKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gM1wiPihXaG9sZXNhbGVyKTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy01MFwiPlxuICAgICAgICAgICAgICAgIDxoMz5Ub3RhbDogJHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShPdmVyQWxsVG90YWwpfX08L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctNTAgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwhLS0gPHU+IC0tPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTBcIj57e3VzZXIuZW1haWx9fTwvaDU+XG4gICAgICAgICAgICAgICAgPCEtLSA8L3U+IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNTAgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTAgbWwtM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5BZGRyZXNzPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTBcIj57eyB1c2VyLnN0cmVldF9hZGRyZXNzfX08L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIHctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+UGhvbmU8L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMFwiPlsge3t1c2VyLmNvbnRhY3RfbnVtYmVyX3R5cGV9fSBdIHt7dXNlci5jb250YWN0X251bWJlcn19PC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTUwIG1sLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJtYi0wXCI+Q2l0eTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMFwiPnt7IHVzZXIuY2l0eX19PC9oNT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPlN0YXRlPC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5zdGF0ZX19PC9oNT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMFwiPnt7IHVzZXIuemlwY29kZX19PC9oNT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItYXV0byB3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibWItMFwiPkV4cGVjdGVkIERlbGl2ZXJ5IERhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwhLS0gPHU+IC0tPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTBcIj57e29yZGVyLmF0cl9leHBlY3RlZF9kZWxpdmVyeV9kYXRlfX08L2g1PlxuICAgICAgICAgICAgICAgIDwhLS0gPC91PiAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgbXQtNSBtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cCByb3VuZGVkLTBcIj5cbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiaXRlbS5lZGl0aW5nID09IHRydWUgPyAnbGlzdC1lZGl0LWJnLWNvbG9yJyA6ICcnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLnByb2R1Y3QuaW1hZ2VfbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6NTBweDsgaGVpZ2h0OjUwcHg7IG9iamVjdC1maXQ6Y292ZXI7XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMjUgbWwtM1wiPlxuICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7aXRlbS5wcm9kdWN0Lm5hbWV9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpfX0gLyB7e2l0ZW0ucHJvZHVjdC51bml0fX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWwtYXV0byB3LTI1XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgYWxpZ24taXRlbXMtZW5kXCIgc3R5bGU9XCJoZWlnaHQ6NTdweDtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctNTAgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAkIHt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKX19IHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8c3Bhbj4ge3tpdGVtLnF1YW50aXR5fX0gPC9zcGFuPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gZmFsc2UgPyAnJyA6ICdkLW5vbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7aXRlbS51cGRhdGVkX3F1YW50aXR5fX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/ICcnIDogJ2Qtbm9uZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCIncHJvZHVjdFsnK2l0ZW0uaWQrJ10nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInF0eS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJpdGVtLnVwZGF0ZWRfcXVhbnRpdHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8L3A+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBsLTMgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIml0ZW0uZWRpdGluZyA9PSBmYWxzZSA/ICdkLWJsb2NrJyA6ICdkLW5vbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXQoaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBlbmNpbC1hbHQgbXItMVwiPjwvaT5FZGl0XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIml0ZW0uZWRpdGluZyA9PSB0cnVlID8gJ2QtYmxvY2snIDogJ2Qtbm9uZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2F2ZWQoaXRlbSlcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLXNhdmUgbXItMVwiPjwvaT5TYXZlXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+VG90YWw6PC9zcGFuPlxuICAgICAgICAgICAgICAgICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEodG90YWxBbW91bnQpfX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAtICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0RGlzY291bnQpfX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+Q291cG9uIERpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAtICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0Q291cG9uRGlzY291bnQpfX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRlbGl2ZXJ5IEZlZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgKyAke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yZGVyLmRlbGl2ZXJ5X2ZlZSl9fVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+VEFYOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICArICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0VGF4KX19XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctMTAwXCI+XG4gICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMCBtci0yIGJ0blwiXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0ZWQgPT0gdHJ1ZT8gJ2J0bi1zdWNjZXNzJzonYnRuLXN1Y2Nlc3MtMSdcIlxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZWRpdGVkID09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+IFNhdmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBUb3RhbDpcbiAgICAgICAgICAgICAgICA8Yj4ke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKE92ZXJBbGxUb3RhbCl9fTwvYj5cbiAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicHJvcHNvcmRlclwiLCBcInByb3BzcHJvZHVjdHNcIiwgXCJwcm9wc3VzZXJcIiwgXCJhY3Rpb25cIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9yZGVyOiB7fSxcbiAgICAgIHVzZXI6IHt9LFxuICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgZWRpdGVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkU3RhdHVzOiAzLFxuICAgICAgY3NyZjogZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICAuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICAgIGVkaXQoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBkYXRhLmVkaXRpbmcgPSB0cnVlO1xuICAgIH0sXG4gICAgc2F2ZWQoZGF0YSkge1xuICAgICAgZGF0YS5lZGl0aW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmVkaXRlZCA9IHRydWU7XG4gICAgfSxcbiAgICBnZXRQcm9kdWN0cygpIHtcbiAgICAgIGxldCBwcm9kdWN0cyA9IHRoaXMucHJvcHNwcm9kdWN0cztcbiAgICAgIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcHJvZHVjdC5lZGl0aW5nID0gZmFsc2U7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcbiAgICB9LFxuICAgIHNlbGVjdGVkU3RhdHVzQ2hhbmdlKCkge1xuICAgICAgdGhpcy5lZGl0ZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgb25seU51bWJlcigkZXZlbnQpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJGV2ZW50LmtleUNvZGUpOyAvL2tleUNvZGVzIHZhbHVlXG4gICAgICBsZXQga2V5Q29kZSA9ICRldmVudC5rZXlDb2RlID8gJGV2ZW50LmtleUNvZGUgOiAkZXZlbnQud2hpY2g7XG4gICAgICBpZiAoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1Nykge1xuICAgICAgICAvLyAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYga2V5Q29kZSAhPT0gNDYpIHtcbiAgICAgICAgLy8gNDYgaXMgZG90XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJpbnQoKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICB1cmw6IFwiL2FkbWluL2dlbmVyYXRlL3BkZi9vcmRlclwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3JkZXJfaWQ6IHRoaXMub3JkZXIuaWQsXG4gICAgICAgIH0sXG4gICAgICAgIHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3BkZlwiLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKSk7XG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImRvd25sb2FkXCIsIFwib3JkZXJzX25vX1wiICsgdGhpcy5vcmRlci5pZCArIFwiLnBkZlwiKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfSxcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLm9yZGVyID0gdGhpcy5wcm9wc29yZGVyO1xuICAgIHRoaXMudXNlciA9IHRoaXMucHJvcHN1c2VyO1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5vcmRlci5zdGF0dXM7XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgdG90YWxBbW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdG90YWwgPSB0b3RhbCArIHByb2R1Y3QucHJpY2UgKiBwcm9kdWN0LnVwZGF0ZWRfcXVhbnRpdHk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIHRvdGFsQW1vdW50KCkge1xuICAgIC8vICAgbGV0IHRvdGFsID0gMDtcbiAgICAvLyAgIGxldCBwcm9kdWN0cyA9IHRoaXMub3JkZXJfcHJvZHVjdHM7XG4gICAgLy8gICBwcm9kdWN0cy5mb3JFYWNoKGNhcnQgPT4ge1xuICAgIC8vICAgICB0b3RhbCA9IHRvdGFsICsgY2FydC5wcmljZSAqIGNhcnQudXBkYXRlZF9xdWFudGl0eTtcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgcmV0dXJuIHRvdGFsO1xuICAgIC8vIH0sXG5cbiAgICBnZXREaXNjb3VudCgpIHtcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XG4gICAgICBkaXNjb3VudCA9IHRoaXMudG90YWxBbW91bnQgKiAodGhpcy5vcmRlci5kaXNjb3VudF9wZXJjZW50YWdlIC8gMTAwKTtcbiAgICAgIHJldHVybiBkaXNjb3VudDtcbiAgICB9LFxuXG4gICAgZ2V0Q291cG9uRGlzY291bnQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcmRlci5hdHJfY291cG9uX2Rpc2NvdW50O1xuICAgIH0sXG5cbiAgICBnZXRUYXgoKSB7XG4gICAgIGlmICh0aGlzLnByb2R1Y3RzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiAwLjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGF4ID0gMDtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGF4ID0gdGF4ICsgcHJvZHVjdC50YXhfYW1vdW50ICogcHJvZHVjdC51cGRhdGVkX3F1YW50aXR5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRheDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgT3ZlckFsbFRvdGFsKCkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIC8vdG90YWwgLSBkaXNjb3VudDtcbiAgICAgIHRvdGFsID0gdGhpcy50b3RhbEFtb3VudCAtIHRoaXMuZ2V0RGlzY291bnQ7XG4gICAgICB0b3RhbCA9IHRvdGFsIC0gdGhpcy5nZXRDb3Vwb25EaXNjb3VudDtcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMub3JkZXIuZGVsaXZlcnlfZmVlKTtcbiAgICAgIHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMuZ2V0VGF4KTtcbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLmxpc3QtZWRpdC1iZy1jb2xvciB7XG4gIGJhY2tncm91bmQ6ICNmZmUxZTY7XG4gIC8vICAgb3BhY2l0eTogMC41O1xufVxuLnF0eS1pbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogNTBweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5idG4tc3VjY2Vzcy0yIHtcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XG4gIC8vIDUxLCAxNTksIDM3XG5cbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcbn1cblxuLnN0YXR1cy1hd2FpdGluZyB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjNGRiZDc0ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtaG9sZCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjZmZjMTA3ICFpbXBvcnRhbnQ7XG59XG5cbi5zdGF0dXMtcmVhZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtZWRpdC1iZy1jb2xvcltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGJhY2tncm91bmQ6ICNmZmUxZTY7XFxufVxcbi5xdHktaW5wdXRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1hd2FpdGluZ1tkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzRkYmQ3NCAhaW1wb3J0YW50O1xcbn1cXG4uc3RhdHVzLWhvbGRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1yZWFkeVtkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl90b2tlblwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3NyZiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJvcmRlcl9pZFwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3JkZXIuaWQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiT3JkZXIgI1wiICsgX3ZtLl9zKF92bS5vcmRlci5pZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLWF1dG8gdy01MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCByb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2wtc20tMiBjb2wtZm9ybS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlucHV0RW1haWwzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlN0YXR1czpcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHctNTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3RhdHVzID09IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJzdGF0dXMtYXdhaXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInN0YXR1cy1ob2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCI4MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZXhhbXBsZUZvcm1Db250cm9sU2VsZWN0MVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3RhdHVzID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN0YXR1c0NoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVzZXJ2ZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlYWR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3JkZXIuZGF0ZV9sYWJlbCkpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci1hdXRvIHctNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFBsYWNlIGJ5OlxcbiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0udXNlci5mdWxsX25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIub3JkZXJfYnkgPT0gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIoUmV0YWlsZXIpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0udXNlci5jdXN0b21lcl9yb2xlID09IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KFwiKFN1biBDbHViIE1lbWJlcilcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmN1c3RvbWVyX3JvbGUgPT0gM1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIoV2hvbGVzYWxlcilcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy01MFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJUb3RhbDogJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0uT3ZlckFsbFRvdGFsKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcIm1yLWF1dG8gdy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0cmVldF9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIlBob25lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiWyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5jb250YWN0X251bWJlcl90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIF0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuY29udGFjdF9udW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmNpdHkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlppcCBDb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci56aXBjb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkV4cGVjdGVkIERlbGl2ZXJ5IERhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm9yZGVyLmF0cl9leHBlY3RlZF9kZWxpdmVyeV9kYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNSBtYi01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAgcm91bmRlZC0wXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2R1Y3RzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXAtaXRlbSBkLWZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5lZGl0aW5nID09IHRydWUgPyBcImxpc3QtZWRpdC1iZy1jb2xvclwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBpdGVtLnByb2R1Y3QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTI1IG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoaXRlbS5wcm9kdWN0Lm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5wcm9kdWN0LnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG8gdy0yNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1N3B4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTUwIHRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB4XFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5lZGl0aW5nID09IGZhbHNlID8gXCJcIiA6IFwiZC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnVwZGF0ZWRfcXVhbnRpdHkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogaXRlbS5lZGl0aW5nID09IHRydWUgPyBcIlwiIDogXCJkLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnVwZGF0ZWRfcXVhbnRpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0udXBkYXRlZF9xdWFudGl0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJxdHktaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInByb2R1Y3RbXCIgKyBpdGVtLmlkICsgXCJdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS51cGRhdGVkX3F1YW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwZGF0ZWRfcXVhbnRpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBsLTMgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVkaXRpbmcgPT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImQtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZC1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lZGl0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wZW5jaWwtYWx0IG1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVkaXRcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/IFwiZC1ibG9ja1wiIDogXCJkLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVkKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLXNhdmUgbXItMVwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNhdmVcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTVcIiB9LCBbX3ZtLl92KFwiVG90YWw6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0udG90YWxBbW91bnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW192bS5fdihcIkRpc2NvdW50OlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgLSAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0uZ2V0RGlzY291bnQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb3Vwb24gRGlzY291bnQ6XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIC0gJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0uZ2V0Q291cG9uRGlzY291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZWxpdmVyeSBGZWU6XCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICsgJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0ub3JkZXIuZGVsaXZlcnlfZmVlKVxuICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItNVwiIH0sIFtfdm0uX3YoXCJUQVg6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICArICRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKF92bS5nZXRUYXgpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtMCBtci0yIGJ0blwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXRlZCA9PSB0cnVlID8gXCJidG4tc3VjY2Vzc1wiIDogXCJidG4tc3VjY2Vzcy0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5lZGl0ZWQgPT0gZmFsc2UsIHR5cGU6IFwic3VibWl0XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNhdmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgU2F2ZVxcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgIFRvdGFsOlxcbiAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiJFwiICsgX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKF92bS5PdmVyQWxsVG90YWwpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2FkbWluL29yZGVyc1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiB9KV1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiT3JkZXJzXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Zjc5MWM3JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjRmNzkxYzdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNGY3OTFjNycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNGY3OTFjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNGY3OTFjNycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmNzkxYzcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjRmNzkxYzcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRmNzkxYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGY3OTFjNyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=