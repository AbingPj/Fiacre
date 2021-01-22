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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlP2QxYzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlPzIwNWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIxLnZ1ZT83ODdhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlRQTtBQUNBLFVBQ0EsTUFEQSxFQUVBLE9BRkEsRUFHQSxRQUhBLEVBSUEsWUFKQSxFQUtBLGFBTEEsRUFNQSxhQU5BLENBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGVBRkE7QUFHQSxnQkFIQTtBQUlBLGdCQUpBO0FBS0EscUJBTEE7QUFNQSxzQkFOQTtBQU9BLHFCQUNBLGFBREEsQ0FDQSx5QkFEQSxFQUVBLFlBRkEsQ0FFQSxTQUZBO0FBUEE7QUFXQSxHQXJCQTtBQXNCQSxTQXRCQSxxQkFzQkE7QUFD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R0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRCxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRCxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hsQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1N0b3JlVGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8Zm9ybSA6YWN0aW9uPVwiYWN0aW9uXCIgbWV0aG9kPVwiUE9TVFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgOnZhbHVlPVwiY3NyZlwiIC8+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwic3RvcmVfaWRcIiA6dmFsdWU9XCJzdG9yZS5pZFwiIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIGNvbC1tZC00XCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiaW1hZ2VfcGF0aFwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlN0b3JlIExvZ288L2xhYmVsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIDpzcmM9XCJkaXNwbGF5SW1hZ2VcIlxuICAgICAgICAgICAgICBjbGFzcz1cIm1iLTNcIlxuICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOjEwMHB4OyBoZWlnaHQ6MTAwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1maWxlIG1iLTNcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VfcGF0aFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImltYWdlX3BhdGhcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tZmlsZS1sYWJlbFwiIGZvcj1cImltYWdlX3BhdGhcIj5DaG9vc2UgZmlsZS4uLjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlNBVkU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDU+U3RvcmUgaW5mb3JtYXRpb246PC9oNT5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdG9yZSBOYW1lPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cInN0b3JlLm5hbWVcIiB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cIm5hbWVcIiB2YWx1ZSByZXF1aXJlZCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUuZW1haWxcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q29udGFjdCBObWJlcjwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUucGhvbmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8aDU+QWRkcmVzczo8L2g1PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwic3RyZWV0X2FkZHJlc3NcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdHJlZXQgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUuc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgaWQ9XCJzdHJlZXRfYWRkcmVzc1wiXG4gICAgICAgICAgICBuYW1lPVwic3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiY2l0eVwiIG5hbWU9XCJjaXR5XCIgdi1tb2RlbD1cInNlbGVjdGVkQ2l0eVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gZ2V0Q2l0aWVzXCIgOnZhbHVlPVwiaXRlbS5pZFwiIDprZXk9XCJpbmRleFwiPnt7aXRlbS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+IC0tPlxuXG5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiemlwY29kZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmNpdHlcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwic3RhdGVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5TdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgaWQ9XCJzdGF0ZVwiXG4gICAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdGVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdGF0ZXNcIiA6dmFsdWU9XCJpdGVtLmlkXCIgOmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiemlwY29kZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZS56aXBjb2RlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwiemlwY29kZVwiXG4gICAgICAgICAgICBuYW1lPVwiemlwY29kZVwiXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC03IG10LTNcIj5cbiAgICAgICAgPCEtLSA8aDU+TGFuZGluZyBQYWdlIENvbnRlbnQ6PC9oNT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibGFuZGluZ19oZWFkZXJcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5IZWFkZXI8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmxhbmRpbmdfaGVhZGVyXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwibGFuZGluZ19oZWFkZXJcIlxuICAgICAgICAgICAgbmFtZT1cImxhbmRpbmdfaGVhZGVyXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q29udGVudDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUubGFuZGluZ19jb250ZW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgIGlkPVwibGFuZGluZ19jb250ZW50XCJcbiAgICAgICAgICAgIG5hbWU9XCJsYW5kaW5nX2NvbnRlbnRcIlxuICAgICAgICAgICAgcm93cz1cIjRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz4gLS0+XG4gICAgICAgIDxoNT5PdGhlcnM6PC9oNT5cbiAgICAgICAgPGJyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5XaG9sZXNhbGVyIERpc2NvdW50PC9sYWJlbD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwic3RvcmUud2hvbGVzYWxlcl9kaXNjb3VudFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cIndob2xlc2FsZXJfZGlzY291bnRcIlxuICAgICAgICAgICAgICBuYW1lPVwid2hvbGVzYWxlcl9kaXNjb3VudFwiXG4gICAgICAgICAgICAgIEBrZXlwcmVzcz1cIm9ubHlOdW1iZXJcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPldob2xlc2FsZXIgTWluaW11bSBPcmRlciBBbW91bnQ8L2xhYmVsPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJzdG9yZS53aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIGlkPVwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCJcbiAgICAgICAgICAgICAgQGtleXByZXNzPVwib25seU51bWJlclwiXG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkRlbGl2ZXJ5IEZlZTwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4kPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmRlbGl2ZXJ5X2ZlZVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBpZD1cImRlbGl2ZXJ5X2ZlZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkZWxpdmVyeV9mZWVcIlxuICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+RXhwZWN0ZWQgRGVsaXZlcnkgRGF5czwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdi1tb2RlbD1cInN0b3JlLmV4cGVjdGVkX2RlbGl2ZXJ5X2RheXNcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgaWQ9XCJleHBlY3RlZF9kZWxpdmVyeV9kYXlzXCJcbiAgICAgICAgICAgICAgbmFtZT1cImV4cGVjdGVkX2RlbGl2ZXJ5X2RheXNcIlxuICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPkRheXM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwid3NydmlzaWJsZVwiPldob2xlc2FsZXIgU2lnbi11cCBWaXNpYmlsaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJzdG9yZS53aG9sZXNhbGVyX3NpZ251cF9pc19oaWRlICE9IDEgPyB0cnVlOiBmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICBpZD1cIndzcnZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cIndzcnZpc2libGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ3c3J2aXNpYmxlXCI+U2hvdy9IaWRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8IS0tIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwid3NydmlzaWJsZVwiPnt7IHN0b3JlLndob2xlc2FsZXJfc2lnbnVwX2lzX2hpZGUgPT0gMT8gJ2hpZGUnIDogJ3Nob3cnIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+VXBkYXRlPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2Pi0tPlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1xuICAgIFwiY2l0eVwiLFxuICAgIFwic3RhdGVcIixcbiAgICBcImFjdGlvblwiLFxuICAgIFwicHJvcF9zdG9yZVwiLFxuICAgIFwicHJvcF9jaXRpZXNcIixcbiAgICBcInByb3Bfc3RhdGVzXCIsXG4gIF0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXlJbWFnZTogXCJcIixcbiAgICAgIHN0b3JlOiB7fSxcbiAgICAgIHN0YXRlczogW10sXG4gICAgICBjaXRpZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDaXR5OiAwLFxuICAgICAgc2VsZWN0ZWRTdGF0ZTogMCxcbiAgICAgIGNzcmY6IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2l0eSA9IHRoaXMuY2l0eTtcbiAgICB0aGlzLnNlbGVjdGVkU3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnByb3Bfc3RvcmU7XG4gICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSB0aGlzLnByb3Bfc3RvcmUuaW1hZ2VfbGluaztcbiAgICB0aGlzLmNpdGllcyA9IHRoaXMucHJvcF9jaXRpZXM7XG4gICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnByb3Bfc3RhdGVzO1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldENpdGllcygpIHtcbiAgICAgIGxldCBjaXRpZXMgPSB0aGlzLmNpdGllcztcbiAgICAgIGxldCBmaWx0ZXIgPSBbXTtcbiAgICAgIHZhciBpZCA9IHRoaXMuc2VsZWN0ZWRTdGF0ZTtcbiAgICAgIHZhciBmaWx0ZXJlZENpdGllcyA9IGNpdGllcy5maWx0ZXIoZnVuY3Rpb24gKGNpdHkpIHtcbiAgICAgICAgcmV0dXJuIGNpdHkuc3RhdGVfaWQgPT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlciA9IGZpbHRlcmVkQ2l0aWVzO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICB9LFxuICAgIHN0YXRlc0NoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0ge307XG4gICAgfSxcbiAgICBvbmx5TnVtYmVyKCRldmVudCkge1xuICAgICAgLy9jb25zb2xlLmxvZygkZXZlbnQua2V5Q29kZSk7IC8va2V5Q29kZXMgdmFsdWVcbiAgICAgIGxldCBrZXlDb2RlID0gJGV2ZW50LmtleUNvZGUgPyAkZXZlbnQua2V5Q29kZSA6ICRldmVudC53aGljaDtcbiAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYga2V5Q29kZSAhPT0gNDYpIHtcbiAgICAgICAgLy8gNDYgaXMgZG90XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIGFjdGlvbjogX3ZtLmFjdGlvbixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgZW5jdHlwZTogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIl90b2tlblwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY3NyZiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJzdG9yZV9pZFwiIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUuaWQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW1hZ2VfcGF0aFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdG9yZSBMb2dvXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItM1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5kaXNwbGF5SW1hZ2UgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZSBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBpZDogXCJpbWFnZV9wYXRoXCIsIG5hbWU6IFwiaW1hZ2VfcGF0aFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbWFnZV9wYXRoXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZS4uLlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwiU3RvcmUgaW5mb3JtYXRpb246XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RvcmUgTmFtZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUubmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwibmFtZVwiLCB2YWx1ZTogXCJcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5uYW1lIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JlLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcImVtYWlsXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRW1haWxcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yZS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yZSwgXCJlbWFpbFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwicGhvbmVcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250YWN0IE5tYmVyXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5waG9uZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUucGhvbmVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInBob25lXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS5waG9uZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yZSwgXCJwaG9uZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJBZGRyZXNzOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwic3RyZWV0X2FkZHJlc3NcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJTdHJlZXQgQWRkcmVzc1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUuc3RyZWV0X2FkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInN0b3JlLnN0cmVldF9hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcInN0cmVldF9hZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzdHJlZXRfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUuc3RyZWV0X2FkZHJlc3MgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmUsIFwic3RyZWV0X2FkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcInppcGNvZGVcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJDaXR5XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5jaXR5LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yZS5jaXR5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIGlkOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLmNpdHkgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc3RvcmUsIFwiY2l0eVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwic3RhdGVcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJTdGF0ZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInN0YXRlXCIsIG5hbWU6IFwic3RhdGVcIiwgcmVxdWlyZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkU3RhdGUgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN0YXRlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcInppcGNvZGVcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJaaXAgQ29kZVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUuemlwY29kZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUuemlwY29kZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBpZDogXCJ6aXBjb2RlXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ6aXBjb2RlXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zdG9yZS56aXBjb2RlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnN0b3JlLCBcInppcGNvZGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgbXQtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImg1XCIsIFtfdm0uX3YoXCJPdGhlcnM6XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiV2hvbGVzYWxlciBEaXNjb3VudFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLndob2xlc2FsZXJfZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUud2hvbGVzYWxlcl9kaXNjb3VudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJ3aG9sZXNhbGVyX2Rpc2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIndob2xlc2FsZXJfZGlzY291bnRcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLndob2xlc2FsZXJfZGlzY291bnQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJ3aG9sZXNhbGVyX2Rpc2NvdW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiV2hvbGVzYWxlciBNaW5pbXVtIE9yZGVyIEFtb3VudFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc3RvcmUud2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudCxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzdG9yZS53aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwid2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudFwiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uc3RvcmUud2hvbGVzYWxlcl9taW5pbXVtX29yZGVyX2Ftb3VudCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBrZXlwcmVzczogX3ZtLm9ubHlOdW1iZXIsXG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICBcIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsaXZlcnkgRmVlXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zdG9yZS5kZWxpdmVyeV9mZWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUuZGVsaXZlcnlfZmVlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcImRlbGl2ZXJ5X2ZlZVwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWxpdmVyeV9mZWVcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLmRlbGl2ZXJ5X2ZlZSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBrZXlwcmVzczogX3ZtLm9ubHlOdW1iZXIsXG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zdG9yZSwgXCJkZWxpdmVyeV9mZWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiRXhwZWN0ZWQgRGVsaXZlcnkgRGF5c1wiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnN0b3JlLmV4cGVjdGVkX2RlbGl2ZXJ5X2RheXMsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic3RvcmUuZXhwZWN0ZWRfZGVsaXZlcnlfZGF5c1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBpZDogXCJleHBlY3RlZF9kZWxpdmVyeV9kYXlzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImV4cGVjdGVkX2RlbGl2ZXJ5X2RheXNcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnN0b3JlLmV4cGVjdGVkX2RlbGl2ZXJ5X2RheXMgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgXCJleHBlY3RlZF9kZWxpdmVyeV9kYXlzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDQpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ3c3J2aXNpYmxlXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIldob2xlc2FsZXIgU2lnbi11cCBWaXNpYmlsaXR5XCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgIGlkOiBcIndzcnZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwid3NydmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnN0b3JlLndob2xlc2FsZXJfc2lnbnVwX2lzX2hpZGUgIT0gMSA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcIndzcnZpc2libGVcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2hvdy9IaWRlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIiwgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sXG4gICAgICAgICAgW192bS5fdihcIlNBVkVcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIiVcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiJFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtfdm0uX3YoXCIkXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiRGF5c1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYjEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzNzI0ZDA4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYjEudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDM3MjRkMDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDM3MjRkMDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDM3MjRkMDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYjEudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzNzI0ZDA4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQzNzI0ZDA4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjEudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWIxLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00MzcyNGQwOCZcIiJdLCJzb3VyY2VSb290IjoiIn0=