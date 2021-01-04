<template>
<div class="d-flex flex-column min-vh-100">
  <div class="row">
    <div class="col-md-6">
      <h2 class="card-title mb-0">Customers</h2>
    </div>
    <div class="col-md-6">
      <!--  <button type="button" @click="print()" class="btn btn-success float-right mr-2">
        <i class="fas fa-print"></i> Print
      </button> -->
      <download-excel class="btn btn-success float-right mr-2" :fields="json_fields" :data="propscustomers" type="xls" name="customers.xls" worksheet="Customers">
        <i class="fas fa-file-excel"></i>
        XLS
      </download-excel>
      <download-excel class="btn btn-success float-right mr-2" :fields="json_fields" :data="propscustomers" type="csv" name="customers.csv" worksheet="Customers">
        <i class="fas fa-file-csv"></i>
        CSV
      </download-excel>

    </div>
  </div>
  <br />
  <br />
  <div class="row">
    <div class="col-lg-12">
      <!-- <div class="input-group mb-3">
          <input v-model="search" type="text" class="form-control rounded-0" placeholder="Search" />
          <div class="input-group-append">
            <button class="btn btn-success rounded-0" @click="btnSearch()">Search</button>
          </div>
        </div> -->
    </div>
  </div>

  <div class="row mt-4" style="font-family: Source Sans Pro,sans-serif!important;">
    <div class="col-lg-12 col-md-12">
      <table id="customers-table" class="table table-hover">
        <thead>
          <tr>
            <!-- <th scope="col">#</th> -->
            <th>Customer Name</th>
            <th>Member Type</th>
            <th style="width:120px;">Sunclub Prepaid Balance</th>
            <!-- <th>Email</th> -->
            <th style="width:50px;">Email Confirmed</th>
            <th>Sign-Up Since</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in propscustomers" :key="index">
            <td>{{item.full_name}}
              <br>
              <span style="font-size:10px;">({{item.email}})</span>
            </td>
            <td>
              <span :class="item.customer_role == 2? 'badge badge-success'
                    : item.customer_role == 3? 'badge badge-primary' : 'badge badge-secondary' ">

                {{item.atr_customer_role}}
              </span>
            </td>
            <td>
              <div v-if='item.customer_role == 2'>
                <b class="text-success text-right">$ {{displayNumberWithComma(item.balance)}}</b>
              </div>
            </td>
            <!-- <td>{{item.email}}</td> -->
            <td>
              <span :class="item.confirmed? 'badge badge-success': 'badge badge-secondary'">
                {{isConfirmed(item.confirmed)}}
              </span>
            </td>
            <td>{{item.created_at_label}}</td>
            <td>

              <button :disabled="item.customer_role == 1" type="button" @click="viewCustomer('/admin/customers/'+item.id)" class="btn btn-sm btn-info"> <i class="far fa-eye mr-2"></i>View Profile</button>
              <!-- <button type="button" @click="viewCustomer('/admin/customers/'+item.id)" class="btn btn-sm btn-info"> <i class="far fa-eye mr-2"></i>View Profile</button> -->
              <a :href="'/admin/reports/orders-by-customers/'+item.id+'/'+item.full_name" class="btn btn-sm btn-success">Orders</a>
            </td>
            <!-- <td>
                    <span v-for="(sub, index2) in item.sub_categories" :key="index2">{{sub.name}},</span>
                  </td> -->
          </tr>
        </tbody>
      </table>
    </div>
    <!-- <div class="col-lg-4 col-md-4">
        <div class="p-5" style="height:400px">
          <h3>Quick Details</h3>
          <br />
          <br />
          <h4>
            <i class="fas fa-user-plus text-info"></i>
            {{numberOfNewUser()}} New Members
            <span class="text-secondary">Last 24 hours</span>
          </h4>
          <br />
          <h4>
            <i class="fas fa-times-circle text-danger"></i>
            0 Cancel
            <span class="text-secondary">Cancelled</span>
          </h4>
        </div>
      </div> -->
  </div>
</div>
</template>

<script>
export default {
  props: ["propscustomers"],
  data() {
    return {
      customers: [],
      perPage: 5,
      currentPage: 1,
      searchedCustomers: [],
      search: "",
      json_fields: {
        "Customer Name": "full_name",
        "Email": "email",
        "Member Type": "atr_customer_role",
        "Sunclub Prepaid Balance": "balance",
        "Email Confirmed": {
          field: 'confirmed',
          callback: (value) => {
            if (value == true) {
              return `Yes`;
            } else {
              return `No`;
            }

          }
        },
        "Sign-up Since": "created_at_label"
      },
    };
  },

  mounted() {
    $(document).ready(function () {
      $('#customers-table').DataTable({
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        iDisplayLength: -1
      });
    });
  },

  created() {
    this.customers = this.propscustomers;
    console.log(this.customers);
    this.searchedCustomers = this.customers;
  },
  methods: {
    isConfirmed(data) {
      return data ? 'YES' : 'NO'
    },
    viewCustomer(link) {
      LoadingOverlay();
      window.location.href = link;
    },
    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
    btnSearch() {
      //   people.filter(p => p.dinner == "sushi");
      //   let products = this.products;
      let query = this.search.toLowerCase();
      let heystack = this.customers;
      let searched = heystack.filter(
        (item) =>
        item.first_name.toLowerCase().indexOf(query) >= 0 ||
        item.last_name.toLowerCase().indexOf(query) >= 0
      );
      this.searchedCustomers = searched;
    },

    numberOfNewUser() {
      //   var OneDay = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
      var OneDay = new Date().getTime();
      var count = 0;
      this.customers.forEach((element) => {
        if (element.new == 1) {
          count = count + 1;
        }
      });
      return count;
    },
  },
  computed: {
    loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      var allorders = this.searchedCustomers;
      var pageList = allorders.slice(begin, end);
      return pageList;
    },

    rows() {
      return this.searchedCustomers.length;
    },
  },
  // mounted() {
  //     alert("PRODUCTS COMPONENT MOUNTED");
  // },
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
