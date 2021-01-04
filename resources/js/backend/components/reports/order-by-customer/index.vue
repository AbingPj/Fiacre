<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Orders by Customer</h2>
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
              <th>Customer</th>
              <th>Type</th>
              <th>Total No. of Orders</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{customerName(item)}}</td>
              <td>{{customerType(item)}}</td>
              <td>{{item.total_orders}}</td>
              <td>
                <a
                  :href="'/admin/reports/orders-by-customers/'+item.order_by+'/'+customerName(item)"
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
      data: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    customerName(value) {
      if (value.order_by == 0) {
        return "Retailers";
      } else {
        return value.user.full_name;
      }
    },
    customerType(value) {
      if (value.user != null) {
        if (value.user.customer_role == 2) {
          return "Sun Club Member";
        } else if (value.user.customer_role == 3) {
          return "Wholesaler";
        }
      } else {
        return "Retailer";
      }
    },
    getData() {
      axios
        .get("/admin/reports/orders/customers")
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


