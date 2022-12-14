import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/typewriter',
    name: 'typewriter',
    component: () => import('../views/typewriter')
  },
  {
    path: '/facetracking',
    name: 'facetracking',
    component: () => import('../views/facetracking')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
