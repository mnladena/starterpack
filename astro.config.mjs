// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    build: {
      cssCodeSplit: false,
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    format: "file",
    assets: "assets", //Change to your project name
  },

  output: "static",
});