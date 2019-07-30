import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import First from '@/page/first'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      // children:[
      //   {
      //     path:'first',
      //     name:'First',
      //     component:First,
      //   },
      // ]
    },
    {
          path:'/first',
          name:'First',
          component:First,
       },
    
  ]
})
