# Field <small>表单项</small>

:::tip
`Field` 组件需要配合 [`Form`](./form) 及 [`Fieldset`](./fieldset) 组件使用。一个 `Field` 对应一个输入组件。
:::

## 示例

见 [`Form` 示例](./form#示例)。

## API

### 属性

| 名称 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| `ui` | `string=` | - | [^ui] |
| `readonly` | `boolean=` | `false` | 内部输入组件是否为只读状态。 |
| `disabled` | `boolean=` | `false` | 内部输入组件是否为禁用状态。 |
| `label` | `string` | - | 表单项描述。 |
| `tip` | `string` | - | 表单项提示。 |
| `name` | `string` | - | 表单项名称，可用于指定数据字段名或展示错误消息的定位。 |
| `field` | `string` | - | [^field] |
| `rules` | `string|Array<Object>` | - | [^rules] |

^^^ui
预设样式。

+++枚举值
| 值 | 描述 |
| -- | -- |
| `xs` | 超小尺寸样式。 |
| `s` | 小尺寸样式。 |
| `m` | 中尺寸样式。 |
| `l` | 大尺寸样式。 |
+++
^^^

^^^message
出错信息，可以覆盖规则默认出错信息。

若类型为 `string`，可以通过 `{ruleValue}` 引用 `ruleValue`、`{value}` 引用 `value`。例如：

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message: '字符长度不能短于 {ruleValue}，当前长度 {value}',
  priority: 100
}
```

若类型为 `function`，参数为 `(ruleValue: ?*=, value: *)`。例如：

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message (ruleValue, value) {
    return `字符长度不能短于${ruleValue}，当前长度${value}`
  },
  priority: 100
}
```

:::tip
如果需要支持多语言，`message` 必须使用 `function` 类型。
:::
^^^

^^^rules
表单项校验规则，同步的单值校验。对于 `Array` 类型，项目的类型为 `{triggers, name, message, value, priority}`。

+++字段详情
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `triggers` | `string` | 触发校验的事件名称集合，逗号分隔。 |
| `name` | `string` | 规则名称。 |
| `value` | `*` | 规则要匹配的值。`boolean` 类型的规则，默认为 `true`。 |
| `message` | `string|function` | [^message] |
| `priority` | `number` | 规则优先级，可以覆盖规则默认优先级。 |
+++

+++内置规则
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `required` | `boolean` | 值不能为空值（`null`/`undefined`/`''`/`[]`）。 |
| `numeric` | `boolean` | 值必须可描述十进制数值。(`6`/`66.6`/`6e6`/`'6'`/`.6`) |
| `pattern` | `RegExp|string` | 正则匹配。 |
| `maxLength` | `number` | 值的 `length` 属性不能大于限定值。 |
| `minLength` | `number` | 值的 `length` 属性不能小于限定值。 |
| `max` | `number` | 值不能大于限定值。 |
| `min` | `number` | 值不能小于限定值。 |
+++

:::warning
对于 `string` 类型，格式为 `rule1,rule2,...`，仅支持 `value` 类型为 `boolean` 的规则。

优先级会影响最后展示的出错信息，出错信息栈内会保留所有规则的错误提示，但仅展现优先级最高的那一个。

自定义 `rule` 请参考[高级 › 自定义校验规则](../advanced/custom-rules)。
:::
^^^

^^^field
非必须，默认取 `name` 属性值。在特殊情况下，用于指定表单 `data` 属性对应字段的路径。

+++格式示例
| 值 | 描述 |
| -- | -- |
| `username` | 对应表单 `data` 属性引用值的 `username` 属性，等价于 `data.username`。 |
| `users[0]` | 等价于 `data.users[0]`。 |
| `user.username` | 等价于 `data.user.username`。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| `default` | 用于内联输入组件。无默认内容。 |
| `label` | 填充表单项描述的内容。默认为 `label` 属性的文本值。 |
| `tip` | 填充表单项提示的内容。默认为 `tip` 属性的文本值。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| `alert` | 警示图标。 |
