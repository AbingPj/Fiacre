(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/f/products"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var prodOrderSummary = function prodOrderSummary() {
  return __webpack_require__.e(/*! import() | js/f/prodOrderSummaryNew */ "js/f/prodOrderSummaryNew").then(__webpack_require__.bind(null, /*! ./orderSummary.vue */ "./resources/js/frontend/components/products-page/orderSummary.vue"));
}; // const prodModal = () =>
//   import(
//     /* webpackChunkName: "js/f/prodModalNew" */ "./productsModal.vue"
//   );


var prodWarningModal = function prodWarningModal() {
  return __webpack_require__.e(/*! import() | js/f/prodWarningModal */ "js/f/prodWarningModal").then(__webpack_require__.bind(null, /*! ./wholesalerWarningModal.vue */ "./resources/js/frontend/components/products-page/wholesalerWarningModal.vue"));
};

var prodUserBalanceMobile = function prodUserBalanceMobile() {
  return __webpack_require__.e(/*! import() | js/f/prodUserBalanceMobile */ "js/f/prodUserBalanceMobile").then(__webpack_require__.bind(null, /*! ./userBalanceMobile.vue */ "./resources/js/frontend/components/products-page/userBalanceMobile.vue"));
};

var prodUserBalance = function prodUserBalance() {
  return __webpack_require__.e(/*! import() | js/f/prodUserBalance */ "js/f/prodUserBalance").then(__webpack_require__.bind(null, /*! ./userBalance.vue */ "./resources/js/frontend/components/products-page/userBalance.vue"));
};

var prodlist = function prodlist() {
  return __webpack_require__.e(/*! import() | js/f/prodlist */ "js/f/prodlist").then(__webpack_require__.bind(null, /*! ./productsViewList.vue */ "./resources/js/frontend/components/products-page/productsViewList.vue"));
};

