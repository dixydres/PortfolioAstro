// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dixydres.github.io',
  base: '/Portfolio',
  build: {
    assets: 'assets',
    assetsPrefix: '/Portfolio'
  },
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  devToolbar: {
    enabled: false
  }
});
