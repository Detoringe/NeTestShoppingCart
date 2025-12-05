import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@/buttons': fileURLToPath(new URL('./src/task/components/buttons', import.meta.url)),
      '@/composables': fileURLToPath(new URL('./src/task/composables', import.meta.url)),
      '@/counters': fileURLToPath(new URL('./src/task/counters', import.meta.url)),
      '@/images': fileURLToPath(new URL('./src/task/components/images', import.meta.url)),
      '@/layoutComponents': fileURLToPath(
        new URL('./src/task/components/layouts/components', import.meta.url),
      ),
      '@/layoutPages': fileURLToPath(
        new URL('./src/task/components/layouts/pages', import.meta.url),
      ),
      '@/layoutShoppingCarts': fileURLToPath(
        new URL('./src/task/components/layouts/shoppingcarts', import.meta.url),
      ),
      '@/products': fileURLToPath(new URL('./src/task/components/products', import.meta.url)),
      '@/sections': fileURLToPath(new URL('./src/task/sections', import.meta.url)),
      '@/shoppingcarts': fileURLToPath(new URL('./src/task/shoppingcarts', import.meta.url)),
      '@/stores': fileURLToPath(new URL('./src/task/stores', import.meta.url)),
      '@/texts': fileURLToPath(new URL('./src/task/components/texts', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
