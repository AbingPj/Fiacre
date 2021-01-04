<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Customers</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-12">
        <div class="input-group mb-3">
          <input v-model="search" type="text" class="form-control rounded-0" placeholder="Search" />
          <div class="input-group-append">
            <button class="btn btn-success rounded-0" @click="btnSearch()">Search</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-8 col-md-8">
        <div v-if="rows == 0">
          <h4>No Customers Yet</h4>
        </div>
        <div v-else>
          <ul class="list-group rounded-0">
            <li v-for="(customer, index) in loadlist" :key="index" class="list-group-item d-flex">
              <div class>
                <img :src="customer.image_path" style="width:100px; height:80px; object-fit:cover;" />
              </div>
              <div class="w-25 ml-3">
                <p>
                  <b>{{customer.full_name}}</b>
                  <br />

                  <span v-if="customer.customer_role == 2">
                    balance:
                    <br />
                    <b
                      style="font-size: 20px;"
                      class="text-success"
                    >$ {{displayNumberWithComma(customer.balance)}}</b>
                  </span>
                  <span
                    v-else-if="customer.customer_role == 3"
                    class="text-success"
                    style="font-size: 20px;"
                  >
                    <br />
                    <b>Wholesaler</b>
                  </span>
                </p>
              </div>
              <div class="ml-auto w-25 text-right">
                <p>
                  Member Since: {{customer.created_at_label}}
                  <b></b>
                  <!-- <br />Last Order: -->
                  <!-- {{order.date_label}} -->
                  <br />

                  <a :href="'/admin/customers/'+customer.id" class="text-success">View Profile</a>
                  <br />
                  <a :href="'/admin/emails?email='+customer.email" class="btn btn-sm btn-success">
                    <i class="fas fa-envelope mr-2"></i>Send Email
                  </a>
                </p>
              </div>
            </li>
          </ul>

          <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
      </div>
      <div class="col-lg-4 col-md-4">
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
      </div>
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
    };
  },

  created() {
    this.customers = this.propscustomers;
    this.searchedCustomers = this.customers;
  },
  methods: {
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
