<template>
	<div class="d-flex flex-column min-vh-50">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-cogs"></i> Organization Settings

				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<div>
					<label for="">
						<div class="form-group">
                            <h6>
									<button
										v-if="edit == false"
										type="button"
										class="btn btn-sm btn-success float-right"
										@click="edit = true"
									>
										EDIT
									</button>
									<button
										type="button"
										v-if="edit == true"
										class="btn btn-sm btn-danger float-right"
										@click="edit = false"
									>
										Cancel
									</button>
								</h6>
                            <br />
                            <br />

							<label for="name">Select Pick-up Day Schedule</label>
							<br />
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="sunday"
									name="day"
									class="custom-control-input"
									value="0"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="sunday"
									>Sunday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="monday"
									name="day"
									class="custom-control-input"
									value="1"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="monday"
									>Monday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="tuesday"
									name="day"
									class="custom-control-input"
									value="2"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="tuesday"
									>Tuesday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="wednesday"
									name="day"
									class="custom-control-input"
									value="3"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="wednesday"
									>Wednesday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="thurdsay"
									name="day"
									class="custom-control-input"
									value="4"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="thurdsay"
									>Thursday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="friday"
									name="day"
									class="custom-control-input"
									value="5"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="friday"
									>Friday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
									id="saturday"
									name="day"
									class="custom-control-input"
									value="6"
									v-model="day"
                                    :disabled="edit == false"
								/>
								<label class="custom-control-label" for="saturday"
									>Saturday</label
								>
							</div>
						</div>
					</label>
					<br />
					<br />
					<button v-if="edit" class="btn btn-success" @click="saveChanges()">
						save changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["propsorg", "pros_org_settings"],
		data() {
			return {
                edit:false,
				orders: [],
				org: {},
				day: 0,
				org_settings: {},
			};
		},
		created() {
			this.org = this.propsorg;
			this.org_settings = this.pros_org_settings;
			this.day = this.org_settings.selected_day_of_pickup;
		},
		methods: {
			// getOrders() {
			// 	LoadingOverlay();
			// 	axios
			// 		.get(`/admin/org/getOrganizationFundraise`)
			// 		.then((res) => {
			// 			LoadingOverlayHide();
			// 			this.orders = res.data;
			// 			this.prepareDataTable();
			// 		})
			// 		.catch((err) => {
			// 			console.error(err);
			// 			LoadingOverlayHide();
			// 			alert("Something went wrong");
			// 		});
			// },
            saveChanges(){
                LoadingOverlay();
                let data = {
                    org_id:this.org.id,
                    day:this.day,
                }
                axios.post(`/admin/org/UpdateSettings`,data)
                .then(res => {
                    LoadingOverlayHide();
                    alert(res.data);
                    this.edit = false;
                    console.log(res)
                })
                .catch(err => {
                    LoadingOverlayHide();
                    alert("Something went woring"+err);
                    console.error(err);
                })
            }
		},
	};
</script>


<style lang="scss" scoped>
	.btn-success {
		color: #fff !important;
		background-color: #339f25 !important;
		border-color: #339f25 !important;
	}
</style>
