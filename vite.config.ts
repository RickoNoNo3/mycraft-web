import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import vuetify from 'vite-plugin-vuetify'
// @ts-ignore
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true,
      prodEnabled: false,
      watchFiles: true,
    }),
  ],
})
