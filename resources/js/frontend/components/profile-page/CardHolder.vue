<template>
  <div :class="change == true? 'border border-info p-2' : ''">
    <h4 class="font-weight-bold">
      Billing Card Information
      <b-button
        v-if="change == false"
        class="float-right"
        variant="success"
        size="sm"
        @click="changeBillingInfo()"
      >Change</b-button>
      <b-button
        v-if="change == true"
        class="float-right"
        variant="danger"
        size="sm"
        @click="Cancel()"
      >Cancel</b-button>
    </h4>
    <b-row>
      <b-col md="6">
        <label style="padding:0px; margine:0px;">Billing Type</label>
        <select
          class="form-control my-select"
          v-model="billing_token_type"
          :disabled="!change==true"
        >
          <option value="1">CC</option>
          <option value="2">ACH</option>
        </select>
      </b-col>
      <b-col md="6" v-if="billing_token_type === '1'">
        <label style="padding:0px; margine:0px;">Card Type</label>
        <select v-model="card_type" class="form-control my-select" :disabled="!change==true">
          <option value="1">American Express</option>
          <option value="2">Discover</option>
          <option value="3">Mastercard</option>
          <option value="4">Visa</option>
        </select>
      </b-col>
      <b-col md="6">
        <b-col md="12" v-if="billing_token_type === '2'">
          <label style="padding:0px; margine:0px;">Account Type</label>
          <select v-model="ach_type" class="form-control my-select" :disabled="!change==true">
            <option value="1">Savings</option>
            <option value="0">Checking</option>
          </select>
        </b-col>
        <br />
        <br />
        <b-col md="12" v-if="billing_token_type === '2'">
          <label style="padding:0px; margine:0px;">Account Holder Type</label>
          <select
            v-model="ach_acc_holder_type"
            class="form-control my-select"
            :disabled="!change==true"
          >
            <option value="0">Personal</option>
            <option value="1">Business</option>
          </select>
        </b-col>
      </b-col>
    </b-row>

    <div v-if="billing_token_type === '1'">
      <md-field>
        <label>Name in the card</label>
        <md-input v-model="card_name" :disabled="!change==true"></md-input>
      </md-field>
      <b-row>
        <b-col>
          <md-field>
            <label>Credit Card Number</label>
            <md-input v-model="card_number" :disabled="!change==true"></md-input>
          </md-field>
        </b-col>
        <b-col>
          <md-field>
            <label>Security Code</label>
            <md-input v-model="cvv" type="password" :disabled="!change==true"></md-input>
          </md-field>
        </b-col>
      </b-row>
      <br />
      <p class="m-0" v-if="change == true">Expiration Date</p>
      <br />
      <b-row>
        <b-col md="6">
          <b-row v-if="change == true">
            <b-col md="6">
              <label style="padding:0px; margine:0px;">Month</label>
              <select v-model="exp_month" class="form-control form-control-sm my-select">
                <option v-for="(month, index) in months" :value="month" :key="index">{{month}}</option>
              </select>
            </b-col>
            <b-col md="6">
              <label style="padding:0px; margine:0px;">Year</label>
              <select v-model="exp_year" class="form-control form-control-sm my-select">
                <option v-for="(year, index) in years" :value="year" :key="index">{{year}}</option>
              </select>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <div v-if="billing_token_type === '2'">
      <md-field>
        <label>Account Number</label>
        <md-input v-model="ach_account_number" :disabled="!change==true"></md-input>
      </md-field>
      <md-field>
        <label>Routing</label>
        <md-input v-model="ach_routing" :disabled="!change==true"></md-input>
      </md-field>
    </div>

    <b-row v-if="change == true">
      <b-col md="12">
        <b-button class="float-right" variant="success" @click="saveChanges()">Save Changes</b-button>
      </b-col>
    </b-row>

    <div class="float-right">
      Powered By: <br>
      <img src="/img/MattMoneyLogo.png" alt="" style="height:25px; width:auto;">
    </div>    
  </div>
</template>

<script>
import Errors from "../../errorClass";

