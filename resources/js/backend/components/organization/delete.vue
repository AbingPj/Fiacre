<template>
	<div>
		<!-- Modal -->
		<div
			class="modal fade"
			id="deleteOrgModal"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h6 class="modal-title">Remove Organization</h6>
						<button
							type="button"
							class="close"
							data-dismiss="modal"
							aria-label="Close"
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						Are you sure to delete this organization:
						<b>{{ name }}</b> ?
						<br />
						<br />
						<br />
						<div class="float-right">
							<button class="btn btn-danger" @click="deleteOrg()">
								Delete
							</button>
							<button class="btn btn-secondary" data-dismiss="modal">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				name: "",
				id: "",
				action: "",
			};
		},
		methods: {
			deleteOrg() {
				LoadingOverlay();
				axios
					.post(`/admin/api/deleteOrganization/${this.id}`)
					.then((res) => {
						console.log(res);
						//   $("#deleteOrgModal").modal("hide");
						//   LoadingOverlayHide();
						window.location.href = "/admin/organization";
					})
					.catch((err) => {
						alert("semethingwentwrong");
						$("#deleteOrgModal").modal("hide");
						LoadingOverlayHide();
					});
			},
		},
	};
</script>
