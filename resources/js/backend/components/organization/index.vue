<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-sitemap"></i> Organization
				</h2>
				<br />
				<h3>
					<button class="btn btn-success" @click="AddNewOrg()">
						<i class="fas fa-plus-square mr-2"></i> Add New Organization
					</button>
				</h3>
				<br />
			</div>
			<div class="col-md-6"></div>
		</div>
		<br />
		<br />

		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<table id="customers-table" class="table table-hover">
					<thead>
						<tr>
							<!-- <th scope="col">#</th> -->
							<th>Organization Name</th>
							<th>Type</th>
							<th>Status</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in organizations" :key="index">
							<td>
								{{ item.org_name }}
								<br />
								<span style="font-size: 10px"
									>({{ item.org_email }})</span
								>
							</td>
							<td>
								{{ item.org_type }}
							</td>
							<td>
								{{ item.org_status }}
							</td>

							<td>
								<button
									:disabled="item.customer_role == 1"
									type="button"
									@click="viewCustomer('/admin/customers/' + item.id)"
									class="btn btn-sm btn-info"
								>
									<i class="far fa-eye mr-2"></i>View Profile
								</button>
								<!-- <button type="button" @click="viewCustomer('/admin/customers/'+item.id)" class="btn btn-sm btn-info"> <i class="far fa-eye mr-2"></i>View Profile</button> -->
								<a
									:href="
										'/admin/reports/orders-by-customers/' +
										item.id +
										'/' +
										item.full_name
									"
									class="btn btn-sm btn-success"
									>Orders</a
								>
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
		data() {
			return {
				organizations: [],
			};
		},

		mounted() {},

		created() {
			this.getOrganization();
		},
		methods: {
			prepareDataTable() {
				$(document).ready(function () {
					$("#customers-table").DataTable({
						lengthMenu: [
							[10, 25, 50, -1],
							[10, 25, 50, "All"],
						],
						iDisplayLength: -1,
					});
				});
			},
			getOrganization() {
				axios
					.get(`api/getOrganization`)
					.then((res) => {
						this.organizations = res.data;
						this.prepareDataTable();
					})
					.catch((err) => {
						console.error(err);
						alert("Something went wrong");
					});
			},
			AddNewOrg() {
				window.location.href = "/admin/organization/add";
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
