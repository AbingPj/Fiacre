

<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>Privacy Content Settings</b>
        </h5>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12 mt-2">
        <form id="privacyForm" name="privacyForm" @submit.prevent="save()">
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
            <textarea :value="title" id="privacy_title" name="title"></textarea>
          </div>

          <div class="form-group">
            <label for="content" class="font-weight-bold">Content</label>
            <textarea :value="content" @change="onContentChange" id="privacy_content" name="content"></textarea>
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

      let myForm = document.getElementById("privacyForm");
      let formData = new FormData(myForm);

      axios
        .post("/admin/settings/contents/privacySubmit", formData, {
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
      if (this.store.privacy != null) {
        if (this.store.privacy.image_link != null) {
          this.displayImage = this.store.privacy.image_link;
        } else {
          this.displayImage = "/img/no-product-image.png";
        }

        $("#privacy_title").summernote("code", this.store.privacy.title);
        $("#privacy_content").summernote("code", this.store.privacy.content);
        document.getElementById("background_image").value = null;
      } else {
        $("#privacy_title").summernote("code", "");
        $("#privacy_content").summernote("code", "");
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
    if (this.store.privacy != null) {
      this.title = this.store.privacy.title;
      this.content = this.store.privacy.content;
      if (this.store.privacy.image_link == null) {
        this.displayImage = "/img/no-product-image.png";
      } else {
        this.displayImage = this.store.privacy.image_link;
      }
    }
  },

  mounted() {
    $(document).ready(function () {
      $("#privacy_title").summernote({
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

      $("#privacy_content").summernote({
        placeholder: "Content",
        tabsize: 10,
        // height: 400,
      });
    });
  },
};
</script>
