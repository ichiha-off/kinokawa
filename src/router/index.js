import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: () => import('@/views/Top.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import('@/views/Life.vue')
  },
  {
    path: '/access',
    name: 'Access',
    component: () => import('@/views/Access.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('@/views/Info.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
