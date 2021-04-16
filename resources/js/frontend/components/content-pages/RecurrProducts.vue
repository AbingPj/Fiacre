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
        .prod-table {
            width:100%;
            border:1px solid #dee2e6;
            margin-bottom:0;
        }
        .prod-table td {
            vertical-align: middle;
        }
        .prod-table .prod-qty button.plusminus {
            border:none;
            background:none;
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
                                        <td width="20%">
                                            <img :src="prod.product_current_details.image_link" />
                                        </td>
                                        <td class="prod-name">
                                            <div>{{ prod.product_current_details.name }}</div>
                                            <div>
                                                <b>
                                                $ {{displayNumberWithComma(prod.product_current_details.price)}} / {{prod.product_current_details.unit}}
                                                </b>
                                            </div>
                                        </td>
                                        <td class="prod-qty">
											<span class="qty-options">
												<b>Qty:</b>
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
											</span><br/>
                                        </td>
                                        <td class="text-right">
                                            <button
                                                type="button"
                                                @click="preview(prod.product_current_details)"
                                                class="btn btn-success btn-sm"
                                            >
                                                Details
                                            </button>
                                            <button
                                                type="button"
                                                @click="removeConfirmation(prod)"
                                                class="btn btn-danger btn-sm"
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
                                Delivery / Pickup Schedule
                            </div>
                            <div class="recur-prod-body">

                            </div>                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <RecurProductsModal ref="preview_modal"></RecurProductsModal>
        <RecurProductsQtyErrModal></RecurProductsQtyErrModal>
        <RecurProductsRemove ref="remove_modal"></RecurProductsRemove>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recurProds: [],
            recurScheds: []
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
        getRecurringScheds() {
            axios
            .get("/getUserRecurringProductSchedules")
            .then((res) => {
                console.log('sched: ' + res.data);
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
        }        
    },
    mounted() {
        this.getRecurringScheds()
        this.getRecurringProds()
    }
};

</script>
