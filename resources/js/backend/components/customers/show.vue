<template>
<div class="flex-grow-1 vue-material-wrapper">
  <b-container class="py-5">
    <div class="row">
      <div class="col-md-12">
        <h2 class="card-title mb-0">
          <div class="d-flex">
            <div class="mr-2">
              <a href="/admin/customers" class="btn btn-success float-right rounded-0 text-light">
                <i class="fas fa-chevron-circle-left"></i>
              </a>
            </div>
            <div>Customer Profile</div>
            <div class="ml-auto">
              <!-- <a
                  :href="'/admin/emails?email='+propscustomer.email"
                  class="btn btn-success float-right"
                >
                  <i class="fas fa-envelope mr-2"></i>Send Email
                </a> -->
            </div>
            <!-- <div></div> -->
          </div>
        </h2>
        <br />
        <!-- <h3 class="text-success">
            <b>Order #{{order.id}}</b>
          </h3>-->
      </div>
    </div>
    <br />
    <br />
    <p class="font-weight-bold">This profile is cannot be edited.</p>
    <br />
    <b-row>
      <b-col md="8">
        <b-row>
          <b-col md="3">
            <img :src="propscustomer.image_path" class="w-100" />
          </b-col>
          <b-col>
            <h4 class="font-weight-bold">User Information</h4>
            <b-row>
              <b-col md="10">
                <md-field>
                  <label>Email</label>
                  <md-input :value="propscustomer.email" disabled></md-input>
                </md-field>
              </b-col>
            </b-row>
            <b-row>
              <b-col md="2">
                <md-field>
                  <label>Title</label>
                  <md-input :value="propscustomer.title" disabled></md-input>
                </md-field>
              </b-col>
              <b-col md="5">
                <md-field>
                  <label>First Name</label>
                  <md-input :value="propscustomer.first_name" disabled></md-input>
                </md-field>
              </b-col>
              <b-col md="5">
                <md-field>
                  <label>Last Name</label>
                  <md-input :value="propscustomer.last_name" disabled></md-input>
                </md-field>
              </b-col>
            </b-row>
            <md-field>
              <label>Address</label>
              <md-input :value="propscustomer.street_address" disabled></md-input>
            </md-field>
            <b-row>
              <b-col md="4">
                <md-field>
                  <label>City</label>
                  <md-input :value="propscustomer.city" disabled></md-input>
                </md-field>
              </b-col>
              <b-col md="4">
                <md-field>
                  <label>State</label>
                  <md-input :value="propscustomer.state" disabled></md-input>
                </md-field>
              </b-col>
              <b-col md="4">
                <md-field>
                  <label>Zip</label>
                  <md-input :value="propscustomer.zipcode" disabled></md-input>
                </md-field>
              </b-col>
            </b-row>
            <md-field>
              <label>Contact Number</label>
              <md-input :value="'[ '+propscustomer.contact_number_type+' ] '+propscustomer.contact_number" disabled></md-input>
            </md-field>

            <div v-if="userType === '3'">
              <h4 class="font-weight-bold">Business Information</h4>
              <b-row>
                <b-col md="4">
                  <img :src="business_image" class="w-100" />
                </b-col>
              </b-row>
              <md-field>
                <label>Position / Designation</label>
                <md-input v-model="business_designation" disabled></md-input>
              </md-field>
              <md-field>
                <label>Organization / Business Name</label>
                <md-input v-model="business_name" disabled></md-input>
              </md-field>
              <md-field>
                <label>Business Street Address</label>
                <md-input v-model="business_street_address" disabled></md-input>
              </md-field>
              <b-row>
                <b-col md="4">
                  <md-field>
                    <label>Business City</label>
                    <!-- <md-select v-model="business_city" disabled></md-select> -->
                    <md-input v-model="business_city" disabled></md-input>
                  </md-field>
                </b-col>
                <b-col md="4">
                  <md-field>
                    <label>Business State</label>
                    <!-- <md-select v-model="business_state" disabled></md-select> -->
                    <md-input v-model="business_state" disabled></md-input>
                  </md-field>
                </b-col>
                <b-col md="4">
                  <md-field>
                    <label>Business Zip</label>
                    <md-input v-model="business_zipcode" disabled></md-input>
                  </md-field>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-col>
      <!--
      <b-col>
        <md-card class="mb-4">
          <md-card-content>
            <div class="s-user-type">
              <label>I want to be a:</label>
              <md-radio v-model="userType" name="subscription" value="2" class="md-primary" :disabled="userType != '2'">SUN Club Member</md-radio>
              <md-radio v-model="userType" name="subscription" value="3" class="md-primary" :disabled="userType != '3'">Wholesale Partner</md-radio>
            </div>
            <div v-if="userType == '2'">
              <p>
                Club Membership means you can directly order
                produce from the Farm. An
                <span class="font-weight-bold">annual membership fee of $50</span>
                will be needed and you have to agree to pay the
                given amount over a 50-week growing season.
              </p>
              <div class="s-user-type">
                <label>I choose:</label>
                <md-radio v-model="selectedAmount" name="subscription_sunclub_choice_id" value="3" class="md-primary" :disabled="selectedAmount != '3'">$2000.00</md-radio>
                <md-radio v-model="selectedAmount" name="subscription_sunclub_choice_id" value="2" class="md-primary" :disabled="selectedAmount != '2'">$1500.00</md-radio>
                <md-radio v-model="selectedAmount" name="subscription_sunclub_choice_id" value="1" class="md-primary" :disabled="selectedAmount != '1'">$1000.00</md-radio>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </b-col>
      -->
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  props: ["propscustomer"],
  data() {
    return {
      //   selectedAmount: this.propscustomer.sunclub_choice_id,
      //   userType: this.propscustomer.customer_role
      selectedAmount: 1,
      userType: 2,
      business_image: "",
      business_designation: "",
      business_name: "",
      business_street_address: "",
      business_city: "",
      business_state: "",
      business_zipcode: "",
    };
  },

  created() {
    this.selectedAmount = "" + this.propscustomer.sunclub_choice_id;
    this.userType = "" + this.propscustomer.customer_role;
    if (this.propscustomer.customer_role == 3) {
      this.business_image = this.propscustomer.business.business_image_path;
      this.business_designation = this.propscustomer.business.designation;
      this.business_name = this.propscustomer.business.business_name;
      this.business_street_address = this.propscustomer.street_address;
      this.business_city = this.propscustomer.business.city;
      this.business_state = this.propscustomer.business.state;
      this.business_zipcode = this.propscustomer.business.zipcode;
    }
  },
};
</script>

<style lang="scss" scoped>
.vue-material-wrapper {
  @import "~vue-material/dist/vue-material";
  @import "~vue-material/dist/theme/default";
}

.s-user-type {
  .md-radio {
    display: flex;
  }
}
</style>
