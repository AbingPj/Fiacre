(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/adminOrgProducts"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["org"],
  data: function data() {
    return {
      products: []
    };
  },
  mounted: function mounted() {},
  created: function created() {
    this.getProducts();
  },
  methods: {
    getNumberOfWeeks: function getNumberOfWeeks(item) {
      var data = "-";

      if (item.weeks != "-") {
        data = item.weeks + " week(s)";
      }

      return data;
    },
    getSubPrice: function getSubPrice(item) {
      var data = item.subscirption_price;

      if (data != "no subscription yet") {
        return "$ " + data + "/" + item.weeks + " weeks";
      }

      return data;
    },
    getVisibility: function getVisibility(item) {
      var data = "Hide";

      if (item.is_visible == 1) {
        if (item.subscirption_price != "no subscription yet") {
          data = "Show";
        } else {
          data = "Hide";
        }
      }

      return data;
    },
    viewOrganization: function viewOrganization(data) {
      window.location.href = "/admin/org/products/subcription/".concat(data.id);
    },
    prepareDataTable: function prepareDataTable() {
      $(document).ready(function () {
        $("#org-products-table").DataTable({
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          iDisplayLength: -1
        });
      });
    },
    getProducts: function getProducts() {
      var _this = this;

      LoadingOverlay();
      axios.get("/admin/org/getAssignedProducts").then(function (res) {
        LoadingOverlayHide();
        _this.products = res.data;

        _this.prepareDataTable();
      })["catch"](function (err) {
        console.error(err);
        LoadingOverlayHide();
        alert("Something went wrong");
      });
    }
  },
  computed: {
    loadlist: function loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      var allorders = this.searchedCustomers;
      var pageList = allorders.slice(begin, end);
      return pageList;
    },
    rows: function rows() {
      return this.searchedCustomers.length;
    }
  } // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-e3238660] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
              attrs: { id: "org-products-table" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.products, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [
                      _c("img", {
                        staticStyle: {
                          width: "70px",
                          height: "50px",
                          "object-fit": "cover"
                        },
                        attrs: { src: item.image_link, alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", { staticStyle: { width: "150px" } }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t" +
                          _vm._s(item.name) +
                          "\n\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "$ " + _vm._s(item.price) + " /" + _vm._s(item.unit)
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.getNumberOfWeeks(item)))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.getSubPrice(item)))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.viewOrganization(item)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cog" }),
                          _vm._v(" Set Subscription\n\t\t\t\t\t\t\t\t")
                        ]
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _c("i", { staticClass: "fas fa-boxes" }),
          _vm._v(" Assigned Products\n\t\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Current No. Weeks")]),
        _vm._v(" "),
        _c("th", [_vm._v("Subscription Price")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/index.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/index.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e3238660&scoped=true& */ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& */ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e3238660",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/admin-org-components/products/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=style&index=0&id=e3238660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3238660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e3238660&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/products/index.vue?vue&type=template&id=e3238660&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e3238660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZHVjdHMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT9lNWJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT9mMWMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZT9kMzM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/ZDVlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/NWJhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9kdWN0cy9pbmRleC52dWU/N2ViZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUVBO0FBQ0EsZ0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQVFBLFNBUkEscUJBUUEsRUFSQTtBQVVBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFhQTtBQUNBLG9CQURBLDRCQUNBLElBREEs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QUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBMGMsQ0FBZ0IsMmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvYWRtaW5PcmdQcm9kdWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1ib3hlc1wiPjwvaT4gQXNzaWduZWQgUHJvZHVjdHNcclxuXHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3M9XCJyb3cgbXQtNFwiXHJcblx0XHRcdHN0eWxlPVwiZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCJcclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1sZy0xMiBjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHQ8dGFibGUgaWQ9XCJvcmctcHJvZHVjdHMtdGFibGVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcblx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPiAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+SW1hZ2U8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5Qcm9kdWN0IE5hbWU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5QcmljZTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSA8dGg+VG90YWwgTm8uIFdlZWtzPC90aD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRoPkN1cnJlbnQgTm8uIFdlZWtzPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGg+U3Vic2NyaXB0aW9uIFByaWNlPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIDx0aD5WaXNpYmlsaXR5PC90aD4gLS0+XHJcblx0XHRcdFx0XHRcdFx0PHRoPkFjdGlvbnM8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keT5cclxuXHRcdFx0XHRcdFx0PHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9kdWN0c1wiIDprZXk9XCJpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cIml0ZW0uaW1hZ2VfbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDcwcHg7IGhlaWdodDogNTBweDsgb2JqZWN0LWZpdDogY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBzdHlsZT1cIndpZHRoOiAxNTBweFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3sgaXRlbS5uYW1lIH19XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+JCB7eyBpdGVtLnByaWNlIH19IC97eyBpdGVtLnVuaXQgfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBnZXROdW1iZXJPZldlZWtzKGl0ZW0pIH19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgZ2V0U3ViUHJpY2UoaXRlbSkgfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRkPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3sgZ2V0VmlzaWJpbGl0eShpdGVtKSB9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+IC0tPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJ2aWV3T3JnYW5pemF0aW9uKGl0ZW0pXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtY29nXCI+PC9pPiBTZXQgU3Vic2NyaXB0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZm9yPVwiKHN1YiwgaW5kZXgyKSBpbiBpdGVtLnN1Yl9jYXRlZ29yaWVzXCIgOmtleT1cImluZGV4MlwiPnt7c3ViLm5hbWV9fSw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczogW1wib3JnXCJdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRwcm9kdWN0czogW10sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cclxuXHRcdG1vdW50ZWQoKSB7fSxcclxuXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldFByb2R1Y3RzKCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXROdW1iZXJPZldlZWtzKGl0ZW0pIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IFwiLVwiO1xyXG5cdFx0XHRcdGlmIChpdGVtLndlZWtzICE9IFwiLVwiKSB7XHJcblx0XHRcdFx0XHRkYXRhID0gaXRlbS53ZWVrcyArIFwiIHdlZWsocylcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFN1YlByaWNlKGl0ZW0pIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IGl0ZW0uc3Vic2NpcnB0aW9uX3ByaWNlO1xyXG5cdFx0XHRcdGlmIChkYXRhICE9IFwibm8gc3Vic2NyaXB0aW9uIHlldFwiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gXCIkIFwiICsgZGF0YSArIFwiL1wiICsgaXRlbS53ZWVrcyArIFwiIHdlZWtzXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBkYXRhO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRWaXNpYmlsaXR5KGl0ZW0pIHtcclxuXHRcdFx0XHR2YXIgZGF0YSA9IFwiSGlkZVwiO1xyXG5cdFx0XHRcdGlmIChpdGVtLmlzX3Zpc2libGUgPT0gMSkge1xyXG5cdFx0XHRcdFx0aWYgKGl0ZW0uc3Vic2NpcnB0aW9uX3ByaWNlICE9IFwibm8gc3Vic2NyaXB0aW9uIHlldFwiKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSBcIlNob3dcIjtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSBcIkhpZGVcIjtcclxuXHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dmlld09yZ2FuaXphdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2FkbWluL29yZy9wcm9kdWN0cy9zdWJjcmlwdGlvbi8ke2RhdGEuaWR9YDtcclxuXHRcdFx0fSxcclxuXHRcdFx0cHJlcGFyZURhdGFUYWJsZSgpIHtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKFwiI29yZy1wcm9kdWN0cy10YWJsZVwiKS5EYXRhVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRsZW5ndGhNZW51OiBbXHJcblx0XHRcdFx0XHRcdFx0WzEwLCAyNSwgNTAsIC0xXSxcclxuXHRcdFx0XHRcdFx0XHRbMTAsIDI1LCA1MCwgXCJBbGxcIl0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdGlEaXNwbGF5TGVuZ3RoOiAtMSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRQcm9kdWN0cygpIHtcclxuXHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KGAvYWRtaW4vb3JnL2dldEFzc2lnbmVkUHJvZHVjdHNgKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnByZXBhcmVEYXRhVGFibGUoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRhbGVydChcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0bG9hZGxpc3QoKSB7XHJcblx0XHRcdFx0dmFyIHBhZ2VMaXN0ID0gW107XHJcblx0XHRcdFx0dmFyIGJlZ2luID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcclxuXHRcdFx0XHR2YXIgZW5kID0gYmVnaW4gKyB0aGlzLnBlclBhZ2U7XHJcblx0XHRcdFx0dmFyIGFsbG9yZGVycyA9IHRoaXMuc2VhcmNoZWRDdXN0b21lcnM7XHJcblx0XHRcdFx0dmFyIHBhZ2VMaXN0ID0gYWxsb3JkZXJzLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cdFx0XHRcdHJldHVybiBwYWdlTGlzdDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJvd3MoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VhcmNoZWRDdXN0b21lcnMubGVuZ3RoO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdC8vIG1vdW50ZWQoKSB7XHJcblx0XHQvLyAgICAgYWxlcnQoXCJQUk9EVUNUUyBDT01QT05FTlQgTU9VTlRFRFwiKTtcclxuXHRcdC8vIH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmJ0bi1zdWNjZXNzIHtcclxuXHRcdGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0XHRib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ0bi1zdWNjZXNzW2RhdGEtdi1lMzIzODY2MF0ge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMzIzODY2MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzMjM4NjYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzMjM4NjYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgbXQtNFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy0xMiBjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm9yZy1wcm9kdWN0cy10YWJsZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI3MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluaywgYWx0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE1MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArIF92bS5fcyhpdGVtLnByaWNlKSArIFwiIC9cIiArIF92bS5fcyhpdGVtLnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZ2V0TnVtYmVyT2ZXZWVrcyhpdGVtKSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmdldFN1YlByaWNlKGl0ZW0pKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdPcmdhbml6YXRpb24oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jb2dcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFNldCBTdWJzY3JpcHRpb25cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWJveGVzXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIEFzc2lnbmVkIFByb2R1Y3RzXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJJbWFnZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQcm9kdWN0IE5hbWVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUHJpY2VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3VycmVudCBOby4gV2Vla3NcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU3Vic2NyaXB0aW9uIFByaWNlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdGlvbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUzMjM4NjYwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzMjM4NjYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTMyMzg2NjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzMjM4NjYwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzMjM4NjYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzMjM4NjYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMyMzg2NjAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTMyMzg2NjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2R1Y3RzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUzMjM4NjYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTMyMzg2NjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzIzODY2MCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=