<style lang="scss" scoped>
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
        // padding: 10px 0;
        padding: 10px 0px 0px 20px;
        text-align: left;
      }
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

.btn-edit {
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
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
          {{ errorMessage }} <span v-if="needToSetBillingInfo"><a href="/register/success/confirmed">Click Here</a> to set it</span>
        </div>
      </div>
    </div>

    <div class="row">
      <cp-selected-items :cart="this.cart" :customer_role="user.customer_role"></cp-selected-items>
      <div class="col-lg-4 col-md-5 order-summary">
        <div class="cart-container bg-white">
          <div class="content d-flex flex-column">
            <div v-if="guest == 0" class="col-md-12 cart-header">
              <!-- <h4 class="text-dark">Shipping & Coupons</h4> -->
              <h4 class="text-dark">Shipping</h4>
            </div>
            <div v-else class="col-md-12 cart-header">
              <h4 class="text-dark">Shipping</h4>
            </div>
            <table class="table">
              <tbody>
                <tr v-if="guest == 0">
                  <td colspan="2">
                    <div class="mb-2">
                      Your Address:
                      <button
                        type="button"
                        class="btn-edit float-right"
                        @click="editAddress()"
                      >
                        <!-- <i class="fas fa-pencil-alt"></i> -->
                        <i class="fas fa-edit"></i>
                      </button>
                    </div>
                    <div class="ml-3">
                      <i class="fas fa-map-marker mr-2"></i>
                      {{user.atr_full_address}}
                    </div>
                  </td>
                </tr>

                <tr v-if="guest == 1">
                  <td colspan="2">
                    <div class="mb-2">
                      Your Address:
                      <button
                        v-if="guestHasAddress"
                        type="button"
                        class="btn-edit float-right"
                        @click="editAddress()"
                      >
                        <i class="fas fa-edit"></i>
                      </button>
                    </div>
                    <div class="ml-3">
                      <div v-if="guestHasAddress">
                        <i class="fas fa-map-marker mr-2"></i>
                        {{guestAddress}}
                        <!-- {{guestAddress.street_address}},{{guestAddress.city}},{{guestAddress.state}},{{guestAddress.zipcode}} -->
                      </div>

                      <div v-else class="text-center">
                        <button
                          class="btn btn-sm btn-info"
                          @click="showGuestAddressModal()"
                        >Enter your address here</button>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div class="mb-2">Delivery Type:</div>
                    <div class="form-group ml-3 mb-0">
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="deliver"
                          v-model="shipments"
                        />
                        <label class="form-check-label" for="inlineRadio1">Deliver</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          value="pickup"
                          v-model="shipments"
                        />
                        <label class="form-check-label" for="inlineRadio2">Pick-up</label>
                      </div>
                    </div>
                  </td>
                </tr>

                <tr v-if="shipments == 'deliver'">
                  <td colspan="2" v-if="nearestDeliveryZones.length != 0 ">
                    <div class="mb-2">Nearest Delivery Zone:</div>
                    <div class="ml-3">
                      <b>{{nearestDeliveryZones[0].zone_name}} ( {{nearestDeliveryZones[0].f_distance}} km)</b>
                      <br />
                      <i class="fas fa-map-marker mr-2"></i>
                      {{nearestDeliveryZones[0].address}}
                    </div>
                  </td>
                  <td colspan="2" v-if="nearestDeliveryZones.length == 0 ">
                    <div class="ml-3">No nearby zones of your address</div>
                  </td>
                </tr>

                <tr v-if="shipments == 'pickup'">
                  <td colspan="2" v-if="nearestPickupZones.length != 0 ">
                    <div class="mb-2">Nearest Pick-up Zone:</div>
                    <div class="ml-3">
                      <b>{{nearestPickupZones[0].zone_name}} ( {{nearestPickupZones[0].f_distance}} km)</b>
                      <br />
                      <i class="fas fa-map-marker mr-2"></i>
                      {{nearestPickupZones[0].address}}
                    </div>
                  </td>
                  <td colspan="2" v-if="nearestPickupZones.length == 0 ">
                    <div class="ml-3">No nearby zones of your address</div>
                  </td>
                </tr>

                <tr v-if="shipments == 'deliver'">
                  <td>Expected Delivery Date:</td>
                  <td class="text-right">{{expected_delivery_dates}}</td>
                </tr>

                <!-- <tr v-if="guest == 0">
                  <td colspan="2">
                    <div class="mb-2">
                      Coupon:
                      <i class="fas fa-ticket-alt ml-2"></i>
                      <span v-if="couponMessage" class="text-success ml-2">{{couponMessage}}</span>
                      <button
                        v-if="couponCodeIsValid"
                        type="button"
                        class="btn-edit float-right text-danger"
                        @click="cancelCoupon()"
                      >
                        <i class="fas fa-times-circle"></i>
                      </button>
                    </div>
                    <div class="input-group">
                      <input
                        v-model="coupon_code"
                        type="text"
                        class="form-control rounded-0"
                        placeholder="Coupon Code"
                        :readonly="couponCodeIsValid"
                      />
                      <div class="input-group-append">
                        <button
                          class="btn btn-success rounded-0"
                          @click="applyCode()"
                          :disabled="couponCodeIsValid"
                        >Apply</button>
                      </div>
                    </div>
                    <span v-if="couponCodeIsValid" class="text-center">{{coupon.description}}</span>
                  </td>
                </tr> -->
              </tbody>
            </table>

            <div class="col-md-12 cart-header mt-3">
              <h4 class="text-dark">Order Summary</h4>
            </div>

            <div v-if="guest == 0">
              <!-- SuncLub Order Summary -->
              <div v-if="user.customer_role == 2">
                <os-sunclub
                  :user_balance="user.balance"
                  :total_amount="totalAmount"
                  :user_discount="user.discount"
                  :get_discount="getDiscount"
                  :shipments_price="shipmentsPrice"
                  :over_all_total="OverAllTotal"
                  :remaining_balance="remainingBalance"
                  :additionalCharge="additionalCharge"
                  :get_coupon_discount="getCouponDiscount"
                  :coupon="coupon"
                  :coupon_code_is_valid="couponCodeIsValid"
                  :tax="getTotalTaxAmount"
                ></os-sunclub>
              </div>

              <!-- Wholesaler Order Summary -->
              <div v-else>
                <div class="text-center" v-if="user.customer_role == 3">
                  <div class="text-danger">(Wholesaler Minimum Order Amount:)</div>
                  <div class="text-danger mb-4">$ {{displayNumber(wholesaler_minimum_order_amount)}}</div>
                </div>
                <os-wholesaler
                  :total_amount="totalAmount"
                  :user_discount="user.discount"
                  :get_discount="getDiscount"
                  :shipments_price="shipmentsPrice"
                  :over_all_total="OverAllTotal"
                  :get_coupon_discount="getCouponDiscount"
                  :coupon="coupon"
                  :coupon_code_is_valid="couponCodeIsValid"
                  :tax="getTotalTaxAmount"
                ></os-wholesaler>
              </div>
            </div>

            <!-- Guest Order Summary -->
            <div v-else>
              <os-guest
                :total_amount="totalAmount"
                :shipments_price="shipmentsPrice"
                :over_all_total="OverAllTotal"
                :tax="getTotalTaxAmount"
              ></os-guest>
            </div>

            <div class="col-md-12 text-center place-order-btn-container mt-auto">
              <h6 v-if="guest == 0" class="text-danger">{{errorMessage}}</h6>

              <button
                v-if="guest == 0"
                type="button"
                class="btn btn-lg btn-primary w-100"
                @click="confirmAdditionalCharge"
                :disabled="placeorder"
              >PLACE ORDER</button>

              <button
                v-if="guest == 1"
                type="button"
                class="btn btn-lg btn-primary w-100"
                @click="guestProcessToPayment()"
                :disabled="placeorder"
              >PROCEED to PAYMENT</button>
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
            <b-button variant="success" block @click="ifHasNearestZone">Yes</b-button>
          </b-col>
        </b-row>
      </div>
    </b-modal>
    <products-warning-modal :minimum="wholesaler_minimum_order_amount"></products-warning-modal>
    <guest-address-modal></guest-address-modal>
    <guest-payment-modal :address="guestAddressObj"></guest-payment-modal>
    <!-- <pickup-zone-modal></pickup-zone-modal>
    <delivery-zone-modal></delivery-zone-modal>-->
    <div class="modal fade" id="modalLogin3" tabindex="-1" role="dialog" aria-labelledby="modalLogin3" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="modalLogin3">If You Have An Account, Please Sign IN.</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">

              <form method="POST" action="/login" id="login">
                <input type="hidden" name="_token" :value="csrf">


                  <div class="row">
                      <div class="col">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" style="background-color: none;">
                                      <i class="fas fa-envelope fa-fw"></i>
                                  </span>
                              </div>

                             <input type="email" name="email" id="email" placeholder="E-mail Address" maxlength="191" required="required" class="form-control">
                          </div><!--form-group-->
                      </div><!--col-->
                  </div><!--row-->

                  <div class="row">
                      <div class="col">
                          <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                  <span class="input-group-text" style="background-color: none;">
                                      <i class="fas fa-lock fa-fw"></i>
                                  </span>
                              </div>
                              <input type="password" name="password" id="password" placeholder="Password" required="required" class="form-control">
                          </div><!--form-group-->
                      </div><!--col-->
                  </div><!--row-->

                  <div class="row">
                      <div class="col">
                          <div class="form-group clearfix">
                                <button id="loginSubmit" type="submit" class="btn btn-success btn-block">SIGN IN</button>
                          </div><!--form-group-->
                          <p class="text-center">Or</p>
                          <p class="text-center">Do you want to create an Account? if  YES, Please click "Sign UP".
                              <br>
                              Else "<span @click="OpenGuestPaymentModal()"><a>click here</a></span>" to proceed the payment
                          </p>
                          <div class="form-group clearfix">
                             <a href="/register" class="btn btn-info btn-block text-white">SIGN UP</a>
                          </div><!--form-group-->
                      </div><!--col-->
                  </div><!--row-->

                </form>
          </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
const prodWarningModal2 = () =>
  import(
    /* webpackChunkName: "js/f/prodWarningModal2" */ "../products-page/wholesalerWarningModal.vue"
  );
const ChPSelectedItems = () =>
  import(/* webpackChunkName: "js/f/ChPSelectedItems" */ "./selectedItems.vue");
const ChPOSGuest = () =>
  import(
    /* webpackChunkName: "js/f/ChPOSGuest" */ "./order-summary-table/Guest.vue"
  );
const ChPOSSunclub = () =>
  import(
    /* webpackChunkName: "js/f/ChPOSSunclub" */ "./order-summary-table/SunClub.vue"
  );
const ChPOSWholesaler = () =>
  import(
    /* webpackChunkName: "js/f/ChPOSWholesaler" */ "./order-summary-table/Wholesaler.vue"
  );
const ChPGaddressModal = () =>
  import(
    /* webpackChunkName: "js/f/ChPGaddressModal" */ "./guestAddressModal.vue"
  );
const ChPGpaymentModal = () =>
  import(
    /* webpackChunkName: "js/f/ChPGpaymentModal" */ "./guestPaymentModal.vue"
  );

export default {
  components: {
    "products-warning-modal": prodWarningModal2,
    "cp-selected-items": ChPSelectedItems,
    "os-guest": ChPOSGuest,
    "os-sunclub": ChPOSSunclub,
    "os-wholesaler": ChPOSWholesaler,
    "guest-address-modal": ChPGaddressModal,
    "guest-payment-modal": ChPGpaymentModal,
  },
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
      shipmentsOptions: [
        { text: "Deliver", value: "deliver" },
        { text: "Pick-up", value: "pickup" },
      ],
      cart: [],
      sun_wholesale_payment: "",
      placeorder: false,

      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      nearestPickupZones: [],
      nearestDeliveryZones: [],
      errorMessage: "",
      //   couponErrorMessage: "",
      coupon_code: "",
      couponMessage: "",
      coupon: {},
      couponCodeIsValid: false,

      guestHasAddress: false,
      guestAddress: "",
      guestAddressObj: {},

      guestAddressModalIsReady: false,

      needToSetBillingInfo: false,
      googleAPIKEY: process.env.MIX_GOOGLE_API_KEY
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

    getCouponDiscount() {
      let discount = 0;
      if (this.couponCodeIsValid) {
        if (this.coupon.is_percentage) {
          discount = this.totalAmount * (this.coupon.discount_amount / 100);
        } else {
          discount = this.coupon.discount_amount;
        }
      }
      return discount;
    },

    getTotalTaxAmount() {
        let tax = 0;
        if (this.cart.length == 0) {
            tax = 0.0;
        } else {

            let total = 0;
            this.cart.forEach((cart) => {
            if (this.user.customer_role == 2) {
                total = total + cart.atr_tax_amount_sc * cart.qty;
            } else if (this.user.customer_role == 3) {
                total = total + cart.atr_tax_amount_ws * cart.qty;
            } else {
                total = total + cart.atr_tax_amount * cart.qty;
            }
            });
            return total;
        }
        return tax;
    },

    OverAllTotal() {
      let total = 0;
      //total - discount;
      total = this.totalAmount - this.getDiscount;
      if (this.couponCodeIsValid) {
        total = total - this.getCouponDiscount;
      }
      total = total + parseFloat(this.shipmentsPrice);
      total = total + this.getTotalTaxAmount;
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
      this.getLatLong(this.user.atr_full_address);
    }
  },

  methods: {
    guestProcessToPayment() {
    // $("#modalLogin3").modal("show");
      this.needToSetBillingInfo = false;
      if (this.guestHasAddress) {
        if (this.shipments == "deliver") {
          if (this.nearestDeliveryZones.length == 0) {
            this.errorMessage =
              "Your adress does not have nearest delivery zone.";
            window.scrollTo(0, 0);
          } else {
            $("#modalLogin3").modal("show");
            // $("#guestPaymentModal").modal("show");
          }
        } else {
          if (this.nearestPickupZones.length == 0) {
            this.errorMessage =
              "Your adress does not have nearest pick-up zone.";
            window.scrollTo(0, 0);
          } else {
            $("#modalLogin3").modal("show");
            // $("#guestPaymentModal").modal("show");
          }
        }
      } else {
        this.errorMessage =
          'Please, Enter your "address" before proceed to payment';
        // this.placeorder = false;
        window.scrollTo(0, 0);
      }
    },
    OpenGuestPaymentModal(){
        $("#modalLogin3").modal("hide");
        $("#guestPaymentModal").modal("show");
    },
    showGuestAddressModal() {

      if (this.guestAddressModalIsReady) {
        $("#guestAddressModal").modal("show");
      }
    },
    applyCode() {
      LoadingOverlay();
      this.couponMessage = "";
      if (this.coupon_code) {
        axios
          .post("/referrals/checkCouponCode", {
            code: this.coupon_code,
          })
          .then((res) => {
            this.couponMessage = res.data.message;
            this.coupon = res.data.coupon;
            this.couponCodeIsValid = true;
            LoadingOverlayHide();
          })
          .catch((err) => {
            console.error(err);
            this.couponCodeIsValid = false;
            this.errorMessage = "Msg: " + err.response.data.error_message;
            //   this.placeorder = false;
            window.scrollTo(0, 0);
            LoadingOverlayHide();
          });
      }
    },
    cancelCoupon() {
      this.couponCodeIsValid = false;
      this.coupon = [];
      this.coupon_code = "";
      this.couponMessage = "";
    },
    editAddress() {
      if (this.guest == 0) {
        LoadingOverlay();
        window.location.href = "/myprofile";
      } else {
        if (this.guestAddressModalIsReady) {
          $("#guestAddressModal").modal("show");
        }
      }
    },
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
      //   this.couponErrorMessage = "";
    },

    showAdditionalChargeModal() {
      this.$refs["confirmAdditionalChargeModal"].show();
    },
    hideAdditionalChargeModal() {
      this.$refs["confirmAdditionalChargeModal"].hide();
    },
    confirmAdditionalCharge() {
      this.needToSetBillingInfo = false;
      if (this.additionalCharge > 0) {
        this.showAdditionalChargeModal();
      } else {
        if (this.user.customer_role == 1) {
            this.errorMessage =
              "Please, Complete and submit your billing information before placing order.";
            this.placeorder = false;
            this.needToSetBillingInfo = true;
            window.scrollTo(0, 0);
            LoadingOverlayHide();
        }else{
            this.ifHasNearestZone();
        }
      }
    },

    ifHasNearestZone() {
      if (this.shipments == "deliver") {
        if (this.nearestDeliveryZones.length == 0) {
          this.errorMessage =
            "Your adress does not have nearest delivery zone.";
          window.scrollTo(0, 0);
          this.hideAdditionalChargeModal();
        } else {
          this.placeOrder();
        }
      } else {
        if (this.nearestPickupZones.length == 0) {
          this.errorMessage = "Your adress does not have nearest pick-up zone.";
          window.scrollTo(0, 0);
          this.hideAdditionalChargeModal();
        } else {
          this.placeOrder();
        }
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
              "Please, Complete and submit your billing information before placing order.";
            this.placeorder = false;
            this.needToSetBillingInfo = true;
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

        let code = this.couponCodeIsValid ? this.coupon_code : null;

        axios
          .post("/placeorder/sunclub", {
            cart: this.cart,
            shipments: this.shipments,
            pickup_zone_id: p_zone_id,
            delivery_zone_id: d_zone_id,
            coupon_code: code,
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

      let code = this.couponCodeIsValid ? this.coupon_code : null;

      axios
        .post("/placeorder/wholesaler", {
          cart: this.cart,
          shipments: this.shipments,
          pickup_zone_id: p_zone_id,
          delivery_zone_id: d_zone_id,
          coupon_code: code,
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

    showGuestAddress(address) {
      this.getLatLong(address);
    },

    getLatLong(address) {
      let self = this;

        let param = {
          address: address,
          key: this.googleAPIKEY,
        };

        $.get(
          "https://maps.googleapis.com/maps/api/geocode/json",
          param,
          function (res) {
            let lat = res.results[0].geometry.location.lat;
            let lng = res.results[0].geometry.location.lng;
            self.getZones(lat, lng);
          }
        ).fail(function () {
          console.log("error");
        });

    //   let param = {
    //     q: address,
    //     key: "4f3f49ebea4488",
    //     format: "json",
    //   };

    //   $.get("https://us1.locationiq.com/v1/search.php", param, function (res) {
    //     let lat = Number(res[0].lat);
    //     let lng = Number(res[0].lon);
    //     self.getZones(lat, lng);
    //   }).fail(function () {
    //     console.log("error");
    //   });
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
