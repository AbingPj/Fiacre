<template>
	<div style="height:300px; width:100%;">
        <div id="map"></div>
    </div>
</template>
<script>
import Errors from "../../errorClass";
	export default {
		data() {
			return {
				markers: [],
				map: {},
				  zone: {
				    zone_name: "",
				    address: "",
				    lat: "",
				    lng: "",
				  },
				  timer: null,
				  errors: new Errors(),
				  googleAPIKEY: "AIzaSyBcGVvS9JvgWmMdFVEbPxZTUWUi9qJt4Vo"
				// googleAPIKEY: process.env.MIX_GOOGLE_API_KEY,
			};
		},
		created() {
			this.loadScript();
		},
		methods: {
			initMap() {
                console.log('initMap');
				let self = this;
				var NewYorkState = { lat: 43.2994285, lng: -74.217933 };
				var USA = { lat: 37.09024, lng: -95.712891 };
				this.map = new google.maps.Map(document.getElementById("map"), {
					zoom: 4,
					center: USA,
				});

				// This event listener will call addMarker() when the map is clicked.
				this.map.addListener("click", (event) => {
					this.zone.lat = event.latLng.lat();
					this.zone.lng = event.latLng.lng();
					this.addMarker(event.latLng);
					this.getGeocodingReverse(this.zone.lat + "," + this.zone.lng);
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

			loadScript() {
                console.log('loadScript');
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
					"https://maps.googleapis.com/maps/api/js?key=" +
					this.googleAPIKEY +
					"&libraries=geometry";
				document.getElementsByTagName("head")[0].appendChild(script);
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
		},
	};
</script>
