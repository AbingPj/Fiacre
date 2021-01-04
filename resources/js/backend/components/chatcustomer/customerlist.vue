<template>
  <div class="list-group">
    <a
      v-for="(item, index) in customers"
      :key="index"
      href="#"
      class="list-group-item list-group-item-action p-1"
      :class="customer_id == item.id ? 'bg-secondary' : ''"
      @click="showChats(item)"
    >
      <div class="d-flex">
        <div class="mr-2" style="width: 50px;">
          <img :src="item.image" style="width: 50px; height: 50px; border-radius: 50%;" />
        </div>
        <div class="mr-2" style="width: 180px;">
          <span>{{item.first_name + ' ' + item.last_name}}</span>
          <br />
          <div
            v-if="item.content"
            style="margin:0px; padding:0px; white-space: nowrap; width: 150px; overflow: hidden; text-overflow: ellipsis; "
          >{{item.content}}</div>
          <div
            v-else
            style="margin:0px; padding:0px; white-space: nowrap; width: 150px; overflow: hidden; text-overflow: ellipsis; "
          >No Chat Message Yet</div>
        </div>
        <div style="width: 20px;">
          <br />
          <span v-if="item.admin_unviewed != 0" class="badge badge-danger">{{item.admin_unviewed}}</span>
        </div>
      </div>
      <div>
        <span v-if="item.content">{{getMoment(item.time)}}</span>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  props: ["customer_id"],
  data() {
    return {
      customers: [],
      message: ""
    };
  },
  created() {
    this.getCustomer();
  },
  methods: {
    showChats(customer) {
      LoadingOverlay();
      axios
        .get("/admin/chats/updateUnviewedChats/" + customer.id)
        .then((res) => {
          window.location.href = "/admin/chats/customer/" + customer.id;
        });
    },
    getMoment(time) {
      var a = moment(time);
      return moment(a).fromNow();
    },
    getCustomer() {
      axios
        .get("/admin/chats/getCustomers")
        .then((res) => {
          this.customers = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  events: {
    updateCustomerList(message) {
      this.message = message;
      this.getCustomer();
    },
  },
};
</script>
