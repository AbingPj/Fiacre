(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/adminOrgProfile2"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map3_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map3.vue */ "./resources/js/backend/admin-org-components/profile/map3.vue");
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
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_2__["default"]()
    };
  },
  created: function created() {
    this.LogoPreview = this.propsorg.atr_logo_link;
    this.org = this.propsorg;
    this.getStates();
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
      var _this2 = this;

      axios.get("/states").then(function (res) {
        _this2.states = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    fetchOptions: function fetchOptions(search, loading) {
      var _this3 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this3.getCities(search);
      }, 300);
    },
    getCities: function getCities() {
      var _arguments = arguments,
          _this4 = this;

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
                  _this4.cities = res.data;
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
      var _this5 = this;

      LoadingOverlay();
      var formBody = new FormData(); // for (var key in this.org) {
      // 	if (this.org[key] !== null) {
      // 		formBody.append(key, this.org[key]);
      // 	}
      // }
      // if (this.image_file) {
      // 	formBody.append("image_file", this.image_file);
      // }

      formBody.append("org_street", this.org.org_street);
      formBody.append("org_cityprov", this.org.org_cityprov);
      formBody.append("org_state", this.org.org_state);
      formBody.append("org_zipcode", this.org.org_zipcode);
      formBody.append("org_contact_land", this.org.org_contact_land);
      formBody.append("org_contact_mobile", this.org.org_contact_mobile);
      axios.post("/admin/org/api/updateOrganization", formBody, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        window.location.href = "/admin/org/profile";
      })["catch"](function (err) {
        LoadingOverlayHider();
        console.error(err);

        if (err.response) {
          _this5.errors.record(err.response.data.errors);

          _this5.showErrorMessage(_this5.errors.getArrayOfMessages());

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group[data-v-3e695213] {\n  margin-bottom: 1rem;\n}\n.input-group-text[data-v-3e695213] {\n  background: #d9dfe2;\n}\n.text-success[data-v-3e695213] {\n  color: #339f25 !important;\n}\n.btn-success-1[data-v-3e695213] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}\n.btn-upload[data-v-3e695213] {\n  margin-right: 10px;\n}\n.btn-upload i[data-v-3e695213] {\n  font-size: 50px;\n}\n.btn-success-2[data-v-3e695213] {\n  color: gray !important;\n  background-color: rgba(51, 159, 37, 0.3) !important;\n  border-color: rgba(51, 159, 37, 0.5) !important;\n}\n#preview img[data-v-3e695213] {\n  width: 110px;\n  height: 90px;\n  object-fit: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vs__dropdown-toggle {\n\tborder-radius: 0 !important;\n}\n.vs__search {\n\tline-height: 1.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _c("i", { staticClass: "fas fa-sitemap mr-3" }),
          _vm._v(" " + _vm._s(_vm.org.org_name) + "\n\t\t\t\t")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row mt-4",
        staticStyle: { "font-family": "Source Sans Pro, sans-serif !important" }
      },
      [
        _c("div", { staticClass: "col-md-7" }, [
          _c("h4", [
            _vm._v("\n\t\t\t\t\tFiacre ID: "),
            _c("b", [_vm._v(_vm._s(_vm.propsorg.org_optionc_id))])
          ]),
          _vm._v(" "),
          _c("h5", [_vm._v("email: " + _vm._s(_vm.propsorg.org_email))]),
          _vm._v(" "),
          _c("h5", [_vm._v("type: " + _vm._s(_vm.propsorg.atr_type_label))]),
          _vm._v(" "),
          _c("h6", [
            _vm._v("Contact Person: " + _vm._s(_vm.propsorg.atr_contact_person))
          ]),
          _vm._v(" "),
          _c("h6", [_vm._v("Address: " + _vm._s(_vm.propsorg.atr_address))]),
          _vm._v(" "),
          _vm._m(0),
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
              attrs: { id: "type", name: "type", type: "text", readonly: "" },
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
          _vm._m(1),
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
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5 mb-1" }, [
      _c("h4", [_vm._v("Contact Numbers")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/backend/admin-org-components/profile/index.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/index.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3e695213&scoped=true& */ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& */ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e695213",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/admin-org-components/profile/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=style&index=1&id=3e695213&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_3e695213_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3e695213&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/index.vue?vue&type=template&id=3e695213&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3e695213_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/map3.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/map3.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map3.vue?vue&type=template&id=9e4926b4& */ "./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4&");
/* harmony import */ var _map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map3.vue?vue&type=script&lang=js& */ "./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/admin-org-components/profile/map3.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map3.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./map3.vue?vue&type=template&id=9e4926b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/admin-org-components/profile/map3.vue?vue&type=template&id=9e4926b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_map3_vue_vue_type_template_id_9e4926b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/YTk0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT9mNWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzY5NjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/ZDg5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT84NTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/NTAxOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT85YTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzJiNDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/NjZlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT81MmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9tYXAzLnZ1ZT9hMmJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/Mjg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUEscUJBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxlQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FBSUEsZ0JBSkE7QUFLQSxnQkFMQTtBQU1BLHVCQU5BO0FB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QUF6QixHQUFrQyxDQUFsQyxJQUF1QyxJQUEzQyxFQUFpRDtBQUM3QyxZQUFNRCxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLENBQWI7O0FBQ0EsaUNBQWtCSyxJQUFsQiwyQkFBd0I7QUFBbkIsY0FBTUUsR0FBRyxZQUFUO0FBQ0RKLGFBQUcsR0FBR0EsR0FBRyxHQUFHLEtBQUtLLEdBQUwsQ0FBU0QsR0FBVCxDQUFaO0FBQ0EsV0FBQyxJQUFEO0FBQ0g7QUFDSjs7QUFDRCxhQUFPSixHQUFQO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsVUFBSU0sR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxtQ0FBa0JLLElBQWxCLDhCQUF3QjtBQUFuQixjQUFNRSxHQUFHLGNBQVQ7QUFDRDtBQUNBO0FBQ0E7QUFDQUUsYUFBRyxDQUFDQyxJQUFKLENBQVMsS0FBS0YsR0FBTCxDQUFTRCxHQUFULENBQVQ7QUFDSDtBQUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvYi9hZG1pbk9yZ1Byb2ZpbGUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zaXRlbWFwIG1yLTNcIj48L2k+IHt7IG9yZy5vcmdfbmFtZSB9fVxyXG5cdFx0XHRcdDwvaDI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzcz1cInJvdyBtdC00XCJcclxuXHRcdFx0c3R5bGU9XCJmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuXHRcdFx0XHQ8aDQ+XHJcblx0XHRcdFx0XHRGaWFjcmUgSUQ6IDxiPnt7IHByb3Bzb3JnLm9yZ19vcHRpb25jX2lkIH19PC9iPlxyXG5cdFx0XHRcdDwvaDQ+XHJcblx0XHRcdFx0PGg1PmVtYWlsOiB7eyBwcm9wc29yZy5vcmdfZW1haWwgfX08L2g1PlxyXG5cdFx0XHRcdDxoNT50eXBlOiB7eyBwcm9wc29yZy5hdHJfdHlwZV9sYWJlbCB9fTwvaDU+XHJcblx0XHRcdFx0PGg2PkNvbnRhY3QgUGVyc29uOiB7eyBwcm9wc29yZy5hdHJfY29udGFjdF9wZXJzb24gfX08L2g2PlxyXG5cdFx0XHRcdDxoNj5BZGRyZXNzOiB7eyBwcm9wc29yZy5hdHJfYWRkcmVzcyB9fTwvaDY+XHJcblx0XHRcdFx0PCEtLSA8aDY+RGlvY2VzZToge3sgcHJvcHNvcmcub3JnX2Rpb2Nlc2UgfX08L2g2PiAtLT5cclxuXHRcdFx0XHQ8IS0tIDxoNj5XZWJzaXRlOiB7eyBwcm9wc29yZy5vcmdfd2Vic2l0ZSB9fTwvaDY+IC0tPlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtNSBtYi0xXCI+XHJcblx0XHRcdFx0XHQ8aDQ+QWRkcmVzczwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+U3RyZWV0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19zdHJlZXRcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInR5cGVcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwidHlwZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0cmVhZG9ubHlcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+VG93bi9Db3VudHkvQ2l0eTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0QHNlYXJjaD1cImZldGNoT3B0aW9uc1wiXHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2NpdHlwcm92XCJcclxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJjaXRpZXNcIlxyXG5cdFx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6ZmlsdGVyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6dGFnZ2FibGU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwdXNoLXRhZ3M9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnNlbGVjdC1vbi10YWI9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlN0YXRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDwhLS0gPHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0OnJlZHVjZT1cIihzdGF0ZSkgPT4gc3RhdGUuaWRcIlxyXG5cdFx0XHRcdFx0XHQ6b3B0aW9ucz1cInN0YXRlc1wiXHJcblx0XHRcdFx0XHRcdDpjbGVhcmFibGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHQ+PC92LXNlbGVjdD4gLS0+XHJcblx0XHRcdFx0XHQ8IS0tIDxyZWdpb24tc2VsZWN0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0Y291bnRyeT1cIlVuaXRlZCBTdGF0ZXNcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0OmNvdW50cnlOYW1lPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpyZWdpb25OYW1lPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpyZWdpb249XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdGVcIlxyXG5cdFx0XHRcdFx0Lz4gLS0+XHJcblx0XHRcdFx0XHQ8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKHN0YXRlKSA9PiBzdGF0ZS5pc28yXCJcclxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJzdGF0ZXNcIlxyXG5cdFx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6ZmlsdGVyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6dGFnZ2FibGU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwdXNoLXRhZ3M9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnNlbGVjdC1vbi10YWI9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlppcGNvZGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3ppcGNvZGVcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0Pk1hcCBMb2NhdGlvbiA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfbGF0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhdGl0dWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlYWRvbmx5XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfbG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxvbmdpdHVkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWFkb25seVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgQGNsaWNrPVwib3Blbk1hcCgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyLWFsdCBtci0yXCI+PC9pPiBTZXQgTWFwXHJcblx0XHRcdFx0XHRcdFx0XHRMb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcblx0XHRcdFx0XHQ8T3JnTWFwIHJlZj1cInJlZk9yZ01hcFwiPjwvT3JnTWFwPlxyXG5cdFx0XHRcdDwvZGl2PiAtLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtNSBtYi0xXCI+XHJcblx0XHRcdFx0XHQ8aDQ+Q29udGFjdCBOdW1iZXJzPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5MYW5kbGluZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8dnVlLXBob25lLW51bWJlci1pbnB1dFxyXG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwib25VcGRhdGVcIlxyXG5cdFx0XHRcdFx0XHQ6ZGVmYXVsdC1jb3VudHJ5LWNvZGU9XCJkZWZhdWx0Q291bnRyeVwiXHJcblx0XHRcdFx0XHRcdG5vLWNvdW50cnktc2VsZWN0b3JcclxuXHRcdFx0XHRcdFx0OmVycm9yPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY29udGFjdF9sYW5kXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiJ3JvdW5kZWQtMCdcIlxyXG5cdFx0XHRcdFx0XHQ6dHJhbnNsYXRpb25zPVwie1xyXG5cdFx0XHRcdFx0XHRcdHBob25lTnVtYmVyTGFiZWw6ICdMYW5kbGluZSBOdW1iZXInLFxyXG5cdFx0XHRcdFx0XHR9XCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdnVlLXBob25lLW51bWJlci1pbnB1dD5cclxuXHJcblx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ0ZXh0LWxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+LjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkICE9IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+Q29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Nb2JpbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHZ1ZS1waG9uZS1udW1iZXItaW5wdXRcclxuXHRcdFx0XHRcdFx0QHVwZGF0ZT1cIm9uVXBkYXRlMlwiXHJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0bm8tY291bnRyeS1zZWxlY3RvclxyXG5cdFx0XHRcdFx0XHQ6ZXJyb3I9XCJyZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY29udGFjdF9tb2JpbGVcIlxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PC92dWUtcGhvbmUtbnVtYmVyLWlucHV0PlxyXG5cdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1saWdodFwiXHJcblx0XHRcdFx0XHRcdDpjbGFzcz1cInJlc3VsdHMyLmlzVmFsaWQgPT0gZmFsc2UgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ1wiXHJcblx0XHRcdFx0XHRcdD4uPC9sYWJlbFxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1kYW5nZXJcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJyZXN1bHRzMi5pc1ZhbGlkICE9IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+Q29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG5cdFx0XHRcdDxociAvPlxyXG5cdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdGNsYXNzPVwibXItMiBidG4gYnRuLWluZm8gcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdEBjbGljaz1cInVwZGF0ZU9yZ2FuaXphdGlvbigpXCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zYXZlIG1yLTNcIj48L2k+IFNhdmUgQ2hhbmdlc1xyXG5cdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgT3JnTWFwIGZyb20gXCIuL21hcDMudnVlXCI7XHJcblx0aW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0T3JnTWFwOiBPcmdNYXAsXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IFtcInByb3Bzb3JnXCJdLFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRlbWFpbDogXCJcIixcclxuXHRcdFx0XHRvcmc6IHt9LFxyXG5cdFx0XHRcdGltYWdlX2ZpbGU6IG51bGwsXHJcblx0XHRcdFx0c3RhdGVzOiBbXSxcclxuXHRcdFx0XHRjaXRpZXM6IFtdLFxyXG5cdFx0XHRcdExvZ29QcmV2aWV3OiBudWxsLFxyXG5cdFx0XHRcdGRlZmF1bHRDb3VudHJ5OiBcIlVTXCIsXHJcblx0XHRcdFx0cmVzdWx0czoge30sXHJcblx0XHRcdFx0cmVzdWx0czI6IHt9LFxyXG5cdFx0XHRcdGVycm9yczogbmV3IEVycm9ycygpLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHR0aGlzLkxvZ29QcmV2aWV3ID0gdGhpcy5wcm9wc29yZy5hdHJfbG9nb19saW5rO1xyXG5cdFx0XHR0aGlzLm9yZyA9IHRoaXMucHJvcHNvcmc7XHJcblx0XHRcdHRoaXMuZ2V0U3RhdGVzKCk7XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0XHRcdGxhdDogTnVtYmVyKHRoaXMucHJvcHNvcmcub3JnX2xhdCksXHJcblx0XHRcdFx0XHRsbmc6IE51bWJlcih0aGlzLnByb3Bzb3JnLm9yZ19sbmcpLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZPcmdNYXAuTWFya2VyTG9jYXRpb24gPSBtYXJrZXI7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZPcmdNYXAuY2VudGVyID0gbWFya2VyO1xyXG5cdFx0XHR9LCAxMDAwKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRvbmx5TnVtYmVyKCRldmVudCkge1xyXG5cdFx0XHRcdC8vY29uc29sZS5sb2coJGV2ZW50LmtleUNvZGUpOyAvL2tleUNvZGVzIHZhbHVlXHJcblx0XHRcdFx0bGV0IGtleUNvZGUgPSAkZXZlbnQua2V5Q29kZSA/ICRldmVudC5rZXlDb2RlIDogJGV2ZW50LndoaWNoO1xyXG5cdFx0XHRcdGlmIChrZXlDb2RlIDwgNDggfHwga2V5Q29kZSA+IDU3KSB7XHJcblx0XHRcdFx0XHQvLyA0NiBpcyBkb3RcclxuXHRcdFx0XHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0b3Blbk1hcCgpIHtcclxuXHRcdFx0XHR2YXIgYWRkcmVzcyA9XHJcblx0XHRcdFx0XHR0aGlzLm9yZy5vcmdfc3RyZWV0ICtcclxuXHRcdFx0XHRcdFwiLCBcIiArXHJcblx0XHRcdFx0XHR0aGlzLm9yZy5vcmdfY2l0eXByb3YgK1xyXG5cdFx0XHRcdFx0XCIsIFwiICtcclxuXHRcdFx0XHRcdHRoaXMub3JnLm9yZ19zdGF0ZSArXHJcblx0XHRcdFx0XHRcIiwgXCIgK1xyXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX3ppcGNvZGU7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZPcmdNYXAuZ2VvY29kaW5nKGFkZHJlc3MpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblVwZGF0ZShwYXlsb2FkKSB7XHJcblx0XHRcdFx0dGhpcy5yZXN1bHRzID0gcGF5bG9hZDtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25VcGRhdGUyKHBheWxvYWQpIHtcclxuXHRcdFx0XHR0aGlzLnJlc3VsdHMyID0gcGF5bG9hZDtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25GaWxlQ2hhbmdlKGUpIHtcclxuXHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuXHRcdFx0XHR0aGlzLmltYWdlX2ZpbGUgPSBmaWxlO1xyXG5cdFx0XHRcdHRoaXMuTG9nb1ByZXZpZXcgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRTdGF0ZXMoKSB7XHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXCIvc3RhdGVzXCIpXHJcblx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RhdGVzID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZldGNoT3B0aW9ucyhzZWFyY2gsIGxvYWRpbmcpIHtcclxuXHRcdFx0XHRpZiAodGhpcy50aW1lcikge1xyXG5cdFx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG5cdFx0XHRcdFx0dGhpcy50aW1lciA9IG51bGw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmdldENpdGllcyhzZWFyY2gpO1xyXG5cdFx0XHRcdH0sIDMwMCk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRhc3luYyBnZXRDaXRpZXMoc2VhcmNoaW5nID0gbnVsbCkge1xyXG5cdFx0XHRcdGxldCBwYXJhbTtcclxuXHRcdFx0XHRwYXJhbSA9IHtcclxuXHRcdFx0XHRcdHNlYXJjaDogc2VhcmNoaW5nLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0YXdhaXQgYXhpb3Moe1xyXG5cdFx0XHRcdFx0bWV0aG9kOiBcImdldFwiLFxyXG5cdFx0XHRcdFx0dXJsOiBcIi9kYXRhL3NlYXJjaGNpdGllc1wiLFxyXG5cdFx0XHRcdFx0cGFyYW1zOiBwYXJhbSxcclxuXHRcdFx0XHR9KS50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuY2l0aWVzID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1cGRhdGVPcmdhbml6YXRpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdHZhciBmb3JtQm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cdFx0XHRcdC8vIGZvciAodmFyIGtleSBpbiB0aGlzLm9yZykge1xyXG5cdFx0XHRcdC8vIFx0aWYgKHRoaXMub3JnW2tleV0gIT09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBcdFx0Zm9ybUJvZHkuYXBwZW5kKGtleSwgdGhpcy5vcmdba2V5XSk7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdC8vIGlmICh0aGlzLmltYWdlX2ZpbGUpIHtcclxuXHRcdFx0XHQvLyBcdGZvcm1Cb2R5LmFwcGVuZChcImltYWdlX2ZpbGVcIiwgdGhpcy5pbWFnZV9maWxlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZChcIm9yZ19zdHJlZXRcIiwgdGhpcy5vcmcub3JnX3N0cmVldCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfY2l0eXByb3ZcIiwgdGhpcy5vcmcub3JnX2NpdHlwcm92KTtcclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZChcIm9yZ19zdGF0ZVwiLCB0aGlzLm9yZy5vcmdfc3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kKFwib3JnX3ppcGNvZGVcIiwgdGhpcy5vcmcub3JnX3ppcGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kKFwib3JnX2NvbnRhY3RfbGFuZFwiLCB0aGlzLm9yZy5vcmdfY29udGFjdF9sYW5kKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZChcIm9yZ19jb250YWN0X21vYmlsZVwiLCB0aGlzLm9yZy5vcmdfY29udGFjdF9tb2JpbGUpO1xyXG5cclxuXHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0LnBvc3QoYC9hZG1pbi9vcmcvYXBpL3VwZGF0ZU9yZ2FuaXphdGlvbmAsIGZvcm1Cb2R5LCB7XHJcblx0XHRcdFx0XHRcdGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgfSxcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvYWRtaW4vb3JnL3Byb2ZpbGVcIjtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGVyKCk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0aWYgKGVyci5yZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcblx0XHRcdFx0XHRcdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcclxuXHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKHNoaXQpO1xyXG5cdFx0XHRcdHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGxvYWRsaXN0KCkge1xyXG5cdFx0XHRcdHZhciBwYWdlTGlzdCA9IFtdO1xyXG5cdFx0XHRcdHZhciBiZWdpbiA9ICh0aGlzLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBlclBhZ2U7XHJcblx0XHRcdFx0dmFyIGVuZCA9IGJlZ2luICsgdGhpcy5wZXJQYWdlO1xyXG5cdFx0XHRcdHZhciBhbGxvcmRlcnMgPSB0aGlzLnNlYXJjaGVkQ3VzdG9tZXJzO1xyXG5cdFx0XHRcdHZhciBwYWdlTGlzdCA9IGFsbG9yZGVycy5zbGljZShiZWdpbiwgZW5kKTtcclxuXHRcdFx0XHRyZXR1cm4gcGFnZUxpc3Q7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRyb3dzKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNlYXJjaGVkQ3VzdG9tZXJzLmxlbmd0aDtcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHQvLyBtb3VudGVkKCkge1xyXG5cdFx0Ly8gICAgIGFsZXJ0KFwiUFJPRFVDVFMgQ09NUE9ORU5UIE1PVU5URURcIik7XHJcblx0XHQvLyB9LFxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC52c19fZHJvcGRvd24tdG9nZ2xlIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuXHR9XHJcblx0LnZzX19zZWFyY2gge1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcclxuXHR9XHJcbjwvc3R5bGU+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmZvcm0tZ3JvdXAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1ncm91cC10ZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6ICNkOWRmZTI7XHJcblx0fVxyXG5cclxuXHQudGV4dC1zdWNjZXNzIHtcclxuXHRcdGNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMSB7XHJcblx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXVwbG9hZCB7XHJcblx0XHQvLyAgIGxpbmUtaGVpZ2h0OiA1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHRcdGkge1xyXG5cdFx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMiB7XHJcblx0XHRjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XHJcblx0XHQvLyA1MSwgMTU5LCAzN1xyXG5cclxuXHRcdGJvcmRlci1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQjcHJldmlldyB7XHJcblx0XHRpbWcge1xyXG5cdFx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRcdGhlaWdodDogOTBweDtcclxuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4XCI+XHJcblx0XHQ8Z21hcC1tYXBcclxuXHRcdFx0cmVmPVwieHl6XCJcclxuXHRcdFx0OmNlbnRlcj1cImNlbnRlclwiXHJcblx0XHRcdDp6b29tPVwiOFwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiXHJcblx0XHRcdDpvcHRpb25zPVwie1xyXG5cdFx0XHRcdHpvb21Db250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG5cdFx0XHRcdHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRyb3RhdGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0fVwiXHJcblx0XHQ+XHJcblx0XHRcdDxnbWFwLW1hcmtlclxyXG5cdFx0XHRcdDpwb3NpdGlvbj1cIk1hcmtlckxvY2F0aW9uXCJcclxuXHRcdFx0XHQ6Y2xpY2thYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0OmRyYWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdEBkcmFnPVwiZHJhZ2dpbmcoJGV2ZW50LCBmYWxzZSlcIlxyXG5cdFx0XHRcdGljb249XCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL2JsdWUtZG90LnBuZ1wiXHJcblx0XHRcdD5cclxuICAgICAgICAgICAgXHQ8Z21hcC1pbmZvLXdpbmRvd1xyXG5cdFx0XHRcdFx0Om9wdGlvbnM9XCJ7XHJcblx0XHRcdFx0XHRcdHBpeGVsT2Zmc2V0OiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogYERyYWcgbWUhYCxcclxuXHRcdFx0XHRcdFx0ekluZGV4OiAyLFxyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvZ21hcC1pbmZvLXdpbmRvdz5cclxuXHRcdFx0PC9nbWFwLW1hcmtlcj5cclxuXHRcdDwvZ21hcC1tYXA+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRNYXJrZXJMb2NhdGlvbjoge30sXHJcblx0XHRcdFx0Y2VudGVyOiB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZW9jb2RpbmcoZGF0YSkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuXHRcdFx0XHRsZXQgYWRkcmVzcyA9IG51bGw7XHJcblx0XHRcdFx0Z2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3M6IGRhdGEgfSwgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdHNbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXJrZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsYXQ6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXHJcblx0XHRcdFx0XHRcdFx0XHRsbmc6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCksXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNlbnRlciA9IG1hcmtlcjtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZHJhZ2dpbmcobG9jYXRpb24sIGlzU2V0LCBmcm9tdG8pIHtcclxuXHRcdFx0XHRsZXQgbWFya2VyID0ge307XHJcblx0XHRcdFx0bWFya2VyID0ge1xyXG5cdFx0XHRcdFx0bGF0OiBsb2NhdGlvbi5sYXRMbmcubGF0KCksXHJcblx0XHRcdFx0XHRsbmc6IGxvY2F0aW9uLmxhdExuZy5sbmcoKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tZ3JvdXBbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uaW5wdXQtZ3JvdXAtdGV4dFtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGJhY2tncm91bmQ6ICNkOWRmZTI7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBjb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMVtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XFxuLmJ0bi11cGxvYWRbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5idG4tdXBsb2FkIGlbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5idG4tc3VjY2Vzcy0yW2RhdGEtdi0zZTY5NTIxM10ge1xcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuMykgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MSwgMTU5LCAzNywgMC41KSAhaW1wb3J0YW50O1xcbn1cXG4jcHJldmlldyBpbWdbZGF0YS12LTNlNjk1MjEzXSB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnNfX2Ryb3Bkb3duLXRvZ2dsZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbn1cXG4udnNfX3NlYXJjaCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2U2OTUyMTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNpdGVtYXAgbXItM1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ub3JnLm9yZ19uYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IG10LTRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LWZhbWlseVwiOiBcIlNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdEZpYWNyZSBJRDogXCIpLFxuICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9wc29yZy5vcmdfb3B0aW9uY19pZCkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcImVtYWlsOiBcIiArIF92bS5fcyhfdm0ucHJvcHNvcmcub3JnX2VtYWlsKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDVcIiwgW192bS5fdihcInR5cGU6IFwiICsgX3ZtLl9zKF92bS5wcm9wc29yZy5hdHJfdHlwZV9sYWJlbCkpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg2XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNvbnRhY3QgUGVyc29uOiBcIiArIF92bS5fcyhfdm0ucHJvcHNvcmcuYXRyX2NvbnRhY3RfcGVyc29uKSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihcIkFkZHJlc3M6IFwiICsgX3ZtLl9zKF92bS5wcm9wc29yZy5hdHJfYWRkcmVzcykpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJTdHJlZXRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3N0cmVldCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19zdHJlZXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJ0eXBlXCIsIG5hbWU6IFwidHlwZVwiLCB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX3N0cmVldCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3N0cmVldFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlRvd24vQ291bnR5L0NpdHlcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2l0aWVzLFxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0YWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibm8tZHJvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIFwicHVzaC10YWdzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdC1vbi10YWJcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc2VhcmNoOiBfdm0uZmV0Y2hPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jaXR5cHJvdixcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfY2l0eXByb3ZcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19jaXR5cHJvdlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiU3RhdGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmlzbzJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0YWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibm8tZHJvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIFwicHVzaC10YWdzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdC1vbi10YWJcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfc3RhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19zdGF0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiWmlwY29kZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfemlwY29kZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ196aXBjb2RlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX3ppcGNvZGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ196aXBjb2RlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTGFuZGxpbmVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2dWUtcGhvbmUtbnVtYmVyLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWNvdW50cnktY29kZVwiOiBfdm0uZGVmYXVsdENvdW50cnksXG4gICAgICAgICAgICAgICAgICBcIm5vLWNvdW50cnktc2VsZWN0b3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyTGFiZWw6IFwiTGFuZGxpbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZTogX3ZtLm9uVXBkYXRlIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jb250YWN0X2xhbmQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2NvbnRhY3RfbGFuZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbGFuZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMuaXNWYWxpZCAhPSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcImQtYmxvY2tcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyIGlzIG5vdCB2YWxpZCBpbiBVUy5cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW192bS5fdihcIk1vYmlsZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZ1ZS1waG9uZS1udW1iZXItaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtY291bnRyeS1jb2RlXCI6IF92bS5kZWZhdWx0Q291bnRyeSxcbiAgICAgICAgICAgICAgICAgIFwibm8tY291bnRyeS1zZWxlY3RvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB1cGRhdGU6IF92bS5vblVwZGF0ZTIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jb250YWN0X21vYmlsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbW9iaWxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMyLmlzVmFsaWQgIT0gZmFsc2UgPyBcImQtbm9uZVwiIDogXCJkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250YWN0IE51bWJlciBpcyBub3QgdmFsaWQgaW4gVVMuXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuIGJ0bi1pbmZvIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlT3JnYW5pemF0aW9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNhdmUgbXItM1wiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFNhdmUgQ2hhbmdlc1xcblxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC01IG1iLTFcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJBZGRyZXNzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm10LTUgbWItMVwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyc1wiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIzMDBweFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJnbWFwLW1hcFwiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcInh5elwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBjZW50ZXI6IF92bS5jZW50ZXIsXG4gICAgICAgICAgICB6b29tOiA4LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZSxcbiAgICAgICAgICAgICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICBzdHJlZXRWaWV3Q29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIHJvdGF0ZUNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICBmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJnbWFwLW1hcmtlclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBfdm0uTWFya2VyTG9jYXRpb24sXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpY29uOiBcImh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vbWFwZmlsZXMvbXMvaWNvbnMvYmx1ZS1kb3QucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBkcmFnOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZHJhZ2dpbmcoJGV2ZW50LCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZ21hcC1pbmZvLXdpbmRvd1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGl4ZWxPZmZzZXQ6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIkRyYWcgbWUhXCIsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogMlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTY5NTIxMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNlNjk1MjEzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZTY5NTIxMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZTY5NTIxMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZTY5NTIxMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNjk1MjEzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNlNjk1MjEzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U2OTUyMTMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllNDkyNmI0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXAzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZTQ5MjZiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZTQ5MjZiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZTQ5MjZiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWU0OTI2YjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWU0OTI2YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllNDkyNmI0JlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=