<style lang="scss" scoped>
@import "resources/sass/mixins";

.con-f-margin {
  // margin-left: 1.5rem !important;
  //   margin-left: 1.5rem !important;
  @include mobile {
    // margin-left: 0 !important;
    margin-top: -20px;
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

#products-list {
  margin-top: 50px;
  //   max-height: 800px;
  //   overflow-x: hidden; /* Hide horizontal scrollbar */
  //   overflow-y: scroll; /* Add vertical scrollbar */

  .row.product-item {
    padding: 10px;
    margin-bottom: 20px;
    .product-button {
      border-radius: 50%;
    }
    .min-color {
      color: #007bff;
    }
    .product-hr {
      //   border-top: 1px solid red !important;
      border: 1px solid #339f25;
      width: 70%;
    }
  }
}

#products-box {
  margin-top: 50px;
  max-height: 800px;
  overflow-x: hidden; /* Hide horizontal scrollbar */
  overflow-y: scroll; /* Add vertical scrollbar */

  .product-item {
    text-align: center;
    // background-color: red;
    padding: 0 20px 20px 0px;
    @include mobile {
      padding: 10px 20px 20px 10px;
    }
    .image-container {
      position: relative;
      .product-image {
        object-fit: cover;
        width: 100%;
        height: 200px;
        border-radius: 8px 8px 0px 0px;
      }
      .product-image-selected {
        object-fit: cover;
        width: 100%;
        height: 200px;
        border-radius: 8px 8px 0px 0px;
        opacity: 0.5;
      }
      .check-button {
        position: absolute;
        top: 8px;
        right: 16px;
        border: 3px solid;
        border-color: white;
        border-radius: 50%;
        color: white;
      }
      .text-bottom {
        position: absolute;
        bottom: 0%;
        left: 0%;
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 30%;
        font-size: 18px;
        color: white;
        padding: 5px;
      }
    }
  }
}

#products-box-2 {
  //   background: darkorange;
  margin-top: 20px;
  .prod {
    padding: 10px;
    @include mobile {
      padding: 5px;
    }
    .prod-container {
      position: relative;
      .prod-image {
        object-fit: cover;
        width: 185px;
        height: 150px;
        border-radius: 5px 5px 0px 0px;

        @media (min-width: 300px) and (max-width: 369px) {
          width: 135px;
          height: 100px;
        }

        @media (min-width: 370px) and (max-width: 420px) {
          width: 160px;
          height: 125px;
        }

        @media (min-width: 1000px) and (max-width: 1135px) {
          width: 160px;
          height: 125px;
        }
      }

      .prod-image-selected {
        opacity: 0.5;
      }

      .prod-btn {
        position: absolute;
        top: 2px;
        right: 2px;
        border: 3px solid;
        border-color: white;
        border-radius: 50%;
        color: white;
      }
      .prod-btn-selected {
        background-color: #339f25;
      }

      .prod-text {
        position: absolute;
        bottom: 0%;
        left: 0%;
        background: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 30%;
        font-size: 15px;
        color: white;
        padding-left: 5px;
        text-align: left;
        @include mobile {
          height: 38%;
        }
      }
    }
  }
}

