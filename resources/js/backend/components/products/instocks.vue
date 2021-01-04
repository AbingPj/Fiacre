<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">
            <div class="d-flex">
              <div class="mr-2">
                <a href="/admin/products" class="btn btn-success float-right rounded-0 text-light">
                  <i class="fas fa-chevron-circle-left"></i>
                </a>
              </div>
              <div>Products</div>
            </div>
          </h2>
          <br />
          <h3 class="text-success">
            <b>{{product.name}} In-Stocks</b>
          </h3>

          <h4>
            Remaining Quantity:
            <b>{{product.quantity}} / {{product.unit}}</b>
            <button @click="showModal()" class="ml-2 btn btn-info">
              <!-- <i class="fas fa-sign-in-alt"></i> -->
              <i class="fas fa-book-medical"></i> Add Quantity
            </button>
          </h4>
          <br />
          <img :src="product.image_link" style="with:200px; height:150px; object-fit:cover;" />
          <br />
          <br />
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4 class="text-success">
            <b>In-Stocks Records</b>
          </h4>
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th scope="col">Date</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in instocks" :key="index">
                  <!-- <th scope="row">1</th> -->
                  <td>{{item.date_label}}</td>
                  <td>{{item.quantity}} / {{product.unit}}</td>
                  <td>
                    <button class="btn btn-sm btn-info" @click="stockEdit(item)">edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <admin-products-in-stocks-modal ref="instock_modal"></admin-products-in-stocks-modal>
    <admin-products-in-stocks-modal-update ref="instock_modal_update"></admin-products-in-stocks-modal-update>
  </div>
</template>
<script>
export default {
  props: ["propsinstocks", "propsproduct", "storeaction", "updateaction"],
  data() {
    return {
      product: {},
      instocks: []
    };
  },

  created() {
    this.product = this.propsproduct;
    this.instocks = this.propsinstocks;
  },
  methods: {
    showModal() {
      //   this.$refs.instock_modal.quantiy = this.propsproduct.quantiy;
    //   this.$refs.instock_modal.quantity = this.product.quantity;
      this.$refs.instock_modal.action = this.storeaction;
      this.$refs.instock_modal.id = this.product.id;
      $("#exampleModal").modal("show");
    },
    stockEdit(data) {
      console.log(data);
      this.$refs.instock_modal_update.quantity = data.quantity;
      this.$refs.instock_modal_update.action = this.updateaction;
      this.$refs.instock_modal_update.id = data.id;
      $("#stockUpdateModal").modal("show");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
