(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ZonDelAdd"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      timer: null,
      //   googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: "AIzaSyD-aqJby-P72dOO5xNfOI3X2EjAPffOQbc"
    };
  },
  created: function created() {
    this.loadScript();
  },
  methods: {
    saveDeliveryZone: function saveDeliveryZone() {
      var _this = this;

      LoadingOverlay();
      axios.post("/admin/delivery-zones/save", this.zone).then(function (res) {
        window.location.href = "/admin/delivery-zones";
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
    // addressType() {
    //   if (this.timer) {
    //     clearTimeout(this.timer);
    //     this.timer = null;
    //   }
    //   this.timer = setTimeout(() => {
    //     this.getLatLong();
    //   }, 1000);
    // },
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Always set the map height explicitly to define the size of the div\n         * element that contains the map. */\n#map[data-v-7255ce14] {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\nhtml[data-v-7255ce14],\nbody[data-v-7255ce14] {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
                  return _vm.saveDeliveryZone()
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
                  attrs: { href: "/admin/delivery-zones" }
                },
                [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
              )
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("Add Delivery Zone")])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true&");
/* harmony import */ var _deliveryZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deliveryZonesAdd.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& */ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _deliveryZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7255ce14",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZonesAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=style&index=0&id=7255ce14&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_style_index_0_id_7255ce14_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/deliverypickupzones/deliveryZonesAdd.vue?vue&type=template&id=7255ce14&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_deliveryZonesAdd_vue_vue_type_template_id_7255ce14_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT8xMzIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT83MzI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT9lYzAwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/NjgzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/ODlkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/ZjA2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0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bEFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi8qIEFsd2F5cyBzZXQgdGhlIG1hcCBoZWlnaHQgZXhwbGljaXRseSB0byBkZWZpbmUgdGhlIHNpemUgb2YgdGhlIGRpdlxyXG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xyXG4jbWFwIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG48L3N0eWxlPlxyXG5cclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIvYWRtaW4vZGVsaXZlcnktem9uZXNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5BZGQgRGVsaXZlcnkgWm9uZTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBwLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG1iLTJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD5OYW1lOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHYtbW9kZWw9XCJ6b25lLnpvbmVfbmFtZVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpvbmUgTmFtZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I+QWRkcmVzczo8L2xhYmVsPlxyXG4gICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgQGtleXVwPVwiYWRkcmVzc1R5cGUoKVwiIC8+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ6b25lLmFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIEFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0TGF0TG9uZygpXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIDxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZXIgbXItMlwiPjwvaT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoLWxvY2F0aW9uIG1yLTIgbWwtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCIgc3R5bGU9XCJmb250LXNpemU6IDE3cHg7XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIiBzdHlsZT1cImhlaWdodDozMDBweDtcIj5cclxuICAgICAgICAgIDxsYWJlbD5TZXQgTWFya2VyOjwvbGFiZWw+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvbiBcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmVEZWxpdmVyeVpvbmUoKVwiXHJcbiAgICAgICAgICA+QWRkIFpvbmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRXJyb3JzIGZyb20gXCIuLi8uLi9lcnJvckNsYXNzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFya2VyczogW10sXHJcbiAgICAgIG1hcDoge30sXHJcbiAgICAgIHpvbmU6IHtcclxuICAgICAgICB6b25lX25hbWU6IFwiXCIsXHJcbiAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICBsYXQ6IFwiXCIsXHJcbiAgICAgICAgbG5nOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcclxuICAgICAgdGltZXI6IG51bGwsXHJcbiAgICAvLyAgIGdvb2dsZUFQSUtFWTogXCJBSXphU3lCY0dWdlM5SnZnV21NZEZWRWJQeFpUVVdVaTlxSnQ0Vm9cIlxyXG4gICAgICBnb29nbGVBUElLRVk6IHByb2Nlc3MuZW52Lk1JWF9HT09HTEVfQVBJX0tFWVxyXG4gICAgfTtcclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmxvYWRTY3JpcHQoKTtcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBzYXZlRGVsaXZlcnlab25lKCkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2RlbGl2ZXJ5LXpvbmVzL3NhdmVcIiwgdGhpcy56b25lKVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vZGVsaXZlcnktem9uZXNcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJzaG93RXJyb3JNZXNzYWdlXCIsIGVycm9ycyk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGFkZHJlc3NUeXBlKCkge1xyXG4gICAgLy8gICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgLy8gICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIC8vICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgdGhpcy5nZXRMYXRMb25nKCk7XHJcbiAgICAvLyAgIH0sIDEwMDApO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICBpbml0TWFwKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIHZhciBOZXdZb3JrU3RhdGUgPSB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH07XHJcbiAgICAgIHZhciBVU0EgPSB7IGxhdDogMzcuMDkwMjQsIGxuZzogLTk1LjcxMjg5MSB9O1xyXG4gICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIiksIHtcclxuICAgICAgICB6b29tOiA0LFxyXG4gICAgICAgIGNlbnRlcjogVVNBLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFRoaXMgZXZlbnQgbGlzdGVuZXIgd2lsbCBjYWxsIGFkZE1hcmtlcigpIHdoZW4gdGhlIG1hcCBpcyBjbGlja2VkLlxyXG4gICAgICB0aGlzLm1hcC5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuem9uZS5sYXQgPSBldmVudC5sYXRMbmcubGF0KCk7XHJcbiAgICAgICAgdGhpcy56b25lLmxuZyA9IGV2ZW50LmxhdExuZy5sbmcoKTtcclxuICAgICAgICB0aGlzLmFkZE1hcmtlcihldmVudC5sYXRMbmcpO1xyXG4gICAgICAgIHRoaXMuZ2V0R2VvY29kaW5nUmV2ZXJzZSh0aGlzLnpvbmUubGF0KycsJyt0aGlzLnpvbmUubG5nKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gQWRkcyBhIG1hcmtlciB0byB0aGUgbWFwIGFuZCBwdXNoIHRvIHRoZSBhcnJheS5cclxuICAgIGFkZE1hcmtlcihsb2NhdGlvbiwgem9vbSA9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMubWFya2Vycy5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB0aGlzLm1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGNvbnN0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgIHBvc2l0aW9uOiBsb2NhdGlvbixcclxuICAgICAgICBtYXA6IHNlbGYubWFwLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgaWYgKHpvb20pIHtcclxuICAgICAgICB0aGlzLm1hcC5zZXRab29tKHpvb20pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm1hcC5wYW5Ubyhsb2NhdGlvbik7XHJcbiAgICB9LFxyXG5cclxuICAgIHNlbGVjdFpvbmUobGF0aXR1ZGUsIGxvbm5naXR1ZGUpIHtcclxuICAgICAgdGhpcy56b25lLmxhdCA9IGxhdGl0dWRlO1xyXG4gICAgICB0aGlzLnpvbmUubG5nID0gbG9ubmdpdHVkZTtcclxuICAgICAgY29uc3QgbG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9ubmdpdHVkZSB9O1xyXG4gICAgICB0aGlzLmFkZE1hcmtlcihsb2NhdGlvbiwgMTQpO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRMYXRMb25nKCkge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICBhZGRyZXNzOiB0aGlzLnpvbmUuYWRkcmVzcyxcclxuICAgICAgICBrZXk6IHRoaXMuZ29vZ2xlQVBJS0VZLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgJC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uXCIsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgbGV0IGxhdCA9IHJlcy5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdDtcclxuICAgICAgICAgIGxldCBsbmcgPSByZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XHJcbiAgICAgICAgICBzZWxmLnpvbmUuYWRkcmVzcyA9IHJlcy5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xyXG4gICAgICAgICAgc2VsZi5zZWxlY3Rab25lKGxhdCwgbG5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICkuZmFpbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgICBnZXRHZW9jb2RpbmdSZXZlcnNlKGxhdGxuZykge1xyXG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgIGxldCBwYXJhbSA9IHtcclxuICAgICAgICBsYXRsbmc6IGxhdGxuZyxcclxuICAgICAgICBrZXk6IHRoaXMuZ29vZ2xlQVBJS0VZLFxyXG4gICAgICB9O1xyXG5cclxuICAgICAgJC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uXCIsXHJcbiAgICAgICAgcGFyYW0sXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIHNlbGYuem9uZS5hZGRyZXNzID0gcmVzLnJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XHJcbiAgICAgICAgfVxyXG4gICAgICApLmZhaWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRMYXRMb25nMigpIHtcclxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICBsZXQgcGFyYW0gPSB7XHJcbiAgICAgICAgcTogdGhpcy56b25lLmFkZHJlc3MsXHJcbiAgICAgICAga2V5OiBcIjRmM2Y0OWViZWE0NDg4XCIsXHJcbiAgICAgICAgZm9ybWF0OiBcImpzb25cIixcclxuICAgICAgfTtcclxuXHJcbiAgICAgICQuZ2V0KFwiaHR0cHM6Ly91czEubG9jYXRpb25pcS5jb20vdjEvc2VhcmNoLnBocFwiLCBwYXJhbSwgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc1swXSk7XHJcbiAgICAgICAgbGV0IGxhdCA9IE51bWJlcihyZXNbMF0ubGF0KTtcclxuICAgICAgICBsZXQgbG5nID0gTnVtYmVyKHJlc1swXS5sb24pO1xyXG4gICAgICAgIC8vIC8vICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICAgICAgICBzZWxmLnNlbGVjdFpvbmUobGF0LCBsbmcpO1xyXG4gICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9hZFNjcmlwdCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XHJcbiAgICAgICAgdGhpcy5pbml0TWFwKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XHJcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCF3aW5kb3cuZ29vZ2xlICYmICF3aW5kb3cuZ29vZ2xlLm1hcHMpXHJcbiAgICAgICAgICByZXR1cm4gdm9pZCBjb25zb2xlLmVycm9yKFwibm8gZ29vZ2xlIG1hcHMgc2NyaXB0IGluY2x1ZGVkXCIpO1xyXG4gICAgICAgIHNlbGYuaW5pdE1hcCgpO1xyXG4gICAgICB9O1xyXG4gICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG4gICAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xyXG4gICAgICBzY3JpcHQuc3JjID1cclxuICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9XCIrdGhpcy5nb29nbGVBUElLRVkrXCImbGlicmFyaWVzPWdlb21ldHJ5XCI7XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBBbHdheXMgc2V0IHRoZSBtYXAgaGVpZ2h0IGV4cGxpY2l0bHkgdG8gZGVmaW5lIHRoZSBzaXplIG9mIHRoZSBkaXZcXG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xcbiNtYXBbZGF0YS12LTcyNTVjZTE0XSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xcbmh0bWxbZGF0YS12LTcyNTVjZTE0XSxcXG5ib2R5W2RhdGEtdi03MjU1Y2UxNF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MjU1Y2UxNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI1NWNlMTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MjU1Y2UxNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTggcC0zXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMiBtYi0yXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgW192bS5fdihcIk5hbWU6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uem9uZS56b25lX25hbWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInpvbmUuem9uZV9uYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWm9uZSBOYW1lXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS56b25lLnpvbmVfbmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS56b25lLCBcInpvbmVfbmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiXCIgfSB9LCBbX3ZtLl92KFwiQWRkcmVzczpcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uem9uZS5hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInpvbmUuYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiWm9uZSBBZGRyZXNzXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnpvbmUuYWRkcmVzcyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS56b25lLCBcImFkZHJlc3NcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLXBsYWNlbWVudFwiOiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TGF0TG9uZygpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTdweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZXQgTWFya2VyOlwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtYXBcIiB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uIFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlRGVsaXZlcnlab25lKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQWRkIFpvbmVcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbWItM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vZGVsaXZlcnktem9uZXNcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiB9KV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIkFkZCBEZWxpdmVyeSBab25lXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI1NWNlMTQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI1NWNlMTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MjU1Y2UxNFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzI1NWNlMTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzI1NWNlMTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzI1NWNlMTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyNTVjZTE0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcyNTVjZTE0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MjU1Y2UxNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI1NWNlMTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyNTVjZTE0JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=