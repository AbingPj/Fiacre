<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-boxes"></i> Assigned Products
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<table id="org-products-table" class="table table-hover">
					<thead>
						<tr>
							<!-- <th scope="col">#</th> -->
							<th>Image</th>
							<th>Product Name</th>
							<th>Price</th>
							<!-- <th>Total No. Weeks</th> -->
							<th>Current No. Weeks</th>
							<th>Subscription Price</th>
							<th>Visibility</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in products" :key="index">
							<td>
								<img
									:src="item.image_link"
									alt=""
									style="width: 70px; height: 50px; object-fit: cover"
								/>
							</td>
							<td>
								{{ item.name }}
							</td>
							<td>$ {{ item.price }}/{{ item.unit }}</td>
							<td>{{ getNumberOfWeeks(item) }}</td>
							<td>{{ getSubPrice(item) }}</td>
							<td>
								{{ item.is_visible == 1 ? "show" : "hide" }}
							</td>

							<td>
								<button
									type="button"
									@click="viewOrganization(item)"
									class="btn btn-sm btn-info"
								>
									<i class="fas fa-cog"></i> Set Subscription
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
				products: [],
			};
		},

		mounted() {},

		created() {
			this.getProducts();
		},
		methods: {
			getNumberOfWeeks(item) {
				var data = "-";
				if (item.weeks != "-") {
					data = item.weeks + " week(s)";
				}
				return data;
			},
			getSubPrice(item) {
				var data = item.subscirption_price;
				if (data != "no subscription yet") {
					return "$ " + data + "/" + item.weeks + " weeks";
				}
				return data;
			},
			viewOrganization(data) {
				window.location.href = `/admin/org/products/subcription/${data.id}`;
			},
			prepareDataTable() {
				$(document).ready(function () {
					$("#org-products-table").DataTable({
						lengthMenu: [
							[10, 25, 50, -1],
							[10, 25, 50, "All"],
						],
						iDisplayLength: -1,
					});
				});
			},
			getProducts() {
				LoadingOverlay();
				axios
					.get(`/admin/org/getAssignedProducts`)
					.then((res) => {
						LoadingOverlayHide();
						this.products = res.data;
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
