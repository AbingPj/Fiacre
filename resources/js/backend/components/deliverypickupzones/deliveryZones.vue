
<style lang="scss" scoped>
/* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
#map {
  height: 100%;
}
/* Optional: Makes the sample page fill the window. */
// html,
// body {
//   height: 100%;
//   margin: 0;
//   padding: 0;
// }

.btn-edit {
  background: transparent;
  border: 0px;
  color: gray;
  font-size: 20px;
}
</style>


<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4 pr-0 pl-0">
        <h4>
          Delivery Zones:
          <button
            v-if="zones.length != 0"
            type="button"
            class="btn btn-success float-right"
            @click="addDeliveryZone()"
          >Add More Zone</button>
        </h4>

        <br />

        <div v-if="zones.length == 0" class="text-center mt-5">
          <h3>No Delivery Zone Yet</h3>
          <h4>
            <button
              type="button"
              class="btn btn-success"
              @click="addDeliveryZone()"
            >Add Delivery Zone Here</button>
          </h4>
        </div>

        <ul class="list-group">
          <li
            class="list-group-item list-group-item-action pr-1"
            v-for="(item, index) in zones"
            :key="index"
            @click="changeCenter(item.lat, item.lng)"
          >
            <h5>
              <b>{{item.zone_name}}</b>
              <button type="button" class="btn-edit float-right" @click="updateZone(item)">
                <!-- <i class="fas fa-pencil-alt"></i> -->
                <i class="fas fa-edit"></i>
              </button>
            </h5>
            <i class="fas fa-map-marker mr-2"></i>
            {{item.address}}
          </li>
        </ul>
      </div>
      <div class="col-sm-8">
        <div class="col-12" style="height:500px;">
          <div id="map"></div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      markers: [],
      map: {},
      address: "",
      zones: [],
    //   googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
      googleAPIKEY: process.env.MIX_GOOGLE_API_KEY
    };
  },
  created() {
    LoadingOverlay();
    this.getAllDeliveryZones();
  },

  methods: {
    addDeliveryZone() {
      LoadingOverlay();
      window.location.href = "/admin/delivery-zones/add";
    },

    updateZone(data) {
      LoadingOverlay();
      window.location.href = "/admin/delivery-zones/edit/" + data.id;
    },

    getAllDeliveryZones() {
      axios.get("/admin/delivery-zones/getAllDeliveryZones").then((res) => {
        this.loadScript();
        this.zones = res.data;
      });
    },
    initMap() {
      let self = this;
      var NewYorkState = { lat: 43.2994285, lng: -74.217933 };
      var USA = { lat: 37.09024, lng: -95.712891 };

      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: USA,
      });

      this.zones.forEach((element) => {
        var location = { lat: element.lat, lng: element.lng };
        const marker = new google.maps.Marker({
          position: location,
          map: self.map,
        });
        this.markers.push(marker);
      });

      LoadingOverlayHide();
    },

    changeCenter(latitude, lonngitude) {
      const location = { lat: latitude, lng: lonngitude };
      this.map.setZoom(13); // This will trigger a zoom_changed on the map
      this.map.panTo(location);
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
