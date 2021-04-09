<template>
  <form :action="action" method="POST" enctype="multipart/form-data">
    <input type="hidden" name="_token" :value="csrf" />
    <input type="hidden" name="store_id" :value="store.id" />

    <div class="row">
      <div class="col-md-12">
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="image_path" class="font-weight-bold">Store Logo</label>
            <br />
            <img
              :src="displayImage"
              class="mb-3"
              style="width:100px; height:100px; object-fit: cover;"
            />
            <div class="custom-file mb-3">
              <input
                @change="onFileChange"
                type="file"
                class="custom-file-input"
                id="image_path"
                name="image_path"
              />
              <label class="custom-file-label" for="image_path">Choose file...</label>
            </div>
          </div>
          <div class="col-md-8">
            <div class="float-right">
              <button type="submit" class="btn btn-success">SAVE</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <br />
        <h5>Store information:</h5>
        <br>

        <div class="form-group">
          <label for="name" class="font-weight-bold">Store Name</label>
          <input v-model="store.name" type="text" class="form-control" name="name" value required />
        </div>
        <div class="form-group">
          <label for="email" class="font-weight-bold">Email</label>
          <input
            v-model="store.email"
            type="email"
            class="form-control"
            id="email"
            name="email"
            value
            required
          />
        </div>

        <div class="form-group">
          <label for="phone" class="font-weight-bold">Contact Nmber</label>
          <input
            v-model="store.phone"
            type="text"
            class="form-control"
            id="phone"
            name="phone"
            value
            required
          />
        </div>
        <br />
        <h5>Address:</h5>

          <div class="form-group">
          <label for="street_address" class="font-weight-bold">Street Address</label>
          <textarea
            v-model="store.street_address"
            class="form-control"
            id="street_address"
            name="street_address"
            required
          ></textarea>
        </div>

        <!-- <div class="form-group">
          <label for="city" class="font-weight-bold">City</label>
          <select class="form-control" id="city" name="city" v-model="selectedCity" required>
            <option v-for="(item, index) in getCities" :value="item.id" :key="index">{{item.name}}</option>
          </select>
        </div> -->


         <div class="form-group">
            <label for="zipcode" class="font-weight-bold">City</label>
            <input
                v-model="store.city"
                type="text"
                class="form-control"
                id="city"
                name="city"
                value
                required
            />
            </div>



         <div class="form-group">
          <label for="state" class="font-weight-bold">State</label>
          <select
            class="form-control"
            id="state"
            name="state"
            v-model="selectedState"
            required
          >
            <option v-for="(item, index) in states" :value="item.id" :key="index">{{item.name}}</option>
          </select>
        </div>



        <div class="form-group">
          <label for="zipcode" class="font-weight-bold">Zip Code</label>
          <input
            v-model="store.zipcode"
            type="text"
            class="form-control"
            id="zipcode"
            name="zipcode"
            value
            required
          />
        </div>
      </div>
      <div class="col-md-7 mt-3">
        <!-- <h5>Landing Page Content:</h5>
        <div class="form-group">
          <label for="landing_header" class="font-weight-bold">Header</label>
          <textarea
            v-model="store.landing_header"
            class="form-control"
            id="landing_header"
            name="landing_header"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <label for="content" class="font-weight-bold">Content</label>
          <textarea
            v-model="store.landing_content"
            class="form-control"
            id="landing_content"
            name="landing_content"
            rows="4"
            required
          ></textarea>
        </div>
        <br />
        <br /> -->
        <h5>Others:</h5>
        <br>

        <div class="form-group">
          <label for="name" class="font-weight-bold">Wholesaler Discount</label>
          <div class="input-group">
            <input
              v-model="store.wholesaler_discount"
              type="text"
              class="form-control"
              id="wholesaler_discount"
              name="wholesaler_discount"
              @keypress="onlyNumber"
              required
            />
            <div class="input-group-append">
              <span class="input-group-text">%</span>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="name" class="font-weight-bold">Wholesaler Minimum Order Amount</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              v-model="store.wholesaler_minimum_order_amount"
              type="text"
              class="form-control"
              id="wholesaler_minimum_order_amount"
              name="wholesaler_minimum_order_amount"
              @keypress="onlyNumber"
              required
            />
          </div>
        </div>

         <div class="form-group">
                <label for="wsrvisible">Wholesaler Sign-up Visibility</label>
                 <div class="custom-control custom-switch">
                <input
                 :checked="store.wholesaler_signup_is_hide != 1 ? true: false"
                  type="checkbox"
                  class="custom-control-input"
                  id="wsrvisible"
                  name="wsrvisible"
                />
                <label class="custom-control-label" for="wsrvisible">Show/Hide</label>
                <!-- <label class="custom-control-label" for="wsrvisible">{{ store.wholesaler_signup_is_hide == 1? 'hide' : 'show' }}</label> -->
              </div>
              </div>


        <div class="form-group">
          <label for="name" class="font-weight-bold">Delivery Fee</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              v-model="store.delivery_fee"
              type="text"
              class="form-control"
              id="delivery_fee"
              name="delivery_fee"
              @keypress="onlyNumber"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label for="name" class="font-weight-bold">Expected Delivery Days</label>
          <div class="input-group">
            <input
              v-model="store.expected_delivery_days"
              type="text"
              class="form-control"
              id="expected_delivery_days"
              name="expected_delivery_days"
              @keypress="onlyNumber"
              required
            />
            <div class="input-group-append">
              <span class="input-group-text">Days</span>
            </div>
          </div>
        </div>


        <div class="form-group">
          <label for="name" class="font-weight-bold">Referral Amount</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input
              v-model="store.referral_amount"
              type="text"
              class="form-control"
              id="referral_amount"
              name="referral_amount"
              @keypress="onlyNumber"
              required
            />
          </div>
        </div>



      </div>

      <!-- <div class="col-md-12">
      <div class="float-right">
        <button type="submit" class="btn btn-success">Update</button>
      </div>
      </div>-->
    </div>
  </form>
</template>

<script>
export default {
  props: [
    "city",
    "state",
    "action",
    "prop_store",
    "prop_cities",
    "prop_states",
  ],
  data() {
    return {
      displayImage: "",
      store: {},
      states: [],
      cities: [],
      selectedCity: 0,
      selectedState: 0,
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    };
  },
  created() {
    this.selectedCity = this.city;
    this.selectedState = this.state;
    this.store = this.prop_store;
    this.displayImage = this.prop_store.image_link;
    this.cities = this.prop_cities;
    this.states = this.prop_states;
  },
  computed: {
    getCities() {
      let cities = this.cities;
      let filter = [];
      var id = this.selectedState;
      var filteredCities = cities.filter(function (city) {
        return city.state_id == id;
      });
      filter = filteredCities;
      return filter;
    },
  },

  methods: {
    onFileChange(e) {
      //   console.log(e);
      const file = e.target.files[0];
      this.displayImage = URL.createObjectURL(file);
    },
    statesChange() {
      this.selectedCity = {};
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },
};
</script>
