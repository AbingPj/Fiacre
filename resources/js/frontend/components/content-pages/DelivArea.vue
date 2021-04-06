<style lang="scss">
#delivery-area {
  margin-top: -50px;
  min-height: 100vh;

  background-attachment: fixed;

  .delivary-container {
    padding: 100px 0px 100px 0px;

    .delivary-container-2 {
      padding: 100px 30px 100px 30px;
      margin: 0px;
      background-color: rgba(255, 255, 255, 0.9);

      .title {
        color: #88c43a;
        text-align:center;
      }
      .content-headers {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #88c43a;
        }
        .fa-map-pin {
            color: rgb(51, 159, 37);
            margin-right:5px;
        }
        .btn-success {
            background: #88c43a;
            border-color: #88c43a;
            margin-left:-4px;
            margin-top:-4px;
        }
        .form-control {
            width:200px;
            display:inline-block;
            border-radius: 0;
            margin-left:10px;
        }
      }
    }
  }
}
</style>



<template>
  <div id="delivery-area" style="background-image: url('img/sunfarmacy/slider/Slider3.jpg');">
    <div class="container delivary-container">
      <div class="container delivary-container-2">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-sm-8 p-1 mb-5" style="font-size:16px;">
            <div class="title">
                <h2>Market Delivery Area</h2>
            </div>
            <br>
            <div class="content-headers text-center">
                <i class="fa fa-map-pin" aria-hidden="true"></i>
                <span>Check if our delivery area includes <strong>YOUR</strong> zip code:</span>
                <input v-model="zipCode" placeholder="Enter Zip Code" name="name" type="text" class="form-control" />
                <b-button squared variant="success" size="md" @click="checkZip">Check My Zip Code</b-button>
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
      zipCode: "",
    };
  },
  methods: {
      checkZip() {
          alert(this.zipCode)
      }
  },
  created() {

  },
};
</script>
