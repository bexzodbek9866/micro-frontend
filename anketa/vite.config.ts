import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'anketa',
      filename: 'remoteEntry.js',
      exposes: {
        './AnketaApp': './src/App.vue',
        './UserPage': './src/pages/UserPage.vue',
        './ClientPage': './src/pages/ClientPage.vue',
        './routes': './src/router/routes.ts'
      },
      shared: ['vue', 'vue-router']
    })
  ],
  // base: '/',
  build: {
    assetsDir: 'assets',
    manifest: true
  },
  server: {
    port: 5001,
    strictPort: true,
    hmr: {
      port: 5001
    }
  }
})