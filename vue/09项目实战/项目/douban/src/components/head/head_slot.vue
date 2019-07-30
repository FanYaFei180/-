<template>
  <!-- 子组件 -->

  <top class="head_s">
    <span>{{txt}}</span>
    <slot name="leftImg" class="leftImg"></slot>
    <slot name="rightImg" class="rightImg"></slot>
  </top>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    components: {
     
    }
  }
};
</script>

<style scoped lang='less'>
.head_s {
  width: 100%;
  height: 48px;
  background: #ccc;
  color: #4f4f4f;
  text-align: center;
  line-height: 48px;
  position: relative;

  .leftImg {
    top: 10px;
    right: 50px;
  }
  .rightImg {
    top: 10px;
    right: 10px;
  }

  img {
    width: 25px;
    position: absolute;
  }
}
</style>
