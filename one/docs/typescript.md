# TypeScript 支持

:::tip
类型声明从 2.5.2 版本开始支持。
:::

VEUI 提供了组件 API 的 TS 声明，需要配合 Volar 获得最佳的开发体验。

### 配置 Volar 扩展

请参考 Volar 文档中的 [`Setup for Vue2`](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar#:~:text=Usage-,Setup%20for%20Vue%202,-Define%20Global%20Components)。

对于 Vue < 2.7 的版本，需要安装 `@vue/runtime-dom`：

```sh
npm i -D @vue/runtime-dom
```

### 本地配置

在 `tsconfig.json` 中添加如下配置来支持 Vue 2 的模板语法。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
  },
  "vueCompilerOptions": {
    "target": 2.7,
    // "target": 2, // 对于 Vue < 2.7 的版本
  }
}
```

:::tip
如果类型无法正常工作，可以尝试重启 Volar： 按下 <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>P</kbd> 后选择“Volar: Restart Vue server”。
:::

### 使用示例

```vue
<template>
<veui-button>OK</veui-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // < 2.7 的版本需要用 `@vue/composition-api`
import { Button } from 'veui'

export default defineComponent({
  components: {
    'veui-button': Button
  }
})
</script>
```

:::tip
如果您没有手动引入并注册组件，而是使用了类似 `unplugin-vue-components` 的自动注册方案，那么请引入文件 `veui/types/global.d.ts` 或者在 `tsconfig.json` 中引入该文件：

```json
{
  "include": [
    "src/**/*",
    "node_modules/veui/types/global.d.ts"
  ]
}
```
:::
