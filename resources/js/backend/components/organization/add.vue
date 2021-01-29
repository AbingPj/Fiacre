<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-sitemap mr-3"></i> Add New Organization
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-md-7">
				<div class="form-group">
					<label for="name"
						>Organization Name (Parish/School)
						<span class="text-danger font-weight-bold">*</span>
					</label>
					<input
						v-model="org.name"
						id="name"
						name="name"
						class="form-control rounded-0"
						type="text"
						placeholder=""
					/>
				</div>
				<div class="form-group">
					<label for="name"
						>Email (must be unique)
						<span class="text-danger">*</span></label
					>
					<input
						v-model="org.email"
						id="email"
						name="email"
						class="form-control rounded-0"
						type="email"
						placeholder="example@gmail.com"
					/>
				</div>
				<div class="form-group">
					<label for="name">OptionC ID</label>
					<input
						v-model="org.optionc_id"
						id="optionc_id"
						name="optionc_id"
						class="form-control rounded-0"
						type="text"
						@keypress="onlyNumber"
					/>
				</div>
				<div class="form-group">
					<label for="name">Organization Type</label>
					<br />
					<div class="custom-control custom-radio custom-control-inline">
						<input
							type="radio"
							id="customRadioInline1"
							name="customRadioInline1"
							class="custom-control-input"
							value="1"
							v-model="org.type"
						/>
						<label class="custom-control-label" for="customRadioInline1"
							>Parish/Church</label
						>
					</div>
					<div class="custom-control custom-radio custom-control-inline">
						<input
							type="radio"
							id="customRadioInline2"
							name="customRadioInline1"
							class="custom-control-input"
							value="2"
							v-model="org.type"
						/>
						<label class="custom-control-label" for="customRadioInline2"
							>School</label
						>
					</div>
				</div>
				<div class="mt-5 mb-1">
					<h4>Address</h4>
				</div>
				<div class="form-group">
					<label for="name"
						>Street <span class="text-danger">*</span></label
					>
					<input
						v-model="org.street"
						id="type"
						name="type"
						class="form-control rounded-0"
						type="text"
					/>
				</div>
				<div class="form-group">
					<label for="name"
						>Town/County/City <span class="text-danger">*</span></label
					>
					<v-select
						@search="fetchOptions"
						v-model="org.cityprov"
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
					<label for="name"
						>State <span class="text-danger">*</span></label
					>
					<!-- <v-select
						label="name"
						v-model="org.state"
						:reduce="(state) => state.id"
						:options="states"
						:clearable="false"
					></v-select> -->
					<!-- <region-select
						v-model="org.state"
						country="United States"
						className="form-control rounded-0"
						:countryName="true"
						:regionName="true"
						:region="org.state"
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
					<label for="name"
						>Zipcode <span class="text-danger">*</span></label
					>
					<input
						v-model="org.zipcode"
						class="form-control rounded-0"
						type="text"
					/>
				</div>
				<div class="form-group">
					<label for="name"
						>Map Location <span class="text-danger">*</span></label
					>
					<div class="row">
						<div class="col-4">
							<input
								v-model="org.lat"
								class="form-control rounded-0"
								placeholder="Latitude"
								type="text"
								readonly
							/>
						</div>
						<div class="col-4">
							<input
								v-model="org.lng"
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
				</div>

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
						v-model="org.contact_land"
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
						v-model="org.contact_mobile"
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

				<div class="mt-5 mb-1">
					<h4>Contact Person</h4>
				</div>

				<div class="form-group">
					<label for="name">Title</label>
					<input
						v-model="org.contact_title"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="form-group">
					<label for="name">First Name</label>
					<input
						v-model="org.contact_fname"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="form-group">
					<label for="name">Last Name</label>
					<input
						v-model="org.contact_lname"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="form-group">
					<label for="name">Suffix</label>
					<input
						v-model="org.contact_suffix"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="mt-5 mb-1">
					<h4>Others</h4>
				</div>

				<div class="form-group">
					<label for="name">Diocese</label>
					<input
						v-model="org.diocese"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="form-group">
					<label for="name">Website</label>
					<input
						v-model="org.website"
						class="form-control rounded-0"
						type="text"
					/>
				</div>

				<div class="form-group">
					<label for="exampleFormControlFile1">Logo</label>
					<input
						type="file"
						class="form-control-file"
						id="exampleFormControlFile1"
						accept="image/png, image/jpeg, image/jpg"
						@change="onFileChange"
					/>
					<img
						v-if="LogoPreview"
						:src="LogoPreview"
						alt=""
						style="width: 150px; height: 110px"
						class="mt-1 mb-3"
					/>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<hr />
				<button
					class="mr-2 btn btn-success-1 rounded-0"
					@click="addOrganization()"
				>
					<i class="fas fa-save mr-3"></i> Save
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	//   const OrgMap = () =>
	//   import(
	//     /* webpackChunkName: "js/b/OrgMap" */ "./map.vue"
	//   );

	import OrgMap from "./map2.vue";
	import Errors from "../../errorClass";

	export default {
		components: {
			OrgMap: OrgMap,
		},
		data() {
			return {
				org: {
					name: "",
					email: "",
					optionc_id: "",
					type: "1",
					lat: "",
					lng: "",
					street: "",
					cityprov: "",
					state: "",
					zipcode: "",
					contact_land: "",
					contact_mobile: "",
					contact_title: "",
					contact_fname: "",
					contact_lname: "",
					contact_suffix: "",
					diocese: "",
					website: "",
					logo: null,
				},
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
			this.getStates();
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
					this.org.street +
					", " +
					this.org.cityprov +
					", " +
					this.org.state +
					", " +
					this.org.zipcode;
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
				this.org.logo = file;
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

			addOrganization() {
				var formBody = new FormData();
				for (var key in this.org) {
                    console.log(key);
					if (key == "logo") {
                        if(this.org[key] !=  null){
                            formBody.append(key, this.org[key]);
                        }
					} else {
						formBody.append(key, this.org[key]);
					}
				}
				axios
					.post(`/admin/api/addOrganization`, formBody)
					.then((res) => {
						window.location.href = "/admin/organization";
					})
					.catch((err) => {
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
