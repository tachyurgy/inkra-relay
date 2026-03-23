import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tachyurgy.github.io',
  base: '/inkra-relay',
  build: {
    format: 'directory'
  }
});
