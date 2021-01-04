<template>
<div class="d-flex flex-column min-vh-100">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h2 class="card-title mb-0">
          <div class="d-flex">
            <div>Categories</div>
          </div>
        </h2>
        <br />
        <h3>
          <button class="btn btn-success" @click="addModalShow()"><i class="fas fa-plus-square mr-2"></i> New Category</button>
        </h3>
        <br />
      </div>
    </div>
    <div class="row">
      <div class="col-md-10">
        <h4 class="text-success mb-3">
          <b>Categories List</b>
        </h4>
        <div>
          <table id="categories-table" class="table table-hover">
            <thead>
              <tr>
                <!-- <th scope="col">#</th> -->
                <th style="width:50px;">id</th>
                <th>Category</th>
                <th>Product Tax Percentage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in propscategories" :key="index">
                <th style="width:20px">{{item.id}}</th>
                <td>{{item.name}}</td>
                <td>{{item.tax}} %</td>
                <!-- <td>
                    <span v-for="(sub, index2) in item.sub_categories" :key="index2">{{sub.name}},</span>
                  </td> -->
                <td style="width:300px">
                  <button class="btn btn-sm btn-info" @click="updateModalShow(item)"><i class="fas fa-pencil-alt mr-2"></i>Edit</button>
                  <button class="btn btn-sm btn-danger" @click="deleteModalShow(item)"><i class="fas fa-trash-alt mr-2"></i> Remove</button>
                  <a :href="'categories/sub/'+item.id" class="btn btn-sm btn-success">Sub Categories</a>
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
  <admin-categories-add-modal ref="addCatRef"></admin-categories-add-modal>
  <admin-categories-update-modal ref="updateCatRef"></admin-categories-update-modal>
  <admin-categories-delete-modal ref="deleteCatRef"></admin-categories-delete-modal>
</div>
</template>

<script>
export default {
  props: ["propscategories", "addaction", "updateaction", "deleteaction"],
  data() {
    return {
      categories: [],
      perPage: 10,
      currentPage: 1,
    };
  },

  methods: {
    addModalShow() {
      this.$refs.addCatRef.action = this.addaction;
      $("#categoryAddModal").modal("show");
    },
    updateModalShow(data) {
      this.$refs.updateCatRef.action = this.updateaction;
      this.$refs.updateCatRef.category_id = data.id;
      this.$refs.updateCatRef.name = data.name;
      this.$refs.updateCatRef.tax = data.tax;
      $("#categoryUpdateModal").modal("show");
    },
    deleteModalShow(data) {
      this.$refs.deleteCatRef.action = this.deleteaction;
      this.$refs.deleteCatRef.category_id = data.id;
      this.$refs.deleteCatRef.name = data.name;
      $("#categoryDeleteModal").modal("show");
    },
  },

  mounted() {
    $(document).ready(function () {
      $('#categories-table').DataTable({
        "lengthMenu": [
          [10, 25, 50, -1],
          [10, 25, 50, "All"]
        ],
        iDisplayLength: -1
      });
    });
  },

  created() {
    this.categories = this.propscategories;
  },

  computed: {
    loadlist() {
      var pageList = [];
      var begin = (this.currentPage - 1) * this.perPage;
      var end = begin + this.perPage;
      //   console.log(begin);
      //   console.log(end);
      var allcategories = this.categories;
      var pageList = allcategories.slice(begin, end);
      return pageList;
    },
    rows() {
      return this.categories.length;
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
