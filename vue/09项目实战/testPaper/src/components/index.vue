<template>
  <div class="index">
    <Home>
      <p slot="tetPaper_num">第一周</p>
      <img slot="topic_img" src="./../images/1-2.png" />
        <img slot="begin_img" src="./../images/1-4.png" />
    </Home>
  </div>
</template>

<script>
import Home from "./home";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Home
  }
};
</script>

<style scoped lang='less'>
.index {
  height: 100%;
}
</style>
