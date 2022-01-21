# 组件类型升级指南

VEUI 目前是基于 Vue 2 开发的组件库。从 2.5.2 开始， VEUI 正式对外提供组件的类型声明。

1. 将 VEUI 全家桶至少升级到 2.5.2 版本。

VEUI 的类型声明依赖了 `@vue/runtime-dom`，在升级过程中，如果您使用的比较低版本的 NPM，那么可能没有安装这个依赖，请手动安装下 `npm i @vue/runtime-dom -D`，以确保该依赖存在。

2. 在您的开发编辑器中安装插件 `Volar`，禁用 `Vetur`。

以 `VSCode` 为例，请阅读 `Volar` 文档中的 [`Setup for Vue2`](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar#:~:text=Usage-,Setup%20for%20Vue%202,-Define%20Global%20Components)，并且禁用掉插件 `Vetur` 避免冲突。

同时，在 `tsconfig.json` 中添加如下配置来支持 `Vue2` 的模板语法。
```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
  },
  "vueCompilerOptions": {
    "experimentalCompatMode": 2,
    "experimentalTemplateCompilerOptions": {
      "compatConfig": { "MODE": 2 } // optional
    }
  }
}
```

:::tip
如果无法查看到类型声明，可以尝试重启 `Volar`: `Command + Shift + p` 再选择 `Volar: Restart Vue server` 试试。
:::

3. 使用 `TypeScript` 和 `Composition API` 来定义组件。
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

如果您没有注册组件，而是使用了类似 `unplugin-vue-components` 插件，那么请引入文件 `veui/types/global` 或者在 `tsconfig.json` 中来引入该文件：
```json
// tsconfig.json
{
  // ...
  "include": [
    "src/**/*",
    "veui/types/global.d.ts"
    // ...
  ]
}
```
