import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/vue/login.vue'
import home from '../components/vue/home.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
