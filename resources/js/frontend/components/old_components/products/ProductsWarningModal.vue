<template>
  <div>
    <div
      class="modal fade"
      id="warningModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered product-modaol-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body product-modal-body">
            <h6 class="text-danger">
              <b>
                <i class="fas fa-exclamation-triangle mr-1"></i> Warning
              </b>
            </h6>
            <button class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="container product-container">
              <div class="row">
                <div class="col-12">
                  <br />
                  <p>The minimum order amount of wholesaler is $ {{minimum.toFixed(2)}}</p>
                  <p>Please select more products.</p>
                  <br />
                </div>
                <div class="col-12">
                  <div class="d-flex flex-row-reverse">
                    <button
                      data-dismiss="modal"
                      aria-label="Close"
                      class="btn btn-sm btn-success-1 mr-1 ml-1 w-25"
                    >Okay</button>
                  </div>
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
  props:["minimum"],
  data() {
    return {};
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

