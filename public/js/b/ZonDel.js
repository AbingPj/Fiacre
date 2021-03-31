(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ZonDel"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      markers: [],
      map: {},
      address: "",
      zones: [],
      //   googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: "AIzaSyD-aqJby-P72dOO5xNfOI3X2EjAPffOQbc"
    };
  },
  created: function created() {
    LoadingOverlay();
    this.getAllDeliveryZones();
  },
  methods: {
    addDeliveryZone: function addDeliveryZone() {
      LoadingOverlay();
      window.location.href = "/admin/delivery-zones/add";
    },
    updateZone: function updateZone(data) {
      LoadingOverlay();
      window.location.href = "/admin/delivery-zones/edit/" + data.id;
    },
    getAllDeliveryZones: function getAllDeliveryZones() {
      var _this = this;

      axios.get("/admin/delivery-zones/getAllDeliveryZones").then(function (res) {
        _this.loadScript();

        _this.zones = res.data;
      });
    },
    initMap: function initMap() {
      var _this2 = this;

      var self = this;
      var NewYorkState = {
        lat: 43.2994285,
        lng: -74.217933
      };
      var USA = {
        lat: 37.09024,
        lng: -95.712891
      };
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: USA
      });
      this.zones.forEach(function (element) {
        var location = {
          lat: element.lat,
          lng: element.lng
        };
        var marker = new google.maps.Marker({
          position: location,
          map: self.map
        });

        _this2.markers.push(marker);
      });
      LoadingOverlayHide();
    },
    changeCenter: function changeCenter(latitude, lonngitude) {
      var location = {
        lat: latitude,
        lng: lonngitude
      };
      this.map.setZoom(13); // This will trigger a zoom_changed on the map

      this.map.panTo(location);
    },
    loadScript: function loadScript() {
      if (window.google && window.google.maps) {
        this.initMap();
        return;
      }

      var self = this;
      var script = document.createElement("script");

      script.onload = function () {
        if (!window.google && !window.google.maps) return void console.error("no google maps script included");
        self.initMap();
      };

      script.async = true;
      script.defer = true;
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + this.googleAPIKEY + "&libraries=geometry";
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\n         * element that contains the map. */\n#map[data-v-7444095b] {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n.btn-edit[data-v-7444095b] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n  font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4 pr-0 pl-0" }, [
        _c("h4", [
          _vm._v("\n        Delivery Zones:\n        "),
          _vm.zones.length != 0
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success float-right",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addDeliveryZone()
                    }
                  }
                },
                [_vm._v("Add More Zone")]
              )
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _vm.zones.length == 0
          ? _c("div", { staticClass: "text-center mt-5" }, [
              _c("h3", [_vm._v("No Delivery Zone Yet")]),
              _vm._v(" "),
              _c("h4", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.addDeliveryZone()
                      }
                    }
                  },
                  [_vm._v("Add Delivery Zone Here")]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "list-group" },
          _vm._l(_vm.zones, function(item, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "list-group-item list-group-item-action pr-1",
                on: {
                  click: function($event) {
                    return _vm.changeCenter(item.lat, item.lng)
                  }
                }
              },
              [
                _c("h5", [
                  _c("b", [_vm._v(_vm._s(item.zone_name))]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn-edit float-right",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.updateZone(item)
                        }
                      }
                    },
                    [_c("i", { staticClass: "fas fa-edit" })]
                  )
                ]),
                _vm._v(" "),
                _c("i", { staticClass: "fas fa-map-marker mr-2" }),
                _vm._v("\n          " + _vm._s(item.address) + "\n        ")
              ]
            )
          }),
          0
        )
      ]),
      _vm._v(" "),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-8" }, [
      _c("div", { staticClass: "col-12", staticStyle: { height: "500px" } }, [
        _c("div", { attrs: { id: "map" } }),
        _vm._v(" "),
        _c("br")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZones.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deliveryZones.vue?vue&type=template&id=7444095b&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true&");
/* harmony import */ var _deliveryZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deliveryZones.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deliveryZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7444095b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/deliverypickupzones/deliveryZones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=style&index=0&id=7444095b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_style_index_0_id_7444095b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZones.vue?vue&type=template&id=7444095b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZones.vue?vue&type=template&id=7444095b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZones_vue_vue_type_template_id_7444095b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL2RlbGl2ZXJ5Wm9uZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzLnZ1ZT8wNTI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzLnZ1ZT84ODYxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzLnZ1ZT83NjE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lcy52dWU/MTMwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lcy52dWU/NmE2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lcy52dWU/MTc2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBO0FBRUEsYUFGQTtBQUdB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d0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR2xHO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLG1GQUFNO0FBQ1IsRUFBRSxvR0FBTTtBQUNSLEVBQUUsNkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXlNLENBQWdCLHlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdOO0FBQUE7QUFBQTtBQUFBO0FBQWtkLENBQWdCLG1jQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1pvbkRlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxyXG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXHJcbi8vIGh0bWwsXHJcbi8vIGJvZHkge1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDBweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgcHItMCBwbC0wXCI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgRGVsaXZlcnkgWm9uZXM6XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHYtaWY9XCJ6b25lcy5sZW5ndGggIT0gMFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cImFkZERlbGl2ZXJ5Wm9uZSgpXCJcclxuICAgICAgICAgID5BZGQgTW9yZSBab25lPC9idXR0b24+XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgdi1pZj1cInpvbmVzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICA8aDM+Tm8gRGVsaXZlcnkgWm9uZSBZZXQ8L2gzPlxyXG4gICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgIEBjbGljaz1cImFkZERlbGl2ZXJ5Wm9uZSgpXCJcclxuICAgICAgICAgICAgPkFkZCBEZWxpdmVyeSBab25lIEhlcmU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIHByLTFcIlxyXG4gICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gem9uZXNcIlxyXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VDZW50ZXIoaXRlbS5sYXQsIGl0ZW0ubG5nKVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICA8Yj57e2l0ZW0uem9uZV9uYW1lfX08L2I+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tZWRpdCBmbG9hdC1yaWdodFwiIEBjbGljaz1cInVwZGF0ZVpvbmUoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtcGVuY2lsLWFsdFwiPjwvaT4gLS0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lZGl0XCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyIG1yLTJcIj48L2k+XHJcbiAgICAgICAgICAgIHt7aXRlbS5hZGRyZXNzfX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cImhlaWdodDo1MDBweDtcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuXHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFya2VyczogW10sXHJcbiAgICAgIG1hcDoge30sXHJcbiAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgIHpvbmVzOiBbXSxcclxuICAgIC8vICAgZ29vZ2xlQVBJS0VZOiBcIkFJemFTeUJjR1Z2UzlKdmdXbU1kRlZFYlB4WlRVV1VpOXFKdDRWb1wiXHJcbiAgICAgIGdvb2dsZUFQSUtFWTogcHJvY2Vzcy5lbnYuTUlYX0dPT0dMRV9BUElfS0VZXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICB0aGlzLmdldEFsbERlbGl2ZXJ5Wm9uZXMoKTtcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGREZWxpdmVyeVpvbmUoKSB7XHJcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vZGVsaXZlcnktem9uZXMvYWRkXCI7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVpvbmUoZGF0YSkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL2RlbGl2ZXJ5LXpvbmVzL2VkaXQvXCIgKyBkYXRhLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRBbGxEZWxpdmVyeVpvbmVzKCkge1xyXG4gICAgICBheGlvcy5nZXQoXCIvYWRtaW4vZGVsaXZlcnktem9uZXMvZ2V0QWxsRGVsaXZlcnlab25lc1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLnpvbmVzID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRNYXAoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgdmFyIE5ld1lvcmtTdGF0ZSA9IHsgbGF0OiA0My4yOTk0Mjg1LCBsbmc6IC03NC4yMTc5MzMgfTtcclxuICAgICAgdmFyIFVTQSA9IHsgbGF0OiAzNy4wOTAyNCwgbG5nOiAtOTUuNzEyODkxIH07XHJcblxyXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgICAgICB6b29tOiA0LFxyXG4gICAgICAgIGNlbnRlcjogVVNBLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuem9uZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHsgbGF0OiBlbGVtZW50LmxhdCwgbG5nOiBlbGVtZW50LmxuZyB9O1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgcG9zaXRpb246IGxvY2F0aW9uLFxyXG4gICAgICAgICAgbWFwOiBzZWxmLm1hcCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VDZW50ZXIobGF0aXR1ZGUsIGxvbm5naXR1ZGUpIHtcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9ubmdpdHVkZSB9O1xyXG4gICAgICB0aGlzLm1hcC5zZXRab29tKDEzKTsgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYSB6b29tX2NoYW5nZWQgb24gdGhlIG1hcFxyXG4gICAgICB0aGlzLm1hcC5wYW5Ubyhsb2NhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRTY3JpcHQoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZ29vZ2xlICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xyXG4gICAgICAgIHRoaXMuaW5pdE1hcCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghd2luZG93Lmdvb2dsZSAmJiAhd2luZG93Lmdvb2dsZS5tYXBzKVxyXG4gICAgICAgICAgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIm5vIGdvb2dsZSBtYXBzIHNjcmlwdCBpbmNsdWRlZFwiKTtcclxuICAgICAgICBzZWxmLmluaXRNYXAoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0LnNyYyA9XHJcbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PVwiK3RoaXMuZ29vZ2xlQVBJS0VZK1wiJmxpYnJhcmllcz1nZW9tZXRyeVwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XFxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cXG4jbWFwW2RhdGEtdi03NDQ0MDk1Yl0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cXG4uYnRuLWVkaXRbZGF0YS12LTc0NDQwOTViXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ0NDA5NWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NDQwOTViJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ0NDA5NWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS00IHByLTAgcGwtMFwiIH0sIFtcbiAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBEZWxpdmVyeSBab25lczpcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICBfdm0uem9uZXMubGVuZ3RoICE9IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZERlbGl2ZXJ5Wm9uZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgTW9yZSBab25lXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uem9uZXMubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiTm8gRGVsaXZlcnkgWm9uZSBZZXRcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkRGVsaXZlcnlab25lKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkIERlbGl2ZXJ5IFpvbmUgSGVyZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uem9uZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gcHItMVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlQ2VudGVyKGl0ZW0ubGF0LCBpdGVtLmxuZylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnpvbmVfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4tZWRpdCBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVpvbmUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZWRpdFwiIH0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1hcC1tYXJrZXIgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLmFkZHJlc3MpICsgXCJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tOFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIsIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1MDBweFwiIH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcIm1hcFwiIH0gfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiYnJcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NDQwOTViJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NDQwOTViJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzQ0NDA5NWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc0NDQwOTViJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc0NDQwOTViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc0NDQwOTViJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDQ0MDk1YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NDQ0MDk1YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL2RlbGl2ZXJ5Wm9uZXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ0NDA5NWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NDQwOTViJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDQ0MDk1YiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=