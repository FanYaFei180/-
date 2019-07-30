<template>
  <div class="group_ite">
    <!-- <slot name="tit" class="tit"></slot> -->
    <ul>
      <li v-for="(items,num) in item_list" :key="num">
        <div class="top">
          <img :src="items.img_url" class="img" />
          <h3 class="h3">{{items.group_name}}</h3>
          <span class="span">{{items.group_member}}</span>
        </div>
        <p class="bottom">{{items.topic_title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["item_list"],
  methods: {
      },
  components: {}
};
</script>

<style scoped lang='less'>
.group_ite {
  font-size: 0.16rem;
  padding:0 0  0.18rem 0.18rem;
  ul {
    li {
      padding: 0.15rem 0;
      border-bottom: 1px solid #e8e8e8;
      .top {
        display: flex;
        margin-bottom: 0.1rem;
        align-items: center;
        .img {
          flex: 1;
          width: 0.45rem;
          height: 0.45rem;
          margin-right: 0.07rem;
        }
        .h3 {
          flex: 5;
          font-size: 0.18rem;
        }
        .span {
          flex: 2;
          font-size: 0.18rem;
          color: #c9c9c9;
        }
      }
      .bottom {
        width: 3rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color:#aaa;
      }
    }
  }
  
}
</style>
