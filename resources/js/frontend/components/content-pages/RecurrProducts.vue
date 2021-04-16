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
                                            <img :src="prod.image" />
                                        </td>
                                        <td class="prod-name">
                                            <span>{{ prod.name }}</span>
                                        </td>
                                        <td class="text-right">
                                            <button
                                                type="button"
                                                @click="preview(prod)"
                                                class="btn btn-success btn-sm"
                                            >
                                                Details
                                            </button>
                                            <button
                                                type="button"
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
    </div>
</template>

<script>
export default {
  data() {
    return {
      recurProds: [
          {
              image: "/storage/products/seeds/1.jpg",
              name: "Product 1",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sagittis dui, eu viverra nisl sodales sed. Mauris sed magna lobortis",
              price: 1,
              unit: "kg",
              category: "Fruit",
              id: "1"
          },
          {
              image: "/storage/products/seeds/2.jpg",
              name: "Product 2",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sagittis dui, eu viverra nisl sodales sed. Mauris sed magna lobortis",
              price: 2,
              unit: "kg",
              category: "Vegetable",
              id: "2"
          },
          {
              image: "/storage/products/seeds/3.jpg",
              name: "Product 3",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sagittis dui, eu viverra nisl sodales sed. Mauris sed magna lobortis",
              price: 3,
              unit: "kg",
              category: "Fruit",
              id: "3"
          }
      ],
    };
  },
  methods: {
    preview(prod) {
        this.$refs.preview_modal.product = prod;
        this.$refs.preview_modal.preview_image =
            prod.image == null ? "/img/no-product-image.png" : prod.image;
        this.$refs.preview_modal.category =
            prod.category == null ? "" : prod.category;

        $("#previewModal").modal("show");
    },      
  },
  created() {

  },
};
</script>
