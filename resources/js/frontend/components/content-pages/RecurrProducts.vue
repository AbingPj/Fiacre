<style lang="scss">
#recurring-products {
  margin-top: -50px;
  min-height: 100vh;

  background-attachment: fixed;

  .recurring-container {
    padding: 100px 0px 100px 0px;

    .recurring-container-2 {
      padding: 30px 30px 10px;
      margin: 0px;
      background-color: rgba(255, 255, 255, 1);

        .title {
            color: #88c43a;
        }

        .recur-col {
            border:1px solid rgba(0,0,0,.125);
            border-radius:5px;
        }
        .recur-prod-heading {
            text-align:center;
            font-weight:bold;
            font-size:0.9rem;
            padding:10px;
            background-color:rgba(0,0,0,.03);
            border-bottom:1px solid rgba(0,0,0,.125);
        }
        .recur-prod-body {
            padding:20px;
        }
        .prod-table, .sched-table {
            width:100%;
            border:1px solid #dee2e6;
            margin-bottom:0;
        }
        .sched-table tr {
            border-bottom:1px solid #dee2e6;
        }
        .prod-table td,  .sched-table td {
            vertical-align: middle;
        }
        .prod-table .prod-qty button.plusminus {
            border:none;
            background:none;
        }
        .prod-table .prod-qty {
            vertical-align: middle;
        }
        .prod-table .prod-qty .qty-options {
            display:inline-block;
        }
        @media only screen and (max-width: 420px) {
            .prod-img {
                display:none;
            }
        }
        .content-headers {
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
            color: #88c43a;
            }
            .fa-map-pin {
                color: rgb(51, 159, 37);
                margin-right:5px;
            }
            .btn-success {
                background: #88c43a;
                border-color: #88c43a;
                margin-left:-4px;
                margin-top:-4px;
            }
            .form-control {
                width:200px;
                display:inline-block;
                border-radius: 0;
                margin-left:10px;
            }

        }
    }
  }
}
</style>



