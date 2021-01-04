

<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>About Us Content Settings</b>
        </h5>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-12 mt-2">
        <form id="myForm" name="myForm" @submit.prevent="save()">
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
            <textarea :value="title" id="summernote_title" name="title"></textarea>
          </div>

          <div class="form-group">
            <label for="content" class="font-weight-bold">Content</label>
            <textarea
              :value="content"
              @change="onContentChange"
              id="summernote_content"
              name="content"
            ></textarea>
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
      //   background_image: "",
      errors: new Errors(),
      displayImage: "",
    };
  },

  methods: {
    save() {
      LoadingOverlay();

      let myForm = document.getElementById("myForm");
      let formData = new FormData(myForm);

      axios
        .post("/admin/settings/contents/aboutusSubmit", formData, {
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
      //   console.log(shit);
      this.$events.fire("showErrorMessage", errors);
    },

    showSuccessMessage(errors) {
      //   console.log(shit);
      this.$events.fire("showSuccessMessage", errors);
    },

    cancel() {
      if (this.store.aboutus != null) {
        if (this.store.aboutus.image_link != null) {
          this.displayImage = this.store.aboutus.image_link;
        } else {
          this.displayImage = "/img/no-product-image.png";
        }

        $("#summernote_title").summernote("code", this.store.aboutus.title);
        $("#summernote_content").summernote("code", this.store.aboutus.content);
        document.getElementById("background_image").value = null;
      } else {
        $("#summernote_title").summernote("code", this.store.aboutus.title);
        $("#summernote_content").summernote("code", this.store.aboutus.content);
        this.displayImage = "/img/no-product-image.png";
        document.getElementById("background_image").value = null;
      }
    },
    onFileChange(e) {
      //   console.log(e);
      const file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },

    onContentChange() {
      console.log("content change");
    },
  },

  created() {
    if (this.store.aboutus != null) {
      this.title = this.store.aboutus.title;
      this.content = this.store.aboutus.content;
      if (this.store.aboutus.image_link == null) {
        this.displayImage = "/img/no-product-image.png";
      } else {
        this.displayImage = this.store.aboutus.image_link;
      }
    }
  },

  mounted() {
    $(document).ready(function () {
      $("#summernote_title").summernote({
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

      $("#summernote_content").summernote({
        placeholder: "Content",
        tabsize: 10,
        // height: 400,
      });
    });
  },
};
</script>
