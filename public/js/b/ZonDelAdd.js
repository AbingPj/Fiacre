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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9kZWxpdmVyeXBpY2t1cHpvbmVzL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT8xMzIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT83MzI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT9lYzAwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/NjgzNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/ODlkNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL2RlbGl2ZXJ5cGlja3Vwem9uZXMvZGVsaXZlcnlab25lc0FkZC52dWU/ZjA2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEZBO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGFBRkE7QUFHQTtBQUNBLHFCQURBO0FBRUEsbUJBRkE7QUFHQSxlQUhBO0FBSUE7QUFKQSxPQUhBO0FBU0EsdUVBVEE7QUFVQSxpQkFWQTtBQVdBO0FBQ0E7QUFaQTtBQWNBLEdBaEJBO0FBaUJBLFNBakJBLHFCQWlCQTtBQUNBO0FBQ0EsR0FuQkE7QUFxQkE7QUFDQSxvQkFEQSw4QkFDQTtBQUFBOztBQUNBO0FBQ0EsWUFDQSxJQURBLENBQ0EsNEJBREEsRUFDQSxTQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxPQUpBLFdBS0E7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsT0FYQTtBQVlBLEtBZkE7QUFpQkEsb0JBakJBLDRCQWlCQSxNQWpCQSxFQWlCQTtBQUNBO0FBQ0EsS0FuQkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsV0EvQkEscUJBK0JBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxlQURBO0FBRUE7QUFGQSxTQUpBLENBU0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBL0NBO0FBaURBO0FBQ0EsYUFsREEscUJBa0RBLFFBbERBLEVBa0RBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUZBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FuRUE7QUFxRUEsY0FyRUEsc0JBcUVBLFFBckVBLEVBcUVBLFVBckVBLEVBcUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQTFFQTtBQTRFQSxjQTVFQSx3QkE0RUE7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUZBO0FBS0EsWUFDQSxtREFEQSxFQUVBLEtBRkEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxFQVNBLElBVEEsQ0FTQTtBQUNBO0FBQ0EsT0FYQTtBQVlBLEtBL0ZBO0FBaUdBLHVCQWpHQSwrQkFpR0EsTUFqR0EsRUFpR0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQTtBQUZBO0FBS0EsWUFDQSxtREFEQSxFQUVBLEtBRkEsRUFHQTtBQUNBO0FBQ0EsT0FMQSxFQU1BLElBTkEsQ0FNQTtBQUNBO0FBQ0EsT0FSQTtBQVNBLEtBakhBO0FBbUhBLGVBbkhBLHlCQW1IQTtBQUNBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLDZCQUZBO0FBR0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLHFDQUhBLENBSUE7O0FBQ0E7QUFDQSxPQU5BLEVBTUEsSUFOQSxDQU1BO0FBQ0E7QUFDQSxPQVJBO0FBU0EsS0FwSUE7QUFzSUEsY0F0SUEsd0JBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLG1EQUNBO0FBQ0E7QUFDQSxPQUpBOztBQUtBO0FBQ0E7QUFDQSxtQkFDQSwwRkFEQTtBQUVBO0FBQ0E7QUF2SkE7QUFyQkEsRzs7Ozs7Ozs7Ozs7QUMvRkEsMkJBQTJCLG1CQUFPLENBQUMseUdBQXdEO0FBQzNGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUywrSUFBK0ksaUJBQWlCLEdBQUcsMkdBQTJHLGlCQUFpQixjQUFjLGVBQWUsR0FBRzs7QUFFdFY7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsMHRCQUFrWjs7QUFFeGEsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLCtHQUE0RDs7QUFFakY7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDbkJmO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLDhCQUE4QjtBQUMvQyxtQkFBbUIsNkJBQTZCO0FBQ2hELHFCQUFxQiw0QkFBNEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRCx5QkFBeUIsNEJBQTRCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQiw0QkFBNEI7QUFDakQseUJBQXlCLFNBQVMsVUFBVSxFQUFFO0FBQzlDO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBNEM7QUFDcEUsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLG9DQUFvQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNDQUFzQyxrQkFBa0IsRUFBRTtBQUM3RTtBQUNBO0FBQ0EscUJBQXFCLFNBQVMsWUFBWSxFQUFFO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwwQkFBMEI7QUFDaEQsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25ELHFCQUFxQix3QkFBd0I7QUFDN0MsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQiwwQkFBMEIsNENBQTRDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBR3JHO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTRNLENBQWdCLDRQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhPO0FBQUE7QUFBQTtBQUFBO0FBQXFkLENBQWdCLHNjQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXFCQSxNO0FBQ2pCLG9CQUFjO0FBQUE7O0FBQ1YsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozt3QkFFR0MsSyxFQUFPO0FBQ1A7QUFDQSxVQUFJLEtBQUtELE1BQUwsQ0FBWUMsS0FBWixDQUFKLEVBQXdCO0FBQ3BCLGVBQU8sS0FBS0QsTUFBTCxDQUFZQyxLQUFaLEVBQW1CLENBQW5CLENBQVA7QUFDSDtBQUNKOzs7MkJBRU1ELE0sRUFBUTtBQUNYLFdBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7MEJBRUtDLEssRUFBTztBQUNULGFBQU8sS0FBS0QsTUFBTCxDQUFZQyxLQUFaLENBQVA7QUFDSDs7O3dCQUVHQSxLLEVBQU87QUFDUCxhQUFPLEtBQUtELE1BQUwsQ0FBWUUsY0FBWixDQUEyQkQsS0FBM0IsQ0FBUDtBQUNIOzs7cUNBRWdCO0FBQ2IsVUFBSUUsR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUMsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxpQ0FBa0JLLElBQWxCLDJCQUF3QjtBQUFuQixjQUFNRSxHQUFHLFlBQVQ7QUFDREosYUFBRyxHQUFHQSxHQUFHLEdBQUcsS0FBS0ssR0FBTCxDQUFTRCxHQUFULENBQVo7QUFDQSxXQUFDLElBQUQ7QUFDSDtBQUNKOztBQUNELGFBQU9KLEdBQVA7QUFDSDs7O3lDQUVvQjtBQUNqQixVQUFJTSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL1pvbkRlbEFkZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XG4gICAgICAgICAqIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgbWFwLiAqL1xuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbjwvc3R5bGU+XG5cblxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBtYi0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGgzIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiL2FkbWluL2RlbGl2ZXJ5LXpvbmVzXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCI+PC9pPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QWRkIERlbGl2ZXJ5IFpvbmU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IHAtM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIG1iLTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB2LW1vZGVsPVwiem9uZS56b25lX25hbWVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIE5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj5BZGRyZXNzOjwvbGFiZWw+XG4gICAgICAgICAgICA8IS0tIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgQGtleXVwPVwiYWRkcmVzc1R5cGUoKVwiIC8+IC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ6b25lLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJab25lIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0TGF0TG9uZygpXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdldCBtYXJrIG9uIHRoZSBtYXBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlciBtci0yXCI+PC9pPiAtLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoLWxvY2F0aW9uIG1yLTIgbWwtMlwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT4gLS0+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiIHN0eWxlPVwiZm9udC1zaXplOiAxN3B4O1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiIHN0eWxlPVwiaGVpZ2h0OjMwMHB4O1wiPlxuICAgICAgICAgIDxsYWJlbD5TZXQgTWFya2VyOjwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b24gXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgIEBjbGljaz1cInNhdmVEZWxpdmVyeVpvbmUoKVwiXG4gICAgICAgICAgPkFkZCBab25lPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtYXJrZXJzOiBbXSxcbiAgICAgIG1hcDoge30sXG4gICAgICB6b25lOiB7XG4gICAgICAgIHpvbmVfbmFtZTogXCJcIixcbiAgICAgICAgYWRkcmVzczogXCJcIixcbiAgICAgICAgbGF0OiBcIlwiLFxuICAgICAgICBsbmc6IFwiXCIsXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAvLyAgIGdvb2dsZUFQSUtFWTogXCJBSXphU3lCY0dWdlM5SnZnV21NZEZWRWJQeFpUVVdVaTlxSnQ0Vm9cIlxuICAgICAgZ29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVlcbiAgICB9O1xuICB9LFxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMubG9hZFNjcmlwdCgpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzYXZlRGVsaXZlcnlab25lKCkge1xuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2RlbGl2ZXJ5LXpvbmVzL3NhdmVcIiwgdGhpcy56b25lKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9kZWxpdmVyeS16b25lc1wiO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcbiAgICB9LFxuXG4gICAgLy8gYWRkcmVzc1R5cGUoKSB7XG4gICAgLy8gICBpZiAodGhpcy50aW1lcikge1xuICAgIC8vICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgLy8gICAgIHRoaXMudGltZXIgPSBudWxsO1xuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgICB0aGlzLmdldExhdExvbmcoKTtcbiAgICAvLyAgIH0sIDEwMDApO1xuICAgIC8vIH0sXG5cbiAgICBpbml0TWFwKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgdmFyIE5ld1lvcmtTdGF0ZSA9IHsgbGF0OiA0My4yOTk0Mjg1LCBsbmc6IC03NC4yMTc5MzMgfTtcbiAgICAgIHZhciBVU0EgPSB7IGxhdDogMzcuMDkwMjQsIGxuZzogLTk1LjcxMjg5MSB9O1xuICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG4gICAgICAgIHpvb206IDQsXG4gICAgICAgIGNlbnRlcjogVVNBLFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFRoaXMgZXZlbnQgbGlzdGVuZXIgd2lsbCBjYWxsIGFkZE1hcmtlcigpIHdoZW4gdGhlIG1hcCBpcyBjbGlja2VkLlxuICAgICAgdGhpcy5tYXAuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy56b25lLmxhdCA9IGV2ZW50LmxhdExuZy5sYXQoKTtcbiAgICAgICAgdGhpcy56b25lLmxuZyA9IGV2ZW50LmxhdExuZy5sbmcoKTtcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIoZXZlbnQubGF0TG5nKTtcbiAgICAgICAgdGhpcy5nZXRHZW9jb2RpbmdSZXZlcnNlKHRoaXMuem9uZS5sYXQrJywnK3RoaXMuem9uZS5sbmcpXG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gQWRkcyBhIG1hcmtlciB0byB0aGUgbWFwIGFuZCBwdXNoIHRvIHRoZSBhcnJheS5cbiAgICBhZGRNYXJrZXIobG9jYXRpb24sIHpvb20gPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy5tYXJrZXJzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGhpcy5tYXJrZXJzW2ldLnNldE1hcChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc3QgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgIHBvc2l0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgbWFwOiBzZWxmLm1hcCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgIGlmICh6b29tKSB7XG4gICAgICAgIHRoaXMubWFwLnNldFpvb20oem9vbSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwLnBhblRvKGxvY2F0aW9uKTtcbiAgICB9LFxuXG4gICAgc2VsZWN0Wm9uZShsYXRpdHVkZSwgbG9ubmdpdHVkZSkge1xuICAgICAgdGhpcy56b25lLmxhdCA9IGxhdGl0dWRlO1xuICAgICAgdGhpcy56b25lLmxuZyA9IGxvbm5naXR1ZGU7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHsgbGF0OiBsYXRpdHVkZSwgbG5nOiBsb25uZ2l0dWRlIH07XG4gICAgICB0aGlzLmFkZE1hcmtlcihsb2NhdGlvbiwgMTQpO1xuICAgIH0sXG5cbiAgICBnZXRMYXRMb25nKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICBhZGRyZXNzOiB0aGlzLnpvbmUuYWRkcmVzcyxcbiAgICAgICAga2V5OiB0aGlzLmdvb2dsZUFQSUtFWSxcbiAgICAgIH07XG5cbiAgICAgICQuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb25cIixcbiAgICAgICAgcGFyYW0sXG4gICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBsZXQgbGF0ID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0O1xuICAgICAgICAgIGxldCBsbmcgPSByZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmc7XG4gICAgICAgICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICBzZWxmLnNlbGVjdFpvbmUobGF0LCBsbmcpO1xuICAgICAgICB9XG4gICAgICApLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgICBnZXRHZW9jb2RpbmdSZXZlcnNlKGxhdGxuZykge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgbGV0IHBhcmFtID0ge1xuICAgICAgICBsYXRsbmc6IGxhdGxuZyxcbiAgICAgICAga2V5OiB0aGlzLmdvb2dsZUFQSUtFWSxcbiAgICAgIH07XG5cbiAgICAgICQuZ2V0KFxuICAgICAgICBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb25cIixcbiAgICAgICAgcGFyYW0sXG4gICAgICAgIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgfVxuICAgICAgKS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBnZXRMYXRMb25nMigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBwYXJhbSA9IHtcbiAgICAgICAgcTogdGhpcy56b25lLmFkZHJlc3MsXG4gICAgICAgIGtleTogXCI0ZjNmNDllYmVhNDQ4OFwiLFxuICAgICAgICBmb3JtYXQ6IFwianNvblwiLFxuICAgICAgfTtcblxuICAgICAgJC5nZXQoXCJodHRwczovL3VzMS5sb2NhdGlvbmlxLmNvbS92MS9zZWFyY2gucGhwXCIsIHBhcmFtLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc1swXSk7XG4gICAgICAgIGxldCBsYXQgPSBOdW1iZXIocmVzWzBdLmxhdCk7XG4gICAgICAgIGxldCBsbmcgPSBOdW1iZXIocmVzWzBdLmxvbik7XG4gICAgICAgIC8vIC8vICAgc2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgc2VsZi5zZWxlY3Rab25lKGxhdCwgbG5nKTtcbiAgICAgIH0pLmZhaWwoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGxvYWRTY3JpcHQoKSB7XG4gICAgICBpZiAod2luZG93Lmdvb2dsZSAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgICAgICAgdGhpcy5pbml0TWFwKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF3aW5kb3cuZ29vZ2xlICYmICF3aW5kb3cuZ29vZ2xlLm1hcHMpXG4gICAgICAgICAgcmV0dXJuIHZvaWQgY29uc29sZS5lcnJvcihcIm5vIGdvb2dsZSBtYXBzIHNjcmlwdCBpbmNsdWRlZFwiKTtcbiAgICAgICAgc2VsZi5pbml0TWFwKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBzY3JpcHQuc3JjID1cbiAgICAgICAgXCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvanM/a2V5PVwiK3RoaXMuZ29vZ2xlQVBJS0VZK1wiJmxpYnJhcmllcz1nZW9tZXRyeVwiO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSxcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQWx3YXlzIHNldCB0aGUgbWFwIGhlaWdodCBleHBsaWNpdGx5IHRvIGRlZmluZSB0aGUgc2l6ZSBvZiB0aGUgZGl2XFxuICAgICAgICAgKiBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIG1hcC4gKi9cXG4jbWFwW2RhdGEtdi03MjU1Y2UxNF0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cXG5odG1sW2RhdGEtdi03MjU1Y2UxNF0sXFxuYm9keVtkYXRhLXYtNzI1NWNlMTRdIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI1NWNlMTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyNTVjZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzI1NWNlMTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS04IHAtM1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgbWItMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJOYW1lOlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnpvbmUuem9uZV9uYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ6b25lLnpvbmVfbmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlpvbmUgTmFtZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uem9uZS56b25lX25hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uem9uZSwgXCJ6b25lX25hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIlwiIH0gfSwgW192bS5fdihcIkFkZHJlc3M6XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnpvbmUuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ6b25lLmFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlpvbmUgQWRkcmVzc1wiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS56b25lLmFkZHJlc3MgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uem9uZSwgXCJhZGRyZXNzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1wbGFjZW1lbnRcIjogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJHZXQgbWFyayBvbiB0aGUgbWFwXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldExhdExvbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE3cHhcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiwgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU2V0IE1hcmtlcjpcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwibWFwXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvbiBcIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZURlbGl2ZXJ5Wm9uZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkFkZCBab25lXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG1iLTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2FkbWluL2RlbGl2ZXJ5LXpvbmVzXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgfSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJBZGQgRGVsaXZlcnkgWm9uZVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyNTVjZTE0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RlbGl2ZXJ5Wm9uZXNBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyNTVjZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzI1NWNlMTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MjU1Y2UxNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MjU1Y2UxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MjU1Y2UxNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI1NWNlMTQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzI1NWNlMTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvZGVsaXZlcnlwaWNrdXB6b25lcy9kZWxpdmVyeVpvbmVzQWRkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kZWxpdmVyeVpvbmVzQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcyNTVjZTE0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MjU1Y2UxNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGVsaXZlcnlab25lc0FkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI1NWNlMTQmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==