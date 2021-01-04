<template>
  <!-- <div class="alert alert-danger" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    @foreach($errors->all() as $error)
    {!! $error !!}
    <br />@endforeach
  </div>-->

  <div>
    <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close()">
        <span aria-hidden="true">&times;</span>
      </button>
      <div v-for="(msg, index) in errors" :key="index">
        {{msg}}
        <br />
      </div>
    </div>

    <div v-if="success" class="alert alert-success" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close2()">
        <span aria-hidden="true">&times;</span>
      </button>
      <div>
        {{successMessage}}
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
      success: false,
      successMessage: "",
    };
  },
  methods: {
    close() {
      this.errors = [];
    },
    close2() {
      success: false;
      this.successMessage = [];
    },
  },
  events: {
    showErrorMessage(errors) {
      this.errors = errors;
    },
    showSuccessMessage(msg) {
      this.successMessage = msg;
      this.success = true;
    },
  },
};
</script>




