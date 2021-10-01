import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      icon: 'home', title: 'Home'
    },
    component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home')
  },
  {
    path: '/login',
    name: 'Login',   
    component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
  } 

]

const router = new VueRouter({
  routes
})

export default router
