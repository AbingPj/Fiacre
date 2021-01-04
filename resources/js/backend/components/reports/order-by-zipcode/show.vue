<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <!-- <h2 class="card-title mb-0">Orders by {{data.user.full_name}}</h2> -->
        <h2 class="card-title mb-0">Orders by Zip Code: {{zipcode}}</h2>
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
              <th>Order By</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.date}}</td>
              <td>{{item.first_name}} {{item.last_name}}</td>
              <td>{{item.atr_status_label}}</td>
              <td>
                <a :href="'/admin/orders/'+item.id" class="btn btn-sm btn-info">Details</a>
                <a :href="item.url_for_print" class="btn btn-sm btn-success">
                  <i class="fas fa-print"></i> Print
                </a>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <th></th>
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
  props: ["zipcode"],
  data() {
    return {
      data: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/admin/reports/getAZipcodes/" + this.zipcode)
        .then((res) => {
          this.data = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>


