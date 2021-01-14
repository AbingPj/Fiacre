<template>
	<div class="d-flex flex-column min-vh-100">
		<div class="row">
			<div class="col-md-6">
				<h2 class="card-title mb-0">
					<i class="fas fa-sitemap"></i> Add New Organization
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
					<label for="name">Organization Name (Parish/School)</label>
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
					<label for="name">Email</label>
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
						type="number"
					/>
				</div>
				<div class="form-group">
					<label for="name">Organization Type</label>
					<input
						v-model="org.type"
						id="type"
						name="type"
						class="form-control rounded-0"
						type="number"
					/>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-12">
				<button class="mr-2 btn btn-success-2 rounded-0" @click="addOrganization()">
					<i class="fas fa-save"></i> Save
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				org: {
					name: "",
					email: "",
					optionc_id: "",
					type: "",
					lat: "",
					lng: "",
					state: "",
					cityprov: "",
					street: "",
					zipcode: "",
					contact_land: "",
					contact_mobile: "",
					contact_title: "",
					contact_fname: "",
					contact_lname: "",
					contact_suffix: "",
					diocese: "",
					website: "",
					logo: "",
				},
			};
		},

		mounted() {
			$(document).ready(function () {
				$("#customers-table").DataTable({
					lengthMenu: [
						[10, 25, 50, -1],
						[10, 25, 50, "All"],
					],
					iDisplayLength: -1,
				});
			});
		},
		created() {},
		methods: {
			addOrganization() {
                let formBody = new FormData();
                formBody.append('name', this.org.name);
                formBody.append('email', this.org.email);
                formBody.append('optionc_id', this.org.optionc_id);
                formBody.append('', this.org.optionc_id);
				axios
					.post(`/admin/api/addOrganization`, formBody)
					.then((res) => {
						alert("success");
					})
					.catch((err) => {
						console.error(err);
						alert("Something went wrong");
					});
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


<style lang="scss" scoped>
	.form-group {
		margin-bottom: 2rem;
	}
	.form-control {
		//   background: #f0f3f5;
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
