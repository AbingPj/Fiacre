(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/RepProdDaily"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { saveAs } from 'file-saver';

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.getData(); // this.date = this.momento();
  },
  data: function data() {
    return {
      data: [],
      total: 0,
      value: "",
      dateLabel: "",
      date: null,
      filter_date: null,
      options: {
        format: "MMMM DD, YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment() // showTodayButton : true,

      },
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      json_fields: {
        "Time": "time",
        "Order #": "order_id",
        "No. of Products Sold": "number_of_products"
      }
    };
  },
  methods: {
    momento: function momento() {
      return moment().format("MMMM"); //   return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
    getData: function getData() {
      var _this = this;

      axios.post("/admin/api/reports/productsorders/daily").then(function (res) {
        _this.total = res.data.total_earnings;
        _this.data = res.data.data;
        _this.dateLabel = res.data.date;
        _this.date = res.data.date;
        _this.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    filter: function filter() {
      var _this2 = this;

      axios.post("/admin/api/reports/productsorders/daily", {
        date: this.date
      }).then(function (res) {
        _this2.total = res.data.total_earnings;
        _this2.data = res.data.data;
        _this2.dateLabel = res.data.date;
        _this2.date = res.data.date;
        _this2.filter_date = res.data.date;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    print: function print() {
      var _this3 = this;

      axios({
        method: "post",
        url: "/admin/generate/products-order/pdf/daily",
        data: {
          date: this.filter_date
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
        link.setAttribute("download", "daily " + _this3.filter_date + ".pdf"); //or any other extension

        document.body.appendChild(link);
        link.click();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  }
});

/***/ }),

/***/ "./node_modules/file-saver/FileSaver.js":
/*!**********************************************!*\
  !*** ./node_modules/file-saver/FileSaver.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if ( true && module.exports) {
  module.exports.saveAs = saveAs;
} else if (( true && __webpack_require__(/*! !webpack amd define */ "./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c(
          "h3",
          [
            _vm._v("\n        " + _vm._s(_vm.dateLabel) + "\n        "),
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
                _vm._v(" Print\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total Orders: " + _vm.data.length],
                  header:
                    "Porducts Orders Daily Report (" +
                    _vm.dateLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "xls",
                  name: "podaily.xls",
                  worksheet: "Daily"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-excel" }),
                _vm._v("\n          XLS\n        ")
              ]
            ),
            _vm._v(" "),
            _c(
              "download-excel",
              {
                staticClass: "btn btn-success float-right mr-2",
                attrs: {
                  footer: ["total Orders: " + _vm.data.length],
                  header:
                    "Porducts Orders Daily Report (" +
                    _vm.dateLabel.replace(/,/g, ".") +
                    ")",
                  fields: _vm.json_fields,
                  data: _vm.data,
                  type: "csv",
                  name: "podaily.csv",
                  worksheet: "Daily"
                }
              },
              [
                _c("i", { staticClass: "fas fa-file-csv" }),
                _vm._v("\n          CSV\n        ")
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-3" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c(
          "div",
          { staticClass: "input-group" },
          [
            _c("date-picker", {
              attrs: { id: "date-time-input", wrap: true, config: _vm.options },
              model: {
                value: _vm.date,
                callback: function($$v) {
                  _vm.date = $$v
                },
                expression: "date"
              }
            }),
            _vm._v(" "),
            _vm._m(0)
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "button" },
            on: {
              click: function($event) {
                return _vm.filter()
              }
            }
          },
          [_c("i", { staticClass: "fas fa-filter" }), _vm._v(" Filter\n      ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row mt-5" }, [
      _c("div", { staticClass: "col-8" }, [
        _c("div", { staticStyle: { "min-height": "300px" } }, [
          _c("table", { staticClass: "table table-hover" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              [
                _vm.data.length == 0
                  ? _c("tr", [
                      _c(
                        "td",
                        {
                          staticClass: "bg-secondary text-center",
                          attrs: { colspan: "4" }
                        },
                        [_vm._v("No Orders yet for " + _vm._s(_vm.dateLabel))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.data, function(item, index) {
                  return _c("tr", { key: index }, [
                    _c("th", [_vm._v(_vm._s(item.time))]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(item.order_id))
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(item.number_of_products))
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "a",
                        {
                          staticClass: "btn btn-sm btn-info",
                          attrs: { href: "/admin/orders/" + item.order_id }
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
                        [
                          _c("i", { staticClass: "fas fa-print" }),
                          _vm._v(" Print\n                ")
                        ]
                      )
                    ])
                  ])
                })
              ],
              2
            ),
            _vm._v(" "),
            _c("tfoot", [
              _c("tr", [
                _vm._m(2),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th"),
                _vm._v(" "),
                _c("th", { staticClass: "text-center" }, [
                  _vm._v(_vm._s(_vm.data.length))
                ])
              ])
            ])
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-secondary datepickerbutton",
          attrs: { type: "button", title: "Toggle" }
        },
        [_c("i", { staticClass: "far fa-calendar" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Time")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("Order #")]),
        _vm._v(" "),
        _c("th", { staticClass: "text-center" }, [_vm._v("No. Products Sold")]),
        _vm._v(" "),
        _c("th")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("th", [_c("b", [_vm._v("Total Orders")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/daily.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/daily.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily.vue?vue&type=template&id=4e35c32d& */ "./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d&");
/* harmony import */ var _daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/reports/product-orders/daily.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./daily.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./daily.vue?vue&type=template&id=4e35c32d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/reports/product-orders/daily.vue?vue&type=template&id=4e35c32d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_vue_vue_type_template_id_4e35c32d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2RhaWx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9GaWxlU2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2RhaWx5LnZ1ZT9hNTI5Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvZGFpbHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9kYWlseS52dWU/ZmJiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvZGFpbHkudnVlPzBmNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0E7QUFFQTtBQUNBLFNBREEscUJBQ0E7QUFDQSxtQkFEQSxDQUVBO0FBQ0EsR0FKQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0EsZUFIQTtBQUlBLG1CQUpBO0FBS0EsZ0JBTEE7QUFNQSx1QkFOQTtBQU9BO0FBQ0EsK0JBREE7QUFFQSx3QkFGQTtBQUdBLDhCQUhBO0FBSUEseUJBSkEs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Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUmVwUHJvZERhaWx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuPGRpdj5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgIDxoMz5cbiAgICAgICAge3tkYXRlTGFiZWx9fVxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBPcmRlcnM6ICcgKyBkYXRhLmxlbmd0aCBdXCIgOmhlYWRlcj1cIidQb3JkdWN0cyBPcmRlcnMgRGFpbHkgUmVwb3J0ICgnK2RhdGVMYWJlbC5yZXBsYWNlKC8sL2csICcuJykgKycpJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwieGxzXCIgbmFtZT1cInBvZGFpbHkueGxzXCIgd29ya3NoZWV0PVwiRGFpbHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWV4Y2VsXCI+PC9pPlxuICAgICAgICAgIFhMU1xuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxuICAgICAgICA8ZG93bmxvYWQtZXhjZWwgOmZvb3Rlcj1cIlsndG90YWwgT3JkZXJzOiAnKyBkYXRhLmxlbmd0aCBdXCIgOmhlYWRlcj1cIidQb3JkdWN0cyBPcmRlcnMgRGFpbHkgUmVwb3J0ICgnK2RhdGVMYWJlbC5yZXBsYWNlKC8sL2csICcuJykgKycpJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwiY3N2XCIgbmFtZT1cInBvZGFpbHkuY3N2XCIgd29ya3NoZWV0PVwiRGFpbHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1maWxlLWNzdlwiPjwvaT5cbiAgICAgICAgICBDU1ZcbiAgICAgICAgPC9kb3dubG9hZC1leGNlbD5cbiAgICAgIDwvaDM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwicm93IG10LTNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICA8ZGF0ZS1waWNrZXIgdi1tb2RlbD1cImRhdGVcIiBpZD1cImRhdGUtdGltZS1pbnB1dFwiIDp3cmFwPVwidHJ1ZVwiIDpjb25maWc9XCJvcHRpb25zXCI+PC9kYXRlLXBpY2tlcj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiVG9nZ2xlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cImZpbHRlcigpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsdGVyXCI+PC9pPiBGaWx0ZXJcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cInJvdyBtdC01XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC04XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXJcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDwhLS0gPHRoIHNjb3BlPVwiY29sXCI+IzwvdGg+IC0tPlxuICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+T3JkZXIgIzwvdGg+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+Tm8uIFByb2R1Y3RzIFNvbGQ8L3RoPlxuICAgICAgICAgICAgICA8IS0tIDx0aD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5TYWxlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RoPiAtLT5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgPHRyIHYtaWY9XCJkYXRhLmxlbmd0aCA9PSAwXCI+XG4gICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiNFwiIGNsYXNzPVwiYmctc2Vjb25kYXJ5IHRleHQtY2VudGVyXCI+Tm8gT3JkZXJzIHlldCBmb3Ige3tkYXRlTGFiZWx9fTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgIDx0aD57e2l0ZW0udGltZX19PC90aD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2l0ZW0ub3JkZXJfaWR9fTwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tpdGVtLm51bWJlcl9vZl9wcm9kdWN0c319PC90ZD5cbiAgICAgICAgICAgICAgPCEtLSA8dGQ+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0udG90YWxfZWFybmluZ3MpfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90ZD4tLT5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxhIDpocmVmPVwiJy9hZG1pbi9vcmRlcnMvJytpdGVtLm9yZGVyX2lkXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1pbmZvXCI+RGV0YWlsczwvYT5cbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIml0ZW0udXJsX2Zvcl9wcmludFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcHJpbnRcIj48L2k+IFByaW50XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDx0Zm9vdD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRoPlxuICAgICAgICAgICAgICAgIDxiPlRvdGFsIE9yZGVyczwvYj5cbiAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgPHRoPjwvdGg+XG4gICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICA8IS0tIDx0aD5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj57e2RhdGEubGVuZ3RofX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC90aD4gLS0+XG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tkYXRhLmxlbmd0aH19PC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Zm9vdD5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIGltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IEZpbGVTYXZlciBmcm9tIFwiZmlsZS1zYXZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGNyZWF0ZWQoKSB7XG4gICAgdGhpcy5nZXREYXRhKCk7XG4gICAgLy8gdGhpcy5kYXRlID0gdGhpcy5tb21lbnRvKCk7XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtdLFxuICAgICAgdG90YWw6IDAsXG4gICAgICB2YWx1ZTogXCJcIixcbiAgICAgIGRhdGVMYWJlbDogXCJcIixcbiAgICAgIGRhdGU6IG51bGwsXG4gICAgICBmaWx0ZXJfZGF0ZTogbnVsbCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgZm9ybWF0OiBcIk1NTU0gREQsIFlZWVlcIixcbiAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcbiAgICAgICAgYWxsb3dJbnB1dFRvZ2dsZTogdHJ1ZSxcbiAgICAgICAgbWF4RGF0ZTogbW9tZW50KClcbiAgICAgICAgLy8gc2hvd1RvZGF5QnV0dG9uIDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBjc3JmOiBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXG4gICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpLFxuICAgICAganNvbl9maWVsZHM6IHtcbiAgICAgICAgXCJUaW1lXCI6IFwidGltZVwiLFxuICAgICAgICBcIk9yZGVyICNcIjogXCJvcmRlcl9pZFwiLFxuICAgICAgICBcIk5vLiBvZiBQcm9kdWN0cyBTb2xkXCI6IFwibnVtYmVyX29mX3Byb2R1Y3RzXCJcbiAgICAgIH0sXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIG1vbWVudG8oKSB7XG4gICAgICByZXR1cm4gbW9tZW50KCkuZm9ybWF0KFwiTU1NTVwiKTtcbiAgICAgIC8vICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdChcIk1NTU0gRG8gWVlZWSwgaDptbTpzcyBhXCIpO1xuICAgIH0sXG4gICAgZ2V0RGF0YSgpIHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFwiL2FkbWluL2FwaS9yZXBvcnRzL3Byb2R1Y3Rzb3JkZXJzL2RhaWx5XCIpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsX2Vhcm5pbmdzO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XG4gICAgICAgICAgdGhpcy5maWx0ZXJfZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBmaWx0ZXIoKSB7XG4gICAgICBheGlvc1xuICAgICAgICAucG9zdChcIi9hZG1pbi9hcGkvcmVwb3J0cy9wcm9kdWN0c29yZGVycy9kYWlseVwiLCB7XG4gICAgICAgICAgZGF0ZTogdGhpcy5kYXRlXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsX2Vhcm5pbmdzO1xuICAgICAgICAgIHRoaXMuZGF0YSA9IHJlcy5kYXRhLmRhdGE7XG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xuICAgICAgICAgIHRoaXMuZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XG4gICAgICAgICAgdGhpcy5maWx0ZXJfZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHByaW50KCkge1xuICAgICAgYXhpb3Moe1xuICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgdXJsOiBcIi9hZG1pbi9nZW5lcmF0ZS9wcm9kdWN0cy1vcmRlci9wZGYvZGFpbHlcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkYXRlOiB0aGlzLmZpbHRlcl9kYXRlXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcImRhaWx5IFwiICsgdGhpcy5maWx0ZXJfZGF0ZSArIFwiLnBkZlwiKTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG4iLCIvKiBGaWxlU2F2ZXIuanNcbiAqIEEgc2F2ZUFzKCkgRmlsZVNhdmVyIGltcGxlbWVudGF0aW9uLlxuICogMS4zLjJcbiAqIDIwMTYtMDYtMTYgMTg6MjU6MTlcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiB2aWV3ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL2NvbnN0cnVjdG9yL2kudGVzdCh2aWV3LkhUTUxFbGVtZW50KSB8fCB2aWV3LnNhZmFyaVxuXHRcdCwgaXNfY2hyb21lX2lvcyA9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0Ly8gdGhlIEJsb2IgQVBJIGlzIGZ1bmRhbWVudGFsbHkgYnJva2VuIGFzIHRoZXJlIGlzIG5vIFwiZG93bmxvYWRmaW5pc2hlZFwiIGV2ZW50IHRvIHN1YnNjcmliZSB0b1xuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gMTAwMCAqIDQwIC8vIGluIG1zXG5cdFx0LCByZXZva2UgPSBmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHR2YXIgcmV2b2tlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXG5cdFx0XHRcdFx0Z2V0X1VSTCgpLnJldm9rZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHsgLy8gZmlsZSBpcyBhIEZpbGVcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChyZXZva2VyLCBhcmJpdHJhcnlfcmV2b2tlX3RpbWVvdXQpO1xuXHRcdH1cblx0XHQsIGRpc3BhdGNoID0gZnVuY3Rpb24oZmlsZXNhdmVyLCBldmVudF90eXBlcywgZXZlbnQpIHtcblx0XHRcdGV2ZW50X3R5cGVzID0gW10uY29uY2F0KGV2ZW50X3R5cGVzKTtcblx0XHRcdHZhciBpID0gZXZlbnRfdHlwZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRfdHlwZXNbaV1dO1xuXHRcdFx0XHRpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbChmaWxlc2F2ZXIsIGV2ZW50IHx8IGZpbGVzYXZlcik7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRcdHRocm93X291dHNpZGUoZXgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQsIGF1dG9fYm9tID0gZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0Ly8gcHJlcGVuZCBCT00gZm9yIFVURi04IFhNTCBhbmQgdGV4dC8qIHR5cGVzIChpbmNsdWRpbmcgSFRNTClcblx0XHRcdC8vIG5vdGU6IHlvdXIgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgY29udmVydCBVVEYtMTYgVStGRUZGIHRvIEVGIEJCIEJGXG5cdFx0XHRpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEJsb2IoW1N0cmluZy5mcm9tQ2hhckNvZGUoMHhGRUZGKSwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGZvcmNlID0gdHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZVxuXHRcdFx0XHQsIG9iamVjdF91cmxcblx0XHRcdFx0LCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKChpc19jaHJvbWVfaW9zIHx8IChmb3JjZSAmJiBpc19zYWZhcmkpKSAmJiB2aWV3LkZpbGVSZWFkZXIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB1cmwgPSBpc19jaHJvbWVfaW9zID8gcmVhZGVyLnJlc3VsdCA6IHJlYWRlci5yZXN1bHQucmVwbGFjZSgvXmRhdGE6W147XSo7LywgJ2RhdGE6YXR0YWNobWVudC9maWxlOycpO1xuXHRcdFx0XHRcdFx0XHR2YXIgcG9wdXAgPSB2aWV3Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0XHRcdGlmKCFwb3B1cCkgdmlldy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuXHRcdFx0XHRcdFx0XHR1cmw9dW5kZWZpbmVkOyAvLyByZWxlYXNlIHJlZmVyZW5jZSBiZWZvcmUgZGlzcGF0Y2hpbmdcblx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuXHRcdFx0XHRcdGlmICghb2JqZWN0X3VybCkge1xuXHRcdFx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChmb3JjZSkge1xuXHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW5lZCA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcblx0XHRcdFx0XHRcdGlmICghb3BlbmVkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFwcGxlIGRvZXMgbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvc2FmYXJpL2RvY3VtZW50YXRpb24vVG9vbHMvQ29uY2VwdHVhbC9TYWZhcmlFeHRlbnNpb25HdWlkZS9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzL1dvcmtpbmd3aXRoV2luZG93c2FuZFRhYnMuaHRtbFxuXHRcdFx0XHRcdFx0XHR2aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNhdmVfbGluay5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRzYXZlX2xpbmsuZG93bmxvYWQgPSBuYW1lO1xuXHRcdFx0XHRcdGNsaWNrKHNhdmVfbGluayk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xuXHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0fVxuXHRcdCwgRlNfcHJvdG8gPSBGaWxlU2F2ZXIucHJvdG90eXBlXG5cdFx0LCBzYXZlQXMgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiLCBub19hdXRvX2JvbSk7XG5cdFx0fVxuXHQ7XG5cdC8vIElFIDEwKyAobmF0aXZlIHNhdmVBcylcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdG5hbWUgPSBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCI7XG5cblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIG5hbWUpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCl7fTtcblx0RlNfcHJvdG8ucmVhZHlTdGF0ZSA9IEZTX3Byb3RvLklOSVQgPSAwO1xuXHRGU19wcm90by5XUklUSU5HID0gMTtcblx0RlNfcHJvdG8uRE9ORSA9IDI7XG5cblx0RlNfcHJvdG8uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlc3RhcnQgPVxuXHRGU19wcm90by5vbnByb2dyZXNzID1cblx0RlNfcHJvdG8ub253cml0ZSA9XG5cdEZTX3Byb3RvLm9uYWJvcnQgPVxuXHRGU19wcm90by5vbmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZWVuZCA9XG5cdFx0bnVsbDtcblxuXHRyZXR1cm4gc2F2ZUFzO1xufShcblx0ICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZlxuXHR8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1xuXHR8fCB0aGlzLmNvbnRlbnRcbikpO1xuLy8gYHNlbGZgIGlzIHVuZGVmaW5lZCBpbiBGaXJlZm94IGZvciBBbmRyb2lkIGNvbnRlbnQgc2NyaXB0IGNvbnRleHRcbi8vIHdoaWxlIGB0aGlzYCBpcyBuc0lDb250ZW50RnJhbWVNZXNzYWdlTWFuYWdlclxuLy8gd2l0aCBhbiBhdHRyaWJ1dGUgYGNvbnRlbnRgIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdpbmRvd1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cy5zYXZlQXMgPSBzYXZlQXM7XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCkgJiYgKGRlZmluZS5hbWQgIT09IG51bGwpKSB7XG4gIGRlZmluZShcIkZpbGVTYXZlci5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2F2ZUFzO1xuICB9KTtcbn1cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5kYXRlTGFiZWwpICsgXCJcXG4gICAgICAgIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucHJpbnQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wcmludFwiIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBQcmludFxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWwgT3JkZXJzOiBcIiArIF92bS5kYXRhLmxlbmd0aF0sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiUG9yZHVjdHMgT3JkZXJzIERhaWx5IFJlcG9ydCAoXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZUxhYmVsLnJlcGxhY2UoLywvZywgXCIuXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJ4bHNcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9kYWlseS54bHNcIixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJEYWlseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtZXhjZWxcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgWExTXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXCJ0b3RhbCBPcmRlcnM6IFwiICsgX3ZtLmRhdGEubGVuZ3RoXSxcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjpcbiAgICAgICAgICAgICAgICAgICAgXCJQb3JkdWN0cyBPcmRlcnMgRGFpbHkgUmVwb3J0IChcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5kYXRlTGFiZWwucmVwbGFjZSgvLC9nLCBcIi5cIikgK1xuICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgIGZpZWxkczogX3ZtLmpzb25fZmllbGRzLFxuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmRhdGEsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcImNzdlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwb2RhaWx5LmNzdlwiLFxuICAgICAgICAgICAgICAgICAgd29ya3NoZWV0OiBcIkRhaWx5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1jc3ZcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgQ1NWXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkYXRlLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRhdGUtdGltZS1pbnB1dFwiLCB3cmFwOiB0cnVlLCBjb25maWc6IF92bS5vcHRpb25zIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRlID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZpbHRlcigpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsdGVyXCIgfSksIF92bS5fdihcIiBGaWx0ZXJcXG4gICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtOFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1pbi1oZWlnaHRcIjogXCIzMDBweFwiIH0gfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ob3ZlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmRhdGEubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJnLXNlY29uZGFyeSB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBcIjRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk5vIE9yZGVycyB5ZXQgZm9yIFwiICsgX3ZtLl9zKF92bS5kYXRlTGFiZWwpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnRpbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm9yZGVyX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubnVtYmVyX29mX3Byb2R1Y3RzKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vb3JkZXJzL1wiICsgaXRlbS5vcmRlcl9pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRldGFpbHNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc20gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogaXRlbS51cmxfZm9yX3ByaW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1wcmludFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUHJpbnRcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGZvb3RcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmRhdGEubGVuZ3RoKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIixcbiAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCB0aXRsZTogXCJUb2dnbGVcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtY2FsZW5kYXJcIiB9KV1cbiAgICAgIClcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaW1lXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtfdm0uX3YoXCJPcmRlciAjXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtfdm0uX3YoXCJOby4gUHJvZHVjdHMgU29sZFwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhcIiwgW19jKFwiYlwiLCBbX3ZtLl92KFwiVG90YWwgT3JkZXJzXCIpXSldKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kYWlseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUzNWMzMmQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGFpbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kYWlseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9kZXJiaWVtaWd1ZWwvcHJvamVjdHMvZmlhY3JlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlMzVjMzJkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlMzVjMzJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlMzVjMzJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9kYWlseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUzNWMzMmQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGUzNWMzMmQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9kYWlseS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhaWx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMzVjMzJkJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==