import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': '/src/assets',
      '@': path.resolve(path.__dirname, '/src'),
      '@my_components': '/src/components'
    }
  }
});
