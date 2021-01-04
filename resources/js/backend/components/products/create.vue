<template>
<form id="myForm" @submit.prevent="save()">
  <!-- <input type="hidden" name="_token" :value="csrf" /> -->
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">
            <div class="d-flex">
              <div class="mr-2">
                <a href="/admin/products" class="btn btn-success float-right rounded-0 text-light">
                  <i class="fas fa-chevron-circle-left"></i>
                </a>
              </div>
              <div>Products</div>
            </div>
          </h2>
          <br />
          <h3 class="text-success">
            <b>ADD NEW PRODUCT</b>
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
            <div class="col-md-7">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  v-model="product.name"
                  id="name"
                  name="name"
                  class="form-control rounded-0"
                  type="text"
                  placeholder="Product Name"
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
                  id="tags"
                  name="tags"
                  class="form-control rounded-0"
                  type="text"
                  disabled
                  placeholder='ex. "Fresh", "Red", "Green", "Citrus", ... '
                />
              </div>
              <div class="form-group">
                <label for="season">Season</label>
                <input
                  id="season"
                  name="season"
                  class="form-control rounded-0"
                  type="text"
                  placeholder='ex. "Winter", "Summer", "Spring", ...'
                />
              </div>
              <!-- <div class="form-group">
                <label for="image">Image</label>
                <input
                  type="file"
                  id="image_file"
                  name="image_file"
                  class="form-control-file border rounded-0"
                  :value="image_file"
                />
              </div>-->
            </div>
            <div class="col-md-5">
              <div class="form-group">
                <label for="price">Regular Price</label>
                <div class="input-group rounded-0">
                  <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                  </div>
                  <input
                    v-model="product.price"
                    id="price"
                    name="price"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "10.50"'
                    @keypress="onlyNumber"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="price">Member Price</label>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                  </div>
                  <input
                    id="member_price"
                    name="member_price"
                    class="form-control rounded-0"
                    type="text"
                     placeholder='ex. "10.00"'
                    @keypress="onlyNumber"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="price">Wholesale Price</label>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                  </div>
                  <input
                    id="wholesale_price"
                    name="wholesale_price"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "9.50"'
                    @keypress="onlyNumber"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="price">Discount Price</label>

                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                  </div>
                  <input
                    id="discount_price"
                    name="discount_price"
                    class="form-control rounded-0"
                    type="text"
                    placeholder='ex. "8.00"'
                    @keypress="onlyNumber"
                    disabled
                  />
                </div>
              </div>

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
                />
                <label class="custom-control-label" for="visible">Show/Hide</label>
              </div>
              </div>


            </div>
            <div class="col-sm-12">
              <a class="mr-2 btn btn-success-1 rounded-0" @click="preview()">
                <i class="far fa-eye"></i> Preview
              </a>
              <button class="mr-2 btn btn-success-2 rounded-0" type="submit">
                <i class="fas fa-save"></i> Save
              </button>
              <!-- <button class="btn btn-success-2 rounded-0">Archaive</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <admin-products-preview-modal ref="preview_modal"></admin-products-preview-modal>
  </div>
  </form>
</template>
<script>
import Errors from "../../errorClass";
export default {
  props: ["propscategories","api"],
  data() {
    return {
      product: {
        name: null,
        description: null,
        price: null,
        unit: null,
        minorder: null,
        maxorder: null,
      },
      selectedCategory: null,
      subcategories: [],
      selectedSubCategory: null,
      selectedCategoryName2: "",
      url: null,
      errors: new Errors(),
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    };
  },

  created() {
    // this.products = this.propsproducts;
  },
  methods: {
    save() {
      LoadingOverlay();
      //   let url = "admin/products/store/bundle";
      let url = this.api;


        let myForm = document.getElementById("myForm");
        let formData = new FormData(myForm);

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

    },
    showErrorMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },
    categorySelectionChange() {
      console.log(this.selectedCategory);
      axios
        .get("/api/admin/subcategory/" + this.selectedCategory)
        .then((res) => {
          this.selectedSubCategory = null;
          this.subcategories = res.data.sub_categories;
          this.selectedCategoryName2 = res.data.category.name;
          console.log(this.subcategories);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onFileChange(e) {
      //   console.log(e);
      const file = e.target.files[0];
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
  },
  computed: {
    selectedCategoryName() {
      if (this.selectedCategory == null) {
        return "";
      } else {
        let categories = this.propscategories;
        return categories.find((x) => x.id === this.selectedCategory).name;
      }
    },
    numberOfOutOfStock() {
      return this.products.filter((obj) => obj.is_visible === 0).length;
    },
    numberOfInStock() {
      return this.products.filter((obj) => obj.is_visible === 1).length;
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
