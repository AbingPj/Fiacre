<template>
	<form id="billingInfoForm" name="billingInfoForm" onsubmit="return false">
		<div class="flex-grow-1">
			<b-container class="py-5">
				<div class="card-body">
					<div
						v-if="ErrorMessage.length > 0"
						class="alert alert-danger"
						role="alert"
					>
						<button
							type="button"
							class="close"
							data-dismiss="alert"
							aria-label="Close"
							@click="close()"
						>
							<span aria-hidden="true">&times;</span>
						</button>
						<div v-for="(msg, index) in ErrorMessage" :key="index">
							{{ msg }}
							<br />
						</div>
					</div>
				</div>
				<br />
				<p class="font-weight-bold">
					Your account has been confirmed. Please continue with to fill up
					the required information to complete the registration.
				</p>
				<b-row>
					<b-col md="8">
						<b-row>
							<b-col md="3">
								<img :src="profileImage" class="w-100" />
								<md-field>
									<label>Select image</label>
									<md-file @change="onFileChange" name="image_file" />
								</md-field>
							</b-col>
							<b-col>
								<h4 class="font-weight-bold">User Information</h4>
								<b-row>
									<b-col md="12">
										<md-field>
											<label>Email</label>
											<md-input
												v-model="user.email"
												disabled
											></md-input>
										</md-field>
									</b-col>
								</b-row>
								<b-row>
									<b-col md="2">
										<md-field>
											<label>Title</label>
											<md-select name="title">
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
											></md-input>
										</md-field>
									</b-col>
								</b-row>

								<md-field>
									<label>Street Address</label>
									<md-input name="street_address" required></md-input>
								</md-field>
								<b-row>
									<b-col md="4">
										<label>Town/County/City</label>
										<v-select
											@search="fetchOptions"
											v-model="address.city"
											:options="cities3"
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
									</b-col>
									<b-col md="4">
										<label>State</label>
										<v-select
											label="name"
											v-model="address.state"
											:reduce="(state) => state.id"
											:options="states2"
											:clearable="false"
										></v-select>
									</b-col>
									<b-col md="4">
										<md-field>
											<label>Zip</label>
											<md-input name="zipcode" required></md-input>
										</md-field>
									</b-col>
								</b-row>
								<h4 class="font-weight-bold">Billing Information</h4>
								<b-row>
									<b-col md="6">
										<label style="padding: 0px; margine: 0px"
											>Billing Type</label
										>
										<select
											class="form-control my-select"
											v-model="billingType"
											name="billing_token_type"
											required
										>
											<option value="1">CC</option>
											<option value="2">ACH</option>
										</select>
									</b-col>
									<b-col md="6" v-if="billingType === '1'">
										<label style="padding: 0px; margine: 0px"
											>Card Type</label
										>
										<select
											class="form-control my-select"
											name="card_type"
											required
										>
											<option value="1">American Express</option>
											<option value="2">Discover</option>
											<option value="3">Mastercard</option>
											<option value="4">Visa</option>
										</select>
									</b-col>
									<b-col md="6">
										<b-col md="12" v-if="billingType === '2'">
											<label style="padding: 0px; margine: 0px"
												>Account Type</label
											>
											<select
												class="form-control my-select"
												name="ach_type"
												required
											>
												<option value="1">Savings</option>
												<option value="0">Checking</option>
											</select>
										</b-col>
										<br />
										<br />
										<b-col md="12" v-if="billingType === '2'">
											<label style="padding: 0px; margine: 0px"
												>Account Holder Type</label
											>
											<select
												name="ach_acc_holder_type"
												class="form-control my-select"
												required
											>
												<option value="0">Personal</option>
												<option value="1">Business</option>
											</select>
										</b-col>
									</b-col>
								</b-row>

								<div v-if="billingType === '1'">
									<md-field>
										<label>Name in the card</label>
										<md-input name="card_name"></md-input>
									</md-field>
									<b-row>
										<b-col>
											<md-field>
												<label>Credit Card Number</label>
												<md-input
													name="card_number"
													required
												></md-input>
											</md-field>
										</b-col>
										<b-col>
											<md-field>
												<label>Security Code</label>
												<md-input
													type="password"
													name="cvv"
													required
												></md-input>
											</md-field>
										</b-col>
									</b-row>
									<br />
									<p class="m-0">Expiration Date</p>
									<br />
									<b-row>
										<b-col md="6">
											<b-row>
												<b-col md="6">
													<label style="padding: 0px; margine: 0px"
														>Month</label
													>
													<select
														class="form-control form-control-sm my-select"
														name="exp_month"
														required
													>
														<option
															v-for="(month, index) in months"
															:value="month"
															:key="index"
														>
															{{ month }}
														</option>
													</select>
												</b-col>
												<b-col md="6">
													<label style="padding: 0px; margine: 0px"
														>Year</label
													>
													<select
														class="form-control form-control-sm my-select"
														name="exp_year"
														required
													>
														<option
															v-for="(year, index) in years"
															:value="year.value"
															:key="index"
														>
															{{ year.year }}
														</option>
													</select>
												</b-col>
											</b-row>
										</b-col>
									</b-row>
								</div>
								<div v-if="billingType === '2'">
									<md-field>
										<label>Account Number</label>
										<md-input
											name="ach_account_number"
											required
										></md-input>
									</md-field>
									<md-field>
										<label>Routing</label>
										<md-input name="ach_routing" required></md-input>
									</md-field>
								</div>
								<div v-if="userType === '2'">
									<h4 class="font-weight-bold">
										Business Information
									</h4>
									<b-row>
										<b-col md="4">
											<img :src="businessImage" class="w-100" />
											<md-field>
												<label>Business Logo</label>
												<md-file
													@change="onFileChange2"
													name="business_image_file"
												/>
											</md-field>
										</b-col>
									</b-row>
									<md-field>
										<label>Designation / Designation</label>
										<md-input
											name="business_designation"
											required
										></md-input>
									</md-field>
									<md-field>
										<label>Organization / Business Name</label>
										<md-input
											name="business_name"
											required
										></md-input>
									</md-field>
									<md-field>
										<label>Business Street Address</label>
										<md-input
											name="business_street_address"
											required
										></md-input>
									</md-field>
									<b-row>
										<b-col md="4">
											<md-autocomplete
												md-input-name="business_city"
												:md-options="cities2"
												v-model="newCity2"
												@md-changed="getCitiesForAutocomplete"
												@md-opened="getCitiesForAutocomplete"
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
												<md-select
													v-model="bselectedState"
													md-dense
												>
													<md-option
														v-for="(item, index) in states"
														:key="index"
														:value="item.id"
														>{{ item.name }}</md-option
													>
												</md-select>
												<input
													v-model="bselectedState"
													name="business_state"
													type="hidden"
												/>
											</md-field>
										</b-col>
										<b-col md="4">
											<md-field>
												<label>Business Zip</label>
												<md-input
													name="business_zipcode"
													required
												></md-input>
											</md-field>
										</b-col>
									</b-row>
								</div>
							</b-col>
						</b-row>
					</b-col>
					<!-- Formerly Membership Card -->
					<b-col md="4">
						<md-card class="mb-4 mt-4">
							<!-- <md-card-content> Selected Organization
                                <br>
                                <span v-if="organization.org_name"> name: <b>{{ organization.org_name}}</b></span>
                                 <br>
                                 <span v-if="organization.org_optionc_id"> optionC id:<b>{{ organization.org_optionc_id}}</b></span>
                                <br>
                                <br>
                                 <button type="button" class="btn btn-info btn-sm p-2" @click="SelectOrganizationMOdalShow()">  Select Organization </button>
                            </md-card-content> -->
							<!-- <md-card-content>
								<div class="p-3">
									<b>Enter Your Organization(School/Parish) ID:</b>
									<br />
									<input v-model="optionc_id" type="text" class="form-control" @keypress="onlyNumber" />
								</div>
							</md-card-content> -->

                             <md-card-content>
								<div class="p-3 org-select">
									<b>Enter Your Organization(School/Parish) ID:</b>
									<br />
                                     <v-select
                                       v-model="optionc_id"
                                       	@input="optionc_id2 = $event.value"
                                       ref="orgsRef"
                                       label="atr_name_with_optionc"
                                       @search="searchOrgs"
                                       :reduce="org => org.org_optionc_id"
                                        :create-option="org => ({ atr_name_with_optionc: org, org_name:org, org_optionc_id:org  })"
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
								</div>
							</md-card-content>



						</md-card>
					</b-col>
				</b-row>
				<b-row>
					<b-col offset-md="2" md="6">
						<br />
						<br />
						<p>
							By clicking Submit, I confirm that the given information is
							true, complete and accurate.
						</p>
                        <div class="float-left">
                            Powered By: <br>
                            <img src="/img/MattMoneyLogo.png" alt="" style="height:25px; width:auto;">
                        </div>
						<b-button
							@click="submitButtonClicked()"
							class="float-right"
							variant="success"
							size="lg"
							>Submit</b-button
						>
					</b-col>
				</b-row>
			</b-container>
		</div>
		<vue-programmatic-invisible-google-recaptcha
			ref="invisibleRecaptcha2"
			:sitekey="'6LcZmaYZAAAAAHVxYaFz_euKnxzFWKFcO3zX94_H'"
			:elementId="'invisibleRecaptcha2'"
			:badgePosition="'left'"
			:showBadgeMobile="false"
			:showBadgeDesktop="true"
			@recaptcha-callback="recaptchaCallback"
		></vue-programmatic-invisible-google-recaptcha>
		<SelectOrganizationModal2></SelectOrganizationModal2>
	</form>