export default {
  props: [
    "propuser",
    "billing_type",
    "cc_sc_action",
    "cc_ws_action",
    "ach_sc_action",
    "ach_ws_action",
    // "subscription"
  ],
  created() {
    this.user = this.propuser;
    this.billing_token_type = this.billing_type;

    if (this.billing_token_type == "2") {
      this.ach_account_number = this.propuser.billinginfo.Last4;
      this.ach_routing = this.propuser.billinginfo.AchRoutingLast3;
      this.ach_type = this.propuser.billinginfo.ACHType;
      this.ach_acc_holder_type = this.propuser.billinginfo.ACHAccountHolderType;
    }

    if (this.billing_token_type == "1") {
      this.card_type = this.propuser.billinginfo.CardType;
      this.card_name = this.propuser.billinginfo.bankName_or_cardName;
      this.card_number = this.propuser.billinginfo.Last4;
      this.cvv = this.propuser.billinginfo.CVV;
    }
  },
  data() {
    return {
      user: {},
      years: [],
      months: [],
      change: false,
      billing_token_type: "1",
      errors: new Errors(),
      ErrorMessage: [],

      ach_type: "1",
      ach_acc_holder_type: "0",
      ach_account_number: "",
      ach_routing: "",

      card_type: "1",
      card_name: "",
      card_number: "",
      cvv: "",
      exp_month: "",
      exp_year: "",
    };
  },
  methods: {
    Cancel() {
      this.change = false;
      this.user = this.propuser;
      this.billing_token_type = this.billing_type;

      if (this.billing_token_type == "2") {
        this.ach_account_number = this.propuser.billinginfo.Last4;
        this.ach_routing = this.propuser.billinginfo.AchRoutingLast3;
      }

      if (this.billing_token_type == "1") {
        this.card_type = this.propuser.billinginfo.CardType;
        this.card_name = this.propuser.billinginfo.bankName_or_cardName;
        this.card_number = this.propuser.billinginfo.Last4;
        this.cvv = this.propuser.billinginfo.CVV;
      }
    },
    changeBillingInfo() {
      this.$parent.edit = false;
      this.change = true;
      this.ach_account_number = "";
      this.ach_routing = "";

      this.card_name = "";
      this.card_number = "";
      this.cvv = "";
    },

    saveChanges() {
      if (this.billing_token_type == "1") {
        this.saveCC();
      } else {
        this.saveACH();
      }
    },

    saveACH() {
      LoadingOverlay();

      let url = "";
      if (this.user.customer_role == 2) {
        url = this.ach_sc_action;
      } else {
        url = this.ach_ws_action;
      }

      //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   formData.append("content", this.myHTML);

      let formData = new FormData();
      //   formData.append("subscription", this.subscription);
      formData.append("billing_token_type", this.billing_token_type);
      formData.append("ach_type", this.ach_type);
      formData.append("ach_acc_holder_type", this.user.ach_acc_holder_type);
      formData.append("ach_account_number", this.ach_account_number);
      formData.append("ach_routing", this.ach_routing);

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          //   console.log(res);
          window.location.href = "/myprofile";
          //   LoadingOverlayHide();
        })
        .catch((err) => {
          console.error(err);
          console.log(err.response.data.data_message);
          console.log(err.response);

          if (err.response.status == 400) {
            let arr = [];
            arr.push(err.response.data.data_message);
            this.showErrorMessage(arr);
          } else {
            this.errors.record(err.response.data.errors);
            this.showErrorMessage(this.errors.getArrayOfMessages());
          }
          window.scrollTo(0, 0);
          LoadingOverlayHide();
        });
    },

    saveCC() {
      LoadingOverlay();

      let url = "";
      if (this.user.customer_role == 2) {
        url = this.cc_sc_action;
      } else {
        url = this.cc_ws_action;
      }

      //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   formData.append("content", this.myHTML);

      let formData = new FormData();
      //   formData.append("subscription", this.subscription);
      formData.append("billing_token_type", this.billing_token_type);
      formData.append("card_type", this.card_type);
      formData.append("card_number", this.card_number);
      formData.append("card_name", this.card_name);
      formData.append("cvv", this.cvv);
      formData.append("exp_month", this.exp_month);
      formData.append("exp_year", this.exp_year);

      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          //   console.log(res);
          window.location.href = "/myprofile";
          //   LoadingOverlayHide();
        })
        .catch((err) => {
          console.error(err);
          console.log(err.response.data.data_message);
          console.log(err.response);

          if (err.response.status == 400) {
            let arr = [];
            arr.push(err.response.data.data_message);
            this.showErrorMessage(arr);
          } else {
            this.errors.record(err.response.data.errors);
            this.showErrorMessage(this.errors.getArrayOfMessages());
          }
          window.scrollTo(0, 0);
          LoadingOverlayHide();
        });
    },

    showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
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
