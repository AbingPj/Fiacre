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
            _vm._v("\r\n        " + _vm._s(_vm.dateLabel) + "\r\n        "),
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
                _vm._v("\r\n          CSV\r\n        ")
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
          [
            _c("i", { staticClass: "fas fa-filter" }),
            _vm._v(" Filter\r\n      ")
          ]
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
                          _vm._v(" Print\r\n                ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2RhaWx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9GaWxlU2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9yZXBvcnRzL3Byb2R1Y3Qtb3JkZXJzL2RhaWx5LnZ1ZT9hNTI5Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvZGFpbHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9kYWlseS52dWU/ZmJiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3JlcG9ydHMvcHJvZHVjdC1vcmRlcnMvZGFpbHkudnVlPzBmNTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkZBO0FBQ0E7QUFFQTtBQUNBLFNBREEscUJBQ0E7QUFDQSxtQkFEQSxDQUVBO0FBQ0EsR0FKQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0EsZUFIQTtBQUlBLG1CQUpBO0FBS0EsZ0JBTEE7QUFNQSx1QkFOQTtBQU9BO0FBQ0EsK0JBREE7QUFFQSx3QkFGQTtBQUdBLDhCQUhBO0FBSUEseUJBSkEs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bFBBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDc0c7QUFDdEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBdU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvUmVwUHJvZERhaWx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48ZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgPGgzPlxyXG4gICAgICAgIHt7ZGF0ZUxhYmVsfX1cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwcmludCgpXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXByaW50XCI+PC9pPiBQcmludFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBPcmRlcnM6ICcgKyBkYXRhLmxlbmd0aCBdXCIgOmhlYWRlcj1cIidQb3JkdWN0cyBPcmRlcnMgRGFpbHkgUmVwb3J0ICgnK2RhdGVMYWJlbC5yZXBsYWNlKC8sL2csICcuJykgKycpJ1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG1yLTJcIiA6ZmllbGRzPVwianNvbl9maWVsZHNcIiA6ZGF0YT1cImRhdGFcIiB0eXBlPVwieGxzXCIgbmFtZT1cInBvZGFpbHkueGxzXCIgd29ya3NoZWV0PVwiRGFpbHlcIj5cclxuICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWZpbGUtZXhjZWxcIj48L2k+XHJcbiAgICAgICAgICBYTFNcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICAgIDxkb3dubG9hZC1leGNlbCA6Zm9vdGVyPVwiWyd0b3RhbCBPcmRlcnM6ICcrIGRhdGEubGVuZ3RoIF1cIiA6aGVhZGVyPVwiJ1BvcmR1Y3RzIE9yZGVycyBEYWlseSBSZXBvcnQgKCcrZGF0ZUxhYmVsLnJlcGxhY2UoLywvZywgJy4nKSArJyknXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiIDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiIDpkYXRhPVwiZGF0YVwiIHR5cGU9XCJjc3ZcIiBuYW1lPVwicG9kYWlseS5jc3ZcIiB3b3Jrc2hlZXQ9XCJEYWlseVwiPlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XHJcbiAgICAgICAgICBDU1ZcclxuICAgICAgICA8L2Rvd25sb2FkLWV4Y2VsPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgPGRhdGUtcGlja2VyIHYtbW9kZWw9XCJkYXRlXCIgaWQ9XCJkYXRlLXRpbWUtaW5wdXRcIiA6d3JhcD1cInRydWVcIiA6Y29uZmlnPVwib3B0aW9uc1wiPjwvZGF0ZS1waWNrZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGRhdGVwaWNrZXJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJUb2dnbGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtY2FsZW5kYXJcIj48L2k+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJmaWx0ZXIoKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZmlsdGVyXCI+PC9pPiBGaWx0ZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwicm93IG10LTVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOFwiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwibWluLWhlaWdodDozMDBweDtcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGggc2NvcGU9XCJjb2xcIj4jPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgPHRoPlRpbWU8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtY2VudGVyXCI+T3JkZXIgIzwvdGg+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5Oby4gUHJvZHVjdHMgU29sZDwvdGg+XHJcbiAgICAgICAgICAgICAgPCEtLSA8dGg+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHRcIj5TYWxlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvdGg+IC0tPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyIHYtaWY9XCJkYXRhLmxlbmd0aCA9PSAwXCI+XHJcbiAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCIgY2xhc3M9XCJiZy1zZWNvbmRhcnkgdGV4dC1jZW50ZXJcIj5ObyBPcmRlcnMgeWV0IGZvciB7e2RhdGVMYWJlbH19PC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBkYXRhXCIgOmtleT1cImluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHRoPnt7aXRlbS50aW1lfX08L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tpdGVtLm9yZGVyX2lkfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRleHQtY2VudGVyXCI+e3tpdGVtLm51bWJlcl9vZl9wcm9kdWN0c319PC90ZD5cclxuICAgICAgICAgICAgICA8IS0tIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnRvdGFsX2Vhcm5pbmdzKX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90ZD4tLT5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIicvYWRtaW4vb3JkZXJzLycraXRlbS5vcmRlcl9pZFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4taW5mb1wiPkRldGFpbHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSA6aHJlZj1cIml0ZW0udXJsX2Zvcl9wcmludFwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDx0Zm9vdD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0aD5cclxuICAgICAgICAgICAgICAgIDxiPlRvdGFsIE9yZGVyczwvYj5cclxuICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgIDwhLS0gPHRoPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0XCI+e3tkYXRhLmxlbmd0aH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC90aD4gLS0+XHJcbiAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1jZW50ZXJcIj57e2RhdGEubGVuZ3RofX08L3RoPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xyXG5pbXBvcnQgRmlsZVNhdmVyIGZyb20gXCJmaWxlLXNhdmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgLy8gdGhpcy5kYXRlID0gdGhpcy5tb21lbnRvKCk7XHJcbiAgfSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0YTogW10sXHJcbiAgICAgIHRvdGFsOiAwLFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgICAgZGF0ZUxhYmVsOiBcIlwiLFxyXG4gICAgICBkYXRlOiBudWxsLFxyXG4gICAgICBmaWx0ZXJfZGF0ZTogbnVsbCxcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGZvcm1hdDogXCJNTU1NIERELCBZWVlZXCIsXHJcbiAgICAgICAgdXNlQ3VycmVudDogdHJ1ZSxcclxuICAgICAgICBhbGxvd0lucHV0VG9nZ2xlOiB0cnVlLFxyXG4gICAgICAgIG1heERhdGU6IG1vbWVudCgpXHJcbiAgICAgICAgLy8gc2hvd1RvZGF5QnV0dG9uIDogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgICAgY3NyZjogZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpXHJcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImNvbnRlbnRcIiksXHJcbiAgICAgIGpzb25fZmllbGRzOiB7XHJcbiAgICAgICAgXCJUaW1lXCI6IFwidGltZVwiLFxyXG4gICAgICAgIFwiT3JkZXIgI1wiOiBcIm9yZGVyX2lkXCIsXHJcbiAgICAgICAgXCJOby4gb2YgUHJvZHVjdHMgU29sZFwiOiBcIm51bWJlcl9vZl9wcm9kdWN0c1wiXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbW9tZW50bygpIHtcclxuICAgICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdChcIk1NTU1cIik7XHJcbiAgICAgIC8vICAgcmV0dXJuIG1vbWVudCgpLmZvcm1hdChcIk1NTU0gRG8gWVlZWSwgaDptbTpzcyBhXCIpO1xyXG4gICAgfSxcclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgIGF4aW9zXHJcbiAgICAgICAgLnBvc3QoXCIvYWRtaW4vYXBpL3JlcG9ydHMvcHJvZHVjdHNvcmRlcnMvZGFpbHlcIilcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy50b3RhbCA9IHJlcy5kYXRhLnRvdGFsX2Vhcm5pbmdzO1xyXG4gICAgICAgICAgdGhpcy5kYXRhID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIHRoaXMuZGF0ZUxhYmVsID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZGF0ZSA9IHJlcy5kYXRhLmRhdGU7XHJcbiAgICAgICAgICB0aGlzLmZpbHRlcl9kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZpbHRlcigpIHtcclxuICAgICAgYXhpb3NcclxuICAgICAgICAucG9zdChcIi9hZG1pbi9hcGkvcmVwb3J0cy9wcm9kdWN0c29yZGVycy9kYWlseVwiLCB7XHJcbiAgICAgICAgICBkYXRlOiB0aGlzLmRhdGVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRvdGFsID0gcmVzLmRhdGEudG90YWxfZWFybmluZ3M7XHJcbiAgICAgICAgICB0aGlzLmRhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5kYXRlTGFiZWwgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgICAgdGhpcy5kYXRlID0gcmVzLmRhdGEuZGF0ZTtcclxuICAgICAgICAgIHRoaXMuZmlsdGVyX2RhdGUgPSByZXMuZGF0YS5kYXRlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHByaW50KCkge1xyXG4gICAgICBheGlvcyh7XHJcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgICAgdXJsOiBcIi9hZG1pbi9nZW5lcmF0ZS9wcm9kdWN0cy1vcmRlci9wZGYvZGFpbHlcIixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGF0ZTogdGhpcy5maWx0ZXJfZGF0ZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlc3BvbnNlVHlwZTogXCJhcnJheWJ1ZmZlclwiLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL3BkZlwiXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcclxuICAgICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgXCJkYWlseSBcIiArIHRoaXMuZmlsdGVyX2RhdGUgKyBcIi5wZGZcIik7IC8vb3IgYW55IG90aGVyIGV4dGVuc2lvblxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgICAgICAgIGxpbmsuY2xpY2soKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XHJcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMlxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHdpdGhDb21tYXM7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuIiwiLyogRmlsZVNhdmVyLmpzXG4gKiBBIHNhdmVBcygpIEZpbGVTYXZlciBpbXBsZW1lbnRhdGlvbi5cbiAqIDEuMy4yXG4gKiAyMDE2LTA2LTE2IDE4OjI1OjE5XG4gKlxuICogQnkgRWxpIEdyZXksIGh0dHA6Ly9lbGlncmV5LmNvbVxuICogTGljZW5zZTogTUlUXG4gKiAgIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZWxpZ3JleS9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuICovXG5cbi8qZ2xvYmFsIHNlbGYgKi9cbi8qanNsaW50IGJpdHdpc2U6IHRydWUsIGluZGVudDogNCwgbGF4YnJlYWs6IHRydWUsIGxheGNvbW1hOiB0cnVlLCBzbWFydHRhYnM6IHRydWUsIHBsdXNwbHVzOiB0cnVlICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9GaWxlU2F2ZXIuanMvYmxvYi9tYXN0ZXIvRmlsZVNhdmVyLmpzICovXG5cbnZhciBzYXZlQXMgPSBzYXZlQXMgfHwgKGZ1bmN0aW9uKHZpZXcpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdC8vIElFIDwxMCBpcyBleHBsaWNpdGx5IHVuc3VwcG9ydGVkXG5cdGlmICh0eXBlb2YgdmlldyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIC9NU0lFIFsxLTldXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhclxuXHRcdCAgZG9jID0gdmlldy5kb2N1bWVudFxuXHRcdCAgLy8gb25seSBnZXQgVVJMIHdoZW4gbmVjZXNzYXJ5IGluIGNhc2UgQmxvYi5qcyBoYXNuJ3Qgb3ZlcnJpZGRlbiBpdCB5ZXRcblx0XHQsIGdldF9VUkwgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB2aWV3LlVSTCB8fCB2aWV3LndlYmtpdFVSTCB8fCB2aWV3O1xuXHRcdH1cblx0XHQsIHNhdmVfbGluayA9IGRvYy5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsIFwiYVwiKVxuXHRcdCwgY2FuX3VzZV9zYXZlX2xpbmsgPSBcImRvd25sb2FkXCIgaW4gc2F2ZV9saW5rXG5cdFx0LCBjbGljayA9IGZ1bmN0aW9uKG5vZGUpIHtcblx0XHRcdHZhciBldmVudCA9IG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIik7XG5cdFx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHRcdH1cblx0XHQsIGlzX3NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qodmlldy5IVE1MRWxlbWVudCkgfHwgdmlldy5zYWZhcmlcblx0XHQsIGlzX2Nocm9tZV9pb3MgPS9DcmlPU1xcL1tcXGRdKy8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KVxuXHRcdCwgdGhyb3dfb3V0c2lkZSA9IGZ1bmN0aW9uKGV4KSB7XG5cdFx0XHQodmlldy5zZXRJbW1lZGlhdGUgfHwgdmlldy5zZXRUaW1lb3V0KShmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhyb3cgZXg7XG5cdFx0XHR9LCAwKTtcblx0XHR9XG5cdFx0LCBmb3JjZV9zYXZlYWJsZV90eXBlID0gXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIlxuXHRcdC8vIHRoZSBCbG9iIEFQSSBpcyBmdW5kYW1lbnRhbGx5IGJyb2tlbiBhcyB0aGVyZSBpcyBubyBcImRvd25sb2FkZmluaXNoZWRcIiBldmVudCB0byBzdWJzY3JpYmUgdG9cblx0XHQsIGFyYml0cmFyeV9yZXZva2VfdGltZW91dCA9IDEwMDAgKiA0MCAvLyBpbiBtc1xuXHRcdCwgcmV2b2tlID0gZnVuY3Rpb24oZmlsZSkge1xuXHRcdFx0dmFyIHJldm9rZXIgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlID09PSBcInN0cmluZ1wiKSB7IC8vIGZpbGUgaXMgYW4gb2JqZWN0IFVSTFxuXHRcdFx0XHRcdGdldF9VUkwoKS5yZXZva2VPYmplY3RVUkwoZmlsZSk7XG5cdFx0XHRcdH0gZWxzZSB7IC8vIGZpbGUgaXMgYSBGaWxlXG5cdFx0XHRcdFx0ZmlsZS5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdHNldFRpbWVvdXQocmV2b2tlciwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0KTtcblx0XHR9XG5cdFx0LCBkaXNwYXRjaCA9IGZ1bmN0aW9uKGZpbGVzYXZlciwgZXZlbnRfdHlwZXMsIGV2ZW50KSB7XG5cdFx0XHRldmVudF90eXBlcyA9IFtdLmNvbmNhdChldmVudF90eXBlcyk7XG5cdFx0XHR2YXIgaSA9IGV2ZW50X3R5cGVzLmxlbmd0aDtcblx0XHRcdHdoaWxlIChpLS0pIHtcblx0XHRcdFx0dmFyIGxpc3RlbmVyID0gZmlsZXNhdmVyW1wib25cIiArIGV2ZW50X3R5cGVzW2ldXTtcblx0XHRcdFx0aWYgKHR5cGVvZiBsaXN0ZW5lciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGwoZmlsZXNhdmVyLCBldmVudCB8fCBmaWxlc2F2ZXIpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGV4KSB7XG5cdFx0XHRcdFx0XHR0aHJvd19vdXRzaWRlKGV4KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LCBhdXRvX2JvbSA9IGZ1bmN0aW9uKGJsb2IpIHtcblx0XHRcdC8vIHByZXBlbmQgQk9NIGZvciBVVEYtOCBYTUwgYW5kIHRleHQvKiB0eXBlcyAoaW5jbHVkaW5nIEhUTUwpXG5cdFx0XHQvLyBub3RlOiB5b3VyIGJyb3dzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGNvbnZlcnQgVVRGLTE2IFUrRkVGRiB0byBFRiBCQiBCRlxuXHRcdFx0aWYgKC9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGJsb2IudHlwZSkpIHtcblx0XHRcdFx0cmV0dXJuIG5ldyBCbG9iKFtTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkVGRiksIGJsb2JdLCB7dHlwZTogYmxvYi50eXBlfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYmxvYjtcblx0XHR9XG5cdFx0LCBGaWxlU2F2ZXIgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0aWYgKCFub19hdXRvX2JvbSkge1xuXHRcdFx0XHRibG9iID0gYXV0b19ib20oYmxvYik7XG5cdFx0XHR9XG5cdFx0XHQvLyBGaXJzdCB0cnkgYS5kb3dubG9hZCwgdGhlbiB3ZWIgZmlsZXN5c3RlbSwgdGhlbiBvYmplY3QgVVJMc1xuXHRcdFx0dmFyXG5cdFx0XHRcdCAgZmlsZXNhdmVyID0gdGhpc1xuXHRcdFx0XHQsIHR5cGUgPSBibG9iLnR5cGVcblx0XHRcdFx0LCBmb3JjZSA9IHR5cGUgPT09IGZvcmNlX3NhdmVhYmxlX3R5cGVcblx0XHRcdFx0LCBvYmplY3RfdXJsXG5cdFx0XHRcdCwgZGlzcGF0Y2hfYWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2goZmlsZXNhdmVyLCBcIndyaXRlc3RhcnQgcHJvZ3Jlc3Mgd3JpdGUgd3JpdGVlbmRcIi5zcGxpdChcIiBcIikpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIG9uIGFueSBmaWxlc3lzIGVycm9ycyByZXZlcnQgdG8gc2F2aW5nIHdpdGggb2JqZWN0IFVSTHNcblx0XHRcdFx0LCBmc19lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICgoaXNfY2hyb21lX2lvcyB8fCAoZm9yY2UgJiYgaXNfc2FmYXJpKSkgJiYgdmlldy5GaWxlUmVhZGVyKSB7XG5cdFx0XHRcdFx0XHQvLyBTYWZhcmkgZG9lc24ndCBhbGxvdyBkb3dubG9hZGluZyBvZiBibG9iIHVybHNcblx0XHRcdFx0XHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRcdFx0XHRcdFx0cmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdXJsID0gaXNfY2hyb21lX2lvcyA/IHJlYWRlci5yZXN1bHQgOiByZWFkZXIucmVzdWx0LnJlcGxhY2UoL15kYXRhOlteO10qOy8sICdkYXRhOmF0dGFjaG1lbnQvZmlsZTsnKTtcblx0XHRcdFx0XHRcdFx0dmFyIHBvcHVwID0gdmlldy5vcGVuKHVybCwgJ19ibGFuaycpO1xuXHRcdFx0XHRcdFx0XHRpZighcG9wdXApIHZpZXcubG9jYXRpb24uaHJlZiA9IHVybDtcblx0XHRcdFx0XHRcdFx0dXJsPXVuZGVmaW5lZDsgLy8gcmVsZWFzZSByZWZlcmVuY2UgYmVmb3JlIGRpc3BhdGNoaW5nXG5cdFx0XHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuXHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gZG9uJ3QgY3JlYXRlIG1vcmUgb2JqZWN0IFVSTHMgdGhhbiBuZWVkZWRcblx0XHRcdFx0XHRpZiAoIW9iamVjdF91cmwpIHtcblx0XHRcdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoZm9yY2UpIHtcblx0XHRcdFx0XHRcdHZpZXcubG9jYXRpb24uaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBvcGVuZWQgPSB2aWV3Lm9wZW4ob2JqZWN0X3VybCwgXCJfYmxhbmtcIik7XG5cdFx0XHRcdFx0XHRpZiAoIW9wZW5lZCkge1xuXHRcdFx0XHRcdFx0XHQvLyBBcHBsZSBkb2VzIG5vdCBhbGxvdyB3aW5kb3cub3Blbiwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L3NhZmFyaS9kb2N1bWVudGF0aW9uL1Rvb2xzL0NvbmNlcHR1YWwvU2FmYXJpRXh0ZW5zaW9uR3VpZGUvV29ya2luZ3dpdGhXaW5kb3dzYW5kVGFicy9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzLmh0bWxcblx0XHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRkaXNwYXRjaF9hbGwoKTtcblx0XHRcdFx0XHRyZXZva2Uob2JqZWN0X3VybCk7XG5cdFx0XHRcdH1cblx0XHRcdDtcblx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLklOSVQ7XG5cblx0XHRcdGlmIChjYW5fdXNlX3NhdmVfbGluaykge1xuXHRcdFx0XHRvYmplY3RfdXJsID0gZ2V0X1VSTCgpLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRzYXZlX2xpbmsuaHJlZiA9IG9iamVjdF91cmw7XG5cdFx0XHRcdFx0c2F2ZV9saW5rLmRvd25sb2FkID0gbmFtZTtcblx0XHRcdFx0XHRjbGljayhzYXZlX2xpbmspO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmc19lcnJvcigpO1xuXHRcdH1cblx0XHQsIEZTX3Byb3RvID0gRmlsZVNhdmVyLnByb3RvdHlwZVxuXHRcdCwgc2F2ZUFzID0gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdHJldHVybiBuZXcgRmlsZVNhdmVyKGJsb2IsIG5hbWUgfHwgYmxvYi5uYW1lIHx8IFwiZG93bmxvYWRcIiwgbm9fYXV0b19ib20pO1xuXHRcdH1cblx0O1xuXHQvLyBJRSAxMCsgKG5hdGl2ZSBzYXZlQXMpXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRuYW1lID0gbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiO1xuXG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihibG9iLCBuYW1lKTtcblx0XHR9O1xuXHR9XG5cblx0RlNfcHJvdG8uYWJvcnQgPSBmdW5jdGlvbigpe307XG5cdEZTX3Byb3RvLnJlYWR5U3RhdGUgPSBGU19wcm90by5JTklUID0gMDtcblx0RlNfcHJvdG8uV1JJVElORyA9IDE7XG5cdEZTX3Byb3RvLkRPTkUgPSAyO1xuXG5cdEZTX3Byb3RvLmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZXN0YXJ0ID1cblx0RlNfcHJvdG8ub25wcm9ncmVzcyA9XG5cdEZTX3Byb3RvLm9ud3JpdGUgPVxuXHRGU19wcm90by5vbmFib3J0ID1cblx0RlNfcHJvdG8ub25lcnJvciA9XG5cdEZTX3Byb3RvLm9ud3JpdGVlbmQgPVxuXHRcdG51bGw7XG5cblx0cmV0dXJuIHNhdmVBcztcbn0oXG5cdCAgIHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGZcblx0fHwgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3dcblx0fHwgdGhpcy5jb250ZW50XG4pKTtcbi8vIGBzZWxmYCBpcyB1bmRlZmluZWQgaW4gRmlyZWZveCBmb3IgQW5kcm9pZCBjb250ZW50IHNjcmlwdCBjb250ZXh0XG4vLyB3aGlsZSBgdGhpc2AgaXMgbnNJQ29udGVudEZyYW1lTWVzc2FnZU1hbmFnZXJcbi8vIHdpdGggYW4gYXR0cmlidXRlIGBjb250ZW50YCB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3aW5kb3dcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMuc2F2ZUFzID0gc2F2ZUFzO1xufSBlbHNlIGlmICgodHlwZW9mIGRlZmluZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkZWZpbmUgIT09IG51bGwpICYmIChkZWZpbmUuYW1kICE9PSBudWxsKSkge1xuICBkZWZpbmUoXCJGaWxlU2F2ZXIuanNcIiwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHNhdmVBcztcbiAgfSk7XG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImgzXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uZGF0ZUxhYmVsKSArIFwiXFxyXFxuICAgICAgICBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByaW50KClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUHJpbnRcXHJcXG4gICAgICAgIFwiKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBmb290ZXI6IFtcInRvdGFsIE9yZGVyczogXCIgKyBfdm0uZGF0YS5sZW5ndGhdLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyOlxuICAgICAgICAgICAgICAgICAgICBcIlBvcmR1Y3RzIE9yZGVycyBEYWlseSBSZXBvcnQgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGVMYWJlbC5yZXBsYWNlKC8sL2csIFwiLlwiKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBfdm0uZGF0YSxcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBvZGFpbHkueGxzXCIsXG4gICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiRGFpbHlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1maWxlLWV4Y2VsXCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIFhMU1xcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZG93bmxvYWQtZXhjZWxcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvb3RlcjogW1widG90YWwgT3JkZXJzOiBcIiArIF92bS5kYXRhLmxlbmd0aF0sXG4gICAgICAgICAgICAgICAgICBoZWFkZXI6XG4gICAgICAgICAgICAgICAgICAgIFwiUG9yZHVjdHMgT3JkZXJzIERhaWx5IFJlcG9ydCAoXCIgK1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0ZUxhYmVsLnJlcGxhY2UoLywvZywgXCIuXCIpICtcbiAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5kYXRhLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJjc3ZcIixcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwicG9kYWlseS5jc3ZcIixcbiAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJEYWlseVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxyXFxuICAgICAgICAgIENTVlxcclxcbiAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGF0ZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkYXRlLXRpbWUtaW5wdXRcIiwgd3JhcDogdHJ1ZSwgY29uZmlnOiBfdm0ub3B0aW9ucyB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZGF0ZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5maWx0ZXIoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsdGVyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgRmlsdGVyXFxyXFxuICAgICAgXCIpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgbXQtNVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLThcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtaW4taGVpZ2h0XCI6IFwiMzAwcHhcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5kYXRhLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiZy1zZWNvbmRhcnkgdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJObyBPcmRlcnMgeWV0IGZvciBcIiArIF92bS5fcyhfdm0uZGF0ZUxhYmVsKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YSwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihfdm0uX3MoaXRlbS50aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5vcmRlcl9pZCkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm51bWJlcl9vZl9wcm9kdWN0cykpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2FkbWluL29yZGVycy9cIiArIGl0ZW0ub3JkZXJfaWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZXRhaWxzXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGl0ZW0udXJsX2Zvcl9wcmludCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFByaW50XFxyXFxuICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRmb290XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLmxlbmd0aCkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNlY29uZGFyeSBkYXRlcGlja2VyYnV0dG9uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgdGl0bGU6IFwiVG9nZ2xlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFyIGZhLWNhbGVuZGFyXCIgfSldXG4gICAgICApXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGltZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KFwiT3JkZXIgI1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LCBbX3ZtLl92KFwiTm8uIFByb2R1Y3RzIFNvbGRcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoXCIsIFtfYyhcImJcIiwgW192bS5fdihcIlRvdGFsIE9yZGVyc1wiKV0pXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7XG59O1xuIiwiLyogZ2xvYmFscyBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXyAqL1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfYW1kX29wdGlvbnNfXztcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZGFpbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMzVjMzJkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RhaWx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGFpbHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlMzVjMzJkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlMzVjMzJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlMzVjMzJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9kYWlseS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGUzNWMzMmQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGUzNWMzMmQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcmVwb3J0cy9wcm9kdWN0LW9yZGVycy9kYWlseS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhaWx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYWlseS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGFpbHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMzVjMzJkJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==