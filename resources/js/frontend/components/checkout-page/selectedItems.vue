<style lang="scss" scoped>
	.items {
		border: 2px solid lightgray !important;

		.cart-items {
			margin: 20px 0px 20px 0px;
			padding: 20px 15px 0px 15px;
			// max-height: 500px; //uncomment if u want to use scroll
			overflow-x: hidden;
			/* Hide horizontal scrollbar */

			// overflow-y: scroll; //uncomment if u want to use scroll

			/* Add vertical scrollbar */
			.cart-item {
				padding: 10px;
				background-color: lightgray;

				.cart-item-image {
					width: 85px;
					height: 85px;
					object-fit: cover;
					padding: 0px;
					margin: 0px 10px 0px 0px;
					background-color: white;
					margin: 0px 10px 0px 0px;
				}

				.cart-item-texts {
					padding-left: 10px;
					text-align: left;

					// background-color: red;
					.item-name {
						font-size: 20px;
					}

					p {
						margin-bottom: 0px;
					}

					.qty-options {
						color: #339f25;
						padding: 0px;
						font-size: 20px;

						.plusminus {
							background: transparent;
							border: 0px;
							color: gray;
							font-size: 20px;
						}
					}
				}

				.cart-item-close-container {
					width: 20%;
					padding: 0px;
					position: relative;

					#x {
						position: absolute;
						top: 0px;
						right: 5px;
						background: transparent;
						border: 0px;
						color: gray;
					}

					#sub-total {
						//   background: white;
						position: absolute;
						bottom: 0px;
						right: 5px;
						font-size: 20px;

						.ws {
							font-size: 15px;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="col-lg-8 col-md-7 items">
		<div class="row">
			<div class="col-sm-12 cart-items">
				<div v-if="cart.length == 0" class="text-center mt-5">
					<h3>You Dont Have Selected Products.</h3>
					<h5>
						<a href="/products">Back To Products</a>
					</h5>
				</div>

				<ul class="list-group">
					<li
						v-for="(item, index) in cart"
						:key="index"
						class="list-group-item cart-item"
						style="margin-bottom: 10px"
					>
						<div class="d-flex">
							<div>
								<img :src="item.image_link" class="cart-item-image" />
							</div>
							<div class="cart-item-texts flex-grow-1">
								<p>
									<span class="item-name">
										<b>{{ item.name }}</b>
									</span>
									<br />
									<span v-if="item.is_subscription == 0">
										<span v-if="customer_role == 2"
											>$ {{ item.member_price }}/{{
												item.unit
											}}</span
										>
										<span v-else-if="customer_role == 3"
											>$ {{ item.wholesale_price }}/{{
												item.unit
											}}</span
										>
										<span v-else
											>$ {{ item.price }}/{{ item.unit }}</span
										>
									</span>
									<span v-if="item.is_subscription == 1"
										>$ {{ item.price }}/{{ item.unit }}</span
									>
									<br />

									<br />

									<span
										v-if="item.is_subscription == 1"
										class="qty-options"
									>
										$ {{ item.price }} X {{ item.weeks }} weeks =
									</span>
									<span
										v-if="item.is_subscription == 0"
										class="qty-options"
									>
										<b>qty:</b>
										<button
											type="button"
											class="plusminus"
											@click="subQty(item)"
										>
											<i
												class="fa fa-minus-circle"
												aria-hidden="true"
											></i>
										</button>
										<b>{{ item.qty }}</b>
										<button
											type="button"
											class="plusminus"
											@click="addQty(item)"
										>
											<i
												class="fa fa-plus-circle"
												aria-hidden="true"
											></i>
										</button>
									</span>
								</p>
							</div>
							<div class="cart-item-close-container ml-auto">
								<button
									type="button"
									id="x"
									@click="removeItemInCart(item)"
								>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
								<div id="sub-total" class="text-right">
									<span v-if="item.is_subscription == 0">
										<b v-if="customer_role == 2"
											>$
											{{
												displayNumber(item.member_price * item.qty)
											}}</b
										>
										<b v-else-if="customer_role == 3"
											>$
											{{
												displayNumber(
													item.wholesale_price * item.qty
												)
											}}</b
										>
										<b v-else
											>$
											{{ displayNumber(item.price * item.qty) }}</b
										>
									</span>
									<span v-if="item.is_subscription == 1">
										<b
											>$
											{{ displayNumber(item.subscription_price) }}</b
										>
									</span>
									<br />
								</div>
							</div>
							<br />
						</div>
						<div
							@click="updateRecurring(item)"
							class="custom-control custom-switch pb-3 my-2"
						>
							<input
								:checked="item.recurring == true ? true : false"
								type="checkbox"
								class="custom-control-input"
							/>
							<label class="custom-control-label" for="customSwitch1"
								>Add to Recurring</label
							>
						</div>

						<div v-if="item.is_bundle == 1" class="row mt-2">
							<div class="col">
								<label>Included Products:</label>
								<ul class="list-group list-group-flush">
									<li
										v-for="(item2, index) in item.selected_products"
										:key="index"
										class="list-group-item"
										style="padding: 2px 10px 2px 10px"
									>
										<div class="d-flex">
											<div style="width: 20%">
												{{ item2.qty }}/{{ item2.unit }} &nbsp;
												&nbsp; &nbsp;
											</div>
											<div style="width: 30%">
												<img
													:src="item2.image_link"
													style="
														width: 20px;
														height: 20px;
														object-fit: cover;
													"
												/>
												{{ item2.name }}
											</div>
											<div style="width: 50%" class="text-right">
												<button
													type="button"
													@click="sub(item, item2, index)"
													class="btn btn-sm"
													:class="
														item2.sub == 'sub'
															? 'btn-info'
															: 'btn-secondary'
													"
												>
													{{ subUnsub(item2) }}
												</button>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["cart", "customer_role"],
		methods: {
			displayNumber(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
			sub(data1, data, index) {
				this.$parent.sub(data1, data, index);
			},
			updateRecurring(item) {
				this.$parent.updateRecurring(item);
			},
			subQty(item) {
				this.$parent.subQty(item);
			},
			addQty(item) {
				this.$parent.addQty(item);
			},
			removeItemInCart(item) {
				this.$parent.removeItemInCart(item);
			},
			subUnsub(data) {
				if (data.sub == "sub") {
					return "SUB";
				} else {
					return "UNSUB";
				}
			},
		},
	};
</script>
