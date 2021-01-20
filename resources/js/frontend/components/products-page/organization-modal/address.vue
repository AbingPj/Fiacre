<template>
	<div class="p-3">
		<div class="my-2">
			<h6>Enter Your Address</h6>
			<div class="row mb-2">
				<div class="col-12">
					<input
						v-model="street"
						class="form-control form-control-sm"
						type="text"
						placeholder="Street Address"
					/>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-4">
					<v-select
						v-model="city"
						@search="fetchOptions"
						:options="cities"
						:multiple="false"
						:disabled="false"
						:clearable="true"
						:searchable="true"
						:filterable="true"
						:taggable="true"
						:no-drop="false"
						:push-tags="true"
						:select-on-tab="true"
						placeholder="Select Town/County/City"
					></v-select>
				</div>
				<div class="col-4">
					<region-select
						v-model="state"
						country="United States"
						className="form-control form-control-sm"
						:countryName="true"
						:regionName="true"
						:region="state"
						placeholder="Select State"
					/>
				</div>
				<div class="col-4">
					<input
						v-model="zip"
						class="form-control form-control-sm"
						type="text"
						placeholder="Zip Code"
					/>
				</div>
			</div>
		</div>
		<div class="my-4 text-right">
			<button class="btn btn-info btn-sm" @click="find()">
				Next - Find Nearest Organization
			</button>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				street: "",
				city: "",
				state: "",
				zip: "",
				cities: [],
				googleAPIKEY: process.env.MIX_GOOGLE_API_KEY,
			};
		},
		mounted() {
			this.street = this.$parent.street;
			this.city = this.$parent.city;
			this.state = this.$parent.state;
			this.zip = this.$parent.zip;
		},
		methods: {
			find() {
				LoadingOverlay();

				var address =
					this.street +
					", " +
					this.city +
					", " +
					this.state +
					", " +
					this.zip;
				this.$parent.Address = address;
				this.getLatLong(address);
				// setTimeout(() => {
				// 	LoadingOverlayHide();
				// 	this.$parent.next();
				// }, 2000);

				this.$parent.street = this.street;
				this.$parent.city = this.city;
				this.$parent.state = this.state;
				this.$parent.zip = this.zip;
			},

			getLatLong(address) {
				let self = this;

				let param = {
					address: address,
					key: this.googleAPIKEY,
				};

				$.get(
					"https://maps.googleapis.com/maps/api/geocode/json",
					param,
					function (res) {
						if (res.status == "OK") {
							let lat = res.results[0].geometry.location.lat;
							let lng = res.results[0].geometry.location.lng;
							self.getZones(lat, lng);
						} else if (res.status == "ZERO_RESULTS") {
							LoadingOverlayHide();
							alert("Address cant find latitude and longitude");
							// self.$parent.test();
						}
					}
				).fail(function () {
					LoadingOverlayHide();
					alert("Address cant find latitude and longitude");
				});
			},

			getZones(lat, lng) {
				let param = {
					lat: lat,
					lng: lng,
				};
				axios({
					method: "get",
					url: "/getNearesOraganization",
					params: param,
				})
					.then((res) => {
						// console.log(res.data);
						LoadingOverlayHide();
						this.$parent.NearestOraganization = res.data;
						this.$parent.next();
					})
					.catch((err) => {
						console.error(err);
						if (err.response) {
							if (err.response.status == 422) {
								LoadingOverlayHide();
								alert("Address has no nearby organization");
							} else {
								LoadingOverlayHide();
								alert("Something went wrong");
							}
						} else {
							LoadingOverlayHide();
							alert("Something went wrong");
						}
					});
			},

			fetchOptions(search, loading) {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}

				this.timer = setTimeout(() => {
					this.getCities(search);
				}, 300);
			},

			async getCities(searching = null) {
				let param;
				param = {
					search: searching,
				};
				await axios({
					method: "get",
					url: "/data/searchcities",
					params: param,
				}).then((res) => {
					this.cities = res.data;
				});
			},
		},
	};
</script>
