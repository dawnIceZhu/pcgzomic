import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Layout/index')
  },
  {
    path: '/vibrant-campus',
    name: 'VibrantCampus',
    component: () => import('../views/Layout/VibrantCampus')
  }
]

const router = new VueRouter({
  routes
})

export default router
