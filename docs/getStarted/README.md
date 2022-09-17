# 快速上手

1. 使用本框架前，建议在 CSS 中开启 border-box，如：

    ```css
    *, *::before, *::after {
      box-sizing: border-box;
    }
    ```

2. 引入组件

   ```javascript
   import { Button } from 'gulu-vue2'
   ```

3. 注册组件

   ```javascript
   export default {
     name: 'ComponentName',
     components: {
       'g-button': Button,
     },
   }
   ```
