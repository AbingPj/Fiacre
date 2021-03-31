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
            _c(
              "div",
              {
                staticClass: "tab-pane fade",
                class: _vm.selected_tab == 1 ? "active show" : "",
                attrs: {
                  id: "nav-profile",
                  role: "tabpanel",
                  "aria-labelledby": "nav-profile-tab"
                }
              },
              [
                _c("admin-settings-membership-tab", {
                  ref: "membership_tab",
                  attrs: {
                    choices: _vm.prop_sunclub_choices,
                    prop_store: _vm.prop_store,
                    sunclub_action_add: _vm.sunclub_action_add,
                    sunclub_action_update: _vm.sunclub_action_update
                  }
                })
              ],
              1
            ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWU/OGI5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZT9iODFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudnVlP2ZmOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtLQTtBQUFBLFNBQ0Esb0xBREE7QUFBQSxFLENBRUE7QUFDQTs7O0FBQ0E7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLHdMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9NQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLDRMQURBO0FBQUE7O0FBRUE7QUFBQSxTQUNBLG9OQURBO0FBQUE7O0FBR0E7QUFDQTtBQUNBLDJDQURBO0FBRUE7QUFDQSw0Q0FIQTtBQUlBLHNDQUpBO0FBS0EsNENBTEE7QUFNQSx3Q0FOQTtBQU9BO0FBUEEsR0FEQTtBQVVBLFVBQ0EsWUFEQSxFQUVBLHNCQUZBLEVBR0EsYUFIQSxFQUlBLGFBSkEsRUFLQSxjQUxBLEVBTUEsb0JBTkEsRUFPQSx1QkFQ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QUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0MsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTJcIj5TZXR0aW5nczwvaDI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiBpZD1cIm5hdi10YWJcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAwPyAnYWN0aXZlJzonJyBcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9zdG9yZXByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDA/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5TdG9yZSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICA8IS0tXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDE/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL21lbWJlcnNoaXBcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDE/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5NZW1iZXJzaGlwPC9hPlxyXG4gICAgICAgICAgICAtLT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMj8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vaG9tZXBhZ2VcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDI/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5Ib21lIFBhZ2UgQ29udGVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDM/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9hYm91dHVzXCJcclxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAzPyAndHJ1ZSc6J2ZhbHNlJyBcIlxyXG4gICAgICAgICAgICA+QWJvdXQgVXMgQ29udGVudDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDQ/ICdhY3RpdmUnOicnIFwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9zZXR0aW5ncy9tYWluL2ZhcXNcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDQ/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5GQVFgcyBDb250ZW50PC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gNT8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vdGVybXNcIlxyXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDU/ICd0cnVlJzonZmFsc2UnIFwiXHJcbiAgICAgICAgICAgID5UZXJtcyBDb250ZW50PC9hPlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcclxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gNj8gJ2FjdGl2ZSc6JycgXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vcHJpdmFjeVwiXHJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gNj8gJ3RydWUnOidmYWxzZScgXCJcclxuICAgICAgICAgICAgPlByaXZhY3kgUG9saWN5IENvbnRlbnQ8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiBpZD1cIm5hdi10YWJDb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAwPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LWhvbWVcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtaG9tZS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiXHJcbiAgICAgICAgICAgICAgcmVmPVwic3RvcmVfdGFiXCJcclxuICAgICAgICAgICAgICA6YWN0aW9uPVwic3RvcmVfYWN0aW9uXCJcclxuICAgICAgICAgICAgICA6cHJvcF9zdG9yZT1cInByb3Bfc3RvcmVcIlxyXG4gICAgICAgICAgICAgIDpwcm9wX2NpdGllcz1cInByb3BfY2l0aWVzXCJcclxuICAgICAgICAgICAgICA6cHJvcF9zdGF0ZXM9XCJwcm9wX3N0YXRlc1wiXHJcbiAgICAgICAgICAgICAgOmNpdHk9XCJwcm9wX3N0b3JlLmNpdHlcIlxyXG4gICAgICAgICAgICAgIDpzdGF0ZT1cInByb3Bfc3RvcmUuc3RhdGVcIlxyXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1zdG9yZS10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDE/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtcHJvZmlsZVwiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1wcm9maWxlLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlxyXG4gICAgICAgICAgICAgIHJlZj1cIm1lbWJlcnNoaXBfdGFiXCJcclxuICAgICAgICAgICAgICA6Y2hvaWNlcz1cInByb3Bfc3VuY2x1Yl9jaG9pY2VzXCJcclxuICAgICAgICAgICAgICA6cHJvcF9zdG9yZT1cInByb3Bfc3RvcmVcIlxyXG4gICAgICAgICAgICAgIDpzdW5jbHViX2FjdGlvbl9hZGQ9XCJzdW5jbHViX2FjdGlvbl9hZGRcIlxyXG4gICAgICAgICAgICAgIDpzdW5jbHViX2FjdGlvbl91cGRhdGU9XCJzdW5jbHViX2FjdGlvbl91cGRhdGVcIlxyXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwhLS0gPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxyXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxyXG4gICAgICAgICAgICBpZD1cIm5hdi1yZWZmZXJhbHNcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcmVmZmVyYWxzLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1yZWZmZXJhbHMtY291cG9uIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLXJlZmZlcmFscy1jb3Vwb24+XHJcbiAgICAgICAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAyPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LWxhbmRpbmdcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtbGFuZGluZy10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAzPyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LWFib3V0XCJcclxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWFib3V0LXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDQ/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtZmFxc1wiXHJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1mYXFzLXRhYlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1mYXFzLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1mYXFzLXRhYj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcclxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDU/ICdhY3RpdmUgc2hvdyc6JycgXCJcclxuICAgICAgICAgICAgaWQ9XCJuYXYtdGVybXNcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtdGVybXMtdGFiXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXRlcm1zLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy10ZXJtcy10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXHJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA2PyAnYWN0aXZlIHNob3cnOicnIFwiXHJcbiAgICAgICAgICAgIGlkPVwibmF2LXByaXZhY3lcIlxyXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcHJpdmFjeS10YWJcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmNvbnN0IFNldFN0b3JlVGFiID0gKCkgPT5cclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1N0b3JlVGFiXCIgKi8gXCIuL3RhYjEudnVlXCIpO1xyXG4vLyBjb25zdCBTZXRNZW1iZXJzaGlwVGFiID0gKCkgPT5cclxuICAvLyBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1NldE1lbWJlcnNoaXBUYWJcIiAqLyBcIi4vdGFiMi52dWVcIik7XHJcbmNvbnN0IHRhYkFib3V0VXMgPSAoKSA9PlxyXG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiQWJvdXRVc1wiICovIFwiLi90YWJBYm91dFVzLnZ1ZVwiKTtcclxuY29uc3QgdGFiRmFxcyA9ICgpID0+XHJcbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJGYXFzXCIgKi8gXCIuL3RhYkZhcXMudnVlXCIpO1xyXG5jb25zdCB0YWJQcml2YWN5ID0gKCkgPT5cclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYlByaXZhY3lcIiAqLyBcIi4vdGFiUHJpdmFjeS52dWVcIik7XHJcbmNvbnN0IHRhYlRlcm1zID0gKCkgPT5cclxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYlRlcm1zXCIgKi8gXCIuL3RhYlRlcm1zLnZ1ZVwiKTtcclxuY29uc3QgdGFiTGFuZGluZ1BhZ2UgPSAoKSA9PlxyXG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiTGFuZGluZ1BhZ2VcIiAqLyBcIi4vdGFiTGFuZGluZ1BhZ2UudnVlXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGNvbXBvbmVudHM6IHtcclxuICAgIFwiYWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiXCI6IFNldFN0b3JlVGFiLFxyXG4gICAgLy8gXCJhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlwiOiBTZXRNZW1iZXJzaGlwVGFiLFxyXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYlwiOiB0YWJBYm91dFVzLFxyXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1mYXFzLXRhYlwiOiB0YWJGYXFzLFxyXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1wcml2YWN5LXRhYlwiOiB0YWJQcml2YWN5LFxyXG4gICAgXCJhZG1pbi1zZXR0aW5ncy10ZXJtcy10YWJcIjogdGFiVGVybXMsXHJcbiAgICBcImFkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiXCI6IHRhYkxhbmRpbmdQYWdlLFxyXG4gIH0sXHJcbiAgcHJvcHM6IFtcclxuICAgIFwicHJvcF9zdG9yZVwiLFxyXG4gICAgXCJwcm9wX3N1bmNsdWJfY2hvaWNlc1wiLFxyXG4gICAgXCJwcm9wX3N0YXRlc1wiLFxyXG4gICAgXCJwcm9wX2NpdGllc1wiLFxyXG4gICAgXCJzdG9yZV9hY3Rpb25cIixcclxuICAgIFwic3VuY2x1Yl9hY3Rpb25fYWRkXCIsXHJcbiAgICBcInN1bmNsdWJfYWN0aW9uX3VwZGF0ZVwiLFxyXG4gICAgXCJ0YWJcIixcclxuICBdLFxyXG5cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc2VsZWN0ZWRfdGFiOiAwLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7fSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgaWYgKHRoaXMudGFiID09IFwic3RvcmVwcm9maWxlXCIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSAwO1xyXG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5zdG9yZSA9IHRoaXMucHJvcF9zdG9yZTtcclxuICAgIC8vICAgdGhpcy4kcmVmcy5zdG9yZV90YWIuZGlzcGxheUltYWdlID0gdGhpcy5wcm9wX3N0b3JlLmltYWdlX2xpbms7XHJcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLmNpdGllcyA9IHRoaXMucHJvcF9jaXRpZXM7XHJcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLnN0YXRlcyA9IHRoaXMucHJvcF9zdGF0ZXM7XHJcbiAgICAvLyB9IGVsc2UgaWYgKHRoaXMudGFiID09IFwibWVtYmVyc2hpcFwiKSB7XHJcbiAgICAvLyAgdGhpcy5zZWxlY3RlZF90YWIgPSAxO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvcF9zdW5jbHViX2Nob2ljZXMpO1xyXG4gICAgICAvLyAgIHRoaXMuJHJlZnMubWVtYmVyc2hpcF90YWIuc3VuY2x1Yl9jaG9pY2VzID0gdGhpcy5wcm9wX3N1bmNsdWJfY2hvaWNlcztcclxuICAgICAgLy8gICB0aGlzLiRyZWZzLm1lbWJlcnNoaXBfdGFiLnN0b3JlID0gdGhpcy5wcm9wX3N0b3JlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcImxhbmRpbmdcIikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFiID09IFwiYWJvdXR1c1wiKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gMztcclxuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJmYXFzXCIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA0O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcInRlcm1zXCIpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA1O1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcInByaXZhY3lcIikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDY7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5jaXR5KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuc3RhdGUpO1xyXG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRDaXR5ID0gdGhpcy5wcm9wX3N0b3JlLmNpdHk7XHJcbiAgICAvLyB0aGlzLiRyZWZzLnN0b3JlX3RhYi5zZWxlY3RlZFN0YXRlID0gdGhpcy5wcm9wX3N0b3JlLnN0YXRlO1xyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJuYXZcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2IG5hdi10YWJzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5hdi10YWJcIiwgcm9sZTogXCJ0YWJsaXN0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vc3RvcmVwcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDAgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlN0b3JlIFByb2ZpbGVcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAyID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL2hvbWVwYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDIgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkhvbWUgUGFnZSBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMyA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9hYm91dHVzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDMgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkFib3V0IFVzIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA0ID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL2ZhcXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gNCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRkFRYHMgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDUgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vdGVybXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gNSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVybXMgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDYgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vcHJpdmFjeVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSA2ID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJQcml2YWN5IFBvbGljeSBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi1jb250ZW50XCIsIGF0dHJzOiB7IGlkOiBcIm5hdi10YWJDb250ZW50XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDAgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtaG9tZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtaG9tZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3Mtc3RvcmUtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIHJlZjogXCJzdG9yZV90YWJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogX3ZtLnN0b3JlX2FjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcHJvcF9zdG9yZTogX3ZtLnByb3Bfc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIHByb3BfY2l0aWVzOiBfdm0ucHJvcF9jaXRpZXMsXG4gICAgICAgICAgICAgICAgICAgIHByb3Bfc3RhdGVzOiBfdm0ucHJvcF9zdGF0ZXMsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IF92bS5wcm9wX3N0b3JlLmNpdHksXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBfdm0ucHJvcF9zdG9yZS5zdGF0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMSA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1wcm9maWxlXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1wcm9maWxlLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwibWVtYmVyc2hpcF90YWJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNob2ljZXM6IF92bS5wcm9wX3N1bmNsdWJfY2hvaWNlcyxcbiAgICAgICAgICAgICAgICAgICAgcHJvcF9zdG9yZTogX3ZtLnByb3Bfc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgIHN1bmNsdWJfYWN0aW9uX2FkZDogX3ZtLnN1bmNsdWJfYWN0aW9uX2FkZCxcbiAgICAgICAgICAgICAgICAgICAgc3VuY2x1Yl9hY3Rpb25fdXBkYXRlOiBfdm0uc3VuY2x1Yl9hY3Rpb25fdXBkYXRlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAyID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWxhbmRpbmdcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWxhbmRpbmctdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLWxhbmRpbmctdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAzID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWFib3V0XCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1hYm91dC10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDQgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtZmFxc1wiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtZmFxcy10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtZmFxcy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDUgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtdGVybXNcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LXRlcm1zLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy10ZXJtcy10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDYgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJpdmFjeVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJpdmFjeS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3RvcmU6IF92bS5wcm9wX3N0b3JlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTJcIiB9LCBbX3ZtLl92KFwiU2V0dGluZ3NcIildKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTVmMzg5NCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZTVmMzg5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZTVmMzg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZTVmMzg5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlNWYzODk0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRlNWYzODk0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU1ZjM4OTQmXCIiXSwic291cmNlUm9vdCI6IiJ9