<template>
<div>
  <div class="row">
    <div class="col-12">
      <h3>
        <!-- Products Orders Yearly Report: {{yearLabel}} -->
        Year:{{yearLabel}}
        <button type="button" @click="print()" class="btn btn-success float-right">
          <i class="fas fa-print"></i> Print
        </button>
        <download-excel :footer="['total: '+total_orders]" :header="'Products Orders Yearly Report ('+yearLabel+')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="xls" name="poyearly.xls" worksheet="Yearly">
          <i class="fas fa-file-excel"></i>
          XLS
        </download-excel>
        <download-excel :footer="['total: '+total_orders]" :header="'Products Orders Yearly Report ('+yearLabel+')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="csv" name="poyearly.csv" worksheet="Yearly">
          <i class="fas fa-file-csv"></i>
          CSV
        </download-excel>
      </h3>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-6">
      <div class="input-group">
        <date-picker v-model="year" id="date-time-input" :wrap="true" :config="options"></date-picker>
        <div class="input-group-append">
          <button class="btn btn-secondary datepickerbutton" type="button" title="Toggle">
            <i class="far fa-calendar"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-2">
      <button @click="filter()" class="btn btn-primary">
        <i class="fas fa-filter"></i> Filter
      </button>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-10">
      <div style="min-height:300px;">
        <table class="table table-hover">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th>Month</th>
              <th class="text-center">Total No. Products Sold</th>
              <th class="text-center">Total No. Orders</th>
              <!-- <th>
                  <span class="float-right">Sales</span>
                </th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <th>{{item.date}}</th>
              <td class="text-center">{{item.total_products}}</td>
              <td class="text-center">{{item.total_orders}}</td>
              <!-- <td>
                  <span class="float-right">{{displayNumberWithComma(item.total_earnings)}}</span>
                </td> -->
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th class="text-center"></th>
              <th class="text-center">{{total_orders}}</th>
              <!-- <th>
                  <span class="float-right">$ {{displayNumberWithComma(total)}}</span>
                </th> -->
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      data: [],
      total: 0,
      total_orders: 0,
      yearLabel: "",
      year: null,
      filter_year: null,
      options: {
        format: "YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment()
        // showTodayButton : true,
      },
      json_fields: {
        "Month": "date",
        "Total Number of Products Sold": "total_products",
        "Total Number of Orders": "total_orders",
      },
    };
  },
  methods: {
    getData() {
      axios
        .post("/admin/api/reports/productsorders/yearly")
        .then(res => {
          this.total = res.data.total_earnings;
          this.total_orders = res.data.total_orders;
          this.data = res.data.data;
          this.yearLabel = res.data.year;
          this.year = res.data.year;
          this.filter_year = res.data.year;
        })
        .catch(err => {
          console.error(err);
        });
    },

    filter() {
      axios
        .post("/admin/api/reports/productsorders/yearly", {
          year: this.year
        })
        .then(res => {
          this.total = res.data.total_earnings;
          this.total_orders = res.data.total_orders;
          this.data = res.data.data;
          this.yearLabel = res.data.year;
          this.year = res.data.year;
          this.filter_year = res.data.year;
        })
        .catch(err => {
          console.error(err);
        });
    },

    print() {
      axios({
          method: "post",
          url: "/admin/generate/products-order/pdf/yearly",
          data: {
            date: this.filter_year
          },
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/pdf"
          }
        })
        .then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "yearly " + this.filter_year + ".pdf"); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch(error => console.log(error));
    },

    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return withCommas;
    }
  }
};
</script>
