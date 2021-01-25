<template>
	<div
		class="modal fade"
		id="enterOptionCIdModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="enterOptionCIdModal"
		aria-hidden="true"
		data-backdrop="static"
	>
		<div class="modal-dialog guest-payment-modaol-dialog" role="document">
			<div class="modal-content">
				<div class="modal-body guest-payment-modal-body">
					<div class="container product-container">
						<div class="row">
							<div class="col" style="padding: 0px !important">
								<h5>
									<i class="fas fa-sitemap"></i> Selecting Organization
								</h5>

								<div class="my-5 mx-5">
									<h6>Enter Your OptionC School ID</h6>
									<div class="row mb-2">
										<div class="col-12">
											<input
												v-model="optionc_id"
												class="form-control form-control-sm"
												type="text"
											/>
											<div v-if="error_message" class="text-danger">
												{{ error_message }}
											</div>
										</div>
										<div class="col-12">
											<div class="w-100 text-right mt-4">
												<button
													@click="proceed()"
													class="btn btn-sm btn-info"
												>
													See Products
												</button>
											</div>
										</div>
									</div>
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
	import cookies from "js-cookie";
	export default {
		props: ["guest", "user"],
		mounted() {
			console.log("mounted");
			$("#enterOptionCIdModal").modal("show");
		},
		created() {
			console.log("created");
		},
		data() {
			return {
				optionc_id: null,
				error_message: null,
			};
		},
		methods: {
			proceed() {
				this.error_message = null;
				LoadingOverlay();
				var data = {
					optionc_id: this.optionc_id,
				};
				axios
					.post(`/proceed/optioncid`, data)
					.then((res) => {
						this.$parent.org_id = res.data.id;
						this.$parent.org_name = res.data.org_name;
						this.$parent.getResults();
						var ff_org_id = cookies.get("ff-org-id");
						if (ff_org_id != res.data.id) {
							var cart = [];
							localStorage.setItem("cart", JSON.stringify(cart));
							localStorage.setItem("cart_badge", cart.length);
							this.$events.fire("updateCartBadge", "update cart");
						}
						cookies.remove("ff-org-id");
						cookies.remove("ff-org-name");
						cookies.remove("ff-org-address");
						const expiryTime = new Date(new Date().getTime() + 86400 * 1000);
						cookies.set("ff-org-id", res.data.id, {
							expires: expiryTime,
						});
						cookies.set("ff-org-name", res.data.org_name, {
							expires: expiryTime,
						});
						cookies.set("ff-org-address", res.data.atr_address, {
							expires: expiryTime,
						});

						console.log(res);
						LoadingOverlayHide();
						$("#enterOptionCIdModal").modal("hide");
					})
					.catch((err) => {
						if (err.response) {
							if (err.response.status == 422) {
								this.error_message = "Please enter your optionC school id";
							} else if (err.response.status == 404) {
								// console.log(err.response.status)
								this.error_message =
									"Sorry, your school is not yet registered";
							} else {
								alert("Something Went Wrong");
							}
						}
						console.error(err);
						LoadingOverlayHide();
					});
			},
		},
	};
</script>

<style>
	/* .fade-enter-active,
																		.fade-leave-active {
																			transition: opacity 0.5s;
																		}
																		.fade-enter,
																		.fade-leave-to {
																			opacity: 0;
																		}

																		.slide-fade-enter-active {
																			transition: all 0.3s ease;
																		}
																		.slide-fade-leave-active {
																			transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
																		}
																		.slide-fade-enter,
																		.slide-fade-leave-to {
																			transform: translateX(10px);
																			opacity: 0;
																		} */
</style>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.guest-payment-modaol-dialog {
		max-width: 550px;
	}
	.guest-payment-modal-body {
		padding: 10px 10px;
	}
	// .product-container {
	//   //   background-color: red;
	//   position: relative;
	//   padding: 0px;
	// }
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
