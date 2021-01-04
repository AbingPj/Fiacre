
<template>
  <div class="row">
    <div class="col-md-4">
      <div class="p-4">
        <h4 class="text-center">Order Summary</h4>
        <table class="table">
          <tbody>
            <tr>
              <td>Order Amount</td>
              <td>
                <div class="d-flex justify-content-between">
                  <div>$</div>
                  <div class="text-right">{{displayNumberWithComma(totalAmount)}}</div>
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
            <!-- <tr>
              <td>Shipments:</td>
              <td>
                <b-form-group>
                  <b-form-radio v-model="shipments" name="some-radios" value="deliver">Deliver</b-form-radio>
                  <b-form-radio v-model="shipments" name="some-radios" value="pickup">Pick-up</b-form-radio>
                </b-form-group>
              </td>
            </tr>-->
            <tr>
              <td>Delivery Fee</td>
              <td>
                <div class="d-flex justify-content-between">
                  <div>$</div>
                  <div class="text-right">{{displayNumberWithComma(delivery_fee)}}</div>
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
                  <div class="text-right font-weight-bold">{{displayNumberWithComma(OverAllTotal)}}</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="col-md-8">
      <div class="p-4">
        <b-row>
          <b-col>
            <h4 class="font-weight-bold">User Information</h4>

            <b-row>
              <b-col md="12">
                <md-field>
                  <label>Email</label>
                  <md-input type="email" name="email" required></md-input>
                </md-field>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="6">
                <md-field>
                  <label>Firt name</label>
                  <md-input name="first_name" required></md-input>
                </md-field>
              </b-col>
              <b-col md="6">
                <md-field>
                  <label>Last name</label>
                  <md-input name="last_name" required></md-input>
                </md-field>
              </b-col>
            </b-row>

            <md-field>
              <label>Contact Number</label>
              <md-input name="contact_number" required></md-input>
            </md-field>

            <md-field>
              <label>Street Address</label>
              <md-input name="street_address" required></md-input>
            </md-field>

            <b-row>
              <b-col md="4">
                <md-autocomplete
                  md-input-name="city"
                  :md-options="cities2"
                  @md-changed="getCitiesForAutocomplete"
                  @md-opened="getCitiesForAutocomplete"
                >
                  <label>City</label>

                  <template slot="md-autocomplete-item" slot-scope="{ item }">{{item}}</template>
                </md-autocomplete>

                <!-- <label style="padding:0px; margine:0px;">State</label>
                <select
                  class="form-control form-control-sm my-select"
                  v-model="selectedState"
                  name="state"
                  @change="statesChange"
                  required
                >
                  <option
                    v-for="(item, index) in states"
                    :value="item.id"
                    :key="index"
                  >{{item.name}}</option>
                </select>-->
              </b-col>
              <b-col md="4">
                <md-field>
                  <label>State</label>
                  <md-select v-model="selectedState" md-dense>
                    <md-option
                      v-for="(item, index) in states"
                      :key="index"
                      :value="item.id"
                    >{{item.name}}</md-option>
                  </md-select>
                  <input v-model="selectedState" name="state" type="hidden" />
                </md-field>
                <!-- <label style="padding:0px; margine:0px;">City</label>
                <select
                  class="form-control form-control-sm my-select"
                  v-model="selectedCity"
                  name="city"
                  required
                >
                  <option
                    v-for="(item, index) in getCities"
                    :value="item.id"
                    :key="index"
                  >{{item.name}}</option>
                </select>-->
              </b-col>
              <b-col md="4">
                <md-field>
                  <label>Zip</label>
                  <md-input name="zipcode" required></md-input>
                </md-field>
              </b-col>
            </b-row>

            <h4 class="font-weight-bold">Billing Information</h4>
            <b-row>
              <b-col md="6">
                <label style="padding:0px; margine:0px;">Billing Type</label>
                <select
                  class="form-control my-select"
                  v-model="billingType"
                  name="billing_token_type"
                >
                  <option value="1">CC</option>
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
                <br />
                <br />
                <b-col md="12" v-if="billingType === '2'">
                  <label style="padding:0px; margine:0px;">Account Holder Type</label>
                  <select name="ach_acc_holder_type" class="form-control my-select" required>
                    <option value="0">Personal</option>
                    <option value="1">Business</option>
                  </select>
                </b-col>
              </b-col>
            </b-row>

            <div v-if="billingType === '1'">
              <md-field>
                <label>Name in the card</label>
                <md-input name="card_name"></md-input>
              </md-field>
              <b-row>
                <b-col>
                  <md-field>
                    <label>Credit Card Number</label>
                    <md-input name="card_number" required></md-input>
                  </md-field>
                </b-col>
                <b-col>
                  <md-field>
                    <label>Security Code</label>
                    <md-input type="password" name="cvv" required></md-input>
                  </md-field>
                </b-col>
              </b-row>
              <br />
              <p class="m-0">Expiration Date</p>
              <br />
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
              <md-field>
                <label>Account Number</label>
                <md-input name="ach_account_number" required></md-input>
              </md-field>
              <md-field>
                <label>Routing</label>
                <md-input name="ach_routing" required></md-input>
              </md-field>
            </div>
          </b-col>
        </b-row>
        <div>
          <div v-for="(item, index) in cart" :key="index">
            <input :name="'product_id['+index+']'" type="hidden" v-model="item.id" />
            <input :name="'product_qty['+index+']'" type="hidden" v-model="item.qty" />
          </div>
          <input type="hidden" name="shp" :value="pickup" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "propproducts",
    "guest",
    "user",
    "sunclubmember",
    "delivery_fee",
    "propscities",
    "propsstates",
    "pickup",
  ],
  data() {
    return {
      products: [],
      cart: [],
      sun_wholesale_payment: "",
      placeorder: false,
      errorMessage: "",
      billingType: "1",
      years: [],
      months: [],
      states: [],
      cities: [],
      selectedCity: "",
      selectedState: "",
      cities2: [],
    };
  },
  computed: {
    totalAmount() {
      if (this.cart.length == 0) {
        return 0.0;
      } else {
        let total = 0;
        this.cart.forEach((cart) => {
          total = total + cart.price * cart.qty;
        });
        return total;
      }
    },

    statesChange() {
      this.selectedCity = {};
    },

    OverAllTotal() {
      let total = 0;
      total = this.totalAmount + parseFloat(this.delivery_fee);
      return total;
    },

    cart_badge() {
      return this.cart.length;
    },
    getCities() {
      let cities = this.propscities;
      let filter = [];
      var id = this.selectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    },
  },
  created() {
    this.getCart();
    this.states = this.propsstates;
  },
  mounted() {
    // const currentYear = new Date().getFullYear();
    // for (let index = 0; index < 10; index++) {
    //   this.years.push(currentYear + index);
    // }
    $("#guestsubmitplaceorder").click(function (e) {
      $("#guestsubmitplaceorder").addClass("running");
      //   $("#guestsubmitplaceorder").attr("disabled", true);
      var form = document.getElementById("guestPlaceOrderForm");
      if (form.checkValidity()) {
        console.log("valid");
        setTimeout(() => {
          $("#guestsubmitplaceorder").attr("disabled", true);
        }, 1000);
      } else {
        console.log("not valid");
        // LoadingOverlayHide();
        $("#guestsubmitplaceorder").removeClass("running");
        // $("#guestsubmitplaceorder").attr("disabled", false);
      }
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

  methods: {
    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },

    async getCart() {
      //   LoadingOverlay();
      let lastcart =
        (await JSON.parse(localStorage.getItem("cart") || "null")) || [];
      this.cart = lastcart;
      localStorage.setItem("cart_badge", this.cart.length);
      if (this.cart.length == 0) {
        window.location.href = "/products";
      } else {
        // LoadingOverlayHide();
        loadingOverlay().cancel(spinHandle);
      }
    },

    getCitiesForAutocomplete(searchTerm) {
      new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            this.getCities2();
          } else {
            const term = searchTerm.toLowerCase();
            resolve(
              this.getCities2(term)
              //   this.countryList.filter(({ name }) =>
              //     name.toLowerCase().includes(term)
              //   )
            );
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
};
</script>

<style lang="scss" scoped>
.my-select {
  padding: 0px;
  margin: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>
