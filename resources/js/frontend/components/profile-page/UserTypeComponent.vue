<template>
  <md-card class="mb-4">
    <md-card-content>
      <div class="s-user-type">
        <ValidationProvider name="userType" rules="required">
          <!-- <label>I want to be a:</label> -->
          <md-radio
            v-model="user_type"
            name="subscription"
            value="2"
            class="md-primary"
            :disabled="user_type != '2'"
          >SUN Club Member</md-radio>
          <md-radio
            v-model="user_type"
            name="subscription"
            value="3"
            class="md-primary"
            :disabled="user_type != '3'"
          >Wholesale Partner (Discount: {{wholesaler_discount}}%)</md-radio>
        </ValidationProvider>
      </div>
      <div v-if="user_type === '2'">
        <p>
          Club Membership means you can directly order
          produce from the Farm.

          <!-- An
          <span
            class="font-weight-bold"
          >annual membership fee of $50</span>
          will be needed and you have to agree to pay the
          given amount over a 50-week growing season. -->
        </p>
        <div class="s-user-type">
          <ValidationProvider name="selectedAmount" rules="required">
            <label>I choose:</label>
            <md-radio
              v-for="item in sunclub_choices"
              :key="item.id"
              name="subscription_sunclub_choice_id"
              v-model="selected_amount"
              :value="item.id"
              class="md-primary"
              :disabled="selected_amount != item.id"
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
</template>
<script>
export default {
  props: [
    "sun_is_cancelled",
    "sunclub_choices",
    "user_type",
    "wholesaler_discount",
    "expiration_date",
    "cancel_action",
    "selected_amount"
  ],

  methods: {
    CancelMembership() {
      $("#cancelMembershipModal").modal("show");
    },
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

