<style lang="scss" scoped>
.orders {
  border: 2px solid lightgray !important;
  .cart-items {
    margin: 20px 0px 20px 0px;
    padding: 20px 15px 0px 15px;
    min-height: 500px;
    // max-height: 600px;
    // overflow-x: hidden; /* Hide horizontal scrollbar */
    // overflow-y: scroll; /* Add vertical scrollbar */
    // .cart-item {
    //   //   padding: 20px;
    //   //   background-color: rgb(252, 235, 235);
    // }
  }
}
</style>

<template>
  <div class="container mt-1 mb-5">
    <div class="row">
      <div class="col-12">
        <!-- <users-balance :user="user" :guest="guest"></users-balance> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h2>My Orders</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-9 orders">
        <div class="row">
          <div class="col-sm-12 cart-items">
            <div v-if="orders.length == 0" class="text-center mt-5">
              <h3>You Dont Have Orders Yet.</h3>
              <h5>
                <a href="/products">Back To Products</a>
              </h5>
            </div>
            <div v-else>
              <ul class="list-group">
                <li
                  v-for="(order, index) in orders"
                  :key="index"
                  class="list-group-item cart-item"
                  style="margin-bottom:10px;"
                >
                  <div class="d-flex justify-content-between" style>
                    <div class="text-center">
                      <p>
                        <b>#{{order.id}}</b>
                      </p>
                      <p>{{order.date_label}}</p>

                      <br />
                    </div>
                    <div class="text-center">
                      <p>No. of Available Products</p>
                      <p>{{order.number_of_products}}</p>
                    </div>
                    <div class="text-center">
                      <p>No. of SOLD OUT Products</p>
                      <p>{{order.sold_out_products}}</p>
                    </div>
                    <div class="text-center">
                      <p>CashBack</p>
                      <p>
                        <b>$ {{displayNumberWithComma(order.cash_back)}}</b>
                      </p>
                    </div>
                    <div class="text-center">
                      <p>Total Amount</p>
                      <p>
                        <b>$ {{order.atr_overall_total_f}}</b>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      Expected Delivery Date:
                      <b> {{order.atr_expected_delivery_date}}</b>
                      <br />
                      <br />
                      <a
                        style="color:#339f25;"
                        :href="'/order/'+order.id"
                      >Details to see the Order Summary</a>
                    </div>
                    <div class="col-md-6">
                      <div class="float-right" :style="'color:'+setStatusColor(order.status)">
                        <b>{{order.status_label}}</b>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["orders", "guest", "user"],
  methods: {
    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
    setStatusColor(data) {
      if (data == 2) {
        return "#339f25";
      } else if (data == 3) {
        return "#b6cccf";
      } else {
        return "#d4a83b";
      }
    },
  },
};
</script>
