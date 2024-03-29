# alert

## 安装

```js
import Vue from 'vue'
import { $alert } from 'veui'

Vue.use($alert)
```

## API

该插件在安装后会在所有组件实例上提供 `$alert` 方法，类型为 `function(content, title, options): Promise<void>`。

该方法返回 `Promise` 对象，会在弹框成功关闭后被 resolve。

| 参数名 | 类型 | 说明 |
| -- | -- | -- |
| `content` | `string` | 显示在提示弹框中的文本内容。 |
| `title` | `string` | 提示弹框的标题。 |
| `options` | `Object` | [^options] |

^^^options
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `status` | `string` | 提示类型，可选值为 `'success'` / `'warning'` / `'info'` / `'errro'`。默认值为 `'success'`。 |
| `type` | `string` |  已废弃。请使用 `status` 属性代替。 |
| `overlayClass` | `string | Object | Array<string>` | 添加到提示弹框浮层根节点的类名。 |
| `ok` | `function(): Promise<void>` | 点击“知道了”按钮后调用。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
| `okLabel` | `string` | “确定”按钮的文字内容。 |
| `theme` | `string` | 提示弹框[主题](/getting-started/style-variants#内置子主题)。可选值为 `'d20'` / `'d22'` / `'ai'`。 |
^^^

`$alert` 方法上还提供如下快捷方法，将把 `options` 中的 `status` 指定为对应状态值：

| 方法名 | 类型 | 描述 |
| -- | -- | -- |
| `success` | `function(content, title, options): Promise<void>` | 展示“成功”状态的弹框。 |
| `warn` | `function(content, title, options): Promise<void>` | 展示“警告”状态的弹框。 |
| `info` | `function(content, title, options): Promise<void>` | 展示“普通消息”状态的弹框。 |
| `error` | `function(content, title, options): Promise<void>` | 展示“错误”状态的弹框。 |
