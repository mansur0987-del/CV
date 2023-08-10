import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: process.env.HOST_FRONT || '0.0.0.0',
    port:80
  },
  plugins: [
    vue(),
    ElementPlus(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
    'process.env': process.env
  },
})
