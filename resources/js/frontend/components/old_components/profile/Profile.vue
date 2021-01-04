<template>
  <!-- <form :action="action" method="post" enctype="multipart/form-data">
  <input type="hidden" name="_token" :value="csrf" />-->
  <div>
    <div class="flex-grow-1">
      <b-container class="py-5">
        <b-row>
          <b-col md="8">
            <div class="d-flex mb-3">
              <div class="w-50">
                <h3>
                  <b>PROFILE</b>
                </h3>
              </div>
              <div class="text-right w-50">
                <button
                  type="button"
                  :class="edit == true? 'd-none' : ''"
                  class="btn btn-success"
                  @click="edit = true"
                >EDIT</button>
              </div>
            </div>
            <b-row>
              <b-col md="3">
                <img :src="profileImage" class="w-100" />
                <md-field>
                  <label>Select image</label>
                  <md-file @change="onFileChange" name="image_file" :disabled="!edit==true" />
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
                    <label style="padding:0px; margine:0px;">Title</label>
                    <select
                      v-model="user.title"
                      class="form-control form-control-sm my-select"
                      name="title"
                      :disabled="!edit==true"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </b-col>
                  <b-col md="5">
                    <md-field>
                      <label>Firt name</label>
                      <md-input
                        name="first_name"
                        v-model="user.first_name"
                        required
                        :disabled="!edit==true"
                      ></md-input>
                    </md-field>
                  </b-col>
                  <b-col md="5">
                    <md-field>
                      <label>Last name</label>
                      <md-input
                        name="last_name"
                        v-model="user.last_name"
                        required
                        :disabled="!edit==true"
                      ></md-input>
                    </md-field>
                  </b-col>
                </b-row>
                <md-field>
                  <label>Street Address</label>
                  <md-input
                    name="street_address"
                    v-model="user.street_address"
                    required
                    :disabled="!edit==true"
                  ></md-input>
                </md-field>
                <b-row>
                  <b-col md="4">
                    <label style="padding:0px; margine:0px;">State</label>
                    <select
                      class="form-control form-control-sm my-select"
                      v-model="selectedState"
                      name="state"
                      @change="statesChange"
                      required
                      :disabled="!edit==true"
                    >
                      <option
                        v-for="(item, index) in states"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</option>
                    </select>
                  </b-col>
                  <b-col md="4">
                    <label style="padding:0px; margine:0px;">City</label>
                    <select
                      class="form-control form-control-sm my-select"
                      v-model="selectedCity"
                      name="city"
                      :disabled="!edit==true"
                    >
                      <option
                        v-for="(item, index) in getCities"
                        :value="item.id"
                        :key="index"
                      >{{item.name}}</option>
                    </select>
                  </b-col>
                  <b-col md="4">
                    <md-field>
                      <label>Zip</label>
                      <md-input
                        v-model="user.zipcode"
                        name="zipcode"
                        required
                        :disabled="!edit==true"
                      ></md-input>
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
                      disabled
                    >
                      <option value="1">CC</option>
                      <option value="2">ACH</option>
                    </select>
                  </b-col>
                  <b-col md="6" v-if="billingType === '1'">
                    <label style="padding:0px; margine:0px;">Card Type</label>
                    <select
                      v-model="user.billinginfo.CardType"
                      class="form-control my-select"
                      name="card_type"
                      required
                      disabled
                    >
                      <option value="1">American Express</option>
                      <option value="2">Discover</option>
                      <option value="3">Mastercard</option>
                      <option value="4">Visa</option>
                    </select>
                  </b-col>
                  <b-col md="6">
                    <b-col md="12" v-if="billingType === '2'">
                      <label style="padding:0px; margine:0px;">Account Type</label>
                      <select
                        v-model="user.billinginfo.ACHType"
                        class="form-control my-select"
                        name="ach_type"
                        required
                        disabled
                      >
                        <option value="1">Savings</option>
                        <option value="0">Checking</option>
                      </select>
                    </b-col>
                    <br />
                    <br />
                    <b-col md="12" v-if="billingType === '2'">
                      <label style="padding:0px; margine:0px;">Account Holder Type</label>
                      <select
                        v-model="user.billinginfo.ACHAccountHolderType"
                        name="ach_acc_holder_type"
                        class="form-control my-select"
                        required
                        disabled
                      >
                        <option value="0">Personal</option>
                        <option value="1">Business</option>
                      </select>
                    </b-col>
                  </b-col>
                </b-row>

                <div v-if="billingType === '1'">
                  <md-field>
                    <label>Name in the card</label>
                    <md-input
                      v-model="user.billinginfo.bankName_or_cardName"
                      name="card_name"
                      disabled
                    ></md-input>
                  </md-field>
                  <b-row>
                    <b-col>
                      <md-field>
                        <label>Credit Card Number</label>
                        <md-input
                          v-model="user.billinginfo.Last4"
                          name="card_number"
                          required
                          disabled
                        ></md-input>
                      </md-field>
                    </b-col>
                    <b-col>
                      <md-field>
                        <label>Security Code</label>
                        <md-input
                          v-model="user.billinginfo.CVV"
                          type="password"
                          name="cvv"
                          required
                          disabled
                        ></md-input>
                      </md-field>
                    </b-col>
                  </b-row>
                  <br />
                  <!-- <p class="m-0" v-if="edit == true">Expiration Date</p> -->
                  <br />
                  <b-row>
                    <b-col md="6">
                      <!-- <b-row v-if="edit == true">
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
                              :value="year"
                              :key="index"
                            >{{year}}</option>
                          </select>
                        </b-col>
                      </b-row>-->
                    </b-col>
                  </b-row>
                </div>

                <div v-if="billingType === '2'">
                  <md-field>
                    <label>Account Number</label>
                    <md-input
                      v-model="user.billinginfo.Last4"
                      name="ach_account_number"
                      required
                      disabled
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label>Routing</label>
                    <md-input
                      v-model="user.billinginfo.AchRoutingLast3"
                      name="ach_routing"
                      required
                      disabled
                    ></md-input>
                  </md-field>
                </div>

                <div v-if="userType === '3'">
                  <h4 class="font-weight-bold">Business Information</h4>
                  <b-row>
                    <b-col md="4">
                      <img :src="businessImage" class="w-100" />
                      <md-field>
                        <label>Business Logo</label>
                        <md-file
                          @change="onFileChange2"
                          name="business_image_file"
                          :disabled="!edit==true"
                        />
                      </md-field>
                    </b-col>
                  </b-row>
                  <md-field>
                    <label>Position / Designation</label>
                    <md-input
                      v-model="business_designation"
                      name="business_designation"
                      required
                      :disabled="!edit==true"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label>Organization / Business Name</label>
                    <md-input
                      v-model="business_name"
                      name="business_name"
                      required
                      :disabled="!edit==true"
                    ></md-input>
                  </md-field>
                  <md-field>
                    <label>Business Street Address</label>
                    <md-input
                      v-model="business_street_address"
                      name="business_street_address"
                      required
                      :disabled="!edit==true"
                    ></md-input>
                  </md-field>
                  <b-row>
                    <b-col md="4">
                      <label style="padding:0px; margine:0px;">State</label>
                      <select
                        class="form-control form-control-sm my-select"
                        v-model="bselectedState"
                        name="business_state"
                        @change="bstatesChange"
                        required
                        :disabled="!edit==true"
                      >
                        <option
                          v-for="(item, index) in bstates"
                          :value="item.id"
                          :key="index"
                        >{{item.name}}</option>
                      </select>
                    </b-col>
                    <b-col md="4">
                      <label style="padding:0px; margine:0px;">City</label>
                      <select
                        class="form-control form-control-sm my-select"
                        v-model="bselectedCity"
                        name="business_city"
                        :disabled="!edit==true"
                      >
                        <option
                          v-for="(item, index) in bgetCities"
                          :value="item.id"
                          :key="index"
                        >{{item.name}}</option>
                      </select>
                    </b-col>
                    <b-col md="4">
                      <md-field>
                        <label>Business Zip</label>
                        <md-input
                          v-model="business_zipcode"
                          name="business_zipcode"
                          required
                          :disabled="!edit==true"
                        ></md-input>
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
                    <!-- <label>I want to be a:</label> -->
                    <md-radio
                      v-model="userType"
                      name="subscription"
                      value="2"
                      class="md-primary"
                      :disabled="userType != '2'"
                    >SUN Club Member</md-radio>
                    <md-radio
                      v-model="userType"
                      name="subscription"
                      value="3"
                      class="md-primary"
                      :disabled="userType != '3'"
                    >Wholesale Partner (Discount: {{wholesaler_discount}}%)</md-radio>
                  </ValidationProvider>
                </div>
                <div v-if="userType === '2'">
                  <p>
                    Club Membership means you can directly order
                    produce from the Farm. An
                    <span
                      class="font-weight-bold"
                    >annual membership fee of $50</span>
                    will be needed and you have to agree to pay the
                    given amount over a 50-week growing season.
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
                        :disabled="selectedAmount != item.id"
                      >{{item.price}} (discount:{{item.discount}}%)</md-radio>
                    </ValidationProvider>
                  </div>
                  <div>
                    Valid Until:
                    <span class="text-danger">{{expiration_date}}</span>
                  </div>
                  <div>
                    Status:
                    <span class="text-success" v-if="sun_is_cancelled == 0">Active</span>
                    <span class="text-danger" v-if="sun_is_cancelled == 1">Cancelled</span>
                    <span v-if="sun_is_cancelled == 0" class="float-right">
                      <button
                        @click="CancelMembership()"
                        type="button"
                        class="btn btn-sm btn-success"
                      >Cancel Membership</button>
                    </span>
                  </div>
                </div>
              </md-card-content>
            </md-card>
          </b-col>
        </b-row>
        <b-row v-if="edit == true">
          <b-col offset-md="2" md="6">
            <br />
            <br />
            <p>
              By clicking Submit, I confirm that the given information
              is true, complete and accurate.
            </p>
            <b-button
              onclick="LoadingOverlay()"
              class="float-right"
              type="submit"
              variant="success"
              size="lg"
            >Submit</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <cancel-membership-modal :cancel_action="cancel_action"></cancel-membership-modal>
  </div>
  <!-- </form> -->
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
    "action",
    "propssunclub_choices",
    "wholesaler_discount",
    "cancel_action",
  ],
  data() {
    return {
      profileImage: "/img/sunfarmacy/default-user.png",
      businessImage: "/img/no-product-image.png",
      userType: "1",
      selectedAmount: 1,
      billingType: "1",
      years: [],
      months: [],
      states: [],
      cities: [],
      selectedCity: "",
      selectedState: "",
      bstates: [],
      bselectedCity: "",
      bselectedState: "",
      user: {},

      business_designation: "",
      business_name: "",
      business_street_address: "",
      business_zipcode: "",
      sunclub_choices: [],

      sun_is_cancelled: 0,

      expiration_date: "",

      edit: false,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    };
  },

  created() {
    this.getStates();
    this.user = this.propsuser;
    this.profileImage = this.user.image_path;
    this.selectedCity = this.user.city;
    this.selectedState = this.user.state;

    if (this.user.billinginfo.CC_or_ACH == "CC") {
      this.billingType = "1";
    } else {
      this.billingType = "2";
    }

    this.sunclub_choices = this.propssunclub_choices;
    this.selectedAmount = this.user.sunclub_choice_id;
    this.userType = "" + this.user.customer_role;

    if (this.user.customer_role == 2) {
      this.sun_is_cancelled = this.user.sunclub.is_cancelled;
      this.expiration_date = this.user.sunclub.expiration_date;
    }

    if (this.user.customer_role == 3) {
      this.businessImage = this.user.business.business_image_path;
      this.business_designation = this.user.business.designation;
      this.business_name = this.user.business.business_name;
      this.business_street_address = this.user.business.street_address;
      this.bselectedCity = this.user.business.city;
      this.bselectedState = this.user.business.state;
      this.business_zipcode = this.user.business.zipcode;
    }

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

    CancelMembership() {
      $("#cancelMembershipModal").modal("show");
    },
  },

  mounted() {
    const currentYear = new Date().getFullYear();
    for (let index = 0; index < 10; index++) {
      this.years.push(currentYear + index);
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
