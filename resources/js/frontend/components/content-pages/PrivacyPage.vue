<style lang="scss">
#about-us {
  margin-top: -50px;

  background-attachment: fixed;

  .aboutus-container {
    padding: 100px 0px 100px 0px;

    .aboutus-container-2 {
      padding: 100px 30px 100px 30px;
      margin: 0px;
      background-color: rgba(255, 255, 255, 0.9);

      .title {
        color: #88c43a;
      }
      .content-headers {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #88c43a;
        }
      }
    }
  }
}
</style>



<template>
  <div id="about-us" :style="'background-image: url('+background_image+');'">
    <div class="container aboutus-container">
      <div class="container aboutus-container-2">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-10 col-sm-8 p-1 mb-5" style="font-size:16px;">
            <div v-html="title" class="title"></div>
            <br />
            <div v-html="content" class="content-headers"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["privacy"],
  data() {
    return {
      title: "",
      content: "",
      background_image: "",
    };
  },
  created() {
    this.title = this.privacy.title;
    this.content = this.privacy.content;
    this.background_image = this.privacy.image_link;
  },
};
</script>
