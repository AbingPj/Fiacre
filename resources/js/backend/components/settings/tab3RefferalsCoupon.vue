<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>Store Referrals Coupon Settings</b>
        </h5>
      </div>
      <div class="col-md-6">
        <!-- <div class="float-right">
            <button type="submit" class="btn btn-success">SAVE</button>
        </div>-->
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col-md-8 mt-3">
        <div class="form-group">
          <label for="landing_header" class="font-weight-bold">Coupon Name</label>
          <input v-model="coupon_name" type="text" class="form-control" />
        </div>
        <div class="form-group">
          <label for="content" class="font-weight-bold">Description</label>
          <textarea v-model="coupon_desc" class="form-control" rows="3"></textarea>
        </div>

        <div class="form-group">
          <label for="landing_header" class="font-weight-bold">Discount Amount</label>
          <input
            v-model="coupon_discount_amount"
            type="text"
            class="form-control"
            @keypress="onlyNumber"
          />
        </div>

        <div class="form-group">
          <!-- <label for="content" class="font-weight-bold">Percentage or Fixed</label> -->
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="1"
              v-model="coupon_is_percentage"
            />
            <label class="form-check-label" for="inlineRadio1">Percentage</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="0"
              v-model="coupon_is_percentage"
            />
            <label class="form-check-label" for="inlineRadio2">Fixed</label>
          </div>
        </div>

        <div class="float-right">
          <button type="button" class="btn btn-success" @click="save()">SAVE</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["store"],
  data() {
    return {
      coupon_name: "",
      coupon_desc: "",
      coupon_discount_amount: "",
      coupon_is_percentage: 0,
    };
  },
  created() {
    this.coupon_name = this.store.referral_coupon_name;
    this.coupon_desc = this.store.referral_coupon_desc;
    this.coupon_discount_amount = this.store.referral_coupon_discount_amount;
    this.coupon_is_percentage = this.store.referral_coupon_is_percentage;
  },
  methods: {
    save() {
      LoadingOverlay();
      let data = {
        name: this.coupon_name,
        desc: this.coupon_desc,
        discount_amount: this.coupon_discount_amount,
        is_percentage: this.coupon_is_percentage,
      };
      axios
        .post("/admin/settings/updateStoreReferralsCoupon", data)
        .then((res) => {
          console.log(res);
          window.location.href = "/admin/settings";
        })
        .catch((err) => {
          console.error(err);
        });
    },

    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>
