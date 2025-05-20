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
    base: '/Portfolio/',
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            if (!name) return 'assets/[name].[hash][extname]';
            
            if (name.endsWith('.css')) return 'assets/styles/[name].[hash][extname]';
            if (name.endsWith('.js')) return 'assets/js/[name].[hash][extname]';
            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) return 'assets/images/[name].[hash][extname]';
            if (/\.(mp4|webm|ogg)$/.test(name)) return 'assets/videos/[name].[hash][extname]';
            
            return 'assets/[name].[hash][extname]';
          },
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
          },
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',
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
