// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kenyaotsuka.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
