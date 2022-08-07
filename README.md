# 用 Vue2 做的 UI 框架

作者：BarryDong

![](https://img.shields.io/badge/build-passing-brightgreen)
![](https://img.shields.io/badge/license-MIT-green)
![](https://img.shields.io/badge/npm-6.14.11-blue)

## 介绍

- 这是作者在学习 Vue 过程中做的一个 UI 框架
- 支持 IE8 及以上浏览器

## 开始使用

### 1. 初始化 CSS 样式

使用本框架前，请在 CSS 中开启 border-box，如：

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

还需要设置默认颜色等变量（后续会改为 SCSS 变量），如：

```css
:root {
  --color: #333;
  --font-size: 14px;
  --button-height: 32px;
  --button-bg: #fff;
  --button-bg-active: #eee;
  --border-color: #999;
  --border-color-hover: #666;
  --border-radius: 4px;
}
```

### 2. 安装

```bash
npm install --save gulu-vue2
```

### 3. 引入

```vue
<template>
  <div>
    <!-- 4. 使用组件 -->
    <g-icon name="settings"></g-icon>
    <g-button>按钮</g-button>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
  </div>
</template>

<script>
// 1. 引入组件
import { Icon, Button, ButtonGroup } from 'gulu-vue2'
// 2. 引入样式
import 'gulu-vue2/dist/index.css'

export default {
  // 3. 注册组件
  components: {
    'g-icon': Icon,
    'g-button': Button,
    'g-button-group': ButtonGroup
  }
}
</script>
```

## 文档
