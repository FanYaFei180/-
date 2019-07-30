<template>
  <div class="tabbr">
    <!-- <Itemr></Itemr> -->
    <ul>
      <li>
        <router-link to="/home">
          <img src="./tabbr/ic_tab_home_normal.png">
          <img src="./tabbr/ic_tab_home_active.png">
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/audio">
          <img src="./tabbr/ic_tab_subject_normal.png">
          <img src="./tabbr/ic_tab_subject_active.png">
          <span>书影音</span>
        </router-link>
      </li>
      <li>
        <router-link to="/broadcast">
          <img src="./tabbr/ic_tab_status_normal.png">
          <img src="./tabbr/ic_tab_status_active.png">
          <span>广播</span>
        </router-link>
      </li>
      <li>
        <router-link to="/group">
          <img src="./tabbr/ic_tab_group_normal.png">
          <img src="./tabbr/ic_tab_group_active.png">
          <span>小组</span>
        </router-link>
      </li>
      <li>
        <router-link to="/mine">
          <img src="./tabbr/ic_tab_profile_normal.png">
          <img src="./tabbr/ic_tab_profile_active.png">
          <span>我的</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
// import Itemr from './itemr'
export default {
  data() {
    return {};
  },

  methods: {},
  components: {
    // Itemr
  }
};
</script>

<style scoped lang='less'>
.tabbr {
  width: 100%;
  background: #fff;
  border-top: 1px solid #ccc;
  position: absolute;
  bottom: 0;
  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
    li {
      flex: 1;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 0.12rem;
        color: #666;
        img {
          width: 0.35rem;
        }
        img:nth-child(2){
          display: none;
        }
         img:nth-child(1){
          display: block;
        }
        span{
          display: block;
        }
      }
      a.router-link-active{
        color: #42bd56;
        img:nth-child(1){
          display: none;
        }
         img:nth-child(2){
          display: block;
        }
      }
    }
  }
}
</style>
