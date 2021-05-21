(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/OrderShow"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["propsorder", "propsproducts", "propsuser", "action"],
  data: function data() {
    return {
      order: {},
      user: {},
      products: [],
      edited: false,
      selectedStatus: 3,
      csrf: document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
      json_fields: {
        "Product Name": "product_name",
        Details: "price_details",
        "": "x",
        Qty: "qty",
        "*": "sign",
        Total: "sub_total"
      }
    };
  },
  methods: {
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    edit: function edit(data) {
      console.log(data);
      data.editing = true;
    },
    saved: function saved(data) {
      data.editing = false;
      this.edited = true;
    },
    getProducts: function getProducts() {
      var products = this.propsproducts;
      products.forEach(function (product) {
        product.editing = false;
      });
      this.products = products;
    },
    selectedStatusChange: function selectedStatusChange() {
      this.edited = true;
    },
    onlyNumber: function onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if (keyCode < 48 || keyCode > 57) {
        //   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    print: function print() {
      var _this = this;

      LoadingOverlay();
      axios({
        method: "post",
        url: "/admin/generate/pdf/order",
        data: {
          order_id: this.order.id
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
        link.setAttribute("download", "orders_no_" + _this.order.id + ".pdf"); //or any other extension

        document.body.appendChild(link);
        link.click();
        LoadingOverlayHide();
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  created: function created() {
    this.order = this.propsorder;
    this.user = this.propsuser;
    this.getProducts();
    this.selectedStatus = this.order.status;
  },
  computed: {
    OrAddress: function OrAddress() {
      if (this.order.is_pickup == "1") {
        var str = this.order.order_address_info.address_pickup;
        str = str.replace(/,/g, ".");
        return "Pickup Address: ".concat(str);
      } else {
        var str = this.order.order_address_info.address;
        str = str.replace(/,/g, ".");
        return "Delivery Address: ".concat(str);
      }
    },
    OrDate: function OrDate() {
      if (this.order.is_pickup == "1") {
        return "Pickup date: ".concat(this.order.order_address_info.pick_up_date);
      } else {
        var str = this.order.atr_expected_delivery_date;
        str = str.replace(/,/g, "");
        return "Expected Delivery Date: ".concat(str);
      }
    },
    productsCSV: function productsCSV() {
      var _this2 = this;

      var newproducts = [];
      var products = this.products;
      products.forEach(function (item) {
        var price_details = "";
        var qty = "";

        if (item.is_subscription == 1) {
          price_details = "$ ".concat(_this2.displayNumberWithComma(item.price), "/").concat(item.product.unit);
          qty = "".concat(item.subscription_weeks, " weeks");
        }

        if (item.is_subscription == 0) {
          price_details = "$ ".concat(_this2.displayNumberWithComma(item.price), "/").concat(item.product.unit);
          qty = "".concat(item.updated_quantity);
        }

        var sub_total = "";

        if (item.is_subscription == 1) {
          sub_total = _this2.displayNumberWithComma(item.subscription_price);
        }

        if (item.is_subscription == 0) {
          sub_total = _this2.displayNumberWithComma(item.price * item.updated_quantity);
        }

        var data = {
          product_name: item.product.name,
          price_details: price_details,
          sub_total: sub_total,
          unit: item.product.unit,
          x: "  X  ",
          sign: "$",
          quantity: item.updated_quantity,
          qty: qty
        };
        newproducts.push(data);
      });
      return newproducts;
    },
    totalAmount: function totalAmount() {
      if (this.products.length == 0) {
        return 0.0;
      } else {
        var total = 0;
        this.products.forEach(function (product) {
          total = total + product.price * product.updated_quantity;
        });
        return total;
      }
    },
    // totalAmount() {
    //   let total = 0;
    //   let products = this.order_products;
    //   products.forEach(cart => {
    //     total = total + cart.price * cart.updated_quantity;
    //   });
    //   return total;
    // },
    getDiscount: function getDiscount() {
      var discount = 0;
      discount = this.totalAmount * (this.order.discount_percentage / 100);
      return discount;
    },
    getCouponDiscount: function getCouponDiscount() {
      return this.order.atr_coupon_discount;
    },
    getTax: function getTax() {
      if (this.products.length == 0) {
        return 0.0;
      } else {
        var tax = 0;
        this.products.forEach(function (product) {
          tax = tax + product.tax_amount * product.updated_quantity;
        });
        return tax;
      }
    },
    OverAllTotal: function OverAllTotal() {
      var total = 0; //total - discount;

      total = this.totalAmount - this.getDiscount;
      total = total - this.getCouponDiscount;
      total = total + parseFloat(this.order.delivery_fee);
      total = total + parseFloat(this.getTax);
      return total;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-edit-bg-color[data-v-24f791c7] {\n  background: #ffe1e6;\n}\n.qty-input[data-v-24f791c7] {\n  border: none;\n  border-bottom: 2px solid black;\n  width: 50px;\n  padding: 0px;\n  margin: 0px;\n}\n.btn-success-2[data-v-24f791c7] {\n  color: gray !important;\n  background-color: rgba(51, 159, 37, 0.3) !important;\n  border-color: rgba(51, 159, 37, 0.5) !important;\n}\n.status-awaiting[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #4dbd74 !important;\n}\n.status-hold[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #ffc107 !important;\n}\n.status-ready[data-v-24f791c7] {\n  line-height: 1.5;\n  color: #17a2b8 !important;\n}", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true& ***!
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
  return _c(
    "form",
    {
      attrs: {
        action: _vm.action,
        method: "post",
        enctype: "multipart/form-data"
      }
    },
    [
      _c("input", {
        attrs: { type: "hidden", name: "_token" },
        domProps: { value: _vm.csrf }
      }),
      _vm._v(" "),
      _c("input", {
        attrs: { type: "hidden", name: "order_id" },
        domProps: { value: _vm.order.id }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "d-flex flex-column min-vh-100" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "h3",
                { staticClass: "text-success" },
                [
                  _c("b", [_vm._v("Order #" + _vm._s(_vm.order.id))]),
                  _vm._v(" "),
                  _c(
                    "download-excel",
                    {
                      staticClass: "btn btn-success float-right mx-1",
                      attrs: {
                        footer: [
                          "Sub-total:    " +
                            _vm.order.atr_subscription_total_amount_f,
                          "Tax: " +
                            _vm.order.billing_type +
                            "(" +
                            _vm.order.billing_type_percentage +
                            ") +    " +
                            _vm.order.atr_billing_amount_f,
                          "Referral discount: -     " +
                            _vm.order.atr_referral_amount_f,
                          "Delivey Fee: -     " + _vm.order.delivery_fee,
                          "Total:     " +
                            _vm.order.atr_subscription_overall_total_amount_f,
                          "-",
                          "Customer: " + _vm.user.full_name,
                          "School/Parish: " + _vm.order.organization.org_name,
                          "-",
                          "" + _vm.OrAddress,
                          "" + _vm.OrDate,
                          "-"
                        ],
                        header: [
                          "Order ID:" + _vm.order.id,
                          "Order Date: " + _vm.order.date_label
                        ],
                        fields: _vm.json_fields,
                        data: _vm.productsCSV,
                        type: "xls",
                        name: "order" + _vm.order.id + ".xls",
                        worksheet: "Order #" + _vm.order.id
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-file-excel" }),
                      _vm._v("\n\t\t\t\t\t\t\t\tXLS\n\t\t\t\t\t\t\t")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "download-excel",
                    {
                      staticClass: "btn btn-success float-right mx-1",
                      attrs: {
                        footer: [
                          "Sub-Total:,,,,, " +
                            _vm.order.atr_subscription_total_amount_f,
                          "Tax: " +
                            _vm.order.billing_type +
                            "(" +
                            _vm.order.billing_type_percentage +
                            "%) + ,,,,, " +
                            _vm.order.atr_billing_amount_f,
                          "Referral Discount: - ,,,,,  " +
                            _vm.order.atr_referral_amount_f,
                          "Delivery Fee: - ,,,,,  " + _vm.order.delivery_fee,
                          "Total: ,,,,," +
                            _vm.order.atr_subscription_overall_total_amount_f,
                          "-",
                          "Customer: " + _vm.user.full_name,
                          "School/Parish: " + _vm.order.organization.org_name,
                          "-",
                          "" + _vm.OrAddress,
                          "" + _vm.OrDate,
                          "-"
                        ],
                        header: [
                          "Order ID:" + _vm.order.id,
                          "Order Date: " + _vm.order.date_label
                        ],
                        fields: _vm.json_fields,
                        data: _vm.productsCSV,
                        type: "csv",
                        name: "order" + _vm.order.id + ".xls",
                        worksheet: "Order #" + _vm.order.id
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-file-csv" }),
                      _vm._v("\n\t\t\t\t\t\t\t\tCSV\n\t\t\t\t\t\t\t")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success float-right mx-1",
                      attrs: { type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.print()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-print" }),
                      _vm._v(" Print\n\t\t\t\t\t\t\t")
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "text-right w-50" }, [
                  _c("h5", [
                    _vm._v("Date of Order: " + _vm._s(_vm.order.date_label))
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c("div", { staticClass: "mr-auto w-50" }, [
                  _c("h3", [
                    _vm._v("\n\t\t\t\t\t\t\t\t\tOrder by:\n\t\t\t\t\t\t\t\t\t"),
                    _c("b", [_vm._v(_vm._s(_vm.user.full_name))]),
                    _vm._v(" "),
                    _vm.order.order_by == 0
                      ? _c("span", [_vm._v("(Retailer)")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.customer_role == 2
                      ? _c("span", [_vm._v("(Sun Club Member)")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user.customer_role == 3
                      ? _c("span", [_vm._v("(Wholesaler)")])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-right w-50" }, [
                  _c("h3", [
                    _vm._v(
                      "\n\t\t\t\t\t\t\t\t\tTotal: $" +
                        _vm._s(
                          _vm.order.atr_subscription_overall_total_amount_f
                        ) +
                        "\n\t\t\t\t\t\t\t\t"
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-50 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.user.email))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "w-50 border-bottom border-secondary pb-0 ml-3"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Address")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(_vm._s(_vm.user.street_address))
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-25 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [_vm._v("Phone")]),
                    _vm._v(" "),
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t[ " +
                          _vm._s(_vm.user.contact_number_type) +
                          " ]\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(_vm.user.contact_number) +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "w-50 ml-3" }, [
                  _c("div", { staticClass: "d-flex justify-content-between" }, [
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [_vm._v("City")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.city))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [_vm._v("State")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.state))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "w-25 border-bottom border-secondary pb-0"
                      },
                      [
                        _c("label", { staticClass: "mb-0" }, [
                          _vm._v("Zip Code")
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.user.zipcode))
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-12 mb-3" }, [
              _c("div", { staticClass: "d-flex" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "mr-auto w-50 border-bottom border-secondary pb-0"
                  },
                  [
                    _c("label", { staticClass: "mb-0" }, [
                      _vm._v("Selected School/Parish:")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(_vm.order.organization.org_name) +
                          "\n\t\t\t\t\t\t\t\t\t"
                      ),
                      _c("br"),
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t\t" +
                          _vm._s(_vm.order.organization.atr_address) +
                          "\n\t\t\t\t\t\t\t\t"
                      )
                    ])
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-5 mb-5" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "ul",
                { staticClass: "list-group rounded-0" },
                _vm._l(_vm.products, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: index,
                      staticClass: "list-group-item d-flex",
                      class: item.editing == true ? "list-edit-bg-color" : ""
                    },
                    [
                      _c("div", [
                        _c("img", {
                          staticStyle: {
                            width: "50px",
                            height: "50px",
                            "object-fit": "cover"
                          },
                          attrs: { src: item.product.image_link }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "w-25 ml-3" }, [
                        _c("p", [
                          _c("b", [_vm._v(_vm._s(item.product.name))]),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          item.is_subscription == 1
                            ? _c("span", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t\t$ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.price)
                                    ) +
                                    " /\n\t\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(item.product.unit) +
                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "mr-3 ml-3" }, [
                                  _vm._v("X")
                                ]),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(item.subscription_weeks) +
                                    " weeks\n\t\t\t\t\t\t\t\t\t\t"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          item.is_subscription == 0
                            ? _c("span", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t\t$ " +
                                    _vm._s(
                                      _vm.displayNumberWithComma(item.price)
                                    ) +
                                    " /\n\t\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(item.product.unit) +
                                    "\n\t\t\t\t\t\t\t\t\t\t\t"
                                ),
                                _c("span", { staticClass: "mr-3 ml-3" }, [
                                  _vm._v("X")
                                ]),
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(item.updated_quantity) +
                                    "\n\t\t\t\t\t\t\t\t\t\t"
                                )
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-auto w-25" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-end align-items-end",
                            staticStyle: { height: "57px" }
                          },
                          [
                            item.is_subscription == 1
                              ? _c("div", { staticClass: "w-50 text-right" }, [
                                  _c("div", [
                                    _c("b", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t$\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              item.subscription_price
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            item.is_subscription == 0
                              ? _c("div", { staticClass: "w-50 text-right" }, [
                                  _c("div", [
                                    _c("b", [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\t\t\t\t$\n\t\t\t\t\t\t\t\t\t\t\t\t\t" +
                                          _vm._s(
                                            _vm.displayNumberWithComma(
                                              item.price * item.updated_quantity
                                            )
                                          ) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t\t"
                                      )
                                    ])
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", { staticClass: "pl-3 text-right" })
                          ]
                        )
                      ])
                    ]
                  )
                }),
                0
              ),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("Total:")]),
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\t$" +
                      _vm._s(_vm.order.atr_subscription_total_amount_f) +
                      "\n\t\t\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v(
                      _vm._s(_vm.order.billing_type) +
                        " (" +
                        _vm._s(_vm.order.billing_type_percentage) +
                        "\n\t\t\t\t\t\t\t\t\t%) +"
                    )
                  ]),
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\t$" +
                      _vm._s(_vm.order.atr_billing_amount_f) +
                      "\n\t\t\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v("Referral Discount- ")
                  ]),
                  _vm._v(
                    "\n\t\t\t\t\t\t\t\t$" +
                      _vm._s(_vm.order.atr_referral_amount_f) +
                      "\n\t\t\t\t\t\t\t"
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h4", [
                  _c("span", { staticClass: "mr-5" }, [
                    _vm._v("Delivery Fee:")
                  ]),
                  _vm._v(
                    "\n                + $" +
                      _vm._s(
                        _vm.displayNumberWithComma(_vm.order.delivery_fee)
                      ) +
                      "\n              "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("div", { staticClass: "text-right w-100" }, [
                _c("h3", [
                  _c("span", { staticClass: "mr-5" }, [_vm._v("Total:")]),
                  _vm._v(" "),
                  _c("b", [
                    _vm._v(
                      "$" +
                        _vm._s(
                          _vm.order.atr_subscription_overall_total_amount_f
                        )
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "card-title mb-0" }, [
      _c("div", { staticClass: "d-flex" }, [
        _c("div", { staticClass: "mr-2" }, [
          _c(
            "a",
            {
              staticClass: "btn btn-success float-right rounded-0 text-light",
              attrs: { href: "/admin/orders" }
            },
            [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
          )
        ]),
        _vm._v(" "),
        _c("div", [_vm._v("Orders")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-auto w-50" }, [
      _c("div", { staticClass: "form-group row" }, [
        _c(
          "label",
          {
            staticClass: "col-sm-2 col-form-label",
            attrs: { for: "inputEmail3" }
          },
          [_vm._v(":")]
        )
      ])
    ])
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

/***/ "./resources/js/backend/components/orders/show.vue":
/*!*********************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show.vue?vue&type=template&id=24f791c7&scoped=true& */ "./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&");
/* harmony import */ var _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "24f791c7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/orders/show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=style&index=0&id=24f791c7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_style_index_0_id_24f791c7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./show.vue?vue&type=template&id=24f791c7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/orders/show.vue?vue&type=template&id=24f791c7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_show_vue_vue_type_template_id_24f791c7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/NmRmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9GaWxlU2F2ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/YTU5MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT9jNGFkIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZT82NDNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvb3JkZXJzL3Nob3cudnVlPzlmNzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9vcmRlcnMvc2hvdy52dWU/YmE2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2IvT3JkZXJTaG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8Zm9ybSA6YWN0aW9uPVwiYWN0aW9uXCIgbWV0aG9kPVwicG9zdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG5cdFx0PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiX3Rva2VuXCIgOnZhbHVlPVwiY3NyZlwiIC8+XG5cdFx0PCEtLSA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJfbWV0aG9kXCIgdmFsdWU9XCJQQVRDSFwiIC8+IC0tPlxuXHRcdDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm9yZGVyX2lkXCIgOnZhbHVlPVwib3JkZXIuaWRcIiAvPlxuXHRcdDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1tZC0xMlwiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzPVwiY2FyZC10aXRsZSBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIi9hZG1pbi9vcmRlcnNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5PcmRlcnM8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cblx0XHRcdFx0XHRcdFx0PGI+T3JkZXIgI3t7IG9yZGVyLmlkIH19PC9iPlxuXHRcdFx0XHRcdFx0XHQ8ZG93bmxvYWQtZXhjZWxcblx0XHRcdFx0XHRcdFx0XHQ6Zm9vdGVyPVwiW1xuXHRcdFx0XHRcdFx0XHRcdFx0YFN1Yi10b3RhbDogICAgJHtvcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgVGF4OiAke29yZGVyLmJpbGxpbmdfdHlwZX0oJHtvcmRlci5iaWxsaW5nX3R5cGVfcGVyY2VudGFnZX0pICsgICAgJHtvcmRlci5hdHJfYmlsbGluZ19hbW91bnRfZn1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YFJlZmVycmFsIGRpc2NvdW50OiAtICAgICAke29yZGVyLmF0cl9yZWZlcnJhbF9hbW91bnRfZn1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YERlbGl2ZXkgRmVlOiAtICAgICAke29yZGVyLmRlbGl2ZXJ5X2ZlZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YFRvdGFsOiAgICAgJHtvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2Z9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGAtYCxcblx0XHRcdFx0XHRcdFx0XHRcdGBDdXN0b21lcjogJHt1c2VyLmZ1bGxfbmFtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YFNjaG9vbC9QYXJpc2g6ICR7b3JkZXIub3JnYW5pemF0aW9uLm9yZ19uYW1lfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgLWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtPckFkZHJlc3N9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGAke09yRGF0ZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YC1gLFxuXHRcdFx0XHRcdFx0XHRcdF1cIlxuXHRcdFx0XHRcdFx0XHRcdDpoZWFkZXI9XCJbXG5cdFx0XHRcdFx0XHRcdFx0XHRgT3JkZXIgSUQ6JHtvcmRlci5pZH1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YE9yZGVyIERhdGU6ICR7b3JkZXIuZGF0ZV9sYWJlbH1gLFxuXHRcdFx0XHRcdFx0XHRcdF1cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG14LTFcIlxuXHRcdFx0XHRcdFx0XHRcdDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG5cdFx0XHRcdFx0XHRcdFx0OmRhdGE9XCJwcm9kdWN0c0NTVlwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInhsc1wiXG5cdFx0XHRcdFx0XHRcdFx0Om5hbWU9XCJgb3JkZXIke29yZGVyLmlkfS54bHNgXCJcblx0XHRcdFx0XHRcdFx0XHQ6d29ya3NoZWV0PVwiYE9yZGVyICMke29yZGVyLmlkfWBcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1leGNlbFwiPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRYTFNcblx0XHRcdFx0XHRcdFx0PC9kb3dubG9hZC1leGNlbD5cblx0XHRcdFx0XHRcdFx0PGRvd25sb2FkLWV4Y2VsXG5cdFx0XHRcdFx0XHRcdFx0OmZvb3Rlcj1cIltcblx0XHRcdFx0XHRcdFx0XHRcdGBTdWItVG90YWw6LCwsLCwgJHtvcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgVGF4OiAke29yZGVyLmJpbGxpbmdfdHlwZX0oJHtvcmRlci5iaWxsaW5nX3R5cGVfcGVyY2VudGFnZX0lKSArICwsLCwsICR7b3JkZXIuYXRyX2JpbGxpbmdfYW1vdW50X2Z9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGBSZWZlcnJhbCBEaXNjb3VudDogLSAsLCwsLCAgJHtvcmRlci5hdHJfcmVmZXJyYWxfYW1vdW50X2Z9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGBEZWxpdmVyeSBGZWU6IC0gLCwsLCwgICR7b3JkZXIuZGVsaXZlcnlfZmVlfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgVG90YWw6ICwsLCwsJHtvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2Z9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGAtYCxcblx0XHRcdFx0XHRcdFx0XHRcdGBDdXN0b21lcjogJHt1c2VyLmZ1bGxfbmFtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YFNjaG9vbC9QYXJpc2g6ICR7b3JkZXIub3JnYW5pemF0aW9uLm9yZ19uYW1lfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgLWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRgJHtPckFkZHJlc3N9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGAke09yRGF0ZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YC1gLFxuXHRcdFx0XHRcdFx0XHRcdF1cIlxuXHRcdFx0XHRcdFx0XHRcdDpoZWFkZXI9XCJbXG5cdFx0XHRcdFx0XHRcdFx0XHRgT3JkZXIgSUQ6JHtvcmRlci5pZH1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0YE9yZGVyIERhdGU6ICR7b3JkZXIuZGF0ZV9sYWJlbH1gLFxuXHRcdFx0XHRcdFx0XHRcdF1cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG14LTFcIlxuXHRcdFx0XHRcdFx0XHRcdDpmaWVsZHM9XCJqc29uX2ZpZWxkc1wiXG5cdFx0XHRcdFx0XHRcdFx0OmRhdGE9XCJwcm9kdWN0c0NTVlwiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImNzdlwiXG5cdFx0XHRcdFx0XHRcdFx0Om5hbWU9XCJgb3JkZXIke29yZGVyLmlkfS54bHNgXCJcblx0XHRcdFx0XHRcdFx0XHQ6d29ya3NoZWV0PVwiYE9yZGVyICMke29yZGVyLmlkfWBcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3M9XCJmYXMgZmEtZmlsZS1jc3ZcIj48L2k+XG5cdFx0XHRcdFx0XHRcdFx0Q1NWXG5cdFx0XHRcdFx0XHRcdDwvZG93bmxvYWQtZXhjZWw+XG5cdFx0XHRcdFx0XHRcdDwhLS0gPGRvd25sb2FkLWV4Y2VsXG5cdFx0XHRcdFx0XHQ6Zm9vdGVyPVwiWyd0b3RhbDogJywgcGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKV1cIlxuXHRcdFx0XHRcdFx0OmhlYWRlcj1cIlxuXHRcdFx0XHRcdFx0XHRgT3JkZXIgJHtvcmRlci5pZH1gXG5cdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXItMlwiXG5cdFx0XHRcdFx0XHQ6ZmllbGRzPVwianNvbl9maWVsZHNcIlxuXHRcdFx0XHRcdFx0OmRhdGE9XCJkYXRhXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJjc3ZcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInNhbGVzZGFpbHkuY3N2XCJcblx0XHRcdFx0XHRcdHdvcmtzaGVldD1cIkRhaWx5XCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1maWxlLWNzdlwiPjwvaT5cblx0XHRcdFx0XHRcdENTVlxuXHRcdFx0XHRcdDwvZG93bmxvYWQtZXhjZWw+IC0tPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0QGNsaWNrPVwicHJpbnQoKVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXgtMVwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzcz1cImZhcyBmYS1wcmludFwiPjwvaT4gUHJpbnRcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2gzPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtci1hdXRvIHctNTBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCByb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3I9XCJpbnB1dEVtYWlsM1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiY29sLXNtLTIgY29sLWZvcm0tbGFiZWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+OjwvbGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInNlbGVjdGVkU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB3LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImV4YW1wbGVGb3JtQ29udHJvbFNlbGVjdDFcIlxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJzZWxlY3RlZFN0YXR1c0NoYW5nZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXdlaWdodDogODAwO1wiXG4gICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwic2VsZWN0ZWRTdGF0dXMgPT0gMiA/ICdzdGF0dXMtYXdhaXRpbmcnIDogJ3N0YXR1cy1ob2xkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5SZXNlcnZlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+UmVhZHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8aDU+U3RhdHVzOiB7e29yZGVyLnN0YXR1c319PC9oNT4gLS0+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTUwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGg1PkRhdGUgb2YgT3JkZXI6IHt7IG9yZGVyLmRhdGVfbGFiZWwgfX08L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibXItYXV0byB3LTUwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0XHRcdFx0T3JkZXIgYnk6XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Yj57eyB1c2VyLmZ1bGxfbmFtZSB9fTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJvcmRlci5vcmRlcl9ieSA9PSAwXCI+KFJldGFpbGVyKTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJ1c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD4oU3VuIENsdWIgTWVtYmVyKTwvc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cInVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PihXaG9sZXNhbGVyKTwvc3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTUwXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzPlxuXHRcdFx0XHRcdFx0XHRcdFx0VG90YWw6ICR7e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2Zcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJtci1hdXRvIHctNTAgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWItMFwiPkVtYWlsPC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDx1PiAtLT5cblx0XHRcdFx0XHRcdFx0XHQ8aDUgY2xhc3M9XCJtYi0wXCI+e3sgdXNlci5lbWFpbCB9fTwvaDU+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8L3U+IC0tPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctNTAgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5BZGRyZXNzPC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1iLTBcIj57eyB1c2VyLnN0cmVldF9hZGRyZXNzIH19PC9oNT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtc20tMTIgbWItM1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJtci1hdXRvIHctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWItMFwiPlBob25lPC9sYWJlbD5cblxuXHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFsge3sgdXNlci5jb250YWN0X251bWJlcl90eXBlIH19IF1cblx0XHRcdFx0XHRcdFx0XHRcdHt7IHVzZXIuY29udGFjdF9udW1iZXIgfX1cblx0XHRcdFx0XHRcdFx0XHQ8L2g1PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctNTAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJ3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwibWItMFwiPkNpdHk8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1iLTBcIj57eyB1c2VyLmNpdHkgfX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5TdGF0ZTwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGg1IGNsYXNzPVwibWItMFwiPnt7IHVzZXIuc3RhdGUgfX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cIm1iLTBcIj5aaXAgQ29kZTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoNSBjbGFzcz1cIm1iLTBcIj57eyB1c2VyLnppcGNvZGUgfX08L2g1PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC1zbS0xMiBtYi0zXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cIm1yLWF1dG8gdy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJtYi0wXCI+U2VsZWN0ZWQgU2Nob29sL1BhcmlzaDo8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPHU+IC0tPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzPVwibWItMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3sgb3JkZXIub3JnYW5pemF0aW9uLm9yZ19uYW1lIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdHt7IG9yZGVyLm9yZ2FuaXphdGlvbi5hdHJfYWRkcmVzcyB9fVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblxuXHRcdFx0XHRcdFx0XHRcdDwhLS0gPC91PiAtLT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgbXQtNSBtYi01XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cCByb3VuZGVkLTBcIj5cblx0XHRcdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRcdFx0di1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHByb2R1Y3RzXCJcblx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiaW5kZXhcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiXG5cdFx0XHRcdFx0XHRcdFx0OmNsYXNzPVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/ICdsaXN0LWVkaXQtYmctY29sb3InIDogJydcblx0XHRcdFx0XHRcdFx0XHRcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0OnNyYz1cIml0ZW0ucHJvZHVjdC5pbWFnZV9saW5rXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogNTBweDtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTI1IG1sLTNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Yj57eyBpdGVtLnByb2R1Y3QubmFtZSB9fTwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAxXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCB7eyBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpIH19IC9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLnByb2R1Y3QudW5pdCB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLnN1YnNjcmlwdGlvbl93ZWVrcyB9fSB3ZWVrc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCB7eyBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpIH19IC9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLnByb2R1Y3QudW5pdCB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibXItMyBtbC0zXCI+WDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7eyBpdGVtLnVwZGF0ZWRfcXVhbnRpdHkgfX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtbC1hdXRvIHctMjVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBhbGlnbi1pdGVtcy1lbmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT1cImhlaWdodDogNTdweFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LWlmPVwiaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJ3LTUwIHRleHQtcmlnaHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGxheU51bWJlcldpdGhDb21tYShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGl0ZW0uc3Vic2NyaXB0aW9uX3ByaWNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9iPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYtaWY9XCJpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInctNTAgdGV4dC1yaWdodFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXRlbS5wcmljZSAqIGl0ZW0udXBkYXRlZF9xdWFudGl0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwhLS0gPHNwYW4gOmNsYXNzPVwiaXRlbS5lZGl0aW5nID09IHRydWUgPyAnJyA6ICdkLW5vbmUnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiJ3Byb2R1Y3RbJytpdGVtLmlkKyddJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXByZXNzPVwib25seU51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJxdHktaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaXRlbS51cGRhdGVkX3F1YW50aXR5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gLS0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicGwtMyB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PCEtLSA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gZmFsc2UgPyAnZC1ibG9jaycgOiAnZC1ub25lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJlZGl0KGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wZW5jaWwtYWx0IG1yLTFcIj48L2k+RWRpdFxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1saWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/ICdkLWJsb2NrJyA6ICdkLW5vbmUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNhdmVkKGl0ZW0pXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1zYXZlIG1yLTFcIj48L2k+U2F2ZVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT4gLS0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0ZXh0LXJpZ2h0IHctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxoND5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm1yLTVcIj5Ub3RhbDo8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0JHt7IG9yZGVyLmF0cl9zdWJzY3JpcHRpb25fdG90YWxfYW1vdW50X2YgfX1cblx0XHRcdFx0XHRcdFx0PC9oND5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibXItNVwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+e3sgb3JkZXIuYmlsbGluZ190eXBlIH19ICh7e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmRlci5iaWxsaW5nX3R5cGVfcGVyY2VudGFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdCUpICs8L3NwYW5cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0JHt7IG9yZGVyLmF0cl9iaWxsaW5nX2Ftb3VudF9mIH19XG5cdFx0XHRcdFx0XHRcdDwvaDQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGg0PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwibXItNVwiPlJlZmVycmFsIERpc2NvdW50LSA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0JHt7IG9yZGVyLmF0cl9yZWZlcnJhbF9hbW91bnRfZiB9fVxuXHRcdFx0XHRcdFx0XHQ8L2g0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAtICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0RGlzY291bnQpfX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtci01XCI+Q291cG9uIERpc2NvdW50Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAtICR7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoZ2V0Q291cG9uRGlzY291bnQpfX1cbiAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgIDwvZGl2PiAtLT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPkRlbGl2ZXJ5IEZlZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgKyAke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKG9yZGVyLmRlbGl2ZXJ5X2ZlZSl9fVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIFx0PCEtLVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcmlnaHQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItNVwiPlRBWDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgKyAke3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKGdldFRheCl9fVxuICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPC9kaXY+IC0tPlxuXG5cblxuXG5cblxuXHRcdFx0XHRcdFx0PGhyIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGV4dC1yaWdodCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDM+XG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWQtMCBtci0yIGJ0blwiXG4gICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJlZGl0ZWQgPT0gdHJ1ZT8gJ2J0bi1zdWNjZXNzJzonYnRuLXN1Y2Nlc3MtMSdcIlxuICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZWRpdGVkID09IGZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+IFNhdmVcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gLS0+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJtci01XCI+VG90YWw6PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+JHt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9yZGVyLmF0cl9zdWJzY3JpcHRpb25fb3ZlcmFsbF90b3RhbF9hbW91bnRfZlxuXHRcdFx0XHRcdFx0XHRcdFx0fX08L2Jcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDwvaDM+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpbGVTYXZlciBmcm9tIFwiZmlsZS1zYXZlclwiO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IFtcInByb3Bzb3JkZXJcIiwgXCJwcm9wc3Byb2R1Y3RzXCIsIFwicHJvcHN1c2VyXCIsIFwiYWN0aW9uXCJdLFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcmRlcjoge30sXG5cdFx0XHRcdHVzZXI6IHt9LFxuXHRcdFx0XHRwcm9kdWN0czogW10sXG5cdFx0XHRcdGVkaXRlZDogZmFsc2UsXG5cdFx0XHRcdHNlbGVjdGVkU3RhdHVzOiAzLFxuXHRcdFx0XHRjc3JmOiBkb2N1bWVudFxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3JmLXRva2VuXCJdJylcblx0XHRcdFx0XHQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSxcblxuXHRcdFx0XHRqc29uX2ZpZWxkczoge1xuXHRcdFx0XHRcdFwiUHJvZHVjdCBOYW1lXCI6IFwicHJvZHVjdF9uYW1lXCIsXG5cdFx0XHRcdFx0RGV0YWlsczogXCJwcmljZV9kZXRhaWxzXCIsXG5cdFx0XHRcdFx0XCJcIjogXCJ4XCIsXG5cdFx0XHRcdFx0UXR5OiBcInF0eVwiLFxuXHRcdFx0XHRcdFwiKlwiOiBcInNpZ25cIixcblx0XHRcdFx0XHRUb3RhbDogXCJzdWJfdG90YWxcIixcblx0XHRcdFx0fSxcblx0XHRcdH07XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XG5cdFx0XHRcdHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcblx0XHRcdFx0dmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XG5cdFx0XHRcdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuXHRcdFx0XHRcdG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiB3aXRoQ29tbWFzO1xuXHRcdFx0fSxcblx0XHRcdGVkaXQoZGF0YSkge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhkYXRhKTtcblx0XHRcdFx0ZGF0YS5lZGl0aW5nID0gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0XHRzYXZlZChkYXRhKSB7XG5cdFx0XHRcdGRhdGEuZWRpdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR0aGlzLmVkaXRlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0Z2V0UHJvZHVjdHMoKSB7XG5cdFx0XHRcdGxldCBwcm9kdWN0cyA9IHRoaXMucHJvcHNwcm9kdWN0cztcblx0XHRcdFx0cHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuXHRcdFx0XHRcdHByb2R1Y3QuZWRpdGluZyA9IGZhbHNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzO1xuXHRcdFx0fSxcblx0XHRcdHNlbGVjdGVkU3RhdHVzQ2hhbmdlKCkge1xuXHRcdFx0XHR0aGlzLmVkaXRlZCA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0b25seU51bWJlcigkZXZlbnQpIHtcblx0XHRcdFx0Ly9jb25zb2xlLmxvZygkZXZlbnQua2V5Q29kZSk7IC8va2V5Q29kZXMgdmFsdWVcblx0XHRcdFx0bGV0IGtleUNvZGUgPSAkZXZlbnQua2V5Q29kZSA/ICRldmVudC5rZXlDb2RlIDogJGV2ZW50LndoaWNoO1xuXHRcdFx0XHRpZiAoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1Nykge1xuXHRcdFx0XHRcdC8vICAgaWYgKChrZXlDb2RlIDwgNDggfHwga2V5Q29kZSA+IDU3KSAmJiBrZXlDb2RlICE9PSA0Nikge1xuXHRcdFx0XHRcdC8vIDQ2IGlzIGRvdFxuXHRcdFx0XHRcdCRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0cHJpbnQoKSB7XG5cdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XG5cdFx0XHRcdGF4aW9zKHtcblx0XHRcdFx0XHRtZXRob2Q6IFwicG9zdFwiLFxuXHRcdFx0XHRcdHVybDogXCIvYWRtaW4vZ2VuZXJhdGUvcGRmL29yZGVyXCIsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0b3JkZXJfaWQ6IHRoaXMub3JkZXIuaWQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRyZXNwb25zZVR5cGU6IFwiYXJyYXlidWZmZXJcIixcblx0XHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcblx0XHRcdFx0XHRcdEFjY2VwdDogXCJhcHBsaWNhdGlvbi9wZGZcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoXG5cdFx0XHRcdFx0XHRcdG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG5cdFx0XHRcdFx0XHRsaW5rLmhyZWYgPSB1cmw7XG5cdFx0XHRcdFx0XHRsaW5rLnNldEF0dHJpYnV0ZShcblx0XHRcdFx0XHRcdFx0XCJkb3dubG9hZFwiLFxuXHRcdFx0XHRcdFx0XHRcIm9yZGVyc19ub19cIiArIHRoaXMub3JkZXIuaWQgKyBcIi5wZGZcIlxuXHRcdFx0XHRcdFx0KTsgLy9vciBhbnkgb3RoZXIgZXh0ZW5zaW9uXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdFx0XHRcdFx0bGluay5jbGljaygpO1xuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR0aGlzLm9yZGVyID0gdGhpcy5wcm9wc29yZGVyO1xuXHRcdFx0dGhpcy51c2VyID0gdGhpcy5wcm9wc3VzZXI7XG5cdFx0XHR0aGlzLmdldFByb2R1Y3RzKCk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkU3RhdHVzID0gdGhpcy5vcmRlci5zdGF0dXM7XG5cdFx0fSxcblx0XHRjb21wdXRlZDoge1xuXHRcdFx0T3JBZGRyZXNzKCkge1xuXHRcdFx0XHRpZiAodGhpcy5vcmRlci5pc19waWNrdXAgPT0gXCIxXCIpIHtcblx0XHRcdFx0XHR2YXIgc3RyID0gdGhpcy5vcmRlci5vcmRlcl9hZGRyZXNzX2luZm8uYWRkcmVzc19waWNrdXA7XG5cdFx0XHRcdFx0c3RyID0gc3RyLnJlcGxhY2UoLywvZywgXCIuXCIpO1xuXHRcdFx0XHRcdHJldHVybiBgUGlja3VwIEFkZHJlc3M6ICR7c3RyfWA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIHN0ciA9IHRoaXMub3JkZXIub3JkZXJfYWRkcmVzc19pbmZvLmFkZHJlc3M7XG5cdFx0XHRcdFx0c3RyID0gc3RyLnJlcGxhY2UoLywvZywgXCIuXCIpO1xuXHRcdFx0XHRcdHJldHVybiBgRGVsaXZlcnkgQWRkcmVzczogJHtzdHJ9YDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdE9yRGF0ZSgpIHtcblx0XHRcdFx0aWYgKHRoaXMub3JkZXIuaXNfcGlja3VwID09IFwiMVwiKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGBQaWNrdXAgZGF0ZTogJHt0aGlzLm9yZGVyLm9yZGVyX2FkZHJlc3NfaW5mby5waWNrX3VwX2RhdGV9YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgc3RyID0gdGhpcy5vcmRlci5hdHJfZXhwZWN0ZWRfZGVsaXZlcnlfZGF0ZTtcblx0XHRcdFx0XHRzdHIgPSBzdHIucmVwbGFjZSgvLC9nLCBcIlwiKTtcblx0XHRcdFx0XHRyZXR1cm4gYEV4cGVjdGVkIERlbGl2ZXJ5IERhdGU6ICR7c3RyfWA7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRwcm9kdWN0c0NTVigpIHtcblx0XHRcdFx0dmFyIG5ld3Byb2R1Y3RzID0gW107XG5cdFx0XHRcdHZhciBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XG5cdFx0XHRcdHByb2R1Y3RzLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdFx0XHR2YXIgcHJpY2VfZGV0YWlscyA9IFwiXCI7XG5cdFx0XHRcdFx0dmFyIHF0eSA9IFwiXCI7XG5cblx0XHRcdFx0XHRpZiAoaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMSkge1xuXHRcdFx0XHRcdFx0cHJpY2VfZGV0YWlscyA9IGAkICR7dGhpcy5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKGl0ZW0ucHJpY2UpfS8ke1xuXHRcdFx0XHRcdFx0XHRpdGVtLnByb2R1Y3QudW5pdFxuXHRcdFx0XHRcdFx0fWA7XG5cdFx0XHRcdFx0XHRxdHkgPSBgJHtpdGVtLnN1YnNjcmlwdGlvbl93ZWVrc30gd2Vla3NgO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwKSB7XG5cdFx0XHRcdFx0XHRwcmljZV9kZXRhaWxzID0gYCQgJHt0aGlzLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSl9LyR7XG5cdFx0XHRcdFx0XHRcdGl0ZW0ucHJvZHVjdC51bml0XG5cdFx0XHRcdFx0XHR9YDtcblx0XHRcdFx0XHRcdHF0eSA9IGAke2l0ZW0udXBkYXRlZF9xdWFudGl0eX1gO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBzdWJfdG90YWwgPSBcIlwiO1xuXG5cdFx0XHRcdFx0aWYgKGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDEpIHtcblx0XHRcdFx0XHRcdHN1Yl90b3RhbCA9IHRoaXMuZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnN1YnNjcmlwdGlvbl9wcmljZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDApIHtcblx0XHRcdFx0XHRcdHN1Yl90b3RhbCA9IHRoaXMuZGlzcGxheU51bWJlcldpdGhDb21tYShcblx0XHRcdFx0XHRcdFx0aXRlbS5wcmljZSAqIGl0ZW0udXBkYXRlZF9xdWFudGl0eVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgZGF0YSA9IHtcblx0XHRcdFx0XHRcdHByb2R1Y3RfbmFtZTogaXRlbS5wcm9kdWN0Lm5hbWUsXG5cdFx0XHRcdFx0XHRwcmljZV9kZXRhaWxzOiBwcmljZV9kZXRhaWxzLFxuXHRcdFx0XHRcdFx0c3ViX3RvdGFsOiBzdWJfdG90YWwsXG5cdFx0XHRcdFx0XHR1bml0OiBpdGVtLnByb2R1Y3QudW5pdCxcblx0XHRcdFx0XHRcdHg6IFwiICBYICBcIixcblx0XHRcdFx0XHRcdHNpZ246IFwiJFwiLFxuXHRcdFx0XHRcdFx0cXVhbnRpdHk6IGl0ZW0udXBkYXRlZF9xdWFudGl0eSxcblx0XHRcdFx0XHRcdHF0eTogcXR5LFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0bmV3cHJvZHVjdHMucHVzaChkYXRhKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJldHVybiBuZXdwcm9kdWN0cztcblx0XHRcdH0sXG5cblx0XHRcdHRvdGFsQW1vdW50KCkge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiAwLjA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IHRvdGFsID0gMDtcblx0XHRcdFx0XHR0aGlzLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcblx0XHRcdFx0XHRcdHRvdGFsID0gdG90YWwgKyBwcm9kdWN0LnByaWNlICogcHJvZHVjdC51cGRhdGVkX3F1YW50aXR5O1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiB0b3RhbDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gdG90YWxBbW91bnQoKSB7XG5cdFx0XHQvLyAgIGxldCB0b3RhbCA9IDA7XG5cdFx0XHQvLyAgIGxldCBwcm9kdWN0cyA9IHRoaXMub3JkZXJfcHJvZHVjdHM7XG5cdFx0XHQvLyAgIHByb2R1Y3RzLmZvckVhY2goY2FydCA9PiB7XG5cdFx0XHQvLyAgICAgdG90YWwgPSB0b3RhbCArIGNhcnQucHJpY2UgKiBjYXJ0LnVwZGF0ZWRfcXVhbnRpdHk7XG5cdFx0XHQvLyAgIH0pO1xuXHRcdFx0Ly8gICByZXR1cm4gdG90YWw7XG5cdFx0XHQvLyB9LFxuXG5cdFx0XHRnZXREaXNjb3VudCgpIHtcblx0XHRcdFx0bGV0IGRpc2NvdW50ID0gMDtcblx0XHRcdFx0ZGlzY291bnQgPSB0aGlzLnRvdGFsQW1vdW50ICogKHRoaXMub3JkZXIuZGlzY291bnRfcGVyY2VudGFnZSAvIDEwMCk7XG5cdFx0XHRcdHJldHVybiBkaXNjb3VudDtcblx0XHRcdH0sXG5cblx0XHRcdGdldENvdXBvbkRpc2NvdW50KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5vcmRlci5hdHJfY291cG9uX2Rpc2NvdW50O1xuXHRcdFx0fSxcblxuXHRcdFx0Z2V0VGF4KCkge1xuXHRcdFx0XHRpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdHJldHVybiAwLjA7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IHRheCA9IDA7XG5cdFx0XHRcdFx0dGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG5cdFx0XHRcdFx0XHR0YXggPSB0YXggKyBwcm9kdWN0LnRheF9hbW91bnQgKiBwcm9kdWN0LnVwZGF0ZWRfcXVhbnRpdHk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIHRheDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0T3ZlckFsbFRvdGFsKCkge1xuXHRcdFx0XHRsZXQgdG90YWwgPSAwO1xuXHRcdFx0XHQvL3RvdGFsIC0gZGlzY291bnQ7XG5cdFx0XHRcdHRvdGFsID0gdGhpcy50b3RhbEFtb3VudCAtIHRoaXMuZ2V0RGlzY291bnQ7XG5cdFx0XHRcdHRvdGFsID0gdG90YWwgLSB0aGlzLmdldENvdXBvbkRpc2NvdW50O1xuXHRcdFx0XHR0b3RhbCA9IHRvdGFsICsgcGFyc2VGbG9hdCh0aGlzLm9yZGVyLmRlbGl2ZXJ5X2ZlZSk7XG5cdFx0XHRcdHRvdGFsID0gdG90YWwgKyBwYXJzZUZsb2F0KHRoaXMuZ2V0VGF4KTtcblx0XHRcdFx0cmV0dXJuIHRvdGFsO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC5saXN0LWVkaXQtYmctY29sb3Ige1xuXHRcdGJhY2tncm91bmQ6ICNmZmUxZTY7XG5cdFx0Ly8gICBvcGFjaXR5OiAwLjU7XG5cdH1cblx0LnF0eS1pbnB1dCB7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcblx0XHR3aWR0aDogNTBweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdFx0bWFyZ2luOiAwcHg7XG5cdH1cblx0LmJ0bi1zdWNjZXNzLTIge1xuXHRcdGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XG5cdFx0Ly8gNTEsIDE1OSwgMzdcblxuXHRcdGJvcmRlci1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjUpICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuc3RhdHVzLWF3YWl0aW5nIHtcblx0XHRsaW5lLWhlaWdodDogMS41O1xuXHRcdGNvbG9yOiAjNGRiZDc0ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuc3RhdHVzLWhvbGQge1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0Y29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcblx0fVxuXG5cdC5zdGF0dXMtcmVhZHkge1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdFx0Y29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcblx0fVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxpc3QtZWRpdC1iZy1jb2xvcltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGJhY2tncm91bmQ6ICNmZmUxZTY7XFxufVxcbi5xdHktaW5wdXRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICB3aWR0aDogNTBweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMltkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1hd2FpdGluZ1tkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzRkYmQ3NCAhaW1wb3J0YW50O1xcbn1cXG4uc3RhdHVzLWhvbGRbZGF0YS12LTI0Zjc5MWM3XSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcXG59XFxuLnN0YXR1cy1yZWFkeVtkYXRhLXYtMjRmNzkxYzddIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBjb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKiBGaWxlU2F2ZXIuanNcbiAqIEEgc2F2ZUFzKCkgRmlsZVNhdmVyIGltcGxlbWVudGF0aW9uLlxuICogMS4zLjJcbiAqIDIwMTYtMDYtMTYgMTg6MjU6MTlcbiAqXG4gKiBCeSBFbGkgR3JleSwgaHR0cDovL2VsaWdyZXkuY29tXG4gKiBMaWNlbnNlOiBNSVRcbiAqICAgU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGlncmV5L0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4gKi9cblxuLypnbG9iYWwgc2VsZiAqL1xuLypqc2xpbnQgYml0d2lzZTogdHJ1ZSwgaW5kZW50OiA0LCBsYXhicmVhazogdHJ1ZSwgbGF4Y29tbWE6IHRydWUsIHNtYXJ0dGFiczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cblxuLyohIEBzb3VyY2UgaHR0cDovL3B1cmwuZWxpZ3JleS5jb20vZ2l0aHViL0ZpbGVTYXZlci5qcy9ibG9iL21hc3Rlci9GaWxlU2F2ZXIuanMgKi9cblxudmFyIHNhdmVBcyA9IHNhdmVBcyB8fCAoZnVuY3Rpb24odmlldykge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0Ly8gSUUgPDEwIGlzIGV4cGxpY2l0bHkgdW5zdXBwb3J0ZWRcblx0aWYgKHR5cGVvZiB2aWV3ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgL01TSUUgWzEtOV1cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyXG5cdFx0ICBkb2MgPSB2aWV3LmRvY3VtZW50XG5cdFx0ICAvLyBvbmx5IGdldCBVUkwgd2hlbiBuZWNlc3NhcnkgaW4gY2FzZSBCbG9iLmpzIGhhc24ndCBvdmVycmlkZGVuIGl0IHlldFxuXHRcdCwgZ2V0X1VSTCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHZpZXcuVVJMIHx8IHZpZXcud2Via2l0VVJMIHx8IHZpZXc7XG5cdFx0fVxuXHRcdCwgc2F2ZV9saW5rID0gZG9jLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIiwgXCJhXCIpXG5cdFx0LCBjYW5fdXNlX3NhdmVfbGluayA9IFwiZG93bmxvYWRcIiBpbiBzYXZlX2xpbmtcblx0XHQsIGNsaWNrID0gZnVuY3Rpb24obm9kZSkge1xuXHRcdFx0dmFyIGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoXCJjbGlja1wiKTtcblx0XHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fVxuXHRcdCwgaXNfc2FmYXJpID0gL2NvbnN0cnVjdG9yL2kudGVzdCh2aWV3LkhUTUxFbGVtZW50KSB8fCB2aWV3LnNhZmFyaVxuXHRcdCwgaXNfY2hyb21lX2lvcyA9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpXG5cdFx0LCB0aHJvd19vdXRzaWRlID0gZnVuY3Rpb24oZXgpIHtcblx0XHRcdCh2aWV3LnNldEltbWVkaWF0ZSB8fCB2aWV3LnNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aHJvdyBleDtcblx0XHRcdH0sIDApO1xuXHRcdH1cblx0XHQsIGZvcmNlX3NhdmVhYmxlX3R5cGUgPSBcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiXG5cdFx0Ly8gdGhlIEJsb2IgQVBJIGlzIGZ1bmRhbWVudGFsbHkgYnJva2VuIGFzIHRoZXJlIGlzIG5vIFwiZG93bmxvYWRmaW5pc2hlZFwiIGV2ZW50IHRvIHN1YnNjcmliZSB0b1xuXHRcdCwgYXJiaXRyYXJ5X3Jldm9rZV90aW1lb3V0ID0gMTAwMCAqIDQwIC8vIGluIG1zXG5cdFx0LCByZXZva2UgPSBmdW5jdGlvbihmaWxlKSB7XG5cdFx0XHR2YXIgcmV2b2tlciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGZpbGUgPT09IFwic3RyaW5nXCIpIHsgLy8gZmlsZSBpcyBhbiBvYmplY3QgVVJMXG5cdFx0XHRcdFx0Z2V0X1VSTCgpLnJldm9rZU9iamVjdFVSTChmaWxlKTtcblx0XHRcdFx0fSBlbHNlIHsgLy8gZmlsZSBpcyBhIEZpbGVcblx0XHRcdFx0XHRmaWxlLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0c2V0VGltZW91dChyZXZva2VyLCBhcmJpdHJhcnlfcmV2b2tlX3RpbWVvdXQpO1xuXHRcdH1cblx0XHQsIGRpc3BhdGNoID0gZnVuY3Rpb24oZmlsZXNhdmVyLCBldmVudF90eXBlcywgZXZlbnQpIHtcblx0XHRcdGV2ZW50X3R5cGVzID0gW10uY29uY2F0KGV2ZW50X3R5cGVzKTtcblx0XHRcdHZhciBpID0gZXZlbnRfdHlwZXMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKGktLSkge1xuXHRcdFx0XHR2YXIgbGlzdGVuZXIgPSBmaWxlc2F2ZXJbXCJvblwiICsgZXZlbnRfdHlwZXNbaV1dO1xuXHRcdFx0XHRpZiAodHlwZW9mIGxpc3RlbmVyID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbChmaWxlc2F2ZXIsIGV2ZW50IHx8IGZpbGVzYXZlcik7XG5cdFx0XHRcdFx0fSBjYXRjaCAoZXgpIHtcblx0XHRcdFx0XHRcdHRocm93X291dHNpZGUoZXgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQsIGF1dG9fYm9tID0gZnVuY3Rpb24oYmxvYikge1xuXHRcdFx0Ly8gcHJlcGVuZCBCT00gZm9yIFVURi04IFhNTCBhbmQgdGV4dC8qIHR5cGVzIChpbmNsdWRpbmcgSFRNTClcblx0XHRcdC8vIG5vdGU6IHlvdXIgYnJvd3NlciB3aWxsIGF1dG9tYXRpY2FsbHkgY29udmVydCBVVEYtMTYgVStGRUZGIHRvIEVGIEJCIEJGXG5cdFx0XHRpZiAoL15cXHMqKD86dGV4dFxcL1xcUyp8YXBwbGljYXRpb25cXC94bWx8XFxTKlxcL1xcUypcXCt4bWwpXFxzKjsuKmNoYXJzZXRcXHMqPVxccyp1dGYtOC9pLnRlc3QoYmxvYi50eXBlKSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IEJsb2IoW1N0cmluZy5mcm9tQ2hhckNvZGUoMHhGRUZGKSwgYmxvYl0sIHt0eXBlOiBibG9iLnR5cGV9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBibG9iO1xuXHRcdH1cblx0XHQsIEZpbGVTYXZlciA9IGZ1bmN0aW9uKGJsb2IsIG5hbWUsIG5vX2F1dG9fYm9tKSB7XG5cdFx0XHRpZiAoIW5vX2F1dG9fYm9tKSB7XG5cdFx0XHRcdGJsb2IgPSBhdXRvX2JvbShibG9iKTtcblx0XHRcdH1cblx0XHRcdC8vIEZpcnN0IHRyeSBhLmRvd25sb2FkLCB0aGVuIHdlYiBmaWxlc3lzdGVtLCB0aGVuIG9iamVjdCBVUkxzXG5cdFx0XHR2YXJcblx0XHRcdFx0ICBmaWxlc2F2ZXIgPSB0aGlzXG5cdFx0XHRcdCwgdHlwZSA9IGJsb2IudHlwZVxuXHRcdFx0XHQsIGZvcmNlID0gdHlwZSA9PT0gZm9yY2Vfc2F2ZWFibGVfdHlwZVxuXHRcdFx0XHQsIG9iamVjdF91cmxcblx0XHRcdFx0LCBkaXNwYXRjaF9hbGwgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkaXNwYXRjaChmaWxlc2F2ZXIsIFwid3JpdGVzdGFydCBwcm9ncmVzcyB3cml0ZSB3cml0ZWVuZFwiLnNwbGl0KFwiIFwiKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gb24gYW55IGZpbGVzeXMgZXJyb3JzIHJldmVydCB0byBzYXZpbmcgd2l0aCBvYmplY3QgVVJMc1xuXHRcdFx0XHQsIGZzX2Vycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKChpc19jaHJvbWVfaW9zIHx8IChmb3JjZSAmJiBpc19zYWZhcmkpKSAmJiB2aWV3LkZpbGVSZWFkZXIpIHtcblx0XHRcdFx0XHRcdC8vIFNhZmFyaSBkb2Vzbid0IGFsbG93IGRvd25sb2FkaW5nIG9mIGJsb2IgdXJsc1xuXHRcdFx0XHRcdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRcdFx0XHRyZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB1cmwgPSBpc19jaHJvbWVfaW9zID8gcmVhZGVyLnJlc3VsdCA6IHJlYWRlci5yZXN1bHQucmVwbGFjZSgvXmRhdGE6W147XSo7LywgJ2RhdGE6YXR0YWNobWVudC9maWxlOycpO1xuXHRcdFx0XHRcdFx0XHR2YXIgcG9wdXAgPSB2aWV3Lm9wZW4odXJsLCAnX2JsYW5rJyk7XG5cdFx0XHRcdFx0XHRcdGlmKCFwb3B1cCkgdmlldy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuXHRcdFx0XHRcdFx0XHR1cmw9dW5kZWZpbmVkOyAvLyByZWxlYXNlIHJlZmVyZW5jZSBiZWZvcmUgZGlzcGF0Y2hpbmdcblx0XHRcdFx0XHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuRE9ORTtcblx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XG5cdFx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5JTklUO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBkb24ndCBjcmVhdGUgbW9yZSBvYmplY3QgVVJMcyB0aGFuIG5lZWRlZFxuXHRcdFx0XHRcdGlmICghb2JqZWN0X3VybCkge1xuXHRcdFx0XHRcdFx0b2JqZWN0X3VybCA9IGdldF9VUkwoKS5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChmb3JjZSkge1xuXHRcdFx0XHRcdFx0dmlldy5sb2NhdGlvbi5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIG9wZW5lZCA9IHZpZXcub3BlbihvYmplY3RfdXJsLCBcIl9ibGFua1wiKTtcblx0XHRcdFx0XHRcdGlmICghb3BlbmVkKSB7XG5cdFx0XHRcdFx0XHRcdC8vIEFwcGxlIGRvZXMgbm90IGFsbG93IHdpbmRvdy5vcGVuLCBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2xpYnJhcnkvc2FmYXJpL2RvY3VtZW50YXRpb24vVG9vbHMvQ29uY2VwdHVhbC9TYWZhcmlFeHRlbnNpb25HdWlkZS9Xb3JraW5nd2l0aFdpbmRvd3NhbmRUYWJzL1dvcmtpbmd3aXRoV2luZG93c2FuZFRhYnMuaHRtbFxuXHRcdFx0XHRcdFx0XHR2aWV3LmxvY2F0aW9uLmhyZWYgPSBvYmplY3RfdXJsO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmaWxlc2F2ZXIucmVhZHlTdGF0ZSA9IGZpbGVzYXZlci5ET05FO1xuXHRcdFx0XHRcdGRpc3BhdGNoX2FsbCgpO1xuXHRcdFx0XHRcdHJldm9rZShvYmplY3RfdXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0O1xuXHRcdFx0ZmlsZXNhdmVyLnJlYWR5U3RhdGUgPSBmaWxlc2F2ZXIuSU5JVDtcblxuXHRcdFx0aWYgKGNhbl91c2Vfc2F2ZV9saW5rKSB7XG5cdFx0XHRcdG9iamVjdF91cmwgPSBnZXRfVVJMKCkuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHNhdmVfbGluay5ocmVmID0gb2JqZWN0X3VybDtcblx0XHRcdFx0XHRzYXZlX2xpbmsuZG93bmxvYWQgPSBuYW1lO1xuXHRcdFx0XHRcdGNsaWNrKHNhdmVfbGluayk7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hfYWxsKCk7XG5cdFx0XHRcdFx0cmV2b2tlKG9iamVjdF91cmwpO1xuXHRcdFx0XHRcdGZpbGVzYXZlci5yZWFkeVN0YXRlID0gZmlsZXNhdmVyLkRPTkU7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZzX2Vycm9yKCk7XG5cdFx0fVxuXHRcdCwgRlNfcHJvdG8gPSBGaWxlU2F2ZXIucHJvdG90eXBlXG5cdFx0LCBzYXZlQXMgPSBmdW5jdGlvbihibG9iLCBuYW1lLCBub19hdXRvX2JvbSkge1xuXHRcdFx0cmV0dXJuIG5ldyBGaWxlU2F2ZXIoYmxvYiwgbmFtZSB8fCBibG9iLm5hbWUgfHwgXCJkb3dubG9hZFwiLCBub19hdXRvX2JvbSk7XG5cdFx0fVxuXHQ7XG5cdC8vIElFIDEwKyAobmF0aXZlIHNhdmVBcylcblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09IFwidW5kZWZpbmVkXCIgJiYgbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24oYmxvYiwgbmFtZSwgbm9fYXV0b19ib20pIHtcblx0XHRcdG5hbWUgPSBuYW1lIHx8IGJsb2IubmFtZSB8fCBcImRvd25sb2FkXCI7XG5cblx0XHRcdGlmICghbm9fYXV0b19ib20pIHtcblx0XHRcdFx0YmxvYiA9IGF1dG9fYm9tKGJsb2IpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKGJsb2IsIG5hbWUpO1xuXHRcdH07XG5cdH1cblxuXHRGU19wcm90by5hYm9ydCA9IGZ1bmN0aW9uKCl7fTtcblx0RlNfcHJvdG8ucmVhZHlTdGF0ZSA9IEZTX3Byb3RvLklOSVQgPSAwO1xuXHRGU19wcm90by5XUklUSU5HID0gMTtcblx0RlNfcHJvdG8uRE9ORSA9IDI7XG5cblx0RlNfcHJvdG8uZXJyb3IgPVxuXHRGU19wcm90by5vbndyaXRlc3RhcnQgPVxuXHRGU19wcm90by5vbnByb2dyZXNzID1cblx0RlNfcHJvdG8ub253cml0ZSA9XG5cdEZTX3Byb3RvLm9uYWJvcnQgPVxuXHRGU19wcm90by5vbmVycm9yID1cblx0RlNfcHJvdG8ub253cml0ZWVuZCA9XG5cdFx0bnVsbDtcblxuXHRyZXR1cm4gc2F2ZUFzO1xufShcblx0ICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZlxuXHR8fCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvd1xuXHR8fCB0aGlzLmNvbnRlbnRcbikpO1xuLy8gYHNlbGZgIGlzIHVuZGVmaW5lZCBpbiBGaXJlZm94IGZvciBBbmRyb2lkIGNvbnRlbnQgc2NyaXB0IGNvbnRleHRcbi8vIHdoaWxlIGB0aGlzYCBpcyBuc0lDb250ZW50RnJhbWVNZXNzYWdlTWFuYWdlclxuLy8gd2l0aCBhbiBhdHRyaWJ1dGUgYGNvbnRlbnRgIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdpbmRvd1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBtb2R1bGUuZXhwb3J0cykge1xuICBtb2R1bGUuZXhwb3J0cy5zYXZlQXMgPSBzYXZlQXM7XG59IGVsc2UgaWYgKCh0eXBlb2YgZGVmaW5lICE9PSBcInVuZGVmaW5lZFwiICYmIGRlZmluZSAhPT0gbnVsbCkgJiYgKGRlZmluZS5hbWQgIT09IG51bGwpKSB7XG4gIGRlZmluZShcIkZpbGVTYXZlci5qc1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gc2F2ZUFzO1xuICB9KTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRmNzkxYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Nob3cudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjRmNzkxYzcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgYWN0aW9uOiBfdm0uYWN0aW9uLFxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiX3Rva2VuXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jc3JmIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBhdHRyczogeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcIm9yZGVyX2lkXCIgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcmRlci5pZCB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCBmbGV4LWNvbHVtbiBtaW4tdmgtMTAwXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiaDNcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoXCJPcmRlciAjXCIgKyBfdm0uX3MoX3ZtLm9yZGVyLmlkKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkb3dubG9hZC1leGNlbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzIGZsb2F0LXJpZ2h0IG14LTFcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3ViLXRvdGFsOiAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLmF0cl9zdWJzY3JpcHRpb25fdG90YWxfYW1vdW50X2YsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGF4OiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLmJpbGxpbmdfdHlwZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5iaWxsaW5nX3R5cGVfcGVyY2VudGFnZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpICsgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfYmlsbGluZ19hbW91bnRfZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZWZlcnJhbCBkaXNjb3VudDogLSAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfcmVmZXJyYWxfYW1vdW50X2YsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVsaXZleSBGZWU6IC0gICAgIFwiICsgX3ZtLm9yZGVyLmRlbGl2ZXJ5X2ZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb3RhbDogICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXN0b21lcjogXCIgKyBfdm0udXNlci5mdWxsX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2Nob29sL1BhcmlzaDogXCIgKyBfdm0ub3JkZXIub3JnYW5pemF0aW9uLm9yZ19uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiArIF92bS5PckFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgKyBfdm0uT3JEYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9yZGVyIElEOlwiICsgX3ZtLm9yZGVyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9yZGVyIERhdGU6IFwiICsgX3ZtLm9yZGVyLmRhdGVfbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IF92bS5qc29uX2ZpZWxkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF92bS5wcm9kdWN0c0NTVixcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwieGxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm9yZGVyXCIgKyBfdm0ub3JkZXIuaWQgKyBcIi54bHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtzaGVldDogXCJPcmRlciAjXCIgKyBfdm0ub3JkZXIuaWRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZmlsZS1leGNlbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFhMU1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRvd25sb2FkLWV4Y2VsXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXgtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdWItVG90YWw6LCwsLCwgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfc3Vic2NyaXB0aW9uX3RvdGFsX2Ftb3VudF9mLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRheDogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5iaWxsaW5nX3R5cGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYmlsbGluZ190eXBlX3BlcmNlbnRhZ2UgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJSkgKyAsLCwsLCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLmF0cl9iaWxsaW5nX2Ftb3VudF9mLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlZmVycmFsIERpc2NvdW50OiAtICwsLCwsICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLmF0cl9yZWZlcnJhbF9hbW91bnRfZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWxpdmVyeSBGZWU6IC0gLCwsLCwgIFwiICsgX3ZtLm9yZGVyLmRlbGl2ZXJ5X2ZlZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb3RhbDogLCwsLCxcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9yZGVyLmF0cl9zdWJzY3JpcHRpb25fb3ZlcmFsbF90b3RhbF9hbW91bnRfZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VzdG9tZXI6IFwiICsgX3ZtLnVzZXIuZnVsbF9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNjaG9vbC9QYXJpc2g6IFwiICsgX3ZtLm9yZGVyLm9yZ2FuaXphdGlvbi5vcmdfbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCIgKyBfdm0uT3JBZGRyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiICsgX3ZtLk9yRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPcmRlciBJRDpcIiArIF92bS5vcmRlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPcmRlciBEYXRlOiBcIiArIF92bS5vcmRlci5kYXRlX2xhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBfdm0uanNvbl9maWVsZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfdm0ucHJvZHVjdHNDU1YsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImNzdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJvcmRlclwiICsgX3ZtLm9yZGVyLmlkICsgXCIueGxzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3Jrc2hlZXQ6IFwiT3JkZXIgI1wiICsgX3ZtLm9yZGVyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWZpbGUtY3N2XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Q1NWXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgbXgtMVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByaW50KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcHJpbnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUHJpbnRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRhdGUgb2YgT3JkZXI6IFwiICsgX3ZtLl9zKF92bS5vcmRlci5kYXRlX2xhYmVsKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTEyIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItYXV0byB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdE9yZGVyIGJ5OlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmZ1bGxfbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5vcmRlcl9ieSA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihSZXRhaWxlcilcIildKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS51c2VyLmN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCIoU3VuIENsdWIgTWVtYmVyKVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSA9PSAzXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihcIihXaG9sZXNhbGVyKVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTUwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFRvdGFsOiAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3JkZXIuYXRyX3N1YnNjcmlwdGlvbl9vdmVyYWxsX3RvdGFsX2Ftb3VudF9mXG4gICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tMTIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcIm1yLWF1dG8gdy01MCBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJFbWFpbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmVtYWlsKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wIG1sLTNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQWRkcmVzc1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0cmVldF9hZGRyZXNzKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTI1IGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW192bS5fdihcIlBob25lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0WyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5jb250YWN0X251bWJlcl90eXBlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiIF1cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udXNlci5jb250YWN0X251bWJlcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbX3ZtLl92KFwiQ2l0eVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLmNpdHkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0yNSBib3JkZXItYm90dG9tIGJvcmRlci1zZWNvbmRhcnkgcGItMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtfdm0uX3YoXCJTdGF0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMjUgYm9yZGVyLWJvdHRvbSBib3JkZXItc2Vjb25kYXJ5IHBiLTBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlppcCBDb2RlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udXNlci56aXBjb2RlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMiBtYi0zXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwibXItYXV0byB3LTUwIGJvcmRlci1ib3R0b20gYm9yZGVyLXNlY29uZGFyeSBwYi0wXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdGVkIFNjaG9vbC9QYXJpc2g6XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLm9yZ2FuaXphdGlvbi5vcmdfbmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLm9yZ2FuaXphdGlvbi5hdHJfYWRkcmVzcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC01IG1iLTVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cCByb3VuZGVkLTBcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHJvZHVjdHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1ncm91cC1pdGVtIGQtZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBpdGVtLmVkaXRpbmcgPT0gdHJ1ZSA/IFwibGlzdC1lZGl0LWJnLWNvbG9yXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvYmplY3QtZml0XCI6IFwiY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0ucHJvZHVjdC5pbWFnZV9saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMjUgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnByb2R1Y3QubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCQgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAvXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ucHJvZHVjdC51bml0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTMgbWwtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJYXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5zdWJzY3JpcHRpb25fd2Vla3MpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHdlZWtzXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmlzX3N1YnNjcmlwdGlvbiA9PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQkIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5wcmljZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgL1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnByb2R1Y3QudW5pdCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci0zIG1sLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiWFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0udXBkYXRlZF9xdWFudGl0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1sLWF1dG8gdy0yNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIGFsaWduLWl0ZW1zLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1N3B4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pc19zdWJzY3JpcHRpb24gPT0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNTAgdGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQkXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN1YnNjcmlwdGlvbl9wcmljZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNfc3Vic2NyaXB0aW9uID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTUwIHRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcmljZSAqIGl0ZW0udXBkYXRlZF9xdWFudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicGwtMyB0ZXh0LXJpZ2h0XCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTVcIiB9LCBbX3ZtLl92KFwiVG90YWw6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmF0cl9zdWJzY3JpcHRpb25fdG90YWxfYW1vdW50X2YpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB3LTEwMFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg0XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmJpbGxpbmdfdHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ub3JkZXIuYmlsbGluZ190eXBlX3BlcmNlbnRhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JSkgK1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5vcmRlci5hdHJfYmlsbGluZ19hbW91bnRfZikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVmZXJyYWwgRGlzY291bnQtIFwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm9yZGVyLmF0cl9yZWZlcnJhbF9hbW91bnRfZikgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0IHctMTAwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRGVsaXZlcnkgRmVlOlwiKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICsgJFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0ub3JkZXIuZGVsaXZlcnlfZmVlKVxuICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImhyXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHQgdy0xMDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtci01XCIgfSwgW192bS5fdihcIlRvdGFsOlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIiRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vcmRlci5hdHJfc3Vic2NyaXB0aW9uX292ZXJhbGxfdG90YWxfYW1vdW50X2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9vcmRlcnNcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jaGV2cm9uLWNpcmNsZS1sZWZ0XCIgfSldXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIk9yZGVyc1wiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItYXV0byB3LTUwXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwIHJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbC1zbS0yIGNvbC1mb3JtLWxhYmVsXCIsXG4gICAgICAgICAgICBhdHRyczogeyBmb3I6IFwiaW5wdXRFbWFpbDNcIiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiOlwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHRocm93IG5ldyBFcnJvcihcImRlZmluZSBjYW5ub3QgYmUgdXNlZCBpbmRpcmVjdFwiKTtcbn07XG4iLCIvKiBnbG9iYWxzIF9fd2VicGFja19hbWRfb3B0aW9uc19fICovXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19hbWRfb3B0aW9uc19fO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGY3OTFjNyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI0Zjc5MWM3XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2RlcmJpZW1pZ3VlbC9wcm9qZWN0cy9maWFjcmUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjRmNzkxYzcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjRmNzkxYzcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Zjc5MWM3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0Zjc5MWM3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL29yZGVycy9zaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaG93LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Zjc5MWM3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNGY3OTFjNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjRmNzkxYzcmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9