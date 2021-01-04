<template>
  <div class="flex-grow-1">
    <b-container class="py-5">
      <p class="font-weight-bold">
        Your account has been confirmed. Please continue with to fill up
        the required information to complete the registration.
      </p>
      <b-row>
        <b-col md="8">
          <b-row>
            <b-col md="3">
              <img :src="profileImage" class="w-100" />
              <md-field>
                <label>Select image</label>
                <md-file @change="onFileChange" name="image_file" />
              </md-field>
            </b-col>
            <b-col>
              <h4 class="font-weight-bold">User Information</h4>
              <b-row>
                <b-col md="12">
                  <md-field>
                    <label>Email</label>
                    <md-input v-model="user.email" disabled></md-input>
                  </md-field>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="2">
                  <md-field>
                    <label>Title</label>
                    <md-select name="title">
                      <md-option value="Mr.">Mr.</md-option>
                      <md-option value="Ms.">Ms.</md-option>
                      <md-option value="Mrs.">Mrs.</md-option>
                    </md-select>
                  </md-field>
                </b-col>
                <b-col md="5">
                  <md-field>
                    <label>Firt name</label>
                    <md-input name="first_name" v-model="user.first_name" required></md-input>
                  </md-field>
                </b-col>
                <b-col md="5">
                  <md-field>
                    <label>Last name</label>
                    <md-input name="last_name" v-model="user.last_name" required></md-input>
                  </md-field>
                </b-col>
              </b-row>

              <md-field>
                <label>Street Address</label>
                <md-input name="street_address" required></md-input>
              </md-field>
              <b-row>
                <b-col md="4">
                  <md-autocomplete
                    md-input-name="city"
                    :md-options="cities2"
                    v-model="newCity1"
                    @md-changed="getCitiesForAutocomplete"
                    @md-opened="getCitiesForAutocomplete"
                  >
                    <label>Town/County/City</label>

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

                  <!-- <md-field>
                    <label>State</label>

                    <md-select v-model="selectedState" @md-selected="statesChange">
                      <md-option
                        v-for="(item, index) in states"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</md-option>
                    </md-select>
                       <input type="hidden" name="state" :value="selectedState" required />
                  </md-field>-->
                </b-col>
                <b-col md="4">
                  <md-field>
                    <label for="font">State</label>
                    <md-select v-model="selectedState" md-dense>
                      <md-option
                        v-for="(item, index) in states"
                        :key="index"
                        :value="item.id"
                      >{{item.name}}</md-option>
                    </md-select>
                    <input v-model="selectedState" name="state" type="hidden" />
                  </md-field>

                  <!-- <md-field>
                    <label>City</label>
                    <md-select v-model="selectedCity">
                      <md-option
                        v-for="(item, index) in getCities"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</md-option>
                    </md-select>
                    <input type="hidden" name="city" :value="selectedCity" />
                  </md-field>-->

                  <!-- <label style="padding:0px; margine:0px;">City</label>
                  <select
                    class="form-control form-control-sm my-select"
                    v-model="selectedCity"
                    name="city"
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
                    required
                  >
                    <option value="1">CC</option>
                    <option value="2">ACH</option>
                  </select>

                  <!-- <md-field>
                    <label>Billing Type</label>
                    <md-select v-model="billingType" name="billing_token_type">
                      <md-option value="1">CC</md-option>
                      <md-option value="2">ACH</md-option>
                    </md-select>
                  </md-field>-->
                </b-col>
                <b-col md="6" v-if="billingType === '1'">
                  <label style="padding:0px; margine:0px;">Card Type</label>
                  <select class="form-control my-select" name="card_type" required>
                    <option value="1">American Express</option>
                    <option value="2">Discover</option>
                    <option value="3">Mastercard</option>
                    <option value="4">Visa</option>
                  </select>

                  <!-- <md-field>
                    <label>Card Type</label>
                    <md-select name="card_type">
                      <md-option value="1">American Express</md-option>
                      <md-option value="2">Discover</md-option>
                      <md-option value="3">Mastercard</md-option>
                      <md-option value="4">Visa</md-option>
                    </md-select>
                  </md-field>-->
                </b-col>
                <b-col md="6">
                  <b-col md="12" v-if="billingType === '2'">
                    <label style="padding:0px; margine:0px;">Account Type</label>
                    <select class="form-control my-select" name="ach_type" required>
                      <option value="1">Savings</option>
                      <option value="0">Checking</option>
                    </select>
                    <!-- <md-field>
                      <label>Account Type</label>
                      <md-select name="ach_type">
                        <md-option value="1">Savings</md-option>
                        <md-option value="0">Checking</md-option>
                      </md-select>
                    </md-field>-->
                  </b-col>
                  <br />
                  <br />
                  <b-col md="12" v-if="billingType === '2'">
                    <label style="padding:0px; margine:0px;">Account Holder Type</label>
                    <select name="ach_acc_holder_type" class="form-control my-select" required>
                      <option value="0">Personal</option>
                      <option value="1">Business</option>
                    </select>
                    <!-- <md-field>
                      <label>Type</label>
                      <md-select name="ach_acc_holder_type">
                        <md-option value="0">Personal</md-option>
                        <md-option value="1">Business</md-option>
                      </md-select>
                    </md-field>-->
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
                        <!-- <md-field>
                          <label>MM</label>
                          <md-select name="exp_month">
                            <md-option v-for="month in months" :key="month" :value="month">
                              {{
                              month
                              }}
                            </md-option>
                          </md-select>
                        </md-field>-->
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
                        <!-- <md-field>
                          <label>YYYY</label>
                          <md-select name="exp_year">
                            <md-option v-for="year in years" :key="year" :value="year">
                              {{
                              year
                              }}
                            </md-option>
                          </md-select>
                        </md-field>-->
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
              <div v-if="userType === '2'">
                <h4 class="font-weight-bold">Business Information</h4>
                <b-row>
                  <b-col md="4">
                    <img :src="businessImage" class="w-100" />
                    <md-field>
                      <label>Business Logo</label>
                      <md-file @change="onFileChange2" name="business_image_file" />
                    </md-field>
                  </b-col>
                </b-row>
                <md-field>
                  <label>Designation / Designation</label>
                  <md-input name="business_designation" required></md-input>
                </md-field>
                <md-field>
                  <label>Organization / Business Name</label>
                  <md-input name="business_name" required></md-input>
                </md-field>
                <md-field>
                  <label>Business Street Address</label>
                  <md-input name="business_street_address" required></md-input>
                </md-field>
                <b-row>
                  <b-col md="4">
                    <md-autocomplete
                      md-input-name="business_city"
                      :md-options="cities2"
                      v-model="newCity2"
                      @md-changed="getCitiesForAutocomplete"
                      @md-opened="getCitiesForAutocomplete"
                    >
                      <label>Town/County/City</label>

                      <template slot="md-autocomplete-item" slot-scope="{ item }">{{item}}</template>
                    </md-autocomplete>

                    <!-- <label style="padding:0px; margine:0px;">State</label>
                    <select
                      class="form-control form-control-sm my-select"
                      v-model="bselectedState"
                      name="business_state"
                      @change="bstatesChange"
                      required
                    >
                      <option
                        v-for="(item, index) in bstates"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</option>
                    </select>-->
                  </b-col>
                  <b-col md="4">
                    <!-- <label style="padding:0px; margine:0px;">City</label>
                    <select
                      class="form-control form-control-sm my-select"
                      v-model="bselectedCity"
                      name="business_city"
                    >
                      <option
                        v-for="(item, index) in bgetCities"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</option>
                    </select>-->

                    <md-field>
                      <label for="font">State</label>
                      <md-select v-model="bselectedState" md-dense>
                        <md-option
                          v-for="(item, index) in states"
                          :key="index"
                          :value="item.id"
                        >{{item.name}}</md-option>
                      </md-select>
                      <input v-model="bselectedState" name="business_state" type="hidden" />
                    </md-field>
                  </b-col>
                  <b-col md="4">
                    <md-field>
                      <label>Business Zip</label>
                      <md-input name="business_zipcode" required></md-input>
                    </md-field>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <md-card class="mb-4">
            <md-card-content>
              <div class="s-user-type">
                <ValidationProvider name="userType" rules="required">
                  <label>I want to be a:</label>
                  <md-radio
                    v-model="userType"
                    name="subscription"
                    value="1"
                    class="md-primary"
                  >SUN Club Member</md-radio>
                  <md-radio
                    v-if="wholesaler_signup_is_hide != 1"
                    v-model="userType"
                    name="subscription"
                    value="2"
                    class="md-primary"
                  >Wholesale Partner (Discount: {{wholesaler_discount}}%)</md-radio>
                </ValidationProvider>
              </div>
              <div v-if="userType === '1'">
                <p>
                  Sun Club Membership means you can directly order produce from the Farm and provide you store product updates. An
                  <span
                    class="font-weight-bold"
                  >annual membership fee of ${{membership_fee.membership_fee}}</span>
                  will give you the opportunity be part of the CSA program SunFarmacy will provide in the future.
                </p>
                <div class="s-user-type">
                  <ValidationProvider name="selectedAmount" rules="required">
                    <label>I choose:</label>

                    <md-radio
                      v-for="item in sunclub_choices"
                      :key="item.id"
                      name="subscription_sunclub_choice_id"
                      v-model="selectedAmount"
                      :value="item.id"
                      class="md-primary"
                    >{{item.price}} (discount:{{item.discount}}%)</md-radio>

                    <!-- <md-radio
                      v-model="selectedAmount"
                      name="subscription_sunclub_choice_id"
                      value="3"
                      class="md-primary"
                    >$2000.00</md-radio>
                    <md-radio
                      v-model="selectedAmount"
                      name="subscription_sunclub_choice_id"
                      value="2"
                      class="md-primary"
                    >$1500.00</md-radio>
                    <md-radio
                      v-model="selectedAmount"
                      name="subscription_sunclub_choice_id"
                      value="1"
                      class="md-primary"
                    >$1000.00</md-radio>-->
                  </ValidationProvider>
                </div>
              </div>
            </md-card-content>
          </md-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col offset-md="2" md="6">
          <br />
          <br />
          <p>
            By clicking Submit, I confirm that the given information
            is true, complete and accurate.
          </p>
          <b-button class="float-right" type="submit" variant="success" size="lg">Submit</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { extend } from "vee-validate";
