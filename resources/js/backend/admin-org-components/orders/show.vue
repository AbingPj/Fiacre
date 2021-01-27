<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-boxes"></i> Order #{{ order.id }}
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
							<th>Product</th>
							<th></th>
							<th>Subscription Price</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, index) in products" :key="index">
							<td>{{ item.product_details.name }}</td>
							<td></td>
							<td>
								$ {{ item.subscription_price.toFixed(2) }} /
								{{ item.subscription_weeks }} weeks
							</td>
							<td>
								<button type="button" class="btn btn-sm btn-info">
									View Product Details
								</button>
								<button type="button" class="btn btn-sm btn-info">
									Week Details
								</button>
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<td>Total</td>
							<td></td>
							<td>$ {{ order.atr_subscription_total_amount_f }}</td>
							<td></td>
						</tr>
						<tr>
							<td>{{ order.billing_type }}</td>
							<td></td>
							<td>$ {{ order.atr_billing_amount_f }}</td>
							<td></td>
						</tr>
						<tr>
							<th>Total</th>
							<th></th>
							<th>$ {{ order.atr_subscription_total_amount_f }}</th>
							<th></th>
						</tr>
					</tfoot>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["org", "order", "products"],
	};
</script>

<style lang="scss" scoped>
	.btn-success {
		color: #fff !important;
		background-color: #339f25 !important;
		border-color: #339f25 !important;
	}
</style>
