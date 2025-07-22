import UserPage from '../pages/UserPage.vue'
import ClientPage from '../pages/ClientPage.vue'

export const anketaRoutes = [
  { path: '/user', component: UserPage, name: 'User' },
  { path: '/client', component: ClientPage, name: 'Client' }
]