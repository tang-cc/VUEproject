import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '',
    //   name: '',
    //   component: 
    // },
    // {
    //   path: '',
    //   name: '',
    //   component: 
    // },
    // {
    //   path: '',
    //   name: '',
    //   component: 
    // }
  ]
})
