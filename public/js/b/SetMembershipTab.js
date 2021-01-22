(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/SetMembershipTab"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["sunclub_action_add", "sunclub_action_update", "choices", "prop_store"],
  data: function data() {
    return {
      action: "",
      store: {},
      sunclub_choices: []
    };
  },
  created: function created() {
    this.sunclub_choices = this.choices;
    this.store = this.prop_store;
  },
  methods: {
    updateModalShow: function updateModalShow(item) {
      this.$refs.updateModal.id = item.id;
      this.$refs.updateModal.name = item.name;
      this.$refs.updateModal.price = item.price;
      this.$refs.updateModal.discount = item.discount;
      this.$refs.updateModal.membership_fee = item.membership_fee;
      $("#editChoicesModal").modal("show");
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      if (value == null) {
        return "0.00";
      } else {
        var n = parseFloat(value).toFixed(2);
        var withCommas = Number(n).toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        });
        return withCommas;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489& ***!
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
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(2),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.sunclub_choices, function(item, index) {
                return _c("tr", { key: index }, [
                  _c("td", { staticClass: "ml-2" }, [
                    _vm._v(_vm._s(item.name))
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "$ " + _vm._s(_vm.displayNumberWithComma(item.price))
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(item.discount) + " %")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      "$ " +
                        _vm._s(_vm.displayNumberWithComma(item.membership_fee))
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-sm btn-info",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.updateModalShow(item)
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "fas fa-pencil-alt mr-2" }),
                        _vm._v(" Edit")
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "ml-3 col-md-5" })
      ]),
      _vm._v(" "),
      _c("admin-settings-membership-edit-modal", {
        ref: "updateModal",
        attrs: { action: _vm.sunclub_action_update }
      }),
      _vm._v(" "),
      _c("admin-settings-membership-add-modal", {
        attrs: { action: _vm.sunclub_action_add }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h5", [_c("b", [_vm._v("Annual Pre-payment Option")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-6" }, [
        _c("label", { attrs: { for: "" } }, [_vm._v("Sun Club Choices:")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-sm-6" }, [
        _c("div", { staticClass: "float-right" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-success btn-sm",
              attrs: {
                type: "button",
                "data-toggle": "modal",
                "data-target": "#addChoicesModal"
              }
            },
            [
              _c("i", { staticClass: "fas fa-plus-square mr-2" }),
              _vm._v(" Add")
            ]
          )
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "ml-2" }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Prepaid Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Discount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Membership Fee")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/settings/tab2.vue":
/*!***********************************************************!*\
  !*** ./resources/js/backend/components/settings/tab2.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab2.vue?vue&type=template&id=43806489& */ "./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489&");
/* harmony import */ var _tab2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tab2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/tab2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tab2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tab2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tab2.vue?vue&type=template&id=43806489& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tab2.vue?vue&type=template&id=43806489&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tab2_vue_vue_type_template_id_43806489___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjIudnVlP2IzODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYjIudnVlPzY3OWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWIyLnZ1ZT9lOGVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1GQTtBQUNBLGlGQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxlQUZBO0FBR0E7QUFIQTtBQUtBLEdBUkE7QUFVQSxTQVZBLHFCQVVBO0FBQ0E7QUFDQTtBQUNBLEdBYkE7QUFjQTtBQUNBLG1CQURBLDJCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7QUFTQSwwQkFUQSxrQ0FTQSxLQVRBLEVBU0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQXBCQTtBQWRBLEc7Ozs7Ozs7Ozs7OztBQ25GQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QyxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDLDRCQUE0QixzQkFBc0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpQkFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLGlDQUFpQyx3Q0FBd0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFCQUFxQjtBQUMzQyxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0MscUJBQXFCLFNBQVMsVUFBVSxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDLG1CQUFtQiw2QkFBNkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsdUJBQXVCLHlDQUF5QztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1NldE1lbWJlcnNoaXBUYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxoNT5cbiAgICAgICAgICA8Yj5Bbm51YWwgUHJlLXBheW1lbnQgT3B0aW9uPC9iPlxuICAgICAgICA8L2g1PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+U0FWRTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj4tLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGJyIC8+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+VVNEPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInByaWNlXCIgbmFtZT1cInByaWNlXCIgdmFsdWUgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1saWdodCBidG4tc21cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I+U3VuIENsdWIgQ2hvaWNlczo8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRhcmdldD1cIiNhZGRDaG9pY2VzTW9kYWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiXG4gICAgICAgICAgICAgID48aSBjbGFzcz1cImZhcyBmYS1wbHVzLXNxdWFyZSBtci0yXCI+PC9pPiBBZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8IS0tIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPiAtLT5cbiAgICAgICAgICAgICAgPCEtLSA8dGg+aWQ8L3RoPiAtLT5cbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwibWwtMlwiPk5hbWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+UHJlcGFpZCBBbW91bnQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+RGlzY291bnQ8L3RoPlxuICAgICAgICAgICAgICA8dGg+TWVtYmVyc2hpcCBGZWU8L3RoPlxuICAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdW5jbHViX2Nob2ljZXNcIiA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgPCEtLSA8dGQ+e3tpdGVtLmlkfX08L3RkPiAtLT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwibWwtMlwiPnt7aXRlbS5uYW1lfX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+JCB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSl9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD57e2l0ZW0uZGlzY291bnR9fSAlPC90ZD5cbiAgICAgICAgICAgICAgPHRkPiQge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ubWVtYmVyc2hpcF9mZWUpfX08L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBkYXRlTW9kYWxTaG93KGl0ZW0pXCJcbiAgICAgICAgICAgICAgICA+PGkgY2xhc3M9XCJmYXMgZmEtcGVuY2lsLWFsdCBtci0yXCI+PC9pPiBFZGl0PC9idXR0b24+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTMgY29sLW1kLTVcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLWVkaXQtbW9kYWwgOmFjdGlvbj1cInN1bmNsdWJfYWN0aW9uX3VwZGF0ZVwiIHJlZj1cInVwZGF0ZU1vZGFsXCI+PC9hZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLWVkaXQtbW9kYWw+XG4gICAgPGFkbWluLXNldHRpbmdzLW1lbWJlcnNoaXAtYWRkLW1vZGFsIDphY3Rpb249XCJzdW5jbHViX2FjdGlvbl9hZGRcIj48L2FkbWluLXNldHRpbmdzLW1lbWJlcnNoaXAtYWRkLW1vZGFsPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wic3VuY2x1Yl9hY3Rpb25fYWRkXCIsIFwic3VuY2x1Yl9hY3Rpb25fdXBkYXRlXCIsIFwiY2hvaWNlc1wiLCBcInByb3Bfc3RvcmVcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGlvbjogXCJcIixcbiAgICAgIHN0b3JlOiB7fSxcbiAgICAgIHN1bmNsdWJfY2hvaWNlczogW10sXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuc3VuY2x1Yl9jaG9pY2VzID0gdGhpcy5jaG9pY2VzO1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnByb3Bfc3RvcmU7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVNb2RhbFNob3coaXRlbSkge1xuICAgICAgdGhpcy4kcmVmcy51cGRhdGVNb2RhbC5pZCA9IGl0ZW0uaWQ7XG4gICAgICB0aGlzLiRyZWZzLnVwZGF0ZU1vZGFsLm5hbWUgPSBpdGVtLm5hbWU7XG4gICAgICB0aGlzLiRyZWZzLnVwZGF0ZU1vZGFsLnByaWNlID0gaXRlbS5wcmljZTtcbiAgICAgIHRoaXMuJHJlZnMudXBkYXRlTW9kYWwuZGlzY291bnQgPSBpdGVtLmRpc2NvdW50O1xuICAgICAgdGhpcy4kcmVmcy51cGRhdGVNb2RhbC5tZW1iZXJzaGlwX2ZlZSA9IGl0ZW0ubWVtYmVyc2hpcF9mZWU7XG4gICAgICAkKFwiI2VkaXRDaG9pY2VzTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIH0sXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFwiMC4wMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcbiAgICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XG4gICAgICB9XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOFwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN1bmNsdWJfY2hvaWNlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICsgX3ZtLl9zKF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZGlzY291bnQpICsgXCIgJVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLm1lbWJlcnNoaXBfZmVlKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlTW9kYWxTaG93KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wZW5jaWwtYWx0IG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBFZGl0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMyBjb2wtbWQtNVwiIH0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFkbWluLXNldHRpbmdzLW1lbWJlcnNoaXAtZWRpdC1tb2RhbFwiLCB7XG4gICAgICAgIHJlZjogXCJ1cGRhdGVNb2RhbFwiLFxuICAgICAgICBhdHRyczogeyBhY3Rpb246IF92bS5zdW5jbHViX2FjdGlvbl91cGRhdGUgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLWFkZC1tb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGFjdGlvbjogX3ZtLnN1bmNsdWJfYWN0aW9uX2FkZCB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDVcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiQW5udWFsIFByZS1wYXltZW50IE9wdGlvblwiKV0pXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNlwiIH0sIFtcbiAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJcIiB9IH0sIFtfdm0uX3YoXCJTdW4gQ2x1YiBDaG9pY2VzOlwiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRvZ2dsZVwiOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJkYXRhLXRhcmdldFwiOiBcIiNhZGRDaG9pY2VzTW9kYWxcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cy1zcXVhcmUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgQWRkXCIpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwibWwtMlwiIH0sIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlByZXBhaWQgQW1vdW50XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRpc2NvdW50XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk1lbWJlcnNoaXAgRmVlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdGlvbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFiMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDM4MDY0ODkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFiMi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYjIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0MzgwNjQ4OScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0MzgwNjQ4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0MzgwNjQ4OScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFiMi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDM4MDY0ODkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDM4MDY0ODknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvdGFiMi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYjIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYjIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYjIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzODA2NDg5JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==