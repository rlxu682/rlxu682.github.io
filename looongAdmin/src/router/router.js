import Vue from 'vue'
import Router from 'vue-router'

const Encrypt = ()=>import(/* webpackChunkName: "encrypt" */ "../pages/encrypt/encrypt.vue");

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/encrypt',
      name: 'encrypt',
      component: Encrypt,
      meta: {
        title: ''
      }
    }
  ]
})
