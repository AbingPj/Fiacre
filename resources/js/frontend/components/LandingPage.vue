<template>
  <div>
    <div class="hero">
      <b-carousel class="carousel-center" :interval="60000" indicators fade>
        <b-carousel-slide :img-src="store_settings.landing.img_link_slider1">
          <div class="d-flex h-100 align-items-center justify-content-center">
            <div>
              <img class="sunfarm-logo" :src="store_settings.landing.img_link_logo" />
              <h1 class="sunfarm-header">{{ store_settings.landing.header }}</h1>
              <h6 class="sunfarm-content">{{ store_settings.landing.content }}</h6>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide :img-src="store_settings.landing.img_link_slider2">
          <div class="d-flex h-100 align-items-center justify-content-center">
            <div>
              <img class="sunfarm-logo" :src="store_settings.landing.img_link_logo" />
              <h1 class="sunfarm-header">{{ store_settings.landing.header }}</h1>
              <h6 class="sunfarm-content">{{ store_settings.landing.content }}</h6>
            </div>
          </div>
        </b-carousel-slide>
        <b-carousel-slide :img-src="store_settings.landing.img_link_slider3">
          <div class="d-flex h-100 align-items-center justify-content-center">
            <div>
              <img class="sunfarm-logo" :src="store_settings.landing.img_link_logo" />
              <h1 class="sunfarm-header">{{ store_settings.landing.header }}</h1>
              <h6 class="sunfarm-content">{{ store_settings.landing.content }}</h6>
            </div>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    <!-- <div class="container text-center about">
      <h1 class="header">{{ store_settings.landing_about_header }}</h1>
      <br />
      <p>{{ store_settings.landing_about_content1 }}</p>
      <p>{{ store_settings.landing_about_content2 }}</p>
    </div>-->
    <div class="container products">
      <div class="row">
        <div class="col-12">
          <h1 class="text-center header">Featured Products</h1>
        </div>
      </div>

      <div class="row row-products">
        <div
          class="col-lg-3 col-md-6 col-sm-12 product"
          v-for="(item, index) in featuredProducts"
          :key="index"
        >
          <img :src="item.image_link" />
          <h6>{{ item.name }}</h6>
          <h4>
            <b>$ {{ updatePrice(item) }}</b>
          </h4>
          <b-button squared block variant="outline-success" @click="viewMore()">ORDER</b-button>
        </div>
      </div>
    </div>
    <div class="container text-center viewmore">
      <b-button squared variant="success" size="lg" @click="viewMore()">View More</b-button>
    </div>
    <div class="container text-center footer">
      <b-nav justified align="center" class="bg-transparent">
        <a :href="`mailto:${store_settings.email}`">
          <b-nav-text class="text-color border-right p-3">{{ store_settings.email }}</b-nav-text>
        </a>
        <a href="/terms-of-use">
          <b-nav-text class="text-color border-right p-3">Term of Sale & Return Policy</b-nav-text>
        </a>
        <a href="/privacy-policy">
          <b-nav-text class="text-color p-3">Privacy Policy</b-nav-text>
        </a>
      </b-nav>
      <b-nav justified align="center" class="bg-transparent">
        <b-nav-text class="text-secondary p-3 mr-3">© 2021 Copyright, oheavenly.com</b-nav-text>
      </b-nav>
    </div>
  </div>
</template>

