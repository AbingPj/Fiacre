(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepOCShowOrder"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["order_id"],
  data: function data() {
    return {
      data: []
    };
  },
  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      axios.get("/admin/reports/orders/order/" + this.order_id).then(function (res) {
        _this.data = res.data;
      })["catch"](function (err) {
        console.error(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _vm._v("Order #" + _vm._s(_vm.order_id))
        ]),
        _vm._v(" "),
        _c("h4", { staticClass: "card-title mb-0" }, [
          _vm._v("Order By:" + _vm._s(_vm.order_id))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-6" })
    ]),
    _vm._v(" "),
    _c("br"),
    _vm._v(" "),
    _c("br")
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show-order.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show-order.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-order.vue?vue&type=template&id=4cd06d58& */ "./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58&");
/* harmony import */ var _show_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-order.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _show_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/order-by-customer/show-order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show-order.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./show-order.vue?vue&type=template&id=4cd06d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/order-by-customer/show-order.vue?vue&type=template&id=4cd06d58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_order_vue_vue_type_template_id_4cd06d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL29yZGVyLWJ5LWN1c3RvbWVyL3Nob3ctb3JkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LW9yZGVyLnZ1ZT85ZDBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LW9yZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXItYnktY3VzdG9tZXIvc2hvdy1vcmRlci52dWU/ZWIwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvb3JkZXItYnktY3VzdG9tZXIvc2hvdy1vcmRlci52dWU/MDhjNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMENBO0FBQ0EscUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FOQTtBQU9BLFNBUEEscUJBT0E7QUFDQTtBQUNBLEdBVEE7QUFVQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQSxZQUNBLEdBREEsQ0FDQSw4Q0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0EsT0FKQSxXQUtBO0FBQ0E7QUFDQSxPQVBBO0FBUUE7QUFWQTtBQVZBLEc7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwrQ0FBK0M7QUFDbkUsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLDBCQUEwQjtBQUMzQyxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQ0FBaUM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDs7O0FBR3pEO0FBQ3NHO0FBQ3RHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9iL1JlcE9DU2hvd09yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5PcmRlciAje3tvcmRlcl9pZH19PC9oMj5cclxuICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlIG1iLTBcIj5PcmRlciBCeTp7e29yZGVyX2lkfX08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxiciAvPlxyXG4gICAgPGJyIC8+XHJcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5PcmRlciAjPC90aD5cclxuICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRhdGEuZGF0YVwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0ZD57e2l0ZW0uaWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPnt7aXRlbS5kYXRlfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57e2l0ZW0uYXRyX3N0YXR1c19sYWJlbH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICA6aHJlZj1cIicvYWRtaW4vcmVwb3J0cy9vcmRlcnMtYnktY3VzdG9tZXJzLycraXRlbS5pZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICA+U2VsZWN0PC9hPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgPHRmb290PjwvdGZvb3Q+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gLS0+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBwcm9wczogW1wib3JkZXJfaWRcIl0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGE6IFtdXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAuZ2V0KFwiL2FkbWluL3JlcG9ydHMvb3JkZXJzL29yZGVyL1wiICsgdGhpcy5vcmRlcl9pZClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuXHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiT3JkZXIgI1wiICsgX3ZtLl9zKF92bS5vcmRlcl9pZCkpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBtYi0wXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihcIk9yZGVyIEJ5OlwiICsgX3ZtLl9zKF92bS5vcmRlcl9pZCkpXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiYnJcIiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImJyXCIpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaG93LW9yZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00Y2QwNmQ1OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG93LW9yZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2hvdy1vcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXGZpYWNyZVxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0Y2QwNmQ1OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0Y2QwNmQ1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0Y2QwNmQ1OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2hvdy1vcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNkMDZkNTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGNkMDZkNTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9vcmRlci1ieS1jdXN0b21lci9zaG93LW9yZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy1vcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy1vcmRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy1vcmRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGNkMDZkNTgmXCIiXSwic291cmNlUm9vdCI6IiJ9