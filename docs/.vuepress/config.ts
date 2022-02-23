import type { ViteBundlerOptions } from '@vuepress/bundler-vite';
import { defineUserConfig } from '@vuepress/cli';
import type { DefaultThemeOptions } from '@vuepress/theme-default';

import { navbar } from './configs/navbar';
import { sidebar } from './configs/sidebar';

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    bundler: '@vuepress/bundler-vite',
    lang: 'en-US',
    title: 'HestiaCP',
    description: 'An open-source Linux web server control panel',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'images/logo.png',
        repo: 'hestiacp/hestiacp',
        repoLabel: 'GitHub',
        editLink: true,
        editLinkText: 'Edit this page on',
        editLinkPattern: ':repo/-/edit/:branch/:path',
        sidebarDepth: 2,
        docsRepo: 'https://github.com/hestiacp/hestiacp-docs',
        docsBranch: 'master',
        docsDir: 'docs',
        lastUpdated: true,
        contributors: false,
        navbar: navbar,
        sidebar: sidebar,
    },
    plugins: [
        [
            '@vuepress/plugin-search',
        ],
    ],
});
