(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/Categories"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propscategories", "addaction", "updateaction", "deleteaction"],
  data: function data() {
    return {
      categories: [],
      perPage: 10,
      currentPage: 1
    };
  },
  methods: {
    addModalShow: function addModalShow() {
      this.$refs.addCatRef.action = this.addaction;
      $("#categoryAddModal").modal("show");
    },
    updateModalShow: function updateModalShow(data) {
      this.$refs.updateCatRef.action = this.updateaction;
      this.$refs.updateCatRef.category_id = data.id;
      this.$refs.updateCatRef.name = data.name;
      this.$refs.updateCatRef.tax = data.tax;
      $("#categoryUpdateModal").modal("show");
    },
    deleteModalShow: function deleteModalShow(data) {
      this.$refs.deleteCatRef.action = this.deleteaction;
      this.$refs.deleteCatRef.category_id = data.id;
      this.$refs.deleteCatRef.name = data.name;
      $("#categoryDeleteModal").modal("show");
    }
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $('#categories-table').DataTable({
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        iDisplayLength: -1
      });
    });
  },
  created: function created() {
    this.categories = this.propscategories;
  },
  computed: {
    loadlist: function loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage; //   console.log(begin);
      //   console.log(end);

      var allcategories = this.categories;
      var pageList = allcategories.slice(begin, end);
      return pageList;
    },
    rows: function rows() {
      return this.categories.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-dfc74722] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "d-flex flex-column min-vh-100" },
    [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("h3", [
              _c(
                "button",
                {
                  staticClass: "btn btn-success",
                  on: {
                    click: function($event) {
                      return _vm.addModalShow()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-plus-square mr-2" }),
                  _vm._v(" New Category")
                ]
              )
            ]),
            _vm._v(" "),
            _c("br")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-10" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", [
              _c(
                "table",
                {
                  staticClass: "table table-hover",
                  attrs: { id: "categories-table" }
                },
                [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.propscategories, function(item, index) {
                      return _c("tr", { key: index }, [
                        _c("th", { staticStyle: { width: "20px" } }, [
                          _vm._v(_vm._s(item.id))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.tax) + " %")]),
                        _vm._v(" "),
                        _c("td", { staticStyle: { width: "300px" } }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-info",
                              on: {
                                click: function($event) {
                                  return _vm.updateModalShow(item)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-pencil-alt mr-2"
                              }),
                              _vm._v("Edit")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-sm btn-danger",
                              on: {
                                click: function($event) {
                                  return _vm.deleteModalShow(item)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-trash-alt mr-2" }),
                              _vm._v(" Remove")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-success",
                              attrs: { href: "categories/sub/" + item.id }
                            },
                            [_vm._v("Sub Categories")]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("admin-categories-add-modal", { ref: "addCatRef" }),
      _vm._v(" "),
      _c("admin-categories-update-modal", { ref: "updateCatRef" }),
      _vm._v(" "),
      _c("admin-categories-delete-modal", { ref: "deleteCatRef" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "card-title mb-0" }, [
      _c("div", { staticClass: "d-flex" }, [_c("div", [_vm._v("Categories")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-success mb-3" }, [
      _c("b", [_vm._v("Categories List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "50px" } }, [_vm._v("id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Category")]),
        _vm._v(" "),
        _c("th", [_vm._v("Product Tax Percentage")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/categories/index.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/categories/index.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dfc74722&scoped=true& */ "./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& */ "./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dfc74722",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/categories/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=style&index=0&id=dfc74722&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfc74722_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=dfc74722&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/categories/index.vue?vue&type=template&id=dfc74722&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfc74722_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9jYXRlZ29yaWVzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2NhdGVnb3JpZXMvaW5kZXgudnVlP2RiMmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9jYXRlZ29yaWVzL2luZGV4LnZ1ZT8wNzdiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9pbmRleC52dWU/NjYwNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2NhdGVnb3JpZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9pbmRleC52dWU/MjczYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2NhdGVnb3JpZXMvaW5kZXgudnVlPzlmYmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9jYXRlZ29yaWVzL2luZGV4LnZ1ZT9kYjdlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBO0FBQ0EseUVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGlCQUZBO0FBR0E7QUFIQTtBQUtBLEdBUkE7QUFVQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxtQkFMQSwyQkFLQSxJQUxBLEVBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FYQTtBQVlBLG1CQVpBLDJCQVlBLElB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QUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBMGMsQ0FBZ0IsMmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvQ2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5DYXRlZ29yaWVzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2gyPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxoMz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJhZGRNb2RhbFNob3coKVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtc3F1YXJlIG1yLTJcIj48L2k+IE5ldyBDYXRlZ29yeTwvYnV0dG9uPlxyXG4gICAgICAgIDwvaDM+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3MgbWItM1wiPlxyXG4gICAgICAgICAgPGI+Q2F0ZWdvcmllcyBMaXN0PC9iPlxyXG4gICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx0YWJsZSBpZD1cImNhdGVnb3JpZXMtdGFibGVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDx0aCBzY29wZT1cImNvbFwiPiM8L3RoPiAtLT5cclxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cIndpZHRoOjUwcHg7XCI+aWQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoPkNhdGVnb3J5PC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0IFRheCBQZXJjZW50YWdlPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wc2NhdGVnb3JpZXNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cIndpZHRoOjIwcHhcIj57e2l0ZW0uaWR9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLm5hbWV9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLnRheH19ICU8L3RkPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCIoc3ViLCBpbmRleDIpIGluIGl0ZW0uc3ViX2NhdGVnb3JpZXNcIiA6a2V5PVwiaW5kZXgyXCI+e3tzdWIubmFtZX19LDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD4gLS0+XHJcbiAgICAgICAgICAgICAgICA8dGQgc3R5bGU9XCJ3aWR0aDozMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIEBjbGljaz1cInVwZGF0ZU1vZGFsU2hvdyhpdGVtKVwiPjxpIGNsYXNzPVwiZmFzIGZhLXBlbmNpbC1hbHQgbXItMlwiPjwvaT5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIiBAY2xpY2s9XCJkZWxldGVNb2RhbFNob3coaXRlbSlcIj48aSBjbGFzcz1cImZhcyBmYS10cmFzaC1hbHQgbXItMlwiPjwvaT4gUmVtb3ZlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJ2NhdGVnb3JpZXMvc3ViLycraXRlbS5pZFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiPlN1YiBDYXRlZ29yaWVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8IS0tIDxwIGNsYXNzPVwibXQtM1wiPkN1cnJlbnQgUGFnZToge3sgY3VycmVudFBhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgPGItcGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImN1cnJlbnRQYWdlXCJcclxuICAgICAgICAgICAgICAgIDp0b3RhbC1yb3dzPVwicm93c1wiXHJcbiAgICAgICAgICAgICAgICA6cGVyLXBhZ2U9XCJwZXJQYWdlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJteS10YWJsZVwiXHJcbiAgICAgICAgICAgICAgPjwvYi1wYWdpbmF0aW9uPiAtLT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGFkbWluLWNhdGVnb3JpZXMtYWRkLW1vZGFsIHJlZj1cImFkZENhdFJlZlwiPjwvYWRtaW4tY2F0ZWdvcmllcy1hZGQtbW9kYWw+XHJcbiAgPGFkbWluLWNhdGVnb3JpZXMtdXBkYXRlLW1vZGFsIHJlZj1cInVwZGF0ZUNhdFJlZlwiPjwvYWRtaW4tY2F0ZWdvcmllcy11cGRhdGUtbW9kYWw+XHJcbiAgPGFkbWluLWNhdGVnb3JpZXMtZGVsZXRlLW1vZGFsIHJlZj1cImRlbGV0ZUNhdFJlZlwiPjwvYWRtaW4tY2F0ZWdvcmllcy1kZWxldGUtbW9kYWw+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHByb3BzOiBbXCJwcm9wc2NhdGVnb3JpZXNcIiwgXCJhZGRhY3Rpb25cIiwgXCJ1cGRhdGVhY3Rpb25cIiwgXCJkZWxldGVhY3Rpb25cIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxyXG4gICAgICBwZXJQYWdlOiAxMCxcclxuICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFkZE1vZGFsU2hvdygpIHtcclxuICAgICAgdGhpcy4kcmVmcy5hZGRDYXRSZWYuYWN0aW9uID0gdGhpcy5hZGRhY3Rpb247XHJcbiAgICAgICQoXCIjY2F0ZWdvcnlBZGRNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTW9kYWxTaG93KGRhdGEpIHtcclxuICAgICAgdGhpcy4kcmVmcy51cGRhdGVDYXRSZWYuYWN0aW9uID0gdGhpcy51cGRhdGVhY3Rpb247XHJcbiAgICAgIHRoaXMuJHJlZnMudXBkYXRlQ2F0UmVmLmNhdGVnb3J5X2lkID0gZGF0YS5pZDtcclxuICAgICAgdGhpcy4kcmVmcy51cGRhdGVDYXRSZWYubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgdGhpcy4kcmVmcy51cGRhdGVDYXRSZWYudGF4ID0gZGF0YS50YXg7XHJcbiAgICAgICQoXCIjY2F0ZWdvcnlVcGRhdGVNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlTW9kYWxTaG93KGRhdGEpIHtcclxuICAgICAgdGhpcy4kcmVmcy5kZWxldGVDYXRSZWYuYWN0aW9uID0gdGhpcy5kZWxldGVhY3Rpb247XHJcbiAgICAgIHRoaXMuJHJlZnMuZGVsZXRlQ2F0UmVmLmNhdGVnb3J5X2lkID0gZGF0YS5pZDtcclxuICAgICAgdGhpcy4kcmVmcy5kZWxldGVDYXRSZWYubmFtZSA9IGRhdGEubmFtZTtcclxuICAgICAgJChcIiNjYXRlZ29yeURlbGV0ZU1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICAgJCgnI2NhdGVnb3JpZXMtdGFibGUnKS5EYXRhVGFibGUoe1xyXG4gICAgICAgIFwibGVuZ3RoTWVudVwiOiBbXHJcbiAgICAgICAgICBbMTAsIDI1LCA1MCwgLTFdLFxyXG4gICAgICAgICAgWzEwLCAyNSwgNTAsIFwiQWxsXCJdXHJcbiAgICAgICAgXSxcclxuICAgICAgICBpRGlzcGxheUxlbmd0aDogLTFcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LFxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5jYXRlZ29yaWVzID0gdGhpcy5wcm9wc2NhdGVnb3JpZXM7XHJcbiAgfSxcclxuXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGxvYWRsaXN0KCkge1xyXG4gICAgICB2YXIgcGFnZUxpc3QgPSBbXTtcclxuICAgICAgdmFyIGJlZ2luID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcclxuICAgICAgdmFyIGVuZCA9IGJlZ2luICsgdGhpcy5wZXJQYWdlO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGJlZ2luKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlbmQpO1xyXG4gICAgICB2YXIgYWxsY2F0ZWdvcmllcyA9IHRoaXMuY2F0ZWdvcmllcztcclxuICAgICAgdmFyIHBhZ2VMaXN0ID0gYWxsY2F0ZWdvcmllcy5zbGljZShiZWdpbiwgZW5kKTtcclxuICAgICAgcmV0dXJuIHBhZ2VMaXN0O1xyXG4gICAgfSxcclxuICAgIHJvd3MoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhdGVnb3JpZXMubGVuZ3RoO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmJ0bi1zdWNjZXNzIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5idG4tc3VjY2Vzc1tkYXRhLXYtZGZjNzQ3MjJdIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGZjNzQ3MjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZmM3NDcyMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZmM3NDcyMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRNb2RhbFNob3coKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cy1zcXVhcmUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE5ldyBDYXRlZ29yeVwiKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiY2F0ZWdvcmllcy10YWJsZVwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb3BzY2F0ZWdvcmllcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmlkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGF4KSArIFwiICVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVNb2RhbFNob3coaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXBlbmNpbC1hbHQgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkVkaXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWxldGVNb2RhbFNob3coaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRyYXNoLWFsdCBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUmVtb3ZlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcImNhdGVnb3JpZXMvc3ViL1wiICsgaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3ViIENhdGVnb3JpZXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWRtaW4tY2F0ZWdvcmllcy1hZGQtbW9kYWxcIiwgeyByZWY6IFwiYWRkQ2F0UmVmXCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhZG1pbi1jYXRlZ29yaWVzLXVwZGF0ZS1tb2RhbFwiLCB7IHJlZjogXCJ1cGRhdGVDYXRSZWZcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImFkbWluLWNhdGVnb3JpZXMtZGVsZXRlLW1vZGFsXCIsIHsgcmVmOiBcImRlbGV0ZUNhdFJlZlwiIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtfYyhcImRpdlwiLCBbX3ZtLl92KFwiQ2F0ZWdvcmllc1wiKV0pXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzIG1iLTNcIiB9LCBbXG4gICAgICBfYyhcImJcIiwgW192bS5fdihcIkNhdGVnb3JpZXMgTGlzdFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwcHhcIiB9IH0sIFtfdm0uX3YoXCJpZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDYXRlZ29yeVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQcm9kdWN0IFRheCBQZXJjZW50YWdlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFjdGlvbnNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmYzc0NzIyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmYzc0NzIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGZjNzQ3MjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RmYzc0NzIyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RmYzc0NzIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RmYzc0NzIyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGZjNzQ3MjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGZjNzQ3MjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvY2F0ZWdvcmllcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZmM3NDcyMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmYzc0NzIyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGZjNzQ3MjImc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9