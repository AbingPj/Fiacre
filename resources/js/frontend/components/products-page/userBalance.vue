
<template>
  <div v-if="guest != 1" class="d-none d-sm-block">
    <div class="d-flex flex-row-reverse bd-highlight">
      <div class="text-right">
        <div>
          {{ user.full_name }}
          <img
            :src="user.image_path"
            class="ml-2 rounded-circle"
            style="width:45px; height:45px; object-fit:cover;"
          />
          <br />
          <b v-if="user.customer_role==3">Wholesaler</b>
          <b v-if="user.customer_role==2">Balance: $ {{displayNumberWithComma(user.balance)}}</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "guest"],
  methods: {
    displayNumberWithComma(value) {
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
