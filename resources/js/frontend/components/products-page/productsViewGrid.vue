
<style lang="scss" scoped>
@import "resources/sass/mixins";
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

        @media (min-width: 806px) and (max-width: 850px) {
          width: 150px;
          height: 115px;
        }

        @media (min-width: 851px) and (max-width: 899px) {
          width: 160px;
          height: 125px;
        }

        @media (min-width: 900px) and (max-width: 965px) {
          width: 170px;
          height: 135px;
        }

        @media (min-width: 995px) and (max-width: 1130px) {
          width: 160px;
          height: 125px;
        }

        @media (min-width: 1070px) and (max-width: 1130px) {
          width: 170px;
          height: 135px;
        }

        // 1131 - 1210

        @media (min-width: 1211px) and (max-width: 1235px) {
          width: 155px;
          height: 120px;
        }

        @media (min-width: 1236px) and (max-width: 1305px) {
          width: 160px;
          height: 125px;
        }

        @media (min-width: 1306px) and (max-width: 1405px) {
          width: 170px;
          height: 135px;
        }

        @media (min-width: 1570px) and (max-width: 1868px) {
          width: 195px;
          height: 160px;
        }

        @media (min-width: 1869px) and (max-width: 1899px) {
          width: 170px;
          height: 135px;
        }

        @media (min-width: 1900px) and (max-width: 1979px) {
          width: 175px;
          height: 145px;
        }

        @media (min-width: 2050px) and (max-width: 2100px) {
          width: 190px;
          height: 155px;
        }

        @media (min-width: 2101px) and (max-width: 2119px) {
          width: 195px;
          height: 160px;
        }

        @media (min-width: 2120px) and (max-width: 2179px) {
          width: 200px;
          height: 165px;
        }

        @media (min-width: 2180px) and (max-width: 2273px) {
          width: 205px;
          height: 170px;
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
        //   height: 38%;
          height: 30%;
        }
      }

      .prod-text-price {
        position: absolute;
        top: 0%;
        left: 0%;
        background: rgba(0, 0, 0, 0.6);
        width: 75%;
        height: 17%;
        font-size: 15px;
        color: white;
        padding-left: 5px;
        text-align: left;
        @include mobile {
          height: 18%;
          width: 100%;
        }
      }
    }
  }
}
</style>
<template>
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

               <div class="prod-text-price">
                <b>$ {{updateProductPrice(prod)}} / {{prod.unit}}</b>
              </div>


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
                <!-- <br />
                <b>$ {{updateProductPrice(prod)}} / {{prod.unit}}</b> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["products", "customer_role", "display"],
  //   computed: {
  //     computedProductsData() {
  //       return this.products;
  //     },
  //   },

  methods: {
    showAddToCartModal(data) {
      this.$parent.showAddToCartModal(data);
    },
    updateProductPrice(product) {
      let customer_role = this.$parent.user.customer_role;
      let price =
        customer_role == 2
          ? product.member_price
          : customer_role == 3
          ? product.wholesale_price
          : product.price;
      return this.displayNumberWithComma(price);
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
