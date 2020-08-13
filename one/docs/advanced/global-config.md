# 全局配置

VEUI 中很多组件都定义了全局配置项，允许开发者在使用时全局配置某个组件的行为细节。

例如，`Uploader` 组件可以统一配置上传模式，用户可以根据项目前后端接口、需要支持浏览器版本的具体情况选择使用 iframe 回调方式还是 XHR2 方式传递数据，也可以统一配置远端数据格式的转换函数。

VEUI 全局配置项可以通过 `veui/managers/config` 模块进行覆盖：

```js
import config from 'veui/managers/config'

config.set('uploader.requestMode', 'iframe')
config.set('uploader.convertResponse', ({ code, error, result }) => {
  /**
   * Transform from
   *
   * {
   *   code: 0,
   *   error: '...',
   *   result: {
   *     url: '...'
   *   }
   * }
   *
   * to
   *
   * {
   *   success: true,
   *   message: '...',
   *   src: '...'
   * }
   */
  return {
    success: code === 0,
    src: error ? null : result.url,
    message: error || null
  }
})
```

如果需要一次修改同一个组件的多项设置，可以使用如下写法：

```js
import config from 'veui/managers/config'

config.set({
  requestMode: 'iframe',
  convertResponse: data => data
}, 'uploader')
```

`config.set()` 方法参数可为如下形式：

* `(key: string, value: *, namespace: string)`
* `(values: Object<{key: string, value: *}>, namespace: string)`

当提供了 `namespace` 参数时，最终生成的配置项键名为 <code>\`${namespace}.${key}\`</code>。

除此以外，还提供了相同参数列表的 `config.defaults()` 方法，区别在于当需要在配置项中写入的键值已经存在，则不会覆盖。

每个组件、指令等支持的全局配置请查看对应组件、指令的详情页。
