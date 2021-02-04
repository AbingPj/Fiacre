<template>
  <div>
    <!-- <form :action="action" method="post" enctype="multipart/form-data"> -->
    <form id="myForm2" name="myForm2" @submit.prevent="save()">
      <!-- <input type="hidden" name="_token" :value="csrf" /> -->
      <!-- <input type="hidden" name="_method" value="PATCH" /> -->
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
                <b>PRODUCT INFORMATION</b>
              </h3>
            </div>
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
                        @click="$refs.image_file_input2.click()"
                      >
                        <i class="fas fa-camera-retro"></i>
                        <br />Upload Image
                      </button>
                      <input
                        type="file"
                        ref="image_file_input2"
                        name="image_file"
                        class="d-none"
                        @change="onFileChange"
                      />
                      <!-- <input type="file" name="image_file" @change="onFileChange()" /> -->
                    </div>
                    <div>
                      <div id="preview">
                        <img :src="url" />
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
                      :value="product.sku"
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
                      :value="product.tags"
                      id="tags"
                      name="tags"
                      class="form-control rounded-0"
                      type="text"
                      disabled
                      placeholder='ex. "Fresh", "Red", "Green", "Citrus", ... '
                    />
                  </div>
                  <div class="form-group">
                    <label for="unit">Season</label>
                    <input
                      :value="product.season"
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
                />
                  </div>-->
                </div>
                <div class="col-md-5">
                      <div class="form-group">
                <label for="price">Fundraise Percentage</label>
                <div class="input-group rounded-0">
                  <!-- <div class="input-group-prepend">
                    <span class="input-group-text rounded-0">$</span>
                  </div> -->
                  <input
                    v-model="product.fundraise_percentage"
                    id="fundraise_percentage"
                    name="fundraise_percentage"
                    class="form-control rounded-0"
                    type="text"
                    placeholder=''
                    @keypress="onlyForCurrency"
                  />
                   <div class="input-group-append">
                        <span class="input-group-text">%</span>
                    </div>
                </div>
              </div>
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
                    <label for="member_price">Member Price</label>

                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text rounded-0">$</span>
                      </div>
                      <input
                        :value="product.member_price"
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
                    <label for="wholesale_price">Wholesale Price</label>

                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text rounded-0">$</span>
                      </div>
                      <input
                        :value="product.wholesale_price"
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
                    <label for="discount_price">Discount Price</label>

                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text rounded-0">$</span>
                      </div>
                      <input
                        :value="product.discount_price"
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
                        <div @click="updateVisible(product)" class="custom-control custom-switch">
                            <input
                            :checked="product.is_visible == 1 ? true: false"
                            type="checkbox"
                            class="custom-control-input bg-success"
                            id="visible"
                            name="visible"
                            />
                            <label
                            class="custom-control-label"
                            >{{ product.is_visible == 1? 'show' : 'hide' }}</label>
                        </div>
                    </div>


                </div>
                <div class="col-sm-12">
                  <a class="mr-2 btn btn-success-1 rounded-0" @click="preview()">
                    <i class="far fa-eye"></i> Preview
                  </a>
                  <button class="rounded-0 mr-2 btn btn-success-2" type="submit">
                    <i class="fas fa-save"></i> Save
                  </button>
                  <a class="rounded-0 mr-2 btn btn-success-2" @click="archive()">
                    <i class="fas fa-archive"></i> Archive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <admin-products-preview-modal ref="preview_modal"></admin-products-preview-modal>
    <admin-products-archive-modal ref="archive_modal"></admin-products-archive-modal>
  </div>
</template>
<script>
import Errors from "../../errorClass";
export default {
  props: ["propsproduct", "propscategories", "action"],
  data() {
    return {
      product: {},
      categories: {},
      url: null,
      selectedCategory: null,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),

      subcategories: [],
      selectedSubCategory: null,
      selectedCategoryName2: "",
      errors: new Errors(),
    };
  },

  created() {
    this.categories = this.propscategories;
    this.product = this.propsproduct;
    this.url = this.product.image_link;
    this.selectedCategory = this.propsproduct.category_id;

    if (this.selectedCategory) {
      this.categorySelectionChange(true);
    }
  },
  methods: {
    onlyForCurrency ($event) {
            let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
            if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.product.fundraise_percentage.indexOf('.') != -1)) { // 46 is dot
            $event.preventDefault();
            }
            if(this.product.fundraise_percentage!=null && this.product.fundraise_percentage.indexOf(".")>-1 && (this.product.fundraise_percentage.split('.')[1].length > 1)){
            $event.preventDefault();
            }
    },
    save() {
        LoadingOverlay();
        let url = this.action;
        let myForm = document.getElementById("myForm2");
        let formData = new FormData(myForm);
        formData.append("product_id", this.product.id);
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
    categorySelectionChange(created = false) {
      axios
        .get("/api/admin/subcategory/" + this.selectedCategory)
        .then((res) => {
          this.subcategories = res.data.sub_categories;
          this.selectedCategoryName2 = res.data.category.name;
          if (created) {
            this.selectedSubCategory = this.product.sub_category_id;
          } else {
            this.selectedSubCategory = null;
          }
          console.log(this.subcategories);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    archive() {
      this.$refs.archive_modal.product = this.product;
      $("#archiveModal").modal("show");
    },
    onFileChange(e) {
      console.log(e);
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    updateVisible(data) {
      console.log(data);
      data.is_visible = !data.is_visible;
    },
    preview() {
      console.log(this.product);
      this.$refs.preview_modal.product = this.product;
      this.$refs.preview_modal.preview_image = this.url;
      this.$refs.preview_modal.category = this.selectedCategoryName;
      $("#previewModal").modal("show");
    },
    // updateVisible(data) {
    //   console.log(data);
    //   data.is_visible = !data.is_visible;
    // },
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
    // numberOfOutOfStock() {
    //   return this.products.filter(obj => obj.is_visible === 0).length;
    // },
    // numberOfInStock() {
    //   return this.products.filter(obj => obj.is_visible === 1).length;
    // }
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
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}

.btn-success-1 {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}

.btn-success-2 {
  color: gray !important;
  background-color: rgb(51, 159, 37, 0.3) !important;
  // 51, 159, 37

  border-color: rgb(51, 159, 37, 0.5) !important;
}

.btn-upload {
  //   line-height: 5;
  margin-right: 10px;
  i {
    font-size: 50px;
  }
}

#preview {
  img {
    width: 110px;
    height: 90px;
    object-fit: cover;
  }
}
</style>

