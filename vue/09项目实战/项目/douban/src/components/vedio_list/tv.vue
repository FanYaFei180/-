<template>
  <div class="tv">
 <div v-for="(item,index) in audioList" :key="index" class="box">
      <p class="tit">{{item.title}}</p>
      <ul class="ul">
        <li v-for="(items,num) in item.group_list" :key="num">
          <img :src="items.img_url" class="list_img" />
          <p class="ul_name">{{items.group_name}}</p>
          <span class="list_span">评分：{{items.group_member}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },  props: ["audioList"],
  components: {

  }
}
</script>

<style scoped>
@import './../../../static/css/audio_list.css';
</style>
