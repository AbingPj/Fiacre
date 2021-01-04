<template>
<div>
  <div class="row">
    <div class="col-12">
      <h3>
        <!-- Products Orders Report -->
        <button type="button" @click="print()" class="btn btn-success float-right">
          <i class="fas fa-print"></i> Print
        </button>
        <download-excel :footer="['total: '+total_orders]" :header="'Products Orders Report ('+fromLabel.replace(/,/g, '.') +' - ' + toLabel.replace(/,/g, '.')  + ')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="xls" name="po.xls" worksheet="Custom">
          <i class="fas fa-file-excel"></i>
          XLS
        </download-excel>
        <download-excel :footer="['total: '+total_orders]" :header="'Products Orders Report ('+fromLabel.replace(/,/g, '.') +' - '+ toLabel.replace(/,/g, '.')  + ')'" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="csv" name="po.csv" worksheet="Custom">
          <i class="fas fa-file-csv"></i>
          CSV
        </download-excel>
      </h3>
      <h4>{{fromLabel}} - {{toLabel}}</h4>
    </div>
  </div>

  <div class="row mt-5">
    <div class="col-md-4">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">From</span>
        </div>
        <date-picker v-model="startDate" id="date-time-input" :wrap="true" :config="configs.start" ref="startDate" @dp-change="onStartChange"></date-picker>
        <div class="input-group-append">
          <button class="btn btn-secondary datepickerbutton" type="button" title="Toggle">
            <i class="far fa-calendar"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">To</span>
        </div>
        <date-picker v-model="endDate" id="date-time-input" :wrap="true" :config="configs.end" ref="endDate" @dp-change="onEndChange"></date-picker>
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

  <div class="row mt-3">
    <div class="col-10">
      <div style="min-height:300px;">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th>Date</th>
              <th class="text-center">Total No. Products Sold</th>
              <th class="text-center">Total No. Orders</th>
              <!-- <th>
                  <span class="float-right">Sales</span>
                </th>-->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <th>{{item.date}}</th>
              <td class="text-center">{{item.total_products}}</td>
              <td class="text-center">{{item.total_orders}}</td>
              <!-- <td>
                  <span class="float-right">$ {{displayNumberWithComma(item.total_earnings)}}</span>
                </td>-->
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th class="text-center"></th>
              <th class="text-center">{{total_orders}}</th>
              <!-- <th>
                  <span class="float-right">$ {{displayNumberWithComma(total)}}</span>
                </th>-->
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
      fromLabel: null,
      toLabel: null,
      startDate: null,
      endDate: null,
      filter_startDate: null,
      filter_endDate: null,
      total_orders: 0,
      configs: {
        start: {
          format: "MMMM DD, YYYY",
          useCurrent: true,
          allowInputToggle: true,
          //   showClear: true,
          //   showClose: true,
          maxDate: moment(),
        },
        end: {
          format: "MMMM DD, YYYY",
          useCurrent: true,
          allowInputToggle: true,
          //   showClear: true,
          //   showClose: true,
          minDate: false,
          maxDate: moment(),
        },
      },
      json_fields: {
        "Date": "date",
        "Total Number of Products Sold": "total_products",
        "Total Number of Orders": "total_orders",
      },
    };
  },
  methods: {
    onStartChange(e) {
      //   this.$set(this.configs.end, "minDate", e.date.add(1, "day") || null);
      this.$set(this.configs.end, "minDate", e.date || null);
    },
    onEndChange(e) {
      //   this.$set(
      //     this.configs.start,
      //     "maxDate",
      //     e.date.subtract(1, "day") || null
      //   );
      this.$set(this.configs.start, "maxDate", e.date || null);
    },

    getData() {
      axios
        .post("/admin/api/reports/productsorders/custom")
        .then((res) => {
          this.total = res.data.total_earnings;
          this.total_orders = res.data.total_orders;
          this.data = res.data.data;
          this.startDate = res.data.from_label;
          this.endDate = res.data.to_label;
          this.fromLabel = res.data.from_label;
          this.toLabel = res.data.to_label;
          this.filter_startDate = res.data.from_label;
          this.filter_endDate = res.data.to_label;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    filter() {
      axios
        .post("/admin/api/reports/productsorders/custom", {
          from: this.startDate,
          to: this.endDate,
        })
        .then((res) => {
          this.total = res.data.total_earnings;
          this.total_orders = res.data.total_orders;
          this.data = res.data.data;
          this.startDate = res.data.from_label;
          this.endDate = res.data.to_label;
          this.fromLabel = res.data.from_label;
          this.toLabel = res.data.to_label;
          this.filter_startDate = res.data.from_label;
          this.filter_endDate = res.data.to_label;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    print() {
      axios({
          method: "post",
          url: "/admin/generate/products-order/pdf/custom",
          data: {
            from: this.filter_startDate,
            to: this.filter_endDate,
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
          link.setAttribute("download", "custom.pdf"); //or any other extension
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
