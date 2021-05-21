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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      edit: false
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
    },
    clickEdit: function clickEdit() {
      this.edit = true;
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
exports.push([module.i, "\n.vs__dropdown-toggle {\n\tborder-radius: 0 !important;\n}\n.vs__search {\n\tline-height: 1.5;\n}\n.input-tel.is-disabled .input-tel__input[data-v-e59be3b4] {\n\tcolor:#333!important;\n}\t\n", ""]);

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
        _c("div", { staticClass: "col-md-9" }, [
          _c("h4", [
            _vm._v("\n\t\t\t\t\tFiacre ID: "),
            _c("b", [_vm._v(_vm._s(_vm.propsorg.org_optionc_id))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row pt-2" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c("h6", [_vm._v("email: " + _vm._s(_vm.propsorg.org_email))]),
              _vm._v(" "),
              _c("h6", [_vm._v("type: " + _vm._s(_vm.propsorg.atr_type_label))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c("h6", [
                _vm._v(
                  "Contact Person: " + _vm._s(_vm.propsorg.atr_contact_person)
                )
              ]),
              _vm._v(" "),
              _c("h6", [_vm._v("Address: " + _vm._s(_vm.propsorg.atr_address))])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success float-right",
                  class: _vm.edit == true ? "d-none" : "",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.clickEdit()
                    }
                  }
                },
                [_vm._v("\n\t\t\t\t\t\tEDIT\n\t\t\t\t\t")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-danger float-right",
                  class: _vm.edit == false ? "d-none" : "",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      _vm.edit = false
                    }
                  }
                },
                [_vm._v("\n\t\t\t\t\t\tCancel\n\t\t\t\t\t")]
              )
            ])
          ]),
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
              attrs: {
                id: "type",
                name: "type",
                type: "text",
                disabled: !_vm.edit == true
              },
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
                  disabled: !_vm.edit == true,
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
                  disabled: !_vm.edit == true,
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
              attrs: { type: "text", disabled: !_vm.edit == true },
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
                staticClass: "landline-tel",
                class: "rounded-0",
                attrs: {
                  "default-country-code": _vm.defaultCountry,
                  "no-country-selector": "",
                  error: _vm.results.isValid == false,
                  translations: {
                    phoneNumberLabel: "Landline Number"
                  },
                  disabled: !_vm.edit == true
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
                staticClass: "mobile-tel",
                attrs: {
                  "default-country-code": _vm.defaultCountry,
                  "no-country-selector": "",
                  error: _vm.results2.isValid == false,
                  disabled: !_vm.edit == true
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
            class: _vm.edit == false ? "d-none" : "",
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
    return _c("div", { staticClass: "col-md-6" }, [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/YTk0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT9mNWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzY5NjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/ZDg5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT84NTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/NTAxOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT85YTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzJiNDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/NjZlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT81MmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9tYXAzLnZ1ZT9hMmJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/Mjg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUEscUJBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxlQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FB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QUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL2FkbWluT3JnUHJvZmlsZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cblx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtc2l0ZW1hcCBtci0zXCI+PC9pPiB7eyBvcmcub3JnX25hbWUgfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3M9XCJyb3cgbXQtNFwiXG5cdFx0XHRzdHlsZT1cImZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC05XCI+XG5cdFx0XHRcdDxoND5cblx0XHRcdFx0XHRGaWFjcmUgSUQ6IDxiPnt7IHByb3Bzb3JnLm9yZ19vcHRpb25jX2lkIH19PC9iPlxuXHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IHB0LTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdDxoNj5lbWFpbDoge3sgcHJvcHNvcmcub3JnX2VtYWlsIH19PC9oNj5cblx0XHRcdFx0XHRcdDxoNj50eXBlOiB7eyBwcm9wc29yZy5hdHJfdHlwZV9sYWJlbCB9fTwvaDY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHQ8aDY+Q29udGFjdCBQZXJzb246IHt7IHByb3Bzb3JnLmF0cl9jb250YWN0X3BlcnNvbiB9fTwvaDY+XG5cdFx0XHRcdFx0XHQ8aDY+QWRkcmVzczoge3sgcHJvcHNvcmcuYXRyX2FkZHJlc3MgfX08L2g2Plx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cblxuXHRcdFx0XHQ8IS0tIDxoNj5EaW9jZXNlOiB7eyBwcm9wc29yZy5vcmdfZGlvY2VzZSB9fTwvaDY+IC0tPlxuXHRcdFx0XHQ8IS0tIDxoNj5XZWJzaXRlOiB7eyBwcm9wc29yZy5vcmdfd2Vic2l0ZSB9fTwvaDY+IC0tPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGg0PkFkZHJlc3M8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJlZGl0ID09IHRydWUgPyAnZC1ub25lJyA6ICcnXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImNsaWNrRWRpdCgpXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRFRElUXG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJlZGl0ID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnJ1wiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0XCJcblx0XHRcdFx0XHRcdEBjbGljaz1cImVkaXQgPSBmYWxzZVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q2FuY2VsXG5cdFx0XHRcdFx0PC9idXR0b24+XHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5TdHJlZXQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RyZWV0XCJcblx0XHRcdFx0XHRcdGlkPVwidHlwZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidHlwZVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Ub3duL0NvdW50eS9DaXR5PC9sYWJlbD5cblx0XHRcdFx0XHQ8di1zZWxlY3Rcblx0XHRcdFx0XHRcdEBzZWFyY2g9XCJmZXRjaE9wdGlvbnNcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY2l0eXByb3ZcIlxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJjaXRpZXNcIlxuXHRcdFx0XHRcdFx0Om11bHRpcGxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6Y2xlYXJhYmxlPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0OmZpbHRlcmFibGU9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdDp0YWdnYWJsZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQ6cHVzaC10YWdzPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6c2VsZWN0LW9uLXRhYj1cInRydWVcIlxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlN0YXRlPC9sYWJlbD5cblx0XHRcdFx0XHQ8IS0tIDx2LXNlbGVjdFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcblx0XHRcdFx0XHRcdDpyZWR1Y2U9XCIoc3RhdGUpID0+IHN0YXRlLmlkXCJcblx0XHRcdFx0XHRcdDpvcHRpb25zPVwic3RhdGVzXCJcblx0XHRcdFx0XHRcdDpjbGVhcmFibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+IC0tPlxuXHRcdFx0XHRcdDwhLS0gPHJlZ2lvbi1zZWxlY3Rcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcblx0XHRcdFx0XHRcdGNvdW50cnk9XCJVbml0ZWQgU3RhdGVzXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxuXHRcdFx0XHRcdFx0OmNvdW50cnlOYW1lPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6cmVnaW9uTmFtZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0OnJlZ2lvbj1cIm9yZy5vcmdfc3RhdGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdGVcIlxuXHRcdFx0XHRcdC8+IC0tPlxuXHRcdFx0XHRcdDx2LXNlbGVjdFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpyZWR1Y2U9XCIoc3RhdGUpID0+IHN0YXRlLmlzbzJcIlxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJzdGF0ZXNcIlxuXHRcdFx0XHRcdFx0Om11bHRpcGxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6Y2xlYXJhYmxlPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0OmZpbHRlcmFibGU9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdDp0YWdnYWJsZT1cInRydWVcIlxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQ6cHVzaC10YWdzPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHQ6c2VsZWN0LW9uLXRhYj1cInRydWVcIlxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlppcGNvZGU8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfemlwY29kZVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiXG5cdFx0XHRcdFx0XHQ+TWFwIExvY2F0aW9uIDxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj4qPC9zcGFuPjwvbGFiZWxcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC00XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2xhdFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhdGl0dWRlXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0cmVhZG9ubHlcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC00XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2xuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxvbmdpdHVkZVwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdHJlYWRvbmx5XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgQGNsaWNrPVwib3Blbk1hcCgpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgbXItMlwiPjwvaT4gU2V0IE1hcFxuXHRcdFx0XHRcdFx0XHRcdExvY2F0aW9uXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtM1wiPlxuXHRcdFx0XHRcdDxPcmdNYXAgcmVmPVwicmVmT3JnTWFwXCI+PC9PcmdNYXA+XG5cdFx0XHRcdDwvZGl2PiAtLT5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm10LTUgbWItMVwiPlxuXHRcdFx0XHRcdDxoND5Db250YWN0IE51bWJlcnM8L2g0PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPkxhbmRsaW5lPC9sYWJlbD5cblx0XHRcdFx0XHQ8dnVlLXBob25lLW51bWJlci1pbnB1dFxuXHRcdFx0XHRcdFx0QHVwZGF0ZT1cIm9uVXBkYXRlXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwibGFuZGxpbmUtdGVsXCJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcblx0XHRcdFx0XHRcdG5vLWNvdW50cnktc2VsZWN0b3Jcblx0XHRcdFx0XHRcdDplcnJvcj1cInJlc3VsdHMuaXNWYWxpZCA9PSBmYWxzZVwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jb250YWN0X2xhbmRcIlxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiJ3JvdW5kZWQtMCdcIlxuXHRcdFx0XHRcdFx0OnRyYW5zbGF0aW9ucz1cIntcblx0XHRcdFx0XHRcdFx0cGhvbmVOdW1iZXJMYWJlbDogJ0xhbmRsaW5lIE51bWJlcicsXG5cdFx0XHRcdFx0XHR9XCJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cIiFlZGl0ID09IHRydWVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8L3Z1ZS1waG9uZS1udW1iZXItaW5wdXQ+XG5cblx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1saWdodFwiXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJyZXN1bHRzLmlzVmFsaWQgPT0gZmFsc2UgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ1wiXG5cdFx0XHRcdFx0XHQ+LjwvbGFiZWxcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtZGFuZ2VyXCJcblx0XHRcdFx0XHRcdDpjbGFzcz1cInJlc3VsdHMuaXNWYWxpZCAhPSBmYWxzZSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCJcblx0XHRcdFx0XHRcdD5Db250YWN0IE51bWJlciBpcyBub3QgdmFsaWQgaW4gVVMuPC9sYWJlbFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Nb2JpbGU8L2xhYmVsPlxuXHRcdFx0XHRcdDx2dWUtcGhvbmUtbnVtYmVyLWlucHV0XG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwib25VcGRhdGUyXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwibW9iaWxlLXRlbFwiXG5cdFx0XHRcdFx0XHQ6ZGVmYXVsdC1jb3VudHJ5LWNvZGU9XCJkZWZhdWx0Q291bnRyeVwiXG5cdFx0XHRcdFx0XHRuby1jb3VudHJ5LXNlbGVjdG9yXG5cdFx0XHRcdFx0XHQ6ZXJyb3I9XCJyZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX2NvbnRhY3RfbW9iaWxlXCJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cIiFlZGl0ID09IHRydWVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8L3Z1ZS1waG9uZS1udW1iZXItaW5wdXQ+XG5cdFx0XHRcdFx0PGxhYmVsXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtbGlnaHRcIlxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0czIuaXNWYWxpZCA9PSBmYWxzZSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCJcblx0XHRcdFx0XHRcdD4uPC9sYWJlbFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdGNsYXNzPVwidGV4dC1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0czIuaXNWYWxpZCAhPSBmYWxzZSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCJcblx0XHRcdFx0XHRcdD5Db250YWN0IE51bWJlciBpcyBub3QgdmFsaWQgaW4gVVMuPC9sYWJlbFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC03XCI+XG5cdFx0XHRcdDxociAvPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0OmNsYXNzPVwiZWRpdCA9PSBmYWxzZSA/ICdkLW5vbmUnIDogJydcIlxuXHRcdFx0XHRcdGNsYXNzPVwibXItMiBidG4gYnRuLWluZm8gcm91bmRlZC0wXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVPcmdhbml6YXRpb24oKVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1zYXZlIG1yLTNcIj48L2k+IFNhdmUgQ2hhbmdlc1xuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBPcmdNYXAgZnJvbSBcIi4vbWFwMy52dWVcIjtcblx0aW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0T3JnTWFwOiBPcmdNYXAsXG5cdFx0fSxcblx0XHRwcm9wczogW1wicHJvcHNvcmdcIl0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGVtYWlsOiBcIlwiLFxuXHRcdFx0XHRvcmc6IHt9LFxuXHRcdFx0XHRpbWFnZV9maWxlOiBudWxsLFxuXHRcdFx0XHRzdGF0ZXM6IFtdLFxuXHRcdFx0XHRjaXRpZXM6IFtdLFxuXHRcdFx0XHRMb2dvUHJldmlldzogbnVsbCxcblx0XHRcdFx0ZGVmYXVsdENvdW50cnk6IFwiVVNcIixcblx0XHRcdFx0cmVzdWx0czoge30sXG5cdFx0XHRcdHJlc3VsdHMyOiB7fSxcblx0XHRcdFx0ZXJyb3JzOiBuZXcgRXJyb3JzKCksXG5cdFx0XHRcdGVkaXQ6IGZhbHNlLFxuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHRoaXMuTG9nb1ByZXZpZXcgPSB0aGlzLnByb3Bzb3JnLmF0cl9sb2dvX2xpbms7XG5cdFx0XHR0aGlzLm9yZyA9IHRoaXMucHJvcHNvcmc7XG5cdFx0XHR0aGlzLmdldFN0YXRlcygpO1xuXHRcdH0sXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0XHRcdGxhdDogTnVtYmVyKHRoaXMucHJvcHNvcmcub3JnX2xhdCksXG5cdFx0XHRcdFx0bG5nOiBOdW1iZXIodGhpcy5wcm9wc29yZy5vcmdfbG5nKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy4kcmVmcy5yZWZPcmdNYXAuTWFya2VyTG9jYXRpb24gPSBtYXJrZXI7XG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLmNlbnRlciA9IG1hcmtlcjtcblx0XHRcdH0sIDEwMDApO1xuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvbmx5TnVtYmVyKCRldmVudCkge1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCRldmVudC5rZXlDb2RlKTsgLy9rZXlDb2RlcyB2YWx1ZVxuXHRcdFx0XHRsZXQga2V5Q29kZSA9ICRldmVudC5rZXlDb2RlID8gJGV2ZW50LmtleUNvZGUgOiAkZXZlbnQud2hpY2g7XG5cdFx0XHRcdGlmIChrZXlDb2RlIDwgNDggfHwga2V5Q29kZSA+IDU3KSB7XG5cdFx0XHRcdFx0Ly8gNDYgaXMgZG90XG5cdFx0XHRcdFx0JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRvcGVuTWFwKCkge1xuXHRcdFx0XHR2YXIgYWRkcmVzcyA9XG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX3N0cmVldCArXG5cdFx0XHRcdFx0XCIsIFwiICtcblx0XHRcdFx0XHR0aGlzLm9yZy5vcmdfY2l0eXByb3YgK1xuXHRcdFx0XHRcdFwiLCBcIiArXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX3N0YXRlICtcblx0XHRcdFx0XHRcIiwgXCIgK1xuXHRcdFx0XHRcdHRoaXMub3JnLm9yZ196aXBjb2RlO1xuXHRcdFx0XHR0aGlzLiRyZWZzLnJlZk9yZ01hcC5nZW9jb2RpbmcoYWRkcmVzcyk7XG5cdFx0XHR9LFxuXHRcdFx0b25VcGRhdGUocGF5bG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlc3VsdHMgPSBwYXlsb2FkO1xuXHRcdFx0fSxcblx0XHRcdG9uVXBkYXRlMihwYXlsb2FkKSB7XG5cdFx0XHRcdHRoaXMucmVzdWx0czIgPSBwYXlsb2FkO1xuXHRcdFx0fSxcblx0XHRcdG9uRmlsZUNoYW5nZShlKSB7XG5cdFx0XHRcdC8vICAgY29uc29sZS5sb2coZSk7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblx0XHRcdFx0dGhpcy5pbWFnZV9maWxlID0gZmlsZTtcblx0XHRcdFx0dGhpcy5Mb2dvUHJldmlldyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0U3RhdGVzKCkge1xuXHRcdFx0XHRheGlvc1xuXHRcdFx0XHRcdC5nZXQoXCIvc3RhdGVzXCIpXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZXMgPSByZXMuZGF0YTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0ZmV0Y2hPcHRpb25zKHNlYXJjaCwgbG9hZGluZykge1xuXHRcdFx0XHRpZiAodGhpcy50aW1lcikge1xuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gbnVsbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmdldENpdGllcyhzZWFyY2gpO1xuXHRcdFx0XHR9LCAzMDApO1xuXHRcdFx0fSxcblxuXHRcdFx0YXN5bmMgZ2V0Q2l0aWVzKHNlYXJjaGluZyA9IG51bGwpIHtcblx0XHRcdFx0bGV0IHBhcmFtO1xuXHRcdFx0XHRwYXJhbSA9IHtcblx0XHRcdFx0XHRzZWFyY2g6IHNlYXJjaGluZyxcblx0XHRcdFx0fTtcblx0XHRcdFx0YXdhaXQgYXhpb3Moe1xuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcblx0XHRcdFx0XHR1cmw6IFwiL2RhdGEvc2VhcmNoY2l0aWVzXCIsXG5cdFx0XHRcdFx0cGFyYW1zOiBwYXJhbSxcblx0XHRcdFx0fSkudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jaXRpZXMgPSByZXMuZGF0YTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1cGRhdGVPcmdhbml6YXRpb24oKSB7XG4gICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblx0XHRcdFx0dmFyIGZvcm1Cb2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0XHRcdC8vIGZvciAodmFyIGtleSBpbiB0aGlzLm9yZykge1xuXHRcdFx0XHQvLyBcdGlmICh0aGlzLm9yZ1trZXldICE9PSBudWxsKSB7XG5cdFx0XHRcdC8vIFx0XHRmb3JtQm9keS5hcHBlbmQoa2V5LCB0aGlzLm9yZ1trZXldKTtcblx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gaWYgKHRoaXMuaW1hZ2VfZmlsZSkge1xuXHRcdFx0XHQvLyBcdGZvcm1Cb2R5LmFwcGVuZChcImltYWdlX2ZpbGVcIiwgdGhpcy5pbWFnZV9maWxlKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kKFwib3JnX3N0cmVldFwiLCB0aGlzLm9yZy5vcmdfc3RyZWV0KTtcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfY2l0eXByb3ZcIiwgdGhpcy5vcmcub3JnX2NpdHlwcm92KTtcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfc3RhdGVcIiwgdGhpcy5vcmcub3JnX3N0YXRlKTtcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfemlwY29kZVwiLCB0aGlzLm9yZy5vcmdfemlwY29kZSk7XG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kKFwib3JnX2NvbnRhY3RfbGFuZFwiLCB0aGlzLm9yZy5vcmdfY29udGFjdF9sYW5kKTtcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfY29udGFjdF9tb2JpbGVcIiwgdGhpcy5vcmcub3JnX2NvbnRhY3RfbW9iaWxlKTtcblxuXHRcdFx0XHRheGlvc1xuXHRcdFx0XHRcdC5wb3N0KGAvYWRtaW4vb3JnL2FwaS91cGRhdGVPcmdhbml6YXRpb25gLCBmb3JtQm9keSwge1xuXHRcdFx0XHRcdFx0aGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9vcmcvcHJvZmlsZVwiO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZXIoKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdGlmIChlcnIucmVzcG9uc2UpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XG5cdFx0XHRcdFx0XHRcdHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRzaG93RXJyb3JNZXNzYWdlKGVycm9ycykge1xuXHRcdFx0XHQvLyAgIGNvbnNvbGUubG9nKHNoaXQpO1xuXHRcdFx0XHR0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcblx0XHRcdH0sXG5cdFx0XHRjbGlja0VkaXQoKSB7XG5cdFx0XHRcdHRoaXMuZWRpdCA9IHRydWU7XG5cdFx0XHR9LFx0XHRcdFxuXHRcdH0sXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGxvYWRsaXN0KCkge1xuXHRcdFx0XHR2YXIgcGFnZUxpc3QgPSBbXTtcblx0XHRcdFx0dmFyIGJlZ2luID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcblx0XHRcdFx0dmFyIGVuZCA9IGJlZ2luICsgdGhpcy5wZXJQYWdlO1xuXHRcdFx0XHR2YXIgYWxsb3JkZXJzID0gdGhpcy5zZWFyY2hlZEN1c3RvbWVycztcblx0XHRcdFx0dmFyIHBhZ2VMaXN0ID0gYWxsb3JkZXJzLnNsaWNlKGJlZ2luLCBlbmQpO1xuXHRcdFx0XHRyZXR1cm4gcGFnZUxpc3Q7XG5cdFx0XHR9LFxuXG5cdFx0XHRyb3dzKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWFyY2hlZEN1c3RvbWVycy5sZW5ndGg7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0Ly8gbW91bnRlZCgpIHtcblx0XHQvLyAgICAgYWxlcnQoXCJQUk9EVUNUUyBDT01QT05FTlQgTU9VTlRFRFwiKTtcblx0XHQvLyB9LFxuXHR9O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0LnZzX19kcm9wZG93bi10b2dnbGUge1xuXHRcdGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcblx0fVxuXHQudnNfX3NlYXJjaCB7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0fVxuXHQuaW5wdXQtdGVsLmlzLWRpc2FibGVkIC5pbnB1dC10ZWxfX2lucHV0W2RhdGEtdi1lNTliZTNiNF0ge1xuXHRcdGNvbG9yOiMzMzMhaW1wb3J0YW50O1xuXHR9XHRcbjwvc3R5bGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0LmZvcm0tZ3JvdXAge1xuXHRcdG1hcmdpbi1ib3R0b206IDFyZW07XG5cdH1cblxuXHQuaW5wdXQtZ3JvdXAtdGV4dCB7XG5cdFx0YmFja2dyb3VuZDogI2Q5ZGZlMjtcblx0fVxuXG5cdC50ZXh0LXN1Y2Nlc3Mge1xuXHRcdGNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuYnRuLXN1Y2Nlc3MtMSB7XG5cdFx0Y29sb3I6ICNmZmYgIWltcG9ydGFudDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuYnRuLXVwbG9hZCB7XG5cdFx0Ly8gICBsaW5lLWhlaWdodDogNTtcblx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblx0XHRpIHtcblx0XHRcdGZvbnQtc2l6ZTogNTBweDtcblx0XHR9XG5cdH1cblxuXHQuYnRuLXN1Y2Nlc3MtMiB7XG5cdFx0Y29sb3I6IGdyYXkgIWltcG9ydGFudDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDE1OSwgMzcsIDAuMykgIWltcG9ydGFudDtcblx0XHQvLyA1MSwgMTU5LCAzN1xuXG5cdFx0Ym9yZGVyLWNvbG9yOiByZ2IoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcblx0fVxuXG5cdCNwcmV2aWV3IHtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDExMHB4O1xuXHRcdFx0aGVpZ2h0OiA5MHB4O1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMzAwcHhcIj5cblx0XHQ8Z21hcC1tYXBcblx0XHRcdHJlZj1cInh5elwiXG5cdFx0XHQ6Y2VudGVyPVwiY2VudGVyXCJcblx0XHRcdDp6b29tPVwiOFwiXG5cdFx0XHRzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCVcIlxuXHRcdFx0Om9wdGlvbnM9XCJ7XG5cdFx0XHRcdHpvb21Db250cm9sOiB0cnVlLFxuXHRcdFx0XHRtYXBUeXBlQ29udHJvbDogZmFsc2UsXG5cdFx0XHRcdHNjYWxlQ29udHJvbDogZmFsc2UsXG5cdFx0XHRcdHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcblx0XHRcdFx0cm90YXRlQ29udHJvbDogZmFsc2UsXG5cdFx0XHRcdGZ1bGxzY3JlZW5Db250cm9sOiB0cnVlLFxuXHRcdFx0fVwiXG5cdFx0PlxuXHRcdFx0PGdtYXAtbWFya2VyXG5cdFx0XHRcdDpwb3NpdGlvbj1cIk1hcmtlckxvY2F0aW9uXCJcblx0XHRcdFx0OmNsaWNrYWJsZT1cInRydWVcIlxuXHRcdFx0XHQ6ZHJhZ2dhYmxlPVwidHJ1ZVwiXG5cdFx0XHRcdEBkcmFnPVwiZHJhZ2dpbmcoJGV2ZW50LCBmYWxzZSlcIlxuXHRcdFx0XHRpY29uPVwiaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9tcy9pY29ucy9ibHVlLWRvdC5wbmdcIlxuXHRcdFx0PlxuICAgICAgICAgICAgXHQ8Z21hcC1pbmZvLXdpbmRvd1xuXHRcdFx0XHRcdDpvcHRpb25zPVwie1xuXHRcdFx0XHRcdFx0cGl4ZWxPZmZzZXQ6IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9LFxuXHRcdFx0XHRcdFx0Y29udGVudDogYERyYWcgbWUhYCxcblx0XHRcdFx0XHRcdHpJbmRleDogMixcblx0XHRcdFx0XHR9XCJcblx0XHRcdFx0PlxuXHRcdFx0XHQ8L2dtYXAtaW5mby13aW5kb3c+XG5cdFx0XHQ8L2dtYXAtbWFya2VyPlxuXHRcdDwvZ21hcC1tYXA+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0TWFya2VyTG9jYXRpb246IHt9LFxuXHRcdFx0XHRjZW50ZXI6IHsgbGF0OiA0My4yOTk0Mjg1LCBsbmc6IC03NC4yMTc5MzMgfSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRnZW9jb2RpbmcoZGF0YSkge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0XHRcdGxldCBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuXHRcdFx0XHRsZXQgYWRkcmVzcyA9IG51bGw7XG5cdFx0XHRcdGdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzOiBkYXRhIH0sIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcblx0XHRcdFx0XHRpZiAoc3RhdHVzID09IFwiT0tcIikge1xuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdHNbMF0pIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgbWFya2VyID0ge1xuXHRcdFx0XHRcdFx0XHRcdGxhdDogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcblx0XHRcdFx0XHRcdFx0XHRsbmc6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCksXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdHNlbGYuY2VudGVyID0gbWFya2VyO1xuXHRcdFx0XHRcdFx0XHRzZWxmLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xuXHRcdFx0XHRcdFx0XHRzZWxmLiRwYXJlbnQub3JnLm9yZ19sYXQgPSBtYXJrZXIubGF0O1xuXHRcdFx0XHRcdFx0XHRzZWxmLiRwYXJlbnQub3JnLm9yZ19sbmcgPSBtYXJrZXIubG5nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH0sXG5cdFx0XHRkcmFnZ2luZyhsb2NhdGlvbiwgaXNTZXQsIGZyb210bykge1xuXHRcdFx0XHRsZXQgbWFya2VyID0ge307XG5cdFx0XHRcdG1hcmtlciA9IHtcblx0XHRcdFx0XHRsYXQ6IGxvY2F0aW9uLmxhdExuZy5sYXQoKSxcblx0XHRcdFx0XHRsbmc6IGxvY2F0aW9uLmxhdExuZy5sbmcoKSxcblx0XHRcdFx0fTtcblx0XHRcdFx0dGhpcy4kcGFyZW50Lm9yZy5vcmdfbGF0ID0gbWFya2VyLmxhdDtcblx0XHRcdFx0dGhpcy4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbjwvc2NyaXB0PlxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1ncm91cFtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5pbnB1dC1ncm91cC10ZXh0W2RhdGEtdi0zZTY5NTIxM10ge1xcbiAgYmFja2dyb3VuZDogI2Q5ZGZlMjtcXG59XFxuLnRleHQtc3VjY2Vzc1tkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tc3VjY2Vzcy0xW2RhdGEtdi0zZTY5NTIxM10ge1xcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cXG4uYnRuLXVwbG9hZFtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuLmJ0bi11cGxvYWQgaVtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuLmJ0bi1zdWNjZXNzLTJbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTU5LCAzNywgMC4zKSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XFxufVxcbiNwcmV2aWV3IGltZ1tkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIHdpZHRoOiAxMTBweDtcXG4gIGhlaWdodDogOTBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52c19fZHJvcGRvd24tdG9nZ2xlIHtcXG5cXHRib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XFxufVxcbi52c19fc2VhcmNoIHtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG4uaW5wdXQtdGVsLmlzLWRpc2FibGVkIC5pbnB1dC10ZWxfX2lucHV0W2RhdGEtdi1lNTliZTNiNF0ge1xcblxcdGNvbG9yOiMzMzMhaW1wb3J0YW50O1xcbn1cXHRcXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMlwiIH0sIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2l0ZW1hcCBtci0zXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5vcmcub3JnX25hbWUpICsgXCJcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJyb3cgbXQtNFwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtZmFtaWx5XCI6IFwiU291cmNlIFNhbnMgUHJvLCBzYW5zLXNlcmlmICFpbXBvcnRhbnRcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC05XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0RmlhY3JlIElEOiBcIiksXG4gICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoX3ZtLnByb3Bzb3JnLm9yZ19vcHRpb25jX2lkKSldKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcHQtMlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihcImVtYWlsOiBcIiArIF92bS5fcyhfdm0ucHJvcHNvcmcub3JnX2VtYWlsKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbX3ZtLl92KFwidHlwZTogXCIgKyBfdm0uX3MoX3ZtLnByb3Bzb3JnLmF0cl90eXBlX2xhYmVsKSldKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJDb250YWN0IFBlcnNvbjogXCIgKyBfdm0uX3MoX3ZtLnByb3Bzb3JnLmF0cl9jb250YWN0X3BlcnNvbilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImg2XCIsIFtfdm0uX3YoXCJBZGRyZXNzOiBcIiArIF92bS5fcyhfdm0ucHJvcHNvcmcuYXRyX2FkZHJlc3MpKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5lZGl0ID09IHRydWUgPyBcImQtbm9uZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsaWNrRWRpdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRFRElUXFxuXFx0XFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmVkaXQgPT0gZmFsc2UgPyBcImQtbm9uZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRDYW5jZWxcXG5cXHRcXHRcXHRcXHRcXHRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJTdHJlZXRcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3N0cmVldCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19zdHJlZXRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGlkOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcInR5cGVcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX3N0cmVldCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3N0cmVldFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlRvd24vQ291bnR5L0NpdHlcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uY2l0aWVzLFxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0YWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibm8tZHJvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIFwicHVzaC10YWdzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdC1vbi10YWJcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc2VhcmNoOiBfdm0uZmV0Y2hPcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jaXR5cHJvdixcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfY2l0eXByb3ZcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19jaXR5cHJvdlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiU3RhdGVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2LXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIHJlZHVjZTogZnVuY3Rpb24oc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmlzbzJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uc3RhdGVzLFxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB0YWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwibm8tZHJvcFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIFwicHVzaC10YWdzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdC1vbi10YWJcIjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19zdGF0ZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfc3RhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19zdGF0ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiWmlwY29kZVwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfemlwY29kZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ196aXBjb2RlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZSB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9yZy5vcmdfemlwY29kZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3ppcGNvZGVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtfdm0uX3YoXCJMYW5kbGluZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZ1ZS1waG9uZS1udW1iZXItaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhbmRsaW5lLXRlbFwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtY291bnRyeS1jb2RlXCI6IF92bS5kZWZhdWx0Q291bnRyeSxcbiAgICAgICAgICAgICAgICAgIFwibm8tY291bnRyeS1zZWxlY3RvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5yZXN1bHRzLmlzVmFsaWQgPT0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXJMYWJlbDogXCJMYW5kbGluZSBOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdXBkYXRlOiBfdm0ub25VcGRhdGUgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfbGFuZCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfY29udGFjdF9sYW5kXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfY29udGFjdF9sYW5kXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5yZXN1bHRzLmlzVmFsaWQgPT0gZmFsc2UgPyBcImQtbm9uZVwiIDogXCJkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIuXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucmVzdWx0cy5pc1ZhbGlkICE9IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTW9iaWxlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidnVlLXBob25lLW51bWJlci1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibW9iaWxlLXRlbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImRlZmF1bHQtY291bnRyeS1jb2RlXCI6IF92bS5kZWZhdWx0Q291bnRyeSxcbiAgICAgICAgICAgICAgICAgIFwibm8tY291bnRyeS1zZWxlY3RvclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyB1cGRhdGU6IF92bS5vblVwZGF0ZTIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX2NvbnRhY3RfbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19jb250YWN0X21vYmlsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbW9iaWxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5yZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMyLmlzVmFsaWQgIT0gZmFsc2UgPyBcImQtbm9uZVwiIDogXCJkLWJsb2NrXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250YWN0IE51bWJlciBpcyBub3QgdmFsaWQgaW4gVVMuXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgYnRuIGJ0bi1pbmZvIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgY2xhc3M6IF92bS5lZGl0ID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVPcmdhbml6YXRpb24oKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2F2ZSBtci0zXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgU2F2ZSBDaGFuZ2VzXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtdC01IG1iLTFcIiB9LCBbXG4gICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDb250YWN0IE51bWJlcnNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMzAwcHhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZ21hcC1tYXBcIixcbiAgICAgICAge1xuICAgICAgICAgIHJlZjogXCJ4eXpcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgY2VudGVyOiBfdm0uY2VudGVyLFxuICAgICAgICAgICAgem9vbTogOCxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgem9vbUNvbnRyb2w6IHRydWUsXG4gICAgICAgICAgICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgICAgICByb3RhdGVDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgZnVsbHNjcmVlbkNvbnRyb2w6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZ21hcC1tYXJrZXJcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogX3ZtLk1hcmtlckxvY2F0aW9uLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL2JsdWUtZG90LnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgZHJhZzogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRyYWdnaW5nKCRldmVudCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImdtYXAtaW5mby13aW5kb3dcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBpeGVsT2Zmc2V0OiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJEcmFnIG1lIVwiLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U2OTUyMTMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2U2OTUyMTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZTY5NTIxM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlNjk1MjEzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlNjk1MjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlNjk1MjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U2OTUyMTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2U2OTUyMTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2U2OTUyMTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTY5NTIxMyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWU0OTI2YjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5ZTQ5MjZiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZTQ5MjZiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZTQ5MjZiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWU0OTI2YjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWU0OTI2YjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcDMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllNDkyNmI0JlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=