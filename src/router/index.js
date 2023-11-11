import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: () => import('../views/Home.vue')},
    {path: '/about', name: 'about', component: () => import('../views/About.vue')},
    {path: '/user', name: 'user', component: () => import('../views/User.vue')}
  ]
})

export default router
