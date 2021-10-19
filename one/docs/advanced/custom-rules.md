# 自定义校验规则

对于多值校验，[表单 › validators 属性](../components/form#props-validators)提供了比较完善的功能来实现自定义校验。对于单值校验，`Field` 组件内置了 7 种常见规则，具体参考[表单项 › rule 属性](../components/field#props-rule)。如果无法覆盖需求，`VEUI` 校验规则模块允许你添加自定义规则。

## 示例

```js
import ruleManager from 'veui/manager/rule'
ruleManager.addRule('range', {
  validate (value, ruleValue) {
    // 仅实现大小校验部分
    let range = value.split('-')
    return +range[0] >= ruleValue.floor && +range[1] <= ruleValue.ceil
  },
  message: '范围值必须在限定区间内',
  priority: 100
})
```

```vue
<template>
<veui-field
  :rules="[{
    triggers: 'change'
    name: 'range',
    value: {
      ceil: 100,
      floor: 50
    }
  }]"
  ...
>...</veui-field>
</template>
```

## API

| 名称 | 类型 | 描述 |
| -- | -- | -- |
| `validate` | `function(value: *, ruleValue: ?*=)` | 校验逻辑，`value` 为 `Field` 需要校验的值，`ruleValue` 可选，根据规则需要添加，表示规则的限定值。 |
| `message` | `function | string` | [^message] |
| `priority` | `number` | [^priority] |

^^^message
默认出错信息。

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
如果需要支持运行时切换语言，`message` 必须使用 `function` 类型。
:::
^^^

^^^priority
规则优先级。数值低优先级高。

+++目前内置的优先级
| 名称 | 优先级 |
| -- | -- | -- |
| `required` | `0` |
| `numeric` | `10` |
| `pattern` | `50` |
| `maxLength` | `100` |
| `minLength` | `100` |
| `max` | `200` |
| `min` | `200` |
+++
