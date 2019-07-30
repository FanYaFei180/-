<template>
  <div class="broadcast_coms">
    <div class="box">
      <div class="top">
        <div class="dou">豆</div>
        <div class="top_right">
          <h4>
            豆瓣
            <span>&nbsp;&nbsp;写了日记</span>
          </h4>
          <span>2018—05-23 10:39:23</span>
        </div>
      </div>
      <div class="bottom">
        <div :class="{bottom_top:true,bottom_top_:tol}">
          <!-- <h3></h3> -->
          <slot name="h3"></slot>
          <slot name="span"></slot>
        </div>
        <div class="bottom_bottom">
          <i class="fa fa-thumbs-o-up" aria-hidden="true">
            <slot name="like"></slot>
          </i>
          <i class="fa fa-comment-o" aria-hidden="true">
            <slot name="mess"></slot>
          </i>
          <i class="fa fa-retweet" aria-hidden="true">
            <slot name="refresh"></slot>
          </i>
          <i class="fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["tol"],
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.broadcast_coms {
  font-size: 0.15rem;
  .box {
    padding: 0.2rem;
    padding-bottom: 0.1rem;
    .top {
      display: flex;
      align-items: center;
      .dou {
        color: #fff;
        background: #05c311;
        font-size: 0.28rem;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        text-align: center;
        font-weight: 800;
        margin-right: 0.1rem;
      }
      .top_right {
        h4 {
          font-size: 0.17rem;
        }
        span {
          color: #b0b0b0;
        }
      }
    }
    .bottom {
      margin-left: 0.48rem;
      margin-top: 0.15rem;
      .bottom_top {
        padding: 0.1rem;
        h3 {
          font-size: 0.17rem;
          margin-bottom: 0.05rem;
        }
        span {
          color: #b0b0b0;
          font-size: 0.16rem;
        }
      }
      .bottom_top_ {
        background: #f9f9f9;
      }
      .bottom_bottom {
        overflow: hidden;
        margin-top: 0.2rem;
        i {
          margin: 0 0.07rem;
          color: #d5d5d5;
          span {
            margin-left: 0.05rem;
          }
        }
        .right {
          float: right;
        }
      }
    }
  }
}
</style>
