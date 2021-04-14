(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/OrgShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      MarkerLocation: {},
      center: {
        lat: 43.2994285,
        lng: -74.217933
      }
    };
  },
  methods: {
    geocoding: function geocoding(data) {
      var self = this;
      var geocoder = new google.maps.Geocoder();
      var address = null;
      geocoder.geocode({
        address: data
      }, function (results, status) {
        if (status == "OK") {
          if (results[0]) {
            var marker = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };
            self.center = marker;
            self.MarkerLocation = marker;
            self.$parent.org.org_lat = marker.lat;
            self.$parent.org.org_lng = marker.lng;
          }
        }
      }); // }
    },
    dragging: function dragging(location, isSet, fromto) {
      var marker = {};
      marker = {
        lat: location.latLng.lat(),
        lng: location.latLng.lng()
      };
      this.$parent.org.org_lat = marker.lat;
      this.$parent.org.org_lng = marker.lng;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map3_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map3.vue */ "./resources/js/backend/components/organization/map3.vue");
/* harmony import */ var _errorClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errorClass */ "./resources/js/backend/errorClass.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    OrgMap: _map3_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: ["propsorg"],
  data: function data() {
    return {
      email: "",
      org: {},
      image_file: null,
      states: [],
      cities: [],
      LogoPreview: null,
      defaultCountry: "US",
      results: {},
      results2: {},
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_2__["default"](),
      products: []
    };
  },
  created: function created() {
    this.LogoPreview = this.propsorg.atr_logo_link;
    this.org = this.propsorg;
    this.getStates();
    this.getProducts(this.propsorg.id);
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      var marker = {
        lat: Number(_this.propsorg.org_lat),
        lng: Number(_this.propsorg.org_lng)
      };
      _this.$refs.refOrgMap.MarkerLocation = marker;
      _this.$refs.refOrgMap.center = marker;
    }, 1000);
  },
  methods: {
    getProducts: function getProducts(id) {
      var _this2 = this;

      axios.get("/admin/api/getOrgAssignedProducts/".concat(id)).then(function (res) {
        _this2.products = res.data;
      })["catch"](function (err) {
        console.error(err);
        alert("Something went wrong");
      });
    },
    getSubPrice: function getSubPrice(item) {
      var data = item.subscirption_price;

      if (data != "no subscription yet") {
        return "$ " + data + "/" + item.weeks + " weeks";
      }

      return data;
    },
    onlyNumber: function onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    openMap: function openMap() {
      var address = this.org.org_street + ", " + this.org.org_cityprov + ", " + this.org.org_state + ", " + this.org.org_zipcode;
      this.$refs.refOrgMap.geocoding(address);
    },
    onUpdate: function onUpdate(payload) {
      this.results = payload;
    },
    onUpdate2: function onUpdate2(payload) {
      this.results2 = payload;
    },
    onFileChange: function onFileChange(e) {
      //   console.log(e);
      var file = e.target.files[0];
      this.image_file = file;
      this.LogoPreview = URL.createObjectURL(file);
    },
    getStates: function getStates() {
      var _this3 = this;

      axios.get("/states").then(function (res) {
        _this3.states = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    fetchOptions: function fetchOptions(search, loading) {
      var _this4 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this4.getCities(search);
      }, 300);
    },
    getCities: function getCities() {
      var _arguments = arguments,
          _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var searching, param;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                searching = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : null;
                param = {
                  search: searching
                };
                _context.next = 4;
                return axios({
                  method: "get",
                  url: "/data/searchcities",
                  params: param
                }).then(function (res) {
                  _this5.cities = res.data;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    updateOrganization: function updateOrganization() {
      var _this6 = this;

      var formBody = new FormData();

      for (var key in this.org) {
        if (this.org[key] !== null) {
          formBody.append(key, this.org[key]);
        }
      }

      if (this.image_file) {
        formBody.append("image_file", this.image_file);
      }

      axios.post("/admin/api/updateOrganization", formBody, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        window.location.href = "/admin/organization";
      })["catch"](function (err) {
        console.error(err);

        if (err.response) {
          _this6.errors.record(err.response.data.errors);

          _this6.showErrorMessage(_this6.errors.getArrayOfMessages());

          window.scrollTo(0, 0);
        }
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    }
  },
  computed: {
    loadlist: function loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      var allorders = this.searchedCustomers;
      var pageList = allorders.slice(begin, end);
      return pageList;
    },
    rows: function rows() {
      return this.searchedCustomers.length;
    }
  } // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group[data-v-6b808939] {\n  margin-bottom: 1rem;\n}\n.input-group-text[data-v-6b808939] {\n  background: #d9dfe2;\n}\n.text-success[data-v-6b808939] {\n  color: #339f25 !important;\n}\n.btn-success-1[data-v-6b808939] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}\n.btn-upload[data-v-6b808939] {\n  margin-right: 10px;\n}\n.btn-upload i[data-v-6b808939] {\n  font-size: 50px;\n}\n.btn-success-2[data-v-6b808939] {\n  color: gray !important;\n  background-color: rgba(51, 159, 37, 0.3) !important;\n  border-color: rgba(51, 159, 37, 0.5) !important;\n}\n#preview img[data-v-6b808939] {\n  width: 110px;\n  height: 90px;\n  object-fit: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vs__dropdown-toggle {\n\tborder-radius: 0 !important;\n}\n.vs__search {\n\tline-height: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticStyle: { width: "100%", height: "300px" } },
    [
      _c(
        "gmap-map",
        {
          ref: "xyz",
          staticStyle: { width: "100%", height: "100%" },
          attrs: {
            center: _vm.center,
            zoom: 8,
            options: {
              zoomControl: true,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: true
            }
          }
        },
        [
          _c(
            "gmap-marker",
            {
              attrs: {
                position: _vm.MarkerLocation,
                clickable: true,
                draggable: true,
                icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              },
              on: {
                drag: function($event) {
                  return _vm.dragging($event, false)
                }
              }
            },
            [
              _c("gmap-info-window", {
                attrs: {
                  options: {
                    pixelOffset: { width: 0, height: 0 },
                    content: "Drag me!",
                    zIndex: 2
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "d-flex flex-column min-vh-100" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row mt-4",
        staticStyle: { "font-family": "Source Sans Pro, sans-serif !important" }
      },
      [
        _c("div", { staticClass: "col-md-7 col-sm-12" }, [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [
              _vm._v("Organization Name (Parish/School)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_name,
                  expression: "org.org_name"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: {
                id: "name",
                name: "name",
                type: "text",
                placeholder: ""
              },
              domProps: { value: _vm.org.org_name },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_name", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [
              _vm._v("Email (must be unique)")
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_email,
                  expression: "org.org_email"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: {
                id: "email",
                name: "email",
                type: "email",
                placeholder: "example@gmail.com",
                readonly: ""
              },
              domProps: { value: _vm.org.org_email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_email", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("OptionC ID")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_optionc_id,
                  expression: "org.org_optionc_id"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { id: "optionc_id", name: "optionc_id", type: "text" },
              domProps: { value: _vm.org.org_optionc_id },
              on: {
                keypress: _vm.onlyNumber,
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_optionc_id", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [
              _vm._v("Organization Type")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "custom-control custom-radio custom-control-inline"
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.org.org_type,
                      expression: "org.org_type"
                    }
                  ],
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    id: "customRadioInline1",
                    name: "customRadioInline1",
                    value: "1"
                  },
                  domProps: { checked: _vm._q(_vm.org.org_type, "1") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.org, "org_type", "1")
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "customRadioInline1" }
                  },
                  [_vm._v("Parish/Church")]
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "custom-control custom-radio custom-control-inline"
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.org.org_type,
                      expression: "org.org_type"
                    }
                  ],
                  staticClass: "custom-control-input",
                  attrs: {
                    type: "radio",
                    id: "customRadioInline2",
                    name: "customRadioInline1",
                    value: "2"
                  },
                  domProps: { checked: _vm._q(_vm.org.org_type, "2") },
                  on: {
                    change: function($event) {
                      return _vm.$set(_vm.org, "org_type", "2")
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-control-label",
                    attrs: { for: "customRadioInline2" }
                  },
                  [_vm._v("School")]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Street")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_street,
                  expression: "org.org_street"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { id: "type", name: "type", type: "text" },
              domProps: { value: _vm.org.org_street },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_street", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "name" } }, [
                _vm._v("Town/County/City")
              ]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  options: _vm.cities,
                  multiple: false,
                  disabled: false,
                  clearable: true,
                  searchable: true,
                  filterable: true,
                  taggable: true,
                  "no-drop": false,
                  "push-tags": true,
                  "select-on-tab": true
                },
                on: { search: _vm.fetchOptions },
                model: {
                  value: _vm.org.org_cityprov,
                  callback: function($$v) {
                    _vm.$set(_vm.org, "org_cityprov", $$v)
                  },
                  expression: "org.org_cityprov"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "name" } }, [_vm._v("State")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  label: "name",
                  reduce: function(state) {
                    return state.iso2
                  },
                  options: _vm.states,
                  multiple: false,
                  disabled: false,
                  clearable: true,
                  searchable: true,
                  filterable: true,
                  taggable: true,
                  "no-drop": false,
                  "push-tags": true,
                  "select-on-tab": true
                },
                model: {
                  value: _vm.org.org_state,
                  callback: function($$v) {
                    _vm.$set(_vm.org, "org_state", $$v)
                  },
                  expression: "org.org_state"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Zipcode")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_zipcode,
                  expression: "org.org_zipcode"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_zipcode },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_zipcode", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-4" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.org.org_lat,
                      expression: "org.org_lat"
                    }
                  ],
                  staticClass: "form-control rounded-0",
                  attrs: {
                    placeholder: "Latitude",
                    type: "text",
                    readonly: ""
                  },
                  domProps: { value: _vm.org.org_lat },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.org, "org_lat", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.org.org_lng,
                      expression: "org.org_lng"
                    }
                  ],
                  staticClass: "form-control rounded-0",
                  attrs: {
                    placeholder: "Longitude",
                    type: "text",
                    readonly: ""
                  },
                  domProps: { value: _vm.org.org_lng },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.org, "org_lng", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info",
                    on: {
                      click: function($event) {
                        return _vm.openMap()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-map-marker-alt mr-2" }),
                    _vm._v(" Set Map\n\t\t\t\t\t\t\t\tLocation\n\t\t\t\t\t\t\t")
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mt-3" },
            [_c("OrgMap", { ref: "refOrgMap" })],
            1
          ),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Landline")]),
              _vm._v(" "),
              _c("vue-phone-number-input", {
                class: "rounded-0",
                attrs: {
                  "default-country-code": _vm.defaultCountry,
                  "no-country-selector": "",
                  error: _vm.results.isValid == false,
                  translations: {
                    phoneNumberLabel: "Landline Number"
                  }
                },
                on: { update: _vm.onUpdate },
                model: {
                  value: _vm.org.org_contact_land,
                  callback: function($$v) {
                    _vm.$set(_vm.org, "org_contact_land", $$v)
                  },
                  expression: "org.org_contact_land"
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "text-light",
                  class: _vm.results.isValid == false ? "d-none" : "d-block"
                },
                [_vm._v(".")]
              ),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "text-danger",
                  class: _vm.results.isValid != false ? "d-none" : "d-block"
                },
                [_vm._v("Contact Number is not valid in US.")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "name" } }, [_vm._v("Mobile")]),
              _vm._v(" "),
              _c("vue-phone-number-input", {
                attrs: {
                  "default-country-code": _vm.defaultCountry,
                  "no-country-selector": "",
                  error: _vm.results2.isValid == false
                },
                on: { update: _vm.onUpdate2 },
                model: {
                  value: _vm.org.org_contact_mobile,
                  callback: function($$v) {
                    _vm.$set(_vm.org, "org_contact_mobile", $$v)
                  },
                  expression: "org.org_contact_mobile"
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "text-light",
                  class: _vm.results2.isValid == false ? "d-none" : "d-block"
                },
                [_vm._v(".")]
              ),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "text-danger",
                  class: _vm.results2.isValid != false ? "d-none" : "d-block"
                },
                [_vm._v("Contact Number is not valid in US.")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Title")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_contact_title,
                  expression: "org.org_contact_title"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_contact_title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_contact_title", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("First Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_contact_fname,
                  expression: "org.org_contact_fname"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_contact_fname },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_contact_fname", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Last Name")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_contact_lname,
                  expression: "org.org_contact_lname"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_contact_lname },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_contact_lname", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Suffix")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_contact_suffix,
                  expression: "org.org_contact_suffix"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_contact_suffix },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_contact_suffix", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _vm._m(5),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Diocese")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_diocese,
                  expression: "org.org_diocese"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_diocese },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_diocese", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "name" } }, [_vm._v("Website")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.org.org_website,
                  expression: "org.org_website"
                }
              ],
              staticClass: "form-control rounded-0",
              attrs: { type: "text" },
              domProps: { value: _vm.org.org_website },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.org, "org_website", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "exampleFormControlFile1" } }, [
              _vm._v("Logo")
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control-file",
              attrs: {
                type: "file",
                id: "exampleFormControlFile1",
                accept: "image/png, image/jpeg, image/jpg"
              },
              on: { change: _vm.onFileChange }
            }),
            _vm._v(" "),
            _vm.LogoPreview
              ? _c("img", {
                  staticClass: "mt-1 mb-3",
                  staticStyle: { width: "150px", height: "110px" },
                  attrs: { src: _vm.LogoPreview, alt: "" }
                })
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-5 col-sm-12" }, [
          _c(
            "table",
            {
              staticClass: "table table-hover",
              attrs: { id: "org-products-table" }
            },
            [
              _vm._m(6),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.products, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", { staticStyle: { width: "70px" } }, [
                      _c("img", {
                        staticStyle: {
                          width: "60px",
                          height: "40px",
                          "object-fit": "cover"
                        },
                        attrs: { src: item.image_link, alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(item.name) + " "),
                      _c("br"),
                      _vm._v(
                        "\n                                - " +
                          _vm._s(_vm.getSubPrice(item)) +
                          "\n\t\t\t\t\t\t\t"
                      )
                    ])
                  ])
                }),
                0
              )
            ]
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-7" }, [
        _c("hr"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "mr-2 btn btn-info rounded-0",
            on: {
              click: function($event) {
                return _vm.updateOrganization()
              }
            }
          },
          [
            _c("i", { staticClass: "fas fa-save mr-3" }),
            _vm._v(" Save Changes\n\t\t\t\t")
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _c("i", { staticClass: "fas fa-sitemap mr-3" }),
          _vm._v(" View Organization\n\t\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { attrs: { for: "name" } }, [
      _vm._v("Map Location "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Contact Numbers")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Contact Person")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Others")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { colspan: "2" } }, [
          _c("h4", [_vm._v("Assigned Products")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/organization/map3.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/organization/map3.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map3.vue?vue&type=template&id=f03710da& */ "./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da&");
/* harmony import */ var _map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map3.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/organization/map3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map3.vue?vue&type=template&id=f03710da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/map3.vue?vue&type=template&id=f03710da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_f03710da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/organization/show.vue":
/*!***************************************************************!*\
  !*** ./resources/js/backend/components/organization/show.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=6b808939&scoped=true& */ "./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& */ "./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b808939",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/organization/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=style&index=1&id=6b808939&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_1_id_6b808939_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=6b808939&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/organization/show.vue?vue&type=template&id=6b808939&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_6b808939_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9tYXAzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vc2hvdy52dWU/ODE1NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9zaG93LnZ1ZT85ZmMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlPzkzY2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vc2hvdy52dWU/OGIxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAzLnZ1ZT8wNjNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlPzQ4MjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vbWFwMy52dWU/MzEwNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAzLnZ1ZT83ZGI2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlPzQ0NzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmdhbml6YXRpb24vc2hvdy52dWU/MGE1YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9zaG93LnZ1ZT9kNTczIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlPzNhNTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvZXJyb3JDbGFzcy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5Iiwic3RyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImdldCIsImFyciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQSxHQU5BO0FBT0E7QUFDQSxhQURBLHFCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BYkEsRUFKQSxDQWtCQTtBQUNBLEtBcEJBO0FBcUJBLFlBckJBLG9CQXFCQSxRQXJCQSxFQXFCQSxLQXJCQSxFQXFCQSxNQXJCQSxFQXFCQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUE3QkE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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N0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL09yZ1Nob3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4XCI+XHJcblx0XHQ8Z21hcC1tYXBcclxuXHRcdFx0cmVmPVwieHl6XCJcclxuXHRcdFx0OmNlbnRlcj1cImNlbnRlclwiXHJcblx0XHRcdDp6b29tPVwiOFwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiXHJcblx0XHRcdDpvcHRpb25zPVwie1xyXG5cdFx0XHRcdHpvb21Db250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG5cdFx0XHRcdHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRyb3RhdGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0fVwiXHJcblx0XHQ+XHJcblx0XHRcdDxnbWFwLW1hcmtlclxyXG5cdFx0XHRcdDpwb3NpdGlvbj1cIk1hcmtlckxvY2F0aW9uXCJcclxuXHRcdFx0XHQ6Y2xpY2thYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0OmRyYWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdEBkcmFnPVwiZHJhZ2dpbmcoJGV2ZW50LCBmYWxzZSlcIlxyXG5cdFx0XHRcdGljb249XCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL2JsdWUtZG90LnBuZ1wiXHJcblx0XHRcdD5cclxuICAgICAgICAgICAgXHQ8Z21hcC1pbmZvLXdpbmRvd1xyXG5cdFx0XHRcdFx0Om9wdGlvbnM9XCJ7XHJcblx0XHRcdFx0XHRcdHBpeGVsT2Zmc2V0OiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogYERyYWcgbWUhYCxcclxuXHRcdFx0XHRcdFx0ekluZGV4OiAyLFxyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvZ21hcC1pbmZvLXdpbmRvdz5cclxuXHRcdFx0PC9nbWFwLW1hcmtlcj5cclxuXHRcdDwvZ21hcC1tYXA+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRNYXJrZXJMb2NhdGlvbjoge30sXHJcblx0XHRcdFx0Y2VudGVyOiB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZW9jb2RpbmcoZGF0YSkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuXHRcdFx0XHRsZXQgYWRkcmVzcyA9IG51bGw7XHJcblx0XHRcdFx0Z2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3M6IGRhdGEgfSwgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdHNbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXJrZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsYXQ6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXHJcblx0XHRcdFx0XHRcdFx0XHRsbmc6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCksXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNlbnRlciA9IG1hcmtlcjtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZHJhZ2dpbmcobG9jYXRpb24sIGlzU2V0LCBmcm9tdG8pIHtcclxuXHRcdFx0XHRsZXQgbWFya2VyID0ge307XHJcblx0XHRcdFx0bWFya2VyID0ge1xyXG5cdFx0XHRcdFx0bGF0OiBsb2NhdGlvbi5sYXRMbmcubGF0KCksXHJcblx0XHRcdFx0XHRsbmc6IGxvY2F0aW9uLmxhdExuZy5sbmcoKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zaXRlbWFwIG1yLTNcIj48L2k+IFZpZXcgT3JnYW5pemF0aW9uXHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzPVwicm93IG10LTRcIlxyXG5cdFx0XHRzdHlsZT1cImZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNyBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Pcmdhbml6YXRpb24gTmFtZSAoUGFyaXNoL1NjaG9vbCk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX25hbWVcIlxyXG5cdFx0XHRcdFx0XHRpZD1cIm5hbWVcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5FbWFpbCAobXVzdCBiZSB1bmlxdWUpPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19lbWFpbFwiXHJcblx0XHRcdFx0XHRcdGlkPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImV4YW1wbGVAZ21haWwuY29tXCJcclxuXHRcdFx0XHRcdFx0cmVhZG9ubHlcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+T3B0aW9uQyBJRDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfb3B0aW9uY19pZFwiXHJcblx0XHRcdFx0XHRcdGlkPVwib3B0aW9uY19pZFwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJvcHRpb25jX2lkXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRAa2V5cHJlc3M9XCJvbmx5TnVtYmVyXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+T3JnYW5pemF0aW9uIFR5cGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXJhZGlvIGN1c3RvbS1jb250cm9sLWlubGluZVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdGlkPVwiY3VzdG9tUmFkaW9JbmxpbmUxXCJcclxuXHRcdFx0XHRcdFx0XHRuYW1lPVwiY3VzdG9tUmFkaW9JbmxpbmUxXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCJcclxuXHRcdFx0XHRcdFx0XHR2YWx1ZT1cIjFcIlxyXG5cdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3R5cGVcIlxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cImN1c3RvbVJhZGlvSW5saW5lMVwiXHJcblx0XHRcdFx0XHRcdFx0PlBhcmlzaC9DaHVyY2g8L2xhYmVsXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRpZD1cImN1c3RvbVJhZGlvSW5saW5lMlwiXHJcblx0XHRcdFx0XHRcdFx0bmFtZT1cImN1c3RvbVJhZGlvSW5saW5lMVwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcblx0XHRcdFx0XHRcdFx0dmFsdWU9XCIyXCJcclxuXHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ190eXBlXCJcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21SYWRpb0lubGluZTJcIlxyXG5cdFx0XHRcdFx0XHRcdD5TY2hvb2w8L2xhYmVsXHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtdC01IG1iLTFcIj5cclxuXHRcdFx0XHRcdDxoND5BZGRyZXNzPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5TdHJlZXQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0cmVldFwiXHJcblx0XHRcdFx0XHRcdGlkPVwidHlwZVwiXHJcblx0XHRcdFx0XHRcdG5hbWU9XCJ0eXBlXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Ub3duL0NvdW50eS9DaXR5PC9sYWJlbD5cclxuXHRcdFx0XHRcdDx2LXNlbGVjdFxyXG5cdFx0XHRcdFx0XHRAc2VhcmNoPVwiZmV0Y2hPcHRpb25zXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY2l0eXByb3ZcIlxyXG5cdFx0XHRcdFx0XHQ6b3B0aW9ucz1cImNpdGllc1wiXHJcblx0XHRcdFx0XHRcdDptdWx0aXBsZT1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xlYXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpzZWFyY2hhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpmaWx0ZXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDp0YWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6bm8tZHJvcD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnB1c2gtdGFncz1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VsZWN0LW9uLXRhYj1cInRydWVcIlxyXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+U3RhdGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PCEtLSA8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHQ6cmVkdWNlPVwiKHN0YXRlKSA9PiBzdGF0ZS5pZFwiXHJcblx0XHRcdFx0XHRcdDpvcHRpb25zPVwic3RhdGVzXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cImZhbHNlXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PiAtLT5cclxuXHRcdFx0XHRcdDwhLS0gPHJlZ2lvbi1zZWxlY3RcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRjb3VudHJ5PVwiVW5pdGVkIFN0YXRlc1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHQ6Y291bnRyeU5hbWU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnJlZ2lvbk5hbWU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnJlZ2lvbj1cIm9yZy5vcmdfc3RhdGVcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlbGVjdCBTdGF0ZVwiXHJcblx0XHRcdFx0XHQvPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKHN0YXRlKSA9PiBzdGF0ZS5pc28yXCJcclxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJzdGF0ZXNcIlxyXG5cdFx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6ZmlsdGVyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6dGFnZ2FibGU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwdXNoLXRhZ3M9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnNlbGVjdC1vbi10YWI9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlppcGNvZGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3ppcGNvZGVcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdD5NYXAgTG9jYXRpb24gPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPio8L3NwYW4+PC9sYWJlbFxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2xhdFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMYXRpdHVkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWFkb25seVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2xuZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJMb25naXR1ZGVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0cmVhZG9ubHlcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC00XCI+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4taW5mb1wiIEBjbGljaz1cIm9wZW5NYXAoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgbXItMlwiPjwvaT4gU2V0IE1hcFxyXG5cdFx0XHRcdFx0XHRcdFx0TG9jYXRpb25cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtM1wiPlxyXG5cdFx0XHRcdFx0PE9yZ01hcCByZWY9XCJyZWZPcmdNYXBcIj48L09yZ01hcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtNSBtYi0xXCI+XHJcblx0XHRcdFx0XHQ8aDQ+Q29udGFjdCBOdW1iZXJzPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5MYW5kbGluZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8dnVlLXBob25lLW51bWJlci1pbnB1dFxyXG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwib25VcGRhdGVcIlxyXG5cdFx0XHRcdFx0XHQ6ZGVmYXVsdC1jb3VudHJ5LWNvZGU9XCJkZWZhdWx0Q291bnRyeVwiXHJcblx0XHRcdFx0XHRcdG5vLWNvdW50cnktc2VsZWN0b3JcclxuXHRcdFx0XHRcdFx0OmVycm9yPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY29udGFjdF9sYW5kXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiJ3JvdW5kZWQtMCdcIlxyXG5cdFx0XHRcdFx0XHQ6dHJhbnNsYXRpb25zPVwie1xyXG5cdFx0XHRcdFx0XHRcdHBob25lTnVtYmVyTGFiZWw6ICdMYW5kbGluZSBOdW1iZXInLFxyXG5cdFx0XHRcdFx0XHR9XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdnVlLXBob25lLW51bWJlci1pbnB1dD5cclxuXHJcblx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ0ZXh0LWxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+LjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkICE9IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+Q29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Nb2JpbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHZ1ZS1waG9uZS1udW1iZXItaW5wdXRcclxuXHRcdFx0XHRcdFx0QHVwZGF0ZT1cIm9uVXBkYXRlMlwiXHJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0bm8tY291bnRyeS1zZWxlY3RvclxyXG5cdFx0XHRcdFx0XHQ6ZXJyb3I9XCJyZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY29udGFjdF9tb2JpbGVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PC92dWUtcGhvbmUtbnVtYmVyLWlucHV0PlxyXG5cdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1saWdodFwiXHJcblx0XHRcdFx0XHRcdDpjbGFzcz1cInJlc3VsdHMyLmlzVmFsaWQgPT0gZmFsc2UgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ1wiXHJcblx0XHRcdFx0XHRcdD4uPC9sYWJlbFxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJyZXN1bHRzMi5pc1ZhbGlkICE9IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+Q29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm10LTUgbWItMVwiPlxyXG5cdFx0XHRcdFx0PGg0PkNvbnRhY3QgUGVyc29uPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+VGl0bGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2NvbnRhY3RfdGl0bGVcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jb250YWN0X2ZuYW1lXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jb250YWN0X2xuYW1lXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+U3VmZml4PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jb250YWN0X3N1ZmZpeFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtdC01IG1iLTFcIj5cclxuXHRcdFx0XHRcdDxoND5PdGhlcnM8L2g0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5EaW9jZXNlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19kaW9jZXNlXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+V2Vic2l0ZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfd2Vic2l0ZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwiZXhhbXBsZUZvcm1Db250cm9sRmlsZTFcIj5Mb2dvPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiZmlsZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sLWZpbGVcIlxyXG5cdFx0XHRcdFx0XHRpZD1cImV4YW1wbGVGb3JtQ29udHJvbEZpbGUxXCJcclxuXHRcdFx0XHRcdFx0YWNjZXB0PVwiaW1hZ2UvcG5nLCBpbWFnZS9qcGVnLCBpbWFnZS9qcGdcIlxyXG5cdFx0XHRcdFx0XHRAY2hhbmdlPVwib25GaWxlQ2hhbmdlXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHYtaWY9XCJMb2dvUHJldmlld1wiXHJcblx0XHRcdFx0XHRcdDpzcmM9XCJMb2dvUHJldmlld1wiXHJcblx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDE1MHB4OyBoZWlnaHQ6IDExMHB4XCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJtdC0xIG1iLTNcIlxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNSBjb2wtc20tMTJcIj5cclxuXHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJtYi0xXCI+XHJcblxyXG5cdFx0XHRcdDwvZGl2PiAtLT5cclxuXHRcdFx0XHQ8dGFibGUgaWQ9XCJvcmctcHJvZHVjdHMtdGFibGVcIiBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyXCI+XHJcblx0XHRcdFx0XHQ8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdDx0cj5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY29sc3Bhbj1cIjJcIj48aDQ+QXNzaWduZWQgUHJvZHVjdHM8L2g0PjwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0PHRib2R5PlxyXG5cdFx0XHRcdFx0XHQ8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PHRkIHN0eWxlPVwid2lkdGg6NzBweDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWdcclxuXHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cIml0ZW0uaW1hZ2VfbGlua1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD1cIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwid2lkdGg6IDYwcHg7IGhlaWdodDogNDBweDsgb2JqZWN0LWZpdDogY292ZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD5cclxuXHRcdFx0XHRcdFx0XHRcdHt7IGl0ZW0ubmFtZSB9fSA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLSB7eyBnZXRTdWJQcmljZShpdGVtKSB9fVxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdGNsYXNzPVwibXItMiBidG4gYnRuLWluZm8gcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cInVwZGF0ZU9yZ2FuaXphdGlvbigpXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zYXZlIG1yLTNcIj48L2k+IFNhdmUgQ2hhbmdlc1xyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgT3JnTWFwIGZyb20gXCIuL21hcDMudnVlXCI7XHJcblx0aW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0T3JnTWFwOiBPcmdNYXAsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IFtcInByb3Bzb3JnXCJdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRlbWFpbDogXCJcIixcclxuXHRcdFx0XHRvcmc6IHt9LFxyXG5cdFx0XHRcdGltYWdlX2ZpbGU6IG51bGwsXHJcblx0XHRcdFx0c3RhdGVzOiBbXSxcclxuXHRcdFx0XHRjaXRpZXM6IFtdLFxyXG5cdFx0XHRcdExvZ29QcmV2aWV3OiBudWxsLFxyXG5cdFx0XHRcdGRlZmF1bHRDb3VudHJ5OiBcIlVTXCIsXHJcblx0XHRcdFx0cmVzdWx0czoge30sXHJcblx0XHRcdFx0cmVzdWx0czI6IHt9LFxyXG5cdFx0XHRcdGVycm9yczogbmV3IEVycm9ycygpLFxyXG5cdFx0XHRcdHByb2R1Y3RzOiBbXSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5Mb2dvUHJldmlldyA9IHRoaXMucHJvcHNvcmcuYXRyX2xvZ29fbGluaztcclxuXHRcdFx0dGhpcy5vcmcgPSB0aGlzLnByb3Bzb3JnO1xyXG4gICAgICAgICAgICB0aGlzLmdldFN0YXRlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RzKHRoaXMucHJvcHNvcmcuaWQpO1xyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdFx0XHRsYXQ6IE51bWJlcih0aGlzLnByb3Bzb3JnLm9yZ19sYXQpLFxyXG5cdFx0XHRcdFx0bG5nOiBOdW1iZXIodGhpcy5wcm9wc29yZy5vcmdfbG5nKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLmNlbnRlciA9IG1hcmtlcjtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0UHJvZHVjdHMoaWQpIHtcclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LmdldChgL2FkbWluL2FwaS9nZXRPcmdBc3NpZ25lZFByb2R1Y3RzLyR7aWR9YClcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5wcm9kdWN0cyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0YWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdWJQcmljZShpdGVtKSB7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSBpdGVtLnN1YnNjaXJwdGlvbl9wcmljZTtcclxuXHRcdFx0XHRpZiAoZGF0YSAhPSBcIm5vIHN1YnNjcmlwdGlvbiB5ZXRcIikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIFwiJCBcIiArIGRhdGEgKyBcIi9cIiArIGl0ZW0ud2Vla3MgKyBcIiB3ZWVrc1wiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25seU51bWJlcigkZXZlbnQpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCRldmVudC5rZXlDb2RlKTsgLy9rZXlDb2RlcyB2YWx1ZVxyXG5cdFx0XHRcdGxldCBrZXlDb2RlID0gJGV2ZW50LmtleUNvZGUgPyAkZXZlbnQua2V5Q29kZSA6ICRldmVudC53aGljaDtcclxuXHRcdFx0XHRpZiAoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1Nykge1xyXG5cdFx0XHRcdFx0Ly8gNDYgaXMgZG90XHJcblx0XHRcdFx0XHQkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW5NYXAoKSB7XHJcblx0XHRcdFx0dmFyIGFkZHJlc3MgPVxyXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX3N0cmVldCArXHJcblx0XHRcdFx0XHRcIiwgXCIgK1xyXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX2NpdHlwcm92ICtcclxuXHRcdFx0XHRcdFwiLCBcIiArXHJcblx0XHRcdFx0XHR0aGlzLm9yZy5vcmdfc3RhdGUgK1xyXG5cdFx0XHRcdFx0XCIsIFwiICtcclxuXHRcdFx0XHRcdHRoaXMub3JnLm9yZ196aXBjb2RlO1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLmdlb2NvZGluZyhhZGRyZXNzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25VcGRhdGUocGF5bG9hZCkge1xyXG5cdFx0XHRcdHRoaXMucmVzdWx0cyA9IHBheWxvYWQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVXBkYXRlMihwYXlsb2FkKSB7XHJcblx0XHRcdFx0dGhpcy5yZXN1bHRzMiA9IHBheWxvYWQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uRmlsZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0Ly8gICBjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblx0XHRcdFx0dGhpcy5pbWFnZV9maWxlID0gZmlsZTtcclxuXHRcdFx0XHR0aGlzLkxvZ29QcmV2aWV3ID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U3RhdGVzKCkge1xyXG5cdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFwiL3N0YXRlc1wiKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlcyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmZXRjaE9wdGlvbnMoc2VhcmNoLCBsb2FkaW5nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZXIpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRDaXRpZXMoc2VhcmNoKTtcclxuXHRcdFx0XHR9LCAzMDApO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXN5bmMgZ2V0Q2l0aWVzKHNlYXJjaGluZyA9IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgcGFyYW07XHJcblx0XHRcdFx0cGFyYW0gPSB7XHJcblx0XHRcdFx0XHRzZWFyY2g6IHNlYXJjaGluZyxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdHVybDogXCIvZGF0YS9zZWFyY2hjaXRpZXNcIixcclxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW0sXHJcblx0XHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNpdGllcyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dXBkYXRlT3JnYW5pemF0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBmb3JtQm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiB0aGlzLm9yZykge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMub3JnW2tleV0gIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0Zm9ybUJvZHkuYXBwZW5kKGtleSwgdGhpcy5vcmdba2V5XSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICh0aGlzLmltYWdlX2ZpbGUpIHtcclxuXHRcdFx0XHRcdGZvcm1Cb2R5LmFwcGVuZChcImltYWdlX2ZpbGVcIiwgdGhpcy5pbWFnZV9maWxlKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHQucG9zdChgL2FkbWluL2FwaS91cGRhdGVPcmdhbml6YXRpb25gLCBmb3JtQm9keSwge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL29yZ2FuaXphdGlvblwiO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0aWYgKGVyci5yZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuXHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKHNoaXQpO1xyXG5cdFx0XHRcdHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGxvYWRsaXN0KCkge1xyXG5cdFx0XHRcdHZhciBwYWdlTGlzdCA9IFtdO1xyXG5cdFx0XHRcdHZhciBiZWdpbiA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBlclBhZ2U7XHJcblx0XHRcdFx0dmFyIGVuZCA9IGJlZ2luICsgdGhpcy5wZXJQYWdlO1xyXG5cdFx0XHRcdHZhciBhbGxvcmRlcnMgPSB0aGlzLnNlYXJjaGVkQ3VzdG9tZXJzO1xyXG5cdFx0XHRcdHZhciBwYWdlTGlzdCA9IGFsbG9yZGVycy5zbGljZShiZWdpbiwgZW5kKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFnZUxpc3Q7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyb3dzKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNlYXJjaGVkQ3VzdG9tZXJzLmxlbmd0aDtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHQvLyBtb3VudGVkKCkge1xyXG5cdFx0Ly8gICAgIGFsZXJ0KFwiUFJPRFVDVFMgQ09NUE9ORU5UIE1PVU5URURcIik7XHJcblx0XHQvLyB9LFxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC52c19fZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZzX19zZWFyY2gge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmZvcm0tZ3JvdXAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1ncm91cC10ZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6ICNkOWRmZTI7XHJcblx0fVxyXG5cclxuXHQudGV4dC1zdWNjZXNzIHtcclxuXHRcdGNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMSB7XHJcblx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXVwbG9hZCB7XHJcblx0XHQvLyAgIGxpbmUtaGVpZ2h0OiA1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHRcdGkge1xyXG5cdFx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMiB7XHJcblx0XHRjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XHJcblx0XHQvLyA1MSwgMTU5LCAzN1xyXG5cclxuXHRcdGJvcmRlci1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQjcHJldmlldyB7XHJcblx0XHRpbWcge1xyXG5cdFx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRcdGhlaWdodDogOTBweDtcclxuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWdyb3VwW2RhdGEtdi02YjgwODkzOV0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLmlucHV0LWdyb3VwLXRleHRbZGF0YS12LTZiODA4OTM5XSB7XFxuICBiYWNrZ3JvdW5kOiAjZDlkZmUyO1xcbn1cXG4udGV4dC1zdWNjZXNzW2RhdGEtdi02YjgwODkzOV0ge1xcbiAgY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XFxuLmJ0bi1zdWNjZXNzLTFbZGF0YS12LTZiODA4OTM5XSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tdXBsb2FkW2RhdGEtdi02YjgwODkzOV0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uYnRuLXVwbG9hZCBpW2RhdGEtdi02YjgwODkzOV0ge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMltkYXRhLXYtNmI4MDg5MzldIHtcXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuI3ByZXZpZXcgaW1nW2RhdGEtdi02YjgwODkzOV0ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnZzX19kcm9wZG93bi10b2dnbGUge1xcblxcdGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXG59XFxuLnZzX19zZWFyY2gge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NmI4MDg5MzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTZiODA4OTM5Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NmI4MDg5MzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImdtYXAtbWFwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwieHl6XCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNlbnRlcjogX3ZtLmNlbnRlcixcbiAgICAgICAgICAgIHpvb206IDgsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgcm90YXRlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImdtYXAtbWFya2VyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IF92bS5NYXJrZXJMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IFwiaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9tcy9pY29ucy9ibHVlLWRvdC5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kcmFnZ2luZygkZXZlbnQsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJnbWFwLWluZm8td2luZG93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwaXhlbE9mZnNldDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHJhZyBtZSFcIixcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdyBtdC00XCIsXG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1mYW1pbHlcIjogXCJTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTcgY29sLXNtLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJPcmdhbml6YXRpb24gTmFtZSAoUGFyaXNoL1NjaG9vbClcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfbmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19uYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX25hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19uYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkVtYWlsIChtdXN0IGJlIHVuaXF1ZSlcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfZW1haWwsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfZW1haWxcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJleGFtcGxlQGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3JnLm9yZ19lbWFpbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2VtYWlsXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiT3B0aW9uQyBJRFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfb3B0aW9uY19pZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19vcHRpb25jX2lkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwib3B0aW9uY19pZFwiLCBuYW1lOiBcIm9wdGlvbmNfaWRcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX29wdGlvbmNfaWQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlwcmVzczogX3ZtLm9ubHlOdW1iZXIsXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfb3B0aW9uY19pZFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJPcmdhbml6YXRpb24gVHlwZVwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3VzdG9tUmFkaW9JbmxpbmUxXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VzdG9tUmFkaW9JbmxpbmUxXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0ub3JnLm9yZ190eXBlLCBcIjFcIikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3R5cGVcIiwgXCIxXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiY3VzdG9tUmFkaW9JbmxpbmUxXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJQYXJpc2gvQ2h1cmNoXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sIGN1c3RvbS1yYWRpbyBjdXN0b20tY29udHJvbC1pbmxpbmVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3R5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX3R5cGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3VzdG9tUmFkaW9JbmxpbmUyXCIsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VzdG9tUmFkaW9JbmxpbmUxXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGNoZWNrZWQ6IF92bS5fcShfdm0ub3JnLm9yZ190eXBlLCBcIjJcIikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3R5cGVcIiwgXCIyXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbC1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiY3VzdG9tUmFkaW9JbmxpbmUyXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTY2hvb2xcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJTdHJlZXRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3N0cmVldCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19zdHJlZXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0eXBlXCIsIG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfc3RyZWV0IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfc3RyZWV0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiVG93bi9Db3VudHkvQ2l0eVwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5jaXRpZXMsXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJuby1kcm9wXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJwdXNoLXRhZ3NcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0LW9uLXRhYlwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBzZWFyY2g6IF92bS5mZXRjaE9wdGlvbnMgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NpdHlwcm92LFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jaXR5cHJvdlwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NpdHlwcm92XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgcmVkdWNlOiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuaXNvMlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zdGF0ZXMsXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjbGVhcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJuby1kcm9wXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJwdXNoLXRhZ3NcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwic2VsZWN0LW9uLXRhYlwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3N0YXRlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19zdGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX3N0YXRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJaaXBjb2RlXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ196aXBjb2RlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX3ppcGNvZGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfemlwY29kZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3ppcGNvZGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2xhdCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfbGF0XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkxhdGl0dWRlXCIsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3JnLm9yZ19sYXQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19sYXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC00XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19sbmcsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2xuZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJMb25naXR1ZGVcIixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX2xuZyB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2xuZ1wiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9wZW5NYXAoKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1hcC1tYXJrZXItYWx0IG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFNldCBNYXBcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRMb2NhdGlvblxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTNcIiB9LFxuICAgICAgICAgICAgW19jKFwiT3JnTWFwXCIsIHsgcmVmOiBcInJlZk9yZ01hcFwiIH0pXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTGFuZGxpbmVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2dWUtcGhvbmUtbnVtYmVyLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWNvdW50cnktY29kZVwiOiBfdm0uZGVmYXVsdENvdW50cnksXG4gICAgICAgICAgICAgICAgICBcIm5vLWNvdW50cnktc2VsZWN0b3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyTGFiZWw6IFwiTGFuZGxpbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZTogX3ZtLm9uVXBkYXRlIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jb250YWN0X2xhbmQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2NvbnRhY3RfbGFuZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbGFuZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMuaXNWYWxpZCAhPSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcImQtYmxvY2tcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyIGlzIG5vdCB2YWxpZCBpbiBVUy5cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW192bS5fdihcIk1vYmlsZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZ1ZS1waG9uZS1udW1iZXItaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtY291bnRyeS1jb2RlXCI6IF92bS5kZWZhdWx0Q291bnRyeSxcbiAgICAgICAgICAgICAgICAgIFwibm8tY291bnRyeS1zZWxlY3RvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB1cGRhdGU6IF92bS5vblVwZGF0ZTIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jb250YWN0X21vYmlsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbW9iaWxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMyLmlzVmFsaWQgIT0gZmFsc2UgPyBcImQtbm9uZVwiIDogXCJkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250YWN0IE51bWJlciBpcyBub3QgdmFsaWQgaW4gVVMuXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfY29udGFjdF90aXRsZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19jb250YWN0X3RpdGxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfdGl0bGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jb250YWN0X3RpdGxlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiRmlyc3QgTmFtZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfY29udGFjdF9mbmFtZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19jb250YWN0X2ZuYW1lXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfZm5hbWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jb250YWN0X2ZuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTGFzdCBOYW1lXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jb250YWN0X2xuYW1lLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbG5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfY29udGFjdF9sbmFtZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2NvbnRhY3RfbG5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJTdWZmaXhcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3Rfc3VmZml4LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3Rfc3VmZml4XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3Rfc3VmZml4IH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfY29udGFjdF9zdWZmaXhcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJEaW9jZXNlXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19kaW9jZXNlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2Rpb2Nlc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfZGlvY2VzZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2Rpb2Nlc2VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJXZWJzaXRlXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ193ZWJzaXRlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX3dlYnNpdGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfd2Vic2l0ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3dlYnNpdGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImV4YW1wbGVGb3JtQ29udHJvbEZpbGUxXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkxvZ29cIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wtZmlsZVwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgIGlkOiBcImV4YW1wbGVGb3JtQ29udHJvbEZpbGUxXCIsXG4gICAgICAgICAgICAgICAgYWNjZXB0OiBcImltYWdlL3BuZywgaW1hZ2UvanBlZywgaW1hZ2UvanBnXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlQ2hhbmdlIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5Mb2dvUHJldmlld1xuICAgICAgICAgICAgICA/IF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTEgbWItM1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTUwcHhcIiwgaGVpZ2h0OiBcIjExMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLkxvZ29QcmV2aWV3LCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNSBjb2wtc20tMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm9yZy1wcm9kdWN0cy10YWJsZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZV9saW5rLCBhbHQ6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhpdGVtLm5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldFN1YlByaWNlKGl0ZW0pKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuIGJ0bi1pbmZvIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlT3JnYW5pemF0aW9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNhdmUgbXItM1wiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFNhdmUgQ2hhbmdlc1xcblxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zaXRlbWFwIG1yLTNcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgVmlldyBPcmdhbml6YXRpb25cXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi0xXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbXG4gICAgICBfdm0uX3YoXCJNYXAgTG9jYXRpb24gXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbX3ZtLl92KFwiKlwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC01IG1iLTFcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDb250YWN0IE51bWJlcnNcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi0xXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ29udGFjdCBQZXJzb25cIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi0xXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiT3RoZXJzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQXNzaWduZWQgUHJvZHVjdHNcIildKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjAzNzEwZGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxmaWFjcmVcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZjAzNzEwZGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZjAzNzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZjAzNzEwZGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWYwMzcxMGRhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2YwMzcxMGRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZ2FuaXphdGlvbi9tYXAzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjAzNzEwZGEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiODA4OTM5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NmI4MDg5MzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2YjgwODkzOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YjgwODkzOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YjgwODkzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YjgwODkzOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmI4MDg5Mzkmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNmI4MDg5MzknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uL3Nob3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD02YjgwODkzOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NmI4MDg5MzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZiODA4OTM5JnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=