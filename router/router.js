import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

import Home from '../src/components/Home/Home.vue'

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})