<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Products</h2>
      </div>
      <div class="col-md-6">
        <h2>
          <a
            href="/admin/products/create/bundle"
            class="btn btn-danger float-right rounded-0 text-light ml-2"
          >+ New Bundle Product</a>
          <a
            href="/admin/products/create"
            class="btn btn-success float-right rounded-0 text-light"
          >+ New Product</a>
        </h2>
      </div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-10 col-md-6">
        <div class="input-group mb-3">
          <input
            v-model="search"
            type="text"
            class="form-control rounded-0"
            v-on:keyup.enter="btnSearch()"
            placeholder="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-success rounded-0" @click="btnSearch()">Search</button>
          </div>
        </div>
      </div>
      <div class="col-lg-2 col-md-6">
        <!-- <div class="form-group">
          <select class="form-control rounded-0">
            <option
              v-for="(item, index) in propscategories"
              :key="index"
              :value="item.id"
            >{{item.name}}</option>
          </select>
        </div>-->
        <div class="form-group">
          <!-- <select class="form-control rounded-0">
            <option>All</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>-->
          <select class="form-control rounded-0" v-model="selectedStocks">
            <option disabled selected>Choose Categories</option>
            <option value="All">All</option>
            <option value="1">In Stock</option>
            <option value="0">Out of Stock</option>
            <option value="2">Low of Stock</option>
          </select>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-8 col-md-8">
        <ul class="list-group rounded-0">
          <li v-for="(product, index) in loadlist" :key="index" class="list-group-item d-flex">
            <div class>
              <img :src="product.image_link" style="width:120px; height:100px; object-fit:cover;" />
            </div>
            <div class="w-25 ml-3">
              <p>
                <b>{{product.name}}</b>
                <br />
                $ {{displayNumberWithComma(product.price)}}
              </p>
              <div @click="updateVisible(product)" class="custom-control custom-switch">
                <input
                  :checked="product.is_visible == 1 ? true: false"
                  type="checkbox"
                  class="custom-control-input bg-success"
                />
                <label class="custom-control-label">{{ product.is_visible == 1? 'show' : 'hide' }}</label>
              </div>
            </div>
            <div class="ml-auto w-25 text-right">
              <div>
                <button class="btn btn-sm btn-success" @click="preview(product)">
                  <i class="far fa-eye"></i>
                </button>
                <button class="btn btn-sm btn-info" @click="stocks(product.id)">
                  <i class="fas fa-book-medical"></i>
                </button>
              </div>
              <p>
                SKU: {{product.sku}}
                <br />
                <span
                  :class="product.stock_label_id == 0 ? 'text-danger':
                    product.stock_label_id == 2 ? 'text-warning': 'text-success'
                  "
                >{{product.stock_label}}</span>
                <!-- {{product.is_visible == 1? 'In Stock' : 'Out of Stock'}} -->
                <br />Remaining qty:
                <b>{{product.quantity}} / {{product.unit}}</b>
              </p>
            </div>
          </li>
        </ul>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
      <div class="col-lg-4 col-md-4">
        <div class="p-5" style="height:400px">
          <h3>Quick Details</h3>
          <br />
          <br />
          <h4>
            <i class="fas fa-times-circle text-danger"></i>
            {{numberOfOutOfStock}} Items
            <span class="text-secondary">Out of Stock</span>
          </h4>
          <br />
          <h4>
            <i class="fas fa-exclamation-circle text-warning"></i>
            {{numberOfLowOfStock}} Items
            <span class="text-secondary">Low of Stock</span>
          </h4>
          <br />
          <h4>
            <i class="fas fa-check-double text-success"></i>
            {{numberOfInStock}} Items
            <span class="text-secondary">In Stock</span>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["propsproducts", "propscategories"],
  data() {
    return {
      products: [],
      perPage: 5,
      currentPage: 1,
      searchedProducts: [],
      search: "",
      selectedStocks: "All",
    };
  },

  created() {
    this.products = this.propsproducts;
    this.searchedProducts = this.products;
  },
  methods: {
    btnSearch() {
      //   people.filter(p => p.dinner == "sushi");
      //   let products = this.products;
      let query = this.search.toLowerCase();
      let heystack = this.products;
      let searched = heystack.filter(
        (item) =>
          item.name.toLowerCase().indexOf(query) >= 0 ||
          item.sku.toLowerCase().indexOf(query) >= 0
      );
      this.searchedProducts = searched;
    },
    updateVisible(data) {
      //   data.is_visible = !data.is_visible;
      axios
        .post("/admin/product/visible", {
          product_id: data.id,
          bol: !data.is_visible,
        })
        .then((res) => {
          //   console.log(res.data);
          data.is_visible = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    preview(product) {
      var link =
        product.is_bundle == 1
          ? "/admin/products/bundle/" + product.id + "/edit"
          : "/admin/products/" + product.id + "/edit";
      window.location.href = link;
    },
    stocks(id) {
      var link = "/admin/products/" + id + "/instocks";
      window.location.href = link;
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
  computed: {
    filterProducts() {
      let filter = [];
      let products = this.searchedProducts;
      if (this.selectedStocks == "All") {
        filter = this.searchedProducts;
      } else {
        var id = this.selectedStocks;
        var filteredProducts = products.filter(function (product) {
          return product.stock_label_id == id;
        });
        filter = filteredProducts;
      }
      return filter;
    },

    loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      //   console.log(begin);
      //   console.log(end);
      var allproducts = this.filterProducts;
      var pageList = allproducts.slice(begin, end);
      return pageList;
    },

    rows() {
      return this.filterProducts.length;
    },
    numberOfOutOfStock() {
      return this.products.filter((obj) => obj.stock_label_id === 0).length;
    },
    numberOfInStock() {
      return this.products.filter((obj) => obj.stock_label_id === 1).length;
    },
    numberOfLowOfStock() {
      return this.products.filter((obj) => obj.stock_label_id === 2).length;
    },
  },
  // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
