<style lang="scss">
.hr-text {
  font-size: 15px;
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: black;
  text-align: center;
  height: 1.5em;
  //   opacity: 0.5;
  &:before {
    content: "";
    // use the linear-gradient for the fading effect
    // use a solid background color for a solid bar
    background: linear-gradient(to right, transparent, #88c43a, transparent);
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 5px;
  }
  &:after {
    content: attr(data-content);
    position: relative;
    display: inline-block;
    color: black;

    padding: 0 0.5em;
    line-height: 1.5em;
    // this is really the only tricky part, you need to specify the background color of the container element...
    color: #88c43a;
    background-color: #fcfcfa;
  }
}

.sbmt-btn {
  margin: 0px !important;
  height: 0px !important;
}
</style>


<template>
  <div class="container pt-5 pb-5" style="background-color:rgba(255, 255, 255, 0.9);">
    <div class="row">
      <div class="col-md-10 mx-auto">
        <!-- <h1>Refferrals</h1> -->

        <div>
          <md-card class="p-5">
            <md-card-header>
              <h1 style="color:#88c43a">Refferrals</h1>
            </md-card-header>
            <md-card-content>
              <md-card>
                <md-card-header>
                  <div class="md-title">Help your friend.</div>
                </md-card-header>
                <md-card-content>
                  help your friend by submitting their referral code.
                  <br />
                </md-card-content>
                <!-- <md-card-content :style="'margin: 0px 100px 50px 100px;'"> -->
                <md-card-content>
                  <md-field>
                    <label>Code</label>
                    <md-input
                      :style="'font-size:30px;'"
                      v-model="submitted_code"
                      :readonly="submitted"
                    ></md-input>
                    <span class="md-helper-text">Submit referral code</span>
                  </md-field>
                  <md-card-actions>
                    <h6 class="text-success mr-3">{{message1}}</h6>
                    <md-button
                      class="md-raised md-primary"
                      :disabled="submitted"
                      @click="submitReferralCode()"
                    >Submit</md-button>
                  </md-card-actions>
                </md-card-content>
              </md-card>

              <hr class="hr-text" data-content="AND" />

              <md-card>
                <md-card-header>
                  <div class="md-title">Now its your turn to get reward.</div>
                </md-card-header>
                <md-card-content>
                  Invite and send your referral trough email.
                  You can get rewards after they submitted your referral code.
                </md-card-content>
                <!-- <md-card-content :style="'margin: 0px 100px 100px 100px;'"> -->
                <md-card-content>
                  <md-field>
                    <label>Code</label>
                    <md-input :style="'font-size:30px;'" v-model="propdata.code" readonly></md-input>
                    <span class="md-helper-text">Your referral code</span>
                  </md-field>

                  <md-field>
                    <label>Name</label>
                    <md-input v-model="name" type="text"></md-input>
                    <span class="md-helper-text">(optional)</span>
                  </md-field>

                  <md-field>
                    <label>Email Address</label>
                    <md-input v-model="email" type="email"></md-input>
                    <span class="md-helper-text">Enter email address</span>
                  </md-field>

                  <!-- <md-card-actions md-alignment="space-between">
                    <div>
                      <h6 class="text-success">{{message}}</h6>
                    </div>
                    <div>
                      <md-button class="md-raised md-primary" @click="sendInvite()">Send & Invite</md-button>
                    </div>
                  </md-card-actions>-->

                  <md-card-actions>
                    <h6 class="text-success mr-3">{{message}}</h6>
                    <md-button class="md-raised md-primary" @click="sendInvite()">Send & Invite</md-button>
                  </md-card-actions>
                </md-card-content>
              </md-card>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>

    <!-- <referrals-page-modal></referrals-page-modal> -->
  </div>
</template>


<script>
export default {
  props: ["propdata"],
  data() {
    return {
      submitted: false,
      submitted_code: "",
      name: "",
      email: "",
      message: "",
      message1: "",
    };
  },
  created() {
    this.submitted = this.propdata.submitted;
    this.submitted_code = this.propdata.submitted_code;
  },
  methods: {
    submitReferralCode() {
      LoadingOverlay();

      let params = {
        code: this.submitted_code,
      };

      axios
        .post("/referrals/submitReferralCode", params)
        .then((res) => {
          console.log(res);
          this.message1 = res.data;
          LoadingOverlayHide();
          if (res.data == "Submitted Success") {
            this.submitted = true;
          }
        })
        .catch((err) => {
          console.error(err);
          LoadingOverlayHide();
        });
    },
    sendInvite() {
      LoadingOverlay();

      let params = {
        name: this.name,
        email: this.email,
      };

      axios
        .post("/referrals/sendInvite", params)
        .then((res) => {
          console.log(res);
          //   window.location.href = "/referrals";
          this.message = "Email Sent!";
          LoadingOverlayHide();
        })
        .catch((err) => {
          console.error(err);
          LoadingOverlayHide();
        });
    },
  },
};
</script>
