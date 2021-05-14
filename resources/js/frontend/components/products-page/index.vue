<style lang="scss" scoped>
@import "resources/sass/mixins";

.con-f-margin {
  // margin-left: 1.5rem !important;
  //   margin-left: 1.5rem !important;

  padding-right: 100px;
  padding-left: 1000px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) and (max-width: 1455px) {
    padding-right: 25px;
    padding-left: 0px;
  }

  @media (min-width: 1456px) {
    padding-right: 50px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1570px) {
    padding-right: 50px;
    padding-left: 50px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1600px) {
    padding-right: 75px;
    padding-left: 75px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1700px) {
    padding-right: 100px;
    padding-left: 100px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1750px) {
    padding-right: 125px;
    padding-left: 125px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1800px) {
    padding-right: 150px;
    padding-left: 150px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 1850px) {
    padding-right: 165px;
    padding-left: 165px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 2000px) {
    padding-right: 175px;
    padding-left: 175px;
    margin-right: auto;
    margin-left: auto;
  }

  @include mobile {
    // margin-left: 0 !important;
    margin-top: -20px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}

.margin-content-2 {
  margin-top: 3rem;
  margin-bottom: 3rem;
  @include mobile {
    margin-top: 0;
  }
}

.filter-btn {
  padding: 0px 5px;
  font-size: 13px;
  //   line-height: 1.5;
  border-radius: 1rem;
}

.search-container {
  @include mobile {
    position: -webkit-sticky;
    position: sticky;
    top: 93px;
    padding-top: 10px;
    padding-bottom: 5px;
    background-color: white;
    // z-index: 2;
    z-index: 4;
  }
  .search-inpt {
    border-radius: 100px 0px 0px 100px;
    border: 1px solid #339f25;
    @include mobile {
      height: 30px;
    }
  }
  .search-btn {
    border-radius: 0px 100px 100px 0px;
    @include mobile {
      height: 30px;
      font-size: 10px;
    }
  }
  .search-btn-2 {
    border-radius: 0px 100px 100px 0px;
    @include mobile {
      height: 30px;
      font-size: 10px;
    }
  }
  .search-cat-cont {
    @include mobile {
      margin-bottom: 0px;
    }
    .search-cat {
      border-radius: 100px;
      border: 1px solid #339f25;
      padding: 0px 10px 0px 10px;
      @include mobile {
        height: 30px;
        font-size: 10px;
      }
    }
  }

  .display-cont {
    #display-list.btn {
      border-radius: 48%;
      @include mobile {
        padding: 1px 5px 1px 5px;
      }
    }
    #dispaly-grid.btn {
      border-radius: 48%;
      @include mobile {
        padding: 1px 5px 1px 5px;
      }
    }
    @include mobile {
      height: 30px;
    }
  }
}
</style>


