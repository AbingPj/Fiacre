<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Orders by Zipcode</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-6">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Zipcodes</th>
              <th>Total No. of Orders</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{item.order_zipcode}}</td>
              <td>{{item.total_orders}}</td>
              <td>
                <a
                  :href="'/admin/reports/orders-by-zipcode/'+item.order_zipcode"
                  class="btn btn-sm btn-success"
                >Select</a>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
        .get("/admin/reports/getZipcodes")
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


