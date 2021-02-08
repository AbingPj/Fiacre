<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Fundraise</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-lg-10 col-md-8">
        <table id="fundraise" class="table table-hover">
          <thead>
            <tr>
            <th>OptionC id</th>
              <th>Organization</th>
              <th>Total No. of Orders</th>
               <th>Fundraise</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
            <td>{{item.org_optionc_id}}</td>
              <td>{{item.org.org_name}}</td>
              <td>{{item.total_orders}}</td>
              <td>$ {{item.fundraise_f}}</td>
              <td>
                <a
                  :href="'/admin/reports/fundraise/'+item.org_optionc_id"
                  class="btn btn-sm btn-success"
                >Details</a>
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
        .get("/admin/reports/getOrganizationFundraiseList")
        .then((res) => {
          this.data = res.data;
          this.jqDT();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    jqDT() {
				$(document).ready(function () {
					$("#fundraise").DataTable({
						lengthMenu: [
							[10, 25, 50, -1],
							[10, 25, 50, "All"],
						],
						iDisplayLength: -1,
					});
				});
			},
  },
};
</script>


