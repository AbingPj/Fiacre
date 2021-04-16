<template>
  <div>
    <div
      class="modal fade"
      id="remove_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered product-modaol-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body product-modal-body">
                <button class="btn-close" data-dismiss="modal" aria-label="Close">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
                </button>
                <div class="container product-container">
                <div class="row">
                    <div class="col-md-12">
                    <span style="font-size:1rem">Are you sure you want to remove <b>{{ productName }}</b> from your list of recurring products?</span>
                    </div>
                </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" @click="removeRecurr(productID)">Remove</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
  padding: 40px 20px;
}
.product-container {
  //   background-color: red;
  position: relative;
  padding: 0px;
}
.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
.plusminus {
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}

.product-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 8px 8px;
}
.p-image {
  padding-right: 20px;
  margin-right: 0px;
}
.p-content {
  padding-left: 0px;
  margin-left: 0px;
  @include mobile {
    padding: 10px 20px 10px 20px;
  }
}

.minmax-color {
  color: #007bff;
}
</style>

<script>
export default {
  data() {
    return {
        productName: "",
        productID: ""
    };
  },
  methods: {
    removeRecurr(pid) {
        LoadingOverlay();
        axios
        .post("/removeRecurringProduct", {
            id: pid
        })
        .then((res) => {
            window.location.href = "/recurring-products";
        })
        .catch((err) => {
            console.error(err);
            window.location.href = "/recurring-products";
        });
    }
  }
};
</script>
