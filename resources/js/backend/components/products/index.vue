<template>
<div class="d-flex flex-column min-vh-100">
  <div class="row">
    <div class="col-md-6">
      <h2 class="card-title mb-0">Products</h2>
    </div>
    <div class="col-md-6">
      <h2>

      </h2>
    </div>
  </div>
  <br />
  <br />
  <div class="row">
    <div class="col-lg-8 col-md-6">
      <div class="input-group mb-3">
        <input v-model="searchInput" type="text" class="form-control rounded-0" @keyup="searchType()" placeholder="Quick Search" />
        <!-- <input v-model="searchInput" type="text" class="form-control rounded-0" v-on:keyup.enter="btnSearch()" placeholder="Quick Search" /> -->
        <!-- <div class="input-group-append">
          <button class="btn btn-success rounded-0" @click="btnSearch()"><i class="fas fa-search mr-2"></i> Search</button>
        </div> -->
      </div>
    </div>
     <div class="col-lg-4 col-md-6">
      <a href="/admin/products/create/bundle" class="btn btn-danger float-right rounded-0 text-light ml-2"><i class="fas fa-plus mr-2"></i>New Bundle Product</a>
    <a href="/admin/products/create" class="btn btn-success float-right rounded-0 text-light"><i class="fas fa-plus mr-2"></i>New Product</a>
     </div>
    <!-- <div class="col-lg-2 col-md-3">
      <div class="form-group">
        <select class="form-control rounded-0" v-model="selectedStocks" @change="selectedStocksChange()">
          <option disabled selected>Select Stocks Detail</option>
          <option value="All">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Out of Stock">Out of Stock</option>
          <option value="Low of Stock">Low of Stock</option>
        </select>
      </div>
    </div>
    <div class="col-lg-2 col-md-3">
      <div class="form-group">
        <select class="form-control rounded-0" v-model="selectedPerpage" @change="selectedPerpageChange()">
          <option disabled selected>Number of Products Per Page</option>
          <option value="5">By 5</option>
          <option value="10">By 10</option>
          <option value="20">By 20</option>
          <option value="50">By 50</option>
          <option value="100">By 100</option>
          <option value="All">All</option>
        </select>
      </div>
    </div> -->
  </div>
  <div class="row">
      <div class="col-3">
                <div class="form-group">
                <label for="" class="ml-2">Filter: </label>
                <select class="form-control rounded-0" v-model="selectedStocks" @change="selectedStocksChange()">
                <!-- <option disabled selected>Select Stocks Detail</option> -->
                <option value="All">All</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Low of Stock">Low of Stock</option>
                </select>
            </div>
      </div>
      <div class="col-3">
                <div class="form-group">
                <label for="" class="ml-2">Rows per page: </label>
                    <select class="form-control rounded-0" v-model="selectedPerpage" @change="selectedPerpageChange()">
                        <!-- <option disabled selected>Number of Products Per Page</option> -->
                        <!-- <option value="5">By 5</option> -->
                        <option value="All">All</option>
                        <option value="10">10</option>
                        <option value="20">25</option>
                        <option value="50">50</option>
                        <!-- <option value="100">By 100</option> -->

                    </select>
            </div>
      </div>
  </div>

  <div class="row mt-4">
    <div class="col-lg-8 col-md-8">
      <ul class="list-group rounded-0">
        <!-- <li v-for="(product, index) in loadlist" :key="index" class="list-group-item d-flex"> -->
        <li v-for="(product, index) in paginatedproducts.data" :key="index" class="list-group-item d-flex">
          <div class>
            <img :src="product.image_link" style="width:120px; height:100px; object-fit:cover;" />
          </div>
          <div class=" ml-3">
            <p>
              <b>{{product.name}}</b>
              <br />
              $ {{displayNumberWithComma(product.price)}}
            </p>
            <div @click="updateVisible(product)" class="custom-control custom-switch">
              <input :checked="product.is_visible == 1 ? true: false" type="checkbox" class="custom-control-input bg-success" />
              <label class="custom-control-label">{{ product.is_visible == 1? 'show' : 'hide' }}</label>
            </div>
          </div>
          <div class="ml-auto text-right">
            <div>
            <button class="btn btn-sm btn-warning" @click="organization(product)">
                <i class="fas fa-sitemap mr-2"></i>Select Org.
              </button>
              <button class="btn btn-sm btn-success" @click="preview(product)">
                <i class="far fa-eye mr-2"></i>View
              </button>
              <!-- <button class="btn btn-sm btn-info" @click="stocks(product.id)">
                <i class="fas fa-plus-square mr-2"></i>Quantities
              </button> -->
            </div>
            <p>
              <!-- SKU: {{product.sku}} -->
              <br />
              <!-- <span :class="product.atr_qty_label == 'Out of Stock' ? 'text-danger':
                    product.atr_qty_label == 'Low of Stock' ? 'text-warning': 'text-success'
                  ">{{product.atr_qty_label}}</span> -->
              <!-- <br />Remaining Qty:
              <b>{{product.atr_qty}} / {{product.unit}}</b> -->
            </p>
          </div>
        </li>
        <li v-if="noSearchFound">
          <div class="text-center">
              <h6>{{noSearchFoundMsg}}</h6>
          </div>
        </li>
      </ul>

      <p v-if="noSearchFound == false" class="mt-3">Current Page: {{ paginatedproducts.current_page }}</p>
      <pagination :data="paginatedproducts" :limit="5" size="small" align="left" @pagination-change-page="getResults"></pagination>
    </div>
    <div class="col-lg-4 col-md-4">
      <!-- <div class="p-5" style="height:400px">
        <h3>Quick Details</h3>
        <br />
        <br />
        <h4>
          <i class="fas fa-times-circle text-danger"></i>
          {{data.out_of_stock}} Items
          <span class="text-secondary">Out of Stock</span>
        </h4>
        <br />
        <h4>
          <i class="fas fa-exclamation-circle text-warning"></i>
          {{data.low_of_stock}} Items
          <span class="text-secondary">Low of Stock</span>
        </h4>
        <br />
        <h4>
          <i class="fas fa-check-double text-success"></i>
          {{data.in_stock}} Items
          <span class="text-secondary">In Stock</span>
        </h4>
      </div> -->
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      paginatedproducts: {},
      searchInput: "",
      search: "",
      selectedStocks: "All",
      selectedPerpage: "All",
      timer: null,
      noSearchFound: false,
      noSearchFoundMsg: null,
    };
  },

  created() {
    this.getResults();
  },
  methods: {
    searchType() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.btnSearch();
      }, 700);
    },
    getResults(page = 1) {
      let param;
      param = {
        search: this.search,
        page: page,
        stock: this.selectedStocks,
        perpage: this.selectedPerpage,
      };
      this.getData(param);
    },

    getData(param) {
      axios({
        method: "get",
        url: "/api/admin/products2",
        params: param,
      }).then((res) => {
        this.paginatedproducts = res.data;
        this.noSearchFound = false;
      }).catch(error => {
        if(error.response.status == 404) {
            this.paginatedproducts =  {};
            this.noSearchFound = true;
            this.noSearchFoundMsg = error.response.data.msg
        }
      });
    },

    btnSearch() {
      this.search = this.searchInput.toLowerCase();
      this.getResults();
    },

    selectedStocksChange() {
      this.getResults();
    },

    selectedPerpageChange() {
      this.getResults();
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

    organization(product){
      var link = "/admin/product/productSelectOrganization/" + product.id;
      window.location.href = link;
    },
    preview(product) {
      var link =
        product.is_bundle == 1 ?
        "/admin/products/bundle/" + product.id + "/edit" :
        "/admin/products/" + product.id + "/edit";
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
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
