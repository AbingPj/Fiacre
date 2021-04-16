(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/b/ProdBunCreate"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["propscategories"],
  data: function data() {
    return {
      product: {
        name: null,
        description: null,
        sku: null,
        unit: "bundle",
        category: null,
        tags: null,
        season: null,
        visible: true,
        minorder: null,
        maxorder: null,
        price: 0,
        member_price: 0,
        wholesale_price: 0,
        bundle_percentage: 0,
        fundraise_percentage: 0,
        selected_products: [],
        image_file: null
      },
      selectedCategory: null,
      subcategories: [],
      selectedSubCategory: null,
      selectedCategoryName2: "",
      url: null,
      selectedProducts: [],
      feedback: "",
      errors_old: {},
      errors: new _errorClass__WEBPACK_IMPORTED_MODULE_0__["default"]() //   file: null,

    };
  },
  created: function created() {// this.products = this.propsproducts;
  },
  methods: {
    onlyForCurrency: function onlyForCurrency($event) {
      // console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which; // only allow number and one dot

      if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.product.fundraise_percentage.indexOf('.') != -1)) {
        // 46 is dot
        $event.preventDefault();
      } // restrict to 2 decimal places


      if (this.product.fundraise_percentage != null && this.product.fundraise_percentage.indexOf(".") > -1 && this.product.fundraise_percentage.split('.')[1].length > 1) {
        $event.preventDefault();
      }
    },
    categorySelectionChange: function categorySelectionChange() {
      var _this = this;

      axios.get("/api/admin/subcategory/" + this.selectedCategory).then(function (res) {
        _this.selectedSubCategory = null;
        _this.subcategories = res.data.sub_categories;
        _this.selectedCategoryName2 = res.data.category.name;
      })["catch"](function (err) {
        console.error(err);
      });
    },
    save: function save() {
      var _this2 = this;

      LoadingOverlay(); //   let url = "admin/products/store/bundle";

      var url = "/api/admin/store/bundle/product";

      if (this.selectedProducts.length < 1) {
        var error = ["Please Select Products to Bundle"];
        this.showErrorMessage(error);
        window.scrollTo(0, 0);
        LoadingOverlayHide();
      } else {
        var myForm = document.getElementById("myForm");
        var formData = new FormData(myForm);
        formData.append("selected_products", JSON.stringify(this.selectedProducts));
        var params = this.product;
        axios.post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(function (res) {
          console.log(res);
          window.location.href = res.data;
        })["catch"](function (err) {
          console.error(err);

          _this2.errors.record(err.response.data.errors);

          _this2.showErrorMessage(_this2.errors.getArrayOfMessages());

          window.scrollTo(0, 0);
          LoadingOverlayHide();
        });
      }
    },
    showErrorMessage: function showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },
    onFileChange: function onFileChange(e) {
      //   console.log(e);
      var file = e.target.files[0];
      this.product.image_file = file;
      this.url = URL.createObjectURL(file);
    },
    preview: function preview() {
      //   console.log(this.product);
      this.$refs.preview_modal.product = this.product;
      this.$refs.preview_modal.preview_image = this.url == null ? "/img/no-product-image.png" : this.url;
      this.$refs.preview_modal.category = this.selectedCategory == null ? "" : this.selectedCategoryName;
      $("#previewModal").modal("show");
    },
    updateVisible: function updateVisible(data) {
      console.log(data);
      data.is_visible = !data.is_visible;
    },
    onlyNumber: function onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      var keyCode = $event.keyCode ? $event.keyCode : $event.which;

      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    selectProductsModal: function selectProductsModal() {
      $("#selectProductsModal").modal("show");
    },
    addSelectedProduct: function addSelectedProduct(data) {
      this.selectedProducts.push(data);
    },
    removeSelectedProduct: function removeSelectedProduct(data) {
      this.$refs.select_products_modal.products.forEach(function (product) {
        if (product.id == data.id) {
          product.selected = false;
          product.qty = 1;
        }
      });
      this.selectedProducts.splice(this.selectedProducts.findIndex(function (i) {
        return i.id === data.id;
      }), 1);
    },
    displayNumberWithComma: function displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  },
  computed: {
    selectedCategoryName: function selectedCategoryName() {
      var _this3 = this;

      var categories = this.propscategories;
      return categories.find(function (x) {
        return x.id === _this3.selectedCategory;
      }).name;
    },
    totalPrice: function totalPrice() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        var total = 0;
        this.selectedProducts.forEach(function (selected) {
          total = total + selected.price * selected.qty;
        });
        return total;
      }
    },
    discount: function discount() {
      var discount = 0;
      discount = this.totalPrice * (this.product.bundle_percentage / 100);
      return discount;
    },
    overAllTotal: function overAllTotal() {
      var total = 0;
      total = this.totalPrice - this.discount;
      return total;
    },
    totalPriceMember: function totalPriceMember() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        var total = 0;
        this.selectedProducts.forEach(function (selected) {
          total = total + selected.member_price * selected.qty;
        });
        return total;
      }
    },
    discountMember: function discountMember() {
      var discount = 0;
      discount = this.totalPriceMember * (this.product.bundle_percentage / 100);
      return discount;
    },
    overAllTotalMember: function overAllTotalMember() {
      var total = 0;
      total = this.totalPriceMember - this.discountMember;
      return total;
    },
    totalPriceWholesaler: function totalPriceWholesaler() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        var total = 0;
        this.selectedProducts.forEach(function (selected) {
          total = total + selected.wholesale_price * selected.qty;
        });
        return total;
      }
    },
    discountWholesaler: function discountWholesaler() {
      var discount = 0;
      discount = this.totalPriceWholesaler * (this.product.bundle_percentage / 100);
      return discount;
    },
    overAllTotalWholesaler: function overAllTotalWholesaler() {
      var total = 0;
      total = this.totalPriceWholesaler - this.discountWholesaler;
      return total;
    }
  } // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-group[data-v-a9bb7850] {\n  margin-bottom: 2rem;\n}\n.input-group-text[data-v-a9bb7850] {\n  background: #d9dfe2;\n}\n.text-success[data-v-a9bb7850] {\n  color: #339f25 !important;\n}\n.btn-success-1[data-v-a9bb7850] {\n  color: #fff !important;\n  background-color: #339f25 !important;\n  border-color: #339f25 !important;\n}\n.btn-upload[data-v-a9bb7850] {\n  margin-right: 10px;\n}\n.btn-upload i[data-v-a9bb7850] {\n  font-size: 50px;\n}\n.btn-success-2[data-v-a9bb7850] {\n  color: gray !important;\n  background-color: rgba(51, 159, 37, 0.3) !important;\n  border-color: rgba(51, 159, 37, 0.5) !important;\n}\n#preview img[data-v-a9bb7850] {\n  width: 110px;\n  height: 90px;\n  object-fit: cover;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "myForm", name: "myForm" },
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.save()
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-column min-vh-100" },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-7 col-sm-12 p-2 m-2 border" },
                    [
                      _c("div", { staticClass: "d-flex" }, [
                        _c("div", [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-success btn-upload",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.$refs.image_file_input.click()
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fas fa-camera-retro" }),
                              _vm._v(" "),
                              _c("br"),
                              _vm._v("Upload Image\n                  ")
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            ref: "image_file_input",
                            staticClass: "d-none",
                            attrs: { type: "file", name: "image_file" },
                            on: { change: _vm.onFileChange }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _c("div", { attrs: { id: "preview" } }, [
                            _vm.url
                              ? _c("img", { attrs: { src: _vm.url } })
                              : _vm._e()
                          ])
                        ])
                      ])
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "name" } }, [
                      _vm._v("Add A Product")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-row" }, [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-info",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.selectProductsModal()
                              }
                            }
                          },
                          [_vm._v("Select Product")]
                        )
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-3" }, [
                  _c("label", { attrs: { for: "season" } }, [
                    _vm._v("Included Products:")
                  ]),
                  _vm._v(" "),
                  _c("table", { staticClass: "table table-bordered" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.selectedProducts, function(item, index) {
                        return _c("tr", { key: index }, [
                          _c("td", [_vm._v(_vm._s(item.name))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("img", {
                              staticStyle: {
                                width: "50px",
                                height: "50px",
                                "object-fit": "cover"
                              },
                              attrs: { src: item.image_link }
                            })
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("div", { staticClass: "input-group" }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: item.qty,
                                    expression: "item.qty"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: { value: item.qty },
                                on: {
                                  keypress: _vm.onlyNumber,
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(item, "qty", $event.target.value)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("div", { staticClass: "input-group-append" }, [
                                _c(
                                  "span",
                                  { staticClass: "input-group-text" },
                                  [_vm._v(_vm._s(item.unit))]
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "font-italic",
                                staticStyle: { "font-size": "10px" }
                              },
                              [
                                _vm._v(
                                  "( " +
                                    _vm._s(item.qty) +
                                    " x " +
                                    _vm._s(item.price) +
                                    " )"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.displayNumberWithComma(
                                    item.price * item.qty
                                  )
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "font-italic",
                                staticStyle: { "font-size": "10px" }
                              },
                              [
                                _vm._v(
                                  "( " +
                                    _vm._s(item.qty) +
                                    " x " +
                                    _vm._s(item.member_price) +
                                    " )"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.displayNumberWithComma(
                                    item.member_price * item.qty
                                  )
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass: "font-italic",
                                staticStyle: { "font-size": "10px" }
                              },
                              [
                                _vm._v(
                                  "( " +
                                    _vm._s(item.qty) +
                                    " x " +
                                    _vm._s(item.wholesale_price) +
                                    " )"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.displayNumberWithComma(
                                    item.wholesale_price * item.qty
                                  )
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("th", { staticStyle: { width: "50px" } }, [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.removeSelectedProduct(item)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "far fa-times-circle" })]
                            )
                          ])
                        ])
                      }),
                      0
                    ),
                    _vm._v(" "),
                    _c("tfoot", [
                      _c("tr", [
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("Total")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(_vm.displayNumberWithComma(_vm.totalPrice))
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm.displayNumberWithComma(_vm.totalPriceMember)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm.displayNumberWithComma(
                                _vm.totalPriceWholesaler
                              )
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("th")
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", { attrs: { colspan: "3" } }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c(
                              "div",
                              {
                                staticClass: "input-group-prepend",
                                staticStyle: { padding: "5px" }
                              },
                              [_vm._v("Discount Percentage:")]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.product.bundle_percentage,
                                  expression: "product.bundle_percentage"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                name: "discount_percentage",
                                type: "text",
                                "aria-label": "Amount (to the nearest dollar)"
                              },
                              domProps: {
                                value: _vm.product.bundle_percentage
                              },
                              on: {
                                keypress: _vm.onlyNumber,
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.product,
                                    "bundle_percentage",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(2)
                          ])
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(_vm.displayNumberWithComma(_vm.discount))
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm.displayNumberWithComma(_vm.discountMember)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _vm._v(
                            _vm._s(
                              _vm.displayNumberWithComma(_vm.discountWholesaler)
                            )
                          )
                        ]),
                        _vm._v(" "),
                        _c("th")
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", { attrs: { colspan: "3" } }, [
                          _vm._v("Bundle Price")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _vm._m(3),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control text-right",
                              attrs: { type: "text", readonly: "" },
                              domProps: {
                                value: _vm.displayNumberWithComma(
                                  _vm.overAllTotal
                                )
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _vm._m(4),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control text-right",
                              attrs: { type: "text", readonly: "" },
                              domProps: {
                                value: _vm.displayNumberWithComma(
                                  _vm.overAllTotalMember
                                )
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-right" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "form-control text-right",
                              attrs: { type: "text", readonly: "" },
                              domProps: {
                                value: _vm.displayNumberWithComma(
                                  _vm.overAllTotalWholesaler
                                )
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("label", { staticClass: "text-danger" }, [
                    _vm._v(
                      "Note: The Prices of Bundle Products are base on the selected products so you must to create product first. If a selected product price is updated, the prices of bundle are also updated. But oredered bundle products prices cant be change anymore."
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row mt-4" }, [
                  _c("div", { staticClass: "col-md-7" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.name,
                            expression: "product.name"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "name",
                          name: "name",
                          type: "text",
                          placeholder: "Product Bundle Name"
                        },
                        domProps: { value: _vm.product.name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.product, "name", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "description" } }, [
                        _vm._v("Description")
                      ]),
                      _vm._v(" "),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.description,
                            expression: "product.description"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "description",
                          name: "description",
                          rows: "6"
                        },
                        domProps: { value: _vm.product.description },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.product,
                              "description",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "sku" } }, [_vm._v("SKU")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.sku,
                            expression: "product.sku"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "sku",
                          name: "sku",
                          type: "text",
                          placeholder: 'ex. "PA0001", "1A0002"'
                        },
                        domProps: { value: _vm.product.sku },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.product, "sku", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "unit" } }, [_vm._v("Unit")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.unit,
                            expression: "product.unit"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "unit",
                          name: "unit",
                          type: "text",
                          placeholder:
                            'ex. "Pack", "Kilo", "Pc", "12oz", "Doz" ...'
                        },
                        domProps: { value: _vm.product.unit },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.product, "unit", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "category" } }, [
                        _vm._v("Category")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectedCategory,
                              expression: "selectedCategory"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "category", name: "category" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.selectedCategory = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              function($event) {
                                return _vm.categorySelectionChange()
                              }
                            ]
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { value: "null", disabled: "" } },
                            [_vm._v("Select Category")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.propscategories, function(item, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: item.id } },
                              [_vm._v(_vm._s(item.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "category" } }, [
                        _vm._v(
                          "Sub Categories of " +
                            _vm._s(_vm.selectedCategoryName2)
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.selectedSubCategory,
                              expression: "selectedSubCategory"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "sub_category", name: "sub_category" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.selectedSubCategory = $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            }
                          }
                        },
                        [
                          _c(
                            "option",
                            { attrs: { value: "null", disabled: "" } },
                            [_vm._v("Select Sub Category")]
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.subcategories, function(item, index) {
                            return _c(
                              "option",
                              { key: index, domProps: { value: item.id } },
                              [_vm._v(_vm._s(item.name))]
                            )
                          })
                        ],
                        2
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "tags" } }, [_vm._v("Tags")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.tags,
                            expression: "product.tags"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "tags",
                          name: "tags",
                          type: "text",
                          placeholder:
                            'ex. "Fresh", "Red", "Green", "Citrus", ... ',
                          disabled: ""
                        },
                        domProps: { value: _vm.product.tags },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.product, "tags", $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "season" } }, [
                        _vm._v("Season")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.season,
                            expression: "product.season"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "season",
                          name: "season",
                          type: "text",
                          placeholder: 'ex. "Winter", "Summer", "Spring", ...'
                        },
                        domProps: { value: _vm.product.season },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.product, "season", $event.target.value)
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "price" } }, [
                        _vm._v("Fundraise Percentage")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group rounded-0" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product.fundraise_percentage,
                              expression: "product.fundraise_percentage"
                            }
                          ],
                          staticClass: "form-control rounded-0",
                          attrs: {
                            id: "fundraise_percentage",
                            name: "fundraise_percentage",
                            type: "text",
                            placeholder: ""
                          },
                          domProps: { value: _vm.product.fundraise_percentage },
                          on: {
                            keypress: _vm.onlyForCurrency,
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product,
                                "fundraise_percentage",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(6)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "minorder" } }, [
                        _vm._v("Minimum Order")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.minorder,
                            expression: "product.minorder"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "minorder",
                          name: "minorder",
                          type: "text",
                          placeholder: 'ex. "1"',
                          disabled: ""
                        },
                        domProps: { value: _vm.product.minorder },
                        on: {
                          keypress: _vm.onlyNumber,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.product,
                              "minorder",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "maxorder" } }, [
                        _vm._v("Maximum Order")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.product.maxorder,
                            expression: "product.maxorder"
                          }
                        ],
                        staticClass: "form-control rounded-0",
                        attrs: {
                          id: "maxorder",
                          name: "maxorder",
                          type: "text",
                          placeholder: 'ex. "100"',
                          disabled: ""
                        },
                        domProps: { value: _vm.product.maxorder },
                        on: {
                          keypress: _vm.onlyNumber,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.product,
                              "maxorder",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "maxorder" } }, [
                        _vm._v("Visibility")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "custom-control custom-switch" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product.visible,
                                expression: "product.visible"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              checked: "",
                              type: "checkbox",
                              id: "visible",
                              name: "visible"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.product.visible)
                                ? _vm._i(_vm.product.visible, null) > -1
                                : _vm.product.visible
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.product.visible,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.product,
                                        "visible",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.product,
                                        "visible",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.product, "visible", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "visible" }
                            },
                            [_vm._v("Show/Hide")]
                          )
                        ]
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "a",
                      {
                        staticClass: "mr-2 btn btn-success-1 rounded-0",
                        on: {
                          click: function($event) {
                            return _vm.preview()
                          }
                        }
                      },
                      [
                        _c("i", { staticClass: "far fa-eye" }),
                        _vm._v(" Preview\n              ")
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(7)
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("admin-products-preview-modal", { ref: "preview_modal" }),
          _vm._v(" "),
          _c("admin-select-products-modal", {
            ref: "select_products_modal",
            attrs: { selected_products: _vm.selectedProducts }
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-6" }, [
        _c("h2", { staticClass: "card-title mb-0" }, [
          _c("div", { staticClass: "d-flex" }, [
            _c("div", { staticClass: "mr-2" }, [
              _c(
                "a",
                {
                  staticClass:
                    "btn btn-success float-right rounded-0 text-light",
                  attrs: { href: "/admin/products" }
                },
                [_c("i", { staticClass: "fas fa-chevron-circle-left" })]
              )
            ]),
            _vm._v(" "),
            _c("div", [_vm._v("Products")])
          ])
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("h3", { staticClass: "text-success" }, [
          _c("b", [_vm._v("ADD NEW BUNDLE PRODUCT")])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Product")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "75px" } }, [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "120px" } }, [_vm._v("Quantity")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [
          _vm._v("Regular Price")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [_vm._v("Member Price")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "170px" } }, [
          _vm._v("Wholesale Price")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "50px" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("%")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-prepend" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("$")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "input-group-text" }, [_vm._v("%")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "mr-2 btn btn-success-2 rounded-0" }, [
      _c("i", { staticClass: "fas fa-save" }),
      _vm._v(" Save\n              ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/backend/components/products/create-bundle.vue":
/*!********************************************************************!*\
  !*** ./resources/js/backend/components/products/create-bundle.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true& */ "./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true&");
/* harmony import */ var _create_bundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-bundle.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& */ "./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_bundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a9bb7850",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/products/create-bundle.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-bundle.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=style&index=0&id=a9bb7850&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_style_index_0_id_a9bb7850_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/products/create-bundle.vue?vue&type=template&id=a9bb7850&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_bundle_vue_vue_type_template_id_a9bb7850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9jcmVhdGUtYnVuZGxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2NyZWF0ZS1idW5kbGUudnVlPzE0YWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9jcmVhdGUtYnVuZGxlLnZ1ZT9mNTJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvY3JlYXRlLWJ1bmRsZS52dWU/NzIzOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2NyZWF0ZS1idW5kbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMvY3JlYXRlLWJ1bmRsZS52dWU/NDUxMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL3Byb2R1Y3RzL2NyZWF0ZS1idW5kbGUudnVlPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9jcmVhdGUtYnVuZGxlLnZ1ZT9jODcxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2Vycm9yQ2xhc3MuanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsInN0ciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJrZXkiLCJnZXQiLCJhcnIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGFBQU9MLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtMLE1BQWpCLEVBQXlCTSxNQUF6QixHQUFrQyxDQUF6QztBQUNIIiwiZmlsZSI6ImpzL2IvUHJvZEJ1bkNyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8Zm9ybSBpZD1cIm15Rm9ybVwiIG5hbWU9XCJteUZvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJzYXZlKClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cImNhcmQtdGl0bGUgbWItMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9hZG1pbi9wcm9kdWN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZmxvYXQtcmlnaHQgcm91bmRlZC0wIHRleHQtbGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1jaXJjbGUtbGVmdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlByb2R1Y3RzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICA8Yj5BREQgTkVXIEJVTkRMRSBQUk9EVUNUPC9iPlxyXG4gICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgPGgyPjwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTcgY29sLXNtLTEyIHAtMiBtLTIgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBidG4tdXBsb2FkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmltYWdlX2ZpbGVfaW5wdXQuY2xpY2soKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FtZXJhLXJldHJvXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyIC8+VXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZWY9XCJpbWFnZV9maWxlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZV9maWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJkLW5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiaW1hZ2VfZmlsZVwiIEBjaGFuZ2U9XCJvbkZpbGVDaGFuZ2UoKVwiIC8+IC0tPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJldmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwidXJsXCIgOnNyYz1cInVybFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+QWRkIEEgUHJvZHVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1yb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0UHJvZHVjdHNNb2RhbCgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvXCJcclxuICAgICAgICAgICAgICAgICAgICA+U2VsZWN0IFByb2R1Y3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiU0tVXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBsdXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNlYXNvblwiPkluY2x1ZGVkIFByb2R1Y3RzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDo3NXB4O1wiPkltYWdlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoxMjBweDtcIj5RdWFudGl0eTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6MTcwcHg7XCI+UmVndWxhciBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6MTcwcHg7XCI+TWVtYmVyIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9XCJ3aWR0aDoxNzBweDtcIj5XaG9sZXNhbGUgUHJpY2U8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT1cIndpZHRoOjUwcHg7XCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gc2VsZWN0ZWRQcm9kdWN0c1wiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0ubmFtZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLmltYWdlX2xpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cIndpZHRoOiA1MHB4OyBoZWlnaHQ6IDUwcHg7IG9iamVjdC1maXQ6IGNvdmVyO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiaXRlbS5xdHlcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIEBrZXlwcmVzcz1cIm9ubHlOdW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+e3tpdGVtLnVuaXR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1pdGFsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZToxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+KCB7e2l0ZW0ucXR5fX0geCB7e2l0ZW0ucHJpY2V9fSApPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLnByaWNlICogaXRlbS5xdHkpfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtaXRhbGljXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6MTBweDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPigge3tpdGVtLnF0eX19IHgge3tpdGVtLm1lbWJlcl9wcmljZX19ICk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgID57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEoaXRlbS5tZW1iZXJfcHJpY2UgKiBpdGVtLnF0eSl9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1pdGFsaWNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZToxMHB4O1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+KCB7e2l0ZW0ucXR5fX0geCB7e2l0ZW0ud2hvbGVzYWxlX3ByaWNlfX0gKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShpdGVtLndob2xlc2FsZV9wcmljZSAqIGl0ZW0ucXR5KX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6NTBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlU2VsZWN0ZWRQcm9kdWN0KGl0ZW0pXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXIgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAgPHRmb290PlxyXG4gICAgICAgICAgICAgICAgICA8IS0tIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCI3XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWluZm9cIj5TZWxlY3QgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+VG90YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj57e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEodG90YWxQcmljZSl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYSh0b3RhbFByaWNlTWVtYmVyKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+e3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHRvdGFsUHJpY2VXaG9sZXNhbGVyKX19PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSA8Yi1pbnB1dC1ncm91cCBwcmVwZW5kPVwiRGlzY291bnQgUGVyY2VudGFnZTpcIiBhcHBlbmQ9XCIlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWlucHV0PjwvYi1mb3JtLWlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9iLWlucHV0LWdyb3VwPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgc3R5bGU9XCJwYWRkaW5nOjVweDtcIj5EaXNjb3VudCBQZXJjZW50YWdlOjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGlzY291bnRfcGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2R1Y3QuYnVuZGxlX3BlcmNlbnRhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFtb3VudCAodG8gdGhlIG5lYXJlc3QgZG9sbGFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQGtleXByZXNzPVwib25seU51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShkaXNjb3VudCl9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShkaXNjb3VudE1lbWJlcil9fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPnt7ZGlzcGxheU51bWJlcldpdGhDb21tYShkaXNjb3VudFdob2xlc2FsZXIpfX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+QnVuZGxlIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRpc3BsYXlOdW1iZXJXaXRoQ29tbWEob3ZlckFsbFRvdGFsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEob3ZlckFsbFRvdGFsKX19IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkaXNwbGF5TnVtYmVyV2l0aENvbW1hKG92ZXJBbGxUb3RhbE1lbWJlcilcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0ge3tkaXNwbGF5TnVtYmVyV2l0aENvbW1hKG92ZXJBbGxUb3RhbE1lbWJlcil9fSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGlzcGxheU51bWJlcldpdGhDb21tYShvdmVyQWxsVG90YWxXaG9sZXNhbGVyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSB7e2Rpc3BsYXlOdW1iZXJXaXRoQ29tbWEob3ZlckFsbFRvdGFsV2hvbGVzYWxlcil9fSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Zm9vdD5cclxuICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiXHJcbiAgICAgICAgICAgICAgPk5vdGU6IFRoZSBQcmljZXMgb2YgQnVuZGxlIFByb2R1Y3RzIGFyZSBiYXNlIG9uIHRoZSBzZWxlY3RlZCBwcm9kdWN0cyBzbyB5b3UgbXVzdCB0byBjcmVhdGUgcHJvZHVjdCBmaXJzdC4gSWYgYSBzZWxlY3RlZCBwcm9kdWN0IHByaWNlIGlzIHVwZGF0ZWQsIHRoZSBwcmljZXMgb2YgYnVuZGxlIGFyZSBhbHNvIHVwZGF0ZWQuIEJ1dCBvcmVkZXJlZCBidW5kbGUgcHJvZHVjdHMgcHJpY2VzIGNhbnQgYmUgY2hhbmdlIGFueW1vcmUuPC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG10LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvZHVjdCBCdW5kbGUgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LmRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgcm93cz1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJza3VcIj5TS1U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5za3VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2t1XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZXguIFwiUEEwMDAxXCIsIFwiMUEwMDAyXCInXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1bml0XCI+VW5pdDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LnVuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidW5pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVuaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdleC4gXCJQYWNrXCIsIFwiS2lsb1wiLCBcIlBjXCIsIFwiMTJvelwiLCBcIkRvelwiIC4uLidcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjYXRlZ29yeVwiPkNhdGVnb3J5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiY2F0ZWdvcnlTZWxlY3Rpb25DaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibnVsbFwiIGRpc2FibGVkPlNlbGVjdCBDYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBwcm9wc2NhdGVnb3JpZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcclxuICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cIml0ZW0uaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgID57e2l0ZW0ubmFtZX19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNhdGVnb3J5XCI+U3ViIENhdGVnb3JpZXMgb2Yge3tzZWxlY3RlZENhdGVnb3J5TmFtZTJ9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRTdWJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3ViX2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3ViX2NhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJudWxsXCIgZGlzYWJsZWQ+U2VsZWN0IFN1YiBDYXRlZ29yeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdWJjYXRlZ29yaWVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJpdGVtLmlkXCJcclxuICAgICAgICAgICAgICAgICAgICA+e3tpdGVtLm5hbWV9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0YWdzXCI+VGFnczwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LnRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdleC4gXCJGcmVzaFwiLCBcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQ2l0cnVzXCIsIC4uLiAnXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNlYXNvblwiPlNlYXNvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJwcm9kdWN0LnNlYXNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdleC4gXCJXaW50ZXJcIiwgXCJTdW1tZXJcIiwgXCJTcHJpbmdcIiwgLi4uJ1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpY2VcIj5GdW5kcmFpc2UgUGVyY2VudGFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgcm91bmRlZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHQgcm91bmRlZC0wXCI+JDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5mdW5kcmFpc2VfcGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmdW5kcmFpc2VfcGVyY2VudGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZ1bmRyYWlzZV9wZXJjZW50YWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nJ1xyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlwcmVzcz1cIm9ubHlGb3JDdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPiU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtaW5vcmRlclwiPk1pbmltdW0gT3JkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5taW5vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJtaW5vcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1pbm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZXguIFwiMVwiJ1xyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlwcmVzcz1cIm9ubHlOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXhvcmRlclwiPk1heGltdW0gT3JkZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicHJvZHVjdC5tYXhvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJtYXhvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1heG9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCByb3VuZGVkLTBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZXguIFwiMTAwXCInXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleXByZXNzPVwib25seU51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXhvcmRlclwiPlZpc2liaWxpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ2aXNpYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb2R1Y3QudmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwidmlzaWJsZVwiPlNob3cvSGlkZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm1yLTIgYnRuIGJ0bi1zdWNjZXNzLTEgcm91bmRlZC0wXCIgQGNsaWNrPVwicHJldmlldygpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFyIGZhLWV5ZVwiPjwvaT4gUHJldmlld1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1yLTIgYnRuIGJ0bi1zdWNjZXNzLTIgcm91bmRlZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNhdmVcIj48L2k+IFNhdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzLTIgcm91bmRlZC0wXCI+QXJjaGFpdmU8L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YWRtaW4tcHJvZHVjdHMtcHJldmlldy1tb2RhbCByZWY9XCJwcmV2aWV3X21vZGFsXCI+PC9hZG1pbi1wcm9kdWN0cy1wcmV2aWV3LW1vZGFsPlxyXG4gICAgICA8YWRtaW4tc2VsZWN0LXByb2R1Y3RzLW1vZGFsXHJcbiAgICAgICAgcmVmPVwic2VsZWN0X3Byb2R1Y3RzX21vZGFsXCJcclxuICAgICAgICA6c2VsZWN0ZWRfcHJvZHVjdHM9XCJzZWxlY3RlZFByb2R1Y3RzXCJcclxuICAgICAgPjwvYWRtaW4tc2VsZWN0LXByb2R1Y3RzLW1vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9mb3JtPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRXJyb3JzIGZyb20gXCIuLi8uLi9lcnJvckNsYXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgcHJvcHM6IFtcInByb3BzY2F0ZWdvcmllc1wiXSxcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvZHVjdDoge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICAgICAgc2t1OiBudWxsLFxyXG4gICAgICAgIHVuaXQ6IFwiYnVuZGxlXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgICAgdGFnczogbnVsbCxcclxuICAgICAgICBzZWFzb246IG51bGwsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICBtaW5vcmRlcjogbnVsbCxcclxuICAgICAgICBtYXhvcmRlcjogbnVsbCxcclxuICAgICAgICBwcmljZTogMCxcclxuICAgICAgICBtZW1iZXJfcHJpY2U6IDAsXHJcbiAgICAgICAgd2hvbGVzYWxlX3ByaWNlOiAwLFxyXG4gICAgICAgIGJ1bmRsZV9wZXJjZW50YWdlOiAwLFxyXG4gICAgICAgIGZ1bmRyYWlzZV9wZXJjZW50YWdlOiAwLFxyXG4gICAgICAgIHNlbGVjdGVkX3Byb2R1Y3RzOiBbXSxcclxuICAgICAgICBpbWFnZV9maWxlOiBudWxsLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogbnVsbCxcclxuICAgICAgc3ViY2F0ZWdvcmllczogW10sXHJcbiAgICAgIHNlbGVjdGVkU3ViQ2F0ZWdvcnk6IG51bGwsXHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlOYW1lMjogXCJcIixcclxuICAgICAgdXJsOiBudWxsLFxyXG4gICAgICBzZWxlY3RlZFByb2R1Y3RzOiBbXSxcclxuICAgICAgZmVlZGJhY2s6IFwiXCIsXHJcbiAgICAgIGVycm9yc19vbGQ6IHt9LFxyXG4gICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcclxuICAgICAgLy8gICBmaWxlOiBudWxsLFxyXG4gICAgfTtcclxuICB9LFxyXG5cclxuICBjcmVhdGVkKCkge1xyXG4gICAgLy8gdGhpcy5wcm9kdWN0cyA9IHRoaXMucHJvcHNwcm9kdWN0cztcclxuICB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvbmx5Rm9yQ3VycmVuY3kgKCRldmVudCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQua2V5Q29kZSk7IC8va2V5Q29kZXMgdmFsdWVcclxuICAgICAgICAgICAgbGV0IGtleUNvZGUgPSAoJGV2ZW50LmtleUNvZGUgPyAkZXZlbnQua2V5Q29kZSA6ICRldmVudC53aGljaCk7XHJcbiAgICAgICAgICAgIC8vIG9ubHkgYWxsb3cgbnVtYmVyIGFuZCBvbmUgZG90XHJcbiAgICAgICAgICAgIGlmICgoa2V5Q29kZSA8IDQ4IHx8IGtleUNvZGUgPiA1NykgJiYgKGtleUNvZGUgIT09IDQ2IHx8IHRoaXMucHJvZHVjdC5mdW5kcmFpc2VfcGVyY2VudGFnZS5pbmRleE9mKCcuJykgIT0gLTEpKSB7IC8vIDQ2IGlzIGRvdFxyXG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyByZXN0cmljdCB0byAyIGRlY2ltYWwgcGxhY2VzXHJcbiAgICAgICAgICAgIGlmKHRoaXMucHJvZHVjdC5mdW5kcmFpc2VfcGVyY2VudGFnZSE9bnVsbCAmJiB0aGlzLnByb2R1Y3QuZnVuZHJhaXNlX3BlcmNlbnRhZ2UuaW5kZXhPZihcIi5cIik+LTEgJiYgKHRoaXMucHJvZHVjdC5mdW5kcmFpc2VfcGVyY2VudGFnZS5zcGxpdCgnLicpWzFdLmxlbmd0aCA+IDEpKXtcclxuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgfSxcclxuICAgIGNhdGVnb3J5U2VsZWN0aW9uQ2hhbmdlKCkge1xyXG4gICAgICBheGlvc1xyXG4gICAgICAgIC5nZXQoXCIvYXBpL2FkbWluL3N1YmNhdGVnb3J5L1wiICsgdGhpcy5zZWxlY3RlZENhdGVnb3J5KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTdWJDYXRlZ29yeSA9IG51bGw7XHJcbiAgICAgICAgICB0aGlzLnN1YmNhdGVnb3JpZXMgPSByZXMuZGF0YS5zdWJfY2F0ZWdvcmllcztcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeU5hbWUyID0gcmVzLmRhdGEuY2F0ZWdvcnkubmFtZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZSgpIHtcclxuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuICAgICAgLy8gICBsZXQgdXJsID0gXCJhZG1pbi9wcm9kdWN0cy9zdG9yZS9idW5kbGVcIjtcclxuICAgICAgbGV0IHVybCA9IFwiL2FwaS9hZG1pbi9zdG9yZS9idW5kbGUvcHJvZHVjdFwiO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGggPCAxKSB7XHJcbiAgICAgICAgdmFyIGVycm9yID0gW1wiUGxlYXNlIFNlbGVjdCBQcm9kdWN0cyB0byBCdW5kbGVcIl07XHJcbiAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKGVycm9yKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlGb3JtXCIpO1xyXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShteUZvcm0pO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChcclxuICAgICAgICAgIFwic2VsZWN0ZWRfcHJvZHVjdHNcIixcclxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHRoaXMuc2VsZWN0ZWRQcm9kdWN0cylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0gdGhpcy5wcm9kdWN0O1xyXG5cclxuICAgICAgICBheGlvc1xyXG4gICAgICAgICAgLnBvc3QodXJsLCBmb3JtRGF0YSwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVyci5yZXNwb25zZS5kYXRhLmVycm9ycyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZSh0aGlzLmVycm9ycy5nZXRBcnJheU9mTWVzc2FnZXMoKSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlKGVycm9ycykge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHNoaXQpO1xyXG4gICAgICB0aGlzLiRldmVudHMuZmlyZShcInNob3dFcnJvck1lc3NhZ2VcIiwgZXJyb3JzKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25GaWxlQ2hhbmdlKGUpIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICB0aGlzLnByb2R1Y3QuaW1hZ2VfZmlsZSA9IGZpbGU7XHJcbiAgICAgIHRoaXMudXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3KCkge1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdCk7XHJcbiAgICAgIHRoaXMuJHJlZnMucHJldmlld19tb2RhbC5wcm9kdWN0ID0gdGhpcy5wcm9kdWN0O1xyXG4gICAgICB0aGlzLiRyZWZzLnByZXZpZXdfbW9kYWwucHJldmlld19pbWFnZSA9XHJcbiAgICAgICAgdGhpcy51cmwgPT0gbnVsbCA/IFwiL2ltZy9uby1wcm9kdWN0LWltYWdlLnBuZ1wiIDogdGhpcy51cmw7XHJcbiAgICAgIHRoaXMuJHJlZnMucHJldmlld19tb2RhbC5jYXRlZ29yeSA9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID09IG51bGwgPyBcIlwiIDogdGhpcy5zZWxlY3RlZENhdGVnb3J5TmFtZTtcclxuXHJcbiAgICAgICQoXCIjcHJldmlld01vZGFsXCIpLm1vZGFsKFwic2hvd1wiKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVWaXNpYmxlKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGRhdGEuaXNfdmlzaWJsZSA9ICFkYXRhLmlzX3Zpc2libGU7XHJcbiAgICB9LFxyXG4gICAgb25seU51bWJlcigkZXZlbnQpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZygkZXZlbnQua2V5Q29kZSk7IC8va2V5Q29kZXMgdmFsdWVcclxuICAgICAgbGV0IGtleUNvZGUgPSAkZXZlbnQua2V5Q29kZSA/ICRldmVudC5rZXlDb2RlIDogJGV2ZW50LndoaWNoO1xyXG4gICAgICBpZiAoKGtleUNvZGUgPCA0OCB8fCBrZXlDb2RlID4gNTcpICYmIGtleUNvZGUgIT09IDQ2KSB7XHJcbiAgICAgICAgLy8gNDYgaXMgZG90XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWxlY3RQcm9kdWN0c01vZGFsKCkge1xyXG4gICAgICAkKFwiI3NlbGVjdFByb2R1Y3RzTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSxcclxuICAgIGFkZFNlbGVjdGVkUHJvZHVjdChkYXRhKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5wdXNoKGRhdGEpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVNlbGVjdGVkUHJvZHVjdChkYXRhKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMuc2VsZWN0X3Byb2R1Y3RzX21vZGFsLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICBpZiAocHJvZHVjdC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICBwcm9kdWN0LnF0eSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5zcGxpY2UoXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RzLmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgcmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgMVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuXHJcbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XHJcbiAgICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKTtcclxuICAgICAgdmFyIHdpdGhDb21tYXMgPSBOdW1iZXIobikudG9Mb2NhbGVTdHJpbmcoXCJlblwiLCB7XHJcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBjb21wdXRlZDoge1xyXG4gICAgc2VsZWN0ZWRDYXRlZ29yeU5hbWUoKSB7XHJcbiAgICAgIGxldCBjYXRlZ29yaWVzID0gdGhpcy5wcm9wc2NhdGVnb3JpZXM7XHJcbiAgICAgIHJldHVybiBjYXRlZ29yaWVzLmZpbmQoKHgpID0+IHguaWQgPT09IHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSkubmFtZTtcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxQcmljZSgpIHtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RzLmZvckVhY2goKHNlbGVjdGVkKSA9PiB7XHJcbiAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgc2VsZWN0ZWQucHJpY2UgKiBzZWxlY3RlZC5xdHk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRpc2NvdW50KCkge1xyXG4gICAgICBsZXQgZGlzY291bnQgPSAwO1xyXG4gICAgICBkaXNjb3VudCA9IHRoaXMudG90YWxQcmljZSAqICh0aGlzLnByb2R1Y3QuYnVuZGxlX3BlcmNlbnRhZ2UgLyAxMDApO1xyXG4gICAgICByZXR1cm4gZGlzY291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIG92ZXJBbGxUb3RhbCgpIHtcclxuICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgdG90YWwgPSB0aGlzLnRvdGFsUHJpY2UgLSB0aGlzLmRpc2NvdW50O1xyXG4gICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LFxyXG5cclxuICAgIHRvdGFsUHJpY2VNZW1iZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgdG90YWwgPSB0b3RhbCArIHNlbGVjdGVkLm1lbWJlcl9wcmljZSAqIHNlbGVjdGVkLnF0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGlzY291bnRNZW1iZXIoKSB7XHJcbiAgICAgIGxldCBkaXNjb3VudCA9IDA7XHJcbiAgICAgIGRpc2NvdW50ID0gdGhpcy50b3RhbFByaWNlTWVtYmVyICogKHRoaXMucHJvZHVjdC5idW5kbGVfcGVyY2VudGFnZSAvIDEwMCk7XHJcbiAgICAgIHJldHVybiBkaXNjb3VudDtcclxuICAgIH0sXHJcblxyXG4gICAgb3ZlckFsbFRvdGFsTWVtYmVyKCkge1xyXG4gICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICB0b3RhbCA9IHRoaXMudG90YWxQcmljZU1lbWJlciAtIHRoaXMuZGlzY291bnRNZW1iZXI7XHJcbiAgICAgIHJldHVybiB0b3RhbDtcclxuICAgIH0sXHJcblxyXG4gICAgdG90YWxQcmljZVdob2xlc2FsZXIoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUHJvZHVjdHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0cy5mb3JFYWNoKChzZWxlY3RlZCkgPT4ge1xyXG4gICAgICAgICAgdG90YWwgPSB0b3RhbCArIHNlbGVjdGVkLndob2xlc2FsZV9wcmljZSAqIHNlbGVjdGVkLnF0eTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZGlzY291bnRXaG9sZXNhbGVyKCkge1xyXG4gICAgICBsZXQgZGlzY291bnQgPSAwO1xyXG4gICAgICBkaXNjb3VudCA9XHJcbiAgICAgICAgdGhpcy50b3RhbFByaWNlV2hvbGVzYWxlciAqICh0aGlzLnByb2R1Y3QuYnVuZGxlX3BlcmNlbnRhZ2UgLyAxMDApO1xyXG4gICAgICByZXR1cm4gZGlzY291bnQ7XHJcbiAgICB9LFxyXG5cclxuICAgIG92ZXJBbGxUb3RhbFdob2xlc2FsZXIoKSB7XHJcbiAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgIHRvdGFsID0gdGhpcy50b3RhbFByaWNlV2hvbGVzYWxlciAtIHRoaXMuZGlzY291bnRXaG9sZXNhbGVyO1xyXG4gICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gbW91bnRlZCgpIHtcclxuICAvLyAgICAgYWxlcnQoXCJQUk9EVUNUUyBDT01QT05FTlQgTU9VTlRFRFwiKTtcclxuICAvLyB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbi8vICAgYmFja2dyb3VuZDogI2YwZjNmNTtcclxufVxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZGZlMjtcclxufVxyXG4udGV4dC1zdWNjZXNzIHtcclxuICBjb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xyXG59XHJcbi5idG4tc3VjY2Vzcy0xIHtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi11cGxvYWQge1xyXG4gIC8vICAgbGluZS1oZWlnaHQ6IDU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzLTIge1xyXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgLy8gNTEsIDE1OSwgMzdcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcclxufVxyXG4jcHJldmlldyB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWdyb3VwW2RhdGEtdi1hOWJiNzg1MF0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLmlucHV0LWdyb3VwLXRleHRbZGF0YS12LWE5YmI3ODUwXSB7XFxuICBiYWNrZ3JvdW5kOiAjZDlkZmUyO1xcbn1cXG4udGV4dC1zdWNjZXNzW2RhdGEtdi1hOWJiNzg1MF0ge1xcbiAgY29sb3I6ICMzMzlmMjUgIWltcG9ydGFudDtcXG59XFxuLmJ0bi1zdWNjZXNzLTFbZGF0YS12LWE5YmI3ODUwXSB7XFxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzOWYyNSAhaW1wb3J0YW50O1xcbiAgYm9yZGVyLWNvbG9yOiAjMzM5ZjI1ICFpbXBvcnRhbnQ7XFxufVxcbi5idG4tdXBsb2FkW2RhdGEtdi1hOWJiNzg1MF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4uYnRuLXVwbG9hZCBpW2RhdGEtdi1hOWJiNzg1MF0ge1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbn1cXG4uYnRuLXN1Y2Nlc3MtMltkYXRhLXYtYTliYjc4NTBdIHtcXG4gIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUxLCAxNTksIDM3LCAwLjMpICFpbXBvcnRhbnQ7XFxuICBib3JkZXItY29sb3I6IHJnYmEoNTEsIDE1OSwgMzcsIDAuNSkgIWltcG9ydGFudDtcXG59XFxuI3ByZXZpZXcgaW1nW2RhdGEtdi1hOWJiNzg1MF0ge1xcbiAgd2lkdGg6IDExMHB4O1xcbiAgaGVpZ2h0OiA5MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NyZWF0ZS1idW5kbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTliYjc4NTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGUtYnVuZGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5YmI3ODUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NyZWF0ZS1idW5kbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTliYjc4NTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJmb3JtXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHsgaWQ6IFwibXlGb3JtXCIsIG5hbWU6IFwibXlGb3JtXCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICByZXR1cm4gX3ZtLnNhdmUoKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggZmxleC1jb2x1bW4gbWluLXZoLTEwMFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03IGNvbC1zbS0xMiBwLTIgbS0yIGJvcmRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImQtZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMuaW1hZ2VfZmlsZV9pbnB1dC5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jYW1lcmEtcmV0cm9cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVXBsb2FkIEltYWdlXFxuICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiaW1hZ2VfZmlsZV9pbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImQtbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmlsZVwiLCBuYW1lOiBcImltYWdlX2ZpbGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLm9uRmlsZUNoYW5nZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicHJldmlld1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS51cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IF92bS51cmwgfSB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtdC00XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcIm5hbWVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBZGQgQSBQcm9kdWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tcm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZWxlY3RQcm9kdWN0c01vZGFsKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxlY3QgUHJvZHVjdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInNlYXNvblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbmNsdWRlZCBQcm9kdWN0czpcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZFByb2R1Y3RzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib2JqZWN0LWZpdFwiOiBcImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1hZ2VfbGluayB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0ucXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLnF0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0ucXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGl0ZW0sIFwicXR5XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnVuaXQpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1pdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5xdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ucHJpY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByaWNlICogaXRlbS5xdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9udC1pdGFsaWNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS5xdHkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW0ubWVtYmVyX3ByaWNlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiApXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tZW1iZXJfcHJpY2UgKiBpdGVtLnF0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb250LWl0YWxpY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIoIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnF0eSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgeCBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbS53aG9sZXNhbGVfcHJpY2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLndob2xlc2FsZV9wcmljZSAqIGl0ZW0ucXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI1MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXNtIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlU2VsZWN0ZWRQcm9kdWN0KGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhciBmYS10aW1lcy1jaXJjbGVcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0Zm9vdFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIzXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRvdGFsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0udG90YWxQcmljZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoX3ZtLnRvdGFsUHJpY2VNZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG90YWxQcmljZVdob2xlc2FsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjVweFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGlzY291bnQgUGVyY2VudGFnZTpcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5idW5kbGVfcGVyY2VudGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QuYnVuZGxlX3BlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRpc2NvdW50X3BlcmNlbnRhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBcIkFtb3VudCAodG8gdGhlIG5lYXJlc3QgZG9sbGFyKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LmJ1bmRsZV9wZXJjZW50YWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnVuZGxlX3BlcmNlbnRhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoX3ZtLmRpc2NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShfdm0uZGlzY291bnRNZW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKF92bS5kaXNjb3VudFdob2xlc2FsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQnVuZGxlIFByaWNlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCB0ZXh0LXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcmVhZG9ubHk6IFwiXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzcGxheU51bWJlcldpdGhDb21tYShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3ZlckFsbFRvdGFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgdGV4dC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHJlYWRvbmx5OiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc3BsYXlOdW1iZXJXaXRoQ29tbWEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm92ZXJBbGxUb3RhbE1lbWJlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHRleHQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiLCByZWFkb25seTogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5vdmVyQWxsVG90YWxXaG9sZXNhbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIk5vdGU6IFRoZSBQcmljZXMgb2YgQnVuZGxlIFByb2R1Y3RzIGFyZSBiYXNlIG9uIHRoZSBzZWxlY3RlZCBwcm9kdWN0cyBzbyB5b3UgbXVzdCB0byBjcmVhdGUgcHJvZHVjdCBmaXJzdC4gSWYgYSBzZWxlY3RlZCBwcm9kdWN0IHByaWNlIGlzIHVwZGF0ZWQsIHRoZSBwcmljZXMgb2YgYnVuZGxlIGFyZSBhbHNvIHVwZGF0ZWQuIEJ1dCBvcmVkZXJlZCBidW5kbGUgcHJvZHVjdHMgcHJpY2VzIGNhbnQgYmUgY2hhbmdlIGFueW1vcmUuXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IG10LTRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC03XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJuYW1lXCIgfSB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlByb2R1Y3QgQnVuZGxlIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5uYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwibmFtZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImRlc2NyaXB0aW9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IFwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9kdWN0LmRlc2NyaXB0aW9uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwic2t1XCIgfSB9LCBbX3ZtLl92KFwiU0tVXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3Quc2t1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvZHVjdC5za3VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwic2t1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2t1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ2V4LiBcIlBBMDAwMVwiLCBcIjFBMDAwMlwiJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5za3UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucHJvZHVjdCwgXCJza3VcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJ1bml0XCIgfSB9LCBbX3ZtLl92KFwiVW5pdFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wcm9kdWN0LnVuaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0LnVuaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidW5pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVuaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdleC4gXCJQYWNrXCIsIFwiS2lsb1wiLCBcIlBjXCIsIFwiMTJvelwiLCBcIkRvelwiIC4uLidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnByb2R1Y3QudW5pdCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wcm9kdWN0LCBcInVuaXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjYXRlZ29yeVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ2F0ZWdvcnlcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZENhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZENhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJjYXRlZ29yeVwiLCBuYW1lOiBcImNhdGVnb3J5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRDYXRlZ29yeSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICQkc2VsZWN0ZWRWYWxbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jYXRlZ29yeVNlbGVjdGlvbkNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwibnVsbFwiLCBkaXNhYmxlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdCBDYXRlZ29yeVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9wc2NhdGVnb3JpZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgZG9tUHJvcHM6IHsgdmFsdWU6IGl0ZW0uaWQgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjYXRlZ29yeVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1YiBDYXRlZ29yaWVzIG9mIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnNlbGVjdGVkQ2F0ZWdvcnlOYW1lMilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZFN1YkNhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFN1YkNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJzdWJfY2F0ZWdvcnlcIiwgbmFtZTogXCJzdWJfY2F0ZWdvcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZFN1YkNhdGVnb3J5ID0gJGV2ZW50LnRhcmdldC5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICQkc2VsZWN0ZWRWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFsdWU6IFwibnVsbFwiLCBkaXNhYmxlZDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlbGVjdCBTdWIgQ2F0ZWdvcnlcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc3ViY2F0ZWdvcmllcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBkb21Qcm9wczogeyB2YWx1ZTogaXRlbS5pZCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcInRhZ3NcIiB9IH0sIFtfdm0uX3YoXCJUYWdzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3QudGFncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QudGFnc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ0YWdzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGFnc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2V4LiBcIkZyZXNoXCIsIFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJDaXRydXNcIiwgLi4uICcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9kdWN0LnRhZ3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ucHJvZHVjdCwgXCJ0YWdzXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwic2Vhc29uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZWFzb25cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5zZWFzb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0LnNlYXNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNvbnRyb2wgcm91bmRlZC0wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJzZWFzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzZWFzb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnZXguIFwiV2ludGVyXCIsIFwiU3VtbWVyXCIsIFwiU3ByaW5nXCIsIC4uLidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnByb2R1Y3Quc2Vhc29uIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnByb2R1Y3QsIFwic2Vhc29uXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwicHJpY2VcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZ1bmRyYWlzZSBQZXJjZW50YWdlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIHJvdW5kZWQtMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3QuZnVuZHJhaXNlX3BlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QuZnVuZHJhaXNlX3BlcmNlbnRhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImZ1bmRyYWlzZV9wZXJjZW50YWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmdW5kcmFpc2VfcGVyY2VudGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5mdW5kcmFpc2VfcGVyY2VudGFnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBfdm0ub25seUZvckN1cnJlbmN5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmdW5kcmFpc2VfcGVyY2VudGFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWlub3JkZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1pbmltdW0gT3JkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5taW5vcmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QubWlub3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWlub3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtaW5vcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdleC4gXCIxXCInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucHJvZHVjdC5taW5vcmRlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IF92bS5vbmx5TnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWlub3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwibWF4b3JkZXJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1heGltdW0gT3JkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucHJvZHVjdC5tYXhvcmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInByb2R1Y3QubWF4b3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHJvdW5kZWQtMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibWF4b3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtYXhvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdleC4gXCIxMDBcIicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wcm9kdWN0Lm1heG9yZGVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzczogX3ZtLm9ubHlOdW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXhvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJtYXhvcmRlclwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiVmlzaWJpbGl0eVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXN0b20tY29udHJvbCBjdXN0b20tc3dpdGNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnByb2R1Y3QudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwcm9kdWN0LnZpc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcInZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucHJvZHVjdC52aXNpYmxlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ucHJvZHVjdC52aXNpYmxlLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnByb2R1Y3QudmlzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucHJvZHVjdC52aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJGEuY29uY2F0KFskJHZdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9kdWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5wcm9kdWN0LCBcInZpc2libGVcIiwgJCRjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImN1c3RvbS1jb250cm9sLWxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwidmlzaWJsZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTaG93L0hpZGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS0xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiBidG4gYnRuLXN1Y2Nlc3MtMSByb3VuZGVkLTBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnByZXZpZXcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXIgZmEtZXllXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUHJldmlld1xcbiAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oNylcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFkbWluLXByb2R1Y3RzLXByZXZpZXctbW9kYWxcIiwgeyByZWY6IFwicHJldmlld19tb2RhbFwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhZG1pbi1zZWxlY3QtcHJvZHVjdHMtbW9kYWxcIiwge1xuICAgICAgICAgICAgcmVmOiBcInNlbGVjdF9wcm9kdWN0c19tb2RhbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgc2VsZWN0ZWRfcHJvZHVjdHM6IF92bS5zZWxlY3RlZFByb2R1Y3RzIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIG1iLTBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkLWZsZXhcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tc3VjY2VzcyBmbG9hdC1yaWdodCByb3VuZGVkLTAgdGV4dC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vcHJvZHVjdHNcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNoZXZyb24tY2lyY2xlLWxlZnRcIiB9KV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIlByb2R1Y3RzXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihcIkFERCBORVcgQlVORExFIFBST0RVQ1RcIildKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJQcm9kdWN0XCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3NXB4XCIgfSB9LCBbX3ZtLl92KFwiSW1hZ2VcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEyMHB4XCIgfSB9LCBbX3ZtLl92KFwiUXVhbnRpdHlcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE3MHB4XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiUmVndWxhciBQcmljZVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE3MHB4XCIgfSB9LCBbX3ZtLl92KFwiTWVtYmVyIFByaWNlXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxNzBweFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIldob2xlc2FsZSBQcmljZVwiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjUwcHhcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtYXBwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtfdm0uX3YoXCIlXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXByZXBlbmRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC10ZXh0XCIgfSwgW192bS5fdihcIiRcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiJFwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5wdXQtZ3JvdXAtdGV4dFwiIH0sIFtfdm0uX3YoXCIkXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLWFwcGVuZFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwLXRleHRcIiB9LCBbX3ZtLl92KFwiJVwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJidXR0b25cIiwgeyBzdGF0aWNDbGFzczogXCJtci0yIGJ0biBidG4tc3VjY2Vzcy0yIHJvdW5kZWQtMFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zYXZlXCIgfSksXG4gICAgICBfdm0uX3YoXCIgU2F2ZVxcbiAgICAgICAgICAgICAgXCIpXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NyZWF0ZS1idW5kbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5YmI3ODUwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NyZWF0ZS1idW5kbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jcmVhdGUtYnVuZGxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jcmVhdGUtYnVuZGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5YmI3ODUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTliYjc4NTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E5YmI3ODUwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E5YmI3ODUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E5YmI3ODUwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jcmVhdGUtYnVuZGxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOWJiNzg1MCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhOWJiNzg1MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9wcm9kdWN0cy9jcmVhdGUtYnVuZGxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlLWJ1bmRsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlLWJ1bmRsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jcmVhdGUtYnVuZGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE5YmI3ODUwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlLWJ1bmRsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOWJiNzg1MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY3JlYXRlLWJ1bmRsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTliYjc4NTAmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9O1xuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldHRpbmcgdGhpcyBmaWVsZFwiICsgZmllbGQpXG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF07XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0QWxsTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBzdHIgPSBcIlwiO1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBzdHIgKyB0aGlzLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICtcIiwgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICBnZXRBcnJheU9mTWVzc2FnZXMoKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmVycm9ycyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAvLyAgIG1zZzogdGhpcy5nZXQoa2V5KSxcbiAgICAgICAgICAgICAgICAvLyB9O1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKHRoaXMuZ2V0KGtleSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgYW55KCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5lcnJvcnMpLmxlbmd0aCA+IDA7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==