var prodGrid = function prodGrid() {
  return __webpack_require__.e(/*! import() | js/f/prodGrid */ "js/f/prodGrid").then(__webpack_require__.bind(null, /*! ./productsViewGrid.vue */ "./resources/js/frontend/components/products-page/productsViewGrid.vue"));
}; // import OrganizationModal from "./organization-modal/index"


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'products-page-order-summary': prodOrderSummary,
    // 'products-page-modal': prodModal,
    'products-warning-modal': prodWarningModal,
    'products-user-balance-mobile': prodUserBalanceMobile,
    'products-user-balance': prodUserBalance,
    'products-list': prodlist,
    'products-grid': prodGrid // OrganizationModal,

  },
  //   props: {
  //     propproducts: Array,
  //     propcategories: Array
  //   },
  props: ["propproducts", "propcategories", "guest", "user", "wholesaler_minimum_order_amount"],
  data: function data() {
    return {
      search: "",
      display: "box",
      products: [],
      cart: [],
      categories: [],
      selectedCategory: "All",
      image_sample: "/img/sunfarmacy/products/Group17.png",
      searchedProducts: [],
      laravelData: {},
      category: "All",
      name: "",
      btn: "search",
      org_id: null,
      org_name: null
    };
  },
  created: function created() {
    // this.getProducts();
    LoadingOverlay();
    this.getResults();
    var categories = this.propcategories;
    this.categories = categories;
  },
  mounted: function mounted() {//   $("#guestSelectingOrganizationModal").modal("show");
    // $("#addToCartModal").on("shown.bs.modal", function () {
    //   $("body.modal-open").removeAttr("style");
    //   $("sticky-top").removeAttr("style");
    // });
  },
  methods: {
    searchBarChange: function searchBarChange() {
      this.btn = "search"; //   console.log(this.btn);
    },
    removeSearchFilter: function removeSearchFilter() {
      this.name = "";
      this.search = "";
      this.getResults();
      this.btn = "search";
    },
    removeCategoryFilter: function removeCategoryFilter() {
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    resetFilter: function resetFilter() {
      this.name = "";
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    categoryChange: function categoryChange(data) {
      LoadingOverlay();
      window.scrollTo(0, 0);

      if (data === "All") {
        this.category = "All";
        this.getResults();
      } else {
        this.category = data.id;
        this.getResults();
      }
    },
    getResults: function getResults() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      var param;

      if (this.name != "" && this.category != "All") {
        param = {
          category: this.category,
          name: this.name,
          page: page,
          org_id: this.org_id
        };
      } else if (this.name != "") {
        param = {
          name: this.name,
          page: page,
          org_id: this.org_id
        };
      } else if (this.category != "All") {
        param = {
          category: this.category,
          page: page,
          org_id: this.org_id
        };
      } else {
        param = {
          page: page,
          org_id: this.org_id
        };
      }

      axios({
        method: "get",
        url: "/data/products",
        params: param
      }).then(function (res) {
        _this.laravelData = res.data;
        var products = res.data.data; // products.forEach((product) => {
        //   product.selected = false;
        //   product.qty = 1;
        // });
        // console.log();
        // this.products = products;

        if (_this.guest == 1) {
          _this.getCart(products);
        } else {
          console.log('oyee');

          _this.getCart2(products);
        }

        LoadingOverlayHide();
      });
    },
    getCart: function getCart(data) {
      var _this2 = this;

      if (this.ifCartExpired()) {
        // console.log("expired");
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.products = data;
      } else {
        // console.log("not expired");
        var lastcart = JSON.parse(localStorage.getItem("cart") || "null") || [];
        this.cart = lastcart;
        localStorage.setItem("cart_badge", this.cart.length);
        data.forEach(function (product) {
          _this2.cart.forEach(function (cart) {
            if (product.id == cart.id) {
              product.selected = true;
            }
          });
        });
        this.products = data;
      }
    },
    getCart2: function getCart2(data) {
      var _this3 = this;

      // let lastcart = JSON.parse(localStorage.getItem("cart") || "null") || [];
      // this.cart = lastcart;
      // localStorage.setItem("cart_badge", this.cart.length);
      // data.forEach((product) => {
      //   this.cart.forEach((cart) => {
      //     if (product.id == cart.id) {
      //       product.selected = true;
      //     }
      //   });
      // });
      // this.products = data;
      axios.get("/cart/getUserCartDetails/".concat(this.user.id, "/").concat(this.org_id)).then(function (res) {
        var lastcart = res.data;
        _this3.cart = [];
        lastcart.forEach(function (cart) {
          cart.atr_details.qty = cart.qty;

          _this3.cart.push(cart.atr_details);
        });
        data.forEach(function (product) {
          _this3.cart.forEach(function (cart) {
            if (product.id == cart.id) {
              product.selected = true;
            }
          });
        });
        _this3.products = data;
      })["catch"](function (err) {
        console.error(err);
        _this3.products = data;
      });
    },
    updateProductPrice: function updateProductPrice(product) {
      var customer_role = this.user.customer_role;
      var price = customer_role == 2 ? product.member_price : customer_role == 3 ? product.wholesale_price : product.price;
      return this.displayNumberWithComma(price);
    },
    searchProduct: function searchProduct() {
      LoadingOverlay();
      window.scrollTo(0, 0);
      this.btn = "clear";
      this.name = this.search;
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    showAddToCartModal: function showAddToCartModal(data) {
      this.$refs.productmodal.showModal(data, this.guest, this.user.customer_role); //   $("#addToCartModal").modal("show");
    },
    showAddToCartModalEdit: function showAddToCartModalEdit(data) {
      this.$refs.productmodalEdit.showModal(data, this.guest, this.user.customer_role);
    },
    setDisplay: function setDisplay(data) {
      this.display = data;
    },
    removeItemInCart: function removeItemInCart(data) {
      var _this4 = this;

      if (this.guest == 1) {
        this.products.forEach(function (product) {
          if (product.id == data.id) {
            product.selected = false;
            product.qty = 1;
          }
        });
        this.cart.splice(this.cart.findIndex(function (i) {
          return i.id === data.id;
        }), 1);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.$events.fire("updateCartBadge", "update cart");
        this.setCartExpiry(86400000); // 1 day miliseconds
      } else {
        LoadingOverlay();
        axios.post("/cart/removeProductOfUserCart/".concat(this.user.id, "/").concat(this.org_id, "/").concat(data.id)).then(function (res) {
          _this4.$events.fire("updateCartBadge3", res.data);

          LoadingOverlayHide();

          _this4.products.forEach(function (product) {
            if (product.id == data.id) {
              product.selected = false;
              product.qty = 1;
            }
          });

          _this4.cart.splice(_this4.cart.findIndex(function (i) {
            return i.id === data.id;
          }), 1);
        })["catch"](function (err) {
          LoadingOverlayHide();
          console.error(err);
        });
      }
    },
    updateProductDetails: function updateProductDetails(product) {
      if (this.guest == 0) {
        LoadingOverlay();
        var rawData = {
          product_details: product,
          user_id: this.user.id,
          org_id: this.org_id
        };
        axios.post("/cart/updateProductDetails", rawData).then(function (res) {
          console.log(res);
          LoadingOverlayHide();
        })["catch"](function (err) {
          console.error(err);
          LoadingOverlayHide();
          alert("Something went wrong! Please Contat Support. " + err);
        });
      }
    },
    updateProductQuantity: function updateProductQuantity(product) {
      if (this.guest == 0) {
        LoadingOverlay();
        var rawData = {
          product_details: product,
          user_id: this.user.id,
          org_id: this.org_id
        };
        axios.post("/cart/updateProductDetails", rawData).then(function (res) {
          console.log(res);
          LoadingOverlayHide();
        })["catch"](function (err) {
          console.error(err);
          LoadingOverlayHide();
          alert("Something went wrong! Please Contat Support. " + err);
        });
      }
    },
    addQty: function addQty(product) {
      if (product.qty < product.maxorder + 50) {
        product.qty++;

        if (this.guest == 1) {
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.setCartExpiry(86400000);
        } else {
          LoadingOverlay();
          var rawData = {
            product_details: product,
            user_id: this.user.id,
            org_id: this.org_id
          };
          axios.post("/cart/updateQuantity", rawData).then(function (res) {
            console.log(res);
            LoadingOverlayHide();
          })["catch"](function (err) {
            product.qty--;
            console.error(err);
            LoadingOverlayHide();
            alert("Something went wrong! Please Contat Support. " + err);
          });
        }
      }
    },
    subQty: function subQty(product) {
      if (product.qty > 1) {
        product.qty--;

        if (this.guest == 1) {
          localStorage.setItem("cart", JSON.stringify(this.cart));
          this.setCartExpiry(86400000);
        } else {
          LoadingOverlay();
          var rawData = {
            product_details: product,
            user_id: this.user.id,
            org_id: this.org_id
          };
          axios.post("/cart/updateQuantity", rawData).then(function (res) {
            console.log(res);
            LoadingOverlayHide();
          })["catch"](function (err) {
            product.qty++;
            console.error(err);
            LoadingOverlayHide();
            alert("Something went wrong! Please Contat Support. " + err);
          });
        }
      }
    },
    addtoCart: function addtoCart(data, selected_products, original) {
      var _this5 = this;

      data.selected = true;

      if (this.guest == 1) {
        if (data.selected == true) {
          this.cart.push(data);
          localStorage.setItem("cart", JSON.stringify(this.cart));
        } else {
          this.cart.splice(this.cart.findIndex(function (i) {
            return i.id === data.id;
          }), 1);
          localStorage.setItem("cart", JSON.stringify(this.cart));
        }

        localStorage.setItem("cart_badge", this.cart.length);
        this.setCartExpiry(86400000); // 1 day miliseconds
        //   this.setCartExpiry(40000);

        this.$events.fire("updateCartBadge", "update cart");
      } else {
        var newdata = JSON.stringify(data);
        var newdata2 = JSON.parse(newdata);

        if (data.is_bundle == 1) {
          newdata2.selected_products = selected_products;
          newdata2.atr_orginal_selected_products = original;
        }

        var rawData = {
          user_id: this.user.id,
          org_id: this.org_id,
          product_id: data.id,
          qty: data.qty,
          price: data.price,
          product_details: newdata2,
          original_selected_products: original
        };
        LoadingOverlay();
        axios.post('/cart/addToCart', rawData).then(function (res) {
          console.log(res);

          _this5.$events.fire("updateCartBadge3", res.data);

          _this5.cart.push(newdata2);

          LoadingOverlayHide();
        })["catch"](function (err) {
          console.error(err);
          LoadingOverlayHide();
          alert('Something went wrong! Please Contat Support. ' + err);
        });
      }

      return data;
    },
    setCartExpiry: function setCartExpiry(ttl) {
      var now = new Date();
      var expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },
    ifCartExpired: function ifCartExpired() {
      var itemStr = localStorage.getItem("cart_expiry");

      if (!itemStr) {
        return true;
      }

      var item = JSON.parse(itemStr);
      var now = new Date();

      if (now.getTime() > item) {
        return true;
      }

      return false;
    },
    updateQty: function updateQty(data) {
      if (data.selected == true) {
        this.cart.push(data);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }

      localStorage.setItem("cart_badge", this.cart.length);
      this.setCartExpiry(86400000); // 1 day miliseconds

      return data;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-f-margin[data-v-3187bef1] {\n  padding-right: 100px;\n  padding-left: 1000px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) and (max-width: 1455px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 25px;\n    padding-left: 0px;\n}\n}\n@media (min-width: 1456px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 50px;\n    padding-left: 0px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1570px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 50px;\n    padding-left: 50px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1600px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 75px;\n    padding-left: 75px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1700px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 100px;\n    padding-left: 100px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1750px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 125px;\n    padding-left: 125px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1800px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 150px;\n    padding-left: 150px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 1850px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 165px;\n    padding-left: 165px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 2000px) {\n.con-f-margin[data-v-3187bef1] {\n    padding-right: 175px;\n    padding-left: 175px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.con-f-margin[data-v-3187bef1] {\n    margin-top: -20px;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n}\n.margin-content-2[data-v-3187bef1] {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.margin-content-2[data-v-3187bef1] {\n    margin-top: 0;\n}\n}\n.filter-btn[data-v-3187bef1] {\n  padding: 0px 5px;\n  font-size: 13px;\n  border-radius: 1rem;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container[data-v-3187bef1] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 93px;\n    padding-top: 10px;\n    padding-bottom: 5px;\n    background-color: white;\n    z-index: 4;\n}\n}\n.search-container .search-inpt[data-v-3187bef1] {\n  border-radius: 100px 0px 0px 100px;\n  border: 1px solid #339f25;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-inpt[data-v-3187bef1] {\n    height: 30px;\n}\n}\n.search-container .search-btn[data-v-3187bef1] {\n  border-radius: 0px 100px 100px 0px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-btn[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n.search-container .search-btn-2[data-v-3187bef1] {\n  border-radius: 0px 100px 100px 0px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-btn-2[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-cat-cont[data-v-3187bef1] {\n    margin-bottom: 0px;\n}\n}\n.search-container .search-cat-cont .search-cat[data-v-3187bef1] {\n  border-radius: 100px;\n  border: 1px solid #339f25;\n  padding: 0px 10px 0px 10px;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .search-cat-cont .search-cat[data-v-3187bef1] {\n    height: 30px;\n    font-size: 10px;\n}\n}\n.search-container .display-cont #display-list.btn[data-v-3187bef1] {\n  border-radius: 48%;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont #display-list.btn[data-v-3187bef1] {\n    padding: 1px 5px 1px 5px;\n}\n}\n.search-container .display-cont #dispaly-grid.btn[data-v-3187bef1] {\n  border-radius: 48%;\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont #dispaly-grid.btn[data-v-3187bef1] {\n    padding: 1px 5px 1px 5px;\n}\n}\n@media (min-width: 300px) and (max-width: 767px) {\n.search-container .display-cont[data-v-3187bef1] {\n    height: 30px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "margin-content-2" }, [
    _c("div", { staticClass: "container search-container" }, [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { class: _vm.display == "box" ? "col-md-8 col-lg-9" : "col-md-8" },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-12 col-sm-12 col-12" },
                [
                  _c("div", { staticClass: "input-group mb-3" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "form-control search-inpt",
                      attrs: {
                        type: "text",
                        placeholder: "Search",
                        "aria-describedby": "button-addon2"
                      },
                      domProps: { value: _vm.search },
                      on: {
                        keyup: [
                          function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.searchProduct()
                          },
                          function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "delete",
                                [8, 46],
                                $event.key,
                                ["Backspace", "Delete", "Del"]
                              )
                            ) {
                              return null
                            }
                            return _vm.searchBarChange()
                          }
                        ],
                        keypress: function($event) {
                          return _vm.searchBarChange()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      this.btn === "search"
                        ? _c(
                            "button",
                            {
                              staticClass: "btn btn-outline-success search-btn",
                              attrs: { type: "button", id: "button-addon2" },
                              on: {
                                click: function($event) {
                                  return _vm.searchProduct()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-search",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                        : _c(
                            "button",
                            {
                              staticClass:
                                "btn btn-outline-success search-btn-2",
                              attrs: { type: "button", id: "button-addon2" },
                              on: {
                                click: function($event) {
                                  return _vm.removeSearchFilter()
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "fas fa-times-circle",
                                attrs: { "aria-hidden": "true" }
                              })
                            ]
                          )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-9 col-sm-9 col-9" }, [
                _c("div", { staticClass: "form-group search-cat-cont" }, [
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
                      staticClass: "form-control search-cat",
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
                            return _vm.categoryChange(_vm.selectedCategory)
                          }
                        ]
                      }
                    },
                    [
                      _c("option", { attrs: { disabled: "", selected: "" } }, [
                        _vm._v("Choose Categories")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "All" } }, [
                        _vm._v("All")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(item) {
                        return _c(
                          "option",
                          { key: item.id, domProps: { value: item } },
                          [_vm._v(_vm._s(item.name))]
                        )
                      })
                    ],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-3 col-sm-3 col-3" }, [
                _c(
                  "div",
                  { staticClass: "d-flex flex-row-reverse display-cont" },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-success",
                        style:
                          _vm.display == "box"
                            ? "background-color:#339f25; color:white;"
                            : "",
                        attrs: { id: "dispaly-grid" },
                        on: {
                          click: function($event) {
                            return _vm.setDisplay("box")
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-th",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-success mr-2",
                        style:
                          _vm.display == "list"
                            ? "background-color:#339f25; color:white;"
                            : "",
                        attrs: { id: "display-list" },
                        on: {
                          click: function($event) {
                            return _vm.setDisplay("list")
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-th-list",
                          attrs: { "aria-hidden": "true" }
                        })
                      ]
                    )
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "text-left mt-1" }, [
              this.name != ""
                ? _c("span", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary btn-sm filter-btn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.removeSearchFilter()
                          }
                        }
                      },
                      [
                        _vm._v(
                          '\n              "' +
                            _vm._s(_vm.name) +
                            '"\n              '
                        ),
                        _c("i", { staticClass: "fas fa-times-circle" })
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              this.selectedCategory != "All"
                ? _c("span", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-secondary btn-sm filter-btn",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            return _vm.removeCategoryFilter()
                          }
                        }
                      },
                      [
                        _vm._v(
                          '\n              "' +
                            _vm._s(_vm.selectedCategory.name) +
                            '"\n              '
                        ),
                        _c("i", { staticClass: "fas fa-times-circle" })
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { class: _vm.display == "box" ? "col-md-4 col-lg-3" : "col-md-4" },
          [
            _c("h6", { staticClass: "text-success" }, [
              _vm._v(_vm._s(_vm.org_name))
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        class:
          _vm.display == "box" ? "container-fluid con-f-margin" : "container"
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              class:
                _vm.display == "box" ? "col-md-8 col-lg-9 p-0" : "col-md-8 p-0"
            },
            [
              _vm.products.length == 0
                ? _c("div", { staticClass: "container" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-12" }, [
                        _c("div", { staticClass: "text-center mt-5" }, [
                          this.name != "" && this.selectedCategory != "All"
                            ? _c("div", [
                                _vm._v(
                                  '\n                  No Products Found with "' +
                                    _vm._s(this.name) +
                                    '" and Category "' +
                                    _vm._s(this.selectedCategory.name) +
                                    '".\n                  '
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: "text-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.resetFilter()
                                      }
                                    }
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "Reset Filter / Return to Products"
                                      )
                                    ])
                                  ]
                                )
                              ])
                            : this.name != ""
                            ? _c("div", [
                                _vm._v(
                                  '\n                  No Products Found with "' +
                                    _vm._s(this.name) +
                                    '".\n                  '
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: "text-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.resetFilter()
                                      }
                                    }
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "Reset Filter / Return to Products"
                                      )
                                    ])
                                  ]
                                )
                              ])
                            : this.category != "All"
                            ? _c("div", [
                                _vm._v(
                                  '\n                  No Products Found with Category "' +
                                    _vm._s(this.selectedCategory.name) +
                                    '".\n                  '
                                ),
                                _c(
                                  "div",
                                  {
                                    staticClass: "text-primary",
                                    on: {
                                      click: function($event) {
                                        return _vm.resetFilter()
                                      }
                                    }
                                  },
                                  [
                                    _c("u", [
                                      _vm._v(
                                        "Reset Filter / Return to Products"
                                      )
                                    ])
                                  ]
                                )
                              ])
                            : _c("div", [_vm._v("No Products Yet.")])
                        ])
                      ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("products-list", {
                attrs: {
                  products: _vm.products,
                  display: _vm.display,
                  customer_role: _vm.user.customer_role
                }
              }),
              _vm._v(" "),
              _c("products-grid", {
                ref: "productsgrid",
                attrs: {
                  products: _vm.products,
                  display: _vm.display,
                  customer_role: _vm.user.customer_role
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("pagination", {
                attrs: {
                  data: _vm.laravelData,
                  limit: 5,
                  size: "small",
                  align: "center"
                },
                on: { "pagination-change-page": _vm.getResults }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              class:
                _vm.display == "box" ? "col-md-4 col-lg-3 p-0" : "col-md-4 p-0"
            },
            [
              _c("products-page-order-summary", {
                attrs: {
                  cart: _vm.cart,
                  customer_role: _vm.user.customer_role,
                  minimum: _vm.wholesaler_minimum_order_amount,
                  guest: _vm.guest
                }
              })
            ],
            1
          )
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class:
          _vm.display == "box" ? "container-fluid con-f-margin" : "container"
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("ProductsPageModal", {
                ref: "productmodal",
                attrs: { guest: _vm.guest }
              }),
              _vm._v(" "),
              _c("ProductsModalEdit", {
                ref: "productmodalEdit",
                attrs: { guest: _vm.guest }
              }),
              _vm._v(" "),
              _c("products-warning-modal", {
                attrs: { minimum: _vm.wholesaler_minimum_order_amount }
              }),
              _vm._v(" "),
              _c("EnterOptionCModal", {
                attrs: { guest: _vm.guest, user: _vm.user }
              })
            ],
            1
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue":
/*!******************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=3187bef1&scoped=true& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3187bef1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/products-page/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=style&index=0&id=3187bef1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_ref_6_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3187bef1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=3187bef1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/products-page/index.vue?vue&type=template&id=3187bef1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_3187bef1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/ZjMyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT9lYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2MxZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/NTMxNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT84ODIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2UxOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7O0FDcmZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQTBjLENBQWdCLDJiQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5AaW1wb3J0IFwicmVzb3VyY2VzL3Nhc3MvbWl4aW5zXCI7XHJcblxyXG4uY29uLWYtbWFyZ2luIHtcclxuICAvLyBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgLy8gICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XHJcblxyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTAwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ1NXB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1NnB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDc1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNzAwcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTI1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxODUwcHgpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2NXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTc1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmdpbi1jb250ZW50LTIge1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItYnRuIHtcclxuICBwYWRkaW5nOiAwcHggNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICAvLyAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLnNlYXJjaC1jb250YWluZXIge1xyXG4gIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA5M3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAvLyB6LWluZGV4OiAyO1xyXG4gICAgei1pbmRleDogNDtcclxuICB9XHJcbiAgLnNlYXJjaC1pbnB0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4IDBweCAwcHggMTAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM5ZjI1O1xyXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VhcmNoLWJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAwcHggMTAwcHggMHB4O1xyXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2gtYnRuLTIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2VhcmNoLWNhdC1jb250IHtcclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gtY2F0IHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzlmMjU7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xyXG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kaXNwbGF5LWNvbnQge1xyXG4gICAgI2Rpc3BsYXktbGlzdC5idG4ge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0OCU7XHJcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAjZGlzcGFseS1ncmlkLmJ0biB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ4JTtcclxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcclxuICAgICAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuXHJcblxyXG48dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cIm1hcmdpbi1jb250ZW50LTJcIj5cclxuICAgIDwhLS0gPHByb2R1Y3RzLXVzZXItYmFsYW5jZS1tb2JpbGUgOmd1ZXN0PVwiZ3Vlc3RcIiA6dXNlcj1cInVzZXJcIj48L3Byb2R1Y3RzLXVzZXItYmFsYW5jZS1tb2JpbGU+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBzZWFyY2gtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtOCBjb2wtbGctOScgOiAnY29sLW1kLTgnXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXNtLTEyIGNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbi1hZGRvbjJcIlxyXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgdi1vbjprZXl1cC5lbnRlcj1cInNlYXJjaFByb2R1Y3QoKVwiXHJcbiAgICAgICAgICAgICAgICAgIHYtb246a2V5dXAuZGVsZXRlPVwic2VhcmNoQmFyQ2hhbmdlKClcIlxyXG4gICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJzZWFyY2hCYXJDaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cInRoaXMuYnRuID09PSAnc2VhcmNoJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBzZWFyY2gtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImJ1dHRvbi1hZGRvbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlYXJjaFByb2R1Y3QoKVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2LWVsc2VcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG4tMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJidXR0b24tYWRkb24yXCJcclxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWFyY2hGaWx0ZXIoKVwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTkgY29sLXNtLTkgY29sLTlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzZWFyY2gtY2F0LWNvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VhcmNoLWNhdFwiXHJcbiAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJzZWxlY3RlZENhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cImNhdGVnb3J5Q2hhbmdlKHNlbGVjdGVkQ2F0ZWdvcnkpXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD5DaG9vc2UgQ2F0ZWdvcmllczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQWxsXCI+QWxsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiaXRlbS5pZFwiIDp2YWx1ZT1cIml0ZW1cIj57eyBpdGVtLm5hbWUgfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC0zIGNvbC1zbS0zIGNvbC0zXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LXJvdy1yZXZlcnNlIGRpc3BsYXktY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBpZD1cImRpc3BhbHktZ3JpZFwiXHJcbiAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNldERpc3BsYXkoJ2JveCcpXCJcclxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2JhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7JyA6ICcnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgaWQ9XCJkaXNwbGF5LWxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJzZXREaXNwbGF5KCdsaXN0JylcIlxyXG4gICAgICAgICAgICAgICAgICA6c3R5bGU9XCJkaXNwbGF5ID09ICdsaXN0Jz8gJ2JhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7JyA6ICcnXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBtci0yXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aC1saXN0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1sZWZ0IG10LTFcIj5cclxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMubmFtZSAhPSAnJ1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZVNlYXJjaEZpbHRlcigpXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmlsdGVyLWJ0blwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgXCJ7e25hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMuc2VsZWN0ZWRDYXRlZ29yeSAhPSAnQWxsJ1wiPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZUNhdGVnb3J5RmlsdGVyKClcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBmaWx0ZXItYnRuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBcInt7c2VsZWN0ZWRDYXRlZ29yeS5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJkaXNwbGF5ID09ICdib3gnPyAnY29sLW1kLTQgY29sLWxnLTMnIDogJ2NvbC1tZC00J1wiPlxyXG4gICAgICAgICAgPGg2IGNsYXNzPVwidGV4dC1zdWNjZXNzXCI+e3tvcmdfbmFtZX19PC9oNj5cclxuICAgICAgICAgIDwhLS0gPHByb2R1Y3RzLXVzZXItYmFsYW5jZSA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvcHJvZHVjdHMtdXNlci1iYWxhbmNlPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb250YWluZXItZmx1aWQgY29uLWYtbWFyZ2luJzonY29udGFpbmVyJ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPCEtLSBQcm9kdWN0cyAtLT5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtOCBjb2wtbGctOSBwLTAnIDogJ2NvbC1tZC04IHAtMCdcIj5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cInByb2R1Y3RzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIih0aGlzLm5hbWUgIT0gJycgJiYgdGhpcy5zZWxlY3RlZENhdGVnb3J5ICE9ICdBbGwnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCJ7e3RoaXMubmFtZX19XCIgYW5kIENhdGVnb3J5IFwie3t0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZX19XCIuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcHJpbWFyeVwiIEBjbGljaz1cInJlc2V0RmlsdGVyKClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1PlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0czwvdT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwidGhpcy5uYW1lICE9ICcnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBcInt7dGhpcy5uYW1lfX1cIi5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgQGNsaWNrPVwicmVzZXRGaWx0ZXIoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHU+UmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzPC91PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJ0aGlzLmNhdGVnb3J5ICE9ICdBbGwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBDYXRlZ29yeSBcInt7dGhpcy5zZWxlY3RlZENhdGVnb3J5Lm5hbWV9fVwiLlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIiBAY2xpY2s9XCJyZXNldEZpbHRlcigpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dT5SZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHM8L3U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5ObyBQcm9kdWN0cyBZZXQuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8cHJvZHVjdHMtbGlzdFxyXG4gICAgICAgICAgICB2LWJpbmQ6cHJvZHVjdHM9XCJwcm9kdWN0c1wiXHJcbiAgICAgICAgICAgIDpkaXNwbGF5PVwiZGlzcGxheVwiXHJcbiAgICAgICAgICAgIDpjdXN0b21lcl9yb2xlPVwidXNlci5jdXN0b21lcl9yb2xlXCJcclxuICAgICAgICAgID48L3Byb2R1Y3RzLWxpc3Q+XHJcblxyXG4gICAgICAgICAgPHByb2R1Y3RzLWdyaWRcclxuICAgICAgICAgICAgdi1iaW5kOnByb2R1Y3RzPVwicHJvZHVjdHNcIlxyXG4gICAgICAgICAgICA6ZGlzcGxheT1cImRpc3BsYXlcIlxyXG4gICAgICAgICAgICByZWY9XCJwcm9kdWN0c2dyaWRcIlxyXG4gICAgICAgICAgICA6Y3VzdG9tZXJfcm9sZT1cInVzZXIuY3VzdG9tZXJfcm9sZVwiXHJcbiAgICAgICAgICA+PC9wcm9kdWN0cy1ncmlkPlxyXG5cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8cGFnaW5hdGlvblxyXG4gICAgICAgICAgICA6ZGF0YT1cImxhcmF2ZWxEYXRhXCJcclxuICAgICAgICAgICAgOmxpbWl0PVwiNVwiXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCJcclxuICAgICAgICAgID48L3BhZ2luYXRpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gT3JkZXIgU1VNTUFSWSAtLT5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtNCBjb2wtbGctMyBwLTAnIDogJ2NvbC1tZC00IHAtMCdcIj5cclxuICAgICAgICAgIDxwcm9kdWN0cy1wYWdlLW9yZGVyLXN1bW1hcnlcclxuICAgICAgICAgICAgOmNhcnQ9XCJjYXJ0XCJcclxuICAgICAgICAgICAgOmN1c3RvbWVyX3JvbGU9XCJ1c2VyLmN1c3RvbWVyX3JvbGVcIlxyXG4gICAgICAgICAgICA6bWluaW11bT1cIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIlxyXG4gICAgICAgICAgICA6Z3Vlc3Q9XCJndWVzdFwiXHJcbiAgICAgICAgICA+PC9wcm9kdWN0cy1wYWdlLW9yZGVyLXN1bW1hcnk+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiA6Y2xhc3M9XCJkaXNwbGF5ID09ICdib3gnPyAnY29udGFpbmVyLWZsdWlkIGNvbi1mLW1hcmdpbic6J2NvbnRhaW5lcidcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cclxuICAgICAgICAgIDwhLS0gPHByb2R1Y3RzLXBhZ2UtbW9kYWwgOmd1ZXN0PVwiZ3Vlc3RcIiByZWY9XCJwcm9kdWN0bW9kYWxcIj48L3Byb2R1Y3RzLXBhZ2UtbW9kYWw+IC0tPlxyXG4gICAgICAgICAgPFByb2R1Y3RzUGFnZU1vZGFsIDpndWVzdD1cImd1ZXN0XCIgcmVmPVwicHJvZHVjdG1vZGFsXCIgPjwvUHJvZHVjdHNQYWdlTW9kYWw+XHJcbiAgICAgICAgICA8UHJvZHVjdHNNb2RhbEVkaXQgOmd1ZXN0PVwiZ3Vlc3RcIiByZWY9XCJwcm9kdWN0bW9kYWxFZGl0XCIgPjwvUHJvZHVjdHNNb2RhbEVkaXQ+XHJcbiAgICAgICAgICA8cHJvZHVjdHMtd2FybmluZy1tb2RhbCA6bWluaW11bT1cIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIj48L3Byb2R1Y3RzLXdhcm5pbmctbW9kYWw+XHJcbiAgICAgICAgICA8IS0tIDxPcmdhbml6YXRpb25Nb2RhbCA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvT3JnYW5pemF0aW9uTW9kYWw+IC0tPlxyXG4gICAgICAgICAgPEVudGVyT3B0aW9uQ01vZGFsIDpndWVzdD1cImd1ZXN0XCIgOnVzZXI9XCJ1c2VyXCI+PC9FbnRlck9wdGlvbkNNb2RhbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5jb25zdCBwcm9kT3JkZXJTdW1tYXJ5ID0gKCkgPT5cclxuICBpbXBvcnQoXHJcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZE9yZGVyU3VtbWFyeU5ld1wiICovIFwiLi9vcmRlclN1bW1hcnkudnVlXCJcclxuICApO1xyXG4vLyBjb25zdCBwcm9kTW9kYWwgPSAoKSA9PlxyXG4vLyAgIGltcG9ydChcclxuLy8gICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kTW9kYWxOZXdcIiAqLyBcIi4vcHJvZHVjdHNNb2RhbC52dWVcIlxyXG4vLyAgICk7XHJcbmNvbnN0IHByb2RXYXJuaW5nTW9kYWwgPSAoKSA9PlxyXG4gIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kV2FybmluZ01vZGFsXCIgKi8gXCIuL3dob2xlc2FsZXJXYXJuaW5nTW9kYWwudnVlXCJcclxuICApO1xyXG5jb25zdCBwcm9kVXNlckJhbGFuY2VNb2JpbGUgPSAoKSA9PlxyXG4gIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kVXNlckJhbGFuY2VNb2JpbGVcIiAqLyBcIi4vdXNlckJhbGFuY2VNb2JpbGUudnVlXCJcclxuICApO1xyXG5jb25zdCBwcm9kVXNlckJhbGFuY2UgPSAoKSA9PlxyXG4gIGltcG9ydChcclxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kVXNlckJhbGFuY2VcIiAqLyBcIi4vdXNlckJhbGFuY2UudnVlXCJcclxuICApO1xyXG5jb25zdCBwcm9kbGlzdCA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL3Byb2RsaXN0XCIgKi8gXCIuL3Byb2R1Y3RzVmlld0xpc3QudnVlXCJcclxuICApO1xyXG5jb25zdCBwcm9kR3JpZCA9ICgpID0+XHJcbiAgaW1wb3J0KFxyXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL3Byb2RHcmlkXCIgKi8gXCIuL3Byb2R1Y3RzVmlld0dyaWQudnVlXCJcclxuICApO1xyXG5cclxuLy8gaW1wb3J0IE9yZ2FuaXphdGlvbk1vZGFsIGZyb20gXCIuL29yZ2FuaXphdGlvbi1tb2RhbC9pbmRleFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgJ3Byb2R1Y3RzLXBhZ2Utb3JkZXItc3VtbWFyeSc6IHByb2RPcmRlclN1bW1hcnksXHJcbiAgICAvLyAncHJvZHVjdHMtcGFnZS1tb2RhbCc6IHByb2RNb2RhbCxcclxuICAgICdwcm9kdWN0cy13YXJuaW5nLW1vZGFsJzogcHJvZFdhcm5pbmdNb2RhbCxcclxuICAgICdwcm9kdWN0cy11c2VyLWJhbGFuY2UtbW9iaWxlJzogcHJvZFVzZXJCYWxhbmNlTW9iaWxlLFxyXG4gICAgJ3Byb2R1Y3RzLXVzZXItYmFsYW5jZSc6IHByb2RVc2VyQmFsYW5jZSxcclxuICAgICdwcm9kdWN0cy1saXN0JzogcHJvZGxpc3QsXHJcbiAgICAncHJvZHVjdHMtZ3JpZCc6IHByb2RHcmlkLFxyXG4gICAgLy8gT3JnYW5pemF0aW9uTW9kYWwsXHJcbiAgfSxcclxuICAvLyAgIHByb3BzOiB7XHJcbiAgLy8gICAgIHByb3Bwcm9kdWN0czogQXJyYXksXHJcbiAgLy8gICAgIHByb3BjYXRlZ29yaWVzOiBBcnJheVxyXG4gIC8vICAgfSxcclxuICBwcm9wczogW1xyXG4gICAgXCJwcm9wcHJvZHVjdHNcIixcclxuICAgIFwicHJvcGNhdGVnb3JpZXNcIixcclxuICAgIFwiZ3Vlc3RcIixcclxuICAgIFwidXNlclwiLFxyXG4gICAgXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXHJcbiAgXSxcclxuXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHNlYXJjaDogXCJcIixcclxuICAgICAgZGlzcGxheTogXCJib3hcIixcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBjYXJ0OiBbXSxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIHNlbGVjdGVkQ2F0ZWdvcnk6IFwiQWxsXCIsXHJcbiAgICAgIGltYWdlX3NhbXBsZTogXCIvaW1nL3N1bmZhcm1hY3kvcHJvZHVjdHMvR3JvdXAxNy5wbmdcIixcclxuICAgICAgc2VhcmNoZWRQcm9kdWN0czogW10sXHJcbiAgICAgIGxhcmF2ZWxEYXRhOiB7fSxcclxuICAgICAgY2F0ZWdvcnk6IFwiQWxsXCIsXHJcbiAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgIGJ0bjogXCJzZWFyY2hcIixcclxuICAgICAgb3JnX2lkOm51bGwsXHJcbiAgICAgIG9yZ19uYW1lOm51bGwsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIC8vIHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICB0aGlzLmdldFJlc3VsdHMoKTtcclxuICAgIGxldCBjYXRlZ29yaWVzID0gdGhpcy5wcm9wY2F0ZWdvcmllcztcclxuICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgLy8gICAkKFwiI2d1ZXN0U2VsZWN0aW5nT3JnYW5pemF0aW9uTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgLy8gJChcIiNhZGRUb0NhcnRNb2RhbFwiKS5vbihcInNob3duLmJzLm1vZGFsXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIC8vICAgJChcImJvZHkubW9kYWwtb3BlblwiKS5yZW1vdmVBdHRyKFwic3R5bGVcIik7XHJcbiAgICAvLyAgICQoXCJzdGlja3ktdG9wXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcclxuICAgIC8vIH0pO1xyXG4gIH0sXHJcblxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNlYXJjaEJhckNoYW5nZSgpIHtcclxuICAgICAgdGhpcy5idG4gPSBcInNlYXJjaFwiO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuYnRuKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVTZWFyY2hGaWx0ZXIoKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICAgIHRoaXMuc2VhcmNoID0gXCJcIjtcclxuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XHJcbiAgICAgIHRoaXMuYnRuID0gXCJzZWFyY2hcIjtcclxuICAgIH0sXHJcbiAgICByZW1vdmVDYXRlZ29yeUZpbHRlcigpIHtcclxuICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSA9IFwiQWxsXCI7XHJcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xyXG4gICAgfSxcclxuICAgIHJlc2V0RmlsdGVyKCkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgICB0aGlzLmNhdGVnb3J5ID0gXCJBbGxcIjtcclxuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gXCJBbGxcIjtcclxuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XHJcbiAgICB9LFxyXG4gICAgY2F0ZWdvcnlDaGFuZ2UoZGF0YSkge1xyXG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgIGlmIChkYXRhID09PSBcIkFsbFwiKSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuaWQ7XHJcbiAgICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0UmVzdWx0cyhwYWdlID0gMSkge1xyXG4gICAgICBsZXQgcGFyYW07XHJcbiAgICAgIGlmICh0aGlzLm5hbWUgIT0gXCJcIiAmJiB0aGlzLmNhdGVnb3J5ICE9IFwiQWxsXCIpIHtcclxuICAgICAgICBwYXJhbSA9IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm5hbWUgIT0gXCJcIikge1xyXG4gICAgICAgIHBhcmFtID0ge1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmNhdGVnb3J5ICE9IFwiQWxsXCIpIHtcclxuICAgICAgICBwYXJhbSA9IHtcclxuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxyXG4gICAgICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJhbSA9IHtcclxuICAgICAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgICAgICBvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgYXhpb3Moe1xyXG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICB1cmw6IFwiL2RhdGEvcHJvZHVjdHNcIixcclxuICAgICAgICBwYXJhbXM6IHBhcmFtLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmxhcmF2ZWxEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RzID0gcmVzLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgLy8gcHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIC8vICAgcHJvZHVjdC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgcHJvZHVjdC5xdHkgPSAxO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cztcclxuICAgICAgICBpZih0aGlzLmd1ZXN0ID09IDEpe1xyXG4gICAgICAgICAgICAgdGhpcy5nZXRDYXJ0KHByb2R1Y3RzKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ295ZWUnKTtcclxuICAgICAgICAgICAgIHRoaXMuZ2V0Q2FydDIocHJvZHVjdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDYXJ0KGRhdGEpIHtcclxuICAgICAgaWYgKHRoaXMuaWZDYXJ0RXhwaXJlZCgpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHBpcmVkXCIpO1xyXG4gICAgICAgIHRoaXMuY2FydCA9IFtdO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZXhwaXJlZFwiKTtcclxuICAgICAgICBsZXQgbGFzdGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSB8fCBcIm51bGxcIikgfHwgW107XHJcblxyXG4gICAgICAgIHRoaXMuY2FydCA9IGxhc3RjYXJ0O1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNhcnQuZm9yRWFjaCgoY2FydCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PSBjYXJ0LmlkKSB7XHJcbiAgICAgICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRDYXJ0MihkYXRhKSB7XHJcbiAgICAgICAgLy8gbGV0IGxhc3RjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgfHwgXCJudWxsXCIpIHx8IFtdO1xyXG4gICAgICAgIC8vIHRoaXMuY2FydCA9IGxhc3RjYXJ0O1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcclxuICAgICAgICAvLyBkYXRhLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAvLyAgIHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChwcm9kdWN0LmlkID09IGNhcnQuaWQpIHtcclxuICAgICAgICAvLyAgICAgICBwcm9kdWN0LnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9kdWN0cyA9IGRhdGE7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAvY2FydC9nZXRVc2VyQ2FydERldGFpbHMvJHt0aGlzLnVzZXIuaWR9LyR7dGhpcy5vcmdfaWR9YClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGFzdGNhcnQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5jYXJ0ID0gW107XHJcbiAgICAgICAgICAgIGxhc3RjYXJ0LmZvckVhY2goY2FydCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0LmF0cl9kZXRhaWxzLnF0eSA9IGNhcnQucXR5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0LnB1c2goY2FydC5hdHJfZGV0YWlscyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT0gY2FydC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIHVwZGF0ZVByb2R1Y3RQcmljZShwcm9kdWN0KSB7XHJcbiAgICAgIGxldCBjdXN0b21lcl9yb2xlID0gdGhpcy51c2VyLmN1c3RvbWVyX3JvbGU7XHJcbiAgICAgIGxldCBwcmljZSA9XHJcbiAgICAgICAgY3VzdG9tZXJfcm9sZSA9PSAyXHJcbiAgICAgICAgICA/IHByb2R1Y3QubWVtYmVyX3ByaWNlXHJcbiAgICAgICAgICA6IGN1c3RvbWVyX3JvbGUgPT0gM1xyXG4gICAgICAgICAgPyBwcm9kdWN0Lndob2xlc2FsZV9wcmljZVxyXG4gICAgICAgICAgOiBwcm9kdWN0LnByaWNlO1xyXG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKHByaWNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VhcmNoUHJvZHVjdCgpIHtcclxuICAgICAgTG9hZGluZ092ZXJsYXkoKTtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgICB0aGlzLmJ0biA9IFwiY2xlYXJcIjtcclxuICAgICAgdGhpcy5uYW1lID0gdGhpcy5zZWFyY2g7XHJcbiAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIkFsbFwiO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBcIkFsbFwiO1xyXG4gICAgICB0aGlzLmdldFJlc3VsdHMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd0FkZFRvQ2FydE1vZGFsKGRhdGEpIHtcclxuICAgICAgdGhpcy4kcmVmcy5wcm9kdWN0bW9kYWwuc2hvd01vZGFsKGRhdGEsdGhpcy5ndWVzdCx0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZSk7XHJcbiAgICAvLyAgICQoXCIjYWRkVG9DYXJ0TW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QWRkVG9DYXJ0TW9kYWxFZGl0KGRhdGEpIHtcclxuICAgICAgdGhpcy4kcmVmcy5wcm9kdWN0bW9kYWxFZGl0LnNob3dNb2RhbChkYXRhLHRoaXMuZ3Vlc3QsdGhpcy51c2VyLmN1c3RvbWVyX3JvbGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXREaXNwbGF5KGRhdGEpIHtcclxuICAgICAgdGhpcy5kaXNwbGF5ID0gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgcmVtb3ZlSXRlbUluQ2FydChkYXRhKSB7XHJcblxyXG4gICAgICBpZih0aGlzLmd1ZXN0ID09IDEpe1xyXG4gICAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwcm9kdWN0LnF0eSA9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhcnQuc3BsaWNlKFxyXG4gICAgICAgICAgICB0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLiRldmVudHMuZmlyZShcInVwZGF0ZUNhcnRCYWRnZVwiLCBcInVwZGF0ZSBjYXJ0XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApOyAvLyAxIGRheSBtaWxpc2Vjb25kc1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9jYXJ0L3JlbW92ZVByb2R1Y3RPZlVzZXJDYXJ0LyR7dGhpcy51c2VyLmlkfS8ke3RoaXMub3JnX2lkfS8ke2RhdGEuaWR9YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2UzXCIsIHJlcy5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdC5pZCA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnF0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnQuc3BsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXJ0LmZpbmRJbmRleChmdW5jdGlvbiAoaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICB1cGRhdGVQcm9kdWN0RGV0YWlscyhwcm9kdWN0KSB7XHJcbiAgICAgIGlmKHRoaXMuZ3Vlc3QgPT0gMCl7XHJcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0ICAgIHZhciByYXdEYXRhID0ge1xyXG5cdFx0ICAgIFx0cHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxyXG5cdFx0ICAgIFx0dXNlcl9pZDogdGhpcy51c2VyLmlkLFxyXG5cdFx0ICAgIFx0b3JnX2lkOiB0aGlzLm9yZ19pZCxcclxuXHRcdCAgICB9O1xyXG5cdFx0ICAgIGF4aW9zXHJcblx0XHQgICAgXHQucG9zdChcIi9jYXJ0L3VwZGF0ZVByb2R1Y3REZXRhaWxzXCIsIHJhd0RhdGEpXHJcblx0XHQgICAgXHQudGhlbigocmVzKSA9PiB7XHJcblx0XHQgICAgXHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHQgICAgXHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0ICAgIFx0fSlcclxuXHRcdCAgICBcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHQgICAgXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdCAgICBcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHQgICAgXHRcdGFsZXJ0KFxyXG5cdFx0ICAgIFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBDb250YXQgU3VwcG9ydC4gXCIgKyBlcnJcclxuXHRcdCAgICBcdFx0KTtcclxuXHRcdCAgICBcdH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAgdXBkYXRlUHJvZHVjdFF1YW50aXR5KHByb2R1Y3QpIHtcclxuICAgICAgaWYodGhpcy5ndWVzdCA9PSAwKXtcclxuICAgICAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcblx0XHQgICAgdmFyIHJhd0RhdGEgPSB7XHJcblx0XHQgICAgXHRwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXHJcblx0XHQgICAgXHR1c2VyX2lkOiB0aGlzLnVzZXIuaWQsXHJcblx0XHQgICAgXHRvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG5cdFx0ICAgIH07XHJcblx0XHQgICAgYXhpb3NcclxuXHRcdCAgICBcdC5wb3N0KFwiL2NhcnQvdXBkYXRlUHJvZHVjdERldGFpbHNcIiwgcmF3RGF0YSlcclxuXHRcdCAgICBcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdCAgICBcdFx0Y29uc29sZS5sb2cocmVzKTtcclxuXHRcdCAgICBcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHQgICAgXHR9KVxyXG5cdFx0ICAgIFx0LmNhdGNoKChlcnIpID0+IHtcclxuXHRcdCAgICBcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0ICAgIFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdCAgICBcdFx0YWxlcnQoXHJcblx0XHQgICAgXHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxyXG5cdFx0ICAgIFx0XHQpO1xyXG5cdFx0ICAgIFx0fSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG5cclxuICAgIGFkZFF0eShwcm9kdWN0KSB7XHJcblx0XHRcdFx0aWYgKHByb2R1Y3QucXR5IDwgcHJvZHVjdC5tYXhvcmRlciArIDUwKSB7XHJcblx0XHRcdFx0XHRwcm9kdWN0LnF0eSsrO1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheSgpO1xyXG5cdFx0XHRcdFx0XHR2YXIgcmF3RGF0YSA9IHtcclxuXHRcdFx0XHRcdFx0XHRwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXHJcblx0XHRcdFx0XHRcdFx0dXNlcl9pZDogdGhpcy51c2VyLmlkLFxyXG5cdFx0XHRcdFx0XHRcdG9yZ19pZDogdGhpcy5vcmdfaWQsXHJcblx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdGF4aW9zXHJcblx0XHRcdFx0XHRcdFx0LnBvc3QoXCIvY2FydC91cGRhdGVRdWFudGl0eVwiLCByYXdEYXRhKVxyXG5cdFx0XHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdC5jYXRjaCgoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWN0LnF0eS0tO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xyXG5cdFx0XHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRhbGVydChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxyXG5cdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1YlF0eShwcm9kdWN0KSB7XHJcblx0XHRcdFx0aWYgKHByb2R1Y3QucXR5ID4gMSkge1xyXG5cdFx0XHRcdFx0cHJvZHVjdC5xdHktLTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcclxuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcclxuXHRcdFx0XHRcdFx0dmFyIHJhd0RhdGEgPSB7XHJcblx0XHRcdFx0XHRcdFx0cHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxyXG5cdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcclxuXHRcdFx0XHRcdFx0XHRvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG5cdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRheGlvc1xyXG5cdFx0XHRcdFx0XHRcdC5wb3N0KFwiL2NhcnQvdXBkYXRlUXVhbnRpdHlcIiwgcmF3RGF0YSlcclxuXHRcdFx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvZHVjdC5xdHkrKztcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0YWxlcnQoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBDb250YXQgU3VwcG9ydC4gXCIgKyBlcnJcclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGFkZHRvQ2FydChkYXRhLCBzZWxlY3RlZF9wcm9kdWN0cywgb3JpZ2luYWwpIHtcclxuICAgICAgZGF0YS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ3Vlc3QgPT0gMSl7XHJcbiAgICAgICAgICBpZiAoZGF0YS5zZWxlY3RlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5jYXJ0LnB1c2goZGF0YSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FydC5zcGxpY2UoXHJcbiAgICAgICAgICAgIHRoaXMuY2FydC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpLmlkID09PSBkYXRhLmlkO1xyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgMVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTsgLy8gMSBkYXkgbWlsaXNlY29uZHNcclxuICAgICAgICAvLyAgIHRoaXMuc2V0Q2FydEV4cGlyeSg0MDAwMCk7XHJcbiAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2VcIiwgXCJ1cGRhdGUgY2FydFwiKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBjb25zdCBuZXdkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICBsZXQgbmV3ZGF0YTIgPSAgSlNPTi5wYXJzZShuZXdkYXRhKTtcclxuICAgICAgICAgIGlmKGRhdGEuaXNfYnVuZGxlID09IDEpe1xyXG4gICAgICAgICAgICAgIG5ld2RhdGEyLnNlbGVjdGVkX3Byb2R1Y3RzID0gc2VsZWN0ZWRfcHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgbmV3ZGF0YTIuYXRyX29yZ2luYWxfc2VsZWN0ZWRfcHJvZHVjdHMgPSBvcmlnaW5hbDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhciByYXdEYXRhID0ge1xyXG4gICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcclxuICAgICAgICAgICAgICBvcmdfaWQ6IHRoaXMub3JnX2lkLFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RfaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgcXR5OiBkYXRhLnF0eSxcclxuICAgICAgICAgICAgICBwcmljZTogZGF0YS5wcmljZSxcclxuICAgICAgICAgICAgICBwcm9kdWN0X2RldGFpbHM6IG5ld2RhdGEyLFxyXG4gICAgICAgICAgICAgIG9yaWdpbmFsX3NlbGVjdGVkX3Byb2R1Y3RzOiBvcmlnaW5hbCxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIExvYWRpbmdPdmVybGF5KCk7XHJcblxyXG4gICAgICAgICAgYXhpb3MucG9zdCgnL2NhcnQvYWRkVG9DYXJ0JyxyYXdEYXRhKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICB0aGlzLiRldmVudHMuZmlyZShcInVwZGF0ZUNhcnRCYWRnZTNcIiwgcmVzLmRhdGEpO1xyXG4gICAgICAgICAgICAgdGhpcy5jYXJ0LnB1c2gobmV3ZGF0YTIpO1xyXG4gICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xyXG4gICAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiAnK2Vycik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0Q2FydEV4cGlyeSh0dGwpIHtcclxuICAgICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IGV4cGlyeSA9IG5vdy5nZXRUaW1lKCkgKyB0dGw7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcclxuICAgIH0sXHJcblxyXG4gICAgaWZDYXJ0RXhwaXJlZCgpIHtcclxuICAgICAgY29uc3QgaXRlbVN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydF9leHBpcnlcIik7XHJcbiAgICAgIGlmICghaXRlbVN0cikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGl0ZW1TdHIpO1xyXG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICBpZiAobm93LmdldFRpbWUoKSA+IGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVF0eShkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhLnNlbGVjdGVkID09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xyXG4gICAgICB0aGlzLnNldENhcnRFeHBpcnkoODY0MDAwMDApOyAvLyAxIGRheSBtaWxpc2Vjb25kc1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgZGlzcGxheU51bWJlcldpdGhDb21tYSh2YWx1ZSkge1xyXG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XHJcbiAgICAgIHZhciB3aXRoQ29tbWFzID0gTnVtYmVyKG4pLnRvTG9jYWxlU3RyaW5nKFwiZW5cIiwge1xyXG4gICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gd2l0aENvbW1hcztcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMDBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDU1cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDU2cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuLmNvbi1mLW1hcmdpbltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE3NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuLm1hcmdpbi1jb250ZW50LTJbZGF0YS12LTMxODdiZWYxXSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4ubWFyZ2luLWNvbnRlbnQtMltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxufVxcbi5maWx0ZXItYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXJbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA5M3B4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMHB4IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udCAuc2VhcmNoLWNhdFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtY2F0LWNvbnQgLnNlYXJjaC1jYXRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udCAjZGlzcGxheS1saXN0LmJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQ4JTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwbGF5LWxpc3QuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwYWx5LWdyaWQuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNDglO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5kaXNwbGF5LWNvbnQgI2Rpc3BhbHktZ3JpZC5idG5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hcmdpbi1jb250ZW50LTJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgc2VhcmNoLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbC1tZC04IGNvbC1sZy05XCIgOiBcImNvbC1tZC04XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaFByb2R1Y3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzgsIDQ2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiQmFja3NwYWNlXCIsIFwiRGVsZXRlXCIsIFwiRGVsXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaEJhckNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzczogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoQmFyQ2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG4gPT09IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBzZWFyY2gtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJidXR0b24tYWRkb24yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaFByb2R1Y3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG4tMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiYnV0dG9uLWFkZG9uMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVTZWFyY2hGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC05IGNvbC1zbS05IGNvbC05XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBzZWFyY2gtY2F0LWNvbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZENhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHNlYXJjaC1jYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRDYXRlZ29yeSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2F0ZWdvcnlDaGFuZ2UoX3ZtLnNlbGVjdGVkQ2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiLCBzZWxlY3RlZDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNob29zZSBDYXRlZ29yaWVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFsbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWxsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGl0ZW0uaWQsIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC0zIGNvbC1zbS0zIGNvbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93LXJldmVyc2UgZGlzcGxheS1jb250XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwiYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFja2dyb3VuZC1jb2xvcjojMzM5ZjI1OyBjb2xvcjp3aGl0ZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRpc3BhbHktZ3JpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREaXNwbGF5KFwiYm94XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkaXNwbGF5LWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0RGlzcGxheShcImxpc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGgtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxlZnQgbXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lICE9IFwiXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVNlYXJjaEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCJcXG4gICAgICAgICAgICAgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ICE9IFwiQWxsXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUNhdGVnb3J5RmlsdGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxuICAgICAgICAgICAgICBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiXFxuICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbC1tZC00IGNvbC1sZy0zXCIgOiBcImNvbC1tZC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5vcmdfbmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6XG4gICAgICAgICAgX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29udGFpbmVyLWZsdWlkIGNvbi1mLW1hcmdpblwiIDogXCJjb250YWluZXJcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiID8gXCJjb2wtbWQtOCBjb2wtbGctOSBwLTBcIiA6IFwiY29sLW1kLTggcC0wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5wcm9kdWN0cy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgIT0gXCJcIiAmJiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgIT0gXCJBbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBhbmQgQ2F0ZWdvcnkgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiLlxcbiAgICAgICAgICAgICAgICAgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RmlsdGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm5hbWUgIT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIi5cXG4gICAgICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5jYXRlZ29yeSAhPSBcIkFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxuICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBDYXRlZ29yeSBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIuXFxuICAgICAgICAgICAgICAgICAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXRGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJObyBQcm9kdWN0cyBZZXQuXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwcm9kdWN0cy1saXN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IF92bS5wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IF92bS5kaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJfcm9sZTogX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtZ3JpZFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3RzZ3JpZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0czogX3ZtLnByb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogX3ZtLmRpc3BsYXksXG4gICAgICAgICAgICAgICAgICBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmxhcmF2ZWxEYXRhLFxuICAgICAgICAgICAgICAgICAgbGltaXQ6IDUsXG4gICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgXCJwYWdpbmF0aW9uLWNoYW5nZS1wYWdlXCI6IF92bS5nZXRSZXN1bHRzIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29sLW1kLTQgY29sLWxnLTMgcC0wXCIgOiBcImNvbC1tZC00IHAtMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInByb2R1Y3RzLXBhZ2Utb3JkZXItc3VtbWFyeVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IF92bS5jYXJ0LFxuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJfcm9sZTogX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSxcbiAgICAgICAgICAgICAgICAgIG1pbmltdW06IF92bS53aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgZ3Vlc3Q6IF92bS5ndWVzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOlxuICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbnRhaW5lci1mbHVpZCBjb24tZi1tYXJnaW5cIiA6IFwiY29udGFpbmVyXCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJQcm9kdWN0c1BhZ2VNb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3Rtb2RhbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGd1ZXN0OiBfdm0uZ3Vlc3QgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJQcm9kdWN0c01vZGFsRWRpdFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3Rtb2RhbEVkaXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBndWVzdDogX3ZtLmd1ZXN0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtd2FybmluZy1tb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbWluaW11bTogX3ZtLndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJFbnRlck9wdGlvbkNNb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZ3Vlc3Q6IF92bS5ndWVzdCwgdXNlcjogX3ZtLnVzZXIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODdiZWYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzE4N2JlZjFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcZmlhY3JlXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMxODdiZWYxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMxODdiZWYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMxODdiZWYxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzE4N2JlZjEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzE4N2JlZjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==