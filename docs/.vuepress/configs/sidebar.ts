import type { SidebarConfig } from '@vuepress/theme-default';

export const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/getting-started.md',
                '/guide/features.md',
                '/guide/customize.md',
            ],
        },
    ],
    '/release-notes/': [
        {
            text: 'Release notes',
            children: [
                '/release-notes/v1.5.md',
                '/release-notes/v1.4.md',
                '/release-notes/v1.3.md',
                '/release-notes/v1.2.md',
                '/release-notes/v1.1.md',
                '/release-notes/v1.0.md',
                '/release-notes/v0.md',
            ],
        },
    ],
};
