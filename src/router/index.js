import { createRouter, createWebHashHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ServerView
  },
  {
    path: '/options',
    name: 'options',
    component: () => import('@/views/OptionsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
