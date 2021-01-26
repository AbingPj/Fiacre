<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-2">Settings</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link"
              :class="selected_tab == 0? 'active':'' "
              href="/admin/settings/main/storeprofile"
              :aria-selected="selected_tab == 0? 'true':'false' "
            >Store Profile</a>
            <!--
            <a
              class="nav-item nav-link"
              :class="selected_tab == 1? 'active':'' "
              href="/admin/settings/main/membership"
              :aria-selected="selected_tab == 1? 'true':'false' "
            >Membership</a>
            -->
            <a
              class="nav-item nav-link"
              :class="selected_tab == 2? 'active':'' "
              href="/admin/settings/main/homepage"
              :aria-selected="selected_tab == 2? 'true':'false' "
            >Home Page Content</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 3? 'active':'' "
               href="/admin/settings/main/aboutus"
              :aria-selected="selected_tab == 3? 'true':'false' "
            >About Us Content</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 4? 'active':'' "
              href="/admin/settings/main/faqs"
              :aria-selected="selected_tab == 4? 'true':'false' "
            >FAQ`s Content</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 5? 'active':'' "
              href="/admin/settings/main/terms"
              :aria-selected="selected_tab == 5? 'true':'false' "
            >Terms Content</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 6? 'active':'' "
              href="/admin/settings/main/privacy"
              :aria-selected="selected_tab == 6? 'true':'false' "
            >Privacy Policy Content</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade"
            :class="selected_tab == 0? 'active show':'' "
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <admin-settings-store-tab
              ref="store_tab"
              :action="store_action"
              :prop_store="prop_store"
              :prop_cities="prop_cities"
              :prop_states="prop_states"
              :city="prop_store.city"
              :state="prop_store.state"
            ></admin-settings-store-tab>
          </div>
          <div
            class="tab-pane fade"
            :class="selected_tab == 1? 'active show':'' "
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <admin-settings-membership-tab
              ref="membership_tab"
              :choices="prop_sunclub_choices"
              :prop_store="prop_store"
              :sunclub_action_add="sunclub_action_add"
              :sunclub_action_update="sunclub_action_update"
            ></admin-settings-membership-tab>
          </div>

          <!-- <div
            class="tab-pane fade"
            :class="selected_tab == 2? 'active show':'' "
            id="nav-refferals"
            role="tabpanel"
            aria-labelledby="nav-refferals-tab"
          >
            <admin-settings-refferals-coupon :store="prop_store"></admin-settings-refferals-coupon>
          </div>-->

          <div
            class="tab-pane fade"
            :class="selected_tab == 2? 'active show':'' "
            id="nav-landing"
            role="tabpanel"
            aria-labelledby="nav-landing-tab"
          >
            <admin-settings-landing-tab :store="prop_store"></admin-settings-landing-tab>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 3? 'active show':'' "
            id="nav-about"
            role="tabpanel"
            aria-labelledby="nav-about-tab"
          >
            <admin-settings-aboutus-tab :store="prop_store"></admin-settings-aboutus-tab>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 4? 'active show':'' "
            id="nav-faqs"
            role="tabpanel"
            aria-labelledby="nav-faqs-tab"
          >
            <admin-settings-faqs-tab :store="prop_store"></admin-settings-faqs-tab>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 5? 'active show':'' "
            id="nav-terms"
            role="tabpanel"
            aria-labelledby="nav-terms-tab"
          >
            <admin-settings-terms-tab :store="prop_store"></admin-settings-terms-tab>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 6? 'active show':'' "
            id="nav-privacy"
            role="tabpanel"
            aria-labelledby="nav-privacy-tab"
          >
            <admin-settings-privacy-tab :store="prop_store"></admin-settings-privacy-tab>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const SetStoreTab = () =>
  import(/* webpackChunkName: "js/b/StoreTab" */ "./tab1.vue");
// const SetMembershipTab = () =>
  // import(/* webpackChunkName: "js/b/SetMembershipTab" */ "./tab2.vue");
const tabAboutUs = () =>
  import(/* webpackChunkName: "js/b/tabAboutUs" */ "./tabAboutUs.vue");
const tabFaqs = () =>
  import(/* webpackChunkName: "js/b/tabFaqs" */ "./tabFaqs.vue");
const tabPrivacy = () =>
  import(/* webpackChunkName: "js/b/tabPrivacy" */ "./tabPrivacy.vue");
const tabTerms = () =>
  import(/* webpackChunkName: "js/b/tabTerms" */ "./tabTerms.vue");
const tabLandingPage = () =>
  import(/* webpackChunkName: "js/b/tabLandingPage" */ "./tabLandingPage.vue");

export default {
  components: {
    "admin-settings-store-tab": SetStoreTab,
    // "admin-settings-membership-tab": SetMembershipTab,
    "admin-settings-aboutus-tab": tabAboutUs,
    "admin-settings-faqs-tab": tabFaqs,
    "admin-settings-privacy-tab": tabPrivacy,
    "admin-settings-terms-tab": tabTerms,
    "admin-settings-landing-tab": tabLandingPage,
  },
  props: [
    "prop_store",
    "prop_sunclub_choices",
    "prop_states",
    "prop_cities",
    "store_action",
    "sunclub_action_add",
    "sunclub_action_update",
    "tab",
  ],

  data() {
    return {
      selected_tab: 0,
    };
  },
  created() {},
  mounted() {
    if (this.tab == "storeprofile") {
      this.selected_tab = 0;
    //   this.$refs.store_tab.store = this.prop_store;
    //   this.$refs.store_tab.displayImage = this.prop_store.image_link;
    //   this.$refs.store_tab.cities = this.prop_cities;
    //   this.$refs.store_tab.states = this.prop_states;
    // } else if (this.tab == "membership") {
    //  this.selected_tab = 1;
      //   console.log(this.prop_sunclub_choices);
      //   this.$refs.membership_tab.sunclub_choices = this.prop_sunclub_choices;
      //   this.$refs.membership_tab.store = this.prop_store;
    } else if (this.tab == "landing") {
      this.selected_tab = 2;
    } else if (this.tab == "aboutus") {
      this.selected_tab = 3;
    } else if (this.tab == "faqs") {
      this.selected_tab = 4;
    } else if (this.tab == "terms") {
      this.selected_tab = 5;
    } else if (this.tab == "privacy") {
      this.selected_tab = 6;
    }

    // console.log(this.store.city);
    // console.log(this.store.state);
    // this.$refs.store_tab.selectedCity = this.prop_store.city;
    // this.$refs.store_tab.selectedState = this.prop_store.state;
  },
};
</script>
