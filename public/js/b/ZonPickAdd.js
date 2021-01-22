(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ZonPickAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _errorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errorClass */ "./resources/js/backend/errorClass.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      zone: {
        zone_name: "",
        address: "",
        lat: "",
        lng: ""
      },
      timer: null,
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      //   googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: "AIzaSyD-aqJby-P72dOO5xNfOI3X2EjAPffOQbc"
    };
  },
  created: function created() {
    this.loadScript();
  },
  methods: {
    savePickupZone: function savePickupZone() {
      var _this = this;

      LoadingOverlay();
      axios.post("/admin/pickup-zones/save", this.zone).then(function (res) {
        window.location.href = "/admin/pickup-zones";
      })["catch"](function (err) {
        console.error(err);

        _this.errors.record(err.response.data.errors);

        _this.showErrorMessage(_this.errors.getArrayOfMessages());

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      this.$events.fire("showErrorMessage", errors);
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
      }); // This event listener will call addMarker() when the map is clicked.

      this.map.addListener("click", function (event) {
        _this2.zone.lat = event.latLng.lat();
        _this2.zone.lng = event.latLng.lng();

        _this2.addMarker(event.latLng);

        _this2.getGeocodingReverse(_this2.zone.lat + ',' + _this2.zone.lng);
      });
    },
    // Adds a marker to the map and push to the array.
    addMarker: function addMarker(location) {
      var zoom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.markers.length != 0) {
        for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
      }

      var self = this;
      var marker = new google.maps.Marker({
        position: location,
        map: self.map
      });
      this.markers.push(marker);

      if (zoom) {
        this.map.setZoom(zoom);
      }

      this.map.panTo(location);
    },
    selectZone: function selectZone(latitude, lonngitude) {
      this.zone.lat = latitude;
      this.zone.lng = lonngitude;
      var location = {
        lat: latitude,
        lng: lonngitude
      };
      this.addMarker(location, 14);
    },
    getLatLong: function getLatLong() {
      var self = this;
      var param = {
        address: this.zone.address,
        key: this.googleAPIKEY
      };
      $.get("https://maps.googleapis.com/maps/api/geocode/json", param, function (res) {
        var lat = res.results[0].geometry.location.lat;
        var lng = res.results[0].geometry.location.lng;
        self.zone.address = res.results[0].formatted_address;
        self.selectZone(lat, lng);
      }).fail(function () {
        console.log("error");
      });
    },
    getGeocodingReverse: function getGeocodingReverse(latlng) {
      var self = this;
      var param = {
        latlng: latlng,
        key: this.googleAPIKEY
      };
      $.get("https://maps.googleapis.com/maps/api/geocode/json", param, function (res) {
        self.zone.address = res.results[0].formatted_address;
      }).fail(function () {
        console.log("error");
      });
    },
    getLatLong2: function getLatLong2() {
      var self = this;
      var param = {
        q: this.zone.address,
        key: "4f3f49ebea4488",
        format: "json"
      };
      $.get("https://us1.locationiq.com/v1/search.php", param, function (res) {
        // console.log(res[0]);
        var lat = Number(res[0].lat);
        var lng = Number(res[0].lon); // //   self.zone.address = res.results[0].formatted_address;

        self.selectZone(lat, lng);
      }).fail(function () {
        console.log("error");
      });
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\n         * element that contains the map. */\n#map[data-v-1a585104] {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\nhtml[data-v-1a585104],\nbody[data-v-1a585104] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-8 p-3" }, [
        _c("div", { staticClass: "col-12 mb-2" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", [_vm._v("Name:")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.zone.zone_name,
                  expression: "zone.zone_name"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", placeholder: "Zone Name" },
              domProps: { value: _vm.zone.zone_name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.zone, "zone_name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "" } }, [_vm._v("Address:")]),
            _vm._v(" "),
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.zone.address,
                    expression: "zone.address"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Zone Address" },
                domProps: { value: _vm.zone.address },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.zone, "address", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "input-group-append" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-danger",
                    attrs: {
                      type: "button",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Get mark on the map"
                    },
                    on: {
                      click: function($event) {
                        return _vm.getLatLong()
                      }
                    }
                  },
                  [
                    _c("i", {
                      staticClass: "fas fa-map-marker-alt",
                      staticStyle: { "font-size": "17px" }
                    })
                  ]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12", staticStyle: { height: "300px" } }, [
          _c("label", [_vm._v("Set Marker:")]),
          _vm._v(" "),
          _c("div", { attrs: { id: "map" } }),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-success float-right",
              attrs: { type: "button " },
              on: {
                click: function($event) {
                  return _vm.savePickupZone()
                }
              }
            },
            [_vm._v("Add Zone")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-3" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h3", { staticClass: "card-title mb-0" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", { staticClass: "mr-2" }, [
              _c(
                "a",
                {
                  staticClass:
                    "btn btn-success float-right rounded-0 text-light",
                  attrs: { href: "/admin/pickup-zones" }
                },
                [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
              )
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("Add Pickup Zone")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true&");
/* harmony import */ var _pickupZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickupZonesAdd.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pickupZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a585104",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=style&index=0&id=1a585104&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_style_index_0_id_1a585104_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesAdd.vue?vue&type=template&id=1a585104&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesAdd_vue_vue_type_template_id_1a585104_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/errorClass.js":
/*!********************************************!*\
  !*** ./resources/js/backend/errorClass.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors = /*#__PURE__*/function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "get",
    value: function get(field) {
      // console.log("getting this field" + field)
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      delete this.errors[field];
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "getAllMessages",
    value: function getAllMessages() {
      var str = "";

      if (Object.keys(this.errors).length > 0 == true) {
        var keys = Object.keys(this.errors);

        for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
          var key = _keys[_i];
          str = str + this.get(key);
          +", ";
        }
      }

      return str;
    }
  }, {
    key: "getArrayOfMessages",
    value: function getArrayOfMessages() {
      var arr = [];

      if (Object.keys(this.errors).length > 0 == true) {
        var keys = Object.keys(this.errors);

        for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
          var key = _keys2[_i2];
          // let obj = {
          //   msg: this.get(key),
          // };
          arr.push(this.get(key));
        }
      }

      return arr;
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }]);

  return Errors;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzQWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNBZGQudnVlP2I5N2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzQWRkLnZ1ZT9iODA0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lc0FkZC52dWU/ZjY4OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNBZGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lc0FkZC52dWU/ZjYyYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNBZGQudnVlPzlkNjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzQWRkLnZ1ZT8wYzVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0s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O3dCQUVHQSxLLEVBQU87QUFDUCxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsY0FBWixDQUEyQkQsS0FBM0IsQ0FBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsVUFBSUUsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxpQ0FBa0JLLElBQWxCLDJCQUF3QjtBQUFuQixjQUFNRSxHQUFHLFlBQVQ7QUFDREosYUFBRyxHQUFHQSxHQUFHLEdBQUcsS0FBS0ssR0FBTCxDQUFTRCxHQUFULENBQVo7QUFDQSxXQUFDLElBQUQ7QUFDSDtBQUNKOztBQUNELGFBQU9KLEdBQVA7QUFDSDs7O3lDQUVvQjtBQUNqQixVQUFJTSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL1pvblBpY2tBZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuXG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9waWNrdXAtem9uZXNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5BZGQgUGlja3VwIFpvbmU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiem9uZS56b25lX25hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgQGtleXVwPVwiYWRkcmVzc1R5cGUoKVwiIC8+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ6b25lLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0TGF0TG9uZygpXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPiAtLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoLWxvY2F0aW9uIG1yLTIgbWwtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT4gLS0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O1wiPlxuICAgICAgICAgIDxsYWJlbD5TZXQgTWFya2VyOjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b24gXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmVQaWNrdXBab25lKClcIlxuICAgICAgICAgID5BZGQgWm9uZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBFcnJvcnMgZnJvbSBcIi4uLy4uL2Vycm9yQ2xhc3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFya2VyczogW10sXG4gICAgICBtYXA6IHt9LFxuICAgICAgem9uZToge1xuICAgICAgICB6b25lX25hbWU6IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICAgIGxhdDogXCJcIixcbiAgICAgICAgbG5nOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG4gICAgLy8gICBnb29nbGVBUElLRVk6IFwiQUl6YVN5QmNHVnZTOUp2Z1dtTWRGVkViUHhaVFVXVWk5cUp0NFZvXCJcbiAgICAgIGdvb2dsZUFQSUtFWTogcHJvY2Vzcy5lbnYuTUlYX0dPT0dMRV9BUElfS0VZXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRTY3JpcHQoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2F2ZVBpY2t1cFpvbmUoKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hZG1pbi9waWNrdXAtem9uZXMvc2F2ZVwiLCB0aGlzLnpvbmUpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL3BpY2t1cC16b25lc1wiO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcbiAgICB9LFxuXG4gICAgaW5pdE1hcCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHZhciBOZXdZb3JrU3RhdGUgPSB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH07XG4gICAgICB2YXIgVVNBID0geyBsYXQ6IDM3LjA5MDI0LCBsbmc6IC05NS43MTI4OTEgfTtcbiAgICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKSwge1xuICAgICAgICB6b29tOiA0LFxuICAgICAgICBjZW50ZXI6IFVTQSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBUaGlzIGV2ZW50IGxpc3RlbmVyIHdpbGwgY2FsbCBhZGRNYXJrZXIoKSB3aGVuIHRoZSBtYXAgaXMgY2xpY2tlZC5cbiAgICAgIHRoaXMubWFwLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5sYXQgPSBldmVudC5sYXRMbmcubGF0KCk7XG4gICAgICAgIHRoaXMuem9uZS5sbmcgPSBldmVudC5sYXRMbmcubG5nKCk7XG4gICAgICAgIHRoaXMuYWRkTWFya2VyKGV2ZW50LmxhdExuZyk7XG4gICAgICAgIHRoaXMuZ2V0R2VvY29kaW5nUmV2ZXJzZSh0aGlzLnpvbmUubGF0KycsJyt0aGlzLnpvbmUubG5nKVxuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIEFkZHMgYSBtYXJrZXIgdG8gdGhlIG1hcCBhbmQgcHVzaCB0byB0aGUgYXJyYXkuXG4gICAgYWRkTWFya2VyKGxvY2F0aW9uLCB6b29tID0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggIT0gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRoaXMubWFya2Vyc1tpXS5zZXRNYXAobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogbG9jYXRpb24sXG4gICAgICAgIG1hcDogc2VsZi5tYXAsXG4gICAgICB9KTtcbiAgICAgIHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG4gICAgICBpZiAoem9vbSkge1xuICAgICAgICB0aGlzLm1hcC5zZXRab29tKHpvb20pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5wYW5Ubyhsb2NhdGlvbik7XG4gICAgfSxcblxuICAgIHNlbGVjdFpvbmUobGF0aXR1ZGUsIGxvbm5naXR1ZGUpIHtcbiAgICAgIHRoaXMuem9uZS5sYXQgPSBsYXRpdHVkZTtcbiAgICAgIHRoaXMuem9uZS5sbmcgPSBsb25uZ2l0dWRlO1xuICAgICAgY29uc3QgbG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9ubmdpdHVkZSB9O1xuICAgICAgdGhpcy5hZGRNYXJrZXIobG9jYXRpb24sIDE0KTtcbiAgICB9LFxuXG4gICAgZ2V0TGF0TG9uZygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgYWRkcmVzczogdGhpcy56b25lLmFkZHJlc3MsXG4gICAgICAgIGtleTogdGhpcy5nb29nbGVBUElLRVksXG4gICAgICB9O1xuXG4gICAgICAkLmdldChcbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uXCIsXG4gICAgICAgIHBhcmFtLFxuICAgICAgICBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgbGV0IGxhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcbiAgICAgICAgICBsZXQgbG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuICAgICAgICAgIHNlbGYuem9uZS5hZGRyZXNzID0gcmVzLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgc2VsZi5zZWxlY3Rab25lKGxhdCwgbG5nKTtcbiAgICAgICAgfVxuICAgICAgKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRHZW9jb2RpbmdSZXZlcnNlKGxhdGxuZykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICBsYXRsbmc6IGxhdGxuZyxcbiAgICAgICAga2V5OiB0aGlzLmdvb2dsZUFQSUtFWSxcbiAgICAgIH07XG5cbiAgICAgICQuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb25cIixcbiAgICAgICAgcGFyYW0sXG4gICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgfVxuICAgICAgKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRMYXRMb25nMigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgcTogdGhpcy56b25lLmFkZHJlc3MsXG4gICAgICAgIGtleTogXCI0ZjNmNDllYmVhNDQ4OFwiLFxuICAgICAgICBmb3JtYXQ6IFwianNvblwiLFxuICAgICAgfTtcblxuICAgICAgJC5nZXQoXCJodHRwczovL3VzMS5sb2NhdGlvbmlxLmNvbS92MS9zZWFyY2gucGhwXCIsIHBhcmFtLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc1swXSk7XG4gICAgICAgIGxldCBsYXQgPSBOdW1iZXIocmVzWzBdLmxhdCk7XG4gICAgICAgIGxldCBsbmcgPSBOdW1iZXIocmVzWzBdLmxvbik7XG4gICAgICAgIC8vIC8vICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgc2VsZi5zZWxlY3Rab25lKGxhdCwgbG5nKTtcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGxvYWRTY3JpcHQoKSB7XG4gICAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgICAgdGhpcy5pbml0TWFwKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ29vZ2xlICYmICF3aW5kb3cuZ29vZ2xlLm1hcHMpXG4gICAgICAgICAgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIm5vIGdvb2dsZSBtYXBzIHNjcmlwdCBpbmNsdWRlZFwiKTtcbiAgICAgICAgc2VsZi5pbml0TWFwKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBzY3JpcHQuc3JjID1cbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PVwiK3RoaXMuZ29vZ2xlQVBJS0VZK1wiJmxpYnJhcmllcz1nZW9tZXRyeVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XFxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cXG4jbWFwW2RhdGEtdi0xYTU4NTEwNF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cXG5odG1sW2RhdGEtdi0xYTU4NTEwNF0sXFxuYm9keVtkYXRhLXYtMWE1ODUxMDRdIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhNTg1MTA0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWE1ODUxMDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWE1ODUxMDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS04IHAtM1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgbWItMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOYW1lOlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnpvbmUuem9uZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ6b25lLnpvbmVfbmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlpvbmUgTmFtZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uem9uZS56b25lX25hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uem9uZSwgXCJ6b25lX25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIkFkZHJlc3M6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnpvbmUuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ6b25lLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlpvbmUgQWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS56b25lLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uem9uZSwgXCJhZGRyZXNzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJHZXQgbWFyayBvbiB0aGUgbWFwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldExhdExvbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE3cHhcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiwgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2V0IE1hcmtlcjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibWFwXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvbiBcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZVBpY2t1cFpvbmUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgWm9uZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9waWNrdXAtem9uZXNcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiB9KV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkFkZCBQaWNrdXAgWm9uZVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTU4NTEwNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9waWNrdXBab25lc0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9waWNrdXBab25lc0FkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYTU4NTEwNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFhNTg1MTA0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWE1ODUxMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWE1ODUxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWE1ODUxMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTU4NTEwNCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYTU4NTEwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzQWRkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFhNTg1MTA0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWE1ODUxMDQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzQWRkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYTU4NTEwNCZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGlzIGZpZWxkXCIgKyBmaWVsZClcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgK1wiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGdldEFycmF5T2ZNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIC8vICAgbXNnOiB0aGlzLmdldChrZXkpLFxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9