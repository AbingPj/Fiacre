<template>
	<div
		class="modal fade"
		id="weeksModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="weeksModal"
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
									<i class="fas fa-sitemap"></i> Change Pick Up Status
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
									<h6>Select Actual Pick Up Date</h6>
									<VueTwoDatePicker
										id="1"
										v-model="data.date"
										format="YYYY-MM-DD"
										type="date"
										placeholder="Select date"
										valueType="format"
										:default-value="toDay()"
										:disabled-date="disabledDays"
                                        :style="'width:100%'"
									></VueTwoDatePicker>
									<br />
									<br />
									<h6>Pick up by</h6>
									<input
										v-model="data.pickupby"
										class="form-control"
										type="text"
                                        placeholder="ex. John Doe"
									/>
									<br />
									<br />
									<button
										class="btn btn-sm btn-info float-right"
										@click="Save()"
									>
										Change Pick Up Status
									</button>
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
				data: {
					id: null,
					date: null,
                    pickupby: null,
                    status: 1,
				},
			};
		},
		methods: {
			showModal() {
				$("#weeksModal").modal("show");
			},
			Save() {
                LoadingOverlay();
				axios.post('/admin/org/ordersweeks/change',this.data)
                .then(res => {
                    $("#weeksModal").modal("hide");
                    // location.reload();
                     document.location.reload(true)
                })
                .catch(err => {
                    console.error(err);
                    LoadingOverlayHide();
                    alert("Something went wrong");
                })
			},
			disabledDays(date) {
				var today = this.subDays(7);
				today.setHours(0, 0, 0, 0);
				return date < today;
            },
            toDay() {
				var result = new Date();
				return result;
            },
            subDays(days) {
				var result = new Date();
				// console.log({result});
				result.setDate(result.getDate() - days);
				return result;
			},
			addDays(days) {
				var result = new Date();
				// console.log({result});
				result.setDate(result.getDate() + days);
				return result;
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.guest-payment-modaol-dialog {
		max-width: 450px;
	}
	.guest-payment-modal-body {
		padding: 20px 20px;
	}
	// .product-container {
	//   //   background-color: red;
	//   position: relative;
	//   padding: 0px;
	// }
    .mx-input-wrapper{
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
