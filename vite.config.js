import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import px2rem from 'postcss-px2rem'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname, './src/')
    }
  },
  css: {
    postcss: {
      plugins: [
        px2rem({
          remUnit:192
        })
      ]
    }
  }
})
