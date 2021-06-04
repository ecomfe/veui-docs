# Uploader <small>上传</small>

## 示例

### 文件上传

设置 `type` 的值为 `file` 进入文件上传模式。

[[ demo src="/demo/uploader/file.vue" ]]

### 图片上传

设置 `type` 的值为 `image` 进入图片上传模式。

[[ demo src="/demo/uploader/image.vue" ]]

### 媒体上传

设置 `type` 的值为 `media` 进入媒体上传模式。

[[ demo src="/demo/uploader/media.vue" ]]

### 前端校验

图片格式、大小、数量校验以及使用 `validator` 自定义校验。

[[ demo src="/demo/uploader/validate.vue" ]]

### 自定义配置

使用 `upload` 自定义上传过程，使用 `controls` 配置浮层操作项。

[[ demo src="/demo/uploader/custom.vue" ]]

## API

### 属性

| 属性 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- |
| `ui` | `string=` | - | [^ui] |
| `type` | `string` | `'file'` | [^type] |
| `value` | `Object|Array<Object>` | - | [^value] |
| `key-field` | `string` | `'key'` | 用于指定文件对象的唯一 key，作为数据变化时正确处理文件列表顺序的依据。 |
| `name` | `string` | `'file'` | 原生 `<input>` 元素的 `name`。 |
| `action` | `string` | - | 上传地址。 |
| `headers` | `Object` | `uploader.headers` | 需要加入 [HTTP 请求头](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers) 的内容。可进行全局统一配置。 |
| `with-credentials` | `boolean` | `true` | 同 `XMLHttpRequest` 的 `with-credentials` 属性。 |
| `request-mode` | `string` | `uploader.requestMode` | [^request-mode] |
| `iframe-mode` | `string` | `uploader.iframeMode` | [^iframe-mode] |
| `callback-namespace` | `string` | `uploader.callbackNamespace` | 在 `request-mode` 的值为 `'iframe'` 并且 `iframe-mode` 的值为 `'callback'` 的模式下，指定回调函数的命名空间，放在 `window` 对象下。可进行全局统一配置。 |
| `data-type`| `string` | `'json'` | [^data-type] |
| `convert-response` | `uploader.convertResponse` | - | [^convert-response] |
| `accept` | `string` | - | 与原生 `<input>` 元素 的 `accept` 相同，在浏览器的文件类型筛选后再加一层校验。对于类似 `application/msword` 这样的 MIME type 与扩展名对不上的情形跳过校验。 |
| `extensions` | `Array<string>` | `['jpg', 'jpeg', 'gif', 'png', 'bmp', 'tif', 'tiff', 'webp', 'apng', 'svg']` | 如果 `accept` 的值是类似 `'image/*'` 这样的形式，可以指定能通过校验的所有的扩展名。 |
| `max-count` | `number` | - | 最大文件数量。 |
| `max-size` | `number|string` | - | 单个文件的最大大小，如果是 `number`，单位是 `byte`；如果是 `string`，支持在数字后面添加单位，单位可以是 `b`/`kb`/`mb`/`gb`/`tb`。 |
| `validator` | `function(Object): Object|Promise<Object>` | - | [^validator] |
| `payload` | `Object` | - | 附带在上传请求中的额外参数。 |
| `autoupload` | `boolean` | `true` | 指定是否在选完文件后立刻上传。 |
| `order` | `string` | `'asc'` | [^order] |
| `picker-position` | `string` | `'after'` | [^picker-position] |
| `upload` | `function(Object, Object): function` | - | [^upload] |
| `controls` | `function(Object, Array<Object>): Array<Object>` | - | [^controls] |
| `multiple` | `boolean` | `false` | 上传多个文件，当 `max-count` 是 `1`，`multiple` 是 `true`，那么 `value` 也是数组。 |
| `entries` | `function(Array<Object>): Array<Object>` | - | [^entries] |
| `after-pick` | `function(Array<Object>): void` | - | 选择文件之后的回调。 |
| `sortable` | `boolean` | `false` | 文件列表是否可以排序。 |
| `preview-options` | `object` | `{wrap: true, indicator: 'number'}` | 传递给 [`Lightbox`](./lightbox) 的预览选项|


^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
+++
^^^

^^^type
上传类型。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `file` | 文件上传。 |
| `image` | 图片上传。 |
| `media` | 媒体上传（支持视频和图片）。 |
| `video` | 视频上传。 |
+++
^^^

^^^value
当 `multiple` 为 `true`，返回文件对象的数组。另外，当 `max-count` 被设置为大于 `1` 的值，则会视为开启了 `multiple`。

每个文件对象的类型为 `{name: string, src: string, ...}`，以及在 `convert-response` 中自定义添加的字段。
^^^

