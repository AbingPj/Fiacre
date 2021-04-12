<template>
    <div>
	<div
		class="modal fade"
		id="referModal"
		tabindex="-1"
		role="dialog"
		aria-labelledby="referModalLabel"
		aria-hidden="true"
		style="padding: 0px !important"
        data-backdrop="static"
	>
		<div
			class="modal-dialog modal-dialog-centered referral-modal-dialog"
			role="document"
		>
			<div class="modal-content">
				<div class="modal-body referral-modal-body">
					<button
						class="btn-close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<i class="fa fa-times-circle" aria-hidden="true"></i>
					</button>
                    <table class="table refer-table">
                        <tr>
                            <td><strong>Referral Name:</strong></td>
                            <td><strong>Referral Amount:</strong></td>
                            <td><strong>Status:</strong></td>
                        </tr>
                        <tr v-for="referral in data.details" :key="referral.id">
                            <td>{{ referral.user.full_name }}</td>
                            <td>{{ referral.referral_amount }}</td>
                            <td>
                                <div v-if="referral.status_name === 'Success'">
                                    <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>Success
                                </div>
                                <div v-if="referral.status_name === 'Pending'">
                                    <i class="fa fa-hourglass mr-2" aria-hidden="true"></i>Pending
                                </div>
                                <div v-else></div>
                            </td>
                        </tr>
                    </table>
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
                data: {},
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.referral-modal-dialog {
		max-width: 700px;
        z-index:999999;
	}

	.referral-modal-body {
		padding: 40px 20px;
	}

	.btn-close {
		position: absolute;
		top: 10px;
		right: 10px;
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}
    .refer-table {
        border-bottom:1px solid #dee2e6
    }

</style>


