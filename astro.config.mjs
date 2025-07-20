import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://abubakryagob.github.io',
  base: '/',
  build: {
    outDir: 'docs',
    assets: 'astro'
  },
  integrations: [tailwind()],
});
