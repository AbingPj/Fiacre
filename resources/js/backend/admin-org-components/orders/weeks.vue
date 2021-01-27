<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-boxes"></i> Product:
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
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in weeks" :key="index">
							<td>Week {{ item.weeknumber }}</td>
							<td>{{ item.date }}</td>
							<td>
								<span
									:class="
										item.is_picked_up == 1
											? 'badge badge-success'
											: 'badge badge-danger'
									"
								>
									{{ item.is_picked_up == 1? 'Done':'Not Yet' }}
								</span>
							</td>
                            <td>
                                <button class="btn btn-sm btn-info">Change Pick Up Status</button>
                            </td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["org", "orderd_product", "weeks"],
	};
</script>

<style lang="scss" scoped>
	.btn-success {
		color: #fff !important;
		background-color: #339f25 !important;
		border-color: #339f25 !important;
	}
</style>
