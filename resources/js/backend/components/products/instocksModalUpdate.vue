<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="stockUpdateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="stockUpdateModal"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for>Quantity</label>
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <input type="hidden" name="instock_id" :value="id" />
              <!-- <input type="hidden" name="_method" value="PATCH" /> -->
              <input
                v-model="quantity"
                name="quantity"
                type="text"
                class="form-control"
                onkeypress="return (event.charCode !=8 && event.charCode ==0 || (event.charCode >= 48 && event.charCode <= 57))"
              />
              <br />
              <button type="submit" class="btn btn-info" @click="addQuantity()">Update Quantity</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      quantity: "",
      action: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    addQuantity() {
      // axios.post(url,params)
      // .then(res => {
      //     console.log(res)
      // })
      // .catch(err => {
      //     console.error(err);
      // })
    }
  }
};
</script>
