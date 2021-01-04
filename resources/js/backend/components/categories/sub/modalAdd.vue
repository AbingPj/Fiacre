<template>
  <div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="subCategoryAddModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title">Add new sub category for {{this.$parent.category.name}}</h6>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form :action="action" method="post" enctype="multipart/form-data">
              <input type="hidden" name="_token" :value="csrf" />
              <input type="hidden" name="category_id" :value="this.$parent.category.id" />
              <!-- <input type="hidden" name="_method" value="PATCH" /> -->

              <label for>Sub Category Name</label>
              <label for="Category Name"></label>
              <input name="name" type="text" class="form-control" />
              <br />
              <!-- <label for="Sub Category Name"></label>
              <input
                name="sub_category"
                type="text"
                class="form-control"
              />-->
              <br />
              <button type="submit" class="btn btn-success float-right">Add New Sub Category</button>
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
        .getAttribute("content"),
    };
  },
};
</script>
