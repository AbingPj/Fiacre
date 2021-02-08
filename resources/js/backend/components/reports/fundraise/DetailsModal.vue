<template>
	<div
		class="modal fade"
		id="fundraiseDetailsModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="fundraiseDetailsModal"
		aria-hidden="true"
		data-backdrop="static"
	>
		<div class="modal-dialog guest-payment-modaol-dialog" role="document">
			<div
				class="modal-content"
				style="font-family: Source Sans Pro, sans-serif !important"
			>
				<div class="modal-body guest-payment-modal-body">
					<div class="container product-container">
						<div class="row">
							<div class="col" style="padding: 0px !important">
								<h5>
									<i class="fas fa-sitemap"></i> Order #: {{order.id}} Products Fundraise
									Details
									<button
										class="btn-close float-right"
										data-dismiss="modal"
										aria-label="Close"
									>
										<i
											class="fa fa-times-circle"
											aria-hidden="true"
										></i>
									</button>
								</h5>

								<div class="my-5 mx-2">
									<table class="table table-hover">
										<thead>
											<tr>
												<!-- <th scope="col">#</th> -->
												<th style="width: 150px; font-size:12px;">Product</th>
												<th>Price</th>
												<th>Qty/Weeks</th>
												<th
                                                   class="text-right"
												>
													Sub-Total
												</th>
                                                <th  class="text-right">
													Fundraise pct.
												</th>
                                                 <th  class="text-right">
													Product Fundraise
												</th>

											</tr>
										</thead>
										<tbody>
											<tr
												v-for="(item, index) in products"
												:key="index"
											>
												<td style="width: 150px; font-size:10px;">{{ item.product_details.name }}</td>
												<td>
													$ {{ item.atr_price_f }}/{{
														item.product_details.unit
													}}
												</td>
												<td>
													<span v-if="!item.is_subscription">{{
														item.updated_quantity
													}}/{{item.product_details.unit}}</span>
                                                    <span v-if="item.is_subscription">{{
														item.subscription_weeks
													}}/weeks</span>
												</td>

												<td
													class="text-right border-right border-warning"
												>
													<span v-if="item.is_subscription"
														>$ {{ item.atr_subscription_price_f }}
													</span>
													<span v-if="!item.is_subscription"
														>$ {{ item.atr_sub_total_f }}
													</span>
												</td>
                                                <td 	class="text-right">
													{{ item.fundraise_percentage }} %
                                                <td 	class="text-right border-right border-info">
													$ {{ item.atr_fundraise_f }}
												</td>

											</tr>
										</tbody>
										<tfoot>
											<tr>
												<th>Total</th>
												<th></th>
												<th></th>
												<th class="text-right"></th>
												<th class="text-right"></th>
												<th class="text-right border-right border-info">$ {{order.atr_fundraise_f}}</th>
											</tr>
										</tfoot>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Modal Body -->
			</div>
		</div>
		<!-- Modal Dialog -->
	</div>
</template>

<script>
	import DatePicker from "vue2-datepicker";
	import "vue2-datepicker/index.css";
	export default {
		components: { VueTwoDatePicker: DatePicker },

		data() {
			return {
				order: {},
				products: [],
			};
		},
		mounted() {
			// this.showModal();
		},
		methods: {
			showModal() {
				$("#fundraiseDetailsModal").modal("show");
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.guest-payment-modaol-dialog {
		max-width: 850px;
	}
	.guest-payment-modal-body {
		padding: 20px 20px;
	}
	// .product-container {
	//   //   background-color: red;
	//   position: relative;
	//   padding: 0px;
	// }
	.mx-input-wrapper {
		position: relative;
		width: 100%;
	}
	.btn-close {
		//   position: absolute;
		//   top: 10px;
		//   right: 10px;
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
		padding: 0px;
	}
	.my-select {
		padding: 0px;
		margin: 0px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
	}
</style>