^^^request-mode
指定异步上传方式。可进行全局统一配置。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xhr` | 通过 `XMLHttpRequest` 上传。 |
| `iframe` | 通过 `<iframe>` 上传。 |
| `custom` | 自定义上传过程，通过 prop `upload` 方法上传。 |
+++
^^^

^^^iframe-mode
指定在 `request-mode` 的值为 `iframe` 的模式下，上传成功后的回调方式。可进行全局统一配置。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `postmessage` | 通过 `PostMessage` 回调。 |
| `callback` | 通过调用 `window` 的 `callback-namespace` 里的回调函数回调。 |
+++
^^^

^^^data-type
如果回调的值是文本, 指明文本的解析方式。如果回调的数据是 `Object`，则 `data-type` 可以为空。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `json` | 回调的文本是 JSON。 |
| `text` | 回调的文本是普通文本。 |
+++
^^^

^^^convert-response
将回调数据转换成需要的格式的函数，使组件能够判断上传是否成功以便显示相应结果，参数是回调数据。返回结果的格式要求如下：

+++字段详情
| 字段 | 类型 | 描述 |
| -- | -- | -- |
| `success` | `boolean` | 表示上传是否成功。 |
| `name` | `string=` | 文件的名称。`success` 为 `true` 时必须。 |
| `src` | `string=` | 文件的地址。`success` 为 `true` 时必须。 |
| `message` | `string=` | 上传失败时的出错信息。`success` 为 `false` 时必须。 |

还可以给返回结果加上其它自定义的属性，这些自定义属性会被包含在 `value` 以及 `change`、`success`、`failure`、`remove`、`progress` 事件的回调参数 `file` 中 。可进行全局统一配置。
+++
^^^

^^^order
上传文件的显示顺序，按照开始上传的时间排序。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `asc` | 升序排列。 |
| `desc` | 降序排列。 |
+++
^^^

^^^picker-position
图片上传模式下，上传按钮在图片队列中的位置。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `before` | 上传按钮始终在队列最前面。 |
| `after` | 上传按钮始终在队列最后面。 |
+++
^^^

^^^validator
自定义校验逻辑，参数为原生 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 对象。返回结果的格式要求如下：

+++字段详情
| 字段 | 类型 | 描述 |
| -- | -- | -- |
| `valid` | `boolean` | 是否通过校验。 |
| `message` | `string=` | `valid` 为 `false` 时的错误提示信息。 |

支持异步校验，返回值可以是一个 resolve 上述返回结果的 `Promise`。

^^^

^^^upload
在 `request-mode` 的值是 `'custom'` 的情况下自定义上传过程，第一个参数为原生 [`File`](https://developer.mozilla.org/zh-CN/docs/Web/API/File) 对象，第二个参数为包含与上传过程相关的回调函数的对象，具体字段如下：

+++字段详情
| 字段 | 类型 | 描述 |
| -- | -- | -- |
| `onload` | `function` | 上传完成的回调函数，参数内容与 `convert-response` prop 返回值相同。 |
| `onprogress` | `function` | 上传进度发生变化的回调函数，参数为 `{ loaded: number, total: number }`，`loaded` 为已上传部分字节数，`total` 为文件总字节数。 |
| `oncancel` | `function` | 自定义上传主动取消时对组件进行的回调，无参数。 |
| `onerror` | `function` | 上传出错的回调函数，参数为 `{ message: string }`，`message` 为错误提示信息。 |

如果 `upload` 返回一个函数，该函数将在用户操作取消或上传组件销毁时被调用，用来中断自定义上传过程。
^^^

^^^controls
图片上传模式下，用来自定义配置图片遮罩浮层上的操作项，参数为 `(file: Object, defaultControls: Array<Object>)`，`file` 为文件相关信息，`defaultControls` 为包含默认的操作项的数组。可根据文件状态的不同，返回包含不同的操作项的数组。每个操作项的具体字段如下：

+++字段详情
| 字段 | 类型 | 描述 |
| -- | -- | -- |
| `name` | `string` | 操作项的名称，点击该按钮后会抛出同名的事件，事件的回调参数为 `(file: Object, index: number)`， `file` 为触发事件的文件对象，`index` 为文件在列表中的序号。 |
| `label` | `string` | 操作项的文字描述。 |
| `icon` | `string` | 操作项使用的图标。 |
| `disabled` | `boolean=` | 操作项是否被禁用。如果该字段为空，则该操作项的禁用状态跟随组件整体的禁用状态。 |
^^^

^^^entries
控制每个上传文件的操作项，如删除，预览等，会传递默认的操作项数组作为参数，返回实际生效的操作项数组。操作项对象参考 `controls` 属性的字段详情。
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `button-label` | [^button-label] |
| `upload` | 图片上传模式下，上传按钮的区域。 |
| `desc` | 对文件数量、格式、大小等的提示内容。 |
| `file` | [^file] |
| `file-before` | 单个文件内容之前的区域。作用域参数与 `file` 插槽相同。 |
| `file-after` | 单个文件内容之后的区域。作用域参数与 `file` 插槽相同。 |
| `uploading` | 图片上传模式下，上传中的单个图片的区域。作用域参数与 `file` 插槽相同。 |
| `failure` | 图片上传模式下，上传失败的单个图片的区域。作用域参数与 `file` 插槽相同。 |

^^^button-label
上传按钮里的内容。

默认内容：文件上传为提示选择文件，图片上传则为上传图片图标。
^^^

^^^file
单个文件的区域，用来定制文件内容。

+++作用域参数
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `name` | `string` | 文件的名称。 |
| `src` | `string` | 文件的地址。 |
| `status` | `string` | 文件的状态。`'success'` 表示上传成功；`'uploading'` 表示正在上传；`'failure'` 表示上传失败。 |
| `index` | `number` | 文件在列表中的序号。 |
+++
^^^

### 事件

| 名称 | 描述 |
| -- | -- |
| `change` | [^event-change] |
| `remove` | [^event-remove] |
| `success` | 上传成功时触发，回调参数与 `remove` 事件的回调参数相同。 |
| `failure` | 上传失败时触发，回调参数与 `remove` 事件的回调参数相同。 |
| `invalid` | [^event-invalid] |
| `statuschange` | [^event-statuschange] |
| `progress` | [^event-progress] |

^^^event-change
只在上传成功、删除文件时触发，回调参数为 `(value)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `value` | `Object|Array<Object>` | 组件的 `value` 的值。 |
+++
^^^

