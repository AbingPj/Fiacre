<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-boxes"></i> Organization Orders
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<table id="org-orders-table" class="table table-hover">
					<thead>
						<tr>
							<!-- <th scope="col">#</th> -->
							<th>Date</th>
							<th>Order #</th>
							<th>Order By</th>
							<th>Amount</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in orders" :key="index">
							<td>{{ item.id }}</td>
							<td>{{ item.atr_date_label }}</td>
							<td>
								{{ item.user.full_name }}
							</td>
							<td>
								$ {{ item.atr_subscription_overall_total_amount_f }}
							</td>
							<td>
								<button
									type="button"
									@click="viewOrder(item)"
									class="btn btn-sm btn-info"
								>
									<i class="far fa-eye mr-2"></i> View Order Details
								</button>
							</td>
							<!-- <td>
                    <span v-for="(sub, index2) in item.sub_categories" :key="index2">{{sub.name}},</span>
                  </td> -->
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["org"],
		data() {
			return {
				orders: [],
			};
		},

		created() {
			this.getOrders();
		},
		methods: {
			viewOrder(data) {
				window.location.href = `/admin/org/orders/${data.id}`;
			},
			prepareDataTable() {
				$(document).ready(function () {
					$("#org-orders-table").DataTable({
						order: [[0, "desc"]],
						lengthMenu: [
							[10, 25, 50, -1],
							[10, 25, 50, "All"],
						],
						iDisplayLength: -1,
					});
				});
			},
			getOrders() {
				LoadingOverlay();
				axios
					.get(`/admin/org/getOrganizationOrders`)
					.then((res) => {
						LoadingOverlayHide();
						this.orders = res.data;
						this.prepareDataTable();
					})
					.catch((err) => {
						console.error(err);
						LoadingOverlayHide();
						alert("Something went wrong");
					});
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
