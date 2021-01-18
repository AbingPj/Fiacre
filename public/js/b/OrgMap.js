(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/OrgMap"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
      googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo" // googleAPIKEY: process.env.MIX_GOOGLE_API_KEY,

    };
  },
  created: function created() {
    this.loadScript();
  },
  methods: {
    initMap: function initMap() {
      var _this = this;

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
        _this.zone.lat = event.latLng.lat();
        _this.zone.lng = event.latLng.lng();

        _this.addMarker(event.latLng);

        _this.getGeocodingReverse(_this.zone.lat + "," + _this.zone.lng);
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { height: "300px", width: "100%" } }, [
      _c("div", { attrs: { id: "map" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/organization/map.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/organization/map.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.vue?vue&type=template&id=5f37b350& */ "./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350&");
/* harmony import */ var _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/organization/map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map.vue?vue&type=template&id=5f37b350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map.vue?vue&type=template&id=5f37b350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map_vue_vue_type_template_id_5f37b350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vbWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAudnVlPzU2MTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vbWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAudnVlPzNhOWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vbWFwLnZ1ZT8zMWMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0FBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGFBRkE7QUFHQTtBQUNBLHFCQURBO0FBRUEsbUJBRkE7QUFHQSxlQUhBO0FBSUE7QUFKQSxPQUhBO0FBU0EsaUJBVEE7QUFVQSx1RUFWQTtBQVdBLDZEQVhBLENBWUE7O0FBWkE7QUFjQSxHQWhCQTtBQWlCQSxTQWpCQSxxQkFpQkE7QUFDQTtBQUNBLEdBbkJBO0FBb0JBO0FBQ0EsV0FEQSxxQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsZUFEQTtBQUVBO0FBRkEsU0FKQSxDQVNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNB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LEdBQUwsQ0FBU0QsR0FBVCxDQUFaO0FBQ0EsV0FBQyxJQUFEO0FBQ0g7QUFDSjs7QUFDRCxhQUFPSixHQUFQO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsVUFBSU0sR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxtQ0FBa0JLLElBQWxCLDhCQUF3QjtBQUFuQixjQUFNRSxHQUFHLGNBQVQ7QUFDRDtBQUNBO0FBQ0E7QUFDQUUsYUFBRyxDQUFDQyxJQUFKLENBQVMsS0FBS0YsR0FBTCxDQUFTRCxHQUFULENBQVQ7QUFDSDtBQUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvYi9PcmdNYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgc3R5bGU9XCJoZWlnaHQ6MzAwcHg7IHdpZHRoOjEwMCU7XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG1hcmtlcnM6IFtdLFxuXHRcdFx0XHRtYXA6IHt9LFxuXHRcdFx0XHQgIHpvbmU6IHtcblx0XHRcdFx0ICAgIHpvbmVfbmFtZTogXCJcIixcblx0XHRcdFx0ICAgIGFkZHJlc3M6IFwiXCIsXG5cdFx0XHRcdCAgICBsYXQ6IFwiXCIsXG5cdFx0XHRcdCAgICBsbmc6IFwiXCIsXG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0ICB0aW1lcjogbnVsbCxcblx0XHRcdFx0ICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcblx0XHRcdFx0ICBnb29nbGVBUElLRVk6IFwiQUl6YVN5QmNHVnZTOUp2Z1dtTWRGVkViUHhaVFVXVWk5cUp0NFZvXCJcblx0XHRcdFx0Ly8gZ29vZ2xlQVBJS0VZOiBwcm9jZXNzLmVudi5NSVhfR09PR0xFX0FQSV9LRVksXG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHRoaXMubG9hZFNjcmlwdCgpO1xuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0aW5pdE1hcCgpIHtcblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHR2YXIgTmV3WW9ya1N0YXRlID0geyBsYXQ6IDQzLjI5OTQyODUsIGxuZzogLTc0LjIxNzkzMyB9O1xuXHRcdFx0XHR2YXIgVVNBID0geyBsYXQ6IDM3LjA5MDI0LCBsbmc6IC05NS43MTI4OTEgfTtcblx0XHRcdFx0dGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCB7XG5cdFx0XHRcdFx0em9vbTogNCxcblx0XHRcdFx0XHRjZW50ZXI6IFVTQSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gVGhpcyBldmVudCBsaXN0ZW5lciB3aWxsIGNhbGwgYWRkTWFya2VyKCkgd2hlbiB0aGUgbWFwIGlzIGNsaWNrZWQuXG5cdFx0XHRcdHRoaXMubWFwLmFkZExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy56b25lLmxhdCA9IGV2ZW50LmxhdExuZy5sYXQoKTtcblx0XHRcdFx0XHR0aGlzLnpvbmUubG5nID0gZXZlbnQubGF0TG5nLmxuZygpO1xuXHRcdFx0XHRcdHRoaXMuYWRkTWFya2VyKGV2ZW50LmxhdExuZyk7XG5cdFx0XHRcdFx0dGhpcy5nZXRHZW9jb2RpbmdSZXZlcnNlKHRoaXMuem9uZS5sYXQgKyBcIixcIiArIHRoaXMuem9uZS5sbmcpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIEFkZHMgYSBtYXJrZXIgdG8gdGhlIG1hcCBhbmQgcHVzaCB0byB0aGUgYXJyYXkuXG5cdFx0XHRhZGRNYXJrZXIobG9jYXRpb24sIHpvb20gPSBudWxsKSB7XG5cdFx0XHRcdGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoICE9IDApIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWFya2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0dGhpcy5tYXJrZXJzW2ldLnNldE1hcChudWxsKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHNlbGYgPSB0aGlzO1xuXHRcdFx0XHRjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcblx0XHRcdFx0XHRwb3NpdGlvbjogbG9jYXRpb24sXG5cdFx0XHRcdFx0bWFwOiBzZWxmLm1hcCxcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHRcdGlmICh6b29tKSB7XG5cdFx0XHRcdFx0dGhpcy5tYXAuc2V0Wm9vbSh6b29tKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMubWFwLnBhblRvKGxvY2F0aW9uKTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdFpvbmUobGF0aXR1ZGUsIGxvbm5naXR1ZGUpIHtcblx0XHRcdFx0dGhpcy56b25lLmxhdCA9IGxhdGl0dWRlO1xuXHRcdFx0XHR0aGlzLnpvbmUubG5nID0gbG9ubmdpdHVkZTtcblx0XHRcdFx0Y29uc3QgbG9jYXRpb24gPSB7IGxhdDogbGF0aXR1ZGUsIGxuZzogbG9ubmdpdHVkZSB9O1xuXHRcdFx0XHR0aGlzLmFkZE1hcmtlcihsb2NhdGlvbiwgMTQpO1xuXHRcdFx0fSxcblxuXHRcdFx0bG9hZFNjcmlwdCgpIHtcblx0XHRcdFx0aWYgKHdpbmRvdy5nb29nbGUgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0TWFwKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0XHRcdHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aWYgKCF3aW5kb3cuZ29vZ2xlICYmICF3aW5kb3cuZ29vZ2xlLm1hcHMpXG5cdFx0XHRcdFx0XHRyZXR1cm4gdm9pZCBjb25zb2xlLmVycm9yKFwibm8gZ29vZ2xlIG1hcHMgc2NyaXB0IGluY2x1ZGVkXCIpO1xuXHRcdFx0XHRcdHNlbGYuaW5pdE1hcCgpO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXHRcdFx0XHRzY3JpcHQuZGVmZXIgPSB0cnVlO1xuXHRcdFx0XHRzY3JpcHQuc3JjID1cblx0XHRcdFx0XHRcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9XCIgK1xuXHRcdFx0XHRcdHRoaXMuZ29vZ2xlQVBJS0VZICtcblx0XHRcdFx0XHRcIiZsaWJyYXJpZXM9Z2VvbWV0cnlcIjtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9LFxuXG5cblx0XHRcdGdldEdlb2NvZGluZ1JldmVyc2UobGF0bG5nKSB7XG5cdFx0XHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRcdFx0bGV0IHBhcmFtID0ge1xuXHRcdFx0XHRcdGxhdGxuZzogbGF0bG5nLFxuXHRcdFx0XHRcdGtleTogdGhpcy5nb29nbGVBUElLRVksXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0JC5nZXQoXG5cdFx0XHRcdFx0XCJodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uXCIsXG5cdFx0XHRcdFx0cGFyYW0sXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0XHRcdFx0c2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCkuZmFpbChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJlcnJvclwiKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRMYXRMb25nKCkge1xuXHRcdFx0XHRsZXQgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGxldCBwYXJhbSA9IHtcblx0XHRcdFx0XHRhZGRyZXNzOiB0aGlzLnpvbmUuYWRkcmVzcyxcblx0XHRcdFx0XHRrZXk6IHRoaXMuZ29vZ2xlQVBJS0VZLFxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdCQuZ2V0KFxuXHRcdFx0XHRcdFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvblwiLFxuXHRcdFx0XHRcdHBhcmFtLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChyZXMpIHtcblx0XHRcdFx0XHRcdGxldCBsYXQgPSByZXMucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQ7XG5cdFx0XHRcdFx0XHRsZXQgbG5nID0gcmVzLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nO1xuXHRcdFx0XHRcdFx0c2VsZi56b25lLmFkZHJlc3MgPSByZXMucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcblx0XHRcdFx0XHRcdHNlbGYuc2VsZWN0Wm9uZShsYXQsIGxuZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpLmZhaWwoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5fbSgwKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzAwcHhcIiwgd2lkdGg6IFwiMTAwJVwiIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJtYXBcIiB9IH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYzN2IzNTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVmMzdiMzUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVmMzdiMzUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVmMzdiMzUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMzdiMzUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmMzdiMzUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjM3YjM1MCZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGlzIGZpZWxkXCIgKyBmaWVsZClcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgK1wiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGdldEFycmF5T2ZNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIC8vICAgbXNnOiB0aGlzLmdldChrZXkpLFxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9