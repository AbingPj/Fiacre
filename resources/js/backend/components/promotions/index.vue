<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">Promotions</h2>
        </div>
        <div class="col-md-6"></div>
      </div>
      <div class="row">
        <div class="col-md-10 mt-5">
          <form id="myForm" name="myForm" @submit.prevent="sendEmail()">
            <!-- <div class="form-group">
              <button
                type="button"
                class="btn btn-sm btn-success"
                @click="selectCustomer()"
              >Select Customer Email</button>
            </div>-->

            <div class="form-group mb-3">
              <label class="font-weight-bold">Send To</label>
              <br />
              <div class="form-check form-check-inline">
                <input
                  v-model="sendto"
                  class="form-check-input"
                  type="radio"
                  name="sendto"
                  value="all"
                />
                <label class="form-check-label" for="inlineRadio1">All Members</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  v-model="sendto"
                  class="form-check-input"
                  type="radio"
                  name="sendto"
                  value="sunclubmembers"
                />
                <label class="form-check-label" for="inlineRadio2">Sun Club Members</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  v-model="sendto"
                  class="form-check-input"
                  type="radio"
                  name="sendto"
                  value="wholesalers"
                />
                <label class="form-check-label" for="inlineRadio2">Wholesalers</label>
              </div>
              <!-- <div class="form-check form-check-inline">
                <input
                  v-model="sendto"
                  class="form-check-input"
                  type="sendto"
                  name="sendto"
                  value="specific"
                />
                <label class="form-check-label" for="inlineRadio2">Specific</label>
              </div>-->
            </div>

            <div class="form-group">
              <label class="font-weight-bold">Subject</label>
              <input v-model="subject" name="subject" type="text" class="form-control" />
            </div>

            <div class="form-group">
              <label class="font-weight-bold">Content:</label>
              <textarea id="summernote_content" name="content"></textarea>
            </div>

            <div class="form-group">
              <label class="font-weight-bold">Select Products to promote:</label>
              <br />
              <div v-if="selectedProducts.length == 0" class="text-center">
                <button
                  type="button"
                  class="btn btn-lg btn-info"
                  @click="selectProducts()"
                >Select Products to Promote</button>
              </div>
              <div v-if="selectedProducts.length != 0">
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  @click="selectProducts()"
                >Select More</button>
              </div>
            </div>

            <div class="w-100">
              <div class="d-flex flex-wrap">
                <div
                  v-for="(item, index) in selectedProducts"
                  :key="index"
                  class="d-flex flex-row mt-3 w-50"
                >
                  <div class="mr-2">
                    <img
                      :src="item.image_link"
                      style="width: 100px; height: 100px; object-fit: cover;"
                    />
                  </div>
                  <div class="w-50">
                    <h6>
                      <b>{{item.name}}</b>
                      <button
                        type="button"
                        class="btn-edit float-right text-danger"
                        @click="removeSelectedProduct(item)"
                      >
                        <i class="fas fa-times-circle"></i>
                      </button>
                    </h6>
                    <!-- <span style="font-size:10px;">({{item.sku}})</span> -->
                    <div>price: {{item.price}}</div>
                    <div>sunclub price: {{item.member_price}}</div>
                    <div>wholesale price: {{item.wholesale_price}}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group">
              <button class="btn btn-success float-right">
                <i class="fas fa-paper-plane mr-2"></i> Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <admin-select-products-modal-3
      ref="select_products_modal"
      :selected_products="selectedProducts"
    ></admin-select-products-modal-3>
  </div>
</template>
<script>
// import summernote from "../../plugin/summernote-bs4.min.js";
import Errors from "../../errorClass";

export default {
  props: ["propemail"],
  data() {
    return {
      email: null,
      subject: null,
      myHTML: "",
      errors: new Errors(),
      sendto: "all",
      subject: "Sunfarmacy Promotions",
      content:
        '<h2 style="text-align:center"> Sunfarmacy Promotions </h2> <br> ',
      selectedProducts: [],
    };
  },
  created() {
    this.email = this.propemail;
  },

  mounted() {
    let self = this;
    $(document).ready(function () {
      $("#summernote_content").summernote({
        placeholder: "Content here",
        tabsize: 2,
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "underline", "clear"]],
          ["color", ["color"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["insert", ["link", "picture", "video"]],
          ["view", ["fullscreen", "codeview", "help"]],
        ],
        // default value is ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']
        styleTags: ["p", "blockquote", "pre", "h2", "h3", "h4", "h5"],
      });

      var markupStr = self.content;
      $("#summernote_content").summernote("code", markupStr);
    });
  },
  methods: {
    addSelectedProduct(data) {
      this.selectedProducts.push(data);
    },
    selectProducts() {
      $("#selectProductsModal3").modal("show");
    },
    sendEmail() {
      LoadingOverlay();
      //   LoadingOverlayHide();
      //   let msg = ["Work In Progress"];
      //   this.showErrorMessage(msg);
      //   window.scrollTo(0, 0);

      //   LoadingOverlayHide();

      let myForm = document.getElementById("myForm");
      let formData = new FormData(myForm);
      formData.append("products", JSON.stringify(this.selectedProducts));

      //   let myForm = document.getElementById("myForm");
      //   let formData = new FormData(myForm);
      //   //   formData.append("content", this.myHTML);

      axios
        .post("/admin/sendPromotions", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          this.showSuccessMessage(res.data);
          LoadingOverlayHide();
          window.scrollTo(0, 0);
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

    removeSelectedProduct(data) {
      this.$refs.select_products_modal.products.forEach((product) => {
        if (product.id == data.id) {
          product.selected = false;
        }
      });

      this.selectedProducts.splice(
        this.selectedProducts.findIndex(function (i) {
          return i.id === data.id;
        }),
        1
      );
    },

    showSuccessMessage(msg) {
      //   console.log(shit);
      this.$events.fire("showSuccessMessage", msg);
    },
  },
};
</script>


<style scoped>
.btn-edit {
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
</style>
