
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
					<label for="">Start Date</label>
					<VueTwoDatePicker
						v-model="start"
						format="YYYY-MM-DD hh:mm:ss"
						type="datetime"
						placeholder="Select date"
						valueType="format"
					></VueTwoDatePicker>
					<br />
					<label for="">End Date</label>
					<VueTwoDatePicker
						v-model="end"
						format="YYYY-MM-DD hh:mm:ss"
						type="datetime"
						placeholder="Select date"
						valueType="format"
					></VueTwoDatePicker>
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
		props: ["prod", "propstart", "propend"],
		created() {
			this.start = this.propstart;
			this.end = this.propend;
		},
		data() {
			return {
				start: null,
				end: null,
			};
		},
		methods: {
			saveChanges() {
				var data = {
					start: this.start,
					end: this.end,
					product_id: this.prod.id,
				};
				axios
					.post("/admin/org/products/saveSubscription", data)
					.then((res) => {
						// window.location.href = `/admin/org/products`;
						alert("Success");
					})
					.catch((err) => {
						console.error(err);
						alert(err);
					});
			},
		},
	};
</script>
