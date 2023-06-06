import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cicloFor',
      name: 'cicloFor',
      component: () => import('../views/cicloFor.vue')
    },
    {
      path: '/cicloForLocal',
      name: 'cicloForLocal',
      component: () => import('../views/cicloForLocal.vue')
    },
    {
      path: '/ejercicio2',
      name: 'ejercicio2',
      component: () => import('../views/ejercicio2.vue')
    },
    {
      path: '/ejercicio3',
      name: 'ejercicio3',
      component: () => import('../views/ejercicio3.vue')
    }
    ,
    {
      path: '/ejercicio3.1',
      name: 'ejercicio3.1',
      component: () => import('../views/ejercicio3.1.vue')
    }
    ,
    {
      path: '/VueRoutePage',
      name: 'VueRoutePage',
      component: () => import('../views/VueRoutePage.vue')
    }
  ]
})

export default router
