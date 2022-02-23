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
    '/admin/': [
        {
            text: 'Admin Documentation',
            children: [
                '/admin/web/',
                '/admin/web/fastcgi.html',
                '/admin/web/ssl-certificates.html',
                '/admin/dns.html',
                '/admin/mail.html',
                '/admin/database/',
                '/admin/database/phpmyadmin-sso.html',
                '/admin/cron.html',
                '/admin/backups.html',
                '/admin/settings/',
                '/admin/settings/filemanager.html',
                '/admin/settings/firewall.html',
                '/admin/users.html',
                '/admin/api',
                '/admin/api/examples.html',
            ],
        },
    ],
    '/user/': [
        {
            text: 'User Documentation',
            children: [
                '/user/options.html',
                '/user/webdomains.html',
                '/user/best-practices.html',
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
    '/reference/': [
        {
            text: 'Reference',
            children: [
                '/reference/cli.md',
            ],
        },
    ],
};
