<template>
  <!-- loading animation -->
  <div id="app">
    <!-- loading_1 html -->
    <div class="load-container">
      <div class="boxLoading"></div>
    </div>

    <!-- loading_2 html -->
    <div class="load-2">
      <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
        <circle id="loading-inner" cx="75" cy="75" r="60" />
      </svg>
    </div>
  </div>
</template>

<script>
import loading from "./js/loading";

export default {
  name: "loading",
  mixins: [loading],
  components: {}
};
</script>

<style scoped>
@import url("./css/loading.css");
</style>
