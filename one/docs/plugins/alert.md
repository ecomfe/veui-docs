# alert

## 安装

```js
import alert from 'veui/plugins/alert'

Vue.use(alert)
```

## API

该插件在安装后会在所有组件实例上提供 `$alert` 方法，类型为 `function(content, title, options): Promise<void>`。

该方法返回 `Promise` 对象，会在弹框成功关闭后被 resolve。

| 参数名 | 类型 | 说明 |
| -- | -- | -- |
| `content` | `string` | 显示在警告弹框中的文本内容。 |
| `title` | `string` | 警告弹框的标题。 |
| `options` | `Object` | [^options] |
| `okLabel` | `string` | “确定”按钮的文字内容。 |

^^^options
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `type` | `string` | 提示类型，可选值为 `'success'` / `'warning'` / `'info'` / `'errro'`。默认值为 `'success'`。 |
| `overlayClass` | `string | Object | Array<string>` | 添加到警告弹框浮层根节点的类名。 |
| `ok` | `function(): Promise<void>` | 点击“知道了”按钮后调用。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
^^^

`$alert` 方法上还提供如下快捷方法，将把 `options` 中的 `type` 指定为对应类型值：

| 方法名 | 类型 | 描述 |
| -- | -- | -- |
| `success` | `function(content, title, options): Promise<void>` | 展示“成功”样式的弹框。 |
| `warn` | `function(content, title, options): Promise<void>` | 展示“警告”样式的弹框。 |
| `info` | `function(content, title, options): Promise<void>` | 展示“普通消息”样式的弹框。 |
| `error` | `function(content, title, options): Promise<void>` | 展示“错误”样式的弹框。 |
