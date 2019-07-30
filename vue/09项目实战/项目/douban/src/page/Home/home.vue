<template>
  <div class="home">
    <Myhead tol="true">
      <img src="./img/ic_chat_white.png" slot="rightImg" class="rightImg">
      <div slot="search" class="search">
        <input type="text" placeholder="影视 图书 唱片 小组等">
        <img src="./img/ic_group_search_small.png" class="seachImg">
        <img src="./img/ic_scan_gray.png" class="saoImg">
      </div>
    </Myhead>
    <!-- //方法一 -->
    <!-- <Banner swiperid='go'>
      <div slot='swiper-com' class="swiper-slide">
       <img src="./img/01.jpg">
      </div>
       <div slot='swiper-com' class="swiper-slide">
       <img src="./img/02.jpg">
      </div>
       <div slot='swiper-com' class="swiper-slide">
       <img src="./img/03.jpg">
      </div>
    </Banner> -->
    <Banner>
    <swiper-slide slot='swiper-sli'><img src="./img/01.jpg" ></swiper-slide>
    <swiper-slide slot='swiper-sli'><img src="./img/02.jpg" ></swiper-slide>
    <swiper-slide slot='swiper-sli'><img src="./img/03.jpg" ></swiper-slide>
    </Banner>
    <HomeList></HomeList>
  </div>
</template>

<script>
import Myhead from "./../../components/head/head";
import Banner from "./../../components/banner";
import HomeList from './../../components/homeList'
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    Myhead,
  HomeList,
    Banner
  },
  mounted() {
  }
};
</script>

<style scoped lang='less'>
.home{
  display: flex;
  flex-direction: column;
  height: 100%;
  HomeList{
    flex: 1;
    // overflow: auto;
  }
}
</style>
