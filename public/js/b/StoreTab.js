(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/StoreTab"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["city", "state", "action", "prop_store", "prop_cities", "prop_states"],
  data: function data() {
    return {
      displayImage: "",
      store: {},
      states: [],
      cities: [],
      selectedCity: 0,
      selectedState: 0,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content")
    };
  },
  created: function created() {
    this.selectedCity = this.city;
    this.selectedState = this.state;
    this.store = this.prop_store;
    this.displayImage = this.prop_store.image_link;
    this.cities = this.prop_cities;
    this.states = this.prop_states;
  },
  computed: {
    getCities: function getCities() {
      var cities = this.cities;
      var filter = [];
      var id = this.selectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    }
  },
  methods: {
    onFileChange: function onFileChange(e) {
      //   console.log(e);
      var file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },
    statesChange: function statesChange() {
      this.selectedCity = {};
    },
    onlyNumber: function onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08& ***!
  \************************************************************************************************************************************************************************************************************************/
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
        method: "POST",
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
        attrs: { type: "hidden", name: "store_id" },
        domProps: { value: _vm.store.id }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "form-row" }, [
            _c("div", { staticClass: "form-group col-md-4" }, [
              _c(
                "label",
                {
                  staticClass: "font-weight-bold",
                  attrs: { for: "image_path" }
                },
                [_vm._v("Store Logo")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("img", {
                staticClass: "mb-3",
                staticStyle: {
                  width: "100px",
                  height: "100px",
                  "object-fit": "cover"
                },
                attrs: { src: _vm.displayImage }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "custom-file mb-3" }, [
                _c("input", {
                  staticClass: "custom-file-input",
                  attrs: { type: "file", id: "image_path", name: "image_path" },
                  on: { change: _vm.onFileChange }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-file-label",
                    attrs: { for: "image_path" }
                  },
                  [_vm._v("Choose file...")]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0)
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-5" }, [
          _c("br"),
          _vm._v(" "),
          _c("h5", [_vm._v("Store information:")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "name" } },
              [_vm._v("Store Name")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.name,
                  expression: "store.name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", name: "name", value: "", required: "" },
              domProps: { value: _vm.store.name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "email" } },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.email,
                  expression: "store.email"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "email",
                id: "email",
                name: "email",
                value: "",
                required: ""
              },
              domProps: { value: _vm.store.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "phone" } },
              [_vm._v("Contact Nmber")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.phone,
                  expression: "store.phone"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "phone",
                name: "phone",
                value: "",
                required: ""
              },
              domProps: { value: _vm.store.phone },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "phone", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h5", [_vm._v("Address:")]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              {
                staticClass: "font-weight-bold",
                attrs: { for: "street_address" }
              },
              [_vm._v("Street Address")]
            ),
            _vm._v(" "),
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.street_address,
                  expression: "store.street_address"
                }
              ],
              staticClass: "form-control",
              attrs: {
                id: "street_address",
                name: "street_address",
                required: ""
              },
              domProps: { value: _vm.store.street_address },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "street_address", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "zipcode" } },
              [_vm._v("City")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.city,
                  expression: "store.city"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "city",
                name: "city",
                value: "",
                required: ""
              },
              domProps: { value: _vm.store.city },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "city", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "state" } },
              [_vm._v("State")]
            ),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.selectedState,
                    expression: "selectedState"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "state", name: "state", required: "" },
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
                    _vm.selectedState = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              _vm._l(_vm.states, function(item, index) {
                return _c(
                  "option",
                  { key: index, domProps: { value: item.id } },
                  [_vm._v(_vm._s(item.name))]
                )
              }),
              0
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "zipcode" } },
              [_vm._v("Zip Code")]
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.store.zipcode,
                  expression: "store.zipcode"
                }
              ],
              staticClass: "form-control",
              attrs: {
                type: "text",
                id: "zipcode",
                name: "zipcode",
                value: "",
                required: ""
              },
              domProps: { value: _vm.store.zipcode },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.store, "zipcode", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-7 mt-3" }, [
          _c("h5", [_vm._v("Others:")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "name" } },
              [_vm._v("Wholesaler Discount")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.store.wholesaler_discount,
                    expression: "store.wholesaler_discount"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "wholesaler_discount",
                  name: "wholesaler_discount",
                  required: ""
                },
                domProps: { value: _vm.store.wholesaler_discount },
                on: {
                  keypress: _vm.onlyNumber,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.store,
                      "wholesaler_discount",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "name" } },
              [_vm._v("Wholesaler Minimum Order Amount")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.store.wholesaler_minimum_order_amount,
                    expression: "store.wholesaler_minimum_order_amount"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "wholesaler_minimum_order_amount",
                  name: "wholesaler_minimum_order_amount",
                  required: ""
                },
                domProps: { value: _vm.store.wholesaler_minimum_order_amount },
                on: {
                  keypress: _vm.onlyNumber,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.store,
                      "wholesaler_minimum_order_amount",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "name" } },
              [_vm._v("Delivery Fee")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _vm._m(3),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.store.delivery_fee,
                    expression: "store.delivery_fee"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "delivery_fee",
                  name: "delivery_fee",
                  required: ""
                },
                domProps: { value: _vm.store.delivery_fee },
                on: {
                  keypress: _vm.onlyNumber,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.store, "delivery_fee", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c(
              "label",
              { staticClass: "font-weight-bold", attrs: { for: "name" } },
              [_vm._v("Expected Delivery Days")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.store.expected_delivery_days,
                    expression: "store.expected_delivery_days"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "expected_delivery_days",
                  name: "expected_delivery_days",
                  required: ""
                },
                domProps: { value: _vm.store.expected_delivery_days },
                on: {
                  keypress: _vm.onlyNumber,
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.store,
                      "expected_delivery_days",
                      $event.target.value
                    )
                  }
                }
              }),
              _vm._v(" "),
              _vm._m(4)
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "wsrvisible" } }, [
              _vm._v("Wholesaler Sign-up Visibility")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "custom-control custom-switch" }, [
              _c("input", {
                staticClass: "custom-control-input",
                attrs: {
                  type: "checkbox",
                  id: "wsrvisible",
                  name: "wsrvisible"
                },
                domProps: {
                  checked:
                    _vm.store.wholesaler_signup_is_hide != 1 ? true : false
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "custom-control-label",
                  attrs: { for: "wsrvisible" }
                },
                [_vm._v("Show/Hide")]
              )
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
    return _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "float-right" }, [
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("SAVE")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("%")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Days")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/settings/tab1.vue":
/*!***********************************************************!*\
  !*** ./resources/js/backend/components/settings/tab1.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.vue?vue&type=template&id=43724d08& */ "./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08&");
/* harmony import */ var _tab1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tab1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/tab1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tab1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tab1.vue?vue&type=template&id=43724d08& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab1.vue?vue&type=template&id=43724d08&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab1_vue_vue_type_template_id_43724d08___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlP2QxYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlPzIwNWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZT83ODdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlRQTtBQUNBLFVBQ0EsTUFEQSxFQUVBLE9BRkEsRUFHQSxRQUhBLEVBSUEsWUFKQSxFQUtBLGFBTEEsRUFNQSxhQU5BLENBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQTtBQUlBLGdCQUpBO0FBS0EscUJBTEE7QUFNQSxzQkFOQTtBQU9BLHFCQUNBLGFBREEsQ0FDQSx5QkFEQSxFQUVBLFlBRkEsQ0FFQSxTQUZBO0FBUEE7QUFXQSxHQXJCQTtBQXNCQSxTQXRCQSxxQkFzQkE7QUFD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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRCxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRCxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hsQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1N0b3JlVGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxmb3JtIDphY3Rpb249XCJhY3Rpb25cIiBtZXRob2Q9XCJQT1NUXCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIl90b2tlblwiIDp2YWx1ZT1cImNzcmZcIiAvPlxyXG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic3RvcmVfaWRcIiA6dmFsdWU9XCJzdG9yZS5pZFwiIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VfcGF0aFwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0b3JlIExvZ288L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIDpzcmM9XCJkaXNwbGF5SW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDBweDsgaGVpZ2h0OjEwMHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGUgbWItM1wiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VfcGF0aFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VfcGF0aFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tZmlsZS1sYWJlbFwiIGZvcj1cImltYWdlX3BhdGhcIj5DaG9vc2UgZmlsZS4uLjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj5TQVZFPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTVcIj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDU+U3RvcmUgaW5mb3JtYXRpb246PC9oNT5cclxuICAgICAgICA8YnI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0b3JlIE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJzdG9yZS5uYW1lXCIgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJuYW1lXCIgdmFsdWUgcmVxdWlyZWQgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZS5lbWFpbFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q29udGFjdCBObWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLnBob25lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwicGhvbmVcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8aDU+QWRkcmVzczo8L2g1PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwic3RyZWV0X2FkZHJlc3NcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdHJlZXQgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLnN0cmVldF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cInN0cmVldF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0cmVldF9hZGRyZXNzXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cInNlbGVjdGVkQ2l0eVwiIHJlcXVpcmVkPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBnZXRDaXRpZXNcIiA6dmFsdWU9XCJpdGVtLmlkXCIgOmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG5cclxuXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ6aXBjb2RlXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q2l0eTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmNpdHlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJjaXR5XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJzdGF0ZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cInN0YXRlXCJcclxuICAgICAgICAgICAgbmFtZT1cInN0YXRlXCJcclxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdGVcIlxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdGF0ZXNcIiA6dmFsdWU9XCJpdGVtLmlkXCIgOmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJ6aXBjb2RlXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+WmlwIENvZGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZS56aXBjb2RlXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwiemlwY29kZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ6aXBjb2RlXCJcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgbXQtM1wiPlxyXG4gICAgICAgIDwhLS0gPGg1PkxhbmRpbmcgUGFnZSBDb250ZW50OjwvaDU+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYW5kaW5nX2hlYWRlclwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkhlYWRlcjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmxhbmRpbmdfaGVhZGVyXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICBpZD1cImxhbmRpbmdfaGVhZGVyXCJcclxuICAgICAgICAgICAgbmFtZT1cImxhbmRpbmdfaGVhZGVyXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNvbnRlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZS5sYW5kaW5nX2NvbnRlbnRcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgIGlkPVwibGFuZGluZ19jb250ZW50XCJcclxuICAgICAgICAgICAgbmFtZT1cImxhbmRpbmdfY29udGVudFwiXHJcbiAgICAgICAgICAgIHJvd3M9XCI0XCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgID48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPiAtLT5cclxuICAgICAgICA8aDU+T3RoZXJzOjwvaDU+XHJcbiAgICAgICAgPGJyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5XaG9sZXNhbGVyIERpc2NvdW50PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUud2hvbGVzYWxlcl9kaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIndob2xlc2FsZXJfZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ3aG9sZXNhbGVyX2Rpc2NvdW50XCJcclxuICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5XaG9sZXNhbGVyIE1pbmltdW0gT3JkZXIgQW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUud2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBpZD1cIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCJcclxuICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+RGVsaXZlcnkgRmVlPC9sYWJlbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUuZGVsaXZlcnlfZmVlXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgIGlkPVwiZGVsaXZlcnlfZmVlXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZGVsaXZlcnlfZmVlXCJcclxuICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF5czwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmV4cGVjdGVkX2RlbGl2ZXJ5X2RheXNcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJleHBlY3RlZF9kZWxpdmVyeV9kYXlzXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZXhwZWN0ZWRfZGVsaXZlcnlfZGF5c1wiXHJcbiAgICAgICAgICAgICAgQGtleXByZXNzPVwib25seU51bWJlclwiXHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPkRheXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwid3NydmlzaWJsZVwiPldob2xlc2FsZXIgU2lnbi11cCBWaXNpYmlsaXR5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJzdG9yZS53aG9sZXNhbGVyX3NpZ251cF9pc19oaWRlICE9IDEgPyB0cnVlOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cIndzcnZpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwid3NydmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ3c3J2aXNpYmxlXCI+U2hvdy9IaWRlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ3c3J2aXNpYmxlXCI+e3sgc3RvcmUud2hvbGVzYWxlcl9zaWdudXBfaXNfaGlkZSA9PSAxPyAnaGlkZScgOiAnc2hvdycgfX08L2xhYmVsPiAtLT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+VXBkYXRlPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj4tLT5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9ybT5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1xyXG4gICAgXCJjaXR5XCIsXHJcbiAgICBcInN0YXRlXCIsXHJcbiAgICBcImFjdGlvblwiLFxyXG4gICAgXCJwcm9wX3N0b3JlXCIsXHJcbiAgICBcInByb3BfY2l0aWVzXCIsXHJcbiAgICBcInByb3Bfc3RhdGVzXCIsXHJcbiAgXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGlzcGxheUltYWdlOiBcIlwiLFxyXG4gICAgICBzdG9yZToge30sXHJcbiAgICAgIHN0YXRlczogW10sXHJcbiAgICAgIGNpdGllczogW10sXHJcbiAgICAgIHNlbGVjdGVkQ2l0eTogMCxcclxuICAgICAgc2VsZWN0ZWRTdGF0ZTogMCxcclxuICAgICAgY3NyZjogZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXHJcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0gdGhpcy5jaXR5O1xyXG4gICAgdGhpcy5zZWxlY3RlZFN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnByb3Bfc3RvcmU7XHJcbiAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IHRoaXMucHJvcF9zdG9yZS5pbWFnZV9saW5rO1xyXG4gICAgdGhpcy5jaXRpZXMgPSB0aGlzLnByb3BfY2l0aWVzO1xyXG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnByb3Bfc3RhdGVzO1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGdldENpdGllcygpIHtcclxuICAgICAgbGV0IGNpdGllcyA9IHRoaXMuY2l0aWVzO1xyXG4gICAgICBsZXQgZmlsdGVyID0gW107XHJcbiAgICAgIHZhciBpZCA9IHRoaXMuc2VsZWN0ZWRTdGF0ZTtcclxuICAgICAgdmFyIGZpbHRlcmVkQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihmdW5jdGlvbiAoY2l0eSkge1xyXG4gICAgICAgIHJldHVybiBjaXR5LnN0YXRlX2lkID09IGlkO1xyXG4gICAgICB9KTtcclxuICAgICAgZmlsdGVyID0gZmlsdGVyZWRDaXRpZXM7XHJcbiAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uRmlsZUNoYW5nZShlKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgfSxcclxuICAgIHN0YXRlc0NoYW5nZSgpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZENpdHkgPSB7fTtcclxuICAgIH0sXHJcbiAgICBvbmx5TnVtYmVyKCRldmVudCkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCRldmVudC5rZXlDb2RlKTsgLy9rZXlDb2RlcyB2YWx1ZVxyXG4gICAgICBsZXQga2V5Q29kZSA9ICRldmVudC5rZXlDb2RlID8gJGV2ZW50LmtleUNvZGUgOiAkZXZlbnQud2hpY2g7XHJcbiAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYga2V5Q29kZSAhPT0gNDYpIHtcclxuICAgICAgICAvLyA0NiBpcyBkb3RcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBhY3Rpb246IF92bS5hY3Rpb24sXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJfdG9rZW5cIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNzcmYgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwic3RvcmVfaWRcIiB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLmlkIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImltYWdlX3BhdGhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RvcmUgTG9nb1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTNcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZGlzcGxheUltYWdlIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgaWQ6IFwiaW1hZ2VfcGF0aFwiLCBuYW1lOiBcImltYWdlX3BhdGhcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlQ2hhbmdlIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW1hZ2VfcGF0aFwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hvb3NlIGZpbGUuLi5cIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcIlN0b3JlIGluZm9ybWF0aW9uOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlN0b3JlIE5hbWVcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLm5hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBuYW1lOiBcIm5hbWVcIiwgdmFsdWU6IFwiXCIsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUubmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJlbWFpbFwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkVtYWlsXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUuZW1haWxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIGlkOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUuZW1haWwgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmUsIFwiZW1haWxcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcInBob25lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGFjdCBObWJlclwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUucGhvbmUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLnBob25lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIGlkOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJwaG9uZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUucGhvbmUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmUsIFwicGhvbmVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiQWRkcmVzczpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcInN0cmVldF9hZGRyZXNzXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RyZWV0IEFkZHJlc3NcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLnN0cmVldF9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yZS5zdHJlZXRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJzdHJlZXRfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwic3RyZWV0X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLnN0cmVldF9hZGRyZXNzIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JlLCBcInN0cmVldF9hZGRyZXNzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJ6aXBjb2RlXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2l0eVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUuY2l0eSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUuY2l0eVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBpZDogXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5jaXR5IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JlLCBcImNpdHlcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcInN0YXRlXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RhdGVcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzdGF0ZVwiLCBuYW1lOiBcInN0YXRlXCIsIHJlcXVpcmVkOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN0YXRlID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdGF0ZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0uaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJ6aXBjb2RlXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiWmlwIENvZGVcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLnppcGNvZGUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLnppcGNvZGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiemlwY29kZVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiemlwY29kZVwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUuemlwY29kZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yZSwgXCJ6aXBjb2RlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IG10LTNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiT3RoZXJzOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIldob2xlc2FsZXIgRGlzY291bnRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS53aG9sZXNhbGVyX2Rpc2NvdW50LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLndob2xlc2FsZXJfZGlzY291bnRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwid2hvbGVzYWxlcl9kaXNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJ3aG9sZXNhbGVyX2Rpc2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS53aG9sZXNhbGVyX2Rpc2NvdW50IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBfdm0ub25seU51bWJlcixcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIFwid2hvbGVzYWxlcl9kaXNjb3VudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIldob2xlc2FsZXIgTWluaW11bSBPcmRlciBBbW91bnRcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUud2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkRlbGl2ZXJ5IEZlZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUuZGVsaXZlcnlfZmVlLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLmRlbGl2ZXJ5X2ZlZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJkZWxpdmVyeV9mZWVcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVsaXZlcnlfZmVlXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5kZWxpdmVyeV9mZWUgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmUsIFwiZGVsaXZlcnlfZmVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkV4cGVjdGVkIERlbGl2ZXJ5IERheXNcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5leHBlY3RlZF9kZWxpdmVyeV9kYXlzLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLmV4cGVjdGVkX2RlbGl2ZXJ5X2RheXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgaWQ6IFwiZXhwZWN0ZWRfZGVsaXZlcnlfZGF5c1wiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJleHBlY3RlZF9kZWxpdmVyeV9kYXlzXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5leHBlY3RlZF9kZWxpdmVyeV9kYXlzIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBfdm0ub25seU51bWJlcixcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXhwZWN0ZWRfZGVsaXZlcnlfZGF5c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSg0KVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwid3NydmlzaWJsZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJXaG9sZXNhbGVyIFNpZ24tdXAgVmlzaWJpbGl0eVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1pbnB1dFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJ3c3J2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIndzcnZpc2libGVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6XG4gICAgICAgICAgICAgICAgICAgIF92bS5zdG9yZS53aG9sZXNhbGVyX3NpZ251cF9pc19oaWRlICE9IDEgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJ3c3J2aXNpYmxlXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlNob3cvSGlkZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLThcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJTQVZFXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtfdm0uX3YoXCIlXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIiRcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiJFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIkRheXNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWIxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzcyNGQwOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFiMS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDM3MjRkMDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDM3MjRkMDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDM3MjRkMDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYjEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzNzI0ZDA4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQzNzI0ZDA4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzcyNGQwOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=