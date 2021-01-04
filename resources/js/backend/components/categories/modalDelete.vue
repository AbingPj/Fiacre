<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="categoryDeleteModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">Remove category</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <input type="hidden" name="category_id" :value="category_id" />
              Are you sure to remove this category:
              <b>{{name}}</b> ?
              <br />
              <br />
              <br />
              <div class="float-right">
                <button type="submit" class="btn btn-danger" @click="addQuantity()">Remove</button>
                <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
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
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  }
};
</script>
