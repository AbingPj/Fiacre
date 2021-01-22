(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/tabLandingPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["store"],
  data: function data() {
    return {
      //   title: "",
      header: "",
      content: "",
      logo: "",
      slider1: "",
      slider2: "",
      slider3: "",
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      feature_products_is_random: "true"
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      LoadingOverlay();
      var myForm = document.getElementById("landingForm");
      var formData = new FormData(myForm);
      axios.post("/admin/settings/contents/landingSubmit", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        window.location.href = res.data;
      })["catch"](function (err) {
        _this.errors.record(err.response.data.errors);

        _this.showErrorMessage(_this.errors.getArrayOfMessages());

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    // selectProduct() {
    //   $("#selectProductsModal2").modal("show");
    // },
    showErrorMessage: function showErrorMessage(errors) {
      this.$events.fire("showErrorMessage", errors);
    },
    showSuccessMessage: function showSuccessMessage(errors) {
      this.$events.fire("showSuccessMessage", errors);
    },
    cancel: function cancel() {},
    onFileChangeLogo: function onFileChangeLogo(e) {
      var file = e.target.files[0];
      this.logo = URL.createObjectURL(file);
    },
    onFileChangeSlider1: function onFileChangeSlider1(e) {
      var file = e.target.files[0];
      this.slider1 = URL.createObjectURL(file);
    },
    onFileChangeSlider2: function onFileChangeSlider2(e) {
      var file = e.target.files[0];
      this.slider2 = URL.createObjectURL(file);
    },
    onFileChangeSlider3: function onFileChangeSlider3(e) {
      var file = e.target.files[0];
      this.slider3 = URL.createObjectURL(file);
    }
  },
  created: function created() {
    this.header = this.store.landing.header;
    this.content = this.store.landing.content;
    this.logo = this.store.landing.img_link_logo;
    this.slider1 = this.store.landing.img_link_slider1;
    this.slider2 = this.store.landing.img_link_slider2;
    this.slider3 = this.store.landing.img_link_slider3;
  },
  mounted: function mounted() {
    $(document).ready(function () {
      //   $("#summernote_title").summernote({
      //     placeholder: "Title",
      //     tabsize: 1,
      //     toolbar: [
      //       ["style", ["style"]],
      //       ["font", ["bold", "underline", "clear"]],
      //       ["para", ["paragraph"]],
      //       ["view", ["fullscreen", "codeview", "help"]],
      //     ],
      //   });
      $("#landing_content2").summernote({
        placeholder: "Content",
        tabsize: 10,
        height: 150
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-12 mt-2" }, [
        _c(
          "form",
          {
            attrs: { id: "landingForm", name: "landingForm" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save()
              }
            }
          },
          [
            _c("div", { staticClass: "form-group mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "font-weight-bold",
                  attrs: { for: "landing_header" }
                },
                [_vm._v("Header")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.header,
                    expression: "header"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "header" },
                domProps: { value: _vm.header },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.header = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c(
                "label",
                { staticClass: "font-weight-bold", attrs: { for: "content" } },
                [_vm._v("Content No. 1")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.content,
                    expression: "content"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "content", rows: "4" },
                domProps: { value: _vm.content },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.content = $event.target.value
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "font-weight-bold",
                  attrs: { for: "landing_header" }
                },
                [_vm._v("Banner Logo")]
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("img", {
                staticStyle: {
                  width: "120px",
                  height: "80px",
                  "object-fit": "cover"
                },
                attrs: { src: _vm.logo }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mt-3 mb-3 w-75" }, [
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: { type: "file", name: "logo" },
                    on: { change: _vm.onFileChangeLogo }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "inputGroupFile01" }
                    },
                    [_vm._v("Choose file")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-3" }, [
              _c(
                "label",
                {
                  staticClass: "font-weight-bold",
                  attrs: { for: "landing_header" }
                },
                [_vm._v("Slider Images")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-row" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("div", [_vm._v("Slider 1")]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticStyle: {
                        width: "120px",
                        height: "80px",
                        "object-fit": "cover"
                      },
                      attrs: { src: _vm.slider1 }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "p-2" }, [
                  _c("div", [_vm._v("Slider 2")]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticStyle: {
                        width: "120px",
                        height: "80px",
                        "object-fit": "cover"
                      },
                      attrs: { src: _vm.slider2 }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "p-2" }, [
                  _c("div", [_vm._v("Slider 3")]),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      staticStyle: {
                        width: "120px",
                        height: "80px",
                        "object-fit": "cover"
                      },
                      attrs: { src: _vm.slider3 }
                    })
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3 w-75" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: { type: "file", name: "slider1" },
                    on: { change: _vm.onFileChangeSlider1 }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "inputGroupFile01" }
                    },
                    [_vm._v("Choose file")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3 w-75" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: { type: "file", name: "slider2" },
                    on: { change: _vm.onFileChangeSlider2 }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "inputGroupFile01" }
                    },
                    [_vm._v("Choose file")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-group mb-3 w-75" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("div", { staticClass: "custom-file" }, [
                  _c("input", {
                    staticClass: "custom-file-input",
                    attrs: { type: "file", name: "slider3" },
                    on: { change: _vm.onFileChangeSlider3 }
                  }),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "custom-file-label",
                      attrs: { for: "inputGroupFile01" }
                    },
                    [_vm._v("Choose file")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("br")
            ]),
            _vm._v(" "),
            _vm._m(4)
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
        _c("h5", [_c("b", [_vm._v("Home Page Content Settings")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Slider 1")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Slider 2")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("Slider 3")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-right" }, [
      _c("button", { staticClass: "btn btn-success mr-2" }, [_vm._v("SAVE")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/settings/tabLandingPage.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabLandingPage.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabLandingPage.vue?vue&type=template&id=39f87cbd& */ "./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd&");
/* harmony import */ var _tabLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabLandingPage.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/tabLandingPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabLandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabLandingPage.vue?vue&type=template&id=39f87cbd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabLandingPage.vue?vue&type=template&id=39f87cbd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabLandingPage_vue_vue_type_template_id_39f87cbd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJMYW5kaW5nUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJMYW5kaW5nUGFnZS52dWU/OWQ1MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkxhbmRpbmdQYWdlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkxhbmRpbmdQYWdlLnZ1ZT8zODI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvdGFiTGFuZGluZ1BhZ2UudnVlPzdjNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvZXJyb3JDbGFzcy5qcyJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5Iiwic3RyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImtleSIsImdldCIsImFyciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMktBO0FBRUE7QUFDQSxrQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBRkE7QUFHQSxpQkFIQTtBQUlBLGNBSkE7QUFLQSxpQkFMQTtBQU1BLGlCQU5BO0FBT0EsaUJBUEE7QUFTQSx1RUFUQTtBQVdBO0FBWEE7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QUFTLEtBQUtGLEdBQUwsQ0FBU0QsR0FBVCxDQUFUO0FBQ0g7QUFDSjs7QUFDRCxhQUFPRSxHQUFQO0FBQ0g7OzswQkFFSztBQUNGLGFBQU9MLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUF6QztBQUNIIiwiZmlsZSI6ImpzL2IvdGFiTGFuZGluZ1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8aDU+XG4gICAgICAgICAgPGI+SG9tZSBQYWdlIENvbnRlbnQgU2V0dGluZ3M8L2I+XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxiciAvPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbXQtMlwiPlxuICAgICAgICA8Zm9ybSBpZD1cImxhbmRpbmdGb3JtXCIgbmFtZT1cImxhbmRpbmdGb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwic2F2ZSgpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhbmRpbmdfaGVhZGVyXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+SGVhZGVyPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJoZWFkZXJcIiBuYW1lPVwiaGVhZGVyXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY29udGVudFwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkNvbnRlbnQgTm8uIDE8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cImNvbnRlbnRcIiBuYW1lPVwiY29udGVudFwiIHJvd3M9XCI0XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYW5kaW5nX2hlYWRlclwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkJhbm5lciBMb2dvPC9sYWJlbD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGltZyA6c3JjPVwibG9nb1wiIHN0eWxlPVwid2lkdGg6MTIwcHg7IGhlaWdodDo4MHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIiAvPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbXQtMyBtYi0zIHctNzVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1maWxlXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VMb2dvXCIgdHlwZT1cImZpbGVcIiBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCIgbmFtZT1cImxvZ29cIiAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1maWxlLWxhYmVsXCIgZm9yPVwiaW5wdXRHcm91cEZpbGUwMVwiPkNob29zZSBmaWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYW5kaW5nX2hlYWRlclwiIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlNsaWRlciBJbWFnZXM8L2xhYmVsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlNsaWRlciAxPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNsaWRlcjFcIiBzdHlsZT1cIndpZHRoOjEyMHB4OyBoZWlnaHQ6ODBweDsgb2JqZWN0LWZpdDogY292ZXI7XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlNsaWRlciAyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNsaWRlcjJcIiBzdHlsZT1cIndpZHRoOjEyMHB4OyBoZWlnaHQ6ODBweDsgb2JqZWN0LWZpdDogY292ZXI7XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlNsaWRlciAzPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNsaWRlcjNcIiBzdHlsZT1cIndpZHRoOjEyMHB4OyBoZWlnaHQ6ODBweDsgb2JqZWN0LWZpdDogY292ZXI7XCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyB3LTc1XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U2xpZGVyIDE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VTbGlkZXIxXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNsaWRlcjFcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJpbnB1dEdyb3VwRmlsZTAxXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyB3LTc1XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U2xpZGVyIDI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VTbGlkZXIyXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNsaWRlcjJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJpbnB1dEdyb3VwRmlsZTAxXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgbWItMyB3LTc1XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+U2xpZGVyIDM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWZpbGVcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VTbGlkZXIzXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNsaWRlcjNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJpbnB1dEdyb3VwRmlsZTAxXCI+Q2hvb3NlIGZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb250ZW50XCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+Q29udGVudCBOby4gMjwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wgY3VzdG9tLXN3aXRjaCBtYi0zXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImN1c3RvbS1jb250cm9sLWlucHV0XCIgaWQ9XCJjdXN0b21Td2l0Y2gxXCIgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJjdXN0b21Td2l0Y2gxXCI+U2hvdzwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImxhbmRpbmdfY29udGVudDJcIiBuYW1lPVwibGFuZGluZ19jb250ZW50MlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+LS0+XG5cbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5GZWF0dXJlZCBQcm9kdWN0czwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmZWF0dXJlX3Byb2R1Y3RzX2lzX3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlX3Byb2R1Y3RzX2lzX3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImlubGluZVJhZGlvMVwiPlJhbmRvbTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrIGZvcm0tY2hlY2staW5saW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmZWF0dXJlX3Byb2R1Y3RzX2lzX3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlX3Byb2R1Y3RzX2lzX3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJpbmxpbmVSYWRpbzJcIj5TZWxlY3QgNCBQcm9kdWN0czwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc20gYnRuLW91dGxpbmUtc3VjY2VzcyBtbC0yIG1iLTIgbXQtMlwiXG4gICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdFByb2R1Y3QoKVwiXG4gICAgICAgICAgICA+U2VsZWN0IFByb2R1Y3RzPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1yLTIgbWwtMlwiIHN0eWxlPVwid2lkdGg6NTBweDsgaGVpZ2h0OjUwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiIC8+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwibXItMiBtbC0yXCIgc3R5bGU9XCJ3aWR0aDo1MHB4OyBoZWlnaHQ6NTBweDsgb2JqZWN0LWZpdDogY292ZXI7XCIgLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJtci0yIG1sLTJcIiBzdHlsZT1cIndpZHRoOjUwcHg7IGhlaWdodDo1MHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIiAvPlxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1yLTIgbWwtMlwiIHN0eWxlPVwid2lkdGg6NTBweDsgaGVpZ2h0OjUwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiIC8+XG4gICAgICAgICAgPC9kaXY+LS0+XG5cbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIG1yLTJcIj5DQU5DRUw8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj4tLT5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBtci0yXCI+U0FWRTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8IS0tIDxhZG1pbi1zZWxlY3QtcHJvZHVjdHMtbW9kYWwtMiByZWY9XCJzZWxlY3RfcHJvZHVjdHNfbW9kYWxcIj48L2FkbWluLXNlbGVjdC1wcm9kdWN0cy1tb2RhbC0yPiAtLT5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBFcnJvcnMgZnJvbSBcIi4uLy4uL2Vycm9yQ2xhc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczogW1wic3RvcmVcIl0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vICAgdGl0bGU6IFwiXCIsXG4gICAgICBoZWFkZXI6IFwiXCIsXG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgbG9nbzogXCJcIixcbiAgICAgIHNsaWRlcjE6IFwiXCIsXG4gICAgICBzbGlkZXIyOiBcIlwiLFxuICAgICAgc2xpZGVyMzogXCJcIixcblxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG5cbiAgICAgIGZlYXR1cmVfcHJvZHVjdHNfaXNfcmFuZG9tOiBcInRydWVcIixcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzYXZlKCkge1xuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblxuICAgICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGFuZGluZ0Zvcm1cIik7XG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEobXlGb3JtKTtcblxuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vc2V0dGluZ3MvY29udGVudHMvbGFuZGluZ1N1Ym1pdFwiLCBmb3JtRGF0YSwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLy8gc2VsZWN0UHJvZHVjdCgpIHtcbiAgICAvLyAgICQoXCIjc2VsZWN0UHJvZHVjdHNNb2RhbDJcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIC8vIH0sXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xuICAgIH0sXG5cbiAgICBzaG93U3VjY2Vzc01lc3NhZ2UoZXJyb3JzKSB7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dTdWNjZXNzTWVzc2FnZVwiLCBlcnJvcnMpO1xuICAgIH0sXG4gICAgY2FuY2VsKCkge30sXG5cbiAgICBvbkZpbGVDaGFuZ2VMb2dvKGUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMubG9nbyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSxcbiAgICBvbkZpbGVDaGFuZ2VTbGlkZXIxKGUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2xpZGVyMSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSxcbiAgICBvbkZpbGVDaGFuZ2VTbGlkZXIyKGUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2xpZGVyMiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSxcbiAgICBvbkZpbGVDaGFuZ2VTbGlkZXIzKGUpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgIHRoaXMuc2xpZGVyMyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuaGVhZGVyID0gdGhpcy5zdG9yZS5sYW5kaW5nLmhlYWRlcjtcbiAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnN0b3JlLmxhbmRpbmcuY29udGVudDtcbiAgICB0aGlzLmxvZ28gPSB0aGlzLnN0b3JlLmxhbmRpbmcuaW1nX2xpbmtfbG9nbztcbiAgICB0aGlzLnNsaWRlcjEgPSB0aGlzLnN0b3JlLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyMTtcbiAgICB0aGlzLnNsaWRlcjIgPSB0aGlzLnN0b3JlLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyMjtcbiAgICB0aGlzLnNsaWRlcjMgPSB0aGlzLnN0b3JlLmxhbmRpbmcuaW1nX2xpbmtfc2xpZGVyMztcbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vICAgJChcIiNzdW1tZXJub3RlX3RpdGxlXCIpLnN1bW1lcm5vdGUoe1xuICAgICAgLy8gICAgIHBsYWNlaG9sZGVyOiBcIlRpdGxlXCIsXG4gICAgICAvLyAgICAgdGFic2l6ZTogMSxcbiAgICAgIC8vICAgICB0b29sYmFyOiBbXG4gICAgICAvLyAgICAgICBbXCJzdHlsZVwiLCBbXCJzdHlsZVwiXV0sXG4gICAgICAvLyAgICAgICBbXCJmb250XCIsIFtcImJvbGRcIiwgXCJ1bmRlcmxpbmVcIiwgXCJjbGVhclwiXV0sXG4gICAgICAvLyAgICAgICBbXCJwYXJhXCIsIFtcInBhcmFncmFwaFwiXV0sXG4gICAgICAvLyAgICAgICBbXCJ2aWV3XCIsIFtcImZ1bGxzY3JlZW5cIiwgXCJjb2Rldmlld1wiLCBcImhlbHBcIl1dLFxuICAgICAgLy8gICAgIF0sXG5cbiAgICAgIC8vICAgfSk7XG5cbiAgICAgICQoXCIjbGFuZGluZ19jb250ZW50MlwiKS5zdW1tZXJub3RlKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ29udGVudFwiLFxuICAgICAgICB0YWJzaXplOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbn07XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIG10LTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImxhbmRpbmdGb3JtXCIsIG5hbWU6IFwibGFuZGluZ0Zvcm1cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImxhbmRpbmdfaGVhZGVyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkhlYWRlclwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJoZWFkZXJcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaGVhZGVyIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLmhlYWRlciA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLCBhdHRyczogeyBmb3I6IFwiY29udGVudFwiIH0gfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29udGVudCBOby4gMVwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGVudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbnRlbnRcIiwgcm93czogXCI0XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnRlbnQgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uY29udGVudCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXAgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJsYW5kaW5nX2hlYWRlclwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYW5uZXIgTG9nb1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjBweFwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmxvZ28gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtdC0zIG1iLTMgdy03NVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImxvZ29cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2VMb2dvIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbnB1dEdyb3VwRmlsZTAxXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hvb3NlIGZpbGVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImxhbmRpbmdfaGVhZGVyXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlNsaWRlciBJbWFnZXNcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIlNsaWRlciAxXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiODBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uc2xpZGVyMSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwLTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiU2xpZGVyIDJcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI4MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm9iamVjdC1maXRcIjogXCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5zbGlkZXIyIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInAtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJTbGlkZXIgM1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLnNsaWRlcjMgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cCBtYi0zIHctNzVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZpbGVcIiwgbmFtZTogXCJzbGlkZXIxXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ub25GaWxlQ2hhbmdlU2xpZGVyMSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5wdXRHcm91cEZpbGUwMVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNob29zZSBmaWxlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTMgdy03NVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcInNsaWRlcjJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2VTbGlkZXIyIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbnB1dEdyb3VwRmlsZTAxXCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2hvb3NlIGZpbGVcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAgbWItMyB3LTc1XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmaWxlXCIsIG5hbWU6IFwic2xpZGVyM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZUNoYW5nZVNsaWRlcjMgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImlucHV0R3JvdXBGaWxlMDFcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDQpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDVcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiSG9tZSBQYWdlIENvbnRlbnQgU2V0dGluZ3NcIildKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIlNsaWRlciAxXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIlNsaWRlciAyXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIlNsaWRlciAzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiIH0sIFtfdm0uX3YoXCJTQVZFXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFiTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5Zjg3Y2JkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYkxhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFiTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOWY4N2NiZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOWY4N2NiZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOWY4N2NiZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFiTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5Zjg3Y2JkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM5Zjg3Y2JkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkxhbmRpbmdQYWdlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiTGFuZGluZ1BhZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYkxhbmRpbmdQYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJMYW5kaW5nUGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzlmODdjYmQmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==