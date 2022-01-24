# TypeScript 支持

VEUI 提供了组件 API 的 TS 声明，需要配合 `Volar` 获得最佳的开发体验。

:::tip
VEUI 从 2.5.2 版本开始提供组件的 TS 声明。
:::

如果您使用 npm < 7 或其他不会自动安装 peerDependencies 的包管理器，需要手动安装：

```sh
npm i -D @vue/runtime-dom
```

### 配置 Volar 扩展

请参考 `Volar` 文档中的 [`Setup for Vue2`](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar#:~:text=Usage-,Setup%20for%20Vue%202,-Define%20Global%20Components)。

### 本地配置
在 `tsconfig.json` 中添加如下配置来支持 `Vue 2` 的模板语法。

```json
{
  "vueCompilerOptions": {
    "experimentalCompatMode": 2,
    "experimentalTemplateCompilerOptions": {
      "compatConfig": { "MODE": 2 } // optional
    }
  }
}
```

:::tip
如果无法查看类型声明，可以尝试重启 `Volar`： 按下 <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>P</kbd> 后选择 `Volar: Restart Vue server`。
:::

### 使用示例

```vue
<template>
<!-- ... -->
<veui-button>OK</veui-button>
</template>

<script lang="ts">
import CompositionAPI, { defineComponent } from '@vue/composition-api'
import { Button } from 'veui'

// Vue.use(CompositionAPI)

export default defineComponent({
  components: {
    'veui-button': Button
    // ...
  }
})
</script>
```

:::tip
如果您没有注册组件，而是使用了类似 `unplugin-vue-components` 插件，那么请引入文件 `veui/types/global.d.ts` 或者在 `tsconfig.json` 中引入该文件：
```json
{
  "include": [
    "src/**/*",
    "node_modules/veui/types/global.d.ts"
  ]
}
```
:::
