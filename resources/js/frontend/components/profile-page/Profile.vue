<template>
	<div>
		<div class="flex-grow-1">
			<b-container class="py-5">
				<b-row>
					<b-col md="8">
						<div class="d-flex mb-3">
							<div class="w-50">
								<h3>
									<b>PROFILE</b>
								</h3>
							</div>
						</div>
						<b-row>
							<b-col md="3">
								<div
									:class="edit == true ? 'border border-info p-2' : ''"
								>
									<img :src="profileImage" class="w-100" />
									<md-field>
										<label>Select image</label>
										<md-file
											@change="onFileChange"
											name="image_file"
											:disabled="!edit == true"
										/>
									</md-field>
								</div>
							</b-col>
							<b-col>
								<div
									:class="edit == true ? 'border border-info p-2' : ''"
								>
									<h4 class="font-weight-bold">
										User Information
										<button
											type="button"
											:class="edit == true ? 'd-none' : ''"
											class="btn btn-success float-right"
											@click="clickEdit()"
										>
											EDIT
										</button>

										<button
											type="button"
											:class="edit == false ? 'd-none' : ''"
											class="btn btn-danger float-right"
											@click="edit = false"
										>
											Cancel
										</button>
									</h4>

									<md-field>
										<label>Email</label>
										<md-input
											v-model="user.email"
											disabled
										></md-input>
									</md-field>

									<b-row>
										<b-col md="2">
											<md-field>
												<label>Title</label>
												<md-select
													v-model="user.title"
													name="title"
												>
													<md-option value="Mr.">Mr.</md-option>
													<md-option value="Ms.">Ms.</md-option>
													<md-option value="Mrs.">Mrs.</md-option>
												</md-select>
											</md-field>
										</b-col>
										<b-col md="5">
											<md-field>
												<label>Firt name</label>
												<md-input
													name="first_name"
													v-model="user.first_name"
													required
													:disabled="!edit == true"
												></md-input>
											</md-field>
										</b-col>
										<b-col md="5">
											<md-field>
												<label>Last name</label>
												<md-input
													name="last_name"
													v-model="user.last_name"
													required
													:disabled="!edit == true"
												></md-input>
											</md-field>
										</b-col>
									</b-row>
									<md-field>
										<label>Street Address</label>
										<md-input
											name="street_address"
											v-model="user.street_address"
											required
											:disabled="!edit == true"
										></md-input>
									</md-field>
									<b-row>
										<b-col md="4">
											<md-autocomplete
												md-input-name="city"
												v-model="user.city"
												:md-options="cities2"
												@md-changed="getCitiesForAutocomplete"
												@md-opened="getCitiesForAutocomplete"
												:disabled="!edit == true"
											>
												<label>Town/County/City</label>

												<template
													slot="md-autocomplete-item"
													slot-scope="{ item }"
													>{{ item }}</template
												>
											</md-autocomplete>
										</b-col>
										<b-col md="4">
											<md-field>
												<label for="font">State</label>
												<md-select v-model="user.state" md-dense>
													<md-option
														v-for="(item, index) in states"
														:key="index"
														:value="item.id"
														:disabled="!edit == true"
														>{{ item.name }}</md-option
													>
												</md-select>
												<input
													v-model="user.state"
													name="state"
													type="hidden"
												/>
											</md-field>
										</b-col>
										<b-col md="4">
											<md-field>
												<label>Zip</label>
												<md-input
													v-model="user.zipcode"
													name="zipcode"
													required
													:disabled="!edit == true"
												></md-input>
											</md-field>
										</b-col>
									</b-row>

									<div class="row">
										<div class="col">
											<label class="text-left float-left"
												>Contact Number</label
											>
										</div>
									</div>
									<div class="form-row">
										<div class="form-group col-md-3">
											<select
												v-model="contactNumberType"
												name="contact_number_type"
												class="custom-select"
												:disabled="!edit == true"
											>
												<option selected value="Home">Home</option>
												<option value="Work">Work</option>
												<option value="Cell">Cell</option>
											</select>
										</div>
										<div class="form-group col-md-9">
											<!-- <ValidationProvider name="contactNumber" rules="required"> -->
											<vue-phone-number-input
												name="contact_number"
												@update="onUpdate"
												:default-country-code="defaultCountry"
												no-country-selector
												v-model="contactNumber2"
												:disabled="!edit == true"
											/>
											<!-- </ValidationProvider> -->
										</div>
									</div>

									<!-- <div v-if="userType === '3'">
                    <business-information :user="user" :edit="edit" :states="states"></business-information>
                  </div> -->

									<b-row v-if="edit == true">
										<b-col md="12">
											<br />
											<br />
											<p>
												By clicking Submit, I confirm that the given
												information is true, complete and accurate.
											</p>
											<b-button
												onclick="LoadingOverlay()"
												class="float-right"
												type="submit"
												variant="success"
												:disabled="results.isValid == false"
												>Submit</b-button
											>
										</b-col>
									</b-row>
								</div>

								<br />
								<br />

								<card-holder
									:propuser="user"
									:billing_type="billingType"
									:edit="edit"
									:cc_sc_action="cc_sc_action"
									:cc_ws_action="cc_ws_action"
									:ach_sc_action="ach_sc_action"
									:ach_ws_action="ach_ws_action"
									ref="cardholder"
								></card-holder>
							</b-col>
						</b-row>
					</b-col>
					<b-col md="4">
						<md-card class="mb-4 mt-4">
							<md-card-content>
								<div v-if="editOrganization" class="p-3">
									Enter Your Organization(School/Parish) ID:
									<br />
									<!-- <input
										v-model="optionc_id"
										type="text"
										class="form-control"
										@keypress="onlyNumber"
									/> -->
                                    	<v-select
                                       v-model="optionc_id"
                                       label="atr_name_with_optionc"
                                       @search="searchOrgs"
                                       :create-option="org => ({ atr_name_with_optionc: org, org_name:org, org_optionc_id:org  })"
                                       :reduce="org => org.org_optionc_id"
                                       :options="orgs"
                                       :multiple="false"
                                       :disabled="false"
                                       :clearable="true"
                                       :searchable="true"
                                       :filterable="true"
                                       :taggable="true"
                                       :no-drop="false"
                                       :push-tags="true"
                                       :select-on-tab="true"
                                       placeholder="Search Organization"
                                 ></v-select>
									<br />
                                    <button
										type="button"
										class="btn btn-danger btn-sm"
										@click="editOrganization = false"
									>
										Cancel
									</button>
									<button
										type="button"
										class="btn btn-info btn-sm float-right"
										@click="submitOptionCId()"
									>
										Save Changes
									</button>
									<br />
								</div>
								<div v-else class="p-3">
                                    <div>
                                          <span v-if="oraganization.org_name">
                                            Selected Organization
                                          </span>
                                          <span class="text-danger" v-else>
                                              No Selected Organization Yet
                                          </span>
                                    </div>


									<br />
									<span v-if="oraganization.org_name">
										name: <b>{{ oraganization.org_name }}</b></span
									>
                                    <span v-if="!oraganization.org_name">
										<b>{{ oraganization.org_name }}</b></span
									>
									<br />
									<span v-if="oraganization.org_optionc_id">
										optionC id:<b>{{
											oraganization.org_optionc_id
										}}</b></span
									>
									<br />
									<br />
									<button
										type="button"
										class="btn btn-success btn-sm"
										@click="editOrganization = true"
									>
                                          <span v-if="oraganization.org_name">
                                             Change
                                          </span>
                                          <span v-else>
                                             Select
                                          </span>

									</button>
									<br />
								</div>

								<!-- <button type="button" class="btn btn-info btn-sm p-2" @click="SelectOrganizationMOdalShow()">  Select Organization </button> -->
							</md-card-content>
						</md-card>
					</b-col>
				</b-row>
				<!-- <SelectOrganizationModal></SelectOrganizationModal> -->
			</b-container>
		</div>
	</div>
