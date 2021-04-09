<template>
	<div>
		<div
			class="modal fade"
			id="productsModalEdit"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
			style="padding: 0px !important"
			data-backdrop="static"
		>
			<div
				class="modal-dialog modal-dialog-centered product-modaol-dialog"
				role="document"
			>
				<div class="modal-content">
					<div class="modal-body product-modal-body">
						<button
							class="btn-close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<i class="fa fa-times-circle" aria-hidden="true"></i>
						</button>
						<div class="container product-container">
							<div class="row">
								<div class="col-md-6 p-image">
									<img
										:src="product.image_link"
										alt
										class="product-image"
									/>
								</div>
								<div class="col-md-6 p-content">
									<h4>
										<b>{{ product.name }}</b>
									</h4>
									<h6>
										<b
											>$ {{ updateProductPrice(product) }} /
											{{ product.unit }}</b
										>
									</h6>
                                    <div v-if="guest == 0" @click="updateRecurring()" class="custom-control custom-switch pb-3">
                                        <!-- <input v-model="recurringProd" @change="setRecurr()" type="checkbox" class="custom-control-input" id="customSwitch1"> -->
                                        <input v-model="product.recurring" type="checkbox" class="custom-control-input">
                                        <label class="custom-control-label" for="customSwitch1">Add to Recurring</label>
                                    </div>
									<p class="mb-0">
										{{ product.description }}
										<br />
										<span v-if="category" class="minmax-color">{{
											category.name
										}}</span>
										<span v-if="sub_category" class="minmax-color"
											>, {{ sub_category.name }}</span
										>
										<br />
										<span
											v-if="product.is_subscription"
											class="mb-1 mr-2 mb-sm-0"
										>
											<div v-if="guest == 1">
												<strong
													style="font-size: 17px"
													class="text-danger"
													v-if="
														product.is_no_subscrition_available
													"
													>No Subscriptions avaiable</strong
												>
												<strong v-else>Subscription</strong>
											</div>
											<div v-else>
												<div v-if="product.is_already_subscribe">
													<strong
														style="font-size: 17px"
														class="text-success"
														>Subscribed</strong
													>
												</div>
												<div v-else>
													<strong
														style="font-size: 17px"
														class="text-danger"
														v-if="
															product.is_no_subscrition_available
														"
														>No Subscriptions avaiable</strong
													>
													<strong v-else>Subscription</strong>
												</div>
											</div>
										</span>
									</p>
									<div
										v-if="product.is_subscription == 1"
										class="d-flex align-items-center"
									>
										<div>
											<label class="mr-2">
												<strong
													>$ {{ product.subscription_price }} /
													{{ product.weeks }} weeks</strong
												>
											</label>
										</div>
										<div class="ml-auto">
											<!-- <button
											:disabled="
												product.is_already_subscribe ||
												product.is_no_subscrition_available
											"
											type="button"
											class="btn btn-success"
											@click="addToCart()"
										>
											Add to Cart
										</button> -->
										</div>
									</div>

									<div
										v-if="product.is_subscription == 0"
										class="d-flex align-items-center"
									>
										<!-- <div>
											<label class="mr-2">
												<strong>Qty:</strong>
											</label>
										</div> -->
										<div>
											<span
												v-if="product.is_subscription == 0"
												class="qty-options"
											>
												<b>qty:</b>
												<button
													type="button"
													class="plusminus"
													@click="subQty(product)"
												>
													<i
														class="fa fa-minus-circle"
														aria-hidden="true"
													></i>
												</button>
												<b>{{ product.qty }}</b>
												<button
													type="button"
													class="plusminus"
													@click="addQty(product)"
												>
													<i
														class="fa fa-plus-circle"
														aria-hidden="true"
													></i>
												</button>
											</span>
										</div>
										<div>
											<span class="mb-2 mr-2 mb-sm-0">
												<strong>{{ product.unit }}</strong>
											</span>
										</div>
										<div class="ml-auto">
											<!-- <button
											type="button"
											class="btn btn-success"
											@click="addToCart()"
										>
											Add to Cart
										</button> -->
										</div>
									</div>
								</div>
							</div>
							<div v-if="product.is_bundle == 1" class="row mt-2">
								<div class="col">
									<label>Included Products:</label>
									<ul class="list-group list-group-flush selected-products-scrollable">
										<li
											v-for="(item, index) in selected_products"
											:key="index"
											class="list-group-item"
											style="padding: 2px 10px 2px 10px"
										>
											<div class="d-flex">
												<div style="width: 20%">
													{{ item.qty }}/{{ item.unit }} &nbsp;
													&nbsp; &nbsp;
												</div>
												<div style="width: 30%">
													<img
														:src="item.image_link"
														style="
															width: 20px;
															height: 20px;
															object-fit: cover;
														"
													/>
													{{ item.name }}
												</div>
												<div
													v-if="ifNotGuest"
													style="width: 50%"
													class="text-right"
												>
													<button
														type="button"
														@click="sub(item, index)"
														class="btn btn-sm"
														:class="
															item.sub == 'sub'
																? 'btn-info'
																: 'btn-secondary'
														"
													>
														{{ subUnsub(item) }}
													</button>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<ProductsSubModal2 ref="ProductsSubModalRef2"></ProductsSubModal2>
	</div>
