import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  title: "hyh's Blog",
  description: "Just infected with a disease called curiosity.",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "hyh's Blog" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "hyh's Blog" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  bundler: viteBundler(),

  theme: gungnirTheme({
    repo: "hyh-cool/blog.hyh.io",
    docsDir: "blog",
    docsBranch: "master",
    navbarTitle: "",
    //hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
    editLink: false,
    // personal information
    personalInfo: {
      name: "记录技术,分享生活",
      avatar: "/img/avatar.jpg",
      description: "",
      sns: {
        github: "hyh-cool",
        //linkedin: "xiaohan-zou",
        // facebook: "renovamen.zou",
        //twitter: "renovamen_zxh",
        //zhihu: "chao-neng-gui-su",
        email: "hyh-cool@163.com",
        //rss: "/rss.xml"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(196, 176, 131, .1)"
      }
    ],

    // other pages
    pages: {
      tags: {
        title:
        "Tags",
        subtitle:
         "",
        bgImage: {
          path: "",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      },
      links: {
        title:
        "Docs",
        subtitle:
         "",
        bgImage: {
          path: "",
          mask: "rgba(64, 118, 190, 0.5)"
         }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      search: {
        locales: {
          "/": {
            placeholder: "搜索文章标题"
              },
         }
       },
      /*giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOGl2SjQ",
        category: "Announcements",
        categoryId: "DIC_kwDOGl2Sjc4CAcxK",
        darkTheme: "https://blog.zxh.io/styles/giscus-dark.css"
      },*/
      giscus: {
        repo: "hyh-cool/comments-Giscus",
        repoId: "R_kgDOIe47Jw",
        category: "Announcements",
        categoryId: "DIC_kwDOIe47J84CSstm",
        reactionsEnabled: false,
        lang: "zh-CN",
        //darkTheme: "https://blog.hyh.cool/styles/giscus-dark.css",
      },
      mdPlus: {
        all: true
      },
      /*ga: "G-HCQSX53XFG",
      ba: "75381d210789d3eaf855fa16246860cc",
      rss: {
        siteURL: "https://blog.zxh.io",
        copyright: "Renovamen 2018-2022"
      }*/
    },

    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Docs",
        link: "/docs/",
        icon: "co-read-the-docs"
      },
      {
        text: "About",
        link: "https://hyh.cool",
        icon: "fa-paw"
      },
    ],

    footer: `
      &copy; <a href="https://github.com/hyh-cool" target="_blank">hyh</a> 2022-至今
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  }),

  markdown: {
    headers: {
      level: [2,3,4]
    },
    code: {
      lineNumbers: true
    }
  }
});
