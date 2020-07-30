import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( /* webpackChunkName: "home" */ "../pages/home/home.vue");
const Encrypt = () => import( /* webpackChunkName: "encrypt" */ "../pages/encrypt/encrypt.vue");

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: ''
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: ''
      }
    },
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