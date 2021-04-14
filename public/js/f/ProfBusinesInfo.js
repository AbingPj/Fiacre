(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ProfBusinesInfo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["user", "edit", "states"],
  data: function data() {
    return {
      businessImage: "/img/no-product-image.png",
      business_designation: "",
      business_name: "",
      business_street_address: "",
      business_zipcode: "",
      bstates: [],
      bselectedCity: "",
      bselectedState: "",
      cities2: []
    };
  },
  created: function created() {
    if (this.user.customer_role == 3) {
      this.businessImage = this.user.business.business_image_path;
      this.business_designation = this.user.business.designation;
      this.business_name = this.user.business.business_name;
      this.business_street_address = this.user.business.street_address;
      this.bselectedCity = this.user.business.city;
      this.bselectedState = this.user.business.state;
      this.business_zipcode = this.user.business.zipcode;
    }
  },
  methods: {
    onFileChange2: function onFileChange2(e) {
      console.log(e);
      var file = e.target.files[0];
      this.businessImage = URL.createObjectURL(file);
    },
    getCitiesForAutocomplete: function getCitiesForAutocomplete(searchTerm) {
      var _this = this;

      new Promise(function (resolve) {
        window.setTimeout(function () {
          if (!searchTerm) {
            _this.getCities2();
          } else {
            var term = searchTerm.toLowerCase();
            resolve(_this.getCities2(term) //   this.countryList.filter(({ name }) =>
            //     name.toLowerCase().includes(term)
            //   )
            );
          }
        }, 1000);
      });
    },
    // getSearchCities() {
    //   if (this.timer) {
    //     clearTimeout(this.timer);
    //     this.timer = null;
    //   }
    //   this.timer = setTimeout(() => {
    //     this.getCities2();
    //   }, 700);
    // },
    getCities2: function getCities2() {
      var _arguments = arguments,
          _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var searching, param;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searching = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                param = {
                  search: searching
                };
                _context.next = 4;
                return axios({
                  method: "get",
                  url: "/data/searchcities",
                  params: param
                }).then(function (res) {
                  _this2.cities2 = res.data;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h4", { staticClass: "font-weight-bold" }, [
        _vm._v("Business Information")
      ]),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c("img", {
                staticClass: "w-100",
                attrs: { src: _vm.businessImage }
              }),
              _vm._v(" "),
              _c(
                "md-field",
                [
                  _c("label", [_vm._v("Business Logo")]),
                  _vm._v(" "),
                  _c("md-file", {
                    attrs: {
                      name: "business_image_file",
                      disabled: !_vm.edit == true
                    },
                    on: { change: _vm.onFileChange2 }
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
      _c(
        "md-field",
        [
          _c("label", [_vm._v("Position / Designation")]),
          _vm._v(" "),
          _c("md-input", {
            attrs: {
              name: "business_designation",
              required: "",
              disabled: !_vm.edit == true
            },
            model: {
              value: _vm.business_designation,
              callback: function($$v) {
                _vm.business_designation = $$v
              },
              expression: "business_designation"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-field",
        [
          _c("label", [_vm._v("Organization / Business Name")]),
          _vm._v(" "),
          _c("md-input", {
            attrs: {
              name: "business_name",
              required: "",
              disabled: !_vm.edit == true
            },
            model: {
              value: _vm.business_name,
              callback: function($$v) {
                _vm.business_name = $$v
              },
              expression: "business_name"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-field",
        [
          _c("label", [_vm._v("Business Street Address")]),
          _vm._v(" "),
          _c("md-input", {
            attrs: {
              name: "business_street_address",
              required: "",
              disabled: !_vm.edit == true
            },
            model: {
              value: _vm.business_street_address,
              callback: function($$v) {
                _vm.business_street_address = $$v
              },
              expression: "business_street_address"
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
            { attrs: { md: "4" } },
            [
              _c(
                "md-autocomplete",
                {
                  attrs: {
                    "md-input-name": "business_city",
                    "md-options": _vm.cities2,
                    disabled: !_vm.edit == true
                  },
                  on: {
                    "md-changed": _vm.getCitiesForAutocomplete,
                    "md-opened": _vm.getCitiesForAutocomplete
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "md-autocomplete-item",
                      fn: function(ref) {
                        var item = ref.item
                        return [_vm._v(_vm._s(item))]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.bselectedCity,
                    callback: function($$v) {
                      _vm.bselectedCity = $$v
                    },
                    expression: "bselectedCity"
                  }
                },
                [_c("label", [_vm._v("Town/County/City")])]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "4" } },
            [
              _c(
                "md-field",
                [
                  _c("label", { attrs: { for: "font" } }, [_vm._v("State")]),
                  _vm._v(" "),
                  _c(
                    "md-select",
                    {
                      attrs: { "md-dense": "" },
                      model: {
                        value: _vm.bselectedState,
                        callback: function($$v) {
                          _vm.bselectedState = $$v
                        },
                        expression: "bselectedState"
                      }
                    },
                    _vm._l(_vm.states, function(item, index) {
                      return _c(
                        "md-option",
                        {
                          key: index,
                          attrs: { value: item.id, disabled: !_vm.edit == true }
                        },
                        [_vm._v(_vm._s(item.name))]
                      )
                    }),
                    1
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.bselectedState,
                        expression: "bselectedState"
                      }
                    ],
                    attrs: { name: "business_state", type: "hidden" },
                    domProps: { value: _vm.bselectedState },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.bselectedState = $event.target.value
                      }
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
            { attrs: { md: "4" } },
            [
              _c(
                "md-field",
                [
                  _c("label", [_vm._v("Business Zip")]),
                  _vm._v(" "),
                  _c("md-input", {
                    attrs: {
                      name: "business_zipcode",
                      required: "",
                      disabled: !_vm.edit == true
                    },
                    model: {
                      value: _vm.business_zipcode,
                      callback: function($$v) {
                        _vm.business_zipcode = $$v
                      },
                      expression: "business_zipcode"
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/profile-page/BusinessInformation.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/BusinessInformation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BusinessInformation.vue?vue&type=template&id=8a077fac& */ "./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac&");
/* harmony import */ var _BusinessInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BusinessInformation.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BusinessInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/profile-page/BusinessInformation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessInformation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessInformation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BusinessInformation.vue?vue&type=template&id=8a077fac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/BusinessInformation.vue?vue&type=template&id=8a077fac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessInformation_vue_vue_type_template_id_8a077fac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL0J1c2luZXNzSW5mb3JtYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZT9kMTlkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/NjI4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/MWM1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtR0E7QUFDQSxtQ0FEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLGdEQURBO0FBRUEsOEJBRkE7QUFHQSx1QkFIQTtBQUlBLGlDQUpBO0FBS0EsMEJBTEE7QUFNQSxpQkFOQTtBQU9BLHVCQVBBO0FBUUEsd0JBUkE7QUFTQTtBQVRBO0FBV0EsR0FmQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTNCQTtBQTZCQTtBQUNBLGlCQURBLHlCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFPQSw0QkFQQSxvQ0FPQSxV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsVUFBVSxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOVBBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQzNCO0FBQ0w7OztBQUdsRTtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RkFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUErTSxDQUFnQiwrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9Qcm9mQnVzaW5lc0luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDxoNCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5CdXNpbmVzcyBJbmZvcm1hdGlvbjwvaDQ+XHJcbiAgICA8Yi1yb3c+XHJcbiAgICAgIDxiLWNvbCBtZD1cIjRcIj5cclxuICAgICAgICA8aW1nIDpzcmM9XCJidXNpbmVzc0ltYWdlXCIgY2xhc3M9XCJ3LTEwMFwiIC8+XHJcbiAgICAgICAgPG1kLWZpZWxkPlxyXG4gICAgICAgICAgPGxhYmVsPkJ1c2luZXNzIExvZ288L2xhYmVsPlxyXG4gICAgICAgICAgPG1kLWZpbGUgQGNoYW5nZT1cIm9uRmlsZUNoYW5nZTJcIiBuYW1lPVwiYnVzaW5lc3NfaW1hZ2VfZmlsZVwiIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCIgLz5cclxuICAgICAgICA8L21kLWZpZWxkPlxyXG4gICAgICA8L2ItY29sPlxyXG4gICAgPC9iLXJvdz5cclxuICAgIDxtZC1maWVsZD5cclxuICAgICAgPGxhYmVsPlBvc2l0aW9uIC8gRGVzaWduYXRpb248L2xhYmVsPlxyXG4gICAgICA8bWQtaW5wdXRcclxuICAgICAgICB2LW1vZGVsPVwiYnVzaW5lc3NfZGVzaWduYXRpb25cIlxyXG4gICAgICAgIG5hbWU9XCJidXNpbmVzc19kZXNpZ25hdGlvblwiXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXHJcbiAgICAgID48L21kLWlucHV0PlxyXG4gICAgPC9tZC1maWVsZD5cclxuICAgIDxtZC1maWVsZD5cclxuICAgICAgPGxhYmVsPk9yZ2FuaXphdGlvbiAvIEJ1c2luZXNzIE5hbWU8L2xhYmVsPlxyXG4gICAgICA8bWQtaW5wdXQgdi1tb2RlbD1cImJ1c2luZXNzX25hbWVcIiBuYW1lPVwiYnVzaW5lc3NfbmFtZVwiIHJlcXVpcmVkIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCI+PC9tZC1pbnB1dD5cclxuICAgIDwvbWQtZmllbGQ+XHJcbiAgICA8bWQtZmllbGQ+XHJcbiAgICAgIDxsYWJlbD5CdXNpbmVzcyBTdHJlZXQgQWRkcmVzczwvbGFiZWw+XHJcbiAgICAgIDxtZC1pbnB1dFxyXG4gICAgICAgIHYtbW9kZWw9XCJidXNpbmVzc19zdHJlZXRfYWRkcmVzc1wiXHJcbiAgICAgICAgbmFtZT1cImJ1c2luZXNzX3N0cmVldF9hZGRyZXNzXCJcclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcclxuICAgICAgPjwvbWQtaW5wdXQ+XHJcbiAgICA8L21kLWZpZWxkPlxyXG4gICAgPGItcm93PlxyXG4gICAgICA8Yi1jb2wgbWQ9XCI0XCI+XHJcbiAgICAgICAgPG1kLWF1dG9jb21wbGV0ZVxyXG4gICAgICAgICAgbWQtaW5wdXQtbmFtZT1cImJ1c2luZXNzX2NpdHlcIlxyXG4gICAgICAgICAgdi1tb2RlbD1cImJzZWxlY3RlZENpdHlcIlxyXG4gICAgICAgICAgOm1kLW9wdGlvbnM9XCJjaXRpZXMyXCJcclxuICAgICAgICAgIEBtZC1jaGFuZ2VkPVwiZ2V0Q2l0aWVzRm9yQXV0b2NvbXBsZXRlXCJcclxuICAgICAgICAgIEBtZC1vcGVuZWQ9XCJnZXRDaXRpZXNGb3JBdXRvY29tcGxldGVcIlxyXG4gICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxsYWJlbD5Ub3duL0NvdW50eS9DaXR5PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm1kLWF1dG9jb21wbGV0ZS1pdGVtXCIgc2xvdC1zY29wZT1cInsgaXRlbSB9XCI+e3tpdGVtfX08L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvbWQtYXV0b2NvbXBsZXRlPlxyXG4gICAgICAgIDwhLS0gPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJic2VsZWN0ZWRTdGF0ZVwiXHJcbiAgICAgICAgICBuYW1lPVwiYnVzaW5lc3Nfc3RhdGVcIlxyXG4gICAgICAgICAgQGNoYW5nZT1cImJzdGF0ZXNDaGFuZ2VcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBic3RhdGVzXCIgOnZhbHVlPVwiaXRlbS5pZFwiIDprZXk9XCJpbmRleFwiPnt7aXRlbS5uYW1lfX08L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD4tLT5cclxuICAgICAgPC9iLWNvbD5cclxuICAgICAgPGItY29sIG1kPVwiNFwiPlxyXG4gICAgICAgIDwhLS0gPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBteS1zZWxlY3RcIlxyXG4gICAgICAgICAgdi1tb2RlbD1cImJzZWxlY3RlZENpdHlcIlxyXG4gICAgICAgICAgbmFtZT1cImJ1c2luZXNzX2NpdHlcIlxyXG4gICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJnZXRDaXRpZXNcIiA6dmFsdWU9XCJpdGVtLmlkXCIgOmtleT1cImluZGV4XCI+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgIDwvc2VsZWN0Pi0tPlxyXG5cclxuICAgICAgICA8bWQtZmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9udFwiPlN0YXRlPC9sYWJlbD5cclxuICAgICAgICAgIDxtZC1zZWxlY3Qgdi1tb2RlbD1cImJzZWxlY3RlZFN0YXRlXCIgbWQtZGVuc2U+XHJcbiAgICAgICAgICAgIDxtZC1vcHRpb25cclxuICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc3RhdGVzXCJcclxuICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0uaWRcIlxyXG4gICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcclxuICAgICAgICAgICAgPnt7aXRlbS5uYW1lfX08L21kLW9wdGlvbj5cclxuICAgICAgICAgIDwvbWQtc2VsZWN0PlxyXG4gICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJic2VsZWN0ZWRTdGF0ZVwiIG5hbWU9XCJidXNpbmVzc19zdGF0ZVwiIHR5cGU9XCJoaWRkZW5cIiAvPlxyXG4gICAgICAgIDwvbWQtZmllbGQ+XHJcbiAgICAgIDwvYi1jb2w+XHJcbiAgICAgIDxiLWNvbCBtZD1cIjRcIj5cclxuICAgICAgICA8bWQtZmllbGQ+XHJcbiAgICAgICAgICA8bGFiZWw+QnVzaW5lc3MgWmlwPC9sYWJlbD5cclxuICAgICAgICAgIDxtZC1pbnB1dFxyXG4gICAgICAgICAgICB2LW1vZGVsPVwiYnVzaW5lc3NfemlwY29kZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJidXNpbmVzc196aXBjb2RlXCJcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxyXG4gICAgICAgICAgPjwvbWQtaW5wdXQ+XHJcbiAgICAgICAgPC9tZC1maWVsZD5cclxuICAgICAgPC9iLWNvbD5cclxuICAgIDwvYi1yb3c+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1widXNlclwiLCBcImVkaXRcIiwgXCJzdGF0ZXNcIl0sXHJcblxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBidXNpbmVzc0ltYWdlOiBcIi9pbWcvbm8tcHJvZHVjdC1pbWFnZS5wbmdcIixcclxuICAgICAgYnVzaW5lc3NfZGVzaWduYXRpb246IFwiXCIsXHJcbiAgICAgIGJ1c2luZXNzX25hbWU6IFwiXCIsXHJcbiAgICAgIGJ1c2luZXNzX3N0cmVldF9hZGRyZXNzOiBcIlwiLFxyXG4gICAgICBidXNpbmVzc196aXBjb2RlOiBcIlwiLFxyXG4gICAgICBic3RhdGVzOiBbXSxcclxuICAgICAgYnNlbGVjdGVkQ2l0eTogXCJcIixcclxuICAgICAgYnNlbGVjdGVkU3RhdGU6IFwiXCIsXHJcbiAgICAgIGNpdGllczI6W11cclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzKSB7XHJcbiAgICAgIHRoaXMuYnVzaW5lc3NJbWFnZSA9IHRoaXMudXNlci5idXNpbmVzcy5idXNpbmVzc19pbWFnZV9wYXRoO1xyXG4gICAgICB0aGlzLmJ1c2luZXNzX2Rlc2lnbmF0aW9uID0gdGhpcy51c2VyLmJ1c2luZXNzLmRlc2lnbmF0aW9uO1xyXG4gICAgICB0aGlzLmJ1c2luZXNzX25hbWUgPSB0aGlzLnVzZXIuYnVzaW5lc3MuYnVzaW5lc3NfbmFtZTtcclxuICAgICAgdGhpcy5idXNpbmVzc19zdHJlZXRfYWRkcmVzcyA9IHRoaXMudXNlci5idXNpbmVzcy5zdHJlZXRfYWRkcmVzcztcclxuICAgICAgdGhpcy5ic2VsZWN0ZWRDaXR5ID0gdGhpcy51c2VyLmJ1c2luZXNzLmNpdHk7XHJcbiAgICAgIHRoaXMuYnNlbGVjdGVkU3RhdGUgPSB0aGlzLnVzZXIuYnVzaW5lc3Muc3RhdGU7XHJcbiAgICAgIHRoaXMuYnVzaW5lc3NfemlwY29kZSA9IHRoaXMudXNlci5idXNpbmVzcy56aXBjb2RlO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uRmlsZUNoYW5nZTIoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICB0aGlzLmJ1c2luZXNzSW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDaXRpZXNGb3JBdXRvY29tcGxldGUoc2VhcmNoVGVybSkge1xyXG4gICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIGlmICghc2VhcmNoVGVybSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENpdGllczIoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoXHJcbiAgICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXMyKHRlcm0pXHJcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmNvdW50cnlMaXN0LmZpbHRlcigoeyBuYW1lIH0pID0+XHJcbiAgICAgICAgICAgICAgLy8gICAgIG5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXJtKVxyXG4gICAgICAgICAgICAgIC8vICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gZ2V0U2VhcmNoQ2l0aWVzKCkge1xyXG4gICAgLy8gICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIC8vICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXRDaXRpZXMyKCk7XHJcbiAgICAvLyAgIH0sIDcwMCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIGFzeW5jIGdldENpdGllczIoc2VhcmNoaW5nID0gbnVsbCkge1xyXG4gICAgICBsZXQgcGFyYW07XHJcbiAgICAgIHBhcmFtID0ge1xyXG4gICAgICAgIHNlYXJjaDogc2VhcmNoaW5nLFxyXG4gICAgICB9O1xyXG4gICAgICBhd2FpdCBheGlvcyh7XHJcbiAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgIHVybDogXCIvZGF0YS9zZWFyY2hjaXRpZXNcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmNpdGllczIgPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIkJ1c2luZXNzIEluZm9ybWF0aW9uXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEwMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmJ1c2luZXNzSW1hZ2UgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIkJ1c2luZXNzIExvZ29cIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIm1kLWZpbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYnVzaW5lc3NfaW1hZ2VfZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2UyIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJQb3NpdGlvbiAvIERlc2lnbmF0aW9uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiYnVzaW5lc3NfZGVzaWduYXRpb25cIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYnVzaW5lc3NfZGVzaWduYXRpb24sXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uYnVzaW5lc3NfZGVzaWduYXRpb24gPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJidXNpbmVzc19kZXNpZ25hdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiT3JnYW5pemF0aW9uIC8gQnVzaW5lc3MgTmFtZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImJ1c2luZXNzX25hbWVcIixcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYnVzaW5lc3NfbmFtZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5idXNpbmVzc19uYW1lID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYnVzaW5lc3NfbmFtZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQnVzaW5lc3MgU3RyZWV0IEFkZHJlc3NcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJidXNpbmVzc19zdHJlZXRfYWRkcmVzc1wiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5idXNpbmVzc19zdHJlZXRfYWRkcmVzcyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5idXNpbmVzc19zdHJlZXRfYWRkcmVzcyA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJ1c2luZXNzX3N0cmVldF9hZGRyZXNzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1hdXRvY29tcGxldGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBcIm1kLWlucHV0LW5hbWVcIjogXCJidXNpbmVzc19jaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWQtb3B0aW9uc1wiOiBfdm0uY2l0aWVzMixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgXCJtZC1jaGFuZ2VkXCI6IF92bS5nZXRDaXRpZXNGb3JBdXRvY29tcGxldGUsXG4gICAgICAgICAgICAgICAgICAgIFwibWQtb3BlbmVkXCI6IF92bS5nZXRDaXRpZXNGb3JBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZC1hdXRvY29tcGxldGUtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcmVmLml0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX3ZtLl92KF92bS5fcyhpdGVtKSldXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYnNlbGVjdGVkQ2l0eSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5ic2VsZWN0ZWRDaXR5ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYnNlbGVjdGVkQ2l0eVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiVG93bi9Db3VudHkvQ2l0eVwiKV0pXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiZm9udFwiIH0gfSwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibWQtc2VsZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcIm1kLWRlbnNlXCI6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ic2VsZWN0ZWRTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJzZWxlY3RlZFN0YXRlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJic2VsZWN0ZWRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN0YXRlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1kLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogaXRlbS5pZCwgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJzZWxlY3RlZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJic2VsZWN0ZWRTdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImJ1c2luZXNzX3N0YXRlXCIsIHR5cGU6IFwiaGlkZGVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5ic2VsZWN0ZWRTdGF0ZSB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ic2VsZWN0ZWRTdGF0ZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQnVzaW5lc3MgWmlwXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidXNpbmVzc196aXBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5idXNpbmVzc196aXBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5idXNpbmVzc196aXBjb2RlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJ1c2luZXNzX3ppcGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YTA3N2ZhYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4YTA3N2ZhYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4YTA3N2ZhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4YTA3N2ZhYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGEwNzdmYWMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGEwNzdmYWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGEwNzdmYWMmXCIiXSwic291cmNlUm9vdCI6IiJ9