(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/prodGrid"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["products", "customer_role", "display"],
  //   computed: {
  //     computedProductsData() {
  //       return this.products;
  //     },
  //   },
  methods: {
    canClick: function canClick(data) {
      return data == true ? null : 'click';
    },
    showAddToCartModal: function showAddToCartModal(data) {
      this.$parent.showAddToCartModal(data);
    },
    updateProductPrice: function updateProductPrice(product) {
      var customer_role = this.$parent.user.customer_role;
      var price = customer_role == 2 ? product.member_price : customer_role == 3 ? product.wholesale_price : product.price;
      return this.displayNumberWithComma(price);
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#products-box-2[data-v-7fa59d40] {\n  margin-top: 20px;\n}\n#products-box-2 .prod[data-v-7fa59d40] {\n  padding: 10px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n#products-box-2 .prod[data-v-7fa59d40] {\n    padding: 5px;\n}\n}\n#products-box-2 .prod .prod-container[data-v-7fa59d40]:hover {\n  border: #339f25 solid 2px;\n}\n#products-box-2 .prod .prod-container:hover .prod-btn-hover[data-v-7fa59d40] {\n  background-color: #339f25;\n}\n#products-box-2 .prod .prod-selected[data-v-7fa59d40] {\n  cursor: not-allowed;\n}\n#products-box-2 .prod .prod-container[data-v-7fa59d40] {\n  position: relative;\n  border: white solid 2px;\n}\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n  object-fit: cover;\n  width: 185px;\n  height: 150px;\n  border-radius: 5px 5px 0px 0px;\n}\n@media (min-width: 300px) and (max-width: 369px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 135px;\n    height: 100px;\n}\n}\n@media (min-width: 370px) and (max-width: 420px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 160px;\n    height: 125px;\n}\n}\n@media (min-width: 806px) and (max-width: 850px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 150px;\n    height: 115px;\n}\n}\n@media (min-width: 851px) and (max-width: 899px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 160px;\n    height: 125px;\n}\n}\n@media (min-width: 900px) and (max-width: 965px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 170px;\n    height: 135px;\n}\n}\n@media (min-width: 995px) and (max-width: 1130px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 160px;\n    height: 125px;\n}\n}\n@media (min-width: 1070px) and (max-width: 1130px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 170px;\n    height: 135px;\n}\n}\n@media (min-width: 1211px) and (max-width: 1235px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 155px;\n    height: 120px;\n}\n}\n@media (min-width: 1236px) and (max-width: 1305px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 160px;\n    height: 125px;\n}\n}\n@media (min-width: 1306px) and (max-width: 1405px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 170px;\n    height: 135px;\n}\n}\n@media (min-width: 1570px) and (max-width: 1868px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 195px;\n    height: 160px;\n}\n}\n@media (min-width: 1869px) and (max-width: 1899px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 170px;\n    height: 135px;\n}\n}\n@media (min-width: 1900px) and (max-width: 1979px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 175px;\n    height: 145px;\n}\n}\n@media (min-width: 2050px) and (max-width: 2100px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 190px;\n    height: 155px;\n}\n}\n@media (min-width: 2101px) and (max-width: 2119px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 195px;\n    height: 160px;\n}\n}\n@media (min-width: 2120px) and (max-width: 2179px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 200px;\n    height: 165px;\n}\n}\n@media (min-width: 2180px) and (max-width: 2273px) {\n#products-box-2 .prod .prod-container .prod-image[data-v-7fa59d40] {\n    width: 205px;\n    height: 170px;\n}\n}\n#products-box-2 .prod .prod-container .prod-image-selected[data-v-7fa59d40] {\n  opacity: 0.5;\n}\n#products-box-2 .prod .prod-container .prod-btn[data-v-7fa59d40] {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  border: 3px solid;\n  border-color: white;\n  border-radius: 50%;\n  color: white;\n}\n#products-box-2 .prod .prod-container .prod-btn-selected[data-v-7fa59d40] {\n  background-color: #339f25;\n}\n#products-box-2 .prod .prod-container .prod-text[data-v-7fa59d40] {\n  position: absolute;\n  bottom: 0%;\n  left: 0%;\n  background: rgba(0, 0, 0, 0.6);\n  width: 100%;\n  height: 30%;\n  font-size: 15px;\n  color: white;\n  padding-left: 5px;\n  text-align: left;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n#products-box-2 .prod .prod-container .prod-text[data-v-7fa59d40] {\n    height: 30%;\n}\n}\n#products-box-2 .prod .prod-container .prod-text-price[data-v-7fa59d40] {\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  background: rgba(0, 0, 0, 0.6);\n  width: 75%;\n  height: 17%;\n  font-size: 15px;\n  color: white;\n  padding-left: 5px;\n  text-align: left;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n#products-box-2 .prod .prod-container .prod-text-price[data-v-7fa59d40] {\n    height: 18%;\n    width: 100%;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.display == "box"
    ? _c(
        "div",
        { staticClass: "container-fluid", attrs: { id: "products-box-2" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "div",
                { staticClass: "d-flex flex-wrap justify-content-center" },
                _vm._l(_vm.products, function(prod, index) {
                  return _c("div", { key: index, staticClass: "prod" }, [
                    _c(
                      "div",
                      {
                        staticClass: "prod-container",
                        class: prod.selected == true ? "prod-selected" : "",
                        on: _vm._d({}, [
                          _vm.canClick(prod.selected),
                          function($event) {
                            return _vm.showAddToCartModal(prod)
                          }
                        ])
                      },
                      [
                        _c("img", {
                          staticClass: "prod-image",
                          class:
                            prod.selected == true ? "prod-image-selected" : "",
                          attrs: { src: prod.image_link }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "prod-text-price" }, [
                          _c("b", [
                            _vm._v(
                              "$ " +
                                _vm._s(_vm.updateProductPrice(prod)) +
                                " / " +
                                _vm._s(prod.unit)
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass:
                              "btn btn-sm btn-outline-success prod-btn prod-btn-hover",
                            class:
                              prod.selected == true ? "prod-btn-selected" : "",
                            attrs: {
                              type: "button",
                              disabled: prod.selected == true ? true : false
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fa fa-check",
                              attrs: { "aria-hidden": "true" }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "prod-text" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(prod.name) +
                              "\n              "
                          )
                        ])
                      ]
                    )
                  ])
                }),
                0
              )
            ])
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/products-page/productsViewGrid.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/productsViewGrid.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true& */ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true&");
/* harmony import */ var _productsViewGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./productsViewGrid.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& */ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _productsViewGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fa59d40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/products-page/productsViewGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productsViewGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=style&index=0&id=7fa59d40&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_style_index_0_id_7fa59d40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/productsViewGrid.vue?vue&type=template&id=7fa59d40&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_productsViewGrid_vue_vue_type_template_id_7fa59d40_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlP2NjZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT9mZDJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHNWaWV3R3JpZC52dWU/NDg5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHNWaWV3R3JpZC52dWU/NTI3OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlPzJlM2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT84MmJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbU5BO0FBQ0EsaURBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxZQURBLG9CQUNBLElBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLHNCQUpBLDhCQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLHNCQVBBLDhCQU9BLE9BUEEsRUFPQTtBQUNBO0FBQ0Esa0JBQ0EscUJBQ0Esb0JBREEsR0FFQSxxQkFDQSx1QkFEQSxHQUVBLGFBTEE7QUFNQTtBQUNBLEtBaEJBO0FBaUJBLDBCQWpCQSxrQ0FpQkEsS0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQXhCQTtBQVJBLEc7Ozs7Ozs7Ozs7O0FDbk5BLDJCQUEyQixtQkFBTyxDQUFDLHlHQUF3RDtBQUMzRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMscUNBQXFDLHFCQUFxQixHQUFHLDBDQUEwQyxrQkFBa0IsR0FBRyxvREFBb0QsMENBQTBDLG1CQUFtQixHQUFHLEdBQUcsZ0VBQWdFLDhCQUE4QixHQUFHLGdGQUFnRiw4QkFBOEIsR0FBRyx5REFBeUQsd0JBQXdCLEdBQUcsMERBQTBELHVCQUF1Qiw0QkFBNEIsR0FBRyxzRUFBc0Usc0JBQXNCLGlCQUFpQixrQkFBa0IsbUNBQW1DLEdBQUcsb0RBQW9ELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxvREFBb0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLG9EQUFvRCxzRUFBc0UsbUJBQW1CLG9CQUFvQixHQUFHLEdBQUcsb0RBQW9ELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxvREFBb0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLHFEQUFxRCxzRUFBc0UsbUJBQW1CLG9CQUFvQixHQUFHLEdBQUcsc0RBQXNELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxzREFBc0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLHNEQUFzRCxzRUFBc0UsbUJBQW1CLG9CQUFvQixHQUFHLEdBQUcsc0RBQXNELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxzREFBc0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLHNEQUFzRCxzRUFBc0UsbUJBQW1CLG9CQUFvQixHQUFHLEdBQUcsc0RBQXNELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxzREFBc0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLHNEQUFzRCxzRUFBc0UsbUJBQW1CLG9CQUFvQixHQUFHLEdBQUcsc0RBQXNELHNFQUFzRSxtQkFBbUIsb0JBQW9CLEdBQUcsR0FBRyxzREFBc0Qsc0VBQXNFLG1CQUFtQixvQkFBb0IsR0FBRyxHQUFHLCtFQUErRSxpQkFBaUIsR0FBRyxvRUFBb0UsdUJBQXVCLGFBQWEsZUFBZSxzQkFBc0Isd0JBQXdCLHVCQUF1QixpQkFBaUIsR0FBRyw2RUFBNkUsOEJBQThCLEdBQUcscUVBQXFFLHVCQUF1QixlQUFlLGFBQWEsbUNBQW1DLGdCQUFnQixnQkFBZ0Isb0JBQW9CLGlCQUFpQixzQkFBc0IscUJBQXFCLEdBQUcsb0RBQW9ELHFFQUFxRSxrQkFBa0IsR0FBRyxHQUFHLDJFQUEyRSx1QkFBdUIsWUFBWSxhQUFhLG1DQUFtQyxlQUFlLGdCQUFnQixvQkFBb0IsaUJBQWlCLHNCQUFzQixxQkFBcUIsR0FBRyxvREFBb0QsMkVBQTJFLGtCQUFrQixrQkFBa0IsR0FBRyxHQUFHOztBQUU1Mko7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMscXRCQUFrWjs7QUFFeGEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx5Q0FBeUMsdUJBQXVCLEVBQUU7QUFDM0U7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDLHVCQUF1QixxQkFBcUI7QUFDNUM7QUFDQTtBQUNBLGlCQUFpQix5REFBeUQ7QUFDMUU7QUFDQSxvQ0FBb0Msa0NBQWtDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDLHlCQUF5QjtBQUN6QjtBQUNBLG1DQUFtQyxpQ0FBaUM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0Qyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJCQUEyQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3JHO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTRNLENBQWdCLDRQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhPO0FBQUE7QUFBQTtBQUFBO0FBQXFkLENBQWdCLHNjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2RHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5AaW1wb3J0IFwicmVzb3VyY2VzL3Nhc3MvbWl4aW5zXCI7XG4jcHJvZHVjdHMtYm94LTIge1xuICAvLyAgIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC5wcm9kIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIC5wcm9kLWNvbnRhaW5lcjpob3ZlcntcbiAgICAgIGJvcmRlcjogIzMzOWYyNSBzb2xpZCAycHg7XG4gICAgICAucHJvZC1idG4taG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1O1xuICAgICAgfVxuICAgIH1cbiAgICAucHJvZC1zZWxlY3RlZHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG4gICAgLnByb2QtY29udGFpbmVyIHtcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XG4gICAgICAucHJvZC1pbWFnZSB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB3aWR0aDogMTg1cHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjlweCkge1xuICAgICAgICAgIHdpZHRoOiAxMzVweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3MHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDZweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTE1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODUxcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogOTY1cHgpIHtcbiAgICAgICAgICB3aWR0aDogMTcwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTVweCkgYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xuICAgICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEwNzBweCkgYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xuICAgICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEzNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMTEzMSAtIDEyMTBcblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIxMXB4KSBhbmQgKG1heC13aWR0aDogMTIzNXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE1NXB4O1xuICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIzNnB4KSBhbmQgKG1heC13aWR0aDogMTMwNXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgIGhlaWdodDogMTI1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTMwNnB4KSBhbmQgKG1heC13aWR0aDogMTQwNXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTU3MHB4KSBhbmQgKG1heC13aWR0aDogMTg2OHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE5NXB4O1xuICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTg2OXB4KSBhbmQgKG1heC13aWR0aDogMTg5OXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICAgIGhlaWdodDogMTM1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTkwMHB4KSBhbmQgKG1heC13aWR0aDogMTk3OXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE3NXB4O1xuICAgICAgICAgIGhlaWdodDogMTQ1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjA1MHB4KSBhbmQgKG1heC13aWR0aDogMjEwMHB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE5MHB4O1xuICAgICAgICAgIGhlaWdodDogMTU1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjEwMXB4KSBhbmQgKG1heC13aWR0aDogMjExOXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDE5NXB4O1xuICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjEyMHB4KSBhbmQgKG1heC13aWR0aDogMjE3OXB4KSB7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTY1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjE4MHB4KSBhbmQgKG1heC13aWR0aDogMjI3M3B4KSB7XG4gICAgICAgICAgd2lkdGg6IDIwNXB4O1xuICAgICAgICAgIGhlaWdodDogMTcwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnByb2QtaW1hZ2Utc2VsZWN0ZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB9XG5cbiAgICAgIC5wcm9kLWJ0biB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICAgIC5wcm9kLWJ0bi1zZWxlY3RlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjU7XG4gICAgICB9XG5cbiAgICAgIC5wcm9kLXRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMCU7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDMwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAvLyAgIGhlaWdodDogMzglO1xuICAgICAgICAgIGhlaWdodDogMzAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5wcm9kLXRleHQtcHJpY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMCU7XG4gICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIGhlaWdodDogMTclO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgaGVpZ2h0OiAxOCU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIiB2LWlmPVwiZGlzcGxheSA9PSAnYm94J1wiIGlkPVwicHJvZHVjdHMtYm94LTJcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZFwiIHYtZm9yPVwiKHByb2QsIGluZGV4KSBpbiBwcm9kdWN0c1wiIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2QtY29udGFpbmVyXCIgQFtjYW5DbGljayhwcm9kLnNlbGVjdGVkKV09XCJzaG93QWRkVG9DYXJ0TW9kYWwocHJvZClcIiAgOmNsYXNzPVwicHJvZC5zZWxlY3RlZCA9PSB0cnVlPyAncHJvZC1zZWxlY3RlZCc6JydcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIDpzcmM9XCJwcm9kLmltYWdlX2xpbmtcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInByb2Quc2VsZWN0ZWQgPT0gdHJ1ZT8gJ3Byb2QtaW1hZ2Utc2VsZWN0ZWQnOiAnJ1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwcm9kLWltYWdlXCJcbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2QtdGV4dC1wcmljZVwiPlxuICAgICAgICAgICAgICAgIDxiPiQge3t1cGRhdGVQcm9kdWN0UHJpY2UocHJvZCl9fSAvIHt7cHJvZC51bml0fX08L2I+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1zdWNjZXNzIHByb2QtYnRuIHByb2QtYnRuLWhvdmVyXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJwcm9kLnNlbGVjdGVkID09IHRydWU/ICdwcm9kLWJ0bi1zZWxlY3RlZCc6ICcnXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwcm9kLnNlbGVjdGVkID09IHRydWU/IHRydWU6ZmFsc2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2QtdGV4dFwiPlxuICAgICAgICAgICAgICAgIHt7cHJvZC5uYW1lfX1cbiAgICAgICAgICAgICAgICA8IS0tIDxiciAvPlxuICAgICAgICAgICAgICAgIDxiPiQge3t1cGRhdGVQcm9kdWN0UHJpY2UocHJvZCl9fSAvIHt7cHJvZC51bml0fX08L2I+IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicHJvZHVjdHNcIiwgXCJjdXN0b21lcl9yb2xlXCIsIFwiZGlzcGxheVwiXSxcbiAgLy8gICBjb21wdXRlZDoge1xuICAvLyAgICAgY29tcHV0ZWRQcm9kdWN0c0RhdGEoKSB7XG4gIC8vICAgICAgIHJldHVybiB0aGlzLnByb2R1Y3RzO1xuICAvLyAgICAgfSxcbiAgLy8gICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBjYW5DbGljayhkYXRhKXtcbiAgICAgICByZXR1cm4gZGF0YSA9PSB0cnVlID8gbnVsbDonY2xpY2snO1xuICAgIH0sXG4gICAgc2hvd0FkZFRvQ2FydE1vZGFsKGRhdGEpIHtcbiAgICAgIHRoaXMuJHBhcmVudC5zaG93QWRkVG9DYXJ0TW9kYWwoZGF0YSk7XG4gICAgfSxcbiAgICB1cGRhdGVQcm9kdWN0UHJpY2UocHJvZHVjdCkge1xuICAgICAgbGV0IGN1c3RvbWVyX3JvbGUgPSB0aGlzLiRwYXJlbnQudXNlci5jdXN0b21lcl9yb2xlO1xuICAgICAgbGV0IHByaWNlID1cbiAgICAgICAgY3VzdG9tZXJfcm9sZSA9PSAyXG4gICAgICAgICAgPyBwcm9kdWN0Lm1lbWJlcl9wcmljZVxuICAgICAgICAgIDogY3VzdG9tZXJfcm9sZSA9PSAzXG4gICAgICAgICAgPyBwcm9kdWN0Lndob2xlc2FsZV9wcmljZVxuICAgICAgICAgIDogcHJvZHVjdC5wcmljZTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEocHJpY2UpO1xuICAgIH0sXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjcHJvZHVjdHMtYm94LTJbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2RbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZFtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG59XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lcltkYXRhLXYtN2ZhNTlkNDBdOmhvdmVyIHtcXG4gIGJvcmRlcjogIzMzOWYyNSBzb2xpZCAycHg7XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXI6aG92ZXIgLnByb2QtYnRuLWhvdmVyW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNTtcXG59XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLXNlbGVjdGVkW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lcltkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlcjogd2hpdGUgc29saWQgMnB4O1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICB3aWR0aDogMTg1cHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjlweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxMzVweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzNzBweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDgwNnB4KSBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogMTE1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODUxcHgpIGFuZCAobWF4LXdpZHRoOiA4OTlweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAxMjVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgYW5kIChtYXgtd2lkdGg6IDk2NXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDEzNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5NXB4KSBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzBweCkgYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAxMzVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjExcHgpIGFuZCAobWF4LXdpZHRoOiAxMjM1cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTU1cHg7XFxuICAgIGhlaWdodDogMTIwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTIzNnB4KSBhbmQgKG1heC13aWR0aDogMTMwNXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEzMDZweCkgYW5kIChtYXgtd2lkdGg6IDE0MDVweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNzBweDtcXG4gICAgaGVpZ2h0OiAxMzVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIGFuZCAobWF4LXdpZHRoOiAxODY4cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTg2OXB4KSBhbmQgKG1heC13aWR0aDogMTg5OXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDEzNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE5MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5NzlweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNzVweDtcXG4gICAgaGVpZ2h0OiAxNDVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMDUwcHgpIGFuZCAobWF4LXdpZHRoOiAyMTAwcHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTkwcHg7XFxuICAgIGhlaWdodDogMTU1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjEwMXB4KSBhbmQgKG1heC13aWR0aDogMjExOXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE5NXB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIxMjBweCkgYW5kIChtYXgtd2lkdGg6IDIxNzlweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxNjVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMTgwcHgpIGFuZCAobWF4LXdpZHRoOiAyMjczcHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMjA1cHg7XFxuICAgIGhlaWdodDogMTcwcHg7XFxufVxcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlLXNlbGVjdGVkW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWJ0bltkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMnB4O1xcbiAgcmlnaHQ6IDJweDtcXG4gIGJvcmRlcjogM3B4IHNvbGlkO1xcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1idG4tc2VsZWN0ZWRbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1O1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLXRleHRbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDAlO1xcbiAgbGVmdDogMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtdGV4dFtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgaGVpZ2h0OiAzMCU7XFxufVxcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLXRleHQtcHJpY2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAlO1xcbiAgbGVmdDogMCU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxNyU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC10ZXh0LXByaWNlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICBoZWlnaHQ6IDE4JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYTU5ZDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvZHVjdHNWaWV3R3JpZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZmE1OWQ0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYTU5ZDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5kaXNwbGF5ID09IFwiYm94XCJcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiLCBhdHRyczogeyBpZDogXCJwcm9kdWN0cy1ib3gtMlwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC13cmFwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKHByb2QsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJwcm9kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2QtY29udGFpbmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogcHJvZC5zZWxlY3RlZCA9PSB0cnVlID8gXCJwcm9kLXNlbGVjdGVkXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IF92bS5fZCh7fSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2FuQ2xpY2socHJvZC5zZWxlY3RlZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0FkZFRvQ2FydE1vZGFsKHByb2QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByb2QtaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5zZWxlY3RlZCA9PSB0cnVlID8gXCJwcm9kLWltYWdlLXNlbGVjdGVkXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHByb2QuaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2QtdGV4dC1wcmljZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVwZGF0ZVByb2R1Y3RQcmljZShwcm9kKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2QudW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgcHJvZC1idG4gcHJvZC1idG4taG92ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Quc2VsZWN0ZWQgPT0gdHJ1ZSA/IFwicHJvZC1idG4tc2VsZWN0ZWRcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogcHJvZC5zZWxlY3RlZCA9PSB0cnVlID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLWNoZWNrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZC10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhwcm9kLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYTU5ZDQwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYTU5ZDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2ZhNTlkNDBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZmE1OWQ0MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZmE1OWQ0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZmE1OWQ0MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcHJvZHVjdHNWaWV3R3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZhNTlkNDAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2ZhNTlkNDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHNWaWV3R3JpZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHJvZHVjdHNWaWV3R3JpZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZmE1OWQ0MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZhNTlkNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYTU5ZDQwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==