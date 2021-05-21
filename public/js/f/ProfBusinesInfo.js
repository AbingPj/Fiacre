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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL0J1c2luZXNzSW5mb3JtYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZT9kMTlkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/NjI4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQnVzaW5lc3NJbmZvcm1hdGlvbi52dWU/MWM1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtR0E7QUFDQSxtQ0FEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLGdEQURBO0FBRUEsOEJBRkE7QUFHQSx1QkFIQTtBQUlBLGlDQUpBO0FBS0EsMEJBTEE7QUFNQSxpQkFOQTtBQU9BLHVCQVBBO0FBUUEsd0JBUkE7QUFTQTtBQVRBO0FBV0EsR0FmQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQTNCQTtBQTZCQTtBQUNBLGlCQURBLHlCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFPQSw0QkFQQSxvQ0FPQSxV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsVUFBVSxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOVBBO0FBQUE7QUFBQTtBQUFBO0FBQWtHO0FBQzNCO0FBQ0w7OztBQUdsRTtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx5RkFBTTtBQUNSLEVBQUUsOEZBQU07QUFDUixFQUFFLHVHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUErTSxDQUFnQiwrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvZi9Qcm9mQnVzaW5lc0luZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGg0IGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkJ1c2luZXNzIEluZm9ybWF0aW9uPC9oND5cbiAgICA8Yi1yb3c+XG4gICAgICA8Yi1jb2wgbWQ9XCI0XCI+XG4gICAgICAgIDxpbWcgOnNyYz1cImJ1c2luZXNzSW1hZ2VcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5CdXNpbmVzcyBMb2dvPC9sYWJlbD5cbiAgICAgICAgICA8bWQtZmlsZSBAY2hhbmdlPVwib25GaWxlQ2hhbmdlMlwiIG5hbWU9XCJidXNpbmVzc19pbWFnZV9maWxlXCIgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIiAvPlxuICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgPC9iLWNvbD5cbiAgICA8L2Itcm93PlxuICAgIDxtZC1maWVsZD5cbiAgICAgIDxsYWJlbD5Qb3NpdGlvbiAvIERlc2lnbmF0aW9uPC9sYWJlbD5cbiAgICAgIDxtZC1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwiYnVzaW5lc3NfZGVzaWduYXRpb25cIlxuICAgICAgICBuYW1lPVwiYnVzaW5lc3NfZGVzaWduYXRpb25cIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICA+PC9tZC1pbnB1dD5cbiAgICA8L21kLWZpZWxkPlxuICAgIDxtZC1maWVsZD5cbiAgICAgIDxsYWJlbD5Pcmdhbml6YXRpb24gLyBCdXNpbmVzcyBOYW1lPC9sYWJlbD5cbiAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwiYnVzaW5lc3NfbmFtZVwiIG5hbWU9XCJidXNpbmVzc19uYW1lXCIgcmVxdWlyZWQgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIj48L21kLWlucHV0PlxuICAgIDwvbWQtZmllbGQ+XG4gICAgPG1kLWZpZWxkPlxuICAgICAgPGxhYmVsPkJ1c2luZXNzIFN0cmVldCBBZGRyZXNzPC9sYWJlbD5cbiAgICAgIDxtZC1pbnB1dFxuICAgICAgICB2LW1vZGVsPVwiYnVzaW5lc3Nfc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICBuYW1lPVwiYnVzaW5lc3Nfc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICByZXF1aXJlZFxuICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICA+PC9tZC1pbnB1dD5cbiAgICA8L21kLWZpZWxkPlxuICAgIDxiLXJvdz5cbiAgICAgIDxiLWNvbCBtZD1cIjRcIj5cbiAgICAgICAgPG1kLWF1dG9jb21wbGV0ZVxuICAgICAgICAgIG1kLWlucHV0LW5hbWU9XCJidXNpbmVzc19jaXR5XCJcbiAgICAgICAgICB2LW1vZGVsPVwiYnNlbGVjdGVkQ2l0eVwiXG4gICAgICAgICAgOm1kLW9wdGlvbnM9XCJjaXRpZXMyXCJcbiAgICAgICAgICBAbWQtY2hhbmdlZD1cImdldENpdGllc0ZvckF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgQG1kLW9wZW5lZD1cImdldENpdGllc0ZvckF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlRvd24vQ291bnR5L0NpdHk8L2xhYmVsPlxuXG4gICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJtZC1hdXRvY29tcGxldGUtaXRlbVwiIHNsb3Qtc2NvcGU9XCJ7IGl0ZW0gfVwiPnt7aXRlbX19PC90ZW1wbGF0ZT5cbiAgICAgICAgPC9tZC1hdXRvY29tcGxldGU+XG4gICAgICAgIDwhLS0gPGxhYmVsIHN0eWxlPVwicGFkZGluZzowcHg7IG1hcmdpbmU6MHB4O1wiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBteS1zZWxlY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJic2VsZWN0ZWRTdGF0ZVwiXG4gICAgICAgICAgbmFtZT1cImJ1c2luZXNzX3N0YXRlXCJcbiAgICAgICAgICBAY2hhbmdlPVwiYnN0YXRlc0NoYW5nZVwiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBic3RhdGVzXCIgOnZhbHVlPVwiaXRlbS5pZFwiIDprZXk9XCJpbmRleFwiPnt7aXRlbS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+LS0+XG4gICAgICA8L2ItY29sPlxuICAgICAgPGItY29sIG1kPVwiNFwiPlxuICAgICAgICA8IS0tIDxsYWJlbCBzdHlsZT1cInBhZGRpbmc6MHB4OyBtYXJnaW5lOjBweDtcIj5DaXR5PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBteS1zZWxlY3RcIlxuICAgICAgICAgIHYtbW9kZWw9XCJic2VsZWN0ZWRDaXR5XCJcbiAgICAgICAgICBuYW1lPVwiYnVzaW5lc3NfY2l0eVwiXG4gICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYmdldENpdGllc1wiIDp2YWx1ZT1cIml0ZW0uaWRcIiA6a2V5PVwiaW5kZXhcIj57e2l0ZW0ubmFtZX19PC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0Pi0tPlxuXG4gICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICA8bGFiZWwgZm9yPVwiZm9udFwiPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICA8bWQtc2VsZWN0IHYtbW9kZWw9XCJic2VsZWN0ZWRTdGF0ZVwiIG1kLWRlbnNlPlxuICAgICAgICAgICAgPG1kLW9wdGlvblxuICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc3RhdGVzXCJcbiAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgOnZhbHVlPVwiaXRlbS5pZFwiXG4gICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcbiAgICAgICAgICAgID57e2l0ZW0ubmFtZX19PC9tZC1vcHRpb24+XG4gICAgICAgICAgPC9tZC1zZWxlY3Q+XG4gICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJic2VsZWN0ZWRTdGF0ZVwiIG5hbWU9XCJidXNpbmVzc19zdGF0ZVwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgPC9iLWNvbD5cbiAgICAgIDxiLWNvbCBtZD1cIjRcIj5cbiAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5CdXNpbmVzcyBaaXA8L2xhYmVsPlxuICAgICAgICAgIDxtZC1pbnB1dFxuICAgICAgICAgICAgdi1tb2RlbD1cImJ1c2luZXNzX3ppcGNvZGVcIlxuICAgICAgICAgICAgbmFtZT1cImJ1c2luZXNzX3ppcGNvZGVcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcbiAgICAgICAgICA+PC9tZC1pbnB1dD5cbiAgICAgICAgPC9tZC1maWVsZD5cbiAgICAgIDwvYi1jb2w+XG4gICAgPC9iLXJvdz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcInVzZXJcIiwgXCJlZGl0XCIsIFwic3RhdGVzXCJdLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1c2luZXNzSW1hZ2U6IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiLFxuICAgICAgYnVzaW5lc3NfZGVzaWduYXRpb246IFwiXCIsXG4gICAgICBidXNpbmVzc19uYW1lOiBcIlwiLFxuICAgICAgYnVzaW5lc3Nfc3RyZWV0X2FkZHJlc3M6IFwiXCIsXG4gICAgICBidXNpbmVzc196aXBjb2RlOiBcIlwiLFxuICAgICAgYnN0YXRlczogW10sXG4gICAgICBic2VsZWN0ZWRDaXR5OiBcIlwiLFxuICAgICAgYnNlbGVjdGVkU3RhdGU6IFwiXCIsXG4gICAgICBjaXRpZXMyOltdXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzKSB7XG4gICAgICB0aGlzLmJ1c2luZXNzSW1hZ2UgPSB0aGlzLnVzZXIuYnVzaW5lc3MuYnVzaW5lc3NfaW1hZ2VfcGF0aDtcbiAgICAgIHRoaXMuYnVzaW5lc3NfZGVzaWduYXRpb24gPSB0aGlzLnVzZXIuYnVzaW5lc3MuZGVzaWduYXRpb247XG4gICAgICB0aGlzLmJ1c2luZXNzX25hbWUgPSB0aGlzLnVzZXIuYnVzaW5lc3MuYnVzaW5lc3NfbmFtZTtcbiAgICAgIHRoaXMuYnVzaW5lc3Nfc3RyZWV0X2FkZHJlc3MgPSB0aGlzLnVzZXIuYnVzaW5lc3Muc3RyZWV0X2FkZHJlc3M7XG4gICAgICB0aGlzLmJzZWxlY3RlZENpdHkgPSB0aGlzLnVzZXIuYnVzaW5lc3MuY2l0eTtcbiAgICAgIHRoaXMuYnNlbGVjdGVkU3RhdGUgPSB0aGlzLnVzZXIuYnVzaW5lc3Muc3RhdGU7XG4gICAgICB0aGlzLmJ1c2luZXNzX3ppcGNvZGUgPSB0aGlzLnVzZXIuYnVzaW5lc3MuemlwY29kZTtcbiAgICB9XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIG9uRmlsZUNoYW5nZTIoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLmJ1c2luZXNzSW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0sXG5cbiAgICBnZXRDaXRpZXNGb3JBdXRvY29tcGxldGUoc2VhcmNoVGVybSkge1xuICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGlmICghc2VhcmNoVGVybSkge1xuICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXMyKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXNvbHZlKFxuICAgICAgICAgICAgICB0aGlzLmdldENpdGllczIodGVybSlcbiAgICAgICAgICAgICAgLy8gICB0aGlzLmNvdW50cnlMaXN0LmZpbHRlcigoeyBuYW1lIH0pID0+XG4gICAgICAgICAgICAgIC8vICAgICBuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybSlcbiAgICAgICAgICAgICAgLy8gICApXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gZ2V0U2VhcmNoQ2l0aWVzKCkge1xuICAgIC8vICAgaWYgKHRoaXMudGltZXIpIHtcbiAgICAvLyAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIC8vICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgICAgdGhpcy5nZXRDaXRpZXMyKCk7XG4gICAgLy8gICB9LCA3MDApO1xuICAgIC8vIH0sXG5cbiAgICBhc3luYyBnZXRDaXRpZXMyKHNlYXJjaGluZyA9IG51bGwpIHtcbiAgICAgIGxldCBwYXJhbTtcbiAgICAgIHBhcmFtID0ge1xuICAgICAgICBzZWFyY2g6IHNlYXJjaGluZyxcbiAgICAgIH07XG4gICAgICBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBcIi9kYXRhL3NlYXJjaGNpdGllc1wiLFxuICAgICAgICBwYXJhbXM6IHBhcmFtLFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuY2l0aWVzMiA9IHJlcy5kYXRhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQnVzaW5lc3MgSW5mb3JtYXRpb25cIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImItcm93XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uYnVzaW5lc3NJbWFnZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiQnVzaW5lc3MgTG9nb1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwibWQtZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJidXNpbmVzc19pbWFnZV9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZUNoYW5nZTIgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIlBvc2l0aW9uIC8gRGVzaWduYXRpb25cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJidXNpbmVzc19kZXNpZ25hdGlvblwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5idXNpbmVzc19kZXNpZ25hdGlvbixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5idXNpbmVzc19kZXNpZ25hdGlvbiA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJ1c2luZXNzX2Rlc2lnbmF0aW9uXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJPcmdhbml6YXRpb24gLyBCdXNpbmVzcyBOYW1lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IFwiYnVzaW5lc3NfbmFtZVwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5idXNpbmVzc19uYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmJ1c2luZXNzX25hbWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJidXNpbmVzc19uYW1lXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJCdXNpbmVzcyBTdHJlZXQgQWRkcmVzc1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBcImJ1c2luZXNzX3N0cmVldF9hZGRyZXNzXCIsXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJ1c2luZXNzX3N0cmVldF9hZGRyZXNzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmJ1c2luZXNzX3N0cmVldF9hZGRyZXNzID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYnVzaW5lc3Nfc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWF1dG9jb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibWQtaW5wdXQtbmFtZVwiOiBcImJ1c2luZXNzX2NpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtZC1vcHRpb25zXCI6IF92bS5jaXRpZXMyLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1kLWNoYW5nZWRcIjogX3ZtLmdldENpdGllc0ZvckF1dG9jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZC1vcGVuZWRcIjogX3ZtLmdldENpdGllc0ZvckF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBcIm1kLWF1dG9jb21wbGV0ZS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5ic2VsZWN0ZWRDaXR5LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmJzZWxlY3RlZENpdHkgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJic2VsZWN0ZWRDaXR5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJUb3duL0NvdW50eS9DaXR5XCIpXSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJmb250XCIgfSB9LCBbX3ZtLl92KFwiU3RhdGVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJtZC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwibWQtZGVuc2VcIjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJzZWxlY3RlZFN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYnNlbGVjdGVkU3RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJzZWxlY3RlZFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3RhdGVzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBpdGVtLmlkLCBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYnNlbGVjdGVkU3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJzZWxlY3RlZFN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYnVzaW5lc3Nfc3RhdGVcIiwgdHlwZTogXCJoaWRkZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmJzZWxlY3RlZFN0YXRlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJzZWxlY3RlZFN0YXRlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IG1kOiBcIjRcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJCdXNpbmVzcyBaaXBcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcIm1kLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJ1c2luZXNzX3ppcGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJ1c2luZXNzX3ppcGNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJ1c2luZXNzX3ppcGNvZGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYnVzaW5lc3NfemlwY29kZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThhMDc3ZmFjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9CdXNpbmVzc0luZm9ybWF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOGEwNzdmYWMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOGEwNzdmYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOGEwNzdmYWMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThhMDc3ZmFjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzhhMDc3ZmFjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvQnVzaW5lc3NJbmZvcm1hdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0J1c2luZXNzSW5mb3JtYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThhMDc3ZmFjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==