<template>
  <div class="audio">
   <Myhead :txt="txt">
      <img src="./img/ic_actionbar_search_icon.png" slot="leftImg" class="leftImg">
        <img src="./img/ic_chat_green.png" slot="rightImg" class="rightImg">
    </Myhead>
    <ul class="audio_ce">
      <li>
        <router-link to='/audio/move'>电影</router-link>
      </li>
      <li>
        <router-link to='/audio/book'>读书</router-link>
      </li>
       <li>
        <router-link to='/audio/tv'>电视</router-link>
      </li>
       <li>
        <router-link to='/audio/city'>同城</router-link>
      </li>
       <li>
        <router-link to='/audio/music'>音乐</router-link>
      </li>
    </ul>
    <div class="zhan">
      <router-view :audioList='audioList'>
       
      </router-view>
    </div>
      

  </div>
</template>

<script>
import Myhead from './../../components/head/head'
import Axios from 'axios'
export default {
  data() {
    return {
      txt:'书影音',
      audioList:[],
    }
  },
  mounted(){
      Axios.get('./../../static/js/audio.json').then((res)=>{
        console.log(res)
        this.audioList=res.data.group
      }).catch((err)=>{
        throw err;
      })
        this.$router.push('/audio/move')
  },
  methods: {

  },
  components: {
    Myhead
  }
}
</script>

<style scoped lang='less'>
.audio{
  height: 100%;
  display: flex;
  flex-direction: column;
  .audio_ce{
    display: flex;
    border-bottom: 1px solid #ccc;
     li{
       flex: 1;
       text-align: center;
       height: .3rem;
       line-height: .3rem;
       a{
         display: block;
         font-size: .12rem;
         color:#999;
         height: 100%;
       }
        a.router-link-active{
          background: #07d614;
            color: #fff;
        }
     }
   
  }
  .zhan{
    flex:1;
    overflow: hidden;
  }
}
</style>
