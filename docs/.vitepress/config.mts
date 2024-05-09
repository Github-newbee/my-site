import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/my-site/',
  title: "洪丽猪八戒",
  description: "一个由VitePress驱动生成的文章",
  lang:'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/guide/markdown-examples' },
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: '示例1', link: '/guide/markdown-examples' },
          { text: '示例2', link: '/guide/api-examples' },
          { text: 'Markdown语法', link: '/guide/markdown' }
        ],
      },
      {
        text: '笔记',
        items: [
          { text: '网络', link: '/notes/network' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '<p>由VitePress驱动</p>',
      copyright: 'Copyright © 2019-present Evan You'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

  },
  sitemap: {
    hostname: 'https://example.com',
    lastmodDateOnly: false
  }
})
