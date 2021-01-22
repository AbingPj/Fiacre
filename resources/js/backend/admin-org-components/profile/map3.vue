<template>
	<div style="width: 100%; height: 300px">
		<gmap-map
			ref="xyz"
			:center="center"
			:zoom="8"
			style="width: 100%; height: 100%"
			:options="{
				zoomControl: true,
				mapTypeControl: false,
				scaleControl: false,
				streetViewControl: false,
				rotateControl: false,
				fullscreenControl: true,
			}"
		>
			<gmap-marker
				:position="MarkerLocation"
				:clickable="true"
				:draggable="true"
				@drag="dragging($event, false)"
				icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
			>
            	<gmap-info-window
					:options="{
						pixelOffset: { width: 0, height: 0 },
						content: `Drag me!`,
						zIndex: 2,
					}"
				>
				</gmap-info-window>
			</gmap-marker>
		</gmap-map>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				MarkerLocation: {},
				center: { lat: 43.2994285, lng: -74.217933 },
			};
		},
		methods: {
			geocoding(data) {
				var self = this;
				let geocoder = new google.maps.Geocoder();
				let address = null;
				geocoder.geocode({ address: data }, function (results, status) {
					if (status == "OK") {
						if (results[0]) {
							const marker = {
								lat: results[0].geometry.location.lat(),
								lng: results[0].geometry.location.lng(),
							};
							self.center = marker;
							self.MarkerLocation = marker;
							self.$parent.org.org_lat = marker.lat;
							self.$parent.org.org_lng = marker.lng;
						}
					}
				});
				// }
			},
			dragging(location, isSet, fromto) {
				let marker = {};
				marker = {
					lat: location.latLng.lat(),
					lng: location.latLng.lng(),
				};
				this.$parent.org.org_lat = marker.lat;
				this.$parent.org.org_lng = marker.lng;
			},
		},
	};
</script>
