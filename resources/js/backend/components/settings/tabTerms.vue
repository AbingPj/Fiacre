

<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>Terms Content Settings</b>
        </h5>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12 mt-2">
        <form id="termsForm" name="termsForm" @submit.prevent="save()">
          <div class="form-group w-50">
            <label class="font-weight-bold">Background Image</label>
            <br />
            <img
              :src="displayImage"
              class="mb-3"
              style="width:100%; height:200px; object-fit: cover;"
            />
            <div class="custom-file mb-3">
              <input
                @change="onFileChange"
                type="file"
                class="custom-file-input"
                id="background_image"
                name="background_image"
              />
              <label class="custom-file-label" for="image_path">Choose file...</label>
            </div>
          </div>

          <div class="form-group">
            <label class="font-weight-bold">Title</label>
            <textarea :value="title" id="terms_title" name="title"></textarea>
          </div>

          <div class="form-group">
            <label for="content" class="font-weight-bold">Content</label>
            <textarea :value="content" @change="onContentChange" id="terms_content" name="content"></textarea>
          </div>

          <div class="float-right">
            <button type="button" @click="cancel()" class="btn btn-danger mr-2">CANCEL</button>
          </div>

          <div class="float-right">
            <button class="btn btn-success mr-2">SAVE</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Errors from "../../errorClass";

export default {
  props: ["store"],
  data() {
    return {
      title: "",
      content: "",
      errors: new Errors(),
      displayImage: "/img/no-product-image.png",
    };
  },

  methods: {
    save() {
      LoadingOverlay();

      let myForm = document.getElementById("termsForm");
      let formData = new FormData(myForm);

      axios
        .post("/admin/settings/contents/termsSubmit", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          //   this.showSuccessMessage(res.data);
          //   window.scrollTo(0, 0);
          //   LoadingOverlayHide();
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
      this.$events.fire("showErrorMessage", errors);
    },

    showSuccessMessage(errors) {
      this.$events.fire("showSuccessMessage", errors);
    },

    cancel() {
      if (this.store.terms != null) {
        if (this.store.terms.image_link != null) {
          this.displayImage = this.store.terms.image_link;
        } else {
          this.displayImage = "/img/no-product-image.png";
        }

        $("#terms_title").summernote("code", this.store.terms.title);
        $("#terms_content").summernote("code", this.store.terms.content);
        document.getElementById("background_image").value = null;
      } else {
        $("#terms_title").summernote("code", "");
        $("#terms_content").summernote("code", "");
        this.displayImage = "/img/no-product-image.png";
        document.getElementById("background_image").value = null;
      }
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },

    onContentChange() {
      console.log("content change");
    },
  },

  created() {
    if (this.store.terms != null) {
      this.title = this.store.terms.title;
      this.content = this.store.terms.content;
      if (this.store.terms.image_link == null) {
        this.displayImage = "/img/no-product-image.png";
      } else {
        this.displayImage = this.store.terms.image_link;
      }
    }
  },

  mounted() {
    $(document).ready(function () {
      $("#terms_title").summernote({
        placeholder: "Title",
        tabsize: 1,
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "underline", "clear"]],
          ["para", ["paragraph"]],
          ["view", ["fullscreen", "codeview", "help"]],
        ],
        // height: 120,
      });

      $("#terms_content").summernote({
        placeholder: "Content",
        tabsize: 10,
        // height: 400,
      });
    });
  },
};
</script>
