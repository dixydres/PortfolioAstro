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
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (!assetInfo.name) return 'assets/[name][extname]';
            const ext = assetInfo.name.split('.').pop();
            if (!ext) return 'assets/[name][extname]';
            
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
              return 'assets/img/[name][extname]';
            }
            if (ext === 'css') {
              return 'assets/styles/[name][extname]';
            }
            if (ext === 'js') {
              return 'assets/scripts/[name][extname]';
            }
            return 'assets/[name][extname]';
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
