<template>
  <form id="myForm" name="myForm" @submit.prevent="save()">
    <div class="d-flex flex-column min-vh-100">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2 class="card-title mb-0">
              <div class="d-flex">
                <div class="mr-2">
                  <a
                    href="/admin/products"
                    class="btn btn-success float-right rounded-0 text-light"
                  >
                    <i class="fas fa-chevron-circle-left"></i>
                  </a>
                </div>
                <div>Products</div>
              </div>
            </h2>
            <br />
            <h3 class="text-success">
              <b>ADD NEW BUNDLE PRODUCT</b>
            </h3>
          </div>
          <!-- <div class="col-md-6">
          <h2></h2>
          </div>-->
        </div>
        <br />
        <div class="row">
          <div class="col">
            <div class="row">
              <div class="col-md-7 col-sm-12 p-2 m-2 border">
                <div class="d-flex">
                  <div>
                    <button
                      type="button"
                      class="btn btn-success btn-upload"
                      @click="$refs.image_file_input.click()"
                    >
                      <i class="fas fa-camera-retro"></i>
                      <br />Upload Image
                    </button>
                    <input
                      type="file"
                      ref="image_file_input"
                      name="image_file"
                      @change="onFileChange"
                      class="d-none"
                    />
                    <!-- <input type="file" name="image_file" @change="onFileChange()" /> -->
                  </div>
                  <div>
                    <div id="preview">
                      <img v-if="url" :src="url" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mt-4">
              <div class="form-group">
                <label for="name">Add A Product</label>
                <div class="form-row">
                  <div class="col">
                    <button
                      type="button"
                      @click="selectProductsModal()"
                      class="btn btn-info"
                    >Select Product</button>
                  </div>
                  <!-- <div class="col">
                  <input type="text" class="form-control" placeholder="SKU" />
                </div>
                <div class="col">
                  <button type="button" class="btn btn-info">
                    <i class="fas fa-plus-circle"></i>
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fas fa-times-circle"></i>
                  </button>
                  </div>-->
                </div>
              </div>
            </div>

            <div class="row mt-3">
              <label for="season">Included Products:</label>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th style="width:75px;">Image</th>
                    <th style="width:120px;">Quantity</th>
                    <th style="width:170px;">Regular Price</th>
                    <th style="width:170px;">Member Price</th>
                    <th style="width:170px;">Wholesale Price</th>
                    <th style="width:50px;"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in selectedProducts" :key="index">
                    <td>{{item.name}}</td>
                    <td>
                      <img
                        :src="item.image_link"
                        style="width: 50px; height: 50px; object-fit: cover;"
                      />
                    </td>
                    <td>
                      <div class="input-group">
                        <input v-model="item.qty" class="form-control" @keypress="onlyNumber" />
                        <div class="input-group-append">
                          <span class="input-group-text">{{item.unit}}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span
                        class="font-italic"
                        style="font-size:10px;"
                      >( {{item.qty}} x {{item.price}} )</span>
                      <span class="float-right">{{displayNumberWithComma(item.price * item.qty)}}</span>
                    </td>
                    <td>
                      <span
                        class="font-italic"
                        style="font-size:10px;"
                      >( {{item.qty}} x {{item.member_price}} )</span>
                      <span
                        class="float-right"
                      >{{displayNumberWithComma(item.member_price * item.qty)}}</span>
                    </td>
                    <td>
                      <span
                        class="font-italic"
                        style="font-size:10px;"
                      >( {{item.qty}} x {{item.wholesale_price}} )</span>
                      <span
                        class="float-right"
                      >{{displayNumberWithComma(item.wholesale_price * item.qty)}}</span>
                    </td>
                    <th style="width:50px;">
                      <button
                        type="button"
                        class="btn btn-sm btn-danger"
                        @click="removeSelectedProduct(item)"
                      >
                        <i class="far fa-times-circle"></i>
                      </button>
                    </th>
                  </tr>
                </tbody>

                <tfoot>
                  <!-- <tr>
                  <th colspan="7" class="text-center">
                    <button class="btn btn-info">Select Product</button>
                  </th>
                  </tr>-->
                  <tr>
                    <th colspan="3">Total</th>
                    <th class="text-right">{{displayNumberWithComma(totalPrice)}}</th>
                    <th class="text-right">{{displayNumberWithComma(totalPriceMember)}}</th>
                    <th class="text-right">{{displayNumberWithComma(totalPriceWholesaler)}}</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th colspan="3">
                      <!-- <b-input-group prepend="Discount Percentage:" append="%">
                      <b-form-input></b-form-input>
                      </b-input-group>-->
                      <div class="input-group">
                        <div class="input-group-prepend" style="padding:5px;">Discount Percentage:</div>
                        <input
                          name="discount_percentage"
                          v-model="product.bundle_percentage"
                          type="text"
                          class="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          @keypress="onlyNumber"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">%</span>
                        </div>
                      </div>
                    </th>
                    <th class="text-right">{{displayNumberWithComma(discount)}}</th>
                    <th class="text-right">{{displayNumberWithComma(discountMember)}}</th>
                    <th class="text-right">{{displayNumberWithComma(discountWholesaler)}}</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th colspan="3">Bundle Price</th>
                    <th class="text-right">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          class="form-control text-right"
                          :value="displayNumberWithComma(overAllTotal)"
                          readonly
                        />
                      </div>
                      <!-- {{displayNumberWithComma(overAllTotal)}} -->
                    </th>
                    <th class="text-right">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          class="form-control text-right"
                          :value="displayNumberWithComma(overAllTotalMember)"
                          readonly
                        />
                      </div>
                      <!-- {{displayNumberWithComma(overAllTotalMember)}} -->
                    </th>
                    <th class="text-right">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">$</span>
                        </div>
                        <input
                          type="text"
                          class="form-control text-right"
                          :value="displayNumberWithComma(overAllTotalWholesaler)"
                          readonly
                        />
                      </div>
                      <!-- {{displayNumberWithComma(overAllTotalWholesaler)}} -->
                    </th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
              <label
                class="text-danger"
              >Note: The Prices of Bundle Products are base on the selected products so you must to create product first. If a selected product price is updated, the prices of bundle are also updated. But oredered bundle products prices cant be change anymore.</label>
            </div>

            <div class="row mt-4">
              <div class="col-md-7">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    v-model="product.name"
                    id="name"
                    name="name"
                    class="form-control rounded-0"
                    type="text"
                    placeholder="Product Bundle Name"
                  />
                </div>

                <div class="form-group">
                  <label for="description">Description</label>
                  <textarea
                    v-model="product.description"
                    class="form-control rounded-0"
                    id="description"
                    name="description"
                    rows="6"
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="sku">SKU</label>
                  <input
                    v-model="product.sku"
                    id="sku"
                    name="sku"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "PA0001", "1A0002"'
                  />
                </div>
                <div class="form-group">
                  <label for="unit">Unit</label>
                  <input
                    v-model="product.unit"
                    id="unit"
                    name="unit"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "Pack", "Kilo", "Pc", "12oz", "Doz" ...'
                  />
                </div>

                <div class="form-group">
                  <label for="category">Category</label>
                  <select
                    v-model="selectedCategory"
                    class="form-control"
                    id="category"
                    name="category"
                    @change="categorySelectionChange()"
                  >
                    <option value="null" disabled>Select Category</option>
                    <option
                      v-for="(item, index) in propscategories"
                      :key="index"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="category">Sub Categories of {{selectedCategoryName2}}</label>
                  <select
                    v-model="selectedSubCategory"
                    class="form-control"
                    id="sub_category"
                    name="sub_category"
                  >
                    <option value="null" disabled>Select Sub Category</option>
                    <option
                      v-for="(item, index) in subcategories"
                      :key="index"
                      :value="item.id"
                    >{{item.name}}</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="tags">Tags</label>
                  <input
                    v-model="product.tags"
                    id="tags"
                    name="tags"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "Fresh", "Red", "Green", "Citrus", ... '
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="season">Season</label>
                  <input
                    v-model="product.season"
                    id="season"
                    name="season"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "Winter", "Summer", "Spring", ...'
                  />
                </div>
              </div>
              <div class="col-md-5">
                <div class="form-group">
                  <label for="minorder">Minimum Order</label>
                  <input
                    v-model="product.minorder"
                    id="minorder"
                    name="minorder"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "1"'
                    @keypress="onlyNumber"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="maxorder">Maximum Order</label>
                  <input
                    v-model="product.maxorder"
                    id="maxorder"
                    name="maxorder"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "100"'
                    @keypress="onlyNumber"
                    disabled
                  />
                </div>

            <div class="form-group">
                <label for="maxorder">Visibility</label>
                <div class="custom-control custom-switch">
                  <input
                    checked
                    type="checkbox"
                    class="custom-control-input"
                    id="visible"
                    name="visible"
                    v-model="product.visible"
                  />
                  <label class="custom-control-label" for="visible">Show/Hide</label>
                </div>
            </div>


              </div>
              <div class="col-sm-12">
                <a class="mr-2 btn btn-success-1 rounded-0" @click="preview()">
                  <i class="far fa-eye"></i> Preview
                </a>
                <button class="mr-2 btn btn-success-2 rounded-0">
                  <i class="fas fa-save"></i> Save
                </button>
                <!-- <button class="btn btn-success-2 rounded-0">Archaive</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <admin-products-preview-modal ref="preview_modal"></admin-products-preview-modal>
      <admin-select-products-modal
        ref="select_products_modal"
        :selected_products="selectedProducts"
      ></admin-select-products-modal>
    </div>
  </form>
