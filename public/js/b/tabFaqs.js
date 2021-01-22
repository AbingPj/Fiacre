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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkZhcXMudnVlPzZmMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkZhcXMudnVlPzYxYmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJGYXFzLnZ1ZT9lMTU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBO0FBRUE7QUFDQSxrQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSxpQkFGQTtBQUdBLHVFQUhBO0FBSUE7QUFKQTtBQU1BLEdBVEE7QUFXQTtBQUNBLFFBREEsa0JBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFFQSxZQUNBLElBREEsQ0FDQSxxQ0FEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBLE9BREEsRUFNQSxJQU5BLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BWEEsV0FZQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxP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QUNELGFBQU9KLEdBQVA7QUFDSDs7O3lDQUVvQjtBQUNqQixVQUFJTSxHQUFHLEdBQUcsRUFBVjs7QUFDQSxVQUFJTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBbEMsSUFBdUMsSUFBM0MsRUFBaUQ7QUFDN0MsWUFBTUQsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixDQUFiOztBQUNBLG1DQUFrQkssSUFBbEIsOEJBQXdCO0FBQW5CLGNBQU1FLEdBQUcsY0FBVDtBQUNEO0FBQ0E7QUFDQTtBQUNBRSxhQUFHLENBQUNDLElBQUosQ0FBUyxLQUFLRixHQUFMLENBQVNELEdBQVQsQ0FBVDtBQUNIO0FBQ0o7O0FBQ0QsYUFBT0UsR0FBUDtBQUNIOzs7MEJBRUs7QUFDRixhQUFPTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFLTCxNQUFqQixFQUF5Qk0sTUFBekIsR0FBa0MsQ0FBekM7QUFDSCIsImZpbGUiOiJqcy9iL3RhYkZhcXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICA8aDU+XG4gICAgICAgICAgPGI+RkFRYHMgQ29udGVudCBTZXR0aW5nczwvYj5cbiAgICAgICAgPC9oNT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJyIC8+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBtdC0yXCI+XG4gICAgICAgIDxmb3JtIGlkPVwiZmFxc0Zvcm1cIiBuYW1lPVwiZmFxc0Zvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJzYXZlKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB3LTUwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+QmFja2dyb3VuZCBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgOnNyYz1cImRpc3BsYXlJbWFnZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItM1wiXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjIwMHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tZmlsZSBtYi0zXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImJhY2tncm91bmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYWNrZ3JvdW5kX2ltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJpbWFnZV9wYXRoXCI+Q2hvb3NlIGZpbGUuLi48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSA6dmFsdWU9XCJ0aXRsZVwiIGlkPVwiZmFxc190aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSA6dmFsdWU9XCJjb250ZW50XCIgQGNoYW5nZT1cIm9uQ29udGVudENoYW5nZVwiIGlkPVwiZmFxc19jb250ZW50XCIgbmFtZT1cImNvbnRlbnRcIj48L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJjYW5jZWwoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXIgbXItMlwiPkNBTkNFTDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIj5TQVZFPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuaW1wb3J0IEVycm9ycyBmcm9tIFwiLi4vLi4vZXJyb3JDbGFzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByb3BzOiBbXCJzdG9yZVwiXSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBjb250ZW50OiBcIlwiLFxuICAgICAgZXJyb3JzOiBuZXcgRXJyb3JzKCksXG4gICAgICBkaXNwbGF5SW1hZ2U6IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiLFxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIHNhdmUoKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuXG4gICAgICBsZXQgbXlGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYXFzRm9ybVwiKTtcbiAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShteUZvcm0pO1xuXG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hZG1pbi9zZXR0aW5ncy9jb250ZW50cy9mYXFzU3VibWl0XCIsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIC8vICAgdGhpcy5zaG93U3VjY2Vzc01lc3NhZ2UocmVzLmRhdGEpO1xuICAgICAgICAgIC8vICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIC8vICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXMuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyLnJlc3BvbnNlLmRhdGEuZXJyb3JzKTtcbiAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UodGhpcy5lcnJvcnMuZ2V0QXJyYXlPZk1lc3NhZ2VzKCkpO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JzKSB7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcbiAgICB9LFxuXG4gICAgc2hvd1N1Y2Nlc3NNZXNzYWdlKGVycm9ycykge1xuICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJzaG93U3VjY2Vzc01lc3NhZ2VcIiwgZXJyb3JzKTtcbiAgICB9LFxuXG4gICAgY2FuY2VsKCkge1xuICAgICAgaWYgKHRoaXMuc3RvcmUuZmFxcyAhPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLnN0b3JlLmZhcXMuaW1hZ2VfbGluayAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSB0aGlzLnN0b3JlLmZhcXMuaW1hZ2VfbGluaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgJChcIiNmYXFzX3RpdGxlXCIpLnN1bW1lcm5vdGUoXCJjb2RlXCIsIHRoaXMuc3RvcmUuZmFxcy50aXRsZSk7XG4gICAgICAgICQoXCIjZmFxc19jb250ZW50XCIpLnN1bW1lcm5vdGUoXCJjb2RlXCIsIHRoaXMuc3RvcmUuZmFxcy5jb250ZW50KTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYWNrZ3JvdW5kX2ltYWdlXCIpLnZhbHVlID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICQoXCIjZmFxc190aXRsZVwiKS5zdW1tZXJub3RlKFwiY29kZVwiLCBcIlwiKTtcbiAgICAgICAgJChcIiNmYXFzX2NvbnRlbnRcIikuc3VtbWVybm90ZShcImNvZGVcIiwgXCJcIik7XG4gICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gXCIvaW1nL25vLXByb2R1Y3QtaW1hZ2UucG5nXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZF9pbWFnZVwiKS52YWx1ZSA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkZpbGVDaGFuZ2UoZSkge1xuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgIH0sXG5cbiAgICBvbkNvbnRlbnRDaGFuZ2UoKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnQgY2hhbmdlXCIpO1xuICAgIH0sXG4gIH0sXG5cbiAgY3JlYXRlZCgpIHtcbiAgICBpZiAodGhpcy5zdG9yZS5mYXFzICE9IG51bGwpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aGlzLnN0b3JlLmZhcXMudGl0bGU7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLnN0b3JlLmZhcXMuY29udGVudDtcbiAgICAgIGlmICh0aGlzLnN0b3JlLmZhcXMuaW1hZ2VfbGluayA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gXCIvaW1nL25vLXByb2R1Y3QtaW1hZ2UucG5nXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IHRoaXMuc3RvcmUuZmFxcy5pbWFnZV9saW5rO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBtb3VudGVkKCkge1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICQoXCIjZmFxc190aXRsZVwiKS5zdW1tZXJub3RlKHtcbiAgICAgICAgcGxhY2Vob2xkZXI6IFwiVGl0bGVcIixcbiAgICAgICAgdGFic2l6ZTogMSxcbiAgICAgICAgdG9vbGJhcjogW1xuICAgICAgICAgIFtcInN0eWxlXCIsIFtcInN0eWxlXCJdXSxcbiAgICAgICAgICBbXCJmb250XCIsIFtcImJvbGRcIiwgXCJ1bmRlcmxpbmVcIiwgXCJjbGVhclwiXV0sXG4gICAgICAgICAgW1wicGFyYVwiLCBbXCJwYXJhZ3JhcGhcIl1dLFxuICAgICAgICAgIFtcInZpZXdcIiwgW1wiZnVsbHNjcmVlblwiLCBcImNvZGV2aWV3XCIsIFwiaGVscFwiXV0sXG4gICAgICAgIF0sXG4gICAgICAgIC8vIGhlaWdodDogMTIwLFxuICAgICAgfSk7XG5cbiAgICAgICQoXCIjZmFxc19jb250ZW50XCIpLnN1bW1lcm5vdGUoe1xuICAgICAgICBwbGFjZWhvbGRlcjogXCJDb250ZW50XCIsXG4gICAgICAgIHRhYnNpemU6IDEwLFxuICAgICAgICAvLyBoZWlnaHQ6IDQwMCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxufTtcbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgbXQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZmFxc0Zvcm1cIiwgbmFtZTogXCJmYXFzRm9ybVwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zYXZlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHctNTBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkJhY2tncm91bmQgSW1hZ2VcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0zXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMDBweFwiLFxuICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBfdm0uZGlzcGxheUltYWdlIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiYmFja2dyb3VuZF9pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImJhY2tncm91bmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWZpbGUtbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImltYWdlX3BhdGhcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNob29zZSBmaWxlLi4uXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiVGl0bGVcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImZhcXNfdGl0bGVcIiwgbmFtZTogXCJ0aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS50aXRsZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvbnQtd2VpZ2h0LWJvbGRcIiwgYXR0cnM6IHsgZm9yOiBcImNvbnRlbnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkNvbnRlbnRcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImZhcXNfY29udGVudFwiLCBuYW1lOiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY29udGVudCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uQ29udGVudENoYW5nZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tZGFuZ2VyIG1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNhbmNlbCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDQU5DRUxcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgxKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcImg1XCIsIFtfYyhcImJcIiwgW192bS5fdihcIkZBUWBzIENvbnRlbnQgU2V0dGluZ3NcIildKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiIH0sIFtfdm0uX3YoXCJTQVZFXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFiRmFxcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUyNWRkOTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFiRmFxcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZTI1ZGQ5NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZTI1ZGQ5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZTI1ZGQ5NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFiRmFxcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUyNWRkOTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGUyNWRkOTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvc2V0dGluZ3MvdGFiRmFxcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYkZhcXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMjVkZDk0JlwiIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXR0aW5nIHRoaXMgZmllbGRcIiArIGZpZWxkKVxuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjb3JkKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdO1xuICAgIH1cblxuICAgIGhhcyhmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnMuaGFzT3duUHJvcGVydHkoZmllbGQpO1xuICAgIH1cblxuICAgIGdldEFsbE1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgc3RyID0gXCJcIjtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgc3RyID0gc3RyICsgdGhpcy5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICArXCIsIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgZ2V0QXJyYXlPZk1lc3NhZ2VzKCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIC8vIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgLy8gICBtc2c6IHRoaXMuZ2V0KGtleSksXG4gICAgICAgICAgICAgICAgLy8gfTtcbiAgICAgICAgICAgICAgICBhcnIucHVzaCh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=