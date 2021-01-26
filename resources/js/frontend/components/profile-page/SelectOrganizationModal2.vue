<template>
	<div>
		<div
			class="modal fade"
			id="selectOrganizationModal3"
			tabindex="-1"
			role="dialog"
			aria-labelledby="selectOrganizationModal3Label"
			aria-hidden="true"
		>
			<div class="modal-dialog product-modaol-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body product-modal-body">
						<button
							class="btn-close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<i class="fa fa-times-circle" aria-hidden="true"></i>
						</button>
						<div class="container product-container">
							<div class="row">
								<div class="col">
									<h5>Select Organization</h5>
									<div class="input-group mt-3 mb-0 border-info">
										<input
											id="searchInput"
											v-model="search"
											type="text"
											class="form-control"
											placeholder="Search Organization`s name or organization`s OptionC ID"
											@keyup="searchType()"
										/>
										<!-- <div class="input-group-append">
                      <span class="input-group-text">Filter</span>
                    </div>-->
									</div>
									<div
										class="border border-info overflow-auto"
										style="min-height: 250px; max-height: 250px"
									>
										<ul class="list-group list-group-flush">
											<li
												v-for="(item, index) in organization"
												:key="index"
												class="list-group-item"
											>
												<!-- <img
                          :src="item.image_link"
                          style="width: 25px; height: 25px; object-fit: cover;"
                        /> -->
												{{ item.org_name }}
												<br />
												<span style="font-size: 12px"
													>optionC Id:
													<b>{{ item.org_optionc_id }}</b></span
												>
												<button
													type="button"
													class="btn btn-sm float-right"
													:class="
														item.selected == false
															? 'btn-outline-info'
															: 'btn-info'
													"
													@click="select(item)"
													:disabled="
														item.selected == true ? true : false
													"
												>
													select
												</button>
											</li>
										</ul>
									</div>
									<div>
										<button
											class="btn btn-success float-right mt-3"
											data-dismiss="modal"
											aria-label="Close"
										>
											Done
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.product-modaol-dialog {
		max-width: 700px;
	}
	.product-modal-body {
		padding: 40px 40px;
	}
	// .product-container {
	//   //   background-color: red;
	//   position: relative;
	//   padding: 0px;
	// }
	.btn-close {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}
</style>

<script>
	export default {
		props: ["selected_products"],
		data() {
			return {
				organization: [],
				search: "",
				timer: null,
			};
		},
		created() {
			this.getProducts();
		},
		methods: {
			select(data) {
                this.$parent.org_id = data.id;
                this.$parent.organization = data;
                $("#selectOrganizationModal3").modal("hide");
			},

			searchType() {
				if (this.timer) {
					clearTimeout(this.timer);
					this.timer = null;
				}
				this.timer = setTimeout(() => {
					this.getProducts();
				}, 600);
			},

			async getProducts() {
				console.log("getting org");
				let param;
				let products;
				param = {
					search: this.search,
				};
				await axios({
					method: "get",
					url: "/api/OrganizationSelection",
					params: param,
				}).then((res) => {
					// console.log(res.data.data);
					this.organization = res.data.data;
					// this.getSelected(products);
				});
			},
			getSelected(data) {
				let selectedProducts = this.selected_products;
				data.forEach((product) => {
					selectedProducts.forEach((sel) => {
						if (product.id == sel.id) {
							product.selected = true;
						}
					});
				});
				this.products = data;
			},
		},
		mounted() {
			let self = this;
			// $("#selectOrganizationModal2").modal("show");

			$("#selectOrganizationModal3").on("shown.bs.modal", function () {
				self.getProducts();
				$("#searchInput").trigger("focus");
			});

			$("#selectOrganizationModal3").on("hidden.bs.modal", function () {
				//   console.log("SHIT CLOSE");
				self.search = "";
			});
		},
	};
</script>
