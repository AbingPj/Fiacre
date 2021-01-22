(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/tabAboutUs"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["store"],
  data: function data() {
    return {
      title: "",
      content: "",
      //   background_image: "",
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"](),
      displayImage: ""
    };
  },
  methods: {
    save: function save() {
      var _this = this;

      LoadingOverlay();
      var myForm = document.getElementById("myForm");
      var formData = new FormData(myForm);
      axios.post("/admin/settings/contents/aboutusSubmit", formData, {
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
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },
    showSuccessMessage: function showSuccessMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showSuccessMessage", errors);
    },
    cancel: function cancel() {
      if (this.store.aboutus != null) {
        if (this.store.aboutus.image_link != null) {
          this.displayImage = this.store.aboutus.image_link;
        } else {
          this.displayImage = "/img/no-product-image.png";
        }

        $("#summernote_title").summernote("code", this.store.aboutus.title);
        $("#summernote_content").summernote("code", this.store.aboutus.content);
        document.getElementById("background_image").value = null;
      } else {
        $("#summernote_title").summernote("code", this.store.aboutus.title);
        $("#summernote_content").summernote("code", this.store.aboutus.content);
        this.displayImage = "/img/no-product-image.png";
        document.getElementById("background_image").value = null;
      }
    },
    onFileChange: function onFileChange(e) {
      //   console.log(e);
      var file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },
    onContentChange: function onContentChange() {
      console.log("content change");
    }
  },
  created: function created() {
    if (this.store.aboutus != null) {
      this.title = this.store.aboutus.title;
      this.content = this.store.aboutus.content;

      if (this.store.aboutus.image_link == null) {
        this.displayImage = "/img/no-product-image.png";
      } else {
        this.displayImage = this.store.aboutus.image_link;
      }
    }
  },
  mounted: function mounted() {
    $(document).ready(function () {
      $("#summernote_title").summernote({
        placeholder: "Title",
        tabsize: 1,
        toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["para", ["paragraph"]], ["view", ["fullscreen", "codeview", "help"]]] // height: 120,

      });
      $("#summernote_content").summernote({
        placeholder: "Content",
        tabsize: 10 // height: 400,

      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
            attrs: { id: "myForm", name: "myForm" },
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
                attrs: { id: "summernote_title", name: "title" },
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
                attrs: { id: "summernote_content", name: "content" },
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
        _c("h5", [_c("b", [_vm._v("About Us Content Settings")])])
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

/***/ "./resources/js/backend/components/settings/tabAboutUs.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabAboutUs.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabAboutUs.vue?vue&type=template&id=457ba8fc& */ "./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc&");
/* harmony import */ var _tabAboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabAboutUs.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tabAboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/settings/tabAboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabAboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabAboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabAboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./tabAboutUs.vue?vue&type=template&id=457ba8fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/settings/tabAboutUs.vue?vue&type=template&id=457ba8fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabAboutUs_vue_vue_type_template_id_457ba8fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJBYm91dFVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkFib3V0VXMudnVlP2YwMjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJBYm91dFVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkFib3V0VXMudnVlP2JjOTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9zZXR0aW5ncy90YWJBYm91dFVzLnZ1ZT9hNDU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFFQTtBQUNBLGtCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLGlCQUZBO0FBR0E7QUFDQSx1RUFKQTtBQUtBO0FBTEE7QUFPQSxHQVZBO0FBWUE7QUFDQSxRQURBLGtCQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBRUEsWUFDQSxJQURBLENBQ0Esd0NBREEsRUFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQSxPQURBLEVBTUEsSUFOQSxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBLFdBWUE7QUFD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U0QsR0FBVCxDQUFaO0FBQ0EsV0FBQyxJQUFEO0FBQ0g7QUFDSjs7QUFDRCxhQUFPSixHQUFQO0FBQ0g7Ozt5Q0FFb0I7QUFDakIsVUFBSU0sR0FBRyxHQUFHLEVBQVY7O0FBQ0EsVUFBSUwsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQWxDLElBQXVDLElBQTNDLEVBQWlEO0FBQzdDLFlBQU1ELElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsQ0FBYjs7QUFDQSxtQ0FBa0JLLElBQWxCLDhCQUF3QjtBQUFuQixjQUFNRSxHQUFHLGNBQVQ7QUFDRDtBQUNBO0FBQ0E7QUFDQUUsYUFBRyxDQUFDQyxJQUFKLENBQVMsS0FBS0YsR0FBTCxDQUFTRCxHQUFULENBQVQ7QUFDSDtBQUNKOztBQUNELGFBQU9FLEdBQVA7QUFDSDs7OzBCQUVLO0FBQ0YsYUFBT0wsTUFBTSxDQUFDQyxJQUFQLENBQVksS0FBS0wsTUFBakIsRUFBeUJNLE1BQXpCLEdBQWtDLENBQXpDO0FBQ0giLCJmaWxlIjoianMvYi90YWJBYm91dFVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgPGg1PlxuICAgICAgICAgIDxiPkFib3V0IFVzIENvbnRlbnQgU2V0dGluZ3M8L2I+XG4gICAgICAgIDwvaDU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxiciAvPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgbXQtMlwiPlxuICAgICAgICA8Zm9ybSBpZD1cIm15Rm9ybVwiIG5hbWU9XCJteUZvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJzYXZlKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCB3LTUwXCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+QmFja2dyb3VuZCBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgOnNyYz1cImRpc3BsYXlJbWFnZVwiXG4gICAgICAgICAgICAgIGNsYXNzPVwibWItM1wiXG4gICAgICAgICAgICAgIHN0eWxlPVwid2lkdGg6MTAwJTsgaGVpZ2h0OjIwMHB4OyBvYmplY3QtZml0OiBjb3ZlcjtcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tZmlsZSBtYi0zXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCJcbiAgICAgICAgICAgICAgICBpZD1cImJhY2tncm91bmRfaW1hZ2VcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJiYWNrZ3JvdW5kX2ltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBmb3I9XCJpbWFnZV9wYXRoXCI+Q2hvb3NlIGZpbGUuLi48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPlRpdGxlPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSA6dmFsdWU9XCJ0aXRsZVwiIGlkPVwic3VtbWVybm90ZV90aXRsZVwiIG5hbWU9XCJ0aXRsZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNvbnRlbnRcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj5Db250ZW50PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICA6dmFsdWU9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgQGNoYW5nZT1cIm9uQ29udGVudENoYW5nZVwiXG4gICAgICAgICAgICAgIGlkPVwic3VtbWVybm90ZV9jb250ZW50XCJcbiAgICAgICAgICAgICAgbmFtZT1cImNvbnRlbnRcIlxuICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImNhbmNlbCgpXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBtci0yXCI+Q0FOQ0VMPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgbXItMlwiPlNBVkU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgRXJyb3JzIGZyb20gXCIuLi8uLi9lcnJvckNsYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFtcInN0b3JlXCJdLFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCJcIixcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAvLyAgIGJhY2tncm91bmRfaW1hZ2U6IFwiXCIsXG4gICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcbiAgICAgIGRpc3BsYXlJbWFnZTogXCJcIixcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBzYXZlKCkge1xuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblxuICAgICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xuICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKG15Rm9ybSk7XG5cbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL3NldHRpbmdzL2NvbnRlbnRzL2Fib3V0dXNTdWJtaXRcIiwgZm9ybURhdGEsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5zaG93U3VjY2Vzc01lc3NhZ2UocmVzLmRhdGEpO1xuICAgICAgICAvLyAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgLy8gICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnIucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc2hvd0Vycm9yTWVzc2FnZShlcnJvcnMpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coc2hpdCk7XG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcbiAgICB9LFxuXG4gICAgc2hvd1N1Y2Nlc3NNZXNzYWdlKGVycm9ycykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhzaGl0KTtcbiAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwic2hvd1N1Y2Nlc3NNZXNzYWdlXCIsIGVycm9ycyk7XG4gICAgfSxcblxuICAgIGNhbmNlbCgpIHtcbiAgICAgIGlmICh0aGlzLnN0b3JlLmFib3V0dXMgIT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5zdG9yZS5hYm91dHVzLmltYWdlX2xpbmsgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gdGhpcy5zdG9yZS5hYm91dHVzLmltYWdlX2xpbms7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSBcIi9pbWcvbm8tcHJvZHVjdC1pbWFnZS5wbmdcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoXCIjc3VtbWVybm90ZV90aXRsZVwiKS5zdW1tZXJub3RlKFwiY29kZVwiLCB0aGlzLnN0b3JlLmFib3V0dXMudGl0bGUpO1xuICAgICAgICAkKFwiI3N1bW1lcm5vdGVfY29udGVudFwiKS5zdW1tZXJub3RlKFwiY29kZVwiLCB0aGlzLnN0b3JlLmFib3V0dXMuY29udGVudCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFja2dyb3VuZF9pbWFnZVwiKS52YWx1ZSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiI3N1bW1lcm5vdGVfdGl0bGVcIikuc3VtbWVybm90ZShcImNvZGVcIiwgdGhpcy5zdG9yZS5hYm91dHVzLnRpdGxlKTtcbiAgICAgICAgJChcIiNzdW1tZXJub3RlX2NvbnRlbnRcIikuc3VtbWVybm90ZShcImNvZGVcIiwgdGhpcy5zdG9yZS5hYm91dHVzLmNvbnRlbnQpO1xuICAgICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhY2tncm91bmRfaW1hZ2VcIikudmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH0sXG4gICAgb25GaWxlQ2hhbmdlKGUpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coZSk7XG4gICAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgICB0aGlzLmRpc3BsYXlJbWFnZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgfSxcblxuICAgIG9uQ29udGVudENoYW5nZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29udGVudCBjaGFuZ2VcIik7XG4gICAgfSxcbiAgfSxcblxuICBjcmVhdGVkKCkge1xuICAgIGlmICh0aGlzLnN0b3JlLmFib3V0dXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuc3RvcmUuYWJvdXR1cy50aXRsZTtcbiAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuc3RvcmUuYWJvdXR1cy5jb250ZW50O1xuICAgICAgaWYgKHRoaXMuc3RvcmUuYWJvdXR1cy5pbWFnZV9saW5rID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5SW1hZ2UgPSBcIi9pbWcvbm8tcHJvZHVjdC1pbWFnZS5wbmdcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGlzcGxheUltYWdlID0gdGhpcy5zdG9yZS5hYm91dHVzLmltYWdlX2xpbms7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQoKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgJChcIiNzdW1tZXJub3RlX3RpdGxlXCIpLnN1bW1lcm5vdGUoe1xuICAgICAgICBwbGFjZWhvbGRlcjogXCJUaXRsZVwiLFxuICAgICAgICB0YWJzaXplOiAxLFxuICAgICAgICB0b29sYmFyOiBbXG4gICAgICAgICAgW1wic3R5bGVcIiwgW1wic3R5bGVcIl1dLFxuICAgICAgICAgIFtcImZvbnRcIiwgW1wiYm9sZFwiLCBcInVuZGVybGluZVwiLCBcImNsZWFyXCJdXSxcbiAgICAgICAgICBbXCJwYXJhXCIsIFtcInBhcmFncmFwaFwiXV0sXG4gICAgICAgICAgW1widmlld1wiLCBbXCJmdWxsc2NyZWVuXCIsIFwiY29kZXZpZXdcIiwgXCJoZWxwXCJdXSxcbiAgICAgICAgXSxcbiAgICAgICAgLy8gaGVpZ2h0OiAxMjAsXG4gICAgICB9KTtcblxuICAgICAgJChcIiNzdW1tZXJub3RlX2NvbnRlbnRcIikuc3VtbWVybm90ZSh7XG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIkNvbnRlbnRcIixcbiAgICAgICAgdGFic2l6ZTogMTAsXG4gICAgICAgIC8vIGhlaWdodDogNDAwLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfdm0uX20oMCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC0xMiBtdC0yXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBpZDogXCJteUZvcm1cIiwgbmFtZTogXCJteUZvcm1cIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC13ZWlnaHQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJCYWNrZ3JvdW5kIEltYWdlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItM1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmRpc3BsYXlJbWFnZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjdXN0b20tZmlsZS1pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcImJhY2tncm91bmRfaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kX2ltYWdlXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkZpbGVDaGFuZ2UgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1maWxlLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJpbWFnZV9wYXRoXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDaG9vc2UgZmlsZS4uLlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlRpdGxlXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzdW1tZXJub3RlX3RpdGxlXCIsIG5hbWU6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGl0bGUgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb250LXdlaWdodC1ib2xkXCIsIGF0dHJzOiB7IGZvcjogXCJjb250ZW50XCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb250ZW50XCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzdW1tZXJub3RlX2NvbnRlbnRcIiwgbmFtZTogXCJjb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNvbnRlbnQgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS5vbkNvbnRlbnRDaGFuZ2UgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWRhbmdlciBtci0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYW5jZWwoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ0FOQ0VMXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMSlcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgX2MoXCJoNVwiLCBbX2MoXCJiXCIsIFtfdm0uX3YoXCJBYm91dCBVcyBDb250ZW50IFNldHRpbmdzXCIpXSldKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiYnV0dG9uXCIsIHsgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIG1yLTJcIiB9LCBbX3ZtLl92KFwiU0FWRVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYkFib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1N2JhOGZjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYkFib3V0VXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJBYm91dFVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDU3YmE4ZmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDU3YmE4ZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDU3YmE4ZmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYkFib3V0VXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ1N2JhOGZjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ1N2JhOGZjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3NldHRpbmdzL3RhYkFib3V0VXMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJBYm91dFVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJBYm91dFVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJBYm91dFVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NTdiYThmYyZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge307XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0dGluZyB0aGlzIGZpZWxkXCIgKyBmaWVsZClcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JzW2ZpZWxkXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzW2ZpZWxkXVswXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXTtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKTtcbiAgICB9XG5cbiAgICBnZXRBbGxNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IHN0ciA9IFwiXCI7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgICAgICAgIHN0ciA9IHN0ciArIHRoaXMuZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgK1wiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIGdldEFycmF5T2ZNZXNzYWdlcygpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIC8vICAgbXNnOiB0aGlzLmdldChrZXkpLFxuICAgICAgICAgICAgICAgIC8vIH07XG4gICAgICAgICAgICAgICAgYXJyLnB1c2godGhpcy5nZXQoa2V5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9