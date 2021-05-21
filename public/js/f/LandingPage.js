(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/LandingPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["store_settings"],
  data: function data() {
    return {
      featuredProducts: []
    };
  },
  //   beforeCreate(){
  //       LoadingOverlay();
  //   },
  created: function created() {
    this.getFeaturedProducts();
  },
  methods: {
    updatePrice: function updatePrice(data) {
      if (data.price == "" || data.price == null) {
        return 0.0;
      } else {
        return data.price.toFixed(2);
      }
    },
    getFeaturedProducts: function getFeaturedProducts() {
      var _this = this;

      axios.get("/api/feature/products").then(function (res) {
        _this.featuredProducts = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    viewMore: function viewMore() {
      window.location.href = "/products";
    }
  },
  mounted: function mounted() {// loadingOverlay().cancel(spinHandle);
    // LoadingOverlayHide();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hero {\n  background-color: black;\n  margin-top: -120px;\n  padding: 0px;\n}\n.hero .carousel-inner:after {\n  z-index: 1;\n  content: \"\";\n  position: absolute;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px;\n  bottom: 0;\n  left: 0;\n  border-left: 50vw solid #fff;\n  border-right: 50vw solid #fff;\n  border-top: 100px solid transparent;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.hero .carousel-inner:after {\n    margin-bottom: -1px !important;\n    border-top: 50px solid transparent;\n}\n}\n.hero .carousel-center .carousel-caption {\n  top: 100px;\n}\n.hero .img-fluid {\n  max-width: 100%;\n  opacity: 0.3;\n  height: auto;\n  max-height: 850px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.hero .img-fluid {\n    max-width: 100%;\n    object-fit: cover;\n    opacity: 0.3;\n    height: 500px;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.hero .img-fluid {\n    max-width: 100%;\n    opacity: 0.3;\n    height: 600px;\n}\n}\n@media (min-width: 992px) and (max-width: 1439px) {\n.hero .img-fluid {\n    max-width: 100%;\n    opacity: 0.3;\n    min-height: 600px;\n    max-height: 818px;\n}\n}\n.hero .sunfarm-logo {\n  width: auto;\n  height: 250px !important;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.hero .sunfarm-logo {\n    height: 150px !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.hero .sunfarm-logo {\n    height: 150px !important;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.hero .sunfarm-header {\n    font-size: 20px;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.hero .sunfarm-header {\n    font-size: 20px;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.hero .sunfarm-content {\n    font-size: 12px;\n}\n}\n@media (min-width: 768px) and (max-width: 991px) {\n.hero .sunfarm-content {\n    font-size: 12px;\n}\n}\n.about {\n  margin-top: 50px;\n  padding: 50px;\n}\n.about .header {\n  color: #88c43a !important;\n}\n.about p {\n  padding-left: 100px;\n  padding-right: 100px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.about p {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n}\n.location {\n  margin-bottom: 100px;\n}\n.location .google-map-location {\n  width: 100%;\n  height: 500px;\n}\n.location img {\n  width: 100%;\n  height: auto;\n}\n.products {\n  padding: 0px 0px;\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n.products .header {\n  color: #88c43a !important;\n}\n.products .row-products {\n  padding: 30px 0px;\n  margin-right: 0px;\n  margin-left: 0px;\n}\n.products .row-products .product {\n  margin-bottom: 30px;\n}\n.products .row-products .product img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  margin-bottom: 20px;\n}\n.products .row-products .product h6 {\n  text-overflow: ellipsis;\n  margin-bottom: 20px;\n  min-height: 40px;\n  max-height: 40px;\n  overflow: hidden;\n}\n.products .row-products .product p {\n  margin-bottom: 20px;\n  color: #88c43a;\n}\n.products .row-products .product h4 {\n  margin-bottom: 20px;\n}\n.products .row-products .product button.btn-outline-success {\n  color: #88c43a;\n  border-color: #88c43a !important;\n}\n.viewmore {\n  margin-bottom: 100px;\n}\n.viewmore .btn-success {\n  color: #fff;\n  background-color: #88c43a;\n  border-color: #88c43a;\n}\n.viewmore .btn-lg {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n  width: 200px;\n}\n.footer {\n  margin-bottom: 30px;\n}\n.footer .text-color {\n  color: #88c43a;\n  font-size: 15px;\n}\n.footer .border-right {\n  border-right: 2px solid #88c43a !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "hero" },
      [
        _c(
          "b-carousel",
          {
            staticClass: "carousel-center",
            attrs: { interval: 60000, indicators: "", fade: "" }
          },
          [
            _c(
              "b-carousel-slide",
              {
                attrs: {
                  "img-src": _vm.store_settings.landing.img_link_slider1
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex h-100 align-items-center justify-content-center"
                  },
                  [
                    _c("div", [
                      _c("img", {
                        staticClass: "sunfarm-logo",
                        attrs: { src: _vm.store_settings.landing.img_link_logo }
                      }),
                      _vm._v(" "),
                      _c("h1", { staticClass: "sunfarm-header" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.header))
                      ]),
                      _vm._v(" "),
                      _c("h6", { staticClass: "sunfarm-content" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.content))
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-carousel-slide",
              {
                attrs: {
                  "img-src": _vm.store_settings.landing.img_link_slider2
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex h-100 align-items-center justify-content-center"
                  },
                  [
                    _c("div", [
                      _c("img", {
                        staticClass: "sunfarm-logo",
                        attrs: { src: _vm.store_settings.landing.img_link_logo }
                      }),
                      _vm._v(" "),
                      _c("h1", { staticClass: "sunfarm-header" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.header))
                      ]),
                      _vm._v(" "),
                      _c("h6", { staticClass: "sunfarm-content" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.content))
                      ])
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-carousel-slide",
              {
                attrs: {
                  "img-src": _vm.store_settings.landing.img_link_slider3
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex h-100 align-items-center justify-content-center"
                  },
                  [
                    _c("div", [
                      _c("img", {
                        staticClass: "sunfarm-logo",
                        attrs: { src: _vm.store_settings.landing.img_link_logo }
                      }),
                      _vm._v(" "),
                      _c("h1", { staticClass: "sunfarm-header" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.header))
                      ]),
                      _vm._v(" "),
                      _c("h6", { staticClass: "sunfarm-content" }, [
                        _vm._v(_vm._s(_vm.store_settings.landing.content))
                      ])
                    ])
                  ]
                )
              ]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "container products" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "row row-products" },
        _vm._l(_vm.featuredProducts, function(item, index) {
          return _c(
            "div",
            { key: index, staticClass: "col-lg-3 col-md-6 col-sm-12 product" },
            [
              _c("img", { attrs: { src: item.image_link } }),
              _vm._v(" "),
              _c("h6", [_vm._v(_vm._s(item.name))]),
              _vm._v(" "),
              _c("h4", [
                _c("b", [_vm._v("$ " + _vm._s(_vm.updatePrice(item)))])
              ])
            ]
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container text-center viewmore" },
      [
        _c(
          "b-button",
          {
            attrs: { squared: "", variant: "success", size: "lg" },
            on: {
              click: function($event) {
                return _vm.viewMore()
              }
            }
          },
          [_vm._v("View More")]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "container text-center footer" },
      [
        _c(
          "b-nav",
          {
            staticClass: "bg-transparent",
            attrs: { justified: "", align: "center" }
          },
          [
            _c(
              "a",
              { attrs: { href: "mailto:" + _vm.store_settings.email } },
              [
                _c(
                  "b-nav-text",
                  { staticClass: "text-color border-right p-3" },
                  [_vm._v(_vm._s(_vm.store_settings.email))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "a",
              { attrs: { href: "/terms-of-use" } },
              [
                _c(
                  "b-nav-text",
                  { staticClass: "text-color border-right p-3" },
                  [_vm._v("Term of Sale & Return Policy")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "a",
              { attrs: { href: "/privacy-policy" } },
              [
                _c("b-nav-text", { staticClass: "text-color p-3" }, [
                  _vm._v("Privacy Policy")
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "b-nav",
          {
            staticClass: "bg-transparent",
            attrs: { justified: "", align: "center" }
          },
          [
            _c("b-nav-text", { staticClass: "text-secondary p-3 mr-3" }, [
              _vm._v("© 2021 Copyright, oheavenly.com (v1.0)")
            ])
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h1", { staticClass: "text-center header" }, [
          _vm._v("Featured Products")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/LandingPage.vue":
/*!**********************************************************!*\
  !*** ./resources/js/frontend/components/LandingPage.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=template&id=5c02973c& */ "./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c&");
/* harmony import */ var _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LandingPage.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/LandingPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LandingPage.vue?vue&type=template&id=5c02973c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LandingPage.vue?vue&type=template&id=5c02973c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LandingPage_vue_vue_type_template_id_5c02973c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT84NmFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT9mYTQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT81ZWY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/MGVlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/MDUzYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/YzU3MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0ZBO0FBQ0EsMkJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFhQTtBQUNBLGVBREEsdUJBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsdUJBUkEsaUNBUUE7QUFBQTs7QUFDQSxZQUNBLEdBREEs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dVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBc2EsQ0FBZ0IseWFBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvTGFuZGluZ1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgICAgIDxiLWNhcm91c2VsIGNsYXNzPVwiY2Fyb3VzZWwtY2VudGVyXCIgOmludGVydmFsPVwiNjAwMDBcIiBpbmRpY2F0b3JzIGZhZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICA8L2ItY2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGFib3V0XCI+XG4gICAgICA8aDEgY2xhc3M9XCJoZWFkZXJcIj57eyBzdG9yZV9zZXR0aW5ncy5sYW5kaW5nX2Fib3V0X2hlYWRlciB9fTwvaDE+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmdfYWJvdXRfY29udGVudDEgfX08L3A+XG4gICAgICA8cD57eyBzdG9yZV9zZXR0aW5ncy5sYW5kaW5nX2Fib3V0X2NvbnRlbnQyIH19PC9wPlxuICAgIDwvZGl2Pi0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHJvZHVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyIGhlYWRlclwiPkZlYXR1cmVkIFByb2R1Y3RzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctcHJvZHVjdHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyIHByb2R1Y3RcIlxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBmZWF0dXJlZFByb2R1Y3RzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5pbWFnZV9saW5rXCIgLz5cbiAgICAgICAgICA8aDY+e3sgaXRlbS5uYW1lIH19PC9oNj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8Yj4kIHt7IHVwZGF0ZVByaWNlKGl0ZW0pIH19PC9iPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPCEtLSA8Yi1idXR0b24gc3F1YXJlZCBibG9jayB2YXJpYW50PVwib3V0bGluZS1zdWNjZXNzXCIgQGNsaWNrPVwidmlld01vcmUoKVwiPlNIT1A8L2ItYnV0dG9uPiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHZpZXdtb3JlXCI+XG4gICAgICA8Yi1idXR0b24gc3F1YXJlZCB2YXJpYW50PVwic3VjY2Vzc1wiIHNpemU9XCJsZ1wiIEBjbGljaz1cInZpZXdNb3JlKClcIj5WaWV3IE1vcmU8L2ItYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgZm9vdGVyXCI+XG4gICAgICA8Yi1uYXYganVzdGlmaWVkIGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICA8YSA6aHJlZj1cImBtYWlsdG86JHtzdG9yZV9zZXR0aW5ncy5lbWFpbH1gXCI+XG4gICAgICAgICAgPGItbmF2LXRleHQgY2xhc3M9XCJ0ZXh0LWNvbG9yIGJvcmRlci1yaWdodCBwLTNcIj57eyBzdG9yZV9zZXR0aW5ncy5lbWFpbCB9fTwvYi1uYXYtdGV4dD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL3Rlcm1zLW9mLXVzZVwiPlxuICAgICAgICAgIDxiLW5hdi10ZXh0IGNsYXNzPVwidGV4dC1jb2xvciBib3JkZXItcmlnaHQgcC0zXCI+VGVybSBvZiBTYWxlICYgUmV0dXJuIFBvbGljeTwvYi1uYXYtdGV4dD5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiL3ByaXZhY3ktcG9saWN5XCI+XG4gICAgICAgICAgPGItbmF2LXRleHQgY2xhc3M9XCJ0ZXh0LWNvbG9yIHAtM1wiPlByaXZhY3kgUG9saWN5PC9iLW5hdi10ZXh0PlxuICAgICAgICA8L2E+XG4gICAgICA8L2ItbmF2PlxuICAgICAgPGItbmF2IGp1c3RpZmllZCBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgPGItbmF2LXRleHQgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBwLTMgbXItM1wiPsKpIDIwMjEgQ29weXJpZ2h0LCBvaGVhdmVubHkuY29tICh2MS4wKTwvYi1uYXYtdGV4dD5cbiAgICAgIDwvYi1uYXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcInN0b3JlX3NldHRpbmdzXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZWF0dXJlZFByb2R1Y3RzOiBbXSxcbiAgICB9O1xuICB9LFxuICAvLyAgIGJlZm9yZUNyZWF0ZSgpe1xuICAvLyAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAvLyAgIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5nZXRGZWF0dXJlZFByb2R1Y3RzKCk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICB1cGRhdGVQcmljZShkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5wcmljZSA9PSBcIlwiIHx8IGRhdGEucHJpY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gMC4wO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucHJpY2UudG9GaXhlZCgyKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldEZlYXR1cmVkUHJvZHVjdHMoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAuZ2V0KFwiL2FwaS9mZWF0dXJlL3Byb2R1Y3RzXCIpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB0aGlzLmZlYXR1cmVkUHJvZHVjdHMgPSByZXMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgdmlld01vcmUoKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL3Byb2R1Y3RzXCI7XG4gICAgfSxcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICAvLyBsb2FkaW5nT3ZlcmxheSgpLmNhbmNlbChzcGluSGFuZGxlKTtcbiAgICAvLyBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0IFwicmVzb3VyY2VzL3Nhc3MvbWl4aW5zXCI7XG5cbi5oZXJvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IC0xMjBweDtcbiAgcGFkZGluZzogMHB4O1xuXG4gIC8vIFRPIFRyaWFuZ2xlIGluIGJvdHRvbVxuICAuY2Fyb3VzZWwtaW5uZXI6YWZ0ZXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1yaWdodDogNTB2dyBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci10b3A6IDEwMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMXB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxuICAvLy9cbiAgLmNhcm91c2VsLWNlbnRlciB7XG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xuICAgICAgdG9wOiAxMDBweDtcbiAgICB9XG4gIH1cbiAgLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWF4LWhlaWdodDogODUwcHg7XG4gICAgLy8gb2JqZWN0LWZpdDogY292ZXI7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAvLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG5cbiAgICAvLyBkZXNrdG9wXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAvLyAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICBtYXgtaGVpZ2h0OiA4MThweDtcbiAgICB9XG5cbiAgICAvLyAvLyAgZGVza3RvcC1sYXJnZVxuICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcbiAgICAvLyAgIG1heC13aWR0aDogMTAwJTtcbiAgICAvLyAgIC8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgLy8gICBvcGFjaXR5OiAwLjM7XG4gICAgLy8gICBtYXgtaGVpZ2h0OiA5MDBweDtcbiAgICAvLyB9XG4gIH1cbiAgLnN1bmZhcm0tbG9nbyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5zdW5mYXJtLWhlYWRlciB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbiAgLnN1bmZhcm0tY29udGVudCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gIH1cbn1cblxuLmFib3V0IHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcGFkZGluZzogNTBweDtcbiAgLmhlYWRlciB7XG4gICAgY29sb3I6ICM4OGM0M2EgIWltcG9ydGFudDtcbiAgfVxuICBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB9XG4gIH1cbn1cbi5sb2NhdGlvbiB7XG4gIC8vICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbiAgLy8gICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIC5nb29nbGUtbWFwLWxvY2F0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICB9XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4ucHJvZHVjdHMge1xuICBwYWRkaW5nOiAwcHggMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAuaGVhZGVyIHtcbiAgICBjb2xvcjogIzg4YzQzYSAhaW1wb3J0YW50O1xuICB9XG4gIC5yb3ctcHJvZHVjdHMge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgLnByb2R1Y3Qge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIGg2IHtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgbWluLWhlaWdodDogNDBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogRG9uJ3QgZm9yZ2V0IHRoaXMgb25lICovXG4gICAgICB9XG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6ICM4OGM0M2E7XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgICBidXR0b24uYnRuLW91dGxpbmUtc3VjY2VzcyB7XG4gICAgICAgIGNvbG9yOiAjODhjNDNhO1xuICAgICAgICBib3JkZXItY29sb3I6ICM4OGM0M2EgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi52aWV3bW9yZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAuYnRuLXN1Y2Nlc3Mge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4OGM0M2E7XG4gICAgYm9yZGVyLWNvbG9yOiAjODhjNDNhO1xuICB9XG5cbiAgLmJ0bi1sZyB7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmZvb3RlciB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC50ZXh0LWNvbG9yIHtcbiAgICBjb2xvcjogIzg4YzQzYTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbiAgLmJvcmRlci1yaWdodCB7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjODhjNDNhO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM4OGM0M2EgIWltcG9ydGFudDtcbiAgfVxufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmhlcm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBtYXJnaW4tdG9wOiAtMTIwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcbi5oZXJvIC5jYXJvdXNlbC1pbm5lcjphZnRlciB7XFxuICB6LWluZGV4OiAxO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDUwdncgc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yaWdodDogNTB2dyBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXRvcDogMTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLmhlcm8gLmNhcm91c2VsLWlubmVyOmFmdGVyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweCAhaW1wb3J0YW50O1xcbiAgICBib3JkZXItdG9wOiA1MHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG59XFxuLmhlcm8gLmNhcm91c2VsLWNlbnRlciAuY2Fyb3VzZWwtY2FwdGlvbiB7XFxuICB0b3A6IDEwMHB4O1xcbn1cXG4uaGVybyAuaW1nLWZsdWlkIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG9wYWNpdHk6IDAuMztcXG4gIGhlaWdodDogYXV0bztcXG4gIG1heC1oZWlnaHQ6IDg1MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5oZXJvIC5pbWctZmx1aWQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBvcGFjaXR5OiAwLjM7XFxuICAgIGhlaWdodDogNTAwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbi5oZXJvIC5pbWctZmx1aWQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xcbi5oZXJvIC5pbWctZmx1aWQge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDgxOHB4O1xcbn1cXG59XFxuLmhlcm8gLnN1bmZhcm0tbG9nbyB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uaGVybyAuc3VuZmFybS1sb2dvIHtcXG4gICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4uaGVybyAuc3VuZmFybS1sb2dvIHtcXG4gICAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uaGVybyAuc3VuZmFybS1oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbi5oZXJvIC5zdW5mYXJtLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLmhlcm8gLnN1bmZhcm0tY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuLmhlcm8gLnN1bmZhcm0tY29udGVudCB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxufVxcbi5hYm91dCB7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgcGFkZGluZzogNTBweDtcXG59XFxuLmFib3V0IC5oZWFkZXIge1xcbiAgY29sb3I6ICM4OGM0M2EgIWltcG9ydGFudDtcXG59XFxuLmFib3V0IHAge1xcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5hYm91dCBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcXG59XFxufVxcbi5sb2NhdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuLmxvY2F0aW9uIC5nb29nbGUtbWFwLWxvY2F0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG59XFxuLmxvY2F0aW9uIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLnByb2R1Y3RzIHtcXG4gIHBhZGRpbmc6IDBweCAwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2R1Y3RzIC5oZWFkZXIge1xcbiAgY29sb3I6ICM4OGM0M2EgIWltcG9ydGFudDtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMge1xcbiAgcGFkZGluZzogMzBweCAwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XFxufVxcbi5wcm9kdWN0cyAucm93LXByb2R1Y3RzIC5wcm9kdWN0IHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5wcm9kdWN0cyAucm93LXByb2R1Y3RzIC5wcm9kdWN0IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wcm9kdWN0cyAucm93LXByb2R1Y3RzIC5wcm9kdWN0IGg2IHtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3QgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgY29sb3I6ICM4OGM0M2E7XFxufVxcbi5wcm9kdWN0cyAucm93LXByb2R1Y3RzIC5wcm9kdWN0IGg0IHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcbi5wcm9kdWN0cyAucm93LXByb2R1Y3RzIC5wcm9kdWN0IGJ1dHRvbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjODhjNDNhO1xcbiAgYm9yZGVyLWNvbG9yOiAjODhjNDNhICFpbXBvcnRhbnQ7XFxufVxcbi52aWV3bW9yZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXG59XFxuLnZpZXdtb3JlIC5idG4tc3VjY2VzcyB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OGM0M2E7XFxuICBib3JkZXItY29sb3I6ICM4OGM0M2E7XFxufVxcbi52aWV3bW9yZSAuYnRuLWxnIHtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLmZvb3RlciB7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4uZm9vdGVyIC50ZXh0LWNvbG9yIHtcXG4gIGNvbG9yOiAjODhjNDNhO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG4uZm9vdGVyIC5ib3JkZXItcmlnaHQge1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzg4YzQzYSAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImhlcm9cIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImItY2Fyb3VzZWxcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jZW50ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGludGVydmFsOiA2MDAwMCwgaW5kaWNhdG9yczogXCJcIiwgZmFkZTogXCJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX3NsaWRlcjFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfbG9nbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmhlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX3NsaWRlcjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfbG9nbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmhlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJiLWNhcm91c2VsLXNsaWRlXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJpbWctc3JjXCI6IF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX3NsaWRlcjNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiZC1mbGV4IGgtMTAwIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfbG9nbyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmhlYWRlcikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VuZmFybS1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50KSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBwcm9kdWN0c1wiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyb3cgcm93LXByb2R1Y3RzXCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5mZWF0dXJlZFByb2R1Y3RzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcImNvbC1sZy0zIGNvbC1tZC02IGNvbC1zbS0xMiBwcm9kdWN0XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluayB9IH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg2XCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KFwiJCBcIiArIF92bS5fcyhfdm0udXBkYXRlUHJpY2UoaXRlbSkpKV0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgdGV4dC1jZW50ZXIgdmlld21vcmVcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3F1YXJlZDogXCJcIiwgdmFyaWFudDogXCJzdWNjZXNzXCIsIHNpemU6IFwibGdcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld01vcmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiVmlldyBNb3JlXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciB0ZXh0LWNlbnRlciBmb290ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImItbmF2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGp1c3RpZmllZDogXCJcIiwgYWxpZ246IFwiY2VudGVyXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgX3ZtLnN0b3JlX3NldHRpbmdzLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW5hdi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY29sb3IgYm9yZGVyLXJpZ2h0IHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3RvcmVfc2V0dGluZ3MuZW1haWwpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3Rlcm1zLW9mLXVzZVwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW5hdi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY29sb3IgYm9yZGVyLXJpZ2h0IHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVybSBvZiBTYWxlICYgUmV0dXJuIFBvbGljeVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3ByaXZhY3ktcG9saWN5XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLW5hdi10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jb2xvciBwLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcml2YWN5IFBvbGljeVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYi1uYXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsganVzdGlmaWVkOiBcIlwiLCBhbGlnbjogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImItbmF2LXRleHRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBwLTMgbXItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiwqkgMjAyMSBDb3B5cmlnaHQsIG9oZWF2ZW5seS5jb20gKHYxLjApXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBoZWFkZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiRmVhdHVyZWQgUHJvZHVjdHNcIilcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzAyOTczYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVjMDI5NzNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVjMDI5NzNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVjMDI5NzNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWMwMjk3M2MmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWMwMjk3M2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzAyOTczYyZcIiJdLCJzb3VyY2VSb290IjoiIn0=