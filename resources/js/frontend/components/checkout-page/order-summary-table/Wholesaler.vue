
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
      <tr  :class="get_discount > 0? 'text-success' : ''" >
        <td>
          Discount Amount ({{user_discount}}%)
          <span class="float-right">
            <b>-</b>
          </span>
          <br />
          <div>(Wholesaler)</div>
        </td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(get_discount)}}</div>
          </div>
        </td>
      </tr>


      <tr :class="get_coupon_discount > 0? 'text-success' : ''">
        <td>
          Coupon Discount
          <span class="float-right">
            <b>-</b>
          </span>
          <br />
          <div v-if="coupon_code_is_valid">
            <div v-if="coupon.is_percentage">( {{coupon.discount_amount}} % discount )</div>
            <div v-else>( ${{coupon.discount_amount}} discount )</div>
          </div>
        </td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(get_coupon_discount)}}</div>
          </div>
        </td>
      </tr>

      <tr>
        <td>Delivery Fee</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{ displayNumber(shipments_price)}}</div>
          </div>
        </td>
      </tr>
       <tr>
        <td>Tax</td>
        <td>
          <div class="d-flex justify-content-between">
            <div>$</div>
            <div class="text-right">{{displayNumber(tax)}}</div>
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
      <tr class="table-light">
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: [
    "total_amount",
    "user_discount",
    "get_discount",
    "shipments_price",
    "over_all_total",
    "get_coupon_discount",
    "coupon",
    "coupon_code_is_valid",
    "tax"
  ],
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
