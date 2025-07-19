import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.abubakryagob.com',
  base: '/',
  build: {
    outDir: 'docs',
  },
  integrations: [tailwind()],
});
