<template>
  <div>
    <div
      class="modal fade"
      id="selectProductsModal2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog product-modaol-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body product-modal-body">
            <button class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="container product-container">
              <div class="row">
                <div class="col">
                  <h5>Select Product</h5>
                  <div class="input-group mt-3 mb-0 border-info">
                    <input
                      id="searchInput"
                      v-model="search"
                      type="text"
                      class="form-control"
                      placeholder="Search product`s name or product`s SKU"
                      @keyup="searchType()"
                    />
                    <!-- <div class="input-group-append">
                      <span class="input-group-text">Filter</span>
                    </div>-->
                  </div>
                  <div
                    class="border border-info overflow-auto"
                    style="min-height:250px; max-height:250px;"
                  >
                    <ul class="list-group list-group-flush">
                      <li v-for="(item, index) in products" :key="index" class="list-group-item">
                        <img
                          :src="item.image_link"
                          style="width: 25px; height: 25px; object-fit: cover;"
                        />
                        {{item.name}}
                        <span
                          style="font-size:10px;"
                        >({{item.sku}})</span>
                        <button
                          type="button"
                          class="btn btn-sm float-right"
                          :class="item.selected == false? 'btn-outline-info' : 'btn-info'"
                          @click="select(item)"
                          :disabled="item.selected == true? true:false"
                        >select</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "resources/sass/mixins";

.product-modaol-dialog {
  max-width: 700px;
}
.product-modal-body {
  padding: 40px 40px;
}
// .product-container {
//   //   background-color: red;
//   position: relative;
//   padding: 0px;
// }
.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
</style>

<script>
export default {
  props: ["selected_products"],
  data() {
    return {
      products: [],
      search: "",
      timer: null,
    };
  },
  created() {
    // this.getProducts();
  },
  methods: {
    select(data) {
      data.selected = true;
      this.$parent.addSelectedProduct(data);
      $("#selectProductsModal2").modal("hide");
    },

    searchType() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        this.getProducts();
      }, 700);
    },

    async getProducts() {
      let param;
      let products;
      param = {
        search: this.search,
      };
      await axios({
        method: "get",
        url: "/api/admin/products",
        params: param,
      }).then((res) => {
        products = res.data.data;
        this.getSelected(products);
      });
    },
    getSelected(data) {
      let selectedProducts = this.selected_products;
      data.forEach((product) => {
        selectedProducts.forEach((sel) => {
          if (product.id == sel.id) {
            product.selected = true;
          }
        });
      });
      this.products = data;
    },
  },
  mounted() {
    let self = this;

    $("#selectProductsModal2").on("shown.bs.modal", function () {
      self.getProducts();
      $("#searchInput").trigger("focus");
    });

    $("#selectProductsModal2").on("hidden.bs.modal", function () {
      //   console.log("SHIT CLOSE");
      self.search = "";
    });
  },
};
</script>
