// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dixydres.github.io',
  base: '/PortfolioAstro',
  output: 'static',
  build: {
    assets: '_assets'
  },
  outDir: './dist',
  // Add .nojekyll file to tell GitHub Pages not to use Jekyll
  publicDir: './public',
  vite: {
    base: '/',
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: ({ name }) => {
            if (!name) return '_assets/[name].[hash].[ext]';
            
            // Clean up file extensions and use appropriate directories
            if (/\.(css)$/.test(name)) return '_assets/styles/[name].[hash].[ext]';
            if (/\.(js|mjs)$/.test(name)) return '_assets/scripts/[name].[hash].[ext]';
            if (/\.(png|jpe?g|gif|svg|webp|ico|avif)$/.test(name)) return '_assets/images/[name].[hash].[ext]';
            if (/\.(woff2?|eot|ttf|otf)$/.test(name)) return '_assets/fonts/[name].[hash].[ext]';
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/.test(name)) return '_assets/media/[name].[hash].[ext]';
            
            return '_assets/other/[name].[hash].[ext]';
          },
          chunkFileNames: '_assets/js/[name].[hash].js',
          entryFileNames: '_assets/js/[name].[hash].js',
          // Group vendor chunks more efficiently
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('@astrojs/')) return 'astro-vendor';
              if (id.includes('react')) return 'react-vendor';
              if (id.includes('three')) return 'three-vendor';
              return 'vendor';
            }
          }
        }
      }
    }
  }
});
