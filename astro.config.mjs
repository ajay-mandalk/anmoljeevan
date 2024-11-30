// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  }), react(), sitemap(), mdx()],
  site: "https://www.anmoljeevanfoundation.org",
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    // @ts-ignore
    devMode: false,
    functionPerRoute: false,
    edgeMiddleware: false,
    imageConfig: {
      domains: [],
    },
  }),
});