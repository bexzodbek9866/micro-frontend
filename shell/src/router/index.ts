import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/anketa',
      name: 'anketa',
      component: () => import('anketa/AnketaApp'),
      children: [
        {
          path: 'user',
          component: () => import('anketa/UserPage')
        },
        {
          path: 'client',
          component: () => import('anketa/ClientPage')
        }
      ]
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () => import('delivery/DeliveryApp'),
      children: [
        {
          path: 'product',
          component: () => import('delivery/ProductPage')
        },
        {
          path: 'car',
          component: () => import('delivery/CarPage')
        }
      ]
    }
  ]
})

export default router