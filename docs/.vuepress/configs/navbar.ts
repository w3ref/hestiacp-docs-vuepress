import type { NavbarConfig } from '@vuepress/theme-default';

export const navbar: NavbarConfig = [
    {
        text: 'Guide',
        link: '/guide/',
    },
    {
        text: 'Reference',
        children: [
            {
                text: 'CLI',
                link: '/reference/cli',
                activeMatch: '/cli/',
            },
        ],
    },
    {
        text: 'Release Notes',
        link: '/release-notes/',
    },
    {
        text: 'Community',
        children: [
            {
                text: 'Forum',
                link: 'https://forum.hestiacp.com/',
            },
            {
                text: 'Discord',
                link: 'https://discord.gg/SmVuXXK8Qs',
            },
            {
                text: 'Demo',
                link: 'https://demo.hestiacp.com:8083/',
            },
            {
                text: 'Donate',
                link: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=ST87LQH2CHGLA',
            },
        ],
    },
];
