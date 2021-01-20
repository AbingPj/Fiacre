<template>
	<div class="p-3">
		<div class="my-2">
			<h6>Select Partner (Organization)</h6>
			<div class="row mb-2">
				<div class="col-12">
					<p>
						<i>Your Address:"{{ address }}"</i>
					</p>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-12">
					<!-- <v-select
                        label="org_name"
						:options="organizations"
                        :reduce="org => org.id"
						:multiple="false"
						:disabled="false"
						:clearable="true"
						:searchable="true"
						:filterable="true"
						:taggable="true"
						:no-drop="false"
						:push-tags="true"
						:select-on-tab="true"
						placeholder="Select Partner"
					></v-select> -->

                     <v-select
                        label="org_name"
                        v-model="selectedOrganization"
                        :reduce="org => org.id"
                        :options="organizations"
                        :clearable="false"
                        placeholder="Please Select Partner"
                      ></v-select>
				</div>
			</div>
		</div>
		<div class="d-flex">
			<div class="my-4 w-50 text-left">
				<button class="btn btn-link btn-sm" @click="back()">
					Back To Selecting Address
				</button>
			</div>
			<div class="my-4 w-50 text-right">
				<button @click="seeProducts()" class="btn btn-info btn-sm">
					See Products
				</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["address","organizations"],
		data() {
			return {
                // organizations: [],
                selectedOrganization:null,
			};
		},
		methods: {
			back() {
				LoadingOverlay();
				setTimeout(() => {
					this.$parent.prev();
					LoadingOverlayHide();
				}, 1000);
			},
			seeProducts() {
				LoadingOverlay();
				setTimeout(() => {
					LoadingOverlayHide();
				}, 3000);
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
