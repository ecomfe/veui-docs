# prompt

## 安装

```js
import prompt from 'veui/plugins/prompt'

Vue.use(prompt)
```

## API

该插件在安装后会在所有组件实例上提供 `$prompt` 方法，类型为 `function(content, title, options): Promise<?string>`。

该方法返回 `Promise` 对象，会在弹框成功关闭后被 resolve。如果用户点击了“确定”按钮，resolve 结果为用户输入的字符串；如果点击了“取消”按钮，结果值就为 `null`。

| 参数名 | 类型 | 说明 |
| -- | -- | -- |
| `content` | `string` | 显示在输入弹框中的文本内容。 |
| `title` | `string` | 输入弹框的标题。 |
| `options` | `Object=` | [^options] |

^^^options
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `overlayClass` | `string|Object|Array<string>` | 添加到输入弹框浮层根节点的类名。 |
| `ok` | `function(): Promise<void>` | 点击“确定”按钮后，在 `success` 方法返回的 `Promise` resolve 前插入异步流程。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
| `cancel` | `function(): Promise<void>` | 点击“取消”按钮后，在 `success` 方法返回的 `Promise` resolve 前插入异步流程。如果该函数返回的 `Promise` 被 resolve，则弹框会被关闭，否则不会关闭。 |
^^^
