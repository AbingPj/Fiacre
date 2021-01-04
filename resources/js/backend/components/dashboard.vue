<template>
  <div>
    <div class="mb-5">
      <h3>{{from}} - {{to}}</h3>
    </div>

    <div class="row mb-5">
      <div class="col-md-4">
        <div class="card" style="border-color:violet;">
          <div class="card-body">
            <h4>Total Views</h4>
            <h2>{{views}}</h2>
            <h6 v-if="getViewsStatus == 'positive'" class="text-success">
              <i class="fas fa-long-arrow-alt-up"></i>
              {{views-prev_views}}
            </h6>
            <h6 v-else class="text-danger">
              <i class="fas fa-long-arrow-alt-down"></i>
              {{views-prev_views}}
            </h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-info">
          <div class="card-body">
            <h4>Product Sold</h4>
            <h2>{{productssold}}</h2>

            <h6 v-if="getTotalSoldStatus == 'positive'" class="text-success">
              <i class="fas fa-long-arrow-alt-up"></i>
              {{productssold-prev_total_product_sold}}
            </h6>
            <h6 v-else class="text-danger">
              <i class="fas fa-long-arrow-alt-down"></i>
              {{productssold-prev_total_product_sold}}
            </h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-success">
          <div class="card-body">
            <h4>Total Earnings</h4>
            <h2>$ {{totalearnings.toFixed(2)}}</h2>
            <h6 v-if="getTotalEarningsStatus == 'positive'" class="text-success">
              <i class="fas fa-long-arrow-alt-up"></i>
              $ {{(totalearnings - prev_total_earnings).toFixed(2)}}
            </h6>
            <h6 v-else class="text-danger">
              <i class="fas fa-long-arrow-alt-down"></i>
              $ {{(totalearnings - prev_total_earnings).toFixed(2)}}
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-md-6">
        <div class="p-1">
          <canvas id="linechart-total-views"></canvas>
        </div>
      </div>
      <div class="col-md-6">
        <div class="p-1">
          <canvas id="linechart-product-sold"></canvas>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <div>
          <h4 class="mb-3">Top 5 Products</h4>

          <table class="table table-hover">
            <thead class="bg-secondary">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Name</th>
                <th scope="col">Availability</th>
                <th scope="col">Total</th>
                <th scope="col">Overall</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in products" :key="index">
                <td>
                  <img
                    :src="item.image_link"
                    alt="product image"
                    style="width:50px; height:50px; object-fit:cover;"
                  />
                </td>
                <td>{{item.name}}</td>
                <td>
                  <div
                    class="d-flex"
                    :class="item.stock_label_id == 1? 'text-success'
                    : item.stock_label_id == 2? 'text-warning'
                    : 'text-danger'"
                  >
                    <div style="width:40px;">{{(item.quantity > 0)? item.quantity : 0 }}</div>
                    <div>{{item.stock_label}}</div>
                  </div>
                </td>
                <td>$ {{item.total_earnings_per_15.toFixed(2)}}</td>
                <td>$ {{item.total_earnings.toFixed(2)}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-4">
        <h4 class="mb-3">Quick Details</h4>
        <b-list-group>
          <b-list-group-item>
            <i class="fas fa-user-plus text-info mr-2"></i>
            {{newmembers}} New Members
            <span class="text-secondary float-right">Last 24 hours</span>
          </b-list-group-item>
          <b-list-group-item>
            <i class="fas fa-file-invoice text-success mr-2"></i>
            {{total_orders}} Orders
            <span class="text-secondary float-right">Total Orders</span>
          </b-list-group-item>
          <b-list-group-item>
            <i class="fas fa-exclamation-circle text-warning mr-2"></i>
            {{low}} Items
            <span class="text-secondary float-right">Low of Stock</span>
          </b-list-group-item>
          <b-list-group-item>
            <i class="fas fa-times-circle text-danger mr-2"></i>
            {{out}} Items
            <span class="text-secondary float-right">Out of Stock</span>
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    "from",
    "to",
    "totalviews",
    "productssold",
    "totalearnings",
    "topfive_products",
    "low",
    "out",
    "newmembers",
    "products",
    "months_labels",
    "total_product_sold_per_month",
    "total_views_per_month",
    "views",
    "prev_total_product_sold",
    "prev_total_earnings",
    "prev_views",
    "total_orders"
  ],
  data() {
    return {
      datalabels: [],
      productSold: [],
      totalViews: [],
      totalViewsPerMonth: []
    };
  },

  computed: {
    getViewsStatus() {
      let result = this.views - this.prev_views;
      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    },
    getTotalSoldStatus() {
      let result = this.productssold - this.prev_total_product_sold;
      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    },
    getTotalEarningsStatus() {
      let result = this.totalearnings - this.prev_total_earnings;
      if (result <= 0) {
        return "negative";
      } else {
        return "positive";
      }
    }
  },
  created() {
    this.datalabels = this.months_labels;
    this.productSold = this.total_product_sold_per_month;
    this.totalViewsPerMonth = this.total_views_per_month;
    //   this.totalViews =
  },

  mounted() {
    var datalabels = this.datalabels;
    var productSold = this.productSold;
    var totalViews = this.totalViewsPerMonth;
    var ctx = document.getElementById("linechart-product-sold");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: datalabels,
        datasets: [
          {
            label: "Product Sold",
            data: productSold,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            lineTension: 0.5,
            backgroundColor: "skyblue"
          }
          //   {
          //     label: "Total Views",
          //     data: totalViews,
          //     fill: false,
          //     borderColor: "violet",
          //     lineTension: 0.5,
          //     backgroundColor: "violet"
          //   }
        ]
      }
      //   options: {
      //     scales: {
      //       yAxes: [
      //         {
      //           ticks: {
      //             // Include a dollar sign in the ticks
      //             callback: function(value, index, values) {
      //               return "$" + value;
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   }
    });

    // var totalViews = this.totalViews;
    var ctx = document.getElementById("linechart-total-views");
    var myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: datalabels,
        datasets: [
          {
            label: "Total Views",
            data: totalViews,
            fill: false,
            borderColor: "violet",
            lineTension: 0.5,
            backgroundColor: "violet"
          }
        ]
      }
    });
  }
};
</script>
