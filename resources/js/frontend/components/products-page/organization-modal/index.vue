<template>
	<div
		class="modal fade"
		id="guestSelectingOrganizationModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="guestSelectingOrganizationModal"
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
									<i class="far fa-credit-card"></i> Selecting Partner
									<!-- <button
										type="button"
										class="btn-close float-right"
										data-dismiss="modal"
										aria-label="Close"
									>
										<i
											class="fa fa-times-circle"
											aria-hidden="true"
										></i>
									</button> -->
								</h5>
								<!-- <transition name="fade"> -->
									<address-step v-if="step == 1"></address-step>
								<!-- </transition> -->
								<!-- <transition name="fade"> -->
									<organizations-step
                                        ref="orgref"
                                        :address="Address"
                                        :organizations="NearestOraganization"
										v-if="step == 2"
									></organizations-step>
								<!-- </transition> -->
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
	import AddressStep from "./address.vue";
	import OrganizationStep from "./organization.vue";
	export default {
		components: {
			"address-step":AddressStep,
			"organizations-step":OrganizationStep,
		},
		data() {
			return {
                step: 1,
                Address:"",
                street: "",
				city: "",
				state: "",
				zip: "",
                NearestOraganization: [],
			};
		},
		methods: {
            test() {
                console.log(this.$refs.orgref);
            },
			next() {
                this.step++;
                // console.log(this.$refs.orgref);
                // this.$refs.orgref.organizations = this.NearestOraganization;
			},
			prev() {
				this.step--;
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
		max-width: 700px;
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
