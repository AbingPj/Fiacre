(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/adminOrgProductsSub"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _errorClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errorClass */ "./resources/js/backend/errorClass.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueTwoDatePicker: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"],
    VueTwoDatePicker2: vue2_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ["prod", "propday", "propstart", "propend", "proplimit"],
  created: function created() {
    this.start = this.propstart;
    this.end = this.propend;

    if (this.propday) {
      this.day = this.propday;
    }

    this.limit = this.proplimit;
  },
  data: function data() {
    return {
      start: null,
      end: null,
      day: 1,
      limit: null,
      startDayConfig: null,
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
  },
  methods: {
    radioClick: function radioClick() {
      this.start = null;
      this.end = null;
    },
    saveChanges: function saveChanges() {
      var _this = this;

      var data = {
        start: this.start,
        end: this.end,
        product_id: this.prod.id,
        day: this.day,
        limit: this.limit
      };
      axios.post("/admin/org/products/saveSubscription", data).then(function (res) {
        window.location.href = "/admin/org/products"; // alert("Success");
      })["catch"](function (err) {
        console.error(err);

        if (err.response) {
          if (err.response.status == 422) {
            _this.errors.record(err.response.data.errors);

            _this.showErrorMessage(_this.errors.getArrayOfMessages());

            window.scrollTo(0, 0);
          } else {
            _this.showErrorMessage(["Something Went Wrong."]);

            window.scrollTo(0, 0);
          }
        } else {
          _this.showErrorMessage(["Something Went Wrong."]);

          window.scrollTo(0, 0);
        }
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },
    addDays: function addDays(days) {
      var result = new Date(); // console.log({result});

      result.setDate(result.getDate() + days);
      return result;
    },
    setEndToNull: function setEndToNull(data) {
      // console.log(data);
      // console.log("change");
      this.end = null;
    },
    addDays7daysFromStart: function addDays7daysFromStart() {
      var result = new Date(this.start); // console.log({ result });

      result.setDate(result.getDate() + 7);
      return result;
    },
    startDisabledDays: function startDisabledDays(date) {
      var today = this.addDays(1);
      today.setHours(0, 0, 0, 0);
      var day = new Date(date).getDay();

      if (this.day == "1") {
        return date < today || day === 0 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "2") {
        return date < today || day === 0 || day === 1 || day === 3 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "3") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "4") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 5 || day === 6;
      } else if (this.day == "5") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 4 || day === 6;
      } else if (this.day == "6") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 4 || day === 5;
      } else {
        return date < today || day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6;
      }
    },
    endDisabledDays: function endDisabledDays(date) {
      var today = this.addDays7daysFromStart();
      today.setHours(0, 0, 0, 0);
      var day = new Date(date).getDay();

      if (this.day == "1") {
        return date < today || day === 0 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "2") {
        return date < today || day === 0 || day === 1 || day === 3 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "3") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 4 || day === 5 || day === 6;
      } else if (this.day == "4") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 5 || day === 6;
      } else if (this.day == "5") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 4 || day === 6;
      } else if (this.day == "6") {
        return date < today || day === 0 || day === 1 || day === 2 || day === 3 || day === 4 || day === 5;
      } else {
        return date < today || day === 1 || day === 2 || day === 3 || day === 4 || day === 5 || day === 6;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-flex flex-column min-vh-100" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _c("i", { staticClass: "fas fa-boxes" }),
          _vm._v(" " + _vm._s(_vm.prod.name) + "\n\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row mt-4",
        staticStyle: { "font-family": "Source Sans Pro, sans-serif !important" }
      },
      [
        _c("div", { staticClass: "col-lg-12 col-md-12" }, [
          _c(
            "div",
            [
              _c("label", { attrs: { for: "" } }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("Select day of subscription")
                  ]),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "sunday",
                          name: "day",
                          value: "0"
                        },
                        domProps: { checked: _vm._q(_vm.day, "0") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "0"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "sunday" }
                        },
                        [_vm._v("Sunday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "monday",
                          name: "day",
                          value: "1"
                        },
                        domProps: { checked: _vm._q(_vm.day, "1") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "1"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "monday" }
                        },
                        [_vm._v("Monday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "tuesday",
                          name: "day",
                          value: "2"
                        },
                        domProps: { checked: _vm._q(_vm.day, "2") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "2"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "tuesday" }
                        },
                        [_vm._v("Tuesday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "wednesday",
                          name: "day",
                          value: "3"
                        },
                        domProps: { checked: _vm._q(_vm.day, "3") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "3"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "wednesday" }
                        },
                        [_vm._v("Wednesday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "thurdsay",
                          name: "day",
                          value: "4"
                        },
                        domProps: { checked: _vm._q(_vm.day, "4") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "4"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "thurdsay" }
                        },
                        [_vm._v("Thursday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "friday",
                          name: "day",
                          value: "5"
                        },
                        domProps: { checked: _vm._q(_vm.day, "5") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "5"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "friday" }
                        },
                        [_vm._v("Friday")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "custom-control custom-radio custom-control-inline"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.day,
                            expression: "day"
                          }
                        ],
                        staticClass: "custom-control-input",
                        attrs: {
                          type: "radio",
                          id: "saturday",
                          name: "day",
                          value: "6"
                        },
                        domProps: { checked: _vm._q(_vm.day, "6") },
                        on: {
                          click: function($event) {
                            return _vm.radioClick()
                          },
                          change: function($event) {
                            _vm.day = "6"
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "label",
                        {
                          staticClass: "custom-control-label",
                          attrs: { for: "saturday" }
                        },
                        [_vm._v("Saturday")]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("Start Date")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("VueTwoDatePicker", {
                attrs: {
                  id: "1",
                  format: "YYYY-MM-DD",
                  type: "date",
                  placeholder: "Select date",
                  valueType: "format",
                  "default-value": _vm.addDays(1),
                  "disabled-date": _vm.startDisabledDays
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.setEndToNull()
                  }
                },
                model: {
                  value: _vm.start,
                  callback: function($$v) {
                    _vm.start = $$v
                  },
                  expression: "start"
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [_vm._v("End Date")]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("VueTwoDatePicker2", {
                attrs: {
                  id: "2",
                  format: "YYYY-MM-DD",
                  type: "date",
                  placeholder: "Select date",
                  valueType: "format",
                  "default-value": _vm.addDays7daysFromStart(),
                  "disabled-date": _vm.endDisabledDays
                },
                model: {
                  value: _vm.end,
                  callback: function($$v) {
                    _vm.end = $$v
                  },
                  expression: "end"
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("label", { attrs: { for: "" } }, [
                _vm._v("Number of Subscription Limit")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.limit,
                    expression: "limit"
                  }
                ],
                staticClass: "form-control",
                staticStyle: { width: "200px !important" },
                attrs: { type: "number" },
                domProps: { value: _vm.limit },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.limit = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function($event) {
                      return _vm.saveChanges()
                    }
                  }
                },
                [_vm._v("\n\t\t\t\t\tsave changes\n\t\t\t\t")]
              )
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/subcription.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/subcription.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subcription.vue?vue&type=template&id=855118b0& */ "./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0&");
/* harmony import */ var _subcription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subcription.vue?vue&type=script&lang=js& */ "./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _subcription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/admin-org-components/products/subcription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subcription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subcription.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_subcription_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./subcription.vue?vue&type=template&id=855118b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/subcription.vue?vue&type=template&id=855118b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_subcription_vue_vue_type_template_id_855118b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/errorClass.js":
/*!********************************************!*\
  !*** ./resources/js/backend/errorClass.js ***!
  \********************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZHVjdHMvc3ViY3JpcHRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL3N1YmNyaXB0aW9uLnZ1ZT9jMTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL3N1YmNyaXB0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9zdWJjcmlwdGlvbi52dWU/ODNlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9zdWJjcmlwdGlvbi52dWU/ZTk4MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxHQURBO0FBRUEsaUVBRkE7QUFHQSxTQUhBLHFCQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxHQVZBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxlQUZBO0FBR0EsWUFIQTtBQUlBLGlCQUpBO0FBS0EsMEJBTEE7QUFNQTtBQU5BO0FBUUEsR0FwQkE7QUFzQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxlQUxBLHlCQUtBO0FBQUE7O0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsZ0NBSEE7QUFJQSxxQkFKQTtBQUtBO0FBTEE7QUFPQSxZQUNBLElBREEsQ0FDQSxzQ0FEQSxFQUNBLElBREEsRUFFQSxJQUZBLENBRUE7QUFDQSxxREFEQSxDQUVBO0FBQ0EsT0FMQSxXQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsV0FKQSxNQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBVEEsTUFTQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQXRCQTtBQXVCQSxLQXBDQTtBQXFDQSxvQkFyQ0EsNEJBcUNBLE1BckNBLEVBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBO0FBeUNBLFdBekNBLG1CQXlDQSxJQXpDQSxFQXlDQTtBQUNBLDhCQURBLENBRUE7O0FBQ0E7QUFDQTtBQUNBLEtBOUNBO0FBK0NBLGdCQS9DQSx3QkErQ0EsSUEvQ0EsRUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5EQTtBQW9EQSx5QkFwREEsbUNBb0RBO0FBQ0Esd0NBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0EsS0F6REE7QUEwREEscUJBMURBLDZCQTBEQSxJQTFEQSxFQTBEQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0E7QUFDQSxLQXJJQTtBQXNJQSxtQkF0SUEsMkJBc0lBLElBdElBLEVBc0lBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQTtBQUNBO0FBak5BO0FBdEJBLEc7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkUsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25ELG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixPQUFPO0FBQ1A7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRCwyQkFBMkIsNEJBQTRCO0FBQ3ZELCtCQUErQixTQUFTLGNBQWMsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsVUFBVSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELHdCQUF3QixpQkFBaUI7QUFDekMsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JkQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUJBLE07QUFDakIsb0JBQWM7QUFBQTs7QUFDVixTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNIOzs7O3dCQUVHQyxLLEVBQU87QUFDUDtBQUNBLFVBQUksS0FBS0QsTUFBTCxDQUFZQyxLQUFaLENBQUosRUFBd0I7QUFDcEIsZUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosRUFBbUIsQ0FBbkIsQ0FBUDtBQUNIO0FBQ0o7OzsyQkFFTUQsTSxFQUFRO0FBQ1gsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7OzswQkFFS0MsSyxFQUFPO0FBQ1QsYUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBUDtBQUNIOzs7d0JBRUdBLEssRUFBTztBQUNQLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxjQUFaLENBQTJCRCxLQUEzQixDQUFQO0FBQ0g7OztxQ0FFZ0I7QUFDYixVQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLGlDQUFrQkssSUFBbEIsMkJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsWUFBVDtBQUNESixhQUFHLEdBQUdBLEdBQUcsR0FBRyxLQUFLSyxHQUFMLENBQVNELEdBQVQsQ0FBWjtBQUNBLFdBQUMsSUFBRDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0osR0FBUDtBQUNIOzs7eUNBRW9CO0FBQ2pCLFVBQUlNLEdBQUcsR0FBRyxFQUFWOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUFsQyxJQUF1QyxJQUEzQyxFQUFpRDtBQUM3QyxZQUFNRCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLENBQWI7O0FBQ0EsbUNBQWtCSyxJQUFsQiw4QkFBd0I7QUFBbkIsY0FBTUUsR0FBRyxjQUFUO0FBQ0Q7QUFDQTtBQUNBO0FBQ0FFLGFBQUcsQ0FBQ0MsSUFBSixDQUFTLEtBQUtGLEdBQUwsQ0FBU0QsR0FBVCxDQUFUO0FBQ0g7QUFDSjs7QUFDRCxhQUFPRSxHQUFQO0FBQ0g7OzswQkFFSztBQUNGLGFBQU9MLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUF6QztBQUNIIiwiZmlsZSI6ImpzL2IvYWRtaW5PcmdQcm9kdWN0c1N1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtYm94ZXNcIj48L2k+IHt7IHByb2QubmFtZSB9fVxuXHRcdFx0XHQ8L2gyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cInJvdyBtdC00XCJcblx0XHRcdHN0eWxlPVwiZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+U2VsZWN0IGRheSBvZiBzdWJzY3JpcHRpb248L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInN1bmRheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIwXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwic3VuZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdD5TdW5kYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm1vbmRheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwibW9uZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdD5Nb25kYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInR1ZXNkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJyYWRpb0NsaWNrKClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImRheVwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cInR1ZXNkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlR1ZXNkYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIndlZG5lc2RheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIzXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwid2VkbmVzZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdD5XZWRuZXNkYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInRodXJkc2F5XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIjRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmFkaW9DbGljaygpXCJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ0aHVyZHNheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+VGh1cnNkYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cImZyaWRheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCI1XCJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwiZnJpZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdD5GcmlkYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInNhdHVyZGF5XCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIjZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmFkaW9DbGljaygpXCJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJkYXlcIlxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJzYXR1cmRheVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+U2F0dXJkYXk8L2xhYmVsXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIlwiPlN0YXJ0IERhdGU8L2xhYmVsPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxWdWVUd29EYXRlUGlja2VyXG5cdFx0XHRcdFx0XHRpZD1cIjFcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInN0YXJ0XCJcblx0XHRcdFx0XHRcdGZvcm1hdD1cIllZWVktTU0tRERcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImRhdGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWxlY3QgZGF0ZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZVR5cGU9XCJmb3JtYXRcIlxuXHRcdFx0XHRcdFx0OmRlZmF1bHQtdmFsdWU9XCJhZGREYXlzKDEpXCJcblx0XHRcdFx0XHRcdEBjbGljay5uYXRpdmU9XCJzZXRFbmRUb051bGwoKVwiXG5cdFx0XHRcdFx0XHQ6ZGlzYWJsZWQtZGF0ZT1cInN0YXJ0RGlzYWJsZWREYXlzXCJcblx0XHRcdFx0XHQ+PC9WdWVUd29EYXRlUGlja2VyPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJcIj5FbmQgRGF0ZTwvbGFiZWw+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PFZ1ZVR3b0RhdGVQaWNrZXIyXG5cdFx0XHRcdFx0XHRpZD1cIjJcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImVuZFwiXG5cdFx0XHRcdFx0XHRmb3JtYXQ9XCJZWVlZLU1NLUREXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VsZWN0IGRhdGVcIlxuXHRcdFx0XHRcdFx0dmFsdWVUeXBlPVwiZm9ybWF0XCJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LXZhbHVlPVwiYWRkRGF5czdkYXlzRnJvbVN0YXJ0KClcIlxuXHRcdFx0XHRcdFx0OmRpc2FibGVkLWRhdGU9XCJlbmREaXNhYmxlZERheXNcIlxuXHRcdFx0XHRcdD48L1Z1ZVR3b0RhdGVQaWNrZXIyPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJcIj5OdW1iZXIgb2YgU3Vic2NyaXB0aW9uIExpbWl0PC9sYWJlbD5cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJsaW1pdFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbFwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyMDBweCAhaW1wb3J0YW50XCJcblx0XHRcdFx0XHRcdHR5cGU9XCJudW1iZXJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIEBjbGljaz1cInNhdmVDaGFuZ2VzKClcIj5cblx0XHRcdFx0XHRcdHNhdmUgY2hhbmdlc1xuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJ2dWUyLWRhdGVwaWNrZXJcIjtcblx0aW1wb3J0IFwidnVlMi1kYXRlcGlja2VyL2luZGV4LmNzc1wiO1xuXHRpbXBvcnQgRXJyb3JzIGZyb20gXCIuLi8uLi9lcnJvckNsYXNzXCI7XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRjb21wb25lbnRzOiB7IFZ1ZVR3b0RhdGVQaWNrZXI6IERhdGVQaWNrZXIsIFZ1ZVR3b0RhdGVQaWNrZXIyOiBEYXRlUGlja2VyIH0sXG5cdFx0cHJvcHM6IFtcInByb2RcIiwgXCJwcm9wZGF5XCIsIFwicHJvcHN0YXJ0XCIsIFwicHJvcGVuZFwiLCBcInByb3BsaW1pdFwiXSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0dGhpcy5zdGFydCA9IHRoaXMucHJvcHN0YXJ0O1xuXHRcdFx0dGhpcy5lbmQgPSB0aGlzLnByb3BlbmQ7XG5cdFx0XHRpZiAodGhpcy5wcm9wZGF5KSB7XG5cdFx0XHRcdHRoaXMuZGF5ID0gdGhpcy5wcm9wZGF5O1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5saW1pdCA9IHRoaXMucHJvcGxpbWl0O1xuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXJ0OiBudWxsLFxuXHRcdFx0XHRlbmQ6IG51bGwsXG5cdFx0XHRcdGRheTogMSxcblx0XHRcdFx0bGltaXQ6IG51bGwsXG5cdFx0XHRcdHN0YXJ0RGF5Q29uZmlnOiBudWxsLFxuXHRcdFx0XHRlcnJvcnM6IG5ldyBFcnJvcnMoKSxcblx0XHRcdH07XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJhZGlvQ2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuc3RhcnQgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmVuZCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0c2F2ZUNoYW5nZXMoKSB7XG5cdFx0XHRcdHZhciBkYXRhID0ge1xuXHRcdFx0XHRcdHN0YXJ0OiB0aGlzLnN0YXJ0LFxuXHRcdFx0XHRcdGVuZDogdGhpcy5lbmQsXG5cdFx0XHRcdFx0cHJvZHVjdF9pZDogdGhpcy5wcm9kLmlkLFxuXHRcdFx0XHRcdGRheTogdGhpcy5kYXksXG5cdFx0XHRcdFx0bGltaXQ6IHRoaXMubGltaXQsXG5cdFx0XHRcdH07XG5cdFx0XHRcdGF4aW9zXG5cdFx0XHRcdFx0LnBvc3QoXCIvYWRtaW4vb3JnL3Byb2R1Y3RzL3NhdmVTdWJzY3JpcHRpb25cIiwgZGF0YSlcblx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAvYWRtaW4vb3JnL3Byb2R1Y3RzYDtcblx0XHRcdFx0XHRcdC8vIGFsZXJ0KFwiU3VjY2Vzc1wiKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cblx0XHRcdFx0XHRcdGlmIChlcnIucmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93RXJyb3JNZXNzYWdlKHRoaXMuZXJyb3JzLmdldEFycmF5T2ZNZXNzYWdlcygpKTtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShbXCJTb21ldGhpbmcgV2VudCBXcm9uZy5cIl0pO1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdFx0XHR9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoW1wiU29tZXRoaW5nIFdlbnQgV3JvbmcuXCJdKTtcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XG5cdFx0XHRcdC8vICAgY29uc29sZS5sb2coc2hpdCk7XG5cdFx0XHRcdHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xuXHRcdFx0fSxcblx0XHRcdGFkZERheXMoZGF5cykge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbmV3IERhdGUoKTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coe3Jlc3VsdH0pO1xuXHRcdFx0XHRyZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0c2V0RW5kVG9OdWxsKGRhdGEpIHtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coZGF0YSk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlXCIpO1xuXHRcdFx0XHR0aGlzLmVuZCA9IG51bGw7XG5cdFx0XHR9LFxuXHRcdFx0YWRkRGF5czdkYXlzRnJvbVN0YXJ0KCkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbmV3IERhdGUodGhpcy5zdGFydCk7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHsgcmVzdWx0IH0pO1xuXHRcdFx0XHRyZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgNyk7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9LFxuXHRcdFx0c3RhcnREaXNhYmxlZERheXMoZGF0ZSkge1xuXHRcdFx0XHRjb25zdCB0b2RheSA9IHRoaXMuYWRkRGF5cygxKTtcblx0XHRcdFx0dG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cdFx0XHRcdGNvbnN0IGRheSA9IG5ldyBEYXRlKGRhdGUpLmdldERheSgpO1xuXHRcdFx0XHRpZiAodGhpcy5kYXkgPT0gXCIxXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjJcIikge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiM1wiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gXCI0XCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjVcIikge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiNlwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRlbmREaXNhYmxlZERheXMoZGF0ZSkge1xuXHRcdFx0XHRjb25zdCB0b2RheSA9IHRoaXMuYWRkRGF5czdkYXlzRnJvbVN0YXJ0KCk7XG5cdFx0XHRcdHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXHRcdFx0XHRjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXkoKTtcblx0XHRcdFx0aWYgKHRoaXMuZGF5ID09IFwiMVwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gXCIyXCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjNcIikge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiNFwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gXCI1XCIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjZcIikge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDVcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdH0sXG5cdH07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWJveGVzXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5wcm9kLm5hbWUpICsgXCJcXG5cXHRcXHRcXHRcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgbXQtNFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3QgZGF5IG9mIHN1YnNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInN1bmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLmRheSwgXCIwXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yYWRpb0NsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF5ID0gXCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJzdW5kYXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlN1bmRheVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJtb25kYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLl9xKF92bS5kYXksIFwiMVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmFkaW9DbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRheSA9IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwibW9uZGF5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb25kYXlcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidHVlc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLmRheSwgXCIyXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yYWRpb0NsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF5ID0gXCIyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ0dWVzZGF5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUdWVzZGF5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIndlZG5lc2RheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLmRheSwgXCIzXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yYWRpb0NsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF5ID0gXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ3ZWRuZXNkYXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIldlZG5lc2RheVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0aHVyZHNheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLmRheSwgXCI0XCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yYWRpb0NsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF5ID0gXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ0aHVyZHNheVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGh1cnNkYXlcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZnJpZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjVcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImZyaWRheVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRnJpZGF5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInNhdHVyZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjZcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInNhdHVyZGF5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXR1cmRheVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCJTdGFydCBEYXRlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiVnVlVHdvRGF0ZVBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgIGZvcm1hdDogXCJZWVlZLU1NLUREXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlbGVjdCBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZVR5cGU6IFwiZm9ybWF0XCIsXG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtdmFsdWVcIjogX3ZtLmFkZERheXMoMSksXG4gICAgICAgICAgICAgICAgICBcImRpc2FibGVkLWRhdGVcIjogX3ZtLnN0YXJ0RGlzYWJsZWREYXlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldEVuZFRvTnVsbCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdGFydCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YXJ0ID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdGFydFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCJFbmQgRGF0ZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcIlZ1ZVR3b0RhdGVQaWNrZXIyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiMlwiLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IGRhdGVcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdC12YWx1ZVwiOiBfdm0uYWRkRGF5czdkYXlzRnJvbVN0YXJ0KCksXG4gICAgICAgICAgICAgICAgICBcImRpc2FibGVkLWRhdGVcIjogX3ZtLmVuZERpc2FibGVkRGF5c1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW5kLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZW5kID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbmRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiTnVtYmVyIG9mIFN1YnNjcmlwdGlvbiBMaW1pdFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImxpbWl0XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwMHB4ICFpbXBvcnRhbnRcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmxpbWl0IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxpbWl0ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlQ2hhbmdlcygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRzYXZlIGNoYW5nZXNcXG5cXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTUxMThiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zdWJjcmlwdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODU1MTE4YjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODU1MTE4YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODU1MTE4YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTUxMThiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NTUxMThiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZHVjdHMvc3ViY3JpcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdWJjcmlwdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3ViY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTUxMThiMCZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGlzIGZpZWxkXCIgKyBmaWVsZClcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgK1wiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGdldEFycmF5T2ZNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIC8vICAgbXNnOiB0aGlzLmdldChrZXkpLFxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9