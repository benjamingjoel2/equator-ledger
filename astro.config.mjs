// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://equatorledger.tourground.com',
  trailingSlash: 'always',
  integrations: [mdx()],
  build: { format: 'directory', inlineStylesheets: 'always' },
  prefetch: false,
  compressHTML: true,
  markdown: { smartypants: true },
});
