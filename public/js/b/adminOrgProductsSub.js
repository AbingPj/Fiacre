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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZHVjdHMvc3ViY3JpcHRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL3N1YmNyaXB0aW9uLnZ1ZT9jMTQzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL3N1YmNyaXB0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9zdWJjcmlwdGlvbi52dWU/ODNlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9zdWJjcmlwdGlvbi52dWU/ZTk4MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQSxHQURBO0FBRUEsaUVBRkE7QUFHQSxTQUhBLHFCQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxHQVZBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxlQUZBO0FBR0EsWUFIQTtBQUlBLGlCQUpBO0FBS0EsMEJBTEE7QUFNQTtBQU5BO0FBUUEsR0FwQkE7QUFzQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxlQUxBLHlCQUtBO0FBQUE7O0FBQ0E7QUFDQSx5QkFEQTtBQUVBLHFCQUZBO0FBR0EsZ0NBSEE7QUFJQSxxQkFKQTtBQUtBO0FBTEE7QUFPQSxZQUNBLElBREEsQ0FDQSxzQ0FEQSxFQUNBLElBREEsRUFFQSxJQUZBLENBRUE7QUFDQSxxREFEQSxDQUVBO0FBQ0EsT0FMQSxXQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsV0FKQSxNQUlBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBVEEsTUFTQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxPQXRCQTtBQXVCQSxLQXBDQTtBQXFDQSxvQkFyQ0EsNEJBcUNBLE1BckNBLEVBcUNBO0FBQ0E7QUFDQTtBQUNBLEtBeENBO0FBeUNBLFdBekNBLG1CQXlDQSxJQXpDQSxFQXlDQTtBQUNBLDhCQURBLENBRUE7O0FBQ0E7QUFDQTtBQUNBLEtBOUNBO0FBK0NBLGdCQS9DQSx3QkErQ0EsSUEvQ0EsRUErQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQW5EQTtBQW9EQSx5QkFwREEsbUNBb0RBO0FBQ0Esd0NBREEsQ0FFQTs7QUFDQTtBQUNBO0FBQ0EsS0F6REE7QUEwREEscUJBMURBLDZCQTBEQSxJQTFEQSxFQTBEQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0E7QUFDQSxLQXJJQTtBQXNJQSxtQkF0SUEsMkJBc0lBLElBdElBLEVBc0lBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQSxPQVZBLE1BVUE7QUFDQSxlQUNBLGdCQUNBLFNBREEsSUFFQSxTQUZBLElBR0EsU0FIQSxJQUlBLFNBSkEsSUFLQSxTQUxBLElBTUEsU0FQQTtBQVNBLE9BVkEsTUFVQTtBQUNBLGVBQ0EsZ0JBQ0EsU0FEQSxJQUVBLFNBRkEsSUFHQSxTQUhBLElBSUEsU0FKQSxJQUtBLFNBTEEsSUFNQSxTQVBBO0FBU0EsT0FWQSxNQVVBO0FBQ0EsZUFDQSxnQkFDQSxTQURBLElBRUEsU0FGQSxJQUdBLFNBSEEsSUFJQSxTQUpBLElBS0EsU0FMQSxJQU1BLFNBUEE7QUFTQTtBQUNBO0FBak5BO0FBdEJBLEc7Ozs7Ozs7Ozs7OztBQzdMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkUsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25ELG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixPQUFPO0FBQ1A7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRCwyQkFBMkIsNEJBQTRCO0FBQ3ZELCtCQUErQixTQUFTLGNBQWMsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsZ0NBQWdDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFNBQVMsVUFBVSxFQUFFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsU0FBUyxVQUFVLEVBQUU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixTQUFTLFVBQVUsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNEJBQTRCO0FBQzFELHdCQUF3QixpQkFBaUI7QUFDekMsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JkQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBcUJBLE07QUFDakIsb0JBQWM7QUFBQTs7QUFDVixTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNIOzs7O3dCQUVHQyxLLEVBQU87QUFDUDtBQUNBLFVBQUksS0FBS0QsTUFBTCxDQUFZQyxLQUFaLENBQUosRUFBd0I7QUFDcEIsZUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosRUFBbUIsQ0FBbkIsQ0FBUDtBQUNIO0FBQ0o7OzsyQkFFTUQsTSxFQUFRO0FBQ1gsV0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7OzswQkFFS0MsSyxFQUFPO0FBQ1QsYUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBUDtBQUNIOzs7d0JBRUdBLEssRUFBTztBQUNQLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxjQUFaLENBQTJCRCxLQUEzQixDQUFQO0FBQ0g7OztxQ0FFZ0I7QUFDYixVQUFJRSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJQyxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLGlDQUFrQkssSUFBbEIsMkJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsWUFBVDtBQUNESixhQUFHLEdBQUdBLEdBQUcsR0FBRyxLQUFLSyxHQUFMLENBQVNELEdBQVQsQ0FBWjtBQUNBLFdBQUMsSUFBRDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0osR0FBUDtBQUNIOzs7eUNBRW9CO0FBQ2pCLFVBQUlNLEdBQUcsR0FBRyxFQUFWOztBQUNBLFVBQUlMLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUFsQyxJQUF1QyxJQUEzQyxFQUFpRDtBQUM3QyxZQUFNRCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLENBQWI7O0FBQ0EsbUNBQWtCSyxJQUFsQiw4QkFBd0I7QUFBbkIsY0FBTUUsR0FBRyxjQUFUO0FBQ0Q7QUFDQTtBQUNBO0FBQ0FFLGFBQUcsQ0FBQ0MsSUFBSixDQUFTLEtBQUtGLEdBQUwsQ0FBU0QsR0FBVCxDQUFUO0FBQ0g7QUFDSjs7QUFDRCxhQUFPRSxHQUFQO0FBQ0g7OzswQkFFSztBQUNGLGFBQU9MLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUF6QztBQUNIIiwiZmlsZSI6ImpzL2IvYWRtaW5PcmdQcm9kdWN0c1N1Yi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG48dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtYm94ZXNcIj48L2k+IHt7IHByb2QubmFtZSB9fVxyXG5cdFx0XHRcdDwvaDI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzcz1cInJvdyBtdC00XCJcclxuXHRcdFx0c3R5bGU9XCJmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5TZWxlY3QgZGF5IG9mIHN1YnNjcmlwdGlvbjwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzdW5kYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwic3VuZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlN1bmRheTwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cIm1vbmRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIxXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmFkaW9DbGljaygpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJtb25kYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+TW9uZGF5PC9sYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwidHVlc2RheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCIyXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmFkaW9DbGljaygpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ0dWVzZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlR1ZXNkYXk8L2xhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJ3ZWRuZXNkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPVwiM1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cInJhZGlvQ2xpY2soKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwid2VkbmVzZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PldlZG5lc2RheTwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZD1cInRodXJkc2F5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIjRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJyYWRpb0NsaWNrKClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cInRodXJkc2F5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlRodXJzZGF5PC9sYWJlbFxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiZnJpZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT1cIjVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJyYWRpb0NsaWNrKClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZGF5XCJcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImZyaWRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5GcmlkYXk8L2xhYmVsXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJzYXR1cmRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkYXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9XCI2XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicmFkaW9DbGljaygpXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJzYXR1cmRheVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdD5TYXR1cmRheTwvbGFiZWxcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJcIj5TdGFydCBEYXRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PFZ1ZVR3b0RhdGVQaWNrZXJcclxuXHRcdFx0XHRcdFx0aWQ9XCIxXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cInN0YXJ0XCJcclxuXHRcdFx0XHRcdFx0Zm9ybWF0PVwiWVlZWS1NTS1ERFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJkYXRlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWxlY3QgZGF0ZVwiXHJcblx0XHRcdFx0XHRcdHZhbHVlVHlwZT1cImZvcm1hdFwiXHJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LXZhbHVlPVwiYWRkRGF5cygxKVwiXHJcblx0XHRcdFx0XHRcdEBjbGljay5uYXRpdmU9XCJzZXRFbmRUb051bGwoKVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZC1kYXRlPVwic3RhcnREaXNhYmxlZERheXNcIlxyXG5cdFx0XHRcdFx0PjwvVnVlVHdvRGF0ZVBpY2tlcj5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiXCI+RW5kIERhdGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8VnVlVHdvRGF0ZVBpY2tlcjJcclxuXHRcdFx0XHRcdFx0aWQ9XCIyXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImVuZFwiXHJcblx0XHRcdFx0XHRcdGZvcm1hdD1cIllZWVktTU0tRERcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZGF0ZVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VsZWN0IGRhdGVcIlxyXG5cdFx0XHRcdFx0XHR2YWx1ZVR5cGU9XCJmb3JtYXRcIlxyXG5cdFx0XHRcdFx0XHQ6ZGVmYXVsdC12YWx1ZT1cImFkZERheXM3ZGF5c0Zyb21TdGFydCgpXCJcclxuXHRcdFx0XHRcdFx0OmRpc2FibGVkLWRhdGU9XCJlbmREaXNhYmxlZERheXNcIlxyXG5cdFx0XHRcdFx0PjwvVnVlVHdvRGF0ZVBpY2tlcjI+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIlwiPk51bWJlciBvZiBTdWJzY3JpcHRpb24gTGltaXQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImxpbWl0XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyMDBweCAhaW1wb3J0YW50XCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJzYXZlQ2hhbmdlcygpXCI+XHJcblx0XHRcdFx0XHRcdHNhdmUgY2hhbmdlc1xyXG5cdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBEYXRlUGlja2VyIGZyb20gXCJ2dWUyLWRhdGVwaWNrZXJcIjtcclxuXHRpbXBvcnQgXCJ2dWUyLWRhdGVwaWNrZXIvaW5kZXguY3NzXCI7XHJcblx0aW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHsgVnVlVHdvRGF0ZVBpY2tlcjogRGF0ZVBpY2tlciwgVnVlVHdvRGF0ZVBpY2tlcjI6IERhdGVQaWNrZXIgfSxcclxuXHRcdHByb3BzOiBbXCJwcm9kXCIsIFwicHJvcGRheVwiLCBcInByb3BzdGFydFwiLCBcInByb3BlbmRcIiwgXCJwcm9wbGltaXRcIl0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5wcm9wc3RhcnQ7XHJcblx0XHRcdHRoaXMuZW5kID0gdGhpcy5wcm9wZW5kO1xyXG5cdFx0XHRpZiAodGhpcy5wcm9wZGF5KSB7XHJcblx0XHRcdFx0dGhpcy5kYXkgPSB0aGlzLnByb3BkYXk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5saW1pdCA9IHRoaXMucHJvcGxpbWl0O1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhcnQ6IG51bGwsXHJcblx0XHRcdFx0ZW5kOiBudWxsLFxyXG5cdFx0XHRcdGRheTogMSxcclxuXHRcdFx0XHRsaW1pdDogbnVsbCxcclxuXHRcdFx0XHRzdGFydERheUNvbmZpZzogbnVsbCxcclxuXHRcdFx0XHRlcnJvcnM6IG5ldyBFcnJvcnMoKSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRyYWRpb0NsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuc3RhcnQgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMuZW5kID0gbnVsbDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2F2ZUNoYW5nZXMoKSB7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB7XHJcblx0XHRcdFx0XHRzdGFydDogdGhpcy5zdGFydCxcclxuXHRcdFx0XHRcdGVuZDogdGhpcy5lbmQsXHJcblx0XHRcdFx0XHRwcm9kdWN0X2lkOiB0aGlzLnByb2QuaWQsXHJcblx0XHRcdFx0XHRkYXk6IHRoaXMuZGF5LFxyXG5cdFx0XHRcdFx0bGltaXQ6IHRoaXMubGltaXQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LnBvc3QoXCIvYWRtaW4vb3JnL3Byb2R1Y3RzL3NhdmVTdWJzY3JpcHRpb25cIiwgZGF0YSlcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FkbWluL29yZy9wcm9kdWN0c2A7XHJcblx0XHRcdFx0XHRcdC8vIGFsZXJ0KFwiU3VjY2Vzc1wiKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoZXJyLnJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVyci5yZXNwb25zZS5zdGF0dXMgPT0gNDIyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoW1wiU29tZXRoaW5nIFdlbnQgV3JvbmcuXCJdKTtcclxuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoW1wiU29tZXRoaW5nIFdlbnQgV3JvbmcuXCJdKTtcclxuXHRcdFx0XHRcdFx0XHR3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93RXJyb3JNZXNzYWdlKGVycm9ycykge1xyXG5cdFx0XHRcdC8vICAgY29uc29sZS5sb2coc2hpdCk7XHJcblx0XHRcdFx0dGhpcy4kZXZlbnRzLmZpcmUoXCJzaG93RXJyb3JNZXNzYWdlXCIsIGVycm9ycyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkZERheXMoZGF5cykge1xyXG5cdFx0XHRcdHZhciByZXN1bHQgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHtyZXN1bHR9KTtcclxuXHRcdFx0XHRyZXN1bHQuc2V0RGF0ZShyZXN1bHQuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcblx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2V0RW5kVG9OdWxsKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhcImNoYW5nZVwiKTtcclxuXHRcdFx0XHR0aGlzLmVuZCA9IG51bGw7XHJcblx0XHRcdH0sXHJcblx0XHRcdGFkZERheXM3ZGF5c0Zyb21TdGFydCgpIHtcclxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbmV3IERhdGUodGhpcy5zdGFydCk7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coeyByZXN1bHQgfSk7XHJcblx0XHRcdFx0cmVzdWx0LnNldERhdGUocmVzdWx0LmdldERhdGUoKSArIDcpO1xyXG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0RGlzYWJsZWREYXlzKGRhdGUpIHtcclxuXHRcdFx0XHRjb25zdCB0b2RheSA9IHRoaXMuYWRkRGF5cygxKTtcclxuXHRcdFx0XHR0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHRcdFx0XHRjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXkoKTtcclxuXHRcdFx0XHRpZiAodGhpcy5kYXkgPT0gXCIxXCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiMlwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjNcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gXCI0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiNVwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjZcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRlbmREaXNhYmxlZERheXMoZGF0ZSkge1xyXG5cdFx0XHRcdGNvbnN0IHRvZGF5ID0gdGhpcy5hZGREYXlzN2RheXNGcm9tU3RhcnQoKTtcclxuXHRcdFx0XHR0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuXHRcdFx0XHRjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXREYXkoKTtcclxuXHRcdFx0XHRpZiAodGhpcy5kYXkgPT0gXCIxXCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiMlwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjNcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDUgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA2XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5kYXkgPT0gXCI0XCIpIHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdGRhdGUgPCB0b2RheSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDAgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuZGF5ID09IFwiNVwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAwIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDIgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAzIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmRheSA9PSBcIjZcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0ZGF0ZSA8IHRvZGF5IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMCB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDEgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAyIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMyB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDQgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA1XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHRkYXRlIDwgdG9kYXkgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSAxIHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gMiB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDMgfHxcclxuXHRcdFx0XHRcdFx0ZGF5ID09PSA0IHx8XHJcblx0XHRcdFx0XHRcdGRheSA9PT0gNSB8fFxyXG5cdFx0XHRcdFx0XHRkYXkgPT09IDZcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtYm94ZXNcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnByb2QubmFtZSkgKyBcIlxcblxcdFxcdFxcdFwiKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBtdC00XCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1mYW1pbHlcIjogXCJTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyIGNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBkYXkgb2Ygc3Vic2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic3VuZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjBcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInN1bmRheVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3VuZGF5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcIm1vbmRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRheVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBfdm0uX3EoX3ZtLmRheSwgXCIxXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yYWRpb0NsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGF5ID0gXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJtb25kYXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1vbmRheVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0dWVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjJcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInR1ZXNkYXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlR1ZXNkYXlcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwid2VkbmVzZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjNcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIndlZG5lc2RheVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiV2VkbmVzZGF5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8gY3VzdG9tLWNvbnRyb2wtaW5saW5lXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInRodXJkc2F5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0uZGF5LCBcIjRcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJhZGlvQ2xpY2soKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kYXkgPSBcIjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInRodXJkc2F5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUaHVyc2RheVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJyYWRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJmcmlkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLl9xKF92bS5kYXksIFwiNVwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmFkaW9DbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRheSA9IFwiNVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiZnJpZGF5XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGcmlkYXlcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2F0dXJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkYXlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgY2hlY2tlZDogX3ZtLl9xKF92bS5kYXksIFwiNlwiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmFkaW9DbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRheSA9IFwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwic2F0dXJkYXlcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdHVyZGF5XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIlN0YXJ0IERhdGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJWdWVUd29EYXRlUGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIllZWVktTU0tRERcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU2VsZWN0IGRhdGVcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZTogXCJmb3JtYXRcIixcbiAgICAgICAgICAgICAgICAgIFwiZGVmYXVsdC12YWx1ZVwiOiBfdm0uYWRkRGF5cygxKSxcbiAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWQtZGF0ZVwiOiBfdm0uc3RhcnREaXNhYmxlZERheXNcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hdGl2ZU9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0RW5kVG9OdWxsKClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc3RhcnQgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIkVuZCBEYXRlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiVnVlVHdvRGF0ZVBpY2tlcjJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCIyXCIsXG4gICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTZWxlY3QgZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlOiBcImZvcm1hdFwiLFxuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LXZhbHVlXCI6IF92bS5hZGREYXlzN2RheXNGcm9tU3RhcnQoKSxcbiAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWQtZGF0ZVwiOiBfdm0uZW5kRGlzYWJsZWREYXlzXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5lbmQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5lbmQgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImVuZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJOdW1iZXIgb2YgU3Vic2NyaXB0aW9uIExpbWl0XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubGltaXQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibGltaXRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjAwcHggIWltcG9ydGFudFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubGltaXQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0ubGltaXQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNhdmVDaGFuZ2VzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdHNhdmUgY2hhbmdlc1xcblxcdFxcdFxcdFxcdFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3ViY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg1NTExOGIwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3ViY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODU1MTE4YjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODU1MTE4YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODU1MTE4YjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTUxMThiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4NTUxMThiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZHVjdHMvc3ViY3JpcHRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdWJjcmlwdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc3ViY3JpcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1YmNyaXB0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04NTUxMThiMCZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGlzIGZpZWxkXCIgKyBmaWVsZClcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgK1wiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGdldEFycmF5T2ZNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIC8vICAgbXNnOiB0aGlzLmdldChrZXkpLFxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9