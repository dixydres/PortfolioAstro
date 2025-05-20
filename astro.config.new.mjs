// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dixydres.github.io',
  base: '/Portfolio',
  output: 'static',
  build: {
    assets: '_assets'
  },
  vite: {
    base: '/Portfolio/',
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            if (!name) return '_assets/[name].[ext]';
            
            if (name.endsWith('.css')) return '_assets/css/[name].[ext]';
            if (name.endsWith('.js')) return '_assets/js/[name].[ext]';
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return '_assets/img/[name].[ext]';
            if (/\.(mp4|webm|ogg)$/.test(name)) return '_assets/media/[name].[ext]';
            
            return '_assets/[name].[ext]';
          },
          chunkFileNames: '_assets/js/[name].[hash].js',
          entryFileNames: '_assets/js/[name].[hash].js',
          manualChunks(id) {
            if (id.includes('/node_modules/')) {
              if (id.includes('/astro/')) return 'vendor/astro';
              if (id.includes('/react/') || id.includes('/react-dom/')) return 'vendor/react';
              if (id.includes('/@astrojs/')) return 'vendor/astro-integration';
              return 'vendor/common';
            }
          }
        }
      }
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]__[hash:base64:5]'
      }
    }
  },
  server: {
    host: true
  }
});
