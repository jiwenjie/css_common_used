<template>
  <!-- 图片闪光效果 -->
  <div id="app">
    <div class="flash-container">
      <img :src="imgUrl" alt="desc" />
    </div>
  </div>
</template>

<script>
import pictureFlash from "./js/pictureFlash";

export default {
  name: "pictureFlash",
  mixins: [pictureFlash],
  components: {}
};
</script>

<style scoped>
@import url("./css/pictureFlash.css");
</style>
