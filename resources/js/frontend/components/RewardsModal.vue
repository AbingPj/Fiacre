<style lang="scss" scoped>
@import "resources/sass/mixins";

.product-modaol-dialog {
  max-width: 500px;
}
.product-modal-body {
  padding: 40px 40px;
}
// .product-container {
//   //   background-color: red;
//   position: relative;
//   padding: 0px;
// }
.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
</style>


<template>
  <div>
    <div
      class="modal fade"
      id="rewardsModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="rewardsModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog product-modaol-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body product-modal-body">
            <button class="btn-close" data-dismiss="modal" aria-label="Close">
              <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
            <div class="container product-container">
              <div class="row">
                <div class="col">
                  <h4>
                    <i class="fas fa-gifts"></i> Your Rewards & Coupons
                  </h4>

                  <div
                    class="border border-info overflow-auto"
                    style="min-height:250px; max-height:250px;"
                  >
                    <ul class="list-group list-group-flush">
                      <li v-for="(item, index) in rewards" :key="index" class="list-group-item">
                        <h5 class="mr-3">
                          <i class="fas fa-ticket-alt mr-2" style="font-size:20px;"></i>
                          <b>{{item.coupon.name}}</b>
                        </h5>
                        <span class="ml-4">{{item.coupon.description}}</span>

                        <div class="input-group mb-3 mt-2">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Code:</span>
                          </div>
                          <input
                            type="text"
                            class="form-control"
                            style="width:50px;"
                            :value="item.coupon.code"
                            :id="item.coupon.code"
                            readonly
                          />
                          <div class="input-group-append">
                            <button
                              class="btn btn-outline-secondary"
                              type="button"
                              @click="copy2(item.coupon.code)"
                            >
                              <i class="far fa-copy"></i>
                            </button>
                          </div>
                        </div>

                        <!-- code:
                        <a style="font-size:20px;" @click="copy(item.coupon.code)">
                          <i class="far fa-copy"></i>
                          <b>{{item.coupon.code}}</b>
                        </a>-->

                        <!-- <button
                          type="button"
                          style="font-size:20px;"
                          @click="copy(item.coupon.code)"
                        >
                          <i class="far fa-copy"></i>
                          <b>{{item.coupon.code}}</b>
                        </button>-->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Modal Body -->
        </div>
      </div>
      <!-- Modal Dialog -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["guest"],
  created() {
    if (this.guest == 0) {
      this.getUserRewards1();
    }
  },
  mounted() {
    let self2 = this;
    $("#rewardsModal").on("shown.bs.modal", function () {
      console.log("show rewards");
      self2.getUserRewards1();
    });
  },
  data() {
    return {
      copySucceeded: null,
      rewards: [],
      code123: "123",
    };
  },
  methods: {
    handleCopyStatus(status) {
      this.copySucceeded = status;
    },
    copy2(code) {
      /* Get the text field */
      var copyText = document.getElementById(code);

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand("copy");

      /* Alert the copied text */
      //   alert("Copied the text: " + copyText.value);
    },

    copy(code) {
      this.$copyText(code).then(
        function (e) {
          console.log(e);
        },
        function (e) {
          console.log(e);
        }
      );
      //   const el = document.createElement("textarea");
      //   el.value = code;
      //   document.body.appendChild(el);
      //   el.select();
      //   document.execCommand("copy");
      //   //   document.body.removeChild(el);
      //   console.log("done");
    },

    getUserRewards1() {
      axios
        .get("/referrals/getUserRewards")
        .then((res) => {
          this.rewards = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
