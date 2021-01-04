<template>
<div class="d-flex flex-column min-vh-100">
  <div class="row">
    <div class="col-md-12">
      <h2 class="card-title mb-0">
        Orders by {{user.full_name}}
        <button type="button" @click="print()" class="btn btn-success float-right">
          <i class="fas fa-print"></i> Print
        </button>
        <download-excel :footer="['total Orders: ' + data.length ]" :header="['Customer Orders','order by '+user.full_name]" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="xls" name="customerorders.xls" :worksheet="user.full_name">
          <i class="fas fa-file-excel"></i>
          XLS
        </download-excel>
        <download-excel :footer="['total Orders: '+ data.length ]" :header="['Customer Orders','order by '+user.full_name]" class="btn btn-success float-right mr-2" :fields="json_fields" :data="data" type="csv" name="customerorders.csv" :worksheet="user.full_name">
          <i class="fas fa-file-csv"></i>
          CSV
        </download-excel>
      </h2>
    </div>
    <div class="col-md-6"></div>
  </div>
  <br />
  <br />
  <div class="row">
    <div class="col-lg-8">
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{item.id}}</td>
            <td>{{item.date}}</td>
            <td>{{item.atr_status_label}}</td>
            <td>
              <a :href="'/admin/orders/'+item.id" class="btn btn-sm btn-info">Details</a>
              <a :href="item.url_for_print" class="btn btn-sm btn-success"><i class="fas fa-print"></i> Print</a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <th></th>
          <th></th>
          <th>Total Orders</th>
          <th>{{data.length}}</th>
        </tfoot>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["customer_id"],
  data() {
    return {
      data: [],
      user: [],
      json_fields: {
        "Order #": "id",
        "Date": "date",
        "Status": "atr_status_label"
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/admin/reports/orders/customers/" + this.customer_id)
        .then(res => {
          this.data = res.data.data;
          this.user = res.data.user;
        })
        .catch(err => {
          console.error(err);
        });
    },
    print() {
      let fullname = this.user.full_name;
      console.log(fullname);
      LoadingOverlay();
      axios({
          method: "post",
          url: "/admin/generate/pdf/customer-orders",
          data: {
            customer_id: this.customer_id
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
          link.setAttribute("download", fullname + " orders.pdf"); //or any other extension
          document.body.appendChild(link);
          link.click();
          LoadingOverlayHide();
        })
        .catch(error => console.log(error));
    }
  }
};
</script>
