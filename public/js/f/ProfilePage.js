(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/ProfilePage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Object(vee_validate__WEBPACK_IMPORTED_MODULE_1__["extend"])("required", _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__["required"]), {}, {
  message: "This field is required"
}));

var ProfCancelMembership = function ProfCancelMembership() {
  return __webpack_require__.e(/*! import() | js/f/ProfCancelMembership */ "js/f/ProfCancelMembership").then(__webpack_require__.bind(null, /*! ./CancelMembershipModal.vue */ "./resources/js/frontend/components/profile-page/CancelMembershipModal.vue"));
};

var ProfUserType = function ProfUserType() {
  return __webpack_require__.e(/*! import() | js/f/ProfUserType */ "js/f/ProfUserType").then(__webpack_require__.bind(null, /*! ./UserTypeComponent.vue */ "./resources/js/frontend/components/profile-page/UserTypeComponent.vue"));
};

var ProfCardHolder = function ProfCardHolder() {
  return __webpack_require__.e(/*! import() | js/f/ProfCardHolder */ "js/f/ProfCardHolder").then(__webpack_require__.bind(null, /*! ./CardHolder.vue */ "./resources/js/frontend/components/profile-page/CardHolder.vue"));
};

var ProfBusinesInfo = function ProfBusinesInfo() {
  return __webpack_require__.e(/*! import() | js/f/ProfBusinesInfo */ "js/f/ProfBusinesInfo").then(__webpack_require__.bind(null, /*! ./BusinessInformation.vue */ "./resources/js/frontend/components/profile-page/BusinessInformation.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "cancel-membership-modal": ProfCancelMembership,
    "user-type-component": ProfUserType,
    "card-holder": ProfCardHolder,
    "business-information": ProfBusinesInfo
  },
  props: ["propsuser", "propscities", "propsstates", "action", "propssunclub_choices", "wholesaler_discount", "cancel_action", "cc_sc_action", "cc_ws_action", "ach_sc_action", "ach_ws_action"],
  data: function data() {
    return {
      profileImage: "/img/sunfarmacy/default-user.png",
      userType: "1",
      selectedAmount: 1,
      billingType: "1",
      states: [],
      cities: [],
      selectedCity: "",
      selectedState: "",
      user: {},
      sunclub_choices: [],
      sun_is_cancelled: 0,
      expiration_date: "",
      edit: false,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      timer: null,
      cities2: [],
      selectedCity2: null,
      search_cities: [],
      searching_cities: "",
      value: null,
      countries: [],
      contactNumber2: null,
      results: {},
      defaultCountry: 'US',
      countriesList: ['US'],
      contactNumberType: 'Home'
    };
  },
  created: function created() {
    this.getStates();
    this.user = this.propsuser;
    this.profileImage = this.user.image_path;
    this.selectedCity = this.user.city;
    this.contactNumber2 = this.user.contact_number;
    this.contactNumberType = this.user.contact_number_type; // this.selectedState = this.user.state;

    if (this.user.billinginfo.CC_or_ACH == "CC") {
      this.billingType = "1";
    } else {
      this.billingType = "2";
    }

    this.sunclub_choices = this.propssunclub_choices;
    this.selectedAmount = this.user.sunclub_choice_id;
    this.userType = "" + this.user.customer_role;

    if (this.user.customer_role == 2) {
      this.sun_is_cancelled = this.user.sunclub.is_cancelled;
      this.expiration_date = this.user.sunclub.expiration_date;
    } // this.getCities2();
    // this.cities2 = this.propscities;
    // this.getCities();

  },
  computed: {
    getCities: function getCities() {
      var cities = this.propscities;
      var filter = [];
      var id = this.selectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    },
    bgetCities: function bgetCities() {
      var cities = this.propscities;
      var filter = [];
      var id = this.bselectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    }
  },
  methods: {
    onUpdate: function onUpdate(payload) {
      this.results = payload;
    },
    clickEdit: function clickEdit() {
      this.edit = true;
      this.$refs.cardholder.Cancel();
    },
    getCitiesForAutocomplete: function getCitiesForAutocomplete(searchTerm) {
      var _this = this;

      new Promise(function (resolve) {
        window.setTimeout(function () {
          if (!searchTerm) {
            _this.getCities2();
          } else {
            var term = searchTerm.toLowerCase();
            resolve(_this.getCities2(term) //   this.countryList.filter(({ name }) =>
            //     name.toLowerCase().includes(term)
            //   )
            );
          }
        }, 1000);
      });
    },
    getSearchCities: function getSearchCities() {
      var _this2 = this;

      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      this.timer = setTimeout(function () {
        _this2.getCities2();
      }, 700);
    },
    getCities2: function getCities2() {
      var _arguments = arguments,
          _this3 = this;

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
                  _this3.cities2 = res.data;
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStates: function getStates() {
      this.states = this.propsstates;
      this.bstates = this.propsstates;
    },
    // statesChange() {
    //   this.selectedCity = {};
    // },
    // bstatesChange() {
    //   //   console.log(this.selectedState);
    //   this.bselectedCity = {};
    // },
    onFileChange: function onFileChange(e) {
      console.log(e);
      var file = e.target.files[0];
      this.profileImage = URL.createObjectURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".s-user-type .md-radio[data-v-672c0707] {\n  display: flex;\n}\n.my-select[data-v-672c0707] {\n  padding: 0px;\n  margin: 0px;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        { staticClass: "flex-grow-1" },
        [
          _c(
            "b-container",
            { staticClass: "py-5" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "8" } },
                    [
                      _c("div", { staticClass: "d-flex mb-3" }, [
                        _c("div", { staticClass: "w-50" }, [
                          _c("h3", [_c("b", [_vm._v("PROFILE")])])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-row",
                        [
                          _c("b-col", { attrs: { md: "3" } }, [
                            _c(
                              "div",
                              {
                                class:
                                  _vm.edit == true
                                    ? "border border-info p-2"
                                    : ""
                              },
                              [
                                _c("img", {
                                  staticClass: "w-100",
                                  attrs: { src: _vm.profileImage }
                                }),
                                _vm._v(" "),
                                _c(
                                  "md-field",
                                  [
                                    _c("label", [_vm._v("Select image")]),
                                    _vm._v(" "),
                                    _c("md-file", {
                                      attrs: {
                                        name: "image_file",
                                        disabled: !_vm.edit == true
                                      },
                                      on: { change: _vm.onFileChange }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            [
                              _c(
                                "div",
                                {
                                  class:
                                    _vm.edit == true
                                      ? "border border-info p-2"
                                      : ""
                                },
                                [
                                  _c(
                                    "h4",
                                    { staticClass: "font-weight-bold" },
                                    [
                                      _vm._v(
                                        "\n                  User Information\n                  "
                                      ),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-success float-right",
                                          class:
                                            _vm.edit == true ? "d-none" : "",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              return _vm.clickEdit()
                                            }
                                          }
                                        },
                                        [_vm._v("EDIT")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-danger float-right",
                                          class:
                                            _vm.edit == false ? "d-none" : "",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              _vm.edit = false
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "md-field",
                                    [
                                      _c("label", [_vm._v("Email")]),
                                      _vm._v(" "),
                                      _c("md-input", {
                                        attrs: { disabled: "" },
                                        model: {
                                          value: _vm.user.email,
                                          callback: function($$v) {
                                            _vm.$set(_vm.user, "email", $$v)
                                          },
                                          expression: "user.email"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { md: "2" } },
                                        [
                                          _c(
                                            "md-field",
                                            [
                                              _c("label", [_vm._v("Title")]),
                                              _vm._v(" "),
                                              _c(
                                                "md-select",
                                                {
                                                  attrs: { name: "title" },
                                                  model: {
                                                    value: _vm.user.title,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "title",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.title"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "md-option",
                                                    { attrs: { value: "Mr." } },
                                                    [_vm._v("Mr.")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "md-option",
                                                    { attrs: { value: "Ms." } },
                                                    [_vm._v("Ms.")]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "md-option",
                                                    {
                                                      attrs: { value: "Mrs." }
                                                    },
                                                    [_vm._v("Mrs.")]
                                                  )
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "5" } },
                                        [
                                          _c(
                                            "md-field",
                                            [
                                              _c("label", [
                                                _vm._v("Firt name")
                                              ]),
                                              _vm._v(" "),
                                              _c("md-input", {
                                                attrs: {
                                                  name: "first_name",
                                                  required: "",
                                                  disabled: !_vm.edit == true
                                                },
                                                model: {
                                                  value: _vm.user.first_name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "first_name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "user.first_name"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "5" } },
                                        [
                                          _c(
                                            "md-field",
                                            [
                                              _c("label", [
                                                _vm._v("Last name")
                                              ]),
                                              _vm._v(" "),
                                              _c("md-input", {
                                                attrs: {
                                                  name: "last_name",
                                                  required: "",
                                                  disabled: !_vm.edit == true
                                                },
                                                model: {
                                                  value: _vm.user.last_name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "last_name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "user.last_name"
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
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "md-field",
                                    [
                                      _c("label", [_vm._v("Street Address")]),
                                      _vm._v(" "),
                                      _c("md-input", {
                                        attrs: {
                                          name: "street_address",
                                          required: "",
                                          disabled: !_vm.edit == true
                                        },
                                        model: {
                                          value: _vm.user.street_address,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.user,
                                              "street_address",
                                              $$v
                                            )
                                          },
                                          expression: "user.street_address"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-row",
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c(
                                            "md-autocomplete",
                                            {
                                              attrs: {
                                                "md-input-name": "city",
                                                "md-options": _vm.cities2,
                                                disabled: !_vm.edit == true
                                              },
                                              on: {
                                                "md-changed":
                                                  _vm.getCitiesForAutocomplete,
                                                "md-opened":
                                                  _vm.getCitiesForAutocomplete
                                              },
                                              scopedSlots: _vm._u([
                                                {
                                                  key: "md-autocomplete-item",
                                                  fn: function(ref) {
                                                    var item = ref.item
                                                    return [
                                                      _vm._v(_vm._s(item))
                                                    ]
                                                  }
                                                }
                                              ]),
                                              model: {
                                                value: _vm.user.city,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.user,
                                                    "city",
                                                    $$v
                                                  )
                                                },
                                                expression: "user.city"
                                              }
                                            },
                                            [
                                              _c("label", [
                                                _vm._v("Town/County/City")
                                              ])
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c(
                                            "md-field",
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "font" } },
                                                [_vm._v("State")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "md-select",
                                                {
                                                  attrs: { "md-dense": "" },
                                                  model: {
                                                    value: _vm.user.state,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.user,
                                                        "state",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "user.state"
                                                  }
                                                },
                                                _vm._l(_vm.states, function(
                                                  item,
                                                  index
                                                ) {
                                                  return _c(
                                                    "md-option",
                                                    {
                                                      key: index,
                                                      attrs: {
                                                        value: item.id,
                                                        disabled:
                                                          !_vm.edit == true
                                                      }
                                                    },
                                                    [_vm._v(_vm._s(item.name))]
                                                  )
                                                }),
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: _vm.user.state,
                                                    expression: "user.state"
                                                  }
                                                ],
                                                attrs: {
                                                  name: "state",
                                                  type: "hidden"
                                                },
                                                domProps: {
                                                  value: _vm.user.state
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      _vm.user,
                                                      "state",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { md: "4" } },
                                        [
                                          _c(
                                            "md-field",
                                            [
                                              _c("label", [_vm._v("Zip")]),
                                              _vm._v(" "),
                                              _c("md-input", {
                                                attrs: {
                                                  name: "zipcode",
                                                  required: "",
                                                  disabled: !_vm.edit == true
                                                },
                                                model: {
                                                  value: _vm.user.zipcode,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.user,
                                                      "zipcode",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "user.zipcode"
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
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "row" }, [
                                    _c("div", { staticClass: "col" }, [
                                      _c(
                                        "label",
                                        { staticClass: "text-left float-left" },
                                        [_vm._v("Contact Number")]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-row" }, [
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-3" },
                                      [
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.contactNumberType,
                                                expression: "contactNumberType"
                                              }
                                            ],
                                            staticClass: "custom-select",
                                            attrs: {
                                              name: "contact_number_type",
                                              disabled: !_vm.edit == true
                                            },
                                            on: {
                                              change: function($event) {
                                                var $$selectedVal = Array.prototype.filter
                                                  .call(
                                                    $event.target.options,
                                                    function(o) {
                                                      return o.selected
                                                    }
                                                  )
                                                  .map(function(o) {
                                                    var val =
                                                      "_value" in o
                                                        ? o._value
                                                        : o.value
                                                    return val
                                                  })
                                                _vm.contactNumberType = $event
                                                  .target.multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                attrs: {
                                                  selected: "",
                                                  value: "Home"
                                                }
                                              },
                                              [_vm._v("Home")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "Work" } },
                                              [_vm._v("Work")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "Cell" } },
                                              [_vm._v("Cell")]
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "form-group col-md-9" },
                                      [
                                        _c("vue-phone-number-input", {
                                          attrs: {
                                            name: "contact_number",
                                            "default-country-code":
                                              _vm.defaultCountry,
                                            "no-country-selector": "",
                                            disabled: !_vm.edit == true
                                          },
                                          on: { update: _vm.onUpdate },
                                          model: {
                                            value: _vm.contactNumber2,
                                            callback: function($$v) {
                                              _vm.contactNumber2 = $$v
                                            },
                                            expression: "contactNumber2"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.userType === "3"
                                    ? _c(
                                        "div",
                                        [
                                          _c("business-information", {
                                            attrs: {
                                              user: _vm.user,
                                              edit: _vm.edit,
                                              states: _vm.states
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.edit == true
                                    ? _c(
                                        "b-row",
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { md: "12" } },
                                            [
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("br"),
                                              _vm._v(" "),
                                              _c("p", [
                                                _vm._v(
                                                  "\n                      By clicking Submit, I confirm that the given information\n                      is true, complete and accurate.\n                    "
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "float-right",
                                                  attrs: {
                                                    onclick: "LoadingOverlay()",
                                                    type: "submit",
                                                    variant: "success",
                                                    disabled:
                                                      _vm.results.isValid ==
                                                      false
                                                  }
                                                },
                                                [_vm._v("Submit")]
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v(" "),
                              _c("card-holder", {
                                ref: "cardholder",
                                attrs: {
                                  propuser: _vm.user,
                                  billing_type: _vm.billingType,
                                  edit: _vm.edit,
                                  cc_sc_action: _vm.cc_sc_action,
                                  cc_ws_action: _vm.cc_ws_action,
                                  ach_sc_action: _vm.ach_sc_action,
                                  ach_ws_action: _vm.ach_ws_action
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
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    [
                      _c("user-type-component", {
                        attrs: {
                          sun_is_cancelled: _vm.sun_is_cancelled,
                          sunclub_choices: _vm.sunclub_choices,
                          user_type: _vm.userType,
                          wholesaler_discount: _vm.wholesaler_discount,
                          expiration_date: _vm.expiration_date,
                          cancel_action: _vm.cancel_action,
                          selected_amount: _vm.selectedAmount
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
        ],
        1
      ),
      _vm._v(" "),
      _c("cancel-membership-modal", {
        attrs: { cancel_action: _vm.cancel_action }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/profile-page/Profile.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/Profile.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=672c0707&scoped=true& */ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& */ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "672c0707",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/profile-page/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=style&index=0&id=672c0707&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_672c0707_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=672c0707&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/profile-page/Profile.vue?vue&type=template&id=672c0707&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_672c0707_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL1Byb2ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9Qcm9maWxlLnZ1ZT9hZjhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9Qcm9maWxlLnZ1ZT9jZDAyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9Qcm9maWxlLnZ1ZT83ZWQxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2ZpbGUtcGFnZS9Qcm9maWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvUHJvZmlsZS52dWU/YzBmOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvUHJvZmlsZS52dWU/M2I3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9maWxlLXBhZ2UvUHJvZmlsZS52dWU/YTBkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25zQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBbU0sQ0FBZ0IsbVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk47QUFBQTtBQUFBO0FBQUE7QUFBNGMsQ0FBZ0IsNmJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2YvUHJvZmlsZVBhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDwhLS0gPGZvcm0gOmFjdGlvbj1cImFjdGlvblwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxuICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfdG9rZW5cIiA6dmFsdWU9XCJjc3JmXCIgLz4tLT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTFcIj5cbiAgICAgIDxiLWNvbnRhaW5lciBjbGFzcz1cInB5LTVcIj5cbiAgICAgICAgPGItcm93PlxuICAgICAgICAgIDxiLWNvbCBtZD1cIjhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbWItM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy01MFwiPlxuICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgIDxiPlBST0ZJTEU8L2I+XG4gICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy01MFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiZWRpdCA9PSB0cnVlPyAnZC1ub25lJyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cImVkaXQgPSB0cnVlXCJcbiAgICAgICAgICAgICAgICA+RURJVDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj4tLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGItcm93PlxuICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCIzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJlZGl0ID09IHRydWU/ICdib3JkZXIgYm9yZGVyLWluZm8gcC0yJyA6ICcnXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIDpzcmM9XCJwcm9maWxlSW1hZ2VcIiBjbGFzcz1cInctMTAwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlNlbGVjdCBpbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1maWxlIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIiBuYW1lPVwiaW1hZ2VfZmlsZVwiIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvbWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgIDxiLWNvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cImVkaXQgPT0gdHJ1ZT8gJ2JvcmRlciBib3JkZXItaW5mbyBwLTInIDogJydcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgVXNlciBJbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiZWRpdCA9PSB0cnVlPyAnZC1ub25lJyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xpY2tFZGl0KClcIlxuICAgICAgICAgICAgICAgICAgICA+RURJVDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0ID09IGZhbHNlPyAnZC1ub25lJyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIGZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0ID0gZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgICA+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dCB2LW1vZGVsPVwidXNlci5lbWFpbFwiIGRpc2FibGVkPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICA8L21kLWZpZWxkPlxuXG4gICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLXNlbGVjdCB2LW1vZGVsPVwidXNlci50aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtb3B0aW9uIHZhbHVlPVwiTXIuXCI+TXIuPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1vcHRpb24gdmFsdWU9XCJNcy5cIj5Ncy48L21kLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG1kLW9wdGlvbiB2YWx1ZT1cIk1ycy5cIj5NcnMuPC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1kLW9wdGlvbiB2YWx1ZT1cIkVuZ3IuXCI+RW5nci48L21kLW9wdGlvbj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG1kLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkZpcnQgbmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5maXJzdF9uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbWQtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPGItY29sIG1kPVwiNVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5MYXN0IG5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5sYXN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPG1kLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29udGFjdCBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bWQtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdF9udW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ1c2VyLmNvbnRhY3RfbnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID48L21kLWlucHV0PlxuICAgICAgICAgICAgICAgICAgPC9tZC1maWVsZD4gLS0+XG4gICAgICAgICAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TdHJlZXQgQWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdHJlZXRfYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInVzZXIuc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxuICAgICAgICAgICAgICAgICAgICA+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgIDwvbWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICA8Yi1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBtZC1pbnB1dC1uYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDptZC1vcHRpb25zPVwiY2l0aWVzMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWQtY2hhbmdlZD1cImdldENpdGllc0ZvckF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAbWQtb3BlbmVkPVwiZ2V0Q2l0aWVzRm9yQXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cIiFlZGl0PT10cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VG93bi9Db3VudHkvQ2l0eTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibWQtYXV0b2NvbXBsZXRlLWl0ZW1cIiBzbG90LXNjb3BlPVwieyBpdGVtIH1cIj57e2l0ZW19fTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9tZC1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWQtYXV0b2NvbXBsZXRlIHYtbW9kZWw9XCJzZWxlY3RlZENpdHkyXCIgOm1kLW9wdGlvbnM9XCJjaXRpZXMyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibWQtYXV0b2NvbXBsZXRlLWl0ZW1cIiBzbG90LXNjb3BlPVwieyBpdGVtIH1cIj57eyBpdGVtLm5hbWUgfX08L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbWQtYXV0b2NvbXBsZXRlPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bWQtYXV0b2NvbXBsZXRlIHYtbW9kZWw9XCJzZWxlY3RlZFN0YXRlXCIgOm1kLW9wdGlvbnM9XCJzdGF0ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibWQtYXV0b2NvbXBsZXRlLWl0ZW1cIiBzbG90LXNjb3BlPVwieyBpdGVtIH1cIj57eyBpdGVtLm5hbWUgfX08L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbWQtYXV0b2NvbXBsZXRlPi0tPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIG15LXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInN0YXRlc0NoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc3RhdGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0uaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICA+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgc3R5bGU9XCJwYWRkaW5nOjBweDsgbWFyZ2luZTowcHg7XCI+Q2l0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gbXktc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiIWVkaXQ9PXRydWVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGdldENpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgPnt7aXRlbS5uYW1lfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD4tLT5cblxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG1kLWF1dG9jb21wbGV0ZSB2LW1vZGVsPVwic2VsZWN0ZWRTdGF0ZVwiIDptZC1vcHRpb25zPVwic3RhdGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlN0YXRlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm1kLWF1dG9jb21wbGV0ZS1pdGVtXCIgc2xvdC1zY29wZT1cInsgaXRlbSB9XCI+e3sgaXRlbS5uYW1lIH19PC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWF1dG9jb21wbGV0ZT4tLT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxtZC1maWVsZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmb250XCI+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1kLXNlbGVjdCB2LW1vZGVsPVwidXNlci5zdGF0ZVwiIG1kLWRlbnNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bWQtb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHN0YXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57e2l0ZW0ubmFtZX19PC9tZC1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21kLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwidXNlci5zdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHR5cGU9XCJoaWRkZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgIDwvYi1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDxiLWNvbCBtZD1cIjRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bWQtZmllbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+WmlwPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxtZC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwidXNlci56aXBjb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInppcGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9tZC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L21kLWZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgICAgICAgPC9iLXJvdz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1sZWZ0IGZsb2F0LWxlZnRcIj5Db250YWN0IE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cImNvbnRhY3ROdW1iZXJUeXBlXCIgbmFtZT1cImNvbnRhY3RfbnVtYmVyX3R5cGVcIiBjbGFzcz1cImN1c3RvbS1zZWxlY3RcIiA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIkhvbWVcIj5Ib21lPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXb3JrXCI+V29yazwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2VsbFwiPkNlbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBjb2wtbWQtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPFZhbGlkYXRpb25Qcm92aWRlciBuYW1lPVwiY29udGFjdE51bWJlclwiIHJ1bGVzPVwicmVxdWlyZWRcIj4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtcGhvbmUtbnVtYmVyLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0X251bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU9XCJvblVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkZWZhdWx0LWNvdW50cnktY29kZT1cImRlZmF1bHRDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm8tY291bnRyeS1zZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY29udGFjdE51bWJlcjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCIhZWRpdD09dHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPC9WYWxpZGF0aW9uUHJvdmlkZXI+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ1c2VyVHlwZSA9PT0gJzMnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXNpbmVzcy1pbmZvcm1hdGlvbiA6dXNlcj1cInVzZXJcIiA6ZWRpdD1cImVkaXRcIiA6c3RhdGVzPVwic3RhdGVzXCI+PC9idXNpbmVzcy1pbmZvcm1hdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8Yi1yb3cgdi1pZj1cImVkaXQgPT0gdHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Yi1jb2wgbWQ9XCIxMlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQnkgY2xpY2tpbmcgU3VibWl0LCBJIGNvbmZpcm0gdGhhdCB0aGUgZ2l2ZW4gaW5mb3JtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzIHRydWUsIGNvbXBsZXRlIGFuZCBhY2N1cmF0ZS5cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPGItYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrPVwiTG9hZGluZ092ZXJsYXkoKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicmVzdWx0cy5pc1ZhbGlkID09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+U3VibWl0PC9iLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgICAgICAgICAgIDwvYi1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxjYXJkLWhvbGRlclxuICAgICAgICAgICAgICAgICAgOnByb3B1c2VyPVwidXNlclwiXG4gICAgICAgICAgICAgICAgICA6YmlsbGluZ190eXBlPVwiYmlsbGluZ1R5cGVcIlxuICAgICAgICAgICAgICAgICAgOmVkaXQ9XCJlZGl0XCJcbiAgICAgICAgICAgICAgICAgIDpjY19zY19hY3Rpb249XCJjY19zY19hY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgOmNjX3dzX2FjdGlvbj1cImNjX3dzX2FjdGlvblwiXG4gICAgICAgICAgICAgICAgICA6YWNoX3NjX2FjdGlvbj1cImFjaF9zY19hY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgOmFjaF93c19hY3Rpb249XCJhY2hfd3NfYWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHJlZj1cImNhcmRob2xkZXJcIlxuICAgICAgICAgICAgICAgID48L2NhcmQtaG9sZGVyPlxuICAgICAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgICAgPC9iLXJvdz5cbiAgICAgICAgICA8L2ItY29sPlxuICAgICAgICAgIDxiLWNvbD5cbiAgICAgICAgICAgIDx1c2VyLXR5cGUtY29tcG9uZW50XG4gICAgICAgICAgICAgIDpzdW5faXNfY2FuY2VsbGVkPVwic3VuX2lzX2NhbmNlbGxlZFwiXG4gICAgICAgICAgICAgIDpzdW5jbHViX2Nob2ljZXM9XCJzdW5jbHViX2Nob2ljZXNcIlxuICAgICAgICAgICAgICA6dXNlcl90eXBlPVwidXNlclR5cGVcIlxuICAgICAgICAgICAgICA6d2hvbGVzYWxlcl9kaXNjb3VudD1cIndob2xlc2FsZXJfZGlzY291bnRcIlxuICAgICAgICAgICAgICA6ZXhwaXJhdGlvbl9kYXRlPVwiZXhwaXJhdGlvbl9kYXRlXCJcbiAgICAgICAgICAgICAgOmNhbmNlbF9hY3Rpb249XCJjYW5jZWxfYWN0aW9uXCJcbiAgICAgICAgICAgICAgOnNlbGVjdGVkX2Ftb3VudD1cInNlbGVjdGVkQW1vdW50XCJcbiAgICAgICAgICAgID48L3VzZXItdHlwZS1jb21wb25lbnQ+XG4gICAgICAgICAgPC9iLWNvbD5cbiAgICAgICAgPC9iLXJvdz5cbiAgICAgIDwvYi1jb250YWluZXI+XG4gICAgPC9kaXY+XG5cbiAgICA8Y2FuY2VsLW1lbWJlcnNoaXAtbW9kYWwgOmNhbmNlbF9hY3Rpb249XCJjYW5jZWxfYWN0aW9uXCI+PC9jYW5jZWwtbWVtYmVyc2hpcC1tb2RhbD5cbiAgPC9kaXY+XG4gIDwhLS0gPC9mb3JtPiAtLT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tIFwidmVlLXZhbGlkYXRlXCI7XG5pbXBvcnQgeyByZXF1aXJlZCwgZW1haWwsIGlzIH0gZnJvbSBcInZlZS12YWxpZGF0ZS9kaXN0L3J1bGVzXCI7XG5leHRlbmQoXCJyZXF1aXJlZFwiLCB7XG4gIC4uLnJlcXVpcmVkLFxuICBtZXNzYWdlOiBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIixcbn0pO1xuY29uc3QgUHJvZkNhbmNlbE1lbWJlcnNoaXAgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL1Byb2ZDYW5jZWxNZW1iZXJzaGlwXCIgKi8gXCIuL0NhbmNlbE1lbWJlcnNoaXBNb2RhbC52dWVcIlxuICApO1xuY29uc3QgUHJvZlVzZXJUeXBlID0gKCkgPT5cbiAgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9Qcm9mVXNlclR5cGVcIiAqLyBcIi4vVXNlclR5cGVDb21wb25lbnQudnVlXCIpO1xuY29uc3QgUHJvZkNhcmRIb2xkZXIgPSAoKSA9PlxuICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL1Byb2ZDYXJkSG9sZGVyXCIgKi8gXCIuL0NhcmRIb2xkZXIudnVlXCIpO1xuY29uc3QgUHJvZkJ1c2luZXNJbmZvID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9Qcm9mQnVzaW5lc0luZm9cIiAqLyBcIi4vQnVzaW5lc3NJbmZvcm1hdGlvbi52dWVcIlxuICApO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNvbXBvbmVudHM6IHtcbiAgICBcImNhbmNlbC1tZW1iZXJzaGlwLW1vZGFsXCI6IFByb2ZDYW5jZWxNZW1iZXJzaGlwLFxuICAgIFwidXNlci10eXBlLWNvbXBvbmVudFwiOiBQcm9mVXNlclR5cGUsXG4gICAgXCJjYXJkLWhvbGRlclwiOiBQcm9mQ2FyZEhvbGRlcixcbiAgICBcImJ1c2luZXNzLWluZm9ybWF0aW9uXCI6IFByb2ZCdXNpbmVzSW5mbyxcbiAgfSxcbiAgcHJvcHM6IFtcbiAgICBcInByb3BzdXNlclwiLFxuICAgIFwicHJvcHNjaXRpZXNcIixcbiAgICBcInByb3Bzc3RhdGVzXCIsXG4gICAgXCJhY3Rpb25cIixcbiAgICBcInByb3Bzc3VuY2x1Yl9jaG9pY2VzXCIsXG4gICAgXCJ3aG9sZXNhbGVyX2Rpc2NvdW50XCIsXG4gICAgXCJjYW5jZWxfYWN0aW9uXCIsXG4gICAgXCJjY19zY19hY3Rpb25cIixcbiAgICBcImNjX3dzX2FjdGlvblwiLFxuICAgIFwiYWNoX3NjX2FjdGlvblwiLFxuICAgIFwiYWNoX3dzX2FjdGlvblwiLFxuICBdLFxuXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2ZpbGVJbWFnZTogXCIvaW1nL3N1bmZhcm1hY3kvZGVmYXVsdC11c2VyLnBuZ1wiLFxuXG4gICAgICB1c2VyVHlwZTogXCIxXCIsXG4gICAgICBzZWxlY3RlZEFtb3VudDogMSxcbiAgICAgIGJpbGxpbmdUeXBlOiBcIjFcIixcblxuICAgICAgc3RhdGVzOiBbXSxcbiAgICAgIGNpdGllczogW10sXG4gICAgICBzZWxlY3RlZENpdHk6IFwiXCIsXG4gICAgICBzZWxlY3RlZFN0YXRlOiBcIlwiLFxuXG4gICAgICB1c2VyOiB7fSxcblxuICAgICAgc3VuY2x1Yl9jaG9pY2VzOiBbXSxcblxuICAgICAgc3VuX2lzX2NhbmNlbGxlZDogMCxcblxuICAgICAgZXhwaXJhdGlvbl9kYXRlOiBcIlwiLFxuXG4gICAgICBlZGl0OiBmYWxzZSxcbiAgICAgIGNzcmY6IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXG4gICAgICB0aW1lcjogbnVsbCxcbiAgICAgIGNpdGllczI6IFtdLFxuICAgICAgc2VsZWN0ZWRDaXR5MjogbnVsbCxcbiAgICAgIHNlYXJjaF9jaXRpZXM6IFtdLFxuICAgICAgc2VhcmNoaW5nX2NpdGllczogXCJcIixcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY291bnRyaWVzOiBbXSxcbiAgICAgIGNvbnRhY3ROdW1iZXIyOiBudWxsLFxuICAgICAgcmVzdWx0czoge30sXG4gICAgICBkZWZhdWx0Q291bnRyeTogJ1VTJyxcbiAgICAgIGNvdW50cmllc0xpc3Q6IFsnVVMnXSxcbiAgICAgIGNvbnRhY3ROdW1iZXJUeXBlOiAnSG9tZScsXG4gICAgfTtcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuZ2V0U3RhdGVzKCk7XG4gICAgdGhpcy51c2VyID0gdGhpcy5wcm9wc3VzZXI7XG4gICAgdGhpcy5wcm9maWxlSW1hZ2UgPSB0aGlzLnVzZXIuaW1hZ2VfcGF0aDtcbiAgICB0aGlzLnNlbGVjdGVkQ2l0eSA9IHRoaXMudXNlci5jaXR5O1xuICAgIHRoaXMuY29udGFjdE51bWJlcjIgPSB0aGlzLnVzZXIuY29udGFjdF9udW1iZXI7XG4gICAgdGhpcy5jb250YWN0TnVtYmVyVHlwZSA9IHRoaXMudXNlci5jb250YWN0X251bWJlcl90eXBlO1xuICAgIC8vIHRoaXMuc2VsZWN0ZWRTdGF0ZSA9IHRoaXMudXNlci5zdGF0ZTtcblxuICAgIGlmICh0aGlzLnVzZXIuYmlsbGluZ2luZm8uQ0Nfb3JfQUNIID09IFwiQ0NcIikge1xuICAgICAgdGhpcy5iaWxsaW5nVHlwZSA9IFwiMVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJpbGxpbmdUeXBlID0gXCIyXCI7XG4gICAgfVxuXG4gICAgdGhpcy5zdW5jbHViX2Nob2ljZXMgPSB0aGlzLnByb3Bzc3VuY2x1Yl9jaG9pY2VzO1xuICAgIHRoaXMuc2VsZWN0ZWRBbW91bnQgPSB0aGlzLnVzZXIuc3VuY2x1Yl9jaG9pY2VfaWQ7XG4gICAgdGhpcy51c2VyVHlwZSA9IFwiXCIgKyB0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZTtcblxuICAgIGlmICh0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAyKSB7XG4gICAgICB0aGlzLnN1bl9pc19jYW5jZWxsZWQgPSB0aGlzLnVzZXIuc3VuY2x1Yi5pc19jYW5jZWxsZWQ7XG4gICAgICB0aGlzLmV4cGlyYXRpb25fZGF0ZSA9IHRoaXMudXNlci5zdW5jbHViLmV4cGlyYXRpb25fZGF0ZTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmdldENpdGllczIoKTtcbiAgICAvLyB0aGlzLmNpdGllczIgPSB0aGlzLnByb3BzY2l0aWVzO1xuXG4gICAgLy8gdGhpcy5nZXRDaXRpZXMoKTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGdldENpdGllcygpIHtcbiAgICAgIGxldCBjaXRpZXMgPSB0aGlzLnByb3BzY2l0aWVzO1xuICAgICAgbGV0IGZpbHRlciA9IFtdO1xuICAgICAgdmFyIGlkID0gdGhpcy5zZWxlY3RlZFN0YXRlO1xuICAgICAgdmFyIGZpbHRlcmVkQ2l0aWVzID0gY2l0aWVzLmZpbHRlcihmdW5jdGlvbiAoY2l0eSkge1xuICAgICAgICByZXR1cm4gY2l0eS5zdGF0ZV9pZCA9PSBpZDtcbiAgICAgIH0pO1xuICAgICAgZmlsdGVyID0gZmlsdGVyZWRDaXRpZXM7XG4gICAgICByZXR1cm4gZmlsdGVyO1xuICAgIH0sXG4gICAgYmdldENpdGllcygpIHtcbiAgICAgIGxldCBjaXRpZXMgPSB0aGlzLnByb3BzY2l0aWVzO1xuICAgICAgbGV0IGZpbHRlciA9IFtdO1xuICAgICAgdmFyIGlkID0gdGhpcy5ic2VsZWN0ZWRTdGF0ZTtcbiAgICAgIHZhciBmaWx0ZXJlZENpdGllcyA9IGNpdGllcy5maWx0ZXIoZnVuY3Rpb24gKGNpdHkpIHtcbiAgICAgICAgcmV0dXJuIGNpdHkuc3RhdGVfaWQgPT0gaWQ7XG4gICAgICB9KTtcbiAgICAgIGZpbHRlciA9IGZpbHRlcmVkQ2l0aWVzO1xuICAgICAgcmV0dXJuIGZpbHRlcjtcbiAgICB9LFxuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBvblVwZGF0ZSAocGF5bG9hZCkge1xuICAgICAgICAgICAgdGhpcy5yZXN1bHRzID0gcGF5bG9hZFxuICAgIH0sXG4gICAgY2xpY2tFZGl0KCkge1xuICAgICAgdGhpcy5lZGl0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuJHJlZnMuY2FyZGhvbGRlci5DYW5jZWwoKTtcbiAgICB9LFxuXG4gICAgZ2V0Q2l0aWVzRm9yQXV0b2NvbXBsZXRlKHNlYXJjaFRlcm0pIHtcbiAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBpZiAoIXNlYXJjaFRlcm0pIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2l0aWVzMigpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICAgICAgdGhpcy5nZXRDaXRpZXMyKHRlcm0pXG4gICAgICAgICAgICAgIC8vICAgdGhpcy5jb3VudHJ5TGlzdC5maWx0ZXIoKHsgbmFtZSB9KSA9PlxuICAgICAgICAgICAgICAvLyAgICAgbmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRlcm0pXG4gICAgICAgICAgICAgIC8vICAgKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIGdldFNlYXJjaENpdGllcygpIHtcbiAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Q2l0aWVzMigpO1xuICAgICAgfSwgNzAwKTtcbiAgICB9LFxuXG4gICAgYXN5bmMgZ2V0Q2l0aWVzMihzZWFyY2hpbmcgPSBudWxsKSB7XG4gICAgICBsZXQgcGFyYW07XG4gICAgICBwYXJhbSA9IHtcbiAgICAgICAgc2VhcmNoOiBzZWFyY2hpbmcsXG4gICAgICB9O1xuICAgICAgYXdhaXQgYXhpb3Moe1xuICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgIHVybDogXCIvZGF0YS9zZWFyY2hjaXRpZXNcIixcbiAgICAgICAgcGFyYW1zOiBwYXJhbSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICB0aGlzLmNpdGllczIgPSByZXMuZGF0YTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0U3RhdGVzKCkge1xuICAgICAgdGhpcy5zdGF0ZXMgPSB0aGlzLnByb3Bzc3RhdGVzO1xuICAgICAgdGhpcy5ic3RhdGVzID0gdGhpcy5wcm9wc3N0YXRlcztcbiAgICB9LFxuICAgIC8vIHN0YXRlc0NoYW5nZSgpIHtcbiAgICAvLyAgIHRoaXMuc2VsZWN0ZWRDaXR5ID0ge307XG4gICAgLy8gfSxcblxuICAgIC8vIGJzdGF0ZXNDaGFuZ2UoKSB7XG4gICAgLy8gICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRTdGF0ZSk7XG4gICAgLy8gICB0aGlzLmJzZWxlY3RlZENpdHkgPSB7fTtcbiAgICAvLyB9LFxuXG4gICAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgdGhpcy5wcm9maWxlSW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5zLXVzZXItdHlwZSB7XG4gIC5tZC1yYWRpbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLm15LXNlbGVjdCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG5cbi5tZC1hdXRvY29tcGxldGUge1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnMtdXNlci10eXBlIC5tZC1yYWRpb1tkYXRhLXYtNjcyYzA3MDddIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5teS1zZWxlY3RbZGF0YS12LTY3MmMwNzA3XSB7XFxuICBwYWRkaW5nOiAwcHg7XFxuICBtYXJnaW46IDBweDtcXG4gIGJvcmRlci10b3A6IDBweDtcXG4gIGJvcmRlci1sZWZ0OiAwcHg7XFxuICBib3JkZXItcmlnaHQ6IDBweDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzJjMDcwNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjcyYzA3MDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NzJjMDcwNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvdy0xXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJiLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJweS01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiOFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiUFJPRklMRVwiKV0pXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWNvbFwiLCB7IGF0dHJzOiB7IG1kOiBcIjNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXIgYm9yZGVyLWluZm8gcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0ucHJvZmlsZUltYWdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJTZWxlY3QgaW1hZ2VcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIm1kLWZpbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaW1hZ2VfZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlciBib3JkZXItaW5mbyBwLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgVXNlciBJbmZvcm1hdGlvblxcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVkaXQgPT0gdHJ1ZSA/IFwiZC1ub25lXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2xpY2tFZGl0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkVESVRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnRuIGJ0bi1kYW5nZXIgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZWRpdCA9PSBmYWxzZSA/IFwiZC1ub25lXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiRW1haWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udXNlciwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1yb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiMlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiVGl0bGVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ0aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci50aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJNci5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1yLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1vcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIk1zLlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTXMuXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kLW9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHZhbHVlOiBcIk1ycy5cIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTXJzLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGaXJ0IG5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpcnN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmZpcnN0X25hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiNVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1maWVsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMYXN0IG5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJsYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5sYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXN0X25hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLmxhc3RfbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbX3ZtLl92KFwiU3RyZWV0IEFkZHJlc3NcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJtZC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RyZWV0X2FkZHJlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICFfdm0uZWRpdCA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnN0cmVldF9hZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0cmVldF9hZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuc3RyZWV0X2FkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kLWF1dG9jb21wbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtaW5wdXQtbmFtZVwiOiBcImNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtb3B0aW9uc1wiOiBfdm0uY2l0aWVzMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtY2hhbmdlZFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0Q2l0aWVzRm9yQXV0b2NvbXBsZXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1vcGVuZWRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldENpdGllc0ZvckF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJtZC1hdXRvY29tcGxldGUtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocmVmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByZWYuaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInVzZXIuY2l0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUb3duL0NvdW50eS9DaXR5XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZm9yOiBcImZvbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RhdGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZC1zZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJtZC1kZW5zZVwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlci5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnN0YXRlcywgZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWQtb3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udXNlci5zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LmNvbXBvc2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBtZDogXCI0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1kLWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIFtfdm0uX3YoXCJaaXBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibWQtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ6aXBjb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogIV92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnVzZXIuemlwY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInppcGNvZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ1c2VyLnppcGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZWZ0IGZsb2F0LWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250YWN0IE51bWJlclwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1yb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIGNvbC1tZC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb250YWN0TnVtYmVyVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGFjdE51bWJlclR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLXNlbGVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29udGFjdF9udW1iZXJfdHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfdmFsdWVcIiBpbiBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gby5fdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRhY3ROdW1iZXJUeXBlID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiSG9tZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSG9tZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHZhbHVlOiBcIldvcmtcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIldvcmtcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB2YWx1ZTogXCJDZWxsXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDZWxsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgY29sLW1kLTlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2dWUtcGhvbmUtbnVtYmVyLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY29udGFjdF9udW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWNvdW50cnktY29kZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWZhdWx0Q291bnRyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuby1jb3VudHJ5LXNlbGVjdG9yXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmVkaXQgPT0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZTogX3ZtLm9uVXBkYXRlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRhY3ROdW1iZXIyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbnRhY3ROdW1iZXIyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGFjdE51bWJlcjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51c2VyVHlwZSA9PT0gXCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJ1c2luZXNzLWluZm9ybWF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiBfdm0udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiBfdm0uZWRpdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZXM6IF92bS5zdGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lZGl0ID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImItY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbWQ6IFwiMTJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIEJ5IGNsaWNraW5nIFN1Ym1pdCwgSSBjb25maXJtIHRoYXQgdGhlIGdpdmVuIGluZm9ybWF0aW9uXFxuICAgICAgICAgICAgICAgICAgICAgIGlzIHRydWUsIGNvbXBsZXRlIGFuZCBhY2N1cmF0ZS5cXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbmNsaWNrOiBcIkxvYWRpbmdPdmVybGF5KClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ6IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlc3VsdHMuaXNWYWxpZCA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTdWJtaXRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJjYXJkLWhvbGRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjYXJkaG9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHVzZXI6IF92bS51c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbGxpbmdfdHlwZTogX3ZtLmJpbGxpbmdUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IF92bS5lZGl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjX3NjX2FjdGlvbjogX3ZtLmNjX3NjX2FjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjY193c19hY3Rpb246IF92bS5jY193c19hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNoX3NjX2FjdGlvbjogX3ZtLmFjaF9zY19hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNoX3dzX2FjdGlvbjogX3ZtLmFjaF93c19hY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidXNlci10eXBlLWNvbXBvbmVudFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdW5faXNfY2FuY2VsbGVkOiBfdm0uc3VuX2lzX2NhbmNlbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3VuY2x1Yl9jaG9pY2VzOiBfdm0uc3VuY2x1Yl9jaG9pY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3R5cGU6IF92bS51c2VyVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2hvbGVzYWxlcl9kaXNjb3VudDogX3ZtLndob2xlc2FsZXJfZGlzY291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyYXRpb25fZGF0ZTogX3ZtLmV4cGlyYXRpb25fZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsX2FjdGlvbjogX3ZtLmNhbmNlbF9hY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkX2Ftb3VudDogX3ZtLnNlbGVjdGVkQW1vdW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNhbmNlbC1tZW1iZXJzaGlwLW1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgY2FuY2VsX2FjdGlvbjogX3ZtLmNhbmNlbF9hY3Rpb24gfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjcyYzA3MDcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJvZmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjcyYzA3MDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NzJjMDcwN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY3MmMwNzA3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY3MmMwNzA3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY3MmMwNzA3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzJjMDcwNyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NzJjMDcwNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZmlsZS1wYWdlL1Byb2ZpbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjcyYzA3MDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY3MmMwNzA3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NzJjMDcwNyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=