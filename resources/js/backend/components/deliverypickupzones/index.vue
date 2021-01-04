
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
    <div class="row">
      <div class="col-sm-4">
        Your Zones:
        <br />
        <ul class="list-group">
          <li class="list-group-item" @click="selectZone(-34.397, 150.644)">
            <i class="fas fa-map-marker mr-2"></i> New York, NY
          </li>
          <li class="list-group-item" @click="selectZone(7.036894, 125.575153)">
            <i class="fas fa-map-marker mr-2"></i> Wilmart, Ny
          </li>
          <li class="list-group-item" @click="selectZone(40.712775, -74.0005973)">
            <i class="fas fa-map-marker mr-2"></i> Dumalag, 1 Matina Aplaya
          </li>
          <!-- <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>-->
        </ul>
      </div>
      <div class="col-sm-8 border border-info p-3">
        <div class="col-12 mb-2">
          <div class="form-group">
            <label for>Address:</label>
            <div class="row">
              <div class="col-10">
                <input type="text" class="form-control" />
              </div>
              <div class="col-2">
                <button type="button " class="btn btn-primary">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12" style="height:300px;">
          <div id="map"></div>
          <br />
          <button type="button " class="btn btn-success float-right">Add Zone</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      marker: [],
      map: {},
    };
  },
  created() {
    this.loadScript();
  },

  methods: {
    initMap() {
      var myLatlng = { lat: 43.2994285, lng: -74.217933 };
      this.map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: myLatlng,
      });

      let self = this;
      this.map.addListener("click", function (mapsMouseEvent) {
        // if (self.marker) {
        //   self.marker.setMap(null);
        // }
        console.log(mapsMouseEvent.latLng);
        console.log(mapsMouseEvent.latLng.lat());
        console.log(mapsMouseEvent.latLng.lng());

        self.marker = new google.maps.Marker({
          zoom: 10,
          position: mapsMouseEvent.latLng,
          map: self.map,
        });
        self.map.panTo(mapsMouseEvent.latLng);
      });
    },

    selectZone(latitude, lonngitude) {
    //   if (this.marker) {
    //     this.marker.setMap(null);
    //   }
      const latLng = { lat: latitude, lng: lonngitude };
      let self = this;
      this.marker = new google.maps.Marker({
        zoom: 6,
        position: latLng,
        map: this.map,
      });

      this.map.panTo(latLng);
    },

    // setMapOnAll(map) {
    //   for (let i = 0; i < markers.length; i++) {
    //     markers[i].setMap(map);
    //   }
    // },

    // clearMarkers() {
    //   setMapOnAll(null);
    // },

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
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo&libraries=geometry";
      document.getElementsByTagName("head")[0].appendChild(script);
    },
  },
};
</script>
