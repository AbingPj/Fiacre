<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">Products Orders</h2>
      </div>
      <div class="col-md-6"></div>
    </div>
    <br />
    <!-- <div class="row">
      <div class="col-lg-12">
        <div class="input-group mb-3">
            <div class="d-flex">
                <div class="m-2"><h5>Daily |</h5></div>
                <div class="m-2"><h5>Weekly |</h5></div>
                <div class="m-2"><h5>Monthly |</h5></div>
                <div class="m-2"><h5>Yearly |</h5></div>
                <div class="m-2"><h5>Custome</h5></div>
            </div>
        </div>
      </div>
    </div>-->

    <div class="row">
      <div class="col-lg-12">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link"
              :class="selected_tab == 'daily'? 'active':'' "
              href="/admin/reports/productsorders/daily"
              :aria-selected="selected_tab == 'daily'? 'true':'false' "
            >Daily</a>
            <a
              class="nav-item nav-link"
              :class="selected_tab == 'weekly'? 'active':'' "
              href="/admin/reports/productsorders/weekly"
              :aria-selected="selected_tab == 'weekly'? 'true':'false' "
            >Weekly</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 'monthly'? 'active':'' "
              href="/admin/reports/productsorders/monthly"
              :aria-selected="selected_tab == 'monthly'? 'true':'false' "
            >Monthly</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 'yearly'? 'active':'' "
              href="/admin/reports/productsorders/yearly"
              :aria-selected="selected_tab == 'yearly'? 'true':'false' "
            >Yearly</a>

            <a
              class="nav-item nav-link"
              :class="selected_tab == 'custom'? 'active':'' "
              href="/admin/reports/productsorders/custom"
              :aria-selected="selected_tab == 'custom'? 'true':'false' "
            >Custom</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade"
            :class="selected_tab == 'daily'? 'active show':'' "
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div v-if="selected_tab == 'daily'">
              <admin-reports-products-daily></admin-reports-products-daily>
            </div>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 'weekly'? 'active show':'' "
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div v-if="selected_tab == 'weekly'">
              <admin-reports-products-weekly></admin-reports-products-weekly>
            </div>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 'monthly'? 'active show':'' "
            id="nav-monthly"
            role="tabpanel"
            aria-labelledby="nav-monthly-tab"
          >
            <div v-if="selected_tab == 'monthly'">
              <admin-reports-products-monthly></admin-reports-products-monthly>
            </div>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 'yearly'? 'active show':'' "
            id="nav-yearly"
            role="tabpanel"
            aria-labelledby="nav-yearly-tab"
          >
            <div v-if="selected_tab == 'yearly'">
              <admin-reports-products-yearly></admin-reports-products-yearly>
            </div>
          </div>

          <div
            class="tab-pane fade"
            :class="selected_tab == 'custom'? 'active show':'' "
            id="nav-custom"
            role="tabpanel"
            aria-labelledby="nav-custom-tab"
          >
            <div v-if="selected_tab == 'custom'">
              <admin-reports-products-custom></admin-reports-products-custom>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const RepProdDaily = () =>
  import(
    /* webpackChunkName: "js/b/RepProdDaily" */ "./daily.vue"
  );
const RepProdWeekly = () =>
  import(
    /* webpackChunkName: "js/b/RepProdWeekly" */ "./weekly.vue"
  );
const RepProdMonthly = () =>
  import(
    /* webpackChunkName: "js/b/RepProdMonthly" */ "./monthly.vue"
  );
const RepProdYearly = () =>
  import(
    /* webpackChunkName: "js/b/RepProdYearly" */ "./yearly.vue"
  );
const RepProdCustom = () =>
  import(
    /* webpackChunkName: "js/b/RepProdCustom" */ "./custom.vue"
  );

export default {
  components: {
    "admin-reports-products-daily": RepProdDaily,
    "admin-reports-products-weekly": RepProdWeekly,
    "admin-reports-products-monthly": RepProdMonthly,
    "admin-reports-products-yearly": RepProdYearly,
    "admin-reports-products-custom": RepProdCustom,
  },
  props: ["report"],

  created() {
    this.selected_tab = this.report;
  },

  data() {
    return {
      selected_tab: "daily",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
