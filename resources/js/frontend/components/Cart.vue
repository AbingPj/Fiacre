<template>
	<li class="nav-item cart-item" @click="checkoutPage()">
		<a style="padding: 0px" class="nav-link">
			<!-- <img src="/img/sunfarmacy/Icon-awesome-cart-plus.svg" style="width:auto; height:30px;" /> -->
			<i class="fas fa-cart-plus" style="font-size: 30px; color: #339f25">
				<span
					style="font-size: 10px"
					id="sunfarm-badge-1"
					class="badge badge-danger align-top"
					>{{ cart_badge }}</span
				>
			</i>
		</a>
	</li>
</template>
<script>
	import cookies from "js-cookie";
	export default {
		props: [
			"guest",
			"clear_cart",
			"wholesaler_minimum_order_amount",
			"guest_status",
			"user_id",
			"org_id",
			"organization",
		],
		data() {
			return {
				cart: [],
				message: "",
				countFromDB: 0,
			};
		},
		computed: {
			cart_badge() {
				var length = 0;
				if (this.guest == 1) {
					length = this.cart.length;
				} else {
					length = this.countFromDB;
				}
				var badge = "";
				if (length != 0) {
					var badge = length;
				}
				return badge;
			},
		},
		created() {
			if (this.guest_status != "guest-checkout") {
				//  loadingOverlay().cancel(spinHandle);
				//  LoadingOverlay();
				loadingOverlay().cancel(spinHandle);
			}

			if (this.guest == 1) {
				if (this.clear_cart == "clearcart") {
					this.cart = [];
					localStorage.setItem("cart", JSON.stringify(this.cart));
					localStorage.setItem("cart_badge", this.cart.length);
					this.getCart();
				} else {
					this.getCart();
				}
			} else {
				var ff_org_id = cookies.get("ff-org-id");
				if (this.organization) {
					if (ff_org_id != this.org_id) {
						console.log("if");
						cookies.remove("ff-org-id");
						cookies.remove("ff-org-name");
						cookies.remove("ff-org-address");
						const expiryTime = new Date(new Date().getTime() + 86400 * 1000);
						cookies.set("ff-org-id", this.organization.id, {
							expires: expiryTime,
						});
						cookies.set("ff-org-name", this.organization.org_name, {
							expires: expiryTime,
						});
						cookies.set("ff-org-address", this.organization.atr_address, {
							expires: expiryTime,
						});
						this.getCart2();
					} else {
						console.log("else");
						this.getCart2();
					}
				}else{
                    cookies.remove("ff-org-id");
						cookies.remove("ff-org-name");
						cookies.remove("ff-org-address");
                }
			}
		},
		methods: {
			checkoutPage() {
				//   window.location.href = "/products/checkout";
				window.location.href = "/products";
			},

			ifCartExpired() {
				const itemStr = localStorage.getItem("cart_expiry");
				if (!itemStr) {
					return true;
				}
				const item = JSON.parse(itemStr);
				const now = new Date();
				if (now.getTime() > item) {
					return true;
				}
				return false;
			},
			async getCart() {
				if (!this.ifCartExpired()) {
					let lastcart =
						(await JSON.parse(localStorage.getItem("cart") || "null")) || [];
					this.cart = lastcart;
					localStorage.setItem("cart_badge", this.cart.length);
				}
			},
			async getCart2() {
				var org_id = cookies.get("ff-org-id");
				axios
					.get(`/cart/getUserCartCount/${this.user_id}/${org_id}`)
					.then((res) => {
						this.countFromDB = res.data;
					})
					.catch((err) => {
						console.error(err);
					});
			},
			async getCart3(data) {
				axios
					.get(`/cart/getUserCartCount/${this.user_id}/${data}`)
					.then((res) => {
						this.countFromDB = res.data;
					})
					.catch((err) => {
						console.error(err);
					});
			},
		},
		events: {
			updateCartBadge(message) {
				this.message = message;
				this.getCart();
			},
			updateCartBadge2(message) {
				this.message = message;
				this.getCart2();
			},
			updateCartBadge3(message) {
				this.countFromDB = message;
			},
			updateCartBadge4(data) {
				this.getCart3(data);
			},
		},
	};
</script>
