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
          },
          {
            title: '输入框',
            path: '/components/Input.md',
            sidebarDepth: 2,
          },
          {
            title: '网格',
            path: '/components/Grid.md',
            sidebarDepth: 2,
          },
          {
            title: '布局',
            path: '/components/Layout.md',
            sidebarDepth: 2,
          },
          {
            title: 'Toast',
            path: '/components/Toast.md',
            sidebarDepth: 2,
          },
          {
            title: '标签页',
            path: '/components/Tabs.md',
            sidebarDepth: 2,
          },
          {
            title: '弹出层',
            path: '/components/Popover.md',
            sidebarDepth: 2,
          },
          {
            title: '手风琴',
            path: '/components/Collapse.md',
            sidebarDepth: 2,
          }
        ]
      }
    ]
  },
}
