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
		],
		data() {
			return {
				cart: [],
				message: "",
                countFromDB:0
			};
		},
		computed: {
			cart_badge() {
                var length = 0;
                if(this.guest == 1){
                    length = this.cart.length;
                }else{
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
                this.getCart2();
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
                axios.get(`/cart/getUserCartCount/${this.user_id}/${org_id}`)
                .then(res => {
                    this.countFromDB = res.data;
                })
                .catch(err => {
                    console.error(err);
                })
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
		},
	};
</script>
