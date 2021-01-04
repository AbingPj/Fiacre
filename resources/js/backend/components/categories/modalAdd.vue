<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="categoryAddModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" >Add new Category</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <!-- <input type="hidden" name="_method" value="PATCH" /> -->

              <label for>Category Name</label>
              <label for="Category Name"></label>
              <input name="name" type="text" class="form-control" />
              <br />
              <label>Product Tax</label>
              <div class="input-group">
                        <input
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
              <!-- <label for="Sub Category Name"></label>
              <input
                name="sub_category"
                type="text"
                class="form-control"
              />-->
              <br />
              <button type="submit" class="btn btn-success float-right">Add New Category</button>
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
      action: "",
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
