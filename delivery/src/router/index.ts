import { createRouter, createWebHistory } from 'vue-router'
import { deliveryRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: deliveryRoutes
})

export default router