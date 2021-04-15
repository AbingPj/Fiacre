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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/YTk0MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT9mNWVmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzY5NjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/ZDg5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT84NTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/NTAxOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT85YTdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlPzJiNDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9pbmRleC52dWU/NjZlNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9hZG1pbi1vcmctY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnZ1ZT81MmM5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9tYXAzLnZ1ZT9hMmJhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvbWFwMy52dWU/Mjg2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9lcnJvckNsYXNzLmpzIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJzdHIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwia2V5IiwiZ2V0IiwiYXJyIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd09BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQSxHQURBO0FBSUEscUJBSkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxlQURBO0FBRUEsYUFGQTtBQUdBLHNCQUhBO0FB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QUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL2FkbWluT3JnUHJvZmlsZTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtMTJcIj5cclxuXHRcdFx0XHQ8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5cclxuXHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLXNpdGVtYXAgbXItM1wiPjwvaT4ge3sgb3JnLm9yZ19uYW1lIH19XHJcblx0XHRcdFx0PC9oMj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzPVwicm93IG10LTRcIlxyXG5cdFx0XHRzdHlsZT1cImZvbnQtZmFtaWx5OiBTb3VyY2UgU2FucyBQcm8sIHNhbnMtc2VyaWYgIWltcG9ydGFudFwiXHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtOVwiPlxyXG5cdFx0XHRcdDxoND5cclxuXHRcdFx0XHRcdEZpYWNyZSBJRDogPGI+e3sgcHJvcHNvcmcub3JnX29wdGlvbmNfaWQgfX08L2I+XHJcblx0XHRcdFx0PC9oND5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93IHB0LTJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDY+ZW1haWw6IHt7IHByb3Bzb3JnLm9yZ19lbWFpbCB9fTwvaDY+XHJcblx0XHRcdFx0XHRcdDxoNj50eXBlOiB7eyBwcm9wc29yZy5hdHJfdHlwZV9sYWJlbCB9fTwvaDY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG5cdFx0XHRcdFx0XHQ8aDY+Q29udGFjdCBQZXJzb246IHt7IHByb3Bzb3JnLmF0cl9jb250YWN0X3BlcnNvbiB9fTwvaDY+XHJcblx0XHRcdFx0XHRcdDxoNj5BZGRyZXNzOiB7eyBwcm9wc29yZy5hdHJfYWRkcmVzcyB9fTwvaDY+XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0XHQ8IS0tIDxoNj5EaW9jZXNlOiB7eyBwcm9wc29yZy5vcmdfZGlvY2VzZSB9fTwvaDY+IC0tPlxyXG5cdFx0XHRcdDwhLS0gPGg2PldlYnNpdGU6IHt7IHByb3Bzb3JnLm9yZ193ZWJzaXRlIH19PC9oNj4gLS0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0XHQ8aDQ+QWRkcmVzczwvaDQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJlZGl0ID09IHRydWUgPyAnZC1ub25lJyA6ICcnXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIlxyXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjbGlja0VkaXQoKVwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdEVESVRcclxuXHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PGJ1dHRvblxyXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwiZWRpdCA9PSBmYWxzZSA/ICdkLW5vbmUnIDogJydcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0XCJcclxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZWRpdCA9IGZhbHNlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0XHQ8L2J1dHRvbj5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+U3RyZWV0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19zdHJlZXRcIlxyXG5cdFx0XHRcdFx0XHRpZD1cInR5cGVcIlxyXG5cdFx0XHRcdFx0XHRuYW1lPVwidHlwZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlRvd24vQ291bnR5L0NpdHk8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdEBzZWFyY2g9XCJmZXRjaE9wdGlvbnNcIlxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jaXR5cHJvdlwiXHJcblx0XHRcdFx0XHRcdDpvcHRpb25zPVwiY2l0aWVzXCJcclxuXHRcdFx0XHRcdFx0Om11bHRpcGxlPVwiZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhZWRpdCA9PSB0cnVlXCJcclxuXHRcdFx0XHRcdFx0OmNsZWFyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VhcmNoYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6ZmlsdGVyYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6dGFnZ2FibGU9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0Om5vLWRyb3A9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpwdXNoLXRhZ3M9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdFx0OnNlbGVjdC1vbi10YWI9XCJ0cnVlXCJcclxuXHRcdFx0XHRcdD48L3Ytc2VsZWN0PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwibmFtZVwiPlN0YXRlPC9sYWJlbD5cclxuXHRcdFx0XHRcdDwhLS0gPHYtc2VsZWN0XHJcblx0XHRcdFx0XHRcdGxhYmVsPVwibmFtZVwiXHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0OnJlZHVjZT1cIihzdGF0ZSkgPT4gc3RhdGUuaWRcIlxyXG5cdFx0XHRcdFx0XHQ6b3B0aW9ucz1cInN0YXRlc1wiXHJcblx0XHRcdFx0XHRcdDpjbGVhcmFibGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHQ+PC92LXNlbGVjdD4gLS0+XHJcblx0XHRcdFx0XHQ8IS0tIDxyZWdpb24tc2VsZWN0XHJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0Y291bnRyeT1cIlVuaXRlZCBTdGF0ZXNcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCJcclxuXHRcdFx0XHRcdFx0OmNvdW50cnlOYW1lPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpyZWdpb25OYW1lPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpyZWdpb249XCJvcmcub3JnX3N0YXRlXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWxlY3QgU3RhdGVcIlxyXG5cdFx0XHRcdFx0Lz4gLS0+XHJcblx0XHRcdFx0XHQ8di1zZWxlY3RcclxuXHRcdFx0XHRcdFx0bGFiZWw9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6cmVkdWNlPVwiKHN0YXRlKSA9PiBzdGF0ZS5pc28yXCJcclxuXHRcdFx0XHRcdFx0Om9wdGlvbnM9XCJzdGF0ZXNcIlxyXG5cdFx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXHJcblx0XHRcdFx0XHRcdDpkaXNhYmxlZD1cIiFlZGl0ID09IHRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xlYXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpzZWFyY2hhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDpmaWx0ZXJhYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0XHRcdDp0YWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6bm8tZHJvcD1cImZhbHNlXCJcclxuXHRcdFx0XHRcdFx0OnB1c2gtdGFncz1cInRydWVcIlxyXG5cdFx0XHRcdFx0XHQ6c2VsZWN0LW9uLXRhYj1cInRydWVcIlxyXG5cdFx0XHRcdFx0Pjwvdi1zZWxlY3Q+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCI+WmlwY29kZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXRcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfemlwY29kZVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0OmRpc2FibGVkPVwiIWVkaXQgPT0gdHJ1ZVwiXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBmb3I9XCJuYW1lXCJcclxuXHRcdFx0XHRcdFx0Pk1hcCBMb2NhdGlvbiA8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Kjwvc3Bhbj48L2xhYmVsXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfbGF0XCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxhdGl0dWRlXCJcclxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdHJlYWRvbmx5XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtNFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfbG5nXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkxvbmdpdHVkZVwiXHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRyZWFkb25seVxyXG5cdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLTRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCIgQGNsaWNrPVwib3Blbk1hcCgpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1tYXAtbWFya2VyLWFsdCBtci0yXCI+PC9pPiBTZXQgTWFwXHJcblx0XHRcdFx0XHRcdFx0XHRMb2NhdGlvblxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtdC0zXCI+XHJcblx0XHRcdFx0XHQ8T3JnTWFwIHJlZj1cInJlZk9yZ01hcFwiPjwvT3JnTWFwPlxyXG5cdFx0XHRcdDwvZGl2PiAtLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXQtNSBtYi0xXCI+XHJcblx0XHRcdFx0XHQ8aDQ+Q29udGFjdCBOdW1iZXJzPC9oND5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5MYW5kbGluZTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8dnVlLXBob25lLW51bWJlci1pbnB1dFxyXG5cdFx0XHRcdFx0XHRAdXBkYXRlPVwib25VcGRhdGVcIlxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImxhbmRsaW5lLXRlbFwiXHJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0bm8tY291bnRyeS1zZWxlY3RvclxyXG5cdFx0XHRcdFx0XHQ6ZXJyb3I9XCJyZXN1bHRzLmlzVmFsaWQgPT0gZmFsc2VcIlxyXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwib3JnLm9yZ19jb250YWN0X2xhbmRcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCIncm91bmRlZC0wJ1wiXHJcblx0XHRcdFx0XHRcdDp0cmFuc2xhdGlvbnM9XCJ7XHJcblx0XHRcdFx0XHRcdFx0cGhvbmVOdW1iZXJMYWJlbDogJ0xhbmRsaW5lIE51bWJlcicsXHJcblx0XHRcdFx0XHRcdH1cIlxyXG5cdFx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhZWRpdCA9PSB0cnVlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdnVlLXBob25lLW51bWJlci1pbnB1dD5cclxuXHJcblx0XHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ0ZXh0LWxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+LjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0cy5pc1ZhbGlkICE9IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+Q29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Nb2JpbGU8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHZ1ZS1waG9uZS1udW1iZXItaW5wdXRcclxuXHRcdFx0XHRcdFx0QHVwZGF0ZT1cIm9uVXBkYXRlMlwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwibW9iaWxlLXRlbFwiXHJcblx0XHRcdFx0XHRcdDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcclxuXHRcdFx0XHRcdFx0bm8tY291bnRyeS1zZWxlY3RvclxyXG5cdFx0XHRcdFx0XHQ6ZXJyb3I9XCJyZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlXCJcclxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm9yZy5vcmdfY29udGFjdF9tb2JpbGVcIlxyXG5cdFx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCIhZWRpdCA9PSB0cnVlXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDwvdnVlLXBob25lLW51bWJlci1pbnB1dD5cclxuXHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtbGlnaHRcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJyZXN1bHRzMi5pc1ZhbGlkID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnZC1ibG9jaydcIlxyXG5cdFx0XHRcdFx0XHQ+LjwvbGFiZWxcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtZGFuZ2VyXCJcclxuXHRcdFx0XHRcdFx0OmNsYXNzPVwicmVzdWx0czIuaXNWYWxpZCAhPSBmYWxzZSA/ICdkLW5vbmUnIDogJ2QtYmxvY2snXCJcclxuXHRcdFx0XHRcdFx0PkNvbnRhY3QgTnVtYmVyIGlzIG5vdCB2YWxpZCBpbiBVUy48L2xhYmVsXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuXHRcdFx0XHQ8aHIgLz5cclxuXHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJlZGl0ID09IGZhbHNlID8gJ2Qtbm9uZScgOiAnJ1wiXHJcblx0XHRcdFx0XHRjbGFzcz1cIm1yLTIgYnRuIGJ0bi1pbmZvIHJvdW5kZWQtMFwiXHJcblx0XHRcdFx0XHRAY2xpY2s9XCJ1cGRhdGVPcmdhbml6YXRpb24oKVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtc2F2ZSBtci0zXCI+PC9pPiBTYXZlIENoYW5nZXNcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IE9yZ01hcCBmcm9tIFwiLi9tYXAzLnZ1ZVwiO1xyXG5cdGltcG9ydCBFcnJvcnMgZnJvbSBcIi4uLy4uL2Vycm9yQ2xhc3NcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdE9yZ01hcDogT3JnTWFwLFxyXG5cdFx0fSxcclxuXHRcdHByb3BzOiBbXCJwcm9wc29yZ1wiXSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZW1haWw6IFwiXCIsXHJcblx0XHRcdFx0b3JnOiB7fSxcclxuXHRcdFx0XHRpbWFnZV9maWxlOiBudWxsLFxyXG5cdFx0XHRcdHN0YXRlczogW10sXHJcblx0XHRcdFx0Y2l0aWVzOiBbXSxcclxuXHRcdFx0XHRMb2dvUHJldmlldzogbnVsbCxcclxuXHRcdFx0XHRkZWZhdWx0Q291bnRyeTogXCJVU1wiLFxyXG5cdFx0XHRcdHJlc3VsdHM6IHt9LFxyXG5cdFx0XHRcdHJlc3VsdHMyOiB7fSxcclxuXHRcdFx0XHRlcnJvcnM6IG5ldyBFcnJvcnMoKSxcclxuXHRcdFx0XHRlZGl0OiBmYWxzZSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5Mb2dvUHJldmlldyA9IHRoaXMucHJvcHNvcmcuYXRyX2xvZ29fbGluaztcclxuXHRcdFx0dGhpcy5vcmcgPSB0aGlzLnByb3Bzb3JnO1xyXG5cdFx0XHR0aGlzLmdldFN0YXRlcygpO1xyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdFx0XHRsYXQ6IE51bWJlcih0aGlzLnByb3Bzb3JnLm9yZ19sYXQpLFxyXG5cdFx0XHRcdFx0bG5nOiBOdW1iZXIodGhpcy5wcm9wc29yZy5vcmdfbG5nKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLmNlbnRlciA9IG1hcmtlcjtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25seU51bWJlcigkZXZlbnQpIHtcclxuXHRcdFx0XHQvL2NvbnNvbGUubG9nKCRldmVudC5rZXlDb2RlKTsgLy9rZXlDb2RlcyB2YWx1ZVxyXG5cdFx0XHRcdGxldCBrZXlDb2RlID0gJGV2ZW50LmtleUNvZGUgPyAkZXZlbnQua2V5Q29kZSA6ICRldmVudC53aGljaDtcclxuXHRcdFx0XHRpZiAoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1Nykge1xyXG5cdFx0XHRcdFx0Ly8gNDYgaXMgZG90XHJcblx0XHRcdFx0XHQkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW5NYXAoKSB7XHJcblx0XHRcdFx0dmFyIGFkZHJlc3MgPVxyXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX3N0cmVldCArXHJcblx0XHRcdFx0XHRcIiwgXCIgK1xyXG5cdFx0XHRcdFx0dGhpcy5vcmcub3JnX2NpdHlwcm92ICtcclxuXHRcdFx0XHRcdFwiLCBcIiArXHJcblx0XHRcdFx0XHR0aGlzLm9yZy5vcmdfc3RhdGUgK1xyXG5cdFx0XHRcdFx0XCIsIFwiICtcclxuXHRcdFx0XHRcdHRoaXMub3JnLm9yZ196aXBjb2RlO1xyXG5cdFx0XHRcdHRoaXMuJHJlZnMucmVmT3JnTWFwLmdlb2NvZGluZyhhZGRyZXNzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0b25VcGRhdGUocGF5bG9hZCkge1xyXG5cdFx0XHRcdHRoaXMucmVzdWx0cyA9IHBheWxvYWQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uVXBkYXRlMihwYXlsb2FkKSB7XHJcblx0XHRcdFx0dGhpcy5yZXN1bHRzMiA9IHBheWxvYWQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uRmlsZUNoYW5nZShlKSB7XHJcblx0XHRcdFx0Ly8gICBjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblx0XHRcdFx0dGhpcy5pbWFnZV9maWxlID0gZmlsZTtcclxuXHRcdFx0XHR0aGlzLkxvZ29QcmV2aWV3ID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0U3RhdGVzKCkge1xyXG5cdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHQuZ2V0KFwiL3N0YXRlc1wiKVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlcyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmZXRjaE9wdGlvbnMoc2VhcmNoLCBsb2FkaW5nKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZXIpIHtcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuXHRcdFx0XHRcdHRoaXMudGltZXIgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRDaXRpZXMoc2VhcmNoKTtcclxuXHRcdFx0XHR9LCAzMDApO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0YXN5bmMgZ2V0Q2l0aWVzKHNlYXJjaGluZyA9IG51bGwpIHtcclxuXHRcdFx0XHRsZXQgcGFyYW07XHJcblx0XHRcdFx0cGFyYW0gPSB7XHJcblx0XHRcdFx0XHRzZWFyY2g6IHNlYXJjaGluZyxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdGF3YWl0IGF4aW9zKHtcclxuXHRcdFx0XHRcdG1ldGhvZDogXCJnZXRcIixcclxuXHRcdFx0XHRcdHVybDogXCIvZGF0YS9zZWFyY2hjaXRpZXNcIixcclxuXHRcdFx0XHRcdHBhcmFtczogcGFyYW0sXHJcblx0XHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLmNpdGllcyA9IHJlcy5kYXRhO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dXBkYXRlT3JnYW5pemF0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHR2YXIgZm9ybUJvZHkgPSBuZXcgRm9ybURhdGEoKTtcclxuXHRcdFx0XHQvLyBmb3IgKHZhciBrZXkgaW4gdGhpcy5vcmcpIHtcclxuXHRcdFx0XHQvLyBcdGlmICh0aGlzLm9yZ1trZXldICE9PSBudWxsKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGZvcm1Cb2R5LmFwcGVuZChrZXksIHRoaXMub3JnW2tleV0pO1xyXG5cdFx0XHRcdC8vIFx0fVxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0XHQvLyBpZiAodGhpcy5pbWFnZV9maWxlKSB7XHJcblx0XHRcdFx0Ly8gXHRmb3JtQm9keS5hcHBlbmQoXCJpbWFnZV9maWxlXCIsIHRoaXMuaW1hZ2VfZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfc3RyZWV0XCIsIHRoaXMub3JnLm9yZ19zdHJlZXQpO1xyXG4gICAgICAgICAgICAgICAgZm9ybUJvZHkuYXBwZW5kKFwib3JnX2NpdHlwcm92XCIsIHRoaXMub3JnLm9yZ19jaXR5cHJvdik7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfc3RhdGVcIiwgdGhpcy5vcmcub3JnX3N0YXRlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZChcIm9yZ196aXBjb2RlXCIsIHRoaXMub3JnLm9yZ196aXBjb2RlKTtcclxuICAgICAgICAgICAgICAgIGZvcm1Cb2R5LmFwcGVuZChcIm9yZ19jb250YWN0X2xhbmRcIiwgdGhpcy5vcmcub3JnX2NvbnRhY3RfbGFuZCk7XHJcbiAgICAgICAgICAgICAgICBmb3JtQm9keS5hcHBlbmQoXCJvcmdfY29udGFjdF9tb2JpbGVcIiwgdGhpcy5vcmcub3JnX2NvbnRhY3RfbW9iaWxlKTtcclxuXHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5wb3N0KGAvYWRtaW4vb3JnL2FwaS91cGRhdGVPcmdhbml6YXRpb25gLCBmb3JtQm9keSwge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRoZW4oKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL29yZy9wcm9maWxlXCI7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlcigpO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHRcdGlmIChlcnIucmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xyXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XHJcblx0XHRcdFx0Ly8gICBjb25zb2xlLmxvZyhzaGl0KTtcclxuXHRcdFx0XHR0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2tFZGl0KCkge1xyXG5cdFx0XHRcdHRoaXMuZWRpdCA9IHRydWU7XHJcblx0XHRcdH0sXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0bG9hZGxpc3QoKSB7XHJcblx0XHRcdFx0dmFyIHBhZ2VMaXN0ID0gW107XHJcblx0XHRcdFx0dmFyIGJlZ2luID0gKHRoaXMuY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGVyUGFnZTtcclxuXHRcdFx0XHR2YXIgZW5kID0gYmVnaW4gKyB0aGlzLnBlclBhZ2U7XHJcblx0XHRcdFx0dmFyIGFsbG9yZGVycyA9IHRoaXMuc2VhcmNoZWRDdXN0b21lcnM7XHJcblx0XHRcdFx0dmFyIHBhZ2VMaXN0ID0gYWxsb3JkZXJzLnNsaWNlKGJlZ2luLCBlbmQpO1xyXG5cdFx0XHRcdHJldHVybiBwYWdlTGlzdDtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHJvd3MoKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VhcmNoZWRDdXN0b21lcnMubGVuZ3RoO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHRcdC8vIG1vdW50ZWQoKSB7XHJcblx0XHQvLyAgICAgYWxlcnQoXCJQUk9EVUNUUyBDT01QT05FTlQgTU9VTlRFRFwiKTtcclxuXHRcdC8vIH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnZzX19kcm9wZG93bi10b2dnbGUge1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG5cdH1cclxuXHQudnNfX3NlYXJjaCB7XHJcblx0XHRsaW5lLWhlaWdodDogMS41O1xyXG5cdH1cclxuXHQuaW5wdXQtdGVsLmlzLWRpc2FibGVkIC5pbnB1dC10ZWxfX2lucHV0W2RhdGEtdi1lNTliZTNiNF0ge1xyXG5cdFx0Y29sb3I6IzMzMyFpbXBvcnRhbnQ7XHJcblx0fVx0XHJcbjwvc3R5bGU+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblx0LmZvcm0tZ3JvdXAge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHR9XHJcblxyXG5cdC5pbnB1dC1ncm91cC10ZXh0IHtcclxuXHRcdGJhY2tncm91bmQ6ICNkOWRmZTI7XHJcblx0fVxyXG5cclxuXHQudGV4dC1zdWNjZXNzIHtcclxuXHRcdGNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMSB7XHJcblx0XHRjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQuYnRuLXVwbG9hZCB7XHJcblx0XHQvLyAgIGxpbmUtaGVpZ2h0OiA1O1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHRcdGkge1xyXG5cdFx0XHRmb250LXNpemU6IDUwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuYnRuLXN1Y2Nlc3MtMiB7XHJcblx0XHRjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XHJcblx0XHQvLyA1MSwgMTU5LCAzN1xyXG5cclxuXHRcdGJvcmRlci1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XHJcblx0fVxyXG5cclxuXHQjcHJldmlldyB7XHJcblx0XHRpbWcge1xyXG5cdFx0XHR3aWR0aDogMTEwcHg7XHJcblx0XHRcdGhlaWdodDogOTBweDtcclxuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHR9XHJcblx0fVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBoZWlnaHQ6IDMwMHB4XCI+XHJcblx0XHQ8Z21hcC1tYXBcclxuXHRcdFx0cmVmPVwieHl6XCJcclxuXHRcdFx0OmNlbnRlcj1cImNlbnRlclwiXHJcblx0XHRcdDp6b29tPVwiOFwiXHJcblx0XHRcdHN0eWxlPVwid2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJVwiXHJcblx0XHRcdDpvcHRpb25zPVwie1xyXG5cdFx0XHRcdHpvb21Db250cm9sOiB0cnVlLFxyXG5cdFx0XHRcdG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRzY2FsZUNvbnRyb2w6IGZhbHNlLFxyXG5cdFx0XHRcdHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRyb3RhdGVDb250cm9sOiBmYWxzZSxcclxuXHRcdFx0XHRmdWxsc2NyZWVuQ29udHJvbDogdHJ1ZSxcclxuXHRcdFx0fVwiXHJcblx0XHQ+XHJcblx0XHRcdDxnbWFwLW1hcmtlclxyXG5cdFx0XHRcdDpwb3NpdGlvbj1cIk1hcmtlckxvY2F0aW9uXCJcclxuXHRcdFx0XHQ6Y2xpY2thYmxlPVwidHJ1ZVwiXHJcblx0XHRcdFx0OmRyYWdnYWJsZT1cInRydWVcIlxyXG5cdFx0XHRcdEBkcmFnPVwiZHJhZ2dpbmcoJGV2ZW50LCBmYWxzZSlcIlxyXG5cdFx0XHRcdGljb249XCJodHRwOi8vbWFwcy5nb29nbGUuY29tL21hcGZpbGVzL21zL2ljb25zL2JsdWUtZG90LnBuZ1wiXHJcblx0XHRcdD5cclxuICAgICAgICAgICAgXHQ8Z21hcC1pbmZvLXdpbmRvd1xyXG5cdFx0XHRcdFx0Om9wdGlvbnM9XCJ7XHJcblx0XHRcdFx0XHRcdHBpeGVsT2Zmc2V0OiB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogYERyYWcgbWUhYCxcclxuXHRcdFx0XHRcdFx0ekluZGV4OiAyLFxyXG5cdFx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdDwvZ21hcC1pbmZvLXdpbmRvdz5cclxuXHRcdFx0PC9nbWFwLW1hcmtlcj5cclxuXHRcdDwvZ21hcC1tYXA+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRNYXJrZXJMb2NhdGlvbjoge30sXHJcblx0XHRcdFx0Y2VudGVyOiB7IGxhdDogNDMuMjk5NDI4NSwgbG5nOiAtNzQuMjE3OTMzIH0sXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZW9jb2RpbmcoZGF0YSkge1xyXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHRsZXQgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuXHRcdFx0XHRsZXQgYWRkcmVzcyA9IG51bGw7XHJcblx0XHRcdFx0Z2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3M6IGRhdGEgfSwgZnVuY3Rpb24gKHJlc3VsdHMsIHN0YXR1cykge1xyXG5cdFx0XHRcdFx0aWYgKHN0YXR1cyA9PSBcIk9LXCIpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdHNbMF0pIHtcclxuXHRcdFx0XHRcdFx0XHRjb25zdCBtYXJrZXIgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsYXQ6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCksXHJcblx0XHRcdFx0XHRcdFx0XHRsbmc6IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubG5nKCksXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLmNlbnRlciA9IG1hcmtlcjtcclxuXHRcdFx0XHRcdFx0XHRzZWxmLk1hcmtlckxvY2F0aW9uID0gbWFya2VyO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGYuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0XHRcdFx0c2VsZi4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZHJhZ2dpbmcobG9jYXRpb24sIGlzU2V0LCBmcm9tdG8pIHtcclxuXHRcdFx0XHRsZXQgbWFya2VyID0ge307XHJcblx0XHRcdFx0bWFya2VyID0ge1xyXG5cdFx0XHRcdFx0bGF0OiBsb2NhdGlvbi5sYXRMbmcubGF0KCksXHJcblx0XHRcdFx0XHRsbmc6IGxvY2F0aW9uLmxhdExuZy5sbmcoKSxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdHRoaXMuJHBhcmVudC5vcmcub3JnX2xhdCA9IG1hcmtlci5sYXQ7XHJcblx0XHRcdFx0dGhpcy4kcGFyZW50Lm9yZy5vcmdfbG5nID0gbWFya2VyLmxuZztcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fTtcclxuPC9zY3JpcHQ+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tZ3JvdXBbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4uaW5wdXQtZ3JvdXAtdGV4dFtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGJhY2tncm91bmQ6ICNkOWRmZTI7XFxufVxcbi50ZXh0LXN1Y2Nlc3NbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBjb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMVtkYXRhLXYtM2U2OTUyMTNdIHtcXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XFxuLmJ0bi11cGxvYWRbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5idG4tdXBsb2FkIGlbZGF0YS12LTNlNjk1MjEzXSB7XFxuICBmb250LXNpemU6IDUwcHg7XFxufVxcbi5idG4tc3VjY2Vzcy0yW2RhdGEtdi0zZTY5NTIxM10ge1xcbiAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuMykgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MSwgMTU5LCAzNywgMC41KSAhaW1wb3J0YW50O1xcbn1cXG4jcHJldmlldyBpbWdbZGF0YS12LTNlNjk1MjEzXSB7XFxuICB3aWR0aDogMTEwcHg7XFxuICBoZWlnaHQ6IDkwcHg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udnNfX2Ryb3Bkb3duLXRvZ2dsZSB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcbn1cXG4udnNfX3NlYXJjaCB7XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLmlucHV0LXRlbC5pcy1kaXNhYmxlZCAuaW5wdXQtdGVsX19pbnB1dFtkYXRhLXYtZTU5YmUzYjRdIHtcXG5cXHRjb2xvcjojMzMzIWltcG9ydGFudDtcXG59XFx0XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2U2OTUyMTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zZTY5NTIxMyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNpdGVtYXAgbXItM1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ub3JnLm9yZ19uYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93IG10LTRcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LWZhbWlseVwiOiBcIlNvdXJjZSBTYW5zIFBybywgc2Fucy1zZXJpZiAhaW1wb3J0YW50XCIgfVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtOVwiIH0sIFtcbiAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdEZpYWNyZSBJRDogXCIpLFxuICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wcm9wc29yZy5vcmdfb3B0aW9uY19pZCkpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHB0LTJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg2XCIsIFtfdm0uX3YoXCJlbWFpbDogXCIgKyBfdm0uX3MoX3ZtLnByb3Bzb3JnLm9yZ19lbWFpbCkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDZcIiwgW192bS5fdihcInR5cGU6IFwiICsgX3ZtLl9zKF92bS5wcm9wc29yZy5hdHJfdHlwZV9sYWJlbCkpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDZcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQ29udGFjdCBQZXJzb246IFwiICsgX3ZtLl9zKF92bS5wcm9wc29yZy5hdHJfY29udGFjdF9wZXJzb24pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoNlwiLCBbX3ZtLl92KFwiQWRkcmVzczogXCIgKyBfdm0uX3MoX3ZtLnByb3Bzb3JnLmF0cl9hZGRyZXNzKSldKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZWRpdCA9PSB0cnVlID8gXCJkLW5vbmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbGlja0VkaXQoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0RURJVFxcblxcdFxcdFxcdFxcdFxcdFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5lZGl0ID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0Q2FuY2VsXFxuXFx0XFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiU3RyZWV0XCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19zdHJlZXQsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfc3RyZWV0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBpZDogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3JnLm9yZ19zdHJlZXQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ19zdHJlZXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3duL0NvdW50eS9DaXR5XCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInYtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmNpdGllcyxcbiAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcIm5vLWRyb3BcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcInB1c2gtdGFnc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3Qtb24tdGFiXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLmZldGNoT3B0aW9ucyB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfY2l0eXByb3YsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2NpdHlwcm92XCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfY2l0eXByb3ZcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW192bS5fdihcIlN0YXRlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidi1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICByZWR1Y2U6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pc28yXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLnN0YXRlcyxcbiAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBcIm5vLWRyb3BcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcInB1c2gtdGFnc1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgXCJzZWxlY3Qtb24tdGFiXCI6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZy5vcmdfc3RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX3N0YXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfc3RhdGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW192bS5fdihcIlppcGNvZGVcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcmcub3JnX3ppcGNvZGUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9yZy5vcmdfemlwY29kZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWUgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmcub3JnX3ppcGNvZGUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ub3JnLCBcIm9yZ196aXBjb2RlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTGFuZGxpbmVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ2dWUtcGhvbmUtbnVtYmVyLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYW5kbGluZS10ZWxcIixcbiAgICAgICAgICAgICAgICBjbGFzczogXCJyb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWNvdW50cnktY29kZVwiOiBfdm0uZGVmYXVsdENvdW50cnksXG4gICAgICAgICAgICAgICAgICBcIm5vLWNvdW50cnktc2VsZWN0b3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyTGFiZWw6IFwiTGFuZGxpbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZTogX3ZtLm9uVXBkYXRlIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jb250YWN0X2xhbmQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5vcmcsIFwib3JnX2NvbnRhY3RfbGFuZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcmcub3JnX2NvbnRhY3RfbGFuZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiLlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnJlc3VsdHMuaXNWYWxpZCAhPSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcImQtYmxvY2tcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRhY3QgTnVtYmVyIGlzIG5vdCB2YWxpZCBpbiBVUy5cIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibmFtZVwiIH0gfSwgW192bS5fdihcIk1vYmlsZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInZ1ZS1waG9uZS1udW1iZXItaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vYmlsZS10ZWxcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWNvdW50cnktY29kZVwiOiBfdm0uZGVmYXVsdENvdW50cnksXG4gICAgICAgICAgICAgICAgICBcIm5vLWNvdW50cnktc2VsZWN0b3JcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGVycm9yOiBfdm0ucmVzdWx0czIuaXNWYWxpZCA9PSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgdXBkYXRlOiBfdm0ub25VcGRhdGUyIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3JnLm9yZ19jb250YWN0X21vYmlsZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm9yZywgXCJvcmdfY29udGFjdF9tb2JpbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JnLm9yZ19jb250YWN0X21vYmlsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ucmVzdWx0czIuaXNWYWxpZCA9PSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcImQtYmxvY2tcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIi5cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5yZXN1bHRzMi5pc1ZhbGlkICE9IGZhbHNlID8gXCJkLW5vbmVcIiA6IFwiZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGFjdCBOdW1iZXIgaXMgbm90IHZhbGlkIGluIFVTLlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtN1wiIH0sIFtcbiAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIGJ0biBidG4taW5mbyByb3VuZGVkLTBcIixcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uZWRpdCA9PSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcIlwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlT3JnYW5pemF0aW9uKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXNhdmUgbXItM1wiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFNhdmUgQ2hhbmdlc1xcblxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkFkZHJlc3NcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXQtNSBtYi0xXCIgfSwgW1xuICAgICAgX2MoXCJoNFwiLCBbX3ZtLl92KFwiQ29udGFjdCBOdW1iZXJzXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjMwMHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImdtYXAtbWFwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICByZWY6IFwieHl6XCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGNlbnRlcjogX3ZtLmNlbnRlcixcbiAgICAgICAgICAgIHpvb206IDgsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIHpvb21Db250cm9sOiB0cnVlLFxuICAgICAgICAgICAgICBtYXBUeXBlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIHN0cmVldFZpZXdDb250cm9sOiBmYWxzZSxcbiAgICAgICAgICAgICAgcm90YXRlQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgICAgIGZ1bGxzY3JlZW5Db250cm9sOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImdtYXAtbWFya2VyXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IF92bS5NYXJrZXJMb2NhdGlvbixcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGljb246IFwiaHR0cDovL21hcHMuZ29vZ2xlLmNvbS9tYXBmaWxlcy9tcy9pY29ucy9ibHVlLWRvdC5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRyYWc6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kcmFnZ2luZygkZXZlbnQsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJnbWFwLWluZm8td2luZG93XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBwaXhlbE9mZnNldDogeyB3aWR0aDogMCwgaGVpZ2h0OiAwIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiRHJhZyBtZSFcIixcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiAyXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlNjk1MjEzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2U2OTUyMTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzNlNjk1MjEzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNlNjk1MjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNlNjk1MjEzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2U2OTUyMTMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2U2OTUyMTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2FkbWluLW9yZy1jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTNlNjk1MjEzJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9M2U2OTUyMTMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTY5NTIxMyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWU0OTI2YjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcDMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzllNDkyNmI0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzllNDkyNmI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzllNDkyNmI0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tYXAzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05ZTQ5MjZiNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZTQ5MjZiNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvYWRtaW4tb3JnLWNvbXBvbmVudHMvcHJvZmlsZS9tYXAzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwMy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWU0OTI2YjQmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==