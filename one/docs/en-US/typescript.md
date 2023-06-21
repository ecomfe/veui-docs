# TypeScript Support

:::tip
Type declarations are supported starting from version 2.5.2.
:::

VEUI provides TS declarations for component APIs, which require Volar for the best development experience.

### Configure Volar extension

Please refer to the Volar documentation on [`Setup for Vue2`](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar#:~:text=Usage-,Setup%20for%20Vue%202,-Define%20Global%20Components).

For Vue versions < 2.7, `@vue/runtime-dom` needs to be installed:

```sh
npm i -D @vue/runtime-dom
```

### Local configuration

Add the following configuration to `tsconfig.json` to support Vue 2's template syntax.

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
  },
  "vueCompilerOptions": {
    "target": 2.7,
    // "target": 2, // for Vue versions < 2.7
  }
}
```

:::tip
If types are not working properly, try restarting Volar: Press <kbd>⌘</kbd> + <kbd>⇧</kbd> + <kbd>P</kbd> and select “Volar: Restart Vue server”.
:::

### Usage example

```vue
<template>
<veui-button>OK</veui-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue' // < 2.7 versions require `@vue/composition-api`
import { Button } from 'veui'

export default defineComponent({
  components: {
    'veui-button': Button
  }
})
</script>
```

:::tip
If you have not manually imported and registered components, but instead use an [automatic registration solution](poe://www.poe.com/_api/key_phrase?phrase=automatic%20registration%20solution&prompt=Tell%20me%20more%20about%20automatic%20registration%20solution.) like `unplugin-vue-components`, please import the file `veui/types/global.d.ts` or include it in the `tsconfig.json` file:

```json
{
  "include": [
    "src/**/*",
    "node_modules/veui/types/global.d.ts"
  ]
}
```
:::
