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
var SetStoreTab = function SetStoreTab() {
  return __webpack_require__.e(/*! import() | js/b/StoreTab */ "js/b/StoreTab").then(__webpack_require__.bind(null, /*! ./tab1.vue */ "./resources/js/backend/components/settings/tab1.vue"));
};

var SetMembershipTab = function SetMembershipTab() {
  return __webpack_require__.e(/*! import() | js/b/SetMembershipTab */ "js/b/SetMembershipTab").then(__webpack_require__.bind(null, /*! ./tab2.vue */ "./resources/js/backend/components/settings/tab2.vue"));
};

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
    "admin-settings-membership-tab": SetMembershipTab,
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
    } else if (this.tab == "membership") {
      this.selected_tab = 1; //   console.log(this.prop_sunclub_choices);
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
                  class: _vm.selected_tab == 1 ? "active" : "",
                  attrs: {
                    href: "/admin/settings/main/membership",
                    "aria-selected": _vm.selected_tab == 1 ? "true" : "false"
                  }
                },
                [_vm._v("Membership")]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy9pbmRleC52dWU/OGI5NCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL2luZGV4LnZ1ZT9iODFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudnVlP2ZmOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUtBO0FBQUEsU0FDQSxvTEFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSxvTUFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSxvTUFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSx3TEFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSxvTUFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSw0TEFEQTtBQUFBOztBQUVBO0FBQUEsU0FDQSxvTkFEQTtBQUFBOztBQUdBO0FBQ0E7QUFDQSwyQ0FEQTtBQUVBLHFEQUZBO0FBR0EsNENBSEE7QUFJQSxzQ0FKQTtBQUtBLDRDQUxBO0FBTUEsd0NBTkE7QUFPQTtBQVBBLEdBREE7QUFVQSxVQUNBLFlBREEsRUFFQSxzQkFGQSxFQUdBLGFBSEEsRUFJQSxhQUpBLEVBS0EsY0FMQSxF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MEI7QUFDMUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQkFBcUI7QUFDM0MsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pSQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvU2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0yXCI+U2V0dGluZ3M8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyXCI+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIGlkPVwibmF2LXRhYlwiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDA/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9zdG9yZXByb2ZpbGVcIlxuICAgICAgICAgICAgICA6YXJpYS1zZWxlY3RlZD1cInNlbGVjdGVkX3RhYiA9PSAwPyAndHJ1ZSc6J2ZhbHNlJyBcIlxuICAgICAgICAgICAgPlN0b3JlIFByb2ZpbGU8L2E+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDE/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9tZW1iZXJzaGlwXCJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gMT8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5NZW1iZXJzaGlwPC9hPlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDI/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9ob21lcGFnZVwiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDI/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+SG9tZSBQYWdlIENvbnRlbnQ8L2E+XG5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIlxuICAgICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMz8gJ2FjdGl2ZSc6JycgXCJcbiAgICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9hYm91dHVzXCJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gMz8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5BYm91dCBVcyBDb250ZW50PC9hPlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDQ/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9mYXFzXCJcbiAgICAgICAgICAgICAgOmFyaWEtc2VsZWN0ZWQ9XCJzZWxlY3RlZF90YWIgPT0gND8gJ3RydWUnOidmYWxzZScgXCJcbiAgICAgICAgICAgID5GQVFgcyBDb250ZW50PC9hPlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCJcbiAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDU/ICdhY3RpdmUnOicnIFwiXG4gICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vc2V0dGluZ3MvbWFpbi90ZXJtc1wiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDU/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+VGVybXMgQ29udGVudDwvYT5cblxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiXG4gICAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSA2PyAnYWN0aXZlJzonJyBcIlxuICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL3NldHRpbmdzL21haW4vcHJpdmFjeVwiXG4gICAgICAgICAgICAgIDphcmlhLXNlbGVjdGVkPVwic2VsZWN0ZWRfdGFiID09IDY/ICd0cnVlJzonZmFsc2UnIFwiXG4gICAgICAgICAgICA+UHJpdmFjeSBQb2xpY3kgQ29udGVudDwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiIGlkPVwibmF2LXRhYkNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDA/ICdhY3RpdmUgc2hvdyc6JycgXCJcbiAgICAgICAgICAgIGlkPVwibmF2LWhvbWVcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1ob21lLXRhYlwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFkbWluLXNldHRpbmdzLXN0b3JlLXRhYlxuICAgICAgICAgICAgICByZWY9XCJzdG9yZV90YWJcIlxuICAgICAgICAgICAgICA6YWN0aW9uPVwic3RvcmVfYWN0aW9uXCJcbiAgICAgICAgICAgICAgOnByb3Bfc3RvcmU9XCJwcm9wX3N0b3JlXCJcbiAgICAgICAgICAgICAgOnByb3BfY2l0aWVzPVwicHJvcF9jaXRpZXNcIlxuICAgICAgICAgICAgICA6cHJvcF9zdGF0ZXM9XCJwcm9wX3N0YXRlc1wiXG4gICAgICAgICAgICAgIDpjaXR5PVwicHJvcF9zdG9yZS5jaXR5XCJcbiAgICAgICAgICAgICAgOnN0YXRlPVwicHJvcF9zdG9yZS5zdGF0ZVwiXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1zdG9yZS10YWI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAxPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1wcm9maWxlXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtcHJvZmlsZS10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlxuICAgICAgICAgICAgICByZWY9XCJtZW1iZXJzaGlwX3RhYlwiXG4gICAgICAgICAgICAgIDpjaG9pY2VzPVwicHJvcF9zdW5jbHViX2Nob2ljZXNcIlxuICAgICAgICAgICAgICA6cHJvcF9zdG9yZT1cInByb3Bfc3RvcmVcIlxuICAgICAgICAgICAgICA6c3VuY2x1Yl9hY3Rpb25fYWRkPVwic3VuY2x1Yl9hY3Rpb25fYWRkXCJcbiAgICAgICAgICAgICAgOnN1bmNsdWJfYWN0aW9uX3VwZGF0ZT1cInN1bmNsdWJfYWN0aW9uX3VwZGF0ZVwiXG4gICAgICAgICAgICA+PC9hZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwhLS0gPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAyPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1yZWZmZXJhbHNcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1yZWZmZXJhbHMtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtcmVmZmVyYWxzLWNvdXBvbiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1yZWZmZXJhbHMtY291cG9uPlxuICAgICAgICAgIDwvZGl2Pi0tPlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJ0YWItcGFuZSBmYWRlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInNlbGVjdGVkX3RhYiA9PSAyPyAnYWN0aXZlIHNob3cnOicnIFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1sYW5kaW5nXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtbGFuZGluZy10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1sYW5kaW5nLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1sYW5kaW5nLXRhYj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gMz8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtYWJvdXRcIlxuICAgICAgICAgICAgcm9sZT1cInRhYnBhbmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm5hdi1hYm91dC10YWJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxhZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYiA6c3RvcmU9XCJwcm9wX3N0b3JlXCI+PC9hZG1pbi1zZXR0aW5ncy1hYm91dHVzLXRhYj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gND8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtZmFxc1wiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LWZhcXMtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtZmFxcy10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtZmFxcy10YWI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cInRhYi1wYW5lIGZhZGVcIlxuICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRfdGFiID09IDU/ICdhY3RpdmUgc2hvdyc6JycgXCJcbiAgICAgICAgICAgIGlkPVwibmF2LXRlcm1zXCJcbiAgICAgICAgICAgIHJvbGU9XCJ0YWJwYW5lbFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCJuYXYtdGVybXMtdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtdGVybXMtdGFiIDpzdG9yZT1cInByb3Bfc3RvcmVcIj48L2FkbWluLXNldHRpbmdzLXRlcm1zLXRhYj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwidGFiLXBhbmUgZmFkZVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJzZWxlY3RlZF90YWIgPT0gNj8gJ2FjdGl2ZSBzaG93JzonJyBcIlxuICAgICAgICAgICAgaWQ9XCJuYXYtcHJpdmFjeVwiXG4gICAgICAgICAgICByb2xlPVwidGFicGFuZWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibmF2LXByaXZhY3ktdGFiXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWIgOnN0b3JlPVwicHJvcF9zdG9yZVwiPjwvYWRtaW4tc2V0dGluZ3MtcHJpdmFjeS10YWI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmNvbnN0IFNldFN0b3JlVGFiID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi9TdG9yZVRhYlwiICovIFwiLi90YWIxLnZ1ZVwiKTtcbmNvbnN0IFNldE1lbWJlcnNoaXBUYWIgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL1NldE1lbWJlcnNoaXBUYWJcIiAqLyBcIi4vdGFiMi52dWVcIik7XG5jb25zdCB0YWJBYm91dFVzID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvYi90YWJBYm91dFVzXCIgKi8gXCIuL3RhYkFib3V0VXMudnVlXCIpO1xuY29uc3QgdGFiRmFxcyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiRmFxc1wiICovIFwiLi90YWJGYXFzLnZ1ZVwiKTtcbmNvbnN0IHRhYlByaXZhY3kgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYlByaXZhY3lcIiAqLyBcIi4vdGFiUHJpdmFjeS52dWVcIik7XG5jb25zdCB0YWJUZXJtcyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2IvdGFiVGVybXNcIiAqLyBcIi4vdGFiVGVybXMudnVlXCIpO1xuY29uc3QgdGFiTGFuZGluZ1BhZ2UgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9iL3RhYkxhbmRpbmdQYWdlXCIgKi8gXCIuL3RhYkxhbmRpbmdQYWdlLnZ1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgXCJhZG1pbi1zZXR0aW5ncy1zdG9yZS10YWJcIjogU2V0U3RvcmVUYWIsXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1tZW1iZXJzaGlwLXRhYlwiOiBTZXRNZW1iZXJzaGlwVGFiLFxuICAgIFwiYWRtaW4tc2V0dGluZ3MtYWJvdXR1cy10YWJcIjogdGFiQWJvdXRVcyxcbiAgICBcImFkbWluLXNldHRpbmdzLWZhcXMtdGFiXCI6IHRhYkZhcXMsXG4gICAgXCJhZG1pbi1zZXR0aW5ncy1wcml2YWN5LXRhYlwiOiB0YWJQcml2YWN5LFxuICAgIFwiYWRtaW4tc2V0dGluZ3MtdGVybXMtdGFiXCI6IHRhYlRlcm1zLFxuICAgIFwiYWRtaW4tc2V0dGluZ3MtbGFuZGluZy10YWJcIjogdGFiTGFuZGluZ1BhZ2UsXG4gIH0sXG4gIHByb3BzOiBbXG4gICAgXCJwcm9wX3N0b3JlXCIsXG4gICAgXCJwcm9wX3N1bmNsdWJfY2hvaWNlc1wiLFxuICAgIFwicHJvcF9zdGF0ZXNcIixcbiAgICBcInByb3BfY2l0aWVzXCIsXG4gICAgXCJzdG9yZV9hY3Rpb25cIixcbiAgICBcInN1bmNsdWJfYWN0aW9uX2FkZFwiLFxuICAgIFwic3VuY2x1Yl9hY3Rpb25fdXBkYXRlXCIsXG4gICAgXCJ0YWJcIixcbiAgXSxcblxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzZWxlY3RlZF90YWI6IDAsXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHt9LFxuICBtb3VudGVkKCkge1xuICAgIGlmICh0aGlzLnRhYiA9PSBcInN0b3JlcHJvZmlsZVwiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDA7XG4gICAgLy8gICB0aGlzLiRyZWZzLnN0b3JlX3RhYi5zdG9yZSA9IHRoaXMucHJvcF9zdG9yZTtcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLmRpc3BsYXlJbWFnZSA9IHRoaXMucHJvcF9zdG9yZS5pbWFnZV9saW5rO1xuICAgIC8vICAgdGhpcy4kcmVmcy5zdG9yZV90YWIuY2l0aWVzID0gdGhpcy5wcm9wX2NpdGllcztcbiAgICAvLyAgIHRoaXMuJHJlZnMuc3RvcmVfdGFiLnN0YXRlcyA9IHRoaXMucHJvcF9zdGF0ZXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcIm1lbWJlcnNoaXBcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSAxO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnByb3Bfc3VuY2x1Yl9jaG9pY2VzKTtcbiAgICAgIC8vICAgdGhpcy4kcmVmcy5tZW1iZXJzaGlwX3RhYi5zdW5jbHViX2Nob2ljZXMgPSB0aGlzLnByb3Bfc3VuY2x1Yl9jaG9pY2VzO1xuICAgICAgLy8gICB0aGlzLiRyZWZzLm1lbWJlcnNoaXBfdGFiLnN0b3JlID0gdGhpcy5wcm9wX3N0b3JlO1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJsYW5kaW5nXCIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRfdGFiID0gMjtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGFiID09IFwiYWJvdXR1c1wiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcImZhcXNcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA0O1xuICAgIH0gZWxzZSBpZiAodGhpcy50YWIgPT0gXCJ0ZXJtc1wiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkX3RhYiA9IDU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnRhYiA9PSBcInByaXZhY3lcIikge1xuICAgICAgdGhpcy5zZWxlY3RlZF90YWIgPSA2O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RvcmUuY2l0eSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdG9yZS5zdGF0ZSk7XG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRDaXR5ID0gdGhpcy5wcm9wX3N0b3JlLmNpdHk7XG4gICAgLy8gdGhpcy4kcmVmcy5zdG9yZV90YWIuc2VsZWN0ZWRTdGF0ZSA9IHRoaXMucHJvcF9zdG9yZS5zdGF0ZTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTEyXCIgfSwgW1xuICAgICAgICBfYyhcIm5hdlwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYgbmF2LXRhYnNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2LXRhYlwiLCByb2xlOiBcInRhYmxpc3RcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9zdG9yZXByb2ZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gMCA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RvcmUgUHJvZmlsZVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vbWVtYmVyc2hpcFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAxID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNZW1iZXJzaGlwXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9ob21lcGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAyID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJIb21lIFBhZ2UgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2LWl0ZW0gbmF2LWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDMgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiL2FkbWluL3NldHRpbmdzL21haW4vYWJvdXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICBcImFyaWEtc2VsZWN0ZWRcIjogX3ZtLnNlbGVjdGVkX3RhYiA9PSAzID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBYm91dCBVcyBDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJuYXYtaXRlbSBuYXYtbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gNCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCIvYWRtaW4vc2V0dGluZ3MvbWFpbi9mYXFzXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDQgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkZBUWBzIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA1ID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL3Rlcm1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYXJpYS1zZWxlY3RlZFwiOiBfdm0uc2VsZWN0ZWRfdGFiID09IDUgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlRlcm1zIENvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdi1pdGVtIG5hdi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA2ID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcIi9hZG1pbi9zZXR0aW5ncy9tYWluL3ByaXZhY3lcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhcmlhLXNlbGVjdGVkXCI6IF92bS5zZWxlY3RlZF90YWIgPT0gNiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUHJpdmFjeSBQb2xpY3kgQ29udGVudFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItY29udGVudFwiLCBhdHRyczogeyBpZDogXCJuYXYtdGFiQ29udGVudFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSAwID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWhvbWVcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWhvbWUtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLXN0b3JlLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICByZWY6IFwic3RvcmVfdGFiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IF92bS5zdG9yZV9hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHByb3Bfc3RvcmU6IF92bS5wcm9wX3N0b3JlLFxuICAgICAgICAgICAgICAgICAgICBwcm9wX2NpdGllczogX3ZtLnByb3BfY2l0aWVzLFxuICAgICAgICAgICAgICAgICAgICBwcm9wX3N0YXRlczogX3ZtLnByb3Bfc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiBfdm0ucHJvcF9zdG9yZS5jaXR5LFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogX3ZtLnByb3Bfc3RvcmUuc3RhdGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGFiLXBhbmUgZmFkZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uc2VsZWN0ZWRfdGFiID09IDEgPyBcImFjdGl2ZSBzaG93XCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpZDogXCJuYXYtcHJvZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtcHJvZmlsZS10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtbWVtYmVyc2hpcC10YWJcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcIm1lbWJlcnNoaXBfdGFiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBjaG9pY2VzOiBfdm0ucHJvcF9zdW5jbHViX2Nob2ljZXMsXG4gICAgICAgICAgICAgICAgICAgIHByb3Bfc3RvcmU6IF92bS5wcm9wX3N0b3JlLFxuICAgICAgICAgICAgICAgICAgICBzdW5jbHViX2FjdGlvbl9hZGQ6IF92bS5zdW5jbHViX2FjdGlvbl9hZGQsXG4gICAgICAgICAgICAgICAgICAgIHN1bmNsdWJfYWN0aW9uX3VwZGF0ZTogX3ZtLnN1bmNsdWJfYWN0aW9uX3VwZGF0ZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMiA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1sYW5kaW5nXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi1sYW5kaW5nLXRhYlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJhZG1pbi1zZXR0aW5ncy1sYW5kaW5nLXRhYlwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzdG9yZTogX3ZtLnByb3Bfc3RvcmUgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWItcGFuZSBmYWRlXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IF92bS5zZWxlY3RlZF90YWIgPT0gMyA/IFwiYWN0aXZlIHNob3dcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGlkOiBcIm5hdi1hYm91dFwiLFxuICAgICAgICAgICAgICAgICAgcm9sZTogXCJ0YWJwYW5lbFwiLFxuICAgICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogXCJuYXYtYWJvdXQtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLWFib3V0dXMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA0ID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LWZhcXNcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LWZhcXMtdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLWZhcXMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA1ID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LXRlcm1zXCIsXG4gICAgICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiBcIm5hdi10ZXJtcy10YWJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiYWRtaW4tc2V0dGluZ3MtdGVybXMtdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYi1wYW5lIGZhZGVcIixcbiAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnNlbGVjdGVkX3RhYiA9PSA2ID8gXCJhY3RpdmUgc2hvd1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IFwibmF2LXByaXZhY3lcIixcbiAgICAgICAgICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IFwibmF2LXByaXZhY3ktdGFiXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImFkbWluLXNldHRpbmdzLXByaXZhY3ktdGFiXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHN0b3JlOiBfdm0ucHJvcF9zdG9yZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0yXCIgfSwgW192bS5fdihcIlNldHRpbmdzXCIpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU1ZjM4OTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlNWYzODk0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlNWYzODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlNWYzODk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU1ZjM4OTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGU1ZjM4OTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTVmMzg5NCZcIiJdLCJzb3VyY2VSb290IjoiIn0=