.cart-container {
  min-height: 325px;
  border: 2px solid lightgray !important;
  margin-top: 20px;
  margin-right: 5px;
  margin-left: 5px;
  padding: 0px;
  border-radius: 5px;
  position: -webkit-sticky;
  position: sticky;
  top: 130px;
  .cart-header {
    padding: 10px 0;
    text-align: center;
  }
  .btn-primary {
    background-color: #339f25 !important;
  }
  .cart-items {
    margin-bottom: 30px;
    max-height: 500px;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
    .cart-item {
      padding: 5px;
      background-color: lightgray;
      .cart-item-image {
        width: 68px;
        height: 68px;
        object-fit: cover;
        padding: 0px;
        margin: 0px 10px 0px 0px;
        background-color: white;
        margin: 0px 10px 0px 0px;
      }
      .cart-item-texts {
        text-align: left;
        // background-color: red;
        p {
          margin-bottom: 0px;
        }
      }

      .cart-item-close-container {
        // width: 10%;
        padding: 0px;
        position: relative;
        #x {
          position: absolute;
          top: 0px;
          right: 0px;
          background: transparent;
          border: 0px;
          color: gray;
        }
        #sub-total {
          //   overflow: visible;
          width: 90px;
          position: absolute;
          bottom: 0px;
          right: 0px;
          text-align: right;
        }
      }
    }
  }
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
    <div v-if="guest != 1" class="container d-block d-sm-none mt-1">
      <div class="row">
        <div class="col">
          <div class="d-flex">
            <div class="mr-3">
              <img
                :src="user.image_path"
                class="ml-2 rounded-circle"
                style="width:45px; height:45px; object-fit:cover;"
              />
            </div>
            <div>
              {{ user.full_name }}
              <br />
              <b v-if="user.customer_role==3">Wholesaler</b>
              <b v-if="user.customer_role==2">Balance: $ {{displayNumberWithComma(user.balance)}}</b>
            </div>
          </div>
        </div>
      </div>
    </div>

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
          <div v-if="guest != 1" class="d-none d-sm-block">
            <div class="d-flex flex-row-reverse bd-highlight">
              <div class="text-right">
                <div>
                  {{ user.full_name }}
                  <img
                    :src="user.image_path"
                    class="ml-2 rounded-circle"
                    style="width:45px; height:45px; object-fit:cover;"
                  />
                  <br />
                  <b v-if="user.customer_role==3">Wholesaler</b>
                  <b
                    v-if="user.customer_role==2"
                  >Balance: $ {{displayNumberWithComma(user.balance)}}</b>
                </div>
              </div>
            </div>
          </div>
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

          <div v-if="display == 'list'" id="products-list" class="container">
            <div class="row">
              <div class="col">
                <div
                  class="row product-item"
                  v-for="(product, index) in products"
                  :key="index"
                  :style="product.selected == true? 'opacity: 0.5;' : ''"
                >
                  <div class="col-md-5">
                    <img :src="product.image_link" alt />
                  </div>
                  <div class="col-md-7">
                    <div>
                      <h3>
                        {{product.name}}
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-success float-right product-button"
                          :style="product.selected == true? 'background-color:#339f25; color:white;' : ''"
                          :disabled="product.selected == true? true:false"
                          @click="showAddToCartModal(product)"
                        >
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </button>
                      </h3>
                    </div>
                    <h5
                      v-if="user.customer_role == 2"
                    >$ {{product.member_price.toFixed(2)}}/{{product.unit}}</h5>
                    <h5
                      v-else-if="user.customer_role == 3"
                    >$ {{product.wholesale_price.toFixed(2)}}/{{product.unit}}</h5>
                    <h5 v-else>$ {{product.price.toFixed(2)}}/{{product.unit}}</h5>
                    <p>
                      {{product.description}}
                      <br />
                      <span class="min-color">{{product.category.name}}</span>
                    </p>
                  </div>
                  <hr class="product-hr" />
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid" v-if="display == 'box'" id="products-box-2">
            <div class="row">
              <div class="col">
                <div class="d-flex flex-wrap justify-content-center">
                  <div class="prod" v-for="(prod, index) in products" :key="index">
                    <div class="prod-container">
                      <img
                        :src="prod.image_link"
                        :class="prod.selected == true? 'prod-image-selected': ''"
                        class="prod-image"
                      />

                      <button
                        type="button"
                        class="btn btn-sm btn-outline-success prod-btn"
                        :class="prod.selected == true? 'prod-btn-selected': ''"
                        :disabled="prod.selected == true? true:false"
                        @click="showAddToCartModal(prod)"
                      >
                        <i class="fa fa-check" aria-hidden="true"></i>
                      </button>

                      <div class="prod-text">
                        {{prod.name}}
                        <br />
                        <b>$ {{updateProductPrice(prod)}} / {{prod.unit}}</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
          <div class="cart-container bg-white border-0">
            <div class="col-md-12 cart-header">
              <h5 class="text-secondary">ORDER SUMMARY</h5>
            </div>
            <div class="col-md-12 text-center">
              <button
                type="button"
                class="btn btn-lg btn-primary w-100"
                @click="proccedToCheckout()"
                :disabled="cart.length == 0"
              >Proceed to Checkout</button>
            </div>
            <div class="col-md-12 text-center">
              <div class="mt-4">Total Amount:</div>
              <div class="total-cart-price mb-1">
                <h4>
                  <b>$ {{displayNumberWithComma(totalAmount)}}</b>
                </h4>
              </div>
              <div v-if="user.customer_role == 3">
                <div>(Wholesaler Minimum Order Amount:)</div>
                <div class="mb-4">$ {{wholesaler_minimum_order_amount.toFixed(2)}}</div>
              </div>
              <div class="row">
                <div class="col-sm-12 cart-items">
                  <ul class="list-group">
                    <li
                      v-for="(item, index) in cart"
                      :key="index"
                      class="list-group-item d-flex cart-item"
                      style="margin-bottom:10px;"
                    >
                      <div @click="updateQtyModal(item)">
                        <img :src="item.image_link" class="cart-item-image" />
                      </div>
                      <div class="cart-item-texts flex-grow-1" @click="updateQtyModal(item)">
                        <p>
                          <b>{{item.name}}</b>
                          <br />
                          <span
                            v-if="user.customer_role == 2"
                          >$ {{displayNumberWithComma(item.member_price)}}/{{item.unit}}</span>
                          <span
                            v-else-if="user.customer_role == 3"
                          >$ {{displayNumberWithComma(item.wholesale_price)}}/{{item.unit}}</span>
                          <span v-else>$ {{displayNumberWithComma(item.price)}}/{{item.unit}}</span>
                          <br />
                          <span style="color:#339f25; padding:0px;">qty: {{item.qty}} {{item.unit}}</span>
                        </p>
                      </div>
                      <div class="cart-item-close-container ml-auto w-25">
                        <button id="x" @click="removeItemInCart(item)">
                          <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                        <span id="sub-total">
                          <b>$ {{displayNumberWithComma(subTotal(item))}}</b>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <products-page-modal ref="productmodal"></products-page-modal>
    <products-warning-modal :minimum="wholesaler_minimum_order_amount"></products-warning-modal>
  </div>
