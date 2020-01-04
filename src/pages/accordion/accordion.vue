<template>
  <!-- 手风琴动画效果实现 -->
  <div id="app">
    <ul class="accordion-container">
      <li class="accordion-item common-fir-li">
        <p class="accordion-title">背景1</p>
      </li>
      <li class="accordion-item common-sec-li">
        <p class="accordion-title">背景2</p>
      </li>
      <li class="accordion-item common-thi-li">
        <p class="accordion-title">背景3</p>
      </li>
      <li class="accordion-item common-four-li">
        <p class="accordion-title">背景4</p>
      </li>
      <li class="accordion-item common-five-li">
        <p class="accordion-title">背景5</p>
      </li>
    </ul>
  </div>
</template>

<script>
import accordion from "./js/accordion";

export default {
  name: "accordion",
  mixins: [accordion],
  components: {}
};
</script>

<style scoped>
@import url("./css/accordion.css");
</style>
