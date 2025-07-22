import ProductPage from '../pages/ProductPage.vue'
import CarPage from '../pages/CarPage.vue'

export const deliveryRoutes = [
  { path: '/product', component: ProductPage, name: 'Product' },
  { path: '/car', component: CarPage, name: 'Car' }
]