</template>


<script>
export default {
  //   props: {
  //     propproducts: Array,
  //     propcategories: Array
  //   },
  props: [
    "propproducts",
    "propcategories",
    "guest",
    "user",
    "wholesaler_minimum_order_amount"
  ],

  data() {
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
      btn: "search"
    };
  },
  computed: {
    // filterProducts() {
    //   let filter = [];
    //   let products = this.searchedProducts;
    //   if (this.selectedCategory == "All") {
    //     filter = this.searchedProducts;
    //   } else {
    //     var id = this.selectedCategory;
    //     var filteredProducts = products.filter(function(product) {
    //       return product.category_id == id;
    //     });
    //     filter = filteredProducts;
    //   }
    //   return filter;
    // },
    totalAmount() {
      if (this.cart.length == 0) {
        return 0.0;
      } else {
        let total = 0;
        this.cart.forEach(cart => {
          if (this.user.customer_role == 2) {
            total = total + cart.member_price * cart.qty;
          } else if (this.user.customer_role == 3) {
            total = total + cart.wholesale_price * cart.qty;
          } else {
            total = total + cart.price * cart.qty;
          }
        });
        return total;
      }
    },
    cart_badge() {
      return this.cart.length;
    }
  },
  created() {
    // this.getProducts();
    LoadingOverlay();
    this.getResults();
    let categories = this.propcategories;
    this.categories = categories;
  },

  methods: {
    searchBarChange() {
      this.btn = "search";
      console.log(this.btn);
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
        // console.log("1st");
        param = {
          category: this.category,
          name: this.name,
          page: page
        };
      } else if (this.name != "") {
        // console.log("2nd");
        param = {
          name: this.name,
          page: page
        };
      } else if (this.category != "All") {
        // console.log("3rd");
        param = {
          category: this.category,
          page: page
        };
      } else {
        // console.log("else");
        param = {
          page: page
        };
      }
      axios({
        method: "get",
        url: "/data/products",
        params: param
      }).then(res => {
        this.laravelData = res.data;

        let products = res.data.data;

        products.forEach(product => {
          product.selected = false;
          //   product.qty = product.minorder;
          product.qty = 1;
        });
        this.products = products;
        // this.searchedProducts = this.products;
        this.getCart();
        LoadingOverlayHide();
      });
    },
    updateProductPrice(product) {
      if (this.user.customer_role == 2) {
        return this.displayNumberWithComma(product.member_price);
      } else if (this.user.customer_role == 3) {
        return this.displayNumberWithComma(product.wholesale_price);
      } else {
        return this.displayNumberWithComma(product.price);
      }
    },

    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    },
    subTotal(item) {
      let subtotal = 0;
      if (this.user.customer_role == 2) {
        subtotal = item.member_price * item.qty;
      } else if (this.user.customer_role == 3) {
        subtotal = item.wholesale_price * item.qty;
      } else {
        subtotal = item.price * item.qty;
      }
      return subtotal;
    },

    searchProduct() {
      LoadingOverlay();
      window.scrollTo(0, 0);
      this.btn = "clear";
      this.name = this.search;
      this.category = "All";
      this.selectedCategory = "All";
      this.getResults();

      //   let query = this.search.toLowerCase();
      //   let heystack = this.products;
      //   let searched = heystack.filter(
      //     item =>
      //       item.name.toLowerCase().indexOf(query) >= 0 ||
      //       item.sku.toLowerCase().indexOf(query) >= 0
      //   );
      //   this.searchedProducts = searched;
    },
    proccedToCheckout() {
      //   window.location.href = "/products/checkout";
      if (this.user.customer_role == 3) {
        if (this.totalAmount < this.wholesaler_minimum_order_amount) {
          //   alert(
          //     "wholeslaer minimum order amount is " +
          //       this.wholesaler_minimum_order_amount +
          //       "  (Message Modal is Work in progress)"
          //   );
          $("#warningModal").modal("show");
        } else {
          LoadingOverlay();
          window.location.href = "/products/checkout";
        }
      } else {
        LoadingOverlay();
        window.location.href = "/products/checkout";
      }
    },
    showAddToCartModal(data) {
      //   console.log(data);
      this.$refs.productmodal.product = data;
      this.$refs.productmodal.category = data.category.name;
      this.$refs.productmodal.customer_role = this.user.customer_role;
      $("#addToCartModal").modal("show");
    },
    updateQtyModal(data) {
      //   console.log(data);
      //   this.$refs.productmodal.update_prodct = { ...data };
      //   $("#updateQtyModal").modal("show");
    },

    setDisplay(data) {
      this.display = data;
    },

    // getProducts() {
    //   axios
    //     .get("/data/products")
    //     .then(res => {
    //       this.pagination = res.data;
    //       let products = res.data.data;
    //       let categories = this.propcategories;
    //       this.categories = categories;

    //       products.forEach(product => {
    //         product.selected = false;
    //         product.qty = product.minorder;
    //       });
    //       this.products = products;
    //       this.searchedProducts = this.products;
    //       this.getCart();
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    // },

    async getCart() {
      let lastcart =
        (await JSON.parse(localStorage.getItem("cart") || "null")) || [];
      this.cart = lastcart;
      localStorage.setItem("cart_badge", this.cart.length);
      this.products.forEach(product => {
        this.cart.forEach(cart => {
          if (product.id == cart.id) {
            product.selected = true;
          }
        });
      });
    },

    removeItemInCart(data) {
      this.products.forEach(product => {
        if (product.id == data.id) {
          product.selected = false;
          product.qty = 1;
        }
      });
      this.cart.splice(
        this.cart.findIndex(function(i) {
          return i.id === data.id;
        }),
        1
      );
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cart_badge", this.cart.length);
      this.$events.fire("updateCartBadge", "update cart");
    },

    addtoCart(data) {
      data.selected = true;
      if (data.selected == true) {
        this.cart.push(data);
        // if (process.browser) {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        // }
      } else {
        this.cart.splice(
          this.cart.findIndex(function(i) {
            return i.id === data.id;
          }),
          1
        );
        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
      localStorage.setItem("cart_badge", this.cart.length);
      this.$events.fire("updateCartBadge", "update cart");
      return data;
    },

    updateQty(data) {
      if (data.selected == true) {
        this.cart.push(data);
        // if (process.browser) {
        localStorage.setItem("cart", JSON.stringify(this.cart));
        // }
      }
      localStorage.setItem("cart_badge", this.cart.length);
      return data;
    }
  }
};
</script>


