<template>
  <div class="d-flex flex-column min-vh-100">
    <div class="container">
      <!-- <div class="row">
        <div class="col-md-6">
          <h2 class="card-title mb-0">Chat Customer</h2>
        </div>
        <div class="col-md-6"></div>
      </div>
      <br />
      <br /> -->
      <div class="row">
        <!-- <div class="col-md-4 border border-secondary"> -->
        <div class="col-md-4 p-0">
          <div class="list-group">
            <admin-chat-customer-list :customer_id="-1" ></admin-chat-customer-list>
          </div>
        </div>
        <div class="col-md-8 p-0 border border-secondary">
            <br>
            <br>
            <br>
            <h2 class="text-center">Select A Customer To Chat </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import summernote from "../../plugin/summernote-bs4.min.js";
export default {};
</script>


