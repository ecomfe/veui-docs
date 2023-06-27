# toast

## 安装

```js
import Vue from 'vue'
import { $toast } from 'veui'

Vue.use(toast)
```

## API

该插件在安装后会在所有组件实例上提供 `$toast` 对象，类型为 `function(message, options): void`。

| 参数名 | 类型 | 说明 |
| -- | -- | -- |
| `message` | `string` | 显示在消息弹层中的文本内容。 |
| `options` | `Object` | [^options] |

^^^options
| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `status` | `string` | `'info'` | 提示类型，可选值为 `'success'` / `'warning'` / `'info'` / `'errro'`。 |
| `type` | `string` | `'info'` |  已废弃。请使用 `status` 属性代替。 |
| `duration` | `number` | `3000` |  设置消息经过指定的毫秒数之后消失。 |
^^^

`$toast` 方法上还提供如下快捷方法，将把 `options` 中的 `type` 指定为对应类型值：

| 方法名 | 类型 | 描述 |
| -- | -- | -- |
| `success` | `function(message, options): void` | 展示“成功”样式的消息。 |
| `warn` | `function(message, options): void` | 展示“警告”样式的消息。 |
| `info` | `function(message, options): void` | 展示“普通消息”样式的消息。 |
| `error` | `function(message, options): void` | 展示“错误”样式的消息。 |
