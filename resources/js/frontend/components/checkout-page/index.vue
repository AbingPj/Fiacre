<style lang="scss" scoped>
	.order-summary {
		//  border: 2px solid lightgray !important;
		.cart-container {
			min-height: 620px;
			border: 2px solid lightgray !important;
			padding: 10px;
			border-radius: 5px;
			position: -webkit-sticky;
			position: sticky;
			top: 10px;

			.content {
				//    background: lightgreen;
				//   position: relative;
				min-height: 600px;

				.cart-header {
					// padding: 10px 0;
					padding: 10px 0px 0px 20px;
					text-align: left;
				}
			}
		}
	}

	.main-conatiner {
		@media (min-width: 992px) {
			max-width: 1000px;
		}

		@media (min-width: 1200px) {
			max-width: 1210px;
		}

		@media (min-width: 1300px) {
			max-width: 1250px;
		}

		@media (min-width: 1400px) {
			max-width: 1300px;
		}
	}

	.btn-edit {
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}
</style>

<template>
	<div class="container mt-1 mb-5 main-conatiner">
		<div class="row">
			<div class="col-12">
				<h4>
					<u>
						<a href="/products">Continue Shopping</a>
					</u>
				</h4>
			</div>
		</div>

		<div v-if="errorMessage" class="row">
			<div class="col-md-12">
				<!-- <div class="alert alert-danger" role="alert">{{ errorMessage }}</div> -->
				<div class="alert alert-danger" role="alert">
					<button
						@click="closeErrorMessage()"
						type="button"
						class="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					{{ errorMessage }}
					<span v-if="needToSetBillingInfo"
						><a href="/register/success/confirmed">Click Here</a> to set
						it</span
					>
				</div>
			</div>
		</div>

		<div class="row">
			<cp-selected-items
				:cart="this.cart"
				:customer_role="user.customer_role"
			></cp-selected-items>
			<div class="col-lg-4 col-md-5 order-summary">
				<div class="cart-container bg-white">
					<div class="content d-flex flex-column">
						<div class="col-md-12 cart-header">
							<h4 class="text-dark">Shipping</h4>
						</div>
						<table class="table">
							<tbody>
								<tr>
									<td colspan="2">
										<div class="mb-2">Delivery Type:</div>
										<div class="form-group ml-3 mb-0">
											<div class="form-check form-check-inline">
												<input
													class="form-check-input"
													type="radio"
													value="deliver"
													v-model="shipments"
													disabled
												/>
												<label
													class="form-check-label"
													for="inlineRadio1"
													>Deliver</label
												>
											</div>
											<div class="form-check form-check-inline">
												<input
													class="form-check-input"
													type="radio"
													value="pickup"
													v-model="shipments"
												/>
												<label
													class="form-check-label"
													for="inlineRadio2"
													>Pick-up</label
												>
											</div>
										</div>
									</td>
								</tr>

								<tr>
									<td colspan="2">
										<div class="mb-2">School/Parish Address:</div>
										<div class="ml-3">
											<b>{{ org_name }}</b>
											<br />
											<i class="fas fa-map-marker mr-2"></i>
											{{ org_address }}
										</div>
										<br />
										<i>This will be the pick-up address</i>
									</td>
								</tr>
							</tbody>
						</table>

						<div class="col-md-12 cart-header mt-3">
							<h4 class="text-dark">Order Summary</h4>
						</div>

						<div>
							<os-fiacre
								:total_amount="totalAmount"
								:over_all_total="OverAllTotal"
								:cc="getCCAmount"
								:ach="getACHAmount"
								:user_billing_type="user_billing_type"
							>
							</os-fiacre>
						</div>

						<div
							class="col-md-12 text-center place-order-btn-container mt-auto"
						>
							<h6 v-if="guest == 0" class="text-danger">
								{{ errorMessage }}
							</h6>
							<button
								type="button"
								class="btn btn-lg btn-primary w-100"
								:disabled="placeorderButtonDisabled"
                                @click="placeOrder()"
							>
								PLACE ORDER
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	const ChPSelectedItems = () =>
		import(
			/* webpackChunkName: "js/f/ChPSelectedItems" */ "./selectedItems.vue"
		);
	const ChPOFiacre = () =>
		import(
			/* webpackChunkName: "js/f/ChPOFiacre" */ "./order-summary-table/Fiacre.vue"
		);

	import cookies from "js-cookie";

	export default {
		components: {
			"cp-selected-items": ChPSelectedItems,
			"os-fiacre": ChPOFiacre,
		},
		props: [
			"action",
			"propproducts",
			"guest",
			"user",
			"sunclubmember",
			"delivery_fee",
			"wholesaler_minimum_order_amount",
			"expected_delivery_dates",
			"user_billing_type",
		],
		data() {
			return {
				products: [],
				shipments: "pickup",
				shipmentsOptions: [
					{ text: "Deliver", value: "deliver" },
					{ text: "Pick-up", value: "pickup" },
				],
				cart: [],
				sun_wholesale_payment: "",
				placeorderButtonDisabled: false,
				csrf: document
					.querySelector('meta[name="csrf-token"]')
					.getAttribute("content"),
				nearestPickupZones: [],
				nearestDeliveryZones: [],
				errorMessage: "",
				coupon_code: "",
				couponMessage: "",
				coupon: {},
				couponCodeIsValid: false,
				guestHasAddress: false,
				guestAddress: "",
				guestAddressObj: {},
				guestAddressModalIsReady: false,
				needToSetBillingInfo: false,
				googleAPIKEY: process.env.MIX_GOOGLE_API_KEY,
				org_id: cookies.get("ff-org-id"),
				org_name: cookies.get("ff-org-name"),
				org_address: cookies.get("ff-org-address"),
			};
		},
		computed: {
			totalAmount() {
				if (this.cart.length == 0) {
					return 0.0;
				} else {
					let total = 0;
					this.cart.forEach((cart) => {
						total = total + cart.subscription_price;
					});
					return total;
				}
			},

			getDiscount() {
				let discount = 0;
				if (this.guest == 0) {
					discount = this.totalAmount * (this.user.discount / 100);
				}
				return discount;
			},

			getCouponDiscount() {
				let discount = 0;
				if (this.couponCodeIsValid) {
					if (this.coupon.is_percentage) {
						discount =
							this.totalAmount * (this.coupon.discount_amount / 100);
					} else {
						discount = this.coupon.discount_amount;
					}
				}
				return discount;
			},
			getCCAmount() {
				let cc = 0;
				if (this.cart.length == 0) {
					cc = 0.0;
				} else {
					cc = this.totalAmount * 0.03;
				}
				return cc;
			},
			getACHAmount() {
				let ach = 0;
				if (this.cart.length == 0) {
					ach = 0.0;
				} else {
					ach = this.totalAmount * 0.02;
				}
				return ach;
			},

			OverAllTotal() {
				let total = 0;
				total = this.totalAmount;
				if (this.user_billing_type == "CC") {
					total = total + this.getCCAmount;
				}
				if (this.user_billing_type == "ACH") {
					total = total + this.getACHAmount;
				}
				return total;
			},

			cart_badge() {
				return this.cart.length;
			},
		},
		created() {
			this.getCart();
		},

		methods: {
			displayNumber(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
			closeErrorMessage() {
				this.errorMessage = "";
			},
			placeOrder() {
				LoadingOverlay();
				this.placeorderButtonDisabled = true;
				if (this.cart.length > 0) {
					this.fiacreCustomerOrder();
				} else {
					this.errorMessage = "You Dont Have Selected Products.";
					window.scrollTo(0, 0);
					LoadingOverlayHide();
					this.placeorderButtonDisabled = false;
				}
			},

			fiacreCustomerOrder() {
				axios
					.post("/placeorder/fiacreCustomer", {
						cart: this.cart,
						org_id: this.org_id,
					})
					.then((res) => {
						// LoadingOverlayHide();
						console.log(res);
						this.cart = [];
						localStorage.setItem("cart", JSON.stringify(this.cart));
						localStorage.setItem("cart_badge", this.cart.length);

						if (res.status == 200) {
							window.location.href = "/placeorder/thankyou";
						}
                        // this.placeorder = false;
                        this.placeorderButtonDisabled = false;
					})
					.catch((err) => {
						//   console.error(err.response.data.data_message);
						this.errorMessage =
							"Payment error: " + err.response.data.data_message;
                        this.placeorderButtonDisabled = false;
                          window.scrollTo(0, 0);
						LoadingOverlayHide();
						//   console.error(err);
					});
			},

			async getCart() {
				LoadingOverlay();

				if (this.ifCartExpired()) {
					this.cart = [];
					localStorage.setItem("cart", JSON.stringify(this.cart));
				} else {
					let lastcart =
						(await JSON.parse(localStorage.getItem("cart") || "null")) || [];
					this.cart = lastcart;
					localStorage.setItem("cart_badge", this.cart.length);
				}

				if (this.cart.length == 0) {
					if (this.user.sun_is_expired == 1) {
						LoadingOverlayHide();
					} else {
						window.location.href = "/products";
					}
				} else {
					LoadingOverlayHide();
				}
			},

			ifCartExpired() {
				const itemStr = localStorage.getItem("cart_expiry");
				if (!itemStr) {
					return true;
				}
				const item = JSON.parse(itemStr);
				const now = new Date();
				if (now.getTime() > item) {
					return true;
				}
				return false;
			},

			setCartExpiry(ttl) {
				const now = new Date();
				let expiry = now.getTime() + ttl;
				localStorage.setItem("cart_expiry", expiry);
			},

			removeItemInCart(data) {
				this.cart.splice(
					this.cart.findIndex(function (i) {
						return i.id === data.id;
					}),
					1
				);
				localStorage.setItem("cart", JSON.stringify(this.cart));
				localStorage.setItem("cart_badge", this.cart.length);
				this.$events.fire("updateCartBadge", "update cart");
				this.setCartExpiry(86400000);
			},
		},
	};
</script>
