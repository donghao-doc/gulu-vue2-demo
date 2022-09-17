# Toast

API 示意

```javascript
this.$toast(`内容内容内容`, {
  autoClose: false,    // 是否自动关闭，默认 false
  closeDelay: 2,       // 自动关闭时间，单位“秒”，默认 2s
  position: 'top',     // 弹出位置，默认顶部
  closeButton: {       // 关闭按钮
    text: '关闭',         // 关闭按钮文本
    callback(toast) {    // 关闭按钮回调，toast 为组件实例对象
      toast.log()        // 可调用组件内部的方法
    }
  }
})
```

<Toast-demos></Toast-demos>
