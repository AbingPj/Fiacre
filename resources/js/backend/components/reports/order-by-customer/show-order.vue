<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Order #{{order_id}}</h2>
        <h4 class="card-title mb-0">Order By:{{order_id}}</h4>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <br />
    <!-- <div class="row">
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
            <tr v-for="(item, index) in data.data" :key="index">
              <td>{{item.id}}</td>
              <td>{{item.date}}</td>
              <td>{{item.atr_status_label}}</td>
              <td>
                <a
                  :href="'/admin/reports/orders-by-customers/'+item.id"
                  class="btn btn-sm btn-success"
                >Select</a>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  props: ["order_id"],
  data() {
    return {
      data: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get("/admin/reports/orders/order/" + this.order_id)
        .then(res => {
          this.data = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>


