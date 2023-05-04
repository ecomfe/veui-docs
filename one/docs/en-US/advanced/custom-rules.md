# Custom Validation Rules

For multi-value validation, the [`Form`](../components/form) component's [`validators`](../components/form#props-validators) prop provides comprehensive functionality to implement custom validation. For single-value validation, the `Field` component contains 7 built-in common rules, please refer to its [`rule`](../components/field#props-rule) prop. If those cannot meet your requirements, the `VEUI` validation rule module allows you to add custom rules.

## Examples

```js
import ruleManager from 'veui/managers/rule'
ruleManager.addRule('range', {
  validate (value, ruleValue) {
    // Only implement the range comparison part
    let range = value.split('-')
    return +range[0] >= ruleValue.floor && +range[1] <= ruleValue.ceil
  },
  message: 'The range value must be within the specified range.',
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

| Name | Type | Description |
| -- | -- | -- |
| `validate` | `function(value: *, ruleValue: ?*=)` | The validation logic. `value` is the value that the `Field` needs to validate, and `ruleValue` is optional and is added according to the rule, representing the limiting value of the rule. |
| `message` | `function | string` | [^message] |
| `priority` | `number` | [^priority] |

^^^message
The default error message.

If the type is `string`, you can reference `ruleValue` with `{ruleValue}` and `value` with `{value}`. For example:

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message: 'The character length cannot be shorter than {ruleValue}, the current length is {value}.',
  priority: 100
}
```

If the type is `function`, the parameters are `(ruleValue: ?*=, value: *)`. For example:

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message (ruleValue, value) {
    return `The character length cannot be less than ${ruleValue}, the current length is ${value}.`
  },
  priority: 100
}
```

:::tip
If you need to support runtime language switching, `message` must use the `function` type.
:::
^^^

^^^priority
The priority of the rule. Lower values have higher priority.

+++Built-in priorities
| Name | Priority |
| -- | -- | -- |
| `required` | `0` |
| `numeric` | `10` |
| `pattern` | `50` |
| `maxLength` | `100` |
| `minLength` | `100` |
| `max` | `200` |
| `min` | `200` |
+++
