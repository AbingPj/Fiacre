
<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-boxes"></i> {{ prod.name }}
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
							<label for="name">Select day of subscription</label>
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
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
									@click="radioClick()"
									v-model="day"
								/>
								<label class="custom-control-label" for="saturday"
									>Saturday</label
								>
							</div>
						</div>
					</label>
					<br />
					<br />
					<label for="">Start Date</label>
					<br />
					<VueTwoDatePicker
						id="1"
						v-model="start"
						format="YYYY-MM-DD"
						type="date"
						placeholder="Select date"
						valueType="format"
						:default-value="addDays(1)"
						@click.native="setEndToNull()"
						:disabled-date="startDisabledDays"
					></VueTwoDatePicker>
					<br />
					<br />
					<label for="">End Date</label>
					<br />
					<VueTwoDatePicker2
						id="2"
						v-model="end"
						format="YYYY-MM-DD"
						type="date"
						placeholder="Select date"
						valueType="format"
						:default-value="addDays7daysFromStart()"
						:disabled-date="endDisabledDays"
					></VueTwoDatePicker2>
					<br />
					<br />
					<label for="">Number of Subscription Limit</label>
					<br />
					<input
						v-model="limit"
						class="form-control"
						style="width: 200px !important"
						type="number"
					/>
					<br />
					<br />
					<button class="btn btn-success" @click="saveChanges()">
						save changes
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import DatePicker from "vue2-datepicker";
	import "vue2-datepicker/index.css";
	import Errors from "../../errorClass";
	export default {
		components: { VueTwoDatePicker: DatePicker, VueTwoDatePicker2: DatePicker },
		props: ["prod", "propday", "propstart", "propend", "proplimit"],
		created() {
			this.start = this.propstart;
			this.end = this.propend;
			if (this.propday) {
				this.day = this.propday;
			}
			this.limit = this.proplimit;
		},
		data() {
			return {
				start: null,
				end: null,
				day: 1,
				limit: null,
				startDayConfig: null,
				errors: new Errors(),
			};
		},

		methods: {
			radioClick() {
				this.start = null;
				this.end = null;
			},
			saveChanges() {
				var data = {
					start: this.start,
					end: this.end,
					product_id: this.prod.id,
					day: this.day,
					limit: this.limit,
				};
				axios
					.post("/admin/org/products/saveSubscription", data)
					.then((res) => {
						window.location.href = `/admin/org/products`;
						// alert("Success");
					})
					.catch((err) => {
						console.error(err);

						if (err.response) {
							if (err.response.status == 422) {
								this.errors.record(err.response.data.errors);
								this.showErrorMessage(this.errors.getArrayOfMessages());
								window.scrollTo(0, 0);
							} else {
                                this.showErrorMessage(["Something Went Wrong."]);
								window.scrollTo(0, 0);
                            }
						}else{
                            this.showErrorMessage(["Something Went Wrong."]);
							window.scrollTo(0, 0);
                        }
					});
			},
			showErrorMessage(errors) {
				//   console.log(shit);
				this.$events.fire("showErrorMessage", errors);
			},
			addDays(days) {
				var result = new Date();
				// console.log({result});
				result.setDate(result.getDate() + days);
				return result;
			},
			setEndToNull(data) {
				// console.log(data);
				// console.log("change");
				this.end = null;
			},
			addDays7daysFromStart() {
				var result = new Date(this.start);
				// console.log({ result });
				result.setDate(result.getDate() + 7);
				return result;
			},
			startDisabledDays(date) {
				const today = this.addDays(1);
				today.setHours(0, 0, 0, 0);
				const day = new Date(date).getDay();
				if (this.day == "1") {
					return (
						date < today ||
						day === 0 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "2") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "3") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "4") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "5") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 6
					);
				} else if (this.day == "6") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5
					);
				} else {
					return (
						date < today ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				}
			},
			endDisabledDays(date) {
				const today = this.addDays7daysFromStart();
				today.setHours(0, 0, 0, 0);
				const day = new Date(date).getDay();
				if (this.day == "1") {
					return (
						date < today ||
						day === 0 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "2") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "3") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "4") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 5 ||
						day === 6
					);
				} else if (this.day == "5") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 6
					);
				} else if (this.day == "6") {
					return (
						date < today ||
						day === 0 ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5
					);
				} else {
					return (
						date < today ||
						day === 1 ||
						day === 2 ||
						day === 3 ||
						day === 4 ||
						day === 5 ||
						day === 6
					);
				}
			},
		},
	};
</script>
