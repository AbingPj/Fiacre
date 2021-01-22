(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ProfCardHolder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errorClass */ "./resources/js/frontend/errorClass.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["propuser", "billing_type", "cc_sc_action", "cc_ws_action", "ach_sc_action", "ach_ws_action" // "subscription"
  ],
  created: function created() {
    this.user = this.propuser;
    this.billing_token_type = this.billing_type;

    if (this.billing_token_type == "2") {
      this.ach_account_number = this.propuser.billinginfo.Last4;
      this.ach_routing = this.propuser.billinginfo.AchRoutingLast3;
      this.ach_type = this.propuser.billinginfo.ACHType;
      this.ach_acc_holder_type = this.propuser.billinginfo.ACHAccountHolderType;
    }

    if (this.billing_token_type == "1") {
      this.card_type = this.propuser.billinginfo.CardType;
      this.card_name = this.propuser.billinginfo.bankName_or_cardName;
      this.card_number = this.propuser.billinginfo.Last4;
      this.cvv = this.propuser.billinginfo.CVV;
    }
  },
  data: function data() {
    return {
      user: {},
      years: [],
      months: [],
      change: false,
      billing_token_type: "1",
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      ErrorMessage: [],
      ach_type: "1",
      ach_acc_holder_type: "0",
      ach_account_number: "",
      ach_routing: "",
      card_type: "1",
      card_name: "",
      card_number: "",
      cvv: "",
      exp_month: "",
      exp_year: ""
    };
  },
  methods: {
    Cancel: function Cancel() {
      this.change = false;
      this.user = this.propuser;
      this.billing_token_type = this.billing_type;

      if (this.billing_token_type == "2") {
        this.ach_account_number = this.propuser.billinginfo.Last4;
        this.ach_routing = this.propuser.billinginfo.AchRoutingLast3;
      }

      if (this.billing_token_type == "1") {
        this.card_type = this.propuser.billinginfo.CardType;
        this.card_name = this.propuser.billinginfo.bankName_or_cardName;
        this.card_number = this.propuser.billinginfo.Last4;
        this.cvv = this.propuser.billinginfo.CVV;
      }
    },
    changeBillingInfo: function changeBillingInfo() {
      this.$parent.edit = false;
      this.change = true;
      this.ach_account_number = "";
      this.ach_routing = "";
      this.card_name = "";
      this.card_number = "";
      this.cvv = "";
    },
    saveChanges: function saveChanges() {
      if (this.billing_token_type == "1") {
        this.saveCC();
      } else {
        this.saveACH();
      }
    },
    saveACH: function saveACH() {
      var _this = this;

      LoadingOverlay();
      var url = "";

      if (this.user.customer_role == 2) {
        url = this.ach_sc_action;
      } else {
        url = this.ach_ws_action;
      } //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   formData.append("content", this.myHTML);


      var formData = new FormData(); //   formData.append("subscription", this.subscription);

      formData.append("billing_token_type", this.billing_token_type);
      formData.append("ach_type", this.ach_type);
      formData.append("ach_acc_holder_type", this.user.ach_acc_holder_type);
      formData.append("ach_account_number", this.ach_account_number);
      formData.append("ach_routing", this.ach_routing);
      axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        //   console.log(res);
        window.location.href = "/myprofile"; //   LoadingOverlayHide();
      })["catch"](function (err) {
        console.error(err);
        console.log(err.response.data.data_message);
        console.log(err.response);

        if (err.response.status == 400) {
          var arr = [];
          arr.push(err.response.data.data_message);

          _this.showErrorMessage(arr);
        } else {
          _this.errors.record(err.response.data.errors);

          _this.showErrorMessage(_this.errors.getArrayOfMessages());
        }

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    saveCC: function saveCC() {
      var _this2 = this;

      LoadingOverlay();
      var url = "";

      if (this.user.customer_role == 2) {
        url = this.cc_sc_action;
      } else {
        url = this.cc_ws_action;
      } //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   formData.append("content", this.myHTML);


      var formData = new FormData(); //   formData.append("subscription", this.subscription);

      formData.append("billing_token_type", this.billing_token_type);
      formData.append("card_type", this.card_type);
      formData.append("card_number", this.card_number);
      formData.append("card_name", this.card_name);
      formData.append("cvv", this.cvv);
      formData.append("exp_month", this.exp_month);
      formData.append("exp_year", this.exp_year);
      axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        //   console.log(res);
        window.location.href = "/myprofile"; //   LoadingOverlayHide();
      })["catch"](function (err) {
        console.error(err);
        console.log(err.response.data.data_message);
        console.log(err.response);

        if (err.response.status == 400) {
          var arr = [];
          arr.push(err.response.data.data_message);

          _this2.showErrorMessage(arr);
        } else {
          _this2.errors.record(err.response.data.errors);

          _this2.showErrorMessage(_this2.errors.getArrayOfMessages());
        }

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    }
  },
  mounted: function mounted() {
    var currentYear = new Date().getFullYear();

    for (var index = 0; index < 10; index++) {
      this.years.push(currentYear + index);
    }

    for (var _index = 1; _index <= 12; _index++) {
      this.months.push(_index);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-user-type .md-radio[data-v-06b58f24] {\n  display: flex;\n}\n.my-select[data-v-06b58f24] {\n  padding: 0px;\n  margin: 0px;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.change == true ? "border border-info p-2" : "" },
    [
      _c(
        "h4",
        { staticClass: "font-weight-bold" },
        [
          _vm._v("\n    Billing Card Information\n    "),
          _vm.change == false
            ? _c(
                "b-button",
                {
                  staticClass: "float-right",
                  attrs: { variant: "success", size: "sm" },
                  on: {
                    click: function($event) {
                      return _vm.changeBillingInfo()
                    }
                  }
                },
                [_vm._v("Change")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.change == true
            ? _c(
                "b-button",
                {
                  staticClass: "float-right",
                  attrs: { variant: "danger", size: "sm" },
                  on: {
                    click: function($event) {
                      return _vm.Cancel()
                    }
                  }
                },
                [_vm._v("Cancel")]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { md: "6" } }, [
            _c("label", { staticStyle: { padding: "0px", margine: "0px" } }, [
              _vm._v("Billing Type")
            ]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.billing_token_type,
                    expression: "billing_token_type"
                  }
                ],
                staticClass: "form-control my-select",
                attrs: { disabled: !_vm.change == true },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.billing_token_type = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "1" } }, [_vm._v("CC")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "2" } }, [_vm._v("ACH")])
              ]
            )
          ]),
          _vm._v(" "),
          _vm.billing_token_type === "1"
            ? _c("b-col", { attrs: { md: "6" } }, [
                _c(
                  "label",
                  { staticStyle: { padding: "0px", margine: "0px" } },
                  [_vm._v("Card Type")]
                ),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.card_type,
                        expression: "card_type"
                      }
                    ],
                    staticClass: "form-control my-select",
                    attrs: { disabled: !_vm.change == true },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.card_type = $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "1" } }, [
                      _vm._v("American Express")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "2" } }, [
                      _vm._v("Discover")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "3" } }, [
                      _vm._v("Mastercard")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "4" } }, [_vm._v("Visa")])
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _vm.billing_token_type === "2"
                ? _c("b-col", { attrs: { md: "12" } }, [
                    _c(
                      "label",
                      { staticStyle: { padding: "0px", margine: "0px" } },
                      [_vm._v("Account Type")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ach_type,
                            expression: "ach_type"
                          }
                        ],
                        staticClass: "form-control my-select",
                        attrs: { disabled: !_vm.change == true },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.ach_type = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Savings")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Checking")
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm.billing_token_type === "2"
                ? _c("b-col", { attrs: { md: "12" } }, [
                    _c(
                      "label",
                      { staticStyle: { padding: "0px", margine: "0px" } },
                      [_vm._v("Account Holder Type")]
                    ),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ach_acc_holder_type,
                            expression: "ach_acc_holder_type"
                          }
                        ],
                        staticClass: "form-control my-select",
                        attrs: { disabled: !_vm.change == true },
                        on: {
                          change: function($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function(o) {
                                return o.selected
                              })
                              .map(function(o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.ach_acc_holder_type = $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          }
                        }
                      },
                      [
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Personal")
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("Business")
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.billing_token_type === "1"
        ? _c(
            "div",
            [
              _c(
                "md-field",
                [
                  _c("label", [_vm._v("Name in the card")]),
                  _vm._v(" "),
                  _c("md-input", {
                    attrs: { disabled: !_vm.change == true },
                    model: {
                      value: _vm.card_name,
                      callback: function($$v) {
                        _vm.card_name = $$v
                      },
                      expression: "card_name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", [_vm._v("Credit Card Number")]),
                          _vm._v(" "),
                          _c("md-input", {
                            attrs: { disabled: !_vm.change == true },
                            model: {
                              value: _vm.card_number,
                              callback: function($$v) {
                                _vm.card_number = $$v
                              },
                              expression: "card_number"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c(
                        "md-field",
                        [
                          _c("label", [_vm._v("Security Code")]),
                          _vm._v(" "),
                          _c("md-input", {
                            attrs: {
                              type: "password",
                              disabled: !_vm.change == true
                            },
                            model: {
                              value: _vm.cvv,
                              callback: function($$v) {
                                _vm.cvv = $$v
                              },
                              expression: "cvv"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _vm.change == true
                ? _c("p", { staticClass: "m-0" }, [_vm._v("Expiration Date")])
                : _vm._e(),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _vm.change == true
                        ? _c(
                            "b-row",
                            [
                              _c("b-col", { attrs: { md: "6" } }, [
                                _c(
                                  "label",
                                  {
                                    staticStyle: {
                                      padding: "0px",
                                      margine: "0px"
                                    }
                                  },
                                  [_vm._v("Month")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.exp_month,
                                        expression: "exp_month"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-sm my-select",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.exp_month = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  _vm._l(_vm.months, function(month, index) {
                                    return _c(
                                      "option",
                                      {
                                        key: index,
                                        domProps: { value: month }
                                      },
                                      [_vm._v(_vm._s(month))]
                                    )
                                  }),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-col", { attrs: { md: "6" } }, [
                                _c(
                                  "label",
                                  {
                                    staticStyle: {
                                      padding: "0px",
                                      margine: "0px"
                                    }
                                  },
                                  [_vm._v("Year")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.exp_year,
                                        expression: "exp_year"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-sm my-select",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.exp_year = $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      }
                                    }
                                  },
                                  _vm._l(_vm.years, function(year, index) {
                                    return _c(
                                      "option",
                                      { key: index, domProps: { value: year } },
                                      [_vm._v(_vm._s(year))]
                                    )
                                  }),
                                  0
                                )
                              ])
                            ],
                            1
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.billing_token_type === "2"
        ? _c(
            "div",
            [
              _c(
                "md-field",
                [
                  _c("label", [_vm._v("Account Number")]),
                  _vm._v(" "),
                  _c("md-input", {
                    attrs: { disabled: !_vm.change == true },
                    model: {
                      value: _vm.ach_account_number,
                      callback: function($$v) {
                        _vm.ach_account_number = $$v
                      },
                      expression: "ach_account_number"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-field",
                [
                  _c("label", [_vm._v("Routing")]),
                  _vm._v(" "),
                  _c("md-input", {
                    attrs: { disabled: !_vm.change == true },
                    model: {
                      value: _vm.ach_routing,
                      callback: function($$v) {
                        _vm.ach_routing = $$v
                      },
                      expression: "ach_routing"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.change == true
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "float-right",
                      attrs: { variant: "success" },
                      on: {
                        click: function($event) {
                          return _vm.saveChanges()
                        }
                      }
                    },
                    [_vm._v("Save Changes")]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/profile-page/CardHolder.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/CardHolder.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardHolder.vue?vue&type=template&id=06b58f24&scoped=true& */ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true&");
/* harmony import */ var _CardHolder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardHolder.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& */ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CardHolder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06b58f24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/profile-page/CardHolder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardHolder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=style&index=0&id=06b58f24&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_style_index_0_id_06b58f24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CardHolder.vue?vue&type=template&id=06b58f24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/CardHolder.vue?vue&type=template&id=06b58f24&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardHolder_vue_vue_type_template_id_06b58f24_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/frontend/errorClass.js":
/*!*********************************************!*\
  !*** ./resources/js/frontend/errorClass.js ***!
  \*********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL0NhcmRIb2xkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT80NmJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT84NjU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT9hMGRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/NTM0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/MzQ5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/NDdhZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvZXJyb3JDbGFzcy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5Iiwic3RyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImdldCIsImFyciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0EsMkNBQTJDLFNBQVMsVUFBVSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVMsVUFBVSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCLGNBQWMsRUFBRTtBQUMvRTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvZi9Qcm9mQ2FyZEhvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiA6Y2xhc3M9XCJjaGFuZ2UgPT0gdHJ1ZT8gJ2JvcmRlciBib3JkZXItaW5mbyBwLTInIDogJydcIj5cbiAgICA8aDQgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICBCaWxsaW5nIENhcmQgSW5mb3JtYXRpb25cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICB2LWlmPVwiY2hhbmdlID09IGZhbHNlXCJcbiAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgIHZhcmlhbnQ9XCJzdWNjZXNzXCJcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgQGNsaWNrPVwiY2hhbmdlQmlsbGluZ0luZm8oKVwiXG4gICAgICA+Q2hhbmdlPC9iLWJ1dHRvbj5cbiAgICAgIDxiLWJ1dHRvblxuICAgICAgICB2LWlmPVwiY2hhbmdlID09IHRydWVcIlxuICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgIEBjbGljaz1cIkNhbmNlbCgpXCJcbiAgICAgID5DYW5jZWw8L2ItYnV0dG9uPlxuICAgIDwvaDQ+XG4gICAgPGItcm93PlxuICAgICAgPGItY29sIG1kPVwiNlwiPlxuICAgICAgICA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+QmlsbGluZyBUeXBlPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG15LXNlbGVjdFwiXG4gICAgICAgICAgdi1tb2RlbD1cImJpbGxpbmdfdG9rZW5fdHlwZVwiXG4gICAgICAgICAgOmRpc2FibGVkPVwiIWNoYW5nZT09dHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkNDPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj5BQ0g8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2ItY29sPlxuICAgICAgPGItY29sIG1kPVwiNlwiIHYtaWY9XCJiaWxsaW5nX3Rva2VuX3R5cGUgPT09ICcxJ1wiPlxuICAgICAgICA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+Q2FyZCBUeXBlPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiY2FyZF90eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIgOmRpc2FibGVkPVwiIWNoYW5nZT09dHJ1ZVwiPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+QW1lcmljYW4gRXhwcmVzczwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+RGlzY292ZXI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk1hc3RlcmNhcmQ8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPlZpc2E8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2ItY29sPlxuICAgICAgPGItY29sIG1kPVwiNlwiPlxuICAgICAgICA8Yi1jb2wgbWQ9XCIxMlwiIHYtaWY9XCJiaWxsaW5nX3Rva2VuX3R5cGUgPT09ICcyJ1wiPlxuICAgICAgICAgIDxsYWJlbCBzdHlsZT1cInBhZGRpbmc6MHB4OyBtYXJnaW5lOjBweDtcIj5BY2NvdW50IFR5cGU8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImFjaF90eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIgOmRpc2FibGVkPVwiIWNoYW5nZT09dHJ1ZVwiPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5TYXZpbmdzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkNoZWNraW5nPC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPGItY29sIG1kPVwiMTJcIiB2LWlmPVwiYmlsbGluZ190b2tlbl90eXBlID09PSAnMidcIj5cbiAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+QWNjb3VudCBIb2xkZXIgVHlwZTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdi1tb2RlbD1cImFjaF9hY2NfaG9sZGVyX3R5cGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+UGVyc29uYWw8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+QnVzaW5lc3M8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9iLWNvbD5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cblxuICAgIDxkaXYgdi1pZj1cImJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gJzEnXCI+XG4gICAgICA8bWQtZmllbGQ+XG4gICAgICAgIDxsYWJlbD5OYW1lIGluIHRoZSBjYXJkPC9sYWJlbD5cbiAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJjYXJkX25hbWVcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+PC9tZC1pbnB1dD5cbiAgICAgIDwvbWQtZmllbGQ+XG4gICAgICA8Yi1yb3c+XG4gICAgICAgIDxiLWNvbD5cbiAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICA8bGFiZWw+Q3JlZGl0IENhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwiY2FyZF9udW1iZXJcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgICA8Yi1jb2w+XG4gICAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPlNlY3VyaXR5IENvZGU8L2xhYmVsPlxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJjdnZcIiB0eXBlPVwicGFzc3dvcmRcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+PC9tZC1pbnB1dD5cbiAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICA8L2ItY29sPlxuICAgICAgPC9iLXJvdz5cbiAgICAgIDxiciAvPlxuICAgICAgPHAgY2xhc3M9XCJtLTBcIiB2LWlmPVwiY2hhbmdlID09IHRydWVcIj5FeHBpcmF0aW9uIERhdGU8L3A+XG4gICAgICA8YnIgLz5cbiAgICAgIDxiLXJvdz5cbiAgICAgICAgPGItY29sIG1kPVwiNlwiPlxuICAgICAgICAgIDxiLXJvdyB2LWlmPVwiY2hhbmdlID09IHRydWVcIj5cbiAgICAgICAgICAgIDxiLWNvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPk1vbnRoPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZXhwX21vbnRoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG15LXNlbGVjdFwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIobW9udGgsIGluZGV4KSBpbiBtb250aHNcIiA6dmFsdWU9XCJtb250aFwiIDprZXk9XCJpbmRleFwiPnt7bW9udGh9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cInBhZGRpbmc6MHB4OyBtYXJnaW5lOjBweDtcIj5ZZWFyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiZXhwX3llYXJcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCI+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIih5ZWFyLCBpbmRleCkgaW4geWVhcnNcIiA6dmFsdWU9XCJ5ZWFyXCIgOmtleT1cImluZGV4XCI+e3t5ZWFyfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgIDwvYi1jb2w+XG4gICAgICA8L2Itcm93PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiB2LWlmPVwiYmlsbGluZ190b2tlbl90eXBlID09PSAnMidcIj5cbiAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgPGxhYmVsPkFjY291bnQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJhY2hfYWNjb3VudF9udW1iZXJcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+PC9tZC1pbnB1dD5cbiAgICAgIDwvbWQtZmllbGQ+XG4gICAgICA8bWQtZmllbGQ+XG4gICAgICAgIDxsYWJlbD5Sb3V0aW5nPC9sYWJlbD5cbiAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJhY2hfcm91dGluZ1wiIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIj48L21kLWlucHV0PlxuICAgICAgPC9tZC1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxiLXJvdyB2LWlmPVwiY2hhbmdlID09IHRydWVcIj5cbiAgICAgIDxiLWNvbCBtZD1cIjEyXCI+XG4gICAgICAgIDxiLWJ1dHRvbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgdmFyaWFudD1cInN1Y2Nlc3NcIiBAY2xpY2s9XCJzYXZlQ2hhbmdlcygpXCI+U2F2ZSBDaGFuZ2VzPC9iLWJ1dHRvbj5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXG4gICAgXCJwcm9wdXNlclwiLFxuICAgIFwiYmlsbGluZ190eXBlXCIsXG4gICAgXCJjY19zY19hY3Rpb25cIixcbiAgICBcImNjX3dzX2FjdGlvblwiLFxuICAgIFwiYWNoX3NjX2FjdGlvblwiLFxuICAgIFwiYWNoX3dzX2FjdGlvblwiLFxuICAgIC8vIFwic3Vic2NyaXB0aW9uXCJcbiAgXSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnByb3B1c2VyO1xuICAgIHRoaXMuYmlsbGluZ190b2tlbl90eXBlID0gdGhpcy5iaWxsaW5nX3R5cGU7XG5cbiAgICBpZiAodGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUgPT0gXCIyXCIpIHtcbiAgICAgIHRoaXMuYWNoX2FjY291bnRfbnVtYmVyID0gdGhpcy5wcm9wdXNlci5iaWxsaW5naW5mby5MYXN0NDtcbiAgICAgIHRoaXMuYWNoX3JvdXRpbmcgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkFjaFJvdXRpbmdMYXN0MztcbiAgICAgIHRoaXMuYWNoX3R5cGUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkFDSFR5cGU7XG4gICAgICB0aGlzLmFjaF9hY2NfaG9sZGVyX3R5cGUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkFDSEFjY291bnRIb2xkZXJUeXBlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmJpbGxpbmdfdG9rZW5fdHlwZSA9PSBcIjFcIikge1xuICAgICAgdGhpcy5jYXJkX3R5cGUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkNhcmRUeXBlO1xuICAgICAgdGhpcy5jYXJkX25hbWUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLmJhbmtOYW1lX29yX2NhcmROYW1lO1xuICAgICAgdGhpcy5jYXJkX251bWJlciA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uTGFzdDQ7XG4gICAgICB0aGlzLmN2diA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uQ1ZWO1xuICAgIH1cbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjoge30sXG4gICAgICB5ZWFyczogW10sXG4gICAgICBtb250aHM6IFtdLFxuICAgICAgY2hhbmdlOiBmYWxzZSxcbiAgICAgIGJpbGxpbmdfdG9rZW5fdHlwZTogXCIxXCIsXG4gICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcbiAgICAgIEVycm9yTWVzc2FnZTogW10sXG5cbiAgICAgIGFjaF90eXBlOiBcIjFcIixcbiAgICAgIGFjaF9hY2NfaG9sZGVyX3R5cGU6IFwiMFwiLFxuICAgICAgYWNoX2FjY291bnRfbnVtYmVyOiBcIlwiLFxuICAgICAgYWNoX3JvdXRpbmc6IFwiXCIsXG5cbiAgICAgIGNhcmRfdHlwZTogXCIxXCIsXG4gICAgICBjYXJkX25hbWU6IFwiXCIsXG4gICAgICBjYXJkX251bWJlcjogXCJcIixcbiAgICAgIGN2djogXCJcIixcbiAgICAgIGV4cF9tb250aDogXCJcIixcbiAgICAgIGV4cF95ZWFyOiBcIlwiLFxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBDYW5jZWwoKSB7XG4gICAgICB0aGlzLmNoYW5nZSA9IGZhbHNlO1xuICAgICAgdGhpcy51c2VyID0gdGhpcy5wcm9wdXNlcjtcbiAgICAgIHRoaXMuYmlsbGluZ190b2tlbl90eXBlID0gdGhpcy5iaWxsaW5nX3R5cGU7XG5cbiAgICAgIGlmICh0aGlzLmJpbGxpbmdfdG9rZW5fdHlwZSA9PSBcIjJcIikge1xuICAgICAgICB0aGlzLmFjaF9hY2NvdW50X251bWJlciA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uTGFzdDQ7XG4gICAgICAgIHRoaXMuYWNoX3JvdXRpbmcgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkFjaFJvdXRpbmdMYXN0MztcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuYmlsbGluZ190b2tlbl90eXBlID09IFwiMVwiKSB7XG4gICAgICAgIHRoaXMuY2FyZF90eXBlID0gdGhpcy5wcm9wdXNlci5iaWxsaW5naW5mby5DYXJkVHlwZTtcbiAgICAgICAgdGhpcy5jYXJkX25hbWUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLmJhbmtOYW1lX29yX2NhcmROYW1lO1xuICAgICAgICB0aGlzLmNhcmRfbnVtYmVyID0gdGhpcy5wcm9wdXNlci5iaWxsaW5naW5mby5MYXN0NDtcbiAgICAgICAgdGhpcy5jdnYgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkNWVjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNoYW5nZUJpbGxpbmdJbmZvKCkge1xuICAgICAgdGhpcy4kcGFyZW50LmVkaXQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2hhbmdlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWNoX2FjY291bnRfbnVtYmVyID0gXCJcIjtcbiAgICAgIHRoaXMuYWNoX3JvdXRpbmcgPSBcIlwiO1xuXG4gICAgICB0aGlzLmNhcmRfbmFtZSA9IFwiXCI7XG4gICAgICB0aGlzLmNhcmRfbnVtYmVyID0gXCJcIjtcbiAgICAgIHRoaXMuY3Z2ID0gXCJcIjtcbiAgICB9LFxuXG4gICAgc2F2ZUNoYW5nZXMoKSB7XG4gICAgICBpZiAodGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUgPT0gXCIxXCIpIHtcbiAgICAgICAgdGhpcy5zYXZlQ0MoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2F2ZUFDSCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzYXZlQUNIKCkge1xuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblxuICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICBpZiAodGhpcy51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMikge1xuICAgICAgICB1cmwgPSB0aGlzLmFjaF9zY19hY3Rpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmwgPSB0aGlzLmFjaF93c19hY3Rpb247XG4gICAgICB9XG5cbiAgICAgIC8vICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xuICAgICAgLy8gICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEobXlGb3JtKTtcbiAgICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCB0aGlzLm15SFRNTCk7XG5cbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoXCJzdWJzY3JpcHRpb25cIiwgdGhpcy5zdWJzY3JpcHRpb24pO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYmlsbGluZ190b2tlbl90eXBlXCIsIHRoaXMuYmlsbGluZ190b2tlbl90eXBlKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjaF90eXBlXCIsIHRoaXMuYWNoX3R5cGUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWNoX2FjY19ob2xkZXJfdHlwZVwiLCB0aGlzLnVzZXIuYWNoX2FjY19ob2xkZXJfdHlwZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhY2hfYWNjb3VudF9udW1iZXJcIiwgdGhpcy5hY2hfYWNjb3VudF9udW1iZXIpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWNoX3JvdXRpbmdcIiwgdGhpcy5hY2hfcm91dGluZyk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHVybCwgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbXlwcm9maWxlXCI7XG4gICAgICAgICAgLy8gICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEuZGF0YV9tZXNzYWdlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xuXG4gICAgICAgICAgaWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNDAwKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBhcnIucHVzaChlcnIucmVzcG9uc2UuZGF0YS5kYXRhX21lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGFycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKHRoaXMuZXJyb3JzLmdldEFycmF5T2ZNZXNzYWdlcygpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2F2ZUNDKCkge1xuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblxuICAgICAgbGV0IHVybCA9IFwiXCI7XG4gICAgICBpZiAodGhpcy51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMikge1xuICAgICAgICB1cmwgPSB0aGlzLmNjX3NjX2FjdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybCA9IHRoaXMuY2Nfd3NfYWN0aW9uO1xuICAgICAgfVxuXG4gICAgICAvLyAgIGxldCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15Rm9ybVwiKTtcbiAgICAgIC8vICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKG15Rm9ybSk7XG4gICAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgdGhpcy5teUhUTUwpO1xuXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwic3Vic2NyaXB0aW9uXCIsIHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImJpbGxpbmdfdG9rZW5fdHlwZVwiLCB0aGlzLmJpbGxpbmdfdG9rZW5fdHlwZSk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJkX3R5cGVcIiwgdGhpcy5jYXJkX3R5cGUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2FyZF9udW1iZXJcIiwgdGhpcy5jYXJkX251bWJlcik7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJjYXJkX25hbWVcIiwgdGhpcy5jYXJkX25hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY3Z2XCIsIHRoaXMuY3Z2KTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImV4cF9tb250aFwiLCB0aGlzLmV4cF9tb250aCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJleHBfeWVhclwiLCB0aGlzLmV4cF95ZWFyKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QodXJsLCBmb3JtRGF0YSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9teXByb2ZpbGVcIjtcbiAgICAgICAgICAvLyAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5kYXRhX21lc3NhZ2UpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZSk7XG5cbiAgICAgICAgICBpZiAoZXJyLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDApIHtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGFyci5wdXNoKGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZSk7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoYXJyKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaG93RXJyb3JNZXNzYWdlKGVycm9ycykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhzaGl0KTtcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xuICAgIH0sXG4gIH0sXG5cbiAgbW91bnRlZCgpIHtcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMTA7IGluZGV4KyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaChjdXJyZW50WWVhciArIGluZGV4KTtcbiAgICB9XG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSAxMjsgaW5kZXgrKykge1xuICAgICAgdGhpcy5tb250aHMucHVzaChpbmRleCk7XG4gICAgfVxuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4ucy11c2VyLXR5cGUge1xuICAubWQtcmFkaW8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5teS1zZWxlY3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItdG9wOiAwcHg7XG4gIGJvcmRlci1sZWZ0OiAwcHg7XG4gIGJvcmRlci1yaWdodDogMHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnMtdXNlci10eXBlIC5tZC1yYWRpb1tkYXRhLXYtMDZiNThmMjRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5teS1zZWxlY3RbZGF0YS12LTA2YjU4ZjI0XSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlci10b3A6IDBweDtcXG4gIGJvcmRlci1sZWZ0OiAwcHg7XFxuICBib3JkZXItcmlnaHQ6IDBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmI1OGYyNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZiNThmMjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmI1OGYyNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jaGFuZ2UgPT0gdHJ1ZSA/IFwiYm9yZGVyIGJvcmRlci1pbmZvIHAtMlwiIDogXCJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImg0XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgQmlsbGluZyBDYXJkIEluZm9ybWF0aW9uXFxuICAgIFwiKSxcbiAgICAgICAgICBfdm0uY2hhbmdlID09IGZhbHNlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIsIHNpemU6IFwic21cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQmlsbGluZ0luZm8oKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hhbmdlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmNoYW5nZSA9PSB0cnVlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJkYW5nZXJcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5DYW5jZWwoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIwcHhcIiwgbWFyZ2luZTogXCIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiQmlsbGluZyBUeXBlXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5iaWxsaW5nX3Rva2VuX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmlsbGluZ190b2tlbl90eXBlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBteS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBfdm0uYmlsbGluZ190b2tlbl90eXBlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMVwiIH0gfSwgW192bS5fdihcIkNDXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjJcIiB9IH0sIFtfdm0uX3YoXCJBQ0hcIildKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uYmlsbGluZ190b2tlbl90eXBlID09PSBcIjFcIlxuICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiLCBtYXJnaW5lOiBcIjBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYXJkIFR5cGVcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXJkX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNhcmRfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNoYW5nZSA9PSB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcmRfdHlwZSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQW1lcmljYW4gRXhwcmVzc1wiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGlzY292ZXJcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1hc3RlcmNhcmRcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiNFwiIH0gfSwgW192bS5fdihcIlZpc2FcIildKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gXCIyXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCIxMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiLCBtYXJnaW5lOiBcIjBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWNjb3VudCBUeXBlXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjaF90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNoX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIG15LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2hfdHlwZSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTYXZpbmdzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2hlY2tpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5iaWxsaW5nX3Rva2VuX3R5cGUgPT09IFwiMlwiXG4gICAgICAgICAgICAgICAgPyBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgbWQ6IFwiMTJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIwcHhcIiwgbWFyZ2luZTogXCIwcHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFjY291bnQgSG9sZGVyIFR5cGVcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNoX2FjY19ob2xkZXJfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjaF9hY2NfaG9sZGVyX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIG15LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2hfYWNjX2hvbGRlcl90eXBlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlBlcnNvbmFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQnVzaW5lc3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5iaWxsaW5nX3Rva2VuX3R5cGUgPT09IFwiMVwiXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiTmFtZSBpbiB0aGUgY2FyZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2FyZF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJkX25hbWUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FyZF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQ3JlZGl0IENhcmQgTnVtYmVyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNoYW5nZSA9PSB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY2FyZF9udW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYXJkX251bWJlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FyZF9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2VjdXJpdHkgQ29kZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN2dixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmN2diA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3Z2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY2hhbmdlID09IHRydWVcbiAgICAgICAgICAgICAgICA/IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm0tMFwiIH0sIFtfdm0uX3YoXCJFeHBpcmF0aW9uIERhdGVcIildKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY2hhbmdlID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5lOiBcIjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9udGhcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZXhwX21vbnRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXhwX21vbnRoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHBfbW9udGggPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vbnRocywgZnVuY3Rpb24obW9udGgsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBtb250aCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKG1vbnRoKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImItY29sXCIsIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luZTogXCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlllYXJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZXhwX3llYXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleHBfeWVhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG15LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXhwX3llYXIgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnllYXJzLCBmdW5jdGlvbih5ZWFyLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGRvbVByb3BzOiB7IHZhbHVlOiB5ZWFyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoeWVhcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5iaWxsaW5nX3Rva2VuX3R5cGUgPT09IFwiMlwiXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQWNjb3VudCBOdW1iZXJcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjaF9hY2NvdW50X251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWNoX2FjY291bnRfbnVtYmVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjaF9hY2NvdW50X251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJSb3V0aW5nXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNoYW5nZSA9PSB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2hfcm91dGluZyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWNoX3JvdXRpbmcgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNoX3JvdXRpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uY2hhbmdlID09IHRydWVcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVDaGFuZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlIENoYW5nZXNcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YjU4ZjI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9DYXJkSG9sZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9DYXJkSG9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2YjU4ZjI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDZiNThmMjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNmI1OGYyNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNmI1OGYyNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNmI1OGYyNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZiNThmMjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDZiNThmMjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkSG9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2YjU4ZjI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmI1OGYyNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZiNThmMjQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==