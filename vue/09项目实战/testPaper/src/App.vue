<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Recrem from './../static/js/rem';

export default {
  name: 'App',
  mounted(){
    this.$router.push('./index')
     Recrem.recRem()
      window.onresize=Recrem.recRem
    },
   
}

</script>

<style>
@import './../static/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
