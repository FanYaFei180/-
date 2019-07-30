<template>
  <div class="minee">
    <Myhead :txt="txt">
      <!-- <span></span> -->
        <img src="./../../components/head/ic_settings.png" slot="rightImg" class="rightImg">
    </Myhead>
    <div class="mine">
      <div class="top">
        <div class="left">
          <i class="fa fa-lock big" aria-hidden="true"></i>
          <span>密码管理</span>
        </div>
        <div class="right">
          <i class="fa fa-credit-card big" aria-hidden="true"></i>
          <span>银行卡管理</span>
        </div>
      </div>
      <ul class="ul">
        <li>
          <i class="fa fa-file-text-o" aria-hidden="true"></i>
          <span>风险承受能力评估</span>
<i class="fa fa-angle-right rigt" aria-hidden="true"></i>

        </li>
        <li>
          <i class="fa fa-file-text-o" aria-hidden="true"></i>
          <span>安全保障</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span>我的关注</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
        <li>
         <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span>帮助中心</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
        <li>
         <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span>关于我们</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-search-plus" aria-hidden="true"></i>
          <span>检查更新</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
        <li>
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <span>联系客服</span>
          <i class="fa fa-angle-right rigt" aria-hidden="true"></i>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
import Myhead from './../../components/head/head'
export default {
  data() {
    return {
      txt:'我的'
    };
  },
  methods: {},
  components: {
    Myhead
  }
};
</script>

<style scoped lang='less'>
.mine {
  font-size: 0.14rem;
  .top {
    display: flex;
    height: 0.8rem;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .left,
    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .big {
        font-size: 0.34rem;
        color: #42bd56;
      }
    }
  }
  .ul {
    li {
      height: 0.43rem;
      line-height: 0.44rem;
      border-bottom: 1px solid #ccc;
      padding: 0 0.2rem;
      i {
        color: #42bd56;
        font-size: 0.2rem;
      }
      .rigt{
        float: right;
        margin-top:.13rem;
      }
      span {
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
