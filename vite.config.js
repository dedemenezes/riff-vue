import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

export default defineConfig(({ command, mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');
  const isProduction = mode === 'production';
  const isDevelopment = mode === 'development';

  return {
    plugins: [
      vue({
        // Production optimizations
        reactivityTransform: true,
        script: {
          defineModel: true,
          propsDestructure: true
        }
      })
    ],
    // Build optimizations
    build: {
      target: 'esnext',
      minify: isProduction ? 'esbuild' : false,
      sourcemap: !isProduction,

      // Optimize chunk splitting
      rollupOptions: {
        output: {
          manualChunks: {
            // Vendor chunks - only actual dependencies
            'vue-vendor': ['vue', 'vue-router'],
            'i18n-vendor': ['vue-i18n'],
            'query-vendor': ['@tanstack/vue-query'],
            'http-vendor': ['axios'],
            'xml-vendor': ['fast-xml-parser'],
          },
        },
      },

      // Performance optimizations
      chunkSizeWarningLimit: 1000,
      assetsInlineLimit: 4096,

      // esbuild options for production (faster than terser)
      esbuild: isProduction ? {
        drop: ['console', 'debugger'],
        legalComments: 'none',
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true,
        treeShaking: true,
      } : {},
    },
    // CSS optimization
    css: {
      devSourcemap: isDevelopment,
      postcss: './postcss.config.js',
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
    // Server config only for development
    server: isDevelopment ? {
      allowedHosts: ["f640407c50fc.ngrok-free.app"],
    } : undefined,
    // Optimization
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@tanstack/vue-query',
        'axios',
        'fast-xml-parser'
      ],
      exclude: ['vue-demi']
    },
  }
});
