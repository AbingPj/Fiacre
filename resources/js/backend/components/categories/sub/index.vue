<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">
            <div class="d-flex">
              <div>Sub Categories of {{category.name}}</div>
            </div>
          </h2>
          <br />
          <br />
          <h3>
            <button class="btn btn-success" @click="addModalShow()"><i class="fas fa-plus-square mr-2"></i> Add New Sub Category</button>
          </h3>
          <br />
          <br />
        </div>
      </div>
      <div class="row">
        <div class="col-md-8">
          <h4 class="text-success mb-3">
            <b>{{category.name}}`s Sub Categories List</b>
          </h4>
          <div>
            <table id="sub-categories-table" class="table table-hover">
              <thead>
                <tr>
                  <!-- <th scope="col">#</th> -->
                  <th style="width:50px;">id</th>
                  <th>Sub Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in subcategories" :key="index">
                  <th style="width:20px">{{item.id}}</th>
                  <td>{{item.name}}</td>
                  <td style="width:300px">
                    <button class="btn btn-sm btn-info" @click="updateModalShow(item)"><i class="fas fa-pencil-alt mr-2"></i>Edit</button>
                    <button class="btn btn-sm btn-danger" @click="deleteModalShow(item)"><i class="fas fa-trash-alt mr-2"></i>Remove</button>
                  </td>
                </tr>
              </tbody>
             <!-- <p class="mt-3">Current Page: {{ currentPage }}</p>
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
              ></b-pagination> -->
            </table>
          </div>
        </div>
      </div>
    </div>
    <admin-sub-categories-add-modal ref="addCatRef"></admin-sub-categories-add-modal>
    <admin-sub-categories-update-modal ref="updateCatRef"></admin-sub-categories-update-modal>
    <admin-sub-categories-delete-modal ref="deleteCatRef"></admin-sub-categories-delete-modal>
  </div>
</template>
<script>
export default {
  props: [
    "propscategory",
    "propssubcategories",
    "addaction",
    "updateaction",
    "deleteaction",
  ],
  mounted() {
    $(document).ready(function () {
      $('#sub-categories-table').DataTable({
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        iDisplayLength: -1
      });
    });
  },
  created() {
    this.category = this.propscategory;
    this.subcategories = this.propssubcategories;
  },
  data() {
    return {
      category: {},
      subcategories: [],
      perPage: 10,
      currentPage: 1,
    };
  },

  methods: {
    addModalShow() {
      this.$refs.addCatRef.action = this.addaction;
      $("#subCategoryAddModal").modal("show");
    },
    updateModalShow(data) {
      this.$refs.updateCatRef.action = this.updateaction;
      this.$refs.updateCatRef.category_id = data.category_id;
      this.$refs.updateCatRef.sub_category_id = data.id;
      this.$refs.updateCatRef.name = data.name;
      $("#subCategoryUpdateModal").modal("show");
    },
    deleteModalShow(data) {
      this.$refs.deleteCatRef.action = this.deleteaction;
      this.$refs.deleteCatRef.category_id = data.category_id;
      this.$refs.deleteCatRef.sub_category_id = data.id;
      this.$refs.deleteCatRef.name = data.name;
      $("#subCategoryDeleteModal").modal("show");
    },
  },

  computed: {
    loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      //   console.log(begin);
      //   console.log(end);
      var allcategories = this.subcategories;
      var pageList = allcategories.slice(begin, end);
      return pageList;
    },
    rows() {
      return this.subcategories.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn-success {
  color: #fff !important;
  background-color: #339f25 !important;
  border-color: #339f25 !important;
}
</style>
