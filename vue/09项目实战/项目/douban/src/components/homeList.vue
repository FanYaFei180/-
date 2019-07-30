<template>
  <div class="homeList">
      <ul>
        <li v-for="(item,index) in homeList" :key="index">
          <div class="charac">
            <p class="tit">{{item.title}}</p>
            <p class="cen">{{item.target.desc}}</p>
            <p class="auto">作者：{{item.target.author.name}}</p>
          </div>
          <img :src="item.target.cover_url" >
        </li>
      </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      homeList:[],
    }
  },
  methods: {

  },
  components: {

  },
  mounted(){
    //局部axios
      Axios.get('./../static/js/homeData.json').then((res)=>{
          // console.log(res);
          this.homeList=res.data.recommend_feeds;
      }).catch((err)=>{
          console.log(err)
      })
      //全局axios
     /*  this.$axios.post('url',qs.stringify({
        数据
      })).then((res)=>{
        console.log(res)
      }).catch((err)=>{
        console.log(res)
      }) */
  }
}
</script>

<style scoped lang='less'>
.homeList{
  font-size: .13rem;
  flex: 1;
  overflow: auto;
  ul{
  overflow: auto;
    margin:.2rem 0 .3rem ;;
    li{
      padding: .1rem .1rem .3rem .1rem;
      border-bottom:1px solid #ccc;
      display: flex;
      align-items: center;
      div{
        flex: 3;
        margin-right:.05rem;
        .tit{
          color: #494949;
        }
        .cen{
          color: #999999;
          margin:.1rem 0;
        }
        .auto{
          font-size: .12rem;
          color: #ccc;
        }
      }
      img{
        width: 1rem;
      }
    }
  }
}
</style>
