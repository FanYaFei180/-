<template>
  <div class="firstpage">
 <!-- <router-view>dfgdfgdfgh</router-view> -->
 <Home>
      <p slot="tetPaper_num">{{topicList.topic_name}}</p>
       <img slot="topic_img" src='./../images/2-1.png'>
       <Topic :topicList='topicList'></Topic>
       <!-- <router-view> -->
            <img slot="begin_img" src="./../images/2-2.png"  @click="chang "/>
       <!-- </router-view> -->
 </Home>
  </div>
</template>

<script>
import Home from './../components/home'
import Topic from './topic'
export default {
  data() {
    return {
      topicList:[]
    }
  },
  methods: {
      chang(){
          this.$store.commit('chang',1);
          this.topicList=this.$store.getters.get_arr;
      }
  },
  computed:{
      arr_s(){
         this.topicList=this.$store.getters.get_arr;
      }
  },
  components: {
Home,Topic
  }
}
</script>

<style scoped lang='less'>
.firstpage{
    height: 100%;
    // font-size: .12rem;
}
</style>
