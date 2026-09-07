// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import icon from 'astro-icon';
import { deferMediaPlugin } from './src/plugins/defer-media.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://alexstormwood.com',
    markdown: {
        processor: satteri({
            hastPlugins: [deferMediaPlugin],
        }),
    },
    integrations: [mdx(), sitemap(), react({experimentalReactChildren: true}), icon()],
});
