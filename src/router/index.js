import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '../stores/login'

const loginData = useLoginStore;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: () => import('../views/Home.vue')},
    {path: '/login', name: 'login', component: () => import('../views/Login.vue'), meta: {guest: true}},
    {path: '/register', name: 'register', component: () => import('../views/Register.vue'), meta: {requiresAuth: true}}
  ]
})

/* router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(loginData.g)
  }
}) */

export default router