<template>
  <div class="margin-content-2">
    <!-- <products-user-balance-mobile :guest="guest" :user="user"></products-user-balance-mobile> -->
    <div class="container search-container">
      <div class="row">
        <div :class="display == 'box'? 'col-md-8 col-lg-9' : 'col-md-8'">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 col-12">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control search-inpt"
                  placeholder="Search"
                  aria-describedby="button-addon2"
                  v-model="search"
                  v-on:keyup.enter="searchProduct()"
                  v-on:keyup.delete="searchBarChange()"
                  @keypress="searchBarChange()"
                />
                <div class="input-group-append">
                  <button
                    v-if="this.btn === 'search'"
                    class="btn btn-outline-success search-btn"
                    type="button"
                    id="button-addon2"
                    @click="searchProduct()"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                  <button
                    v-else
                    class="btn btn-outline-success search-btn-2"
                    type="button"
                    id="button-addon2"
                    @click="removeSearchFilter()"
                  >
                    <i class="fas fa-times-circle" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-9 col-sm-9 col-9">
              <div class="form-group search-cat-cont">
                <select
                  class="form-control search-cat"
                  v-model="selectedCategory"
                  @change="categoryChange(selectedCategory)"
                >
                  <option disabled selected>Choose Categories</option>
                  <option value="All">All</option>
                  <option v-for="item in categories" :key="item.id" :value="item">{{ item.name }}</option>
                </select>
              </div>
            </div>
            <div class="col-lg-4 col-md-3 col-sm-3 col-3">
              <div class="d-flex flex-row-reverse display-cont">
                <button
                  id="dispaly-grid"
                  @click="setDisplay('box')"
                  :style="display == 'box'? 'background-color:#339f25; color:white;' : ''"
                  class="btn btn-outline-success"
                >
                  <i class="fa fa-th" aria-hidden="true"></i>
                </button>
                <button
                  id="display-list"
                  @click="setDisplay('list')"
                  :style="display == 'list'? 'background-color:#339f25; color:white;' : ''"
                  class="btn btn-outline-success mr-2"
                >
                  <i class="fa fa-th-list" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="text-left mt-1">
            <span v-if="this.name != ''">
              <button
                @click="removeSearchFilter()"
                type="button"
                class="btn btn-secondary btn-sm filter-btn"
              >
                "{{name}}"
                <i class="fas fa-times-circle"></i>
              </button>
            </span>
            <span v-if="this.selectedCategory != 'All'">
              <button
                @click="removeCategoryFilter()"
                type="button"
                class="btn btn-secondary btn-sm filter-btn"
              >
                "{{selectedCategory.name}}"
                <i class="fas fa-times-circle"></i>
              </button>
            </span>

          </div>
        </div>
        <div :class="display == 'box'? 'col-md-4 col-lg-3' : 'col-md-4'">
          <h6 class="text-success">{{org_name}}</h6>
          <!-- <products-user-balance :guest="guest" :user="user"></products-user-balance> -->
        </div>
      </div>
    </div>

    <div :class="display == 'box'? 'container-fluid con-f-margin':'container'">
      <div class="row">
        <!-- Products -->
        <div :class="display == 'box'? 'col-md-8 col-lg-9 p-0' : 'col-md-8 p-0'">
          <div v-if="products.length == 0" class="container">
            <div class="row">
              <div class="col-12">
                <div class="text-center mt-5">
                  <div v-if="(this.name != '' && this.selectedCategory != 'All')">
                    No Products Found with "{{this.name}}" and Category "{{this.selectedCategory.name}}".
                    <div class="text-primary" @click="resetFilter()">
                      <u>Reset Filter / Return to Products</u>
                    </div>
                  </div>
                  <div v-else-if="this.name != ''">
                    No Products Found with "{{this.name}}".
                    <div class="text-primary" @click="resetFilter()">
                      <u>Reset Filter / Return to Products</u>
                    </div>
                  </div>
                  <div v-else-if="this.category != 'All'">
                    No Products Found with Category "{{this.selectedCategory.name}}".
                    <div class="text-primary" @click="resetFilter()">
                      <u>Reset Filter / Return to Products</u>
                    </div>
                  </div>
                  <div v-else>No Products Yet.</div>
                </div>
              </div>
            </div>
          </div>

          <products-list
            v-bind:products="products"
            :display="display"
            :customer_role="user.customer_role"
          ></products-list>

          <products-grid
            v-bind:products="products"
            :display="display"
            ref="productsgrid"
            :customer_role="user.customer_role"
          ></products-grid>

          <br />
          <br />
          <pagination
            :data="laravelData"
            :limit="5"
            size="small"
            align="center"
            @pagination-change-page="getResults"
          ></pagination>
        </div>

        <!-- Order SUMMARY -->
        <div :class="display == 'box'? 'col-md-4 col-lg-3 p-0' : 'col-md-4 p-0'">
          <products-page-order-summary
            :cart="cart"
            :customer_role="user.customer_role"
            :minimum="wholesaler_minimum_order_amount"
            :guest="guest"
          ></products-page-order-summary>
        </div>
      </div>
    </div>

    <div :class="display == 'box'? 'container-fluid con-f-margin':'container'">
      <div class="row">
        <div class="col">
          <!-- <products-page-modal :guest="guest" ref="productmodal"></products-page-modal> -->
          <ProductsPageModal :guest="guest" ref="productmodal" ></ProductsPageModal>
          <ProductsModalEdit :guest="guest" ref="productmodalEdit" ></ProductsModalEdit>
          <products-warning-modal :minimum="wholesaler_minimum_order_amount"></products-warning-modal>
          <!-- <OrganizationModal :guest="guest" :user="user"></OrganizationModal> -->
          <EnterOptionCModal :guest="guest" :user="user"></EnterOptionCModal>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const prodOrderSummary = () =>
  import(
    /* webpackChunkName: "js/f/prodOrderSummaryNew" */ "./orderSummary.vue"
  );
// const prodModal = () =>
//   import(
//     /* webpackChunkName: "js/f/prodModalNew" */ "./productsModal.vue"
//   );
const prodWarningModal = () =>
  import(
    /* webpackChunkName: "js/f/prodWarningModal" */ "./wholesalerWarningModal.vue"
  );
const prodUserBalanceMobile = () =>
  import(
    /* webpackChunkName: "js/f/prodUserBalanceMobile" */ "./userBalanceMobile.vue"
  );
const prodUserBalance = () =>
  import(
    /* webpackChunkName: "js/f/prodUserBalance" */ "./userBalance.vue"
  );
const prodlist = () =>
  import(
    /* webpackChunkName: "js/f/prodlist" */ "./productsViewList.vue"
  );
