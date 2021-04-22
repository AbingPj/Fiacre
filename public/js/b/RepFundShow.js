(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepFundShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["optioncid"],
  data: function data() {
    return {
      orders: [],
      organization: []
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    openModal: function openModal(item) {
      this.$refs.fdModalRef.order = item;
      this.$refs.fdModalRef.products = item.order_products;
      $("#fundraiseDetailsModal").modal("show");
    },
    getData: function getData() {
      var _this = this;

      axios.get("/admin/reports/getOrganizationFundraise/" + this.optioncid).then(function (res) {
        _this.orders = res.data.orders;
        _this.organization = res.data.organization;

        _this.jqDT();
      })["catch"](function (err) {
        console.error(err);
      });
    },
    jqDT: function jqDT() {
      $(document).ready(function () {
        $("#fundraise").DataTable({
          lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "All"]],
          iDisplayLength: -1
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65& ***!
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
    { staticClass: "d-flex flex-column min-vh-100" },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("h2", { staticClass: "card-title mb-0" }, [
            _vm._v(_vm._s(_vm.organization.org_name) + " / "),
            _c("b", [_vm._v(_vm._s(_vm.optioncid))])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" })
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-10" }, [
          _c(
            "table",
            { staticClass: "table table-hover", attrs: { id: "fundraise" } },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.orders, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("td", [_vm._v(_vm._s(item.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.atr_date_label))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.user.full_name))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      {
                        staticClass: "text-right pr-3 border-right border-info",
                        staticStyle: { width: "180px" }
                      },
                      [
                        _vm._v(
                          "\n\t\t\t\t\t\t\t\t$ " +
                            _vm._s(item.atr_fundraise_f) +
                            "\n\t\t\t\t\t\t\t"
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("td", {}, [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { href: "/admin/orders/" + item.id }
                        },
                        [_vm._v("Order Details")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-success",
                          on: {
                            click: function($event) {
                              return _vm.openModal(item)
                            }
                          }
                        },
                        [_vm._v("Fundraise Details")]
                      )
                    ])
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("tfoot", [
                _c("th", [_vm._v("Total")]),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c(
                  "th",
                  { staticClass: "text-right border-right border-info" },
                  [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t$ " +
                        _vm._s(_vm.organization.fundraise_f) +
                        "\n\t\t\t\t\t\t"
                    )
                  ]
                ),
                _vm._v(" "),
                _c("th")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("admin-reports-fundraise-details-modal", { ref: "fdModalRef" })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Order #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Order By")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fundraise Total Amount")]),
        _vm._v(" "),
        _c("th", [_vm._v("Actions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/fundraise/show.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backend/components/reports/fundraise/show.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=39ef1a65& */ "./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/fundraise/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=39ef1a65& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/fundraise/show.vue?vue&type=template&id=39ef1a65&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_39ef1a65___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL2Z1bmRyYWlzZS9zaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvZnVuZHJhaXNlL3Nob3cudnVlPzdkOTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL2Z1bmRyYWlzZS9zaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvZnVuZHJhaXNlL3Nob3cudnVlPzBkNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL2Z1bmRyYWlzZS9zaG93LnZ1ZT9jNmFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErREE7QUFDQSxzQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGdCQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQSxTQVJBLHFCQVFBO0FBQ0E7QUFDQSxHQVZBO0FBWUE7QUFDQSxhQURBLHFCQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEE7QUFNQSxXQU5BLHFCQU1BO0FBQUE7O0FBQ0EsWUFDQSxHQURBLENBQ0EsMkRBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EsT0FOQSxXQU9BO0FBQ0E7QUFDQSxPQVRBO0FBVUEsS0FqQkE7QUFrQkEsUUFsQkEsa0JBa0JBO0FBQ0E7QUFDQTtBQUNBLHVCQUNBLGdCQURBLEVBRUEsbUJBRkEsQ0FEQTtBQUtBO0FBTEE7QUFPQSxPQVJBO0FBU0E7QUE1QkE7QUFaQSxHOzs7Ozs7Ozs7Ozs7QUMvREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywrQ0FBK0M7QUFDcEQ7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDLG1CQUFtQiwwQkFBMEI7QUFDN0Msb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBCQUEwQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBLGFBQWEsMkNBQTJDLGtCQUFrQixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscURBQXFEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGVBQWUsaUJBQWlCLEVBQUU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdklBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFzTSxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvYi9SZXBGdW5kU2hvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcblx0XHRcdFx0PCEtLSA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5PcmRlcnMgYnkge3tkYXRhLnVzZXIuZnVsbF9uYW1lfX08L2gyPiAtLT5cclxuXHRcdFx0XHQ8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj57eyBvcmdhbml6YXRpb24ub3JnX25hbWUgfX0gLyA8Yj57eyBvcHRpb25jaWQgfX08L2I+PC9oMj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8YnIgLz5cclxuXHRcdDxiciAvPlxyXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLWxnLTEwXCI+XHJcblx0XHRcdFx0PHRhYmxlIGlkPVwiZnVuZHJhaXNlXCIgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG5cdFx0XHRcdFx0PHRoZWFkPlxyXG5cdFx0XHRcdFx0XHQ8dHI+XHJcblx0XHRcdFx0XHRcdFx0PHRoIHN0eWxlPVwid2lkdGg6IDEwMHB4XCI+T3JkZXIgIzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPkRhdGU8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5PcmRlciBCeTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoPkZ1bmRyYWlzZSBUb3RhbCBBbW91bnQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aD5BY3Rpb25zPC90aD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdDwvdGhlYWQ+XHJcblx0XHRcdFx0XHQ8dGJvZHk+XHJcblx0XHRcdFx0XHRcdDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gb3JkZXJzXCIgOmtleT1cImluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0PHRkPnt7IGl0ZW0uaWQgfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBpdGVtLmF0cl9kYXRlX2xhYmVsIH19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgaXRlbS51c2VyLmZ1bGxfbmFtZSB9fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkXHJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAxODBweFwiXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInRleHQtcmlnaHQgcHItMyBib3JkZXItcmlnaHQgYm9yZGVyLWluZm9cIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCQge3sgaXRlbS5hdHJfZnVuZHJhaXNlX2YgfX1cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cIlwiPlxyXG5cdFx0XHRcdFx0XHRcdCA8YVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OmhyZWY9XCInL2FkbWluL29yZGVycy8nICsgaXRlbS5pZFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Pk9yZGVyIERldGFpbHM8L2FcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5Nb2RhbChpdGVtKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+RnVuZHJhaXNlIERldGFpbHM8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90Ym9keT5cclxuXHRcdFx0XHRcdDx0Zm9vdD5cclxuXHRcdFx0XHRcdFx0PHRoPlRvdGFsPC90aD5cclxuXHRcdFx0XHRcdFx0PHRoPjwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0IGJvcmRlci1yaWdodCBib3JkZXItaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdCQge3sgb3JnYW5pemF0aW9uLmZ1bmRyYWlzZV9mIH19XHJcblx0XHRcdFx0XHRcdDwvdGg+XHJcblx0XHRcdFx0XHRcdDx0aD48L3RoPlxyXG5cdFx0XHRcdFx0PC90Zm9vdD5cclxuXHRcdFx0XHQ8L3RhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG4gICAgICAgIDxhZG1pbi1yZXBvcnRzLWZ1bmRyYWlzZS1kZXRhaWxzLW1vZGFsIHJlZj1cImZkTW9kYWxSZWZcIj48L2FkbWluLXJlcG9ydHMtZnVuZHJhaXNlLWRldGFpbHMtbW9kYWw+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IFtcIm9wdGlvbmNpZFwiXSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0b3JkZXJzOiBbXSxcclxuXHRcdFx0XHRvcmdhbml6YXRpb246IFtdLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcbiAgICAgICAgICAgIG9wZW5Nb2RhbChpdGVtKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMuZmRNb2RhbFJlZi5vcmRlciA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmZkTW9kYWxSZWYucHJvZHVjdHMgPSBpdGVtLm9yZGVyX3Byb2R1Y3RzO1xyXG4gICAgICAgICAgICAgICAkKFwiI2Z1bmRyYWlzZURldGFpbHNNb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICAgICAgICAgIH0sXHJcblx0XHRcdGdldERhdGEoKSB7XHJcblx0XHRcdFx0YXhpb3NcclxuXHRcdFx0XHRcdC5nZXQoXCIvYWRtaW4vcmVwb3J0cy9nZXRPcmdhbml6YXRpb25GdW5kcmFpc2UvXCIgKyB0aGlzLm9wdGlvbmNpZClcclxuXHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcmRlcnMgPSByZXMuZGF0YS5vcmRlcnM7XHJcblx0XHRcdFx0XHRcdHRoaXMub3JnYW5pemF0aW9uID0gcmVzLmRhdGEub3JnYW5pemF0aW9uO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmpxRFQoKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycik7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0anFEVCgpIHtcclxuXHRcdFx0XHQkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQkKFwiI2Z1bmRyYWlzZVwiKS5EYXRhVGFibGUoe1xyXG5cdFx0XHRcdFx0XHRsZW5ndGhNZW51OiBbXHJcblx0XHRcdFx0XHRcdFx0WzEwLCAyNSwgNTAsIC0xXSxcclxuXHRcdFx0XHRcdFx0XHRbMTAsIDI1LCA1MCwgXCJBbGxcIl0sXHJcblx0XHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0XHRcdGlEaXNwbGF5TGVuZ3RoOiAtMSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9O1xyXG48L3NjcmlwdD5cclxuXHJcblxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm9yZ2FuaXphdGlvbi5vcmdfbmFtZSkgKyBcIiAvIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub3B0aW9uY2lkKSldKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMTBcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlIHRhYmxlLWhvdmVyXCIsIGF0dHJzOiB7IGlkOiBcImZ1bmRyYWlzZVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5vcmRlcnMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXggfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uYXRyX2RhdGVfbGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udXNlci5mdWxsX25hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBwci0zIGJvcmRlci1yaWdodCBib3JkZXItaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTgwcHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0uYXRyX2Z1bmRyYWlzZV9mKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7fSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vb3JkZXJzL1wiICsgaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk9yZGVyIERldGFpbHNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub3Blbk1vZGFsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZ1bmRyYWlzZSBEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBib3JkZXItcmlnaHQgYm9yZGVyLWluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JnYW5pemF0aW9uLmZ1bmRyYWlzZV9mKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiYWRtaW4tcmVwb3J0cy1mdW5kcmFpc2UtZGV0YWlscy1tb2RhbFwiLCB7IHJlZjogXCJmZE1vZGFsUmVmXCIgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMHB4XCIgfSB9LCBbX3ZtLl92KFwiT3JkZXIgI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk9yZGVyIEJ5XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkZ1bmRyYWlzZSBUb3RhbCBBbW91bnRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0aW9uc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOWVmMWE2NSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOWVmMWE2NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOWVmMWE2NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOWVmMWE2NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzllZjFhNjUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzllZjFhNjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9mdW5kcmFpc2Uvc2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM5ZWYxYTY1JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==