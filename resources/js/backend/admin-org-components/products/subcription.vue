
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
							<label for="name">Select day of subcription</label>
							<br />
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
								/>
								<label
									class="custom-control-label"
									for="monday"
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
								/>
								<label
									class="custom-control-label"
									for="tuesday"
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
								/>
								<label
									class="custom-control-label"
									for="wednesday"
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
								/>
								<label
									class="custom-control-label"
									for="thurdsay"
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
								/>
								<label
									class="custom-control-label"
									for="friday"
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
								/>
								<label
									class="custom-control-label"
									for="saturday"
									>Saturday</label
								>
							</div>
							<div
								class="custom-control custom-radio custom-control-inline"
							>
								<input
									type="radio"
                                     id="sunday"
                                     name="day"
									class="custom-control-input"
									value="7"
									v-model="day"
								/>
								<label
									class="custom-control-label"
									for="sunday"
									>Sunday</label
								>
							</div>
						</div>
					</label>
					<br />
					<br />
					<label for="">Start Date</label>
					<br />
					<VueTwoDatePicker
						v-model="start"
						format="YYYY-MM-DD hh:mm:ss"
						type="datetime"
						placeholder="Select date"
						valueType="format"
                        :default-value="addDays(1)"
						:disabled-date="disabledBeforeTodayAndAfterTwoWeek"
					></VueTwoDatePicker>
					<br />
					<br />
					<label for="">End Date</label>
					<br />
					<VueTwoDatePicker
						v-model="end"
						format="YYYY-MM-DD hh:mm:ss"
						type="datetime"
						placeholder="Select date"
						valueType="format"
						:disabled-date="disabledBeforeTodayAndAfterTwoWeek"
					></VueTwoDatePicker>
					<br />
                    <br />
                    <label for="">Number of Subscription Limit</label>
					<br />
                    <input v-model="limit" class="form-control" style="width: 200px !important;" type="number">
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
	export default {
		components: { VueTwoDatePicker: DatePicker },
		props: ["prod", "propday", "propstart", "propend", "proplimit"],
		created() {
			this.start = this.propstart;
			this.end = this.propend;
			this.day = this.propday;
			this.limit = this.proplimit;
		},
		data() {
			return {
				start: null,
				end: null,
				day: null,
				limit: null,
			};
		},
		methods: {
			saveChanges() {
				var data = {
					start: this.start,
					end: this.end,
					product_id: this.prod.id,
                    day: this.day,
                    limit: this.limit
				};
				axios
					.post("/admin/org/products/saveSubscription", data)
					.then((res) => {
						window.location.href = `/admin/org/products`;
						// alert("Success");
					})
					.catch((err) => {
						console.error(err);
						alert(err);
					});
			},
			disabledBeforeTodayAndAfterTwoWeek(date) {
				const today = this.addDays(1);
				today.setHours(0, 0, 0, 0);

				// return (
				// 	date < today ||
				// 	date > new Date(today.getTime() + 13 * 24 * 3600 * 1000)
				// );
                return (date < today);
			},
			addDays(days) {
				var result = new Date();
				result.setDate(result.getDate() + days);
				return result;
			},
		},
	};
</script>
