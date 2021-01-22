(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ZonPickEdit"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["propszone"],
  data: function data() {
    return {
      markers: [],
      map: {},
      zone: {
        id: "",
        zone_name: "",
        address: "",
        lat: "",
        lng: ""
      },
      timer: null,
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      // googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: "AIzaSyD-aqJby-P72dOO5xNfOI3X2EjAPffOQbc"
    };
  },
  created: function created() {
    this.loadScript();
  },
  methods: {
    updatePickupZone: function updatePickupZone() {
      var _this = this;

      LoadingOverlay();
      axios.post("/admin/pickup-zones/update", this.zone).then(function (res) {
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

      this.zone.id = this.propszone.id;
      this.zone.zone_name = this.propszone.zone_name;
      this.zone.address = this.propszone.address;
      this.zone.lat = this.propszone.lat;
      this.zone.lng = this.propszone.lng;
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
      var location = {
        lat: this.zone.lat,
        lng: this.zone.lng
      };
      this.addMarker(location, 14); // This event listener will call addMarker() when the map is clicked.

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\n         * element that contains the map. */\n#map[data-v-136dbf7d] {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\nhtml[data-v-136dbf7d],\nbody[data-v-136dbf7d] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
                  return _vm.updatePickupZone()
                }
              }
            },
            [_vm._v("Update Zone")]
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
            _c("div", [_vm._v("Edit Pick-up Zone")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true&");
/* harmony import */ var _pickupZonesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pickupZonesEdit.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pickupZonesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "136dbf7d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=style&index=0&id=136dbf7d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_style_index_0_id_136dbf7d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/pickupZonesEdit.vue?vue&type=template&id=136dbf7d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_pickupZonesEdit_vue_vue_type_template_id_136dbf7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzRWRpdC52dWU/Zjg5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNFZGl0LnZ1ZT84ZDY2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lc0VkaXQudnVlP2UzZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL3BpY2t1cFpvbmVzRWRpdC52dWU/OTRjNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNFZGl0LnZ1ZT83MmNhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9waWNrdXBab25lc0VkaXQudnVlPzc2NDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvZXJyb3JDbGFzcy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5Iiwic3RyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImdldCIsImFyciIs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IiwiZmlsZSI6ImpzL2IvWm9uUGlja0VkaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cbiNtYXAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG48L3N0eWxlPlxuXG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItM1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9waWNrdXAtem9uZXNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IHJvdW5kZWQtMCB0ZXh0LWxpZ2h0XCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5FZGl0IFBpY2stdXAgWm9uZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiem9uZS56b25lX25hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgQGtleXVwPVwiYWRkcmVzc1R5cGUoKVwiIC8+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ6b25lLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0TGF0TG9uZygpXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPiAtLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoLWxvY2F0aW9uIG1yLTIgbWwtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT4gLS0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O1wiPlxuICAgICAgICAgIDxsYWJlbD5TZXQgTWFya2VyOjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b24gXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZVBpY2t1cFpvbmUoKVwiXG4gICAgICAgICAgPlVwZGF0ZSBab25lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wicHJvcHN6b25lXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXJrZXJzOiBbXSxcbiAgICAgIG1hcDoge30sXG4gICAgICB6b25lOiB7XG4gICAgICAgIGlkOiBcIlwiLFxuICAgICAgICB6b25lX25hbWU6IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICAgIGxhdDogXCJcIixcbiAgICAgICAgbG5nOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIHRpbWVyOiBudWxsLFxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG4gICAgICAvLyBnb29nbGVBUElLRVk6IFwiQUl6YVN5QmNHVnZTOUp2Z1dtTWRGVkViUHhaVFVXVWk5cUp0NFZvXCJcbiAgICAgIGdvb2dsZUFQSUtFWTogcHJvY2Vzcy5lbnYuTUlYX0dPT0dMRV9BUElfS0VZXG4gICAgfTtcbiAgfSxcbiAgY3JlYXRlZCgpIHtcbiAgICB0aGlzLmxvYWRTY3JpcHQoKTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgdXBkYXRlUGlja3VwWm9uZSgpIHtcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hZG1pbi9waWNrdXAtem9uZXMvdXBkYXRlXCIsIHRoaXMuem9uZSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vcGlja3VwLXpvbmVzXCI7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xuICAgIH0sXG5cbiAgICBpbml0TWFwKCkge1xuICAgICAgdGhpcy56b25lLmlkID0gdGhpcy5wcm9wc3pvbmUuaWQ7XG4gICAgICB0aGlzLnpvbmUuem9uZV9uYW1lID0gdGhpcy5wcm9wc3pvbmUuem9uZV9uYW1lO1xuICAgICAgdGhpcy56b25lLmFkZHJlc3MgPSB0aGlzLnByb3Bzem9uZS5hZGRyZXNzO1xuICAgICAgdGhpcy56b25lLmxhdCA9IHRoaXMucHJvcHN6b25lLmxhdDtcbiAgICAgIHRoaXMuem9uZS5sbmcgPSB0aGlzLnByb3Bzem9uZS5sbmc7XG5cbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIHZhciBOZXdZb3JrU3RhdGUgPSB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH07XG4gICAgICB2YXIgVVNBID0geyBsYXQ6IDM3LjA5MDI0LCBsbmc6IC05NS43MTI4OTEgfTtcblxuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIGNlbnRlcjogVVNBLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9uID0geyBsYXQ6IHRoaXMuem9uZS5sYXQsIGxuZzogdGhpcy56b25lLmxuZyB9O1xuICAgICAgdGhpcy5hZGRNYXJrZXIobG9jYXRpb24sIDE0KTtcblxuICAgICAgLy8gVGhpcyBldmVudCBsaXN0ZW5lciB3aWxsIGNhbGwgYWRkTWFya2VyKCkgd2hlbiB0aGUgbWFwIGlzIGNsaWNrZWQuXG4gICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnpvbmUubGF0ID0gZXZlbnQubGF0TG5nLmxhdCgpO1xuICAgICAgICB0aGlzLnpvbmUubG5nID0gZXZlbnQubGF0TG5nLmxuZygpO1xuICAgICAgICB0aGlzLmFkZE1hcmtlcihldmVudC5sYXRMbmcpO1xuICAgICAgICB0aGlzLmdldEdlb2NvZGluZ1JldmVyc2UodGhpcy56b25lLmxhdCsnLCcrdGhpcy56b25lLmxuZylcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBBZGRzIGEgbWFya2VyIHRvIHRoZSBtYXAgYW5kIHB1c2ggdG8gdGhlIGFycmF5LlxuICAgIGFkZE1hcmtlcihsb2NhdGlvbiwgem9vbSA9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLm1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IGxvY2F0aW9uLFxuICAgICAgICBtYXA6IHNlbGYubWFwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuICAgICAgaWYgKHpvb20pIHtcbiAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSh6b29tKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAucGFuVG8obG9jYXRpb24pO1xuICAgIH0sXG5cbiAgICBzZWxlY3Rab25lKGxhdGl0dWRlLCBsb25uZ2l0dWRlKSB7XG4gICAgICB0aGlzLnpvbmUubGF0ID0gbGF0aXR1ZGU7XG4gICAgICB0aGlzLnpvbmUubG5nID0gbG9ubmdpdHVkZTtcbiAgICAgIGNvbnN0IGxvY2F0aW9uID0geyBsYXQ6IGxhdGl0dWRlLCBsbmc6IGxvbm5naXR1ZGUgfTtcbiAgICAgIHRoaXMuYWRkTWFya2VyKGxvY2F0aW9uLCAxNCk7XG4gICAgfSxcblxuICAgIGdldExhdExvbmcoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgIGFkZHJlc3M6IHRoaXMuem9uZS5hZGRyZXNzLFxuICAgICAgICBrZXk6IHRoaXMuZ29vZ2xlQVBJS0VZLFxuICAgICAgfTtcblxuICAgICAgJC5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvblwiLFxuICAgICAgICBwYXJhbSxcbiAgICAgICAgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgIGxldCBsYXQgPSByZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQ7XG4gICAgICAgICAgbGV0IGxuZyA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZztcbiAgICAgICAgICBzZWxmLnpvbmUuYWRkcmVzcyA9IHJlcy5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICAgIHNlbGYuc2VsZWN0Wm9uZShsYXQsIGxuZyk7XG4gICAgICAgIH1cbiAgICAgICkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgIGdldEdlb2NvZGluZ1JldmVyc2UobGF0bG5nKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBsZXQgcGFyYW0gPSB7XG4gICAgICAgIGxhdGxuZzogbGF0bG5nLFxuICAgICAgICBrZXk6IHRoaXMuZ29vZ2xlQVBJS0VZLFxuICAgICAgfTtcblxuICAgICAgJC5nZXQoXG4gICAgICAgIFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvblwiLFxuICAgICAgICBwYXJhbSxcbiAgICAgICAgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBzZWxmLnpvbmUuYWRkcmVzcyA9IHJlcy5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICB9XG4gICAgICApLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldExhdExvbmcyKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICBxOiB0aGlzLnpvbmUuYWRkcmVzcyxcbiAgICAgICAga2V5OiBcIjRmM2Y0OWViZWE0NDg4XCIsXG4gICAgICAgIGZvcm1hdDogXCJqc29uXCIsXG4gICAgICB9O1xuXG4gICAgICAkLmdldChcImh0dHBzOi8vdXMxLmxvY2F0aW9uaXEuY29tL3YxL3NlYXJjaC5waHBcIiwgcGFyYW0sIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzWzBdKTtcbiAgICAgICAgbGV0IGxhdCA9IE51bWJlcihyZXNbMF0ubGF0KTtcbiAgICAgICAgbGV0IGxuZyA9IE51bWJlcihyZXNbMF0ubG9uKTtcbiAgICAgICAgLy8gLy8gICBzZWxmLnpvbmUuYWRkcmVzcyA9IHJlcy5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xuICAgICAgICBzZWxmLnNlbGVjdFpvbmUobGF0LCBsbmcpO1xuICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgbG9hZFNjcmlwdCgpIHtcbiAgICAgIGlmICh3aW5kb3cuZ29vZ2xlICYmIHdpbmRvdy5nb29nbGUubWFwcykge1xuICAgICAgICB0aGlzLmluaXRNYXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5nb29nbGUgJiYgIXdpbmRvdy5nb29nbGUubWFwcylcbiAgICAgICAgICByZXR1cm4gdm9pZCBjb25zb2xlLmVycm9yKFwibm8gZ29vZ2xlIG1hcHMgc2NyaXB0IGluY2x1ZGVkXCIpO1xuICAgICAgICBzZWxmLmluaXRNYXAoKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5zcmMgPVxuICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9XCIrdGhpcy5nb29nbGVBUElLRVkrXCImbGlicmFyaWVzPWdlb21ldHJ5XCI7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9LFxuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXZcXG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xcbiNtYXBbZGF0YS12LTEzNmRiZjdkXSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xcbmh0bWxbZGF0YS12LTEzNmRiZjdkXSxcXG5ib2R5W2RhdGEtdi0xMzZkYmY3ZF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmRiZjdkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmRiZjdkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BpY2t1cFpvbmVzRWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMzZkYmY3ZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTggcC0zXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiBtYi0yXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWU6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uem9uZS56b25lX25hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInpvbmUuem9uZV9uYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWm9uZSBOYW1lXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS56b25lLnpvbmVfbmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS56b25lLCBcInpvbmVfbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbX3ZtLl92KFwiQWRkcmVzczpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uem9uZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInpvbmUuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWm9uZSBBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnpvbmUuYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS56b25lLCBcImFkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TGF0TG9uZygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTdweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZXQgTWFya2VyOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtYXBcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uIFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVQaWNrdXBab25lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiVXBkYXRlIFpvbmVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcGlja3VwLXpvbmVzXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgfSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJFZGl0IFBpY2stdXAgWm9uZVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BpY2t1cFpvbmVzRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTM2ZGJmN2Qmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9waWNrdXBab25lc0VkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTM2ZGJmN2QmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMzZkYmY3ZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzEzNmRiZjdkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzEzNmRiZjdkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzEzNmRiZjdkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9waWNrdXBab25lc0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNmRiZjdkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEzNmRiZjdkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvcGlja3VwWm9uZXNFZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waWNrdXBab25lc0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmRiZjdkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGlja3VwWm9uZXNFZGl0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzNmRiZjdkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9waWNrdXBab25lc0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEzNmRiZjdkJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=