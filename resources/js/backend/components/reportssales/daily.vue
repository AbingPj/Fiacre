<template>
<div>
  <div class="row">
    <div class="col-6">
      <h3>
        {{dateLabel}}
        <button type="button" @click="print()" class="btn btn-success float-right">
          <i class="fas fa-print"></i> Print
        </button>
        <download-excel :footer="['total: ',parseFloat(total).toFixed(2)]" :header="'Daily Sales Report ('+dateLabel.replace(/,/g, '.') +')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="xls" name="salesdaily.xls" worksheet="Daily">
          <i class="fas fa-file-excel"></i>
          XLS
        </download-excel>
        <download-excel :footer="['total: ',parseFloat(total).toFixed(2)]" :header="'Daily Sales Report ('+dateLabel.replace(/,/g, '.') +')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="csv" name="salesdaily.csv" worksheet="Daily">
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
      <button type="button" @click="filter()" class="btn btn-primary">
        <i class="fas fa-filter"></i> Filter
      </button>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-md-9">
      <div style="min-height:300px;">
        <table class="table table-hover">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th>Time</th>
              <th class="text-center">Order #</th>
              <th class="text-center">No. Products Sold</th>
              <th>
                <span class="float-right">Sales</span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="data.length == 0">
              <td colspan="5" class="bg-secondary text-center">No Orders yet for {{dateLabel}}</td>
            </tr>
            <tr v-for="(item, index) in data" :key="index">
              <th>{{item.time}}</th>
              <td class="text-center">{{item.order_id}}</td>
              <td class="text-center">{{item.number_of_products}}</td>
              <td>
                <span class="float-right">{{displayNumberWithComma(item.total_earnings)}}</span>
              </td>
              <td>
                <a :href="'/admin/orders/'+item.order_id" class="btn btn-sm btn-info">Details</a>
                <a :href="item.url_for_print" class="btn btn-sm btn-success text-light">
                  <i class="fas fa-print"></i> Print
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>
                <b>Total</b>
              </th>
              <th></th>
              <th></th>
              <th>
                <span class="float-right">$ {{displayNumberWithComma(total)}}</span>
              </th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// import { saveAs } from 'file-saver';
import FileSaver from "file-saver";

export default {
  created() {
    this.getData();
    // this.date = this.momento();
  },
  data() {
    return {
      data: [],
      total: 0,
      value: "",
      dateLabel: "",
      date: null,
      filter_date: null,
      options: {
        format: "MMMM DD, YYYY",
        useCurrent: true,
        allowInputToggle: true,
        maxDate: moment(),
        // showTodayButton : true,
      },
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
      json_fields: {
        "Time": "time",
        "Order #": "order_id",
        "No. of Products Sold": "number_of_products",
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
    momento() {
      return moment().format("MMMM");
      //   return moment().format("MMMM Do YYYY, h:mm:ss a");
    },
    getData() {
      axios
        .post("/admin/api/reports/sales/daily")
        .then((res) => {
          this.total = res.data.total_earnings;
          this.data = res.data.data;
          this.dateLabel = res.data.date;
          this.date = res.data.date;
          this.filter_date = res.data.date;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    filter() {
      axios
        .post("/admin/api/reports/sales/daily", {
          date: this.date
        })
        .then((res) => {
          this.total = res.data.total_earnings;
          this.data = res.data.data;
          this.dateLabel = res.data.date;
          this.date = res.data.date;
          this.filter_date = res.data.date;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    print() {
      axios({
          method: "post",
          url: "/admin/reports/generate/pdf/daily",
          data: {
            date: this.filter_date,
          },
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/pdf",
          },
        })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "daily " + this.filter_date + ".pdf"); //or any other extension
          document.body.appendChild(link);
          link.click();
        })
        .catch((error) => console.log(error));
    },

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
