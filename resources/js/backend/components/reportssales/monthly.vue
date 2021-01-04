<template>
<div>
  <div class="row">
    <div class="col-12">
      <h3>
        {{dateLabel}}
        <button type="button" @click="print()" class="btn btn-success float-right">
          <i class="fas fa-print"></i> Print
        </button>
        <download-excel :footer="['total: ',parseFloat(total).toFixed(2)]" :header="'Monthly Sales Report ('+dateLabel+')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="xls" name="salesmonthly.xls" worksheet="Monthly">
          <i class="fas fa-file-excel"></i>
          XLS
        </download-excel>
        <download-excel :footer="['total: ',parseFloat(total).toFixed(2)]" :header="'Monthly Sales Report ('+dateLabel+')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="csv" name="salesmonthly.csv" worksheet="Monthly">
          <i class="fas fa-file-csv"></i>
          CSV
        </download-excel>
      </h3>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col-md-6">
      <div class="input-group">
        <date-picker v-model="date" id="date-time-input" :wrap="true" :config="options"></date-picker>
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
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th>Date</th>
              <th class="text-center">Total No. Orders</th>
              <th class="text-center">Total No. Products Sold</th>
              <th>
                <span class="float-right">Sales</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <th>{{item.date}}</th>
              <td class="text-center">{{item.total_orders}}</td>
              <td class="text-center">{{item.total_products}}</td>
              <td>
                <span class="float-right">{{displayNumberWithComma(item.total_earnings)}}</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <b>Total</b>
              </th>
              <th class="text-center"></th>
              <th class="text-center"></th>
              <th>
                <span class="float-right">
                  <b>$ {{displayNumberWithComma(total)}}</b>
                </span>
              </th>
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
      dateLabel: "",
      date: null,
      filter_date: null,
      options: {
        format: "MMMM YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment()
        // showTodayButton : true,
      },
      json_fields: {
        "Date": "date",
        "Total Number of Orders": "total_orders",
        "Total Number of Products Sold": "total_products",
        "Sales": {
          field: 'total_earnings',
          callback: (value) => {
            return parseFloat(value).toFixed(2);
          }
        },
      },
    };
  },
  methods: {
    getData() {
      axios
        .post("/admin/api/reports/sales/monthly")
        .then(res => {
          this.total = res.data.total_earnings;
          this.data = res.data.data;
          this.dateLabel = res.data.date;
          this.date = res.data.date;
          this.filter_date = res.data.date;
        })
        .catch(err => {
          console.error(err);
        });
    },
    filter() {
      axios
        .post("/admin/api/reports/sales/monthly", {
          date: this.date
        })
        .then(res => {
          this.total = res.data.total_earnings;
          this.data = res.data.data;
          this.dateLabel = res.data.date;
          this.date = res.data.date;
          this.filter_date = res.data.date;
        })
        .catch(err => {
          console.error(err);
        });
    },

    print() {
      axios({
          method: "post",
          url: "/admin/reports/generate/pdf/monthly",
          data: {
            date: this.filter_date
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
          link.setAttribute("download", "monthly " + this.filter_date + ".pdf"); //or any other extension
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
