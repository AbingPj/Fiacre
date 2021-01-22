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
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: { squared: "", block: "", variant: "outline-success" },
                  on: {
                    click: function($event) {
                      return _vm.viewMore()
                    }
                  }
                },
                [_vm._v("ORDER")]
              )
            ],
            1
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
              _vm._v("© 2021 Copyright, fiacrefoods.com")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT84NmFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT9mYTQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZT81ZWY0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/MGVlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/MDUzYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWU/YzU3MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0ZBO0FBQ0EsMkJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BO0FBQ0E7QUFDQTtBQUNBLFNBVkEscUJBVUE7QUFDQTtBQUNBLEdBWkE7QUFhQTtBQUNBLGVBREEsdUJBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxLQVBBO0FBUUEsdUJBUkEsaUNBUUE7QUFBQTs7QUFDQSxZQUNBLEdBREEs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QTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBc2EsQ0FBZ0IseWFBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvTGFuZGluZ1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiBjbGFzcz1cImhlcm9cIj5cbiAgICAgIDxiLWNhcm91c2VsIGNsYXNzPVwiY2Fyb3VzZWwtY2VudGVyXCIgOmludGVydmFsPVwiNjAwMDBcIiBpbmRpY2F0b3JzIGZhZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICAgIDxiLWNhcm91c2VsLXNsaWRlIDppbWctc3JjPVwic3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19zbGlkZXIzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBoLTEwMCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzcz1cInN1bmZhcm0tbG9nb1wiIDpzcmM9XCJzdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmltZ19saW5rX2xvZ29cIiAvPlxuICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJzdW5mYXJtLWhlYWRlclwiPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyIH19PC9oMT5cbiAgICAgICAgICAgICAgPGg2IGNsYXNzPVwic3VuZmFybS1jb250ZW50XCI+e3sgc3RvcmVfc2V0dGluZ3MubGFuZGluZy5jb250ZW50IH19PC9oNj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2ItY2Fyb3VzZWwtc2xpZGU+XG4gICAgICA8L2ItY2Fyb3VzZWw+XG4gICAgPC9kaXY+XG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGFib3V0XCI+XG4gICAgICA8aDEgY2xhc3M9XCJoZWFkZXJcIj57eyBzdG9yZV9zZXR0aW5ncy5sYW5kaW5nX2Fib3V0X2hlYWRlciB9fTwvaDE+XG4gICAgICA8YnIgLz5cbiAgICAgIDxwPnt7IHN0b3JlX3NldHRpbmdzLmxhbmRpbmdfYWJvdXRfY29udGVudDEgfX08L3A+XG4gICAgICA8cD57eyBzdG9yZV9zZXR0aW5ncy5sYW5kaW5nX2Fib3V0X2NvbnRlbnQyIH19PC9wPlxuICAgIDwvZGl2Pi0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgcHJvZHVjdHNcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgIDxoMSBjbGFzcz1cInRleHQtY2VudGVyIGhlYWRlclwiPkZlYXR1cmVkIFByb2R1Y3RzPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvdyByb3ctcHJvZHVjdHNcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyIHByb2R1Y3RcIlxuICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBmZWF0dXJlZFByb2R1Y3RzXCJcbiAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICA+XG4gICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5pbWFnZV9saW5rXCIgLz5cbiAgICAgICAgICA8aDY+e3sgaXRlbS5uYW1lIH19PC9oNj5cbiAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICA8Yj4kIHt7IHVwZGF0ZVByaWNlKGl0ZW0pIH19PC9iPlxuICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgPGItYnV0dG9uIHNxdWFyZWQgYmxvY2sgdmFyaWFudD1cIm91dGxpbmUtc3VjY2Vzc1wiIEBjbGljaz1cInZpZXdNb3JlKClcIj5PUkRFUjwvYi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciB2aWV3bW9yZVwiPlxuICAgICAgPGItYnV0dG9uIHNxdWFyZWQgdmFyaWFudD1cInN1Y2Nlc3NcIiBzaXplPVwibGdcIiBAY2xpY2s9XCJ2aWV3TW9yZSgpXCI+VmlldyBNb3JlPC9iLWJ1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHRleHQtY2VudGVyIGZvb3RlclwiPlxuICAgICAgPGItbmF2IGp1c3RpZmllZCBhbGlnbj1cImNlbnRlclwiIGNsYXNzPVwiYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgPGEgOmhyZWY9XCJgbWFpbHRvOiR7c3RvcmVfc2V0dGluZ3MuZW1haWx9YFwiPlxuICAgICAgICAgIDxiLW5hdi10ZXh0IGNsYXNzPVwidGV4dC1jb2xvciBib3JkZXItcmlnaHQgcC0zXCI+e3sgc3RvcmVfc2V0dGluZ3MuZW1haWwgfX08L2ItbmF2LXRleHQ+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi90ZXJtcy1vZi11c2VcIj5cbiAgICAgICAgICA8Yi1uYXYtdGV4dCBjbGFzcz1cInRleHQtY29sb3IgYm9yZGVyLXJpZ2h0IHAtM1wiPlRlcm0gb2YgU2FsZSAmIFJldHVybiBQb2xpY3k8L2ItbmF2LXRleHQ+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cIi9wcml2YWN5LXBvbGljeVwiPlxuICAgICAgICAgIDxiLW5hdi10ZXh0IGNsYXNzPVwidGV4dC1jb2xvciBwLTNcIj5Qcml2YWN5IFBvbGljeTwvYi1uYXYtdGV4dD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9iLW5hdj5cbiAgICAgIDxiLW5hdiBqdXN0aWZpZWQgYWxpZ249XCJjZW50ZXJcIiBjbGFzcz1cImJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgIDxiLW5hdi10ZXh0IGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgcC0zIG1yLTNcIj7CqSAyMDIxIENvcHlyaWdodCwgZmlhY3JlZm9vZHMuY29tPC9iLW5hdi10ZXh0PlxuICAgICAgPC9iLW5hdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wic3RvcmVfc2V0dGluZ3NcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZlYXR1cmVkUHJvZHVjdHM6IFtdLFxuICAgIH07XG4gIH0sXG4gIC8vICAgYmVmb3JlQ3JlYXRlKCl7XG4gIC8vICAgICAgIExvYWRpbmdPdmVybGF5KCk7XG4gIC8vICAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmdldEZlYXR1cmVkUHJvZHVjdHMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIHVwZGF0ZVByaWNlKGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLnByaWNlID09IFwiXCIgfHwgZGF0YS5wcmljZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAwLjA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YS5wcmljZS50b0ZpeGVkKDIpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0RmVhdHVyZWRQcm9kdWN0cygpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5nZXQoXCIvYXBpL2ZlYXR1cmUvcHJvZHVjdHNcIilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHRoaXMuZmVhdHVyZWRQcm9kdWN0cyA9IHJlcy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB2aWV3TW9yZSgpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvcHJvZHVjdHNcIjtcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIC8vIGxvYWRpbmdPdmVybGF5KCkuY2FuY2VsKHNwaW5IYW5kbGUpO1xuICAgIC8vIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICB9LFxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCJyZXNvdXJjZXMvc2Fzcy9taXhpbnNcIjtcblxuLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXRvcDogLTEyMHB4O1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgLy8gVE8gVHJpYW5nbGUgaW4gYm90dG9tXG4gIC5jYXJvdXNlbC1pbm5lcjphZnRlciB7XG4gICAgei1pbmRleDogMTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA1MHZ3IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLXRvcDogMTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0xcHggIWltcG9ydGFudDtcbiAgICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG4gIC8vL1xuICAuY2Fyb3VzZWwtY2VudGVyIHtcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgIH1cbiAgfVxuICAuaW1nLWZsdWlkIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA4NTBweDtcbiAgICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIC8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIH1cblxuICAgIC8vIGRlc2t0b3BcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxNDM5cHgpIHtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIC8vICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDgxOHB4O1xuICAgIH1cblxuICAgIC8vIC8vICBkZXNrdG9wLWxhcmdlXG4gICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDE0NDBweCkgYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xuICAgIC8vICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8vICAgLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAvLyAgIG9wYWNpdHk6IDAuMztcbiAgICAvLyAgIG1heC1oZWlnaHQ6IDkwMHB4O1xuICAgIC8vIH1cbiAgfVxuICAuc3VuZmFybS1sb2dvIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgdGFibGV0IHtcbiAgICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnN1bmZhcm0taGVhZGVyIHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgfVxuICAuc3VuZmFybS1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICBAaW5jbHVkZSB0YWJsZXQge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4uYWJvdXQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiA1MHB4O1xuICAuaGVhZGVyIHtcbiAgICBjb2xvcjogIzg4YzQzYSAhaW1wb3J0YW50O1xuICB9XG4gIHAge1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgIH1cbiAgfVxufVxuLmxvY2F0aW9uIHtcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICAvLyAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgLmdvb2dsZS1tYXAtbG9jYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbi5wcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIC5oZWFkZXIge1xuICAgIGNvbG9yOiAjODhjNDNhICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnJvdy1wcm9kdWN0cyB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAucHJvZHVjdCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgaDYge1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogcmVkO1xuICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwOyAvKiBEb24ndCBmb3JnZXQgdGhpcyBvbmUgKi9cbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBjb2xvcjogIzg4YzQzYTtcbiAgICAgIH1cbiAgICAgIGg0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbi5idG4tb3V0bGluZS1zdWNjZXNzIHtcbiAgICAgICAgY29sb3I6ICM4OGM0M2E7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzg4YzQzYSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnZpZXdtb3JlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIC5idG4tc3VjY2VzcyB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4YzQzYTtcbiAgICBib3JkZXItY29sb3I6ICM4OGM0M2E7XG4gIH1cblxuICAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4uZm9vdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgLnRleHQtY29sb3Ige1xuICAgIGNvbG9yOiAjODhjNDNhO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxuICAuYm9yZGVyLXJpZ2h0IHtcbiAgICAvLyBib3JkZXItY29sb3I6ICM4OGM0M2E7XG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzg4YzQzYSAhaW1wb3J0YW50O1xuICB9XG59XG48L3N0eWxlPlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIG1hcmdpbi10b3A6IC0xMjBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLmhlcm8gLmNhcm91c2VsLWlubmVyOmFmdGVyIHtcXG4gIHotaW5kZXg6IDE7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xcbiAgcGFkZGluZy1ib3R0b206IDBweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3JkZXItbGVmdDogNTB2dyBzb2xpZCAjZmZmO1xcbiAgYm9yZGVyLXJpZ2h0OiA1MHZ3IHNvbGlkICNmZmY7XFxuICBib3JkZXItdG9wOiAxMDBweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uaGVybyAuY2Fyb3VzZWwtaW5uZXI6YWZ0ZXIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMXB4ICFpbXBvcnRhbnQ7XFxuICAgIGJvcmRlci10b3A6IDUwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcbn1cXG4uaGVybyAuY2Fyb3VzZWwtY2VudGVyIC5jYXJvdXNlbC1jYXB0aW9uIHtcXG4gIHRvcDogMTAwcHg7XFxufVxcbi5oZXJvIC5pbWctZmx1aWQge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC4zO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWF4LWhlaWdodDogODUwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLmhlcm8gLmltZy1mbHVpZCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9wYWNpdHk6IDAuMztcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuLmhlcm8gLmltZy1mbHVpZCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTQzOXB4KSB7XFxuLmhlcm8gLmltZy1mbHVpZCB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC4zO1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgbWF4LWhlaWdodDogODE4cHg7XFxufVxcbn1cXG4uaGVybyAuc3VuZmFybS1sb2dvIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5oZXJvIC5zdW5mYXJtLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbi5oZXJvIC5zdW5mYXJtLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5oZXJvIC5zdW5mYXJtLWhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuLmhlcm8gLnN1bmZhcm0taGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uaGVybyAuc3VuZmFybS1jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcXG4uaGVybyAuc3VuZmFybS1jb250ZW50IHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG59XFxuLmFib3V0IHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbn1cXG4uYWJvdXQgLmhlYWRlciB7XFxuICBjb2xvcjogIzg4YzQzYSAhaW1wb3J0YW50O1xcbn1cXG4uYWJvdXQgcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLmFib3V0IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xcbn1cXG59XFxuLmxvY2F0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG4ubG9jYXRpb24gLmdvb2dsZS1tYXAtbG9jYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbn1cXG4ubG9jYXRpb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ucHJvZHVjdHMge1xcbiAgcGFkZGluZzogMHB4IDBweDtcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4ucHJvZHVjdHMgLmhlYWRlciB7XFxuICBjb2xvcjogIzg4YzQzYSAhaW1wb3J0YW50O1xcbn1cXG4ucHJvZHVjdHMgLnJvdy1wcm9kdWN0cyB7XFxuICBwYWRkaW5nOiAzMHB4IDBweDtcXG4gIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDBweDtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3Qge1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3QgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3QgaDYge1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWluLWhlaWdodDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ucHJvZHVjdHMgLnJvdy1wcm9kdWN0cyAucHJvZHVjdCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBjb2xvcjogIzg4YzQzYTtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3QgaDQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLnByb2R1Y3RzIC5yb3ctcHJvZHVjdHMgLnByb2R1Y3QgYnV0dG9uLmJ0bi1vdXRsaW5lLXN1Y2Nlc3Mge1xcbiAgY29sb3I6ICM4OGM0M2E7XFxuICBib3JkZXItY29sb3I6ICM4OGM0M2EgIWltcG9ydGFudDtcXG59XFxuLnZpZXdtb3JlIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbn1cXG4udmlld21vcmUgLmJ0bi1zdWNjZXNzIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4YzQzYTtcXG4gIGJvcmRlci1jb2xvcjogIzg4YzQzYTtcXG59XFxuLnZpZXdtb3JlIC5idG4tbGcge1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcbiAgd2lkdGg6IDIwMHB4O1xcbn1cXG4uZm9vdGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbi5mb290ZXIgLnRleHQtY29sb3Ige1xcbiAgY29sb3I6ICM4OGM0M2E7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcbi5mb290ZXIgLmJvcmRlci1yaWdodCB7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjODhjNDNhICFpbXBvcnRhbnQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGVyb1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYi1jYXJvdXNlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNlbnRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaW50ZXJ2YWw6IDYwMDAwLCBpbmRpY2F0b3JzOiBcIlwiLCBmYWRlOiBcIlwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2Fyb3VzZWwtc2xpZGVcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImltZy1zcmNcIjogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1bmZhcm0tbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19sb2dvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2Fyb3VzZWwtc2xpZGVcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImltZy1zcmNcIjogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1bmZhcm0tbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19sb2dvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImItY2Fyb3VzZWwtc2xpZGVcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImltZy1zcmNcIjogX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgXCJkLWZsZXggaC0xMDAgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN1bmZhcm0tbG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc3RvcmVfc2V0dGluZ3MubGFuZGluZy5pbWdfbGlua19sb2dvIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnN0b3JlX3NldHRpbmdzLmxhbmRpbmcuaGVhZGVyKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDZcIiwgeyBzdGF0aWNDbGFzczogXCJzdW5mYXJtLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdG9yZV9zZXR0aW5ncy5sYW5kaW5nLmNvbnRlbnQpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIHByb2R1Y3RzXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvdyByb3ctcHJvZHVjdHNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmZlYXR1cmVkUHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTMgY29sLW1kLTYgY29sLXNtLTEyIHByb2R1Y3RcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCIkIFwiICsgX3ZtLl9zKF92bS51cGRhdGVQcmljZShpdGVtKSkpXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcXVhcmVkOiBcIlwiLCBibG9jazogXCJcIiwgdmFyaWFudDogXCJvdXRsaW5lLXN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld01vcmUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiT1JERVJcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgdGV4dC1jZW50ZXIgdmlld21vcmVcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImItYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3F1YXJlZDogXCJcIiwgdmFyaWFudDogXCJzdWNjZXNzXCIsIHNpemU6IFwibGdcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld01vcmUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiVmlldyBNb3JlXCIpXVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciB0ZXh0LWNlbnRlciBmb290ZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImItbmF2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctdHJhbnNwYXJlbnRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGp1c3RpZmllZDogXCJcIiwgYWxpZ246IFwiY2VudGVyXCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwibWFpbHRvOlwiICsgX3ZtLnN0b3JlX3NldHRpbmdzLmVtYWlsIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW5hdi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY29sb3IgYm9yZGVyLXJpZ2h0IHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc3RvcmVfc2V0dGluZ3MuZW1haWwpKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3Rlcm1zLW9mLXVzZVwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLW5hdi10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtY29sb3IgYm9yZGVyLXJpZ2h0IHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVybSBvZiBTYWxlICYgUmV0dXJuIFBvbGljeVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiL3ByaXZhY3ktcG9saWN5XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLW5hdi10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jb2xvciBwLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJQcml2YWN5IFBvbGljeVwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYi1uYXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy10cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsganVzdGlmaWVkOiBcIlwiLCBhbGlnbjogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImItbmF2LXRleHRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNlY29uZGFyeSBwLTMgbXItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiwqkgMjAyMSBDb3B5cmlnaHQsIGZpYWNyZWZvb2RzLmNvbVwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgaGVhZGVyXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIkZlYXR1cmVkIFByb2R1Y3RzXCIpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWMwMjk3M2MmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YzAyOTczYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YzAyOTczYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YzAyOTczYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjMDI5NzNjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjMDI5NzNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYW5kaW5nUGFnZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWMwMjk3M2MmXCIiXSwic291cmNlUm9vdCI6IiJ9