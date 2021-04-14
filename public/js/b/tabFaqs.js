(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/tabFaqs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      title: "",
      content: "",
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      displayImage: "/img/no-product-image.png"
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      LoadingOverlay();
      var myForm = document.getElementById("faqsForm");
      var formData = new FormData(myForm);
      axios.post("/admin/settings/contents/faqsSubmit", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        //   this.showSuccessMessage(res.data);
        //   window.scrollTo(0, 0);
        //   LoadingOverlayHide();
        window.location.href = res.data;
      })["catch"](function (err) {
        _this.errors.record(err.response.data.errors);

        _this.showErrorMessage(_this.errors.getArrayOfMessages());

        window.scrollTo(0, 0);
        LoadingOverlayHide();
      });
    },
    showErrorMessage: function showErrorMessage(errors) {
      this.$events.fire("showErrorMessage", errors);
    },
    showSuccessMessage: function showSuccessMessage(errors) {
      this.$events.fire("showSuccessMessage", errors);
    },
    cancel: function cancel() {
      if (this.store.faqs != null) {
        if (this.store.faqs.image_link != null) {
          this.displayImage = this.store.faqs.image_link;
        } else {
          this.displayImage = "/img/no-product-image.png";
        }

        $("#faqs_title").summernote("code", this.store.faqs.title);
        $("#faqs_content").summernote("code", this.store.faqs.content);
        document.getElementById("background_image").value = null;
      } else {
        $("#faqs_title").summernote("code", "");
        $("#faqs_content").summernote("code", "");
        this.displayImage = "/img/no-product-image.png";
        document.getElementById("background_image").value = null;
      }
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },
    onContentChange: function onContentChange() {
      console.log("content change");
    }
  },
  created: function created() {
    if (this.store.faqs != null) {
      this.title = this.store.faqs.title;
      this.content = this.store.faqs.content;

      if (this.store.faqs.image_link == null) {
        this.displayImage = "/img/no-product-image.png";
      } else {
        this.displayImage = this.store.faqs.image_link;
      }
    }
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $("#faqs_title").summernote({
        placeholder: "Title",
        tabsize: 1,
        toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["para", ["paragraph"]], ["view", ["fullscreen", "codeview", "help"]]] // height: 120,

      });
      $("#faqs_content").summernote({
        placeholder: "Content",
        tabsize: 10 // height: 400,

      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94& ***!
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
            attrs: { id: "faqsForm", name: "faqsForm" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.save()
              }
            }
          },
          [
            _c("div", { staticClass: "form-group w-50" }, [
              _c("label", { staticClass: "font-weight-bold" }, [
                _vm._v("Background Image")
              ]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("img", {
                staticClass: "mb-3",
                staticStyle: {
                  width: "100%",
                  height: "200px",
                  "object-fit": "cover"
                },
                attrs: { src: _vm.displayImage }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "custom-file mb-3" }, [
                _c("input", {
                  staticClass: "custom-file-input",
                  attrs: {
                    type: "file",
                    id: "background_image",
                    name: "background_image"
                  },
                  on: { change: _vm.onFileChange }
                }),
                _vm._v(" "),
                _c(
                  "label",
                  {
                    staticClass: "custom-file-label",
                    attrs: { for: "image_path" }
                  },
                  [_vm._v("Choose file...")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c("label", { staticClass: "font-weight-bold" }, [
                _vm._v("Title")
              ]),
              _vm._v(" "),
              _c("textarea", {
                attrs: { id: "faqs_title", name: "title" },
                domProps: { value: _vm.title }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group" }, [
              _c(
                "label",
                { staticClass: "font-weight-bold", attrs: { for: "content" } },
                [_vm._v("Content")]
              ),
              _vm._v(" "),
              _c("textarea", {
                attrs: { id: "faqs_content", name: "content" },
                domProps: { value: _vm.content },
                on: { change: _vm.onContentChange }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "float-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-danger mr-2",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.cancel()
                    }
                  }
                },
                [_vm._v("CANCEL")]
              )
            ]),
            _vm._v(" "),
            _vm._m(1)
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
        _c("h5", [_c("b", [_vm._v("FAQ`s Content Settings")])])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
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

/***/ "./resources/js/backend/components/settings/tabFaqs.vue":
/*!**************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabFaqs.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabFaqs.vue?vue&type=template&id=4e25dd94& */ "./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94&");
/* harmony import */ var _tabFaqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabFaqs.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabFaqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/tabFaqs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabFaqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabFaqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabFaqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabFaqs.vue?vue&type=template&id=4e25dd94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabFaqs.vue?vue&type=template&id=4e25dd94&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabFaqs_vue_vue_type_template_id_4e25dd94___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkZhcXMudnVlPzZmMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkZhcXMudnVlPzYxYmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZT9lMTU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBO0FBRUE7QUFDQSxrQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSxpQkFGQTtBQUdBLHVFQUhBO0FBSUE7QUFKQTtBQU1BLEdBVEE7QUFXQTtBQUNBLFFBREEsa0JBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQSxZQUNBLElBREEsQ0FDQSxxQ0FEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BREEsRUFNQSxJQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWEEsV0FZQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxP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QUNELGFBQU9KLEdBQVA7QUFDSDs7O3lDQUVvQjtBQUNqQixVQUFJTSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL3RhYkZhcXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDU+XHJcbiAgICAgICAgICA8Yj5GQVFgcyBDb250ZW50IFNldHRpbmdzPC9iPlxyXG4gICAgICAgIDwvaDU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbXQtMlwiPlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZmFxc0Zvcm1cIiBuYW1lPVwiZmFxc0Zvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJzYXZlKClcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHctNTBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPkJhY2tncm91bmQgSW1hZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIDpzcmM9XCJkaXNwbGF5SW1hZ2VcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItM1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9XCJ3aWR0aDoxMDAlOyBoZWlnaHQ6MjAwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tZmlsZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwib25GaWxlQ2hhbmdlXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJiYWNrZ3JvdW5kX2ltYWdlXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYWNrZ3JvdW5kX2ltYWdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1maWxlLWxhYmVsXCIgZm9yPVwiaW1hZ2VfcGF0aFwiPkNob29zZSBmaWxlLi4uPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgOnZhbHVlPVwidGl0bGVcIiBpZD1cImZhcXNfdGl0bGVcIiBuYW1lPVwidGl0bGVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5Db250ZW50PC9sYWJlbD5cclxuICAgICAgICAgICAgPHRleHRhcmVhIDp2YWx1ZT1cImNvbnRlbnRcIiBAY2hhbmdlPVwib25Db250ZW50Q2hhbmdlXCIgaWQ9XCJmYXFzX2NvbnRlbnRcIiBuYW1lPVwiY29udGVudFwiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwiY2FuY2VsKClcIiBjbGFzcz1cImJ0biBidG4tZGFuZ2VyIG1yLTJcIj5DQU5DRUw8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIj5TQVZFPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBFcnJvcnMgZnJvbSBcIi4uLy4uL2Vycm9yQ2xhc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wic3RvcmVcIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcclxuICAgICAgZGlzcGxheUltYWdlOiBcIi9pbWcvbm8tcHJvZHVjdC1pbWFnZS5wbmdcIixcclxuICAgIH07XHJcbiAgfSxcclxuXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuXHJcbiAgICAgIGxldCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZhcXNGb3JtXCIpO1xyXG4gICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEobXlGb3JtKTtcclxuXHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vc2V0dGluZ3MvY29udGVudHMvZmFxc1N1Ym1pdFwiLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvLyAgIHRoaXMuc2hvd1N1Y2Nlc3NNZXNzYWdlKHJlcy5kYXRhKTtcclxuICAgICAgICAgIC8vICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgLy8gICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xyXG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XHJcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd0Vycm9yTWVzc2FnZVwiLCBlcnJvcnMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93U3VjY2Vzc01lc3NhZ2UoZXJyb3JzKSB7XHJcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd1N1Y2Nlc3NNZXNzYWdlXCIsIGVycm9ycyk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbmNlbCgpIHtcclxuICAgICAgaWYgKHRoaXMuc3RvcmUuZmFxcyAhPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcmUuZmFxcy5pbWFnZV9saW5rICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gdGhpcy5zdG9yZS5mYXFzLmltYWdlX2xpbms7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gXCIvaW1nL25vLXByb2R1Y3QtaW1hZ2UucG5nXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKFwiI2ZhcXNfdGl0bGVcIikuc3VtbWVybm90ZShcImNvZGVcIiwgdGhpcy5zdG9yZS5mYXFzLnRpdGxlKTtcclxuICAgICAgICAkKFwiI2ZhcXNfY29udGVudFwiKS5zdW1tZXJub3RlKFwiY29kZVwiLCB0aGlzLnN0b3JlLmZhcXMuY29udGVudCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kX2ltYWdlXCIpLnZhbHVlID0gbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAkKFwiI2ZhcXNfdGl0bGVcIikuc3VtbWVybm90ZShcImNvZGVcIiwgXCJcIik7XHJcbiAgICAgICAgJChcIiNmYXFzX2NvbnRlbnRcIikuc3VtbWVybm90ZShcImNvZGVcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSBcIi9pbWcvbm8tcHJvZHVjdC1pbWFnZS5wbmdcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRfaW1hZ2VcIikudmFsdWUgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25GaWxlQ2hhbmdlKGUpIHtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ29udGVudENoYW5nZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJjb250ZW50IGNoYW5nZVwiKTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIGlmICh0aGlzLnN0b3JlLmZhcXMgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zdG9yZS5mYXFzLnRpdGxlO1xyXG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnN0b3JlLmZhcXMuY29udGVudDtcclxuICAgICAgaWYgKHRoaXMuc3RvcmUuZmFxcy5pbWFnZV9saW5rID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gdGhpcy5zdG9yZS5mYXFzLmltYWdlX2xpbms7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKFwiI2ZhcXNfdGl0bGVcIikuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcclxuICAgICAgICB0YWJzaXplOiAxLFxyXG4gICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgIFtcInN0eWxlXCIsIFtcInN0eWxlXCJdXSxcclxuICAgICAgICAgIFtcImZvbnRcIiwgW1wiYm9sZFwiLCBcInVuZGVybGluZVwiLCBcImNsZWFyXCJdXSxcclxuICAgICAgICAgIFtcInBhcmFcIiwgW1wicGFyYWdyYXBoXCJdXSxcclxuICAgICAgICAgIFtcInZpZXdcIiwgW1wiZnVsbHNjcmVlblwiLCBcImNvZGV2aWV3XCIsIFwiaGVscFwiXV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBoZWlnaHQ6IDEyMCxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAkKFwiI2ZhcXNfY29udGVudFwiKS5zdW1tZXJub3RlKHtcclxuICAgICAgICBwbGFjZWhvbGRlcjogXCJDb250ZW50XCIsXHJcbiAgICAgICAgdGFic2l6ZTogMTAsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiA0MDAsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIG10LTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImZhcXNGb3JtXCIsIG5hbWU6IFwiZmFxc0Zvcm1cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJCYWNrZ3JvdW5kIEltYWdlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItM1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmRpc3BsYXlJbWFnZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImJhY2tncm91bmRfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbWFnZV9wYXRoXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZS4uLlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlRpdGxlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJmYXFzX3RpdGxlXCIsIG5hbWU6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGl0bGUgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJjb250ZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJmYXFzX2NvbnRlbnRcIiwgbmFtZTogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnRlbnQgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkNvbnRlbnRDaGFuZ2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBtci0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW5jZWwoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ0FOQ0VMXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoNVwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoXCJGQVFgcyBDb250ZW50IFNldHRpbmdzXCIpXSldKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIiB9LCBbX3ZtLl92KFwiU0FWRVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMjVkZDk0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJGYXFzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlMjVkZDk0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlMjVkZDk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlMjVkZDk0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJGYXFzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTI1ZGQ5NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZTI1ZGQ5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiRmFxcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiRmFxcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFiRmFxcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUyNWRkOTQmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==