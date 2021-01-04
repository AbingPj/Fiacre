<template>
  <li class="nav-item cart-item" @click="checkoutPage()">
    <a style="padding:0px;" class="nav-link">
      <!-- <img src="/img/sunfarmacy/Icon-awesome-cart-plus.svg" style="width:auto; height:30px;" /> -->
      <i class="fas fa-cart-plus" style="font-size:30px; color: #339f25;">
        <span
          style="font-size:10px;"
          id="sunfarm-badge-1"
          class="badge badge-danger align-top"
        >{{cart_badge}}</span>
      </i>
    </a>
  </li>
</template>
<script>
export default {
  props: [
    "guest",
    "clear_cart",
    "wholesaler_minimum_order_amount",
    "guest_status",
  ],
  data() {
    return {
      cart: [],
      message: "",
    };
  },
  computed: {
    cart_badge() {
      var length = this.cart.length;
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

    if (this.clear_cart == "clearcart") {
      this.cart = [];
      localStorage.setItem("cart", JSON.stringify(this.cart));
      localStorage.setItem("cart_badge", this.cart.length);
      this.getCart();
    } else {
      this.getCart();
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
  },
  events: {
    updateCartBadge(message) {
      this.message = message;
      this.getCart();
    },
  },
};
</script>