<script>
export default {
  props: ["store_settings"],
  data() {
    return {
      featuredProducts: [],
    };
  },
  //   beforeCreate(){
  //       LoadingOverlay();
  //   },
  created() {
    this.getFeaturedProducts();
  },
  methods: {
    updatePrice(data) {
      if (data.price == "" || data.price == null) {
        return 0.0;
      } else {
        return data.price.toFixed(2);
      }
    },
    getFeaturedProducts() {
      axios
        .get("/api/feature/products")
        .then((res) => {
          this.featuredProducts = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    viewMore() {
      window.location.href = "/products";
    },
  },
  mounted() {
    // loadingOverlay().cancel(spinHandle);
    // LoadingOverlayHide();
  },
};
</script>

<style lang="scss">
@import "resources/sass/mixins";

.hero {
  background-color: black;
  margin-top: -120px;
  padding: 0px;

  // TO Triangle in bottom
  .carousel-inner:after {
    z-index: 1;
    content: "";
    position: absolute;
    margin-bottom: 0px !important;
    padding-bottom: 0px;
    bottom: 0;
    left: 0;
    border-left: 50vw solid #fff;
    border-right: 50vw solid #fff;
    border-top: 100px solid transparent;
    @include mobile {
      margin-bottom: -1px !important;
      border-top: 50px solid transparent;
    }
  }
  ///
  .carousel-center {
    .carousel-caption {
      top: 100px;
    }
  }
  .img-fluid {
    max-width: 100%;
    opacity: 0.3;
    height: auto;
    max-height: 850px;
    // object-fit: cover;

    @include mobile {
      max-width: 100%;
      object-fit: cover;
      opacity: 0.3;
      height: 500px;
    }

    @include tablet {
      max-width: 100%;
      //   object-fit: cover;
      opacity: 0.3;
      height: 600px;
    }

    // desktop
    @media (min-width: 992px) and (max-width: 1439px) {
      max-width: 100%;
      //   object-fit: cover;
      opacity: 0.3;
      min-height: 600px;
      max-height: 818px;
    }

    // //  desktop-large
    // @media (min-width: 1440px) and (max-width: 2559px) {
    //   max-width: 100%;
    //   //   object-fit: cover;
    //   opacity: 0.3;
    //   max-height: 900px;
    // }
  }
  .sunfarm-logo {
    width: auto;
    height: 250px !important;
    @include mobile {
      height: 150px !important;
    }
    @include tablet {
      height: 150px !important;
    }
  }
  .sunfarm-header {
    @include mobile {
      font-size: 20px;
    }
    @include tablet {
      font-size: 20px;
    }
  }
  .sunfarm-content {
    @include mobile {
      font-size: 12px;
    }
    @include tablet {
      font-size: 12px;
    }
  }
}

.about {
  margin-top: 50px;
  padding: 50px;
  .header {
    color: #88c43a !important;
  }
  p {
    padding-left: 100px;
    padding-right: 100px;
    @include mobile {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}
.location {
  //   padding-left: 100px;
  //   padding-right: 100px;
  margin-bottom: 100px;
  .google-map-location {
    width: 100%;
    height: 500px;
  }
  img {
    width: 100%;
    height: auto;
  }
}
.products {
  padding: 0px 0px;
  margin-top: 50px;
  margin-bottom: 30px;
  .header {
    color: #88c43a !important;
  }
  .row-products {
    padding: 30px 0px;
    margin-right: 0px;
    margin-left: 0px;
    .product {
      margin-bottom: 30px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        margin-bottom: 20px;
      }
      h6 {
        text-overflow: ellipsis;
        margin-bottom: 20px;
        // background: red;
        min-height: 40px;
        max-height: 40px;
        overflow: hidden;
        // white-space: nowrap; /* Don't forget this one */
      }
      p {
        margin-bottom: 20px;
        color: #88c43a;
      }
      h4 {
        margin-bottom: 20px;
      }
      button.btn-outline-success {
        color: #88c43a;
        border-color: #88c43a !important;
      }
    }
  }
}
.viewmore {
  margin-bottom: 100px;
  .btn-success {
    color: #fff;
    background-color: #88c43a;
    border-color: #88c43a;
  }

  .btn-lg {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;
    width: 200px;
  }
}
.footer {
  margin-bottom: 30px;
  .text-color {
    color: #88c43a;
    font-size: 15px;
  }
  .border-right {
    // border-color: #88c43a;
    border-right: 2px solid #88c43a !important;
  }
}
</style>
