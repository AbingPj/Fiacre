<template>
	<form :action="action" method="post" enctype="multipart/form-data">
		<input type="hidden" name="_token" :value="csrf" />
		<!-- <input type="hidden" name="_method" value="PATCH" /> -->
		<input type="hidden" name="order_id" :value="order.id" />
		<div class="d-flex flex-column min-vh-100">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h2 class="card-title mb-0">
							<div class="d-flex">
								<div class="mr-2">
									<a
										href="/admin/orders"
										class="btn btn-success float-right rounded-0 text-light"
									>
										<i class="fas fa-chevron-circle-left"></i>
									</a>
								</div>
								<div>Orders</div>
							</div>
						</h2>
						<br />
						<h3 class="text-success">
							<b>Order #{{ order.id }}</b>
							<download-excel
								:footer="[
									`sub total:    ${order.atr_subscription_total_amount_f}`,
									`tx: ${order.billing_type}(${order.billing_type_percentage}) +    ${order.atr_billing_amount_f}`,
									`referral discount: -     ${order.atr_referral_amount_f}`,
									`Delivey Fee: -     ${order.delivery_fee}`,
									`Total:     ${order.atr_subscription_overall_total_amount_f}`,
									`-`,
									`Customer: ${user.full_name}`,
									`Organization: ${order.organization.org_name}`,
									`-`,
									`${OrAddress}`,
									`${OrDate}`,
									`-`,
								]"
								:header="[
									`Order id:${order.id}`,
									`date: ${order.date_label}`,
								]"
								class="btn btn-success float-right mx-1"
								:fields="json_fields"
								:data="productsCSV"
								type="xls"
								:name="`order${order.id}.xls`"
								:worksheet="`Order #${order.id}`"
							>
								<i class="fas fa-file-excel"></i>
								XLS
							</download-excel>
							<download-excel
								:footer="[
									`sub total:,,,,, ${order.atr_subscription_total_amount_f}`,
									`tx: ${order.billing_type}(${order.billing_type_percentage}%) + ,,,,, ${order.atr_billing_amount_f}`,
									`referral discount: - ,,,,,  ${order.atr_referral_amount_f}`,
									`Delivery Fee: - ,,,,,  ${order.delivery_fee}`,
									`Total: ,,,,,${order.atr_subscription_overall_total_amount_f}`,
									`-`,
									`Customer: ${user.full_name}`,
									`Organization: ${order.organization.org_name}`,
									`-`,
									`${OrAddress}`,
									`${OrDate}`,
									`-`,
								]"
								:header="[
									`Order id:${order.id}`,
									`date: ${order.date_label}`,
								]"
								class="btn btn-success float-right mx-1"
								:fields="json_fields"
								:data="productsCSV"
								type="csv"
								:name="`order${order.id}.xls`"
								:worksheet="`Order #${order.id}`"
							>
								<i class="fas fa-file-csv"></i>
								CSV
							</download-excel>
							<!-- <download-excel
						:footer="['total: ', parseFloat(total).toFixed(2)]"
						:header="
							`Order ${order.id}`
						"
						class="btn btn-success float-right mr-2"
						:fields="json_fields"
						:data="data"
						type="csv"
						name="salesdaily.csv"
						worksheet="Daily"
					>
						<i class="fas fa-file-csv"></i>
						CSV
					</download-excel> -->
							<button
								type="button"
								@click="print()"
								class="btn btn-success float-right mx-1"
							>
								<i class="fas fa-print"></i> Print
							</button>
						</h3>
					</div>
				</div>
				<br />
				<br />
				<div class="row">
					<div class="col-sm-12 mb-3">
						<div class="d-flex">
							<div class="mr-auto w-50">
								<div class="form-group row">
									<label
										for="inputEmail3"
										class="col-sm-2 col-form-label"
										>:</label
									>
									<!-- <div class="col-sm-10">
                    <select
                      name="status"
                      v-model="selectedStatus"
                      class="form-control w-50"
                      id="exampleFormControlSelect1"
                      @change="selectedStatusChange"
                      style="font-weight: 800;"
                      :class="selectedStatus == 2 ? 'status-awaiting' : 'status-hold'
                    "
                    >
                      <option value="1">Reserved</option>
                      <option value="2">Ready</option>
                    </select>
                  </div> -->
								</div>
								<!-- <h5>Status: {{order.status}}</h5> -->
							</div>
							<div class="text-right w-50">
								<h5>{{ order.date_label }}</h5>
							</div>
						</div>
					</div>
					<div class="col-sm-12 mb-3">
						<div class="d-flex">
							<div class="mr-auto w-50">
								<h3>
									Place by:
									<b>{{ user.full_name }}</b>
									<span v-if="order.order_by == 0">(Retailer)</span>
									<span v-if="user.customer_role == 2"
										>(Sun Club Member)</span
									>
									<span v-if="user.customer_role == 3"
										>(Wholesaler)</span
									>
								</h3>
							</div>
							<div class="text-right w-50">
								<h3>
									Total: ${{
										order.atr_subscription_overall_total_amount_f
									}}
								</h3>
							</div>
						</div>
					</div>

					<div class="col-sm-12 mb-3">
						<div class="d-flex">
							<div
								class="mr-auto w-50 border-bottom border-secondary pb-0"
							>
								<label class="mb-0">Email</label>
								<!-- <u> -->
								<h5 class="mb-0">{{ user.email }}</h5>
								<!-- </u> -->
							</div>
							<div class="w-50 border-bottom border-secondary pb-0 ml-3">
								<label class="mb-0">Address</label>

								<h5 class="mb-0">{{ user.street_address }}</h5>
							</div>
						</div>
					</div>

					<div class="col-sm-12 mb-3">
						<div class="d-flex">
							<div
								class="mr-auto w-25 border-bottom border-secondary pb-0"
							>
								<label class="mb-0">Phone</label>

								<h5 class="mb-0">
									[ {{ user.contact_number_type }} ]
									{{ user.contact_number }}
								</h5>
							</div>
							<div class="w-50 ml-3">
								<div class="d-flex justify-content-between">
									<div
										class="w-25 border-bottom border-secondary pb-0"
									>
										<label class="mb-0">City</label>

										<h5 class="mb-0">{{ user.city }}</h5>
									</div>
									<div
										class="w-25 border-bottom border-secondary pb-0"
									>
										<label class="mb-0">State</label>

										<h5 class="mb-0">{{ user.state }}</h5>
									</div>
									<div
										class="w-25 border-bottom border-secondary pb-0"
									>
										<label class="mb-0">Zip Code</label>
										<h5 class="mb-0">{{ user.zipcode }}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-12 mb-3">
						<div class="d-flex">
							<div
								class="mr-auto w-50 border-bottom border-secondary pb-0"
							>
								<label class="mb-0">Organization</label>
								<!-- <u> -->
								<p class="mb-0">
									{{ order.organization.org_name }}
									<br />
									{{ order.organization.atr_address }}
								</p>

								<!-- </u> -->
							</div>
						</div>
					</div>
				</div>
				<div class="row mt-5 mb-5">
					<div class="col-12">
						<ul class="list-group rounded-0">
							<li
								v-for="(item, index) in products"
								:key="index"
								class="list-group-item d-flex"
								:class="
									item.editing == true ? 'list-edit-bg-color' : ''
								"
							>
								<div>
									<img
										:src="item.product.image_link"
										style="
											width: 50px;
											height: 50px;
											object-fit: cover;
										"
									/>
								</div>
								<div class="w-25 ml-3">
									<p>
										<b>{{ item.product.name }}</b>
										<br />
										<span v-if="item.is_subscription == 1">
											$ {{ displayNumberWithComma(item.price) }} /
											{{ item.product.unit }}
											<span class="mr-3 ml-3">X</span>
											{{ item.subscription_weeks }} weeks
										</span>
										<span v-if="item.is_subscription == 0">
											$ {{ displayNumberWithComma(item.price) }} /
											{{ item.product.unit }}
											<span class="mr-3 ml-3">X</span>
											{{ item.updated_quantity }}
										</span>
									</p>
								</div>
								<div class="ml-auto w-25">
									<div
										class="d-flex justify-content-end align-items-end"
										style="height: 57px"
									>
										<div
											v-if="item.is_subscription == 1"
											class="w-50 text-right"
										>
											<div>
												<b>
													$
													{{
														displayNumberWithComma(
															item.subscription_price
														)
													}}
												</b>
											</div>
										</div>
										<div
											v-if="item.is_subscription == 0"
											class="w-50 text-right"
										>
											<div>
												<b>
													$
													{{
														displayNumberWithComma(
															item.price * item.updated_quantity
														)
													}}
												</b>
												<!-- <span :class="item.editing == true ? '' : 'd-none'">
                          <input
                            :name="'product['+item.id+']'"
                            @keypress="onlyNumber"
                            class="qty-input"
                            type="text"
                            v-model="item.updated_quantity"
                          />
                        </span> -->
											</div>
										</div>
										<div class="pl-3 text-right">
											<!-- <a
                        class="btn btn-sm btn-light"
                        :class="item.editing == false ? 'd-block' : 'd-none'"
                        @click="edit(item)"
                      >
                        <i class="fas fa-pencil-alt mr-1"></i>Edit
                      </a>
                      <a
                        class="btn btn-sm btn-light"
                        :class="item.editing == true ? 'd-block' : 'd-none'"
                        @click="saved(item)"
                      >
                        <i class="far fa-save mr-1"></i>Save
                      </a> -->
										</div>
									</div>
								</div>
							</li>
						</ul>
						<br />
						<br />
						<div class="text-right w-100">
							<h4>
								<span class="mr-5">Total:</span>
								${{ order.atr_subscription_total_amount_f }}
							</h4>
						</div>
						<div class="text-right w-100">
							<h4>
								<span class="mr-5"
									>{{ order.billing_type }} ({{
										order.billing_type_percentage
									}}
									%) +</span
								>
								${{ order.atr_billing_amount_f }}
							</h4>
						</div>

						<div class="text-right w-100">
							<h4>
								<span class="mr-5">Referral Discount- </span>
								${{ order.atr_referral_amount_f }}
							</h4>
						</div>

						<!-- <div class="text-right w-100">
              <h4>
                <span class="mr-5">Discount:</span>
                - ${{displayNumberWithComma(getDiscount)}}
              </h4>
            </div>

            <div class="text-right w-100">
              <h4>
                <span class="mr-5">Coupon Discount:</span>
                - ${{displayNumberWithComma(getCouponDiscount)}}
              </h4>
            </div> -->

            <div class="text-right w-100">
              <h4>
                <span class="mr-5">Delivery Fee:</span>
                + ${{displayNumberWithComma(order.delivery_fee)}}
              </h4>
            </div>

            	<!--
            <div class="text-right w-100">
              <h4>
                <span class="mr-5">TAX:</span>
                + ${{displayNumberWithComma(getTax)}}
              </h4>
            </div> -->






						<hr />
						<div class="text-right w-100">
							<h3>
								<!-- <button
                  class="rounded-0 mr-2 btn"
                  :class="edited == true? 'btn-success':'btn-success-1'"
                  :disabled="edited == false"
                  type="submit"
                >
                  <i class="fas fa-save"></i> Save
                </button> -->
								<span class="mr-5">Total:</span>
								<b
									>${{
										order.atr_subscription_overall_total_amount_f
									}}</b
								>
							</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
	import FileSaver from "file-saver";
	export default {
		props: ["propsorder", "propsproducts", "propsuser", "action"],
		data() {
			return {
				order: {},
				user: {},
				products: [],
				edited: false,
				selectedStatus: 3,
				csrf: document
					.querySelector('meta[name="csrf-token"]')
					.getAttribute("content"),

				json_fields: {
					"Product Name": "product_name",
					Details: "price_details",
					"": "x",
					Qty: "qty",
					"*": "sign",
					Total: "sub_total",
				},
			};
		},
		methods: {
			displayNumberWithComma(value) {
				var n = parseFloat(value).toFixed(2);
				var withCommas = Number(n).toLocaleString("en", {
					minimumFractionDigits: 2,
					maximumFractionDigits: 2,
				});
				return withCommas;
			},
			edit(data) {
				console.log(data);
				data.editing = true;
			},
			saved(data) {
				data.editing = false;
				this.edited = true;
			},
			getProducts() {
				let products = this.propsproducts;
				products.forEach((product) => {
					product.editing = false;
				});
				this.products = products;
			},
			selectedStatusChange() {
				this.edited = true;
			},
			onlyNumber($event) {
				//console.log($event.keyCode); //keyCodes value
				let keyCode = $event.keyCode ? $event.keyCode : $event.which;
				if (keyCode < 48 || keyCode > 57) {
					//   if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
					// 46 is dot
					$event.preventDefault();
				}
			},
			print() {
				LoadingOverlay();
				axios({
					method: "post",
					url: "/admin/generate/pdf/order",
					data: {
						order_id: this.order.id,
					},
					responseType: "arraybuffer",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/pdf",
					},
				})
					.then((response) => {
						const url = window.URL.createObjectURL(
							new Blob([response.data])
						);
						const link = document.createElement("a");
						link.href = url;
						link.setAttribute(
							"download",
							"orders_no_" + this.order.id + ".pdf"
						); //or any other extension
						document.body.appendChild(link);
						link.click();
						LoadingOverlayHide();
					})
					.catch((error) => console.log(error));
			},
		},
		created() {
			this.order = this.propsorder;
			this.user = this.propsuser;
			this.getProducts();
			this.selectedStatus = this.order.status;
		},
		computed: {
			OrAddress() {
				if (this.order.is_pickup == "1") {
					var str = this.order.order_address_info.address_pickup;
					str = str.replace(/,/g, ".");
					return `Pickup Address: ${str}`;
				} else {
					var str = this.order.order_address_info.address;
					str = str.replace(/,/g, ".");
					return `Delivery Address: ${str}`;
				}
			},
			OrDate() {
				if (this.order.is_pickup == "1") {
					return `Pickup date: ${this.order.order_address_info.pick_up_date}`;
				} else {
					var str = this.order.atr_expected_delivery_date;
					str = str.replace(/,/g, "");
					return `Expected Delivery Date: ${str}`;
				}
			},
			productsCSV() {
				var newproducts = [];
				var products = this.products;
				products.forEach((item) => {
					var price_details = "";
					var qty = "";

					if (item.is_subscription == 1) {
						price_details = `$ ${this.displayNumberWithComma(item.price)}/${
							item.product.unit
						}`;
						qty = `${item.subscription_weeks} weeks`;
					}

					if (item.is_subscription == 0) {
						price_details = `$ ${this.displayNumberWithComma(item.price)}/${
							item.product.unit
						}`;
						qty = `${item.updated_quantity}`;
					}

					var sub_total = "";

					if (item.is_subscription == 1) {
						sub_total = this.displayNumberWithComma(item.subscription_price);
					}

					if (item.is_subscription == 0) {
						sub_total = this.displayNumberWithComma(
							item.price * item.updated_quantity
						);
					}

					var data = {
						product_name: item.product.name,
						price_details: price_details,
						sub_total: sub_total,
						unit: item.product.unit,
						x: "  X  ",
						sign: "$",
						quantity: item.updated_quantity,
						qty: qty,
					};
					newproducts.push(data);
				});
				return newproducts;
			},

			totalAmount() {
				if (this.products.length == 0) {
					return 0.0;
				} else {
					let total = 0;
					this.products.forEach((product) => {
						total = total + product.price * product.updated_quantity;
					});
					return total;
				}
			},

			// totalAmount() {
			//   let total = 0;
			//   let products = this.order_products;
			//   products.forEach(cart => {
			//     total = total + cart.price * cart.updated_quantity;
			//   });
			//   return total;
			// },

			getDiscount() {
				let discount = 0;
				discount = this.totalAmount * (this.order.discount_percentage / 100);
				return discount;
			},

			getCouponDiscount() {
				return this.order.atr_coupon_discount;
			},

			getTax() {
				if (this.products.length == 0) {
					return 0.0;
				} else {
					let tax = 0;
					this.products.forEach((product) => {
						tax = tax + product.tax_amount * product.updated_quantity;
					});
					return tax;
				}
			},

			OverAllTotal() {
				let total = 0;
				//total - discount;
				total = this.totalAmount - this.getDiscount;
				total = total - this.getCouponDiscount;
				total = total + parseFloat(this.order.delivery_fee);
				total = total + parseFloat(this.getTax);
				return total;
			},
		},
	};
</script>
<style lang="scss" scoped>
	.list-edit-bg-color {
		background: #ffe1e6;
		//   opacity: 0.5;
	}
	.qty-input {
		border: none;
		border-bottom: 2px solid black;
		width: 50px;
		padding: 0px;
		margin: 0px;
	}
	.btn-success-2 {
		color: gray !important;
		background-color: rgb(51, 159, 37, 0.3) !important;
		// 51, 159, 37

		border-color: rgb(51, 159, 37, 0.5) !important;
	}

	.status-awaiting {
		line-height: 1.5;
		color: #4dbd74 !important;
	}

	.status-hold {
		line-height: 1.5;
		color: #ffc107 !important;
	}

	.status-ready {
		line-height: 1.5;
		color: #17a2b8 !important;
	}
</style>
