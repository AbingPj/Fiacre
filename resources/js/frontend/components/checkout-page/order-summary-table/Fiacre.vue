

<style lang="scss" scoped>
</style>

<template>
  <table class="table">
    <tbody>
      <tr>
        <td>Order Amount</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(total_amount)}}</div>
          </div>
        </td>
      </tr>
      <!-- <tr>
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
      </tr> -->

      <!-- <tr>
        <td>Delivery Fee</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(shipments_price)}}</div>
          </div>
        </td>
      </tr> -->
      <!-- <tr>
        <td>Tax</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(tax)}}</div>
          </div>
        </td>
      </tr> -->
      <tr v-if="user_billing_type == 'CC'">
        <td>Card (3%)</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">+ {{displayNumber(cc)}}</div>
          </div>
        </td>
      </tr>
      <tr  v-if="user_billing_type == 'ACH'">
        <td>ACH (2%)</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">+ {{displayNumber(ach)}}</div>
          </div>
        </td>
      </tr>
      <tr :class="referral_details.total_user_refferal_amount > 0? 'text-success':''" >
        <td>Refferal Amount</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">- {{displayNumber(referral_details.total_user_refferal_amount)}}</div>
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
            <div class="text-right font-weight-bold">{{displayNumber(over_all_total)}}</div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ["total_amount", "shipments_price", "over_all_total", "tax", "cc", "ach", "user_billing_type","referral_details"],
  methods: {
    displayNumber(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
  },
};
</script>
