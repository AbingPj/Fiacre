<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="categoryUpdateModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">Update Category</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for>Category Name</label>
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <input type="hidden" name="category_id" :value="category_id" />

              <input :value="name" name="name" type="text" class="form-control" />
              <br />
              <label>Product Tax</label>
              <div class="input-group">
                        <input
                         :value="tax"
                          name="tax"
                          type="text"
                          class="form-control"
                          aria-label="Amount (to the nearest dollar)"
                          @keypress="onlyNumber"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">%</span>
                        </div>
                </div>
                <br>
              <div class="float-right">
                <button type="submit" class="btn btn-info">Update Category</button>
                <button type="submit" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
              </div>
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
      category_id: "",
      name: "",
      action: "",
      tax: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
       onlyNumber($event) {
            let keyCode = $event.keyCode ? $event.keyCode : $event.which;
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
                $event.preventDefault();
      }
    },
  },
};
</script>
