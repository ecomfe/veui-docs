# Field

:::tip
The `Field` component needs to be used in conjunction with the [`Form`](./form) and [`Fieldset`](./fieldset) components. One `Field` corresponds to one input component.
:::

## Examples

See [`Form` examples](./form#examples).

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``ui`` | `string` | - | [^ui] |
| ``readonly`` | `boolean` | `false` | Whether the internal input component is in read-only state. |
| ``disabled`` | `boolean` | `false` | Whether the internal input component is disabled. |
| ``label`` | `string` | - | Form item title. |
| ``tip`` | `string` | - | Form item floating layer prompt content. |
| ``name`` | `string` | - | Form item name, which can be used to specify the data field name or display error message location. |
| ``field`` | `string` | - | [^field] |
| ``rules`` | `string | Array<Object>` | - | [^rules] |
| ``help`` | `string` | - | Form item auxiliary text. |
| ``help-position`` | `'bottom' | 'side'` | `'side'` | [^help-position] |
| ``abstract`` | `boolean` | `false` | Abstract form item, abstract items have no title and will not display validation information. |
| ``withhold-validity`` | `boolean` | `false` | When set to `true`, the input components (such as `veui-input`) in the content of this form item will not automatically bind validation events or enter the `invalid` state, and the user can customize it through the `default` slot. |
| ``validity-display`` | `'normal' | 'simple'` | `'simple'` | [^validity-display] |
| ``required`` | `boolean` | `false` | Whether to display a star symbol indicating the necessity when there is no `required` rule. |

^^^ui
Predefined style.

+++Enum
| Value | Description |
| -- | -- |
| `xs` | Extra small size style. |
| `s` | Small size style. |
| `m` | Medium size style. |
| `l` | Large size style. |
+++
^^^

^^^message
Error message that can override the default rule error message.

If the type is `string`, `{ruleValue}` can be referenced with `{ruleValue}` and `value` can be referenced with `{value}`. For example:

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message: 'The character length cannot be less than {ruleValue}, current length {value}',
  priority: 100
}
```

If the type is `function`, the parameter is `(ruleValue: ?*=, value: *)`. For example:

```js
let minLengthRule = {
  validate (value, ruleValue) {
    return !isEmpty(value) ? val.length >= ruleValue : true
  },
  message (ruleValue, value) {
    return `The character length cannot be less than ${ruleValue}, current length ${value}`
  },
  priority: 100
}
```

:::tip
If you need to support multiple languages, `message` must use the `function` type.
:::
^^^

^^^rules
Validation rules for form items, which perform synchronous single-value validation. For the `Array` type, the item type is `{triggers, name, message, value, validate, priority}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `triggers` | `string` | A collection of event names that trigger validation, separated by commas, supports `<fieldName>:<eventName>` to indicate that the validation is triggered when the `fieldName` field triggers the `eventName` event, refer to the example [Inline Rule Validation](./form#inline-rule-validation). |
| `name` | `string` | Rule name. |
| `value` | `*` | The value that the rule should match. For boolean type rules, the default value is `true`. |
| `message` | `string | function` | [^message] |
| `priority` | `number` | The priority of the rule, which can override the default priority. |
| `validate` | `(value: unknown, ruleValue: unknown) => boolean` | An inline validator used to directly write validation logic, refer to the example [`Inline Rule Validation`](./form#inline-rule-validation). |
+++

+++Built-in rules
| Name | Type | Description |
| -- | -- | -- |
| `required` | `boolean` | The value cannot be a null value (`null` / `undefined` / `''` / `[]`). |
| `numeric` | `boolean` | The value must be describable as a decimal number.(`6` / `66.6` / `6e6` / `'6'` / `.6`) |
| `pattern` | `RegExp | string` | Regular expression matching. |
| `maxLength` | `number` | The value's `length` property cannot be greater than the limit. |
| `minLength` | `number` | The value's `length` property cannot be less than the limit. |
| `max` | `number` | The value cannot be greater than the limit. |
| `min` | `number` | The value cannot be less than the limit. |
+++

:::warning
For `string` type, the format is `rule1,rule2,...`, and only supports rules with `value` type of `boolean`.

Priority affects the error message displayed at the end. The error message stack will retain all rule error messages, but only the highest priority one will be displayed.

For custom `rules`, please refer to [Advanced › Custom Validation Rules](../advanced/custom-rules).
:::
^^^

^^^field
Optional, the default value is the value of the [`name`](#props-name) property. In special cases, it is used to specify the path of the form [`data`](./form#props-data) property corresponding to the field.

+++Examples
| Value | Description |
| -- | -- |
| `username` | Corresponds to the `username` property of the form [`data`](./form#props-data) attribute reference value, equivalent to `data.username`. |
| `users[0]` | Equivalent to `data.users[0]`. |
| `user.username` | Equivalent to `data.user.username`. |
+++
^^^

^^^help-position
The display position of the form item's auxiliary text.

+++Values
| Value | Description |
| -- | -- |
| `side` | The auxiliary text is displayed on the side of the form item. |
| `bottom` | The auxiliary text is displayed below the form item, before the validation message. |
+++
^^^

^^^validity-display
Whether the validation message of the form item is displayed with an icon.

+++Values
| Value | Description |
| -- | -- |
| `normal` | The validation message is displayed with an icon. |
| `simple` | The validation message is not displayed with an icon. |
+++
^^^

#### Slots

| Name | Description |
| -- | -- |
| ``default`` | Used by inline input components. Slot props include: `(listeners: object, invalid: boolean, validities: object, readonly: boolean, disabled: boolean)`, where `invalid` indicates whether the current form item has failed validation, `listeners` are event bindings for validation, and `validities` are validation messages. |
| ``label`` | Fills the content of the form item description. Defaults to the text value of the [`label`](#props-label) prop. |
| ``tip`` | Fills the content of the form item tooltip. Defaults to the text value of the [`tip`](#props-tip) prop. |
| ``help`` | Content of the form item's auxiliary text. Defaults to the text value of the [`help`](#props-help) prop. |

#### Icons

| Name | Description |
| -- | -- |
| ``tip`` | The icon that triggers the tooltip. |

#### Configs

| Option | Type | Default | Description |
| -- | -- | -- | -- |
| ``field.validityDisplay`` | `'normal' | 'simple'` | `'simple'` | See the [`validity-display`](#props-validity-display) prop. |

#### CSS

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``--dls-field-label-width`` | `<length>` | - | The width of the form item label. |
