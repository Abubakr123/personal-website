import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://abubakryagob.github.io',
  // No trailing slash needed for base
  build: {
    outDir: 'docs',
    assets: 'assets' // Changed from 'astro' to 'assets' for clearer structure
  },
  integrations: [tailwind()],
});
