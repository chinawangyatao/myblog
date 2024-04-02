import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: '首页',
    tagline: '恐龙很酷',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://chinawangyatao.github.io/myblog/',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'chinawangyatao', // Usually your GitHub org/user name.
    projectName: 'myblog', // Usually your repo name.
    deploymentBranch:"gh-pages",

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },




    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your case's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            hideOnScroll: true,//文档页面向下滚动时收起顶部导航
            title: 'XC Doc',
            logo: {
                alt: 'WangXuCheng Site Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    type: 'dropdown',
                    label: '学习文档',
                    position: 'left',
                    items: [
                        {
                            type: 'doc',
                            label: 'JavaScript',
                            docId: 'javascript/index',
                        },
                        {
                            type: 'doc',
                            label: 'TypeScript',
                            docId: 'typescript/index',
                        },
                        {
                            type: 'doc',
                            label: 'Golang',
                            docId: 'golang/index',
                        },
                    ],
                },
                // {type: 'doc', label: '小案例', position: 'left',docId: 'case/case'},
                {to: '/blog', label: 'Blog', position: 'left'},
                {to: '/case', label: '小案例', position: 'left'},
                {
                    href: 'https://github.com/chinawangyatao',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        // footer: {
        //     style: 'dark',
        //     links: [
        //         {
        //             title: 'Docs',
        //             items: [
        //                 {
        //                     label: 'Tutorial',
        //                     to: '/docs/intro',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'Community',
        //             items: [
        //                 {
        //                     label: 'Stack Overflow',
        //                     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //                 },
        //                 {
        //                     label: 'Discord',
        //                     href: 'https://discordapp.com/invite/docusaurus',
        //                 },
        //                 {
        //                     label: 'Twitter',
        //                     href: 'https://twitter.com/docusaurus',
        //                 },
        //             ],
        //         },
        //         {
        //             title: 'More',
        //             items: [
        //                 {
        //                     label: 'Blog',
        //                     to: '/blog',
        //                 },
        //                 {
        //                     label: 'GitHub',
        //                     href: 'https://github.com/facebook/docusaurus',
        //                 },
        //             ],
        //         },
        //     ],
        //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        // },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        // 搜索功能
        // algolia: {
        //     contextualSearch:true,
        //     apiKey: '25626fae796133dc1e734c6bcaaeac3c',
        //     indexName: 'docsearch',
        // },
    } satisfies Preset.ThemeConfig,
    plugins: [
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
                steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
                disableInDev: false,
            },
        ],
    ],
};

export default config;
