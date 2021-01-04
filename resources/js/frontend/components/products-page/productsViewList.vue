<style lang="scss" scoped>
@import "resources/sass/mixins";
#products-list {
  margin-top: 50px;
  @include mobile {
    margin-top: 0px;
  }
  .row.product-item {
    padding: 10px;
    margin-bottom: 20px;

    .prod-list-image-col {
      text-align: center;
      .prod-list-image {
        @include mobile {
          border-radius: 5px 5px 5px 5px;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
    }
    .content {
      @include mobile {
        margin-top: 25px;
      }
      .product-button {
        border-radius: 50%;
      }
      .min-color {
        color: #007bff;
      }
    }
    .product-hr {
      //   border-top: 1px solid red !important;
      border: 1px solid #339f25;
      width: 70%;
    }
  }
}
</style>


<template>
  <div v-if="display == 'list'" id="products-list" class="container">
    <div class="row">
      <div class="col">
        <div
          class="row product-item"
          v-for="(product, index) in products"
          :key="index"
          :style="product.selected == true? 'opacity: 0.5;' : ''"
        >
          <!-- {{product.selected}} -->
          <div class="col-md-5 prod-list-image-col">
            <img class="prod-list-image" :src="product.image_link" alt />
          </div>
          <div class="col-md-7 content">
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
            <h5 v-if="customer_role == 2">$ {{product.member_price.toFixed(2)}}/{{product.unit}}</h5>
            <h5
              v-else-if="customer_role == 3"
            >$ {{product.wholesale_price.toFixed(2)}}/{{product.unit}}</h5>
            <h5 v-else>$ {{product.price.toFixed(2)}}/{{product.unit}}</h5>
            <p>
              {{product.description}}
              <br />

              <span v-if="product.category" class="min-color">{{product.category.name}}</span>
            </p>
          </div>
          <hr class="product-hr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products", "customer_role", "display"],
  methods: {
    showAddToCartModal(data) {
      this.$parent.showAddToCartModal(data);
    },
  },
};
</script>
