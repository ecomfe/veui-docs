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
| ``ui`` | `string=` | - | [^ui] |
| ``readonly`` | `boolean=` | `false` | 内部输入组件是否为只读状态。 |
| ``disabled`` | `boolean=` | `false` | 内部输入组件是否为禁用状态。 |
| ``label`` | `string` | - | 表单项描述。 |
| ``tip`` | `string` | - | 表单项提示。 |
| ``name`` | `string` | - | 表单项名称，可用于指定数据字段名或展示错误消息的定位。 |
| ``field`` | `string` | - | [^field] |
| ``rules`` | `string | Array<Object>` | - | [^rules] |
| ``help`` | `string` | - | 表单项辅助文案。 |
| ``help-position`` | `'bottom' | 'side'` | `'side'` | [^help-position] |
| ``abstract`` | `boolean=` | `false` | 抽象表单项，抽象的项目没有标题，也不会展示校验信息。 |
| ``withhold-validity`` | `boolean=` | `false` | 当设置为 `true` 时，该表单项内容中的输入组件（如 `veui-input` ）不会自动绑定校验事件，也不会自动进入 `invalid` 状态，使用方可以通过 `default` 插槽来自行定制。 |
| ``validity-display`` | `'normal' | 'simple'` | `'simple'` | [^validity-display] |

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
| `message` | `string | function` | [^message] |
| `priority` | `number` | 规则优先级，可以覆盖规则默认优先级。 |
+++

+++内置规则
| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `required` | `boolean` | 值不能为空值（`null` / `undefined` / `''` / `[]`）。 |
| `numeric` | `boolean` | 值必须可描述十进制数值。(`6` / `66.6` / `6e6` / `'6'` / `.6`) |
| `pattern` | `RegExp | string` | 正则匹配。 |
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
非必须，默认取 [`name`](#props-name) 属性值。在特殊情况下，用于指定表单 [`data`](./form#props-data) 属性对应字段的路径。

+++格式示例
| 值 | 描述 |
| -- | -- |
| `username` | 对应表单 [`data`](./form#props-data) 属性引用值的 `username` 属性，等价于 `data.username`。 |
| `users[0]` | 等价于 `data.users[0]`。 |
| `user.username` | 等价于 `data.user.username`。 |
+++
^^^

^^^help-position
表单项辅助文案的展示位置。

+++辅助文案位置
| 值 | 描述 |
| -- | -- |
| `side` | 辅助文案展示在表单项内的侧边。 |
| `bottom` | 辅助文案展示在表单项内的下方，在校验信息之前。 |
+++
^^^

^^^validity-display
表单项的校验信息是否展示图标。

+++详情说明
| 值 | 描述 |
| -- | -- |
| `normal` | 校验信息展示图标。 |
| `simple` | 校验信息不展示图标。 |
+++
^^^

### 插槽

| 名称 | 描述 |
| -- | -- |
| ``default`` | 用于内联输入组件。作用域参数为 `(listeners: object, invalid: boolean, validities: object, readonly: boolean, disabled: boolean)`，其中 `invalid` 是当前表单项是否校验出错误，`listeners` 是校验时机的事件绑定，`validities` 是校验信息。 |
| ``label`` | 填充表单项描述的内容。默认为 [`label`](#props-label) 属性的文本值。 |
| ``tip`` | 填充表单项提示的内容。默认为 [`tip`](#props-tip) 属性的文本值。 |
| ``help`` | 表单项辅助文本内容。默认为 [`help`](#props-help) 属性的文本值。 |

### 图标

| 名称 | 描述 |
| -- | -- |
| ``alert`` | 警示图标。 |

### 全局配置

| 配置项 | 类型 | 默认值 | 描述 |
| -- | -- | -- | -- |
| ``field.validityDisplay`` | `'normal' | 'simple'` | `'simple'` | 见 [`validity-display`](#props-validity-display) 属性。 |
