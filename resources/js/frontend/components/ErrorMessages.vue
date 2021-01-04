<template>
  <!-- <div class="alert alert-danger" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    @foreach($errors->all() as $error)
    {!! $error !!}
    <br />@endforeach
  </div>-->

  <div v-if="errors.length > 0" class="alert alert-danger" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="close()">
      <span aria-hidden="true">&times;</span>
    </button>
    <div v-for="(msg, index) in errors" :key="index">
      {{msg}}
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    close() {
      this.errors = [];
    },
  },
  events: {
    showErrorMessage(errors) {
      this.errors = errors;
    },
  },
};
</script>




