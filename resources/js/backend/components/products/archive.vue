<template>
  <div>
    <div
      class="modal fade"
      id="archiveModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered product-modaol-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body product-modal-body">
            <h6>
              <b>
                <i class="fas fa-exclamation-triangle mr-1"></i> Archive Product
              </b>
            </h6>
            <button class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="container product-container">
              <div class="row">
                <div class="col-12">
                  <p>Product will be archived and will not be retrieved again.</p>
                  <p>Are you sure you want to archive?</p>
                  <br />
                  <br />
                </div>
                <div class="col-12">
                  <form
                    :action="'/admin/products/' + product.id + '/archive'"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <input type="hidden" name="_token" :value="csrf" />
                    <input type="hidden" name="_method" value="PATCH" />
                    <div class="d-flex flex-row-reverse">
                      <button
                        data-dismiss="modal"
                        aria-label="Close"
                        class="btn btn-sm btn-success-1 mr-1 ml-1 w-25"
                      >No</button>

                      <button type="submit" class="btn btn-sm btn-success-2 mr-1 ml-1 w-25">Yes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      preview_image: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    archive() {
      console.log("archive");
      var link = "/admin/products/" + this.product.id + "/archive";
      window.location.href = link;
    }
  }
};
</script>


<style lang="scss" scoped>
.product-modaol-dialog {
  max-width: 400px;
}
.product-modal-body {
  padding: 20px 40px 20px 20px;
}
.product-container {
  //   background-color: red;
  position: relative;
  padding: 0px;
}
.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
.plusminus {
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}

.product-image {
  object-fit: cover;
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0px 0px;
}
.p-image {
  padding-right: 20px;
  margin-right: 0px;
}
.p-content {
  padding-left: 0px;
  margin-left: 0px;
}

.minmax-color {
  color: #007bff;
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
</style>

