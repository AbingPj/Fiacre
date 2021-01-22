(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ProdSelectOrg"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["product_id", "product"],
  data: function data() {
    return {
      organizations: [],
      checkAll: false
    };
  },
  created: function created() {
    this.getOrganization(this.product_id);
  },
  methods: {
    saveChanges: function saveChanges() {
      LoadingOverlay();
      var data = {
        organizations: this.organizations,
        product_id: this.product_id
      };
      axios.post('/api/admin/product/productSelectOrganizationSaveChanges', data).then(function (res) {
        console.log(res);
        LoadingOverlayHide();
        alert('success');
      })["catch"](function (err) {
        console.error(err);
        LoadingOverlayHide();
        alert('something went wrong');
      });
    },
    checkItem: function checkItem(org_id) {
      var objIndex = this.organizations.findIndex(function (obj) {
        return obj.id == org_id;
      });
      this.organizations[objIndex].selected = !this.organizations[objIndex].selected;
    },
    checkAllClick: function checkAllClick() {
      console.log(this.checkAll);

      if (this.checkAll == true) {
        this.organizations.map(function (x) {
          x.selected = true;
          return x;
        });
      } else {
        this.organizations.map(function (x) {
          x.selected = false;
          return x;
        });
      }
    },
    getOrganization: function getOrganization(product_id) {
      var _this = this;

      axios.get("/api/admin/productsorganizations/" + product_id).then(function (res) {
        _this.organizations = res.data;

        _this.prepareDataTable();
      })["catch"](function (err) {
        console.error(err);
      });
    },
    prepareDataTable: function prepareDataTable() {
      $(document).ready(function () {
        $("#customers-table").DataTable({
          order: [],
          columnDefs: [{
            targets: "no-sort",
            orderable: false
          }],
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          iDisplayLength: -1
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-718ec98c] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
          _c("i", { staticClass: "fas fa-sitemap" }),
          _vm._v(
            " Select Organization for " +
              _vm._s(_vm.product.name) +
              "\n\t\t\t\t"
          )
        ]),
        _vm._v(" "),
        _c("br")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success float-right",
            on: {
              click: function($event) {
                return _vm.saveChanges()
              }
            }
          },
          [_vm._v("Save Changes")]
        )
      ])
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
            "table",
            {
              staticClass: "table table-hover",
              attrs: { id: "customers-table" }
            },
            [
              _c("thead", [
                _c("tr", [
                  _c("th", { staticClass: "no-sort" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.checkAll,
                          expression: "checkAll"
                        }
                      ],
                      attrs: { type: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.checkAll)
                          ? _vm._i(_vm.checkAll, null) > -1
                          : _vm.checkAll
                      },
                      on: {
                        change: [
                          function($event) {
                            var $$a = _vm.checkAll,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 && (_vm.checkAll = $$a.concat([$$v]))
                              } else {
                                $$i > -1 &&
                                  (_vm.checkAll = $$a
                                    .slice(0, $$i)
                                    .concat($$a.slice($$i + 1)))
                              }
                            } else {
                              _vm.checkAll = $$c
                            }
                          },
                          function($event) {
                            return _vm.checkAllClick(_vm.checkAll)
                          }
                        ]
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Selected")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Organization Name")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Type")]),
                  _vm._v(" "),
                  _c("th", [_vm._v("OptionC Id")])
                ])
              ]),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.organizations, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _c("input", {
                        attrs: { type: "checkbox" },
                        domProps: { checked: item.selected == true },
                        on: {
                          change: function($event) {
                            return _vm.checkItem(item.id)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(item.selected ? "Yes" : "No") +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(item.org_name) +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(item.atr_type_label) +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(item.org_optionc_id) +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/products/selectOrganization.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/backend/components/products/selectOrganization.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true& */ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true&");
/* harmony import */ var _selectOrganization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectOrganization.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& */ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _selectOrganization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "718ec98c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/products/selectOrganization.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectOrganization.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=style&index=0&id=718ec98c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_style_index_0_id_718ec98c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/selectOrganization.vue?vue&type=template&id=718ec98c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_selectOrganization_vue_vue_type_template_id_718ec98c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9zZWxlY3RPcmdhbml6YXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZT8yOTgzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZT84NjdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZT9mZDM0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/ZWExNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/ODE4ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/NzkyMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNFQTtBQUNBLGtDQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBLFNBUkEscUJBUUE7QUFDQTtBQUNBLEdBVkE7QUFXQTtBQUNBLGVB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHdkc7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsd0ZBQU07QUFDUixFQUFFLHlHQUFNO0FBQ1IsRUFBRSxrSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOE0sQ0FBZ0IsOFBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE87QUFBQTtBQUFBO0FBQUE7QUFBdWQsQ0FBZ0Isd2NBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM2U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUHJvZFNlbGVjdE9yZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXNpdGVtYXBcIj48L2k+IFNlbGVjdCBPcmdhbml6YXRpb24gZm9yIHt7cHJvZHVjdC5uYW1lfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIiBAY2xpY2s9XCJzYXZlQ2hhbmdlcygpXCI+U2F2ZSBDaGFuZ2VzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cInJvdyBtdC00XCJcblx0XHRcdHN0eWxlPVwiZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIGNvbC1tZC0xMlwiPlxuICAgICAgICAgICAgICAgIFx0PHRhYmxlIGlkPVwiY3VzdG9tZXJzLXRhYmxlXCIgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxuXHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XG5cdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwibm8tc29ydFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJjaGVja0FsbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJjaGVja2JveFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEBjaGFuZ2U9XCJjaGVja0FsbENsaWNrKGNoZWNrQWxsKVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5TZWxlY3RlZDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoPk9yZ2FuaXphdGlvbiBOYW1lPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGg+VHlwZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PHRoPk9wdGlvbkMgSWQ8L3RoPlxuXG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHQ8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIG9yZ2FuaXphdGlvbnNcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImNoZWNrYm94XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0OmNoZWNrZWQ9XCJpdGVtLnNlbGVjdGVkID09IHRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJjaGVja0l0ZW0oaXRlbS5pZClcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLnNlbGVjdGVkID8gXCJZZXNcIiA6IFwiTm9cIiB9fVxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbS5vcmdfbmFtZSB9fVxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbS5hdHJfdHlwZV9sYWJlbCB9fVxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3sgaXRlbS5vcmdfb3B0aW9uY19pZCB9fVxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCIoc3ViLCBpbmRleDIpIGluIGl0ZW0uc3ViX2NhdGVnb3JpZXNcIiA6a2V5PVwiaW5kZXgyXCI+e3tzdWIubmFtZX19LDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvdGQ+IC0tPlxuXHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdHByb3BzOiBbXCJwcm9kdWN0X2lkXCIsIFwicHJvZHVjdFwiXSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3JnYW5pemF0aW9uczogW10sXG5cdFx0XHRcdGNoZWNrQWxsOiBmYWxzZSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0dGhpcy5nZXRPcmdhbml6YXRpb24odGhpcy5wcm9kdWN0X2lkKTtcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNhdmVDaGFuZ2VzKCl7XG4gICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3JnYW5pemF0aW9uczogdGhpcy5vcmdhbml6YXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLnByb2R1Y3RfaWQsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvYWRtaW4vcHJvZHVjdC9wcm9kdWN0U2VsZWN0T3JnYW5pemF0aW9uU2F2ZUNoYW5nZXMnLGRhdGEpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3NvbWV0aGluZyB3ZW50IHdyb25nJyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja0l0ZW0ob3JnX2lkKXtcbiAgICAgICAgICAgICAgICB2YXIgb2JqSW5kZXggPSB0aGlzLm9yZ2FuaXphdGlvbnMuZmluZEluZGV4KChvYmogPT4gb2JqLmlkID09IG9yZ19pZCkpO1xuICAgICAgICAgICAgICAgIHRoaXMub3JnYW5pemF0aW9uc1tvYmpJbmRleF0uc2VsZWN0ZWQgPSAgIXRoaXMub3JnYW5pemF0aW9uc1tvYmpJbmRleF0uc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9LFxuXHRcdFx0Y2hlY2tBbGxDbGljaygpIHtcblx0XHRcdFx0Y29uc29sZS5sb2codGhpcy5jaGVja0FsbCk7XG5cdFx0XHRcdGlmICh0aGlzLmNoZWNrQWxsID09IHRydWUpIHtcblx0XHRcdFx0XHR0aGlzLm9yZ2FuaXphdGlvbnMubWFwKGZ1bmN0aW9uICh4KSB7XG5cdFx0XHRcdFx0XHR4LnNlbGVjdGVkID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHJldHVybiB4O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMub3JnYW5pemF0aW9ucy5tYXAoZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRcdHguc2VsZWN0ZWQgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHJldHVybiB4O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0Z2V0T3JnYW5pemF0aW9uKHByb2R1Y3RfaWQpIHtcblx0XHRcdFx0YXhpb3Ncblx0XHRcdFx0XHQuZ2V0KFwiL2FwaS9hZG1pbi9wcm9kdWN0c29yZ2FuaXphdGlvbnMvXCIgKyBwcm9kdWN0X2lkKVxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMub3JnYW5pemF0aW9ucyA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdFx0dGhpcy5wcmVwYXJlRGF0YVRhYmxlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHRcdHByZXBhcmVEYXRhVGFibGUoKSB7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKFwiI2N1c3RvbWVycy10YWJsZVwiKS5EYXRhVGFibGUoe1xuXHRcdFx0XHRcdFx0b3JkZXI6IFtdLFxuXHRcdFx0XHRcdFx0Y29sdW1uRGVmczogW1xuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0czogXCJuby1zb3J0XCIsXG5cdFx0XHRcdFx0XHRcdFx0b3JkZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRsZW5ndGhNZW51OiBbXG5cdFx0XHRcdFx0XHRcdFsxMCwgMjUsIDUwLCAtMV0sXG5cdFx0XHRcdFx0XHRcdFsxMCwgMjUsIDUwLCBcIkFsbFwiXSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRpRGlzcGxheUxlbmd0aDogLTEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXHQuYnRuLXN1Y2Nlc3Mge1xuXHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xuXHRcdGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xuXHR9XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnRuLXN1Y2Nlc3NbZGF0YS12LTcxOGVjOThjXSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MThlYzk4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MThlYzk4YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxlY3RPcmdhbml6YXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzE4ZWM5OGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNpdGVtYXBcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiBTZWxlY3QgT3JnYW5pemF0aW9uIGZvciBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZHVjdC5uYW1lKSArXG4gICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZUNoYW5nZXMoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiU2F2ZSBDaGFuZ2VzXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgbXQtNFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImN1c3RvbWVycy10YWJsZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vLXNvcnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja0FsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja0FsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tBbGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jaGVja0FsbCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5jaGVja0FsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrQWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tBbGwgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja0FsbCA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNoZWNrQWxsID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrQWxsQ2xpY2soX3ZtLmNoZWNrQWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2VsZWN0ZWRcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJPcmdhbml6YXRpb24gTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlR5cGVcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJPcHRpb25DIElkXCIpXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ub3JnYW5pemF0aW9ucywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyBjaGVja2VkOiBpdGVtLnNlbGVjdGVkID09IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0l0ZW0oaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uc2VsZWN0ZWQgPyBcIlllc1wiIDogXCJOb1wiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ub3JnX25hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5hdHJfdHlwZV9sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLm9yZ19vcHRpb25jX2lkKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zZWxlY3RPcmdhbml6YXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxOGVjOThjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxOGVjOThjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzE4ZWM5OGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MThlYzk4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MThlYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MThlYzk4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2VsZWN0T3JnYW5pemF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MThlYzk4YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MThlYzk4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9zZWxlY3RPcmdhbml6YXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxlY3RPcmdhbml6YXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxlY3RPcmdhbml6YXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzE4ZWM5OGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zZWxlY3RPcmdhbml6YXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzE4ZWM5OGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NlbGVjdE9yZ2FuaXphdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzE4ZWM5OGMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9