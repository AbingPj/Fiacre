<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-12">
				<h2 class="card-title mb-0">
					<i class="fas fa-sitemap mr-3"></i> {{ org.org_name }}
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-md-7">
				<h4>
					OptionC ID: <b>{{ propsorg.org_optionc_id }}</b>
				</h4>
				<h5>email: {{ propsorg.org_email }}</h5>
				<h5>type: {{ propsorg.atr_type_label }}</h5>
				<h6>Contact Person: {{ propsorg.atr_contact_person }}</h6>
				<h6>Address: {{ propsorg.atr_address }}</h6>
				<h6>Diocese: {{ propsorg.org_diocese }}</h6>
				<h6>Website: {{ propsorg.org_website }}</h6>

				<div class="mt-5 mb-1">
					<h4>Address</h4>
				</div>
				<div class="form-group">
					<label for="name">Street</label>
					<input
						v-model="org.org_street"
						id="type"
						name="type"
						class="form-control rounded-0"
						type="text"
						readonly
					/>
				</div>
				<div class="form-group">
					<label for="name">Town/County/City</label>
					<v-select
						@search="fetchOptions"
						v-model="org.org_cityprov"
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
					></v-select>
				</div>
				<div class="form-group">
					<label for="name">State</label>
					<!-- <v-select
						label="name"
						v-model="org.org_state"
						:reduce="(state) => state.id"
						:options="states"
						:clearable="false"
					></v-select> -->
					<!-- <region-select
						v-model="org.org_state"
						country="United States"
						className="form-control rounded-0"
						:countryName="true"
						:regionName="true"
						:region="org.org_state"
						placeholder="Select State"
					/> -->
					<v-select
						label="name"
						v-model="org.org_state"
                        :reduce="(state) => state.iso2"
						:options="states"
						:multiple="false"
						:disabled="false"
						:clearable="true"
						:searchable="true"
						:filterable="true"
						:taggable="true"
						:no-drop="false"
						:push-tags="true"
						:select-on-tab="true"
					></v-select>
				</div>
				<div class="form-group">
					<label for="name">Zipcode</label>
					<input
						v-model="org.org_zipcode"
						class="form-control rounded-0"
						type="text"
					/>
				</div>
				<!-- <div class="form-group">
					<label for="name"
						>Map Location <span class="text-danger">*</span></label
					>
					<div class="row">
						<div class="col-4">
							<input
								v-model="org.org_lat"
								class="form-control rounded-0"
								placeholder="Latitude"
								type="text"
								readonly
							/>
						</div>
						<div class="col-4">
							<input
								v-model="org.org_lng"
								class="form-control rounded-0"
								placeholder="Longitude"
								type="text"
								readonly
							/>
						</div>
						<div class="col-4">
							<button class="btn btn-info" @click="openMap()">
								<i class="fas fa-map-marker-alt mr-2"></i> Set Map
								Location
							</button>
						</div>
					</div>
				</div>
				<div class="mt-3">
					<OrgMap ref="refOrgMap"></OrgMap>
				</div> -->
				<div class="mt-5 mb-1">
					<h4>Contact Numbers</h4>
				</div>
				<div class="form-group">
					<label for="name">Landline</label>
					<vue-phone-number-input
						@update="onUpdate"
						:default-country-code="defaultCountry"
						no-country-selector
						:error="results.isValid == false"
						v-model="org.org_contact_land"
						:class="'rounded-0'"
						:translations="{
							phoneNumberLabel: 'Landline Number',
						}"
					>
					</vue-phone-number-input>

					<label
						class="text-light"
						:class="results.isValid == false ? 'd-none' : 'd-block'"
						>.</label
					>
					<label
						class="text-danger"
						:class="results.isValid != false ? 'd-none' : 'd-block'"
						>Contact Number is not valid in US.</label
					>
				</div>
				<div class="form-group">
					<label for="name">Mobile</label>
					<vue-phone-number-input
						@update="onUpdate2"
						:default-country-code="defaultCountry"
						no-country-selector
						:error="results2.isValid == false"
						v-model="org.org_contact_mobile"
					>
					</vue-phone-number-input>
					<label
						class="text-light"
						:class="results2.isValid == false ? 'd-none' : 'd-block'"
						>.</label
					>
					<label
						class="text-danger"
						:class="results2.isValid != false ? 'd-none' : 'd-block'"
						>Contact Number is not valid in US.</label
					>
				</div>
			</div>
		</div>
        <div class="row">
			<div class="col-md-7">
				<hr />
				<button
					class="mr-2 btn btn-info rounded-0"
					@click="updateOrganization()"
				>
					<i class="fas fa-save mr-3"></i> Save Changes
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import OrgMap from "./map3.vue";
	import Errors from "../../errorClass";
	export default {
		components: {
			OrgMap: OrgMap,
		},
		props: ["propsorg"],
		data() {
			return {
				email: "",
				org: {},
				image_file: null,
				states: [],
				cities: [],
				LogoPreview: null,
				defaultCountry: "US",
				results: {},
				results2: {},
				errors: new Errors(),
			};
		},

		created() {
			this.LogoPreview = this.propsorg.atr_logo_link;
			this.org = this.propsorg;
			this.getStates();
		},
		mounted() {
			setTimeout(() => {
				var marker = {
					lat: Number(this.propsorg.org_lat),
					lng: Number(this.propsorg.org_lng),
				};
				this.$refs.refOrgMap.MarkerLocation = marker;
				this.$refs.refOrgMap.center = marker;
			}, 1000);
		},

		methods: {
			onlyNumber($event) {
				//console.log($event.keyCode); //keyCodes value
				let keyCode = $event.keyCode ? $event.keyCode : $event.which;
				if (keyCode < 48 || keyCode > 57) {
					// 46 is dot
					$event.preventDefault();
				}
			},
			openMap() {
				var address =
					this.org.org_street +
					", " +
					this.org.org_cityprov +
					", " +
					this.org.org_state +
					", " +
					this.org.org_zipcode;
				this.$refs.refOrgMap.geocoding(address);
			},
			onUpdate(payload) {
				this.results = payload;
			},
			onUpdate2(payload) {
				this.results2 = payload;
			},
			onFileChange(e) {
				//   console.log(e);
				const file = e.target.files[0];
				this.image_file = file;
				this.LogoPreview = URL.createObjectURL(file);
			},
			getStates() {
				axios
					.get("/states")
					.then((res) => {
						this.states = res.data;
					})
					.catch((err) => {
						console.error(err);
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

			updateOrganization() {
                LoadingOverlay();
				var formBody = new FormData();
				// for (var key in this.org) {
				// 	if (this.org[key] !== null) {
				// 		formBody.append(key, this.org[key]);
				// 	}
				// }
				// if (this.image_file) {
				// 	formBody.append("image_file", this.image_file);
                // }
                formBody.append("org_street", this.org.org_street);
                formBody.append("org_cityprov", this.org.org_cityprov);
                formBody.append("org_state", this.org.org_state);
                formBody.append("org_zipcode", this.org.org_zipcode);
                formBody.append("org_contact_land", this.org.org_contact_land);
                formBody.append("org_contact_mobile", this.org.org_contact_mobile);

				axios
					.post(`/admin/org/api/updateOrganization`, formBody, {
						headers: { "Content-Type": "multipart/form-data" },
					})
					.then((res) => {
						window.location.href = "/admin/org/profile";
					})
					.catch((err) => {
                        LoadingOverlayHider();
						console.error(err);
						if (err.response) {
							this.errors.record(err.response.data.errors);
							this.showErrorMessage(this.errors.getArrayOfMessages());
							window.scrollTo(0, 0);
						}
					});
			},
			showErrorMessage(errors) {
				//   console.log(shit);
				this.$events.fire("showErrorMessage", errors);
			},
		},
		computed: {
			loadlist() {
				var pageList = [];
				var begin = (this.currentPage - 1) * this.perPage;
				var end = begin + this.perPage;
				var allorders = this.searchedCustomers;
				var pageList = allorders.slice(begin, end);
				return pageList;
			},

			rows() {
				return this.searchedCustomers.length;
			},
		},
		// mounted() {
		//     alert("PRODUCTS COMPONENT MOUNTED");
		// },
	};
</script>

<style>
	.vs__dropdown-toggle {
		border-radius: 0 !important;
	}
	.vs__search {
		line-height: 1.5;
	}
</style>

<style lang="scss" scoped>
	.form-group {
		margin-bottom: 1rem;
	}

	.input-group-text {
		background: #d9dfe2;
	}

	.text-success {
		color: #339f25 !important;
	}

	.btn-success-1 {
		color: #fff !important;
		background-color: #339f25 !important;
		border-color: #339f25 !important;
	}

	.btn-upload {
		//   line-height: 5;
		margin-right: 10px;

		i {
			font-size: 50px;
		}
	}

	.btn-success-2 {
		color: gray !important;
		background-color: rgb(51, 159, 37, 0.3) !important;
		// 51, 159, 37

		border-color: rgb(51, 159, 37, 0.5) !important;
	}

	#preview {
		img {
			width: 110px;
			height: 90px;
			object-fit: cover;
		}
	}
</style>