</template>

<script>
	import { extend } from "vee-validate";
	import { required, email, is } from "vee-validate/dist/rules";
	extend("required", {
		...required,
		message: "This field is required",
	});
	const ProfCancelMembership = () =>
		import(
			/* webpackChunkName: "js/f/ProfCancelMembership" */ "./CancelMembershipModal.vue"
		);
	const ProfUserType = () =>
		import(
			/* webpackChunkName: "js/f/ProfUserType" */ "./UserTypeComponent.vue"
		);
	const ProfCardHolder = () =>
		import(/* webpackChunkName: "js/f/ProfCardHolder" */ "./CardHolder.vue");
	const ProfBusinesInfo = () =>
		import(
			/* webpackChunkName: "js/f/ProfBusinesInfo" */ "./BusinessInformation.vue"
		);

	export default {
		components: {
			"cancel-membership-modal": ProfCancelMembership,
			"user-type-component": ProfUserType,
			"card-holder": ProfCardHolder,
			"business-information": ProfBusinesInfo,
		},
		props: [
			"propsuser",
			"propscities",
			"propsstates",
			"action",
			"propssunclub_choices",
			"wholesaler_discount",
			"cancel_action",
			"cc_sc_action",
			"cc_ws_action",
			"ach_sc_action",
			"ach_ws_action",
		],

		data() {
			return {
				profileImage: "/img/sunfarmacy/default-user.png",

				userType: "1",
				selectedAmount: 1,
				billingType: "1",

				states: [],
				cities: [],
				selectedCity: "",
				selectedState: "",

				user: {},
				oraganization: {},

				sunclub_choices: [],

				sun_is_cancelled: 0,

				expiration_date: "",

				edit: false,
				csrf: document
					.querySelector('meta[name="csrf-token"]')
					.getAttribute("content"),
				timer: null,
				cities2: [],
				selectedCity2: null,
				search_cities: [],
				searching_cities: "",
				value: null,
				countries: [],
				contactNumber2: null,
				results: {},
				defaultCountry: "US",
				countriesList: ["US"],
				contactNumberType: "Home",

				editOrganization: false,
				optionc_id: null,
                 timer2:null,
                 orgs:[],
			};
		},

		created() {
			this.getStates();
            this.getOrgs("");
			this.user = this.propsuser;
			if (this.propsuser.organization) {
				this.oraganization = this.propsuser.organization;
                this.$events.fire("updateCartBadge4", this.propsuser.organization.id);
			}

			this.profileImage = this.user.image_path;
			this.selectedCity = this.user.city;
			this.contactNumber2 = this.user.contact_number;
			this.contactNumberType = this.user.contact_number_type;
			// this.selectedState = this.user.state;

			if (this.user.billinginfo.CC_or_ACH == "CC") {
				this.billingType = "1";
			} else {
				this.billingType = "2";
			}

			this.sunclub_choices = this.propssunclub_choices;
			this.selectedAmount = this.user.sunclub_choice_id;
			this.userType = "" + this.user.customer_role;

			if (this.user.customer_role == 2) {
				this.sun_is_cancelled = this.user.sunclub.is_cancelled;
				this.expiration_date = this.user.sunclub.expiration_date;
			}

			// $('#selectOrganizationModal2').modal('show');

			// this.getCities2();
			// this.cities2 = this.propscities;

			// this.getCities();
		},

		computed: {
			getCities() {
				let cities = this.propscities;
				let filter = [];
				var id = this.selectedState;
				var filteredCities = cities.filter(function (city) {
					return city.state_id == id;
				});
				filter = filteredCities;
				return filter;
			},
			bgetCities() {
				let cities = this.propscities;
				let filter = [];
				var id = this.bselectedState;
				var filteredCities = cities.filter(function (city) {
					return city.state_id == id;
				});
				filter = filteredCities;
				return filter;
			},
		},

		methods: {
             searchOrgs(search, loading) {
				if (this.timer2) {
					clearTimeout(this.timer2);
					this.timer2 = null;
				}

				this.timer2 = setTimeout(() => {
					this.getOrgs(search);
				}, 300);
			},

			async getOrgs(searching = null) {
				let param;
				param = {
					search: searching,
				};
				await axios({
					method: "get",
					url: "/data/searchOrganization",
					params: param,
				}).then((res) => {
					this.orgs = res.data;
				});
			},
			submitOptionCId() {
				LoadingOverlay();
				let rawdata = {
					optionc_id: this.optionc_id,
				};
				axios
					.post(`/api/UpdateSelectedOrganization2`, rawdata)
					.then((res) => {
						window.location.href = "/myprofile";
					})
					.catch((err) => {
						console.error(err);
						console.log(err.response.data.data_message);
						console.log(err.response);

						if (err.response.status == 400) {
							let arr = [];
							arr.push(err.response.data.data_message);
							this.showErrorMessage(arr);
						} else {
							this.errors.record(err.response.data.errors);
							this.showErrorMessage(this.errors.getArrayOfMessages());
						}
						window.scrollTo(0, 0);
						LoadingOverlayHide();
					});
			},
			showErrorMessage(errors) {
				//   console.log(shit);
				this.$events.fire("showErrorMessage", errors);
			},
			onlyNumber($event) {
				//console.log($event.keyCode); //keyCodes value
				let keyCode = $event.keyCode ? $event.keyCode : $event.which;
				if (keyCode < 48 || keyCode > 57) {
					// 46 is dot
					$event.preventDefault();
				}
			},
			SelectOrganizationMOdalShow() {
				$("#selectOrganizationModal2").modal("show");
			},
			onUpdate(payload) {
				this.results = payload;
			},
			clickEdit() {
				this.edit = true;
				this.$refs.cardholder.Cancel();
			},

			getCitiesForAutocomplete(searchTerm) {
				new Promise((resolve) => {
					window.setTimeout(() => {
						if (!searchTerm) {
							this.getCities2();
						} else {
							const term = searchTerm.toLowerCase();
							resolve(
								this.getCities2(term)
								//   this.countryList.filter(({ name }) =>
								//     name.toLowerCase().includes(term)
								//   )
							);
						}
					}, 1000);
				});
			},

			getSearchCities() {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}
				this.timer = setTimeout(() => {
					this.getCities2();
				}, 700);
			},

			async getCities2(searching = null) {
				let param;
				param = {
					search: searching,
				};
				await axios({
					method: "get",
					url: "/data/searchcities",
					params: param,
				}).then((res) => {
					this.cities2 = res.data;
				});
			},
			getStates() {
				this.states = this.propsstates;
				this.bstates = this.propsstates;
			},
			// statesChange() {
			//   this.selectedCity = {};
			// },

			// bstatesChange() {
			//   //   console.log(this.selectedState);
			//   this.bselectedCity = {};
			// },

			onFileChange(e) {
				console.log(e);
				const file = e.target.files[0];
				this.profileImage = URL.createObjectURL(file);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.s-user-type {
		.md-radio {
			display: flex;
		}
	}
	.my-select {
		padding: 0px;
		margin: 0px;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
	}


</style>