const prodGrid = () =>
  import(
    /* webpackChunkName: "js/f/prodGrid" */ "./productsViewGrid.vue"
  );

// import OrganizationModal from "./organization-modal/index"

export default {
  components: {
    'products-page-order-summary': prodOrderSummary,
    // 'products-page-modal': prodModal,
    'products-warning-modal': prodWarningModal,
    'products-user-balance-mobile': prodUserBalanceMobile,
    'products-user-balance': prodUserBalance,
    'products-list': prodlist,
    'products-grid': prodGrid,
    // OrganizationModal,
  },
  //   props: {
  //     propproducts: Array,
  //     propcategories: Array
  //   },
  props: [
    "propproducts",
    "propcategories",
    "guest",
    "user",
    "wholesaler_minimum_order_amount",
  ],

  data() {
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
      org_id:null,
      org_name:null,
    };
  },
  created() {
    // this.getProducts();
    LoadingOverlay();
    this.getResults();
    let categories = this.propcategories;
    this.categories = categories;
  },
  mounted() {
    //   $("#guestSelectingOrganizationModal").modal("show");
    // $("#addToCartModal").on("shown.bs.modal", function () {
    //   $("body.modal-open").removeAttr("style");
    //   $("sticky-top").removeAttr("style");
    // });
  },

  methods: {
    searchBarChange() {
      this.btn = "search";
      //   console.log(this.btn);
    },
    removeSearchFilter() {
      this.name = "";
      this.search = "";
      this.getResults();
      this.btn = "search";
    },
    removeCategoryFilter() {
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    resetFilter() {
      this.name = "";
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },
    categoryChange(data) {
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

    getResults(page = 1) {
      let param;
      if (this.name != "" && this.category != "All") {
        param = {
          category: this.category,
          name: this.name,
          page: page,
          org_id: this.org_id,
        };
      } else if (this.name != "") {
        param = {
          name: this.name,
          page: page,
          org_id: this.org_id,
        };
      } else if (this.category != "All") {
        param = {
          category: this.category,
          page: page,
          org_id: this.org_id,
        };
      } else {
        param = {
          page: page,
          org_id: this.org_id,
        };
      }
      axios({
        method: "get",
        url: "/data/products",
        params: param,
      }).then((res) => {
        this.laravelData = res.data;
        let products = res.data.data;

        // products.forEach((product) => {
        //   product.selected = false;
        //   product.qty = 1;
        // });

        // console.log();
        // this.products = products;
        if(this.guest == 1){
             this.getCart(products);
        }else{
            console.log('oyee');
             this.getCart2(products);
        }

        LoadingOverlayHide();
      });
    },

    getCart(data) {
      if (this.ifCartExpired()) {
        // console.log("expired");
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
        localStorage.setItem("cart_badge", this.cart.length);
        this.products = data;
      } else {
        // console.log("not expired");
        let lastcart = JSON.parse(localStorage.getItem("cart") || "null") || [];

        this.cart = lastcart;
        localStorage.setItem("cart_badge", this.cart.length);

        data.forEach((product) => {
          this.cart.forEach((cart) => {
            if (product.id == cart.id) {
              product.selected = true;
            }
          });
        });

        this.products = data;
      }
    },

    getCart2(data) {
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
        axios.get(`/cart/getUserCartDetails/${this.user.id}/${this.org_id}`)
        .then(res => {
            let lastcart = res.data;
            this.cart = [];
            lastcart.forEach(cart => {
                cart.atr_details.qty = cart.qty;
                this.cart.push(cart.atr_details);
            });
            data.forEach((product) => {
                this.cart.forEach((cart) => {
                    if (product.id == cart.id) {
                    product.selected = true;
                    }
                });
            });
            this.products = data;
        })
        .catch(err => {
            console.error(err);
            this.products = data;
        })

    },


    updateProductPrice(product) {
      let customer_role = this.user.customer_role;
      let price =
        customer_role == 2
          ? product.member_price
          : customer_role == 3
          ? product.wholesale_price
          : product.price;
      return this.displayNumberWithComma(price);
    },

    searchProduct() {
      LoadingOverlay();
      window.scrollTo(0, 0);
      this.btn = "clear";
      this.name = this.search;
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();
    },

    showAddToCartModal(data) {
      this.$refs.productmodal.showModal(data,this.guest,this.user.customer_role);
    //   $("#addToCartModal").modal("show");
    },

    showAddToCartModalEdit(data) {
      this.$refs.productmodalEdit.showModal(data,this.guest,this.user.customer_role);
    },

    setDisplay(data) {
      this.display = data;
    },

    removeItemInCart(data) {

      if(this.guest == 1){
          this.products.forEach((product) => {
            if (product.id == data.id) {
            product.selected = false;
            product.qty = 1;
            }
        });
        this.cart.splice(
            this.cart.findIndex(function (i) {
            return i.id === data.id;
            }),
            1
        );
            localStorage.setItem("cart", JSON.stringify(this.cart));
            localStorage.setItem("cart_badge", this.cart.length);
            this.$events.fire("updateCartBadge", "update cart");
            this.setCartExpiry(86400000); // 1 day miliseconds
      }else{
          LoadingOverlay();
            axios.post(`/cart/removeProductOfUserCart/${this.user.id}/${this.org_id}/${data.id}`)
                .then(res => {
                    this.$events.fire("updateCartBadge3", res.data);
                    LoadingOverlayHide();
                     this.products.forEach((product) => {
                            if (product.id == data.id) {
                            product.selected = false;
                            product.qty = 1;
                            }
                        });
                        this.cart.splice(
                            this.cart.findIndex(function (i) {
                            return i.id === data.id;
                            }),
                            1
                        );
                })
                .catch(err => {
                    LoadingOverlayHide();
                    console.error(err);
                })
      }
    },

     updateProductDetails(product) {
      if(this.guest == 0){
          LoadingOverlay();
		    var rawData = {
		    	product_details: product,
		    	user_id: this.user.id,
		    	org_id: this.org_id,
		    };
		    axios
		    	.post("/cart/updateProductDetails", rawData)
		    	.then((res) => {
		    		console.log(res);
		    		LoadingOverlayHide();
		    	})
		    	.catch((err) => {
		    		console.error(err);
		    		LoadingOverlayHide();
		    		alert(
		    			"Something went wrong! Please Contat Support. " + err
		    		);
		    	});
      }
    },

      updateProductQuantity(product) {
      if(this.guest == 0){
          LoadingOverlay();
		    var rawData = {
		    	product_details: product,
		    	user_id: this.user.id,
		    	org_id: this.org_id,
		    };
		    axios
		    	.post("/cart/updateProductDetails", rawData)
		    	.then((res) => {
		    		console.log(res);
		    		LoadingOverlayHide();
		    	})
		    	.catch((err) => {
		    		console.error(err);
		    		LoadingOverlayHide();
		    		alert(
		    			"Something went wrong! Please Contat Support. " + err
		    		);
		    	});
      }
    },


    addQty(product) {
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
							org_id: this.org_id,
						};
						axios
							.post("/cart/updateQuantity", rawData)
							.then((res) => {
								console.log(res);
								LoadingOverlayHide();
							})
							.catch((err) => {
								product.qty--;
								console.error(err);
								LoadingOverlayHide();
								alert(
									"Something went wrong! Please Contat Support. " + err
								);
							});
					}
				}
			},
			subQty(product) {
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
							org_id: this.org_id,
						};
						axios
							.post("/cart/updateQuantity", rawData)
							.then((res) => {
								console.log(res);
								LoadingOverlayHide();
							})
							.catch((err) => {
								product.qty++;
								console.error(err);
								LoadingOverlayHide();
								alert(
									"Something went wrong! Please Contat Support. " + err
								);
							});
					}
				}
			},
    addtoCart(data, selected_products, original) {
      data.selected = true;
      if(this.guest == 1){
          if (data.selected == true) {
        this.cart.push(data);
        localStorage.setItem("cart", JSON.stringify(this.cart));
        } else {
            this.cart.splice(
            this.cart.findIndex(function (i) {
                return i.id === data.id;
            }),
            1
            );
            localStorage.setItem("cart", JSON.stringify(this.cart));
        }

        localStorage.setItem("cart_badge", this.cart.length);
        this.setCartExpiry(86400000); // 1 day miliseconds
        //   this.setCartExpiry(40000);
        this.$events.fire("updateCartBadge", "update cart");
      }else{
          const newdata = JSON.stringify(data);
          let newdata2 =  JSON.parse(newdata);
          if(data.is_bundle == 1){
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
              original_selected_products: original,
          }
          LoadingOverlay();

          axios.post('/cart/addToCart',rawData)
          .then(res => {
             console.log(res);
             this.$events.fire("updateCartBadge3", res.data);
             this.cart.push(newdata2);
             LoadingOverlayHide();
          })
          .catch(err => {
              console.error(err);
              LoadingOverlayHide();
              alert('Something went wrong! Please Contat Support. '+err);
          })
      }

      return data;
    },

    setCartExpiry(ttl) {
      const now = new Date();
      let expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },

    ifCartExpired() {
      const itemStr = localStorage.getItem("cart_expiry");
      if (!itemStr) {
        return true;
      }
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item) {
        return true;
      }
      return false;
    },

    updateQty(data) {
      if (data.selected == true) {
        this.cart.push(data);
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
      localStorage.setItem("cart_badge", this.cart.length);
      this.setCartExpiry(86400000); // 1 day miliseconds
      return data;
    },

    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
  },
};
</script>


