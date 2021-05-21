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
      display: "list",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/ZjMyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT9lYzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2MxZTkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvcHJvZHVjdHMtcGFnZS9pbmRleC52dWU/NTMxNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZT84ODIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL3Byb2R1Y3RzLXBhZ2UvaW5kZXgudnVlP2UxOWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7O0FDcmZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQTBjLENBQWdCLDJiQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9mL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuQGltcG9ydCBcInJlc291cmNlcy9zYXNzL21peGluc1wiO1xuXG4uY29uLWYtbWFyZ2luIHtcbiAgLy8gbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAvLyAgIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcblxuICBwYWRkaW5nLXJpZ2h0OiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMDAwcHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTQ1NXB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNDU2cHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDc1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE3MDBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE4NTBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTY1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDE3NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTc1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB9XG5cbiAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAvLyBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuXG4ubWFyZ2luLWNvbnRlbnQtMiB7XG4gIG1hcmdpbi10b3A6IDNyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG4uZmlsdGVyLWJ0biB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgLy8gICBsaW5lLWhlaWdodDogMS41O1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiA5M3B4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgLy8gei1pbmRleDogMjtcbiAgICB6LWluZGV4OiA0O1xuICB9XG4gIC5zZWFyY2gtaW5wdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHggMHB4IDBweCAxMDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM5ZjI1O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIC5zZWFyY2gtYnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAwcHggMTAwcHggMHB4O1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5zZWFyY2gtYnRuLTIge1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMDBweCAxMDBweCAwcHg7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4gIH1cbiAgLnNlYXJjaC1jYXQtY29udCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICB9XG4gICAgLnNlYXJjaC1jYXQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzM5ZjI1O1xuICAgICAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZGlzcGxheS1jb250IHtcbiAgICAjZGlzcGxheS1saXN0LmJ0biB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0OCU7XG4gICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XG4gICAgICB9XG4gICAgfVxuICAgICNkaXNwYWx5LWdyaWQuYnRuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDQ4JTtcbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICB9XG4gIH1cbn1cbjwvc3R5bGU+XG5cblxuPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibWFyZ2luLWNvbnRlbnQtMlwiPlxuICAgIDwhLS0gPHByb2R1Y3RzLXVzZXItYmFsYW5jZS1tb2JpbGUgOmd1ZXN0PVwiZ3Vlc3RcIiA6dXNlcj1cInVzZXJcIj48L3Byb2R1Y3RzLXVzZXItYmFsYW5jZS1tb2JpbGU+IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgc2VhcmNoLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IDpjbGFzcz1cImRpc3BsYXkgPT0gJ2JveCc/ICdjb2wtbWQtOCBjb2wtbGctOScgOiAnY29sLW1kLTgnXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgIHYtb246a2V5dXAuZW50ZXI9XCJzZWFyY2hQcm9kdWN0KClcIlxuICAgICAgICAgICAgICAgICAgdi1vbjprZXl1cC5kZWxldGU9XCJzZWFyY2hCYXJDaGFuZ2UoKVwiXG4gICAgICAgICAgICAgICAgICBAa2V5cHJlc3M9XCJzZWFyY2hCYXJDaGFuZ2UoKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aGlzLmJ0biA9PT0gJ3NlYXJjaCdcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG5cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJidXR0b24tYWRkb24yXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VhcmNoUHJvZHVjdCgpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zZWFyY2hcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3Mgc2VhcmNoLWJ0bi0yXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInJlbW92ZVNlYXJjaEZpbHRlcigpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTkgY29sLXNtLTkgY29sLTlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2VhcmNoLWNhdC1jb250XCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VhcmNoLWNhdFwiXG4gICAgICAgICAgICAgICAgICB2LW1vZGVsPVwic2VsZWN0ZWRDYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICBAY2hhbmdlPVwiY2F0ZWdvcnlDaGFuZ2Uoc2VsZWN0ZWRDYXRlZ29yeSlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQgc2VsZWN0ZWQ+Q2hvb3NlIENhdGVnb3JpZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBbGxcIj5BbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJpdGVtIGluIGNhdGVnb3JpZXNcIiA6a2V5PVwiaXRlbS5pZFwiIDp2YWx1ZT1cIml0ZW1cIj57eyBpdGVtLm5hbWUgfX08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMyBjb2wtc20tMyBjb2wtM1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93LXJldmVyc2UgZGlzcGxheS1jb250XCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJkaXNwYWx5LWdyaWRcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0RGlzcGxheSgnYm94JylcIlxuICAgICAgICAgICAgICAgICAgOnN0eWxlPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2JhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7JyA6ICcnXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdGhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgaWQ9XCJkaXNwbGF5LWxpc3RcIlxuICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2V0RGlzcGxheSgnbGlzdCcpXCJcbiAgICAgICAgICAgICAgICAgIDpzdHlsZT1cImRpc3BsYXkgPT0gJ2xpc3QnPyAnYmFja2dyb3VuZC1jb2xvcjojMzM5ZjI1OyBjb2xvcjp3aGl0ZTsnIDogJydcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBtci0yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRoLWxpc3RcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtbGVmdCBtdC0xXCI+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwidGhpcy5uYW1lICE9ICcnXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJyZW1vdmVTZWFyY2hGaWx0ZXIoKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmlsdGVyLWJ0blwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBcInt7bmFtZX19XCJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRoaXMuc2VsZWN0ZWRDYXRlZ29yeSAhPSAnQWxsJ1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicmVtb3ZlQ2F0ZWdvcnlGaWx0ZXIoKVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gZmlsdGVyLWJ0blwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBcInt7c2VsZWN0ZWRDYXRlZ29yeS5uYW1lfX1cIlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2NvbC1tZC00IGNvbC1sZy0zJyA6ICdjb2wtbWQtNCdcIj5cbiAgICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LXN1Y2Nlc3NcIj57e29yZ19uYW1lfX08L2g2PlxuICAgICAgICAgIDwhLS0gPHByb2R1Y3RzLXVzZXItYmFsYW5jZSA6Z3Vlc3Q9XCJndWVzdFwiIDp1c2VyPVwidXNlclwiPjwvcHJvZHVjdHMtdXNlci1iYWxhbmNlPiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgOmNsYXNzPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2NvbnRhaW5lci1mbHVpZCBjb24tZi1tYXJnaW4nOidjb250YWluZXInXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDwhLS0gUHJvZHVjdHMgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2NvbC1tZC04IGNvbC1sZy05IHAtMCcgOiAnY29sLW1kLTggcC0wJ1wiPlxuICAgICAgICAgIDxkaXYgdi1pZj1cInByb2R1Y3RzLmxlbmd0aCA9PSAwXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtdC01XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCIodGhpcy5uYW1lICE9ICcnICYmIHRoaXMuc2VsZWN0ZWRDYXRlZ29yeSAhPSAnQWxsJylcIj5cbiAgICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBcInt7dGhpcy5uYW1lfX1cIiBhbmQgQ2F0ZWdvcnkgXCJ7e3RoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lfX1cIi5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtcHJpbWFyeVwiIEBjbGljaz1cInJlc2V0RmlsdGVyKClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dT5SZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHM8L3U+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cInRoaXMubmFtZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICBObyBQcm9kdWN0cyBGb3VuZCB3aXRoIFwie3t0aGlzLm5hbWV9fVwiLlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1wcmltYXJ5XCIgQGNsaWNrPVwicmVzZXRGaWx0ZXIoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx1PlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0czwvdT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwidGhpcy5jYXRlZ29yeSAhPSAnQWxsJ1wiPlxuICAgICAgICAgICAgICAgICAgICBObyBQcm9kdWN0cyBGb3VuZCB3aXRoIENhdGVnb3J5IFwie3t0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZX19XCIuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXByaW1hcnlcIiBAY2xpY2s9XCJyZXNldEZpbHRlcigpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHU+UmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzPC91PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+Tm8gUHJvZHVjdHMgWWV0LjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHByb2R1Y3RzLWxpc3RcbiAgICAgICAgICAgIHYtYmluZDpwcm9kdWN0cz1cInByb2R1Y3RzXCJcbiAgICAgICAgICAgIDpkaXNwbGF5PVwiZGlzcGxheVwiXG4gICAgICAgICAgICA6Y3VzdG9tZXJfcm9sZT1cInVzZXIuY3VzdG9tZXJfcm9sZVwiXG4gICAgICAgICAgPjwvcHJvZHVjdHMtbGlzdD5cblxuICAgICAgICAgIDxwcm9kdWN0cy1ncmlkXG4gICAgICAgICAgICB2LWJpbmQ6cHJvZHVjdHM9XCJwcm9kdWN0c1wiXG4gICAgICAgICAgICA6ZGlzcGxheT1cImRpc3BsYXlcIlxuICAgICAgICAgICAgcmVmPVwicHJvZHVjdHNncmlkXCJcbiAgICAgICAgICAgIDpjdXN0b21lcl9yb2xlPVwidXNlci5jdXN0b21lcl9yb2xlXCJcbiAgICAgICAgICA+PC9wcm9kdWN0cy1ncmlkPlxuXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgPHBhZ2luYXRpb25cbiAgICAgICAgICAgIDpkYXRhPVwibGFyYXZlbERhdGFcIlxuICAgICAgICAgICAgOmxpbWl0PVwiNVwiXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICAgICAgQHBhZ2luYXRpb24tY2hhbmdlLXBhZ2U9XCJnZXRSZXN1bHRzXCJcbiAgICAgICAgICA+PC9wYWdpbmF0aW9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8IS0tIE9yZGVyIFNVTU1BUlkgLS0+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2NvbC1tZC00IGNvbC1sZy0zIHAtMCcgOiAnY29sLW1kLTQgcC0wJ1wiPlxuICAgICAgICAgIDxwcm9kdWN0cy1wYWdlLW9yZGVyLXN1bW1hcnlcbiAgICAgICAgICAgIDpjYXJ0PVwiY2FydFwiXG4gICAgICAgICAgICA6Y3VzdG9tZXJfcm9sZT1cInVzZXIuY3VzdG9tZXJfcm9sZVwiXG4gICAgICAgICAgICA6bWluaW11bT1cIndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnRcIlxuICAgICAgICAgICAgOmd1ZXN0PVwiZ3Vlc3RcIlxuICAgICAgICAgID48L3Byb2R1Y3RzLXBhZ2Utb3JkZXItc3VtbWFyeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgOmNsYXNzPVwiZGlzcGxheSA9PSAnYm94Jz8gJ2NvbnRhaW5lci1mbHVpZCBjb24tZi1tYXJnaW4nOidjb250YWluZXInXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICA8IS0tIDxwcm9kdWN0cy1wYWdlLW1vZGFsIDpndWVzdD1cImd1ZXN0XCIgcmVmPVwicHJvZHVjdG1vZGFsXCI+PC9wcm9kdWN0cy1wYWdlLW1vZGFsPiAtLT5cbiAgICAgICAgICA8UHJvZHVjdHNQYWdlTW9kYWwgOmd1ZXN0PVwiZ3Vlc3RcIiByZWY9XCJwcm9kdWN0bW9kYWxcIiA+PC9Qcm9kdWN0c1BhZ2VNb2RhbD5cbiAgICAgICAgICA8UHJvZHVjdHNNb2RhbEVkaXQgOmd1ZXN0PVwiZ3Vlc3RcIiByZWY9XCJwcm9kdWN0bW9kYWxFZGl0XCIgPjwvUHJvZHVjdHNNb2RhbEVkaXQ+XG4gICAgICAgICAgPHByb2R1Y3RzLXdhcm5pbmctbW9kYWwgOm1pbmltdW09XCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCI+PC9wcm9kdWN0cy13YXJuaW5nLW1vZGFsPlxuICAgICAgICAgIDwhLS0gPE9yZ2FuaXphdGlvbk1vZGFsIDpndWVzdD1cImd1ZXN0XCIgOnVzZXI9XCJ1c2VyXCI+PC9Pcmdhbml6YXRpb25Nb2RhbD4gLS0+XG4gICAgICAgICAgPEVudGVyT3B0aW9uQ01vZGFsIDpndWVzdD1cImd1ZXN0XCIgOnVzZXI9XCJ1c2VyXCI+PC9FbnRlck9wdGlvbkNNb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5jb25zdCBwcm9kT3JkZXJTdW1tYXJ5ID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kT3JkZXJTdW1tYXJ5TmV3XCIgKi8gXCIuL29yZGVyU3VtbWFyeS52dWVcIlxuICApO1xuLy8gY29uc3QgcHJvZE1vZGFsID0gKCkgPT5cbi8vICAgaW1wb3J0KFxuLy8gICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kTW9kYWxOZXdcIiAqLyBcIi4vcHJvZHVjdHNNb2RhbC52dWVcIlxuLy8gICApO1xuY29uc3QgcHJvZFdhcm5pbmdNb2RhbCA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZFdhcm5pbmdNb2RhbFwiICovIFwiLi93aG9sZXNhbGVyV2FybmluZ01vZGFsLnZ1ZVwiXG4gICk7XG5jb25zdCBwcm9kVXNlckJhbGFuY2VNb2JpbGUgPSAoKSA9PlxuICBpbXBvcnQoXG4gICAgLyogd2VicGFja0NodW5rTmFtZTogXCJqcy9mL3Byb2RVc2VyQmFsYW5jZU1vYmlsZVwiICovIFwiLi91c2VyQmFsYW5jZU1vYmlsZS52dWVcIlxuICApO1xuY29uc3QgcHJvZFVzZXJCYWxhbmNlID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kVXNlckJhbGFuY2VcIiAqLyBcIi4vdXNlckJhbGFuY2UudnVlXCJcbiAgKTtcbmNvbnN0IHByb2RsaXN0ID0gKCkgPT5cbiAgaW1wb3J0KFxuICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwianMvZi9wcm9kbGlzdFwiICovIFwiLi9wcm9kdWN0c1ZpZXdMaXN0LnZ1ZVwiXG4gICk7XG5jb25zdCBwcm9kR3JpZCA9ICgpID0+XG4gIGltcG9ydChcbiAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImpzL2YvcHJvZEdyaWRcIiAqLyBcIi4vcHJvZHVjdHNWaWV3R3JpZC52dWVcIlxuICApO1xuXG4vLyBpbXBvcnQgT3JnYW5pemF0aW9uTW9kYWwgZnJvbSBcIi4vb3JnYW5pemF0aW9uLW1vZGFsL2luZGV4XCJcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb21wb25lbnRzOiB7XG4gICAgJ3Byb2R1Y3RzLXBhZ2Utb3JkZXItc3VtbWFyeSc6IHByb2RPcmRlclN1bW1hcnksXG4gICAgLy8gJ3Byb2R1Y3RzLXBhZ2UtbW9kYWwnOiBwcm9kTW9kYWwsXG4gICAgJ3Byb2R1Y3RzLXdhcm5pbmctbW9kYWwnOiBwcm9kV2FybmluZ01vZGFsLFxuICAgICdwcm9kdWN0cy11c2VyLWJhbGFuY2UtbW9iaWxlJzogcHJvZFVzZXJCYWxhbmNlTW9iaWxlLFxuICAgICdwcm9kdWN0cy11c2VyLWJhbGFuY2UnOiBwcm9kVXNlckJhbGFuY2UsXG4gICAgJ3Byb2R1Y3RzLWxpc3QnOiBwcm9kbGlzdCxcbiAgICAncHJvZHVjdHMtZ3JpZCc6IHByb2RHcmlkLFxuICAgIC8vIE9yZ2FuaXphdGlvbk1vZGFsLFxuICB9LFxuICAvLyAgIHByb3BzOiB7XG4gIC8vICAgICBwcm9wcHJvZHVjdHM6IEFycmF5LFxuICAvLyAgICAgcHJvcGNhdGVnb3JpZXM6IEFycmF5XG4gIC8vICAgfSxcbiAgcHJvcHM6IFtcbiAgICBcInByb3Bwcm9kdWN0c1wiLFxuICAgIFwicHJvcGNhdGVnb3JpZXNcIixcbiAgICBcImd1ZXN0XCIsXG4gICAgXCJ1c2VyXCIsXG4gICAgXCJ3aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50XCIsXG4gIF0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2VhcmNoOiBcIlwiLFxuICAgICAgZGlzcGxheTogXCJsaXN0XCIsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgICBjYXJ0OiBbXSxcbiAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgc2VsZWN0ZWRDYXRlZ29yeTogXCJBbGxcIixcbiAgICAgIGltYWdlX3NhbXBsZTogXCIvaW1nL3N1bmZhcm1hY3kvcHJvZHVjdHMvR3JvdXAxNy5wbmdcIixcbiAgICAgIHNlYXJjaGVkUHJvZHVjdHM6IFtdLFxuICAgICAgbGFyYXZlbERhdGE6IHt9LFxuICAgICAgY2F0ZWdvcnk6IFwiQWxsXCIsXG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgYnRuOiBcInNlYXJjaFwiLFxuICAgICAgb3JnX2lkOm51bGwsXG4gICAgICBvcmdfbmFtZTpudWxsLFxuICAgIH07XG4gIH0sXG4gIGNyZWF0ZWQoKSB7XG4gICAgLy8gdGhpcy5nZXRQcm9kdWN0cygpO1xuICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgbGV0IGNhdGVnb3JpZXMgPSB0aGlzLnByb3BjYXRlZ29yaWVzO1xuICAgIHRoaXMuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXM7XG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgLy8gICAkKFwiI2d1ZXN0U2VsZWN0aW5nT3JnYW5pemF0aW9uTW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIC8vICQoXCIjYWRkVG9DYXJ0TW9kYWxcIikub24oXCJzaG93bi5icy5tb2RhbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gICAkKFwiYm9keS5tb2RhbC1vcGVuXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAvLyAgICQoXCJzdGlja3ktdG9wXCIpLnJlbW92ZUF0dHIoXCJzdHlsZVwiKTtcbiAgICAvLyB9KTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgc2VhcmNoQmFyQ2hhbmdlKCkge1xuICAgICAgdGhpcy5idG4gPSBcInNlYXJjaFwiO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmJ0bik7XG4gICAgfSxcbiAgICByZW1vdmVTZWFyY2hGaWx0ZXIoKSB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5zZWFyY2ggPSBcIlwiO1xuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgICB0aGlzLmJ0biA9IFwic2VhcmNoXCI7XG4gICAgfSxcbiAgICByZW1vdmVDYXRlZ29yeUZpbHRlcigpIHtcbiAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ID0gXCJBbGxcIjtcbiAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIH0sXG4gICAgcmVzZXRGaWx0ZXIoKSB7XG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgfSxcbiAgICBjYXRlZ29yeUNoYW5nZShkYXRhKSB7XG4gICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgaWYgKGRhdGEgPT09IFwiQWxsXCIpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGRhdGEuaWQ7XG4gICAgICAgIHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRSZXN1bHRzKHBhZ2UgPSAxKSB7XG4gICAgICBsZXQgcGFyYW07XG4gICAgICBpZiAodGhpcy5uYW1lICE9IFwiXCIgJiYgdGhpcy5jYXRlZ29yeSAhPSBcIkFsbFwiKSB7XG4gICAgICAgIHBhcmFtID0ge1xuICAgICAgICAgIGNhdGVnb3J5OiB0aGlzLmNhdGVnb3J5LFxuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubmFtZSAhPSBcIlwiKSB7XG4gICAgICAgIHBhcmFtID0ge1xuICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY2F0ZWdvcnkgIT0gXCJBbGxcIikge1xuICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICBjYXRlZ29yeTogdGhpcy5jYXRlZ29yeSxcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbSA9IHtcbiAgICAgICAgICBwYWdlOiBwYWdlLFxuICAgICAgICAgIG9yZ19pZDogdGhpcy5vcmdfaWQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgdXJsOiBcIi9kYXRhL3Byb2R1Y3RzXCIsXG4gICAgICAgIHBhcmFtczogcGFyYW0sXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgdGhpcy5sYXJhdmVsRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICBsZXQgcHJvZHVjdHMgPSByZXMuZGF0YS5kYXRhO1xuXG4gICAgICAgIC8vIHByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgLy8gICBwcm9kdWN0LnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIC8vICAgcHJvZHVjdC5xdHkgPSAxO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygpO1xuICAgICAgICAvLyB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHM7XG4gICAgICAgIGlmKHRoaXMuZ3Vlc3QgPT0gMSl7XG4gICAgICAgICAgICAgdGhpcy5nZXRDYXJ0KHByb2R1Y3RzKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3llZScpO1xuICAgICAgICAgICAgIHRoaXMuZ2V0Q2FydDIocHJvZHVjdHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICB9KTtcbiAgICB9LFxuXG4gICAgZ2V0Q2FydChkYXRhKSB7XG4gICAgICBpZiAodGhpcy5pZkNhcnRFeHBpcmVkKCkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHBpcmVkXCIpO1xuICAgICAgICB0aGlzLmNhcnQgPSBbXTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBkYXRhO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub3QgZXhwaXJlZFwiKTtcbiAgICAgICAgbGV0IGxhc3RjYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikgfHwgXCJudWxsXCIpIHx8IFtdO1xuXG4gICAgICAgIHRoaXMuY2FydCA9IGxhc3RjYXJ0O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5jYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09IGNhcnQuaWQpIHtcbiAgICAgICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBkYXRhO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRDYXJ0MihkYXRhKSB7XG4gICAgICAgIC8vIGxldCBsYXN0Y2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpIHx8IFwibnVsbFwiKSB8fCBbXTtcbiAgICAgICAgLy8gdGhpcy5jYXJ0ID0gbGFzdGNhcnQ7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9iYWRnZVwiLCB0aGlzLmNhcnQubGVuZ3RoKTtcbiAgICAgICAgLy8gZGF0YS5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgIC8vICAgdGhpcy5jYXJ0LmZvckVhY2goKGNhcnQpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChwcm9kdWN0LmlkID09IGNhcnQuaWQpIHtcbiAgICAgICAgLy8gICAgICAgcHJvZHVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICAvLyB0aGlzLnByb2R1Y3RzID0gZGF0YTtcbiAgICAgICAgYXhpb3MuZ2V0KGAvY2FydC9nZXRVc2VyQ2FydERldGFpbHMvJHt0aGlzLnVzZXIuaWR9LyR7dGhpcy5vcmdfaWR9YClcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBsYXN0Y2FydCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5jYXJ0ID0gW107XG4gICAgICAgICAgICBsYXN0Y2FydC5mb3JFYWNoKGNhcnQgPT4ge1xuICAgICAgICAgICAgICAgIGNhcnQuYXRyX2RldGFpbHMucXR5ID0gY2FydC5xdHk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYXJ0LnB1c2goY2FydC5hdHJfZGV0YWlscyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydC5mb3JFYWNoKChjYXJ0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09IGNhcnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0cyA9IGRhdGE7XG4gICAgICAgIH0pXG5cbiAgICB9LFxuXG5cbiAgICB1cGRhdGVQcm9kdWN0UHJpY2UocHJvZHVjdCkge1xuICAgICAgbGV0IGN1c3RvbWVyX3JvbGUgPSB0aGlzLnVzZXIuY3VzdG9tZXJfcm9sZTtcbiAgICAgIGxldCBwcmljZSA9XG4gICAgICAgIGN1c3RvbWVyX3JvbGUgPT0gMlxuICAgICAgICAgID8gcHJvZHVjdC5tZW1iZXJfcHJpY2VcbiAgICAgICAgICA6IGN1c3RvbWVyX3JvbGUgPT0gM1xuICAgICAgICAgID8gcHJvZHVjdC53aG9sZXNhbGVfcHJpY2VcbiAgICAgICAgICA6IHByb2R1Y3QucHJpY2U7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwbGF5TnVtYmVyV2l0aENvbW1hKHByaWNlKTtcbiAgICB9LFxuXG4gICAgc2VhcmNoUHJvZHVjdCgpIHtcbiAgICAgIExvYWRpbmdPdmVybGF5KCk7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB0aGlzLmJ0biA9IFwiY2xlYXJcIjtcbiAgICAgIHRoaXMubmFtZSA9IHRoaXMuc2VhcmNoO1xuICAgICAgdGhpcy5jYXRlZ29yeSA9IFwiQWxsXCI7XG4gICAgICB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgPSBcIkFsbFwiO1xuICAgICAgdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgfSxcblxuICAgIHNob3dBZGRUb0NhcnRNb2RhbChkYXRhKSB7XG4gICAgICB0aGlzLiRyZWZzLnByb2R1Y3Rtb2RhbC5zaG93TW9kYWwoZGF0YSx0aGlzLmd1ZXN0LHRoaXMudXNlci5jdXN0b21lcl9yb2xlKTtcbiAgICAvLyAgICQoXCIjYWRkVG9DYXJ0TW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xuICAgIH0sXG5cbiAgICBzaG93QWRkVG9DYXJ0TW9kYWxFZGl0KGRhdGEpIHtcbiAgICAgIHRoaXMuJHJlZnMucHJvZHVjdG1vZGFsRWRpdC5zaG93TW9kYWwoZGF0YSx0aGlzLmd1ZXN0LHRoaXMudXNlci5jdXN0b21lcl9yb2xlKTtcbiAgICB9LFxuXG4gICAgc2V0RGlzcGxheShkYXRhKSB7XG4gICAgICB0aGlzLmRpc3BsYXkgPSBkYXRhO1xuICAgIH0sXG5cbiAgICByZW1vdmVJdGVtSW5DYXJ0KGRhdGEpIHtcblxuICAgICAgaWYodGhpcy5ndWVzdCA9PSAxKXtcbiAgICAgICAgICB0aGlzLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LmlkID09IGRhdGEuaWQpIHtcbiAgICAgICAgICAgIHByb2R1Y3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHByb2R1Y3QucXR5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2FydC5zcGxpY2UoXG4gICAgICAgICAgICB0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICByZXR1cm4gaS5pZCA9PT0gZGF0YS5pZDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMVxuICAgICAgICApO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2VcIiwgXCJ1cGRhdGUgY2FydFwiKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7IC8vIDEgZGF5IG1pbGlzZWNvbmRzXG4gICAgICB9ZWxzZXtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuICAgICAgICAgICAgYXhpb3MucG9zdChgL2NhcnQvcmVtb3ZlUHJvZHVjdE9mVXNlckNhcnQvJHt0aGlzLnVzZXIuaWR9LyR7dGhpcy5vcmdfaWR9LyR7ZGF0YS5pZH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGV2ZW50cy5maXJlKFwidXBkYXRlQ2FydEJhZGdlM1wiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3QuaWQgPT0gZGF0YS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3Quc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnF0eSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhcnQuc3BsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FydC5maW5kSW5kZXgoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5pZCA9PT0gZGF0YS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIExvYWRpbmdPdmVybGF5SGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgIHVwZGF0ZVByb2R1Y3REZXRhaWxzKHByb2R1Y3QpIHtcbiAgICAgIGlmKHRoaXMuZ3Vlc3QgPT0gMCl7XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblx0XHQgICAgdmFyIHJhd0RhdGEgPSB7XG5cdFx0ICAgIFx0cHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxuXHRcdCAgICBcdHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcblx0XHQgICAgXHRvcmdfaWQ6IHRoaXMub3JnX2lkLFxuXHRcdCAgICB9O1xuXHRcdCAgICBheGlvc1xuXHRcdCAgICBcdC5wb3N0KFwiL2NhcnQvdXBkYXRlUHJvZHVjdERldGFpbHNcIiwgcmF3RGF0YSlcblx0XHQgICAgXHQudGhlbigocmVzKSA9PiB7XG5cdFx0ICAgIFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdCAgICBcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XG5cdFx0ICAgIFx0fSlcblx0XHQgICAgXHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdCAgICBcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdCAgICBcdFx0TG9hZGluZ092ZXJsYXlIaWRlKCk7XG5cdFx0ICAgIFx0XHRhbGVydChcblx0XHQgICAgXHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxuXHRcdCAgICBcdFx0KTtcblx0XHQgICAgXHR9KTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgICB1cGRhdGVQcm9kdWN0UXVhbnRpdHkocHJvZHVjdCkge1xuICAgICAgaWYodGhpcy5ndWVzdCA9PSAwKXtcbiAgICAgICAgICBMb2FkaW5nT3ZlcmxheSgpO1xuXHRcdCAgICB2YXIgcmF3RGF0YSA9IHtcblx0XHQgICAgXHRwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXG5cdFx0ICAgIFx0dXNlcl9pZDogdGhpcy51c2VyLmlkLFxuXHRcdCAgICBcdG9yZ19pZDogdGhpcy5vcmdfaWQsXG5cdFx0ICAgIH07XG5cdFx0ICAgIGF4aW9zXG5cdFx0ICAgIFx0LnBvc3QoXCIvY2FydC91cGRhdGVQcm9kdWN0RGV0YWlsc1wiLCByYXdEYXRhKVxuXHRcdCAgICBcdC50aGVuKChyZXMpID0+IHtcblx0XHQgICAgXHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0ICAgIFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcblx0XHQgICAgXHR9KVxuXHRcdCAgICBcdC5jYXRjaCgoZXJyKSA9PiB7XG5cdFx0ICAgIFx0XHRjb25zb2xlLmVycm9yKGVycik7XG5cdFx0ICAgIFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcblx0XHQgICAgXHRcdGFsZXJ0KFxuXHRcdCAgICBcdFx0XHRcIlNvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuIFwiICsgZXJyXG5cdFx0ICAgIFx0XHQpO1xuXHRcdCAgICBcdH0pO1xuICAgICAgfVxuICAgIH0sXG5cblxuICAgIGFkZFF0eShwcm9kdWN0KSB7XG5cdFx0XHRcdGlmIChwcm9kdWN0LnF0eSA8IHByb2R1Y3QubWF4b3JkZXIgKyA1MCkge1xuXHRcdFx0XHRcdHByb2R1Y3QucXR5Kys7XG5cdFx0XHRcdFx0aWYgKHRoaXMuZ3Vlc3QgPT0gMSkge1xuXHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0TG9hZGluZ092ZXJsYXkoKTtcblx0XHRcdFx0XHRcdHZhciByYXdEYXRhID0ge1xuXHRcdFx0XHRcdFx0XHRwcm9kdWN0X2RldGFpbHM6IHByb2R1Y3QsXG5cdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcblx0XHRcdFx0XHRcdFx0b3JnX2lkOiB0aGlzLm9yZ19pZCxcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRheGlvc1xuXHRcdFx0XHRcdFx0XHQucG9zdChcIi9jYXJ0L3VwZGF0ZVF1YW50aXR5XCIsIHJhd0RhdGEpXG5cdFx0XHRcdFx0XHRcdC50aGVuKChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHByb2R1Y3QucXR5LS07XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5SGlkZSgpO1xuXHRcdFx0XHRcdFx0XHRcdGFsZXJ0KFxuXHRcdFx0XHRcdFx0XHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyEgUGxlYXNlIENvbnRhdCBTdXBwb3J0LiBcIiArIGVyclxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHN1YlF0eShwcm9kdWN0KSB7XG5cdFx0XHRcdGlmIChwcm9kdWN0LnF0eSA+IDEpIHtcblx0XHRcdFx0XHRwcm9kdWN0LnF0eS0tO1xuXHRcdFx0XHRcdGlmICh0aGlzLmd1ZXN0ID09IDEpIHtcblx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcblx0XHRcdFx0XHRcdHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdExvYWRpbmdPdmVybGF5KCk7XG5cdFx0XHRcdFx0XHR2YXIgcmF3RGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0cHJvZHVjdF9kZXRhaWxzOiBwcm9kdWN0LFxuXHRcdFx0XHRcdFx0XHR1c2VyX2lkOiB0aGlzLnVzZXIuaWQsXG5cdFx0XHRcdFx0XHRcdG9yZ19pZDogdGhpcy5vcmdfaWQsXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0YXhpb3Ncblx0XHRcdFx0XHRcdFx0LnBvc3QoXCIvY2FydC91cGRhdGVRdWFudGl0eVwiLCByYXdEYXRhKVxuXHRcdFx0XHRcdFx0XHQudGhlbigocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRwcm9kdWN0LnF0eSsrO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0XHRcdFx0XHRMb2FkaW5nT3ZlcmxheUhpZGUoKTtcblx0XHRcdFx0XHRcdFx0XHRhbGVydChcblx0XHRcdFx0XHRcdFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchIFBsZWFzZSBDb250YXQgU3VwcG9ydC4gXCIgKyBlcnJcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG4gICAgYWRkdG9DYXJ0KGRhdGEsIHNlbGVjdGVkX3Byb2R1Y3RzLCBvcmlnaW5hbCkge1xuICAgICAgZGF0YS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICBpZih0aGlzLmd1ZXN0ID09IDEpe1xuICAgICAgICAgIGlmIChkYXRhLnNlbGVjdGVkID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5jYXJ0LnB1c2goZGF0YSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmNhcnQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2FydC5zcGxpY2UoXG4gICAgICAgICAgICB0aGlzLmNhcnQuZmluZEluZGV4KGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuaWQgPT09IGRhdGEuaWQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkodGhpcy5jYXJ0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRfYmFkZ2VcIiwgdGhpcy5jYXJ0Lmxlbmd0aCk7XG4gICAgICAgIHRoaXMuc2V0Q2FydEV4cGlyeSg4NjQwMDAwMCk7IC8vIDEgZGF5IG1pbGlzZWNvbmRzXG4gICAgICAgIC8vICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDQwMDAwKTtcbiAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2VcIiwgXCJ1cGRhdGUgY2FydFwiKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAgIGNvbnN0IG5ld2RhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICBsZXQgbmV3ZGF0YTIgPSAgSlNPTi5wYXJzZShuZXdkYXRhKTtcbiAgICAgICAgICBpZihkYXRhLmlzX2J1bmRsZSA9PSAxKXtcbiAgICAgICAgICAgICAgbmV3ZGF0YTIuc2VsZWN0ZWRfcHJvZHVjdHMgPSBzZWxlY3RlZF9wcm9kdWN0cztcbiAgICAgICAgICAgICAgbmV3ZGF0YTIuYXRyX29yZ2luYWxfc2VsZWN0ZWRfcHJvZHVjdHMgPSBvcmlnaW5hbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJhd0RhdGEgPSB7XG4gICAgICAgICAgICAgIHVzZXJfaWQ6IHRoaXMudXNlci5pZCxcbiAgICAgICAgICAgICAgb3JnX2lkOiB0aGlzLm9yZ19pZCxcbiAgICAgICAgICAgICAgcHJvZHVjdF9pZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgcXR5OiBkYXRhLnF0eSxcbiAgICAgICAgICAgICAgcHJpY2U6IGRhdGEucHJpY2UsXG4gICAgICAgICAgICAgIHByb2R1Y3RfZGV0YWlsczogbmV3ZGF0YTIsXG4gICAgICAgICAgICAgIG9yaWdpbmFsX3NlbGVjdGVkX3Byb2R1Y3RzOiBvcmlnaW5hbCxcbiAgICAgICAgICB9XG4gICAgICAgICAgTG9hZGluZ092ZXJsYXkoKTtcblxuICAgICAgICAgIGF4aW9zLnBvc3QoJy9jYXJ0L2FkZFRvQ2FydCcscmF3RGF0YSlcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgdGhpcy4kZXZlbnRzLmZpcmUoXCJ1cGRhdGVDYXJ0QmFkZ2UzXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICB0aGlzLmNhcnQucHVzaChuZXdkYXRhMik7XG4gICAgICAgICAgICAgTG9hZGluZ092ZXJsYXlIaWRlKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICBMb2FkaW5nT3ZlcmxheUhpZGUoKTtcbiAgICAgICAgICAgICAgYWxlcnQoJ1NvbWV0aGluZyB3ZW50IHdyb25nISBQbGVhc2UgQ29udGF0IFN1cHBvcnQuICcrZXJyKTtcbiAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9LFxuXG4gICAgc2V0Q2FydEV4cGlyeSh0dGwpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBsZXQgZXhwaXJ5ID0gbm93LmdldFRpbWUoKSArIHR0bDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydF9leHBpcnlcIiwgZXhwaXJ5KTtcbiAgICB9LFxuXG4gICAgaWZDYXJ0RXhwaXJlZCgpIHtcbiAgICAgIGNvbnN0IGl0ZW1TdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRfZXhwaXJ5XCIpO1xuICAgICAgaWYgKCFpdGVtU3RyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY29uc3QgaXRlbSA9IEpTT04ucGFyc2UoaXRlbVN0cik7XG4gICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKG5vdy5nZXRUaW1lKCkgPiBpdGVtKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICB1cGRhdGVRdHkoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuc2VsZWN0ZWQgPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmNhcnQucHVzaChkYXRhKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KHRoaXMuY2FydCkpO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0X2JhZGdlXCIsIHRoaXMuY2FydC5sZW5ndGgpO1xuICAgICAgdGhpcy5zZXRDYXJ0RXhwaXJ5KDg2NDAwMDAwKTsgLy8gMSBkYXkgbWlsaXNlY29uZHNcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH0sXG5cbiAgICBkaXNwbGF5TnVtYmVyV2l0aENvbW1hKHZhbHVlKSB7XG4gICAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICB2YXIgd2l0aENvbW1hcyA9IE51bWJlcihuKS50b0xvY2FsZVN0cmluZyhcImVuXCIsIHtcbiAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxuICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB3aXRoQ29tbWFzO1xuICAgIH0sXG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwMDBweDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNDU1cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNDU2cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTcwcHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XFxuLmNvbi1mLW1hcmdpbltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE3NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEyNXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEyNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4MDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE1MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE4NTBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE2NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE2NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDIwMDBweCkge1xcbi5jb24tZi1tYXJnaW5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDE3NXB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDE3NXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uY29uLWYtbWFyZ2luW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG59XFxuLm1hcmdpbi1jb250ZW50LTJbZGF0YS12LTMxODdiZWYxXSB7XFxuICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4ubWFyZ2luLWNvbnRlbnQtMltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxufVxcbi5maWx0ZXItYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXJbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiA5M3B4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHotaW5kZXg6IDQ7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMDBweCAwcHggMHB4IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWlucHRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxufVxcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogMHB4IDEwMHB4IDEwMHB4IDBweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuc2VhcmNoLWJ0bi0yW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTBweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLnNlYXJjaC1jYXQtY29udCAuc2VhcmNoLWNhdFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzOWYyNTtcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5zZWFyY2gtY2F0LWNvbnQgLnNlYXJjaC1jYXRbZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG59XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udCAjZGlzcGxheS1saXN0LmJ0bltkYXRhLXYtMzE4N2JlZjFdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDQ4JTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwbGF5LWxpc3QuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XFxufVxcbn1cXG4uc2VhcmNoLWNvbnRhaW5lciAuZGlzcGxheS1jb250ICNkaXNwYWx5LWdyaWQuYnRuW2RhdGEtdi0zMTg3YmVmMV0ge1xcbiAgYm9yZGVyLXJhZGl1czogNDglO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbi5zZWFyY2gtY29udGFpbmVyIC5kaXNwbGF5LWNvbnQgI2Rpc3BhbHktZ3JpZC5idG5bZGF0YS12LTMxODdiZWYxXSB7XFxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcXG59XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuLnNlYXJjaC1jb250YWluZXIgLmRpc3BsYXktY29udFtkYXRhLXYtMzE4N2JlZjFdIHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNi0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMTg3YmVmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hcmdpbi1jb250ZW50LTJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgc2VhcmNoLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbC1tZC04IGNvbC1sZy05XCIgOiBcImNvbC1tZC04XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC0xMiBjb2wtc20tMTIgY29sLTEyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlucHV0LWdyb3VwIG1iLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbCBzZWFyY2gtaW5wdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IFwiYnV0dG9uLWFkZG9uMlwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnNlYXJjaCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl1cDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaFByb2R1Y3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQua2V5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWzgsIDQ2XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1wiQmFja3NwYWNlXCIsIFwiRGVsZXRlXCIsIFwiRGVsXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaEJhckNoYW5nZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlwcmVzczogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VhcmNoQmFyQ2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbnB1dC1ncm91cC1hcHBlbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG4gPT09IFwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBzZWFyY2gtYnRuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiLCBpZDogXCJidXR0b24tYWRkb24yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlYXJjaFByb2R1Y3QoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIHNlYXJjaC1idG4tMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiwgaWQ6IFwiYnV0dG9uLWFkZG9uMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmVTZWFyY2hGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC05IGNvbC1zbS05IGNvbC05XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cCBzZWFyY2gtY2F0LWNvbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZENhdGVnb3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkQ2F0ZWdvcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sIHNlYXJjaC1jYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRDYXRlZ29yeSA9ICRldmVudC50YXJnZXQubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJCRzZWxlY3RlZFZhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2F0ZWdvcnlDaGFuZ2UoX3ZtLnNlbGVjdGVkQ2F0ZWdvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IGRpc2FibGVkOiBcIlwiLCBzZWxlY3RlZDogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNob29zZSBDYXRlZ29yaWVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIkFsbFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWxsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNhdGVnb3JpZXMsIGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGl0ZW0uaWQsIGRvbVByb3BzOiB7IHZhbHVlOiBpdGVtIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy00IGNvbC1tZC0zIGNvbC1zbS0zIGNvbC0zXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IGZsZXgtcm93LXJldmVyc2UgZGlzcGxheS1jb250XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwiYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYmFja2dyb3VuZC1jb2xvcjojMzM5ZjI1OyBjb2xvcjp3aGl0ZTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImRpc3BhbHktZ3JpZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREaXNwbGF5KFwiYm94XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhIGZhLXRoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJhY2tncm91bmQtY29sb3I6IzMzOWYyNTsgY29sb3I6d2hpdGU7XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJkaXNwbGF5LWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0RGlzcGxheShcImxpc3RcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGgtbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxlZnQgbXQtMVwiIH0sIFtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lICE9IFwiXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZVNlYXJjaEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCJcXG4gICAgICAgICAgICAgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtdGltZXMtY2lyY2xlXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENhdGVnb3J5ICE9IFwiQWxsXCJcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIGZpbHRlci1idG5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZUNhdGVnb3J5RmlsdGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxuICAgICAgICAgICAgICBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiXFxuICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbC1tZC00IGNvbC1sZy0zXCIgOiBcImNvbC1tZC00XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImg2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5vcmdfbmFtZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6XG4gICAgICAgICAgX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29udGFpbmVyLWZsdWlkIGNvbi1mLW1hcmdpblwiIDogXCJjb250YWluZXJcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICBfdm0uZGlzcGxheSA9PSBcImJveFwiID8gXCJjb2wtbWQtOCBjb2wtbGctOSBwLTBcIiA6IFwiY29sLW1kLTggcC0wXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5wcm9kdWN0cy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBtdC01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgIT0gXCJcIiAmJiB0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkgIT0gXCJBbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIiBhbmQgQ2F0ZWdvcnkgXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLnNlbGVjdGVkQ2F0ZWdvcnkubmFtZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiLlxcbiAgICAgICAgICAgICAgICAgICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc2V0RmlsdGVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVzZXQgRmlsdGVyIC8gUmV0dXJuIHRvIFByb2R1Y3RzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLm5hbWUgIT0gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1xcbiAgICAgICAgICAgICAgICAgIE5vIFByb2R1Y3RzIEZvdW5kIHdpdGggXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyh0aGlzLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIi5cXG4gICAgICAgICAgICAgICAgICAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXNldEZpbHRlcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlc2V0IEZpbHRlciAvIFJldHVybiB0byBQcm9kdWN0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5jYXRlZ29yeSAhPSBcIkFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXFxuICAgICAgICAgICAgICAgICAgTm8gUHJvZHVjdHMgRm91bmQgd2l0aCBDYXRlZ29yeSBcIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKHRoaXMuc2VsZWN0ZWRDYXRlZ29yeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCIuXFxuICAgICAgICAgICAgICAgICAgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzZXRGaWx0ZXIoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSZXNldCBGaWx0ZXIgLyBSZXR1cm4gdG8gUHJvZHVjdHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJObyBQcm9kdWN0cyBZZXQuXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwcm9kdWN0cy1saXN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IF92bS5wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IF92bS5kaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJfcm9sZTogX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtZ3JpZFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3RzZ3JpZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBwcm9kdWN0czogX3ZtLnByb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogX3ZtLmRpc3BsYXksXG4gICAgICAgICAgICAgICAgICBjdXN0b21lcl9yb2xlOiBfdm0udXNlci5jdXN0b21lcl9yb2xlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwYWdpbmF0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZGF0YTogX3ZtLmxhcmF2ZWxEYXRhLFxuICAgICAgICAgICAgICAgICAgbGltaXQ6IDUsXG4gICAgICAgICAgICAgICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgXCJwYWdpbmF0aW9uLWNoYW5nZS1wYWdlXCI6IF92bS5nZXRSZXN1bHRzIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgX3ZtLmRpc3BsYXkgPT0gXCJib3hcIiA/IFwiY29sLW1kLTQgY29sLWxnLTMgcC0wXCIgOiBcImNvbC1tZC00IHAtMFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInByb2R1Y3RzLXBhZ2Utb3JkZXItc3VtbWFyeVwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGNhcnQ6IF92bS5jYXJ0LFxuICAgICAgICAgICAgICAgICAgY3VzdG9tZXJfcm9sZTogX3ZtLnVzZXIuY3VzdG9tZXJfcm9sZSxcbiAgICAgICAgICAgICAgICAgIG1pbmltdW06IF92bS53aG9sZXNhbGVyX21pbmltdW1fb3JkZXJfYW1vdW50LFxuICAgICAgICAgICAgICAgICAgZ3Vlc3Q6IF92bS5ndWVzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzOlxuICAgICAgICAgIF92bS5kaXNwbGF5ID09IFwiYm94XCIgPyBcImNvbnRhaW5lci1mbHVpZCBjb24tZi1tYXJnaW5cIiA6IFwiY29udGFpbmVyXCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJQcm9kdWN0c1BhZ2VNb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3Rtb2RhbFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGd1ZXN0OiBfdm0uZ3Vlc3QgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJQcm9kdWN0c01vZGFsRWRpdFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInByb2R1Y3Rtb2RhbEVkaXRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBndWVzdDogX3ZtLmd1ZXN0IH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicHJvZHVjdHMtd2FybmluZy1tb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbWluaW11bTogX3ZtLndob2xlc2FsZXJfbWluaW11bV9vcmRlcl9hbW91bnQgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJFbnRlck9wdGlvbkNNb2RhbFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgZ3Vlc3Q6IF92bS5ndWVzdCwgdXNlcjogX3ZtLnVzZXIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODdiZWYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzE4N2JlZjFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGVyYmllbWlndWVsL3Byb2plY3RzL2ZpYWNyZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMTg3YmVmMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMTg3YmVmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMTg3YmVmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMxODdiZWYxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMxODdiZWYxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9wcm9kdWN0cy1wYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMxODdiZWYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzE4N2JlZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTg3YmVmMSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=