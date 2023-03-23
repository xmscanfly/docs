const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
  base:'/docs/',
  title: "小茂哥哥的面试宝典",
  description: "勇敢阿茂 不怕困难",
  head: [
    ["link", { rel: "icon", href: "/favicon.icon" }],
    ["meta", { name: "author", content: "小茂哥哥" }],
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return moment(timestamp).format("lll");
        }
      }
    ]
  ],
  themeConfig: {
    logo: "/assets/img/logo.jpg",
    sidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      { text: "关于", link: "/about" },
      {
        text: "语言",
        ariaLabel: "Language Menu",
        items: [
          { text: "中文", link: "/language/chinese/" },
          { text: "英语", link: "/language/japanese/" },
        ],
      },
      { text: "更多", link: "https://bing.com" },
    ],
    sidebar: [
      "/",
      "/about",
      ["/more", "更多"],
      {
        title: "CSS", // 必要的
        path: "/css/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/css/css-1", "/css/css-2", "/css/css-3"],
      },
    ],
    lastUpdated: '更新时间'
  },
};
