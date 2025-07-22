import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'delivery',
      filename: 'remoteEntry.js',
      exposes: {
        './DeliveryApp': './src/App.vue',
        './ProductPage': './src/pages/ProductPage.vue',
        './CarPage': './src/pages/CarPage.vue',
        './routes': './src/router/routes.ts'
      },
      shared: ['vue', 'vue-router']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5002
  }
})