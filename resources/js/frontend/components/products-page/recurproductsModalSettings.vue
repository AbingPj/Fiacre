<template>
  <div>
    <div
      class="modal fade"
      id="recurrSet_modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered product-modaol-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body product-modal-body">
                <h4>Recurring Settings</h4>
                <div class="settings-cont settings-pickup mt-3 mb-3">
                    <div class="settings-heading">Select Type</div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="typeOptions" id="set-pickup" :value="0" v-model="recurSettings.is_pickup">
                    <label class="form-check-label" for="set-pickup">For Pickup</label>
                    </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="typeOptions" id="set-delivery" :value="1" v-model="recurSettings.is_pickup">
                    <label class="form-check-label" for="set-delivery">For Delivery</label>
                    </div>
                </div>
                <div class="settings-cont settings-pickup mb-3">
                    <div class="settings-heading">Select Schedule</div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="typeSched" id="set-week" :value="1" v-model="recurSettings.week_schedule">
                    <label class="form-check-label" for="set-week">Every Week</label>
                    </div>
                    <!-- <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="typeSched" id="set-week2" :value="2" v-model="recurSettings.week_schedule">
                    <label class="form-check-label" for="set-week2">Every 2 Weeks</label>
                    </div> -->
                </div>
                <div class="settings-cont settings-day">
                    <div class="settings-heading">Select Day</div>
                    <select
                      v-model="recurSettings.day"
                      class="form-control"
                      id="category"
                      name="category"
                    >
                      <option :value="0">Sunday</option>
                      <option :value="1">Monday</option>
                      <option :value="2">Tuesday</option>
                      <option :value="3">Wednesday</option>
                      <option :value="4">Thursday</option>
                      <option :value="5">Friday</option>
                      <option :value="6">Saturday</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-success" @click="saveSettings()">Save</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "resources/sass/mixins";

.product-modaol-dialog {
  max-width: 700px;
}
.product-modal-body {
  padding: 40px 20px;
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
  border-radius: 8px 8px 8px 8px;
}
.p-image {
  padding-right: 20px;
  margin-right: 0px;
}
.p-content {
  padding-left: 0px;
  margin-left: 0px;
  @include mobile {
    padding: 10px 20px 10px 20px;
  }
}
.settings-cont {
  padding-top:10px;
  border-top:1px solid #dcdcdc;
}
.settings-heading {
  font-weight:bold;
  margin-bottom:10px;
}

.minmax-color {
  color: #007bff;
}
</style>

<script>
export default {
  data() {
    return {
        productName: "",
        productID: "",
        recurSettings: {
          is_pickup: 0,
          week_schedule: 1,
          day: 0
        }
    };
  },
  methods: {
    saveSettings() {
      console.log(this.recurSettings)
      LoadingOverlay();
      axios
      .post("/setUserRecurringSettings", {
          is_pickup: this.recurSettings.is_pickup,
          week_schedule: this.recurSettings.week_schedule,
          day:  this.recurSettings.day
      })
      .then((res) => {
          window.location.href = "/recurring-products";
      })
      .catch((err) => {
          console.error(err);
          window.location.href = "/recurring-products";
      });
    }
  }
};
</script>