^^^event-remove
删除文件时触发，回调参数为 `(file, index)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `file` | `Object` | 被删除的文件。 |
| `index` | `number` | 被删除的文件的序号。 |

`file` 字段详情

| 字段 | 类型 | 描述 |
| -- | -- | -- |
| `name` | `string` | 文件名称。 |
| `src` | `string` | 文件地址。 |
| `status` | `string` | 上传状态。`'success'` 表示上传成功；`'uploading'` 表示正在上传；`'failure'` 表示上传失败。 |

同时也包含在 `convert-response` 中添加的自定义属性。
+++
^^^

^^^event-invalid
文件校验失败时触发，回调参数为 `(validity: Object)`。

+++参数字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `file` | `Object` | 没有通过校验的文件信息，与 `remove` 事件的回调参数中的 `file` 相同。如果校验失败的原因是选择的文件数量超过最大数量 `max-count` 限制，则这个字段为空。 |
| `errors` | `Array<Object>` | 包含该文件所有校验错误信息的数组，数组的每一项是包含校验失败信息的对象。 |
+++

+++校验失败信息字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `type` | `string` | 校验失败的类型，类型枚举值可从 `Uploader.errors` 对象获取，如 `Uploader.errors.SIZE_INVALID`。 |
| `value` | `number|string|Object` | 没有通过校验的值，根据 `type` 的不同有不同的类型。 |
| `message` | `string` | 检验失败的提示信息。 |
+++

+++校验失败类型与参数关系
| 类型 | 描述 | `value` 类型 | `value` 描述 |
| -- | -- | -- | -- |
| `TYPE_INVALID` | 文件类型校验失败。 | `string` | 文件名称。 |
| `SIZE_INVALID` | 文件大小校验失败。 | `number` | 文件大小字节数。 |
| `TOO_MANY_FILES` | 选择的文件数超过 `max-count` 限制。 | `number` | 已选择的文件数。 |
| `CUSTOM_INVALID` | `validator` 自定义校验失败。 | `Object` | 文件对象，字段同 `remove` 事件回调参数。 |
+++
^^^

^^^event-statuschange
在所有文件总的状态发生变化时触发，回调参数为组件整体的状态 `(status: string)`。

+++值详情
| 值 | 描述 |
| -- | -- |
| `empty` | 没有选择任何文件上传。 |
| `uploading` | 有任一文件正在上传中。 |
| `failure` | 有任一文件上传失败。 |
| `success` | 所有文件上传成功。 |
+++
^^^

^^^event-progress
在 `request-mode` 的值为 `'xhr'` 的情况下，在上传进度发生变化时触发，回调参数为 `(file, index, event)`。

+++参数详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `file` | `Object` | 与 `remove` 事件的回调参数中的 `file` 相同。 |
| `index` | `number` | 正在上传的文件的序号。 |
| `event` | [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/Events/progress) | 上传进度原生事件。 |
+++
^^^

### 全局配置

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `uploader.requestMode` | `string` | `'xhr'` | 参见 [`request-mode`](#props) 属性。 |
| `uploader.iframeMode` | `string` | `'postmessage'` | 参见 [`iframe-mode`](#props) 属性。 |
| `uploader.callbackNamespace` | `string` | `'veuiUploadResult'` | 参见 [`callback-namespace`](#props) 属性。 |
| `uploader.headers` | `Object` | - | 参见 [`headers`](#props) 属性。 |
| `uploader.convertResponse` | `function(Object): Object` | - | 参见 [`convert-response`](#props) 属性。 |
| `uploader.pickerPosition` | `string` | `'after'` | 参见 [`picker-position`](#props) 属性。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `upload` | 上传文件。 |
| `add-image` | 上传图片。 |
| `clear` | 删除。 |
| `success` | 上传成功。 |
| `failure` | 上传失败。 |
| `loading` | 上传中。 |
| `file` | 已上传文件。 |
| `alert` | 校验失败警告。 |
| `preview` | 预览图片。 |
