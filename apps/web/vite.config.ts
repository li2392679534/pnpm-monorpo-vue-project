import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@monorepo/ui': resolve(__dirname, '../../packages/ui/src'),
      '@monorepo/utils': resolve(__dirname, '../../packages/utils/src')
    }
  },
  server: {
    port: 3000
  }
}) 