<style lang="scss" scoped>
.orders {
  border: 2px solid lightgray !important;
  .cart-items {
    margin: 20px 0px 20px 0px;
    padding: 20px 15px 0px 15px;
    height: 500px;
    max-height: 600px;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
    .cart-item {
      padding: 10px;
      //   background-color: #f0edbd;
      //   background-color: lightgray;
      .cart-item-image {
        width: 85px;
        height: 85px;
        object-fit: cover;
        padding: 0px;
        margin: 0px 10px 0px 0px;
        background-color: white;
        margin: 0px 10px 0px 0px;
      }
      .cart-item-texts {
        padding-left: 10px;
        text-align: left;
        // background-color: red;
        .item-name {
          font-size: 20px;
        }
        p {
          margin-bottom: 0px;
        }
        .qty-options {
          color: #339f25;
          padding: 0px;
          font-size: 20px;
          .plusminus {
            background: transparent;
            border: 0px;
            color: gray;
            font-size: 20px;
          }
        }
      }

      .cart-item-close-container {
        width: 20%;
        padding: 0px;
        position: relative;
        #x {
          position: absolute;
          top: 0px;
          right: 5px;
          background: transparent;
          border: 0px;
          color: gray;
        }
        #sub-total {
          position: absolute;
          bottom: 0px;
          right: 5px;
          font-size: 20px;
        }
        #sold-out {
          position: absolute;
          top: 0px;
          right: 5px;
        }
      }
    }
  }
}
.order-summary {
  //  border: 2px solid lightgray !important;
  .cart-container {
    min-height: 620px;
    border: 2px solid lightgray !important;
    padding: 10px;
    border-radius: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 10px;
    .content {
      //    background: lightgreen;
      //   position: relative;
      min-height: 600px;
      .cart-header {
        padding: 10px 0;
        text-align: center;
      }
      //   .place-order-btn-container {
      //     position: absolute;
      //     bottom: 0px;
      //     .btn-primary {
      //       background-color: #339f25 !important;
      //     }
      //   }
    }
  }
}
</style>

<template>
  <div class="container mt-1 mb-5">
    <div class="row">
      <!-- <users-balance :user="user" :guest="guest"></users-balance> -->
    </div>
    <div class="row">
      <div class="col-12">
        <h2 style="color: #339f25;">Order Summary</h2>
        <h4>
          Order #: {{order.id}}
          <a
            :href="order.print_url"
            class="btn btn-success float-right text-light"
          >
            <i class="fas fa-print"></i> Print
          </a>
        </h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <div class="row">
          <div class="col">
            <h6>
              <b>{{order.date_label}}</b>
              <!-- <br />Expected Delivery Date:
              <b>{{order.atr_expected_delivery_date}}</b> -->
            </h6>
          </div>
          <div class="col">
            <!-- <div class="float-right" :style="'color:'+setStatusColor(order.status)">
              <h5>
                <b>{{order.status_label}}</b>
              </h5>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 orders">
        <div class="row">
          <div class="pl-3 pt-3">
            <a style="color:#339f25;" href="/orders">Back to orders</a>
          </div>
          <div class="col-sm-12 cart-items">
            <ul class="list-group">
              <li
                v-for="(or_prod, index) in order_products"
                :key="index"
                class="list-group-item d-flex cart-item"
                style="margin-bottom:10px;"
              >
                <div>
                  <img :src="or_prod.product.image_link" class="cart-item-image" />
                </div>
                 <div v-if="or_prod.is_subscription == 0" class="cart-item-texts flex-grow-1">
                  <p>
                    <span class="item-name">
                      <b>{{or_prod.product.name}}</b>
                    </span>
                    <br />
                    $ {{displayNumberWithComma(or_prod.price)}}/{{or_prod.product.unit}}
                    <br />
                    <br />
                    <span class="qty-options">
                      <b>Qty:</b>
                      <b>{{or_prod.updated_quantity}} / {{or_prod.product.unit}}</b>
                    </span>
                  </p>
                </div>
                <div v-if="or_prod.is_subscription == 1" class="cart-item-texts flex-grow-1">
                  <p>
                    <span class="item-name">
                      <b>{{or_prod.product.name}}</b>
                    </span>
                    <br />
                    $ {{displayNumberWithComma(or_prod.price)}}/{{or_prod.product.unit}}
                    <br />
                    <br />
                    <span class="qty-options">
                          $ {{or_prod.price}}  X  {{or_prod.subscription_weeks}} weeks =
                    </span>
                    <br>
                    <span>
                        <a :href="'/order/'+order.id+'/week/'+or_prod.id">Week Details</a>
                    </span>
                  </p>
                </div>
                <div class="cart-item-close-container ml-auto">
                  <!-- <span
                    id="sold-out"
                    v-if="or_prod.updated_quantity == 0"
                    class="text-danger"
                  >SOLD OUT</span> -->
                  <!-- <button id="x" @click="removeItemInCart(item)">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>-->
                  <span v-if="or_prod.is_subscription == 0" id="sub-total">
                    <b>$ {{displayNumberWithComma(or_prod.price * or_prod.updated_quantity)}}</b>
                  </span>
                  <span v-if="or_prod.is_subscription == 1" id="sub-total">
                    <b>$ {{displayNumberWithComma(or_prod.subscription_price)}}</b>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-lg-4 order-summary">
        <div class="cart-container bg-white">
          <div class="content d-flex flex-column">
            <div class="col-md-12 cart-header">
              <h3 class="text-dark">Order Summary</h3>
            </div>

            <div v-if="guest == 0">
              <div>
                <table class="table">
                  <tbody>
                    <tr>
                      <td colspan="2">Organization:
                           <br>
                            <b>{{order.organization.org_name}}</b>
                          <br>
                            <i>{{order.organization.atr_address}}</i>
                          <br>
                      </td>
                    </tr>
                    <tr>
                      <td>Order Amount</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{order.atr_subscription_total_amount_f}}</div>
                        </div>
                      </td>
                    </tr>


                    <tr>
                      <td>{{order.billing_type}}</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{ order.atr_billing_amount_f }}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Total</b>
                      </td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div class="font-weight-bold">$</div>
                          <div
                            class="text-right font-weight-bold"
                          >{{order.atr_subscription_overall_total_amount_f}}</div>
                        </div>
                        <!-- <b>$ {{displayNumberWithComma(OverAllTotal)}}</b> -->
                      </td>
                    </tr>
                    <tr class="table-light">
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
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
  props: ["order", "order_products", "guest", "user"],
  methods: {
    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
    setStatusColor(data) {
      if (data == 2) {
        return "#339f25";
      } else if (data == 3) {
        return "#b6cccf";
      } else {
        return "#d4a83b";
      }
    },
  },
  computed: {
    totalAmount() {
      let total = 0;
      let products = this.order_products;
      products.forEach((cart) => {
        total = total + cart.price * cart.updated_quantity;
      });
      return total;
    },

    getDiscount() {
      let discount = 0;
      discount = this.totalAmount * (this.order.discount_percentage / 100);
      return discount;
    },

    getCouponDiscount() {
      return this.order.atr_coupon_discount;
    },

    OverAllTotal() {
      let total = 0;
      //total - discount;
      total = this.totalAmount - this.getDiscount;
      total = total - this.getCouponDiscount;
      total = total + parseFloat(this.order.delivery_fee);
      return total;
    },
  },
};
</script>
