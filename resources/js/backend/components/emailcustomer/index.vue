<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">Email Customer</h2>
        </div>
        <div class="col-md-6"></div>
      </div>
      <div class="row">
        <div class="col-md-10 mt-5">
          <form id="myForm" name="myForm" @submit.prevent="sendEmail()">
            <div class="form-group">
              <button
                type="button"
                class="btn btn-sm btn-success"
                @click="selectCustomer()"
              >Select Customer Email</button>
            </div>
            <div class="form-group">
              <label for>Send To</label>
              <input v-model="email" type="email" name="email" class="form-control" />
            </div>
            <div class="form-group">
              <label for>Subject</label>
              <input name="subject" type="text" class="form-control" />
            </div>
            <div class="form-group">
              <label>Content:</label>
              <!-- <wysiwyg v-model="myHTML" /> -->

              <textarea id="summernote_content" name="content"></textarea>
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
    <select-emails-modal></select-emails-modal>
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
    };
  },
  created() {
    this.email = this.propemail;
  },
  mounted() {
    $(document).ready(function () {

      $("#summernote_content").summernote({
        placeholder: "Content here",
        tabsize: 2,
        height: 120,
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "underline", "clear"]],
          ["color", ["color"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["insert", ["link", "picture", "video"]],
          ["view", ["fullscreen", "codeview", "help"]],
        ],
      });
    });
  },
  methods: {
    selectCustomer() {
      $("#selectCustomersModal").modal("show");
    },
    sendEmail() {
      LoadingOverlay();

      let myForm = document.getElementById("myForm");
      let formData = new FormData(myForm);
      //   formData.append("content", this.myHTML);

      axios
        .post("/admin/emails/send", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          window.location.href = "/admin/emails";
          //   LoadingOverlayHide();
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
  },
};
</script>


<style>
/* @import "./plugin/css/summernote-bs4.min.css"; */
/* @import "../../plugin/css/summernote-bs4.min.css"; */
</style>
