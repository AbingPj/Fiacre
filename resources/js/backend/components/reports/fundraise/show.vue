<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<!-- <h2 class="card-title mb-0">Orders by {{data.user.full_name}}</h2> -->
				<h2 class="card-title mb-0">{{ organization.org_name }} / <b>{{ optioncid }}</b></h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<br />
		<br />
		<div class="row">
			<div class="col-lg-10">
				<table id="fundraise" class="table table-hover">
					<thead>
						<tr>
							<th style="width: 100px">Order #</th>
							<th>Date</th>
							<th>Order By</th>
							<th>Fundraise Total Amount</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in orders" :key="index">
							<td>{{ item.id }}</td>
							<td>{{ item.atr_date_label }}</td>
							<td>{{ item.user.full_name }}</td>
							<td
								style="width: 180px"
								class="text-right pr-3 border-right border-info"
							>
								$ {{ item.atr_fundraise_f }}
							</td>
							<td class="">
							 <a
														:href="'/admin/orders/' + item.id"
														class="btn btn-sm btn-info"
														>Order Details</a
													>
                                                    <button
														class="btn btn-sm btn-success"
                                                        @click="openModal(item)"
														>Fundraise Details</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<th>Total</th>
						<th></th>
						<th></th>
						<th class="text-right border-right border-info">
							$ {{ organization.fundraise_f }}
						</th>
						<th></th>
					</tfoot>
				</table>
			</div>
		</div>
        <admin-reports-fundraise-details-modal ref="fdModalRef"></admin-reports-fundraise-details-modal>
	</div>
</template>
<script>
	export default {
		props: ["optioncid"],
		data() {
			return {
				orders: [],
				organization: [],
			};
		},
		created() {
			this.getData();
		},

		methods: {
            openModal(item){
                this.$refs.fdModalRef.order = item;
                this.$refs.fdModalRef.products = item.order_products;
               $("#fundraiseDetailsModal").modal("show");
            },
			getData() {
				axios
					.get("/admin/reports/getOrganizationFundraise/" + this.optioncid)
					.then((res) => {
						this.orders = res.data.orders;
						this.organization = res.data.organization;
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


