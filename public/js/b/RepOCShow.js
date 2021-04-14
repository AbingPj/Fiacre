(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepOCShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["customer_id"],
  data: function data() {
    return {
      data: [],
      user: [],
      json_fields: {
        "Order #": "id",
        "Date": "date",
        "Status": "atr_status_label"
      }
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/admin/reports/orders/customers/" + this.customer_id).then(function (res) {
        _this.data = res.data.data;
        _this.user = res.data.user;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      var fullname = this.user.full_name;
      console.log(fullname);
      LoadingOverlay();
      axios({
        method: "post",
        url: "/admin/generate/pdf/customer-orders",
        data: {
          customer_id: this.customer_id
        },
        responseType: "arraybuffer",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf"
        }
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", fullname + " orders.pdf"); //or any other extension

        document.body.appendChild(link);
        link.click();
        LoadingOverlayHide();
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        _c(
          "h2",
          { staticClass: "card-title mb-0" },
          [
            _vm._v(
              "\r\n        Orders by " +
                _vm._s(_vm.user.full_name) +
                "\r\n        "
            ),
            _c(
              "button",
              {
                staticClass: "btn btn-success float-right",
                attrs: { type: "button" },
                on: {
                  click: function($event) {
                    return _vm.print()
                  }
                }
              },
              [
                _c("i", { staticClass: "fas fa-print" }),
                _vm._v(" Print\r\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total Orders: " + _vm.data.length],
                  header: ["Customer Orders", "order by " + _vm.user.full_name],
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "customerorders.xls",
                  worksheet: _vm.user.full_name
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-excel" }),
                _vm._v("\r\n          XLS\r\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total Orders: " + _vm.data.length],
                  header: ["Customer Orders", "order by " + _vm.user.full_name],
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "customerorders.csv",
                  worksheet: _vm.user.full_name
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-csv" }),
                _vm._v("\r\n          CSV\r\n        ")
              ]
            )
          ],
          1
        )
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
      _c("div", { staticClass: "col-lg-8" }, [
        _c("table", { staticClass: "table table-hover" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.data, function(item, index) {
              return _c("tr", { key: index }, [
                _c("td", [_vm._v(_vm._s(item.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.date))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(item.atr_status_label))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-info",
                      attrs: { href: "/admin/orders/" + item.id }
                    },
                    [_vm._v("Details")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-sm btn-success",
                      attrs: { href: item.url_for_print }
                    },
                    [_c("i", { staticClass: "fas fa-print" }), _vm._v(" Print")]
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("tfoot", [
            _c("th"),
            _vm._v(" "),
            _c("th"),
            _vm._v(" "),
            _c("th", [_vm._v("Total Orders")]),
            _vm._v(" "),
            _c("th", [_vm._v(_vm._s(_vm.data.length))])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Order #")]),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Status")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=1b6ff452& */ "./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/order-by-customer/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=1b6ff452& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show.vue?vue&type=template&id=1b6ff452&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_1b6ff452___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL29yZGVyLWJ5LWN1c3RvbWVyL3Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LnZ1ZT9lZjM4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXItYnktY3VzdG9tZXIvc2hvdy52dWU/Njg5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXItYnktY3VzdG9tZXIvc2hvdy52dWU/NGVmYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQTtBQUNBLHdCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQTtBQUNBLHVCQURBO0FBRUEsc0JBRkE7QUFHQTtBQUhBO0FBSEE7QUFTQSxHQVpBO0FBYUEsU0FiQSxxQkFhQTtBQUNBO0FBQ0EsR0FmQTtBQWdCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQSxZQUNBLEdBREEsQ0FDQSxxREFEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQSxPQUxBLFdBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQSxLQVhBO0FBWUEsU0FaQSxtQkFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSxrREFGQTtBQUdBO0FBQ0E7QUFEQSxTQUhBO0FBTUEsbUNBTkE7QUFPQTtBQUNBLDRDQURBO0FBRUE7QUFGQTtBQVBBLFNBWUEsSUFaQSxDQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBSkEsQ0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQXBCQSxXQXFCQTtBQUFBO0FBQUEsT0FyQkE7QUFzQkE7QUF0Q0E7QUFoQkEsRzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUErQztBQUNuRSxlQUFlLHFCQUFxQjtBQUNwQyxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQSxXQUFXLGlDQUFpQztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLHlCQUF5Qiw4QkFBOEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLHlCQUF5QixpQ0FBaUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLDBCQUEwQjtBQUMzQyxxQkFBcUIsbUNBQW1DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsYUFBYTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckIsOEJBQThCLDhCQUE4QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBc00sQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUmVwT0NTaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1pbi12aC0xMDBcIj5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG4gICAgICAgIE9yZGVycyBieSB7e3VzZXIuZnVsbF9uYW1lfX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBPcmRlcnM6ICcgKyBkYXRhLmxlbmd0aCBdXCIgOmhlYWRlcj1cIlsnQ3VzdG9tZXIgT3JkZXJzJywnb3JkZXIgYnkgJyt1c2VyLmZ1bGxfbmFtZV1cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIgOmZpZWxkcz1cImpzb25fZmllbGRzXCIgOmRhdGE9XCJkYXRhXCIgdHlwZT1cInhsc1wiIG5hbWU9XCJjdXN0b21lcm9yZGVycy54bHNcIiA6d29ya3NoZWV0PVwidXNlci5mdWxsX25hbWVcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBPcmRlcnM6ICcrIGRhdGEubGVuZ3RoIF1cIiA6aGVhZGVyPVwiWydDdXN0b21lciBPcmRlcnMnLCdvcmRlciBieSAnK3VzZXIuZnVsbF9uYW1lXVwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwiY3N2XCIgbmFtZT1cImN1c3RvbWVyb3JkZXJzLmNzdlwiIDp3b3Jrc2hlZXQ9XCJ1c2VyLmZ1bGxfbmFtZVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XHJcbiAgICAgICAgICBDU1ZcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICA8L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8YnIgLz5cclxuICA8YnIgLz5cclxuICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLThcIj5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5PcmRlciAjPC90aD5cclxuICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgIDx0ZD57e2l0ZW0uaWR9fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57e2l0ZW0uZGF0ZX19PC90ZD5cclxuICAgICAgICAgICAgPHRkPnt7aXRlbS5hdHJfc3RhdHVzX2xhYmVsfX08L3RkPlxyXG4gICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgPGEgOmhyZWY9XCInL2FkbWluL29yZGVycy8nK2l0ZW0uaWRcIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWluZm9cIj5EZXRhaWxzPC9hPlxyXG4gICAgICAgICAgICAgIDxhIDpocmVmPVwiaXRlbS51cmxfZm9yX3ByaW50XCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCI+PGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50PC9hPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICA8dGg+VG90YWwgT3JkZXJzPC90aD5cclxuICAgICAgICAgIDx0aD57e2RhdGEubGVuZ3RofX08L3RoPlxyXG4gICAgICAgIDwvdGZvb3Q+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcImN1c3RvbWVyX2lkXCJdLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBkYXRhOiBbXSxcclxuICAgICAgdXNlcjogW10sXHJcbiAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgXCJPcmRlciAjXCI6IFwiaWRcIixcclxuICAgICAgICBcIkRhdGVcIjogXCJkYXRlXCIsXHJcbiAgICAgICAgXCJTdGF0dXNcIjogXCJhdHJfc3RhdHVzX2xhYmVsXCJcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXCIvYWRtaW4vcmVwb3J0cy9vcmRlcnMvY3VzdG9tZXJzL1wiICsgdGhpcy5jdXN0b21lcl9pZClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIHRoaXMudXNlciA9IHJlcy5kYXRhLnVzZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBwcmludCgpIHtcclxuICAgICAgbGV0IGZ1bGxuYW1lID0gdGhpcy51c2VyLmZ1bGxfbmFtZTtcclxuICAgICAgY29uc29sZS5sb2coZnVsbG5hbWUpO1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hZG1pbi9nZW5lcmF0ZS9wZGYvY3VzdG9tZXItb3JkZXJzXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyX2lkOiB0aGlzLmN1c3RvbWVyX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vcGRmXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xyXG4gICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgbGluay5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBmdWxsbmFtZSArIFwiIG9yZGVycy5wZGZcIik7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaDJcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgbWItMFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcclxcbiAgICAgICAgT3JkZXJzIGJ5IFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVzZXIuZnVsbF9uYW1lKSArXG4gICAgICAgICAgICAgICAgXCJcXHJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wcmludCgpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXByaW50XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxyXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbCBPcmRlcnM6IFwiICsgX3ZtLmRhdGEubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjogW1wiQ3VzdG9tZXIgT3JkZXJzXCIsIFwib3JkZXIgYnkgXCIgKyBfdm0udXNlci5mdWxsX25hbWVdLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImN1c3RvbWVyb3JkZXJzLnhsc1wiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBfdm0udXNlci5mdWxsX25hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1leGNlbFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBYTFNcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBmb290ZXI6IFtcInRvdGFsIE9yZGVyczogXCIgKyBfdm0uZGF0YS5sZW5ndGhdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOiBbXCJDdXN0b21lciBPcmRlcnNcIiwgXCJvcmRlciBieSBcIiArIF92bS51c2VyLmZ1bGxfbmFtZV0sXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiY3VzdG9tZXJvcmRlcnMuY3N2XCIsXG4gICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IF92bS51c2VyLmZ1bGxfbmFtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWNzdlwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcclxcbiAgICAgICAgICBDU1ZcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9KVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJiclwiKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLThcIiB9LCBbXG4gICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uaWQpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmRhdGUpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmF0cl9zdGF0dXNfbGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vb3JkZXJzL1wiICsgaXRlbS5pZCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaXRlbS51cmxfZm9yX3ByaW50IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wcmludFwiIH0pLCBfdm0uX3YoXCIgUHJpbnRcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUb3RhbCBPcmRlcnNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmxlbmd0aCkpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiT3JkZXIgI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEYXRlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjZmZjQ1MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjZmZjQ1MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjZmZjQ1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjZmZjQ1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI2ZmY0NTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWI2ZmY0NTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI2ZmY0NTImXCIiXSwic291cmNlUm9vdCI6IiJ9