</template>
<script>
import Errors from "../../errorClass";

export default {
  props: ["propscategories"],
  data() {
    return {
      product: {
        name: null,
        description: null,
        sku: null,
        unit: "bundle",
        category: null,
        tags: null,
        season: null,
        visible: true,
        minorder: null,
        maxorder: null,
        price: 0,
        member_price: 0,
        wholesale_price: 0,
        bundle_percentage: 0,
        selected_products: [],
        image_file: null,
      },

      selectedCategory: null,
      subcategories: [],
      selectedSubCategory: null,
      selectedCategoryName2: "",
      url: null,
      selectedProducts: [],
      feedback: "",
      errors_old: {},
      errors: new Errors(),
      //   file: null,
    };
  },

  created() {
    // this.products = this.propsproducts;
  },

  methods: {
    categorySelectionChange() {
      axios
        .get("/api/admin/subcategory/" + this.selectedCategory)
        .then((res) => {
          this.selectedSubCategory = null;
          this.subcategories = res.data.sub_categories;
          this.selectedCategoryName2 = res.data.category.name;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    save() {
      LoadingOverlay();
      //   let url = "admin/products/store/bundle";
      let url = "/api/admin/store/bundle/product";

      if (this.selectedProducts.length < 1) {
        var error = ["Please Select Products to Bundle"];
        this.showErrorMessage(error);
        window.scrollTo(0, 0);
        LoadingOverlayHide();
      } else {
        let myForm = document.getElementById("myForm");
        let formData = new FormData(myForm);
        formData.append(
          "selected_products",
          JSON.stringify(this.selectedProducts)
        );

        let params = this.product;

        axios
          .post(url, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => {
            console.log(res);
            window.location.href = res.data;
          })
          .catch((err) => {
            console.error(err);
            this.errors.record(err.response.data.errors);
            this.showErrorMessage(this.errors.getArrayOfMessages());
            window.scrollTo(0, 0);
            LoadingOverlayHide();
          });
      }
    },

    showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },

    onFileChange(e) {
      //   console.log(e);
      const file = e.target.files[0];
      this.product.image_file = file;
      this.url = URL.createObjectURL(file);
    },
    preview() {
      //   console.log(this.product);
      this.$refs.preview_modal.product = this.product;
      this.$refs.preview_modal.preview_image =
        this.url == null ? "/img/no-product-image.png" : this.url;
      this.$refs.preview_modal.category =
        this.selectedCategory == null ? "" : this.selectedCategoryName;

      $("#previewModal").modal("show");
    },
    updateVisible(data) {
      console.log(data);
      data.is_visible = !data.is_visible;
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
    selectProductsModal() {
      $("#selectProductsModal").modal("show");
    },
    addSelectedProduct(data) {
      this.selectedProducts.push(data);
    },
    removeSelectedProduct(data) {
      this.$refs.select_products_modal.products.forEach((product) => {
        if (product.id == data.id) {
          product.selected = false;
          product.qty = 1;
        }
      });

      this.selectedProducts.splice(
        this.selectedProducts.findIndex(function (i) {
          return i.id === data.id;
        }),
        1
      );
    },

    displayNumberWithComma(value) {
      var n = parseFloat(value).toFixed(2);
      var withCommas = Number(n).toLocaleString("en", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return withCommas;
    },
  },

  computed: {
    selectedCategoryName() {
      let categories = this.propscategories;
      return categories.find((x) => x.id === this.selectedCategory).name;
    },

    totalPrice() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        let total = 0;
        this.selectedProducts.forEach((selected) => {
          total = total + selected.price * selected.qty;
        });
        return total;
      }
    },

    discount() {
      let discount = 0;
      discount = this.totalPrice * (this.product.bundle_percentage / 100);
      return discount;
    },

    overAllTotal() {
      let total = 0;
      total = this.totalPrice - this.discount;
      return total;
    },

    totalPriceMember() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        let total = 0;
        this.selectedProducts.forEach((selected) => {
          total = total + selected.member_price * selected.qty;
        });
        return total;
      }
    },

    discountMember() {
      let discount = 0;
      discount = this.totalPriceMember * (this.product.bundle_percentage / 100);
      return discount;
    },

    overAllTotalMember() {
      let total = 0;
      total = this.totalPriceMember - this.discountMember;
      return total;
    },

    totalPriceWholesaler() {
      if (this.selectedProducts.length == 0) {
        return 0;
      } else {
        let total = 0;
        this.selectedProducts.forEach((selected) => {
          total = total + selected.wholesale_price * selected.qty;
        });
        return total;
      }
    },

    discountWholesaler() {
      let discount = 0;
      discount =
        this.totalPriceWholesaler * (this.product.bundle_percentage / 100);
      return discount;
    },

    overAllTotalWholesaler() {
      let total = 0;
      total = this.totalPriceWholesaler - this.discountWholesaler;
      return total;
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
