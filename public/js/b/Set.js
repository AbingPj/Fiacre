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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWU/OGI5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZT9iODFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudnVlP2ZmOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtLQTtBQUFBLFNBQ0Esb0xBREE7QUFBQSxFLENBRUE7QUFDQTs7O0FBQ0E7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLHdMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLDRMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9OQURBO0FBQUE7O0FBR0E7QUFDQTtBQUNBLDJDQURBO0FBRUE7QUFDQSw0Q0FIQTtBQUlBLHNDQUpBO0FBS0EsNENBTEE7QUFNQSx3Q0FOQTtBQU9BO0FBUEEsR0FEQTtBQVVBLFVBQ0EsWUFEQSxFQUVBLHNCQUZBLEVBR0EsYUFIQSxFQUlBLGFBSkEsRUFLQSxjQUxBLEVBTUEsb0JBTkEsRUFPQSx1QkFQ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QTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IscUJBQXFCO0FBQzNDLGlCQUFpQiwwQkFBMEI7QUFDM0Msa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3UEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1NldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0yXCI+U2V0dGluZ3M8L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgIDxuYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2IG5hdi10YWJzXCIgaWQ9XCJuYXYtdGFiXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMD8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vc3RvcmVwcm9maWxlXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAwPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+U3RvcmUgUHJvZmlsZTwvYT5cclxuICAgICAgICAgICAgPCEtLVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAxPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9tZW1iZXJzaGlwXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAxPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+TWVtYmVyc2hpcDwvYT5cclxuICAgICAgICAgICAgLS0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDI/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL2hvbWVwYWdlXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAyPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+SG9tZSBQYWdlIENvbnRlbnQ8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAzPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vYWJvdXR1c1wiXHJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gMz8gJ3RydWUnOidmYWxzZScgXCJcclxuICAgICAgICAgICAgPkFib3V0IFVzIENvbnRlbnQ8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA0PyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9mYXFzXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSA0PyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+RkFRYHMgQ29udGVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDU/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL3Rlcm1zXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSA1PyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+VGVybXMgQ29udGVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDY/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL3ByaXZhY3lcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDY/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5Qcml2YWN5IFBvbGljeSBDb250ZW50PC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgaWQ9XCJuYXYtdGFiQ29udGVudFwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMD8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1ob21lXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWhvbWUtdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXN0b3JlLXRhYlxyXG4gICAgICAgICAgICAgIHJlZj1cInN0b3JlX3RhYlwiXHJcbiAgICAgICAgICAgICAgOmFjdGlvbj1cInN0b3JlX2FjdGlvblwiXHJcbiAgICAgICAgICAgICAgOnByb3Bfc3RvcmU9XCJwcm9wX3N0b3JlXCJcclxuICAgICAgICAgICAgICA6cHJvcF9jaXRpZXM9XCJwcm9wX2NpdGllc1wiXHJcbiAgICAgICAgICAgICAgOnByb3Bfc3RhdGVzPVwicHJvcF9zdGF0ZXNcIlxyXG4gICAgICAgICAgICAgIDpjaXR5PVwicHJvcF9zdG9yZS5jaXR5XCJcclxuICAgICAgICAgICAgICA6c3RhdGU9XCJwcm9wX3N0b3JlLnN0YXRlXCJcclxuICAgICAgICAgICAgPjwvYWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAxPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LXByb2ZpbGVcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcHJvZmlsZS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8IS0tIDxhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlxyXG4gICAgICAgICAgICAgIHJlZj1cIm1lbWJlcnNoaXBfdGFiXCJcclxuICAgICAgICAgICAgICA6Y2hvaWNlcz1cInByb3Bfc3VuY2x1Yl9jaG9pY2VzXCJcclxuICAgICAgICAgICAgICA6cHJvcF9zdG9yZT1cInByb3Bfc3RvcmVcIlxyXG4gICAgICAgICAgICAgIDpzdW5jbHViX2FjdGlvbl9hZGQ9XCJzdW5jbHViX2FjdGlvbl9hZGRcIlxyXG4gICAgICAgICAgICAgIDpzdW5jbHViX2FjdGlvbl91cGRhdGU9XCJzdW5jbHViX2FjdGlvbl91cGRhdGVcIlxyXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYj4gLS0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8IS0tIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDI/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtcmVmZmVyYWxzXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXJlZmZlcmFscy10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtcmVmZmVyYWxzLWNvdXBvbiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1yZWZmZXJhbHMtY291cG9uPlxyXG4gICAgICAgICAgPC9kaXY+LS0+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1sYW5kaW5nXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWxhbmRpbmctdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1hYm91dFwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1hYm91dC10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA0PyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LWZhcXNcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtZmFxcy10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtZmFxcy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtZmFxcy10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA1PyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LXRlcm1zXCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXRlcm1zLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy10ZXJtcy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtdGVybXMtdGFiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gNj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1wcml2YWN5XCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXByaXZhY3ktdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXByaXZhY3ktdGFiIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLXByaXZhY3ktdGFiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCBTZXRTdG9yZVRhYiA9ICgpID0+XHJcbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9TdG9yZVRhYlwiICovIFwiLi90YWIxLnZ1ZVwiKTtcclxuLy8gY29uc3QgU2V0TWVtYmVyc2hpcFRhYiA9ICgpID0+XHJcbiAgLy8gaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9TZXRNZW1iZXJzaGlwVGFiXCIgKi8gXCIuL3RhYjIudnVlXCIpO1xyXG5jb25zdCB0YWJBYm91dFVzID0gKCkgPT5cclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYkFib3V0VXNcIiAqLyBcIi4vdGFiQWJvdXRVcy52dWVcIik7XHJcbmNvbnN0IHRhYkZhcXMgPSAoKSA9PlxyXG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiRmFxc1wiICovIFwiLi90YWJGYXFzLnZ1ZVwiKTtcclxuY29uc3QgdGFiUHJpdmFjeSA9ICgpID0+XHJcbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJQcml2YWN5XCIgKi8gXCIuL3RhYlByaXZhY3kudnVlXCIpO1xyXG5jb25zdCB0YWJUZXJtcyA9ICgpID0+XHJcbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJUZXJtc1wiICovIFwiLi90YWJUZXJtcy52dWVcIik7XHJcbmNvbnN0IHRhYkxhbmRpbmdQYWdlID0gKCkgPT5cclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYkxhbmRpbmdQYWdlXCIgKi8gXCIuL3RhYkxhbmRpbmdQYWdlLnZ1ZVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBcImFkbWluLXNldHRpbmdzLXN0b3JlLXRhYlwiOiBTZXRTdG9yZVRhYixcclxuICAgIC8vIFwiYWRtaW4tc2V0dGluZ3MtbWVtYmVyc2hpcC10YWJcIjogU2V0TWVtYmVyc2hpcFRhYixcclxuICAgIFwiYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWJcIjogdGFiQWJvdXRVcyxcclxuICAgIFwiYWRtaW4tc2V0dGluZ3MtZmFxcy10YWJcIjogdGFiRmFxcyxcclxuICAgIFwiYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWJcIjogdGFiUHJpdmFjeSxcclxuICAgIFwiYWRtaW4tc2V0dGluZ3MtdGVybXMtdGFiXCI6IHRhYlRlcm1zLFxyXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1sYW5kaW5nLXRhYlwiOiB0YWJMYW5kaW5nUGFnZSxcclxuICB9LFxyXG4gIHByb3BzOiBbXHJcbiAgICBcInByb3Bfc3RvcmVcIixcclxuICAgIFwicHJvcF9zdW5jbHViX2Nob2ljZXNcIixcclxuICAgIFwicHJvcF9zdGF0ZXNcIixcclxuICAgIFwicHJvcF9jaXRpZXNcIixcclxuICAgIFwic3RvcmVfYWN0aW9uXCIsXHJcbiAgICBcInN1bmNsdWJfYWN0aW9uX2FkZFwiLFxyXG4gICAgXCJzdW5jbHViX2FjdGlvbl91cGRhdGVcIixcclxuICAgIFwidGFiXCIsXHJcbiAgXSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlbGVjdGVkX3RhYjogMCxcclxuICAgIH07XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge30sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLnRhYiA9PSBcInN0b3JlcHJvZmlsZVwiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gMDtcclxuICAgIC8vICAgdGhpcy4kcmVmcy5zdG9yZV90YWIuc3RvcmUgPSB0aGlzLnByb3Bfc3RvcmU7XHJcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLmRpc3BsYXlJbWFnZSA9IHRoaXMucHJvcF9zdG9yZS5pbWFnZV9saW5rO1xyXG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5jaXRpZXMgPSB0aGlzLnByb3BfY2l0aWVzO1xyXG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5zdGF0ZXMgPSB0aGlzLnByb3Bfc3RhdGVzO1xyXG4gICAgLy8gfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcIm1lbWJlcnNoaXBcIikge1xyXG4gICAgLy8gIHRoaXMuc2VsZWN0ZWRfdGFiID0gMTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3Bfc3VuY2x1Yl9jaG9pY2VzKTtcclxuICAgICAgLy8gICB0aGlzLiRyZWZzLm1lbWJlcnNoaXBfdGFiLnN1bmNsdWJfY2hvaWNlcyA9IHRoaXMucHJvcF9zdW5jbHViX2Nob2ljZXM7XHJcbiAgICAgIC8vICAgdGhpcy4kcmVmcy5tZW1iZXJzaGlwX3RhYi5zdG9yZSA9IHRoaXMucHJvcF9zdG9yZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJsYW5kaW5nXCIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSAyO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcImFib3V0dXNcIikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDM7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFiID09IFwiZmFxc1wiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gNDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJ0ZXJtc1wiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gNTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJwcml2YWN5XCIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA2O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuY2l0eSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0b3JlLnN0YXRlKTtcclxuICAgIC8vIHRoaXMuJHJlZnMuc3RvcmVfdGFiLnNlbGVjdGVkQ2l0eSA9IHRoaXMucHJvcF9zdG9yZS5jaXR5O1xyXG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRTdGF0ZSA9IHRoaXMucHJvcF9zdG9yZS5zdGF0ZTtcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTJcIiB9LCBbXG4gICAgICAgIF9jKFwibmF2XCIsIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdiBuYXYtdGFic1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXYtdGFiXCIsIHJvbGU6IFwidGFibGlzdFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAwID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL3N0b3JlcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAwID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdG9yZSBQcm9maWxlXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9ob21lcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAyID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIb21lIFBhZ2UgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDMgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vYWJvdXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAzID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBYm91dCBVcyBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9mYXFzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkZBUWBzIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA1ID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL3Rlcm1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDUgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlRlcm1zIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA2ID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL3ByaXZhY3lcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gNiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUHJpdmFjeSBQb2xpY3kgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiLCBhdHRyczogeyBpZDogXCJuYXYtdGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAwID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWhvbWUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLXN0b3JlLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwic3RvcmVfdGFiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5zdG9yZV9hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb3Bfc3RvcmU6IF92bS5wcm9wX3N0b3JlLFxuICAgICAgICAgICAgICAgICAgICBwcm9wX2NpdGllczogX3ZtLnByb3BfY2l0aWVzLFxuICAgICAgICAgICAgICAgICAgICBwcm9wX3N0YXRlczogX3ZtLnByb3Bfc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBfdm0ucHJvcF9zdG9yZS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogX3ZtLnByb3Bfc3RvcmUuc3RhdGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAxID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1wcm9maWxlLXRhYlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDIgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtbGFuZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtbGFuZGluZy10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDMgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtYWJvdXRcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWFib3V0LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnByb3Bfc3RvcmUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNCA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1mYXFzXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1mYXFzLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1mYXFzLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnByb3Bfc3RvcmUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNSA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi10ZXJtc1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtdGVybXMtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLXRlcm1zLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnByb3Bfc3RvcmUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNiA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1wcml2YWN5XCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1wcml2YWN5LXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1wcml2YWN5LXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnByb3Bfc3RvcmUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMlwiIH0sIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNWYzODk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGU1ZjM4OTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGU1ZjM4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGU1ZjM4OTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTVmMzg5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZTVmMzg5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNWYzODk0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==