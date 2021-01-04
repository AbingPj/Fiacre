<style lang="scss">
.quick-chat-container .header-container {
  height: 50px !important;
}

.quick-chat-container .header-container .header-paticipants-text {
  display: none !important;
}
</style>


<template>
  <div>
    <Chat
      :style="'height:400px;'"
      v-if="visible"
      :participants="participants"
      :myself="myself"
      :messages="messages"
      :chat-title="chatTitle"
      :placeholder="placeholder"
      :colors="colors"
      :border-style="borderStyle"
      :hide-close-button="hideCloseButton"
      :close-button-icon-size="closeButtonIconSize"
      :submit-icon-size="submitIconSize"
      :submit-image-icon-size="submitImageIconSize"
      :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
      :async-mode="asyncMode"
      :scroll-bottom="scrollBottom"
      :display-header="true"
      :send-images="false"
      :profile-picture-config="profilePictureConfig"
      :timestamp-config="timestampConfig"
      :link-options="linkOptions"
      :accept-image-types="'.png, .jpeg'"
      @onImageClicked="onImageClicked"
      @onImageSelected="onImageSelected"
      @onMessageSubmit="onMessageSubmit"
      @onType="onType"
      @onClose="onClose"
    />
  </div>
</template>
<script>
import { Chat } from "vue-quick-chat";
import "vue-quick-chat/dist/vue-quick-chat.css";

export default {
  props: ["propscustomer"],
  components: {
    Chat,
  },
  created() {
    this.toLoadMethods();
    this.myself = {
      name: "Sunfarmacy Admin",
      id: 1,
      profilePicture: "/img/backend/brand/logo.png",
    };

    this.participants = [
      {
        name: this.propscustomer.full_name,
        id: this.propscustomer.id,
        profilePicture: this.propscustomer.atr_image_link,
      },
    ];

    this.chatTitle = this.propscustomer.full_name;
  },

  data() {
    return {
      badge: 0,
      submitImageIconSize: 20,
      visible: false,
      participants: [],
      myself: {},
      messages: [],
      chatTitle: "",
      placeholder: "send your message",
      colors: {
        header: {
          bg: "#339f25",
          text: "#fff",
        },
        message: {
          myself: {
            bg: "#f0edbd",
            text: "#222224",
          },
          others: {
            bg: "#339f25",
            text: "#fff",
          },
          messagesDisplay: {
            bg: "#f7f3f3",
          },
        },
        submitIcon: "#b91010",
        submitImageIcon: "#b91010",
      },
      borderStyle: {
        topLeft: "0px",
        topRight: "0px",
        bottomLeft: "0px",
        bottomRight: "0px",
      },
      hideCloseButton: true,
      submitIconSize: 25,
      closeButtonIconSize: "15px",
      asyncMode: true,
      toLoad: [],
      scrollBottom: {
        messageSent: true,
        messageReceived: false,
      },
      displayHeader: false,
      profilePictureConfig: {
        others: true,
        myself: true,
        styles: {
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        },
      },
      timestampConfig: {
        format: "HH:mm M/d/y",
        relative: false,
      },
      // there are other options, you can check them here
      // https://soapbox.github.io/linkifyjs/docs/options.html
      linkOptions: {
        myself: {
          className: "myLinkClass",
          events: {
            click: function (e) {
              alert("Link clicked!");
            },
            mouseover: function (e) {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
        others: {
          className: "othersLinkClass",
          events: {
            click: function (e) {
              alert("Link clicked!");
            },
            mouseover: function (e) {
              alert("Link hovered!");
            },
          },
          format: function (value, type) {
            if (type === "url" && value.length > 50) {
              value = value.slice(0, 50) + "…";
            }
            return value;
          },
        },
      },
    };
  },
  methods: {
    async toLoadMethods() {
      const { data, status } = await axios.get(
        "/admin/chats/getchats/" + this.propscustomer.id
      );
      if (data && status == 200) {
        this.toLoad = data;
        this.visible = true;
      } else {
        alert("Something went wrong! Try reloading the page.");
      }
    },

    getUnviewedChats() {
      axios
        .get("/getunviewdchats")
        .then((res) => {
          this.badge = res.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    visibleToTrue() {
      this.visible = true;
      axios
        .post("/updateUnviewedChats")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    onType: function (event) {
      //here you can set any behavior
    },
    loadMoreMessages(resolve) {
      setTimeout(() => {
        resolve(this.toLoad); //We end the loading state and add the messages
        //Make sure the loaded messages are also added to our local messages copy or they will be lost
        this.messages.unshift(...this.toLoad);
        this.toLoad = [];
      }, 1000);
    },
    onMessageSubmit: function (message) {
      console.log(message);
      /*
       * example simulating an upload callback.
       * It's important to notice that even when your message wasn't send
       * yet to the server you have to add the message into the array
       */
      this.messages.push(message);

      let data = {
        message: message,
        to_user_id: this.propscustomer.id,
      };

      axios
        .post("/admin/chats/submit", data)
        .then((res) => {
          if (res.data == "success") {
            setTimeout(() => {
              message.uploaded = true;
              this.updateCustomerList();
            }, 1000);
          }
        })
        .catch((err) => {
          console.error(err);
        });
      /*
       * you can update message state after the server response
       */
      //   // timeout simulating the request
      //   setTimeout(() => {
      //     message.uploaded = true;
      //   }, 1000);

      //   axios
      //     .post("/submitchat", message)
      //     .then((res) => {
      //       if (res.data == "success") {
      //         setTimeout(() => {
      //           message.uploaded = true;
      //         }, 1000);
      //       }
      //     })
      //     .catch((err) => {
      //       console.error(err);
      //     });
    },
    updateCustomerList() {
      this.$events.fire("updateCustomerList", "update customer list");
    },
    onClose() {
      this.visible = false;
      this.getUnviewedChats();
    },
    onImageSelected(files, message) {
      let src =
        "https://149364066.v2.pressablecdn.com/wp-content/uploads/2017/03/vue.jpg";
      this.messages.push(message);
      /**
       * This timeout simulates a requisition that uploads the image file to the server.
       * It's up to you implement the request and deal with the response in order to
       * update the message status and the message URL
       */
      setTimeout(
        (res) => {
          message.uploaded = true;
          message.src = res.src;
        },
        3000,
        { src }
      );
    },
    onImageClicked(message) {
      /**
       * This is the callback function that is going to be executed when some image is clicked.
       * You can add your code here to do whatever you need with the image clicked. A common situation is to display the image clicked in full screen.
       */
      console.log("Image clicked", message.src);
    },
  },

  computed: {
    chat_badge() {
      var badge = "";
      if (this.badge != 0) {
        badge = this.badge;
      }
      return badge;
    },
  },
};
</script>
