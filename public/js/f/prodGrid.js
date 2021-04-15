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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlP2NjZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT9mZDJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHNWaWV3R3JpZC52dWU/NDg5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvcHJvZHVjdHNWaWV3R3JpZC52dWU/NTI3OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlPzJlM2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT84MmJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQXFkLENBQWdCLHNjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2RHcmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuQGltcG9ydCBcInJlc291cmNlcy9zYXNzL21peGluc1wiO1xyXG4jcHJvZHVjdHMtYm94LTIge1xyXG4gIC8vICAgYmFja2dyb3VuZDogZGFya29yYW5nZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIC5wcm9kIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucHJvZC1jb250YWluZXI6aG92ZXJ7XHJcbiAgICAgIGJvcmRlcjogIzMzOWYyNSBzb2xpZCAycHg7XHJcbiAgICAgIC5wcm9kLWJ0bi1ob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2Qtc2VsZWN0ZWR7XHJcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICAgIC5wcm9kLWNvbnRhaW5lciB7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBib3JkZXI6IHdoaXRlIHNvbGlkIDJweDtcclxuICAgICAgLnByb2QtaW1hZ2Uge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHdpZHRoOiAxODVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzY5cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxMzVweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzcwcHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDZweCkgYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDExNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDg1MXB4KSBhbmQgKG1heC13aWR0aDogODk5cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NjVweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTVweCkgYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDcwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTMwcHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAxMTMxIC0gMTIxMFxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIxMXB4KSBhbmQgKG1heC13aWR0aDogMTIzNXB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTU1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMzZweCkgYW5kIChtYXgtd2lkdGg6IDEzMDVweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMjVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMzA2cHgpIGFuZCAobWF4LXdpZHRoOiAxNDA1cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTU3MHB4KSBhbmQgKG1heC13aWR0aDogMTg2OHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTk1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDE4NjlweCkgYW5kIChtYXgtd2lkdGg6IDE4OTlweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxOTAwcHgpIGFuZCAobWF4LXdpZHRoOiAxOTc5cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAxNzVweDtcclxuICAgICAgICAgIGhlaWdodDogMTQ1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjA1MHB4KSBhbmQgKG1heC13aWR0aDogMjEwMHB4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1NXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDIxMDFweCkgYW5kIChtYXgtd2lkdGg6IDIxMTlweCkge1xyXG4gICAgICAgICAgd2lkdGg6IDE5NXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAyMTIwcHgpIGFuZCAobWF4LXdpZHRoOiAyMTc5cHgpIHtcclxuICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIGhlaWdodDogMTY1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjE4MHB4KSBhbmQgKG1heC13aWR0aDogMjI3M3B4KSB7XHJcbiAgICAgICAgICB3aWR0aDogMjA1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2QtaW1hZ2Utc2VsZWN0ZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2QtYnRuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICBib3JkZXI6IDNweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2QtYnRuLXNlbGVjdGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvZC10ZXh0IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwJTtcclxuICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgLy8gICBoZWlnaHQ6IDM4JTtcclxuICAgICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnByb2QtdGV4dC1wcmljZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNyU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4JTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiIHYtaWY9XCJkaXNwbGF5ID09ICdib3gnXCIgaWQ9XCJwcm9kdWN0cy1ib3gtMlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2RcIiB2LWZvcj1cIihwcm9kLCBpbmRleCkgaW4gcHJvZHVjdHNcIiA6a2V5PVwiaW5kZXhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2QtY29udGFpbmVyXCIgQFtjYW5DbGljayhwcm9kLnNlbGVjdGVkKV09XCJzaG93QWRkVG9DYXJ0TW9kYWwocHJvZClcIiAgOmNsYXNzPVwicHJvZC5zZWxlY3RlZCA9PSB0cnVlPyAncHJvZC1zZWxlY3RlZCc6JydcIj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICA6c3JjPVwicHJvZC5pbWFnZV9saW5rXCJcclxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInByb2Quc2VsZWN0ZWQgPT0gdHJ1ZT8gJ3Byb2QtaW1hZ2Utc2VsZWN0ZWQnOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInByb2QtaW1hZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZC10ZXh0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8Yj4kIHt7dXBkYXRlUHJvZHVjdFByaWNlKHByb2QpfX0gLyB7e3Byb2QudW5pdH19PC9iPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc3VjY2VzcyBwcm9kLWJ0biBwcm9kLWJ0bi1ob3ZlclwiXHJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJwcm9kLnNlbGVjdGVkID09IHRydWU/ICdwcm9kLWJ0bi1zZWxlY3RlZCc6ICcnXCJcclxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInByb2Quc2VsZWN0ZWQgPT0gdHJ1ZT8gdHJ1ZTpmYWxzZVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2QtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAge3twcm9kLm5hbWV9fVxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxiPiQge3t1cGRhdGVQcm9kdWN0UHJpY2UocHJvZCl9fSAvIHt7cHJvZC51bml0fX08L2I+IC0tPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInByb2R1Y3RzXCIsIFwiY3VzdG9tZXJfcm9sZVwiLCBcImRpc3BsYXlcIl0sXHJcbiAgLy8gICBjb21wdXRlZDoge1xyXG4gIC8vICAgICBjb21wdXRlZFByb2R1Y3RzRGF0YSgpIHtcclxuICAvLyAgICAgICByZXR1cm4gdGhpcy5wcm9kdWN0cztcclxuICAvLyAgICAgfSxcclxuICAvLyAgIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNhbkNsaWNrKGRhdGEpe1xyXG4gICAgICAgcmV0dXJuIGRhdGEgPT0gdHJ1ZSA/IG51bGw6J2NsaWNrJztcclxuICAgIH0sXHJcbiAgICBzaG93QWRkVG9DYXJ0TW9kYWwoZGF0YSkge1xyXG4gICAgICB0aGlzLiRwYXJlbnQuc2hvd0FkZFRvQ2FydE1vZGFsKGRhdGEpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVByb2R1Y3RQcmljZShwcm9kdWN0KSB7XHJcbiAgICAgIGxldCBjdXN0b21lcl9yb2xlID0gdGhpcy4kcGFyZW50LnVzZXIuY3VzdG9tZXJfcm9sZTtcclxuICAgICAgbGV0IHByaWNlID1cclxuICAgICAgICBjdXN0b21lcl9yb2xlID09IDJcclxuICAgICAgICAgID8gcHJvZHVjdC5tZW1iZXJfcHJpY2VcclxuICAgICAgICAgIDogY3VzdG9tZXJfcm9sZSA9PSAzXHJcbiAgICAgICAgICA/IHByb2R1Y3Qud2hvbGVzYWxlX3ByaWNlXHJcbiAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XHJcbiAgICAgIHJldHVybiB0aGlzLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEocHJpY2UpO1xyXG4gICAgfSxcclxuICAgIGRpc3BsYXlOdW1iZXJXaXRoQ29tbWEodmFsdWUpIHtcclxuICAgICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpO1xyXG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcclxuICAgICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIiNwcm9kdWN0cy1ib3gtMltkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZFtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyW2RhdGEtdi03ZmE1OWQ0MF06aG92ZXIge1xcbiAgYm9yZGVyOiAjMzM5ZjI1IHNvbGlkIDJweDtcXG59XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lcjpob3ZlciAucHJvZC1idG4taG92ZXJbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1O1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2Qtc2VsZWN0ZWRbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiB3aGl0ZSBzb2xpZCAycHg7XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHdpZHRoOiAxODVweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDM2OXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDEzNXB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDM3MHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogODA2cHgpIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAxMTVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA4NTFweCkgYW5kIChtYXgtd2lkdGg6IDg5OXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSBhbmQgKG1heC13aWR0aDogOTY1cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMTM1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogOTk1cHgpIGFuZCAobWF4LXdpZHRoOiAxMTMwcHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTA3MHB4KSBhbmQgKG1heC13aWR0aDogMTEzMHB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDEzNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMTFweCkgYW5kIChtYXgtd2lkdGg6IDEyMzVweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxNTVweDtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjM2cHgpIGFuZCAobWF4LXdpZHRoOiAxMzA1cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTI1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTMwNnB4KSBhbmQgKG1heC13aWR0aDogMTQwNXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE3MHB4O1xcbiAgICBoZWlnaHQ6IDEzNXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1NzBweCkgYW5kIChtYXgtd2lkdGg6IDE4NjhweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxOTVweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxODY5cHgpIGFuZCAobWF4LXdpZHRoOiAxODk5cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTcwcHg7XFxuICAgIGhlaWdodDogMTM1cHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTkwMHB4KSBhbmQgKG1heC13aWR0aDogMTk3OXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDE3NXB4O1xcbiAgICBoZWlnaHQ6IDE0NXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwNTBweCkgYW5kIChtYXgtd2lkdGg6IDIxMDBweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAxOTBweDtcXG4gICAgaGVpZ2h0OiAxNTVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAyMTAxcHgpIGFuZCAobWF4LXdpZHRoOiAyMTE5cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWltYWdlW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICB3aWR0aDogMTk1cHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMjEyMHB4KSBhbmQgKG1heC13aWR0aDogMjE3OXB4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC1pbWFnZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE2NXB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIxODBweCkgYW5kIChtYXgtd2lkdGg6IDIyNzNweCkge1xcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIHdpZHRoOiAyMDVweDtcXG4gICAgaGVpZ2h0OiAxNzBweDtcXG59XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtaW1hZ2Utc2VsZWN0ZWRbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtYnRuW2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAycHg7XFxuICByaWdodDogMnB4O1xcbiAgYm9yZGVyOiAzcHggc29saWQ7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLWJ0bi1zZWxlY3RlZFtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjU7XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtdGV4dFtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMCU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuI3Byb2R1Y3RzLWJveC0yIC5wcm9kIC5wcm9kLWNvbnRhaW5lciAucHJvZC10ZXh0W2RhdGEtdi03ZmE1OWQ0MF0ge1xcbiAgICBoZWlnaHQ6IDMwJTtcXG59XFxufVxcbiNwcm9kdWN0cy1ib3gtMiAucHJvZCAucHJvZC1jb250YWluZXIgLnByb2QtdGV4dC1wcmljZVtkYXRhLXYtN2ZhNTlkNDBdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMCU7XFxuICBsZWZ0OiAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gIHdpZHRoOiA3NSU7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4jcHJvZHVjdHMtYm94LTIgLnByb2QgLnByb2QtY29udGFpbmVyIC5wcm9kLXRleHQtcHJpY2VbZGF0YS12LTdmYTU5ZDQwXSB7XFxuICAgIGhlaWdodDogMTglO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZhNTlkNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYTU5ZDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZhNTlkNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmRpc3BsYXkgPT0gXCJib3hcIlxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIsIGF0dHJzOiB7IGlkOiBcInByb2R1Y3RzLWJveC0yXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LXdyYXAganVzdGlmeS1jb250ZW50LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9kdWN0cywgZnVuY3Rpb24ocHJvZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInByb2RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZC1jb250YWluZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBwcm9kLnNlbGVjdGVkID09IHRydWUgPyBcInByb2Qtc2VsZWN0ZWRcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogX3ZtLl9kKHt9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jYW5DbGljayhwcm9kLnNlbGVjdGVkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93QWRkVG9DYXJ0TW9kYWwocHJvZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJvZC1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kLnNlbGVjdGVkID09IHRydWUgPyBcInByb2QtaW1hZ2Utc2VsZWN0ZWRcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcHJvZC5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHJvZC10ZXh0LXByaWNlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXBkYXRlUHJvZHVjdFByaWNlKHByb2QpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIC8gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MocHJvZC51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc20gYnRuLW91dGxpbmUtc3VjY2VzcyBwcm9kLWJ0biBwcm9kLWJ0bi1ob3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZC5zZWxlY3RlZCA9PSB0cnVlID8gXCJwcm9kLWJ0bi1zZWxlY3RlZFwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBwcm9kLnNlbGVjdGVkID09IHRydWUgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY2hlY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9kLXRleHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHByb2QubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcHJvZHVjdHNWaWV3R3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2ZhNTlkNDAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcHJvZHVjdHNWaWV3R3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZhNTlkNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZmE1OWQ0MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2ZhNTlkNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2ZhNTlkNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2ZhNTlkNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmYTU5ZDQwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdmYTU5ZDQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL3Byb2R1Y3RzVmlld0dyaWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Byb2R1Y3RzVmlld0dyaWQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2ZhNTlkNDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmYTU5ZDQwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wcm9kdWN0c1ZpZXdHcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZmE1OWQ0MCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=