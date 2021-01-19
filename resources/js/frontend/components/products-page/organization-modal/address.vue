<template>
	<div class="p-3">
		<div class="my-2">
			<h6>Enter Your Address</h6>
			<div class="row mb-2">
				<div class="col-12">
					<input
                        v-model="street"
						class="form-control form-control-sm"
						type="text"
						placeholder="Street Address"
					/>
				</div>
			</div>
			<div class="row my-2">
				<div class="col-4">
					<v-select
                        v-model="city"
						@search="fetchOptions"
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
						placeholder="Select Town/County/City"
					></v-select>
				</div>
				<div class="col-4">
					<region-select
                        v-model="state"
						country="United States"
						className="form-control form-control-sm"
						:countryName="true"
						:regionName="true"
						placeholder="Select State"
                        v-select
					/>
				</div>
				<div class="col-4">
					<input
                        v-model="zip"
						class="form-control form-control-sm"
						type="text"
						placeholder="Zip Code"
					/>
				</div>
			</div>
		</div>
		<div class="my-4 text-right">
			<button class="btn btn-info btn-sm" @click="find()">Next - Find Nearest Organization</button>
		</div>
	</div>
</template>
<script>
export default {
    data() {
			return {
                street:"",
                city:"",
                state:"",
                zip:"",
				cities: [],
			};
		},
		methods: {
            find(){
                LoadingOverlay();
                this.$parent.Address = this.street + ", " + this.city  + ", " + this.state  + ", " + this.zip;
                setTimeout(() => {
                     LoadingOverlayHide();
                     this.$parent.next();
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
}
</script>
