

<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>Home Page Content Settings</b>
        </h5>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12 mt-2">
        <form id="landingForm" name="landingForm" @submit.prevent="save()">
          <div class="form-group mb-3">
            <label for="landing_header" class="font-weight-bold">Header</label>
            <textarea class="form-control" v-model="header" name="header"></textarea>
          </div>
          <div class="form-group mb-3">
            <label for="content" class="font-weight-bold">Content No. 1</label>
            <textarea class="form-control" v-model="content" name="content" rows="4"></textarea>
          </div>

          <div class="form-group mb-3">
            <label for="landing_header" class="font-weight-bold">Banner Logo</label>
            <br />
            <img :src="logo" style="width:120px; height:80px; object-fit: cover;" />
            <br />
            <div class="input-group mt-3 mb-3 w-75">
              <div class="custom-file">
                <input @change="onFileChangeLogo" type="file" class="custom-file-input" name="logo" />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
          </div>

          <div class="form-group mb-3">
            <label for="landing_header" class="font-weight-bold">Slider Images</label>

            <div class="d-flex flex-row">
              <div class="p-2">
                <div>Slider 1</div>
                <div>
                  <img :src="slider1" style="width:120px; height:80px; object-fit: cover;" />
                </div>
              </div>
              <div class="p-2">
                <div>Slider 2</div>
                <div>
                  <img :src="slider2" style="width:120px; height:80px; object-fit: cover;" />
                </div>
              </div>
              <div class="p-2">
                <div>Slider 3</div>
                <div>
                  <img :src="slider3" style="width:120px; height:80px; object-fit: cover;" />
                </div>
              </div>
            </div>
            <br />

            <div class="input-group mb-3 w-75">
              <div class="input-group-prepend">
                <span class="input-group-text">Slider 1</span>
              </div>
              <div class="custom-file">
                <input
                  @change="onFileChangeSlider1"
                  type="file"
                  class="custom-file-input"
                  name="slider1"
                />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>

            <div class="input-group mb-3 w-75">
              <div class="input-group-prepend">
                <span class="input-group-text">Slider 2</span>
              </div>
              <div class="custom-file">
                <input
                  @change="onFileChangeSlider2"
                  type="file"
                  class="custom-file-input"
                  name="slider2"
                />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>

            <div class="input-group mb-3 w-75">
              <div class="input-group-prepend">
                <span class="input-group-text">Slider 3</span>
              </div>
              <div class="custom-file">
                <input
                  @change="onFileChangeSlider3"
                  type="file"
                  class="custom-file-input"
                  name="slider3"
                />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            <br />
          </div>

          <!-- <div class="form-group mb-3">
            <label for="content" class="font-weight-bold">Content No. 2</label>
            <div class="custom-control custom-switch mb-3">
              <input type="checkbox" class="custom-control-input" id="customSwitch1" />
              <label class="custom-control-label" for="customSwitch1">Show</label>
            </div>
            <textarea id="landing_content2" name="landing_content2"></textarea>
          </div>-->

          <!-- <div class="form-group mb-3">
            <label class="font-weight-bold">Featured Products</label>
            <br />
            <div class="form-check form-check-inline">
              <input
                v-model="feature_products_is_random"
                class="form-check-input"
                type="radio"
                name="feature_products_is_random"
                value="true"
              />
              <label class="form-check-label" for="inlineRadio1">Random</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                v-model="feature_products_is_random"
                class="form-check-input"
                type="radio"
                name="feature_products_is_random"
                value="false"
              />
              <label class="form-check-label" for="inlineRadio2">Select 4 Products</label>
            </div>
            <br />

            <button
              type="button"
              class="btn btn-sm btn-outline-success ml-2 mb-2 mt-2"
              @click="selectProduct()"
            >Select Products</button>

            <br />
            <img class="mr-2 ml-2" style="width:50px; height:50px; object-fit: cover;" />
            <img class="mr-2 ml-2" style="width:50px; height:50px; object-fit: cover;" />
            <img class="mr-2 ml-2" style="width:50px; height:50px; object-fit: cover;" />
            <img class="mr-2 ml-2" style="width:50px; height:50px; object-fit: cover;" />
          </div>-->

          <!-- <div class="float-right">
            <button type="button" @click="cancel()" class="btn btn-danger mr-2">CANCEL</button>
          </div>-->

          <div class="float-right">
            <button class="btn btn-success mr-2">SAVE</button>
          </div>
        </form>
      </div>
    </div>
    <!-- <admin-select-products-modal-2 ref="select_products_modal"></admin-select-products-modal-2> -->
  </div>
</template>
<script>
import Errors from "../../errorClass";

export default {
  props: ["store"],
  data() {
    return {
      //   title: "",
      header: "",
      content: "",
      logo: "",
      slider1: "",
      slider2: "",
      slider3: "",

      errors: new Errors(),

      feature_products_is_random: "true",
    };
  },

  methods: {
    save() {
      LoadingOverlay();

      let myForm = document.getElementById("landingForm");
      let formData = new FormData(myForm);

      axios
        .post("/admin/settings/contents/landingSubmit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          window.location.href = res.data;
        })
        .catch((err) => {
          this.errors.record(err.response.data.errors);
          this.showErrorMessage(this.errors.getArrayOfMessages());
          window.scrollTo(0, 0);
          LoadingOverlayHide();
        });
    },

    // selectProduct() {
    //   $("#selectProductsModal2").modal("show");
    // },
    showErrorMessage(errors) {
      this.$events.fire("showErrorMessage", errors);
    },

    showSuccessMessage(errors) {
      this.$events.fire("showSuccessMessage", errors);
    },
    cancel() {},

    onFileChangeLogo(e) {
      const file = e.target.files[0];
      this.logo = URL.createObjectURL(file);
    },
    onFileChangeSlider1(e) {
      const file = e.target.files[0];
      this.slider1 = URL.createObjectURL(file);
    },
    onFileChangeSlider2(e) {
      const file = e.target.files[0];
      this.slider2 = URL.createObjectURL(file);
    },
    onFileChangeSlider3(e) {
      const file = e.target.files[0];
      this.slider3 = URL.createObjectURL(file);
    },
  },

  created() {
    this.header = this.store.landing.header;
    this.content = this.store.landing.content;
    this.logo = this.store.landing.img_link_logo;
    this.slider1 = this.store.landing.img_link_slider1;
    this.slider2 = this.store.landing.img_link_slider2;
    this.slider3 = this.store.landing.img_link_slider3;
  },

  mounted() {
    $(document).ready(function () {
      //   $("#summernote_title").summernote({
      //     placeholder: "Title",
      //     tabsize: 1,
      //     toolbar: [
      //       ["style", ["style"]],
      //       ["font", ["bold", "underline", "clear"]],
      //       ["para", ["paragraph"]],
      //       ["view", ["fullscreen", "codeview", "help"]],
      //     ],

      //   });

      $("#landing_content2").summernote({
        placeholder: "Content",
        tabsize: 10,
        height: 150,
      });
    });
  },
};
</script>
