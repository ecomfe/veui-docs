# Form

:::tip
The `Form` component needs to be used with the [`Fieldset`](./fieldset) and [`Field`](./field) components.
:::

## Examples

### Action buttons

Use the [`actions`](#slots-actions) slot to provide form action buttons.

[[ demo src="/demo/form/normal.vue" ]]

### Read-only

Set [`readonly`](#slots-readonly) to make the internal form items read-only.

[[ demo src="/demo/form/readonly.vue" ]]

### Disabled

Set [`disabled`](#slots-disabled) to disable the internal form items.

[[ demo src="/demo/form/disabled.vue" ]]

### Help text

[[ demo src="/demo/form/help.vue" ]]

### Rules

[[ demo src="/demo/form/rule.vue" ]]

### Inline rules

[[ demo src="/demo/form/inline-rule.vue" ]]

### Async validation

[[ demo src="/demo/form/validator.vue" ]]

### Before/after validation

[[ demo src="/demo/form/before-after.vue" ]]

### Abstract fields

[[ demo src="/demo/form/abstract.vue" ]]

### Native inputs

[[ demo src="/demo/form/withhold.vue" ]]

## API

### Props

| Name | Type | Default | Description |
| -- | -- | -- | -- |
| ``readonly`` | `boolean` | `false` | Whether the internal input component is in read-only state. |
| ``disabled`` | `boolean` | `false` | Whether the internal input component is disabled. |
| ``data`` | `Object` | - | [^data] |
| ``validators`` | `Array<Object>` | - | [^validators] |
| ``before-validate`` | `function` | - | Hook before the form enters the validation process, with parameters `(data)`, which is a copy of the form [`data`](#props-data) property value. Supports returning `Promise`, `true` or `undefined` for the return value or `Promise.resolve` indicates that the process continues, and other return values indicate interrupting the process and triggering the [`invalid`](#events-invalid) event.|
| ``after-validate`` | `function` | - | Hook triggered after the form is successfully validated and before the [`submit`](#events-submit) event is triggered, with parameters `(data)`, which is the same reference as the entry parameter in `beforeValidate`. Supports returning `Promise`, `true` or `undefined` for the return value or `Promise.resolve` indicates that the process continues, and other return values indicate interrupting the process and triggering the [`invalid`](#events-invalid) event.|

^^^data
Data bound to the form, bound to input components in the form through `v-model`, and is also the data source for form verification.

:::warning
If [`Field`](./field) is in the `disabled` state, the corresponding data key-value pairs will be filtered out when processing the `data` copy in the submission process, and the same applies to verification.
:::
^^^

^^^validators
Cross validators and async validator. The item type is `{fields, validate, triggers}`.

+++Properties
| Name | Type | Description |
| -- | -- | -- |
| `fields` | `Array` | A collection corresponding to the `field` description of `Field`. The event will be bound to the input component in the corresponding `Field`. |
| `validate` | `function` | Custom validation function, with `(data[fields[0]], data[fields[1]], ...)` as its parameter, where `data` refers to the value of the [`data`](#props-data) property of the form. Returns `undefined` / `true` for successful validation, and returns `{[field]: message, ...}` for failed validation messages. See [Form › Form validation logic](#form-validation-logic) for details. |
| `triggers` | `string | Array<string>` | Collection of event names, supporting `<fieldName>:<eventName>` to trigger validation when the `eventName` event occurs in the `fieldName` field. |
+++

+++Rules
| `fields` | `triggers` | Event binding |
| -- | -- | -- |
| `['a']` | `['change', 'blur,input,xxx', 'submit']` | a(change) |
| `['a','b','c']` | `['change', 'blur,input,xxx', 'submit']` | a(change), b(blur,input,xxx), c(submit) |
| `['a','b','c']` | `'blur'` | a(blur), b(submit), c(submit) |
| `['a','b','c']` | `'blur,input'` | a(blur,input), b(blur,input), c(blur,input) |
| `['a']` | `'blur,b:input'` | a(blur,b:input) |
+++
^^^

### Slots

| Name | Description |
| -- | -- |
| ``default`` | [^slot-default] |
| ``actions`` | Form operation content, such as "Submit" and "Cancel" buttons. There is no default content. The slot parameter is the same as the [`default`](#slots-default) slot. |

^^^slot-default
Can be directly inlined with [`Fieldset`](./fieldset) or [`Field`](./field) components. There is no default content.

+++Slot props
| Name | Type | Description |
| -- | -- | -- |
| `submit` | `() => void` | Trigger the form submission. |
| `validating` | `boolean` | Whether the form is currently being validated. |
+++
^^^

### Events

| Name | Description |
| -- | -- |
| ``submit`` | [^event-submit] |
| ``invalid`` | [^event-invalid] |

^^^event-submit
Triggered after the native `submit` event, with `(data, event)` as the callback parameters. For the specific submission process, please refer to [Form › Form submission process](#form-submission-process).

+++Parameters
| Name | Type | Description |
| -- | -- | -- |
| `data` | `Object` | A reference to the value of the [`data`](#props-data) property of the form. |
| `event` | `Event` | Native event object. |
+++
^^^

^^^event-invalid
Triggered when a process in the `beforeValidate`, `validate`, or `afterValidate` flow returns an interrupt, with the return value of the flow function as the parameter `(result)`, indicating the information about the interruption in the flow. The specific submission process is described in [Form › Form submission process](#form-submission-process), and the `validate` logic is described in [Form › Form validation logic](#form-validation-logic).
^^^

### Methods

| Name | Description |
| -- | -- |
| ``submit`` | [^method-submit] |
| ``validate`` | [^method-validate] |
| ``clearValidities`` | [^method-clearvalidities] |
| ``setValidities`` | [^method-setvalidities] |

^^^method-submit
Manually submit the form.

```ts
function submit(): void
```
^^^

^^^method-validate
Manually validate the form.

```ts
function validate(fieldNames?: Array<string> | null): Promise<true | Record<string, Object>>
```

Optional parameter `fieldNames` specifies the fields to validate.

Returns a `Promise`. Resolves to `true` if validation passes, and resolves to `Record<string, Object>` if validation fails, where the key is the name of the field with the error.
^^^

^^^method-clearvalidities
Manually clear the validation messages.

```ts
function clearValidities(fieldNames?: Array<string> | null): void
```

Optional parameter `fieldNames` specifies the fields to clear.
^^^

^^^method-setvalidities
Manually set the validation messages.

:::warning
This method does not override validation messages generated by `rules` and `validators`.
:::

```ts
type InputValidity = {
  status: 'success' | 'warning' | 'error'
  message: string
}

function setValidities(validities: Record<string, string | InputValidity>): void

// Example: add submission errors to the form
this.$refs.form.setValidities({
  name: 'name error',
  email: 'email error'
})
```
^^^

### Form submission

<img class="preview hero" src="/images/development/form/flow.png">

:::warning
The `beforeValidate` and `afterValidate` events, as well as the `data` operation in the [`submit`](#events-submit) event, are all copies of the `data` prop. Considering the consistency between validation information and UI data, the target data of `validate` is the source data of the `data` prop. Therefore, it is **not recommended** to modify the copy of `data` in `beforeValidate`.
:::

### Form validation

The form validation is divided into the `rule` validation of the `Field` and the validation of the `validators`.

1. The `rule` of the `Field` is a single-value synchronous validation. See [form item](./field) for details.
2. The `validators` can be multi-value asynchronous validation.

+++Example
```js
validators: [
  {
    fields: ['start', 'end'],
    validate (start, end) {
      if (start == null || end == null) {
        return true
      }

      if (parseInt(start, 10) >= parseInt(end, 10)) {
        return {
          start: 'The lower limit must be less than the upper limit'
        }
      }
      return true
    },
    triggers: ['change', 'submit,input']
  },
  {
    fields: ['phone'],
    validate (phone) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          let res
          if (phone === '18888888888') {
            res = {
              phone: 'This phone has been registered'
            }
          }
          return resolve(res)
        }, 3000)
      })
    },
    triggers: ['input']
  }
]
```
+++

#### Interaction validation

<img class="preview hero" src="/images/development/form/interaction.png">

#### Submission validation

<img class="preview hero" src="/images/development/form/submit.png">

During submission, the failure of one of the validation processes will not cause the entire validation to terminate. The validation information will be integrated after both processes are completed and passed to the [`invalid`](#events-invalid) event.
