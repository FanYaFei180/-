<template>
  <div class="broadcast">
    <Myhead :txt="txt">
      <img src="./img/ic_status_search_user.png" slot="leftImg" class="leftImg" />
      <img src="./img/ic_chat_green.png" slot="rightImg" class="rightImg" />
    </Myhead>
    <h1>
      <img src="./img/user_normal.jpg" />登录发广播
    </h1>
    <Broadcast tol='true'>
      <h3 slot="h3">5月24日凌晨3:00~6:00豆瓣停机维护</h3>
      <span slot="span">因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关...</span>
      <span slot="like">29</span>
      <span slot="mess">14</span>
      <span slot="refresh">25</span>
    </Broadcast>
    <Broadcast >
        <h3 slot="h3">北京时间3月28日19点19分，豆瓣首都破百万评分人数电影诞生</h3>
        <span slot="span">因业务发展需要，豆瓣计划于5月24日（星期四）凌晨3:00~6:00对服务器进行机房迁移，迁移期间全部豆瓣相关...</span>
      <span slot="like">29</span>
      <span slot="mess">14</span>
      <span slot="refresh">25</span>
    </Broadcast>
  </div>
</template>

<script>
import Myhead from "./../../components/head/head";
import Broadcast from "./../../components/broadcast_coms/broadcast_coms";
export default {
  data() {
    return {
      txt: "广播"
    };
  },
  methods: {},
  components: {
    Myhead,
    Broadcast
  }
};
</script>

<style scoped lang='less'>
.broadcast {
  h1 {
    img {
      border-radius: 50%;
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.1rem;
    }
    font-size: 0.17rem;
    padding: 0.1rem 0.2rem;
    border-bottom: 1px solid #ccc;
    // display:inline-block;
  }
}
</style>
