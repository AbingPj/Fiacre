<template>
  <div
    class="modal fade"
    id="addToCartModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="padding: 0px !important;"
  >
    <div class="modal-dialog modal-dialog-centered product-modaol-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body product-modal-body">
          <button class="btn-close" data-dismiss="modal" aria-label="Close">
            <i class="fa fa-times-circle" aria-hidden="true"></i>
          </button>
          <div class="container product-container">
            <div class="row">
              <div class="col-md-6 p-image">
                <img :src="product.image_link" alt class="product-image" />
              </div>
              <div class="col-md-6 p-content">
                <h4>
                  <b>{{product.name}}</b>
                </h4>
                <h6>
                  <b>$ {{updateProductPrice(product)}} / {{product.unit}}</b>
                </h6>
                <p>
                  {{product.description}}
                  <br />
                  <span v-if="category" class="minmax-color">{{category.name}}</span>
                  <span v-if="sub_category" class="minmax-color">, {{sub_category.name}}</span>
                </p>

                <div class="d-flex">
                  <div>
                    <label class="mr-2">
                      <strong>Qty:</strong>
                    </label>
                  </div>
                  <div>
                    <b-input
                      class="mb-2 mr-2 mb-sm-0"
                      type="number"
                      v-model="product.qty"
                      min="1"
                      style="width: 5em"
                      @keypress="onlyNumber"
                    ></b-input>
                  </div>
                  <div>
                    <span class="mb-2 mr-2 mb-sm-0">
                      <strong>{{ product.unit }}</strong>
                    </span>
                  </div>
                  <div class="ml-auto">
                    <button type="button" class="btn btn-success" @click="addToCart()">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="product.is_bundle == 1" class="row mt-2">
              <div class="col">
                <label>Included Products:</label>
                <ul class="list-group list-group-flush">
                  <li
                    v-for="(item, index) in product.selected_products"
                    :key="index"
                    class="list-group-item"
                    style="padding: 2px 10px 2px 10px;"
                  >
                    <div class="d-flex">
                      <div style="width:50px">{{item.qty}}/{{item.unit}} &nbsp; &nbsp; &nbsp;</div>
                      <div>
                        <img
                          :src="item.image_link"
                          style="width: 20px; height: 20px; object-fit: cover;"
                        />
                        {{item.name}}
                      </div>
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
      product: {},
      update_prodct: {},
      customer_role: 0,
      category: {},
      sub_category: {},
    };
  },
  methods: {
    updateProductPrice(product) {
      if (this.customer_role == 2) {
        return this.displayNumberWithComma(product.member_price);
      } else if (this.customer_role == 3) {
        return this.displayNumberWithComma(product.wholesale_price);
      } else {
        return this.displayNumberWithComma(product.price);
      }
    },
    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
    updateToMax(data) {
      if (data.qty > data.maxorder) {
        data.qty = data.maxorder;
      }
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if (keyCode < 48 || keyCode > 57) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    addToCart() {
      if (this.product.qty > 0) {
        this.$parent.addtoCart(this.product);
        $("#addToCartModal").modal("hide");
      }
    },
    updateQty() {
      $("#updateQtyModal").modal("hide");

      var foundIndex = this.$parent.cart.findIndex(
        (cart) => cart.id == this.update_prodct.id
      );
      this.$parent.cart[foundIndex].qty = this.update_prodct.qty;
      localStorage.setItem("cart", JSON.stringify(this.$parent.cart));
    },
    addQty(product) {
      if (product.qty < product.maxorder) {
        product.qty++;
      }
    },
    subQty(product) {
      if (product.qty > product.minorder) {
        product.qty--;
      }
    },
  },
};
</script>
