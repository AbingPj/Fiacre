<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-donate"></i> Organization Fundraise
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
							<th class="text-center">Date</th>
							<th class="text-center">Order #</th>
							<th class="text-center">Order By</th>
                            <th class="text-center">Amount</th>
							<th class="text-center">Fundraise</th>
							<th class="text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in orders" :key="index">
							<td>{{ item.atr_date_label }}</td>
                            <td>{{ item.id }}</td>
							<td>
								{{ item.user.full_name }}
							</td>
                            <td class="text-right  border-right border-warning">
								$ {{ item.atr_subscription_total_amount_f }}
							</td>
							<td class="text-right border-right border-info">
								$ {{ item.atr_fundraise_f }}
							</td>
							<td  class="text-center">
								<button
									type="button"
									@click="viewOrder(item)"
									class="btn btn-sm btn-info"
								>
									<i class="far fa-eye mr-2"></i> Order Details
								</button>
                                <button
									type="button"
									@click="viewFundraiseDetails(item)"
									class="btn btn-sm btn-success"
								>
									<i class="far fa-eye mr-2"></i> Fundraise Details
								</button>
							</td>
							<!-- <td>
                    <span v-for="(sub, index2) in item.sub_categories" :key="index2">{{sub.name}},</span>
                  </td> -->
						</tr>
					</tbody>
                   <tfoot>
                       <tr>
                           <th>Total</th>
                           <th></th>
                           <th></th>
                           <th></th>
                           <th class="text-right border-right border-info">$ {{org.fundraise_f}}</th>
                           <th></th>
                       </tr>
                   </tfoot>
				</table>
			</div>
		</div>
        <admin-reports-fundraise-details-modal-2 ref="fdModalRef2"></admin-reports-fundraise-details-modal-2>
	</div>
</template>

<script>
	export default {
		props: ["propsorg"],
		data() {
			return {
				orders: [],
                org:{}
			};
		},

		created() {
            this.org = this.propsorg;
			this.getOrders();
		},
		methods: {
			viewOrder(data) {
				window.location.href = `/admin/org/orders/${data.id}`;
            },
            viewFundraiseDetails(item) {
			    this.$refs.fdModalRef2.order = item;
                this.$refs.fdModalRef2.products = item.order_products;
               $("#fundraiseDetailsModal2").modal("show");
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
					.get(`/admin/org/getOrganizationFundraise`)
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
