// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://muller-jeanjose.fr',
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