</template>

<script>
	import Errors from "../../errorClass";
	import { extend } from "vee-validate";
	import { required, email, is } from "vee-validate/dist/rules";
	extend("required", {
		...required,
		message: "This field is required",
	});
	export default {
		props: [
			"action",
			"propsuser",
			"propscities",
			"propsstates",
			"propssunclub_choices",
			"wholesaler_discount",
			"wholesaler_signup_is_hide",
		],
		data() {
			return {
				profileImage: "/img/sunfarmacy/default-user.png",
				businessImage: "/img/no-product-image.png",
				userType: "1",
				selectedAmount: "",
				billingType: "1",
				years: [],
				months: [],
				states: [],
				cities: [],
				selectedCity: "",
				selectedState: "",
				bstates: [],
				bcities: [],
				bselectedCity: "",
				bselectedState: "",
				user: {},
				sunclub_choices: [],

				cities2: [],
				newCity1: "",
				newCity2: "",

				membership_fee: {},
				errors: new Errors(),
				ErrorMessage: [],
				address: {
					city: null,
					state: 1456,
				},
				timer: null,
				cities3: [],
				states2: [],
				organization: {},
                org_id: null,
                optionc_id: null,
                optionc_id2: null,
                orgs:[],
			};
		},

		watch: {
			selectedAmount: function (val) {
				if (val) {
					this.membership_fee = this.sunclub_choices.find(
						(x) => x.id === val
					);
				}
			},
		},

		created() {
			this.selectedAmount = 1;
			this.getStates();
            this.getCities3("");
			this.user = this.propsuser;
			this.sunclub_choices = this.propssunclub_choices;
            this.getOrgs();
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
            onlyNumber($event) {
				//console.log($event.keyCode); //keyCodes value
				let keyCode = $event.keyCode ? $event.keyCode : $event.which;
				if (keyCode < 48 || keyCode > 57) {
					// 46 is dot
					$event.preventDefault();
				}
			},
			SelectOrganizationMOdalShow() {
				$("#selectOrganizationModal3").modal("show");
			},
			fetchOptions(search, loading) {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}

				this.timer = setTimeout(() => {
					this.getCities3(search);
				}, 300);
			},

			async getCities3(searching = null) {
				let param;
				param = {
					search: searching,
				};
				await axios({
					method: "get",
					url: "/data/searchcities",
					params: param,
				}).then((res) => {
					this.cities3 = res.data;
				});
			},

			submitButtonClicked() {
				this.ErrorMessage = [];
				this.$refs.invisibleRecaptcha2.execute();
			},
			recaptchaCallback(recaptchaToken) {
				LoadingOverlay();
				let url = this.action;
				let myForm = document.getElementById("billingInfoForm");
				let formData = new FormData(myForm);
				formData.append("g-recaptcha-response", recaptchaToken);
				formData.append("city", this.address.city);
				formData.append("state", this.address.state);
				// if (this.org_id) {
				// 	formData.append("org_id", this.org_id);
                // }
                if (this.optionc_id) {
					formData.append("optionc_id", this.optionc_id);
                }



				axios
					// .post(url, formData, {
					// 	headers: {
					// 		"Content-Type": "multipart/form-data",
					// 	},
					// })
					.post(url, formData)
					.then((res) => {
						console.log(res);
						window.scrollTo(0, 0);
						window.location.href = "/signup/complete";
						LoadingOverlayHide();
					})
					.catch((err) => {
						LoadingOverlayHide();
						if (err.response.status == 422) {
							this.errors.record(err.response.data.errors);
							this.ErrorMessage = this.errors.getArrayOfMessages();
							window.scrollTo(0, 0);
						} else if (err.response.status == 400) {
							let arr = [];
							arr.push(err.response.data.data_message);
							this.ErrorMessage = arr;
							window.scrollTo(0, 0);
						} else {
							let arr = [];
							arr.push("Something Went Wrong: " + err);
							this.ErrorMessage = arr;
							window.scrollTo(0, 0);
						}
					});
			},

			close() {
				this.ErrorMessage = [];
			},

			getStates() {
				this.states = this.propsstates;
				this.states2 = this.propsstates;
				this.bstates = this.propsstates;
			},
			statesChange() {
				this.selectedCity = {};
			},

			bstatesChange() {
				//   console.log(this.selectedState);
				this.bselectedCity = {};
			},

			onFileChange(e) {
				console.log(e);
				const file = e.target.files[0];
				this.profileImage = URL.createObjectURL(file);
			},
			onFileChange2(e) {
				console.log(e);
				const file = e.target.files[0];
				this.businessImage = URL.createObjectURL(file);
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
					}, 700);
				});
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
		},

		mounted() {
			const currentYear = new Date().getFullYear();
			for (let index = 0; index < 10; index++) {
				let year = currentYear + index;
				let value = year.toString();
				//   value = parseInt(value.slice(-2));
				value = value.slice(-2);
				let obj = { year: year, value: value };
				this.years.push(obj);
			}
			for (let index = 1; index <= 12; index++) {
				this.months.push(index);
			}
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
