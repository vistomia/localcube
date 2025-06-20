import { createRouter, createWebHashHistory } from 'vue-router'
import ServerView from '@/views/ServerView.vue'
import OptionsView from '@/views/OptionsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ServerView
  },
  {
    path: '/options',
    name: 'options',
    component: OptionsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
