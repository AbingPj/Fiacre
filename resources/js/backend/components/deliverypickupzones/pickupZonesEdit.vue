
<style lang="scss" scoped>
/* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
#map {
  height: 100%;
}
/* Optional: Makes the sample page fill the window. */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>


<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-6">
        <h3 class="card-title mb-0">
          <div class="d-flex">
            <div class="mr-2">
              <a
                href="/admin/pickup-zones"
                class="btn btn-success float-right rounded-0 text-light"
              >
                <i class="fas fa-chevron-circle-left"></i>
              </a>
            </div>
            <div>Edit Pick-up Zone</div>
          </div>
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-8 p-3">
        <div class="col-12 mb-2">
          <div class="form-group">
            <label>Name:</label>
            <input
              v-model="zone.zone_name"
              type="text"
              class="form-control"
              placeholder="Zone Name"
            />
          </div>
          <div class="form-group">
            <label for>Address:</label>
            <!-- <input type="text" class="form-control" @keyup="addressType()" /> -->
            <div class="input-group">
              <input
                v-model="zone.address"
                type="text"
                class="form-control"
                placeholder="Zone Address"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-danger"
                  type="button"
                  @click="getLatLong()"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Get mark on the map"
                >
                  <!-- <i class="fas fa-map-marker mr-2"></i> -->
                  <!-- <i class="fas fa-search-location mr-2 ml-2" style="font-size: 17px;"></i> -->
                  <i class="fas fa-map-marker-alt" style="font-size: 17px;"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12" style="height:300px;">
          <label>Set Marker:</label>
          <div id="map"></div>
          <br />
          <button
            type="button "
            class="btn btn-success float-right"
            @click="updatePickupZone()"
          >Update Zone</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Errors from "../../errorClass";
export default {
  props: ["propszone"],
  data() {
    return {
      markers: [],
      map: {},
      zone: {
        id: "",
        zone_name: "",
        address: "",
        lat: "",
        lng: "",
      },
      timer: null,
      errors: new Errors(),
      // googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: process.env.MIX_GOOGLE_API_KEY
    };
  },
  created() {
    this.loadScript();
  },

  methods: {
    updatePickupZone() {
      LoadingOverlay();
      axios
        .post("/admin/pickup-zones/update", this.zone)
        .then((res) => {
          window.location.href = "/admin/pickup-zones";
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
      this.$events.fire("showErrorMessage", errors);
    },

    initMap() {
      this.zone.id = this.propszone.id;
      this.zone.zone_name = this.propszone.zone_name;
      this.zone.address = this.propszone.address;
      this.zone.lat = this.propszone.lat;
      this.zone.lng = this.propszone.lng;

      let self = this;
      var NewYorkState = { lat: 43.2994285, lng: -74.217933 };
      var USA = { lat: 37.09024, lng: -95.712891 };

      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: USA,
      });

      const location = { lat: this.zone.lat, lng: this.zone.lng };
      this.addMarker(location, 14);

      // This event listener will call addMarker() when the map is clicked.
      this.map.addListener("click", (event) => {
        this.zone.lat = event.latLng.lat();
        this.zone.lng = event.latLng.lng();
        this.addMarker(event.latLng);
        this.getGeocodingReverse(this.zone.lat+','+this.zone.lng)
      });
    },

    // Adds a marker to the map and push to the array.
    addMarker(location, zoom = null) {
      if (this.markers.length != 0) {
        for (let i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
      }
      let self = this;
      const marker = new google.maps.Marker({
        position: location,
        map: self.map,
      });
      this.markers.push(marker);
      if (zoom) {
        this.map.setZoom(zoom);
      }

      this.map.panTo(location);
    },

    selectZone(latitude, lonngitude) {
      this.zone.lat = latitude;
      this.zone.lng = lonngitude;
      const location = { lat: latitude, lng: lonngitude };
      this.addMarker(location, 14);
    },

    getLatLong() {
      let self = this;
      let param = {
        address: this.zone.address,
        key: this.googleAPIKEY,
      };

      $.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        param,
        function (res) {
          let lat = res.results[0].geometry.location.lat;
          let lng = res.results[0].geometry.location.lng;
          self.zone.address = res.results[0].formatted_address;
          self.selectZone(lat, lng);
        }
      ).fail(function () {
        console.log("error");
      });
    },

     getGeocodingReverse(latlng) {
      let self = this;
      let param = {
        latlng: latlng,
        key: this.googleAPIKEY,
      };

      $.get(
        "https://maps.googleapis.com/maps/api/geocode/json",
        param,
        function (res) {
        self.zone.address = res.results[0].formatted_address;
        }
      ).fail(function () {
        console.log("error");
      });
    },

    getLatLong2() {
      let self = this;
      let param = {
        q: this.zone.address,
        key: "4f3f49ebea4488",
        format: "json",
      };

      $.get("https://us1.locationiq.com/v1/search.php", param, function (res) {
        // console.log(res[0]);
        let lat = Number(res[0].lat);
        let lng = Number(res[0].lon);
        // //   self.zone.address = res.results[0].formatted_address;
        self.selectZone(lat, lng);
      }).fail(function () {
        console.log("error");
      });
    },

    loadScript() {
      if (window.google && window.google.maps) {
        this.initMap();
        return;
      }
      var self = this;
      var script = document.createElement("script");
      script.onload = function () {
        if (!window.google && !window.google.maps)
          return void console.error("no google maps script included");
        self.initMap();
      };
      script.async = true;
      script.defer = true;
      script.src =
        "https://maps.googleapis.com/maps/api/js?key="+this.googleAPIKEY+"&libraries=geometry";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
  },
};
</script>
