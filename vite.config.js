import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite'
import {
  InklineResolver,
  HeadlessUiResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({

  server:
  {
    port: 3030,
    open: true
  },
  plugins: [
    Components({
      resolvers: [
        InklineResolver(),
        HeadlessUiResolver()
      ]
    }),
    vue(),
  
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
