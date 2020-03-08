<template>
  <!-- 鼠标移入气泡弹出 -->
  <div id="app">
    <div id="tooltip" class="tip"></div>
  </div>

  <!-- TIP更改定位及 translate 即可修改气泡位置 -->
</template>

<script>
import moveby from "./js/moveby";

export default {
  name: "moveby",
  mixins: [moveby],
  components: {}
};
</script>

<style scoped>
@import url("./css/moveby.css");
</style>
