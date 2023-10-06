import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/Comprehensive'
    },
    {
      path: '/Comprehensive',
      name: 'Comprehensive',
      component: () => import('../views/Comprehensive/index.vue')
    },
    {
      path: '/Bed',
      name: 'Bed',
      component: () => import('../views/Bed/index.vue')
    },
    {
      path: '/Environment',
      name: 'Environment',
      component: () => import('../views/Environment/index.vue')
    },
    {
      path: '/Health',
      name: 'Health',
      component: () => import('../views/Health/index.vue')
    }
  ]
})

export default router
