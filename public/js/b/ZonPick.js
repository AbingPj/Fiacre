(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ZonPick"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js& ***!
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
    this.getAllPickupZones();
  },
  methods: {
    addPickupZone: function addPickupZone() {
      LoadingOverlay();
      window.location.href = "/admin/pickup-zones/add";
    },
    updateZone: function updateZone(data) {
      LoadingOverlay();
      window.location.href = "/admin/pickup-zones/edit/" + data.id;
    },
    getAllPickupZones: function getAllPickupZones() {
      var _this = this;

      axios.get("/admin/pickup-zones/getAllPickupZones").then(function (res) {
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\n         * element that contains the map. */\n#map[data-v-3eb917d3] {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n.btn-edit[data-v-3eb917d3] {\n  background: transparent;\n  border: 0px;\n  color: gray;\n  font-size: 20px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true& ***!
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-4 pr-0 pl-0" }, [
        _c("h4", [
          _vm._v("\n        Pick-up Zones:\n        "),
          _vm.zones.length != 0
            ? _c(
                "button",
                {
                  staticClass: "btn btn-success float-right",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.addPickupZone()
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
              _c("h3", [_vm._v("No Pick-up Zone Yet")]),
              _vm._v(" "),
              _c("h4", [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    attrs: { type: "button" },
                    on: {
                      click: function($event) {
                        return _vm.addPickupZone()
                      }
                    }
                  },
                  [_vm._v("Add Pick-up Zone Here")]
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

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZones.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true&");
/* harmony import */ var _pickupZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickupZones.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pickupZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3eb917d3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/deliverypickupzones/pickupZones.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZones.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=style&index=0&id=3eb917d3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_style_index_0_id_3eb917d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZones.vue?vue&type=template&id=3eb917d3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZones_vue_vue_type_template_id_3eb917d3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXMudnVlPzlmZWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzLnZ1ZT82M2M2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lcy52dWU/ODdiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lcy52dWU/NTBiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXMudnVlPzFlZDciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzLnZ1ZT81YzQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxhQUZBO0FBR0EsaUJBSEE7QUFJQSxlQUpB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Q3NDOzs7QUFHaEc7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLGtHQUFNO0FBQ1IsRUFBRSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBZ2QsQ0FBZ0IsaWNBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvWm9uUGljay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxyXG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXHJcbi8vIGh0bWwsXHJcbi8vIGJvZHkge1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gICBtYXJnaW46IDA7XHJcbi8vICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG5cclxuLmJ0bi1lZGl0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDBweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTQgcHItMCBwbC0wXCI+XHJcbiAgICAgICAgPGg0PlxyXG4gICAgICAgICAgUGljay11cCBab25lczpcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdi1pZj1cInpvbmVzLmxlbmd0aCAhPSAwXCJcclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgQGNsaWNrPVwiYWRkUGlja3VwWm9uZSgpXCJcclxuICAgICAgICAgID5BZGQgTW9yZSBab25lPC9idXR0b24+XHJcbiAgICAgICAgPC9oND5cclxuXHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxkaXYgdi1pZj1cInpvbmVzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICA8aDM+Tm8gUGljay11cCBab25lIFlldDwvaDM+XHJcbiAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiYWRkUGlja3VwWm9uZSgpXCJcclxuICAgICAgICAgICAgPkFkZCBQaWNrLXVwIFpvbmUgSGVyZTwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gcHItMVwiXHJcbiAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiB6b25lc1wiXHJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cImNoYW5nZUNlbnRlcihpdGVtLmxhdCwgaXRlbS5sbmcpXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICAgIDxiPnt7aXRlbS56b25lX25hbWV9fTwvYj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi1lZGl0IGZsb2F0LXJpZ2h0XCIgQGNsaWNrPVwidXBkYXRlWm9uZShpdGVtKVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0XCI+PC9pPiAtLT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVkaXRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZXIgbXItMlwiPjwvaT5cclxuICAgICAgICAgICAge3tpdGVtLmFkZHJlc3N9fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiaGVpZ2h0OjUwMHB4O1wiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtYXJrZXJzOiBbXSxcclxuICAgICAgbWFwOiB7fSxcclxuICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgem9uZXM6IFtdLFxyXG4gICAgLy8gICBnb29nbGVBUElLRVk6IFwiQUl6YVN5QmNHVnZTOUp2Z1dtTWRGVkViUHhaVFVXVWk5cUp0NFZvXCJcclxuICAgICAgZ29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVlcclxuICAgIH07XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgTG9hZGluZ092ZXJsYXkoKTtcclxuICAgIHRoaXMuZ2V0QWxsUGlja3VwWm9uZXMoKTtcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBhZGRQaWNrdXBab25lKCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL3BpY2t1cC16b25lcy9hZGRcIjtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlWm9uZShkYXRhKSB7XHJcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vcGlja3VwLXpvbmVzL2VkaXQvXCIgKyBkYXRhLmlkO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRBbGxQaWNrdXBab25lcygpIHtcclxuICAgICAgYXhpb3MuZ2V0KFwiL2FkbWluL3BpY2t1cC16b25lcy9nZXRBbGxQaWNrdXBab25lc1wiKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICAgICAgICB0aGlzLnpvbmVzID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRNYXAoKSB7XHJcbiAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgdmFyIE5ld1lvcmtTdGF0ZSA9IHsgbGF0OiA0My4yOTk0Mjg1LCBsbmc6IC03NC4yMTc5MzMgfTtcclxuICAgICAgdmFyIFVTQSA9IHsgbGF0OiAzNy4wOTAyNCwgbG5nOiAtOTUuNzEyODkxIH07XHJcblxyXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgICAgICB6b29tOiA0LFxyXG4gICAgICAgIGNlbnRlcjogVVNBLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuem9uZXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHZhciBsb2NhdGlvbiA9IHsgbGF0OiBlbGVtZW50LmxhdCwgbG5nOiBlbGVtZW50LmxuZyB9O1xyXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgcG9zaXRpb246IGxvY2F0aW9uLFxyXG4gICAgICAgICAgbWFwOiBzZWxmLm1hcCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VDZW50ZXIobGF0aXR1ZGUsIGxvbm5naXR1ZGUpIHtcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9ubmdpdHVkZSB9O1xyXG4gICAgICB0aGlzLm1hcC5zZXRab29tKDEzKTsgLy8gVGhpcyB3aWxsIHRyaWdnZXIgYSB6b29tX2NoYW5nZWQgb24gdGhlIG1hcFxyXG4gICAgICB0aGlzLm1hcC5wYW5Ubyhsb2NhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIGxvYWRTY3JpcHQoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuZ29vZ2xlICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xyXG4gICAgICAgIHRoaXMuaW5pdE1hcCgpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xyXG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghd2luZG93Lmdvb2dsZSAmJiAhd2luZG93Lmdvb2dsZS5tYXBzKVxyXG4gICAgICAgICAgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIm5vIGdvb2dsZSBtYXBzIHNjcmlwdCBpbmNsdWRlZFwiKTtcclxuICAgICAgICBzZWxmLmluaXRNYXAoKTtcclxuICAgICAgfTtcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0LnNyYyA9XHJcbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PVwiK3RoaXMuZ29vZ2xlQVBJS0VZK1wiJmxpYnJhcmllcz1nZW9tZXRyeVwiO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XFxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cXG4jbWFwW2RhdGEtdi0zZWI5MTdkM10ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cXG4uYnRuLWVkaXRbZGF0YS12LTNlYjkxN2QzXSB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMHB4O1xcbiAgY29sb3I6IGdyYXk7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlYjkxN2QzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ViOTE3ZDMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2ViOTE3ZDMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS00IHByLTAgcGwtMFwiIH0sIFtcbiAgICAgICAgX2MoXCJoNFwiLCBbXG4gICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBQaWNrLXVwIFpvbmVzOlxcbiAgICAgICAgXCIpLFxuICAgICAgICAgIF92bS56b25lcy5sZW5ndGggIT0gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkUGlja3VwWm9uZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgTW9yZSBab25lXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uem9uZXMubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiTm8gUGljay11cCBab25lIFlldFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRQaWNrdXBab25lKClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkIFBpY2stdXAgWm9uZSBIZXJlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cFwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS56b25lcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBwci0xXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VDZW50ZXIoaXRlbS5sYXQsIGl0ZW0ubG5nKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uem9uZV9uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0bi1lZGl0IGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlWm9uZShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1lZGl0XCIgfSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0uYWRkcmVzcykgKyBcIlxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgwKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS04XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiwgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjUwMHB4XCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibWFwXCIgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcGlja3VwWm9uZXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlYjkxN2QzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BpY2t1cFpvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGlja3VwWm9uZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BpY2t1cFpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlYjkxN2QzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2ViOTE3ZDNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlYjkxN2QzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlYjkxN2QzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlYjkxN2QzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9waWNrdXBab25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ViOTE3ZDMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2ViOTE3ZDMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waWNrdXBab25lcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waWNrdXBab25lcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZWI5MTdkMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNlYjkxN2QzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waWNrdXBab25lcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2ViOTE3ZDMmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9