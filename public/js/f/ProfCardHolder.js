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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL0NhcmRIb2xkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT80NmJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT84NjU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZT9hMGRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9DYXJkSG9sZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/NTM0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/MzQ5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWU/NDdhZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvZXJyb3JDbGFzcy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5Iiwic3RyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImdldCIsImFyciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0EsMkNBQTJDLFNBQVMsVUFBVSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELHVDQUF1QztBQUN2QztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVMsVUFBVSxFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsd0JBQXdCLGNBQWMsRUFBRTtBQUMvRTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1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QUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvZi9Qcm9mQ2FyZEhvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IDpjbGFzcz1cImNoYW5nZSA9PSB0cnVlPyAnYm9yZGVyIGJvcmRlci1pbmZvIHAtMicgOiAnJ1wiPlxyXG4gICAgPGg0IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICBCaWxsaW5nIENhcmQgSW5mb3JtYXRpb25cclxuICAgICAgPGItYnV0dG9uXHJcbiAgICAgICAgdi1pZj1cImNoYW5nZSA9PSBmYWxzZVwiXHJcbiAgICAgICAgY2xhc3M9XCJmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxyXG4gICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgQGNsaWNrPVwiY2hhbmdlQmlsbGluZ0luZm8oKVwiXHJcbiAgICAgID5DaGFuZ2U8L2ItYnV0dG9uPlxyXG4gICAgICA8Yi1idXR0b25cclxuICAgICAgICB2LWlmPVwiY2hhbmdlID09IHRydWVcIlxyXG4gICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxyXG4gICAgICAgIHNpemU9XCJzbVwiXHJcbiAgICAgICAgQGNsaWNrPVwiQ2FuY2VsKClcIlxyXG4gICAgICA+Q2FuY2VsPC9iLWJ1dHRvbj5cclxuICAgIDwvaDQ+XHJcbiAgICA8Yi1yb3c+XHJcbiAgICAgIDxiLWNvbCBtZD1cIjZcIj5cclxuICAgICAgICA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+QmlsbGluZyBUeXBlPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBteS1zZWxlY3RcIlxyXG4gICAgICAgICAgdi1tb2RlbD1cImJpbGxpbmdfdG9rZW5fdHlwZVwiXHJcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkNDPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkFDSDwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgICA8Yi1jb2wgbWQ9XCI2XCIgdi1pZj1cImJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gJzEnXCI+XHJcbiAgICAgICAgPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPkNhcmQgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiY2FyZF90eXBlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIgOmRpc2FibGVkPVwiIWNoYW5nZT09dHJ1ZVwiPlxyXG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5BbWVyaWNhbiBFeHByZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPkRpc2NvdmVyPC9vcHRpb24+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPk1hc3RlcmNhcmQ8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+VmlzYTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgPGItY29sIG1kPVwiMTJcIiB2LWlmPVwiYmlsbGluZ190b2tlbl90eXBlID09PSAnMidcIj5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT1cInBhZGRpbmc6MHB4OyBtYXJnaW5lOjBweDtcIj5BY2NvdW50IFR5cGU8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwiYWNoX3R5cGVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBteS1zZWxlY3RcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+U2F2aW5nczwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMFwiPkNoZWNraW5nPC9vcHRpb24+XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiLWNvbCBtZD1cIjEyXCIgdi1pZj1cImJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gJzInXCI+XHJcbiAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+QWNjb3VudCBIb2xkZXIgVHlwZTwvbGFiZWw+XHJcbiAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJhY2hfYWNjX2hvbGRlcl90eXBlXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCJcclxuICAgICAgICAgICAgOmRpc2FibGVkPVwiIWNoYW5nZT09dHJ1ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIwXCI+UGVyc29uYWw8L29wdGlvbj5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5CdXNpbmVzczwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9iLWNvbD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcblxyXG4gICAgPGRpdiB2LWlmPVwiYmlsbGluZ190b2tlbl90eXBlID09PSAnMSdcIj5cclxuICAgICAgPG1kLWZpZWxkPlxyXG4gICAgICAgIDxsYWJlbD5OYW1lIGluIHRoZSBjYXJkPC9sYWJlbD5cclxuICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImNhcmRfbmFtZVwiIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIj48L21kLWlucHV0PlxyXG4gICAgICA8L21kLWZpZWxkPlxyXG4gICAgICA8Yi1yb3c+XHJcbiAgICAgICAgPGItY29sPlxyXG4gICAgICAgICAgPG1kLWZpZWxkPlxyXG4gICAgICAgICAgICA8bGFiZWw+Q3JlZGl0IENhcmQgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgPG1kLWlucHV0IHYtbW9kZWw9XCJjYXJkX251bWJlclwiIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1maWVsZD5cclxuICAgICAgICA8L2ItY29sPlxyXG4gICAgICAgIDxiLWNvbD5cclxuICAgICAgICAgIDxtZC1maWVsZD5cclxuICAgICAgICAgICAgPGxhYmVsPlNlY3VyaXR5IENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImN2dlwiIHR5cGU9XCJwYXNzd29yZFwiIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgPC9tZC1maWVsZD5cclxuICAgICAgICA8L2ItY29sPlxyXG4gICAgICA8L2Itcm93PlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPHAgY2xhc3M9XCJtLTBcIiB2LWlmPVwiY2hhbmdlID09IHRydWVcIj5FeHBpcmF0aW9uIERhdGU8L3A+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8Yi1yb3c+XHJcbiAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgPGItcm93IHYtaWY9XCJjaGFuZ2UgPT0gdHJ1ZVwiPlxyXG4gICAgICAgICAgICA8Yi1jb2wgbWQ9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPk1vbnRoPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJleHBfbW9udGhcIiBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKG1vbnRoLCBpbmRleCkgaW4gbW9udGhzXCIgOnZhbHVlPVwibW9udGhcIiA6a2V5PVwiaW5kZXhcIj57e21vbnRofX08L29wdGlvbj5cclxuICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9iLWNvbD5cclxuICAgICAgICAgICAgPGItY29sIG1kPVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cInBhZGRpbmc6MHB4OyBtYXJnaW5lOjBweDtcIj5ZZWFyPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8c2VsZWN0IHYtbW9kZWw9XCJleHBfeWVhclwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBteS1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoeWVhciwgaW5kZXgpIGluIHllYXJzXCIgOnZhbHVlPVwieWVhclwiIDprZXk9XCJpbmRleFwiPnt7eWVhcn19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvYi1jb2w+XHJcbiAgICAgICAgICA8L2Itcm93PlxyXG4gICAgICAgIDwvYi1jb2w+XHJcbiAgICAgIDwvYi1yb3c+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHYtaWY9XCJiaWxsaW5nX3Rva2VuX3R5cGUgPT09ICcyJ1wiPlxyXG4gICAgICA8bWQtZmllbGQ+XHJcbiAgICAgICAgPGxhYmVsPkFjY291bnQgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImFjaF9hY2NvdW50X251bWJlclwiIDpkaXNhYmxlZD1cIiFjaGFuZ2U9PXRydWVcIj48L21kLWlucHV0PlxyXG4gICAgICA8L21kLWZpZWxkPlxyXG4gICAgICA8bWQtZmllbGQ+XHJcbiAgICAgICAgPGxhYmVsPlJvdXRpbmc8L2xhYmVsPlxyXG4gICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwiYWNoX3JvdXRpbmdcIiA6ZGlzYWJsZWQ9XCIhY2hhbmdlPT10cnVlXCI+PC9tZC1pbnB1dD5cclxuICAgICAgPC9tZC1maWVsZD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxiLXJvdyB2LWlmPVwiY2hhbmdlID09IHRydWVcIj5cclxuICAgICAgPGItY29sIG1kPVwiMTJcIj5cclxuICAgICAgICA8Yi1idXR0b24gY2xhc3M9XCJmbG9hdC1yaWdodFwiIHZhcmlhbnQ9XCJzdWNjZXNzXCIgQGNsaWNrPVwic2F2ZUNoYW5nZXMoKVwiPlNhdmUgQ2hhbmdlczwvYi1idXR0b24+XHJcbiAgICAgIDwvYi1jb2w+XHJcbiAgICA8L2Itcm93PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXHJcbiAgICBcInByb3B1c2VyXCIsXHJcbiAgICBcImJpbGxpbmdfdHlwZVwiLFxyXG4gICAgXCJjY19zY19hY3Rpb25cIixcclxuICAgIFwiY2Nfd3NfYWN0aW9uXCIsXHJcbiAgICBcImFjaF9zY19hY3Rpb25cIixcclxuICAgIFwiYWNoX3dzX2FjdGlvblwiLFxyXG4gICAgLy8gXCJzdWJzY3JpcHRpb25cIlxyXG4gIF0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMudXNlciA9IHRoaXMucHJvcHVzZXI7XHJcbiAgICB0aGlzLmJpbGxpbmdfdG9rZW5fdHlwZSA9IHRoaXMuYmlsbGluZ190eXBlO1xyXG5cclxuICAgIGlmICh0aGlzLmJpbGxpbmdfdG9rZW5fdHlwZSA9PSBcIjJcIikge1xyXG4gICAgICB0aGlzLmFjaF9hY2NvdW50X251bWJlciA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uTGFzdDQ7XHJcbiAgICAgIHRoaXMuYWNoX3JvdXRpbmcgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkFjaFJvdXRpbmdMYXN0MztcclxuICAgICAgdGhpcy5hY2hfdHlwZSA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uQUNIVHlwZTtcclxuICAgICAgdGhpcy5hY2hfYWNjX2hvbGRlcl90eXBlID0gdGhpcy5wcm9wdXNlci5iaWxsaW5naW5mby5BQ0hBY2NvdW50SG9sZGVyVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgdGhpcy5jYXJkX3R5cGUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkNhcmRUeXBlO1xyXG4gICAgICB0aGlzLmNhcmRfbmFtZSA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uYmFua05hbWVfb3JfY2FyZE5hbWU7XHJcbiAgICAgIHRoaXMuY2FyZF9udW1iZXIgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkxhc3Q0O1xyXG4gICAgICB0aGlzLmN2diA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uQ1ZWO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHVzZXI6IHt9LFxyXG4gICAgICB5ZWFyczogW10sXHJcbiAgICAgIG1vbnRoczogW10sXHJcbiAgICAgIGNoYW5nZTogZmFsc2UsXHJcbiAgICAgIGJpbGxpbmdfdG9rZW5fdHlwZTogXCIxXCIsXHJcbiAgICAgIGVycm9yczogbmV3IEVycm9ycygpLFxyXG4gICAgICBFcnJvck1lc3NhZ2U6IFtdLFxyXG5cclxuICAgICAgYWNoX3R5cGU6IFwiMVwiLFxyXG4gICAgICBhY2hfYWNjX2hvbGRlcl90eXBlOiBcIjBcIixcclxuICAgICAgYWNoX2FjY291bnRfbnVtYmVyOiBcIlwiLFxyXG4gICAgICBhY2hfcm91dGluZzogXCJcIixcclxuXHJcbiAgICAgIGNhcmRfdHlwZTogXCIxXCIsXHJcbiAgICAgIGNhcmRfbmFtZTogXCJcIixcclxuICAgICAgY2FyZF9udW1iZXI6IFwiXCIsXHJcbiAgICAgIGN2djogXCJcIixcclxuICAgICAgZXhwX21vbnRoOiBcIlwiLFxyXG4gICAgICBleHBfeWVhcjogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBDYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudXNlciA9IHRoaXMucHJvcHVzZXI7XHJcbiAgICAgIHRoaXMuYmlsbGluZ190b2tlbl90eXBlID0gdGhpcy5iaWxsaW5nX3R5cGU7XHJcblxyXG4gICAgICBpZiAodGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUgPT0gXCIyXCIpIHtcclxuICAgICAgICB0aGlzLmFjaF9hY2NvdW50X251bWJlciA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uTGFzdDQ7XHJcbiAgICAgICAgdGhpcy5hY2hfcm91dGluZyA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uQWNoUm91dGluZ0xhc3QzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUgPT0gXCIxXCIpIHtcclxuICAgICAgICB0aGlzLmNhcmRfdHlwZSA9IHRoaXMucHJvcHVzZXIuYmlsbGluZ2luZm8uQ2FyZFR5cGU7XHJcbiAgICAgICAgdGhpcy5jYXJkX25hbWUgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLmJhbmtOYW1lX29yX2NhcmROYW1lO1xyXG4gICAgICAgIHRoaXMuY2FyZF9udW1iZXIgPSB0aGlzLnByb3B1c2VyLmJpbGxpbmdpbmZvLkxhc3Q0O1xyXG4gICAgICAgIHRoaXMuY3Z2ID0gdGhpcy5wcm9wdXNlci5iaWxsaW5naW5mby5DVlY7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VCaWxsaW5nSW5mbygpIHtcclxuICAgICAgdGhpcy4kcGFyZW50LmVkaXQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2UgPSB0cnVlO1xyXG4gICAgICB0aGlzLmFjaF9hY2NvdW50X251bWJlciA9IFwiXCI7XHJcbiAgICAgIHRoaXMuYWNoX3JvdXRpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgdGhpcy5jYXJkX25hbWUgPSBcIlwiO1xyXG4gICAgICB0aGlzLmNhcmRfbnVtYmVyID0gXCJcIjtcclxuICAgICAgdGhpcy5jdnYgPSBcIlwiO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlQ2hhbmdlcygpIHtcclxuICAgICAgaWYgKHRoaXMuYmlsbGluZ190b2tlbl90eXBlID09IFwiMVwiKSB7XHJcbiAgICAgICAgdGhpcy5zYXZlQ0MoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNhdmVBQ0goKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlQUNIKCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG5cclxuICAgICAgbGV0IHVybCA9IFwiXCI7XHJcbiAgICAgIGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy5hY2hfc2NfYWN0aW9uO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVybCA9IHRoaXMuYWNoX3dzX2FjdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gICBsZXQgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteUZvcm1cIik7XHJcbiAgICAgIC8vICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKG15Rm9ybSk7XHJcbiAgICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwiY29udGVudFwiLCB0aGlzLm15SFRNTCk7XHJcblxyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgLy8gICBmb3JtRGF0YS5hcHBlbmQoXCJzdWJzY3JpcHRpb25cIiwgdGhpcy5zdWJzY3JpcHRpb24pO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJiaWxsaW5nX3Rva2VuX3R5cGVcIiwgdGhpcy5iaWxsaW5nX3Rva2VuX3R5cGUpO1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJhY2hfdHlwZVwiLCB0aGlzLmFjaF90eXBlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYWNoX2FjY19ob2xkZXJfdHlwZVwiLCB0aGlzLnVzZXIuYWNoX2FjY19ob2xkZXJfdHlwZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjaF9hY2NvdW50X251bWJlclwiLCB0aGlzLmFjaF9hY2NvdW50X251bWJlcik7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImFjaF9yb3V0aW5nXCIsIHRoaXMuYWNoX3JvdXRpbmcpO1xyXG5cclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdCh1cmwsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbXlwcm9maWxlXCI7XHJcbiAgICAgICAgICAvLyAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShhcnIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZUNDKCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG5cclxuICAgICAgbGV0IHVybCA9IFwiXCI7XHJcbiAgICAgIGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy5jY19zY19hY3Rpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdXJsID0gdGhpcy5jY193c19hY3Rpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgICAvLyAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShteUZvcm0pO1xyXG4gICAgICAvLyAgIGZvcm1EYXRhLmFwcGVuZChcImNvbnRlbnRcIiwgdGhpcy5teUhUTUwpO1xyXG5cclxuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgIC8vICAgZm9ybURhdGEuYXBwZW5kKFwic3Vic2NyaXB0aW9uXCIsIHRoaXMuc3Vic2NyaXB0aW9uKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiYmlsbGluZ190b2tlbl90eXBlXCIsIHRoaXMuYmlsbGluZ190b2tlbl90eXBlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2FyZF90eXBlXCIsIHRoaXMuY2FyZF90eXBlKTtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKFwiY2FyZF9udW1iZXJcIiwgdGhpcy5jYXJkX251bWJlcik7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImNhcmRfbmFtZVwiLCB0aGlzLmNhcmRfbmFtZSk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImN2dlwiLCB0aGlzLmN2dik7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImV4cF9tb250aFwiLCB0aGlzLmV4cF9tb250aCk7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcImV4cF95ZWFyXCIsIHRoaXMuZXhwX3llYXIpO1xyXG5cclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdCh1cmwsIGZvcm1EYXRhLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbXlwcm9maWxlXCI7XHJcbiAgICAgICAgICAvLyAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgIGlmIChlcnIucmVzcG9uc2Uuc3RhdHVzID09IDQwMCkge1xyXG4gICAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICAgIGFyci5wdXNoKGVyci5yZXNwb25zZS5kYXRhLmRhdGFfbWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShhcnIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhzaGl0KTtcclxuICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJzaG93RXJyb3JNZXNzYWdlXCIsIGVycm9ycyk7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xyXG4gICAgICB0aGlzLnllYXJzLnB1c2goY3VycmVudFllYXIgKyBpbmRleCk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IDEyOyBpbmRleCsrKSB7XHJcbiAgICAgIHRoaXMubW9udGhzLnB1c2goaW5kZXgpO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ucy11c2VyLXR5cGUge1xyXG4gIC5tZC1yYWRpbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4ubXktc2VsZWN0IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucy11c2VyLXR5cGUgLm1kLXJhZGlvW2RhdGEtdi0wNmI1OGYyNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm15LXNlbGVjdFtkYXRhLXYtMDZiNThmMjRdIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgYm9yZGVyLXRvcDogMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDBweDtcXG4gIGJvcmRlci1yaWdodDogMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkSG9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2YjU4ZjI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmI1OGYyNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DYXJkSG9sZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA2YjU4ZjI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNoYW5nZSA9PSB0cnVlID8gXCJib3JkZXIgYm9yZGVyLWluZm8gcC0yXCIgOiBcIlwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIlxcbiAgICBCaWxsaW5nIENhcmQgSW5mb3JtYXRpb25cXG4gICAgXCIpLFxuICAgICAgICAgIF92bS5jaGFuZ2UgPT0gZmFsc2VcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInN1Y2Nlc3NcIiwgc2l6ZTogXCJzbVwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VCaWxsaW5nSW5mbygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaGFuZ2VcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uY2hhbmdlID09IHRydWVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiLCBzaXplOiBcInNtXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLkNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiLCBtYXJnaW5lOiBcIjBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJCaWxsaW5nIFR5cGVcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJpbGxpbmdfdG9rZW5fdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiaWxsaW5nX3Rva2VuX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIG15LXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNoYW5nZSA9PSB0cnVlIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF92bS5iaWxsaW5nX3Rva2VuX3R5cGUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbX3ZtLl92KFwiQ0NcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMlwiIH0gfSwgW192bS5fdihcIkFDSFwiKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5iaWxsaW5nX3Rva2VuX3R5cGUgPT09IFwiMVwiXG4gICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IHBhZGRpbmc6IFwiMHB4XCIsIG1hcmdpbmU6IFwiMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhcmQgVHlwZVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNhcmRfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2FyZF90eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBteS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FyZF90eXBlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjFcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBbWVyaWNhbiBFeHByZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNjb3ZlclwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWFzdGVyY2FyZFwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCI0XCIgfSB9LCBbX3ZtLl92KFwiVmlzYVwiKV0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uYmlsbGluZ190b2tlbl90eXBlID09PSBcIjJcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IG1kOiBcIjEyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IHBhZGRpbmc6IFwiMHB4XCIsIG1hcmdpbmU6IFwiMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBY2NvdW50IFR5cGVcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNoX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2hfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjaF90eXBlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCIxXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNhdmluZ3NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDaGVja2luZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gXCIyXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCIxMlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjBweFwiLCBtYXJnaW5lOiBcIjBweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWNjb3VudCBIb2xkZXIgVHlwZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY2hfYWNjX2hvbGRlcl90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNoX2FjY19ob2xkZXJfdHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgbXktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFjaF9hY2NfaG9sZGVyX3R5cGUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIjBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUGVyc29uYWxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwiMVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJCdXNpbmVzc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gXCIxXCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOYW1lIGluIHRoZSBjYXJkXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiAhX3ZtLmNoYW5nZSA9PSB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXJkX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcmRfbmFtZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXJkX25hbWVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJDcmVkaXQgQ2FyZCBOdW1iZXJcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jYXJkX251bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNhcmRfbnVtYmVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjYXJkX251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWN1cml0eSBDb2RlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3Z2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3Z2ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdnZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jaGFuZ2UgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibS0wXCIgfSwgW192bS5fdihcIkV4cGlyYXRpb24gRGF0ZVwiKV0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGFuZ2UgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItcm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IG1kOiBcIjZcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbmU6IFwiMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb250aFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5leHBfbW9udGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJleHBfbW9udGhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBteS1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmV4cF9tb250aCA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ubW9udGhzLCBmdW5jdGlvbihtb250aCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IG1vbnRoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobW9udGgpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYi1jb2xcIiwgeyBhdHRyczogeyBtZDogXCI2XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5lOiBcIjBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiWWVhclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5leHBfeWVhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4cF95ZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5leHBfeWVhciA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ueWVhcnMsIGZ1bmN0aW9uKHllYXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgZG9tUHJvcHM6IHsgdmFsdWU6IHllYXIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyh5ZWFyKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmJpbGxpbmdfdG9rZW5fdHlwZSA9PT0gXCIyXCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJBY2NvdW50IE51bWJlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogIV92bS5jaGFuZ2UgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWNoX2FjY291bnRfbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2hfYWNjb3VudF9udW1iZXIgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWNoX2FjY291bnRfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlJvdXRpbmdcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6ICFfdm0uY2hhbmdlID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjaF9yb3V0aW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY2hfcm91dGluZyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY2hfcm91dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jaGFuZ2UgPT0gdHJ1ZVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCIxMlwiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcInN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZUNoYW5nZXMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmUgQ2hhbmdlc1wiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDZiNThmMjQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZiNThmMjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwNmI1OGYyNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDZiNThmMjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDZiNThmMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDZiNThmMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YjU4ZjI0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2YjU4ZjI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQ2FyZEhvbGRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ2FyZEhvbGRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNmI1OGYyNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDZiNThmMjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NhcmRIb2xkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2YjU4ZjI0JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=