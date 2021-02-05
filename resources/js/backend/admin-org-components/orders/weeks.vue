<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-file-invoice"></i> Product:
					{{ orderd_product.product_details.name }}
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<table class="table table-hover">
					<thead>
						<tr>
							<!-- <th scope="col">#</th> -->
							<th>week No.</th>
							<th>Pick Up Date</th>
							<th>Picked Up</th>
							<th>Actual Pick Up Date</th>
							<th>Picked Up By</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in weeks" :key="index">
							<td>Week {{ item.weeknumber }}</td>
							<td>{{ item.atr_date_label }}</td>
							<td>
								<span
									:class="
										item.is_picked_up == 1
											? 'badge badge-success'
											: 'badge badge-danger'
									"
								>
									{{ item.is_picked_up == 1 ? "Done" : "Not Yet" }}
								</span>
							</td>
							<td>{{ item.atr_actual_date_label }}</td>
							<td>{{ item.pick_up_by }}</td>
							<td>
								<button
                                    v-if="item.is_picked_up == 0"
									class="btn btn-sm btn-info"
									@click="WeeksModalShow(item)"
								>
									Change Pick Up Status
								</button>
                                <button
                                    v-else
									class="btn btn-sm btn-danger"
									@click="BackToNotYet(item)"
								>
									Change to "Not Yet"
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
        <admin-org-orders-show-weeks-status-modal ref="WeekModalRef"></admin-org-orders-show-weeks-status-modal>
	</div>
</template>

<script>
	export default {
		props: ["org", "orderd_product", "weeks"],
		methods: {
			Inprogress() {
				alert("Work In Progress");
            },
            WeeksModalShow(data) {
                this.$refs.WeekModalRef.data.id = data.id;
                $("#weeksModal").modal("show");
            },
            BackToNotYet(data) {
                LoadingOverlay();
                var data = {
                    id: data.id,
					date: null,
                    pickupby: null,
                    status: 0,
                }
				axios.post('/admin/org/ordersweeks/change',data)
                .then(res => {
                    $("#weeksModal").modal("hide");
                    // location.reload();
                    document.location.reload(true)
                })
                .catch(err => {
                    console.error(err);
                    LoadingOverlayHide();
                    alert("Something went wrong");
                })
			},

		},
	};
</script>

<style lang="scss" scoped>
	.btn-success {
		color: #fff !important;
		background-color: #339f25 !important;
		border-color: #339f25 !important;
	}
</style>
