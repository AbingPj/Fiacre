(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ProdIn"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propsinstocks", "propsproduct", "storeaction", "updateaction"],
  data: function data() {
    return {
      product: {},
      instocks: []
    };
  },
  created: function created() {
    this.product = this.propsproduct;
    this.instocks = this.propsinstocks;
  },
  methods: {
    showModal: function showModal() {
      //   this.$refs.instock_modal.quantiy = this.propsproduct.quantiy;
      //   this.$refs.instock_modal.quantity = this.product.quantity;
      this.$refs.instock_modal.action = this.storeaction;
      this.$refs.instock_modal.id = this.product.id;
      $("#exampleModal").modal("show");
    },
    stockEdit: function stockEdit(data) {
      console.log(data);
      this.$refs.instock_modal_update.quantity = data.quantity;
      this.$refs.instock_modal_update.action = this.updateaction;
      this.$refs.instock_modal_update.id = data.id;
      $("#stockUpdateModal").modal("show");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success[data-v-136bd2ad] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            _c("h3", { staticClass: "text-success" }, [
              _c("b", [_vm._v(_vm._s(_vm.product.name) + " In-Stocks")])
            ]),
            _vm._v(" "),
            _c("h4", [
              _vm._v("\n          Remaining Quantity:\n          "),
              _c("b", [
                _vm._v(
                  _vm._s(_vm.product.quantity) +
                    " / " +
                    _vm._s(_vm.product.unit)
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "ml-2 btn btn-info",
                  on: {
                    click: function($event) {
                      return _vm.showModal()
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fas fa-book-medical" }),
                  _vm._v(" Add Quantity\n          ")
                ]
              )
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("img", {
              staticStyle: {
                with: "200px",
                height: "150px",
                "object-fit": "cover"
              },
              attrs: { src: _vm.product.image_link }
            }),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("br")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("div", [
              _c("table", { staticClass: "table table-hover" }, [
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.instocks, function(item, index) {
                    return _c("tr", { key: index }, [
                      _c("td", [_vm._v(_vm._s(item.date_label))]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(item.quantity) +
                            " / " +
                            _vm._s(_vm.product.unit)
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm btn-info",
                            on: {
                              click: function($event) {
                                return _vm.stockEdit(item)
                              }
                            }
                          },
                          [_vm._v("edit")]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("admin-products-in-stocks-modal", { ref: "instock_modal" }),
      _vm._v(" "),
      _c("admin-products-in-stocks-modal-update", {
        ref: "instock_modal_update"
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
    return _c("h2", { staticClass: "card-title mb-0" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c("div", { staticClass: "mr-2" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right rounded-0 text-light",
              attrs: { href: "/admin/products" }
            },
            [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
          )
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("Products")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", { staticClass: "text-success" }, [
      _c("b", [_vm._v("In-Stocks Records")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/products/instocks.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/products/instocks.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instocks.vue?vue&type=template&id=136bd2ad&scoped=true& */ "./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true&");
/* harmony import */ var _instocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instocks.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& */ "./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _instocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "136bd2ad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/products/instocks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./instocks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=style&index=0&id=136bd2ad&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_style_index_0_id_136bd2ad_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./instocks.vue?vue&type=template&id=136bd2ad&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/instocks.vue?vue&type=template&id=136bd2ad&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_instocks_vue_vue_type_template_id_136bd2ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbnN0b2Nrcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbnN0b2Nrcy52dWU/NjZjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luc3RvY2tzLnZ1ZT9kYTI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5zdG9ja3MudnVlPzFjYWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbnN0b2Nrcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbnN0b2Nrcy52dWU/OTIwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2luc3RvY2tzLnZ1ZT8wMzg1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvaW5zdG9ja3MudnVlPzU0MjgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUVBO0FBQ0EseUVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBU0EsU0FUQSxxQkFTQTtBQUNBO0FBQ0E7QUFDQSxHQVpBO0FBYUE7QUFDQSxhQURBLHVCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxhQVJBLHFCQVFBLElBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBYkEsRzs7Ozs7Ozs7Ozs7QUN2RUEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQ0FBa0MsMkJBQTJCLHlDQUF5QyxxQ0FBcUMsR0FBRzs7QUFFcks7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsK3JCQUEwWTs7QUFFaGEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssK0NBQStDO0FBQ3BEO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QyxtQkFBbUIscUJBQXFCO0FBQ3hDLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOEJBQThCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsMkJBQTJCLHFDQUFxQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Ysc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUJBQXFCO0FBQ3hDLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGFBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLHVCQUF1QjtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RCxpQkFBaUIsd0JBQXdCO0FBQ3pDLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLHNCQUFzQiw0Q0FBNEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDhCQUE4QjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixTQUFTLGVBQWUsRUFBRTtBQUM1QztBQUNBLGtCQUFrQixTQUFTLGVBQWUsRUFBRTtBQUM1QztBQUNBLGtCQUFrQixTQUFTLGVBQWUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc3RjtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFvTSxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F4TjtBQUFBO0FBQUE7QUFBQTtBQUE2YyxDQUFnQiw4YkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9Qcm9kSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHNcIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+UHJvZHVjdHM8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgPGI+e3twcm9kdWN0Lm5hbWV9fSBJbi1TdG9ja3M8L2I+XHJcbiAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgUmVtYWluaW5nIFF1YW50aXR5OlxyXG4gICAgICAgICAgICA8Yj57e3Byb2R1Y3QucXVhbnRpdHl9fSAvIHt7cHJvZHVjdC51bml0fX08L2I+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd01vZGFsKClcIiBjbGFzcz1cIm1sLTIgYnRuIGJ0bi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8aSBjbGFzcz1cImZhcyBmYS1zaWduLWluLWFsdFwiPjwvaT4gLS0+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYm9vay1tZWRpY2FsXCI+PC9pPiBBZGQgUXVhbnRpdHlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8aW1nIDpzcmM9XCJwcm9kdWN0LmltYWdlX2xpbmtcIiBzdHlsZT1cIndpdGg6MjAwcHg7IGhlaWdodDoxNTBweDsgb2JqZWN0LWZpdDpjb3ZlcjtcIiAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgIDxoNCBjbGFzcz1cInRleHQtc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICA8Yj5Jbi1TdG9ja3MgUmVjb3JkczwvYj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gaW5zdG9ja3NcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJyb3dcIj4xPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0uZGF0ZV9sYWJlbH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5xdWFudGl0eX19IC8ge3twcm9kdWN0LnVuaXR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiIEBjbGljaz1cInN0b2NrRWRpdChpdGVtKVwiPmVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxhZG1pbi1wcm9kdWN0cy1pbi1zdG9ja3MtbW9kYWwgcmVmPVwiaW5zdG9ja19tb2RhbFwiPjwvYWRtaW4tcHJvZHVjdHMtaW4tc3RvY2tzLW1vZGFsPlxyXG4gICAgPGFkbWluLXByb2R1Y3RzLWluLXN0b2Nrcy1tb2RhbC11cGRhdGUgcmVmPVwiaW5zdG9ja19tb2RhbF91cGRhdGVcIj48L2FkbWluLXByb2R1Y3RzLWluLXN0b2Nrcy1tb2RhbC11cGRhdGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wicHJvcHNpbnN0b2Nrc1wiLCBcInByb3BzcHJvZHVjdFwiLCBcInN0b3JlYWN0aW9uXCIsIFwidXBkYXRlYWN0aW9uXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9kdWN0OiB7fSxcclxuICAgICAgaW5zdG9ja3M6IFtdXHJcbiAgICB9O1xyXG4gIH0sXHJcblxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnByb2R1Y3QgPSB0aGlzLnByb3BzcHJvZHVjdDtcclxuICAgIHRoaXMuaW5zdG9ja3MgPSB0aGlzLnByb3BzaW5zdG9ja3M7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93TW9kYWwoKSB7XHJcbiAgICAgIC8vICAgdGhpcy4kcmVmcy5pbnN0b2NrX21vZGFsLnF1YW50aXkgPSB0aGlzLnByb3BzcHJvZHVjdC5xdWFudGl5O1xyXG4gICAgLy8gICB0aGlzLiRyZWZzLmluc3RvY2tfbW9kYWwucXVhbnRpdHkgPSB0aGlzLnByb2R1Y3QucXVhbnRpdHk7XHJcbiAgICAgIHRoaXMuJHJlZnMuaW5zdG9ja19tb2RhbC5hY3Rpb24gPSB0aGlzLnN0b3JlYWN0aW9uO1xyXG4gICAgICB0aGlzLiRyZWZzLmluc3RvY2tfbW9kYWwuaWQgPSB0aGlzLnByb2R1Y3QuaWQ7XHJcbiAgICAgICQoXCIjZXhhbXBsZU1vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0sXHJcbiAgICBzdG9ja0VkaXQoZGF0YSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgdGhpcy4kcmVmcy5pbnN0b2NrX21vZGFsX3VwZGF0ZS5xdWFudGl0eSA9IGRhdGEucXVhbnRpdHk7XHJcbiAgICAgIHRoaXMuJHJlZnMuaW5zdG9ja19tb2RhbF91cGRhdGUuYWN0aW9uID0gdGhpcy51cGRhdGVhY3Rpb247XHJcbiAgICAgIHRoaXMuJHJlZnMuaW5zdG9ja19tb2RhbF91cGRhdGUuaWQgPSBkYXRhLmlkO1xyXG4gICAgICAkKFwiI3N0b2NrVXBkYXRlTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYnRuLXN1Y2Nlc3NbZGF0YS12LTEzNmJkMmFkXSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3RvY2tzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmJkMmFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5zdG9ja3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM2YmQyYWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5zdG9ja3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM2YmQyYWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ucHJvZHVjdC5uYW1lKSArIFwiIEluLVN0b2Nrc1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFJlbWFpbmluZyBRdWFudGl0eTpcXG4gICAgICAgICAgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZHVjdC5xdWFudGl0eSkgK1xuICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9kdWN0LnVuaXQpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yIGJ0biBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd01vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWJvb2stbWVkaWNhbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEFkZCBRdWFudGl0eVxcbiAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIHdpdGg6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTUwcHhcIixcbiAgICAgICAgICAgICAgICBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnByb2R1Y3QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uaW5zdG9ja3MsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmRhdGVfbGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnF1YW50aXR5KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgLyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9kdWN0LnVuaXQpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4taW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3RvY2tFZGl0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJhZG1pbi1wcm9kdWN0cy1pbi1zdG9ja3MtbW9kYWxcIiwgeyByZWY6IFwiaW5zdG9ja19tb2RhbFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWRtaW4tcHJvZHVjdHMtaW4tc3RvY2tzLW1vZGFsLXVwZGF0ZVwiLCB7XG4gICAgICAgIHJlZjogXCJpbnN0b2NrX21vZGFsX3VwZGF0ZVwiXG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcHJvZHVjdHNcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgfSldXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIlByb2R1Y3RzXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiSW4tU3RvY2tzIFJlY29yZHNcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBzY29wZTogXCJjb2xcIiB9IH0sIFtfdm0uX3YoXCJRdWFudGl0eVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgc2NvcGU6IFwiY29sXCIgfSB9LCBbX3ZtLl92KFwiQWN0aW9uc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbnN0b2Nrcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM2YmQyYWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5zdG9ja3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnN0b2Nrcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5zdG9ja3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM2YmQyYWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzZiZDJhZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTM2YmQyYWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTM2YmQyYWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTM2YmQyYWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luc3RvY2tzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMzZiZDJhZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMzZiZDJhZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9pbnN0b2Nrcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3RvY2tzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnN0b2Nrcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnN0b2Nrcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzZiZDJhZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luc3RvY2tzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmJkMmFkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnN0b2Nrcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM2YmQyYWQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9