# confirm

## 安装

```js
import confirm from 'veui/plugins/confirm'

Vue.use(confirm)
```

## API

该插件在安装后会在所有组件实例上提供 `$confirm` 方法，类型为 `function(content, title, options): Promise<boolean>`。

该方法返回 `Promise` 对象，会在弹框成功关闭后被 resolve。如果用户点击了“确定”按钮，则 resolve 值为 `true`，否则为 `false`。

| 参数名 | 类型 | 说明 |
| -- | -- | -- |
| `content` | `string=` | 显示在确认弹框中的文本内容。 |
| `title` | `string=` | 确认弹框的标题。 |
| `options` | `Object=` | [^options] |
| `okLabel` | `string=` | “确定”按钮的文字内容。 |
| `cancelLabel` | `string=` | “取消”按钮的文字内容。 |

^^^options
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `overlayClass` | `string | Object | Array<string>` | 添加到确认弹框浮层根节点的类名。 |
| `ok` | `function(): Promise<void>` | 点击“确定”按钮后调用。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
| `cancel` | `function(): Promise<void>` | 点击“取消”按钮后调用。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
^^^
