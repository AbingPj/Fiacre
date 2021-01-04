<template>
  <div>
    <h4 class="font-weight-bold">Business Information</h4>
    <b-row>
      <b-col md="4">
        <img :src="businessImage" class="w-100" />
        <md-field>
          <label>Business Logo</label>
          <md-file @change="onFileChange2" name="business_image_file" :disabled="!edit==true" />
        </md-field>
      </b-col>
    </b-row>
    <md-field>
      <label>Position / Designation</label>
      <md-input
        v-model="business_designation"
        name="business_designation"
        required
        :disabled="!edit==true"
      ></md-input>
    </md-field>
    <md-field>
      <label>Organization / Business Name</label>
      <md-input v-model="business_name" name="business_name" required :disabled="!edit==true"></md-input>
    </md-field>
    <md-field>
      <label>Business Street Address</label>
      <md-input
        v-model="business_street_address"
        name="business_street_address"
        required
        :disabled="!edit==true"
      ></md-input>
    </md-field>
    <b-row>
      <b-col md="4">
        <md-autocomplete
          md-input-name="business_city"
          v-model="bselectedCity"
          :md-options="cities2"
          @md-changed="getCitiesForAutocomplete"
          @md-opened="getCitiesForAutocomplete"
          :disabled="!edit==true"
        >
          <label>Town/County/City</label>

          <template slot="md-autocomplete-item" slot-scope="{ item }">{{item}}</template>
        </md-autocomplete>
        <!-- <label style="padding:0px; margine:0px;">State</label>
        <select
          class="form-control form-control-sm my-select"
          v-model="bselectedState"
          name="business_state"
          @change="bstatesChange"
          required
          :disabled="!edit==true"
        >
          <option v-for="(item, index) in bstates" :value="item.id" :key="index">{{item.name}}</option>
        </select>-->
      </b-col>
      <b-col md="4">
        <!-- <label style="padding:0px; margine:0px;">City</label>
        <select
          class="form-control form-control-sm my-select"
          v-model="bselectedCity"
          name="business_city"
          :disabled="!edit==true"
        >
          <option v-for="(item, index) in bgetCities" :value="item.id" :key="index">{{item.name}}</option>
        </select>-->

        <md-field>
          <label for="font">State</label>
          <md-select v-model="bselectedState" md-dense>
            <md-option
              v-for="(item, index) in states"
              :key="index"
              :value="item.id"
              :disabled="!edit==true"
            >{{item.name}}</md-option>
          </md-select>
          <input v-model="bselectedState" name="business_state" type="hidden" />
        </md-field>
      </b-col>
      <b-col md="4">
        <md-field>
          <label>Business Zip</label>
          <md-input
            v-model="business_zipcode"
            name="business_zipcode"
            required
            :disabled="!edit==true"
          ></md-input>
        </md-field>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  props: ["user", "edit", "states"],

  data() {
    return {
      businessImage: "/img/no-product-image.png",
      business_designation: "",
      business_name: "",
      business_street_address: "",
      business_zipcode: "",
      bstates: [],
      bselectedCity: "",
      bselectedState: "",
      cities2:[]
    };
  },

  created() {
    if (this.user.customer_role == 3) {
      this.businessImage = this.user.business.business_image_path;
      this.business_designation = this.user.business.designation;
      this.business_name = this.user.business.business_name;
      this.business_street_address = this.user.business.street_address;
      this.bselectedCity = this.user.business.city;
      this.bselectedState = this.user.business.state;
      this.business_zipcode = this.user.business.zipcode;
    }
  },

  methods: {
    onFileChange2(e) {
      console.log(e);
      const file = e.target.files[0];
      this.businessImage = URL.createObjectURL(file);
    },

    getCitiesForAutocomplete(searchTerm) {
      new Promise((resolve) => {
        window.setTimeout(() => {
          if (!searchTerm) {
            this.getCities2();
          } else {
            const term = searchTerm.toLowerCase();
            resolve(
              this.getCities2(term)
              //   this.countryList.filter(({ name }) =>
              //     name.toLowerCase().includes(term)
              //   )
            );
          }
        }, 1000);
      });
    },

    // getSearchCities() {
    //   if (this.timer) {
    //     clearTimeout(this.timer);
    //     this.timer = null;
    //   }
    //   this.timer = setTimeout(() => {
    //     this.getCities2();
    //   }, 700);
    // },

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
};
</script>
