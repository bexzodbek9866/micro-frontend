import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'shell',
      remotes: {
        anketa: {
          external: 'http://localhost:5001/assets/remoteEntry.js',
          externalType: 'url'
        },
        delivery: {
          external: 'http://localhost:5002/assets/remoteEntry.js',
          externalType: 'url'
        }
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
    port: 5000
  }
})