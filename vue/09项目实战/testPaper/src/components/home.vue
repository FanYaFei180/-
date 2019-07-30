<template>
  <div class="home">
    <div class="tetPaper">
      <!-- <img src="./../images/" > -->
      <slot name="tetPaper_num"></slot>
      <!-- <p>第一周</p> -->
    </div>
    <div class="topic">
      <slot name="topic_img"></slot>
      <!-- <img src="./../images/1-2.png" > -->
    </div>
    <router-link to="/first">
      <div class="begin">
        <!-- <router-link to='/first'> -->
        <slot name="begin_img"></slot>
        <!-- <img src="./../images/1-4.png" > -->
        <!-- </router-link> -->
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.home {
  width: 100%;
  height: 100%;
  background: url("./../images/1-1.jpg") no-repeat;
  background-size: 100%;
  position: relative;
  .tetPaper {
    width: 0.65rem;
    height: 1.47rem;
    position: absolute;
    right: 0.4rem;
    top: -0.27rem;
    font-size: 0.12rem;
    background: url("./../images/WechatIMG2.png") no-repeat;
    background-size: 0.65rem 1.47rem;
    p {
      z-index: 2;
      position: absolute;
      top: 1.1rem;
      left: 0.18rem;
      color: #a57c50;
    }
  }
  .topic {
    position: absolute;
    top: 0.86rem;
    left: 0.24rem;
    img {
      width: 2.6rem;
    }
  }
  .begin {
    position: absolute;
    left: 50%;
    top: 58%;
    transform: translate(-50%, -1%);
    width: 0.87rem;
    height: 0.42rem;
    img {
      width: 0.87rem;
      height: 0.42rem;
    }
  }
}
</style>
