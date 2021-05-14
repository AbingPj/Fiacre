<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					Orders
					<download-excel
						:header="[`Orders`]"
						class="btn btn-success float-right mx-1"
						:fields="json_fields"
						:data="orders"
						type="xls"
						:name="`orders.xls`"
						:worksheet="`Orders`"
					>
						<i class="fas fa-file-excel"></i>
						XLS
					</download-excel>
					<download-excel
						:header="[`Orders`]"
						class="btn btn-success float-right mx-1"
						:fields="json_fields"
						:data="orders"
						type="csv"
						:name="`orders.xls`"
						:worksheet="`Orders`"
					>
						<i class="fas fa-file-csv"></i>
						CSV
					</download-excel>
				</h2>
			</div>
			<div class="col-md-6"></div>
		</div>
		<br />
		<br />
		<div class="row">
			<div class="col-md-8">
				<div class="input-group mb-3">
					<input
						v-model="search_input"
						type="text"
						class="form-control rounded-0"
						placeholder="Search"
						v-on:keyup.enter="btnSearch()"
					/>
					<div class="input-group-append">
						<button
							class="btn btn-success rounded-0"
							@click="btnSearch()"
						>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
		<!-- filter -->
		<div class="row mt-3">
			<div class="col-md-3">
				<select
					v-model="filterby"
					class="form-control"
					@change="filterSelectionChange"
				>
					<option value="all">Default</option>
					<option value="weekly">Weekly</option>
					<option value="monthly">Monthly</option>
				</select>
			</div>
			<div
				:class="filterby == 'weekly' ? 'd-block' : 'd-none'"
				class="col-md-3"
			>
				<div class="input-group">
					<date-picker
						v-model="week_date"
						id="date-time-input-week"
						:wrap="true"
						:config="option_week"
						ref="week_date"
						@dp-change="filterByWeek"
					></date-picker>
					<div class="input-group-append">
						<button
							class="btn btn-secondary datepickerbutton"
							type="button"
							title="Toggle"
						>
							<i class="far fa-calendar"></i>
						</button>
					</div>
				</div>
			</div>

			<div
				:class="filterby == 'monthly' ? 'd-block' : 'd-none'"
				class="col-md-3"
			>
				<div class="input-group">
					<date-picker
						v-model="month_date"
						id="date-time-input-month"
						:wrap="true"
						:config="option_month"
						ref="month_date"
						@dp-change="filterByMonth"
					></date-picker>
					<div class="input-group-append">
						<button
							class="btn btn-secondary datepickerbutton"
							type="button"
							title="Toggle"
						>
							<i class="far fa-calendar"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div v-if="filterby == 'weekly'" class="row mt-3">
			<div class="col">
				<h5>({{ week_first_day }} - {{ week_last_day }})</h5>
			</div>
		</div>
		<div v-if="filterby == 'monthly'" class="row mt-3">
			<div class="col">
				<h5>({{ month_date }})</h5>
			</div>
		</div>

		<div
			class="row mt-4"
			style="font-family: Source Sans Pro, sans-serif !important"
		>
			<div class="col-lg-12 col-md-12">
				<table id="customers-table" class="table table-hover">
					<thead>
						<tr>
							<th>Order ID#</th>
							<th>Order Date</th>
							<th>Customer</th>
							<th>Order Cost</th>
							<th>Address</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(order, index) in orders" :key="index">
							<td>{{ order.id }}</td>
							<td>{{ order.atr_date_label }}</td>
							<td>{{ order.user.full_name }}</td>
							<td>
								$ {{ order.atr_subscription_overall_total_amount_f }}
							</td>
							<td>{{ order.atr_del_pick_addresss }}</td>
							<td>
								<a
									:href="'/admin/orders/' + order.id"
									class="btn btn-sm btn-success"
									>View Order</a
								>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["propsorders"],
		data() {
			return {
				orders: [],
				data: {},
				search: "",
				search_input: "",
				filterby: "all",
				week_date: null,
				week_first_day: null,
				week_last_day: null,
				month_date: null,
				option_week: {
					format: "MMMM DD, YYYY",
					useCurrent: true,
					allowInputToggle: true,
					maxDate: moment(),
					// showTodayButton : true,
				},
				option_month: {
					format: "MMMM YYYY",
					useCurrent: true,
					allowInputToggle: true,
					maxDate: moment(),
					// showTodayButton : true,
				},
				json_fields: {
					"Order ID": "id",
					"Order Date": "atr_date_label",
					"Customer Name": {
						field: "user",
						callback: (value) => {
							return value.full_name;
						},
					},
                    "Customer Phone": {
						field: "user",
						callback: (value) => {
							return `(${value.contact_number_type}) ${value.contact_number}`;
						},
					},
                    "Customer Address":"user.atr_full_address2",
					"Order Cost": "atr_subscription_overall_total_amount_f",
					"School/Parish ID": "organization.org_optionc_id",
					"Delivery Method": {
						field: "is_pickup",
						callback: (value) => {
							if (value == 1) {
								return "Pick-up";
							} else {
								return "Deliver";
							}
						},
					},
                    "Delivery Fee": "delivery_fee",
					Address: "atr_del_pick_addresss",

					Products: {
						field: "order_products",
						callback: (value) => {
							var str = "";
							if (value) {
								var arr = value;
								arr.forEach((element) => {
									str =
										str +
										`(sku:${element.atr_product_details.sku}) ${element.atr_product_details.name} -  qty: ${element.updated_quantity}/${element.atr_product_details.unit} ~~~~ \n`;
								});
							}
							return str;
						},
					},
				},
			};
		},

		created() {
			// this.getResults();
			this.getAllDataInitialize();
		},
		mounted() {
			// $(document).ready(function () {
			// 	$("#customers-table").DataTable({
			// 		lengthMenu: [
			// 			[10, 25, 50, -1],
			// 			[10, 25, 50, "All"],
			// 		],
			// 		iDisplayLength: -1,
			// 	});
			// });
		},

		methods: {
			filterSelectionChange() {
				if (this.filterby == "all") {
					this.week_date = moment().format("MMMM DD, YYYY");
					this.month_date = moment().format("MMMM YYYY");
					this.getResults();
				} else if (this.filterby == "weekly") {
					this.week_date = moment().format("MMMM DD, YYYY");
					this.month_date = moment().format("MMMM YYYY");
					this.getResults();
				} else if (this.filterby == "monthly") {
					this.month_date = moment().format("MMMM YYYY");
					this.getResults();
				}
			},
			filterByMonth() {
				//   console.log("oyee month");
				this.getResults();
			},
			filterByWeek() {
				//   console.log("oyee week");
				this.getResults();
			},
			getResults(page = 1) {
				let param;
				if (this.filterby == "all") {
					if (this.search != "") {
						param = {
							search: this.search,
							page: page,
						};
					} else {
						param = {
							page: page,
						};
					}
					this.getAllData(param);
				}
				if (this.filterby == "weekly") {
					param = {
						page: page,
						search: this.search,
						date: this.week_date,
					};
					this.getWeeklyData(param);
				}
				if (this.filterby == "monthly") {
					param = {
						page: page,
						search: this.search,
						date: this.month_date,
					};
					console.log(this.month_date);
					this.getMonthlyData(param);
				}
			},

			getAllDataInitialize() {
				var param = {
					page: 1,
				};
				axios({
					method: "get",
					url: "/api/admin/orders",
					params: param,
				}).then((res) => {
					this.data = res.data;
					this.orders = res.data.data;

					$(document).ready(function () {
						$("#customers-table").DataTable({
							lengthMenu: [
								[10, 25, 50, -1],
								[10, 25, 50, "All"],
							],
							iDisplayLength: -1,
							order: [[0, "desc"]],
						});
					});
				});
			},

			getAllData(param) {
				axios({
					method: "get",
					url: "/api/admin/orders",
					params: param,
				}).then((res) => {
					this.data = res.data;
					this.orders = res.data.data;
				});
			},
			getWeeklyData(param) {
				axios({
					method: "get",
					url: "/api/admin/orders/weekly",
					params: param,
				}).then((res) => {
					this.data = res.data.pagination;
					this.orders = res.data.pagination.data;
					this.week_first_day = res.data.from;
					this.week_last_day = res.data.to;
					// this.week_date = res.data.date;
				});
			},
			getMonthlyData(param) {
				axios({
					method: "get",
					url: "/api/admin/orders/monthly",
					params: param,
				}).then((res) => {
					this.data = res.data.pagination;
					this.orders = res.data.pagination.data;
					// this.month_date = res.data.date;
				});
			},

			btnSearch() {
				this.search = this.search_input;
				this.getResults();
			},
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
