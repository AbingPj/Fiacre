(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Set"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
var SetStoreTab = function SetStoreTab() {
  return __webpack_require__.e(/*! import() | js/b/StoreTab */ "js/b/StoreTab").then(__webpack_require__.bind(null, /*! ./tab1.vue */ "./resources/js/backend/components/settings/tab1.vue"));
}; // const SetMembershipTab = () =>
// import(/* webpackChunkName: "js/b/SetMembershipTab" */ "./tab2.vue");


var tabAboutUs = function tabAboutUs() {
  return __webpack_require__.e(/*! import() | js/b/tabAboutUs */ "js/b/tabAboutUs").then(__webpack_require__.bind(null, /*! ./tabAboutUs.vue */ "./resources/js/backend/components/settings/tabAboutUs.vue"));
};

var tabFaqs = function tabFaqs() {
  return __webpack_require__.e(/*! import() | js/b/tabFaqs */ "js/b/tabFaqs").then(__webpack_require__.bind(null, /*! ./tabFaqs.vue */ "./resources/js/backend/components/settings/tabFaqs.vue"));
};

var tabPrivacy = function tabPrivacy() {
  return __webpack_require__.e(/*! import() | js/b/tabPrivacy */ "js/b/tabPrivacy").then(__webpack_require__.bind(null, /*! ./tabPrivacy.vue */ "./resources/js/backend/components/settings/tabPrivacy.vue"));
};

var tabTerms = function tabTerms() {
  return __webpack_require__.e(/*! import() | js/b/tabTerms */ "js/b/tabTerms").then(__webpack_require__.bind(null, /*! ./tabTerms.vue */ "./resources/js/backend/components/settings/tabTerms.vue"));
};

var tabLandingPage = function tabLandingPage() {
  return __webpack_require__.e(/*! import() | js/b/tabLandingPage */ "js/b/tabLandingPage").then(__webpack_require__.bind(null, /*! ./tabLandingPage.vue */ "./resources/js/backend/components/settings/tabLandingPage.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "admin-settings-store-tab": SetStoreTab,
    // "admin-settings-membership-tab": SetMembershipTab,
    "admin-settings-aboutus-tab": tabAboutUs,
    "admin-settings-faqs-tab": tabFaqs,
    "admin-settings-privacy-tab": tabPrivacy,
    "admin-settings-terms-tab": tabTerms,
    "admin-settings-landing-tab": tabLandingPage
  },
  props: ["prop_store", "prop_sunclub_choices", "prop_states", "prop_cities", "store_action", "sunclub_action_add", "sunclub_action_update", "tab"],
  data: function data() {
    return {
      selected_tab: 0
    };
  },
  created: function created() {},
  mounted: function mounted() {
    if (this.tab == "storeprofile") {
      this.selected_tab = 0; //   this.$refs.store_tab.store = this.prop_store;
      //   this.$refs.store_tab.displayImage = this.prop_store.image_link;
      //   this.$refs.store_tab.cities = this.prop_cities;
      //   this.$refs.store_tab.states = this.prop_states;
      // } else if (this.tab == "membership") {
      //  this.selected_tab = 1;
      //   console.log(this.prop_sunclub_choices);
      //   this.$refs.membership_tab.sunclub_choices = this.prop_sunclub_choices;
      //   this.$refs.membership_tab.store = this.prop_store;
    } else if (this.tab == "landing") {
      this.selected_tab = 2;
    } else if (this.tab == "aboutus") {
      this.selected_tab = 3;
    } else if (this.tab == "faqs") {
      this.selected_tab = 4;
    } else if (this.tab == "terms") {
      this.selected_tab = 5;
    } else if (this.tab == "privacy") {
      this.selected_tab = 6;
    } // console.log(this.store.city);
    // console.log(this.store.state);
    // this.$refs.store_tab.selectedCity = this.prop_store.city;
    // this.$refs.store_tab.selectedState = this.prop_store.state;

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("nav", [
          _c(
            "div",
            {
              staticClass: "nav nav-tabs",
              attrs: { id: "nav-tab", role: "tablist" }
            },
            [
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 0 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/storeprofile",
                    "aria-selected": _vm.selected_tab == 0 ? "true" : "false"
                  }
                },
                [_vm._v("Store Profile")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 2 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/homepage",
                    "aria-selected": _vm.selected_tab == 2 ? "true" : "false"
                  }
                },
                [_vm._v("Home Page Content")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 3 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/aboutus",
                    "aria-selected": _vm.selected_tab == 3 ? "true" : "false"
                  }
                },
                [_vm._v("About Us Content")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 4 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/faqs",
                    "aria-selected": _vm.selected_tab == 4 ? "true" : "false"
                  }
                },
                [_vm._v("FAQ`s Content")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 5 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/terms",
                    "aria-selected": _vm.selected_tab == 5 ? "true" : "false"
                  }
                },
                [_vm._v("Terms Content")]
              ),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "nav-item nav-link",
                  class: _vm.selected_tab == 6 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/privacy",
                    "aria-selected": _vm.selected_tab == 6 ? "true" : "false"
                  }
                },
                [_vm._v("Privacy Policy Content")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "tab-content", attrs: { id: "nav-tabContent" } },
          [
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 0 ? "active show" : "",
                attrs: {
                  id: "nav-home",
                  role: "tabpanel",
                  "aria-labelledby": "nav-home-tab"
                }
              },
              [
                _c("admin-settings-store-tab", {
                  ref: "store_tab",
                  attrs: {
                    action: _vm.store_action,
                    prop_store: _vm.prop_store,
                    prop_cities: _vm.prop_cities,
                    prop_states: _vm.prop_states,
                    city: _vm.prop_store.city,
                    state: _vm.prop_store.state
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              staticClass: "tab-pane fade",
              class: _vm.selected_tab == 1 ? "active show" : "",
              attrs: {
                id: "nav-profile",
                role: "tabpanel",
                "aria-labelledby": "nav-profile-tab"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 2 ? "active show" : "",
                attrs: {
                  id: "nav-landing",
                  role: "tabpanel",
                  "aria-labelledby": "nav-landing-tab"
                }
              },
              [
                _c("admin-settings-landing-tab", {
                  attrs: { store: _vm.prop_store }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 3 ? "active show" : "",
                attrs: {
                  id: "nav-about",
                  role: "tabpanel",
                  "aria-labelledby": "nav-about-tab"
                }
              },
              [
                _c("admin-settings-aboutus-tab", {
                  attrs: { store: _vm.prop_store }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 4 ? "active show" : "",
                attrs: {
                  id: "nav-faqs",
                  role: "tabpanel",
                  "aria-labelledby": "nav-faqs-tab"
                }
              },
              [
                _c("admin-settings-faqs-tab", {
                  attrs: { store: _vm.prop_store }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 5 ? "active show" : "",
                attrs: {
                  id: "nav-terms",
                  role: "tabpanel",
                  "aria-labelledby": "nav-terms-tab"
                }
              },
              [
                _c("admin-settings-terms-tab", {
                  attrs: { store: _vm.prop_store }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 6 ? "active show" : "",
                attrs: {
                  id: "nav-privacy",
                  role: "tabpanel",
                  "aria-labelledby": "nav-privacy-tab"
                }
              },
              [
                _c("admin-settings-privacy-tab", {
                  attrs: { store: _vm.prop_store }
                })
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-2" }, [_vm._v("Settings")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/settings/index.vue":
/*!************************************************************!*\
  !*** ./resources/js/backend/components/settings/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4e5f3894& */ "./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4e5f3894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/index.vue?vue&type=template&id=4e5f3894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4e5f3894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWU/OGI5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZT9iODFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudnVlP2ZmOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtLQTtBQUFBLFNBQ0Esb0xBREE7QUFBQSxFLENBRUE7QUFDQTs7O0FBQ0E7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLHdMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLDRMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9OQURBO0FBQUE7O0FBR0E7QUFDQTtBQUNBLDJDQURBO0FBRUE7QUFDQSw0Q0FIQTtBQUlBLHNDQUpBO0FBS0EsNENBTEE7QUFNQSx3Q0FOQTtBQU9BO0FBUEEsR0FEQTtBQVVBLFVBQ0EsWUFEQSxFQUVBLHNCQUZBLEVBR0EsYUFIQSxFQUlBLGFBSkEsRUFLQSxjQUxBLEVBTUEsb0JBTkEsRUFPQSx1QkFQ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QTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0Msa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3UEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMlwiPlNldHRpbmdzPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAwPyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vc3RvcmVwcm9maWxlXCJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gMD8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5TdG9yZSBQcm9maWxlPC9hPlxuICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAxPyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vbWVtYmVyc2hpcFwiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDE/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+TWVtYmVyc2hpcDwvYT5cbiAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAyPyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vaG9tZXBhZ2VcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAyPyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPkhvbWUgUGFnZSBDb250ZW50PC9hPlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDM/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vYWJvdXR1c1wiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDM/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+QWJvdXQgVXMgQ29udGVudDwvYT5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA0PyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vZmFxc1wiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDQ/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+RkFRYHMgQ29udGVudDwvYT5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA1PyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vdGVybXNcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSA1PyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPlRlcm1zIENvbnRlbnQ8L2E+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gNj8gJ2FjdGl2ZSc6JycgXCJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL3ByaXZhY3lcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSA2PyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPlByaXZhY3kgUG9saWN5IENvbnRlbnQ8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAwPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1ob21lXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtaG9tZS10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1zdG9yZS10YWJcbiAgICAgICAgICAgICAgcmVmPVwic3RvcmVfdGFiXCJcbiAgICAgICAgICAgICAgOmFjdGlvbj1cInN0b3JlX2FjdGlvblwiXG4gICAgICAgICAgICAgIDpwcm9wX3N0b3JlPVwicHJvcF9zdG9yZVwiXG4gICAgICAgICAgICAgIDpwcm9wX2NpdGllcz1cInByb3BfY2l0aWVzXCJcbiAgICAgICAgICAgICAgOnByb3Bfc3RhdGVzPVwicHJvcF9zdGF0ZXNcIlxuICAgICAgICAgICAgICA6Y2l0eT1cInByb3Bfc3RvcmUuY2l0eVwiXG4gICAgICAgICAgICAgIDpzdGF0ZT1cInByb3Bfc3RvcmUuc3RhdGVcIlxuICAgICAgICAgICAgPjwvYWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMT8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtcHJvZmlsZVwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXByb2ZpbGUtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8IS0tIDxhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlxuICAgICAgICAgICAgICByZWY9XCJtZW1iZXJzaGlwX3RhYlwiXG4gICAgICAgICAgICAgIDpjaG9pY2VzPVwicHJvcF9zdW5jbHViX2Nob2ljZXNcIlxuICAgICAgICAgICAgICA6cHJvcF9zdG9yZT1cInByb3Bfc3RvcmVcIlxuICAgICAgICAgICAgICA6c3VuY2x1Yl9hY3Rpb25fYWRkPVwic3VuY2x1Yl9hY3Rpb25fYWRkXCJcbiAgICAgICAgICAgICAgOnN1bmNsdWJfYWN0aW9uX3VwZGF0ZT1cInN1bmNsdWJfYWN0aW9uX3VwZGF0ZVwiXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYj4gLS0+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtcmVmZmVyYWxzXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcmVmZmVyYWxzLXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXJlZmZlcmFscy1jb3Vwb24gOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtcmVmZmVyYWxzLWNvdXBvbj5cbiAgICAgICAgICA8L2Rpdj4tLT5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtbGFuZGluZ1wiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWxhbmRpbmctdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDM/ICdhY3RpdmUgc2hvdyc6JycgXCJcbiAgICAgICAgICAgIGlkPVwibmF2LWFib3V0XCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtYWJvdXQtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDQ/ICdhY3RpdmUgc2hvdyc6JycgXCJcbiAgICAgICAgICAgIGlkPVwibmF2LWZhcXNcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1mYXFzLXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLWZhcXMtdGFiIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLWZhcXMtdGFiPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA1PyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi10ZXJtc1wiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXRlcm1zLXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXRlcm1zLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy10ZXJtcy10YWI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDY/ICdhY3RpdmUgc2hvdyc6JycgXCJcbiAgICAgICAgICAgIGlkPVwibmF2LXByaXZhY3lcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1wcml2YWN5LXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXByaXZhY3ktdGFiIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLXByaXZhY3ktdGFiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5jb25zdCBTZXRTdG9yZVRhYiA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvU3RvcmVUYWJcIiAqLyBcIi4vdGFiMS52dWVcIik7XG4vLyBjb25zdCBTZXRNZW1iZXJzaGlwVGFiID0gKCkgPT5cbiAgLy8gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9TZXRNZW1iZXJzaGlwVGFiXCIgKi8gXCIuL3RhYjIudnVlXCIpO1xuY29uc3QgdGFiQWJvdXRVcyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiQWJvdXRVc1wiICovIFwiLi90YWJBYm91dFVzLnZ1ZVwiKTtcbmNvbnN0IHRhYkZhcXMgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYkZhcXNcIiAqLyBcIi4vdGFiRmFxcy52dWVcIik7XG5jb25zdCB0YWJQcml2YWN5ID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJQcml2YWN5XCIgKi8gXCIuL3RhYlByaXZhY3kudnVlXCIpO1xuY29uc3QgdGFiVGVybXMgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYlRlcm1zXCIgKi8gXCIuL3RhYlRlcm1zLnZ1ZVwiKTtcbmNvbnN0IHRhYkxhbmRpbmdQYWdlID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJMYW5kaW5nUGFnZVwiICovIFwiLi90YWJMYW5kaW5nUGFnZS52dWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgY29tcG9uZW50czoge1xuICAgIFwiYWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiXCI6IFNldFN0b3JlVGFiLFxuICAgIC8vIFwiYWRtaW4tc2V0dGluZ3MtbWVtYmVyc2hpcC10YWJcIjogU2V0TWVtYmVyc2hpcFRhYixcbiAgICBcImFkbWluLXNldHRpbmdzLWFib3V0dXMtdGFiXCI6IHRhYkFib3V0VXMsXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1mYXFzLXRhYlwiOiB0YWJGYXFzLFxuICAgIFwiYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWJcIjogdGFiUHJpdmFjeSxcbiAgICBcImFkbWluLXNldHRpbmdzLXRlcm1zLXRhYlwiOiB0YWJUZXJtcyxcbiAgICBcImFkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiXCI6IHRhYkxhbmRpbmdQYWdlLFxuICB9LFxuICBwcm9wczogW1xuICAgIFwicHJvcF9zdG9yZVwiLFxuICAgIFwicHJvcF9zdW5jbHViX2Nob2ljZXNcIixcbiAgICBcInByb3Bfc3RhdGVzXCIsXG4gICAgXCJwcm9wX2NpdGllc1wiLFxuICAgIFwic3RvcmVfYWN0aW9uXCIsXG4gICAgXCJzdW5jbHViX2FjdGlvbl9hZGRcIixcbiAgICBcInN1bmNsdWJfYWN0aW9uX3VwZGF0ZVwiLFxuICAgIFwidGFiXCIsXG4gIF0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VsZWN0ZWRfdGFiOiAwLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7fSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy50YWIgPT0gXCJzdG9yZXByb2ZpbGVcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSAwO1xuICAgIC8vICAgdGhpcy4kcmVmcy5zdG9yZV90YWIuc3RvcmUgPSB0aGlzLnByb3Bfc3RvcmU7XG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5kaXNwbGF5SW1hZ2UgPSB0aGlzLnByb3Bfc3RvcmUuaW1hZ2VfbGluaztcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLmNpdGllcyA9IHRoaXMucHJvcF9jaXRpZXM7XG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5zdGF0ZXMgPSB0aGlzLnByb3Bfc3RhdGVzO1xuICAgIC8vIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJtZW1iZXJzaGlwXCIpIHtcbiAgICAvLyAgdGhpcy5zZWxlY3RlZF90YWIgPSAxO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3Bfc3VuY2x1Yl9jaG9pY2VzKTtcbiAgICAgIC8vICAgdGhpcy4kcmVmcy5tZW1iZXJzaGlwX3RhYi5zdW5jbHViX2Nob2ljZXMgPSB0aGlzLnByb3Bfc3VuY2x1Yl9jaG9pY2VzO1xuICAgICAgLy8gICB0aGlzLiRyZWZzLm1lbWJlcnNoaXBfdGFiLnN0b3JlID0gdGhpcy5wcm9wX3N0b3JlO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJsYW5kaW5nXCIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFiID09IFwiYWJvdXR1c1wiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcImZhcXNcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJ0ZXJtc1wiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcInByaXZhY3lcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA2O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuY2l0eSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5zdGF0ZSk7XG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRDaXR5ID0gdGhpcy5wcm9wX3N0b3JlLmNpdHk7XG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRTdGF0ZSA9IHRoaXMucHJvcF9zdG9yZS5zdGF0ZTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcIm5hdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9zdG9yZXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gMCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RvcmUgUHJvZmlsZVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vaG9tZXBhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gMiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSG9tZSBQYWdlIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAzID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL2Fib3V0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gMyA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWJvdXQgVXMgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDQgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vZmFxc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSA0ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJGQVFgcyBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi90ZXJtc1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSA1ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJUZXJtcyBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9wcml2YWN5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDYgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlByaXZhY3kgUG9saWN5IENvbnRlbnRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLWNvbnRlbnRcIiwgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYkNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMCA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1ob21lXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1ob21lLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1zdG9yZS10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcInN0b3JlX3RhYlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBfdm0uc3RvcmVfYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBwcm9wX3N0b3JlOiBfdm0ucHJvcF9zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvcF9jaXRpZXM6IF92bS5wcm9wX2NpdGllcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcF9zdGF0ZXM6IF92bS5wcm9wX3N0YXRlcyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogX3ZtLnByb3Bfc3RvcmUuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IF92bS5wcm9wX3N0b3JlLnN0YXRlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMSA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgaWQ6IFwibmF2LXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAyID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWxhbmRpbmdcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWxhbmRpbmctdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAzID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWFib3V0XCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1hYm91dC10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDQgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtZmFxc1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtZmFxcy10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtZmFxcy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDUgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtdGVybXNcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LXRlcm1zLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy10ZXJtcy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDYgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJpdmFjeVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJpdmFjeS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTJcIiB9LCBbX3ZtLl92KFwiU2V0dGluZ3NcIildKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTVmMzg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGU1ZjM4OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGU1ZjM4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGU1ZjM4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTVmMzg5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZTVmMzg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNWYzODk0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==