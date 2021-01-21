<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-sitemap"></i> Select Organization for {{product.name}}
				</h2>
				<br />
			</div>
			<div class="col-md-6">
                <button class="btn btn-success float-right" @click="saveChanges()">Save Changes</button>
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
								<!-- <th scope="col">#</th> -->
								<th class="no-sort">
									<input
										v-model="checkAll"
										type="checkbox"
										@change="checkAllClick(checkAll)"
									/>
								</th>
                                <th>Selected</th>
								<th>Organization Name</th>
								<th>Type</th>
								<th>OptionC Id</th>

							</tr>
						</thead>
						<tbody>
							<tr v-for="(item, index) in organizations" :key="index">
								<td>
									<input
										type="checkbox"
										:checked="item.selected == true"
                                        @change="checkItem(item.id)"
									/>
								</td>
                                <td>
									{{ item.selected ? "Yes" : "No" }}
								</td>
								<td>
									{{ item.org_name }}
								</td>
								<td>
									{{ item.atr_type_label }}
								</td>
								<td>
									{{ item.org_optionc_id }}
								</td>

								<!-- <td>
                    <span v-for="(sub, index2) in item.sub_categories" :key="index2">{{sub.name}},</span>
                  </td> -->
							</tr>
						</tbody>
					</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["product_id", "product"],
		data() {
			return {
				organizations: [],
				checkAll: false,
			};
		},
		created() {
			this.getOrganization(this.product_id);
		},
		methods: {
            saveChanges(){
                LoadingOverlay();
                var data = {
                    organizations: this.organizations,
                    product_id: this.product_id,
                }
                axios.post('/api/admin/product/productSelectOrganizationSaveChanges',data)
                .then(res => {
                    console.log(res)
                    LoadingOverlayHide();
                    alert('success');
                })
                .catch(err => {
                    console.error(err);
                    LoadingOverlayHide();
                     alert('something went wrong');
                })
            },
            checkItem(org_id){
                var objIndex = this.organizations.findIndex((obj => obj.id == org_id));
                this.organizations[objIndex].selected =  !this.organizations[objIndex].selected;
            },
			checkAllClick() {
				console.log(this.checkAll);
				if (this.checkAll == true) {
					this.organizations.map(function (x) {
						x.selected = true;
						return x;
					});
				} else {
					this.organizations.map(function (x) {
						x.selected = false;
						return x;
					});
				}
			},
			getOrganization(product_id) {
				axios
					.get("/api/admin/productsorganizations/" + product_id)
					.then((res) => {
						this.organizations = res.data;
						this.prepareDataTable();
					})
					.catch((err) => {
						console.error(err);
					});
			},
			prepareDataTable() {
				$(document).ready(function () {
					$("#customers-table").DataTable({
						order: [],
						columnDefs: [
							{
								targets: "no-sort",
								orderable: false,
							},
						],
						lengthMenu: [
							[10, 25, 50, -1],
							[10, 25, 50, "All"],
						],
						iDisplayLength: -1,
					});
				});
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
