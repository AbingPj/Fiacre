<template>
	<div
		id="productSelectOrgModal"
		class="modal fade"
		tabindex="-1"
		role="dialog"
		aria-labelledby="myLargeModalLabel"
		aria-hidden="true"
	>
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<!-- Modal Header -->
				<!-- <div class="modal-header">
					<h4 class="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">
						&times;
					</button>
				</div> -->

				<!-- Modal body -->
				<div class="modal-body">
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
	</div>
</template>
<script>
	export default {
		props: ["product_id"],
		data() {
			return {
				organizations: [],
				checkAll: false,
			};
		},
		created() {
			// this.getOrganization(this.product_id);
		},
		methods: {
            checkItem(org_id){
                var objIndex = myArray.findIndex((obj => obj.id == org_id));
                this.organizations[objIndex].selected = true;
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