</template>


<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.product-modaol-dialog {
		max-width: 700px;
	}

	.product-modal-body {
		padding: 40px 20px;
	}

	.product-container {
		//   background-color: red;
		position: relative;
		padding: 0px;
	}

	.btn-close {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}

	.plusminus {
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}

	.product-image {
		object-fit: cover;
		width: 100%;
		height: 200px;
		border-radius: 8px 8px 8px 8px;
	}

	.p-image {
		padding-right: 20px;
		margin-right: 0px;
	}

	.p-content {
		padding-left: 0px;
		margin-left: 0px;

		@include mobile {
			padding: 10px 20px 10px 20px;
		}
	}

	.minmax-color {
		color: #007bff;
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

    .selected-products-scrollable{
        max-height: 250px;
        overflow-y: scroll;
        border-bottom: 1px solid lightgreen;
    }

</style>

<script>
	export default {
		data() {
			return {
				product: {},
				updated_product: {},
				update_prodct: {},
				guest: 1,
				customer_role: 0,
				category: {},
				sub_category: {},
				selected_products: [],
				orginal_selected_products: [],
			};
		},
		computed: {
			ifNotGuest() {
				return this.$parent.guest == 0;
			},
			// selected_products(){
			//     if(this.product.selected_products){
			//         return this.product.selected_products;
			//     } else {
			//         return [];
			//     }
			// }
		},
		methods: {
			subUnsub(data) {
				if (data.sub == "sub") {
					return "SUB";
				} else {
					return "UNSUB";
				}
			},
			updateProducts(item, index) {
				const new_selected_products = this.selected_products;
				this.selected_products = [];
				this.selected_products = new_selected_products;
				this.product.selected_products = this.selected_products;
				// this.selected_products[index] = item;
				// this.selected_products = this.selected_products;
				// this.product.name = "UPDATED";
				this.$parent.updateProductDetails(this.product);
			},
			showModal(data, guest, customer_role) {
				this.product = data;
				if (data.selected_products) {
					const newdata = JSON.stringify(data.selected_products);
					this.selected_products = JSON.parse(newdata);
					this.orginal_selected_products = data.atr_orginal_selected_products;
				}

				this.category = data.category;
				this.sub_category = data.sub_category;
				this.guest = guest;
				this.customer_role = customer_role;
				$("#productsModalEdit").modal("show");
			},
			sub(data, index) {
				console.log(data);
				if (data.sub == "sub") {
					this.$refs.ProductsSubModalRef2.data = data;
					this.$refs.ProductsSubModalRef2.index = index;
					this.$refs.ProductsSubModalRef2.openModal();
				}
				if (data.sub == "unsub") {
					this.selected_products[index] = this.orginal_selected_products[
						index
					];
					const new_selected_products = this.selected_products;
					this.selected_products = [];
					this.selected_products = new_selected_products;
					this.product.selected_products = this.selected_products;
					this.$parent.updateProductDetails(this.product);
				}
			},

			updateProductPrice(product) {
				if (this.customer_role == 2) {
					return this.displayNumberWithComma(product.member_price);
				} else if (this.customer_role == 3) {
					return this.displayNumberWithComma(product.wholesale_price);
				} else {
					return this.displayNumberWithComma(product.price);
				}
			},
			displayNumberWithComma(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
			updateToMax(data) {
				if (data.qty > data.maxorder) {
					data.qty = data.maxorder;
				}
			},
			onlyNumber($event) {
				//console.log($event.keyCode); //keyCodes value
				let keyCode = $event.keyCode ? $event.keyCode : $event.which;
				if (keyCode < 48 || keyCode > 57) {
					// 46 is dot
					$event.preventDefault();
				}
			},
			updateQty() {
				$("#updateQtyModal").modal("hide");

				var foundIndex = this.$parent.cart.findIndex(
					(cart) => cart.id == this.update_prodct.id
				);
				this.$parent.cart[foundIndex].qty = this.update_prodct.qty;
				localStorage.setItem("cart", JSON.stringify(this.$parent.cart));
			},

            subQty(item) {
                this.$parent.subQty(item);
            },
            addQty(item) {
                this.$parent.addQty(item);
            },
            updateRecurring(){
                this.product.recurring = !this.product.recurring;
				this.$parent.updateProductDetails(this.product);
            },


		},
	};
</script>