import { required, email, is } from "vee-validate/dist/rules";
extend("required", {
  ...required,
  message: "This field is required",
});
export default {
  props: [
    "propsuser",
    "propscities",
    "propsstates",
    "propssunclub_choices",
    "wholesaler_discount",
    "wholesaler_signup_is_hide"
  ],
  data() {
    return {
      profileImage: "/img/sunfarmacy/default-user.png",
      businessImage: "/img/no-product-image.png",
      userType: "1",
      selectedAmount: "",
      billingType: "1",
      years: [],
      months: [],
      states: [],
      cities: [],
      selectedCity: "",
      selectedState: "",
      bstates: [],
      bcities: [],
      bselectedCity: "",
      bselectedState: "",
      user: {},
      sunclub_choices: [],

      cities2: [],
      newCity1:"",
      newCity2:"",

      membership_fee: {},
    };
  },

  watch: {
    selectedAmount: function (val) {
      if (val) {
        this.membership_fee = this.sunclub_choices.find(x => x.id === val)
      }
    }
  },

  created() {
    this.selectedAmount = 1;
    this.getStates();
    this.user = this.propsuser;
    this.sunclub_choices = this.propssunclub_choices;
    // this.getCities();
  },

  computed: {
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
    bgetCities() {
      let cities = this.propscities;
      let filter = [];
      var id = this.bselectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    },
  },

  methods: {
    getStates() {
      this.states = this.propsstates;
      this.bstates = this.propsstates;
    },
    statesChange() {
      this.selectedCity = {};
    },

    bstatesChange() {
      //   console.log(this.selectedState);
      this.bselectedCity = {};
    },

    onFileChange(e) {
      console.log(e);
      const file = e.target.files[0];
      this.profileImage = URL.createObjectURL(file);
    },
    onFileChange2(e) {
      console.log(e);
      const file = e.target.files[0];
      this.businessImage = URL.createObjectURL(file);
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
        }, 700);
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

  mounted() {
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
};
</script>

<style lang="scss" scoped>
.s-user-type {
  .md-radio {
    display: flex;
  }
}
.my-select {
  padding: 0px;
  margin: 0px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>
