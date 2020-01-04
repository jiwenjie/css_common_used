<template>
  <!-- 鼠标移入气泡弹出 -->
  <div id="app">
    <div style="height: 300px"></div>
    <div class="poptip btn" aria-controls="弹出气泡">poptip</div>
  </div>

  <!-- TIP更改定位及 translate 即可修改气泡位置 -->
</template>

<script>
import popup from "./js/popup";

export default {
  name: "popup",
  mixins: [popup],
  components: {}
};
</script>

<style scoped>
@import url("./css/popup.css");
</style>
