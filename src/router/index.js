import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Home'
      },
      component: () => import(/* webpackChunkName: "home" */ '../pages/home/Home')
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: () => import(/* webpackChunkName: "login" */ '../pages/login/Login')
    }
  ]
})

// Cada vez que uma rota for chamada o beforeEach vai ser chamado antes de exibi-la
router.beforeEach((to, from, next) => {
  if (!window.uid && to.name !== 'login'){
    console.log('Entrou aqui')
    console.log(next)
    next({ name: 'login' })
  }else{
    next()
  }
})

export default router
