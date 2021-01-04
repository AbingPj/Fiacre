<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5>
          <b>Annual Pre-payment Option</b>
        </h5>
      </div>
      <div class="col-md-6">
        <!-- <div class="float-right">
            <button type="submit" class="btn btn-success">SAVE</button>
        </div>-->
      </div>
    </div>

    <br />

    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <!-- <div class="col-md-2">USD</div>
            <div class="col-md-8">
              <input type="text" class="form-control" id="price" name="price" value />
            </div>
            <div class="col-md-2">
              <button type="button" class="btn btn-light btn-sm">Add</button>
          </div>-->
          <div class="col-sm-6">
            <label for>Sun Club Choices:</label>
          </div>
          <div class="col-sm-6">
            <div class="float-right">
              <button
                type="button"
                data-toggle="modal"
                data-target="#addChoicesModal"
                class="btn btn-success btn-sm"
              ><i class="fas fa-plus-square mr-2"></i> Add</button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <table class="table table-hover">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <!-- <th>id</th> -->
              <th class="ml-2">Name</th>
              <th>Prepaid Amount</th>
              <th>Discount</th>
              <th>Membership Fee</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in sunclub_choices" :key="index">
              <!-- <td>{{item.id}}</td> -->
              <td class="ml-2">{{item.name}}</td>
              <td>$ {{displayNumberWithComma(item.price)}}</td>
              <td>{{item.discount}} %</td>
              <td>$ {{displayNumberWithComma(item.membership_fee)}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-sm btn-info"
                  @click="updateModalShow(item)"
                ><i class="fas fa-pencil-alt mr-2"></i> Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ml-3 col-md-5"></div>
    </div>

    <admin-settings-membership-edit-modal :action="sunclub_action_update" ref="updateModal"></admin-settings-membership-edit-modal>
    <admin-settings-membership-add-modal :action="sunclub_action_add"></admin-settings-membership-add-modal>
  </div>
</template>
<script>
export default {
  props: ["sunclub_action_add", "sunclub_action_update", "choices", "prop_store"],
  data() {
    return {
      action: "",
      store: {},
      sunclub_choices: [],
    };
  },

  created() {
    this.sunclub_choices = this.choices;
    this.store = this.prop_store;
  },
  methods: {
    updateModalShow(item) {
      this.$refs.updateModal.id = item.id;
      this.$refs.updateModal.name = item.name;
      this.$refs.updateModal.price = item.price;
      this.$refs.updateModal.discount = item.discount;
      this.$refs.updateModal.membership_fee = item.membership_fee;
      $("#editChoicesModal").modal("show");
    },
    displayNumberWithComma(value) {
      if (value == null) {
        return "0.00";
      } else {
        var n = parseFloat(value).toFixed(2);
        var withCommas = Number(n).toLocaleString("en", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        return withCommas;
      }
    },
  },
};
</script>
