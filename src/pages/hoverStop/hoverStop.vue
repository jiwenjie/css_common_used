<template>
  <!-- hover 悬停动画效果 -->
  <div id="app">
    <!-- 背景变色 -->
    <div class="button"><span>hover me to change</span></div>

    <!-- 边框动画 -->

    <div style="height: 200px"></div>

    <div class="button-border">
      <div class="button_content">hover me to change</div>
    </div>
  </div>
</template>

<script>
import hoverStop from "./js/hoverStop";

export default {
  name: "hoverStop",
  mixins: [hoverStop],
  components: {}
};
</script>

<style scoped>
@import url("./css/hoverStop.css");
</style>
