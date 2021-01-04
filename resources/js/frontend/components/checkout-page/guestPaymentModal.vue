
<template>
  <!-- <form id="guestPlaceOrderForm" name="guestPlaceOrderForm" @submit.prevent="submitButtonClicked()"> -->
  <form id="guestPlaceOrderForm" name="guestPlaceOrderForm" onsubmit="return false">
    <div
      class="modal fade"
      id="guestPaymentModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="guestPaymentModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog guest-payment-modaol-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body guest-payment-modal-body">
            <div class="container product-container">
              <div class="row">
                <div class="col">
                  <h4>
                    <i class="far fa-credit-card"></i> Payment Process
                    <button
                      type="button"
                      class="btn-close float-right"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <i class="fa fa-times-circle" aria-hidden="true"></i>
                    </button>
                  </h4>
                  <div class="accordion" id="accordionExample">
                    <div class="card">
                      <div class="card-header" id="headingOne">
                        <h5 class="mb-0">Personal Information</h5>
                      </div>

                      <div
                        id="collapseOne"
                        class="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body" style="padding: 10px 20px 0px 20px;">
                          <b-row>
                            <b-col md="12">
                              <md-field :style="'margin: 4px 0px 4px 0px;'">
                                <label>Email</label>
                                <md-input name="user_email" v-model="user_email" type="email"></md-input>
                              </md-field>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <md-field :style="'margin: 4px 0px 4px 0px;'">
                                <label>First name</label>
                                <md-input name="first_name" v-model="first_name"></md-input>
                              </md-field>
                            </b-col>
                            <b-col md="6">
                              <md-field :style="'margin: 4px 0px 4px 0px;'">
                                <label>Last name</label>
                                <md-input name="last_name" v-model="last_name"></md-input>
                              </md-field>
                            </b-col>
                          </b-row>

                          <!-- <md-field :style="'margin: 4px 0px 4px 0px;'">
                            <label>Contact Number</label>
                            <md-input name="contact_number" v-model="contact_number"></md-input>
                          </md-field> -->

                          <md-field :style="'margin: 4px 0px 4px 0px;'">
                            <label>Street Address</label>
                            <md-input
                              v-model="address.street_address"
                              name="street_address"
                              readonly
                            ></md-input>
                          </md-field>

                          <b-row  :style="'margin-top:20px;'">
                            <b-col md="4">
                              <div class="my-style">
                                <!-- <md-autocomplete
                                  md-input-name="city"
                                  v-model="address.city"
                                  :md-options="cities2"
                                  @md-changed="getCitiesForAutocomplete"
                                  @md-opened="getCitiesForAutocomplete"
                                  readonly
                                  :style="'margin: 4px 0px 4px 0px;'"
                                >
                                  <label>Town/County/City</label>

                                  <template
                                    slot="md-autocomplete-item"
                                    slot-scope="{ item }"
                                  >{{item}}</template>
                                </md-autocomplete> -->

                                    <label>Town/County/City</label>
                                    <v-select
                                        @search="fetchOptions"
                                        v-model="address.city"
                                        :options="cities3"
                                        :multiple="false"
                                        :disabled="true"
                                        :clearable="true"
                                        :searchable="true"
                                        :filterable="true"
                                        :taggable="true"
                                        :no-drop="false"
                                        :push-tags="true"
                                        :select-on-tab="true"
                                    ></v-select>
                              </div>
                            </b-col>
                            <b-col md="4">
                              <!-- <md-field :style="'margin: 4px 0px 4px 0px;'">
                                <label>State</label>
                                <md-select
                                  v-model="address.state"
                                  md-dense
                                  :style="'z-index: 2000;'"
                                  readonly
                                >
                                  <md-option
                                    v-for="(item, index) in states"
                                    :key="index"
                                    :value="item.id"
                                  >{{item.name}}</md-option>
                                </md-select>
                                <input v-model="address.state" name="state" type="hidden" readonly />
                              </md-field> -->
                                <label>State</label>
                                <v-select
                                    label="name"
                                    v-model="address.state"
                                    :reduce="state => state.id"
                                    :options="states2"
                                    :clearable="false"
                                    :disabled="true"
                                ></v-select>
                            </b-col>
                            <b-col md="4">
                              <md-field :style="'margin: 4px 0px 4px 0px;'">
                                <label>Zip</label>
                                <md-input v-model="address.zipcode" name="zipcode" readonly></md-input>
                              </md-field>
                            </b-col>
                          </b-row>


                        <div class="row" style="margin-top:20px;">
                            <br>
                            <div class="col">
                                <label class="text-left float-left">Contact Number</label>
                            </div>
                         </div>

                  <div class="form-row">
                    <div class="form-group col-md-3" style="margin-bottom:0px;">
                            <select v-model="contactNumberType" name="contact_number_type" class="custom-select">
                                <option selected value="Home">Home</option>
                                <option value="Work">Work</option>
                                <option value="Cell">Cell</option>
                            </select>
                    </div>
                        <div class="form-group col-md-9" style="margin-bottom:0px;">
                            <!-- <ValidationProvider name="contactNumber" rules="required"> -->
                                <vue-phone-number-input
                                name="contact_number"
                                @update="onUpdate"
                                :default-country-code="defaultCountry"
                                no-country-selector
                                v-model="contactNumber2"
                                :error="results.isValid == false"
                                 />
                                <label class="text-light" :class="results.isValid == false? 'd-none':'d-block'">.</label>
                                <label class="text-danger" :class="results.isValid != false? 'd-none':'d-block'">Contact Number is not valid in US.</label>
                            <!-- </ValidationProvider> -->
                        </div>
                    </div>


                          <button
                            class="btn btn-info float-right collapsed mb-3"
                            type="button"
                            @click="proceedToBillingInfo()"
                            :disabled="proceedBillingDisabled"
                          >Proceed to Billing information</button>
                          <!-- <button
                            class="btn btn-info float-right collapsed mb-3 mt-3"
                            type="button"
                            @click="proceedToBillingInfo()"
                            :disabled="false"
                          >Proceed to Billing information</button>-->
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header" id="headingTwo">
                        <h5 class="mb-0">Billing Information</h5>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div class="card-body">
                          <div
                            v-if="ErrorMessage.length > 0"
                            class="alert alert-danger"
                            role="alert"
                          >
                            <button
                              type="button"
                              class="close"
                              data-dismiss="alert"
                              aria-label="Close"
                              @click="close()"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                            <div v-for="(msg, index) in ErrorMessage" :key="index">
                              {{msg}}
                              <br />
                            </div>
                          </div>
                          <b-row>
                            <b-col md="6">
                              <label style="padding:0px; margine:0px;">Billing Type</label>
                              <select
                                class="form-control my-select"
                                v-model="billingType"
                                name="billing_token_type"
                                required
                              >
                                <option value="1">CC</option>
                                <option value="2">ACH</option>
                              </select>
                            </b-col>
                            <b-col md="6" v-if="billingType === '1'">
                              <label style="padding:0px; margine:0px;">Card Type</label>
                              <select class="form-control my-select" name="card_type" required>
                                <option value="1">American Express</option>
                                <option value="2">Discover</option>
                                <option value="3">Mastercard</option>
                                <option value="4">Visa</option>
                              </select>
                            </b-col>
                            <b-col md="6">
                              <b-col md="12" v-if="billingType === '2'">
                                <label style="padding:0px; margine:0px;">Account Type</label>
                                <select class="form-control my-select" name="ach_type" required>
                                  <option value="1">Savings</option>
                                  <option value="0">Checking</option>
                                </select>
                              </b-col>
                              <br v-if="billingType === '2'" />
                              <b-col md="12" v-if="billingType === '2'">
                                <label style="padding:0px; margine:0px;">Account Holder Type</label>
                                <select
                                  name="ach_acc_holder_type"
                                  class="form-control my-select"
                                  required
                                >
                                  <option value="0">Personal</option>
                                  <option value="1">Business</option>
                                </select>
                              </b-col>
                            </b-col>
                          </b-row>

                          <div v-if="billingType === '1'">
                            <md-field :style="'margin: 4px 0px 4px 0px;'">
                              <label>Name in the card</label>
                              <md-input name="card_name"></md-input>
                            </md-field>
                            <b-row>
                              <b-col>
                                <md-field :style="'margin: 4px 0px 4px 0px;'">
                                  <label>Credit Card Number</label>
                                  <md-input name="card_number"></md-input>
                                </md-field>
                              </b-col>
                              <b-col>
                                <md-field :style="'margin: 4px 0px 4px 0px;'">
                                  <label>Security Code</label>
                                  <md-input type="password" name="cvv"></md-input>
                                </md-field>
                              </b-col>
                            </b-row>
                            <br />
                            <p class="m-0">Expiration Date</p>
                            <b-row>
                              <b-col md="6">
                                <b-row>
                                  <b-col md="6">
                                    <label style="padding:0px; margine:0px;">Month</label>
                                    <select
                                      class="form-control form-control-sm my-select"
                                      name="exp_month"
                                      required
                                    >
                                      <option
                                        v-for="(month, index) in months"
                                        :value="month"
                                        :key="index"
                                      >{{month}}</option>
                                    </select>
                                  </b-col>
                                  <b-col md="6">
                                    <label style="padding:0px; margine:0px;">Year</label>
                                    <select
                                      class="form-control form-control-sm my-select"
                                      name="exp_year"
                                      required
                                    >
                                      <option
                                        v-for="(year, index) in years"
                                        :value="year.value"
                                        :key="index"
                                      >{{year.year}}</option>
                                    </select>
                                  </b-col>
                                </b-row>
                              </b-col>
                            </b-row>
                          </div>
                          <div v-if="billingType === '2'">
                            <md-field :style="'margin: 4px 0px 4px 0px;'">
                              <label>Account Number</label>
                              <md-input name="ach_account_number"></md-input>
                            </md-field>
                            <md-field :style="'margin: 4px 0px 4px 0px;'">
                              <label>Routing</label>
                              <md-input name="ach_routing"></md-input>
                            </md-field>
                          </div>
                          <br />
                          <button
                            class="btn btn-link float-left"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >Back To Personal Information</button>

                          <button
                            class="btn btn-info float-right mb-3"
                            @click="submitButtonClicked()"
                          >PLACE ORDER</button>

                          <!-- <button class="btn btn-info float-right mb-3" type="submit">PLACE ORDER</button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- end of accordion -->
                  <vue-programmatic-invisible-google-recaptcha
                    ref="invisibleRecaptcha1"
                    :sitekey="'6LcZmaYZAAAAAHVxYaFz_euKnxzFWKFcO3zX94_H'"
                    :elementId="'invisibleRecaptcha1'"
                    :badgePosition="'left'"
                    :showBadgeMobile="false"
                    :showBadgeDesktop="true"
                    @recaptcha-callback="recaptchaCallback"
                  ></vue-programmatic-invisible-google-recaptcha>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal Body -->
        </div>
      </div>
      <!-- Modal Dialog -->
    </div>
  </form>
