<template>
  <div id="app">
    <router-view></router-view>
    <Tabbr></Tabbr>
  </div>
</template>

<script>

import Recrem from './../static/js/rem'
import Tabbr from './components/tabbr'
// import Head from './components/head/head'
export default {
  name: 'App',
  components:{
    Tabbr,
    // Head
  },
  mounted(){
    this.$router.push('./home')
     Recrem.recRem()
      window.onresize=Recrem.recRem
    }
}
</script>

<style>
@import './../static/css/common.css';
@import './../static/css/font-awesome-4.7.0/css/font-awesome.css';

#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
height: 100%;
}
</style>
