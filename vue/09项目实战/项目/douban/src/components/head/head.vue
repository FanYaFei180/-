<template>
  <div :class="{head:true, green:tol}">
    <!-- h40 -->
    <span>{{txt}}</span>
    <slot name="leftImg"></slot>
    <slot name="rightImg" ></slot>
    <slot name="search"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["txt","tol"],
  methods: {},
  components: {}
};
</script>

<style scoped lang='less'>
.head {
  width: 100%;
  height: .48rem;
  background: #f7f7f7;
  color: #4f4f4f;
  text-align: center;
  line-height: .48rem;
  position: relative;
  font-size: 0.22rem;
  // overflow: hidden;
}
img {
  width: .25rem;
  position: absolute;
}
.leftImg {
  top: .10rem;
  right: .50rem;
}
.rightImg {
  top: .1rem;
  right: .1rem;
}
.head {
  .search{
    input{
      width: 2.6rem;
      height: .3rem;
      border:none;
      outline: none;
      text-indent: .4rem;
      position:absolute;
      left:.1rem;
      top:.08rem;
      border-radius: .05rem;
      font-size: .12rem;
    }
    img{
      width: .2rem;
    }
    .seachImg{
      position: absolute;
      left:.2rem;
      top:.12rem;
    }
    .saoImg{
       position: absolute;
      right:.7rem;
      top:.12rem;
    }
  }
}
.green{
  background: rgb(12, 160, 12);
}
</style>