</template>

<script>
import Errors from "../../errorClass";
export default {
  mounted() {
    let self = this;
    $("#guestPaymentModal").on("shown.bs.modal", function () {
      $("#collapseOne").collapse("show");
    });

    const currentYear = new Date().getFullYear();
    for (let index = 0; index < 10; index++) {
      let year = currentYear + index;
      let value = year.toString();
      //   value = parseInt(value.slice(-2));
      value = value.slice(-2);
      let obj = { year: year, value: value };
      this.years.push(obj);
    }

    for (let index = 1; index <= 12; index++) {
      this.months.push(index);
    }
  },
  props: {
    address: Object,
  },
  created() {
    this.getStates();
  },
  data() {
    return {
      cities2: [],
      states: [],
      user_email: "",
      first_name: "",
      last_name: "",
      contact_number: "",
      //   userType: "1",
      billingType: "1",
      years: [],
      months: [],
      errors: new Errors(),
      ErrorMessage: [],

      contactNumber2: null,
      results: {},
      defaultCountry: 'US',
      countriesList: ['US'],
      contactNumberType: 'Home',
      cIsValid: false,
      timer:null,
      cities3:[],
      states2:[]
    };
  },

  methods: {
    fetchOptions (search, loading) {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.timer = setTimeout(() => {
            this.getCities3(search);
        }, 300);
    },
    async getCities3(searching = null) {
      let param;
      param = {
        search: searching,
      };
      await axios({
        method: "get",
        url: "/data/searchcities",
        params: param,
      }).then((res) => {
        this.cities3 = res.data;
      });
  },
    onUpdate (payload) {
        this.results = payload
        this.cIsValid = this.results.isValid
    },
    close() {
      this.ErrorMessage = [];
    },
    proceedToBillingInfo() {
      $("#collapseTwo").collapse("show");
    },
    submitButtonClicked() {
      if (this.billingType == "2") {
        // let arr = ["ACH payment is under construction."];
        // this.ErrorMessage = arr;
        this.$refs.invisibleRecaptcha1.execute();
      } else {
        this.$refs.invisibleRecaptcha1.execute();
      }
    },

    recaptchaCallback(recaptchaToken) {
      LoadingOverlay();

      let url = "/placeorder/guest";
      let myForm = document.getElementById("guestPlaceOrderForm");
      let formData = new FormData(myForm);

      formData.append("g-recaptcha-response", recaptchaToken);
      formData.append("cart", JSON.stringify(this.$parent.cart));
      formData.append("shp", this.$parent.shipments);
      formData.append("city", this.address.city);
      formData.append("state", this.address.state);

      let p_zone_id = null;
      if (this.$parent.nearestPickupZones.length != 0) {
        p_zone_id = this.$parent.nearestPickupZones[0].id;
      }

      let d_zone_id = null;
      if (this.$parent.nearestDeliveryZones.length != 0) {
        d_zone_id = this.$parent.nearestDeliveryZones[0].id;
      }

      formData.append("pickup_zone_id", p_zone_id);
      formData.append("delivery_zone_id", d_zone_id);

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          //   console.log(res);
          this.$parent.cart = [];
          localStorage.setItem("cart", JSON.stringify(this.$parent.cart));
          window.location.href = "/placeorder/thankyou";
          //   LoadingOverlayHide();
        })
        .catch((err) => {
        //   console.error(err);
          LoadingOverlayHide();

          if (err.response.status == 400) {
            let arr = [];
            arr.push(err.response.data.data_message);
            // this.showErrorMessage(arr);
            this.ErrorMessage = arr;
          } else {
            this.errors.record(err.response.data.errors);
            this.ErrorMessage = this.errors.getArrayOfMessages();
          }
          window.scrollTo(0, 0);
          LoadingOverlayHide();
        });
    },
    getStates() {
      axios
        .get("/states")
        .then((res) => {
          this.states = res.data;
          this.states2 = res.data;
          this.$parent.guestAddressModalIsReady = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCitiesForAutocomplete(searchTerm) {
      new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            this.getCities2();
          } else {
            const term = searchTerm.toLowerCase();
            resolve(this.getCities2(term));
          }
        }, 1000);
      });
    },

    async getCities2(searching = null) {
      let param;
      param = {
        search: searching,
      };
      await axios({
        method: "get",
        url: "/data/searchcities",
        params: param,
      }).then((res) => {
        this.cities2 = res.data;
      });
    },
  },
  computed: {
    proceedBillingDisabled() {
      let bol = false;
      if (
        this.address.street_address == "" ||
        this.address.city == "" ||
        this.address.state == "" ||
        this.address.zipcode == "" ||
        this.address.street_address == null ||
        this.address.city == null ||
        this.address.state == null ||
        this.address.zipcode == null ||
        this.user_email == "" ||
        this.first_name == "" ||
        this.last_name == ""
      ) {
        bol = true;
      } else {
        if(this.cIsValid == true){
          bol = false;
        } else {
          bol = true;
        }
      }
      return bol;
    },
  },
};
</script>


<style lang="scss" scoped>
@import "resources/sass/mixins";

.guest-payment-modaol-dialog {
  max-width: 700px;
}
.guest-payment-modal-body {
  padding: 10px 10px;
}
// .product-container {
//   //   background-color: red;
//   position: relative;
//   padding: 0px;
// }
.btn-close {
  //   position: absolute;
  //   top: 10px;
  //   right: 10px;
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
.my-select {
  padding: 0px;
  margin: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>
<style lang="scss">
.md-menu-content.md-select-menu {
  z-index: 1200 !important;
  max-width: 200px !important;
  //   width: 100% !important;
}
.md-menu-content {
  z-index: 1200 !important;
  max-width: 200px !important;
  min-width: 200px !important;
}

.md-menu-content-2 {
  z-index: 1200 !important;
  max-width: 200px !important;
  min-width: 200px !important;
}
</style>
