<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.cart-container {
		min-height: 325px;
		border: 2px solid lightgray !important;
		margin-top: 20px;
		margin-right: 5px;
		margin-left: 5px;
		padding: 0px;
		border-radius: 5px;
		position: -webkit-sticky;
		position: sticky;
		top: 130px;
		.cart-header {
			padding: 10px 0;
			text-align: center;
		}
		.btn-primary {
			background-color: #339f25 !important;
		}
		.cart-items {
			margin-bottom: 30px;
			max-height: 500px;
			overflow-x: hidden; /* Hide horizontal scrollbar */
			overflow-y: scroll; /* Add vertical scrollbar */
			.cart-item {
				padding: 5px;
				background-color: lightgray;
				.cart-item-image {
					width: 68px;
					height: 68px;
					object-fit: cover;
					padding: 0px;
					margin: 0px 10px 0px 0px;
					background-color: white;
					margin: 0px 10px 0px 0px;
				}
				.cart-item-texts {
					text-align: left;
					// background-color: red;
					p {
						margin-bottom: 0px;
					}
				}

				.cart-item-close-container {
					// width: 10%;
					padding: 0px;
					position: relative;
					.top-right {
						position: absolute;
						top: 0px;
						right: 0px;
                        .u-btn{
                            background: transparent;
                            border: 0px;
                            color: gray;
                        }
                        .u-btn:hover{
                            color: #339f25;
                        }
                        .x-btn{
                            background: transparent;
                            border: 0px;
                            color: gray;
                        }
                        .x-btn:hover{
                            color: red;
                        }

					}
					#sub-total {
						//   overflow: visible;
						width: 90px;
						position: absolute;
						bottom: 0px;
						right: 0px;
						text-align: right;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="cart-container bg-white border-0">
		<div class="col-md-12 cart-header">
			<h5 class="text-secondary">ORDER SUMMARY</h5>
		</div>
		<div class="col-md-12 text-center">
			<button
				type="button"
				class="btn btn-lg btn-primary w-100"
				@click="proccedToCheckout()"
				:disabled="cart.length == 0"
			>
				Proceed to Checkout
			</button>
		</div>
		<div class="col-md-12 text-center">
			<div class="mt-4">Total Amount:</div>
			<div class="total-cart-price mb-1">
				<h4>
					<b>$ {{ displayNumberWithComma(totalAmount) }}</b>
				</h4>
			</div>
			<div v-if="customer_role == 3">
				<div>(Wholesaler Minimum Order Amount:)</div>
				<div class="mb-4">$ {{ minimum.toFixed(2) }}</div>
			</div>
			<div class="row">
				<div class="col-sm-12 cart-items">
					<ul class="list-group">
						<li
							v-for="(item, index) in cart"
							:key="index"
							class="list-group-item d-flex cart-item"
							style="margin-bottom: 10px"
						>
							<div @click="updateQtyModal(item)">
								<img :src="item.image_link" class="cart-item-image" />
							</div>
							<!-- <div class="cart-item-texts flex-grow-1" @click="updateQtyModal(item)"> -->
							<div
								class="cart-item-texts w-50"
								@click="updateQtyModal(item)"
							>
								<p>
									<b>{{ item.name }}</b>
									<br />
									<span v-if="customer_role == 2"
										>$
										{{ displayNumberWithComma(item.member_price) }}/{{
											item.unit
										}}</span
									>
									<span v-else-if="customer_role == 3"
										>$
										{{
											displayNumberWithComma(item.wholesale_price)
										}}/{{ item.unit }}</span
									>
									<span v-else
										>$ {{ displayNumberWithComma(item.price) }}/{{
											item.unit
										}}</span
									>
									<br />
									<span
										v-if="item.is_subscription == 0"
										style="color: #339f25; padding: 0px"
										>Qty: {{ item.qty }} {{ item.unit }}</span
									>
									<span
										v-if="item.is_subscription == 1"
										style="color: #339f25; padding: 0px"
									>
										{{ displayNumberWithComma(item.price) }} *
										{{ item.weeks }} weeks =
									</span>
								</p>
							</div>
							<div class="cart-item-close-container ml-auto w-25">
                                <div class="top-right">
                                    <button v-if="guest == '0'" class="u-btn" @click="showProductsModalEdit(item)">
									    <i class="fa fa-pencil-alt" aria-hidden="true"></i>
								    </button>
                                    <button class="x-btn" @click="removeItemInCart(item)">
									    <i class="fa fa-times" aria-hidden="true"></i>
								    </button>
                                </div>

								<span id="sub-total">
									<b v-if="item.is_subscription == 0"
										>$ {{ displayNumberWithComma(subTotal(item)) }}</b
									>
									<b v-if="item.is_subscription == 1"
										>$
										{{
											displayNumberWithComma(item.subscription_price)
										}}</b
									>
								</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["cart", "customer_role", "minimum", "guest"],
		methods: {
			proccedToCheckout() {
				//   window.location.href = "/products/checkout";
				if (this.customer_role == 0) {
					alert("under construction for admin checkout");
				} else {
					this.setCartExpiry(86400000);
					if (this.guest == "1") {
						$("#modalLogin").modal("show");
					} else {
						if (this.customer_role == 1) {
							LoadingOverlay();
							window.location.href = "/register/success/confirmed";
						} else {
							LoadingOverlay();
							window.location.href = "/products/checkout";
						}
					}
					// if (this.customer_role == 3) {
					//   if (this.totalAmount < this.minimum) {
					//     $("#warningModal").modal("show");
					//   } else {
					//     LoadingOverlay();
					//     window.location.href = "/products/checkout";
					//   }
					// } else {
					// LoadingOverlay();
					// window.location.href = "/products/checkout";
					// }
				}
			},
			setCartExpiry(ttl) {
				const now = new Date();
				let expiry = now.getTime() + ttl;
				localStorage.setItem("cart_expiry", expiry);
			},
			removeItemInCart(data) {
				this.$parent.removeItemInCart(data);
			},
            showProductsModalEdit(data){
                this.$parent.showAddToCartModalEdit(data);
            },

			subTotal(item) {
				let subtotal = 0;
				if (this.customer_role == 2) {
					subtotal = item.member_price * item.qty;
				} else if (this.customer_role == 3) {
					subtotal = item.wholesale_price * item.qty;
				} else {
					subtotal = item.price * item.qty;
				}
				return subtotal;
			},
			displayNumberWithComma(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
		},
		computed: {
			totalAmount() {
				if (this.cart.length == 0) {
					return 0.0;
				} else {
					let total = 0;
					this.cart.forEach((cart) => {
						if (cart.is_subscription == 1) {
							total = total + cart.subscription_price;
						} else {
							if (this.customer_role == 2) {
								total = total + cart.member_price * cart.qty;
							} else if (this.customer_role == 3) {
								total = total + cart.wholesale_price * cart.qty;
							} else {
								total = total + cart.price * cart.qty;
							}
						}
					});
					return total;
				}
			},
		},
	};
</script>
