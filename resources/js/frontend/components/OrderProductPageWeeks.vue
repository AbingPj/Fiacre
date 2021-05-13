

<template>
	<div class="container mt-1 mb-5">
		<div class="row">
			<!-- <users-balance :user="user" :guest="guest"></users-balance> -->
		</div>
		<div class="row">
			<div class="col-12">
				<h2 style="color: #339f25">
					{{ order_product.product_details.name }}
				</h2>
				<h5>School/Parish: {{ order.organization.org_name }}</h5>
				<h6>
					<i>Address: {{ order.organization.atr_address }}</i>
				</h6>
			</div>
		</div>
		<div class="pl-3 pt-3 mb-3">
			<a style="color: #339f25" :href="'/order/' + order.id"
				>Back to ordered products</a
			>
		</div>
		<div class="row mt-3">
			<div class="col-lg-12 orders">
				<div class="row">
					<div class="col-md-10 col-sm-12 cart-items">
						<table class="table table-hover">
							<thead>
								<tr>
									<th>week No.</th>
									<th>Pick Up Date</th>
									<th>Picked Up</th>
									<th>Actual Pick Up Date</th>
									<th>Picked Up By</th>
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
											{{
												item.is_picked_up == 1 ? "Done" : "Not Yet"
											}}
										</span>
									</td>
									<td>{{ item.atr_actual_date_label }}</td>
									<td>{{ item.pick_up_by }}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["order", "order_product", "weeks", "organization"],
	};
</script>