<template>
    <div id="recurring-products">
        <div class="container recurring-container">
            <div class="container recurring-container-2">
                <div class="row">

                    <div class="col-sm-12 col-md-12 mb-3">
                        <div class="title">
                            <h2>My Recurring Products</h2>
                        </div>
                    </div>

                    <div class="col-sm-12 col-md-6">
                        <div class="recur-col recur-prod-cont">
                            <div class="recur-prod-heading">
                                Selected Recurring Products
                            </div>
                            <div class="recur-prod-body">

                                <table class="table prod-table">

                                    <tr v-for="prod in recurProds" :key="prod.id">
                                        <td width="20%" class="prod-img">
                                            <img :src="prod.product_current_details.image_link" />
                                        </td>
                                        <td class="prod-name" width="20%">
                                            <div>{{ prod.product_current_details.name }}</div>
                                            <div>
                                                <b>
                                                $ {{displayNumberWithComma(prod.product_current_details.price)}} / {{prod.product_current_details.unit}}
                                                </b>
                                            </div>
                                        </td>
                                        <td class="prod-qty text-center" width="20%" val>
											<span class="qty-options">
												<div class="mb-1"><b>Quantity:</b></div>
                                                <div style="white-space:nowrap;">
												<button
													type="button"
													class="plusminus"
													@click="subQty(prod.id, prod.qty)"
												>
													<i
														class="fa fa-minus-circle"
														aria-hidden="true"
													></i>
												</button>
												<b>{{ prod.qty }}</b>
												<button
													type="button"
													class="plusminus"
													@click="addQty(prod.id, prod.qty)"
												>
													<i
														class="fa fa-plus-circle"
														aria-hidden="true"
													></i>
												</button>
                                                </div>
											</span><br/>
                                        </td>
                                        <td class="text-right" width="20%">
                                            <button
                                                type="button"
                                                @click="preview(prod.product_current_details)"
                                                class="btn btn-success btn-sm w-100 mb-1"
                                            >
                                                Details
                                            </button>
                                            <button
                                                type="button"
                                                @click="removeConfirmation(prod)"
                                                class="btn btn-danger btn-sm w-100"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>

                                </table>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6">
                        <div class="recur-col deliv-area-cont">
                            <div class="recur-prod-heading">
                                Recurring Product Order Schedule
                            </div>
                            <div class="recur-prod-body">
                                <div v-if="recurSettingsBtn" class="text-center">
                                    <button
                                        type="button"
                                        @click="recurSetModal()"
                                        class="btn btn-primary btn-sm mb-1"
                                    >
                                        Set Recurring Settings
                                    </button>
                                </div>
                                <div v-else>
                                    <div style="font-size:15px;"><b>{{settings.label}}</b></div>
                                    <div class="mb-2">Type: {{settings.label2}}</div>
                                    <table class="sched-table w-100" cellspacing="0" cellpadding="10">
                                        <tr>
                                            <td width="33%" class="font-weight-bold">Date</td>
                                            <td width="33%" class="font-weight-bold">Status</td>
                                            <td width="33%" class="text-center font-weight-bold">Action</td>
                                        <tr>
                                        <tr v-for="sched in recurScheds" :key="sched.id">
                                            <td>{{ sched.date_format }}</td>
                                            <td>
                                                <span v-if="sched.date_cancel === true" style="color:#dc3545;font-weight:bold;">Cancelled Order</span>
                                                <span v-if="sched.date_cancel === false" style="color:#218838;font-weight:bold;">Ready to Order</span>
                                            </td>
                                            <td>
                                                <div v-if="sched.date_cancel === true" class="text-center">
                                                    <button
                                                        type="button"
                                                        @click="uncancelSched(sched.date_cancel_id)"
                                                        class="btn btn-success btn-sm">
                                                        Uncancel
                                                    </button>
                                                </div>
                                                <div v-if="sched.date_cancel === false" class="text-center">

                                                    <button
                                                        type="button"
                                                        @click="cancelSched(sched.date_cancel_date_format)"
                                                        class="btn btn-danger btn-sm">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <RecurProductsModal ref="preview_modal"></RecurProductsModal>
        <RecurProductsQtyErrModal></RecurProductsQtyErrModal>
        <RecurProductsRemove ref="remove_modal"></RecurProductsRemove>
        <RecurProductsSettingsModal></RecurProductsSettingsModal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recurProds: [],
            recurScheds: [],
            recurSettings: [],
            recurSettingsBtn: false,
            settings: {},
        };
    },
    methods: {
        getRecurringProds() {
            axios
            .get("/getUserRecurringProducts")
            .then((res) => {
                //console.log(res.data);
                this.recurProds = res.data
            })
            .catch((err) => {
                console.log(err.response.data);
            });
        },
        getRecurringSettings() {
            axios
            .get("/getUserRecurringSettings")
            .then((res) => {
                //console.log(res.data);
                this.recurSettingsBtn = false
                this.settings = res.data;
                this.getRecurringScheds()
            })
            .catch((err) => {
                console.log(err.response.data);
                if (err.response.data === "User has not set recurring settings") {
                    this.recurSettingsBtn = true
                }
            });
        },
        getRecurringScheds() {
            axios
            .get("/getUserRecurringProductSchedules")
            .then((res) => {
                console.log(res.data);
                this.recurScheds = res.data
            })
            .catch((err) => {
                console.log(err.response.data);
            });
        },
        subQty(pid, pqty) {
            var fqty = pqty - 1
            if (fqty < 1) {
                $("#errorQtyModal").modal("show");
            } else {
            LoadingOverlay();
                axios
                .post("/updateQuantityRecurringProduct", {
                    id: pid,
                    qty: fqty
                })
                .then((res) => {
                    this.getRecurringProds()
                    LoadingOverlayHide();
                })
                .catch((err) => {
                    console.error(err);
                    LoadingOverlayHide();
                });
            }
        },
        addQty(pid, pqty) {
            var fqty = pqty + 1
            LoadingOverlay();
            axios
            .post("/updateQuantityRecurringProduct", {
                id: pid,
                qty: fqty
            })
            .then((res) => {
                this.getRecurringProds()
                LoadingOverlayHide();
            })
            .catch((err) => {
                console.error(err);
                LoadingOverlayHide();
            });
        },
        preview(prod) {
            //test
            this.$refs.preview_modal.product = prod;
            this.$refs.preview_modal.preview_image =
                prod.image_link == null ? "/img/no-product-image.png" : prod.image_link;
            this.$refs.preview_modal.category =
                prod.category.name == null ? "" : prod.category.name;

            $("#previewModal").modal("show");
        },
        recurSetModal() {
            $("#recurrSet_modal").modal("show");
        },
        removeConfirmation(prod) {
            this.$refs.remove_modal.productName = prod.product_current_details.name;
            this.$refs.remove_modal.productID = prod.id;
            $("#remove_modal").modal("show");
        },
        displayNumberWithComma(value) {
            if (value == null) {
                return "0.00";
            } else {
                var n = parseFloat(value).toFixed(2);
                var withCommas = Number(n).toLocaleString("en", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
                });
                return withCommas;
            }
        },
        cancelSched(canceldate) {
            LoadingOverlay();
            axios
                .post("/setUserRecurringCancelSchedule", {
                    date: canceldate
                })
                .then((res) => {
                    LoadingOverlayHide();
                    this.getRecurringSettings()
                })
                .catch((err) => {
                    console.error(err);
                    LoadingOverlayHide();
                    this.getRecurringSettings()
                });
        },
        uncancelSched(id) {
            console.log('id is' + id)
            LoadingOverlay();
            axios
                .post("/setUserRecurringRemoveCancelSchedule", {
                    cancel_id: id
                })
                .then((res) => {
                    LoadingOverlayHide();
                    this.getRecurringSettings()
                })
                .catch((err) => {
                    console.error(err);
                    LoadingOverlayHide();
                    this.getRecurringSettings()
                });
        }
    },
    mounted() {
        this.getRecurringSettings()
        this.getRecurringProds()
    }
};

</script>
