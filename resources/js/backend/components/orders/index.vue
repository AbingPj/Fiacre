<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Orders</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-md-8">
        <div class="input-group mb-3">
          <input
            v-model="search_input"
            type="text"
            class="form-control rounded-0"
            placeholder="Search"
            v-on:keyup.enter="btnSearch()"
          />
          <div class="input-group-append">
            <button class="btn btn-success rounded-0" @click="btnSearch()">Search</button>
          </div>
        </div>
      </div>
    </div>
    <!-- filter -->
    <div class="row mt-3">
      <div class="col-md-3">
        <select v-model="filterby" class="form-control" @change="filterSelectionChange">
          <option value="all">Default</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div :class="filterby == 'weekly'? 'd-block':'d-none'" class="col-md-3">
        <div class="input-group">
          <date-picker
            v-model="week_date"
            id="date-time-input-week"
            :wrap="true"
            :config="option_week"
            ref="week_date"
            @dp-change="filterByWeek"
          ></date-picker>
          <div class="input-group-append">
            <button class="btn btn-secondary datepickerbutton" type="button" title="Toggle">
              <i class="far fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- <div v-if="filterby == 'weekly'" class="col-md-3">
        <button @click="filterByWeek()" class="btn btn-primary">
          <i class="fas fa-filter"></i> Filter By Weekly
        </button>
      </div>-->

      <div :class="filterby == 'monthly'? 'd-block':'d-none'" class="col-md-3">
        <div class="input-group">
          <date-picker
            v-model="month_date"
            id="date-time-input-month"
            :wrap="true"
            :config="option_month"
            ref="month_date"
            @dp-change="filterByMonth"
          ></date-picker>
          <div class="input-group-append">
            <button class="btn btn-secondary datepickerbutton" type="button" title="Toggle">
              <i class="far fa-calendar"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- <div v-if="filterby == 'monthly'" class="col-md-3">
        <button @click="filterByMonth()" class="btn btn-primary">
          <i class="fas fa-filter"></i> Filter By Monthly
        </button>
      </div>-->
    </div>
    <div v-if="filterby == 'weekly'" class="row mt-3">
      <div class="col">
          <h5>({{week_first_day}} - {{week_last_day}})</h5>
      </div>
    </div>
     <div v-if="filterby == 'monthly'" class="row mt-3">
      <div class="col">
          <h5>({{month_date}})</h5>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-8 col-md-8">
        <div v-if="orders.length == 0">
          <h4>No Orders Yet</h4>
        </div>
        <div v-else>
          <ul class="list-group rounded-0">
            <li v-for="(order, index) in orders" :key="index" class="list-group-item d-flex">
              <div class>
                <img
                  :src="order.order_by != 0? order.user.atr_image_link : order.retailer.atr_image_link"
                  style="width:100px; height:80px; object-fit:cover;"
                />
              </div>
              <div class="w-25 ml-3">
                <p>
                  <b>
                    <span v-if="order.order_by != 0">{{order.user.full_name}}</span>
                    <span v-else>{{order.retailer.full_name}}</span>
                  </b>
                  <span v-if="order.order_by == 0">(Retailer)</span>
                  <br />
                  <br />
                  <span style="font-size: 20px;">
                    <b>$ {{order.atr_subscription_overall_total_amount_f}}</b>
                  </span>
                </p>
              </div>
              <div class="ml-auto w-25 text-right">
                <p>
                  <b>Order No. {{order.id}}</b>
                  <br />
                  {{order.atr_date_label}}
                  <br />

                  <a :href="'/admin/orders/'+order.id" class="text-success">View Order</a>
                </p>
              </div>
            </li>
          </ul>
          <div class="mt-5">
            <pagination
              :data="data"
              :limit="5"
              size="small"
              align="left"
              @pagination-change-page="getResults"
            ></pagination>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
        <!-- <div class="p-5" style="height:400px">
          <h3>Quick Details</h3>
          <br />
          <br />
          <h4>
            <i class="fas fa-sync-alt text-success"></i>
            1 orders
            <span class="text-secondary">Awaiting Process</span>
          </h4>
          <br />
          <h4>
            <i class="fas fa-pause text-warning"></i>
            1 orders
            <span class="text-secondary">On Hold</span>
          </h4>
          <br />
          <h4>
            <i class="fas fa-truck-pickup text-info"></i>
            1 orders
            <span class="text-secondary">On Ready</span>
          </h4>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["propsorders"],
  data() {
    return {
      orders: [],
      data: {},
      search: "",
      search_input: "",
      filterby: "all",
      week_date: null,
      week_first_day: null,
      week_last_day: null,
      month_date: null,
      option_week: {
        format: "MMMM DD, YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment()
        // showTodayButton : true,
      },
      option_month: {
        format: "MMMM YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment()
        // showTodayButton : true,
      }
    };
  },

  created() {
    this.getResults();
  },
  methods: {
    filterSelectionChange() {
      if (this.filterby == "all") {
        this.week_date = moment().format("MMMM DD, YYYY");
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      } else if (this.filterby == "weekly") {
        this.week_date = moment().format("MMMM DD, YYYY");
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      } else if (this.filterby == "monthly") {
        this.month_date = moment().format("MMMM YYYY");
        this.getResults();
      }
    },
    filterByMonth() {
    //   console.log("oyee month");
      this.getResults();
    },
    filterByWeek() {
    //   console.log("oyee week");
      this.getResults();
    },
    getResults(page = 1) {
      let param;
      if (this.filterby == "all") {
        if (this.search != "") {
          param = {
            search: this.search,
            page: page
          };
        } else {
          param = {
            page: page
          };
        }
        this.getAllData(param);
      }
      if (this.filterby == "weekly") {
        param = {
          page: page,
          search: this.search,
          date: this.week_date
        };
        this.getWeeklyData(param);
      }
      if (this.filterby == "monthly") {
        param = {
          page: page,
          search: this.search,
          date: this.month_date
        };
        console.log(this.month_date);
        this.getMonthlyData(param);
      }
    },

    getAllData(param) {
      axios({
        method: "get",
        url: "/api/admin/orders",
        params: param
      }).then(res => {
        this.data = res.data;
        this.orders = res.data.data;
      });
    },
    getWeeklyData(param) {
      axios({
        method: "get",
        url: "/api/admin/orders/weekly",
        params: param
      }).then(res => {
        this.data = res.data.pagination;
        this.orders = res.data.pagination.data;
        this.week_first_day = res.data.from;
        this.week_last_day = res.data.to;
        // this.week_date = res.data.date;
      });
    },
    getMonthlyData(param) {
      axios({
        method: "get",
        url: "/api/admin/orders/monthly",
        params: param
      }).then(res => {
        this.data = res.data.pagination;
        this.orders = res.data.pagination.data;
        // this.month_date = res.data.date;
      });
    },

    btnSearch() {
      this.search = this.search_input;
      this.getResults();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
