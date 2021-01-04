<style lang="scss" scoped>
.items {
  border: 2px solid lightgray !important;
  .cart-items {
    margin: 20px 0px 20px 0px;
    padding: 20px 15px 0px 15px;
    max-height: 500px;
    overflow-x: hidden; /* Hide horizontal scrollbar */
    overflow-y: scroll; /* Add vertical scrollbar */
    .cart-item {
      padding: 10px;
      background-color: lightgray;
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
          //   background: white;
          position: absolute;
          bottom: 0px;
          right: 5px;
          font-size: 20px;
          .ws {
            font-size: 15px;
          }
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

.main-conatiner {
  @media (min-width: 992px) {
    max-width: 1000px;
  }

  @media (min-width: 1200px) {
    max-width: 1210px;
  }

  @media (min-width: 1300px) {
    max-width: 1250px;
  }

  @media (min-width: 1400px) {
    max-width: 1300px;
  }
}
</style>

<template>
  <div class="container mt-1 mb-5 main-conatiner">
    <div class="row">
      <div class="col-12">
        <users-balance :user="user" :guest="guest"></users-balance>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h4>
          <u>
            <a href="/products">Continue Shopping</a>
          </u>
        </h4>
      </div>
    </div>

    <div v-if="errorMessage" class="row">
      <div class="col-md-12">
        <!-- <div class="alert alert-danger" role="alert">{{ errorMessage }}</div> -->
        <div class="alert alert-danger" role="alert">
          <button
            @click="closeErrorMessage()"
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          {{ errorMessage }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 items">
        <div class="row">
          <div class="col-sm-12 cart-items">
            <div v-if="cart.length == 0" class="text-center mt-5">
              <h3>You Dont Have Selected Products.</h3>
              <h5>
                <a href="/products">Back To Products</a>
              </h5>
            </div>

            <ul class="list-group">
              <li
                v-for="(item, index) in cart"
                :key="index"
                class="list-group-item d-flex cart-item"
                style="margin-bottom:10px;"
              >
                <div>
                  <img :src="item.image_link" class="cart-item-image" />
                </div>
                <div class="cart-item-texts flex-grow-1">
                  <p>
                    <span class="item-name">
                      <b>{{item.name}}</b>
                    </span>
                    <br />

                    <!-- $ {{item.price}}/{{item.unit}} -->
                    <span v-if="user.customer_role == 2">$ {{item.member_price}}/{{item.unit}}</span>
                    <span
                      v-else-if="user.customer_role == 3"
                    >$ {{item.wholesale_price}}/{{item.unit}}</span>
                    <span v-else>$ {{item.price}}/{{item.unit}}</span>
                    <br />
                    <!-- <span
                      v-if="user.customer_role == 3"
                    >WS: $ {{item.wholesale_price}}/{{item.unit}}</span>-->
                    <br />

                    <span class="qty-options">
                      <b>qty:</b>
                      <button type="button" class="plusminus" @click="subQty(item)">
                        <i class="fa fa-minus-circle" aria-hidden="true"></i>
                      </button>
                      <b>{{item.qty}}</b>
                      <button type="button" class="plusminus" @click="addQty(item)">
                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                      </button>
                    </span>
                  </p>
                </div>
                <div class="cart-item-close-container ml-auto">
                  <button type="button" id="x" @click="removeItemInCart(item)">
                    <i class="fa fa-times" aria-hidden="true"></i>
                  </button>
                  <div id="sub-total" class="text-right">
                    <b
                      v-if="user.customer_role == 2"
                    >$ {{displayNumber(item.member_price * item.qty)}}</b>
                    <b
                      v-else-if="user.customer_role == 3"
                    >$ {{displayNumber(item.wholesale_price * item.qty)}}</b>
                    <b v-else>$ {{displayNumber(item.price * item.qty)}}</b>
                    <br />
                    <!-- <span
                      v-if="user.customer_role == 3"
                      class="ws"
                    >WS: $ {{(item.wholesale_price * item.qty).toFixed(2)}}</span>-->
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-4 order-summary">
        <div class="cart-container bg-white">
          <div class="content d-flex flex-column">
            <div class="col-md-12 cart-header">
              <h3 class="text-dark">Order Summary</h3>
            </div>

            <div v-if="guest == 0">
              <!-- SuncLub Order Summary -->
              <div v-if="user.customer_role == 2">
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Current Balance:</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(user.balance)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Order Amount</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(totalAmount)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Discount Amount ({{user.discount}}%)
                        <span class="float-right">
                          <b>-</b>
                        </span>
                        <br />
                        <div v-if="user.customer_role == 2">(Sun Club Member)</div>
                      </td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(getDiscount)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Delivery Type:
                        <br />
                      </td>
                      <td>
                        <b-form-group>
                          <b-form-radio
                            v-model="shipments"
                            name="some-radios"
                            value="deliver"
                          >Deliver</b-form-radio>
                          <b-form-radio
                            v-model="shipments"
                            name="some-radios"
                            value="pickup"
                          >Pick-up</b-form-radio>
                        </b-form-group>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'deliver'">
                      <td colspan="2" v-if="nearestDeliveryZones.length != 0 ">
                        Nearest Delivery Zone:
                        <br />
                        <div class="pl-2 pt-2 text-center">
                          <b>{{nearestDeliveryZones[0].zone_name}} ( {{nearestDeliveryZones[0].f_distance}} km)</b>
                          <br />
                          <i class="fas fa-map-marker mr-2"></i>
                          {{nearestDeliveryZones[0].address}}
                        </div>
                      </td>
                      <td colspan="2" v-if="nearestDeliveryZones.length == 0 ">
                        <div class="text-center">No nearby zones of your address</div>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'pickup'">
                      <td colspan="2" v-if="nearestPickupZones.length != 0 ">
                        Nearest Pick-up Zone:
                        <br />
                        <div class="pl-2 pt-2 text-center">
                          <b>{{nearestPickupZones[0].zone_name}} ( {{nearestPickupZones[0].f_distance}} km)</b>
                          <br />
                          <i class="fas fa-map-marker mr-2"></i>
                          {{nearestPickupZones[0].address}}
                        </div>
                      </td>
                      <td colspan="2" v-if="nearestPickupZones.length == 0 ">
                        <div class="text-center">No nearby zones of your address</div>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'deliver'">
                      <td>Expected Delivery Date:</td>
                      <td class="text-right">{{expected_delivery_dates}}</td>
                    </tr>
                    <tr>
                      <td>Delivery Fee</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(shipmentsPrice)}}</div>
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
                          <div class="text-right font-weight-bold">{{displayNumber(OverAllTotal)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr class="table-light">
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Remaining Balance</td>
                      <td>
                        <!-- $ {{remainingBalance.toFixed(2)}} -->
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(remainingBalance)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-danger">
                      <td>
                        <b>Additonal Charge</b>
                      </td>
                      <td>
                        <!-- <b>$ {{additionalCharge.toFixed(2)}}</b> -->
                        <div class="d-flex justify-content-between">
                          <div class="font-weight-bold">$</div>
                          <div
                            class="text-right font-weight-bold"
                          >{{displayNumber(additionalCharge)}}</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Wholesaler Order Summary -->
              <div v-else>
                <div class="text-center" v-if="user.customer_role == 3">
                  <div>(Wholesaler Minimum Order Amount:)</div>
                  <div class="mb-4">$ {{displayNumber(wholesaler_minimum_order_amount)}}</div>
                </div>
                <table class="table">
                  <tbody>
                    <tr>
                      <td>Order Amount</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(totalAmount)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Discount Amount ({{user.discount}}%)
                        <span class="float-right">
                          <b>-</b>
                        </span>
                        <br />
                        <div v-if="user.customer_role == 3">(Wholesaler)</div>
                      </td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{displayNumber(getDiscount)}}</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Delivery Type:</td>
                      <td>
                        <b-form-group>
                          <b-form-radio
                            v-model="shipments"
                            name="some-radios"
                            value="deliver"
                          >Deliver</b-form-radio>
                          <b-form-radio
                            v-model="shipments"
                            name="some-radios"
                            value="pickup"
                          >Pick-up</b-form-radio>
                        </b-form-group>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'deliver'">
                      <td colspan="2" v-if="nearestDeliveryZones.length != 0 ">
                        Nearest Delivery Zone:
                        <br />
                        <div class="pl-2 pt-2 text-center">
                          <b>{{nearestDeliveryZones[0].zone_name}} ( {{nearestDeliveryZones[0].f_distance}} km)</b>
                          <br />
                          <i class="fas fa-map-marker mr-2"></i>
                          {{nearestDeliveryZones[0].address}}
                        </div>
                      </td>
                      <td colspan="2" v-if="nearestDeliveryZones.length == 0 ">
                        <div class="text-center">No nearby zones of your address</div>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'pickup'">
                      <td colspan="2" v-if="nearestPickupZones.length != 0 ">
                        Nearest Pick-up Zone:
                        <br />
                        <div class="pl-2 pt-2 text-center">
                          <b>{{nearestPickupZones[0].zone_name}} ( {{nearestPickupZones[0].f_distance}} km)</b>
                          <br />
                          <i class="fas fa-map-marker mr-2"></i>
                          {{nearestPickupZones[0].address}}
                        </div>
                      </td>
                      <td colspan="2" v-if="nearestPickupZones.length == 0 ">
                        <div class="text-center">No nearby zones of your address</div>
                      </td>
                    </tr>
                    <tr v-if="shipments == 'deliver'">
                      <td>Expected Delivery Date:</td>
                      <td class="text-right">{{expected_delivery_dates}}</td>
                    </tr>

                    <tr>
                      <td>Delivery Fee</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{ displayNumber(shipmentsPrice)}}</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>Use Coupon</td>
                      <td>
                        <div class="d-flex justify-content-between">
                          <div>$</div>
                          <div class="text-right">{{ displayNumber(shipmentsPrice)}}</div>
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
                          <div class="text-right font-weight-bold">{{displayNumber(OverAllTotal)}}</div>
                        </div>
                      </td>
                    </tr>
                    <!-- <tr v-if="user.customer_role == 3">
                      <td>
                        Wholesaler Minimum
                        <br />Order Amount
                      </td>
                      <td>$ {{wholesaler_minimum_order_amount.toFixed(2)}}</td>
                    </tr>-->
                    <tr class="table-light">
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Guest Order Summary -->
            <div v-else>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Order Amount</td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <div>$</div>
                        <div class="text-right">{{displayNumber(totalAmount)}}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Discount Amount
                      <span class="float-right">
                        <b>-</b>
                      </span>
                      <br />
                    </td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <div>$</div>
                        <div class="text-right">0.00</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Delivery Type:</td>
                    <td>
                      <b-form-group>
                        <b-form-radio v-model="shipments" name="some-radios" value="deliver">Deliver</b-form-radio>
                        <b-form-radio v-model="shipments" name="some-radios" value="pickup">Pick-up</b-form-radio>
                      </b-form-group>
                    </td>
                  </tr>
                  <tr v-if="shipments == 'deliver'">
                    <td>Expected Delivery Date:</td>
                    <td class="text-right">{{expected_delivery_dates}}</td>
                  </tr>
                  <tr>
                    <td>Delivery Fee</td>
                    <td>
                      <div class="d-flex justify-content-between">
                        <div>$</div>
                        <div class="text-right">{{displayNumber(shipmentsPrice)}}</div>
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
                        <div class="text-right font-weight-bold">{{displayNumber(OverAllTotal)}}</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="col-md-12 text-center place-order-btn-container mt-auto">
              <h6 class="text-danger">{{errorMessage}}</h6>
              <button
                type="button"
                class="btn btn-lg btn-primary w-100"
                @click="confirmAdditionalCharge"
                :disabled="placeorder"
              >PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <products-page-modal ref="productmodal"></products-page-modal> -->
    <b-modal ref="confirmAdditionalChargeModal" hide-footer title="Confirm Additional Charge">
      <div class="d-block text-center">
        <h3
          class="mb-5"
        >Your billing account will be charged an additional ${{ additionalCharge.toFixed(2) }}. Continue?</h3>
        <b-row class="mb-2" style="margin-left: 0; margin-right: 0">
          <b-col>
            <b-button variant="outline-danger" block @click="hideAdditionalChargeModal">Cancel</b-button>
          </b-col>
          <b-col>
            <b-button variant="success" block @click="placeOrder">Yes</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <products-warning-modal :minimum="wholesaler_minimum_order_amount"></products-warning-modal>
    <!-- <pickup-zone-modal></pickup-zone-modal>
    <delivery-zone-modal></delivery-zone-modal>-->
  </div>
</template>
<script>


export default {

  props: [
    "action",
    "propproducts",
    "guest",
    "user",
    "sunclubmember",
    "delivery_fee",
    "wholesaler_minimum_order_amount",
    "expected_delivery_dates",
  ],
  data() {
    return {
      products: [],
      shipments: "deliver",
      cart: [],
      sun_wholesale_payment: "",
      placeorder: false,
      errorMessage: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      nearestPickupZones: [],
      nearestDeliveryZones: [],
    };
  },
  computed: {
    shipmentsPrice() {
      if (this.shipments == "deliver") {
        return this.delivery_fee;
      } else {
        return 0;
      }
    },
    totalAmount() {
      if (this.cart.length == 0) {
        return 0.0;
      } else {
        let total = 0;
        this.cart.forEach((cart) => {
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

    getDiscount() {
      let discount = 0;
      if (this.guest == 0) {
        discount = this.totalAmount * (this.user.discount / 100);
      }
      return discount;
    },

    OverAllTotal() {
      let total = 0;
      //total - discount;
      total = this.totalAmount - this.getDiscount;
      total = total + parseFloat(this.shipmentsPrice);
      return total;
    },

    remainingBalance() {
      let balance = this.user.balance - this.OverAllTotal;
      if (balance < 0) {
        balance = 0;
      }
      return balance;
    },

    additionalCharge() {
      let charge = 0;
      //total - discount;
      if (this.user.customer_role == 2) {
        if (this.OverAllTotal > this.user.balance) {
          charge = this.OverAllTotal - this.user.balance;
        }
      }

      return charge;
    },

    cart_badge() {
      return this.cart.length;
    },
  },
  created() {
    this.getCart();
    if (this.guest == 0) {
      this.getLatLong();
    }
  },

  methods: {
    shipmentsChange() {},
    displayNumber(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
    closeErrorMessage() {
      this.errorMessage = "";
    },
    showAdditionalChargeModal() {
      this.$refs["confirmAdditionalChargeModal"].show();
    },
    hideAdditionalChargeModal() {
      this.$refs["confirmAdditionalChargeModal"].hide();
    },
    confirmAdditionalCharge() {
      if (this.additionalCharge > 0) {
        this.showAdditionalChargeModal();
      } else {
        this.placeOrder();
      }
    },
    placeOrder() {
      if (this.cart.length > 0) {
        LoadingOverlay();
        if (this.guest == 1) {
          this.placeorder = true;
          this.guestOrder();
        } else {
          if (this.user.customer_role == 2) {
            this.placeorder = true;
            this.sunClubOrder();
          } else if (this.user.customer_role == 3) {
            this.placeorder = true;

            if (this.totalAmount < this.wholesaler_minimum_order_amount) {
              //   alert(
              //     "wholeslaer minimum order amount is " +
              //       this.wholesaler_minimum_order_amount +
              //       "  (Message Modal is Work in progress)"
              //   );
              this.placeorder = false;
              LoadingOverlayHide();
              window.scrollTo(0, 0);
              $("#warningModal").modal("show");
            } else {
              this.wholeSaleOrder();
            }
          } else if (this.user.customer_role == 1) {
            this.errorMessage =
              "Please, Set and submit your billing information before placing order.";
            this.placeorder = false;
            window.scrollTo(0, 0);
            LoadingOverlayHide();
          } else {
            LoadingOverlayHide();
          }
        }
      } else {
        this.errorMessage = "You Dont Have Selected Products.";
        window.scrollTo(0, 0);
      }
    },
    sunClubOrder() {
      if (this.remainingBalance < 0) {
        alert("Not Enough Balance");
        this.placeorder = false;
      } else {
        let p_zone_id = null;
        if (this.nearestPickupZones.length != 0) {
          p_zone_id = this.nearestPickupZones[0].id;
        }

        let d_zone_id = null;
        if (this.nearestDeliveryZones.length != 0) {
          d_zone_id = this.nearestDeliveryZones[0].id;
        }

        axios
          .post("/placeorder/sunclub", {
            cart: this.cart,
            shipments: this.shipments,
            pickup_zone_id: p_zone_id,
            delivery_zone_id: d_zone_id,
          })
          .then((res) => {
            console.log(res);
            // alert(res.data);

            // this.sun_wholesale_payment = document
            //   .querySelector('meta[name="sun_wholesale_payment"]')
            //   .getAttribute("content");

            this.cart = [];
            localStorage.setItem("cart", JSON.stringify(this.cart));
            localStorage.setItem("cart_badge", this.cart.length);

            window.location.href = "/placeorder/thankyou";
            this.placeorder = false;
          })
          .catch((err) => {
            //   console.error(err.response.data.data_message);

            this.errorMessage =
              "Payment error: " + err.response.data.data_message;
            this.placeorder = false;
            window.scrollTo(0, 0);
            LoadingOverlayHide();

            //   document.getElementById("err").focus();
            //   console.error(err);
          });
      }
    },
    wholeSaleOrder() {
      let p_zone_id = null;
      if (this.nearestPickupZones.length != 0) {
        p_zone_id = this.nearestPickupZones[0].id;
      }

      let d_zone_id = null;
      if (this.nearestDeliveryZones.length != 0) {
        d_zone_id = this.nearestDeliveryZones[0].id;
      }

      axios
        .post("/placeorder/wholesaler", {
          cart: this.cart,
          shipments: this.shipments,
          pickup_zone_id: p_zone_id,
          delivery_zone_id: d_zone_id,
        })
        .then((res) => {
          this.cart = [];
          localStorage.setItem("cart", JSON.stringify(this.cart));
          localStorage.setItem("cart_badge", this.cart.length);

          if (res.status == 200) {
            window.location.href = "/placeorder/thankyou";
          }
          this.placeorder = false;
        })
        .catch((err) => {
          //   console.error(err.response.data.data_message);
          this.errorMessage =
            "Payment error: " + err.response.data.data_message;
          this.placeorder = false;
          LoadingOverlayHide();
          //   console.error(err);
        });
    },
    guestOrder() {
      if (this.shipments === "deliver") {
        window.location.href = "/products/checkout/billinginfo/deliver";
      } else {
        window.location.href = "/products/checkout/billinginfo/pickup";
      }
    },

    async getCart() {
      LoadingOverlay();

      if (this.ifCartExpired()) {
        this.cart = [];
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } else {
        let lastcart =
          (await JSON.parse(localStorage.getItem("cart") || "null")) || [];
        this.cart = lastcart;
        localStorage.setItem("cart_badge", this.cart.length);
      }

      if (this.cart.length == 0) {
        if (this.user.sun_is_expired == 1) {
          LoadingOverlayHide();
        } else {
          window.location.href = "/products";
        }
      } else {
        LoadingOverlayHide();
      }
    },

    ifCartExpired() {
      const itemStr = localStorage.getItem("cart_expiry");
      if (!itemStr) {
        return true;
      }
      const item = JSON.parse(itemStr);
      const now = new Date();
      if (now.getTime() > item) {
        return true;
      }
      return false;
    },

    setCartExpiry(ttl) {
      const now = new Date();
      let expiry = now.getTime() + ttl;
      localStorage.setItem("cart_expiry", expiry);
    },

    removeItemInCart(data) {
      this.cart.splice(
        this.cart.findIndex(function (i) {
          return i.id === data.id;
        }),
        1
      );
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cart_badge", this.cart.length);
      this.$events.fire("updateCartBadge", "update cart");
      this.setCartExpiry(86400000);
    },
    addQty(product) {
      if (product.qty < product.maxorder + 50) {
        product.qty++;
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.setCartExpiry(86400000);
      }
    },
    subQty(product) {
      if (product.qty > 1) {
        product.qty--;
        localStorage.setItem("cart", JSON.stringify(this.cart));
        this.setCartExpiry(86400000);
      }
    },

    getLatLong() {
      let self = this;
      let param = {
        address: this.user.atr_full_address,
        key: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo",
      };

      $.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        param,
        function (res) {
          let lat = res.results[0].geometry.location.lat;
          let lng = res.results[0].geometry.location.lng;
          self.getZones(lat, lng);
          //   self.zone.address = res.results[0].formatted_address;
          //   self.selectZone(lat, lng);
          //   alert(lat + ", " + lng);
        }
      ).fail(function () {
        console.log("error");
      });
    },
    getZones(lat, lng) {
      let param = {
        lat: lat,
        lng: lng,
      };
      axios({
        method: "get",
        url: "/getNearbyPickupZone",
        params: param,
      }).then((res) => {
        this.nearestPickupZones = res.data;
      });
      axios({
        method: "get",
        url: "/getNearbyDeliveryZone",
        params: param,
      }).then((res) => {
        this.nearestDeliveryZones = res.data;
      });
    },
  },
};
</script>
