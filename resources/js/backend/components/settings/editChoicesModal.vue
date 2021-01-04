<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="editChoicesModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">Edit</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <!-- <input type="hidden" name="_method" value="PATCH" /> -->
              <input type="hidden" name="id" :value="id" />
              <div class="form-group">
                <label for="phone" class="font-weight-bold">Name</label>
                <input name="name" v-model="name" type="text" class="form-control" required />
              </div>
              <label for="price">Prepaid Amount</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  name="price"
                  type="text"
                  class="form-control"
                  v-model="price"
                  @keypress="onlyNumber"
                  required
                />
              </div>
              <br />
              <label for="discount">Discount</label>
              <div class="input-group">
                <input
                  name="discount"
                  type="text"
                  class="form-control"
                  v-model="discount"
                  @keypress="onlyNumber"
                  required
                />
                <div class="input-group-append">
                  <span class="input-group-text">%</span>
                </div>
              </div>
              <br />
               <label for="price">Membership Fee</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">$</span>
                </div>
                <input
                  id="membership_fee"
                  name="membership_fee"
                   v-model="membership_fee"
                  type="text"
                  class="form-control"
                  @keypress="onlyNumber"
                  required
                />
              </div>
              <br>
              <button type="submit" class="btn btn-success float-right">Update Sun Club Choice</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["action"],
  data() {
    return {
      id: "",
      name: "",
      price: "",
      discount: "",
      membership_fee: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    }
  }
};
</script>
