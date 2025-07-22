import { createRouter, createWebHistory } from 'vue-router'
import { anketaRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: anketaRoutes
})

export default router