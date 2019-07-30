<template>
  <div class="banner">
    <!-- 方法一 -->
    <!-- <div class="swiper-container" :class="swiperid">
          <div class="swiper-wrapper">
              <slot name="swiper-com"></slot>  
          </div>
          <div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
    </div>-->
    <swiper :options="swiperOption">
      <!-- slides -->
      <slot name="swiper-sli"></slot>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// import Swiper from '../../node_modules/swiper/dist/js/swiper'
export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true, //等同于以下设置
        /*autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
        },*/
        loop:true,
      }
    };
  },
  /*   props:{
      swiperid:{
          type:String,
          default:"",
      },
      paginationshow:{
          type:Boolean,
          default:true
      },
      paginationdesition:{
          type:String,
          default:'center'
      },
      paginationtype:{
          type:String,
          default:'bullets'
      },
      autoplay:{
          type:Boolean,
          default:false
      },
      loop:{
          type:Boolean,
          default:true,
      },
      direction:{
          type:String,
          default:'horizontal'
      },
      effect:{
          type:String,
          default:"slide"
      }
  }, */
  methods: {},
  components: {},
  mounted() {
    //   方法一，写在生命周期中的数据 样式如果加了scoped 会不起作用
   /*    var That=this;
      new Swiper('.'+That.swiperid,{
          direction:That.direction,
          loop:'That.loop',
          pagination:{
              el: '.swiper-pagination',
              clickable:true,
          },
          paginationtype:That.paginationtype,
          autoplay:{
             disableOnInteraction: That.autoplay},
          effect:That.effect,
    }) */
  }
};
</script>

<style lang="less" >
// @import '../../node_modules/swiper/dist/css/swiper.css';
.banner {
  width: 100%;
  height: 1.25rem;
  overflow: hidden;
  .swiper-container {
    .swiper-slide {
      img {
        width: 100%;
        height: 1.25rem;
      }
    }
  }
}
.swiper-pagination-bullet-active {
  background: rgb(160, 158, 158);
}
.swiper-pagination{
  bottom:-.1rem !important;
  text-align: right ! important ;
}
</style>
