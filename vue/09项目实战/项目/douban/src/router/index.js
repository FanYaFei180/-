import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Home from '../page/Home/home'
import Broadcast from '../page/Broadcast/broadcast'
import Audio from '../page/Audio/audio'
import Group from '../page/Group/group'
import Mine from '../page/Mine/mine'

Vue.use(Router)
// 书影音的二级路由
import Move from '../components/vedio_list/move'
import Tv from '../components/vedio_list/tv'
import Book from '../components/vedio_list/book'
import Music from '../components/vedio_list/music'
import City from '../components/vedio_list/city'

export default new Router({
  routes: [
   {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children:[
        // {
        //   path:'/',
        //   name:'Move',
        //   redirect:'Move',
        // },
        {
        path:'move',
        name:'Move',
        component:Move,
      },
      {
        path:'tv',
        name:'Tv',
        component:Tv,
      },
      {
        path:'book',
        name:'Book',
        component:Book,
      },
      {
        path:'music',
        name:'Music',
        component:Music,
      },
      {
        path:'city',
        name:'City',
        component:City,
      }]
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },

  ]
})
