<style lang="scss" scoped>
@import "resources/sass/mixins";

.product-modaol-dialog {
  max-width: 700px;
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
<style lang="scss">
.md-menu-content.md-select-menu {
  z-index: 1200 !important;
  max-width: 200px !important;
  //   width: 100% !important;
}
.md-menu-content {
  z-index: 1200 !important;
  max-width: 200px !important;
  min-width: 200px !important;
}

.md-menu-content-2 {
  z-index: 1200 !important;
  max-width: 200px !important;
  min-width: 200px !important;
}
</style>

<template>
  <div>
    <div
      class="modal fade"
      id="guestAddressModal"
      tabindex="-1"
      role="dialog"
      data-backdrop="static"
      aria-labelledby="guestAddressModalLabel"
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
                    <i class="fas fa-map-marker-alt"></i> Enter Your Address
                  </h4>
                  <br />
                  <md-field>
                    <label>Street Address</label>
                    <md-input v-model="address.street_address" name="street_address"></md-input>
                  </md-field>

                  <b-row>
                    <b-col md="4">
                      <div class="my-style">
                        <!-- <md-autocomplete
                          v-model="address.city"
                          :md-options="cities2"
                          @md-changed="getCitiesForAutocomplete"
                          @md-opened="getCitiesForAutocomplete"
                        >
                          <label>City</label>
                          <template slot="md-autocomplete-item" slot-scope="{ item }">{{item}}</template>
                        </md-autocomplete> -->
                         <label>Town/County/City</label>
                         <v-select
                            @search="fetchOptions"
                            v-model="address.city"
                            :options="cities3"
                            :multiple="false"
                            :disabled="false"
                            :clearable="true"
                            :searchable="true"
                            :filterable="true"
                            :taggable="true"
                            :no-drop="false"
                            :push-tags="true"
                            :select-on-tab="true"
                        ></v-select>
                      </div>
                    </b-col>
                    <b-col md="4">
                      <!-- <md-field>
                        <label>State</label>
                        <md-select v-model="address.state" md-dense :style="'z-index: 2000;'">
                          <md-option
                            v-for="(item, index) in states"
                            :key="index"
                            :value="item.id"
                          >{{item.name}}</md-option>
                        </md-select>
                        <input v-model="address.id" name="state" type="hidden" />
                      </md-field> -->
                      <label>State</label>
                      <v-select
                        label="name"
                        v-model="address.state"
                        :reduce="state => state.id"
                        :options="states2"
                        :clearable="false"
                      ></v-select>
                    </b-col>
                    <b-col md="4">
                      <md-field>
                        <label>Zip</label>
                        <md-input v-model="address.zipcode" name="zipcode" required></md-input>
                      </md-field>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <button
                        type="button"
                        class="btn btn-info float-right"
                        :disabled="submitDisabled"
                        @click="done()"
                      >Done</button>
                    </b-col>
                  </b-row>

                    <!-- <b-row>
                    <b-col>
                      <v-select
                      @search="fetchOptions"
                      v-model="selectedCity3"
                      :options="cities3"
                      :multiple="false"
                      :disabled="false"
                      :clearable="true"
                      :searchable="true"
                      :filterable="true"
                      :taggable="true"
                      :no-drop="false"
                      :push-tags="true"
                      :select-on-tab="true"
                      ></v-select>
                    </b-col>
                  </b-row> -->


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
  created() {
    this.getStates();
  },
  mounted() {
      axios({
        method: "get",
        url: "/data/searchcities"
      }).then((res) => {
        this.cities3 = res.data;
      });
  },
  data() {
    return {
      address: {
        street_address: null,
        city: null,
        state: 1456,
        zipcode: null,
      },
      city: null,
      cities2: [],
      cities3: [],
      states: [],
      states2: [],
      selectedCity3:null,
      sampleChange:null,
      timer:null
    };
  },
  methods: {
    done() {
      $("#guestAddressModal").modal("hide");
      this.$parent.guestHasAddress = true;

      let address =
        this.address.street_address +
        ", " +
        this.address.city +
        ", " +
        this.selectedStateName +
        ", " +
        this.address.zipcode +
        ", USA"
        ;

      this.$parent.guestAddressObj = this.address;
      this.$parent.guestAddress = address;
      this.$parent.showGuestAddress(address);
    },
    fetchOptions (search, loading) {
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.timer = setTimeout(() => {
            this.getCities3(search);
        }, 300);
    },

    async getCities3(searching = null) {
      let param;
      param = {
        search: searching,
      };
      await axios({
        method: "get",
        url: "/data/searchcities",
        params: param,
      }).then((res) => {
        this.cities3 = res.data;
      });
  },


    getStates() {
      axios
        .get("/states")
        .then((res) => {
          this.states = res.data;
          this.states2 = res.data;
          this.$parent.guestAddressModalIsReady = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getCitiesForAutocomplete(searchTerm) {
      new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            this.getCities2();
          } else {
            const term = searchTerm.toLowerCase();
            resolve(this.getCities2(term));
          }
        }, 1000);
      });
    },

    async getCities2(searching = null) {
      let param;
      param = {
        search: searching,
      };
      await axios({
        method: "get",
        url: "/data/searchcities",
        params: param,
      }).then((res) => {
        this.cities2 = res.data;
      });
    },
  },

  computed: {
    selectedStateName() {
      let name = null;
      for (var i in this.states) {
        if (this.states[i].id == this.address.state) {
          name = this.states[i].name;
        }
      }
      return name;
    },

    submitDisabled() {
      let bol = false;
      if (
        this.address.street_address == "" ||
        this.address.city == "" ||
        this.address.state == "" ||
        this.address.zipcode == "" ||
        this.address.street_address == null ||
        this.address.city == null ||
        this.address.state == null ||
        this.address.zipcode == null
      ) {
        bol = true;
      } else {
        bol = false;
      }
      return bol;
    },
  },
};
</script>
