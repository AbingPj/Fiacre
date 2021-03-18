<template>
	<div
		class="modal fade"
		id="productsSubModal2"
		tabindex="-1"
		role="dialog"
		aria-labelledby="exampleModalLabel"
		aria-hidden="true"
		style="padding: 0px !important"
        data-backdrop="static"
	>
		<div
			class="modal-dialog modal-dialog-centered product-modaol-dialog"
			role="document"
		>
			<div class="modal-content">
				<div class="modal-body product-modal-body">
                    <h6>Select Product to Swap</h6>
					<button
						class="btn-close"
						data-dismiss="modal"
						aria-label="Close"
					>
						<i class="fa fa-times-circle" aria-hidden="true"></i>
					</button>
					<div class="container product-container">

                        <div class="d-flex flex-wrap">
                            <div class="p-3" v-for="(item, index) in products" :key="index">
                                <div>
                                    <img :src="item.image_link" alt="" style="width:105px; height:95px; object-fit:cover;">
                                </div>
                                <div class="text-center">{{item.name}}</div>
                                <div class="text-center">{{ item.qty }}/{{ item.unit }}</div>
                                <div><button type="button" @click="sub(item)" class="btn btn-success btn-sm btn-block">Select</button></div>
                            </div>
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
                data: {},
                index: null,
                products: [],
			};
		},
		methods: {
            sub(item){
                // this.data = item;
                item.qty = this.data.qty;
                item.sub = "unsub";

                this.$parent.selected_products[this.index] = item;
                this.$parent.updateProducts(item, this.index);
                // console.log(this.$parent.product);
                 $("#productsSubModal2").modal("hide");
            },
            openModal(){
                LoadingOverlay();
                let params = {
                    id:this.data.id,
                    price:this.data.price,
                }
                axios.get(`/prod/getProductsToSwap`,{
                    params:params,
                })
                .then(res => {
                    console.log(res)
                    this.products = res.data.data;
                    $("#productsSubModal2").modal("show");
                    LoadingOverlayHide();
                })
                .catch(err => {
                    console.error(err);
                    LoadingOverlayHide();
                })
            }

		},
	};
</script>

<style lang="scss" scoped>
	@import "resources/sass/mixins";

	.product-modaol-dialog {
		max-width: 850px;
        min-height: 500px;
	}

	.product-modal-body {
		padding: 20px 20px;
	}

	.product-container {
		//   background-color: red;
		position: relative;
		padding: 0px;
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

	.plusminus {
		background: transparent;
		border: 0px;
		color: gray;
		font-size: 20px;
	}

	.product-image {
		object-fit: cover;
		width: 100%;
		height: 200px;
		border-radius: 8px 8px 8px 8px;
	}

	.p-image {
		padding-right: 20px;
		margin-right: 0px;
	}

	.p-content {
		padding-left: 0px;
		margin-left: 0px;

		@include mobile {
			padding: 10px 20px 10px 20px;
		}
	}

	.minmax-color {
		color: #007bff;
	}
</style>
