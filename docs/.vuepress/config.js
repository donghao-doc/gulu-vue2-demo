module.exports = {
  base: '/gulu-vue2/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    sidebar: [
      {
        title: '安装',
        path: '/install/',
        sidebarDepth: 1,
      },
      {
        title: '快速上手',
        path: '/getStarted/',
        sidebarDepth: 1,
      },
      {
        title: '组件',
        path: '/components/',
        sidebarDepth: 1,
        children: [
          {
            title: '按钮',
            path: '/components/Button.md',
            sidebarDepth: 2,
          }
        ]
      }
    ]
  },
}
