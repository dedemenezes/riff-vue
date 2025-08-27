import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  test: {
    environment: "jsdom", // <-- important
    globals: true,
  },
  server: {
    allowedHosts: ["cd216d0f94e7.ngrok-free.app"],
  },
});
