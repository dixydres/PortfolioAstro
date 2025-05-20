// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dixydres.github.io',
  base: '/Portfolio',
  output: 'static',
  build: {
    assets: 'assets'
  },
  vite: {
    base: '/Portfolio',
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            if (!name) return '[name].[hash][extname]';
            
            if (name.endsWith('.css')) return 'styles/[name].[hash][extname]';
            if (name.endsWith('.js')) return 'js/[name].[hash][extname]';
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'images/[name].[hash][extname]';
            if (/\.(mp4|webm|ogg)$/.test(name)) return 'videos/[name].[hash][extname]';
            
            return '[name].[hash][extname]';
          },
          chunkFileNames: 'js/[name].[hash].js',
          entryFileNames: 'js/[name].[hash].js'
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
